import {ErrorFormatter, ErrorResponse, SuccessFormatter, SuccessResponse} from "./types";

const errorFormatter: ErrorFormatter = (statusCode: number, errorMessage: string) => {
    return {
        error: true,
        statusCode,
        message: errorMessage
    } as ErrorResponse
}

const successFormatter: SuccessFormatter = (resultBody?: string) => {
    if (resultBody) {
        return {
            statusCode: 200,
            body: JSON.stringify(resultBody)
        } as SuccessResponse
    } else {
        return {
            statusCode: 200
        }
    }
}

export {
    errorFormatter,
    successFormatter,
    ErrorResponse,
    SuccessResponse
}