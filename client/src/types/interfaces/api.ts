import {HttpStatusCode} from "axios";

export interface ApiResponse<T> {
    data: T,
    error?: {
        status: HttpStatusCode,
        name: string,
        message: string,
        details: Object
    }
}