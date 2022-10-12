// import { nameService } from "../../services/name.service"
// import { userService } from "../../services/user.service"
// import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service'
// import { groupService } from "../../services/group.service"
// import { taskService } from "../../services/task.service"


export function loadnames() {
    return async (dispatch, getState) => {
        try {
            const names = await nameService.query()
            dispatch({ type: 'SET_nameS', names })
        } catch (err) {
            // showErrorMsg('Failed to load names')
        } finally {
            dispatch({ type: 'SET_LOADING', isLoading: false })
        }
    }
}

export function removename(nameId) {
    return async (dispatch, getState) => {
        dispatch({ type: 'SET_LOADING', isLoading: true })
        try {
            nameService.remove(nameId)
            dispatch({ type: 'REMOVE_name', nameId })
            showSuccessMsg('name removed succesfully')
        } catch (err) {
            // showErrorMsg('Failed to remove name')
        } finally {
            dispatch({ type: 'SET_LOADING', isLoading: false })
        }
    }
}

export function loadname(nameId, sortBy, filterBy) {
    return async (dispatch, getState) => {
        try {
            const name = await nameService.getById(nameId, sortBy, filterBy)
            dispatch({ type: 'SET_name', name })
        } catch (err) {
            // showErrorMsg('Failed to load name try again later')
        } finally {
            dispatch({ type: 'SET_LOADING', isLoading: false })
        }
    }
}