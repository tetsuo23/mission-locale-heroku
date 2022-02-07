import React, { Component } from "react";
import axios from "axios";
import authHeader from "./../../services/auth-header";

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

    this.onClickQ3_1 = this.onClickQ3_1.bind(this);
    this.onClickQ3_2 = this.onClickQ3_2.bind(this);
    this.onClickQ3_3 = this.onClickQ3_3.bind(this);
    this.onClickQ3_4 = this.onClickQ3_4.bind(this);
    this.onClickQ3_5 = this.onClickQ3_5.bind(this);
    this.onClickQ4_1 = this.onClickQ4_1.bind(this);
    this.onClickQ4_2 = this.onClickQ4_2.bind(this);
    this.onClickQ4_3 = this.onClickQ4_3.bind(this);
    this.onClickQ4_4 = this.onClickQ4_4.bind(this);

    this.saveDonnee = this.saveDonnee.bind(this);
    this.newDonnee = this.newDonnee.bind(this);

    this.state = {
      id: null,
      mois: "",
      valData: [],
      categorie: "Finance",
      moisUser: "",
      valeur: 0,
      Finance_question_1: null,
      Finance_question_2: null,
      Finance_question_3_1: "",
      Finance_question_3_2: "",
      Finance_question_3_3: "",
      Finance_question_3_4: "",
      Finance_question_3_5: "",
      Finance_question_4_1: "",
      Finance_question_4_2: "",
      Finance_question_4_3: "",
      Finance_question_4_4: "",
      Q1: null,
      Q2: null,
      Q3_1: true,
      Q3_2: true,
      Q3_3: true,
      Q3_4: true,
      Q3_5: true,
      Q4_1: true,
      Q4_2: true,
      Q4_3: true,
      Q4_4: true,

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
        `http://localhost:8080/api/posts/finance/${currentUser.nom}/finance`,
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
  onChangeQ2(e) {this.setState({ Q2: Number(e.target.value) });}
  onChangeQ3_1(e) {this.setState({ Q3_1: !e.target.checked });}
  onChangeQ3_2(e) {this.setState({ Q3_2: !e.target.checked });}
  onChangeQ3_3(e) {this.setState({ Q3_3: !e.target.checked });}
  onChangeQ3_4(e) {this.setState({ Q3_4: !e.target.checked });}
  onChangeQ3_5(e) {this.setState({ Q3_5: !e.target.checked });}
  onChangeQ4_1(e) {this.setState({ Q4_1: !e.target.checked });}
  onChangeQ4_2(e) {this.setState({ Q4_2: !e.target.checked });}
  onChangeQ4_3(e) {this.setState({ Q4_3: !e.target.checked });}
  onChangeQ4_4(e) {this.setState({ Q4_4: !e.target.checked });}
  onClickQ3_1(e) {const Q3_1 = this.state.Q3_1;

    if (Q3_1 === true) {
      this.setState({ Finance_question_3_1: e.target.value });
    } else {
      this.setState({ Finance_question_3_1: "" });
    }
  }
  onClickQ3_2(e) {
    const Q3_2 = this.state.Q3_2;

    if (Q3_2 === true) {
      this.setState({ Finance_question_3_2: e.target.value });
    } else {
      this.setState({ Finance_question_3_2: "" });
    }
  }
  onClickQ3_3(e) {
    const Q3_3 = this.state.Q3_3;

    if (Q3_3 === true) {
      this.setState({ Finance_question_3_3: e.target.value });
    } else {
      this.setState({ Finance_question_3_3: "" });
    }
  }
  onClickQ3_4(e) {
    const Q3_4 = this.state.Q3_4;

    if (Q3_4 === true) {
      this.setState({ Finance_question_3_4: e.target.value });
    } else {
      this.setState({ Finance_question_3_4: "" });
    }
  }
  onClickQ3_5(e) {
    const Q3_5 = this.state.Q3_5;
    if (Q3_5 === true) {
      this.setState({ Finance_question_3_5: e.target.value });
    } else {
      this.setState({ Finance_question_3_5: "" });
    }
  }
  onClickQ4_1(e) {
    const Q4_1 = this.state.Q4_1;

    if (Q4_1 === true) {
      this.setState({ Finance_question_4_1: e.target.value });
    } else {
      this.setState({ Finance_question_4_1: "" });
    }
  }
  onClickQ4_2(e) {
    const Q4_2 = this.state.Q4_2;

    if (Q4_2 === true) {
      this.setState({ Finance_question_4_2: e.target.value });
    } else {
      this.setState({ Finance_question_4_2: "" });
    }
  }
  onClickQ4_3(e) {
    const Q4_3 = this.state.Q4_3;

    if (Q4_3 === true) {
      this.setState({ Finance_question_4_3: e.target.value });
    } else {
      this.setState({ Finance_question_4_3: "" });
    }
  }
  onClickQ4_4(e) {
    const Q4_4 = this.state.Q4_4;

    if (Q4_4 === true) {
      this.setState({ Finance_question_4_4: e.target.value });
    } else {
      this.setState({ Finance_question_4_4: "" });
    }
  }
  saveDonnee() {
    const user = { ...this.state.currentUser };
    const add = Number(this.state.Q1) + Number(this.state.Q2);
    var data = {
      mois: this.state.mois,
      Finance_question_1: this.state.Q1,
      Finance_question_2: this.state.Q2,
      Finance_question_3_1: this.state.Finance_question_3_1,
      Finance_question_3_2: this.state.Finance_question_3_2,
      Finance_question_3_3: this.state.Finance_question_3_3,
      Finance_question_3_4: this.state.Finance_question_3_4,
      Finance_question_3_5: this.state.Finance_question_3_5,
      Finance_question_4_1: this.state.Finance_question_4_1,
      Finance_question_4_2: this.state.Finance_question_4_2,
      Finance_question_4_3: this.state.Finance_question_4_3,
      Finance_question_4_4: this.state.Finance_question_4_4,
      total: add,
      userId: user.nom,
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
    const { valData } = this.state;
    const dataVal = valData.map((Finance_question_3_1, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Finance_question_3_1.Finance_question_3_1}`);
        return `${Finance_question_3_1.Finance_question_3_1}`;
      }
    });
    const dataVal2 = valData.map((Finance_question_3_2, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Finance_question_3_2.Finance_question_3_2}`);
        return `${Finance_question_3_2.Finance_question_3_2}`;
      }
    });
    const dataVal3 = valData.map((Finance_question_3_3, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Finance_question_3_3.Finance_question_3_3}`);
        return `${Finance_question_3_3.Finance_question_3_3}`;
      }
    });
    const dataVal4 = valData.map((Finance_question_3_4, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Finance_question_3_4.Finance_question_3_4}`);
        return `${Finance_question_3_4.Finance_question_3_4}`;
      }
    });
    const dataVal5 = valData.map((Finance_question_3_5, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Finance_question_3_5.Finance_question_3_5}`);
        return `${Finance_question_3_5.Finance_question_3_5}`;
      }
    });
    const dataVal6 = valData.map((Finance_question_4_1, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Finance_question_4_1.Finance_question_4_1}`);
        return `${Finance_question_4_1.Finance_question_4_1}`;
      }
    });
    const dataVal7 = valData.map((Finance_question_4_2, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Finance_question_4_2.Finance_question_4_2}`);
        return `${Finance_question_4_2.Finance_question_4_2}`;
      }
    });
    const dataVal8 = valData.map((Finance_question_4_3, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Finance_question_4_3.Finance_question_4_3}`);
        return `${Finance_question_4_3.Finance_question_4_3}`;
      }
    });
    const dataVal9 = valData.map((Finance_question_4_4, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Finance_question_4_4.Finance_question_4_4}`);
        return `${Finance_question_4_4.Finance_question_4_4}`;
      }
    });
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
          <div className="col-12 col-lg-4">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>9. J'ai des difficultés financières</strong>
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
                  <option>Choisissez une réponse :</option>
                  <option value="1">Très souvent</option>
                  <option value="2">Souvent</option>
                  <option value="3">Occasionnellement</option>
                  <option value="4">Rarement</option>
                  <option value="5">Très rarement</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>10. J'ai déjà été à découvert</strong>
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
                  <option>Choisissez une réponse :</option>
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
          <div className="col-12 col-lg-6">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>11. Je possède :</strong>
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
                      checked={!this.state.Q3_1}
                      type="checkbox"
                      onChange={this.onChangeQ3_1}
                      onClick={this.onClickQ3_1}
                      label="Un compte en banque"
                      value="Un compte en banque"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q3_2}
                      type="checkbox"
                      onChange={this.onChangeQ3_2}
                      onClick={this.onClickQ3_2}
                      label="Un chéquier"
                      value="Un chéquier"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q3_3}
                      type="checkbox"
                      onChange={this.onChangeQ3_3}
                      onClick={this.onClickQ3_3}
                      label="Une carte de paiement"
                      value="Une carte de paiement"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q3_4}
                      type="checkbox"
                      onChange={this.onChangeQ3_4}
                      onClick={this.onClickQ3_4}
                      label="Une solution de paiement enligne (Paypal ou autre)"
                      value="Une solution de paiement enligne (Paypal ou autre)"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q3_5}
                      type="checkbox"
                      onChange={this.onChangeQ3_5}
                      onClick={this.onClickQ3_5}
                      label="Aucun de ces moyens bancaires"
                      value="Aucun de ces moyens bancaires"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="orange" style={{ padding: "2%", margin:'2% 0 2% 0'  }}>
            <strong>Les dernières entrées sont : </strong>
            <p>{dataVal}</p>
            <p>{dataVal2}</p>
            <p>{dataVal3}</p>
            <p>{dataVal4}</p>
            <p>{dataVal5}</p>
          </div>

          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

          <div className="col-12 col-lg-6">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>
                  12. Je perçois les ressources financières suivantes :
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
                      onClick={this.onClickQ4_1}
                      onChange={this.onChangeQ4_1}
                      checked={!this.state.Q4_1}
                      type="checkbox"
                      label="Un salaire"
                      value="Un salaire"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      
                      checked={!this.state.Q4_2}
                       onChange={this.onChangeQ4_2}
                      onClick={this.onClickQ4_2}
                      type="checkbox"
                      label="Des allocations (CAF, Pole Finance)"
                      value="Des allocations (CAF, Pole Finance)"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      onClick={this.onClickQ4_3}
                       onChange={this.onChangeQ4_3}
                      checked={!this.state.Q4_3}
                      type="checkbox"
                      label="Une aide regulière de ma famille"
                      value="Une aide regulière de ma famille"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      onClick={this.onClickQ4_4}
                       onChange={this.onChangeQ4_4}
                      checked={!this.state.Q4_4}
                      type="checkbox"
                      label="Je suis sans ressources"
                      value="Je suis sans ressources"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="orange" style={{ padding: "2%", margin:'2% 0 2% 0' }}>
            <strong>Les dernières entrées sont : </strong>
            <p>{dataVal6}</p>
            <p>{dataVal7}</p>
            <p>{dataVal8}</p>
            <p>{dataVal9}</p>
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
