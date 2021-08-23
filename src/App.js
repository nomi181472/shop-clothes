import { HomePage } from './pages/homepage/home-page.component';
import './App.css';
import React from "react"
import { Route, Switch } from 'react-router-dom';
import { ShopPage } from './pages/shop/shop.component';
import Header from "./components/header/header.component.jsx"
import SignInAndUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from "./firebase/firebase.utils"

class App extends React.Component {
  constructor()
  {
    super()
    this.state={
      currentUser:null
    }
  }
  unSubscribeFromAuth=null
  componentDidMount(){
    this.unSubscribeFromAuth=auth.onAuthStateChanged((user)=>{
      
      this.setState({currentUser:user},()=>console.log(this.state.currentUser))
      
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }
  render(){
    return (
      <div className="App">
  <Header currentUser={this.state.currentUser}/>
      <Switch>
     <Route exact path="/" component={HomePage}/>
     <Route exact path="/shop/hats" component={ShopPage}/>
      
     <Route exact path="/signin" component={SignInAndUp}/>
      
      </Switch>
   
      </div>
    );  
  }
  
}

export default App;
