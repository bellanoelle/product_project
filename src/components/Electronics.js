
import React, {Component} from 'react';
import axios from 'axios';


class Electronics extends Component {

	constructor(props) {
        super(props);
        this.state = {products: []};
    }    


    componentDidMount = () =>{
        this.serverRequest = 
            axios.get(this.props.source)
                .then(res => {
                    this.setState({
                        products: res.data.products
                    })
                });
    }
    render(){
    	return (
    	
    	<div>
    	{this.state.products.map(product => {
    		return(
	    		<p> {
	    			product.name
	    		}
	    		
	    		</p>
			)    		
    	})
    }
    	</div>
    	

    	)
    }
}

export default Electronics;