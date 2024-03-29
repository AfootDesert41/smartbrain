import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl , box }) => {
    return(
        <div className="center ma">
            <div className="absolute shadow-1 br3 mt2 pa2">
                <img id="inputImage" className="br3" alt="Img" src={imageUrl} width="500px" height="auto"></img>
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )

}

export default FaceRecognition;