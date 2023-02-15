const Students = require("../models/Student");

// C
module.exports.getUserByID = (req, res) => {
  let student = {};
  Students.doc(req.params.id)
    .get()
    .then((doc) => {
      student = doc.data();
      console.log(doc.data());
      return res.json({
        status: true,
        Student: student,
      });
    });
};

module.exports.getUsers = (req, res) => {
  const snapshot = Students.get();
  return res.json({
    status: true,
    students: snapshot,
  });
};

module.exports.createUser = (req, res) => {
  console.log(req.body);
  Students.doc(req.body.id.toString()).set(req.body);
  return res.json({
    status: true,
    message: "Student Registred",
    Student: req.body,
  });
};

module.exports.updateUser = (req, res) => {
  console.log(req.body);
  Students.doc(req.params.id.toString()).update(req.body);
  return res.json({
    status: true,
    message: "Student Updated",
    Student: req.body,
  });
};

module.exports.deleteUser = (req, res) => {
  Students.doc(req.params.id.toString()).delete();
  return res.json({
    status: true,
    message: "Student Deleted",
  });
};
