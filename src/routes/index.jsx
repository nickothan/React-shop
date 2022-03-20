import { Routes, Route} from 'react-router-dom'

//* import components
import Login from '../pages/Login'
import RecoveryPassword from '../pages/RecoveryPassword'
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
            <Route exact path="/create-account" element={<CreateAccount/>}/>
            <Route exact path="/my-account" element={<MyAccount/>}/>
            <Route exact path="/new-password" element={<NewPassword/>}/>
            <Route exact path="/send-email" element={<SendEmail/>}/>
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