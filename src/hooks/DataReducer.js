export const ACTIONS = {
  ADD_TODO: "add_todo",
  DEL_TODO: "delete_todo",
  CMPL_TODO: "complate_todo",
  UPDATE_TODO: "update_todo",
  JOIN_EXTERNAL_DATA: "join_external_data",
};

export default function DataReducer(state, action) {
  switch (action.type) {
    case ACTIONS.JOIN_EXTERNAL_DATA: {
      if (state.length === 0) {
        return [...(state = action.fetchedData)];
      } else {
        return [...state];
      }
    }

    case ACTIONS.ADD_TODO:
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
      return state.map((todo) =>
        todo.id === action.id
          ? { ...todo, text: action.todo.editingTitle }
          : todo
      );

    default:
      return state;
  }
}
