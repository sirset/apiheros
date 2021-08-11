import  express  from 'express';
import bodyParser from 'body-parser';

import heroRoutes from "./routes/index.js";

const PORT = 8090;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/heros",heroRoutes);

app.get("/",(req,res)=>{
  res.json("Api de hero"); 
});

app.listen(PORT,()=>{
  console.log(`servidor run port ${PORT}`);
});


