import Crypto from 'crypto-js'

export function useApi(url, params) {
    const [apiResponse, setApiResponse] = useState()
    const encryptData = Crypto.AES.encrypt(JSON.stringify(params, "dvuiehguigherifuhewrfuhw98frieowfrhgueit8uyg8ruwesd")).toString()
    fetch(url, { method: 'POST', data: encryptData })
        .then(() => {
            setApiResponse("vsdiuhgejwkrn")
        })
        .catch(() => {
            setApiResponse("rrr")

        })
    return apiResponse

}