import React, { useContext } from 'react'
import { UserData } from '../App'

export default function Header() {
  const { myData, setMyData } = useContext(UserData)
  return (
    <div>{myData}
    dfbnker
    <button onClick={() => {setMyData("fdhjger")}}>ClickMe</button>
    </div>
  )
}
