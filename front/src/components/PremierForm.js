import React, { Component } from "react";
import jeune from "./../assets/jeune.jpg";

import { Form } from "react-bootstrap";

import AuthService from "../services/auth.service";

import Emploi2 from "./Formulaire/Emploi";
import Citoyennete2 from "./Formulaire/Citoyennete";
import Finance2 from "./Formulaire/Finance";
import Logement2 from "./Formulaire/Logement";
import Mobilite2 from "./Formulaire/Mobilite";
import Sante2 from "./Formulaire/Sante";


export default class PremierForm extends Component {
  constructor(props) {
    super(props);
    // this.onChangemois = this.onChangemois.bind(this);
    // this.onChangevaleur = this.onChangevaleur.bind(this);
    // this.saveFinance = this.saveFinance.bind(this);
    // this.newFinance = this.newFinance.bind(this);

    this.state = {
      id: "",
      mois: "",
      valeur: "",
      currentUser: {
        nom: "",
        prenom: "",
        telephone: "",
        datedenaissance: "",
        adresse: "",
        email: "",
        password: "",
        id: "",
        accessToken: "",
        categorie: "",
        mois: "",
        valeur: "",
      },
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    let date = new Date();
    let longMonth = date.toLocaleString("fr-fr", { month: "long" });
    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({
      currentUser: currentUser,
      userReady: true,
      mois: longMonth,
    });
  }

  // onChangemois(e) {
  //     this.setState({
  //         mois: e.target.value
  //     });
  // }

  // onChangevaleur(e) {
  //     this.setState({
  //         valeur: e.target.value
  //     });
  //     console.log(this.state.valeur);
  // }
  // saveFinance() {
  //     const user = { ...this.state.currentUser }
  //     var data = {
  //         mois: 'decembre',
  //         valeur: this.state.valeur,
  //         id: user.id
  //     };

  //     FinanceDataService.create(data)
  //         .then(response => {
  //             this.setState({
  //                 id: response.data.id,
  //                 mois: response.data.mois,
  //                 valeur: response.data.valeur
  //             });
  //             console.log(response.data);
  //         })
  //         .catch(e => {
  //             console.log(e);
  //         });
  // }
  // newFinance() {
  //     const user = { ...this.state.currentUser }

  //     this.setState({
  //         id: user.id,
  //         mois: "",
  //         valeur: ""

  //     });
  // }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${jeune})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="col-md-12 ">
          <Form
            style={{ padding: "2% 5% 2% 5%" }}
            className="col-xs-12 col-sm-10 offset-sm-1  orange"
          >
            <h2>Formulaire d'inscription &nbsp;&nbsp; </h2>
            <h4
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <strong>Apprenons à nous connaître ...</strong>
            </h4>
            <Emploi2 />
            <Citoyennete2 />
            <Finance2 />
            <Logement2 />
            <Mobilite2 />
            <Sante2 />
          </Form>
        </div>
      </div>
    );
  }
}
