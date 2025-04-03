import { User } from "../../Types/user.model";
import baseApi from "./base-api.service";

export const profileApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserProfile: builder.query<undefined | User, any>({
                query: () => ({
                    url: "/profile",
                    headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
                }),
            }),

        updateUserProfile: builder.mutation({
            query: (updatedData) => ({
                url: "/profile",
                method: "PUT",
                body: updatedData,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            }),
        }),
    }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } = profileApi
