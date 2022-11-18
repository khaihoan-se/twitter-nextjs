/** @format */

import { AxiosResponse } from 'axios'

export interface LoginTypes {
   email: string
   password: string
}

export interface TokenResTypes extends AxiosResponse {
   accessToken: string
   message: string
}

export interface UserType {
   _id: string
   email: string
   username: string
   fullname: string
   bio: string
   avatar: string
   banner: string
   followers: string[]
   following: string[]
   link: string
   location: string
   saved: string[]
   updatedAt: string
   createdAt: string
}
