const productsModal = require("../modal/products");

const storeProducts = async (req, res) => {
  try {
    const products = await new productsModal(req.body);
    products.save();

    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await productsModal.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};
const getproductsDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const productsData = await productsModal.findById(_id);
    res.send(productsData);
  } catch (error) {
    console.log(error);
  }
};

const updateProducts = async (req, res) => {
  const _id = req.params.id;
  const data = req.body;
  const updatedData = await productsModal.findByIdAndUpdate(_id, data);
  res.send("Updated Successfully");
};

const deleteProducts = async (req, res) => {
  const _id = req.params.id;
  const deleteproduct = await productsModal.findByIdAndDelete(_id);
  console.log(deleteproduct);
  res.send("Deleted succesfully")
};

module.exports = {
  storeProducts,
  getProducts,
  getproductsDetail,
  updateProducts,
  deleteProducts,
};