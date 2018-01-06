import { ADD_COMMENT } from "../constants"

// Define new comment with random id
const comment = (comment) => {
    return {
        ...comment,
        id: Math.random(),
    }
}

// Read comment from localstorage and pass it to state
const storedComments = localStorage.getItem("comments");
const initialState = storedComments ? JSON.parse(storedComments) : [];
console.log('initialState', initialState);
export default ( state = initialState, action ) => {
    switch (action.type) {
        // Add comment in store and localstorage
        case ADD_COMMENT: {
            const comments = [...state, comment(action.payload.comment)]
            localStorage.setItem("comments", JSON.stringify(comments));
            return comments;
        }

        default:
            return state;
    }
}