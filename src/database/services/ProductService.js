import getDBConnection from '../db';
import Product from '../models/Product';

export const insertProduct = async (product) => {
  const db = await getDBConnection();
  await db.executeSql(
    `INSERT INTO products (id, name, slug, created_at, updated_at, deleted) VALUES (?, ?, ?, ?, ?, ?)`,
    [
      product.id,
      product.name,
      product.slug,
      product.created_at.toISOString(),
      product.updated_at.toISOString(),
      product.deleted

    ]
  );
};


// export const getAllProducts = async () => {
//   const db = await getDBConnection();
//   const result = await db.executeSql(`SELECT * FROM products`);
//   const products = [];
//   for (let i = 0; i < result[0].rows.length; i++) {
//     const row = result[0].rows.item(i);
//     products.push(
//       new Product(
//         row.id,
//         row.name,
//         row.slug,
//         new Date(row.created_at),
//         new Date(row.updated_at)
//       )
//     );
//   }
//   return products;
// };
