import React, { Component } from "react";

import PostDataService from "./../../services/post.service";
import AuthService from "./../../services/auth.service";
import UserService from "./../../services/user.service";
import EventBus from "./../../common/EventBus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";

export default class Emploi2 extends Component {
  constructor(props) {
    super(props);

    this.onChangemois = this.onChangemois.bind(this);
    this.onChangeQ_1_1 = this.onChangeQ_1_1.bind(this);
    this.onChangeQ_1_2 = this.onChangeQ_1_2.bind(this);
    this.onChangeQ_1_3 = this.onChangeQ_1_3.bind(this);
    this.onChangeQ_1_4 = this.onChangeQ_1_4.bind(this);
    this.onChangeQ_1_5 = this.onChangeQ_1_5.bind(this);
    this.onChangeQ_1_6 = this.onChangeQ_1_6.bind(this);
    this.onChangeQ_1_7 = this.onChangeQ_1_7.bind(this);

    this.onChangeQ_2_1 = this.onChangeQ_2_1.bind(this);
    this.onChangeQ_2_2 = this.onChangeQ_2_2.bind(this);
    this.onChangeQ_2_3 = this.onChangeQ_2_3.bind(this);
    this.onChangeQ_2_4 = this.onChangeQ_2_4.bind(this);
    this.onChangeQ_2_5 = this.onChangeQ_2_5.bind(this);
    this.onChangeQ_2_6 = this.onChangeQ_2_6.bind(this);

    this.onChangeQ_3_1 = this.onChangeQ_3_1.bind(this);
    this.onChangeQ_3_2 = this.onChangeQ_3_2.bind(this);
    this.onChangeQ_3_3 = this.onChangeQ_3_3.bind(this);
    this.onChangeQ_3_4 = this.onChangeQ_3_4.bind(this);
    this.onChangeQ_3_5 = this.onChangeQ_3_5.bind(this);
    this.onChangeQ_3_6 = this.onChangeQ_3_6.bind(this);

    this.onChangeQ_4_1 = this.onChangeQ_4_1.bind(this);
    this.onChangeQ_4_2 = this.onChangeQ_4_2.bind(this);
    this.onChangeQ_4_3 = this.onChangeQ_4_3.bind(this);
    this.onChangeQ_4_4 = this.onChangeQ_4_4.bind(this);
    this.onChangeQ_4_5 = this.onChangeQ_4_5.bind(this);
    this.onChangeQ_4_6 = this.onChangeQ_4_6.bind(this);
    this.onChangeQ_4_7 = this.onChangeQ_4_7.bind(this);

    this.onChangeQ_5 = this.onChangeQ_5.bind(this);
    this.onChangeQ_6 = this.onChangeQ_6.bind(this);
    this.onChangeQ_7 = this.onChangeQ_7.bind(this);

    this.saveDonnee = this.saveDonnee.bind(this);
    this.newDonnee = this.newDonnee.bind(this);

    this.state = {
      id: null,
      mois: "",
      categorie: "Emploi",
      moisUser: "",
      valeur: 0,

      Emploi_1_1: null,
      Emploi_1_2: null,
      Emploi_1_3: null,
      Emploi_1_4: null,
      Emploi_1_5: null,
      Emploi_1_6: null,
      Emploi_1_7: null,
      Emploi_2_1: null,
      Emploi_2_2: null,
      Emploi_2_3: null,
      Emploi_2_4: null,
      Emploi_2_5: null,
      Emploi_2_6: null,
      Emploi_3_1: null,
      Emploi_3_2: null,
      Emploi_3_3: null,
      Emploi_3_4: null,
      Emploi_3_5: null,
      Emploi_3_6: null,
      Emploi_4_1: null,
      Emploi_4_2: null,
      Emploi_4_3: null,
      Emploi_4_4: null,
      Emploi_4_5: null,
      Emploi_4_6: null,
      Emploi_4_7: null,
      Emploi_5: null,
      Emploi_6: null,
      Emploi_7: null,

      Q_1_1: null,
      Q_1_2: null,
      Q_1_3: null,
      Q_1_4: null,
      Q_1_5: null,
      Q_1_6: null,
      Q_1_7: null,
      Q_2_1: null,
      Q_2_2: null,
      Q_2_3: null,
      Q_2_4: null,
      Q_2_5: null,
      Q_2_6: null,
      Q_3_1: null,
      Q_3_2: null,
      Q_3_3: null,
      Q_3_4: null,
      Q_3_5: null,
      Q_3_6: null,
      Q_4_1: null,
      Q_4_2: null,
      Q_4_3: null,
      Q_4_4: null,
      Q_4_5: null,
      Q_4_6: null,
      Q_4_7: null,
      Q_5: null,
      Q_6: null,
      Q_7: null,

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

  onChangeQ_1_1(e) {
    this.setState({
      Q_1_1: Number(e.target.value),
    });
  }
  onChangeQ_1_2(e) {
    this.setState({
      Q_1_2: Number(e.target.value),
    });
  }
  onChangeQ_1_3(e) {
    this.setState({
      Q_1_3: Number(e.target.value),
    });
  }
  onChangeQ_1_4(e) {
    this.setState({
      Q_1_4: Number(e.target.value),
    });
  }
  onChangeQ_1_5(e) {
    this.setState({
      Q_1_5: Number(e.target.value),
    });
  }
  onChangeQ_1_6(e) {
    this.setState({
      Q_1_6: Number(e.target.value),
    });
  }
  onChangeQ_1_7(e) {
    this.setState({
      Q_1_7: Number(e.target.value),
    });
  }
  onChangeQ_2_1(e) {
    this.setState({
      Q_2_1: Number(e.target.value),
    });
  }
  onChangeQ_2_2(e) {
    this.setState({
      Q_2_2: Number(e.target.value),
    });
  }
  onChangeQ_2_3(e) {
    this.setState({
      Q_2_3: Number(e.target.value),
    });
  }
  onChangeQ_2_4(e) {
    this.setState({
      Q_2_4: Number(e.target.value),
    });
  }
  onChangeQ_2_5(e) {
    this.setState({
      Q_2_5: Number(e.target.value),
    });
  }
  onChangeQ_2_6(e) {
    this.setState({
      Q_2_6: Number(e.target.value),
    });
  }
  onChangeQ_3_1(e) {
    this.setState({
      Q_3_1: Number(e.target.value),
    });
  }
  onChangeQ_3_2(e) {
    this.setState({
      Q_3_2: Number(e.target.value),
    });
  }
  onChangeQ_3_3(e) {
    this.setState({
      Q_3_3: Number(e.target.value),
    });
  }
  onChangeQ_3_4(e) {
    this.setState({
      Q_3_4: Number(e.target.value),
    });
  }
  onChangeQ_3_5(e) {
    this.setState({
      Q_3_5: Number(e.target.value),
    });
  }
  onChangeQ_3_6(e) {
    this.setState({
      Q_3_6: Number(e.target.value),
    });
  }
  onChangeQ_4_1(e) {
    this.setState({
      Q_4_1: Number(e.target.value),
    });
  }
  onChangeQ_4_2(e) {
    this.setState({
      Q_4_2: Number(e.target.value),
    });
  }
  onChangeQ_4_3(e) {
    this.setState({
      Q_4_3: Number(e.target.value),
    });
  }
  onChangeQ_4_4(e) {
    this.setState({
      Q_4_4: Number(e.target.value),
    });
  }
  onChangeQ_4_5(e) {
    this.setState({
      Q_4_5: Number(e.target.value),
    });
  }
  onChangeQ_4_6(e) {
    this.setState({
      Q_4_6: Number(e.target.value),
    });
  }
  onChangeQ_4_7(e) {
    this.setState({
      Q_4_7: Number(e.target.value),
    });
  }
  onChangeQ_5(e) {
    this.setState({
      Q_5: Number(e.target.value),
    });
  }
  onChangeQ_6(e) {
    this.setState({
      Q_6: Number(e.target.value),
    });
  }
  onChangeQ_7(e) {
    this.setState({
      Q_7: Number(e.target.value),
    });
  }

  saveDonnee() {
    const user = { ...this.state.currentUser };
    const add = Number(this.state.Q_5) + Number(this.state.Q_6);
    var data = {
      mois: this.state.mois,
      total: add,
      userId: user.prenom,
      categorie: this.state.categorie,
      Emploi_1_1: this.state.Q_1_1,
      Emploi_1_2: this.state.Q_1_2,
      Emploi_1_3: this.state.Q_1_3,
      Emploi_1_4: this.state.Q_1_4,
      Emploi_1_5: this.state.Q_1_5,
      Emploi_1_6: this.state.Q_1_6,
      Emploi_1_7: this.state.Q_1_7,

      Emploi_2_1: this.state.Q_2_1,
      Emploi_2_2: this.state.Q_2_2,
      Emploi_2_3: this.state.Q_2_3,
      Emploi_2_4: this.state.Q_2_4,
      Emploi_2_5: this.state.Q_2_5,
      Emploi_2_6: this.state.Q_2_6,

      Emploi_3_1: this.state.Q_3_1,
      Emploi_3_2: this.state.Q_3_2,
      Emploi_3_3: this.state.Q_3_3,
      Emploi_3_4: this.state.Q_3_4,
      Emploi_3_5: this.state.Q_3_5,
      Emploi_3_6: this.state.Q_3_6,

      Emploi_4_1: this.state.Q_4_1,
      Emploi_4_2: this.state.Q_4_2,
      Emploi_4_3: this.state.Q_4_3,
      Emploi_4_4: this.state.Q_4_4,
      Emploi_4_5: this.state.Q_4_5,
      Emploi_4_6: this.state.Q_4_6,
      Emploi_4_7: this.state.Q_4_7,

      Emploi_5: this.state.Q_5,
      Emploi_6: this.state.Q_6,
      Emploi_7: this.state.Q_7,
    };
console.log(data.Emploi_5, data.Emploi_6);
    PostDataService.createEmploi(data)
      .then((response) => {
        this.setState({
          userId: response.data.userId,
          mois: response.data.mois,
          Emploi_1_1: response.data.Emploi_1_1,
          Emploi_1_2: response.data.Emploi_1_2,
          Emploi_1_3: response.data.Emploi_1_3,
          Emploi_1_4: response.data.Emploi_1_4,
          Emploi_1_5: response.data.Emploi_1_5,
          Emploi_1_6: response.data.Emploi_1_6,
          Emploi_1_7: response.data.Emploi_1_7,
          Emploi_2_1: response.data.Emploi_2_1,
          Emploi_2_2: response.data.Emploi_2_2,
          Emploi_2_3: response.data.Emploi_2_3,
          Emploi_2_4: response.data.Emploi_2_4,
          Emploi_2_5: response.data.Emploi_2_5,
          Emploi_2_6: response.data.Emploi_2_6,
          Emploi_3_1: response.data.Emploi_3_1,
          Emploi_3_2: response.data.Emploi_3_2,
          Emploi_3_3: response.data.Emploi_3_3,
          Emploi_3_4: response.data.Emploi_3_4,
          Emploi_3_5: response.data.Emploi_3_5,
          Emploi_3_6: response.data.Emploi_3_6,
          Emploi_4_1: response.data.Emploi_4_1,
          Emploi_4_2: response.data.Emploi_4_2,
          Emploi_4_3: response.data.Emploi_4_3,
          Emploi_4_4: response.data.Emploi_4_4,
          Emploi_4_5: response.data.Emploi_4_5,
          Emploi_4_6: response.data.Emploi_4_6,
          Emploi_4_7: response.data.Emploi_4_7,
          Emploi_5: response.data.Emploi_5,
          Emploi_6: response.data.Emploi_6,
          Emploi_7: response.data.Emploi_7,
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
      categorie: "Emploi",
      moisUser: "",
      valeur: "",
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
          <h2>Emploi</h2>
          <div className="d-flex  d-none d-md-block">
            <FontAwesomeIcon icon="wrench" size="2x" id="icones" />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>21. Mes atouts liés à la recherche d'emploi</strong>
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
                    <Form.Check type="checkbox" label="J'ai un CV à jour " value="1" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="Je sais rédiger une lettre de motivation" value="2"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="J'ai déjà postulé à un ou plusieurs emploi" value="3"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="J'ai déjà participé à un entretien de recrutement" value="4"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="Rien de tout ça, mais je suis prêt à apprendre.." value="5"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12">
                    <Form.Check
                      type="checkbox"
                      label="OK, j'ai pas mal d'atouts mais j'ai besoin de conseils pour revoir mon CV, ma lettre de motivation, etc." value="6"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-1">
                    <Form.Check type="checkbox" label="Autre" value="7" />
                  </div>
                  <div className="col-12 col-sm-11">
                    <textarea
                      name=""
                      id=""
                      rows="1"
                      style={{
                        border: "none",
                        backgroundColor: "white",
                        borderBottom: "1px solid black",
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>22. Mes atouts pour accéder à un emploi</strong>
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
                    <Form.Check
                      type="checkbox"
                      label="J'ai identifié un métier idéal" value="1"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="Je sais à quel(s) emploi(s) je souhaite postuler" value="2"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="J'ai un diplôme en lien avec le métier que je vise " value="3"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check type="checkbox" label="Je souhaite me former" value="4" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="Je sais quelle formation je veux suivre" value="5"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-10">
                    <Form.Check
                      type="checkbox"
                      label="Rien de tout ça, je veux être aidé pour structurer ma démarche d'accés à l'emploi" value="6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          <div className="col-6">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>23. Mon expérience professionnelle</strong>
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
                  <div className="col-12 col-sm-6">
                    <Form.Check
                      type="checkbox"
                      label="J'ai travaillé comme saisonnier / job d'été" value="1"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="J'ai travaillé en apprentissage " value="2"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="J'ai travaillé en intérim" value="3"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="J'ai travaillé en CDD ou CDI" value="4"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-10">
                    <Form.Check
                      type="checkbox"
                      label="Je n'ai jamais travaillé mais je suis prêt pour une première expérience en entreprise" value="5"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-1">
                    <Form.Check type="checkbox" label="Autre" value="6" />
                  </div>
                  <div className="col-12 col-sm-11">
                    <textarea
                      name=""
                      id=""
                      rows="1"
                      style={{
                        border: "none",
                        backgroundColor: "white",
                        borderBottom: "1px solid black",
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>
                  24. Les démarches que j'entreprends pour trouver un emploi
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
                    <Form.Check
                      type="checkbox"
                      label="Je consulte les offres d'emploi" value="1"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="J'envoie des candidatures spontanées" value="2"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="Je parle de ma recherche d'emploi dans mon entourage " value="3"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="Je communique sur ma recherche d'emploi sur les réseaux sociaux " value="4"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="Je participe à des forums, des job-dating, etc ..." value="5"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12">
                    <Form.Check
                      type="checkbox"
                      label="J'ai besoin d'aide, de soutien pour entreprendre des démarches de recherche d'emploi" value="6"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-1">
                    <Form.Check type="checkbox" label="Autre" value="7" />
                  </div>
                  <div className="col-12 col-sm-11">
                    <textarea
                      name=""
                      id=""
                      rows="1"
                      style={{
                        border: "none",
                        backgroundColor: "white",
                        borderBottom: "1px solid black",
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="row" style={{ marginBottom: "2%" }}>
          <div className="col-4">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>
                  25. Quelle est la durée de mon dernier contrat de travail ?
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
                  value={this.state.Q_5}
                  onChange={this.onChangeQ_5}
                >
                  <option >Choisissez une réponse :</option>
                  <option value="1">Je n'ai jamais travaillé</option>
                  <option value="2">Plus de 6 mois</option>
                  <option value="3">Plus de 3 mois</option>
                  <option value="4">D'un mois à 3 mois</option>
                  <option value="5">Moins d'un mois</option>
                  {/* <option value="autre">Autre</option> */}
                </select>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>26. Ma dernière démarche remonte à</strong>
              </p>
              <p
                style={{
                  color: "#343434",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Une seule réponse possible .
              </p>
              <div className="input-group mb-3">
                <select
                  name="valeur"
                  className="form-control"
                  id="valeur"
                  value={this.state.Q_6}
                  onChange={this.onChangeQ_6}
                >
                  <option >Choisissez une réponse :</option>
                  <option value="1">Plus de 6 mois</option>
                  <option value="2">Plus de 3 mois</option>
                  <option value="3">Plusieurs semaines</option>
                  <option value="4">Quelques jours</option>
                  {/* <option value="autre">Autre</option> */}
                </select>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>
                  27. Pour quelle(s) raison(s) je n'ai pas fait de démarche
                  depuis longtemps
                </strong>
              </p>
              <p style={{ fontSize: "0.8rem" }}>
                {" "}
                Si ma dernière démarche remonte à plusieurs semaines et au-delà
              </p>

              <p
                style={{
                  color: "#343434",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Une seule réponse possible .
              </p>
              <div className="checkboxBloc" style={{ padding: "0 0 0 5%" }}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
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
