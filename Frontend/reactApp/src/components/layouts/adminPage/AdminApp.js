import React from 'react';
import { pizzasList } from './Pizzas/pizzaList';
import { pizzaEdit } from './Pizzas/pizzaEdit';
import { pizzaCreate } from './Pizzas/pizzaCreate';
import authProvider from '../adminPage/authProvider';
import {Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

function AdminApp() {
    return (
        <Admin authProvider={authProvider} dataProvider={jsonServerProvider('http://localhost:3001')}>
            <Resource name="pizzas" list={pizzasList} edit={pizzaEdit} create={pizzaCreate}/>
        </Admin>
    );
}
export default AdminApp;

