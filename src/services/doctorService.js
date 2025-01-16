import axios from 'axios';

const API_URL = 'http://localhost:8080/api/doctors/';

const addDoctor = (data) => axios.post(API_URL, data);
const getDoctors = () => axios.get(API_URL);

export default { addDoctor, getDoctors };
