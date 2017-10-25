import React, { Component } from 'react';
import axios from 'axios';
import { getProductInfo, setProductsOnRedux } from '../../ducks/reducer';
import { connect } from 'react-redux';
import './Shop.css'
import { Link } from 'react-router-dom'

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      giver: 283,
      productid: '',
      total: '',
    }
    this.purchaseProduct = this.purchaseProduct.bind(this)
  }

  // componentDidMount() {
  //   // console.log(this.props.product)
  //   this.props.getProductInfo()
  // }

  componentDidMount() {
    axios.get('/api/products')
      .then(products => {
        this.props.setProductsOnRedux(products.data);
        // console.log(products.data)
      });
  }

  purchaseProduct() {
    const { productid, giver, total } = this.state
    axios.put('/api/transaction', { productid, giver, total }).then(res => {
      this.setState({
        user: res.data
      })
    })
    this.setState({
      total: '',
      productid: ''
    })
  }


  render() {
// console.log(this.props.products)
    return (
      <div className="Shop">

        <div className="Products-Container">
          {this.props.products.map((product, i) => {
            // map through products here to display all
            return (
              <div key={i} className="Product-Container">
              
                <Link to={`/details/${product.productid}`} >
                  <img className='shop-image' src={product.imageurl} alt={product.productname} />
                  <p>{product.productname}</p>
                </Link>

              </div>
            )
          })}
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}

const mapDispatchToProps = { setProductsOnRedux: setProductsOnRedux }

export default connect(mapStateToProps, mapDispatchToProps)(Shop);




/*
<div className="content">
            <h2>list of all products:</h2>
            {this.props.product.map((item, i) => {
              return
              <div key={i}>
                <h3>{item.productname}</h3>
              </div>
            })}
          </div>

          WORKING CODE THAT DISPLAYS PRODUCT NAMES:
<div className="content">
            <h2>list of all products:</h2>
            {this.props.product.map((item, i) => {
              return <div key={i}>{item.productname}</div>
            })}
          </div>



          <button onClick={
            this.setState({
              total: item.saleprice,
              productid: item.productid
            })
          }>add to cart</button>

          <button onClick={() => {
            console.log('Set State')
            this.setState({
              total: item.saleprice,
              productid: item.productid
            })
          }
          }> </button>

          */


//           <div className='Products-Container'>
//           {this.props.products.map((product, i) => {
//             return (
//               <div className='Product-Container' key={i}>
//                 <Link to={`/details/${product.productid}`} >
//                   {product.productname}
//                   <img src={product.imageurl} alt={product.productname} />
//                 </Link>
//                 {/* <h3>{item.productname}</h3>
//                 <img src={item.imageurl} alt={item.productname} />
//                 <h5>Description: {item.productdescription}</h5>
//                 <h5>Price: {item.saleprice}</h5>
//                 <h5>Inventory: {item.inventory}</h5> */}
//                 {/* 
//   {!this.state.total ? <button onClick={() => {
//     this.setState({
//       total: item.saleprice,
//       productid: item.productid
//     })
//   }
// }>Purchase</button>
// :<div>
// <button onClick={this.purchaseProduct}>Confirm Purchase</button>
// <button onClick={() => {
//   this.setState({
//     total: '',
//     productid: ''
//   })
// }
// }>Cancel</button>
// </div>
// } */}


//                 {/* {console.log('total: ', this.state.total, 'productid: ', this.state.productid, 'giver: ', this.state.giver)} */}
//                 {/* {console.log('product from  redux: ', this.props.product)} */}
//               </div>
//             )
//           })}
