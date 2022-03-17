const React = require('react')

 
    class Show extends React.Component {

       render () {
        if(this.props.product.qty > 0){
            const productname = this.props.product.name.charAt(0).toUpperCase() + this.props.product.name.slice(1)
        return (
            <body style={{backgroundColor:'rgb(255, 193, 204)'}}>
          <div>
                <h1 style={{color:'#2F195F', fontSize:'40px'}}>{productname}</h1>
                <img style={{height:'250x', width:'250px'}} src = { this.props.product.img }></img><br/>
                <p style = {{fontSize:'20px'}}>Item: { productname }</p>
                <p style = {{fontSize:'20px'}}>Description: {this.props.product.description}</p>
                <p style = {{fontSize:'20px'}}>Price: ${this.props.product.price}</p>
                <p style = {{fontSize:'20px'}}>Quantity: {this.props.product.qty}</p>
                               <br/><br/>
         {/* Buy button   */}
        <form  action={`/products/${this.props.product._id}?_method=PATCH`} method="POST">
            <input style={{color:'white', backgroundColor:'gold', fontSize:'15px', borderRadius:'10px'}} type="submit" value="Buy Item" />
        </form>
        {/* Edit button */}
        <a  href={`/products/${this.props.product._id}/edit`}><button style={{color:'white', backgroundColor:'lightblue', fontSize:'15px', borderRadius:'10px'}}>Edit Item</button></a>
        {/* Delete button   */}
        <form action={`/products/${this.props.product._id}?_method=DELETE`} method="POST">
            <input style={{color:'white', backgroundColor:'red', fontSize:'15px', borderRadius:'10px'}} type="submit" value="Delete Item"/>
        </form>
        {/* Back to main page button */}
        <a href={'/products'}><button style={{color:'white', backgroundColor:'lightgreen', fontSize:'15px', borderRadius:'10px'}}>Back to List</button></a>
            </div>
            </body>
         )
        }
    else{
        const productname = this.props.product.name.charAt(0).toUpperCase() + this.props.product.name.slice(1)
        return(
            <body style={{backgroundColor:'rgb(255, 193, 204)'}}>
          <div>
                <h1 style={{color:'#2F195F', fontSize:'40px'}}>{productname}</h1>
                <img style={{height:'250x', width:'250px'}} src = { this.props.product.img }></img><br/>
                <p style = {{fontSize:'20px'}}>Item: { productname }</p>
                <p style = {{fontSize:'20px'}}>Description: {this.props.product.description}</p>
                <p style = {{fontSize:'20px'}}>Price: ${this.props.product.price}</p>
                <p style = {{fontSize:'20px'}}>Quantity: Out of Stock</p>
                               <br/><br/>

        {/* Edit button */}
        <a  href={`/products/${this.props.product._id}/edit`}><button style={{color:'white', backgroundColor:'lightblue', fontSize:'15px', borderRadius:'10px'}}>Edit Item</button></a>
        {/* Delete button   */}
        <form action={`/products/${this.props.product._id}?_method=DELETE`} method="POST">
            <input style={{color:'white', backgroundColor:'red', fontSize:'15px', borderRadius:'10px'}} type="submit" value="Delete Item"/>
        </form>
        {/* Back to main page button */}
        <a href={'/products'}><button style={{color:'white', backgroundColor:'lightgreen', fontSize:'15px', borderRadius:'10px'}}>Back to List</button></a>
            </div>
            </body>
         )
        }
    }
    }
     
module.exports  = Show