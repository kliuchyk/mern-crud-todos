import { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { editTodo, getTodo } from "./api";

import TodoForm from "./TodoForm";

export default function EditTodo() {
  const [todo, setTodo] = useState(null);
  const history = useHistory();
  const match = useRouteMatch();
  const todoId = match.params.id;

  useEffect(() => {
    const fetchTodo = async () => {
      const todo = await getTodo(todoId);
      setTodo(todo);
    };
    fetchTodo();
  }, [todoId]);

  const onSubmit = async (todo) => {
    await editTodo(todo, todoId);
    history.push("/");
  };

  return todo ? (
    <div className="container">
      <div className="mt-3">
        <h3>Edit Todo Item</h3>
        <TodoForm todo={todo} onSubmit={onSubmit} />{" "}
      </div>
    </div>
  ) : (
    <>Loading...</>
  );
}
