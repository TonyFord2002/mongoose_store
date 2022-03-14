const React = require('react')
 
// const counter = () => {
//     let count = this.props.product.qty
//     const buy=()=>{
//       if(count>0)
//       setCount(count-1)
//     }

    class Show extends React.Component {

       render () {
        return (
          <div>
                <h1>Products show page</h1>
                <img style={{height:'200px', width:'200px'}} src = { this.props.product.img }></img><br/>
                            Item: { this.props.product.name }<br/>
                            Description: {this.props.product.description}<br/>
                            Price: ${this.props.product.price}.<br/>
                            Quantity: {this.props.product.qty}
                               <br/><br/>
            

            <input type="button" value="Buy Item" onClick /><br/>
   

          <a href={`/products/${this.props.product._id}/edit`}><button>Edit This Item</button></a>
          
          <form action={`/products/${this.props.product._id}?_method=DELETE`} method="POST">
            <input type="submit" value="Delete Item"/>
            </form>
            <a href={'/products'}><button>Back to List</button></a>
            </div>
         )
        }
     }
module.exports  = Show