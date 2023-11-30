import mongoose from 'mongoose'

export default async function database(){
    try {
        if (mongoose.connection.readyState >= 1) {
            return;
        } else {
            mongoose.connect("mongodb://127.0.0.1:27017/nextjs")
        }
    } catch (error) {
        return false
    }
}