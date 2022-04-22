import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
// import Button from "@mui/material/Button";
import { Button } from "../styles";

function NavBar({ user, setUser }) {
  console.log(window.location.pathname)
  const history = useHistory();
  
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/")
      }
    });
  }

  return (
    <Wrapper>
      <Logo>
        <Link to="/" exact>Save the Amazon</Link>
      </Logo>
      <Nav>



{/* {if (!user) {
          <Button as={Link} to="/login" exact>Login</Button>
        } else if (user && user.seller) { 
          <Button as={Link} to="/item-form">
            Add New Item
          </Button>
          <Button variant="outline" onClick={handleLogoutClick}>
          Logout
          </Button>
        } else {
          <Button variant="outline" onClick={handleLogoutClick}>
            Logout
          </Button>
        }} */}

        {/* {!user ? <Button as={Link} to="/login" exact>
          Login
        </Button> :
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>} */}

        {/* {(user && user.seller && window.location.pathname === "/sellerpage") ?
        <Button as={Link} to="/itemform" exact>New Item</Button> : 
        (user && user.seller) ? 
        <Button as={Link} to="/sellerpage">Seller Account</Button>
        : null
        }
        {!user ? 
        <Button as={Link} to="/login" exact>Login</Button> 
        :  
        <Button variant="outline" onClick={handleLogoutClick}>Logout</Button>
        } */}
        {!user ? 
        <Button as={Link} to="/login" exact>Login</Button> 
        :
        (user && user.seller) ?
        <>
        <Button as={Link} to="/itemform" exact>New Item</Button>
        <Button as={Link} to="/sellerpage">Seller Account</Button>
          <Button variant="outline" onClick={handleLogoutClick}>
          Logout
          </Button>
        </>
        :  
        <Button variant="outline" onClick={handleLogoutClick}>Logout</Button>
        }
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: deeppink;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
