const React = require('react');

class New extends React.Component {
  render() {
    return( 
    <div>
      <link rel="stylesheet" href="/css/app.css"/>    
        <h1>New Candy page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/products" method="POST">
          Name: <input type="text" name="name" /><br/>
          Description: <input type='text' name='description'/><br />
          Image Link: <input type='text' name='img'/><br/>
          Price: <input type="number" step = '0.01' name="price" min='0'/><br/>
          Quantity: <input type='number' name= 'qty' min='0'/><br/>
          <input type="submit" name="" value="Add Candy"/><br/>

        </form>
        
        </div>
  )
}
}
module.exports = New