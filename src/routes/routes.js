import React from 'react'
import Home from '../pages/Home/Home'

import NotFound from '../pages/NotFound/NotFound'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Forgot from '../pages/ForgotPassword/Forgot'
import DeliveryAddVeiculo from '../pages/DeliverymanAddVehicle/DeliveryAddVeiculo'

import UserLogged from '../pages/UserLogged/UserLogged'

import EditInfoUser from '../pages/EditInfo/EditInfoUser/EditInfoUser'
import EditInfoRestaurant from '../pages/EditInfo/EditInfoRestaurant/EditInfoRestaurant'
import EditInfoAdmin from '../pages/EditInfo/EditInfoAdmin/EditInfoAdmin'
import EditInfoDeliveryman from '../pages/EditInfo/EditInfoDeliveryman/EditInfoDeliveryman'

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

import AdminRestaurantRegistration from '../pages/AdminPages/AdminRestaurantRegistration/AdminRestaurantRegistration'
import AdminUsers from '../pages/AdminPages/AdminUsers/AdminUsers'
import AdminDeliveryman from '../pages/AdminPages/AdminDeliveryman/AdminDelivarymen'

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

                <Route exact path="/register">
                    <Register/>
                </Route>

                <Route exact path="/login">
                    <Login/>
                </Route>
                
                <Route exact path="/login/forgot-password">
                    <Forgot/>
                </Route>
                
                <Route exact path="/user-page">
                    <UserLogged/>
                </Route>
            
                <Route exact path="/delivery-add-cnh">
                    <DeliveryAddVeiculo/>
                </Route>

                <Route exact path="/user-page/deliveryman">
                    <Deliveryman/>
                </Route>

                <Route exact path="/user/edit">
                    <EditInfoUser/>
                </Route>

                <Route exact path="/restaurant/edit">
                    <EditInfoRestaurant/>
                </Route>

                <Route exact path="/admin/edit">
                    <EditInfoAdmin/>
                </Route>

                <Route exact path="/deliveryman/edit">
                    <EditInfoDeliveryman/>
                </Route>

                <Route exact path="/wallet-compra">
                    <WalletA/>
                </Route>

                <Route exact path="/wallet-entrega">
                    <WalletB/>
                </Route>

                <Route exact path="/admin-users">
                    <AdminUsers/>
                </Route>

                <Route exact path="/admin-deliveryman">
                    <AdminDeliveryman/>
                </Route>

                <Route exact path="/restaurant">
                    <Restaurant/>
                </Route>

                <Route exact path="/admin/restaurant/register">
                    <AdminRestaurantRegistration/>
                </Route>

                <Route exact path="/restaurant/manager">
                    <RestaurantManager/>
                </Route>

                <Route exact path="/restaurant/manager/management">
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
