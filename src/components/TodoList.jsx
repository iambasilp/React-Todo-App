
const TodoList = () => {
    const Todos = [
        "Todo one",
        "Todo two",
        "Todo three"
    ]
  return (
    <ol  className="list">
      {
        Todos.map((item,itemIndex)=>{
            return (
                <li key={itemIndex}>{item}</li>
            )
        })
      }
    </ol>
  )
}

export default TodoList
