import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {connect} from 'react-redux';
import {getLoginInfo,getUserInfo,FBLOGIN} from '../../../actions/actions.js'


var SuperHeroLogin = React.createClass({
  componentDidMount: function() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '407830199562454',
        xfbml      : true,
        version    : 'v2.8'
      });
     // FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  },
  pushToMainQuestions : function(){
    this.props.FBLOGIN();
  },
  render() {
     return (
      <div>
          <div className="row" > 
              Find which superhero will you be infinity warrior?	
          </div>
         <div className="row">
            <FacebookLogin
            appId="407830199562454"
            autoLoad={true}
             fields="name,email,picture"
            scope="public_profile,user_friends,user_actions.books"
            textButton="Play" 
            callback={this.pushToMainQuestions}/>
           </div>
         </div>
      );
   }
  }
)
const mapStateToProps = (state) => {
  return {
    basic : state.basic,
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    getLoginInfo : ()=>{ dispatch(getLoginInfo()) },
    getUserInfo : ()=>{ dispatch(getUserInfo()) },
    FBLOGIN : ()=>{ dispatch(FBLOGIN()) }
  }
}

const MySuperHeroLogin = connect(mapStateToProps, mapDispatchToProps)(SuperHeroLogin);

export default MySuperHeroLogin;