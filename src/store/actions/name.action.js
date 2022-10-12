// import { nameService } from "../../services/name.service"
// import { userService } from "../../services/user.service"
// import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service'
// import { groupService } from "../../services/group.service"
// import { taskService } from "../../services/task.service"


export function getActionUpdatename(name) {
    return { type: 'UPDATE_name', name }
}

export function setLoader() {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_LOADING', isLoading: true })
    }
}

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

export function setFilter(filterBy) {
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER', filterBy })
    }
}

export function setSort(sortBy) {
    return (dispatch) => {
        dispatch({ type: 'SET_SORT', sortBy })
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

export function addname(name) {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: 'SET_LOADING', isLoading: true })
            const savedname = await nameService.save(name)
            dispatch({ type: 'ADD_name', name: savedname })
        } catch (err) {
            // showErrorMsg('Failed to add name try again')
        } finally {
            dispatch({ type: 'SET_LOADING', isLoading: false })
        }
    }
}

export function updatename(name) {
    return async (dispatch, getState) => {
        try {
            await nameService.save(name)
            // const updatedname = await nameService.save(name)
            // dispatch({ type: 'UPDATE_name', name: updatedname })
        } catch (err) {
            // showErrorMsg('Failed to update name')
        } finally {
            dispatch({ type: 'SET_LOADING', isLoading: false })
        }
    }
}

