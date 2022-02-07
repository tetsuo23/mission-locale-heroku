import React, { Component } from "react";
import axios from "axios";
import authHeader from "./../../services/auth-header";

import PostDataService from "./../../services/post.service";
import AuthService from "./../../services/auth.service";
import UserService from "./../../services/user.service";
import EventBus from "./../../common/EventBus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";

export default class Citoyennete2 extends Component {
  constructor(props) {
    super(props);

    this.onChangemois = this.onChangemois.bind(this);
    this.onChangeQ_1_1 = this.onChangeQ_1_1.bind(this);
    this.onChangeQ_1_2 = this.onChangeQ_1_2.bind(this);
    this.onChangeQ_1_3 = this.onChangeQ_1_3.bind(this);
    this.onChangeQ_1_4 = this.onChangeQ_1_4.bind(this);
    this.onChangeQ_1_5 = this.onChangeQ_1_5.bind(this);
    this.onChangeQ_2_1 = this.onChangeQ_2_1.bind(this);
    this.onChangeQ_2_2 = this.onChangeQ_2_2.bind(this);
    this.onChangeQ_2_3 = this.onChangeQ_2_3.bind(this);
    this.onChangeQ_2_4 = this.onChangeQ_2_4.bind(this);
    this.onChangeQ_2_5 = this.onChangeQ_2_5.bind(this);
    this.onChangeQ_2_6 = this.onChangeQ_2_6.bind(this);
    this.onChangeQ_2_7 = this.onChangeQ_2_7.bind(this);
    this.onChangeQ_3 = this.onChangeQ_3.bind(this);
    this.onChangeQ_4 = this.onChangeQ_4.bind(this);
    this.onChangeQ_5 = this.onChangeQ_5.bind(this);
    this.onChangeQ_6 = this.onChangeQ_6.bind(this);
    this.onChangeQ_7 = this.onChangeQ_7.bind(this);
    this.onChangeQ_8 = this.onChangeQ_8.bind(this);
    this.saveDonnee = this.saveDonnee.bind(this);
    this.newDonnee = this.newDonnee.bind(this);

    this.onClickQ1_1 = this.onClickQ1_1.bind(this);
    this.onClickQ1_2 = this.onClickQ1_2.bind(this);
    this.onClickQ1_3 = this.onClickQ1_3.bind(this);
    this.onClickQ1_4 = this.onClickQ1_4.bind(this);
    this.onClickQ1_5 = this.onClickQ1_5.bind(this);
    this.onClickQ2_1 = this.onClickQ2_1.bind(this);
    this.onClickQ2_2 = this.onClickQ2_2.bind(this);
    this.onClickQ2_3 = this.onClickQ2_3.bind(this);
    this.onClickQ2_4 = this.onClickQ2_4.bind(this);
    this.onClickQ2_5 = this.onClickQ2_5.bind(this);
    this.onClickQ2_6 = this.onClickQ2_6.bind(this);
    this.onClickQ2_7 = this.onClickQ2_7.bind(this);

    this.state = {
      id: null,
      mois: "",
      categorie: "Citoyenneté",
      valData: [],
      moisUser: "",
      valeur: 0,

      Citoyennete_1: null,
      Citoyennete_1_1: "",
      Citoyennete_1_2: "",
      Citoyennete_1_3: "",
      Citoyennete_1_4: "",
      Citoyennete_1_5: "",
      Citoyennete_2: null,
      Citoyennete_2_1: "",
      Citoyennete_2_2: "",
      Citoyennete_2_3: "",
      Citoyennete_2_4: "",
      Citoyennete_2_5: "",
      Citoyennete_2_6: "",
      Citoyennete_2_7: "",
      Citoyennete_3: null,
      Citoyennete_4: null,
      Citoyennete_5: null,
      Citoyennete_6: null,
      Citoyennete_7: null,
      Citoyennete_8: null,
      Q_1: null,
      Q_1_1: true,
      Q_1_2: true,
      Q_1_3: true,
      Q_1_4: true,
      Q_1_5: true,
      Q_2: null,
      Q_2_1: true,
      Q_2_2: true,
      Q_2_3: true,
      Q_2_4: true,
      Q_2_5: true,
      Q_2_6: true,
      Q_2_7: true,
      Q_3: null,
      Q_4: null,
      Q_5: null,
      Q_6: null,
      Q_7: null,
      Q_8: null,

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
        `http://localhost:8080/api/posts/citoyennete/${currentUser.prenom}/citoyennete`,
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
  onChangeQ_1_1(e) {
    this.setState({
      Q_1_1: !e.target.checked,
    });
  }
  onChangeQ_1_2(e) {
    this.setState({
      Q_1_2: !e.target.checked,
    });
  }
  onChangeQ_1_3(e) {
    this.setState({
      Q_1_3: !e.target.checked,
    });
  }
  onChangeQ_1_4(e) {
    this.setState({
      Q_1_4: !e.target.checked,
    });
  }
  onChangeQ_1_5(e) {
    this.setState({
      Q_1_5: !e.target.checked,
    });
  }

  onChangeQ_2_1(e) {
    this.setState({
      Q_2_1: !e.target.checked,
    });
  }
  onChangeQ_2_2(e) {
    this.setState({
      Q_2_2: !e.target.checked,
    });
  }
  onChangeQ_2_3(e) {
    this.setState({
      Q_2_3: !e.target.checked,
    });
  }
  onChangeQ_2_4(e) {
    this.setState({
      Q_2_4: !e.target.checked,
    });
  }
  onChangeQ_2_5(e) {
    this.setState({
      Q_2_5: !e.target.checked,
    });
  }
  onChangeQ_2_6(e) {
    this.setState({
      Q_2_6: !e.target.checked,
    });
  }
  onChangeQ_2_7(e) {
    this.setState({
      Q_2_7: !e.target.checked,
    });
  }
  onChangeQ_3(e) {
    this.setState({
      Q_3: Number(e.target.value),
    });
  }
  onChangeQ_4(e) {
    this.setState({
      Q_4: Number(e.target.value),
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
  onChangeQ_8(e) {
    this.setState({
      Q_8: Number(e.target.value),
    });
  }

  onClickQ1_1(e) {
    const Q1_1 = this.state.Q_1_1;
    if (Q1_1 === true) {
      this.setState({ Citoyennete_1_1: e.target.value });
    } else {
      this.setState({ Citoyennete_1_1: "" });
    }
  }
  onClickQ1_2(e) {
    const Q1_2 = this.state.Q_1_2;
    if (Q1_2 === true) {
      this.setState({ Citoyennete_1_2: e.target.value });
    } else {
      this.setState({ Citoyennete_1_2: "" });
    }
  }
  onClickQ1_3(e) {
    const Q1_3 = this.state.Q_1_3;
    if (Q1_3 === true) {
      this.setState({ Citoyennete_1_3: e.target.value });
    } else {
      this.setState({ Citoyennete_1_3: "" });
    }
  }
  onClickQ1_4(e) {
    const Q1_4 = this.state.Q_1_4;
    if (Q1_4 === true) {
      this.setState({ Citoyennete_1_4: e.target.value });
    } else {
      this.setState({ Citoyennete_1_4: "" });
    }
  }
  onClickQ1_5(e) {
    const Q1_5 = this.state.Q_1_5;
    if (Q1_5 === true) {
      this.setState({ Citoyennete_1_5: e.target.value });
    } else {
      this.setState({ Citoyennete_1_5: "" });
    }
  }
  onClickQ2_1(e) {
    const Q2_1 = this.state.Q_2_1;
    if (Q2_1 === true) {
      this.setState({ Citoyennete_2_1: e.target.value });
    } else {
      this.setState({ Citoyennete_2_1: "" });
    }
  }
  onClickQ2_2(e) {
    const Q2_2 = this.state.Q_2_2;
    if (Q2_2 === true) {
      this.setState({ Citoyennete_2_2: e.target.value });
    } else {
      this.setState({ Citoyennete_2_2: "" });
    }
  }
  onClickQ2_3(e) {
    const Q2_3 = this.state.Q_2_3;
    if (Q2_3 === true) {
      this.setState({ Citoyennete_2_3: e.target.value });
    } else {
      this.setState({ Citoyennete_2_3: "" });
    }
  }
  onClickQ2_4(e) {
    const Q2_4 = this.state.Q_2_4;
    if (Q2_4 === true) {
      this.setState({ Citoyennete_2_4: e.target.value });
    } else {
      this.setState({ Citoyennete_2_4: "" });
    }
  }
  onClickQ2_5(e) {
    const Q2_5 = this.state.Q_2_5;
    if (Q2_5 === true) {
      this.setState({ Citoyennete_2_5: e.target.value });
    } else {
      this.setState({ Citoyennete_2_5: "" });
    }
  }
  onClickQ2_6(e) {
    const Q2_6 = this.state.Q_2_6;
    if (Q2_6 === true) {
      this.setState({ Citoyennete_2_6: e.target.value });
    } else {
      this.setState({ Citoyennete_2_6: "" });
    }
  }
  onClickQ2_7(e) {
    const Q2_7 = this.state.Q_2_7;
    if (Q2_7 === true) {
      this.setState({ Citoyennete_2_7: e.target.value });
    } else {
      this.setState({ Citoyennete_2_7: "" });
    }
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
      valeur: add,
      userId: user.prenom,
      categorie: this.state.categorie,
      Citoyennete_1_1: this.state.Citoyennete_1_1,
      Citoyennete_1_2: this.state.Citoyennete_1_2,
      Citoyennete_1_3: this.state.Citoyennete_1_3,
      Citoyennete_1_4: this.state.Citoyennete_1_4,
      Citoyennete_1_5: this.state.Citoyennete_1_5,
      Citoyennete_2_1: this.state.Citoyennete_2_1,
      Citoyennete_2_2: this.state.Citoyennete_2_2,
      Citoyennete_2_3: this.state.Citoyennete_2_3,
      Citoyennete_2_4: this.state.Citoyennete_2_4,
      Citoyennete_2_5: this.state.Citoyennete_2_5,
      Citoyennete_2_6: this.state.Citoyennete_2_6,
      Citoyennete_2_7: this.state.Citoyennete_2_7,
      Citoyennete_3: this.state.Q_3,
      Citoyennete_4: this.state.Q_4,
      Citoyennete_5: this.state.Q_5,
      Citoyennete_6: this.state.Q_6,
      Citoyennete_7: this.state.Q_7,
      Citoyennete_8: this.state.Q_8,
      total: add,
    };

    PostDataService.createCitoyennete(data)
      .then((response) => {
        this.setState({
          userId: response.data.userId,
          mois: response.data.mois,
          Citoyennete_1_1: response.data.Citoyennete_1_1,
          Citoyennete_1_2: response.data.Citoyennete_1_2,
          Citoyennete_1_3: response.data.Citoyennete_1_3,
          Citoyennete_1_4: response.data.Citoyennete_1_4,
          Citoyennete_1_5: response.data.Citoyennete_1_5,
          Citoyennete_2_1: response.data.Citoyennete_2_1,
          Citoyennete_2_2: response.data.Citoyennete_2_2,
          Citoyennete_2_3: response.data.Citoyennete_2_3,
          Citoyennete_2_4: response.data.Citoyennete_2_4,
          Citoyennete_2_5: response.data.Citoyennete_2_5,
          Citoyennete_2_6: response.data.Citoyennete_2_6,
          Citoyennete_2_7: response.data.Citoyennete_2_7,
          Citoyennete_3: response.data.Citoyennete_3,
          Citoyennete_4: response.data.Citoyennete_4,
          Citoyennete_5: response.data.Citoyennete_5,
          Citoyennete_6: response.data.Citoyennete_6,
          Citoyennete_7: response.data.Citoyennete_7,
          Citoyennete_8: response.data.Citoyennete_8,
          published: response.data.published,
          categorie: response.data.categorieId,
          total: response.data.total,
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
      categorie: "Citoyenneté",
      moisUser: "",
      valeur: "",
      currentUser: { prenom: "", nom: "" },
      submitted: false,
    });
  }

  render() {
    const { valData } = this.state;
    const dataVal1_1 = valData.map((Citoyennete_1_1, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Citoyennete_1_1.Citoyennete_1_1}`);
        return `${Citoyennete_1_1.Citoyennete_1_1}`;
      }
    });
    const dataVal1_2 = valData.map((Citoyennete_1_2, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Citoyennete_1_2.Citoyennete_1_2}`);
        return `${Citoyennete_1_2.Citoyennete_1_2}`;
      }
    });
    const dataVal1_3 = valData.map((Citoyennete_1_3, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Citoyennete_1_3.Citoyennete_1_3}`);
        return `${Citoyennete_1_3.Citoyennete_1_3}`;
      }
    });
    const dataVal1_4 = valData.map((Citoyennete_1_4, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Citoyennete_1_4.Citoyennete_1_4}`);
        return `${Citoyennete_1_4.Citoyennete_1_4}`;
      }
    });
    const dataVal1_5 = valData.map((Citoyennete_1_5, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Citoyennete_1_5.Citoyennete_1_5}`);
        return `${Citoyennete_1_5.Citoyennete_1_5}`;
      }
    });
    const dataVal2_1 = valData.map((Citoyennete_2_1, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Citoyennete_2_1.Citoyennete_2_1}`);
        return `${Citoyennete_2_1.Citoyennete_2_1}`;
      }
    });
    const dataVal2_2 = valData.map((Citoyennete_2_2, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Citoyennete_2_2.Citoyennete_2_2}`);
        return `${Citoyennete_2_2.Citoyennete_2_2}`;
      }
    });
    const dataVal2_3 = valData.map((Citoyennete_2_3, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Citoyennete_2_3.Citoyennete_2_3}`);
        return `${Citoyennete_2_3.Citoyennete_2_3}`;
      }
    });
    const dataVal2_4 = valData.map((Citoyennete_2_4, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Citoyennete_2_4.Citoyennete_2_4}`);
        return `${Citoyennete_2_4.Citoyennete_2_4}`;
      }
    });
    const dataVal2_5 = valData.map((Citoyennete_2_5, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Citoyennete_2_5.Citoyennete_2_5}`);
        return `${Citoyennete_2_5.Citoyennete_2_5}`;
      }
    });
    const dataVal2_6 = valData.map((Citoyennete_2_6, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Citoyennete_2_6.Citoyennete_2_6}`);
        return `${Citoyennete_2_6.Citoyennete_2_6}`;
      }
    });
    const dataVal2_7 = valData.map((Citoyennete_2_7, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Citoyennete_2_7.Citoyennete_2_7}`);
        return `${Citoyennete_2_7.Citoyennete_2_7}`;
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
          <h2>Citoyenneté</h2>
          <div className="d-flex  d-none d-md-block">
            <FontAwesomeIcon icon="handshake" size="2x" id="icones" />
          </div>
        </div>
        <div className="row" style={{ marginBottom: "2%" }}>
          <div className="col-12 col-lg-6">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>
                  20. Mes expériences citoyennes et associatives :
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
                value={this.state.Q_1}
                onChange={this.onChangeQ_1}
              >
                <div className="row">
                  <div className="col-12 col-sm-7">
                    <Form.Check
                      checked={!this.state.Q_1_1}
                      onClick={this.onClickQ1_1}
                      type="checkbox"
                      label="J'ai été bénévole dans une association"
                      value={this.state.Q_1_1}
                      onChange={this.onChangeQ_1_1}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_1_2}
                      onClick={this.onClickQ1_2}
                      type="checkbox"
                      label="J'ai réalisé la journée de Défense et de Citoyenneté"
                      value="J'ai réalisé la journée de Défense et de Citoyenneté"
                      onChange={this.onChangeQ_1_2}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_1_3}
                      onClick={this.onClickQ1_3}
                      type="checkbox"
                      label="J'ai été délégué de classe "
                      value="J'ai été délégué de classe "
                      onChange={this.onChangeQ_1_3}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_1_4}
                      onClick={this.onClickQ1_4}
                      type="checkbox"
                      label="J'ai participé à des projets citoyens dans le cadre de ma scolarité'"
                      value="J'ai participé à des projets citoyens dans le cadre de ma scolarité'"
                      onChange={this.onChangeQ_1_4}
                    />
                  </div>
                </div>
                <div className="row">
                  {/* <div className="col-12 col-sm-1">
                    <Form.Check
                      checked={!this.state.Q_1_5}
                      onClick={this.onClickQ1_5}
                      type="checkbox"
                      label="Autre"
                      value="Autre"
                      onChange={this.onChangeQ_1_5}
                    />
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
                  </div> */}
                </div>
                <div className="orange" style={{ padding: "2%" }}>
                  <strong>Les dernières entrées sont : </strong>
                  <p>{dataVal1_1}</p>
                  <p>{dataVal1_2}</p>
                  <p>{dataVal1_3}</p>
                  <p>{dataVal1_4}</p>
                  <p>{dataVal1_5}</p>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
          </div>
          <div className="col-12 col-lg-6">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>21. L'administration française</strong>
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
                value={this.state.Q_2}
                onChange={this.onChangeQ_2}
              >
                <div className="row">
                  <div className="col-12 col-sm-10">
                    <Form.Check
                      checked={!this.state.Q_2_1}
                      onClick={this.onClickQ2_1}
                      onChange={this.onChangeQ_2_1}
                      type="checkbox"
                      label="Je suis recensé auprès de la mairie de ma commune"
                      value="Je suis recensé auprès de la mairie de ma commune"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_2_2}
                      onClick={this.onClickQ2_2}
                      type="checkbox"
                      label="Je déclare mes impôts"
                      value="Je déclare mes impôts"
                      onChange={this.onChangeQ_2_2}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_2_3}
                      onClick={this.onClickQ2_3}
                      type="checkbox"
                      label="Je suis inscrit au pôle Citoyennete"
                      value="Je suis inscrit au pôle Citoyennete"
                      onChange={this.onChangeQ_2_3}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_2_4}
                      onClick={this.onClickQ2_4}
                      type="checkbox"
                      label="Je suis allocataire de la Caisse d'allocations familale"
                      value="Je suis allocataire de la Caisse d'allocations familale"
                      onChange={this.onChangeQ_2_4}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_2_5}
                      onClick={this.onClickQ2_5}
                      type="checkbox"
                      label="Je sais remplir undocument administratif (CERFA, dossier d'inscription, ...)"
                      value="Je sais remplir undocument administratif (CERFA, dossier d'inscription, ...)"
                      onChange={this.onChangeQ_2_5}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_2_6}
                      onClick={this.onClickQ2_6}
                      type="checkbox"
                      label="Je suis en difficultés avec les démarches administratives"
                      value="Je suis en difficultés avec les démarches administratives"
                      onChange={this.onChangeQ_2_6}
                    />
                  </div>
                </div>
                <div className="row">
                  {/* <div className="col-12 col-sm-1">
                    <Form.Check
                      checked={!this.state.Q_2_7}
                      onClick={this.onClickQ2_7}
                      type="checkbox"
                      label="Autre"
                      value="Autre"
                      onChange={this.onChangeQ_2_7}
                    />
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
                  </div> */}
                </div>
              </div>
              <div className="orange" style={{ padding: "2%" }}>
                <strong>Les dernières entrées sont : </strong>
                <p>{dataVal2_1}</p>
                <p>{dataVal2_2}</p>
                <p>{dataVal2_3}</p>
                <p>{dataVal2_4}</p>
                <p>{dataVal2_5}</p>
                <p>{dataVal2_6}</p>
                <p>{dataVal2_7}</p>{" "}
              </div>
            </div>
          </div>

          <div
            className=" col-12"
            style={{
              borderBottom: "2px solid black",
              marginTop: "1%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h2>Loisirs</h2>
          </div>
          <div className="col-12 col-lg-6">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <div
                style={{
                  borderBottom: "2px solid black",
                  padding: "1% 0 1% 0",
                }}
              >
                <strong>
                  22. Je pratique une activité culturelle et/ou artistique
                  (chant, dessin, sculpture...)
                </strong>

                <div className="input-group mb-3">
                  <select
                    name="valeur"
                    className="form-control"
                    id="valeur"
                    value={this.state.Q_3}
                    onChange={this.onChangeQ_3}
                  >
                    {" "}
                    <option>Choisissez une réponse :</option>
                    <option value="1">Jamais</option>
                    <option value="2">Parfois</option>
                    <option value="3">Régulièrement</option>
                  </select>
                </div>
              </div>

              <div
                style={{
                  borderBottom: "2px solid black",
                  padding: "1% 0 1% 0",
                }}
              >
                <strong>
                  23.Je regarde des séries sur des plateformes (Netflix, OCS,
                  Disney, Amazon prime ...)
                </strong>

                <div className="input-group mb-3">
                  <select
                    name="valeur"
                    className="form-control"
                    id="valeur"
                    value={this.state.Q_4}
                    onChange={this.onChangeQ_4}
                  >
                    {" "}
                    <option>Choisissez une réponse :</option>
                    <option value="1">Jamais</option>
                    <option value="2">Parfois</option>
                    <option value="3">Régulièrement</option>
                  </select>
                </div>
              </div>
              <div
            
            style={{
              borderBottom: "2px solid black",
              padding: "1% 0 1% 0",
            }}
          >
            <div className="col-sm-12">
              <strong>27.Je joue en ligne et/ou à des jeux sur console</strong>
            </div>

            <div className="input-group mb-3">
              <select
                name="valeur"
                className="form-control"
                id="valeur"
                value={this.state.Q_8}
                onChange={this.onChangeQ_8}
              >
                {" "}
                <option>Choisissez une réponse :</option>
                <option value="1">Jamais</option>
                <option value="2">Parfois</option>
                <option value="3">Régulièrement</option>
              </select>
            </div>
          </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <div
                style={{
                  borderBottom: "2px solid black",
                  padding: "1% 0 1% 0",
                }}
              >
                <div className="col-sm-12">
                  <strong>24.Je vais en bibliothèque / médiathèque</strong>
                </div>

                <div className="input-group mb-3">
                  <select
                    name="valeur"
                    className="form-control"
                    id="valeur"
                    value={this.state.Q_5}
                    onChange={this.onChangeQ_5}
                  >
                    {" "}
                    <option>Choisissez une réponse :</option>
                    <option value="1">Jamais</option>
                    <option value="2">Parfois</option>
                    <option value="3">Régulièrement</option>
                  </select>
                </div>
              </div>

              <div
                style={{
                  borderBottom: "2px solid black",
                  padding: "1% 0 1% 0",
                }}
              >
                <div className="col-sm-12">
                  <strong>25.Je vais à des concerts</strong>
                </div>

                <div className="input-group mb-3">
                  <select
                    name="valeur"
                    className="form-control"
                    id="valeur"
                    value={this.state.Q_6}
                    onChange={this.onChangeQ_6}
                  >
                    {" "}
                    <option>Choisissez une réponse :</option>
                    <option value="1">Jamais</option>
                    <option value="2">Parfois</option>
                    <option value="3">Régulièrement</option>
                  </select>
                </div>
              </div>

              <div
                style={{
                  borderBottom: "2px solid black",
                  padding: "1% 0 1% 0",
                }}
              >
                <div className="col-sm-12">
                  <strong>26.Je vais au cinéma</strong>
                </div>

                <div className="input-group mb-3">
                  <select
                    name="valeur"
                    className="form-control"
                    id="valeur"
                    value={this.state.Q_7}
                    onChange={this.onChangeQ_7}
                  >
                    {" "}
                    <option>Choisissez une réponse :</option>
                    <option value="1">Jamais</option>
                    <option value="2">Parfois</option>
                    <option value="3">Régulièrement</option>
                  </select>
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
