import React, { useState, useEffect, useContext } from 'react';
import { Route } from 'react-router-dom';
import Acceuil from '../Acceuil';
import Nav from '../menus/Nav';
import Pediatrie from '../pediatrie/Pediatrie';
import AuthContext from '../AuthContext';
// import Login from '../Login/Login';
// import Acceuil from '../menus/Header';

const wait = function (duration = 1000) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration)
  })
}

const Navigations = () => {

  const un = 1;
  const contextAuthValue = useContext(AuthContext);


  useEffect(() => {

    const configSocket = [contextAuthValue.user.id, window.adresseIP];
    console.log("configSocket");
    console.log(window.adresseIP);
    contextAuthValue.socket.emit("addUser", configSocket);
    contextAuthValue.socket.on("getUsers", users => {
      console.log(users)
    });


    return () => {
      contextAuthValue.socket.emit("disconnect");
      //    socket.current.off();
    }
  }, [un]);



  return (
    <>
      <Nav />
      {/* <Route exact path="/" component={Login}/> */}
      <Route exact path="/chrr.vakinankaratra.com/home" component={Acceuil} />
      <Route exact path="/chrr.vakinankaratra.com/pediatrie" component={Pediatrie} />
      <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient" component={Pediatrie} />
      <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient/dossier/:id" component={Pediatrie} />
      <Route exact path="/chrr.vakinankaratra.com/pediatrie/patient/add" component={Pediatrie} />
      <Route exact path="/chrr.vakinankaratra.com/pediatrie/consultation" component={Pediatrie} />
      <Route exact path="/chrr.vakinankaratra.com/pediatrie/consultation/:id" component={Pediatrie} />
      <Route exact path="/chrr.vakinankaratra.com/pediatrie/surveillance" component={Pediatrie} />
      <Route exact path="/chrr.vakinankaratra.com/pediatrie/surveillance/:id" component={Pediatrie} />
      <Route exact path="/chrr.vakinankaratra.com/pediatrie/rapport" component={Pediatrie} />

    </>
  );
}
export default Navigations;