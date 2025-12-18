# How to Build a Todo List (For Complete Beginners)

## What is a Todo List?

A Todo List is a simple app where you can:
- **Add** new tasks
- **See** all your tasks
- **Edit** tasks you've added
- **Delete** tasks you don't need

These 4 actions are called **CRUD**:
- **C**reate = Add new task
- **R**ead = See all tasks
- **U**pdate = Edit a task
- **D**elete = Remove a task

---

## Understanding the Code (Step by Step)

### Step 1: What is State?

Think of "state" like a notebook where we write things down to remember them.

```javascript
const [todos, setTodos] = useState([])
```

This means:
- `todos` = Our list of tasks (like a shopping list)
- `setTodos` = A pen to update our list
- `useState([])` = Start with an empty list

---

### Step 2: Adding a Todo (CREATE)

When you click "Add", this happens:

```javascript
const addTodo = () => {
  const newTodo = {
    id: Date.now(),     // Give it a unique number
    text: inputValue    // The text you typed
  }
  setTodos([...todos, newTodo])  // Add to list
}
```

**Simple explanation:**
1. Take what you typed
2. Put it in a box (object) with a number (id)
3. Add that box to our list

---

### Step 3: Showing Todos (READ)

This shows all your todos on the screen:

```javascript
{todos.map(todo => (
  <li>{todo.text}</li>
))}
```

**Simple explanation:**
- Go through each todo in the list
- Show it on the screen as a list item

---

### Step 4: Deleting a Todo (DELETE)

When you click "Delete":

```javascript
const deleteTodo = (id) => {
  const updatedTodos = todos.filter(todo => todo.id !== id)
  setTodos(updatedTodos)
}
```

**Simple explanation:**
- Look at all todos
- Keep only the ones that DON'T match the deleted one
- Update the list

---

### Step 5: Editing a Todo (UPDATE)

Editing happens in 2 parts:

**Part 1 - Start editing:**
```javascript
const startEdit = (id, text) => {
  setEditId(id)       // Remember which one
  setEditValue(text)  // Show current text
}
```

**Part 2 - Save changes:**
```javascript
const saveEdit = (id) => {
  const updatedTodos = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, text: editValue }
    }
    return todo
  })
  setTodos(updatedTodos)
}
```

**Simple explanation:**
1. Click Edit → Shows an input box with current text
2. Type new text
3. Click Save → Replaces old text with new text

---

## How to Run the App

1. Open your terminal/command prompt
2. Go to the project folder
3. Run:
   ```
   npm install
   npm run dev
   ```
4. Open browser at `http://localhost:5173`

---

## Quick Summary

| Action | What it does | Function |
|--------|-------------|----------|
| CREATE | Add new todo | `addTodo()` |
| READ | Show all todos | `todos.map()` |
| UPDATE | Edit a todo | `startEdit()` + `saveEdit()` |
| DELETE | Remove todo | `deleteTodo()` |

---

## Common Questions

**Q: Why do we need an `id`?**
A: To know which todo to edit or delete. Like how each person has a unique name.

**Q: What is `useState`?**
A: A way to remember data. Without it, our todos would disappear when we refresh.

**Q: What does `...todos` mean?**
A: It copies all existing todos. Like copying a list before adding a new item.

---

That's it! You now understand how a Todo List works! 🎉
