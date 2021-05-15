import { useContext, useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { NavDropdown } from "react-bootstrap";

import LoginForm from "./Forms/LoginForm";
import RegisterForm from "./Forms/RegisterForm";
import FormModal from "./Modal/FormModal";

const Navbar = () => {
  const [state, dispatch] = useContext(UserContext);

  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);
  const isLogin = location?.state && location?.state?.isLogin;
  const [showRegister, setShowRegister] = useState(false);
  const router = useHistory();

  useEffect(() => {
    if (!state.isLogin) {
      setShowLogin(true);
    }
    return () => {
      setShowLogin(false);
      setShowRegister(false);
    };
  }, [state.isLogin, isLogin]);

  const handleOpenModalRegister = () => {
    setShowRegister(true);
  };
  const handleCloseModalRegister = () => {
    setShowRegister(false);
  };

  const handleOpenModalLogin = () => {
    setShowLogin(true);
  };
  const handleCloseModalLogin = () => {
    setShowLogin(false);
  };

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  const switchToRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const switchToLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  return (
    <div>
      <div className="navbar-container">
        <Link to="/">
          <img src="/Icon.svg" alt="icon-holyways" className="icon" />
        </Link>
        <div className="button-login-register">
          {!state.isLogin ? (
            <>
              {" "}
              <button onClick={handleOpenModalLogin} className="btn-login">
                Login
              </button>{" "}
              <button
                onClick={handleOpenModalRegister}
                className="btn-register"
              >
                Register
              </button>
            </>
          ) : (
            <NavDropdown id="basic-nav-dropdown" style={{}}>
              <div className="drop-container">
                <NavDropdown.Item
                  className="dropdown-item"
                  href="#action/3.1"
                  onClick={() => router.push("/profile")}
                >
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <img
                      src="/user-icon.svg"
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "10px",
                      }}
                    />
                    <div>Profile</div>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="dropdown-item"
                  href="#action/3.2"
                  onClick={() => router.push("/raisefund")}
                >
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <img
                      src="/fund-icon.svg"
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "10px",
                      }}
                    />
                    <div>Raise Fund</div>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className="dropdown-item"
                  href="#action/3.4"
                  onClick={handleLogout}
                >
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <img
                      src="/logout-icon.svg"
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "10px",
                      }}
                    />
                    <div className="modal-logout-link">Logout</div>
                  </div>
                </NavDropdown.Item>
              </div>
            </NavDropdown>
          )}
        </div>
      </div>
      <FormModal
        title="login"
        show={showLogin}
        handleClose={handleCloseModalLogin}
      >
        <LoginForm switcher={switchToRegister} />
      </FormModal>
      <FormModal
        title="register"
        show={showRegister}
        handleClose={handleCloseModalRegister}
      >
        <RegisterForm switcher={switchToLogin} />
      </FormModal>
    </div>
  );
};

export default Navbar;
