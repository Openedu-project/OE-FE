import useSWRMutation from "swr/mutation";
import { LoginRequest, LoginResponse, SignupRequest, SignupResponse } from "../_types/auth";
import { api } from "./apiService";
import { API_ENDPOINT } from "./api_link";

async function loginUser(
    url: string,
    { arg } : { arg : LoginRequest }
) : Promise<LoginResponse> {
    const { data } = await api.post<LoginResponse>(url, arg);
    return data;
}

async function registerUser(
    url: string,
    { arg } : { arg : SignupRequest }
) : Promise<SignupResponse> {
    const { data } = await api.post<SignupResponse>(url, arg);
    return data;
}

export function useLoginUser() {
    return useSWRMutation<LoginResponse, any, string, LoginRequest>(
        API_ENDPOINT.LOGIN,
        loginUser
    );
}

export function useRegisterUser() {
    return useSWRMutation<SignupResponse, any, string, SignupRequest>(
        API_ENDPOINT.SIGNUP,
        registerUser
    );
}