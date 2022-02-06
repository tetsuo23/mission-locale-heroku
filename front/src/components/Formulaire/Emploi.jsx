import React, { Component } from "react";
import axios from "axios";
import authHeader from "./../../services/auth-header";

import PostDataService from "./../../services/post.service";
import AuthService from "./../../services/auth.service";
import UserService from "./../../services/user.service";
import EventBus from "./../../common/EventBus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";

export default class Emploi2 extends Component {
  constructor(props) {
    super(props);

    this.onChangemois = this.onChangemois.bind(this);
    this.onChangeQ_1_1 = this.onChangeQ_1_1.bind(this);
    this.onChangeQ_1_2 = this.onChangeQ_1_2.bind(this);
    this.onChangeQ_1_3 = this.onChangeQ_1_3.bind(this);
    this.onChangeQ_1_4 = this.onChangeQ_1_4.bind(this);
    this.onChangeQ_1_5 = this.onChangeQ_1_5.bind(this);
    this.onChangeQ_1_6 = this.onChangeQ_1_6.bind(this);
    this.onChangeQ_1_7 = this.onChangeQ_1_7.bind(this);

    this.onChangeQ_2_1 = this.onChangeQ_2_1.bind(this);
    this.onChangeQ_2_2 = this.onChangeQ_2_2.bind(this);
    this.onChangeQ_2_3 = this.onChangeQ_2_3.bind(this);
    this.onChangeQ_2_4 = this.onChangeQ_2_4.bind(this);
    this.onChangeQ_2_5 = this.onChangeQ_2_5.bind(this);
    this.onChangeQ_2_6 = this.onChangeQ_2_6.bind(this);

    this.onChangeQ_3_1 = this.onChangeQ_3_1.bind(this);
    this.onChangeQ_3_2 = this.onChangeQ_3_2.bind(this);
    this.onChangeQ_3_3 = this.onChangeQ_3_3.bind(this);
    this.onChangeQ_3_4 = this.onChangeQ_3_4.bind(this);
    this.onChangeQ_3_5 = this.onChangeQ_3_5.bind(this);
    this.onChangeQ_3_6 = this.onChangeQ_3_6.bind(this);

    this.onChangeQ_4_1 = this.onChangeQ_4_1.bind(this);
    this.onChangeQ_4_2 = this.onChangeQ_4_2.bind(this);
    this.onChangeQ_4_3 = this.onChangeQ_4_3.bind(this);
    this.onChangeQ_4_4 = this.onChangeQ_4_4.bind(this);
    this.onChangeQ_4_5 = this.onChangeQ_4_5.bind(this);
    this.onChangeQ_4_6 = this.onChangeQ_4_6.bind(this);
    this.onChangeQ_4_7 = this.onChangeQ_4_7.bind(this);

    this.onChangeQ_5 = this.onChangeQ_5.bind(this);
    this.onChangeQ_6 = this.onChangeQ_6.bind(this);
    this.onChangeQ_7 = this.onChangeQ_7.bind(this);

    this.saveDonnee = this.saveDonnee.bind(this);
    this.newDonnee = this.newDonnee.bind(this);

    this.onClickQ1_1 = this.onClickQ1_1.bind(this);
    this.onClickQ1_2 = this.onClickQ1_2.bind(this);
    this.onClickQ1_3 = this.onClickQ1_3.bind(this);
    this.onClickQ1_4 = this.onClickQ1_4.bind(this);
    this.onClickQ1_5 = this.onClickQ1_5.bind(this);
    this.onClickQ1_6 = this.onClickQ1_6.bind(this);
    this.onClickQ1_7 = this.onClickQ1_7.bind(this);
    this.onClickQ2_1 = this.onClickQ2_1.bind(this);
    this.onClickQ2_2 = this.onClickQ2_2.bind(this);
    this.onClickQ2_3 = this.onClickQ2_3.bind(this);
    this.onClickQ2_4 = this.onClickQ2_4.bind(this);
    this.onClickQ2_5 = this.onClickQ2_5.bind(this);
    this.onClickQ2_6 = this.onClickQ2_6.bind(this);
    this.onClickQ3_1 = this.onClickQ3_1.bind(this);
    this.onClickQ3_2 = this.onClickQ3_2.bind(this);
    this.onClickQ3_3 = this.onClickQ3_3.bind(this);
    this.onClickQ3_4 = this.onClickQ3_4.bind(this);
    this.onClickQ3_5 = this.onClickQ3_5.bind(this);
    this.onClickQ3_6 = this.onClickQ3_6.bind(this);
    this.onClickQ4_1 = this.onClickQ4_1.bind(this);
    this.onClickQ4_2 = this.onClickQ4_2.bind(this);
    this.onClickQ4_3 = this.onClickQ4_3.bind(this);
    this.onClickQ4_4 = this.onClickQ4_4.bind(this);
    this.onClickQ4_5 = this.onClickQ4_5.bind(this);
    this.onClickQ4_6 = this.onClickQ4_6.bind(this);
    this.onClickQ4_7 = this.onClickQ4_7.bind(this);

    this.state = {
      id: null,
      mois: "",
      categorie: "Emploi",
      moisUser: "",
      valData: [],
      valeur: 0,

      Emploi_1_1: "",
      Emploi_1_2: "",
      Emploi_1_3: "",
      Emploi_1_4: "",
      Emploi_1_5: "",
      Emploi_1_6: "",
      Emploi_1_7: "",

      Emploi_2_1: "",
      Emploi_2_2: "",
      Emploi_2_3: "",
      Emploi_2_4: "",
      Emploi_2_5: "",
      Emploi_2_6: "",

      Emploi_3_1: "",
      Emploi_3_2: "",
      Emploi_3_3: "",
      Emploi_3_4: "",
      Emploi_3_5: "",
      Emploi_3_6: "",

      Emploi_4_1: "",
      Emploi_4_2: "",
      Emploi_4_3: "",
      Emploi_4_4: "",
      Emploi_4_5: "",
      Emploi_4_6: "",
      Emploi_4_7: "",

      Emploi_5: null,
      Emploi_6: null,
      Emploi_7: null,

      Q_1_1: true,
      Q_1_2: true,
      Q_1_3: true,
      Q_1_4: true,
      Q_1_5: true,
      Q_1_6: true,
      Q_1_7: true,
      Q_2_1: true,
      Q_2_2: true,
      Q_2_3: true,
      Q_2_4: true,
      Q_2_5: true,
      Q_2_6: true,
      Q_3_1: true,
      Q_3_2: true,
      Q_3_3: true,
      Q_3_4: true,
      Q_3_5: true,
      Q_3_6: true,
      Q_4_1: true,
      Q_4_2: true,
      Q_4_3: true,
      Q_4_4: true,
      Q_4_5: true,
      Q_4_6: true,
      Q_4_7: true,
      Q_5: null,
      Q_6: null,
      Q_7: null,

      currentUser: { prenom: "", nom: "" },
      submitted: false,
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

    axios
      .get(
        `http://localhost:8080/api/posts/emploi/${currentUser.prenom}/emploi`,
        { headers: authHeader() }
      )

      .then((res) => {
        const valData = res.data;
        const valeur2 = res.data;
        this.setState({ valData, valeur2 });
        console.log(valData);
        return JSON.stringify(valData);
      });

    let date = new Date();
    let longMonth = date.toLocaleString("fr-fr", { month: "long" });
    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({
      currentUser: currentUser,
      userReady: true,
      mois: longMonth,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.prenom !== this.state.prenom) {
      this.onChangevaleur();
    }
  }

  onChangemois(e) {
    this.setState({
      moisUser: e.target.value,
    });
  }

  onChangeQ_1_1(e) {
    this.setState({
      Q_1_1: !e.target.checked,
    });
  }
  onChangeQ_1_2(e) {
    this.setState({
      Q_1_2: !e.target.checked,
    });
  }
  onChangeQ_1_3(e) {
    this.setState({
      Q_1_3: !e.target.checked,
    });
  }
  onChangeQ_1_4(e) {
    this.setState({
      Q_1_4: !e.target.checked,
    });
  }
  onChangeQ_1_5(e) {
    this.setState({
      Q_1_5: !e.target.checked,
    });
  }
  onChangeQ_1_6(e) {
    this.setState({
      Q_1_6: !e.target.checked,
    });
  }
  onChangeQ_1_7(e) {
    this.setState({
      Q_1_7: !e.target.checked,
    });
  }
  onChangeQ_2_1(e) {
    this.setState({
      Q_2_1: !e.target.checked,
    });
  }
  onChangeQ_2_2(e) {
    this.setState({
      Q_2_2: !e.target.checked,
    });
  }
  onChangeQ_2_3(e) {
    this.setState({
      Q_2_3: !e.target.checked,
    });
  }
  onChangeQ_2_4(e) {
    this.setState({
      Q_2_4: !e.target.checked,
    });
  }
  onChangeQ_2_5(e) {
    this.setState({
      Q_2_5: !e.target.checked,
    });
  }
  onChangeQ_2_6(e) {
    this.setState({
      Q_2_6: !e.target.checked,
    });
  }
  onChangeQ_3_1(e) {
    this.setState({
      Q_3_1: !e.target.checked,
    });
  }
  onChangeQ_3_2(e) {
    this.setState({
      Q_3_2: !e.target.checked,
    });
  }
  onChangeQ_3_3(e) {
    this.setState({
      Q_3_3: !e.target.checked,
    });
  }
  onChangeQ_3_4(e) {
    this.setState({
      Q_3_4: !e.target.checked,
    });
  }
  onChangeQ_3_5(e) {
    this.setState({
      Q_3_5: !e.target.checked,
    });
  }
  onChangeQ_3_6(e) {
    this.setState({
      Q_3_6: !e.target.checked,
    });
  }
  onChangeQ_4_1(e) {
    this.setState({
      Q_4_1: !e.target.checked,
    });
  }
  onChangeQ_4_2(e) {
    this.setState({
      Q_4_2: !e.target.checked,
    });
  }
  onChangeQ_4_3(e) {
    this.setState({
      Q_4_3: !e.target.checked,
    });
  }
  onChangeQ_4_4(e) {
    this.setState({
      Q_4_4: !e.target.checked,
    });
  }
  onChangeQ_4_5(e) {
    this.setState({
      Q_4_5: !e.target.checked,
    });
  }
  onChangeQ_4_6(e) {
    this.setState({
      Q_4_6: !e.target.checked,
    });
  }
  onChangeQ_4_7(e) {
    this.setState({
      Q_4_7: !e.target.checked,
    });
  }
  onChangeQ_5(e) {
    this.setState({
      Q_5: Number(e.target.value),
    });
  }
  onChangeQ_6(e) {
    this.setState({
      Q_6: Number(e.target.value),
    });
  }
  onChangeQ_7(e) {
    this.setState({
      Q_7: Number(e.target.value),
    });
  }

  onClickQ1_1(e) {
    const Q1_1 = this.state.Q_1_1;
    if (Q1_1 === true) {
      this.setState({ Emploi_1_1: e.target.value });
    } else {
      this.setState({ Emploi_1_1: "" });
    }
  }
  onClickQ1_2(e) {
    const Q1_2 = this.state.Q_1_2;
    if (Q1_2 === true) {
      this.setState({ Emploi_1_2: e.target.value });
    } else {
      this.setState({ Emploi_1_2: "" });
    }
  }
  onClickQ1_3(e) {
    const Q1_3 = this.state.Q_1_3;
    if (Q1_3 === true) {
      this.setState({ Emploi_1_3: e.target.value });
    } else {
      this.setState({ Emploi_1_3: "" });
    }
  }
  onClickQ1_4(e) {
    const Q1_4 = this.state.Q_1_4;
    if (Q1_4 === true) {
      this.setState({ Emploi_1_4: e.target.value });
    } else {
      this.setState({ Emploi_1_4: "" });
    }
  }
  onClickQ1_5(e) {
    const Q1_5 = this.state.Q_1_5;
    if (Q1_5 === true) {
      this.setState({ Emploi_1_5: e.target.value });
    } else {
      this.setState({ Emploi_1_5: "" });
    }
  }
  onClickQ1_6(e) {
    const Q1_6 = this.state.Q_1_6;
    if (Q1_6 === true) {
      this.setState({ Emploi_1_6: e.target.value });
    } else {
      this.setState({ Emploi_1_6: "" });
    }
  }
  onClickQ1_7(e) {
    const Q1_7 = this.state.Q_1_7;
    if (Q1_7 === true) {
      this.setState({ Emploi_1_7: e.target.value });
    } else {
      this.setState({ Emploi_1_7: "" });
    }
  }

  onClickQ2_1(e) {
    const Q2_1 = this.state.Q_2_1;
    if (Q2_1 === true) {
      this.setState({ Emploi_2_1: e.target.value });
    } else {
      this.setState({ Emploi_2_1: "" });
    }
  }
  onClickQ2_2(e) {
    const Q2_2 = this.state.Q_2_2;
    if (Q2_2 === true) {
      this.setState({ Emploi_2_2: e.target.value });
    } else {
      this.setState({ Emploi_2_2: "" });
    }
  }
  onClickQ2_3(e) {
    const Q2_3 = this.state.Q_2_3;
    if (Q2_3 === true) {
      this.setState({ Emploi_2_3: e.target.value });
    } else {
      this.setState({ Emploi_2_3: "" });
    }
  }
  onClickQ2_4(e) {
    const Q2_4 = this.state.Q_2_4;
    if (Q2_4 === true) {
      this.setState({ Emploi_2_4: e.target.value });
    } else {
      this.setState({ Emploi_2_4: "" });
    }
  }
  onClickQ2_5(e) {
    const Q2_5 = this.state.Q_2_5;
    if (Q2_5 === true) {
      this.setState({ Emploi_2_5: e.target.value });
    } else {
      this.setState({ Emploi_2_5: "" });
    }
  }
  onClickQ2_6(e) {
    const Q2_6 = this.state.Q_2_6;
    if (Q2_6 === true) {
      this.setState({ Emploi_2_6: e.target.value });
    } else {
      this.setState({ Emploi_2_6: "" });
    }
  }

  onClickQ3_1(e) {
    const Q3_1 = this.state.Q_3_1;
    if (Q3_1 === true) {
      this.setState({ Emploi_3_1: e.target.value });
    } else {
      this.setState({ Emploi_3_1: "" });
    }
  }
  onClickQ3_2(e) {
    const Q3_2 = this.state.Q_3_2;
    if (Q3_2 === true) {
      this.setState({ Emploi_3_2: e.target.value });
    } else {
      this.setState({ Emploi_3_2: "" });
    }
  }
  onClickQ3_3(e) {
    const Q3_3 = this.state.Q_3_3;
    if (Q3_3 === true) {
      this.setState({ Emploi_3_3: e.target.value });
    } else {
      this.setState({ Emploi_3_3: "" });
    }
  }
  onClickQ3_4(e) {
    const Q3_4 = this.state.Q_3_4;
    if (Q3_4 === true) {
      this.setState({ Emploi_3_4: e.target.value });
    } else {
      this.setState({ Emploi_3_4: "" });
    }
  }
  onClickQ3_5(e) {
    const Q3_5 = this.state.Q_3_5;
    if (Q3_5 === true) {
      this.setState({ Emploi_3_5: e.target.value });
    } else {
      this.setState({ Emploi_3_5: "" });
    }
  }
  onClickQ3_6(e) {
    const Q3_6 = this.state.Q_3_6;
    if (Q3_6 === true) {
      this.setState({ Emploi_3_6: e.target.value });
    } else {
      this.setState({ Emploi_3_6: "" });
    }
  }

  onClickQ4_1(e) {
    const Q4_1 = this.state.Q_4_1;
    if (Q4_1 === true) {
      this.setState({ Emploi_4_1: e.target.value });
    } else {
      this.setState({ Emploi_4_1: "" });
    }
  }
  onClickQ4_2(e) {
    const Q4_2 = this.state.Q_4_2;
    if (Q4_2 === true) {
      this.setState({ Emploi_4_2: e.target.value });
    } else {
      this.setState({ Emploi_4_2: "" });
    }
  }
  onClickQ4_3(e) {
    const Q4_3 = this.state.Q_4_3;
    if (Q4_3 === true) {
      this.setState({ Emploi_4_3: e.target.value });
    } else {
      this.setState({ Emploi_4_3: "" });
    }
  }
  onClickQ4_4(e) {
    const Q4_4 = this.state.Q_4_4;
    if (Q4_4 === true) {
      this.setState({ Emploi_4_4: e.target.value });
    } else {
      this.setState({ Emploi_4_4: "" });
    }
  }
  onClickQ4_5(e) {
    const Q4_5 = this.state.Q_4_5;
    if (Q4_5 === true) {
      this.setState({ Emploi_4_5: e.target.value });
    } else {
      this.setState({ Emploi_4_5: "" });
    }
  }
  onClickQ4_6(e) {
    const Q4_6 = this.state.Q_4_6;
    if (Q4_6 === true) {
      this.setState({ Emploi_4_6: e.target.value });
    } else {
      this.setState({ Emploi_4_6: "" });
    }
  }
  onClickQ4_7(e) {
    const Q4_7 = this.state.Q_4_7;
    if (Q4_7 === true) {
      this.setState({ Emploi_4_7: e.target.value });
    } else {
      this.setState({ Emploi_4_7: "" });
    }
  }
  saveDonnee() {
    const user = { ...this.state.currentUser };
    const add = Number(this.state.Q_5) + Number(this.state.Q_6);
    var data = {
      mois: this.state.mois,
      total: add,
      userId: user.prenom,
      categorie: this.state.categorie,
      Emploi_1_1: this.state.Emploi_1_1,
      Emploi_1_2: this.state.Emploi_1_2,
      Emploi_1_3: this.state.Emploi_1_3,
      Emploi_1_4: this.state.Emploi_1_4,
      Emploi_1_5: this.state.Emploi_1_5,
      Emploi_1_6: this.state.Emploi_1_6,
      Emploi_1_7: this.state.Emploi_1_7,
      Emploi_2_1: this.state.Emploi_2_1,
      Emploi_2_2: this.state.Emploi_2_2,
      Emploi_2_3: this.state.Emploi_2_3,
      Emploi_2_4: this.state.Emploi_2_4,
      Emploi_2_5: this.state.Emploi_2_5,
      Emploi_2_6: this.state.Emploi_2_6,
      Emploi_3_1: this.state.Emploi_3_1,
      Emploi_3_2: this.state.Emploi_3_2,
      Emploi_3_3: this.state.Emploi_3_3,
      Emploi_3_4: this.state.Emploi_3_4,
      Emploi_3_5: this.state.Emploi_3_5,
      Emploi_3_6: this.state.Emploi_3_6,
      Emploi_4_1: this.state.Emploi_4_1,
      Emploi_4_2: this.state.Emploi_4_2,
      Emploi_4_3: this.state.Emploi_4_3,
      Emploi_4_4: this.state.Emploi_4_4,
      Emploi_4_5: this.state.Emploi_4_5,
      Emploi_4_6: this.state.Emploi_4_6,
      Emploi_4_7: this.state.Emploi_4_7,

      Emploi_5: this.state.Q_5,
      Emploi_6: this.state.Q_6,
      Emploi_7: this.state.Q_7,
    };
    console.log(data.Emploi_5, data.Emploi_6);
    PostDataService.createEmploi(data)
      .then((response) => {
        this.setState({
          userId: response.data.userId,
          mois: response.data.mois,
          Emploi_1_1: response.data.Emploi_1_1,
          Emploi_1_2: response.data.Emploi_1_2,
          Emploi_1_3: response.data.Emploi_1_3,
          Emploi_1_4: response.data.Emploi_1_4,
          Emploi_1_5: response.data.Emploi_1_5,
          Emploi_1_6: response.data.Emploi_1_6,
          Emploi_1_7: response.data.Emploi_1_7,
          Emploi_2_1: response.data.Emploi_2_1,
          Emploi_2_2: response.data.Emploi_2_2,
          Emploi_2_3: response.data.Emploi_2_3,
          Emploi_2_4: response.data.Emploi_2_4,
          Emploi_2_5: response.data.Emploi_2_5,
          Emploi_2_6: response.data.Emploi_2_6,
          Emploi_3_1: response.data.Emploi_3_1,
          Emploi_3_2: response.data.Emploi_3_2,
          Emploi_3_3: response.data.Emploi_3_3,
          Emploi_3_4: response.data.Emploi_3_4,
          Emploi_3_5: response.data.Emploi_3_5,
          Emploi_3_6: response.data.Emploi_3_6,
          Emploi_4_1: response.data.Emploi_4_1,
          Emploi_4_2: response.data.Emploi_4_2,
          Emploi_4_3: response.data.Emploi_4_3,
          Emploi_4_4: response.data.Emploi_4_4,
          Emploi_4_5: response.data.Emploi_4_5,
          Emploi_4_6: response.data.Emploi_4_6,
          Emploi_4_7: response.data.Emploi_4_7,
          Emploi_5: response.data.Emploi_5,
          Emploi_6: response.data.Emploi_6,
          Emploi_7: response.data.Emploi_7,
          total: response.data.total,
          categorie: response.data.categorie,
          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newDonnee() {
    this.setState({
      id: null,
      mois: "",
      categorie: "Emploi",
      moisUser: "",
      valeur: "",
      currentUser: { prenom: "", nom: "" },
      submitted: false,
    });
  }

  render() {
    const { valData } = this.state;

    const dataVal1_1 = valData.map((Emploi_1_1, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_1_1.Emploi_1_1}`);
        return `${Emploi_1_1.Emploi_1_1}`;
      }
    });
    const dataVal1_2 = valData.map((Emploi_1_2, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_1_2.Emploi_1_2}`);
        return `${Emploi_1_2.Emploi_1_2}`;
      }
    });
    const dataVal1_3 = valData.map((Emploi_1_3, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_1_3.Emploi_1_3}`);
        return `${Emploi_1_3.Emploi_1_3}`;
      }
    });
    const dataVal1_4 = valData.map((Emploi_1_4, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_1_4.Emploi_1_4}`);
        return `${Emploi_1_4.Emploi_1_4}`;
      }
    });
    const dataVal1_5 = valData.map((Emploi_1_5, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_1_5.Emploi_1_5}`);
        return `${Emploi_1_5.Emploi_1_5}`;
      }
    });
    const dataVal1_6 = valData.map((Emploi_1_6, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_1_6.Emploi_1_6}`);
        return `${Emploi_1_6.Emploi_1_6}`;
      }
    });
    const dataVal1_7 = valData.map((Emploi_1_7, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_1_7.Emploi_1_7}`);
        return `${Emploi_1_7.Emploi_1_7}`;
      }
    });

    const dataVal2_1 = valData.map((Emploi_2_1, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_2_1.Emploi_2_1}`);
        return `${Emploi_2_1.Emploi_2_1}`;
      }
    });
    const dataVal2_2 = valData.map((Emploi_2_2, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_2_2.Emploi_2_2}`);
        return `${Emploi_2_2.Emploi_2_2}`;
      }
    });
    const dataVal2_3 = valData.map((Emploi_2_3, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_2_3.Emploi_2_3}`);
        return `${Emploi_2_3.Emploi_2_3}`;
      }
    });
    const dataVal2_4 = valData.map((Emploi_2_4, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_2_4.Emploi_2_4}`);
        return `${Emploi_2_4.Emploi_2_4}`;
      }
    });
    const dataVal2_5 = valData.map((Emploi_2_5, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_2_5.Emploi_2_5}`);
        return `${Emploi_2_5.Emploi_2_5}`;
      }
    });
    const dataVal2_6 = valData.map((Emploi_2_6, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_2_6.Emploi_2_6}`);
        return `${Emploi_2_6.Emploi_2_6}`;
      }
    });

    const dataVal3_1 = valData.map((Emploi_3_1, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_3_1.Emploi_3_1}`);
        return `${Emploi_3_1.Emploi_3_1}`;
      }
    });
    const dataVal3_2 = valData.map((Emploi_3_2, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_3_2.Emploi_3_2}`);
        return `${Emploi_3_2.Emploi_3_2}`;
      }
    });
    const dataVal3_3 = valData.map((Emploi_3_3, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_3_3.Emploi_3_3}`);
        return `${Emploi_3_3.Emploi_3_3}`;
      }
    });
    const dataVal3_4 = valData.map((Emploi_3_4, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_3_4.Emploi_3_4}`);
        return `${Emploi_3_4.Emploi_3_4}`;
      }
    });
    const dataVal3_5 = valData.map((Emploi_3_5, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_3_5.Emploi_3_5}`);
        return `${Emploi_3_5.Emploi_3_5}`;
      }
    });
    const dataVal3_6 = valData.map((Emploi_3_6, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_3_6.Emploi_3_6}`);
        return `${Emploi_3_6.Emploi_3_6}`;
      }
    });

    const dataVal4_1 = valData.map((Emploi_4_1, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_4_1.Emploi_4_1}`);
        return `${Emploi_4_1.Emploi_4_1}`;
      }
    });
    const dataVal4_2 = valData.map((Emploi_4_2, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_4_2.Emploi_4_2}`);
        return `${Emploi_4_2.Emploi_4_2}`;
      }
    });
    const dataVal4_3 = valData.map((Emploi_4_3, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_4_3.Emploi_4_3}`);
        return `${Emploi_4_3.Emploi_4_3}`;
      }
    });
    const dataVal4_4 = valData.map((Emploi_4_4, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_4_4.Emploi_4_4}`);
        return `${Emploi_4_4.Emploi_4_4}`;
      }
    });
    const dataVal4_5 = valData.map((Emploi_4_5, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_4_5.Emploi_4_5}`);
        return `${Emploi_4_5.Emploi_4_5}`;
      }
    });
    const dataVal4_6 = valData.map((Emploi_4_6, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_4_6.Emploi_4_6}`);
        return `${Emploi_4_6.Emploi_4_6}`;
      }
    });
    const dataVal4_7 = valData.map((Emploi_4_7, index) => {
      if (valData.length - 1 === index) {
        console.log(`${Emploi_4_7.Emploi_4_7}`);
        return `${Emploi_4_7.Emploi_4_7}`;
      }
    });
    return (
      <div>
        <div
          style={{
            borderBottom: "2px solid black",
            marginTop: "2%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2>Emploi</h2>
          <div className="d-flex  d-none d-md-block">
            <FontAwesomeIcon icon="wrench" size="2x" id="icones" />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>21. Mes atouts liés à la recherche d'emploi</strong>
              </p>
              <p
                style={{
                  color: "#343434",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Plusieures réponses possibles.
              </p>
              <div className="checkboxBloc" style={{ padding: "0 0 0 5%" }}>
                <div className="row">
                  <div className="col-12 col-sm-5">
                    <Form.Check
                      checked={!this.state.Q_1_1}
                      onChange={this.onChangeQ_1_1}
                      onClick={this.onClickQ1_1}
                      type="checkbox"
                      label="J'ai un CV à jour "
                      value="J'ai un CV à jour "
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_1_2}
                      onChange={this.onChangeQ_1_2}
                      onClick={this.onClickQ1_2}
                      type="checkbox"
                      label="Je sais rédiger une lettre de motivation"
                      value="Je sais rédiger une lettre de motivation"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_1_3}
                      onChange={this.onChangeQ_1_3}
                      onClick={this.onClickQ1_3}
                      type="checkbox"
                      label="J'ai déjà postulé à un ou plusieurs emploi"
                      value="J'ai déjà postulé à un ou plusieurs emploi"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_1_4}
                      onChange={this.onChangeQ_1_4}
                      onClick={this.onClickQ1_4}
                      type="checkbox"
                      label="J'ai déjà participé à un entretien de recrutement"
                      value="J'ai déjà participé à un entretien de recrutement"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_1_5}
                      onChange={this.onChangeQ_1_5}
                      onClick={this.onClickQ1_5}
                      type="checkbox"
                      label="Rien de tout ça, mais je suis prêt à apprendre.."
                      value="Rien de tout ça, mais je suis prêt à apprendre.."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12">
                    <Form.Check
                      checked={!this.state.Q_1_6}
                      onChange={this.onChangeQ_1_6}
                      onClick={this.onClickQ1_6}
                      type="checkbox"
                      label="OK, j'ai pas mal d'atouts mais j'ai besoin de conseils pour revoir mon CV, ma lettre de motivation, etc."
                      value="OK, j'ai pas mal d'atouts mais j'ai besoin de conseils pour revoir mon CV, ma lettre de motivation, etc."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-1">
                    <Form.Check
                      checked={!this.state.Q_1_7}
                      onChange={this.onChangeQ_1_7}
                      onClick={this.onClickQ1_7}
                      type="checkbox"
                      label="Autre"
                      value="7"
                    />
                  </div>
                  <div className="col-12 col-sm-11">
                    <textarea
                      name=""
                      id=""
                      rows="1"
                      style={{
                        border: "none",
                        backgroundColor: "white",
                        borderBottom: "1px solid black",
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="orange" style={{ padding: "2%" }}>
                <strong>Les dernières entrées sont : </strong>
                <p>{dataVal1_1}</p>
                <p>{dataVal1_2}</p>
                <p>{dataVal1_3}</p>
                <p>{dataVal1_4}</p>
                <p>{dataVal1_5}</p>
                <p>{dataVal1_6}</p>
                <p>{dataVal1_7}</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>22. Mes atouts pour accéder à un emploi</strong>
              </p>
              <p
                style={{
                  color: "#343434",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Plusieures réponses possibles.
              </p>
              <div className="checkboxBloc" style={{ padding: "0 0 0 5%" }}>
                <div className="row">
                  <div className="col-12 col-sm-5">
                    <Form.Check
                      checked={!this.state.Q_2_1}
                      onChange={this.onChangeQ_2_1}
                      onClick={this.onClickQ2_1}
                      type="checkbox"
                      label="J'ai identifié un métier idéal"
                      value="J'ai identifié un métier idéal"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_2_2}
                      onChange={this.onChangeQ_2_2}
                      onClick={this.onClickQ2_2}
                      type="checkbox"
                      label="Je sais à quel(s) emploi(s) je souhaite postuler"
                      value="Je sais à quel(s) emploi(s) je souhaite postuler"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_2_3}
                      onChange={this.onChangeQ_2_3}
                      onClick={this.onClickQ2_3}
                      type="checkbox"
                      label="J'ai un diplôme en lien avec le métier que je vise "
                      value="J'ai un diplôme en lien avec le métier que je vise"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_2_4}
                      onChange={this.onChangeQ_2_4}
                      onClick={this.onClickQ2_4}
                      type="checkbox"
                      label="Je souhaite me former"
                      value="Je souhaite me former"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_2_5}
                      onChange={this.onChangeQ_2_5}
                      onClick={this.onClickQ2_5}
                      type="checkbox"
                      label="Je sais quelle formation je veux suivre"
                      value="Je sais quelle formation je veux suivre"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-10">
                    <Form.Check
                      checked={!this.state.Q_2_6}
                      onChange={this.onChangeQ_2_6}
                      onClick={this.onClickQ2_6}
                      type="checkbox"
                      label="Rien de tout ça, je veux être aidé pour structurer ma démarche d'accés à l'emploi"
                      value="Rien de tout ça, je veux être aidé pour structurer ma démarche d'accés à l'emploi"
                    />
                  </div>
                </div>
              </div>
              <div className="orange" style={{ padding: "2%" }}>
                <strong>Les dernières entrées sont : </strong>
                <p>{dataVal2_1}</p>
                <p>{dataVal2_2}</p>
                <p>{dataVal2_3}</p>
                <p>{dataVal2_4}</p>
                <p>{dataVal2_5}</p>
                <p>{dataVal2_6}</p>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          <div className="col-6">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>23. Mon expérience professionnelle</strong>
              </p>
              <p
                style={{
                  color: "#343434",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Plusieures réponses possibles.
              </p>
              <div className="checkboxBloc" style={{ padding: "0 0 0 5%" }}>
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <Form.Check
                      checked={!this.state.Q_3_1}
                      onChange={this.onChangeQ_3_1}
                      onClick={this.onClickQ3_1}
                      type="checkbox"
                      label="J'ai travaillé comme saisonnier / job d'été"
                      value="J'ai travaillé comme saisonnier / job d'été"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_3_2}
                      onChange={this.onChangeQ_3_2}
                      onClick={this.onClickQ3_2}
                      _
                      type="checkbox"
                      label="J'ai travaillé en apprentissage "
                      value="J'ai travaillé en apprentissage"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_3_3}
                      onChange={this.onChangeQ_3_3}
                      onClick={this.onClickQ3_3}
                      type="checkbox"
                      label="J'ai travaillé en intérim"
                      value="J'ai travaillé en intérim"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_3_4}
                      onChange={this.onChangeQ_3_4}
                      onClick={this.onClickQ3_4}
                      type="checkbox"
                      label="J'ai travaillé en CDD ou CDI"
                      value="J'ai travaillé en CDD ou CDI"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-10">
                    <Form.Check
                      checked={!this.state.Q_3_5}
                      onChange={this.onChangeQ_3_5}
                      onClick={this.onClickQ3_5}
                      type="checkbox"
                      label="Je n'ai jamais travaillé mais je suis prêt pour une première expérience en entreprise"
                      value="Je n'ai jamais travaillé mais je suis prêt pour une première expérience en entreprise"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-1">
                    <Form.Check
                      checked={!this.state.Q_3_6}
                      onChange={this.onChangeQ_3_6}
                      onClick={this.onClickQ3_6}
                      type="checkbox"
                      label="Autre"
                      value="6"
                    />
                  </div>
                  <div className="col-12 col-sm-11">
                    <textarea
                      name=""
                      id=""
                      rows="1"
                      style={{
                        border: "none",
                        backgroundColor: "white",
                        borderBottom: "1px solid black",
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="orange" style={{ padding: "2%" }}>
                <strong>Les dernières entrées sont : </strong>
                <p>{dataVal3_1}</p>
                <p>{dataVal3_2}</p>
                <p>{dataVal3_3}</p>
                <p>{dataVal3_4}</p>
                <p>{dataVal3_5}</p>
                <p>{dataVal3_6}</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>
                  24. Les démarches que j'entreprends pour trouver un emploi
                </strong>
              </p>
              <p
                style={{
                  color: "#343434",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Plusieures réponses possibles.
              </p>
              <div className="checkboxBloc" style={{ padding: "0 0 0 5%" }}>
                <div className="row">
                  <div className="col-12 col-sm-5">
                    <Form.Check
                      checked={!this.state.Q_4_1}
                      onChange={this.onChangeQ_4_1}
                      onClick={this.onClickQ4_1}
                      type="checkbox"
                      label="Je consulte les offres d'emploi"
                      value="Je consulte les offres d'emploi"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_4_2}
                      onChange={this.onChangeQ_4_2}
                      onClick={this.onClickQ4_2}
                      type="checkbox"
                      label="J'envoie des candidatures spontanées"
                      value="J'envoie des candidatures spontanées"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_4_3}
                      onChange={this.onChangeQ_4_3}
                      onClick={this.onClickQ4_3}
                      type="checkbox"
                      label="Je parle de ma recherche d'emploi dans mon entourage "
                      value="Je parle de ma recherche d'emploi dans mon entourage"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_4_4}
                      onChange={this.onChangeQ_4_4}
                      onClick={this.onClickQ4_4}
                      type="checkbox"
                      label="Je communique sur ma recherche d'emploi sur les réseaux sociaux "
                      value="Je communique sur ma recherche d'emploi sur les réseaux sociaux"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      checked={!this.state.Q_4_5}
                      onChange={this.onChangeQ_4_5}
                      onClick={this.onClickQ4_5}
                      type="checkbox"
                      label="Je participe à des forums, des job-dating, etc ..."
                      value="Je participe à des forums, des job-dating, etc ..."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12">
                    <Form.Check
                      checked={!this.state.Q_4_6}
                      onChange={this.onChangeQ_4_6}
                      onClick={this.onClickQ4_6}
                      type="checkbox"
                      label="J'ai besoin d'aide, de soutien pour entreprendre des démarches de recherche d'emploi"
                      value="J'ai besoin d'aide, de soutien pour entreprendre des démarches de recherche d'emploi"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-1">
                    <Form.Check
                      checked={!this.state.Q_4_7}
                      onChange={this.onChangeQ_4_7}
                      onClick={this.onClickQ4_7}
                      type="checkbox"
                      label="Autre"
                      value="7"
                    />
                  </div>
                  <div className="col-12 col-sm-11">
                    <textarea
                      name=""
                      id=""
                      rows="1"
                      style={{
                        border: "none",
                        backgroundColor: "white",
                        borderBottom: "1px solid black",
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="orange" style={{ padding: "2%" }}>
                <strong>Les dernières entrées sont : </strong>
                <p>{dataVal4_1}</p>
                <p>{dataVal4_2}</p>
                <p>{dataVal4_3}</p>
                <p>{dataVal4_4}</p>
                <p>{dataVal4_5}</p>
                <p>{dataVal4_6}</p>
                <p>{dataVal4_7}</p>
              </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="row" style={{ marginBottom: "2%" }}>
          <div className="col-4">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>
                  25. Quelle est la durée de mon dernier contrat de travail ?
                </strong>
              </p>
              <p
                style={{
                  color: "#343434",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Une seule réponse possible.
              </p>

              <div className="input-group mb-3">
                <select
                  name="valeur"
                  className="form-control"
                  id="valeur"
                  value={this.state.Q_5}
                  onChange={this.onChangeQ_5}
                >
                  <option>Choisissez une réponse :</option>
                  <option value="1">Je n'ai jamais travaillé</option>
                  <option value="2">Plus de 6 mois</option>
                  <option value="3">Plus de 3 mois</option>
                  <option value="4">D'un mois à 3 mois</option>
                  <option value="5">Moins d'un mois</option>
                  {/* <option value="autre">Autre</option> */}
                </select>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>26. Ma dernière démarche remonte à</strong>
              </p>
              <p
                style={{
                  color: "#343434",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Une seule réponse possible .
              </p>
              <div className="input-group mb-3">
                <select
                  name="valeur"
                  className="form-control"
                  id="valeur"
                  value={this.state.Q_6}
                  onChange={this.onChangeQ_6}
                >
                  <option>Choisissez une réponse :</option>
                  <option value="1">Plus de 6 mois</option>
                  <option value="2">Plus de 3 mois</option>
                  <option value="3">Plusieurs semaines</option>
                  <option value="4">Quelques jours</option>
                  {/* <option value="autre">Autre</option> */}
                </select>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>
                  27. Pour quelle(s) raison(s) je n'ai pas fait de démarche
                  depuis longtemps
                </strong>
              </p>
              <p style={{ fontSize: "0.8rem" }}>
                {" "}
                Si ma dernière démarche remonte à plusieurs semaines et au-delà
              </p>

              <p
                style={{
                  color: "#343434",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Une seule réponse possible .
              </p>
              <div className="checkboxBloc" style={{ padding: "0 0 0 5%" }}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={this.saveDonnee}
          className="btn btn-success col-8 offset-2"
        >
          Envoyer
        </button>
      </div>
    );
  }
}
