import axios from "axios";
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import AuthService from "../services/auth.service";
import authHeader from "./../services/auth-header";

class ChartsFinance extends Component {
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
        `http://localhost:8080/api/posts/finance/${currentUser.nom}/finance`,
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

    const dataVal = mois.map(
      (Finance_question_1) => Finance_question_1.Finance_question_1
    );
    const dataVal2 = mois.map(
      (Finance_question_2) => Finance_question_2.Finance_question_2
    );

    const chartData = {
      labels: mois.map((mois) => mois.mois),

      datasets: [
        {
          label: "Question n°9",
          data: dataVal,
          backgroundColor: "rgb(30,55,  250)",
          borderColor: "rgba(30,55,  250, 0.4)",
        },
        {
          label: "Question n°10",
          data: dataVal2,
          backgroundColor: "rgb(55, 30, 50)",
          borderColor: "rgba(55, 30, 50, 0.4)",
        },
      ],
    };
    console.log(chartData);
    return (
      <div>
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
      </div>
    );
  }
}
export default ChartsFinance;
