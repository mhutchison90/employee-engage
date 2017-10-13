import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import './AddProduct.css';
import axios from 'axios';

export default class AddEmployee extends Component {
    constructor() {
        super();
        this.state = {
            product: [],
            companyid: 1,
            productname: '',
            imageurl: '',
            productdescription: '',
            costprice: null,
            saleprice: null,
            inventory: null
        }
        this.saveNewProduct = this.saveNewProduct.bind(this)
    }

    saveNewProduct() {
        const { companyid, productname, imageurl, productdescription, costprice, saleprice, inventory } = this.state
        axios.post('/api/add/product', { companyid, productname, imageurl, productdescription, costprice, saleprice, inventory }).then(res => {
            this.setState({
                user: res.data
            })
        })
    }


    render() {
        return (
            <div className='App'>
                <h1>Add Product</h1>
                {console.log(this.state)}


                Product Name: <input name='productname' type='text' value={this.state.productname} onChange={(e) => {
                    this.setState({
                        productname: e.target.value
                    })
                }} />

                imageurl: <input name='imageurl' type='text' value={this.state.imageurl} onChange={(e) => {
                    this.setState({
                        imageurl: e.target.value
                    })
                }} />

                Product Description: <input name='productdescription' type='text' value={this.state.productdescription} onChange={(e) => {
                    this.setState({
                        productdescription: e.target.value
                    })
                }} />

                Cost Price: <input name='costprice' placeholder='number required' type='text' value={this.state.costprice} onChange={(e) => {
                    this.setState({
                        costprice: e.target.value
                    })
                }} />

                Sale Price: <input name='saleprice' placeholder='number required' type='text' value={this.state.saleprice} onChange={(e) => {
                    this.setState({
                        saleprice: e.target.value
                    })
                }} />
                
                Inventory (num): <input name='inventory' placeholder='number required' type='text' value={this.state.inventory} onChange={(e) => {
                    this.setState({
                        inventory: e.target.value
                    })
                }} />

                <div>

                    <button onClick={this.saveNewProduct}>Save!</button>
                </div>




            </div>
        );
    };
};