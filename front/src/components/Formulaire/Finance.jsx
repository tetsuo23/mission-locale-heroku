import React, { Component } from "react";

import PostDataService from "./../../services/post.service";
import AuthService from "./../../services/auth.service";
import UserService from "./../../services/user.service";
import EventBus from "./../../common/EventBus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";

export default class Finance2 extends Component {
  constructor(props) {
    super(props);

    this.onChangemois = this.onChangemois.bind(this);
    this.onChangeQ1 = this.onChangeQ1.bind(this);
    this.onChangeQ2 = this.onChangeQ2.bind(this);
    this.onChangeQ3_1 = this.onChangeQ3_1.bind(this);
    this.onChangeQ3_2 = this.onChangeQ3_2.bind(this);
    this.onChangeQ3_3 = this.onChangeQ3_3.bind(this);
    this.onChangeQ3_4 = this.onChangeQ3_4.bind(this);
    this.onChangeQ3_5 = this.onChangeQ3_5.bind(this);
    this.onChangeQ4_1 = this.onChangeQ4_1.bind(this);
    this.onChangeQ4_2 = this.onChangeQ4_2.bind(this);
    this.onChangeQ4_3 = this.onChangeQ4_3.bind(this);
    this.onChangeQ4_4 = this.onChangeQ4_4.bind(this);

    this.saveDonnee = this.saveDonnee.bind(this);
    this.newDonnee = this.newDonnee.bind(this);

    this.state = {
      id: null,
      mois: "",
      categorie: "Finance",
      moisUser: "",
      valeur: 0,
      Mobilite_question_1: null,
      Mobilite_question_2: null,
      Mobilite_question_3_1: null,
      Mobilite_question_3_2: null,
      Mobilite_question_3_3: null,
      Mobilite_question_3_4: null,
      Mobilite_question_3_5: null,
      Mobilite_question_4_1: null,
      Mobilite_question_4_2: null,
      Mobilite_question_4_3: null,
      Mobilite_question_4_4: null,
      Q1:   null,
      Q2:   null,
      Q3_1: null,
      Q3_2: null,
      Q3_3: null,
      Q3_4: null,
      Q3_5: null,
      Q4_1: null,
      Q4_2: null,
      Q4_3: null,
      Q4_4: null,

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
  onChangeQ3_1(e) {
    this.setState({
      Q3_1: Number(e.target.value),
    });
  }
  onChangeQ3_2(e) {
    this.setState({
      Q3_2: Number(e.target.value),
    });
  }
  onChangeQ3_3(e) {
    this.setState({
      Q3_3: Number(e.target.value),
    });
  }
  onChangeQ3_4(e) {
    this.setState({
      Q3_4: Number(e.target.value),
    });
  }
  onChangeQ3_5(e) {
    this.setState({
      Q3_5: Number(e.target.value),
    });
  }
  onChangeQ4_1(e) {
    this.setState({
      Q4_1: Number(e.target.value),
    });
  }
  onChangeQ4_2(e) {
    this.setState({
      Q4_2: Number(e.target.value),
    });
  }
  onChangeQ4_3(e) {
    this.setState({
      Q4_3: Number(e.target.value),
    });
  }
  onChangeQ4_4(e) {
    this.setState({
      Q4_4: Number(e.target.value),
    });
  }

  saveDonnee() {
    const user = { ...this.state.currentUser };
    const add =
      Number(this.state.Q1) +
      Number(this.state.Q2);
    var data = {
      mois: this.state.mois,
      Finance_question_1: this.state.Q1,
      Finance_question_2: this.state.Q2,
      Finance_question_3_1: this.state.Q3_1,
      Finance_question_3_2: this.state.Q3_2,
      Finance_question_3_3: this.state.Q3_3,
      Finance_question_3_4: this.state.Q3_4,
      Finance_question_3_5: this.state.Q3_5,
      Finance_question_4_1: this.state.Q4_1,
      Finance_question_4_2: this.state.Q4_2,
      Finance_question_4_3: this.state.Q4_3,
      Finance_question_4_4: this.state.Q4_4,
      total: add,
      userId: user.prenom,
      categorie: this.state.categorie,
      published: this.state.published,
    };

    PostDataService.createFinance(data)
      .then((response) => {
        this.setState({
          userId: response.data.userId,
          mois: response.data.mois,
          Finance_question_1: response.data.Finance_question_1,
          Finance_question_2: response.data.Finance_question_2,
          Finance_question_3_1: response.data.Finance_question_3_1,
          Finance_question_3_2: response.data.Finance_question_3_2,
          Finance_question_3_3: response.data.Finance_question_3_3,
          Finance_question_3_4: response.data.Finance_question_3_4,
          Finance_question_3_5: response.data.Finance_question_3_5,
          Finance_question_4_1: response.data.Finance_question_4_1,
          Finance_question_4_2: response.data.Finance_question_4_2,
          Finance_question_4_3: response.data.Finance_question_4_3,
          Finance_question_4_4: response.data.Finance_question_4_4,
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
      categorie: "Finance",
      moisUser: "",
      currentUser: { prenom: "", nom: "" },
      submitted: false,
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
          <h2>Finance</h2>
          <div className="d-flex  d-none d-md-block">
            <FontAwesomeIcon icon="euro-sign" size="2x" id="icones" />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>14. J'ai des difficultés financières</strong>
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
                  className="form-control"
                  id="valeur"
                  value={this.state.Q1}
                  onChange={this.onChangeQ1}
                >
                  <option >Choisissez une réponse :</option>
                  <option value="1">Très souvent</option>
                  <option value="2">Souvent</option>
                  <option value="3">Occasionnellement</option>
                  <option value="4">Rarement</option>
                  <option value="5">Très rarement</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>15. J'ai déjà été à découvert</strong>
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
                  className="form-control"
                  id="valeur"
                  value={this.state.Q2}
                  onChange={this.onChangeQ2}
                >
                  <option >Choisissez une réponse :</option>
                  <option value="1">Très souvent</option>
                  <option value="2">Souvent</option>
                  <option value="3">Occasionnellement</option>
                  <option value="4">Rarement</option>
                  <option value="5">Très rarement</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <div className="row" style={{ marginBottom: "2%" }}>
          <div className="col-6">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>16. Je possède :</strong>
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
              <div className="checkboxBloc" style={{ padding: "0 0 0 5%" }}>
                <div className="row">
                  <div className="col-12 col-sm-5">
                    <Form.Check type="checkbox" label="Un compte en banque" value="1" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check type="checkbox" label="Un chéquier"value="2" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check type="checkbox" label="Une carte de paiement" value="3" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="Une solution de paiement enligne (Paypal ou autre)" value="4"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="Aucun de ces moyens bancaires" value="5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

          <div className="col-6">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>
                  17. Je perçois les ressources financières suivantes :
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
              <div className="checkboxBloc" style={{ padding: "0 0 0 5%" }}>
                <div className="row">
                  <div className="col-12 col-sm-5">
                    <Form.Check type="checkbox" label="Un salaire" value="1"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="Des allocations (CAF, Pole Finance)" value="2"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="Une aide regulière de ma famille" value="3"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="Je suis sans ressources" value="4"
                    />
                  </div>
                </div>
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
