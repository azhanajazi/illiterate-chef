
const { app } = require(".");
const connectToDB = require("./config/db");

const PORT = process.env.PORT || 5454;

const startServer = async () => {
  try {
    await connectToDB();
    console.log("MongoDB connected successfully");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Illiterate Chef running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
