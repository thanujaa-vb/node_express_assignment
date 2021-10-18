const categoriesModal = require("../modal/categories");

const storeCategories = async (req, res) => {
  try {
    const categories = await new categoriesModal(req.body);
    categories.save();

    res.status(200).send(categories);
  } catch (error) {
    console.log(error);
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await categoriesModal.find();
    res.status(200).send(categories);
  } catch (error) {
    console.log(error);
  }
};
const getcategoriesDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const categoryData = await categoriesModal.findById(_id);
    res.send(categoryData);
  } catch (error) {
    console.log(error);
  }
};

const updateCategories = async (req, res) => {
  const _id = req.params.id;
  const data = req.body;
  const updatedData = await categoriesModal.findByIdAndUpdate(_id, data);
  res.send("Updated Successfully");
  res.send(updatedData);
};

const deleteCategories = async (req, res) => {
  const _id = req.params.id;
  const deleteCategory = await categoriesModal.findByIdAndDelete(_id);
  console.log(deleteCategory);
  res.send("Deleted succesfully")
};

module.exports = {
  storeCategories,
  getCategories,
  getcategoriesDetail,
  updateCategories,
  deleteCategories,
};