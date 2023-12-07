import { TypeWithKey } from "../models"


export const getValidationError = (errorCode: any) => {
    const codeMatcher: TypeWithKey<string> = {
        ERR_NETWORK: 'Error de red',
        ERR_BAD_REQUEST: 'Error de solicitud',
        ERR_UNAUTHORIZED: 'Error de autorización',
        ERR_FORBIDDEN: 'Error de acceso',
    }
    return codeMatcher[errorCode];

}