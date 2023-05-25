import * as UserExperience from '../types/index'

export const usersExperienceFailed1 = () => (dispatch) => {
    dispatch({ type: UserExperience.USER_EXPERIENCE_FAILED, payload: "Unable to complete purchase", statusCode: 404 })

}
export const usersExperienceSuccess = () => (dispatch) => {
    dispatch({ type: UserExperience.USER_EXPERIENCE_SUCCESS, payload: "Purchase Successful", statusCode: 200 })
}
export const usersExperienceLoading2= () => (dispatch) => {

    dispatch({ type: UserExperience.USER_EXPERIENCE_LOADING })

}