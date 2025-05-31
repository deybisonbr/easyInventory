import { runSql } from "../db";


export class ProductService {
  constructor() {
    this.table = 'products';
  }

  async insert(product) {
    const sql = `
      INSERT INTO ${this.table} 
      (id, name, slug, created_at, updated_at, deleted)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const params = [
      product.id,
      product.name,
      product.slug,
      product.created_at.toISOString(),
      product.updated_at.toISOString(),
      product.deleted
    ];
    await runSql(sql, params);
  }

  async update(product) {
    const sql = `
      UPDATE ${this.table}
      SET name = ?, slug = ?, updated_at = ?, deleted = ?
      WHERE id = ?
    `;
    const params = [
      product.name,
      product.slug,
      product.updated_at.toISOString(),
      product.deleted,
      product.id
    ];
    await runSql(sql, params);
  }

  async delete(id) {
    const sql = `DELETE FROM ${this.table} WHERE id = ?`;
    await runSql(sql, [id]);
  }

  async getAll() {
    const sql = `SELECT * FROM ${this.table}`;
    const results = await runSql(sql);
    const items = [];

    results.forEach(([result]) => {
      for (let i = 0; i < result.rows.length; i++) {
        items.push(result.rows.item(i));
      }
    });

    return items;
  }
}
