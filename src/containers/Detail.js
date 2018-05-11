import React, {Component} from 'react';

class Detail extends Component{
	constructor(props){
		super(props);
		this.state= {
			details: ''
		};
	}

	async componentDidMount(){
		let url = this.props.url;

	    await fetch(url)
	    .then( response => response.json())
	    .then( data => {
	    		if (data.title) {
	    			this.setState({details: data.title});
	    		} else {
	    			this.setState({details: data.name});
	    		}
			}
	    );
	}

	render(){
		return (<span> {this.state.details + ","}</span>);
	}
}

export default Detail;
