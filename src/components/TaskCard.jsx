import React, { useState } from 'react';
import { Trash2, ArrowLeft, ArrowRight, Edit2, Check } from 'lucide-react';

const TaskCard = ({ task, onDelete, onMove, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const handleUpdate = () => {
        if (editText.trim()) {
            onUpdate(task.id, editText);
            setIsEditing(false);
        }
    };

    const priorityColor = `var(--priority-${task.priority})`;

    return (
        <div
            className="glass-panel task-card"
            style={{
                borderLeft: `4px solid ${priorityColor}`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
            <div style={{ marginBottom: '0.5rem' }}>
                {isEditing ? (
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') handleUpdate();
                                if (e.key === 'Escape') setIsEditing(false);
                            }}
                            autoFocus
                            style={{
                                width: '100%',
                                padding: '0.25rem',
                                borderRadius: '4px',
                                border: '1px solid var(--glass-border)',
                                outline: 'none',
                                background: 'rgba(255,255,255,0.8)',
                                color: 'black'
                            }}
                        />
                        <button onClick={handleUpdate} style={{ color: 'var(--color-done)' }}>
                            <Check size={16} />
                        </button>
                    </div>
                ) : (
                    <div
                        onClick={() => setIsEditing(true)}
                        style={{
                            cursor: 'pointer',
                            wordBreak: 'break-word',
                            fontSize: '1rem',
                            fontWeight: 500,
                            paddingRight: '2rem' // space for edit icon
                        }}
                        title="Click to edit"
                    >
                        {task.text}
                    </div>
                )}
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '0.75rem',
                borderTop: '1px solid rgba(0,0,0,0.05)',
                paddingTop: '0.5rem'
            }}>
                {/* Left Move Button */}
                {task.status !== 'todo' ? (
                    <button
                        onClick={() => onMove(task.id, 'left')}
                        style={{ color: 'var(--text-secondary)', padding: '4px' }}
                        title="Move Back"
                    >
                        <ArrowLeft size={16} />
                    </button>
                ) : <div style={{ width: 24 }}></div>}

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        style={{ color: 'var(--text-secondary)', opacity: 0.7 }}
                        title="Edit"
                    >
                        <Edit2 size={14} />
                    </button>
                    <button
                        onClick={() => onDelete(task.id)}
                        style={{ color: '#ef4444', opacity: 0.7 }}
                        title="Delete"
                    >
                        <Trash2 size={14} />
                    </button>
                </div>

                {/* Right Move Button */}
                {task.status !== 'done' ? (
                    <button
                        onClick={() => onMove(task.id, 'right')}
                        style={{ color: 'var(--text-secondary)', padding: '4px' }}
                        title="Move Next"
                    >
                        <ArrowRight size={16} />
                    </button>
                ) : <div style={{ width: 24 }}></div>}
            </div>
        </div>
    );
};

export default TaskCard;
