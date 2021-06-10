import React from 'react'
import Home from '../pages/Home/Home'
import AdminUsers from '../pages/AdminUsers/AdminUsers'
import AdminDeliverymen from '../pages/AdminDeliverymen/AdminDeliverymen'
import NotFound from '../pages/NotFound/NotFound'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import DeliveryAddVeiculo from '../pages/DeliverymanAddVehicle/DeliveryAddVeiculo'
import Forgot from '../pages/ForgotPassword/Forgot'
import UserLogged from '../pages/UserLogged/UserLogged'
import EditInfo1 from '../pages/EditInfo1/EditInfo1'
import EditInfo2 from '../pages/EditInfo2/EditInfo2'
import EditInfo3 from '../pages/EditInfo3/EditInfo3'
import EditInfo4 from '../pages/EditInfo4/EditInfo4'
import Deliveryman from '../pages/Deliveryman/Deliveryman'
import WalletA from '../pages/WalletA/WalletA'
import WalletB from '../pages/WalletB/WalletB'
import Restaurant from '../pages/Restaurant/Restaurant'
import RestaurantManager from '../pages/RestaurantManager/RestaurantManager'
import MenuManagement from '../pages/MenuManagement/MenuManagement'
import NotValidatedDeliveryman from '../pages/NotValidatedDeliveryman/NotValidatedDeliveryman'
import DeliverymanPageDeliveryClicked from '../pages/DeliverymanPageDeliveryClicked/DeliverymanPageDeliveryClicked'
import CreateNewPlateDiolog from '../pages/CreateNewPlateDiolog/CreateNewPlateDiolog'
import StockManagement from '../pages/StockManagement/StockManagement'
import AdminRestaurantRegistration from '../pages/AdminRestaurantRegistration/AdminRestaurantRegistration'
import Results from '../pages/Results/Results'
import Orders from '../pages/Orders/Orders'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
function routes() {
    return (
        <Router>
            <Switch>

                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/admin-users">
                    <AdminUsers/>
                </Route>

                <Route exact path="/admin-deliverymen">
                    <AdminDeliverymen/>
                </Route>

                <Route exact path="/register">
                    <Register/>
                </Route>

                <Route exact path="/login">
                    <Login/>
                </Route>
                
                <Route exact path="/login/forgot-password">
                    <Forgot/>
                </Route>
                
                <Route exact path="/delivery-add-cnh">
                    <DeliveryAddVeiculo/>
                </Route>

                <Route exact path="/user-page">
                    <UserLogged/>
                </Route>
            
                <Route exact path="/user-page/deliveryman">
                    <Deliveryman/>
                </Route>

                <Route exact path="/edit-info-1">
                    <EditInfo1/>
                </Route>

                <Route exact path="/edit-info-2">
                    <EditInfo2/>
                </Route>

                <Route exact path="/edit-info-3">
                    <EditInfo3/>
                </Route>

                <Route exact path="/edit-info-4">
                    <EditInfo4/>
                </Route>

                <Route exact path="/wallet-a">
                    <WalletA/>
                </Route>

                <Route exact path="/wallet-b">
                    <WalletB/>
                </Route>

                <Route exact path="/restaurant">
                    <Restaurant/>
                </Route>

                <Route exact path="/admin-restaurant-registration">
                    <AdminRestaurantRegistration/>
                </Route>

                <Route exact path="/restaurant-manager">
                    <RestaurantManager/>
                </Route>

                <Route exact path="/menu-management">
                    <MenuManagement/>
                </Route>

                <Route exact path="/not-validated-deliveryman">
                    <NotValidatedDeliveryman/>
                </Route>

                <Route exact path="/deliveryman-page-delivery-clicked">
                    <DeliverymanPageDeliveryClicked/>
                </Route>

                <Route exact path="/create-new-plate-diolog">
                    <CreateNewPlateDiolog/>
                </Route>

                <Route exact path="/stock-management">
                    <StockManagement/>
                </Route>

                <Route exact path="/results">
                    <Results/>
                </Route>

                <Route exact path="/orders">
                    <Orders/>
                </Route>

                <Route exact path="/404">
                    <NotFound/>
                </Route>

                <Route>
                    <Redirect to="/404"/>
                </Route>

            </Switch>
        </Router>
    )
}

export default routes
