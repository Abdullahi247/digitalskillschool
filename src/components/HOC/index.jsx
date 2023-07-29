import React, { Component } from 'react'

export const HOCWrapper = (WrappedComponent) => {


    class Index extends Component {

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    return <Index />
}

// const file = new Blob([res.data], { type: 'application/pdf' });
// const fileURL = URL.createObjectURL(file);
// const link = document.createElement('a');
// link.href = fileURL;
// link.download = 'analysis.pdf';
// link.click();



// function AuthWrapper(Components) {

//     class Index extends Component {

//         constructor() {
//             super();
//             this.state = {
//                 loading: true,
//                 redirect: false,
//                 user_name: ""
//             };
//         }

//         componentDidMount() {
//             const accessToken = localStorage.getItem('rac-shipment-customer-auth')
//             // axios.get(`${baseUrl}/customers/authchecker`, { headers: { "Access-Control-Allow-Origin": "*", Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json", } })
//                 .then(res => {
//                     if (res.status === 200) {
//                         this.setState({
//                             user_name: res.data.message
//                         })
//                         this.setState({ loading: false });
//                     } else {
//                         const error = new Error(res.error);
//                         throw error;
//                     }
//                 })
//                 .catch(err => {
//                     this.setState({ loading: false, redirect: true });
//                 });
//         }

//         render() {
//             const { loading, redirect } = this.state;
//             if (loading) {
//                 return null
//             } else if (redirect) {
//                 return <Navigate to="/login" />;
//             } else {
//                 return <ComponentToProtect {...this.props}
//                 // name={this.state.user_name === undefined ? "" : this.state.user_name}
//                 />;
//             }
//         }
//     }


//     return (
//         <div>
//             <Index />
//         </div>
//     )
// }