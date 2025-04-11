const serverless = require("serverless-http");
const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// MongoDB
mongoose.connect(process.env.MONGOURI, {
    useFindAndModify: false,
    useCreateIndex: false,
})
    .then(() => console.log("✅ Kết nối MongoDB thành công"))
    .catch(() => console.log("❌ Kết nối MongoDB thất bại"));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routers
app.use('/api/products', require('../server/API/Router/products.router'));
app.use('/api/news', require('../server/API/Router/news.router'));
app.use('/api/users', require('../server/API/Router/users.router'));
app.use('/carts', require('../server/API/Router/carts.router'));
app.use('/histories', require('../server/API/Router/histories.router'));
app.use('/email', require('../server/API/Router/email.router'));
app.use('/messenger', require('../server/API/Router/messenger.router'));
app.use('/api/comment', require('../server/API/Router/comment.router'));
app.use('/api/category', require('../server/API/Router/category.router'));
app.use('/order', require('../server/API/Router/order.router'));
app.use('/location', require('../server/API/Router/location.router'));

// Admin
app.use('/api/admin/products', require('../server/API/Router/Admin/products.router'));
app.use('/api/admin/category', require('../server/API/Router/Admin/category.router'));
app.use('/api/admin/news', require('../server/API/Router/Admin/news.router'));

// Export cho Vercel
module.exports = app;
module.exports.handler = serverless(app);
