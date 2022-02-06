import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import authHeader from "./../services/auth-header";

export default class ChartBeneficiaire extends Component {
  state = {
    userId: "",
    prenom: "thomas",
    mois: [],
    post: [],
    valeur: [],
  };

  componentDidMount() {
      
    axios
      .get(
        `https://mission-locale-heroku.herokuapp.com/api/posts/${this.state.prenom}/mobilite`,
        { headers: authHeader() }
      )

      .then((res) => {
        const mois = res.data;
        const valeur = res.data;
        console.log(mois);
        this.setState({ mois, valeur });
        return JSON.stringify(mois);
      });

  }

  render() {
    const { mois } = this.state;

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

    return (
      <div>
        <h3>Mobilite</h3>
        
          <Line
            data={chartData}
            options={{
              responsive: true,
              title: { text: "THICCNESS SCALE", display: true },
              maintainAspectRatio: true,
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
