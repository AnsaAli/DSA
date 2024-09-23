class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  //define a hash function to convert the type string key to numeric
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    //to make to kepp this in the boundary
    return total % this.size;
  }

  //to add key value pairs
  set(key, value) {
    //initially need to find the index to kepp the value
    const index = this.hash(key);
    this.table[index] = value;
    
    
  }

  //to find the value of the key key
  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  //to remove a value from the given key
  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, ':', this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "Ansa");
table.set('age', 28);
table.display();

console.log(table.get('name'));
console.log(table.get('age'));

table.remove('age');
table.display();
