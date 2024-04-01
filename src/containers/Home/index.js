import React, { useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";

import H1 from "../../components/Title"
import ContainerItens from "../../components/containersItens"
import Button from "../../components/Button";

import {
  Container, Image, InputLabel, Input,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const history = useHistory();

  async function addNewUsers() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    history.push("/usuarios")
  }

  return (
    <Container>
      <Image alt="img-logo" src={People} />
      <ContainerItens>
        <H1>Hello 👋</H1>

        <InputLabel>Name</InputLabel>
        <Input ref={inputName} placeholder="Name" />

        <InputLabel>Age</InputLabel>
        <Input ref={inputAge} placeholder="Age" />

        <Button onClick={addNewUsers}>
          Register<img alt="arrow" src={Arrow} />
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default App;