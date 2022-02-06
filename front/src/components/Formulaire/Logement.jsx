import React, { Component } from "react";
import axios from "axios";

import authHeader from "./../../services/auth-header";

import PostDataService from "./../../services/post.service";
import AuthService from "./../../services/auth.service";
import UserService from "./../../services/user.service";
import EventBus from "./../../common/EventBus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";

export default class Logement2 extends Component {
  constructor(props) {
    super(props);

    this.onChangemois = this.onChangemois.bind(this);
    this.onChangeQ1 = this.onChangeQ1.bind(this);
    this.onChangeQ2_1 = this.onChangeQ2_1.bind(this);
    this.onChangeQ2_2 = this.onChangeQ2_2.bind(this);
    this.onChangeQ2_3 = this.onChangeQ2_3.bind(this);
    this.saveDonnee = this.saveDonnee.bind(this);
    this.newDonnee = this.newDonnee.bind(this);

    this.onClickQ2_1 = this.onClickQ2_1.bind(this);
    this.onClickQ2_2 = this.onClickQ2_2.bind(this);
    this.onClickQ2_3 = this.onClickQ2_3.bind(this);

    this.state = {
      id: null,
      valData: [],
      mois: "",
      categorie: "Logement",
      moisUser: "",
      valeur: 0,
      Logement_question_1: null,
      Logement_question_2_1: "",
      Logement_question_2_2: "",
      Logement_question_2_3: "",

      Q1: null,
      Q2_1: true,
      Q2_2: true,
      Q2_3: true,

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

    axios
      .get(
        `http://localhost:8080/api/posts/logement/${currentUser.prenom}/logement`,
        { headers: authHeader() }
      )

      .then((res) => {
        const valData = res.data;
        const valeur2 = res.data;
        this.setState({ valData, valeur2 });
        console.log(valData);
        return JSON.stringify(valData);
      });

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

  onChangeQ2_1(e) {
    // const Q2value =  Number(e.target.value);
    this.setState({
      Q2_1: !e.target.checked,
    });
  }
  onClickQ2_1(e) {
    const Q2_1 = this.state.Q2_1;
    
    if (Q2_1 === true) {
      this.setState({
        Logement_question_2_1: e.target.value,
      });
    } else {
      this.setState({
        Logement_question_2_3: ""
      })
    }
  }
  onClickQ2_2(e) {    
    const Q2_2 = this.state.Q2_2;
    
    if (Q2_2 === true) {
      this.setState({
        Logement_question_2_2: e.target.value,
      });
    } else {
      this.setState({
        Logement_question_2_3: ""
      })
    }
  }
  onClickQ2_3(e) {    
    const Q2_3 = this.state.Q2_3;
    
    if (Q2_3 === true) {
      this.setState({
        Logement_question_2_3: e.target.value,
      });
    } else {
      this.setState({
        Logement_question_2_3: ""
      })
    }
  }

  onChangeQ2_2(e) {
    // const Q2value =  Number(e.target.value);
    this.setState({
      Q2_2:!e.target.checked,
    });
  }
  onChangeQ2_3(e) {
    // const Q2value =  Number(e.target.value);
    this.setState({
      Q2_3:!e.target.checked,
    });
  }

  saveDonnee() {
    const user = { ...this.state.currentUser };
    const add = Number(this.state.Q1);
    var data = {
      mois: this.state.mois,
      Logement_question_1: this.state.Q1,
      Logement_question_2_1: this.state.Logement_question_2_1,
      Logement_question_2_2: this.state.Logement_question_2_2,
      Logement_question_2_3: this.state.Logement_question_2_3,
      total: add,
      userId: user.prenom,
      categorie: this.state.categorie,
      published: this.state.published,
    };
    console.log(data);
    PostDataService.createLogement(data)
      .then((response) => {
        this.setState({
          userId: response.data.userId,
          mois: response.data.mois,
          Logement_question_1: response.data.Logement_question_1,
          Logement_question_2_1: response.data.Logement_question_2_1,
          Logement_question_2_2: response.data.Logement_question_2_2,
          Logement_question_2_3: response.data.Logement_question_2_3,
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
      categorie: "Logement",
      moisUser: "",
      currentUser: { prenom: "", nom: "" },
      submitted: false,
      published: false,
    });
  }
  render() {
    const { valData } = this.state;
    const dataVal = valData.map(
      (Logement_question_2_1, index) => {
        if (valData.length - 1 === index ) {console.log(`${Logement_question_2_1.Logement_question_2_1}`);
      return `${Logement_question_2_1.Logement_question_2_1}`}}
    );
    const dataVal2 = valData.map(
      (Logement_question_2_2, index) => {
        if (valData.length - 1 === index ) {console.log(`${Logement_question_2_2.Logement_question_2_2}`);
      return `${Logement_question_2_2.Logement_question_2_2}`}}
    );
    const dataVal3 = valData.map(
      (Logement_question_2_3, index) => {
        if (valData.length - 1 === index ) {console.log(`${Logement_question_2_3.Logement_question_2_3}`);
      return `${Logement_question_2_3.Logement_question_2_3}`}}
    );
    
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
          <h2>Logement</h2>
          <div className="d-flex  d-none d-md-block">
            <FontAwesomeIcon icon="home" size="2x" id="icones" />
          </div>
        </div>
        <div className="row" style={{ marginBottom: "2%" }}>
          <div className="col-4">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>
                  12. Parmi les affirmations suivantes, laquelle correspond le
                  mieux à votre situation ?
                </strong>
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
                  value={this.state.Q1}
                  onChange={this.onChangeQ1}
                >
                  <option>Choisissez une réponse :</option>
                  <option value="1">Je n'ai pas de logement</option>
                  <option value="2">J'habite chez mes parents</option>
                  <option value="3">
                    J'habite chez un membre de ma famille
                  </option>
                  <option value="4">J'habite chez des amis</option>
                  <option value="5">J'habite en foyer</option>
                  <option value="6">
                    J'ai un logement à moi (co-location, co-propriété, avec des
                    amis, avec un conjoint
                  </option>
                  {/* <option value="autre">Autre</option> */}
                </select>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="section-checkbox" style={{ marginTop: "2%" }}>
              <p>
                <strong>
                  13. Parmi les informations suivantes, je choisi celles qui
                  correspondent le mieux à mes besoins.
                </strong>
              </p>
              <p
                style={{
                  color: "#343434",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Plusieures réponses possibles.
              </p>
              <div
                className="checkboxBloc"
                style={{ padding: "0 0 0 5%" }}
                value={this.state.Q2}
                onChange={this.onChangeQ2}
              >
                <div className="row">
                  {/* <div className="col-12 col-sm-12">
                    <Form.Check
                     value={this.state.Q2}
                  onChange={this.onChangeQ2}
                      type="checkbox"
                      label="J'ai besoin d'informations sur l'accès au logement, (à qui s'adresser, quels organismes proposent des logements, quel type de logement...)"
                    />
                  </div>
                   */}
                  <div className="col-12 col-sm-12">
                    <Form.Check
                      checked={!this.state.Q2_1}
                      value="J'ai besoin d'informations sur l'accès au logement, (à qui s'adresser, quels organismes proposent des logements, quel type de logement...)"
                      onChange={this.onChangeQ2_1}
                      onClick={this.onClickQ2_1}
                      type="checkbox"
                      label="J'ai besoin d'informations sur l'accès au logement, (à qui s'adresser, quels organismes proposent des logements, quel type de logement...)"
                    />
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12">
                    <Form.Check
                    checked={!this.state.Q2_2}
                      value="J'ai besoin d'informations sur les aides financières liées au logement."
                      onChange={this.onChangeQ2_2}
                      onClick={this.onClickQ2_2}
                      type="checkbox"
                      label="J'ai besoin d'informations sur les aides financières liées au logement."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12">
                    <Form.Check
                    checked={!this.state.Q2_3}
                      value="J'ai besoin d'informations pour comprendre les règles de base liées au logement (les cautions, les assurances, les droits et devoirs du locataire et du propriétaire, etc.)"
                      onChange={this.onChangeQ2_3}
                      onClick={this.onClickQ2_3}
                      type="checkbox"
                      label="J'ai besoin d'informations pour comprendre les règles de base liées au logement (les cautions, les assurances, les droits et devoirs du locataire et du propriétaire, etc.)"
                    />
                  </div>
                </div>
                
              </div>
            </div>
          </div><div className="orange" style={{padding:'2%'}}><strong>Les dernières entrées sont : </strong><p>{dataVal}</p><p>{dataVal2}</p><p>{dataVal3}</p></div>
        </div>
        <button
          onClick={this.saveDonnee}
          className="btn btn-success col-8 offset-2"
        >
          Envoyer
        </button>
        {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      </div>
    );
  }
}
