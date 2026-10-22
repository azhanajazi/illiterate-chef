
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const allowedOrigins = [
  "https://illiterate-chef-frot.onrender.com",
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:5173",
];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests without an Origin header (e.g. server-to-server)
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`CORS blocked for origin: ${origin}`));
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());

// Routes
const homeRouter = require("./routes/home.router.js");
app.use("/", homeRouter);

const authRouter = require("./routes/authRoutes.js");
app.use("/auth", authRouter);

const userRouter = require("./routes/userRoutes.js");
app.use("/api/users", userRouter);

const foodRouter = require("./routes/menuItemRoutes.js");
app.use("/api/food", foodRouter);

const adminfoodRouter = require("./routes/adminMenuItemRoutes.js");
app.use("/api/admin/food", adminfoodRouter);

const categoryRouter = require("./routes/categoryRoutes.js");
app.use("/api/category", categoryRouter);

const adminCategoryRouter = require("./routes/adminCategoryRoutes.js");
app.use("/api/admin/category", adminCategoryRouter);

const adminIngredientRouter = require("./routes/adminIngredientRoutes.js");
app.use("/api/admin/ingredients", adminIngredientRouter);

const cartRouter = require("./routes/cartRoutes.js");
app.use("/api/cart", cartRouter);

const cartItemRouter = require("./routes/cartItemRoutes.js");
app.use("/api/cart-item", cartItemRouter);

const orderRouter = require("./routes/orderRoutes.js");
app.use("/api/order", orderRouter);

const adminOrderRoutes = require("./routes/adminOrderRoutes.js");
app.use("/api/admin/order", adminOrderRoutes);

const restaurantRouter = require("./routes/restaurantRoutes.js");
app.use("/api/restaurants", restaurantRouter);

const adminRestaurantRouter = require("./routes/adminRestaurantRoutes.js");
app.use("/api/admin/restaurants", adminRestaurantRouter);

const eventRoutes = require("./routes/eventRoutes.js");
app.use("/api/events", eventRoutes);

const adminEventRoutes = require("./routes/adminEventRoutes.js");
app.use("/api/admin/events", adminEventRoutes);

module.exports = { app };
