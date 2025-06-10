import { getDBConnection, runSql } from "../db";
import { v4 as uuidv4 } from 'uuid';

export class StockMovementService {
    async saveStockMovement({ product_id, quantity, type, note }) {
        const db = await getDBConnection();
        const id = uuidv4();
        const created_at = new Date().toISOString();

        await db.executeSql(
            `INSERT INTO stock_movements (id, product_id, quantity, type, note, created_at)
     VALUES (?, ?, ?, ?, ?, ?);`,
            [id, product_id, parseInt(quantity), type, note, created_at]
        );
    }


    async getAllMovements() {
        const sql = `SELECT sm.*, p.name as product FROM stock_movements sm
                 JOIN products p ON sm.product_id = p.id
                 ORDER BY sm.created_at DESC`;

        const results = await runSql(sql);
        const items = [];

        results.forEach(result => {
            const len = result.rows.length;
            for (let i = 0; i < len; i++) {
                items.push(result.rows.item(i));
            }
        });
        console.log('Movimentos encontrados:', items);
        return items;
    }
}