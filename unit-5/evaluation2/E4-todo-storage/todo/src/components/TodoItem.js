import React from "react";

const TodoItem = ({ item, edit_func, delete_func}) => {
  const [completed, setCompleted] = React.useState(item.completed);
  const [edit, setEdit] = React.useState(false);
  const [editData, setEditData] = React.useState(item.title);

  
  return (
    <>
      <tr>
        {completed ? (
          <td>
            <s>{item.title}</s>
          </td>
        ) : (
          <td>{item.title} </td>
        )}
        <td>
          <button onClick={()=>{delete_func(item.id)}} >delete</button>
        </td>
        <td>
          <button >Completed</button>
        </td>
        <td>
          <button onClick={()=>setEdit(true)}>Edit</button>
          {edit && (
            <>
              <input
                type="text"
                value={editData}
                onChange={(e) => setEditData(e.target.value)}
              />
              <button onClick={()=>{edit_func(item.id,editData )}} >Done</button>
            </>
          )}
        </td>
      </tr>
    </>
  );
};
export default TodoItem;
