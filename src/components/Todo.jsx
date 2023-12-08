import React, { useReducer } from "react";
import { useEffect } from "react";

const initialState = {
  items: JSON.parse(localStorage.getItem("todoList")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.payload),
      };

    default:
      return state;
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (text, text2) => {
    dispatch({ type: "ADD_ITEM", payload: text, text2 });
  };
  const removeItem = (index) => {
    dispatch({ type: "REMOVE_ITEM", payload: index });
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(state.items));
  }, [state.items]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstname = e.target.firstname.value.trim();
    if (firstname !== "") {
      addItem(firstname);
      e.target.reset();
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Todo</h1>

      <form className="d-flex mt-2" onSubmit={handleSubmit}>
        <input
          className="form-control me-3"
          type="text"
          name="firstname"
          placeholder="enter your firstname"
        />
        <button className="btn btn-primary " type="submit">
          add
        </button>
      </form>
      {
        <table className="table table-hover mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {state.items.map((todo, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{todo}</td>
                <td>
                  <button
                    onClick={() => removeItem(index)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
};

export default Todo;
