const userModal = require("../modal/users");

const storeUser = async (req, res) => {
  try {
    const user = await new userModal(req.body);
    user.save();

    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModal.find();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
  }
};
const getuserDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const userData = await userModal.findById(_id);
    res.send(userData);
  } catch (error) {
    console.log(error);
  }
};

const updateuser = async (req, res) => {
  const _id = req.params.id;
  const data = req.body;
  const updatedData = await userModal.findByIdAndUpdate(_id, data);
  res.send(updatedData);
  res.send("Updated Successfully");
};

const deleteUser = async (req, res) => {
  const _id = req.params.id;
  const deleteuser = await userModal.findByIdAndDelete(_id);
  console.log(deleteuser)
  res.send("Deleted succesfully")
};

module.exports = {
  storeUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
};
