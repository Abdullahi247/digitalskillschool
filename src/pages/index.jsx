import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react'
import HeaderComponent from '../components/common/header'
import FooterComponent from '../components/common/footer'
import IndexMainComponent from '../components/index/main'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const ThemeContext = createContext()

function ThemeContextProvider(props) {

  const [themeStatus, setThemeStatus] = React.useState("Green")

  return (
    <ThemeContext.Provider value={{ themeStatus, setThemeStatus }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default function Index() {

  // const [userName, setUserName] = React.useState("")
  // const [showName, setShowName] = React.useState(false)

  // const giveName = (event) => {
  //   event.preventDefault()
  //   setShowName(!showName)
  // }

  // const handleChange = (event) => {
  //   event.preventDefault()
  //   const { target: { value } } = event
  //   setUserName(value)
  // }

  // const [userList, setUserList] = React.useState([])

  // React.useEffect(() => {
  //   console.log("sbdfhubcefibcrijdb")
  //   // axios.get('', {})
  //   //   .then((res) => {
  //   //     const { data } = res
  //   //     setUserList(data)
  //   //   })
  //   //   .catch((err) => {
  //   //     return
  //   //   })
  // }, [])

  return (
    <>
      <div className=' w-full h-screen bg-gray-200'>
        <ThemeContextProvider>
          <HeaderComponent />
          {/* <IndexMainComponent /> */}
          <button >
            Click Me
          </button>

          {/* <Settings /> */}
          {/* <div className='bg-red-900 h-screen w-full'>
          <div className='w-1/3 m-auto h-5/6 bg-white my-12 rounded'>
            <form >
              <div className='w-full m-auto flex justify-center'>
                <input onChange={handleChange} className='bg-red-900 mt-12 px-2 text-white' placeholder='Input your Name' />
              </div>
              <br />
              <br />
              <div className='w-full m-auto flex justify-center'>
                {
                  showName ? <button type='submit' onClick={giveName} className='px-4 py-2 bg-red-900 w-1/3 m-auto text-white rounded'>Hide my Name</button>
                    :
                    <button type='submit' onClick={giveName} className='px-4 py-2 bg-red-900 w-1/3 m-auto text-white rounded'>Give me my Name</button>
                }
              </div>
            </form>
            <br />
            {showName ? <p className='px-4 py-2 bg-red-900 w-1/3 m-auto text-white rounded'>
              Customer Name: {userName}
            </p>
              :
              <p className='px-4 py-2 bg-red-900 w-1/3 m-auto text-white rounded'>
                Customer Name
              </p>
            }

          </div>
        </div> */}

          {/* <div>
          {
            userList.length > 0 ? userList.map((each, key) => {
              const { userName } = each
              return <div key={key}>
                <h3>{userName}</h3>
              </div>
            })
              :
              <div>
                <h3>Sorry, We're short of users</h3>
              </div>
          }
        </div> */}
          {/* <App /> */}
          {/* <FooterComponent /> */}
          <RefTester />
        </ThemeContextProvider>
      </div>
    </>
  )
}



// function Settings() {
//   const { themeStatus, setThemeStatus } = useContext(ThemeContext)
//   return (
//     <div style={{ backgroundColor: themeStatus === 'white' ? 'red' : 'green', width: '300px', height: '600px' } }>
//       <button onClick={() => setThemeStatus('white')}>Change Theme</button>
//       <button onClick={() => setThemeStatus('blue')}>Change Theme Blue</button>
//       <h3>Current Theme  : {themeStatus}</h3>
//     </div>

//   )
// }


// function App({ title, age, description }) {

//   return (
//     <div>
//       <Header title={title} age={age} />
//       <Content description={description} />
//     </div>
//   )
// }

// function Header({ title, age }) {
//   return (
//     <div>
//       <h3>{title}</h3>
//       <h3>{age}</h3>
//     </div>
//   )
// }

// function Content({ description }) {
//   return (
//     <div>
//       <h3>{description}</h3>
//     </div>
//   )
// }

// function RefTester() {

//   var timerRef = useRef()
//   var aHrefTagRef = useRef()
//   const [counter, setCounter] = useState(0)

//   useEffect(() => {
//     // const count = () => setInterval(() => {
//     //   setCounter(counter + 1)
//     // }, 1000);
//     // timerRef = count()
//     console.log(aHrefTagRef.current.hre)
//     console.log(timerRef.current.alt)
//   }, [counter])

//   clearInterval(timerRef)


//   return (
//     <div>
//       {/* <button ref={timerRef} >Current Count : {counter}</button> */}
//       <a href='hwhjsbfejw' ref={aHrefTagRef} >Current Count : {counter}</a>
//       <img ref={timerRef} src='' alt="Logo" />
//       {/* <h3 ref={timerRef} >Current Count : {counter}</h3> */}
//     </div>
//   )
// }


function ButtonHandler({ onClick }) {

  const handleClick = () => {
    useCallback(
      () => {
        onClick()
      }, [onClick])
  }

  return (
    <div>
      <button onClick={handleClick}>bueirbg</button>
    </div>
  )
}