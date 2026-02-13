import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const TaskForm = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('medium');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd(text, priority);
        setText('');
        setPriority('medium'); // Reset to default
    };

    return (
        <form onSubmit={handleSubmit} className="task-form glass-panel" style={{ padding: '1rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="New Task..."
                    style={{
                        flex: 1,
                        padding: '0.5rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--glass-border)',
                        background: 'rgba(255, 255, 255, 0.5)',
                        color: 'black',
                        outline: 'none'
                    }}
                />
                <button
                    type="submit"
                    disabled={!text.trim()}
                    style={{
                        background: 'var(--color-todo)',
                        color: 'white',
                        borderRadius: 'var(--radius-sm)',
                        padding: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Plus size={20} />
                </button>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
                {['low', 'medium', 'high'].map((p) => (
                    <button
                        key={p}
                        type="button"
                        onClick={() => setPriority(p)}
                        style={{
                            flex: 1,
                            padding: '0.25rem',
                            fontSize: '0.8rem',
                            borderRadius: 'var(--radius-sm)',
                            border: `1px solid ${priority === p ? `var(--priority-${p})` : 'transparent'}`,
                            background: priority === p ? `var(--priority-${p})` : 'rgba(255,255,255,0.3)',
                            color: priority === p ? 'white' : 'var(--text-secondary)',
                            textTransform: 'capitalize',
                            opacity: priority === p ? 1 : 0.7
                        }}
                    >
                        {p}
                    </button>
                ))}
            </div>
        </form>
    );
};

export default TaskForm;
