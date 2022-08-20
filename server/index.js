import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app=express();

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

const CONNECTION_URL="mongodb+srv://girirajkumawat:memories123@cluster0.epdwfpf.mongodb.net/?retryWrites=true&w=majority"

const PORT=process.env.PORT || 5000;
app.use('/posts',postRoutes);
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
}))
.catch((err)=>console.log(err.message));

// mongoose.set('useFindAndModify',false);

