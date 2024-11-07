import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Draggable item types
const ItemType = {
  ITEM: 'item',
};

// Draggable item component
const DraggableItem = ({ item, index, moveItem, removeItem }) => {
  const [, drag] = useDrag({
    type: ItemType.ITEM,
    item: { index, item },
  });

  const [, drop] = useDrop({
    accept: ItemType.ITEM,
    hover(draggedItem) {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => drag(drop(node))} className="p-2 m-1 bg-blue-400 rounded text-black cursor-pointer">
      {item}
    </div>
  );
};

// Main drag-and-drop component
const DragDropComponent = () => {
  const [leftItems, setLeftItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [rightItems, setRightItems] = useState([]);

  const handleDrop = (item) => {
    setLeftItems((prevItems) => prevItems.filter((_, index) => index !== item.index));
    setRightItems((prevItems) => [...prevItems, item.item]);
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const updatedItems = [...rightItems];
    const [movedItem] = updatedItems.splice(dragIndex, 1);
    updatedItems.splice(hoverIndex, 0, movedItem);
    setRightItems(updatedItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex justify-center p-4">
        {/* Left Box */}
        <div className="w-1/3 p-4 border border-gray-300 rounded">
          <h3 className="text-lg font-bold mb-2">Left Box</h3>
          {leftItems.map((item, index) => (
            <DraggableItem key={index} item={item} index={index} />
          ))}
        </div>

        {/* Right Box */}
        <DroppableRightBox items={rightItems} onDrop={handleDrop} moveItem={moveItem} />
      </div>
    </DndProvider>
  );
};

// Right Box component with drop capability
const DroppableRightBox = ({ items, onDrop, moveItem }) => {
  const [, drop] = useDrop({
    accept: ItemType.ITEM,
    drop: onDrop,
  });

  return (
    <div ref={drop} className="w-1/3 p-4 border border-gray-300 rounded ml-4">
      <h3 className="text-lg font-bold mb-2">Right Box</h3>
      {items.map((item, index) => (
        <DraggableItem key={index} item={item} index={index} moveItem={moveItem} />
      ))}
    </div>
  );
};

export default DragDropComponent;
