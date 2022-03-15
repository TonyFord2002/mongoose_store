const React = require('react')

 
    class Show extends React.Component {

       render () {
        if(this.props.product.qty > 0){
        return (
          <div>
                <h1>Products show page</h1>
                <img style={{height:'200px', width:'200px'}} src = { this.props.product.img }></img><br/>
                            Item: { this.props.product.name }<br/>
                            Description: {this.props.product.description}<br/>
                            Price: ${this.props.product.price}.<br/>
                            Quantity: {this.props.product.qty}
                               <br/><br/>
           
        <form action={`/products/${this.props.product._id}?_method=PATCH`} method="POST">
            <input type="submit" value="Buy Item" />
        </form>

          <a href={`/products/${this.props.product._id}/edit`}><button>Edit This Item</button></a>
          
          <form action={`/products/${this.props.product._id}?_method=DELETE`} method="POST">
            <input type="submit" value="Delete Item"/>
            </form>
            <a href={'/products'}><button>Back to List</button></a>
            </div>
         )
        }
    else{
        return(
        <div>
                <h1>Products show page</h1>
                <img style={{height:'200px', width:'200px'}} src = { this.props.product.img }></img><br/>
                            Item: { this.props.product.name }<br/>
                            Description: {this.props.product.description}<br/>
                            Price: ${this.props.product.price}.<br/>
                            Quantity: Out of Stock
                               <br/><br/>
           
        {/* <form action={`/products/${this.props.product._id}?_method=PATCH`} method="POST">
            <input type="submit" value="Buy Item" />
        </form> */}

          <a href={`/products/${this.props.product._id}/edit`}><button>Edit This Item</button></a>
          
          <form action={`/products/${this.props.product._id}?_method=DELETE`} method="POST">
            <input type="submit" value="Delete Item"/>
            </form>
            <a href={'/products'}><button>Back to List</button></a>
            </div>
         )
        }
    }
    }
     
module.exports  = Show