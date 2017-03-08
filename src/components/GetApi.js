import React, { Component } from 'react';
import axios from 'axios';

class GetApi extends Component {

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

    componentWillUnmount = () => {
        this.serverRequest.abort();
    }
    render(){
        return(
            <ProductList list={this.state.products} />
            )
            
    }

};

export default GetApi;