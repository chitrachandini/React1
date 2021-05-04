const userReducer = (state = [], action) => {
    switch (action.type) {
      case 'fetchUsersSuccess':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default userReducer;