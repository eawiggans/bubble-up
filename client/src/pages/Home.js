import React from "react";
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import bg from '../assets/bubbleFull2K.png'


const Home = () => {

  function showHome() {
    if (Auth.loggedIn()) {

      // Logged in Home Page
      return (
        <div>

        </div>
      );
    } else {

      // Welcome Page - Not Logged In
      // <div className="container col-6 card justify-content-center force-v-center flex-column p-3">
      //     <div className="row align-items-center flex-column">
      //       <h1>Rise Above Your Competition</h1>
      //       <h2>or a better slogan</h2>
      //       <h2>or maybe not</h2>
      //       <h2>who knows</h2>
      //     </div>
      //   </div>

      return (
        <div className=" container col-6 card justify-content-center force-v-center flex-column p-3">
           <form className="row align-items-center flex-column">
             <h1>Test Your Web Dev Knowledge</h1>
                <h2 className="mb-1">choose a language</h2>
                <div className="mb-4">
                   <label className="ps-4" for="html">HTML</label>
                   <input className="pe-4" type="radio" name="html"></input>
                   <label className="ps-4" for="css">CSS</label>
                   <input className="pe-4" type="radio" name="css"></input>
                   <label className="ps-4" for="js">JavaScript</label>
                   <input className="pe-4" type="radio" name="js"></input>
                </div>
                <h2 className="mb-1">choose a difficulty</h2>
                <div className="mb-4">
                   <label className="ps-4" for="easy">Junior</label>
                   <input className="pe-4" type="radio" name="easy"></input>
                   <label className="ps-4" for="med">Mid-Level</label>
                   <input className="pe-4" type="radio" name="med"></input>
                   <label className="ps-4" for="hard">Senior</label>
                   <input className="pe-4" type="radio" name="hard"></input>
                </div>
                <button className="btn btn-primary" type="submit">START QUIZ</button>
              </form>
         </div>
      )
    }
  }
    // Final Output
    return (
      <div className="home-page" style={{ backgroundImage: `url(${bg})` }}>

        {showHome()}
      </div>
    );
  };
  
  export default Home;