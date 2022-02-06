import React, { Component } from "react";

import PostDataService from "./../../services/post.service";
import AuthService from "./../../services/auth.service";
import UserService from "./../../services/user.service";
import EventBus from "./../../common/EventBus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Mobilite2 extends Component {
  constructor(props) {
    super(props);

    this.onChangemois = this.onChangemois.bind(this);
    this.onChangeQ1 = this.onChangeQ1.bind(this);
    this.onChangeQ2 = this.onChangeQ2.bind(this);
    this.onChangeQ3 = this.onChangeQ3.bind(this);
    this.onChangeQ4 = this.onChangeQ4.bind(this);
    this.onChangeQ5 = this.onChangeQ5.bind(this);
    this.onChangeQ6 = this.onChangeQ6.bind(this);
    this.saveDonnee = this.saveDonnee.bind(this);
    this.newDonnee = this.newDonnee.bind(this);

    this.state = {
      id: null,
      mois: "",
      categorie: "Mobilité",
      moisUser: "",
      valeur: 0,
      Mobilite_question_1: null,
      Mobilite_question_2: null,
      Mobilite_question_3: null,
      Mobilite_question_4: null,
      Mobilite_question_5: null,
      Mobilite_question_6: null,

      Q1: null,
      Q2: null,
      Q3: null,
      Q4: null,
      Q5: null,
      Q6: null,

      currentUser: { prenom: "", nom: "" },
      submitted: false
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.prenom !== this.state.prenom) {
      this.onChangevaleur();
    }
  }

  onChangemois(e) {
    this.setState({
      moisUser: e.target.value,
    });
  }

  onChangeQ1(e) {
    this.setState({
      Q1: Number(e.target.value),
    });
  }
  onChangeQ2(e) {
    // const Q2value =  Number(e.target.value);
    this.setState({
      Q2: Number(e.target.value),
    });
  }
  onChangeQ3(e) {
    this.setState({
      Q3: Number(e.target.value),
    });
    
  }
  onChangeQ4(e) {
    this.setState({
      Q4: Number(e.target.value),
    });
    
  }
  onChangeQ5(e) {
    this.setState({
      Q5: Number(e.target.value),
    });
    
  }
  onChangeQ6(e) {
    this.setState({
      Q6: Number(e.target.value),
    });
    
  }

  saveDonnee() {
    const user = { ...this.state.currentUser };
    const add =
      Number(this.state.Q1) +
      Number(this.state.Q2) +
      Number(this.state.Q3) +
      Number(this.state.Q4) +
      Number(this.state.Q5) +
      Number(this.state.Q6);
    var data = {
      mois: this.state.mois,
      Mobilite_question_1: this.state.Q1,
      Mobilite_question_2: this.state.Q2,
      Mobilite_question_3: this.state.Q3,
      Mobilite_question_4: this.state.Q4,
      Mobilite_question_5: this.state.Q5,
      Mobilite_question_6: this.state.Q6,
      total: add,
      userId: user.prenom,
      categorie: this.state.categorie,
      published: this.state.published,
    };
    console.log(data);
    PostDataService.create(data)
      .then((response) => {
        this.setState({
          userId: response.data.userId,
          mois: response.data.mois,
          Mobilite_question_1: response.data.Mobilite_question_1,
          Mobilite_question_2: response.data.Mobilite_question_2,
          Mobilite_question_3: response.data.Mobilite_question_3,
          Mobilite_question_4: response.data.Mobilite_question_4,
          Mobilite_question_5: response.data.Mobilite_question_5,
          Mobilite_question_6: response.data.Mobilite_question_6,
          total: response.data.total,
          categorie: response.data.categorie,
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
      categorie: "Mobilité",
      moisUser: "",
      valeur: "",
      valeurdeux: 1,
      currentUser: { prenom: "", nom: "" },
      submitted: false,
      published: false,
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            borderBottom: "2px solid black",
            marginTop: "2%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2>Mobilité</h2>
          <div className="d-flex  d-none d-md-block">
            <FontAwesomeIcon icon="car" size="2x" id="icones" />
          </div>
        </div>
        <div className="row" style={{ marginBottom: "2%" }}>
          <div className="col-12 col-lg-4">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>1. Je fais le point sur le permis de conduire.</strong>
              </p>
              <p
                style={{
                  color: "#343434",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Une seule réponse possible.
              </p>
              <div className="input-group mb-3">
                <label htmlFor="mois"></label>
                <select
                  name="valeur"
                  className="form-control"
                  id="valeur"
                  value={this.state.Q1}
                  onChange={this.onChangeQ1}
                >
                  <option >Choisissez une réponse :</option>
                  <option value="1">Je n'ai aucun permis</option>
                  <option value="2">J'ai le permis AM</option>
                  <option value="3">J'ai le permis B</option>
                  <option value="4">J'ai le permis 4</option>
                  <option value="5">J'ai le permis 5</option>
                  <option value="6">J'ai le permis 6</option>
                </select>
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>2. Je n'ai aucun permis mais...</strong>
              </p>
              <p
                style={{
                  color: "#343434",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Une seule réponse possible.
              </p>

              <div className="input-group mb-3">
                <select
                  name="valeurdeux"
                  className="form-control"
                  id="valeurdeux"
                  value={this.state.Q2}
                  onChange={this.onChangeQ2}
                >
                                    <option >Choisissez une réponse :</option>
                  <option value="1">Je suis inscrit dans une auto-école</option>
                  <option value="2">
                    J'ai commencé les leçons de conduite
                  </option>
                  <option value="3">J'ai obtenu le code de la route</option>
                </select>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

          <div className="col-12 col-lg-4">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <span>
                <strong>3. Je peux me déplacer d'un point à un autre</strong>
              </span>
              <p style={{ fontSize: "0.8rem" }}>
                {" "}
                Par exemple me rendre à un rendez-vous, aller au travail, aller
                chez le médecin, etc ...
              </p>

              <p
                style={{
                  color: "#343434",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Une seule réponse possible.
              </p>

              <div className="input-group mb-3">
                <select
                  name="valeur"
                  className="form-control"
                  id="valeur"
                  value={this.state.Q3}
                  onChange={this.onChangeQ3}
                >
                  <option >Choisissez une réponse :</option>
                  <option value="1">Jamais</option>
                  <option value="2">Très difficilement</option>
                  <option value="3">difficilement</option>
                  <option value="4">Facilement</option>
                </select>
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <span>
                <strong>4. Je dispose d'un moyen de locomotion.</strong>
              </span>
              <p style={{ fontSize: "0.8rem" }}>
                {" "}
                Par exemple me rendre à un rendez-vous, aller au travail, aller
                chez le médecin, etc ...
              </p>

              <p
                style={{
                  color: "#343434",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Une seule réponse possible.
              </p>
              <div className="input-group mb-3">
                <select
                  name="valeur"
                  className="form-control"
                  id="valeur"
                  value={this.state.Q4}
                  onChange={this.onChangeQ4}
                >
                  <option >Choisissez une réponse :</option>
                  <option value="1">
                    Un membre de ma famille peut me conduire à mes rendez-vous.
                  </option>
                  <option value="2">J'utilise les transports en commun</option>
                  <option value="3">Je pratique le co-voiturage</option>
                  <option value="4">Je possède une voiture</option>
                  <option value="5">
                    Je possède un deux-roues (mobylette, scooter, moto...)
                  </option>
                  {/* <option value="autre">Autre</option> */}
                </select>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

          <div className="col-12 col-lg-4">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <span>
                <strong>5. Je suis mobile dans un rayon de :</strong>
              </span>
              <p style={{ fontSize: "0.8rem" }}>
                {" "}
                Je suis mobile pour un rendez-vous, un travail, un stage, une
                formation, un atelier...
              </p>

              <p
                style={{
                  color: "#343434",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Une seule réponse possible.
              </p>

              <div className="input-group mb-3">
                <select
                  name="valeur"
                  className="form-control"
                  id="valeur"
                  value={this.state.Q5}
                  onChange={this.onChangeQ5}
                >
                  <option >Choisissez une réponse :</option>
                  <option value="1">Je ne suis pas mobile</option>
                  <option value="2">Moins de 10 km</option>
                  <option value="3">De 10 à 20 km</option>
                  <option value="4">De 20 à 30 km</option>
                  <option value="5">De 30 à 50 km</option>
                  <option value="6">Au-delà de 50 km</option>
                </select>
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <span>
                  <strong>
                    6. J'ai des difficultés financières liées à mes déplacements
                  </strong>
                </span>
              </p>
              <p
                style={{
                  color: "#343434",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Une seule réponse possible.
              </p>
              <div className="input-group mb-3">
                <select
                  name="valeur"
                  className="form-control"
                  id="valeur"
                  value={this.state.Q6}
                  onChange={this.onChangeQ6}
                >
                  <option >Choisissez une réponse :</option>
                  <option value="1">Toujours</option>
                  <option value="2">Très fréquemment</option>
                  <option value="3">Fréquemment</option>
                  <option value="4">Occasionnellement</option>
                  <option value="5">Rarement</option>
                  <option value="6">Jamais</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={this.saveDonnee}
          className="btn btn-success col-8 offset-2"
        >
          Envoyer
        </button>
      </div>
    );
  }
}
