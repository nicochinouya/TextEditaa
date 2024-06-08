import { openDB } from "idb";

// Function to initialize the database
const initdb = async () => {
  // Open the "jate" database with version 1
  // If the database doesn't exist, it will be created
  const jateDB = await openDB("jate", 1, {
    upgrade(db) {
      // Check if the "jate" object store already exists
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      // Create the "jate" object store with auto-incrementing key
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });
};

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // Open the "jate" database with version 1
  const jateDB = await openDB("jate", 1);
  // Start a new transaction with read-write access
  const tx = jateDB.transaction("jate", "readwrite");
  // Open the "jate" object store
  const store = tx.objectStore("jate");
  // Put the content into the object store with a predefined ID of 1
  const request = store.put({ id: 1, value: content });
  // Wait for the request to complete and get the result
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // Open the "jate" database with version 1
  const jateDB = await openDB("jate", 1);
  // Start a new transaction with read-only access
  const tx = jateDB.transaction("jate", "readonly");
  // Open the "jate" object store
  const store = tx.objectStore("jate");
  // Get all the data from the object store
  const request = store.getAll();
  // Wait for the request to complete and get the result
  const result = await request;
  console.log("🚀 - data read from database", result);
  return result.value;
};

// Initialize the database
initdb();