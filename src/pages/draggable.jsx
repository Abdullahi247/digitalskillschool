import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DraggableList = () => {
    const [items, setItems] = useState([
        { id: 'item-1', name: 'Item 1' },
        { id: 'item-2', name: 'Item 2' },
        { id: 'item-3', name: 'Item 3' },
    ]);

    const handleDragEnd = (result) => {
        if (!result.destination) return; // Item dropped outside the list

        const sourceIndex = result.source.index;
        const destinationIndex = result.destination.index;

        // Reorder the items in the list
        const updatedItems = Array.from(items);
        const [removed] = updatedItems.splice(sourceIndex, 1);
        updatedItems.splice(destinationIndex, 0, removed);

        setItems(updatedItems);
    };

    return (
        <div>
            <DragDropContext onDragEnd={handleDragEnd} >
                <Droppable droppableId="draggable-list">
                    {(provided) => (
                        <ul {...provided.droppableProps} ref={provided.innerRef}>
                            {items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <li
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                        >
                                            {item.name}
                                        </li>
                                    )}

                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>

            <div>
                sfbjberbbuihreh
            </div>


            <DragDropContext onDragEnd={handleDragEnd} >
                <Droppable droppableId="draggable-list">
                    {(provided) => (
                        <ul {...provided.droppableProps} ref={provided.innerRef}>
                            {items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <li
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                        >
                                            {item.name}
                                        </li>
                                    )}

                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default DraggableList;
