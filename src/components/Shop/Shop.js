import React, { Component } from 'react';
import axios from 'axios';
import { getProductInfo } from '../../ducks/reducer';
import { connect } from 'react-redux';
import './Shop.css'
import { Link } from 'react-router-dom'

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      giver: 1,
      productid: '',
      total: '',
    }
    this.purchaseProduct = this.purchaseProduct.bind(this)
  }

  componentDidMount() {
    // console.log(this.props.product)
    this.props.getProductInfo()
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
    return (
      <div>



        <div className='Products-Container'>
          {this.props.product.map((item, i) => {
            return (
              <div className='Product-Container' key={i}>
                <Link to={`/details/${item.productid}`} >
                  {item.productname}
                  <img src={item.imageurl} alt={item.productname} />
                </Link>
                {/* <h3>{item.productname}</h3>
                <img src={item.imageurl} alt={item.productname} />
                <h5>Description: {item.productdescription}</h5>
                <h5>Price: {item.saleprice}</h5>
                <h5>Inventory: {item.inventory}</h5> */}
                {/* 
  {!this.state.total ? <button onClick={() => {
    this.setState({
      total: item.saleprice,
      productid: item.productid
    })
  }
}>Purchase</button>
:<div>
<button onClick={this.purchaseProduct}>Confirm Purchase</button>
<button onClick={() => {
  this.setState({
    total: '',
    productid: ''
  })
}
}>Cancel</button>
</div>
} */}


                {/* {console.log('total: ', this.state.total, 'productid: ', this.state.productid, 'giver: ', this.state.giver)} */}
                {/* {console.log('product from  redux: ', this.props.product)} */}
              </div>
            )
          })}

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  if (!state) return {};
  return { product: state.product };
}

export default connect(mapStateToProps, { getProductInfo: getProductInfo })(Shop);





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