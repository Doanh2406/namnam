import { DELETE_PERSON, DELETE_PERSON_FAIL, EDIT_PERSON, EDIT_PERSON_FAIL, GET_PERSON, GET_PERSON_FAIL, NEW_PERSON, NEW_PERSON_FAIL } from "./constants"

export const newPerson = (name, phone, email, address, position, sex) => async (dispatch) => {
    try {
        dispatch({
            type: NEW_PERSON,
            payload: { name, phone, email, address, position, sex }

        })
        let existing = await localStorage.getItem('member');
        existing = existing ? JSON.parse(existing) : [];
        existing.push({ name, phone, email, address, position, sex });
        const data = JSON.stringify(existing)
        localStorage.setItem('member', data);
    } catch (error) {
        dispatch({
            type: NEW_PERSON_FAIL,
            payload: error
        })
    }
}

export const editPerson = (dat, index) => async (dispatch) => {
    try {

        dispatch({
            type: EDIT_PERSON,
            payload: {
                dat,
                index
            }
        })
    } catch (error) {
        dispatch({
            type: EDIT_PERSON_FAIL,
            payload: error
        })
    }
}

export const deletePerson = (index) => async (dispatch) => {
    try {
        const deleteIndex = JSON.parse(localStorage.getItem("member"))
        deleteIndex.splice(index, 1)
        const mem = JSON.stringify(deleteIndex) 
        localStorage.setItem("member", mem);
        dispatch({
            type: DELETE_PERSON,
            payload: index
        })
    } catch (error) {
        dispatch({
            type: DELETE_PERSON_FAIL,
            payload: error
        })
    }
}
export const getPerson = () => async (dispatch) => {
    try {
        const per = JSON.parse(localStorage.getItem("member"))
        // console.log("2")
        dispatch({
            type: GET_PERSON,
            payload: per
        })
    } catch (error) {
        dispatch({
            type: GET_PERSON_FAIL,
            payload: error
        })
    }
}


