import React, { Component } from "react";
import NavBeneficiaire from "./NavBeneficiaire";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DynamicCharts from "./chartsJS";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

import Mobilite2 from "./Formulaire/Mobilite";
import Messagerie from "./Messagerie";

class Mobilite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: { prenom: "", nom: "" },
      categorie: "Mobilité",
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
    let date = new Date();
    let longMonth = date.toLocaleString("fr-fr", { month: "long" });
    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({
      currentUser: currentUser,
      userReady: true,
      mois: longMonth,
    });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div style={{ padding: "0 0 5% 0" }}>
        <div className="row">
          <div className=" col-1">
            <NavBeneficiaire />
          </div>
          <div
            className="container-fluid col-11"
            style={{ padding: "5% 2% 0 2%" }}
          >
            <div
              className="col-12"
              style={{
                borderBottom: "2px solid black",
                marginTop: "2%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2>
                Catégorie {this.state.categorie} de {currentUser.nom}{" "}
                {currentUser.prenom}{" "}
              </h2>
              <div className="d-flex  d-none d-md-block">
                <FontAwesomeIcon icon="car" id="icones" size="2x" />
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="col-12 col-sm-12   col-lg-8 ">
                <div
                  style={{
                    border: "1px solid black",
                    backgroundColor: "white",
                    margin: "2% 0 2% 0",
                  }}
                >
                  <DynamicCharts />
                </div>
              </div>
              <div className="col-12 col-lg-4">
                {" "}
                <Messagerie />{" "}
              </div>
            </div>
            <Mobilite2 />
          </div>
        </div>
      </div>
    );
  }
}

export default Mobilite;
