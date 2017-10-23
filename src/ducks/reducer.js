import axios from 'axios';

const initialState = {
    user: {},
    product: [{
        productid: '',
        companyid: '',
        productname: '',
        imageurl: '',
        productdescription: '',
        costprice: '',
        saleprice: '',
        inventory: '',
        category: ''
    }],
    employees: [{}],
    employeesList: [{}],
    cart: [],
    products: []
}

// --ACTION CONSTRAINTS--
const GET_USER_INFO = 'GET_USER_INFO';
const GET_PRODUCT_INFO = 'GET_PRODUCT_INFO';
const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_BALANCES = 'GET_BALANCES';
const GET_EMPLOYEES_LIST = 'GET_EMPLOYEES_LIST';
const SET_ONE_PRODUCT_ON_REDUX = 'SET_ONE_PRODUCT_ON_REDUX';
const SET_PRODUCTS_ON_REDUX = 'SET_PRODUCTS_ON_REDUX';



// --ACTION CREATORS--
export function getUserInfo() {
    const userData = axios.get('/auth/me').then(res => {
        return res.data
    })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function getProductInfo() {
    const productData = axios.get('/api/products').then(res => {
        return res.data
    })
    return {
        type: GET_PRODUCT_INFO,
        payload: productData
    }
}
export function setProductsOnRedux(val) {
    return {
      type: SET_PRODUCTS_ON_REDUX,
      payload: val
    }
  }

export function getActiveUser(employeeid) {
    const employees = axios.get(`/api/user/` + employeeid).then(res => { //I think i would need to get the active user Auth0 id set up and use it here
        return res.data
    })
    return {
        type: GET_BALANCES,
        payload: employees
    }
}
export function getEmployeesList() {
    const employeesData = axios.get('/api/users').then(res => {
        return res.data
    })
    return {
        type: GET_EMPLOYEES_LIST,
        payload: employeesData
    }
}
export function setOneProductOnRedux(val) {
    return {
        type: SET_ONE_PRODUCT_ON_REDUX,
        payload: val
    }
}

// --REDUCER--
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case GET_PRODUCT_INFO + '_FULFILLED':
            return Object.assign({}, state, { product: action.payload });
        case GET_BALANCES + '_FULFILLED':
            return Object.assign({}, state, { employees: action.payload });
        case GET_EMPLOYEES_LIST + '_FULFILLED':
            return Object.assign({}, state, { employeesList: action.payload });
        case SET_ONE_PRODUCT_ON_REDUX + '_FULFILLED':
            return Object.assign({}, state, { product: action.payload });
        case SET_PRODUCTS_ON_REDUX + '_FULFILLED':
            return Object.assign({}, state, {products: action.payload});

        default:
            return state;
    }
}









// export function setProductData(state= initialState, action) {
//     switch(action.type) {
//         case GET_PRODUCT_INFO+ '_FULFILLED':
//             return Object.assign({}, state,{product: action.payload})
//         default:
//             return state;
//     }
// }

// export function getProducts(allProducts) {
//     return {
//       type: GET_PRODUCTS,
//       payload: allProducts
//     }
//   }