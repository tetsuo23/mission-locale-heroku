import React, { Component, Fragment } from "react";
import NavReferent from "./NavReferent";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import AuthService from "../services/auth.service";

import axios from "axios";
import { Line } from "react-chartjs-2";
import authHeader from "./../services/auth-header";

class BoardReferent extends Component {
  constructor(props) {
    super(props);

    this.handleBene = this.handleBene.bind(this);

    this.state = {
      nom: "ilian",
      content: "",
      currentUser: { nom: "", prenom: "" },
      mois: [],
      logement: [],
      sante: [],
      mobilite: [],
      finance: [],
      citoyennete: [],
      emploi: [],
      valeur: [],
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
        `http://localhost:8080/api/posts/logement/${this.state.nom}/logement`,
        { headers: authHeader() }
      )
      .then((res) => {
        const logement = res.data;
        const valeur = res.data;
        console.log(logement);
        this.setState({ logement, valeur });
        return JSON.stringify(logement);
      });
    axios
      .get(`http://localhost:8080/api/posts/sante/${this.state.nom}/sante`, {
        headers: authHeader(),
      })
      .then((res) => {
        const sante = res.data;
        const valeur = res.data;
        console.log(sante);
        this.setState({ sante, valeur });
        return JSON.stringify(sante);
      });
    axios
      .get(
        `http://localhost:8080/api/posts/mobilite/${this.state.nom}/mobilite`,
        { headers: authHeader() }
      )
      .then((res) => {
        const mobilite = res.data;
        const valeur = res.data;
        this.setState({ mobilite, valeur });
        return JSON.stringify(mobilite);
      });
    axios
      .get(
        `http://localhost:8080/api/posts/citoyennete/${this.state.nom}/citoyennete`,
        { headers: authHeader() }
      )
      .then((res) => {
        const citoyennete = res.data;
        const valeur = res.data;
        this.setState({ citoyennete, valeur });
        return JSON.stringify(citoyennete);
      });

    axios
      .get(
        `http://localhost:8080/api/posts/finance/${this.state.nom}/finance`,
        { headers: authHeader() }
      )
      .then((res) => {
        const finance = res.data;
        const valeur = res.data;
        this.setState({ finance, valeur });
        return JSON.stringify(finance);
      });
    axios
      .get(`http://localhost:8080/api/posts/emploi/${this.state.nom}/emploi`, {
        headers: authHeader(),
      })
      .then((res) => {
        const emploi = res.data;
        const valeur = res.data;
        this.setState({ emploi, valeur });
        return JSON.stringify(emploi);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.nom !== this.state.nom) {
      console.log("changement de prénom");
      axios
        .get(
          `http://localhost:8080/api/posts/logement/${this.state.nom}/logement`,
          { headers: authHeader() }
        )
        .then((res) => {
          const logement = res.data;
          const valeur = res.data;
          this.setState({ logement, valeur });
          console.log(logement);
          return JSON.stringify(logement);
        });
      axios
        .get(`http://localhost:8080/api/posts/sante/${this.state.nom}/sante`, {
          headers: authHeader(),
        })
        .then((res) => {
          const sante = res.data;
          const valeur = res.data;
          console.log(sante);
          this.setState({ sante, valeur });
          return JSON.stringify(sante);
        });
      axios
        .get(
          `http://localhost:8080/api/posts/mobilite/${this.state.nom}/mobilite`,
          { headers: authHeader() }
        )
        .then((res) => {
          const mobilite = res.data;
          const valeur = res.data;
          this.setState({ mobilite, valeur });
          return JSON.stringify(mobilite);
        });
      axios
        .get(
          `http://localhost:8080/api/posts/citoyennete/${this.state.nom}/citoyennete`,
          { headers: authHeader() }
        )
        .then((res) => {
          const citoyennete = res.data;
          const valeur = res.data;
          this.setState({ citoyennete, valeur });
          return JSON.stringify(citoyennete);
        });
      axios
        .get(
          `http://localhost:8080/api/posts/finance/${this.state.nom}/finance`,
          { headers: authHeader() }
        )
        .then((res) => {
          const finance = res.data;
          const valeur = res.data;
          this.setState({ finance, valeur });
          return JSON.stringify(finance);
        });
      axios
        .get(
          `http://localhost:8080/api/posts/emploi/${this.state.nom}/emploi`,
          { headers: authHeader() }
        )
        .then((res) => {
          const emploi = res.data;
          const valeur = res.data;
          this.setState({ emploi, valeur });
          return JSON.stringify(emploi);
        });
    }
  }

  handleBene(e) {
    const newnom = e.target.value;
    this.setState({ nom: newnom });
  }

  render() {
    const { currentUser, nom } = this.state;

    const { mois, sante, mobilite, citoyennete, finance, emploi, logement } =
      this.state;

    const dataVal = sante.map((Sante_1) => Sante_1.Sante_1);
    const dataVal2 = sante.map((Sante_2) => Sante_2.Sante_2);
    const dataVal3 = sante.map((Sante_3) => Sante_3.Sante_3);
    const dataVal4 = sante.map((Sante_4) => Sante_4.Sante_4);
    const dataVal5 = sante.map((Sante_5) => Sante_5.Sante_5);
    const dataVal6 = emploi.map((Emploi_5) => Emploi_5.Emploi_5);
    const dataVal7 = emploi.map((Emploi_6) => Emploi_6.Emploi_6);
    const dataVal8 = citoyennete.map((Citoyennete_3) => Citoyennete_3.Citoyennete_3);
    const dataVal9 = citoyennete.map((Citoyennete_4) => Citoyennete_4.Citoyennete_4);
    const dataVal10 = citoyennete.map((Citoyennete_5) => Citoyennete_5.Citoyennete_5);
    const dataVal11 = citoyennete.map((Citoyennete_6) => Citoyennete_6.Citoyennete_6);
    const dataVal12 = citoyennete.map((Citoyennete_7) => Citoyennete_7.Citoyennete_7);
    const dataVal13 = citoyennete.map((Citoyennete_8) => Citoyennete_8.Citoyennete_8);
    const dataVal14 = finance.map((Finance_question_1) => Finance_question_1.Finance_question_1);
    const dataVal15 = finance.map((Finance_question_2) => Finance_question_2.Finance_question_2);
    const dataVal16 = logement.map((Logement_question_1) => Logement_question_1.Logement_question_1);
    const dataVal17 = logement.map((Logement_question_2) => Logement_question_2.Logement_question_2);
    const dataVal18 = logement.map((Logement_question_3) => Logement_question_3.Logement_question_3);
    const dataVal19 = logement.map((Logement_question_4) => Logement_question_4.Logement_question_4);
    const dataVal20 = logement.map((Logement_question_5) => Logement_question_5.Logement_question_5);
    const dataVal21 = logement.map((Logement_question_6) => Logement_question_6.Logement_question_6);
    const dataVal22 = mobilite.map((Mobilite_question_1) => Mobilite_question_1.Mobilite_question_1);
    const dataVal23 = mobilite.map((Mobilite_question_2) => Mobilite_question_2.Mobilite_question_2);
    const dataVal24 = mobilite.map((Mobilite_question_3) => Mobilite_question_3.Mobilite_question_3);
    const dataVal25 = mobilite.map((Mobilite_question_4) => Mobilite_question_4.Mobilite_question_4);
    const dataVal26 = mobilite.map((Mobilite_question_5) => Mobilite_question_5.Mobilite_question_5);
    const dataVal27 = mobilite.map((Mobilite_question_6) => Mobilite_question_6.Mobilite_question_6);
    console.log(logement);
    const chartDataSante = {
      labels: sante.map((mois) => mois.mois),

      datasets: [
        {
          label: "Question n°1",
          data: dataVal,
          backgroundColor: "rgb(30,55,  250)",
          borderColor: "rgba(30,55,  250, 0.4)",
        },
        {
          label: "Question n°2",
          data: dataVal2,
          backgroundColor: "rgb(55, 30, 50)",
          borderColor: "rgba(55, 30, 50, 0.4)",
        },

        {
          label: "Question n°3",
          data: dataVal3,
          backgroundColor: "rgb(50, 155, 30 )",
          borderColor: "rgba(50, 155, 30, 0.4)",
        },
        {
          label: "Question n°4",
          data: dataVal4,
          backgroundColor: "rgb( 230,120, 0)",
          borderColor: "rgba( 230,120, 0, 0.4)",
        },
        {
          label: "Question n°5",
          data: dataVal5,
          backgroundColor: "rgb(200, 130, 255)",
          borderColor: "rgba(200, 130, 255, 0.4)",
        },
      ],
    };

    const chartDataEmploi = {
      labels: emploi.map((mois) => mois.mois),

      datasets: [
        {
          label: "Question n°5",
          data: dataVal6,
          backgroundColor: "rgb(30,55,  250)",
          borderColor: "rgba(30,55,  250, 0.4)",
        },
        {
          label: "Question n°6",
          data: dataVal7,
          backgroundColor: "rgb(55, 30, 50)",
          borderColor: "rgba(55, 30, 50, 0.4)",
        },
      ],
    };
    const chartDataMobilite = {
      labels: mobilite.map((mois) => mois.mois),

      datasets: [
        {
          label: "Question n°1",
          data: dataVal22,
          backgroundColor: "rgb(30,55,  250)",
          borderColor: "rgba(30,55,  250, 0.4)",
        },
        {
          label: "Question n°2",
          data: dataVal23,
          backgroundColor: "rgb(55, 30, 50)",
          borderColor: "rgba(55, 30, 50, 0.4)",
        },

        {
          label: "Question n°3",
          data: dataVal24,
          backgroundColor: "rgb(50, 155, 30 )",
          borderColor: "rgba(50, 155, 30, 0.4)",
        },
        {
          label: "Question n°4",
          data: dataVal25,
          backgroundColor: "rgb( 230,120, 0)",
          borderColor: "rgba( 230,120, 0, 0.4)",
        },
        {
          label: "Question n°5",
          data: dataVal26,
          backgroundColor: "rgb(200, 130, 255)",
          borderColor: "rgba(200, 130, 255, 0.4)",
        },
        {
          label: "Question n°6",
          data: dataVal27,
          fill: false,
          backgroundColor: "rgb(255, 30, 150)",
          borderColor: "rgba(255, 30, 150, 0.4)",
        },
      ],
    };
    const chartDataCitoyennete = {
      labels: citoyennete.map((mois) => mois.mois),

      datasets: [
        {
          label: "Question n°8",
          data: dataVal8,
          backgroundColor: "rgb(30,55,  250)",
          borderColor: "rgba(30,55,  250, 0.4)",
        },
        {
          label: "Question n°9",
          data: dataVal9,
          backgroundColor: "rgb(55, 30, 50)",
          borderColor: "rgba(55, 30, 50, 0.4)",
        },

        {
          label: "Question n°10",
          data: dataVal10,
          backgroundColor: "rgb(50, 155, 30 )",
          borderColor: "rgba(50, 155, 30, 0.4)",
        },
        {
          label: "Question n°11",
          data: dataVal11,
          backgroundColor: "rgb( 230,120, 0)",
          borderColor: "rgba( 230,120, 0, 0.4)",
        },
        {
          label: "Question n°12",
          data: dataVal12,
          backgroundColor: "rgb(200, 130, 255)",
          borderColor: "rgba(200, 130, 255, 0.4)",
        },
        {
          label: "Question n°13",
          data: dataVal13,
          fill: false,
          backgroundColor: "rgb(255, 30, 150)",
          borderColor: "rgba(255, 30, 150, 0.4)",
        },
      ],
    };
    const chartDataFinance = {
      labels: finance.map((mois) => mois.mois),

      datasets: [
        {
          label: "Question n°1",
          data: dataVal14,
          backgroundColor: "rgb(30,55,  250)",
          borderColor: "rgba(30,55,  250, 0.4)",
        },
        {
          label: "Question n°2",
          data: dataVal15,
          backgroundColor: "rgb(55, 30, 50)",
          borderColor: "rgba(55, 30, 50, 0.4)",
        },
      ],
    };
    const chartDataLogement = {
      labels: logement.map((mois) => mois.mois),

      datasets: [
        {
          label: "Question n°1",
          data: dataVal16,
          backgroundColor: "rgb(30,55,  250)",
          borderColor: "rgba(30,55,  250, 0.4)",
        },
        {
          label: "Question n°2",
          data: dataVal17,
          backgroundColor: "rgb(55, 30, 50)",
          borderColor: "rgba(55, 30, 50, 0.4)",
        },

        {
          label: "Question n°3",
          data: dataVal18,
          backgroundColor: "rgb(50, 155, 30 )",
          borderColor: "rgba(50, 155, 30, 0.4)",
        },
        {
          label: "Question n°4",
          data: dataVal19,
          backgroundColor: "rgb( 230,120, 0)",
          borderColor: "rgba( 230,120, 0, 0.4)",
        },
        {
          label: "Question n°5",
          data: dataVal20,
          backgroundColor: "rgb(200, 130, 255)",
          borderColor: "rgba(200, 130, 255, 0.4)",
        },
        {
          label: "Question n°6",
          data: dataVal21,
          fill: false,
          backgroundColor: "rgb(255, 30, 150)",
          borderColor: "rgba(255, 30, 150, 0.4)",
        },
      ],
    };
    return (
      <Fragment>
        <div className="row">
          <div className="col-1">
            <NavReferent />
          </div>
          <div className="container-fluid conteneur col-12 col-xl-10">
            <h2>
              Bienvenue{" "}
              <strong>
                {" "}
                {currentUser.prenom} {currentUser.nom}
              </strong>{" "}
            </h2>
            <form onSubmit={this.searchBene}>
              <label for="name">Entrez le nom du bénéficiaire : </label>
              <input
                id="name"
                type="text"
                value={nom}
                onChange={this.handleBene}
              />
            </form>
            <div className="row">
              <div
                className="col-4 d-flex justify-content-center"
                style={{ marginBottom: "50px" }}
              >
                <div className="row">
                  <div className="col-12">
                    <h3>Santé</h3>
                  </div>
                  <div>
                    <Line
                      data={chartDataSante}
                      options={{
                        responsive: true,
                        title: { text: "Logement", display: true },
                        maintainAspectRatio: false,
                        scales: {
                          y: {
                            beginAtZero: true,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-4 d-flex justify-content-center"
                style={{ marginBottom: "50px" }}
              >
                <div className="row">
                  <div className="col-12">
                    <h3>Emploi</h3>
                  </div>
                  <div>
                    <Line
                      data={chartDataEmploi}
                      options={{
                        responsive: true,
                        title: { text: "Logement", display: true },
                        maintainAspectRatio: false,
                        scales: {
                          y: {
                            beginAtZero: true,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-4 d-flex justify-content-center"
                style={{ marginBottom: "50px" }}
              >
                <div className="row">
                  <div className="col-12">
                    <h3>Citoyennete</h3>
                  </div>
                  <div>
                    <Line
                      data={chartDataCitoyennete}
                      options={{
                        responsive: true,
                        title: { text: "Logement", display: true },
                        maintainAspectRatio: false,
                        scales: {
                          y: {
                            beginAtZero: true,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-4 d-flex justify-content-center"
                style={{ marginBottom: "50px" }}
              >
                <div className="row">
                  <div className="col-12">
                    <h3>Finance</h3>
                  </div>
                  <div>
                    <Line
                      data={chartDataFinance}
                      options={{
                        responsive: true,
                        title: { text: "Logement", display: true },
                        maintainAspectRatio: false,
                        scales: {
                          y: {
                            beginAtZero: true,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-4 d-flex justify-content-center"
                style={{ marginBottom: "50px" }}
              >
                <div className="row">
                  <div className="col-12">
                    <h3>Logement</h3>
                  </div>
                  <div>
                    <Line
                      data={chartDataLogement}
                      options={{
                        responsive: true,
                        title: { text: "Logement", display: true },
                        maintainAspectRatio: false,
                        scales: {
                          y: {
                            beginAtZero: true,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <div className="row">
                  <div className="col-12">
                    <h3>Mobilité</h3>
                  </div>
                  <div>
                    <Line
                      data={chartDataMobilite}
                      options={{
                        responsive: true,
                        title: { text: "Logement", display: true },
                        maintainAspectRatio: false,
                        scales: {
                          y: {
                            beginAtZero: true,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BoardReferent;
