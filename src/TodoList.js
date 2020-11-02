import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getTodos } from "./api";

export default function TodoList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      setItems(todos);
    };
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Todo List</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Text</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.text}</td>
                <td>
                  <Link to={`/edit/${item._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
