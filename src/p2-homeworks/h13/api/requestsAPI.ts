import axios, {AxiosError, AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
})

const getDataFromResponse = (res: AxiosResponse<ResponseType> | AxiosError<ResponseType>): ResponseType | null => {
    if (res instanceof AxiosError)
        return res.response?.data ?? null
    else
        return res.data
}

export type ResponseType = {
    errorText: string
    info: string
    yourBody: { success: boolean }
    yourQuery: {}
}

export const requestsAPI = {
    testAuth(success: boolean) {
        return instance.post<ResponseType>('auth/test', {success})
            .then(getDataFromResponse)
            .catch(getDataFromResponse)
    },
}