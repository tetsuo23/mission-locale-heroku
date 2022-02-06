import React, { Component } from "react";
import { Form } from "react-bootstrap";
import PostDataService from "./../../services/post.service";
import AuthService from "./../../services/auth.service";
import UserService from "./../../services/user.service";
import EventBus from "./../../common/EventBus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Sante2 extends Component {
  constructor(props) {
    super(props);

    this.onChangemois = this.onChangemois.bind(this);
    this.onChangeQ_1 = this.onChangeQ_1.bind(this);
    this.onChangeQ_2 = this.onChangeQ_2.bind(this);
    this.onChangeQ_3 = this.onChangeQ_3.bind(this);
    this.onChangeQ_4 = this.onChangeQ_4.bind(this);
    this.onChangeQ_4_1 = this.onChangeQ_4_1.bind(this);
    this.onChangeQ_4_2 = this.onChangeQ_4_2.bind(this);
    this.onChangeQ_4_3 = this.onChangeQ_4_3.bind(this);
    this.onChangeQ_4_4 = this.onChangeQ_4_4.bind(this);
    this.onChangeQ_5 = this.onChangeQ_5.bind(this);
    this.onChangeQ_5_1 = this.onChangeQ_5_1.bind(this);
    this.onChangeQ_5_2 = this.onChangeQ_5_2.bind(this);
    this.onChangeQ_5_3 = this.onChangeQ_5_3.bind(this);

    this.saveDonnee = this.saveDonnee.bind(this);
    this.newDonnee = this.newDonnee.bind(this);

    this.state = {
      id: null,
      mois: "",
      categorie: "Santé",
      moisUser: "",
      valeur: 0,

      Sante_1:   null,
      Sante_2:   null,
      Sante_3:   null,
      Sante_4:   null,
      Sante_4_1: null,
      Sante_4_2: null,
      Sante_4_3: null,
      Sante_4_4: null,
      Sante_5:   null,
      Sante_5_1: null,
      Sante_5_2: null,
      Sante_5_3: null,

      Q_1:  null,
      Q_2:  null,
      Q_3:  null,
      Q_4:  null,
      Q_4_1:null,
      Q_4_2:null,
      Q_4_3:null,
      Q_4_4:null,
      Q_5:  null,
      Q_5_1:null,
      Q_5_2:null,
      Q_5_3:null,

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
    let date = new Date();
    let longMonth = date.toLocaleString("fr-fr", { month: "long" });
    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({
      currentUser: currentUser,
      userReady: true,
      mois: longMonth,
    });
  }
  onChangemois(e) {
    this.setState({
      moisUser: e.target.value,
    });
  }


onChangeQ_1(e) {
this.setState({  Q_1: Number(e.target.value),})
}  
onChangeQ_2(e) {
this.setState({  Q_2: Number(e.target.value),})
}
onChangeQ_3(e) {
this.setState({  Q_3: Number(e.target.value),})
}  
onChangeQ_4(e) {
this.setState({  Q_4: Number(e.target.value),})
}  
onChangeQ_4_1(e) {
  this.setState({Q_4_1: Number(e.target.value),})
}
onChangeQ_4_2(e) {
  this.setState({Q_4_2: Number(e.target.value),})
}
onChangeQ_4_3(e) {
  this.setState({Q_4_3: Number(e.target.value),})
}
onChangeQ_4_4(e) {
  this.setState({Q_4_4: Number(e.target.value),})
}
onChangeQ_5(e) {
this.setState({  Q_5: Number(e.target.value),})
}  
onChangeQ_5_1(e) {
  this.setState({Q_5_1: Number(e.target.value),})
}
onChangeQ_5_2(e) {
  this.setState({Q_5_2: Number(e.target.value),})
}
onChangeQ_5_3(e) {
  this.setState({Q_5_3: Number(e.target.value),})
}

  saveDonnee() {
    const user = { ...this.state.currentUser };
    const add =
      Number(this.state.Q1) +
      Number(this.state.Q2) +
      Number(this.state.Q3) +
      Number(this.state.Q4) +
      Number(this.state.Q5);
    var data = {
      mois: this.state.mois,
      Sante_1: this.state.Q_1, 
      Sante_2:  this.state.Q_2,
      Sante_3:  this.state.Q_3,
      Sante_4:  this.state.Q_4,
      Sante_4_1:this.state.Q_4_1,
      Sante_4_2:this.state.Q_4_2,
      Sante_4_3:this.state.Q_4_3,
      Sante_4_4:this.state.Q_4_4,
      Sante_5:  this.state.Q_5,
      Sante_5_1:this.state.Q_5_1,
      Sante_5_2:this.state.Q_5_2,
      Sante_5_3:this.state.Q_5_3,
      userId: user.prenom,
      categorie: this.state.categorie,
    };

    PostDataService.createSante(data)
      .then((response) => {
        this.setState({
          userId: response.data.userId,
          mois: response.data.mois,
          Sante_1: response.data.Sante_1, 
          Sante_2:  response.data.Sante_2 ,
          Sante_3:  response.data.Sante_3 ,
          Sante_4:  response.data.Sante_4 ,
          Sante_4_1:response.data.Sante_4_1,
          Sante_4_2:response.data.Sante_4_2,
          Sante_4_3:response.data.Sante_4_3,
          Sante_4_4:response.data.Sante_4_4,
          Sante_5:  response.data.Sante_5 ,
          Sante_5_1:response.data.Sante_5_1,
          Sante_5_2:response.data.Sante_5_2,
          Sante_5_3:response.data.Sante_5_3,
          published: response.data.published,
          categorie: response.data.categorieId,
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
      categorie: "Citoyennete",
      moisUser: "",
      valeur: "",
      currentUser: { prenom: "", nom: "" },
      submitted: false,
    });
  }

  render() {
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
          <h2>Santé</h2>
          <div className="d-flex  d-none d-md-block">
            <FontAwesomeIcon icon="heart" size="2x" id="icones" />
          </div>
        </div>

        <div className="row" style={{ padding: "0 0 2% 0" }}>
          <div className="col-4">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>7. Sur le plan administratif.</strong>
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
              <div className="input-group mb-3">
                <select
                  name="valeur"
                  className="form-control"
                  id="valeur"
                  value={this.state.Q_1}
                  onChange={this.onChangeQ_1}
                >
                  <option >Choisissez une réponse :</option>
                  <option value="1">Je ne sais pas</option>
                  <option value="2">
                    Je suis bénéficiaire de la Couverture Maladie Universelle
                    (CMU)
                  </option>
                  <option value="3">Je possède une mutuelle de santé</option>
                  <option value="4">J'ai une carte vitale à jour </option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
            </div>
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>
                  8. La dernière fois que je suis allé chez le medecin c'était :
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
                  value={this.state.Q_2}
                  onChange={this.onChangeQ_2}
                >
                  <option >Choisissez une réponse :</option>
                  <option value="1">Je ne sais plus</option>
                  <option value="2">Il y a plus d'un an</option>
                  <option value="3">Il y a plus de 6 mois</option>
                  <option value="4">Il y a plus de 3 mois</option>
                </select>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

          <div className="col-4">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>
                  9. Parmi les affirmations ci-dessous, laquelle correspond le
                  mieux à ma situation actuelle ?
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
              <div className="input-group mb-3">
                <select
                  name="valeur"
                  className="form-control"
                  id="valeur"
                  value={this.state.Q_3}
                  onChange={this.onChangeQ_3}
                >
                  <option >Choisissez une réponse :</option>
                  <option value="1">
                    J'ai besoin d'un rendez-vous rapide avec un medecin car j'ai
                    eu un comportement à risque{" "}
                  </option>
                  <option value="2">
                    J'ai besoin d'un rendez-vous rapide car j'ai des symptômes
                  </option>
                  <option value="3">
                    J'ai besoin d'un rendez-vous car j'ai un doute sur ma santé
                  </option>
                  <option value="4">
                    J'ai besoin de faire le point sur ma santé de façon générale{" "}
                  </option>
                  <option value="5">
                    Je ne ressens pas le besoin de voir un medecin
                  </option>
                </select>
              </div>
            </div>
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>
                  10. Parmi la liste qui suit, quels sont les professionnels que
                  j'ai déjà rencontrés?
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
              <div className="checkboxBloc" style={{ padding: "0 0 0 5%" }} value={this.state.Q_4}
                  onChange={this.onChangeQ_4}>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check type="checkbox" label="Assistant-e social-e"  value={this.state.Q_4_1}
                  onChange={this.onChangeQ_4_1}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check type="checkbox" label="Educateur, éducatrice"  value={this.state.Q_4_2}
                  onChange={this.onChangeQ_4_2}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check type="checkbox" label="Medecin spécialisé" value={this.state.Q_4_3}
                  onChange={this.onChangeQ_4_3} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check
                      type="checkbox"
                      label="Aucun de ces professionnels"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

          <div className="col-4">
            <div className="section-checkbox" style={{ marginTop: "5%" }}>
              <p>
                <strong>
                  11. J'ai obtenu une reconnaissance de travailleur handicapé
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
              <div className="checkboxBloc" style={{ padding: "0 0 0 5%" }}  value={this.state.Q_5}
                  onChange={this.onChangeQ_5}>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check type="checkbox" label="Oui" value={this.state.Q_5_1}
                  onChange={this.onChangeQ_5_1} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check type="checkbox" label="Non" value={this.state.Q_5_2}
                  onChange={this.onChangeQ_5_2} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-9">
                    <Form.Check type="checkbox" label="Je ne sais pas" value={this.state.Q_5_3}
                  onChange={this.onChangeQ_5_3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-12"
          style={{
            borderBottom: "2px solid black",
            marginTop: "2%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2>Sports</h2>
          <div className="d-flex  d-none d-md-block">
            <FontAwesomeIcon icon="swimmer" size="2x" id="icones" />
          </div>
        </div>
        <div
          className="section-checkbox"
          style={{ marginTop: "5%", marginBottom: "2%" }}
        >
          <p>
            <strong>20. Quelles sont mes pratiques en matière de sport</strong>
          </p>
          <p
            style={{
              color: "#343434",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            Une seule réponse par ligne.
          </p>
          <div className="row">
            <div
              className="checkboxBloc d-block d-sm-none"
              style={{ padding: "0 0 0 5%" }}
            >
              <div className="row">
                <div className="col-12">
                  <p>
                    <strong>Je suis licencié dans un club de sport</strong>
                  </p>
                </div>
                <div className="input-group mb-3">
                  <label htmlFor="mois">&nbsp;selectionnez&nbsp;:&nbsp;</label>
                  <select
                    name="valeur"
                    className="form-control"
                    id="valeur"
                    value={this.state.Q4}
                    onChange={this.onChangeQ4}
                  >
                    <option value="1">Jamais</option>
                    <option value="2">Parfois</option>
                    <option value="3">Régulièrement</option>
                  </select>
                </div>
                <div className="col-4">
                  <Form.Check type="checkbox" label="Oui" />
                </div>
                <div className="col-4">
                  <Form.Check type="checkbox" label="Non" />
                </div>
                <div className="col-4">
                  <Form.Check type="checkbox" label="Parfois" />
                </div>
                <div className="col-4">
                  <Form.Check type="checkbox" label="Régulièrement" />
                </div>
                <div className="col-4">
                  <Form.Check type="checkbox" label="Jamais" />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div
                className="checkboxBloc d-none d-sm-block"
                style={{ padding: "0 0 0 5%" }}
              >
                <div
                  className="row d-flex align-items-center"
                  style={{
                    borderBottom: "2px solid black",
                    borderTop: "2px solid black",
                    padding: "2% 0 2% 0",
                  }}
                >
                  <div className="col-sm-12">
                    <strong>Je suis licencié dans un club de sport</strong>
                  </div>

                  <div className="input-group mb-3">
                    <label htmlFor="mois">
                      &nbsp;selectionnez&nbsp;:&nbsp;
                    </label>
                    <select
                      name="valeur"
                      className="form-control"
                      id="valeur"
                      value={this.state.Q4}
                      onChange={this.onChangeQ4}
                    >
                      <option value="1">Jamais</option>
                      <option value="2">Parfois</option>
                      <option value="3">Régulièrement</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="checkboxBloc d-block d-sm-none"
              style={{ padding: "0 0 0 5%" }}
            >
              <div className="row">
                <div className="col-12">
                  <p>
                    <strong>Je pratique une activité physique seul</strong>
                  </p>
                </div>
                <div className="col-4">
                  <Form.Check type="checkbox" label="Oui" />
                </div>
                <div className="col-4">
                  <Form.Check type="checkbox" label="Non" />
                </div>
                <div className="col-4">
                  <Form.Check type="checkbox" label="Parfois" />
                </div>
                <div className="col-4">
                  <Form.Check type="checkbox" label="Régulièrement" />
                </div>
                <div className="col-4">
                  <Form.Check type="checkbox" label="Jamais" />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div
                className="checkboxBloc d-none d-sm-block"
                style={{ padding: "0 0 0 5%" }}
              >
                <div
                  className="row d-flex align-items-center"
                  style={{
                    borderBottom: "2px solid black",
                    padding: "2% 0 2% 0",
                  }}
                >
                  <div className="col-sm-12">
                    <strong>Je pratique une activité physique seul</strong>
                  </div>

                  <div className="input-group mb-3">
                    <label htmlFor="mois">
                      &nbsp;selectionnez&nbsp;:&nbsp;
                    </label>
                    <select
                      name="valeur"
                      className="form-control"
                      id="valeur"
                      value={this.state.Q5}
                      onChange={this.onChangeQ5}
                    >
                      <option value="1">Jamais</option>
                      <option value="2">Parfois</option>
                      <option value="3">Régulièrement</option>
                    </select>
                  </div>
                </div>
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
