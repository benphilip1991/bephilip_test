import apiUtils from "./apiUtils";

class UserApi {

    /**
     * Fetch user details from the given user API
     */
    getAllUserDetails() {
        return apiUtils.axiosInstance.get(
            process.env?.REACT_APP_USERS_API_PATH || "/users"
        ).then((response) => {
            return response.data;
        }).catch((error) => {
            console.log(error);
            return [];
        });
    }

    /**
     * Fetch user posts for a given userId
     * 
     * @param userId 
     */
    getUserPosts(userId: number) {
        return apiUtils.axiosInstance.get(
            (process.env?.REACT_APP_POSTS_API_PATH || "/posts") + "?userId=" + userId
        ).then((response) => {
            return response.data;
        }).catch((error) => {
            console.log(error);
            return [];
        });
    }
}

const userApi: UserApi = new UserApi();
export default userApi;