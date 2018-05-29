const url = 'https://api.asapfoods.com.ng';
const constants = {
    site: 'https://asapfoods.com.ng',
    SORT_COLORS: "SORT_COLORS",
    ADD_COLOR: "ADD_COLOR",
    RATE_COLOR: "RATE_COLOR",
    REMOVE_COLOR: "REMOVE_COLOR",
    LOGIN_USER_SUCCESSFUL: "LOGIN_USER_SUCCESSFUL",
    LOGIN_USER_FAILED: "LOGIN_USER_FAILED",
    REGISTER_USER_SUCCESSFUL: "REGISTER_USER_SUCCESSFUL",
    REGISTER_USER_FAILED: "REGISTER_USER_FAILED",
    GET_NUMBER_OF_PLATES: "GET_NUMBER_OF_PLATES",
    GET_KITCHENS_LIST_FAILED:"GET_KITCHENS_LIST_FAILED",
    GET_KITCHENS_LIST:"GET_KITCHENS_LIST",
    GET_PLATES_LIST:"GET_PLATES_LIST",
    GET_PLATES_LIST_FAILED:"GET_PLATES_LIST_FAILED",
    DELETE_PLATE: "DELETE_PLATE",
    DELETE_PLATE_FAILED: "DELETE_PLATE_FAILED",
    LOGOUT_USER_SUCCESSFUL: "LOGOUT_USER_SUCCESSFUL",
    LOGOUT_USER_FAILED: "LOGOUT_USER_FAILED",
    UPDATE_PROFILE_SUCCESSFUL: "UPDATE_PROFILE_SUCCESSFUL",
    UPDATE_PROFILE_FAILED: "UPDATE_PROFILE_FAILED",
    CLEAR_PLATE: "CLEAR_PLATE",
    INCREMENT_ORDERS:"INCREMENT_ORDERS",
    GET_KITCHENS_API: `${url}/api/kitchens`,
    LOGIN_USER_API: `${url}/api/user/login`,
    REGISTER_USER_API: `${url}/api/user/register`,
    UPDATE_USER_API: `${url}/api/user/update`,
    CREATE_PLATE_API: `${url}/api/plate/create`,
    GET_TOTAL_API: `${url}/api/checkout/get-total`,
    PROCESS_ORDER_API: `${url}/api/checkout/process-order`,
    VERIFY_COUPONE_API: `${url}/api/coupone/verify`,
    KITCHEN_DETAILS_API: `${url}/api/kitchen`,
    GET_PLATES_API: `${url}/api/checkout/plates`,
    DELETE_PLATE_API: `${url}/api/plate`,
    GET_ORDERS_API: `${url}/api/user/orders`,
    GET_ORDER_API:`${url}/api/user/order`
}
export default constants