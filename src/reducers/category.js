
export default (state = {categories: []}, action)  => {
    switch (action.type) {
      case "SET_CATEGORIES":
        return action.categories
        default:
            return state
    }
 }