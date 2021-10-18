const cartsModal = require("../modal/carts");

const storeCarts = async (req, res) => {
  try {
    const carts = await new cartsModal(req.body);
    carts.save();

    res.status(200).send(carts);
  } catch (err) {
    console.log(err);
   }
};

const getCarts = async (req, res) => {
  try {
    const carts = await cartsModal.find();
    res.status(200).send(carts);
  } catch (error) {
    console.log(error);
   }
};
const getcartsDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const cartsData = await cartsModal.findById(_id);
    res.send(cartsData);
  } catch (error) {
    console.log(error);
   }
};

const updateCarts = async (req, res) => {
  const _id = req.params.id;
  const data = req.body;
  const updatedData = await cartsModal.findByIdAndUpdate(_id, data);
  res.send("Updated Successfully");
};

const deleteCarts = async (req, res) => {
  const _id = req.params.id;
  const deletecart = await cartsModal.findByIdAndDelete(_id);
  console.log(deletecart);
  res.send("Deleted succesfully")
};

module.exports = {
  storeCarts,
  getCarts,
  getcartsDetail,
  updateCarts,
  deleteCarts,
};