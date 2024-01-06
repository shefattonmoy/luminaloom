import React from "react";
import { Container, Row } from "reactstrap";
import useAuth from "../customHooks/useAuth";
import { NavLink } from "react-router-dom";
import "../styles/AdminNavbar.css";

const adminNavbar = [
  {
    display: "Dashboard",
    path: "/dashboard",
  },
  {
    display: "All Products",
    path: "/dashboard/all-products",
  },
  {
    display: "Orders",
    path: "/dashboard/orders",
  },
  {
    display: "Users",
    path: "/dashboard/users",
  },
];

const AdminNavbar = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <header className="admin-header">
        <div className="admin-nav-top">
          <Container>
            <div className="admin-nav-wrapper-top">
              <div className="logo">
                <h2>LuminaLoom</h2>
              </div>
              <div className="search-bar">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
              <div className="admin-nav-top-right">
                <span>
                  <i class="ri-notification-3-line"></i>
                </span>
                <span>
                  <i class="ri-settings-2-line"></i>
                </span>
                <img src={currentUser.photoURL} alt="" />
              </div>
            </div>
          </Container>
        </div>
      </header>

      <section className="admin-menu p-0">
        <Container>
          <Row>
            <div className="admin-navigation">
              <ul className="admin-menu-list">
                {adminNavbar.map((item, index) => (
                  <li className="admin-menu-item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active-admin-menu" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminNavbar;
