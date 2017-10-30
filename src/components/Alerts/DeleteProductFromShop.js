import React, { Component } from 'react';
import swal from 'sweetalert'

class DeleteProductFromShop extends Component {    
    render() {
        return(
            <div className='delete-product-from-shop'
            onClick={_ => swal({
              title: "Are you sure?",
              text: "Once deleted, you will not be able to recover ",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
              .then((willDelete) => {
                if (willDelete) {
                  
                  swal(" has been deleted from the shop", {
                    icon: "success",
                  });
                } else {
                  swal("this is safe!");
                }
              })}
            >DELETE</div>
        )
    }

}

export default DeleteProductFromShop;
