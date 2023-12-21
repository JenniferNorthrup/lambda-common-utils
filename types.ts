//Standardized error response formatting
export type ErrorFormatter =  (
    statusCode: number,
    message: string
) => ErrorResponse

export type ErrorResponse = {
    error: true,
    statusCode: number,
    message: string
}

//Standardized success response formatting
export type SuccessFormatter = (
    body?: any
) => SuccessResponse

export type SuccessResponse = {
    statusCode: number,
    body?: string
}