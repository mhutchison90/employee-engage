import React, { Component } from 'react';
import axios from 'axios';
import { getProductInfo, setProductsOnRedux } from '../../ducks/reducer';
import { connect } from 'react-redux';
import './Shop.css'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      giver: 283,
      productid: '',
      total: '',
      test: '',
    }
    this.purchaseProduct = this.purchaseProduct.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)

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

  deleteProduct(id) {
    // const { productid } = this.state
    // console.log('deleted!')
    axios.delete('/api/product/delete/' + id)
      .then(res => {
        this.setState({
          test: res.data
        })
      })
  }



  render() {
    // console.log(this.props.user)    
    return (
      <div className="Shop-Body-Container">
        <div className="Products-Container">
          {/* <div id='toggle-edit-shop-button'> </div> */}

          <div className='shop-category-header'>DRINKS</div>
          <div className='shop-category-container'>
            {this.props.products.map((product, i) => {
              // map through products here to display all
              if (product.category === 'Drinks') {
                return (
                  <div key={i} className="Product-Container">

                    <Link className='shop-link-to-details' to={`/details/${product.productid}`} >
                      <div className='shop-product-image-container' > <img className='shop-product-image' src={product.imageurl} alt={product.productname} /> </div>
                      <div className='shop-product-name' >{product.productname}</div>
                    </Link>
                    {this.props.user.userrole === 'admin'? 
                    <div className='delete-product-from-shop'
                      onClick={_ => swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover " + product.productname,
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      })
                        .then((willDelete) => {
                          if (willDelete) {
                            this.deleteProduct(product.productid)
                            swal(product.productname + " has been deleted from the shop", {
                              icon: "success",
                            });
                          } else {
                            swal("this " + product.productname + " is safe!");
                          }
                        })}
                    >DELETE</div>
                    : null }
                  </div>
                )
              }
            })}</div>
          <div className='shop-category-header'>Snacks</div>
          <div className='shop-category-container'>
            {this.props.products.map((product, i) => {
              // map through products here to display all
              if (product.category === 'Snacks') {
                return (
                  <div key={i} className="Product-Container">

                    <Link className='shop-link-to-details' to={`/details/${product.productid}`} >
                      <div className='shop-product-image-container' > <img className='shop-product-image' src={product.imageurl} alt={product.productname} /> </div>
                      <div className='shop-product-name' >{product.productname}</div>
                    </Link>
                    {this.props.user.userrole === 'admin'? 
                    <div className='delete-product-from-shop'
                      onClick={_ => swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover " + product.productname,
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      })
                        .then((willDelete) => {
                          if (willDelete) {
                            this.deleteProduct(product.productid)
                            swal(product.productname + " has been deleted from the shop", {
                              icon: "success",
                            });
                          } else {
                            swal("this " + product.productname + " is safe!");
                          }
                        })}
                    >DELETE</div>
                    : null }
                  </div>
                )
              }
            })}</div>
          <div className='shop-category-header'>Gift Cards</div>
          <div className='shop-category-container'>
            {this.props.products.map((product, i) => {
              // map through products here to display all
              if (product.category === 'Gift Cards') {
                return (
                  <div key={i} className="Product-Container">

                    <Link className='shop-link-to-details' to={`/details/${product.productid}`} >
                      <div className='shop-product-image-container' > <img className='shop-product-image' src={product.imageurl} alt={product.productname} /> </div>
                      <div className='shop-product-name' >{product.productname}</div>
                    </Link>
                    {this.props.user.userrole === 'admin'? 
                    <div className='delete-product-from-shop'
                      onClick={_ => swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover " + product.productname,
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      })
                        .then((willDelete) => {
                          if (willDelete) {
                            this.deleteProduct(product.productid)
                            swal(product.productname + " has been deleted from the shop", {
                              icon: "success",
                            });
                          } else {
                            swal("this " + product.productname + " is safe!");
                          }
                        })}
                    >DELETE</div>
                    : null }
                  </div>
                )
              }
            })}</div>
          <div className='shop-category-header'>SWAG</div>
          <div className='shop-category-container'>
            {this.props.products.map((product, i) => {
              // map through products here to display all
              if (product.category === 'SWAG') {
                return (
                  <div key={i} className="Product-Container">

                    <Link className='shop-link-to-details' to={`/details/${product.productid}`} >
                      <div className='shop-product-image-container' > <img className='shop-product-image' src={product.imageurl} alt={product.productname} /> </div>
                      <div className='shop-product-name' >{product.productname}</div>
                    </Link>
                    {this.props.user.userrole === 'admin'? 
                    <div className='delete-product-from-shop'
                      onClick={_ => swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover " + product.productname,
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      })
                        .then((willDelete) => {
                          if (willDelete) {
                            this.deleteProduct(product.productid)
                            swal(product.productname + " has been deleted from the shop", {
                              icon: "success",
                            });
                          } else {
                            swal("this " + product.productname + " is safe!");
                          }
                        })}
                    >DELETE</div>
                    : null }
                  </div>
                )
              }
            })}</div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products,
    user: state.user };
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
