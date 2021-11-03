import { DELETE_PERSON, DELETE_PERSON_FAIL, EDIT_PERSON, EDIT_PERSON_FAIL, GET_PERSON, NEW_PERSON, NEW_PERSON_FAIL } from "./constants"



export const personReducer = (state = { persons: [] }, action) => {
  switch (action.type) {
    case NEW_PERSON:
      return {
        persons: [...state.persons, action.payload]
      }
    case NEW_PERSON_FAIL:
      return {
        error: action.payload
      }
    case DELETE_PERSON:
      return {
        persons: [
          ...state.persons.slice(0, action.payload),
        ...state.persons.slice(action.payload + 1)
        ]

        // persons: [
        //   ...state.persons.splice(action.payload , 1)
        // ]

        // persons:[

        // ]
        // persons: [...state.persons, action.payload]
      }
    case DELETE_PERSON_FAIL:
      return {
        error: action.payload
      }
    case EDIT_PERSON:
      return {
        ...state,
        persons: state.persons.map(
          (person, index) => index === action.payload.index ? { name: action.payload.name, phone: action.payload.phone, address: action.payload.address }
            : person
        )
      }
    case EDIT_PERSON_FAIL:
      return {
        error: action.payload
      }
    case GET_PERSON:
      return {
        persons: action.payload
      }
    default:
      return state
  }
}
