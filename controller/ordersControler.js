const ordersModal = require("../modal/orders");

const storeOrders = async (req, res) => {
  try {
    const orders = await new ordersModal(req.body);
    orders.save();

    res.status(200).send(orders);
  } catch (error) {
    console.log(error);
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await ordersModal.find();
    res.status(200).send(orders);
  } catch (error) {
    console.log(error);
  }
};
const getordersDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const ordersData = await ordersModal.findById(_id);
    res.send(ordersData);
  } catch (error) {
    console.log(error);
  }
};

const updateOrders = async (req, res) => {
  const _id = req.params.id;
  const data = req.body;
  const updatedData = await ordersModal.findByIdAndUpdate(_id, data);
  res.send("Updated Successfully");
};

const deleteOrders = async (req, res) => {
  const _id = req.params.id;
  const deleteorder = await ordersModal.findByIdAndDelete(_id);
  console.log(deleteorder);
  res.send("Deleted succesfully")
};

module.exports = {
  storeOrders,
  getOrders,
  getordersDetail,
  updateOrders,
  deleteOrders,
};