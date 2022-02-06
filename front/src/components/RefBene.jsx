import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthService from "../services/auth.service";

const RefBene = () => {
  const [beneTarget, setBeneTarget] = useState("");
  const currentUser = AuthService.getCurrentUser();
  console.log(currentUser.prenom);

  let history = useHistory();
  const searchBene = (Event) => {
    // standard web api submit event
    Event.preventDefault();
    // use state
    history.push(`${currentUser.prenom}/referent/${beneTarget}`);
    window.location.reload();
    // TODO call axios with dynamic url
  };

  return (
    <div>
      <form onSubmit={searchBene}>
        <label for="name">Type name</label>
        <input
          id="name"
          type="text"
          value={beneTarget}
          onChange={(Event) => setBeneTarget(Event.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RefBene;
