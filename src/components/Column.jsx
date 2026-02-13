import React from 'react';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';

const Column = ({
    title,
    status,
    tasks,
    onAdd,
    onDelete,
    onMove,
    onUpdate
}) => {
    return (
        <div className="column">
            <div className="glass-panel column-content">
                <h2 className="column-header" style={{
                    borderBottom: `3px solid var(--color-${status})`
                }}>
                    {title}
                    <span className="task-count">
                        {tasks.length}
                    </span>
                </h2>

                {onAdd && (
                    <div style={{ marginBottom: '1rem' }}>
                        <TaskForm onAdd={onAdd} />
                    </div>
                )}

                <div className="task-list">
                    {tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onDelete={onDelete}
                            onMove={onMove}
                            onUpdate={onUpdate}
                        />
                    ))}
                    {tasks.length === 0 && (
                        <div style={{
                            textAlign: 'center',
                            color: 'var(--text-secondary)',
                            opacity: 0.5,
                            marginTop: '2rem',
                            fontStyle: 'italic'
                        }}>
                            No tasks here...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Column;
