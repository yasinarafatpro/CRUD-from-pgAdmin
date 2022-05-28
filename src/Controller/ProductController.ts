import { getCustomRepository } from "typeorm"

import { Product } from "../Entity/Products"
import { productPerository } from "../Repository/ProductRepository"

const productController =async (req, res, next) => {
    try {
        const newProduct = new Product();

        newProduct.productDetails = req.body.productDetails;

        const createproduct = getCustomRepository(productPerository);
        const product =await createproduct.createProductRepository(newProduct);

        res.status(201).send({
            data:{
                productDetails:product.productDetails
            }
        })
    } catch (error:any) {
        return next(error.message)
    }

}
export const listAllProduct=async(req,res)=>{
    
}
export default productController;