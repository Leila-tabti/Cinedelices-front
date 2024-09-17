import React from "react";
import "./Slogan.scss";
import { NavLink } from "react-router-dom";

export default function Slogan() {
    
    return (
        <div className="slogan">
                <h1>Le goût du cinéma à chaque bouchée... Faites mijoter vos films préférés.</h1>
                <h2>Plongez dans un festin cinématographique, où chaque film et série est une invitation à savourer des délices inspirés de l'écran.</h2>
            <NavLink to="/register">
            <button className="subscribe_button"><a href="">S'inscrire</a></button>
            </NavLink>
        </div>
    );
  };