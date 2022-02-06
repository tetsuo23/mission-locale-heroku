import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import AuthService from "../services/auth.service";

import NavBeneficiaire from "./NavBeneficiaire";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class BoardBeneficiaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      currentUser: { prenom: "", nom: "" },
      cat: "",
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    this.setState({ currentUser: currentUser });
    UserService.getUserBoard().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString(),
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  handleChangeCat(e) {
    const cat = e.target.value;
    this.setState({ cat });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="row d-flex justify-content-center">
        <div className="col-1">
          <NavBeneficiaire />
        </div>
        <div className="container conteneur col-12 col-xl-11">
          <h2>
            Bienvenue{" "}
            <strong>
              {currentUser.nom}
            </strong>{" "}
          </h2>
          <div
            className="row d-flex justify-content-between"
            style={{ padding: "2% 10%" }}
          >
            <div
              className="col-12 col-md-5 col-lg-3 d-flex align-items-center justify-content-center categories orange"
              style={{ margin: "10px" }}
              value="mobilité"
              onClick={this.newCategorie}
            >
              <div className="" style={{ padding: "10%" }}>
                <Link
                  to={`/${this.state.currentUser.prenom}/mobilite`}
                  style={{ textDecoration: "none" }}
                  mobilite="mobilité"
                >
                  <div className="col-12 d-flex justify-content-center">
                    <h3>Mobilité</h3>
                  </div>
                </Link>
                <Link
                  to={`/${this.state.currentUser.prenom}/mobilite`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="col-12 d-none d-md-block">
                    <div className="d-flex justify-content-center">
                      <FontAwesomeIcon
                        icon="car"
                         size='3x'
                        className="icones"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="col-12 col-md-5 col-lg-3 d-flex align-items-center justify-content-center categories violet"
              style={{ margin: "10px" }}
            >
              <div className="" style={{ padding: "10%" }}>
                <Link
                  to={`/${this.state.currentUser.prenom}/logement`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="col-12 d-flex justify-content-center">
                    <h3>Logement</h3>
                  </div>
                </Link>
                <Link
                  to={`/${this.state.currentUser.prenom}/logement`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="col-12 d-none d-md-block">
                    <div className="d-flex justify-content-center">
                      <FontAwesomeIcon
                        icon="home"
                        size='3x'
                        className="icones"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="col-12 col-md-5 col-lg-3 d-flex align-items-center justify-content-center categories vert"
              style={{ margin: "10px" }}
            >
              <div className="" style={{ padding: "10%" }}>
                <Link
                  to={`/${this.state.currentUser.prenom}/finance`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="col-12 d-flex justify-content-center">
                    <h3>Finance</h3>
                  </div>
                </Link>
                <Link
                  to={`/${this.state.currentUser.prenom}/finance`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="col-12 d-none d-md-block">
                    <div className="d-flex justify-content-center">
                      <FontAwesomeIcon
                        icon="euro-sign"
                        size='3x'
                        className="icones"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="col-12 col-md-5 col-lg-3 d-flex align-items-center justify-content-center categories bleu"
              style={{ margin: "10px" }}
            >
              <div className="" style={{ padding: "10%" }}>
                <Link
                  to={`/${this.state.currentUser.prenom}/emploi`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="col-12 d-flex justify-content-center">
                    <h3>
                      Formation <br /> Emploi
                    </h3>
                  </div>
                </Link>
                <Link
                  to={`/${this.state.currentUser.prenom}/emploi`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="col-12 d-none d-md-block">
                    <div className="d-flex justify-content-center">
                      <FontAwesomeIcon
                        icon="wrench"
                        size='3x'
                        className="icones"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="col-12 col-md-5 col-lg-3 d-flex align-items-center justify-content-center categories jaune"
              style={{ margin: "10px" }}
            >
              <div className="" style={{ padding: "10%" }}>
                <Link
                  to={`/${this.state.currentUser.prenom}/citoyennete`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="col-12 d-flex justify-content-center">
                    <h3>Citoyenneté</h3>
                  </div>
                </Link>
                <Link
                  to={`/${this.state.currentUser.prenom}/citoyennete`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="col-12 d-none d-md-block">
                    <div className="d-flex justify-content-center">
                      <FontAwesomeIcon
                        icon="handshake"
                        size='3x'
                        className="icones"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="col-12 col-md-5 col-lg-3 d-flex align-items-center justify-content-center categories rose"
              style={{ margin: "10px" }}
            >
              <div className="" style={{ padding: "10%" }}>
                <Link to={`/${this.state.currentUser.prenom}/sante`} style={{ textDecoration: "none" }}>
                  <div className="col-12 d-flex justify-content-center">
                    <h3>Santé</h3>
                  </div>
                </Link>
                <Link
                  to={`/${this.state.currentUser.prenom}/sante`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="col-12 d-none d-md-block">
                    <div className="d-flex justify-content-center">
                      <FontAwesomeIcon
                        icon="heart"
                        size='3x'
                        className="icones"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardBeneficiaire;
