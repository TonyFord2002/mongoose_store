const React = require('react');

class New extends React.Component {
  render() {
    return( 
     <body style={{backgroundColor:'rgb(255, 193, 204)'}}> 
    <div>
        <h1 style={{color:'#2F195F', fontSize:'40px'}}>Add New Candy</h1>
       
        <form action="/products" method="POST">
          Name: <input type="text" name="name" /><br/>
          Description: <input type='text' name='description'/><br />
          Image Link: <input type='text' name='img'/><br/>
          Price: <input type="number" step = '0.01' name="price" min='0'/><br/>
          Quantity: <input type='number' name= 'qty' min='0'/><br/>
          <input style={{color:'white', backgroundColor:'lightgreen', fontSize:'15px', borderRadius:'10px'}} type="submit" name="" value="Add Candy"/><br/>
        </form>
        
        </div>
        </body>
  )
}
}
module.exports = New