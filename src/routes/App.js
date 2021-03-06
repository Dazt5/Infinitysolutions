import React, { useContext } from 'react';

import {
    BrowserRouter as Router,
    Switch, Route
} from 'react-router-dom';

import { Context, Provider } from '../context/Context';
import dayjs from 'dayjs';
/* Auth Components */
import Login from '../pages/authentication/Login';
import Signup from '../pages/authentication/Signup';
import ActivateAccount from '../pages/authentication/ActivateAccount';
import ResendActivateAccount from '../pages/authentication/ResendAccountActivation';
import SendRecoverAccount from '../pages/authentication/SendRecoverAccount';
import RecoverAccount from '../pages/authentication/RecoverAccount';

/* Common Components */
import Dashboard from '../pages/common/Dashboard'
import CorporationProfile from '../pages/common/CorporationProfile';
import UserProfile from '../pages/common/UserProfiles';

import TicketDetails from '../pages/common/TicketDetails/TicketDetails';

/* Admin Components */
import CorporationList from '../pages/admin/Corporation/CorporationsList';
import newCorporation from '../pages/admin/Corporation/newCorporation';
import editCorporation from '../pages/admin/Corporation/editCorporation';
import UsersList from '../pages/admin/Users/UsersList';
import DocumentLists from '../pages/admin/Documents/DocumentLists';
import SelectCorporation from '../pages/admin/Documents/SelectCorporation';
import NewDocument from '../pages/admin/Documents/newDocument';
import TicketsList from '../pages/admin/Tickets/TicketList';
import newfaq from '../pages/admin/FAQ/newFAQ';
import Faqlist from '../pages/admin/FAQ/Faqlist';
import editFaq from '../pages/admin/FAQ/editFaq';
import AdminUserForm from '../pages/admin/Users/AdminUserForm';
import Chats from '../pages/admin/Chats/Chats';
import AdminList from '../pages/admin/Users/AdminList';
/* User Components */
import ListCardCorporation from '../pages/User/Corporation/ListCardCorporation';
import ListUserTicket from '../pages/User/Ticket/ListUserTicket/ListUserTicket';
import NewTicket from '../pages/User/Ticket/NewTicket/NewTicket';
import Chat from '../pages/User/Chat/Chat';
import ChangeProfile from '../pages/editProfile';





const App = () => {

    dayjs.locale('es')

    const [auth, saveAuth] = useContext(Context);

    return (
        <Router>
            <Switch>
                {/*Auth Routes */}
                <Route exact path="/" component={() => window.location.href = 'https://geraldovillalobos.github.io/InfinitySolutionsIndex/'} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/activate/:token" component={ActivateAccount} />
                <Route exact path="/send/activate" component={ResendActivateAccount} />
                <Route exact path="/send/recover" component={SendRecoverAccount} />
                <Route exact path="/recover/:token" component={RecoverAccount} />

                <Provider value={[auth, saveAuth]}>
                    {/*User Routes and Common Routes*/}
                    <Route exact path="/corporation" component={ListCardCorporation} />
                    <Route exact path="/corporation/:idCorporation" component={CorporationProfile} />
                    <Route exact path="/profile/:idUser" component={UserProfile} />
                    <Route exact path="/edit/profile" component={ChangeProfile} />
                    <Route exact path="/ticket" component={ListUserTicket} />
                    <Route exact path="/ticket/details/:idTicket" component={TicketDetails} />
                    <Route exact path="/ticket/new" component={NewTicket} />
                    <Route exact path="/ticket/new/:idCorporation" component={NewTicket} />
                    <Route exact path="/chat" component={Chat} />
                    <Route exact path="/dashboard" component={Dashboard} />

                    {/*Admin Routes*/}
                    <Route exact path="/admin/corporation" component={CorporationList} />
                    <Route exact path="/admin/corporation/new" component={newCorporation} />
                    <Route exact path="/admin/corporation/edit/:id" component={editCorporation} />
                    <Route exact path="/admin/users" component={UsersList} />
                    <Route exact path="/admin/adminusers" component={AdminList} />
                    <Route exact path="/admin/document" component={SelectCorporation} />
                    <Route exact path="/admin/document/:idCorporation" component={DocumentLists} />
                    <Route exaxt path="/admin/document/new/:idCorporation" component={NewDocument} />
                    <Route exact path="/admin/ticket" component={TicketsList} />
                    <Route exact path="/admin/faq/new/:idCorporation" component={newfaq} />
                    <Route exact path="/admin/faq/:idCorporation" component={Faqlist} />
                    <Route exact path="/admin/faq/edit/:idFaq" component={editFaq} />
                    <Route exact path="/admin/user" component={AdminUserForm} />
                    <Route exact path="/admin/chats" component={Chats} />
                </Provider>
            </Switch>

        </Router>
    )
}

export default App;