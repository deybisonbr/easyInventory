import Product from '../models/Product';
import {ProductService} from '../services/ProductService';

const productService = new ProductService();

const validate = (product) => {
  if (!product.name) throw new Error('Nome obrigatório');
};

export const saveProduct = async (product) => {
  validate(product);
  await productService.insert(product);
  return true
};

export const removeProduct = async (id) => {
  return deleteProduct(id);
};

export const listProducts = async () => {
  return getAllProducts();
};
