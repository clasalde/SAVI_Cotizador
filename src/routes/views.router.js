import { Router } from "express";
import ProductManager from "../controllers/product-manager.js";

const productManager = new ProductManager("./src/models/products.json");
const router = Router();

//View Routes
router.get("/", async (req, res) => {
    try {
        const products = await productManager.getProducts();
        res.render("home", { title: "Home Page", products: products })
    } catch (error) {
        console.log("Error while retrieving product list", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

//Real Time Products Route
router.get("/realtimeproducts", async (req, res) => {
    try {
        res.render("realtimeproducts");
    } catch (error) {
        res.status(500).json({
            error: "Error interno del servidor"
        });
    }
})

export default router;