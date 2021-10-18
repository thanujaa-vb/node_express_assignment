const rolesModal = require("../modal/roles");

const storeRoles = async (req, res) => {
  try {
    const roles = await new rolesModal(req.body);
    roles.save();

    res.status(200).send(roles);
  } catch (error) {
    console.log(error);
  }
};

const getRoles = async (req, res) => {
  try {
    const roles = await rolesModal.find();
    res.status(200).send(roles);
  } catch (error) {
    console.log(error);
  }
};
const getrolesDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const rolesData = await rolesModal.findById(_id);
    res.send(rolesData);
  } catch (error) {
    console.log(error);
  }
};

const updateRoles = async (req, res) => {
  const _id = req.params.id;
  const data = req.body;
  const updatedData = await rolesModal.findByIdAndUpdate(_id, data);
  res.send("Updated Successfully");
};

const deleteRoles = async (req, res) => {
  const _id = req.params.id;
  const deleterole = await rolesModal.findByIdAndDelete(_id);
  console.log(deleterole);
  res.send("Deleted succesfully")
};

module.exports = {
  storeRoles,
  getRoles,
  getrolesDetail,
  updateRoles,
  deleteRoles,
};