import { connect } from 'react-redux'
import Login from '../components/Login'
import { bindActionCreators } from 'redux';
// import { getAllBooks,deleteBook } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch);
}

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default LoginContainer
