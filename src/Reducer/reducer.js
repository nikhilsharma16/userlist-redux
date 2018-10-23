const initialState = {
  users: [
    {
      email: "test values",
      password: "test values",
      age: "test values",
      designation: "test values",
      city:"test values"
    }
  ]
};  
export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADDUSER": {
      // state.users.push(action.data); 
      alert("Successfully submitted")
      return {
        ...state,
        users: [...state.users, action.data]
      };
    }


    case "DELUSER": {
      state.users.splice(action.index,1)
      return{
        ...state,
        users: [...state.users]
      };
    }

    default:
      return state;
  }
}
