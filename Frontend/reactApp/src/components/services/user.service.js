import axios from 'axios';
import authHeader from './auth-header';


class UserService {

    getAdmin() {
        return axios.get('/pizzas', { headers: authHeader() });
    }

    getDelivery() {
        return axios.get('/deliveries', { headers: authHeader() });
    }

    getKitchen() {
        return axios.get('/preppizzas', { headers: authHeader() });
    }
}

export default new UserService();