import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import FaceDetection from './components/FaceDetection/FaceDetection';
import FaceDetectionFunctionality from './components/FaceDetectionFunctionality/FaceDetectionFunctionality';

const app = new Clarifai.App({
 apiKey: 'e8a56bfc00ba4cbd8999424b65639270'
});

const particleoptions = {
         particles: {
          number: {
            value: 75,
          density: {
            enable: true,
            value_area: 500

                }
           }
        }
    }

 

class App extends Component {
  constructor() {
    super();
    this.state = {
    inputurl: '',
    imageurl: '',
    boundingbox: {
      left_col: 0,
      right_col: 0,
      top_row: 0,
      bottom_row: 0 
    },
     }

  }

  calculatefacevalue = (data) =>
  {
   const apiboxval = data.outputs[0].data.regions[0].region_info.bounding_box;
   const imgdetail=document.getElementById("image");
   const imgwidth = Number(imgdetail.width);
   const imgheight = Number(imgdetail.height);
   const leftcol=apiboxval.left_col*imgwidth
   const toprow=apiboxval.top_row*imgheight;
   const rightcol=imgwidth - (apiboxval.right_col * imgwidth);
   const bottomrow=imgheight - (apiboxval.bottom_row * imgheight);
   console.log(leftcol,rightcol,toprow,bottomrow);
 
   this.displayboundingbox(leftcol,rightcol,toprow,bottomrow);

  }

  displayboundingbox = (leftcol,rightcol,toprow,bottomrow) => {
  this.setState(
   {
      boundingbox: {
        left_col: leftcol,
        right_col: rightcol,
        top_row: toprow,
        bottom_row: bottomrow 
      }
    }
 )
 }

  oninput = (event) => {
        this.setState( { inputurl: event.target.value} );
    }   

  onsubmit = (event) => {
    this.setState( { imageurl: this.state.inputurl} );
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.inputurl)
    .then(response => this.calculatefacevalue(response))
    .catch(err => console.log(err));
    }

   changepage = (onpage) => {
     
      this.setState({onpage: onpage})
      console.log(onpage);
    }


  render() {
    const {imageurl, boundingbox} = this.state;

      return (
    
    <div className="App">
      <Particles params={particleoptions} className="particles"/>
               <FaceDetection oninput={this.oninput} onsubmit={this.onsubmit}/>
        <FaceDetectionFunctionality url={imageurl} boundingbox={boundingbox}/>
        </div>
           
  );
}
}

export default App;
