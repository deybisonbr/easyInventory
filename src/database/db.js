import SQLite from 'react-native-sqlite-storage';
import { createTables } from './schema';

SQLite.enablePromise(true);

const getDBConnection = async () => {
  const db = await SQLite.openDatabase({ name: 'easyinventory.db', location: 'default' });
  await createTables(db);
  return db;
};


export default getDBConnection;
