module.exports = {
    //ADD NEW PRODUCT
    createProduct: (req, res, next) => {
        const db = req.app.get('db');
        const {companyid,costprice,imageurl,inventory,productdescription,productname,saleprice, category} = req.body;
        
        db.add_product([companyid,costprice,imageurl,inventory,productdescription,productname,saleprice, category])
        .then(() => res.status(200).send(req.body))
        .catch(() => res.status(500).send());
    },

    newPurchase: (req, res, next) => {
        const db = req.app.get('db');
        const { productid,	giver,total} = req.body;
        
        db.purchase_product([productid,	giver,total])
        // .then(() => res.status(200).send(req.body))
        // .then(response => {console.log('response', response)})
        
        .then(product => res.status(200).send('Product Purchased!'))
        .catch(() => res.status(500).send());
    },

    allProducts: (req, res) => {
        const db = req.app.get('db');
        // const { params } = req;
    
        db.all_products()
          .then(products => res.status(200).send(products))
          .catch(() => res.status(500).send());
      },

      singleProduct: (req, res, next) => {
        const db = req.app.get('db');
        const { params } = req;
        
        db.get_single_product([params.id])
        .then(product => res.status(200).send(product[0]))
        .catch(() => res.status(500).send());
      },
      myTransactions: (req, res) => {
        const db = req.app.get('db');
        const { params } = req;
    
        db.active_users_transactions([params.id])
          .then(transactions => res.status(200).send(transactions))
          .catch(() => res.status(500).send());
      },

      myPointHistory: (req, res) => {
        const db = req.app.get('db');
        const { params } = req;
    
        db.users_point_history([params.id])
          .then(transactions => res.status(200).send(transactions))
          .catch(() => res.status(500).send());
      },
      deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const { params } = req;
    
        db.delete_product([params.productid])
          .then(() => res.status(200).send('PRODUCT DELETED'))
          .catch(() => res.status(500).send());
      }
};

