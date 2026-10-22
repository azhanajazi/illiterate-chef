const { app } = require(".");
const connectToDB = require("./config/db");

const PORT = process.env.PORT || 5454;

app.listen(PORT, async () => {
    await connectToDB();
    console.log("illiterate chef running on port", PORT);
});