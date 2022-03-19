import { Routes, Route} from 'react-router-dom'

//* import components
import Login from '../containers/Login'
import RecoveryPassword from '../containers/recoveryPassword'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>

            <Route
                path="*"
                element={
                    <NotFound/>
                }
            />
        </Routes>
    )
}

export default Router