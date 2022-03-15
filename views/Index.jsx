const React = require('react')

    class Index extends React.Component {
       render(){
        return ( 
        <div> 
            <h1>My Candy Store</h1>
            <nav>
            <a href="/products/new">Add a new candy</a>
            </nav>
            <ul>
                {
                   this.props.products.map((product, i) => {
                    return (
                        <li key={i} style={{listStyleType:'none'}}>
                           <a href = {`/products/${ product._id }`}><img style={{height:'200px', width:'200px'}} src = { product.img }></img></a><br/>
                            Item: { product.name }<br/>
                            Description: {product.description}<br/>
                            Price:${product.price}.<br/>
                            Quantity: {product.qty}<br/>
                               <a href={`/products/${product._id}`}>Buy this Product</a>
                               <br/><br/>
                        </li>
                        )
                    })
                }
            </ul>

        </div> 
        )
    }
}
    module.exports = Index