import rea

render() {

        // Styling
        var jobStyle = {
            padding: "1em",
            margin: "1em 0 2em 0",
            backgroundColor: "silver",
        };
        var jobRubrik = {
            color: "red",
            borderBottom: "3px solid black"
        };

        return ( 
  <div>

        {this.props.list.map(product =>{
            return (
                <div key={product.url} style={jobStyle}>
                    <h3 style={jobRubrik}>{product.name}</h3>
                    <p>Price: 
                    <a href={product.url}>                         
                    {product.consumerPrice}
                            
                     </a></p>
                </div>
            );

        })}
            </div>
        )
    }