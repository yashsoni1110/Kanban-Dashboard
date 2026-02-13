# Project: Kanban Dashboard - AI Development Prompt

## 📌 Project Overview

Status: **Active Development**
Goal: Build a **high-end, professional Kanban Dashboard** with a modern "SaaS" aesthetic. The application allows users to manage tasks across different lifecycle stages (To Do, In Progress, Done) with a focus on user experience and visual polish.

## 🛠 Tech Stack & Tools

- **Framework:** React 19
- **Build Tool:** Vite 7
- **Language:** JavaScript (ESModules)
- **Styling:** CSS (Standard) with a focus on Glassmorphism and responsive design.
- **Icons:** `lucide-react` for consistent, clean iconography.
- **State Management:** React Hooks (`useState`, `useEffect`) + Custom Hooks (`useTasks`).
- **Persistence:** `localStorage` for data persistence.

## 🎨 Design Philosophy (Visual Identity)

- **Aesthetic:** Premium, Minimalist, Dark/Glassmorphism theme.
- **Key Elements:**
  - **Glassmorphism:** Use of `backdrop-filter: blur()`, semi-transparent backgrounds (`rgba(255, 255, 255, 0.1)`), and subtle borders.
  - **Typography:** Clean, readable sans-serif fonts.
  - **Animations:** Smooth transitions for hover states, modal openings, and task movements.
  - **Spacing:** Generous whitespace and padding to create a "breathing" layout.

## 📂 Key Components & Structure

- **`src/App.jsx`**: Main application layout and header.
- **`src/components/Board.jsx`**: Container for the Kanban columns.
- **`src/components/Column.jsx`**: Represents a status stage (To Do, In Progress, Done).
- **`src/components/TaskCard.jsx`**: Displays individual task details with edit/delete actions.
- **`src/components/TaskForm.jsx`**: Form for creating new tasks.
- **`src/hooks/useTasks.js`**: Custom hook encapsulating task CRUD logic and storage.

## 🚀 Current Features

1.  **Task CRUD**: Full Create, Read, Update, Delete capabilities.
2.  **Status Columns**: Tasks organized by `todo`, `doing`, `done` status.
3.  **Local Persistence**: Tasks are saved to the browser's Local Storage.
4.  **Responsive Layout**: Optimized for both Desktop and Mobile views.

## 📝 Instructions for AI Assistant

When generating code or suggesting improvements for this project, please adhere to the following guidelines:

1.  **Maintain Aesthetic Consistency**: Always prioritize the "Premium/Glassmorphism" look. New components should match the existing visual style (blur effects, translucent colors, rounded corners).
2.  **Modern React Best Practices**: Use functional components, hooks, and avoid class-based components. Ensure code is clean, modular, and reusable.
3.  **Error Handling**: robustness in state management and data handling.
4.  **Responsive Design**: Ensure any new UI elements are fully responsive.
5.  **Documentation**: Comment complex logic briefly if necessary.

---

_Copy this prompt to provide context to an AI assistant for future development tasks on this project._
