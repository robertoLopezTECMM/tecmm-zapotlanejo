import React, {Component} from 'react';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './styles/carousel.css';


  class CarouselItem extends Component{

    constructor(props){
      super();
    }


    render(){
      return(
        <div>
          <a href={this.props.link}>
            <div style={{width:"100%", height:"100%"}}>
              <img style={{height:"100%"}}  src={this.props.image}/>
            </div>
          </a>
        </div>
      );
    }
  }


  class CarouselComponent extends Component {


    constructor(props){
      super();
      this.state={
        modalVisible : false,
        carouselImages:[],
      }
    }

    componentWillMount() {
      const url = 'http://dashboard.tecmm.edu.mx/dashboardScript.php'
      axios.get(url, {params:{action:"getBanners"}}).then(response => response.data)
      .then((data) => {
        this.setState({
          carouselImages: data
        })
        console.log(this.state.carouselImages)
      })
    }



    render(){
      return(

        <div className="div-principal-carouselComponent">

          <div className="div-carousel-carouselComponent">
            <Carousel
              width="100%"
              showIndicators={false}
              showStatus={false}
              showArrows={true}
              showThumbs={false}
              autoPlay
              infiniteLoop
              emulateTouch
              >

                {this.state.carouselImages.map((it)=>(
                  <CarouselItem link={it.link} image={it.ref_banner}/>
                ))}

            </Carousel>

            <div class="div-botonesCarousel">
              <a href="/ofertaAcademica">
                <button  className="btn1Oferta">OFERTA<br/>ACADÉMICA</button>
              </a>

              <a href="http://tecmm.edu.mx/unidadesAcademicas">
                <button className="btn2Campus">UNIDADES ACADÉMICAS TECMM</button>
              </a>

              <a href="http://controlescolar.tecmm.edu.mx/">
                <button className="btn3Escolares">SERVICIOS<br/>ESCOLARES</button>
              </a>

            </div>

          </div>

        </div>
      );
    }
  }

export default CarouselComponent;
