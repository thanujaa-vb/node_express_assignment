const express = require("express");
const Router = express.Router();
const mongoose = require("mongoose");

const {
  storeSignup,
  userLogin,
  userLogout,
  deleteSignupUser
} = require("./controller/loginControler");
Router.post("/signup", storeSignup);
Router.delete("/signup/:signUpUserId", deleteSignupUser);
Router.post("/login", userLogin);
Router.get("/logout", userLogout);

const {
  storeUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
} = require("./controller/userControler");

Router.get("/users", getUsers);
Router.post("/users", storeUser);
Router.get("/users/:id", getuserDetail);
Router.put("/users/:id", updateuser);
Router.delete("/users/:id", deleteUser);

const {
  storeRoles,
  getRoles,
  getrolesDetail,
  updateRoles,
  deleteRoles,
} = require("./controller/rolesControler");

Router.get("/roles", getRoles);
Router.post("/roles", storeRoles);
Router.get("/roles/:id", getrolesDetail);
Router.put("/roles/:id", updateRoles);
Router.delete("/roles/:id", deleteRoles);

const {
  storeCategories,
  getCategories,
  getcategoriesDetail,
  updateCategories,
  deleteCategories,
} = require("./controller/categoriesControler");

Router.get("/categories", getCategories);
Router.post("/categories", storeCategories);
Router.get("/categories/:id", getcategoriesDetail);
Router.put("/categories/:id", updateCategories);
Router.delete("/categories/:id", deleteCategories);

const {
  storeTags,
  getTags,
  gettagsDetail,
  updateTags,
  deleteTags,
} = require("./controller/tagsControler");
Router.get("/tags", getTags);
Router.post("/tags", storeTags);
Router.get("/tags/:id", gettagsDetail);
Router.put("/tags/:id", updateTags);
Router.delete("/tags/:id", deleteTags);

const {
  storeProducts,
  getProducts,
  getproductsDetail,
  updateProducts,
  deleteProducts,
} = require("./controller/productsControler");
Router.get("/products", getProducts);
Router.post("/products", storeProducts);
Router.get("/products/:id", getproductsDetail);
Router.put("/products/:id", updateProducts);
Router.delete("/products/:id", deleteProducts);

const {
  storeCarts,
  getCarts,
  getcartsDetail,
  updateCarts,
  deleteCarts,
} = require("./controller/cartsControler");
Router.get("/carts", getCarts);
Router.post("/carts", storeCarts);
Router.get("/carts/:id", getcartsDetail);
Router.put("/carts/:id", updateCarts);
Router.delete("/carts/:id", deleteCarts);

const {
  storeOrders,
  getOrders,
  getordersDetail,
  updateOrders,
  deleteOrders,
} = require("./controller/ordersControler");
Router.get("/orders", getOrders);
Router.post("/orders", storeOrders);
Router.get("/orders/:id", getordersDetail);
Router.put("/orders/:id", updateOrders);
Router.delete("/orders/:id", deleteOrders);



module.exports = Router;
