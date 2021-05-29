export const ACTIONS = {
  ADD_TODO: "add_todo",
  DEL_TODO: "delete_todo",
  CMPL_TODO: "complate_todo",
  UPDATE_TODO: "update_todo",
};

export default function DataReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      console.log(action);
      return [
        ...state,
        {
          id: new Date().getTime(),
          text: action.todo.title,
          isComplete: false,
        },
      ];
    case ACTIONS.DEL_TODO:
      return state.filter((todo) => todo.id !== action.id);

    case ACTIONS.CMPL_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isComplete: !todo.isComplete } : todo
      );

    case ACTIONS.UPDATE_TODO:
      console.log(action);
      return state.map((todo) =>
        todo.id === action.id
          ? { ...todo, text: action.todo.editingTitle }
          : todo
      );

    default:
      return state;
  }
}
