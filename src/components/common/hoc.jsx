import React, { Component } from 'react'


export const AuthenticationWrapper = (WrappedComponent) => {

    class HOCIndex extends Component {
        // constructor() {
        //     this.state = { success: false }
        // }
        // super() {
        // }

        componentDidMount() {
            console.log("dfvjknve")
        }

        render() {
            return    <WrappedComponent />
            
        }
    }
    return <HOCIndex />

}

export const Dashboard = () => {
    return (
        <div>
            <span>fhbwfuhbhbeghnjnkrfr</span>
        </div>
    )
}