const React = require('react')

class Edit extends React.Component{
  render() {
    return (
        <body style={{backgroundColor:'rgb(255, 193, 204)'}}>
          <form action={`/products/${this.props.product._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.product.name}/><br/>
          Description: <input type='text' name='description' defaultValue={this.props.product.description}/><br />
          Image Link: <input type='text' name='img' defaultValue={this.props.product.img}/><br/>
          Price: <input type="text" step = '0.01' name="price"  defaultValue={this.props.product.price} min='0'/><br/>
          Quantity: <input type='number' name='qty' defaultValue={this.props.product.qty} min='0'/><br/>
          <input type="submit" value="Submit Changes"/>
          </form>
          </body>
    )
  }
}
module.exports= Edit