import React, { Component } from "react";
import NavBeneficiaire from "./NavBeneficiaire";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostDataService from "../services/post.service";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import ChartsLogement from "./charts-logement";
import Logement2 from "./Formulaire/Logement";
import Messagerie from "./Messagerie";

class Logement extends Component {
  constructor(props) {
    super(props);

    this.onChangemois = this.onChangemois.bind(this);
    this.onChangevaleur = this.onChangevaleur.bind(this);
    this.saveDonnee = this.saveDonnee.bind(this);
    this.newDonnee = this.newDonnee.bind(this);

    this.state = {
      id: null,
      mois: "",
      categorie: "Logement",
      moisUser: "",
      valeur: "1",
      currentUser: { prenom: "", nom: "" },
      submitted: false,
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
    let date = new Date();
    let longMonth = date.toLocaleString("fr-fr", { month: "long" });
    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({
      currentUser: currentUser,
      userReady: true,
      mois: longMonth,
    });
  }

  onChangemois(e) {
    this.setState({
      moisUser: e.target.value,
    });
  }

  onChangevaleur(e) {
    this.setState({
      valeur: e.target.value,
    });
  }

  handleChangeMonth = (e) => {
    const isShow = !this.state.isShow;
    // const mois = this.state.mois
    this.setState({ isShow, mois: e.target.value });
  };
  saveDonnee() {
    const user = { ...this.state.currentUser };
    var data = {
      mois: this.state.mois,
      valeur: this.state.valeur,
      userId: user.prenom,
      categorie: this.state.categorie,
    };

    PostDataService.create(data)
      .then((response) => {
        this.setState({
          userId: response.data.userId,
          mois: response.data.mois,
          valeur: response.data.valeur,
          published: response.data.published,
          categorie: response.data.categorieId,
          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newDonnee() {
    this.setState({
      id: null,
      mois: "",
      categorie: "Logement",
      moisUser: "",
      valeur: "",
      currentUser: { prenom: "", nom: "" },
      submitted: false,
    });
  }

  render() {
    const { currentUser } = this.state;
    
    return (
      <div style={{padding:'0 0 5% 0'}}>
        <div className="row">
          <div className=" col-1">
            <NavBeneficiaire />
          </div>
          <div
            className="container-fluid col-11"
            style={{ padding: "0 2% 0 2%" }}
          >
            <div
              className="col-6"
              style={{
                borderBottom: "2px solid black",
                marginTop: "2%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2>
                Catégorie {this.state.categorie} de {currentUser.nom}{" "}
                {currentUser.prenom}{" "}
              </h2>
              <div className="d-flex  d-none d-md-block">
                <FontAwesomeIcon icon="wrench" id="icones" />
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="col-12 col-sm-6 col-lg-8 ">
                <div
                  style={{
                    border: "1px solid black",
                    backgroundColor: "white",
                    margin: "2% 0 2% 0",
                  }}
                >
                  <ChartsLogement />
                </div>
              </div>
              <div className="col-12 col-lg-4">
                {" "}
                <Messagerie />
              </div>
            </div>
            <Logement2 />
          </div>
        </div>
      </div>
    );
  }
}

export default Logement;
