import Header from "./components/Header";
import SearchIt from "./components/SearchIt";
import Add from "./components/Add";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState, useEffect, type SubmitEventHandler } from "react";

interface ShoppingItem {
  id: number;
  checked: boolean;
  item: string;
}

function App() {
  const [items, setItems] = useState<ShoppingItem[]>(() => {
    const storedItems = localStorage.getItem("shoppinglist");
    return storedItems ? (JSON.parse(storedItems) as ShoppingItem[]) : [];
  });
  const [newItem, setNewItem] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]);

  const addItem = (item: string): void => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem: ShoppingItem = { id, checked: false, item };
    const listItems: ShoppingItem[] = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id: number): void => {
    console.log(`key: ${id}`);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id: number): void => {
    console.log(`Delted item ${id}`);
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    const item = newItem.trim();
    if (!item) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header />
      <Add newItem={newItem} setNewItem={setNewItem} onSubmit={handleSubmit} />
      <SearchIt
        search={search}
        setSearch={setSearch}
      />

      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;