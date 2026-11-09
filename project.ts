// Generic interface from previous challenge
interface InventoryItem<T> {
  id: number;
  quantity: number;
  details: T;
}

// Items from previous challenge
const bookItem: InventoryItem<{ title: string; author: string }> = {
  id: 1,
  quantity: 5,
  details: { title: "TypeScript Handbook", author: "John Doe" }
};

const electronicItem: InventoryItem<{ brand: string; model: string }> = {
  id: 2,
  quantity: 3,
  details: { brand: "TechCorp", model: "X100" }
};

const clothingItem: InventoryItem<{ size: string; color: string }> = {
  id: 3,
  quantity: 10,
  details: { size: "M", color: "Blue" }
};

// Generic function to add item to inventory
function addItem<T>(inventory: InventoryItem<T>[], newItem: InventoryItem<T>): InventoryItem<T>[] {
  return [...inventory, newItem];
}

// Create book inventory and new book
const bookInventory = [bookItem];
const newBook: InventoryItem<{ title: string; author: string }> = {
  id: 4,
  quantity: 2,
  details: { title: "Advanced TypeScript", author: "Jane Smith" }
};
const updatedBookInventory = addItem(bookInventory, newBook);

// Create electronic inventory and new electronic
const electronicInventory = [electronicItem];
const newElectronic: InventoryItem<{ brand: string; model: string }> = {
  id: 5,
  quantity: 1,
  details: { brand: "GadgetCorp", model: "Z500" }
};
const updatedElectronicInventory = addItem(electronicInventory, newElectronic);

// Print outputs
console.log(updatedBookInventory.length);
console.log(updatedBookInventory[1].details.title);
console.log(updatedBookInventory[1].details.author);
console.log(updatedElectronicInventory.length);
console.log(updatedElectronicInventory[1].details.brand);
console.log(updatedElectronicInventory[1].details.model);
console.log(updatedElectronicInventory[0].id);
console.log(updatedElectronicInventory[1].quantity);