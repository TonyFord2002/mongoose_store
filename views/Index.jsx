const React = require('react')

    class Index extends React.Component {
       render(){
        return ( 
        <div> 
            <h1>Products Page</h1>
            <nav>
            <a href="/products/new">Add a new candy</a>
            </nav>
            <ul>
                {
                   this.props.products.map((product, i) => {
                    return (
                        <li key={i}>
                            The <a href = {`/products/${ product._id }`}>{ product.name } </a> is {product.price }.
                               <a href={`/products/${product._id}/edit`}>Buy this Product</a>
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