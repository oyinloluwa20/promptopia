import mongoose from "mongoose";

let isConnected = false;


export const connectionToDB = async () => {
    mongoose.set('strictQuery', true)
}

if (isConnected) {
    console.log('MONGODB is already connected')
}


try {
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "share_prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })

    isConnected = true
    console.log('MONGODB CONNECTED')
} catch (error) {
    console.log(error)
}