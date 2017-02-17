import React from 'react'
import FacebookLogin from 'react-facebook-login';
var LayoutPage = React.createClass({

	render : function(){
	return(
	<div className="container-fluid height100">
	 <div className="row height100 no-gutter">
	  <div className="col-md-3 SidePageColor height100"></div>
	   <div className="col-md-6 MainPageColor height100">
	   {this.props.children && React.cloneElement(this.props.children,{data: this.props , dispatch:this.props.dispatch  }) }
	   </div>
	  <div className="col-md-3 height100 SidePageColor"></div>	
	 </div>
	</div>
	
	)}
})

export default LayoutPage