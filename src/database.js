import mongoose from "mongoose";

mongoose.connect("mongodb+srv://calasalde:saviCotizador@cluster0.uhdefua.mongodb.net/cotizador?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("DB Connection OK"))
    .catch(() => console.log("DB Connection ERROR"))