function findById(id:number) {
  const todo = JSON.parse(window.localStorage.getItem('todolist')).filter((todo: {title: string, done: boolean, key: number}) => { 
    return todo.key === id
  })
  return todo
}

export { findById }