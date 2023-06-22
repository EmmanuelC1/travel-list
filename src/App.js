import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = item => setItems(items => [...items, item]);

  const handleDeleteItem = id => {
    setItems(items => items.filter(item => item.id !== id));
  };

  const handleToggleItem = id => {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats />
    </div>
  );
}
