import React, {Component} from 'react';
import Detail from '../containers/Detail';

class Card extends Component{

	constructor(props){
		super(props);
		this.state = { 
			displayContent: false,
			displayStyle: "d-none",
			cardStyle: "col-11 col-sm-4 col-md-4 col-lg-3"
		};
	}

	handleClick = () => {
		this.setState({displayStyle: this.state.displayContent ? "d-none" : ""});
		this.setState({cardStyle: this.state.displayContent ? "col-11 col-sm-4 col-md-4 col-lg-3" : "col-11 col-sm-11 col-md-11 col-lg-11"});
		this.setState({displayContent: !this.state.displayContent});
		console.log(this.state.displayContent);
	}

	render(){
		let {character} = this.props;

		var attrArr = Object.keys(character);

		return (
			<div className={"m-2 p-2" + this.state.cardStyle} >
			  	<div className="card bg-info text-white border-light">
				  	<h5 className="card-header"  onClick={this.handleClick} >{character['name']}</h5>
				  	<div className={"card-body " + this.state.displayStyle}>
				    	<div>
				    		{
				    		 	attrArr.map( (a, i) => {
				    		 		return (
				    		 			<p key={i} className="card-text"><span className="text-dark">{a.replace("_", " ")}: </span>  
				    		 			{
				    		 				Array.isArray(character[a]) ? 
					    		 				character[a].map( (s, i) => {
					    		 					return (<Detail key={"det_" + i} url={s} />);
					    		 				}) :
					    		 				a === "homeworld" ? 
					    		 					<Detail key={"det_homeworld1"} url={character[a]} /> :
					    		 					character[a]
				    		 			}
				    		 			</p>
				    		 		);
				    		 	})
				    		}
						</div>
					</div>
			  	</div>  
			</div>
		);
	}

}
export default Card;