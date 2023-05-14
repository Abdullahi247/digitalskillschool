
import React, { Component, useState, useEffect, useContext, createContext } from 'react'

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

import Main from './components/Main'


const PeopleProvider = createContext()


const NewConttext = (props) => {



  const [userData, setUserData] = useState("")

  return (
    <>
      <PeopleProvider.Provider value={{ myName: "Yusuf", myemail: "yusuf@dss.com" }}>
        {props.childern}
      </PeopleProvider.Provider>


    </>
  )

}

const NewData = () => {

  const { myName, myemail } = useContext(PeopleProvider)

  useEffect(() => {
    console.log(myName, myemail)
  }, [])

  return (
    <>
      <div>
        <span>{myName}</span>
      </div>
    </>
  )
}


function App() {
  return (
    <>
      <NewConttext>
        <Header />
        <Main />
        <Footer />
        <NewData />
      </NewConttext >
    </>
  )
}




export default App
