import { Routes, Route} from 'react-router-dom'

//* import components
import Login from '../pages/Login'
import RecoveryPassword from '../pages/NewPasswordd'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Checkout from '../pages/Checkout'
import CreateAccount from '../pages/CreateAccount'
import MyAccount from '../pages/MyAccount'
import NewPassword from '../pages/NewPassword'
import SendEmail from '../pages/SendEmail'
import Orders from '../pages/Orders'

const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/Checkout" element={<Checkout/>}/>
            <Route exact path="/CreateAccount" element={<CreateAccount/>}/>
            <Route exact path="/MyAccount" element={<MyAccount/>}/>
            <Route exact path="/NewPassword" element={<NewPassword/>}/>
            <Route exact path="/SendEmail" element={<SendEmail/>}/>
            <Route exact path="/Orders" element={<Orders/>}/>
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