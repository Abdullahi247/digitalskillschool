import React from 'react'

export default function IndexTutotial() {

    const [populateDss, setDSSData] = React.useState("")
    const [errorText, setErrorText] = React.useState("")

    const handleGetDSS = () => {
        setErrorText("")
        fetch('https://dss/api/names')
            .then(({ status, data }) => {
                // const { status, data} = response
                setDSSData(data)
            })
            .catch((error) => {
                setErrorText("Network Error")
            })

    }


    return (
        <>
            <div>
                <button onClick={handleGetDSS}>
                    Get DSS API
                </button>
                <div>
                    {
                        !errorText ? populateDss.map((each) => {
                            const { nameOfStudent } = each
                            return <div>{nameOfStudent}</div>
                        })
                            :
                            <span>{errorText}</span>
                    }
                </div>
            </div>
        </>
    )
}
