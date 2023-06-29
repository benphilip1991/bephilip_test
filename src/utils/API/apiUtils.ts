import axios, { AxiosInstance } from "axios";

class APIUtils {
    baseUrl: string;
    axiosInstance: AxiosInstance;

    constructor() {
        this.baseUrl = process.env?.REACT_APP_SVC_BASE_URL || "http://localhost";
        this.axiosInstance = axios.create({
            baseURL: this.baseUrl
        });
    }
}

const apiUtils: APIUtils = new APIUtils();

export default apiUtils;