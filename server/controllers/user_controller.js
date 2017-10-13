module.exports = {
  //ADD NEW USER
  createUser: (req, res, next) => {
    const db = req.app.get('db');
    const { userrole, companyid, lastname, firstname, reportsto, email, pointbalance, allowancebalance } = req.body;
    
    db.add_user([userrole, companyid, lastname, firstname, reportsto, email, pointbalance, allowancebalance])
    .then(() => res.status(200).send(req.body))
    .catch(() => res.status(500).send());
  },
  
  editUser: (req, res, next) => {
    const db = req.app.get('db');
    // const { params } = req;
    const {employeeid, userrole, companyid, lastname, firstname, reportsto, email, pointbalance, allowancebalance } = req.body;
    
    db.edit_employee([employeeid, userrole, companyid, lastname, firstname, reportsto, email, pointbalance, allowancebalance])
    .then(() => res.status(200).send(req.body))
    .catch(() => res.status(500).send());
    console.log(req.body)
  },
  
  allUsers: (req, res) => {
    const db = req.app.get('db');
    // const { params } = req;

    db.all_users()
      .then(users => res.status(200).send(users))
      .catch(() => res.status(500).send());
  },

  autoCompleteUsersList: (req, res) => {
    const db = req.app.get('db');
    // const { params } = req;

    db.auto_complete_user_list()
      .then(users => res.status(200).send(users))
      .catch(() => res.status(500).send());
  },

  deleteUser: (req, res) => {
    const db = req.app.get('db');
    const { params } = req;

    db.delete_user([params.employeeid])
      .then(() => res.status(200).send('USER DELETED'))
      .catch(() => res.status(500).send());
  }
};

