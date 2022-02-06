import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import authHeader from "./../services/auth-header";

export default class referentBeneficiaire extends Component {
  state = {
    userId: "",
    prenom: "sylvain",
    mois: [],
    sante: [],
    mobilite: [],
    finance: [],
    citoyennete: [],
    emploi: [],
    valeur: [],
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/api/posts/logement/${this.state.prenom}/logement`,
        { headers: authHeader() }
      )

      .then((res) => {
        const mois = res.data;
        const valeur = res.data;
        console.log(mois);
        this.setState({ mois, valeur });
        return JSON.stringify(mois);
      });

    axios
      .get(
        `http://localhost:8080/api/posts/sante/${this.state.prenom}/sante`,
        { headers: authHeader() }
      )

      .then((res) => {
        const sante = res.data;
        const valeur = res.data;
        console.log(sante);
        this.setState({ sante, valeur });
        return JSON.stringify(sante);
      });

    axios
      .get(
        `http://localhost:8080/api/posts/mobilite/${this.state.prenom}/mobilite`,
        { headers: authHeader() }
      )

      .then((res) => {
        const mobilite = res.data;
        const valeur = res.data;
        console.log(mobilite);
        this.setState({ mobilite, valeur });
        return JSON.stringify(mobilite);
      });

    axios
      .get(
        `http://localhost:8080/api/posts/citoyennete/${this.state.prenom}/citoyennete`,
        { headers: authHeader() }
      )

      .then((res) => {
        const citoyennete = res.data;
        const valeur = res.data;
        console.log(citoyennete);
        this.setState({ citoyennete, valeur });
        return JSON.stringify(citoyennete);
      });

    axios
      .get(
        `http://localhost:8080/api/posts/finance/${this.state.prenom}/finance`,
        { headers: authHeader() }
      )

      .then((res) => {
        const finance = res.data;
        const valeur = res.data;
        console.log(finance);
        this.setState({ finance, valeur });
        return JSON.stringify(finance);
      });

    axios
      .get(
        `http://localhost:8080/api/posts/emploi/${this.state.prenom}/emploi`,
        { headers: authHeader() }
      )

      .then((res) => {
        const emploi = res.data;
        const valeur = res.data;
        console.log(emploi);
        this.setState({ emploi, valeur });
        return JSON.stringify(emploi);
      });
  }

  render() {
    const { mois, sante, mobilite, citoyennete, finance, emploi } = this.state;
    const chartData = {
      labels: mois.map((mois) => mois.mois),

      datasets: [
        {
          label: "# of Votes",
          data: mois.map((valeur) => valeur.valeur),
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    };

    const chartDataSante = {
      labels: sante.map((mois) => mois.mois),

      datasets: [
        {
          label: "# of Votes",
          data: sante.map((valeur) => valeur.valeur),
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    };
    const chartDataMobilite = {
      labels: mobilite.map((mois) => mois.mois),

      datasets: [
        {
          label: "# of Votes",
          data: mobilite.map((valeur) => valeur.valeur),
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    };
    const chartDataCitoyennete = {
      labels: citoyennete.map((mois) => mois.mois),

      datasets: [
        {
          label: "# of Votes",
          data: citoyennete.map((valeur) => valeur.valeur),
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    };
    const chartDataFinance = {
      labels: finance.map((mois) => mois.mois),

      datasets: [
        {
          label: "# of Votes",
          data: finance.map((valeur) => valeur.valeur),
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    };
    const chartDataEmploi = {
      labels: emploi.map((mois) => mois.mois),

      datasets: [
        {
          label: "# of Votes",
          data: emploi.map((valeur) => valeur.valeur),
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    };
    return (
      <div style={{ padding: "2%" }}>
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
                  data={chartData}
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
    );
  }
}
