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
        <div className="column" style={{
            flex: 1,
            minWidth: '300px',
            margin: '0 1rem',
        }}>
            <div className="glass-panel" style={{
                padding: '1rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(255, 255, 255, 0.15)'
            }}>
                <h2 style={{
                    marginBottom: '1rem',
                    color: 'var(--text-primary)',
                    borderBottom: `3px solid var(--color-${status})`,
                    paddingBottom: '0.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    {title}
                    <span style={{
                        background: 'rgba(0,0,0,0.1)',
                        borderRadius: '12px',
                        padding: '2px 8px',
                        fontSize: '0.8rem'
                    }}>
                        {tasks.length}
                    </span>
                </h2>

                {onAdd && (
                    <div style={{ marginBottom: '1rem' }}>
                        <TaskForm onAdd={onAdd} />
                    </div>
                )}

                <div className="task-list" style={{
                    flex: 1,
                    overflowY: 'auto',
                    paddingRight: '4px' // Space for scrollbar
                }}>
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
