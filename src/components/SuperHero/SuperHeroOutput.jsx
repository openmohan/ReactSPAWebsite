import React from 'react'
import {connect} from 'react-redux';
import {getLoginInfo,getUserInfo} from '../../../actions/actions.js'
var _ = require('lodash');

var SuperHeroOutput = React.createClass({
   componentDidMount:function(){

	},
	render : function(){
	var heroURL = "SuperHero/"
	return(
		<div>
		  Welcome 
		  {_.get(this.props,'basic.profileInfo.name',"User")}
		  <img src={_.get(this.props,'basic.profileInfo.picture.data.url',"")} />
		  <br/>
		  you are {_.get(this.props,'basic.hero.name',"Dummy")}
		  <img src={heroURL + _.get(this.props,'basic.hero.img',"Dummy")} />
		</div>
		)
	}
})

const mapStateToProps = (state) => {
  return {
  	basic : state.basic,
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
  getInfo : ()=>{ dispatch(getLoginInfo()) },
  getUserInfo : ()=>{ dispatch(getUserInfo()) },
  getSuperHero : ()=>{ dispatch(getSuperHero()) }

  }
}



const MySuperHeroOutput = connect(mapStateToProps, mapDispatchToProps)(SuperHeroOutput);

export default MySuperHeroOutput;