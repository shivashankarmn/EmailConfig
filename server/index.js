require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sendEmail = require("./services/mailService");

const app = express();

app.use(cors());
app.use(express.json());

/* Test route */
app.get("/", (req, res) => {
  res.send("Mail server running 🚀");
});

/* Send email route */
app.post("/send-email", async (req, res) => {
  const { to, subject, message } = req.body;

  try {
    await sendEmail(to, subject, message);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
