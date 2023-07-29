import axios, { Axios } from 'axios'
import React, { useState } from 'react'
import { VITE_CONFIG_URL } from '../APIS/apiIntegration'

export default function LoginComponent() {
    const [errMsg, setErrMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")
    const [userCredential, setUserCredentials] = useState({
        email: "",
        password: ""
    })
    const handleChange = (event) => {
        const { target: { value, name } } = event
        setUserCredentials({ ...userCredential, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("dfhbeurbg")
        console.log(userCredential)
        setErrMsg("")
        setSuccessMsg("")
        const { email, password } = userCredential
        axios.post(`${VITE_CONFIG_URL}/auth/login`, { email: email, userPass: password }, { headers: { "Allow-Access-Control": "*", "Content-Type": "application/json" } })
            .then((response) => {
                setSuccessMsg("Success Login")
                console.log(response.data.statusMessage)
                const access = response.data.statusMessage
                console.log(access)
                localStorage.setItem("shoppingAPIAccessToken", access)
            })
            .catch((err) => {
                setErrMsg("Incorrect email or Password")
                console.log(err)
            })

        // fetch("http://localhost:3343/auth/login", { method: 'POST', { email: email, password: password },})
        //     .then((response) => {
        //     console.log(response)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
    }

    const handleUpdate = () => {
        const access = localStorage.getItem("shoppingAPIAccessToken")
        console.log(access)
        axios.post(`${VITE_CONFIG_URL}/auth/update/profile`, {}, { headers: { "Allow-Access-Control": "*", Authorization: `Bearer ${access}`, "Content-Type": "application/json" } })
            .then((response) => {
                console.log(response.data.statusMessage)

            })
            .catch((err) => {

                console.log(err)
            })

    }


    const fileDownloader = () => {
        console.log("sdcbwcbiuebrui")
        Axios.get('', { Headers: { "Allow-Access-Control-Origin": "*" }, Response: 'blod' })
            .then((result) => {
                const file = new Blob([result.data], { type: 'application/pdf' });
                const fileURL = URL.createObjectURL(file);
                const link = document.createElement('a');
                link.href = fileURL;
                link.download = 'timitope_cert.pdf';
                link.click();
            }).catch((err) => {
                console.log("Oops, failed to download file")
            });
    }


    return (
        <div className=' h-screen w-screen flex justify-center'>
            {/* <div className='bg-gray-300 rounded shadow-xl w-2/3 m-auto'>
                <h3>
                    Login
                </h3>
                <div className=''>
                    <form>
                        <input type='email' value={userCredential.email} onChange={handleChange} name="email" />
                        <br />
                        <input type='password' value={userCredential.password} onChange={handleChange} name="password" />
                        <br />
                        {errMsg && <p className='text-red-600'>{errMsg}</p>}
                        {successMsg && <p className='text-green-600'>{successMsg}</p>}
                        <button type='submit' onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
                <div>
                    <button onClick={handleUpdate} >Update Now</button>
                </div>

            </div> */}
            <br />
            <br />
            <br />
            <div className=' w-4/6 h-3/6 flexx justify-center drop-shadow-2xl bg-gray-300 rounded'>
                <div className='my-12'>
                    <button onClick={fileDownloader} className='p-2 bg-green-800 rounded text-white'>Download Now</button>
                </div>
            </div>
        </div>
    )
}
