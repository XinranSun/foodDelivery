// cors dotenv body-parser multer stripe validator nodemon 
//   express mongoose jsonwebtoken bcrypt 
 
import express from 'express';
import cors from 'cors';

// app config
const app = express(); 
const port = 4000;

// middlewares
app.use(express.json());
// cors 链接前端
app.use(cors());

app.get('/', (req, res) => {
    res.send("API working");
})

app.listen(port, () => {
    console.log(`Listening on  http://localhost:${port}`);
})
