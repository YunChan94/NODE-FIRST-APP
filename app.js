// const routes = require("./routes"); // import file routes vao sever
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const app = express();

const admin = require("./routes/admin");
const adminRoutes = admin.router;
const shopRouters = require("./routes/shop");
app.use(bodyParser.urlencoded({ extended: false }));

// dẫn link static folder=> express tự động tìm trong file chỉ định
app.use(express.static(path.join(__dirname, "public"))); //dùng trong file html

// app.use(path, callback,...)
// app.get() lọc đường dẫn, get method, exact match
// app.post() chỉ nhận method="POST" mới run middleware bên trong
app.use("/admin", adminRoutes); //path /admin/... chạy vào trong adminRouter

app.use(shopRouters);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(3000);
