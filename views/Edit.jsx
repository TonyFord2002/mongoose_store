const React = require('react');

class Edit extends React.Component{
  render() {
    return (
     
          <form action={`/product/${this.props.products._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.product.name}/><br/>
          Price: <input type="text" name="price"  defaultValue={this.props.product.price}/><br/>
          </form>
    )
  }
}
module.exports= Edit;