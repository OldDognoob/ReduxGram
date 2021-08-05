function postComments(state=[], action){
    switch(action.type){
        case "ADD_COMMENT":
            // a new state will come up with a new comment
            return[
                ...state,
                {
                    user:action.author,
                    text:action.comment
                }
            ];
        case "REMOVE_COMMENT":
            //we are returning a new state without our comment
            return [
                // from zero to the one we want to delete
                ...state.slice(0, action.i),
                //and from the one we delete to the end
                ...state.slice(action.i +1)
            ];
        default:
            return state;

    }
}
function Comments(state=[],action){
if(typeof action.postId !== "undefined"){
    return{
        //our current state
        ...state,
        //replace it with a new one
        [action.postId]:postComments(state[action.postId],action)
    };
}
return state;
}
export default Comments;