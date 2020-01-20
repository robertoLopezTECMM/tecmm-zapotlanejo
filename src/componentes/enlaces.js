import React, { Component } from 'react';


import './styles/enlaces.css';

class Enlaces extends Component {

  constructor(props){
    super();
    this.state={

    }
  }

  render() {

     return (
       <div className="div-principalEnlaces">
        <h1>ENLACES</h1>

        <a target="_blank" href="http://187.174.80.183:8080/core/login.jsp?panel=Alumnos">
          <img src="http://tecmm.edu.mx/imagenesCampus/edcore.png"/>
        </a>

        <a target="_blank" href="http://201.144.7.6/moodle/login/index.php">
          <img style={{marginLeft:"5px", marginRight:"5px"}} src="http://tecmm.edu.mx/imagenesCampus/moodle.png"/>
        </a>

        <a target="_blank" href="http://tecmm.edu.mx/#/Convocatorias">
          <img style={{marginRight:"5px"}}  src="http://tecmm.edu.mx/imagenesCampus/convocatorias.JPG"/>
        </a>

        <a target="_blank" href="http://www.posgrado.tecmm.edu.mx/">
          <img src="http://tecmm.edu.mx/imagenesCampus/posgrados.JPG"/>
        </a>

       </div>
     );
   }
 }

export default Enlaces;
