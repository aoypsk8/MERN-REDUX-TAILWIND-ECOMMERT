const express = require("express");
const { createProduct,findOneProduct,getAllProduct,updateProduct,deleteProduct } = require("../controllers/productController");
const router = express.Router();




router.post("/createProduct", createProduct);
router.get("/findOneProduct/:id", findOneProduct);
router.get("/getAllProduct", getAllProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deletdProduct/:id", deleteProduct);



module.exports = router;
