import React, { useState } from "react";
import { toast } from "react-toastify";
import { db, storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDescription, setEnterShortDescription] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterProductImage, setEnterProductImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addProducts = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Add Product to the Firestore Database
    try {
      const docRef = await collection(db, "products");
      const storageRef = ref(
        storage,
        `productImages/${Date.Now() + enterProductImage.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, enterProductImage);
      uploadTask.on(
        () => {
          toast.error("Images not uploaded!");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              productName: enterTitle,
              shortDescription: enterShortDescription,
              description: enterDescription,
              category: enterCategory,
              price: enterPrice,
              imageURL: downloadURL,
            });
          });
        }
      );
      setLoading(false);
      toast.success("Product added successfully!");
      navigate("/dashboard/all-products");
    } catch (error) {
      setLoading(false);
      toast.error("Product not added!");
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {loading ? (
              <h4 className="py-5">Loading...</h4>
            ) : (
              <>
                <h4 className="mb-5">Add Product</h4>
                <Form onSubmit={addProducts}>
                  <FormGroup className="form-group">
                    <span>Product Title</span>
                    <input
                      type="text"
                      placeholder="Product Title"
                      required
                      value={enterTitle}
                      onChange={(event) => setEnterTitle(event.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <span>Short Description</span>
                    <input
                      type="text"
                      placeholder="Short Description"
                      required
                      value={enterShortDescription}
                      onChange={(event) =>
                        setEnterShortDescription(event.target.value)
                      }
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <span>Description</span>
                    <input
                      type="text"
                      placeholder="Description"
                      required
                      value={enterDescription}
                      onChange={(event) =>
                        setEnterDescription(event.target.value)
                      }
                    />
                  </FormGroup>

                  <div className="d-flex align-items-center justify-content-between gap-5">
                    <FormGroup className="form-group w-50">
                      <span>Price</span>
                      <input
                        type="number"
                        placeholder="Price"
                        required
                        value={enterPrice}
                        onChange={(event) => setEnterPrice(event.target.value)}
                      />
                    </FormGroup>
                    <FormGroup className="form-group w-50">
                      <span>Category</span>
                      <select
                        className="w-100 p-2"
                        required
                        value={enterCategory}
                        onChange={(event) =>
                          setEnterCategory(event.target.value)
                        }
                      >
                        <option>Select Category</option>
                        <option value="sofa">Sofa</option>
                        <option value="chair">Chair</option>
                        <option value="sofa">Table</option>
                        <option value="chair">Bed</option>
                      </select>
                    </FormGroup>
                  </div>

                  <div>
                    <FormGroup className="form-group">
                      <span>Product Image</span>
                      <input
                        type="file"
                        required
                        onChange={(event) =>
                          setEnterProductImage(event.target.files[0])
                        }
                      />
                    </FormGroup>
                  </div>

                  <button type="submit" className="buy-btn">
                    Add Product
                  </button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
