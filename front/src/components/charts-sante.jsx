import axios from "axios";
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import AuthService from "../services/auth.service";
import PostDataService from '../services/post.service';
import authHeader from './../services/auth-header';

class DynamicCharts extends Component {
  state = {
    userId: "",
    mois: [],
    post:[],
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
    console.log(currentUser.prenom);

     axios
       .get(`https://mission-locale-heroku.herokuapp.com/api/posts/${currentUser.prenom}/sante`, { headers: authHeader() } )
      
       .then((res) => {
         const mois = res.data;
         console.log(mois);
         // const mois = JSON.stringify(preMois);
         // mois.toString();
         const valeur = res.data;
         this.setState({ mois, valeur });
         console.log(mois.mois);
         return JSON.stringify(mois);
       });

     PostDataService.getAll()
       .then((res) => {
         const post = res.data;
         this.setState({ post});
         console.log(post);
       })
       .catch(e => {
         
         console.log(e);
       })
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
    console.log(chartData);
    return (
      <div>
        <h3>Bar Chart</h3>
        <div>
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
      </div>
    );
  }
}
export default ChartsSante;
