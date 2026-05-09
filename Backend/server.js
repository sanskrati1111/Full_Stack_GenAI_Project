const app = require('./src/app');
require("dotenv").config();
const connectDB= require('./src/config/database');

(async () => {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.error('Error starting server:', error.message);
  }
})();
