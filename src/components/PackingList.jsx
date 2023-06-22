import { useState } from 'react';
import Item from './Item';
import Sort from './Sort';

export default function PackingList({ items, onDeleteItem, onToggleItem }) {
  const [sortBy, setSortBy] = useState('input');

  const sortedItems =
    sortBy === 'description'
      ? items.slice().sort((a, b) => a.description.localeCompare(b.description))
      : sortBy === 'packed'
      ? items // sort by alphabetical and packed status
          .slice()
          .sort((a, b) => a.description.localeCompare(b.description))
          .sort((a, b) => a.packed - b.packed)
      : items; // sortBy = input ? then just original items arr

  return (
    <div className="list">
      <ul>
        {sortedItems.map(item => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <Sort sortBy={sortBy} setSortBy={setSortBy} />
    </div>
  );
}
