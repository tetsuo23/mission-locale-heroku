import axios from "axios";
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import AuthService from "../services/auth.service";
import authHeader from "../services/auth-header";

class chartsLogement extends Component {
  state = {
    userId: "",
    mois: [],
    post: [],
    valeur2: [],
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
        `http://localhost:8080/api/posts/logement/${currentUser.prenom}/logement`,
        { headers: authHeader() }
      )

      .then((res) => {
        const mois = res.data;
        const valeur2 = res.data;
        this.setState({ mois, valeur2 });
        console.log(mois);
        return JSON.stringify(mois);
      });
  }

  render() {
    const { mois } = this.state;

    const dataVal = mois.map((Logement_question_1) => Logement_question_1.Logement_question_1);
    const dataVal2 = mois.map((Logement_question_2) => Logement_question_2.Logement_question_2);
    const dataVal3 = mois.map((Logement_question_3) => Logement_question_3.Logement_question_3);
    const dataVal4 = mois.map((Logement_question_4) => Logement_question_4.Logement_question_4);
    const dataVal5 = mois.map((Logement_question_5) => Logement_question_5.Logement_question_5);
    const dataVal6 = mois.map((Logement_question_6) => Logement_question_6.Logement_question_6);
console.log(mois);
    const chartData = {
      labels: mois.map((mois) => mois.mois),

      datasets: [
        {
          label: "Question n°12",
          data: dataVal,
          backgroundColor: "rgb(30,55,  250)",
          borderColor: "rgba(30,55,  250, 0.4)",
        }
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
export default chartsLogement;
