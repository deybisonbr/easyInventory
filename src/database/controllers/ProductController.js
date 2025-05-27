import Product from '../models/Product';
import {
  insertProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
} from '../services/ProductService';

const validate = (product) => {
  if (!product.name) throw new Error('Nome obrigatório');
};

export const saveProduct = async (product) => {
  validate(product);
  return insertProduct(product);
};

export const removeProduct = async (id) => {
  return deleteProduct(id);
};

export const listProducts = async () => {
  return getAllProducts();
};
