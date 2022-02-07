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
      nom: "",
      content: "",
      currentUser: { nom: "", prenom: "" },
      finance: [],
      mois: [],
      logement: [],
      Logement_question_2_1: "",
      Logement_question_2_2: "",
      Logement_question_2_3: "",
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
    // axios
    //   .get(
    //     `http://localhost:8080/api/posts/mobilite/${this.state.nom}/mobilite`,
    //     { headers: authHeader() }
    //   )
    //   .then((res) => {
    //     const mobilite = res.data;
    //     const valeur = res.data;
    //     this.setState({ mobilite, valeur });
    //     return JSON.stringify(mobilite);
    //   });
    // axios
    //   .get(
    //     `http://localhost:8080/api/posts/logement/${this.state.nom}/logement`,
    //     { headers: authHeader() }
    //   )
    //   .then((res) => {
    //     const logement = res.data;
    //     const valeur = res.data;
    //     console.log(logement);
    //     this.setState({ logement, valeur });
    //     return JSON.stringify(logement);
    //   });
    // axios
    //   .get(
    //     `http://localhost:8080/api/posts/finance/${this.state.nom}/finance`,
    //     { headers: authHeader() }
    //   )
    //   .then((res) => {
    //     const finance = res.data;
    //     const valeur = res.data;
    //     this.setState({ finance, valeur });
    //     return JSON.stringify(finance);
    //   });
    // axios
    //   .get(`http://localhost:8080/api/posts/emploi/${this.state.nom}/emploi`, {
    //     headers: authHeader(),
    //   })
    //   .then((res) => {
    //     const emploi = res.data;
    //     const valeur = res.data;
    //     this.setState({ emploi, valeur });
    //     return JSON.stringify(emploi);
    //   });
    // axios
    //   .get(
    //     `http://localhost:8080/api/posts/citoyennete/${this.state.nom}/citoyennete`,
    //     { headers: authHeader() }
    //   )
    //   .then((res) => {
    //     const citoyennete = res.data;
    //     const valeur = res.data;
    //     this.setState({ citoyennete, valeur });
    //     return JSON.stringify(citoyennete);
    //   });
    // axios
    //   .get(`http://localhost:8080/api/posts/sante/${this.state.nom}/sante`, {
    //     headers: authHeader(),
    //   })
    //   .then((res) => {
    //     const sante = res.data;
    //     const valeur = res.data;
    //     console.log(sante);
    //     this.setState({ sante, valeur });
    //     return JSON.stringify(sante);
    //   });
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
    const dataVal8 = citoyennete.map(
      (Citoyennete_3) => Citoyennete_3.Citoyennete_3
    );
    const dataVal9 = citoyennete.map(
      (Citoyennete_4) => Citoyennete_4.Citoyennete_4
    );
    const dataVal10 = citoyennete.map(
      (Citoyennete_5) => Citoyennete_5.Citoyennete_5
    );
    const dataVal11 = citoyennete.map(
      (Citoyennete_6) => Citoyennete_6.Citoyennete_6
    );
    const dataVal12 = citoyennete.map(
      (Citoyennete_7) => Citoyennete_7.Citoyennete_7
    );
    const dataVal13 = citoyennete.map(
      (Citoyennete_8) => Citoyennete_8.Citoyennete_8
    );
    const dataVal14 = finance.map(
      (Finance_question_1) => Finance_question_1.Finance_question_1
    );
    const dataVal15 = finance.map(
      (Finance_question_2) => Finance_question_2.Finance_question_2
    );
    const dataVal16 = logement.map(
      (Logement_question_1) => Logement_question_1.Logement_question_1
    );
    // const dataVal17 = logement.map(
    //   (Logement_question_2) => Logement_question_2.Logement_question_2
    // );
    // const dataVal18 = logement.map(
    //   (Logement_question_3) => Logement_question_3.Logement_question_3
    // );
    // const dataVal19 = logement.map(
    //   (Logement_question_4) => Logement_question_4.Logement_question_4
    // );
    // const dataVal20 = logement.map(
    //   (Logement_question_5) => Logement_question_5.Logement_question_5
    // );
    // const dataVal21 = logement.map(
    //   (Logement_question_6) => Logement_question_6.Logement_question_6
    // );
    const dataVal22 = mobilite.map(
      (Mobilite_question_1) => Mobilite_question_1.Mobilite_question_1
    );
    const dataVal23 = mobilite.map(
      (Mobilite_question_2) => Mobilite_question_2.Mobilite_question_2
    );
    const dataVal24 = mobilite.map(
      (Mobilite_question_3) => Mobilite_question_3.Mobilite_question_3
    );
    const dataVal25 = mobilite.map(
      (Mobilite_question_4) => Mobilite_question_4.Mobilite_question_4
    );
    const dataVal26 = mobilite.map(
      (Mobilite_question_5) => Mobilite_question_5.Mobilite_question_5
    );
    const dataVal27 = mobilite.map(
      (Mobilite_question_6) => Mobilite_question_6.Mobilite_question_6
    );
    console.log(logement);
    const chartDataSante = {
      labels: sante.map((mois) => mois.mois),

      datasets: [
        {
          label: "n°28",
          data: dataVal,
          backgroundColor: "rgb(30,55,  250)",
          borderColor: "rgba(30,55,  250, 0.4)",
        },
        {
          label: "n°29",
          data: dataVal2,
          backgroundColor: "rgb(55, 30, 50)",
          borderColor: "rgba(55, 30, 50, 0.4)",
        },

        // {
        //   label: "n°30",
        //   data: dataVal3,
        //   backgroundColor: "rgb(50, 155, 30 )",
        //   borderColor: "rgba(50, 155, 30, 0.4)",
        // },
        {
          label: "n°34",
          data: dataVal4,
          backgroundColor: "rgb( 230,120, 0)",
          borderColor: "rgba( 230,120, 0, 0.4)",
        },
        {
          label: "n°35",
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
          label: "n°17",
          data: dataVal6,
          backgroundColor: "rgb(30,55,  250)",
          borderColor: "rgba(30,55,  250, 0.4)",
        },
        {
          label: "n°18",
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
          label: "n°1",
          data: dataVal22,
          backgroundColor: "rgb(30,55,  250)",
          borderColor: "rgba(30,55,  250, 0.4)",
        },
        {
          label: "n°2",
          data: dataVal23,
          backgroundColor: "rgb(55, 30, 50)",
          borderColor: "rgba(55, 30, 50, 0.4)",
        },

        {
          label: "n°3",
          data: dataVal24,
          backgroundColor: "rgb(50, 155, 30 )",
          borderColor: "rgba(50, 155, 30, 0.4)",
        },
        {
          label: "n°4",
          data: dataVal25,
          backgroundColor: "rgb( 230,120, 0)",
          borderColor: "rgba( 230,120, 0, 0.4)",
        },
        {
          label: "n°5",
          data: dataVal26,
          backgroundColor: "rgb(200, 130, 255)",
          borderColor: "rgba(200, 130, 255, 0.4)",
        },
        {
          label: "n°6",
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
          label: "n°22",
          data: dataVal8,
          backgroundColor: "rgb(30,55,  250)",
          borderColor: "rgba(30,55,  250, 0.4)",
        },
        {
          label: "n°23",
          data: dataVal9,
          backgroundColor: "rgb(55, 30, 50)",
          borderColor: "rgba(55, 30, 50, 0.4)",
        },

        {
          label: "n°24",
          data: dataVal10,
          backgroundColor: "rgb(50, 155, 30 )",
          borderColor: "rgba(50, 155, 30, 0.4)",
        },
        {
          label: "n°25",
          data: dataVal11,
          backgroundColor: "rgb( 230,120, 0)",
          borderColor: "rgba( 230,120, 0, 0.4)",
        },
        {
          label: "n°26",
          data: dataVal12,
          backgroundColor: "rgb(200, 130, 255)",
          borderColor: "rgba(200, 130, 255, 0.4)",
        },
        {
          label: "n°27",
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
          label: "n°9",
          data: dataVal14,
          backgroundColor: "rgb(30,55,  250)",
          borderColor: "rgba(30,55,  250, 0.4)",
        },
        {
          label: "n°10",
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
          label: "n°7",
          data: dataVal16,
          backgroundColor: "rgb(30,55,  250)",
          borderColor: "rgba(30,55,  250, 0.4)",
        },
      ],
    };

    const { valData } = this.state;
    const dataValue8 = logement.map((Logement_question_2_1, index) => {
      if (logement.length - 1 === index) {
        return `${Logement_question_2_1.Logement_question_2_1}`;
      }
    });
    const dataValue11 = finance.map((Finance_question_3_1, index) => {
      if (finance.length - 1 === index) {
        return `${Finance_question_3_1.Finance_question_3_1}`;
      }
    });
    const dataValue12 = finance.map((Finance_question_3_2, index) => {
      if (finance.length - 1 === index) {
        return `${Finance_question_3_2.Finance_question_3_2}`;
      }
    });
    const dataValue13 = finance.map((Finance_question_3_3, index) => {
      if (finance.length - 1 === index) {
        return `${Finance_question_3_3.Finance_question_3_3}`;
      }
    });
    const dataValue14 = finance.map((Finance_question_3_4, index) => {
      if (finance.length - 1 === index) {
        return `${Finance_question_3_4.Finance_question_3_4}`;
      }
    });
    const dataValue15 = finance.map((Finance_question_3_5, index) => {
      if (finance.length - 1 === index) {
        return `${Finance_question_3_5.Finance_question_3_5}`;
      }
    });
    const dataValue16 = finance.map((Finance_question_4_1, index) => {
      if (finance.length - 1 === index) {
        return `${Finance_question_4_1.Finance_question_4_1}`;
      }
    });
    const dataValue17 = finance.map((Finance_question_4_2, index) => {
      if (finance.length - 1 === index) {
        return `${Finance_question_4_2.Finance_question_4_2}`;
      }
    });
    const dataValue18 = finance.map((Finance_question_4_3, index) => {
      if (finance.length - 1 === index) {
        return `${Finance_question_4_3.Finance_question_4_3}`;
      }
    });
    const dataValue19 = finance.map((Finance_question_4_4, index) => {
      if (finance.length - 1 === index) {
        return `${Finance_question_4_4.Finance_question_4_4}`;
      }
    });
    // ------------------------------------------------------------------------------------------------------------------
    const dataValue1_1 = emploi.map((Emploi_1_1, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_1_1.Emploi_1_1}`;
      }
    });
    const dataValue1_2 = emploi.map((Emploi_1_2, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_1_2.Emploi_1_2}`;
      }
    });
    const dataValue1_3 = emploi.map((Emploi_1_3, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_1_3.Emploi_1_3}`;
      }
    });
    const dataValue1_4 = emploi.map((Emploi_1_4, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_1_4.Emploi_1_4}`;
      }
    });
    const dataValue1_5 = emploi.map((Emploi_1_5, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_1_5.Emploi_1_5}`;
      }
    });
    const dataValue1_6 = emploi.map((Emploi_1_6, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_1_6.Emploi_1_6}`;
      }
    });
    const dataValue1_7 = emploi.map((Emploi_1_7, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_1_7.Emploi_1_7}`;
      }
    });

    const dataValue2_1 = emploi.map((Emploi_2_1, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_2_1.Emploi_2_1}`;
      }
    });
    const dataValue2_2 = emploi.map((Emploi_2_2, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_2_2.Emploi_2_2}`;
      }
    });
    const dataValue2_3 = emploi.map((Emploi_2_3, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_2_3.Emploi_2_3}`;
      }
    });
    const dataValue2_4 = emploi.map((Emploi_2_4, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_2_4.Emploi_2_4}`;
      }
    });
    const dataValue2_5 = emploi.map((Emploi_2_5, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_2_5.Emploi_2_5}`;
      }
    });
    const dataValue2_6 = emploi.map((Emploi_2_6, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_2_6.Emploi_2_6}`;
      }
    });

    const dataValue3_1 = emploi.map((Emploi_3_1, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_3_1.Emploi_3_1}`;
      }
    });
    const dataValue3_2 = emploi.map((Emploi_3_2, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_3_2.Emploi_3_2}`;
      }
    });
    const dataValue3_3 = emploi.map((Emploi_3_3, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_3_3.Emploi_3_3}`;
      }
    });
    const dataValue3_4 = emploi.map((Emploi_3_4, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_3_4.Emploi_3_4}`;
      }
    });
    const dataValue3_5 = emploi.map((Emploi_3_5, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_3_5.Emploi_3_5}`;
      }
    });
    const dataValue3_6 = emploi.map((Emploi_3_6, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_3_6.Emploi_3_6}`;
      }
    });

    const dataValue4_1 = emploi.map((Emploi_4_1, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_4_1.Emploi_4_1}`;
      }
    });
    const dataValue4_2 = emploi.map((Emploi_4_2, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_4_2.Emploi_4_2}`;
      }
    });
    const dataValue4_3 = emploi.map((Emploi_4_3, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_4_3.Emploi_4_3}`;
      }
    });
    const dataValue4_4 = emploi.map((Emploi_4_4, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_4_4.Emploi_4_4}`;
      }
    });
    const dataValue4_5 = emploi.map((Emploi_4_5, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_4_5.Emploi_4_5}`;
      }
    });
    const dataValue4_6 = emploi.map((Emploi_4_6, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_4_6.Emploi_4_6}`;
      }
    });
    const dataValue4_7 = emploi.map((Emploi_4_7, index) => {
      if (emploi.length - 1 === index) {
        return `${Emploi_4_7.Emploi_4_7}`;
      }
    });
    // ----------------------------------------------------------------------------------------------------------------

    const dataValue20 = citoyennete.map((Citoyennete_1_1, index) => {
      if (citoyennete.length - 1 === index) {
        console.log(`${Citoyennete_1_1.Citoyennete_1_1}`);
        return `${Citoyennete_1_1.Citoyennete_1_1}`;
      }
    });
    const dataValue21 = citoyennete.map((Citoyennete_1_2, index) => {
      if (citoyennete.length - 1 === index) {
        console.log(`${Citoyennete_1_2.Citoyennete_1_2}`);
        return `${Citoyennete_1_2.Citoyennete_1_2}`;
      }
    });
    const dataValue22 = citoyennete.map((Citoyennete_1_3, index) => {
      if (citoyennete.length - 1 === index) {
        console.log(`${Citoyennete_1_3.Citoyennete_1_3}`);
        return `${Citoyennete_1_3.Citoyennete_1_3}`;
      }
    });
    const dataValue23 = citoyennete.map((Citoyennete_1_4, index) => {
      if (citoyennete.length - 1 === index) {
        console.log(`${Citoyennete_1_4.Citoyennete_1_4}`);
        return `${Citoyennete_1_4.Citoyennete_1_4}`;
      }
    });
    const dataValue24 = citoyennete.map((Citoyennete_1_5, index) => {
      if (citoyennete.length - 1 === index) {
        console.log(`${Citoyennete_1_5.Citoyennete_1_5}`);
        return `${Citoyennete_1_5.Citoyennete_1_5}`;
      }
    });
    const dataValue25 = citoyennete.map((Citoyennete_2_1, index) => {
      if (citoyennete.length - 1 === index) {
        console.log(`${Citoyennete_2_1.Citoyennete_2_1}`);
        return `${Citoyennete_2_1.Citoyennete_2_1}`;
      }
    });
    const dataValue26 = citoyennete.map((Citoyennete_2_2, index) => {
      if (citoyennete.length - 1 === index) {
        console.log(`${Citoyennete_2_2.Citoyennete_2_2}`);
        return `${Citoyennete_2_2.Citoyennete_2_2}`;
      }
    });
    const dataValue27 = citoyennete.map((Citoyennete_2_3, index) => {
      if (citoyennete.length - 1 === index) {
        console.log(`${Citoyennete_2_3.Citoyennete_2_3}`);
        return `${Citoyennete_2_3.Citoyennete_2_3}`;
      }
    });
    const dataValue28 = citoyennete.map((Citoyennete_2_4, index) => {
      if (citoyennete.length - 1 === index) {
        console.log(`${Citoyennete_2_4.Citoyennete_2_4}`);
        return `${Citoyennete_2_4.Citoyennete_2_4}`;
      }
    });
    const dataValue29 = citoyennete.map((Citoyennete_2_5, index) => {
      if (citoyennete.length - 1 === index) {
        console.log(`${Citoyennete_2_5.Citoyennete_2_5}`);
        return `${Citoyennete_2_5.Citoyennete_2_5}`;
      }
    });
    const dataValue30 = citoyennete.map((Citoyennete_2_6, index) => {
      if (citoyennete.length - 1 === index) {
        console.log(`${Citoyennete_2_6.Citoyennete_2_6}`);
        return `${Citoyennete_2_6.Citoyennete_2_6}`;
      }
    });
    const dataValue31 = citoyennete.map((Citoyennete_2_7, index) => {
      if (citoyennete.length - 1 === index) {
        console.log(`${Citoyennete_2_7.Citoyennete_2_7}`);
        return `${Citoyennete_2_7.Citoyennete_2_7}`;
      }
    });

    // -----------------------------------------------------------------------------------------------

    const dataValue32 = sante.map((Sante_5_1, index) => {
      if (sante.length - 1 === index) {
        console.log(`${Sante_5_1.Sante_5_1}`);
        return `${Sante_5_1.Sante_5_1}`;
      }
    });
    const dataValue33 = sante.map((Sante_5_2, index) => {
      if (sante.length - 1 === index) {
        console.log(`${Sante_5_2.Sante_5_2}`);
        return `${Sante_5_2.Sante_5_2}`;
      }
    });
    const dataValue34 = sante.map((Sante_5_3, index) => {
      if (sante.length - 1 === index) {
        console.log(`${Sante_5_3.Sante_5_3}`);
        return `${Sante_5_3.Sante_5_3}`;
      }
    });
    const dataValue35 = sante.map((Sante_4_1, index) => {
      if (sante.length - 1 === index) {
        console.log(`${Sante_4_1.Sante_4_1}`);
        return `${Sante_4_1.Sante_4_1}`;
      }
    });
    const dataValue36 = sante.map((Sante_4_2, index) => {
      if (sante.length - 1 === index) {
        console.log(`${Sante_4_2.Sante_4_2}`);
        return `${Sante_4_2.Sante_4_2}`;
      }
    });
    const dataValue37 = sante.map((Sante_4_3, index) => {
      if (sante.length - 1 === index) {
        console.log(`${Sante_4_3.Sante_4_3}`);
        return `${Sante_4_3.Sante_4_3}`;
      }
    });
    const dataValue38 = sante.map((Sante_4_4, index) => {
      if (sante.length - 1 === index) {
        console.log(`${Sante_4_4.Sante_4_4}`);
        return `${Sante_4_4.Sante_4_4}`;
      }
    });

    return (
      <Fragment>
        <div className="row">
          <div
            className="container-fluid conteneur col-12 col-xl-12"
            style={{
              background: "#00000011",
              margin: "1% 0 1% 0",
            }}
          >
            
              <div className="row"
              style={{
                background: "#00000011",
                margin: "1% 0 1% 0",
                padding: "2%",
              }}>
                <div className="col-6">
                  <h2>
                    Bienvenue {currentUser.prenom} {currentUser.nom}{" "}
                  </h2>
                </div>

                <div className="col-6">
                  <form onSubmit={this.searchBene}>
                    <strong>Entrez le nom du bénéficiaire :&nbsp;</strong> 
                    <input
                      id="name"
                      type="text"
                      value={nom}
                      onChange={this.handleBene}
                    />
                  </form>
                </div>
              </div>
            
            <div className="row">
              <div className="col-12">
                <h3>Mobilité</h3>
              </div>
              <div className="col-12 col-lg-6">
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
              <div className="col-12 col-lg-6">
                <div className="row">
                  <div className="col-6">
                    <p>1. Je fais le point sur le permis de conduire.</p>
                    <p>2. Je n'ai aucun permis mais...</p>
                    <ul>
                      <li>Je suis inscrit dans une auto-école</li>
                      <li>J'ai commencé les leçons de conduite</li>
                      <li>J'ai obtenu le code de la route</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <p>3. Je peux me déplacer d'un point à un autre</p>
                    <p>4. Je dispose d'un moyen de locomotion.</p>
                    <p>5. Je suis mobile dans un rayon de :</p>
                    <p>
                      6. J'ai des difficultés financières liées à mes
                      déplacements
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{
                background: "#00000011",
                margin: "1% 0 1% 0",
                padding: "2%",
              }}
            >
              <div className="row">
                <div className="col-12">
                  <h3>Logement</h3>
                </div>
                <div className="col-12 col-lg-6">
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

                <div className="col-12 col-lg-6">
                  <p>
                    7. Parmi les affirmations suivantes, laquelle correspond le
                    mieux à votre situation ?
                  </p>
                  <ul>
                    <li>Je n'ai pas de logement J'ai un logement à moi</li>
                    <li>J'habite chez mes parents</li>
                    <li>J'habite chez un membre de ma famille</li>
                    <li>J'habite chez des amis</li>
                    <li>J'habite en foyer</li>
                  </ul>
                  <div className="orange" style={{ padding: "2%" }}>
                    <strong>Les dernières entrées sont :</strong><p>{dataValue8}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <h3>Finance</h3>
              </div>
              <div className="col-12 col-lg-6">
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

              <div className="col-12 col-lg-6">
                <p>9. J'ai des difficultés financières</p>
                <p>10. J'ai déjà été à découvert</p>
                <div className="orange" style={{ padding: "2%" }}>
                  <strong>Les dernières entrées sont :</strong><p>{dataValue11}</p>
                  <p>{dataValue12}</p>
                  <p>{dataValue13}</p>
                  <p>{dataValue14}</p>
                  <p>{dataValue15}</p>
                  <p>{dataValue16}</p>
                  <p>{dataValue17}</p>
                  <p>{dataValue18}</p>
                  <p>{dataValue19}</p>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{
                background: "#00000011",
               
                margin: "1% 0 1% 0", padding: "2%",
              }}
            >
              <div className="row">
                <div className="col-12">
                  <h3>Emploi</h3>
                </div>
                <div className="col-12 col-lg-7">
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

                <div className="col-12 col-lg-5">
                  <p>
                    17. Quelle est la durée de mon dernier contrat de travail ?
                  </p>
                  <p>18. Ma dernière démarche remonte à</p>
                  <div className="orange" style={{ padding: "2%" }}>
                    <strong>Les dernières entrées sont :</strong><p>{dataValue1_1}</p>
                    <p>{dataValue1_2}</p>
                    <p>{dataValue1_3}</p>
                    <p>{dataValue1_4}</p>
                    <p>{dataValue1_5}</p>
                    <p>{dataValue1_6}</p>
                    <p>{dataValue1_7}</p>
                    <p>{dataValue2_1}</p>
                    <p>{dataValue2_2}</p>
                    <p>{dataValue2_3}</p>
                    <p>{dataValue2_4}</p>
                    <p>{dataValue2_5}</p>
                    <p>{dataValue2_6}</p>
                    <p>{dataValue3_1}</p>
                    <p>{dataValue3_2}</p>
                    <p>{dataValue3_3}</p>
                    <p>{dataValue3_4}</p>
                    <p>{dataValue3_5}</p>
                    <p>{dataValue3_6}</p>
                    <p>{dataValue4_1}</p>
                    <p>{dataValue4_2}</p>
                    <p>{dataValue4_3}</p>
                    <p>{dataValue4_4}</p>
                    <p>{dataValue4_5}</p>
                    <p>{dataValue4_6}</p>
                    <p>{dataValue4_7}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <h3>Citoyenneté</h3>
              </div>
              <div className="col-12 col-lg-6">
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

              <div className="col-12 col-lg-6">
                <p>
                  22. Je pratique une activité culturelle et/ou artistique
                  (chant, dessin, sculpture...)
                </p>
                <p>
                  23.Je regarde des séries sur des plateformes (Netflix, OCS,
                  Disney, Amazon prime ...)
                </p>
                <p>24.Je vais en bibliothèque / médiathèque</p>
                <p>25.Je vais à des concerts</p>
                <p>26.Je vais au cinéma</p>
                <p>27.Je joue en ligne et/ou à des jeux sur console</p>
                <div className="orange" style={{ padding: "2%" }}>
                  <strong>Les dernières entrées sont :</strong><p>{dataValue20}</p>
                  <p>{dataValue21}</p>
                  <p>{dataValue22}</p>
                  <p>{dataValue23}</p>
                  <p>{dataValue24}</p>
                  <p>{dataValue25}</p>
                  <p>{dataValue26}</p>
                  <p>{dataValue27}</p>
                  <p>{dataValue28}</p>
                  <p>{dataValue29}</p>
                  <p>{dataValue30}</p>
                  <p>{dataValue31}</p>
                </div>
              </div>

              <div
                className="row"
                style={{
                  background: "#00000011",
                  padding: "2%",
                  margin: "1% 0 1% 0",
                }}
              >
                <div className="row">
                  <div className="col-12">
                    <h3>Santé</h3>
                  </div>
                  <div className="col-12 col-lg-7">
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

                  <div className="col-12 col-lg-5">
                    <p>28. Sur le plan administratif.</p>
                    <p>
                      29. La dernière fois que je suis allé chez le medecin
                      c'était :
                    </p>
                    <p>34. Je suis licencié dans un club de sport</p>
                    <p>35. Je pratique une activité physique seul</p>
                    <div className="orange" style={{ padding: "2%" }}>
                      <strong>Les dernières entrées sont :</strong><p>{dataValue32}</p>
                      <p>{dataValue33}</p>
                      <p>{dataValue34}</p>
                      <p>{dataValue35}</p>
                      <p>{dataValue36}</p>
                      <p>{dataValue37}</p>
                      <p>{dataValue38}</p>
                    </div>
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
