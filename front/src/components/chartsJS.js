import axios from "axios";
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import AuthService from "../services/auth.service";
import authHeader from "./../services/auth-header";

class DynamicCharts extends Component {
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
      .get(`http://localhost:8080/api/posts/mobilite/${currentUser.nom}/mobilite`, {
        headers: authHeader(),
      })

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
      (Mobilite_question_1) => Mobilite_question_1.Mobilite_question_1
);
    const dataVal2 = mois.map(
      (Mobilite_question_2) => Mobilite_question_2.Mobilite_question_2
);
    const dataVal3 = mois.map(
      (Mobilite_question_3) => Mobilite_question_3.Mobilite_question_3
);
    const dataVal4 = mois.map(
      (Mobilite_question_4) => Mobilite_question_4.Mobilite_question_4
);
    const dataVal5 = mois.map(
      (Mobilite_question_5) => Mobilite_question_5.Mobilite_question_5
);
    const dataVal6 = mois.map(
      (Mobilite_question_6) => Mobilite_question_6.Mobilite_question_6
);
    const chartData = {
      labels: mois.map((mois) => mois.mois),

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
        {
          label: "Question n°6",
          data: dataVal6,
          fill: false,
          backgroundColor: "rgb(255, 30, 150)",
          borderColor: "rgba(255, 30, 150, 0.4)",
        },
      ],
    };
    console.log(chartData);
    return (
      <div className="">
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
export default DynamicCharts;
