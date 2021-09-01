import { HomePage } from './pages/homepage/home-page.component';
import './App.css';
import React from "react"
import { Route, Switch,Redirect } from 'react-router-dom';
import { ShopPage } from './pages/shop/shop.component';
import Header from "./components/header/header.component.jsx"
import SignInAndUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from "./firebase/firebase.utils"
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
      
  unSubscribeFromAuth=null
  componentDidMount(){
    const {setCurrentUser} =this.props;
    this.unSubscribeFromAuth=auth.onAuthStateChanged(async (userAuth)=>{
      if (userAuth){
      const userRef=await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshot=>{
        setCurrentUser({ 
         
            id:snapshot.id,
          ...snapshot.data()
          
        } )
      });
      }
      else{
        setCurrentUser(
          userAuth
       )
      }

    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }
  render(){
    return (
      <div className="App">
  <Header />
      <Switch>
     <Route exact path="/" component={HomePage}/>
     <Route  path="/shop/hats" component={ShopPage}/>
      
     <Route exact path="/signin" render={()=>this.props.currentUser?(<Redirect to="/" />):<SignInAndUp/>}/>
      
      </Switch>
   
      </div>
    );  
  }
  
}
//destructing user reducer
const mapStateToProps=({user})=>({
currentUser:user.currentUser
})
const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps) (App);
