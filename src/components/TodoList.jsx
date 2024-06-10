
const TodoList = () => {
    const Todos = [
        "Todo one",
        "Todo two",
        "Todo three"
    ]
  return (
    <ul>
      {
        Todos.map((item,itemIndex)=>{
            return (
                <li key={itemIndex}>{item}</li>
            )
        })
      }
    </ul>
  )
}

export default TodoList
