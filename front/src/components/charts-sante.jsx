import axios from "axios";
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import AuthService from "../services/auth.service";
import authHeader from "./../services/auth-header";

class ChartsSante extends Component {
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
        `http://localhost:8080/api/posts/sante/${currentUser.nom}/sante`,
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

    const dataVal = mois.map((Sante_1) => Sante_1.Sante_1);
    const dataVal2 = mois.map((Sante_2) => Sante_2.Sante_2);
    const dataVal3 = mois.map((Sante_3) => Sante_3.Sante_3);
    const dataVal4 = mois.map((Sante_4) => Sante_4.Sante_4);
    
    const dataVal5 = mois.map((Sante_5) => Sante_5.Sante_5);
    

    const chartData = {
      labels: mois.map((mois) => mois.mois),

      datasets: [
        {
          label: "Question n°28",
          data: dataVal,
          backgroundColor: "rgb(30,55,  250)",
          borderColor: "rgba(30,55,  250, 0.4)",
        },
        {
          label: "Question n°29",
          data: dataVal2,
          backgroundColor: "rgb(55, 30, 50)",
          borderColor: "rgba(55, 30, 50, 0.4)",
        },

        {
          label: "Question n°30",
          data: dataVal3,
          backgroundColor: "rgb(50, 155, 30 )",
          borderColor: "rgba(50, 155, 30, 0.4)",
        },
        {
          label: "Question n°34",
          data: dataVal4,
          backgroundColor: "rgb( 230,120, 0)",
          borderColor: "rgba( 230,120, 0, 0.4)",
        },
        {
          label: "Question n°35",
          data: dataVal5,
          backgroundColor: "rgb(200, 130, 255)",
          borderColor: "rgba(200, 130, 255, 0.4)",
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
export default ChartsSante;
