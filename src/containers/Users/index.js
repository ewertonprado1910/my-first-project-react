import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import H1 from "../../components/Title"
import ContainerItens from "../../components/containersItens";
import Button from "../../components/Button";

import {
  Container, Image, User
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory()

useEffect(() => {
    async function fatchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")
      setUsers(newUsers)

    }
    fatchUsers()
  }, [])

  async function deleteUsers(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId);
    setUsers(newUsers);
  }
  function goBackPage(){
    history.push("/")
  }

  return (
    <Container>
      <Image alt="img-logo" src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Users</H1>

    <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUsers(user.id)}>
                <img src={Trash} alt="lixeira" />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage} >
        <img alt="arrow" src={Arrow} />Back
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default Users;