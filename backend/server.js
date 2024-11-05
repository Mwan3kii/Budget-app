const dotenv = require('dotenv');
const app = require('./app');
const connectDatabase = require('./config/database');

connectDatabase();

dotenv.config({ path: 'backend/config/config.env' })

const port = process.env.PORT
const node_env = process.env.NODE_ENV

app.listen(port, () => {
    console.log(`Server running on port ${port} and in ${node_env} mode`);
})