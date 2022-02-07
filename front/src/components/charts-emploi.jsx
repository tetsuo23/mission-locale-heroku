import axios from "axios";
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import AuthService from "../services/auth.service";
import authHeader from "./../services/auth-header";

class ChartsEmploi extends Component {
  state = {
    userId: "",
    mois: [],
    post: [],
    valeur: [],
    currentUser: {
      prenom: "",
      nom: "",
      id: "",
      mois: "",
      valeur: "",
      userId: "",
    },
  };
  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    this.setState({ currentUser: currentUser, userReady: true });

    axios
      .get(
        `http://localhost:8080/api/posts/emploi/${currentUser.nom}/emploi`,
        { headers: authHeader() }
      )

      .then((res) => {
        const mois = res.data;
        const valeur = res.data;
        this.setState({ mois, valeur });
        return JSON.stringify(mois);
      });
  }

  render() {
    const { mois } = this.state;
    const dataVal5 = mois.map(
      (Emploi_5) => Emploi_5.Emploi_5
);
    const dataVal6 = mois.map(
      (Emploi_6) => Emploi_6.Emploi_6
);

    const chartData = {
      labels: mois.map((mois) => mois.mois),

      datasets: [
        {
          label: "Question n°17",
          data: dataVal5,
          backgroundColor: "rgb(30,55,  250)",
          borderColor: "rgba(30,55,  250, 0.4)",
        },
        {
          label: "Question n°18",
          data: dataVal6,
          backgroundColor: "rgb(55, 30, 50)",
          borderColor: "rgba(55, 30, 50, 0.4)",
        },
      ],
    };
    console.log(chartData);
    return (
      
        <div>
          <Line
            className="canvasPerso"
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      
    );
  }
}
export default ChartsEmploi;
