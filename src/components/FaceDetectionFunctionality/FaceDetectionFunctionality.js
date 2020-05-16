import React from 'react';
import './FaceDetectionFunctionality.css'

const FaceDetectionFunctionality = ({url,boundingbox}) => {
    return(
        <div className="center ma"> 
        <div className="absolute mt2"> 
         <img id="image" alt='!Your pic link please!' src={`${url}`} width="500px" height= "auto"/>
         <div className="boundingthebox" style={{
             top: boundingbox.top_row,
             bottom: boundingbox.bottom_row,
             left: boundingbox.left_col,
             right: boundingbox.right_col
             
             }}>
        </div>
         </div>
        </div>
       
       )


}

export default FaceDetectionFunctionality;