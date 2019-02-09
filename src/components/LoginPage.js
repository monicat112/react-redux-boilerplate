import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

// destructuring the props to get startLogin
export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Boilerplate</h1>
            <p>Tell us what your app does</p>
            <button className="button" onClick={startLogin}>Login with Google</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)