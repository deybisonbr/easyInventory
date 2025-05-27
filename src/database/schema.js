export const createTables = async (db) => {
  console.log('Chamando criação de tabelas...');
  try {
    await db.executeSql(`
      CREATE TABLE IF NOT EXISTS products (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        created_at TEXT DEFAULT (datetime('now')),
        updated_at TEXT DEFAULT (datetime('now')),
        deleted INTEGER DEFAULT 0
      );
    `);
  } catch (error) {
    console.error('Erro ao criar tabela products:', error);
  }
};
