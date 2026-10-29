import { productService } from "../services/product-service";

export function useProduct() {
    return productService.listAll();


}