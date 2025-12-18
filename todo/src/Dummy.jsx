import { useState, useEffect } from 'react'

function Dummy() {
  // State for employees list
  const [employees, setEmployees] = useState([])
  
  // State for form (used for both add and edit)
  const [form, setForm] = useState({ firstName: '', phone: '' })
  
  // State to track which employee is being edited (null = adding new)
  const [editId, setEditId] = useState(null)

  // Fetch employees on component mount
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => setEmployees(data.users))
  }, [])

  // Add new employee
  const addEmployee = () => {
    fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(newEmp => {
        setEmployees([...employees, newEmp])
        setForm({ firstName: '', phone: '' })
      })
  }

  // Update existing employee
  const updateEmployee = () => {
    fetch(`https://dummyjson.com/users/${editId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(() => {
        setEmployees(employees.map(emp => 
          emp.id === editId ? { ...emp, ...form } : emp
        ))
        setForm({ firstName: '', phone: '' })
        setEditId(null)
      })
  }

  // Delete employee
  const deleteEmployee = (id) => {
    fetch(`https://dummyjson.com/users/${id}`, { method: 'DELETE' })
      .then(() => setEmployees(employees.filter(emp => emp.id !== id)))
  }

  // Start editing an employee
  const startEdit = (emp) => {
    setEditId(emp.id)
    setForm({ firstName: emp.firstName, phone: emp.phone })
  }

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    editId ? updateEmployee() : addEmployee()
  }

  return (
    <div>
      <h1>Employee List</h1>

      {/* Form for Add/Edit */}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          value={form.firstName}
          onChange={e => setForm({ ...form, firstName: e.target.value })}
        />
        <input
          placeholder="Phone"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
        />
        <button type="submit">{editId ? 'Update' : 'Add'}</button>
        {editId && <button type="button" onClick={() => { setEditId(null); setForm({ firstName: '', phone: '' }) }}>Cancel</button>}
      </form>

      {/* Employee List */}
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            ID: {emp.id} | Name: {emp.firstName} | Phone: {emp.phone}
            <button onClick={() => startEdit(emp)}>Edit</button>
            <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dummy;