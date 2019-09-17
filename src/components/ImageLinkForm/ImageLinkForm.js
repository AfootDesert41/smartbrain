import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange , onButtonSubmit }) => {
    return (
        <div>
            <p className="f2 fw2 ma0">
                {'This Magic BigBrain phat Yoshi will detect faces in your pictures.'}
            </p>
            <p className="f2 fw2 pb4 ma0">
                {'Give it a try.'}
            </p>
            <div className="center">
                <div className="form center br3 pa4 shadow-1 bb4" style={{width:"500px"}}>
                    <input className="f4 pa2 w-70 center" type="text" placeholder="Enter image url..." onChange={onInputChange} />
                    <button className="w-30 grow f4 link ph3 pv2 white bg-dark-red" onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>            
        </div>

    );
}

export default ImageLinkForm;
