import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

<<<<<<< HEAD
// const returnClarifaiRequestOptions = (imageURL) => {
//   // Your PAT (Personal Access Token) can be found in the portal under Authentification
//   const PAT = 'a8d26edb6d7c4d65970cf943ba7910b7';
//   // Specify the correct user_id/app_id pairings
//   // Since you're making inferences outside your app's scope
//   const USER_ID = 'sydneygh17';       
//   const APP_ID = 'facedect';
//   // Change these to whatever model and image URL you want to use
//   const MODEL_ID = 'face-detection'; 
//   const IMAGE_URL = imageURL;

//   const raw = JSON.stringify({
//     "user_app_id": {
//         "user_id": USER_ID,
//         "app_id": APP_ID
//     },
//     "inputs": [
//         {
//             "data": {
//                 "image": {
//                     "url": IMAGE_URL
//                 }
//             }
//         }
//     ]
//   });

//   const requestOptions = {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Authorization': 'Key ' + PAT
//     },
//     body: raw
//   };

//   return requestOptions
// }

const initialState = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
=======
const returnClarifaiRequestOptions = (imageURL) => {
  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  const PAT = 'ADD YOU API KEY';
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const USER_ID = 'ADD YOUR PROFILE';       
  const APP_ID = 'facedect';
  // Change these to whatever model and image URL you want to use
  const MODEL_ID = 'face-detection'; 
  const IMAGE_URL = imageURL;

  const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
    ]
  });

  const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
  };

  return requestOptions
>>>>>>> 8379e86a2883ca805001a2ebca1866d5242622f8
}

class App extends Component {
  constructor() {
    super();
<<<<<<< HEAD
    this.state = initialState;
  }

loadUser = (data) => {
  this.setState({user: {
    id: data.id,
    name: data.name,
    email: data.email,
    entries: data.entries,
    joined: data.joined
    }
  })
}

calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputImage');
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
    fetch('http://localhost:3000/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response) {
        fetch('http://localhost:3000/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries: count}))
          })
          .catch(console.log)
      }
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch(err => console.log(err));
}
  
  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState({initialState})
=======
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      // user: {
      //   id: '',
      //   name: '',
      //   email: '',
      //   entries: 0,
      //   joined: ''
      // }
    }
  }

  calculateFaceLocation = (data) => {
    const regions = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol: regions.left_col * width,
      topRow: regions.top_row * height,
      rightCol: width - (regions.right_col * width),
      bottomRow: height - (regions.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box:box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
   
    // // app.models.predict('face-detection', this.state.input)
    fetch("https://api.clarifai.com/v2/models/" + 'face-detection' + "/outputs", returnClarifaiRequestOptions(this.state.input))
    .then(response => response.json())
    .then(result => this.displayFaceBox(this.calculateFaceLocation(result)))
 
  .catch(error => console.log('error', error));
  }
  
  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState({isSignedIn: false})
>>>>>>> 8379e86a2883ca805001a2ebca1866d5242622f8
    } else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <ParticlesBg className='particles' 
        color="#000000" num={250} 
        type="cobweb" bg={true} />
        
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        {route === 'home' 
          ? <div>
              <Logo />
<<<<<<< HEAD
              <Rank name={this.state.user.name} entries={this.state.user.entries}/>
=======
              <Rank />
>>>>>>> 8379e86a2883ca805001a2ebca1866d5242622f8
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onButtonSubmit={this.onButtonSubmit} />
              <FaceRecognition box={box} imageUrl={imageUrl}/>
            </div>
          : (
            route === 'signin'
<<<<<<< HEAD
            ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
=======
            ? <Signin onRouteChange={this.onRouteChange}/>
            : <Register onRouteChange={this.onRouteChange}/>
>>>>>>> 8379e86a2883ca805001a2ebca1866d5242622f8
            ) 
        }
      
    </div>
    );
  }
}

export default App;
