const mongoose=require('mongoose');

module.exports=async()=>{
    try{
        const connectionParams={
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true,
        };
        await mongoose.connect("mongodb+srv://chinmayakumardas2000:mongodb2024@chinmayakumardas.xjfxtm7.mongodb.net/?retryWrites=true&w=majority&appName=chinmayakumardas",
            connectionParams
        );
        console.log("Database Connected ...")
    }catch(error){
            console.log("DB connection Error",error)
    }
}