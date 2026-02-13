import React from 'react';
import { useTasks } from '../hooks/useTasks';
import Column from './Column';

const Board = () => {
    const { tasks, addTask, deleteTask, moveTask, updateTask } = useTasks();

    const getTasksByStatus = (status) => {
        return tasks.filter((task) => task.status === status);
    };

    const handleMove = (id, direction, currentStatus) => {
        let newStatus = currentStatus;

        if (currentStatus === 'todo') {
            if (direction === 'right') newStatus = 'inprogress';
        } else if (currentStatus === 'inprogress') {
            if (direction === 'left') newStatus = 'todo';
            if (direction === 'right') newStatus = 'done';
        } else if (currentStatus === 'done') {
            if (direction === 'left') newStatus = 'inprogress';
        }

        if (newStatus !== currentStatus) {
            moveTask(id, newStatus);
        }
    };

    return (
        <div className="board" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch', // Make columns same height
            gap: '1rem',
            padding: '1rem',
            overflowX: 'auto', // Allow horizontal scroll on small screens
            minHeight: '70vh'
        }}>
            <Column
                title="To Do"
                status="todo"
                tasks={getTasksByStatus('todo')}
                onAdd={addTask}
                onDelete={deleteTask}
                onMove={(id, dir) => handleMove(id, dir, 'todo')}
                onUpdate={updateTask}
            />
            <Column
                title="In Progress"
                status="inprogress"
                tasks={getTasksByStatus('inprogress')}
                onDelete={deleteTask}
                onMove={(id, dir) => handleMove(id, dir, 'inprogress')}
                onUpdate={updateTask}
            />
            <Column
                title="Done"
                status="done"
                tasks={getTasksByStatus('done')}
                onDelete={deleteTask}
                onMove={(id, dir) => handleMove(id, dir, 'done')}
                onUpdate={updateTask}
            />
        </div>
    );
};

export default Board;
