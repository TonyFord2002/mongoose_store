const React = require('react')
    class Show extends React.Component {
       render () {
        return (
          <div>
             <link rel="stylesheet" href="/css/app.css"/>    
                <h1>Products show page</h1>
                <h2>The { this.props.product.name } is and  { this.props.product.price }</h2>
            <a href={'/products'}>Back to store</a>
            </div>
         )
        }
     }
module.exports  = Show