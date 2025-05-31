import SQLite from 'react-native-sqlite-storage';
import { createTables } from './schema';

SQLite.enablePromise(true);

export const getDBConnection = async () => {
  const db = await SQLite.openDatabase({ name: 'easyinventory.db', location: 'default' });
  await createTables(db);
  return db;
};

export const runSql = async (sql, params) => {
  const db = await getDBConnection();
  return await db.executeSql(sql, params)
}
