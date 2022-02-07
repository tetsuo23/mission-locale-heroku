import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import BoardReferent from "./components/board-referent";
import BoardAdmin from "./components/board-admin.component";
import BoardBeneficiaire from "./components/board-beneficiaire";
import Mobilite from "./components/categorieMobilite";
import Finance from "./components/categorieFinance";
import Logement from "./components/categorieLogement";
import Sante from "./components/categorieSante";
import Citoyennete from "./components/categorieCitoyennete";
import Emploi from "./components/categorieEmploi";
import PremierForm from "./components/PremierForm";
import referentBeneficiaire from "./components/referentBeneficiaire";

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";

import logo from "./assets/logo-inversé.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowLeft,
  faHome,
  faCar,
  faEuroSign,
  faWrench,
  faGraduationCap,
  faHeart,
  faHandshake,
  faSwimmer,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fas,
  faArrowLeft,
  faHome,
  faCar,
  faEuroSign,
  faWrench,
  faGraduationCap,
  faHeart,
  faHandshake,
  faSwimmer
);

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showBeneficiaireBoard: false,
      showReferentBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showReferentBoard: user.roles.includes("REFERENT"),
        showAdminBoard: user.roles.includes("ADMIN"),
        showBeneficiaireBoard: user.roles.includes("BENEFICIAIRE"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showBeneficiaireBoard: false,
      showReferentBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const {
      currentUser,
      showReferentBoard,
      showAdminBoard,
      showBeneficiaireBoard,
    } = this.state;

    return (
      <div style={{ marginTop: "7vh" }}>
        {showReferentBoard ? (
          <Navbar
            className="vert d-flex justify-content-start"
            expand="lg"
            fixed="top"
          >
            <div className=" col-md-1 col-xl-1  d-none d-md-block ">
              <img
                fluid="true"
                src={logo}
                alt="logo missions locales"
                style={{ width: "6vw", minWidth: "70px" }}
                className=""
              />
            </div>

            <div className="col-8 col-sm-8 col-md-9 col-lg-6 col-xl-7 d-flex justify-content-center justify-content-xs-center">
              <h2>Plateforme garantie jeune</h2>
            </div>

            <div className="col-1 col-md-1 col-lg-6 col-xl-4 justify-content-start">
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-start"
              >
                <Nav className="me-auto">
                  <ul className="navbar-nav mr-auto">
                    {currentUser ? (
                      <div className="navbar-nav ml-auto d-flex ">
                        {showReferentBoard && (
                          <button
                            className="button"
                            style={{ minWidth: "10vw", maxWidth: "20vw" }}
                          >
                            <Link
                              to={`/${this.state.currentUser.prenom}/referent`}
                              className="button"
                            >
                              Tableau de bord
                            </Link>
                          </button>
                        )}
                        <button className="button">
                          <Link to={"/"}>Accueil</Link>
                        </button>
                        <button className="button">
                          <Link
                            to={`/${this.state.currentUser.prenom}/profile`}
                          >
                            Profil
                          </Link>
                        </button>
                        <button className="button">
                          <a href="/login" onClick={this.logOut}>
                            Deconnexion
                          </a>
                        </button>
                      </div>
                    ) : (
                      <div className="navbar-nav ml-auto">
                        <button className="button">
                          <Link to={"/login"} className="button">
                            Connexion
                          </Link>
                        </button>

                        <button className="button">
                          <Link to={"/register"} className="button">
                            Inscription
                          </Link>
                        </button>
                      </div>
                    )}
                  </ul>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        ) : (
          <Navbar className="bleu d-flex justify-content-start " expand="lg" fixed="top">
            <div className=" col-md-1 col-xl-1  d-none d-md-block ">
              <img
                fluid="true"
                src={logo}
                alt="logo missions locales"
                style={{ width: "6vw", minWidth: "70px" }}
                className=""
              />
            </div>
            <div className="col-8 col-sm-8 col-md-9 col-lg-6 col-xl-7 d-flex justify-content-center justify-content-xs-center">
              <h2>Plateforme garantie jeune</h2>
            </div>
            <div className="col-1 col-md-1 col-lg-6 col-xl-4 justify-content-start">
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
                <Nav className="me-auto">
                  <ul className="navbar-nav mr-auto">
                    {currentUser ? (
                      <div className="navbar-nav ml-auto d-flex ">
                        {showBeneficiaireBoard && (
                          <button
                            className="button"
                            style={{ minWidth: "10vw" }}
                          >
                            <Link
                              to={`/${this.state.currentUser.prenom}/beneficiaire`}
                              className="button"
                            >
                              Tableau de bord
                            </Link>
                          </button>
                        )}

                        {showAdminBoard && (
                          <button
                            className="button"
                            style={{ minWidth: "10vw" }}
                          >
                            <Link to={"/admin"} className="button">
                              Tableau de bord
                            </Link>
                          </button>
                        )}
                        <button className="button">
                          <Link to={"/"}>Accueil</Link>
                        </button>
                        <button className="button">
                          <Link
                            to={`/${this.state.currentUser.prenom}/profile`}
                          >
                            Profil
                          </Link>
                        </button>
                        <button className="button">
                          <a href="/login" onClick={this.logOut}>
                            Deconnexion
                          </a>
                        </button>
                      </div>
                    ) : (
                      <div className="navbar-nav ml-auto">
                        <button className="button">
                          <Link to={"/login"} className="button">
                            Connexion
                          </Link>
                        </button>

                        <button className="button">
                          <Link to={"/register"} className="button">
                            Inscription
                          </Link>
                        </button>
                      </div>
                    )}
                  </ul>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        )}

        <div className="">
          <Switch>
            <Route exact path={["/", "/home"]} component={Login} />
            <Route
              path="/:prenom/:prenom/referent/:beneficiaire"
              component={referentBeneficiaire}
            />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/:prenom/profile" component={Profile} />
            <Route path="/:prenom/premier-formulaire" component={PremierForm} />
            <Route path="/:prenom/referent" component={BoardReferent} />

            <Route path="/admin" component={BoardAdmin} />
            <Route path="/:prenom/beneficiaire" component={BoardBeneficiaire} />
            <Route path="/:prenom/mobilite" component={Mobilite} />
            <Route path="/:prenom/finance" component={Finance} />
            <Route path="/:prenom/emploi" component={Emploi} />
            <Route path="/:prenom/sante" component={Sante} />
            <Route path="/:prenom/citoyennete" component={Citoyennete} />
            <Route path="/:prenom/logement" component={Logement} />
          </Switch>
        </div>

        {/*<AuthVerify logOut={this.logOut}/> */}
      </div>
    );
  }
}

export default App;
