import React from 'react';
import { pizzasList } from './Pizzas/pizzaList';
import { pizzaEdit } from './Pizzas/pizzaEdit';
import { pizzaCreate } from './Pizzas/pizzaCreate';
import { staffList } from './Staff/staffList';
import { staffEdit} from "./Staff/staffEdit";
import { staffCreate} from "./Staff/staffCreate";
import {deliveryList} from "./Deliveries/deliveryList";
import {deliveryEdit} from "./Deliveries/deliveryEdit";
import authProvider  from '../adminPage/authProvider';
import {Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

function AdminApp() {
    return (
        <Admin authProvider={authProvider} dataProvider={jsonServerProvider('http://localhost:3002')}>
            <Resource name="pizzas" list={pizzasList} edit={pizzaEdit} create={pizzaCreate}/>
            <Resource name="employees" list={staffList} edit = {staffEdit} create = {staffCreate}/>
            <Resource name ="deliveries" list={deliveryList} edit ={deliveryEdit} />
        </Admin>
    );
}
export default AdminApp;

