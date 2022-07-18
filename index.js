const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.routes");
const authRoute = require("./routes/auth.routes");
const productRoute = require("./routes/product.routes");
const cartRoute = require("./routes/cart.routes");
const orderRoute = require("./routes/order.routes");

const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
