import axios from "axios";

export const fetchVaccineAPI = async () => {
    const response = await axios.get("http://localhost:8080/vaccinelist");
    return response
}