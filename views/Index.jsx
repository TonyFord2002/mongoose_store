const React = require('react')

    class Index extends React.Component {
       render(){
        return ( 
            <body style={{backgroundColor:'rgb(255, 193, 204)'}}>
        <div > 
            <h1 style={{color:'#2F195F', fontSize:'40px'}}>My Candy Store</h1>
            <nav>
            <a style={{fontSize:'17px'}}href="/products/new">Add a new candy to the list!</a>
            </nav>
            <ul>
                {
                   this.props.products.map((product, i) => {
                    const productname = product.name.charAt(0).toUpperCase() + product.name.slice(1)
                    return (
                        <li key={i} style={{listStyleType:'none'}}>
                           <a href = {`/products/${ product._id }`}><img style={{height:'200px', width:'200px', borderStyle:'outset'}} src = { product.img }></img></a><br/>
                            <p style = {{fontSize:'20px'}}>Item: { productname }</p>
                            <p style = {{fontSize:'20px'}}>Description: {product.description}</p>
                            <p style = {{fontSize:'20px'}}>Price:${product.price}</p>
                            <a style={{fontSize:'20px'}} href={`/products/${product._id}`}>Buy this Product</a>
                               <br/><br/>
                        </li>
                        )
                    })
                }
            </ul>

        </div> 
        </body>
        )
    }
}
    module.exports = Index