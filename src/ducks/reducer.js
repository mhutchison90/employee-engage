import axios from 'axios';

const initialState = {
    user: {},
    product: {},
    employees: [{}],
    employeesList: [{}],
    cart: [],
    products: [],
    employeeList:[],
    pointHistory:[],
    // cartTotal: ''
}

// --ACTION CONSTRAINTS--
const GET_USER_INFO = 'GET_USER_INFO';
const GET_PRODUCT_INFO = 'GET_PRODUCT_INFO';
const GET_PRODUCTS = 'GET_PRODUCTS'; 
const GET_BALANCES = 'GET_BALANCES';
const GET_EMPLOYEES_LIST = 'GET_EMPLOYEES_LIST';
const SET_ONE_PRODUCT_ON_REDUX = 'SET_ONE_PRODUCT_ON_REDUX';
const SET_PRODUCTS_ON_REDUX = 'SET_PRODUCTS_ON_REDUX';
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
const SET_LIST_OF_EMPLOYEES = 'SET_LIST_OF_EMPLOYEES';
const GET_POINT_HISTORY = 'GET_POINT_HISTORY';



// --ACTION CREATORS--
export function getListOfEmployees(employeeid) {
    const employeesListData = axios.get('/api/list/users').then(res => {
        // console.log('getListOfEmployees from REDUCER',res.data)
        return res.data
    })
    return {
        type: SET_LIST_OF_EMPLOYEES,
        payload: employeesListData
    }
}

export function getUserInfo() {
    const userData = axios.get('/auth/me').then(res => {
        return res.data
    })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function getPointHistory() {
    const pointHistoryData = axios.get('/api/user/pointhistory/*').then(res => {
        return res.data
    })
    return {
        type: GET_POINT_HISTORY,
        payload: pointHistoryData
    }
}


// export function getProductInfo() {
//     const productData = axios.get('/api/products').then(res => {
//         return res.data
//     })
//     return {
//         type: GET_PRODUCT_INFO,
//         payload: productData
//     }
// }

export function setProductsOnRedux(val) {
    // console.log('set products reducer', val)
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
export function addProductToCart(val) {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: val
    }
}

export function removeProductFromCart(val) {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
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
        case SET_ONE_PRODUCT_ON_REDUX:
            return Object.assign({}, state, { product: action.payload });
        case SET_PRODUCTS_ON_REDUX:
            return Object.assign({}, state, { products: action.payload });
        case ADD_PRODUCT_TO_CART:
            const newCart = state.cart.slice();
            newCart.push(action.payload);
            return Object.assign({}, state, { cart: newCart });
        case REMOVE_PRODUCT_FROM_CART:
            const copy = state.cart.slice();
            copy.splice(action.payload, 1)
            return Object.assign({}, state, { cart: copy });
            case SET_LIST_OF_EMPLOYEES:
            return Object.assign({}, state, { employeeList: action.payload });
            case GET_POINT_HISTORY + '_FULFILLED':
            return Object.assign({}, state, { pointHistory: action.payload });

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