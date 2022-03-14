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
          Price: <input type="number" name="price" /><br/>
          <input type="submit" name="" value="Add Candy"/>
        </form>
        
        </div>
  )
}
}
module.exports = New