const React = require('react')

    class Index extends React.Component {
       render(){
        return ( 
        <div>
            <link rel="stylesheet" href="/css/app.css"/>    
            <h1>Products Page</h1>
            {/* <nav>
            <a href="/product/new">Add a new product</a>
            </nav> */}
            <ul>
                {
                   this.props.products.map((product, i) => {
                    return (
                        <li key={i}>
                            The <a href = {`/product/${ product._id }`}>{ product.name } </a> is {product.price }.
                               <a href={`/product/${product._id}/edit`}>Buy this Product</a>
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