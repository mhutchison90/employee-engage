module.exports = {
  // RESET DEMO USER
  resetUser: (req, res, next) => {
    const db = req.app.get('db');
    // const { params } = req;
    const { employeeid, userrole, companyid, lastname, firstname, reportsto, email, pointbalance, allowancebalance,profilePicture } = req.body;

    db.reset_user([employeeid, userrole, companyid, lastname, firstname, reportsto, email, pointbalance, allowancebalance,profilePicture])
      .then(() => res.status(200).send(req.body))
      .catch(() => res.status(500).send());
    console.log(req.body)
  },
  //ADD NEW USER
  createUser: (req, res, next) => {
    const db = req.app.get('db');
    const { userrole, companyid, viewName,/*lastname, firstname, */  reportsto, email, pointbalance, allowancebalance } = req.body;

    db.add_user([userrole, companyid, viewName,/*lastname, firstname, */  reportsto, email, pointbalance, allowancebalance])
      .then(() => res.status(200).send(req.body))
      .catch(() => res.status(500).send());
  },

  editUser: (req, res, next) => {
    const db = req.app.get('db');
    // const { params } = req;
    const { employeeid,lastname,firstname,viewname,email,profilePicture } = req.body;

    db.edit_employee([employeeid,lastname,firstname,viewname,email,profilePicture])
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
  },
  sendPoints: (req, res, next) => {
    const db = req.app.get('db');
    // const { params } = req;
    const { me, sendTo, pointsSent, message,timestamp } = req.body;

    db.send_points([me, sendTo, pointsSent, message,timestamp])
      .then(() => res.status(200).send(req.body))
      .catch(() => res.status(500).send());
    console.log(req.body)
  },

  getActiveUser: (req, res, next) => {
    const db = req.app.get('db');
    const { params } = req;

    db.get_active_user([params.id])
      .then(user => res.status(200).send(user[0]))
      .catch(() => res.status(500).send());
  },

  // isUserInEmployeeTable: (req, res, next) => {
  //   const db = req.app.get('db');
  //   const { params } = req;
    
  //   db.find_in_employee_table([params.id])
    
  //   //   if (!res.email) {
  //     //     return res.status(404).send('email not found')
  //     //   }
  //     //   return res.status(200).send(res.email);
  //     // }
      
  //     .then(email => {
  //       if(params.id===email[0].email){
  //       //  return email[0].email
         
  //       }
  //     // console.log('console.log1: ',params.id)
  //     // console.log('console.log2: ',email[0].email)
  //     res.status(200).send(email[0].email)
  //     })
  //   .catch(() => res.status(500).send('No matching user found in the employee table'));
  // }
};

