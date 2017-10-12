module.exports = {
    //ADD NEW PRODUCT
    createProduct: (req, res, next) => {
        const db = req.app.get('db');
        const { companyid,costprice,imageurl,inventory,productdescription,productname,saleprice } = req.body;
        
        db.add_product([companyid,costprice,imageurl,inventory,productdescription,productname,saleprice])
        .then(() => res.status(200).send(req.body))
        .catch(() => res.status(500).send());
    }
};

