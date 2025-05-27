import { v4 as uuidv4 } from 'uuid';

export default class Product {
  constructor(name, slug, created_at,updated_at, deleted = 0) {
    this.id = uuidv4();
    this.name = name;
    this.slug = slug;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted = deleted;
  }

}
