import React from 'react'
/*          Acesso liberado                */
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Forgot from '../pages/ForgotPassword/Forgot'

/*           ACESSO USUÁRIO               */
import UserLogged from '../pages/UserPages/UserLogged/UserLogged'
import EditInfoUser from '../pages/EditInfo/EditInfoUser/EditInfoUser'
import WalletUser from '../pages/UserPages/WalletUser/WalletUser'
import Restaurant from '../pages/UserPages/Restaurant/Restaurant'

/*          ACESSO ENTREGADOR            */
import DeliverymanPageDeliveryClicked from '../pages/DeliverymanPages/DeliverymanPageDeliveryClicked/DeliverymanPageDeliveryClicked'
import NotValidatedDeliveryman from '../pages/DeliverymanPages/NotValidatedDeliveryman/NotValidatedDeliveryman'
import DeliveryAddVeiculo from '../pages/DeliverymanPages/DeliverymanAddVehicle/DeliveryAddVeiculo'
import EditInfoDeliveryman from '../pages/EditInfo/EditInfoDeliveryman/EditInfoDeliveryman'
import WalletDeliveryman from '../pages/DeliverymanPages/WalletDeliveryman/WalletDeliveryman'
import Deliveryman from '../pages/DeliverymanPages/Deliveryman/Deliveryman'

/*       ACESSO DONO DE RESTAURANTE     */
import EditInfoRestaurant from '../pages/EditInfo/EditInfoRestaurant/EditInfoRestaurant'
import StockManagement from '../pages/RestaurantOwner/StockManagement/StockManagement'
import Results from '../pages/RestaurantOwner/Results/Results'
import Orders from '../pages/RestaurantOwner/Orders/Orders'

import RestaurantManager from '../pages/RestaurantOwner/RestaurantManager/RestaurantManager'
import MenuManagement from '../pages/RestaurantOwner/MenuManagement/MenuManagement'
import CreateNewPlateDiolog from '../pages/RestaurantOwner/CreateNewPlateDiolog/CreateNewPlateDiolog'


/*            ACESSO  ADMIN            */
import EditInfoAdmin from '../pages/EditInfo/EditInfoAdmin/EditInfoAdmin'
import AdminRestaurantRegistration from '../pages/AdminPages/AdminRestaurantRegistration/AdminRestaurantRegistration'
import AdminUsers from '../pages/AdminPages/AdminUsers/AdminUsers'
import AdminDeliveryman from '../pages/AdminPages/AdminDeliverymen/AdminDeliverymen'

/*               ERROS                */
import NotFound from '../pages/NotFound/NotFound'

/*             ROUTES              */
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
function routes() {
    return (
        <Router>
            <Switch>
                {/*      ACESSO LIBERADO                      */}

                <Route exact path="/">              <Home/>         </Route>

                <Route exact path="/register">        <Register/>   </Route>

                <Route exact path="/login">        <Login/>         </Route>
                
                <Route exact path="/login/forgot-password"><Forgot/></Route>

                {/*           ACESSO USUÁRIO                         */}

                <Route exact path="/user-page"><UserLogged/>        </Route>

                <Route exact path="/user/edit"> <EditInfoUser/>     </Route>

                <Route exact path="/user/wallet"><WalletUser/>       </Route>
                <Route exact path="/restaurants">  <Restaurant/> </Route>

                {/*           ACESSO ENTREGADOR          */}

                <Route exact path="/deliveryman/add-veiculo"> <DeliveryAddVeiculo/></Route>
                    
                <Route exact path="/deliveryman/page"> <Deliveryman/>    </Route>
                    
                <Route exact path="/deliveryman/wallet">  <WalletDeliveryman/>           </Route>

                <Route exact path="/deliveryman/edit"> <EditInfoDeliveryman/></Route>

                <Route exact path="/deliveryman/not-validated"> <NotValidatedDeliveryman/> </Route>

                <Route exact path="/deliveryman/delivery-clicked"><DeliverymanPageDeliveryClicked/> </Route>

                {/*       ACESSO DONO DE RESTAURANTE          */}

                

                <Route exact path="/restaurant/manager">     <RestaurantManager/>   </Route>
                
                <Route exact path="/restaurant/management"><MenuManagement/></Route>

                <Route exact path="/restaurant/edit">   <EditInfoRestaurant/>       </Route>

                <Route exact path="/restaurant/create-new-plate-diolog"> <CreateNewPlateDiolog/> </Route>

                <Route exact path="/restaurant/results">   <Results/>   </Route>

                <Route exact path="/restaurant/orders">  <Orders/>  </Route>

                <Route exact path="/restaurant/stock"><StockManagement/></Route>
                

                {/*         ACESSO  ADMIN                          */}

                <Route exact path="/admin/edit">  <EditInfoAdmin/>    </Route>
               
                <Route exact path="/admin/users"> <AdminUsers/>       </Route>

                <Route exact path="/admin/deliveryman"><AdminDeliveryman/> </Route>

                <Route exact path="/admin/restaurant/register"> <AdminRestaurantRegistration/> </Route>

                {/*          ERROS       */}

                <Route exact path="/404"> <NotFound/>  </Route>
                
                <Route path="/"> <Redirect to="/404"/> </Route>

                
            </Switch>
        </Router>
    )
}

export default routes
