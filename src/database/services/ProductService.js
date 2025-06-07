import { runSql } from "../db";


export class ProductService {
  constructor() {
    this.table = 'products';
  }

  async insert(product) {
    product.id = await this.generateUniqueId();

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
    if(!product.deleted){
      product.deleted = 0
    }
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

  async getAll() {
    const sql = `SELECT * FROM ${this.table} WHERE deleted = 0 ORDER BY created_at DESC`;
    const results = await runSql(sql);

    const items = [];

    results.forEach(result => {
      const len = result.rows.length;
      for (let i = 0; i < len; i++) {
        items.push(result.rows.item(i));
      }
    });

    return items;
  }

  async generateUniqueId() {
    let id;
    let exists = true;

    while (exists) {
      id = Math.floor(100000 + Math.random() * 900000); // Número de 6 dígitos
      const sql = `SELECT COUNT(*) as count FROM ${this.table} WHERE id = ?`;
      const result = await runSql(sql, [id]);

      let count = 0;
      if (result && result.rows && result.rows.length > 0) {
        count = result.rows.item(0).count;
      }

      exists = count > 0;
    }

    return id;
  }

}
