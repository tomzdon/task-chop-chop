import React from "react";
import Login from "../Login";
import Post from "../Post";
import Header from "../../components/Header";
import PostDetails from "../../components/PostDetails";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Post} />
          <Route exact path="/post/:slug" component={PostDetails} />
        </Switch>
      </Container>
    </>
  );
};
