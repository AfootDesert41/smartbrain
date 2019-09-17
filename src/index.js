import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sky from 'react-sky';
import App from './App';
import * as serviceWorker from './serviceWorker';

const skyBack = {          
        0: "https://imgur.com/UTwTpvn.png",
        1: "https://imgur.com/1uHtQyX.png",
        2: "https://imgur.com/sUkuXWm.png",
        3: "https://imgur.com/gNZWhyP.png",
        4: "https://imgur.com/19LcPm7.png",
        5: "https://imgur.com/TlTfS3a.png",
        6: "https://imgur.com/Z7l1oS5.png",
        7: "https://imgur.com/zbDlLVO.png",
        8: "https://imgur.com/T9OqSND.png",
        9: "https://imgur.com/GgYETnV.png",
        10: "https://imgur.com/OH1XR9T.png",
        11: "https://imgur.com/FqO7I2D.png",
        12: "https://imgur.com/2GMQj8n.png",
      }
            
ReactDOM.render(

    <div>
        <App />
        <Sky className="sky"
                images={skyBack}
                how={600} /* You have to pass a number so Sky will render that amount of images chosen randomly from the object you passed in the previous step */
                time={8} /* time of the animation. Dfaults at 20s */
                size={'25px'} /* size of the rendered images. Defaults at 150px */
                background={'palettedvioletred'} 
                />
    </div>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
