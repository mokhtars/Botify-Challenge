import { ADD_COMMENT } from "../constants"
// Create action with from state with type
export function addComment(comment){
    const action = {
        type: ADD_COMMENT,
        payload: {
            comment,
        },
    }
    console.log('action in addComment', action);
    return action;
}