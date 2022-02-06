import React, { Component } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import AuthService from "./../services/auth.service";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

export default class NavReferent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      mois: "",
      categorie: "",
      beneficiaire: "",
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

  onChangeNom(e) {
    this.setState({
      beneficiaire: e.target.value,
    });
  }

  render() {
    //     const beneTarget = (event) => {
    //     const target = event.target.value;
    //     this.setState({beneficiaire: target})
    //   }

    //   const searchBene = (event) => {
    //     // standard web api submit event
    //     event.preventDefault();
    //     // use state
    //     this.props.history.push(`/${this.state.currentUser.prenom}/referent/${this.state.beneficiaire}`);
    //     window.location.reload();
    //    // TODO call axios with dynamic url
    //  }

    return (
      <div>
        <Nav
          defaultActiveKey="/home"
          className="flex-column vert navVert d-none d-xl-block nav"
          style={{ height: "100vh", padding: "10vh 0 0 2%" }}
        >
          {/* <img fluid src={logo} alt="logo missions locales" style={{ width: "8vw", minWidth: "70px" }} /> */}
          <Nav.Link href="/espace-personnel">Tableau de bord</Nav.Link>
          <NavDropdown.Divider />
          <Nav.Link href="/profil-beneficiaire">Profil</Nav.Link>
          <NavDropdown.Divider />
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item
              href={`/${this.state.currentUser.prenom}/referent/thomas`}
              className="d-flex justify-content-between align-items-center"
            >
              Thomas
            </NavDropdown.Item>
            <NavDropdown.Item
              value="Annick"
              href={`/${this.state.currentUser.prenom}/referent/Annick`}
              className="d-flex justify-content-between align-items-center"
            >
              Annick
            </NavDropdown.Item>
            <NavDropdown.Item
              href={`/${this.state.currentUser.prenom}/referent/Sylvain`}
              className="d-flex justify-content-between align-items-center"
            >
              Sylvain
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/beneficiaire-formation-emploi"
              className="d-flex justify-content-between align-items-center"
            >
              Alexandre
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/beneficiaire-finance"
              className="d-flex justify-content-between align-items-center"
            >
              Ludovic
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/beneficiaire-citoyennete"
              className="d-flex justify-content-between align-items-center"
            >
              Baptiste
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/beneficiaire-sante"
              className="d-flex justify-content-between align-items-center"
            >
              Noa
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/beneficiaire-sante"
              className="d-flex justify-content-between align-items-center"
            >
              Ilian
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/beneficiaire-sante"
              className="d-flex justify-content-between align-items-center"
            >
              Marianne
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/beneficiaire-sante"
              className="d-flex justify-content-between align-items-center"
            >
              Elodie
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/beneficiaire-sante"
              className="d-flex justify-content-between align-items-center"
            >
              Sebastien
            </NavDropdown.Item>
          </NavDropdown> */}
          {/* <form onSubmit={searchBene}>
            <label for="name">Type name</label>
            <input id="name" type="text" onChange={beneTarget} />
            <input type="submit" />
          </form> */}
        </Nav>
      </div>
    );
  }
}
