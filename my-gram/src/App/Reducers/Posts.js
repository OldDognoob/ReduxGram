function posts(state=[],action){
    switch(action.type){
        case "INCREMENT_LIKES":
            console.log("Incrementing Likes!!");
            const i = action.index;
            return[
                ...state.slice(0,1),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i+1)
            ];
            default:
                return state;
    }
}
export default posts;