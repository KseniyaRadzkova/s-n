import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f69e5e8d-f915-47ef-8e8f-68cb611269c1"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile(id: string) {
        console.warn('Obsolete method.Please profileAPI object.')
        return profileAPI.getProfile(id);
    }
}

type UpdateStatusAxiosT = { data: {}, resultCode: number, messages: string[] };

export const profileAPI = {
    getProfile(id: string) {
        return instance.get(`profile/` + id);
    },
    getStatus(id: string) {
        return instance.get(`profile/status/` + id);
    },
    updateStatus(status: string | null) {
        return instance.put<UpdateStatusAxiosT>(`profile/status`, {status: status});
    },

}


export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    }
}