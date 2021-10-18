const tagsModal = require("../modal/tags");

const storeTags = async (req, res) => {
  try {
    const tags = await new tagsModal(req.body);
    tags.save();

    res.status(200).send(tags);
  } catch (error) {
    console.log(error);
  }
};

const getTags = async (req, res) => {
  try {
    const tags = await tagsModal.find();
    res.status(200).send(tags);
  } catch (error) {
    console.log(error);
  }
};
const gettagsDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const tagsData = await tagsModal.findById(_id);
    res.send(tagsData);
  } catch (error) {
    console.log(error);
  }
};

const updateTags = async (req, res) => {
  const _id = req.params.id;
  const data = req.body;
  const updatedData = await tagsModal.findByIdAndUpdate(_id, data);
  res.send("Updated Successfully");
};

const deleteTags = async (req, res) => {
  const _id = req.params.id;
  const deletetag = await tagsModal.findByIdAndDelete(_id);
  console.log(deletetag);
  res.send("Deleted succesfully")
};

module.exports = {
  storeTags,
  getTags,
  gettagsDetail,
  updateTags,
  deleteTags,
};