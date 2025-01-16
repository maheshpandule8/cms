import axios from 'axios';

const API_URL = 'http://localhost:8080/api/appointments/';

const createAppointment = (data) => axios.post(API_URL, data);
const getAppointments = () => axios.get(API_URL);

export default { createAppointment, getAppointments };
