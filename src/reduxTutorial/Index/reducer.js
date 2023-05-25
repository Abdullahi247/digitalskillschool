import * as UserExperience from '../types/index'

const usersExperience = (initialState = { usersExperienceLoading: true ,u : "dvfed", usersExperiencePayload: "action.payload", usersExperienceStatusCode: "action.statusCode "}, action) => {
    switch (action.type) {
        case UserExperience.USER_EXPERIENCE_FAILED:
            return { usersExperienceLoading: false, usersExperiencePayload: action.payload, usersExperienceStatusCode: action.statusCode }
        case UserExperience.USER_EXPERIENCE_SUCCESS:
            return { usersExperienceLoading: false, usersExperiencePayload: action.payload, usersExperienceStatusCode: action.statusCode };
        case UserExperience.USER_EXPERIENCE_LOADING:
            return { usersExperienceLoading: true }
        default:
            return initialState
    }
}

export { usersExperience }