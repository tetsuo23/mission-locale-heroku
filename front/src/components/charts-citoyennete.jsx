import axios from "axios";
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import AuthService from "../services/auth.service";
import authHeader from "./../services/auth-header";

class ChartsCitoyennete extends Component {
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
        `http://localhost:8080/api/posts/citoyennete/${currentUser.nom}/citoyennete`,
        { headers: authHeader() }
      )

      .then((res) => {
        const mois = res.data;
        const valeur = res.data;
        this.setState({ mois, valeur });
        console.log(res.data);
        return JSON.stringify(mois);
      });
  }

  render() {
    const { mois } = this.state;

    const dataVal3 = mois.map((Citoyennete_3) => Citoyennete_3.Citoyennete_3);
    const dataVal4 = mois.map((Citoyennete_4) => Citoyennete_4.Citoyennete_4);
    const dataVal5 = mois.map((Citoyennete_5) => Citoyennete_5.Citoyennete_5);
    const dataVal6 = mois.map((Citoyennete_6) => Citoyennete_6.Citoyennete_6);
    const dataVal7 = mois.map((Citoyennete_7) => Citoyennete_7.Citoyennete_7);
    const dataVal8 = mois.map((Citoyennete_8) => Citoyennete_8.Citoyennete_8);
console.log(dataVal3);
    const chartData = {
      labels: mois.map((mois) => mois.mois),

      datasets: [
        {
          label: "Question n°22",
          data: dataVal3,
          backgroundColor: "rgb(30,55,  250)",
          borderColor: "rgba(30,55,  250, 0.4)",
        },
        {
          label: "Question n°23",
          data: dataVal4,
          backgroundColor: "rgb(55, 30, 50)",
          borderColor: "rgba(55, 30, 50, 0.4)",
        },

        {
          label: "Question n°24",
          data: dataVal5,
          backgroundColor: "rgb(50, 155, 30 )",
          borderColor: "rgba(50, 155, 30, 0.4)",
        },
        {
          label: "Question n°25",
          data: dataVal6,
          backgroundColor: "rgb( 230,120, 0)",
          borderColor: "rgba( 230,120, 0, 0.4)",
        },
        {
          label: "Question n°26",
          data: dataVal7,
          backgroundColor: "rgb(200, 130, 255)",
          borderColor: "rgba(200, 130, 255, 0.4)",
        },
        {
          label: "Question n°27",
          data: dataVal8,
          fill: false,
          backgroundColor: "rgb(255, 30, 150)",
          borderColor: "rgba(255, 30, 150, 0.4)",
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
export default ChartsCitoyennete;
