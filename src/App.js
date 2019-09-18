import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';

const initialState = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signIn',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    fetch('https://immense-harbor-47949.herokuapp.com/imageurl', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
          input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response) {
        fetch('https://immense-harbor-47949.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                id: this.state.user.id
            })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, {entries: count}))          
        })
        .catch(console.log);
      }
       this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch(error => console.log(error));
  }

  onRouteChange = () => {
    if (this.state.isSignedIn === false) {
      this.setState({isSignedIn: true});
    }
    this.setState({route: 'home'});
  }

  onRouteChangeRegister = () => {
    this.setState({route: 'register'});
  }

  onRouteChangeLogOut = () => {
    if (this.state.isSignedIn === true) {
      this.setState(initialState);
    }
    this.setState({route: 'signIn'});
  }

  render() {
    const { route , box , imageUrl , isSignedIn } = this.state;
    const { onRouteChange , onRouteChangeLogOut , onRouteChangeRegister ,  onInputChange , onButtonSubmit } = this;
    return(
      <div className="App">
        { route === 'signIn' 
        ? <div>
            <Navigation onRouteChangeLogOut={onRouteChangeLogOut} onRouteChangeRegister={onRouteChangeRegister} isSignedIn={this.state.isSignedIn} />
            <SignIn loadUser={this.loadUser} onRouteChangeRegister={onRouteChangeRegister} onRouteChange={onRouteChange} /> :
          </div>
        : route === 'register' 
        ? <div>
            <Navigation onRouteChangeLogOut={onRouteChangeLogOut} isSignedIn={isSignedIn} />
            <Register loadUser={this.loadUser} onRouteChangeLogOut={onRouteChangeLogOut}/>
          </div>
        : <div>
            <Navigation onRouteChangeLogOut={onRouteChangeLogOut} isSignedIn={isSignedIn} />
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries} />
            <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
            <FaceRecognition box={box} imageUrl={imageUrl}/>
          </div>     
        }
      </div>
    )}
  }

export default App;