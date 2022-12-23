const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// 🔴Lưu ý giống path, khác method
// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // res.send(
  //   "<form action='/admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add product</button></form>"
  // ); // action phải có path đầy đủ

  // res.sendFile(path.join(__dirname, "../", "views", "add-product.html")); 🔴không dùng root Dir
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));

  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});
// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.router = router;
exports.products = products;
