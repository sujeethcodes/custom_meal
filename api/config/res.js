const response = {};
response.ACCOUNT_CREATE_SUCCESS = {
  status: 200,
  message: "ACCOUNT_CREATED_SUCCESSFULLY",
};
response.ACCOUNT_CREATE_FAILED = {
  status: 200,
  message: "ACCOUNT_CREATED_FAILED",
};
response.INTERNAL_ERR = {
  status: 500,
  message: "SOME_THING_WENT_WRONG",
};
response.FIND_ACCOUNT = {
  status: 400,
  message: "THIS_EMAIL_ID_ALREADY_HAVE_A_ACCOUNT",
};
response.TOKEN_REQUIRED = {
  status: 400,
  message: "TOKEN_REQUIRED",
};
response.INVAILD_TOKEN = {
  status: 400,
  message: "INVAILD_TOKEN",
};
response.INVAILD_USER = {
  status: 400,
  message: "INVAILD_USER",
};
response.TOKEN_FAILED = {
  status: 400,
  message: "TOKEN_FAILED",
};
response.USER_UPDATED_SUCCESS = {
  status: 200,
  message: "USER_UPDATED_SUCCESS",
};
response.USER_UPDATED_FAILED = {
  status: 400,
  message: "USER_UPDATED_FAILED",
};
response.USER_ALREADY_UPDATED = {
  status: 400,
  message: "USER_ALREADY_UPDATED",
};
response.USER_DELETED_SUCCESS = {
  status: 200,
  message: "USER_DELETED_SUCCESS",
};
response.USER_DELETED_FAILED = {
  status: 400,
  message: "USER_DELETED_FAILED",
};
response.SUBSCRIPTION_SUCCESS = {
  status: 200,
  message: "SUBSCRIPTION_SUCCESSFULLY_CRETAED",
};
response.SUBSCRIPTION_FAILED = {
  status: 400,
  message: "SUBSCRIPTION_CRETAED_FAILED",
};
response.SUB_FEATURE_SUCCESS = {
  status: 200,
  message: "SUBSCRIPTION_FEATURE_UPDATE_SUCCESSFULLY",
};
response.SUB_FEATURE_FAILED = {
  status: 400,
  message: "SUBSCRIPTION_FEATURE_UPDATE_FAILED",
};
response.SUB_FEATURE_FAILED = {
  status: 400,
  message: "SUBSCRIPTION_FEATURE_UPDATE_FAILED",
};
response.FIND_SUBSCRIPTION_SAVE={
  status:200,
  message:"SUBSCRIPTION_SVAE_SUCCESSFULLY"
},
response.GET_USER_FAILED = {
  status: 400,
  message: "GET_USER_FAILED",
};
response.GET_USER_SUCCESS = {
  status: 200,
  message: "GET_USER_SUCCESS",
};
response.GET_SUBSCRIPTION_USER_SUCCESS = {
  status: 200,
  message: "GET_SUBSCRIPTION_USER_SUCCESS",
};
response.GET_SUBSCRIPTION_USER_FAILED = {
  status: 400,
  message: "NO_FETCH_DATA",
};
export default response;
