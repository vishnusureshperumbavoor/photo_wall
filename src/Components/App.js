import Main from "./Main"
import { connect } from "react-redux"

function mapStateToProps(state){
    return{
        posts:state
    }
}

const ReduxApp = connect(mapStateToProps)(Main)

export default ReduxApp;