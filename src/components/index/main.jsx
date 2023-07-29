import React, { createContext, useState, useEffect } from 'react'
import TopSelling from './topSelling'
import FlashSales from './flashSales'
import NavigationComponent from './navigations'
import BrandsComponents from './brands'
import { useDispatch, useSelector } from 'react-redux'
import { action1 } from '../../redux/reducers'
import { usersExperienceFailed1, usersExperienceLoading2, usersExperienceSuccess } from '../../reduxTutorial/Index/action'

export const GeneralContest = createContext()

export function ContextHandler(props) {
    const [showProps, setShowProps] = useState(false)
    return (
        <GeneralContest.Provider value={{ showProps, setShowProps }}>
            {props.children}
        </GeneralContest.Provider>
    )
}

export default function IndexMainComponent() {

    const dispatch = useDispatch()

    const UsersExperience = useSelector(state => state.usersExperience)

    const { usersExperienceLoading, usersExperiencePayload, usersExperienceStatusCode } = UsersExperience

    useEffect(() => {
        console.log(usersExperienceLoading, usersExperiencePayload, usersExperienceStatusCode)
    }, [usersExperienceLoading, usersExperiencePayload, usersExperienceStatusCode])


    return (
        <div className='w-full'>
            <div className='w-2/3 m-auto'>
                <ContextHandler>
                    <NavigationComponent />
                </ContextHandler>
                {/* <button onClick={() => dispatch(usersExperienceSuccess())}>DispatchSuccess</button><br />
                <button onClick={() => dispatch(usersExperienceFailed1())}>DispatchFailed</button><br />
                <button onClick={() => dispatch(usersExperienceLoading2())}>DispatchLoading</button> */}
                {/* <BrandsComponents />
                <TopSelling />
                <FlashSales /> */}
                <SignUpForm />
            </div>
        </div >
    )
}


function SignUpForm() {

    const [parameters, setParameters] = useState({
        username: "",
        password: "",
    })

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
    }

    useEffect(() => {
        console.log(parameters)
    }, [parameters])

    function handleChange(event) {
        const { target: { value, name } } = event
        console.log(parameters)
        console.log(value)
        setParameters({ ...parameters, username: value })
    }
    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <br />
                <input type='text' name='username' onChange={(event) => handleChange(event)} /><br />
                <input type='password' name="password" onChange={handleChange} /><br />
                <input type="file" />
                <input type="radio" />
                <button type='submit' className='bg-green-600 px-4 py-2 rounded'>
                    Submit
                </button>
            </form>
        </div>
    )
}