export const urls = {
  staging_base_url: "https://ai50-backend.azurewebsites.net/api/v1",
  local_base_url: "http://127.0.0.1:5000/api/v1",
  auth: {
    signup: "/auth/signup",
    signin: "/auth/login",
    send_otp: "/auth/send-otp",
    verify_otp: "/auth/verify-otp",
    forgot_password: "/auth/forgot-password",
    reset_password: "/auth/reset-password",
    check_email: "/auth/check-email",
    user_details: "/auth/user/get",
  },
  chat: {
    list: "/chat/list",
    message_list: "/chat/messages",
    initiate_chat: "/chat/create",
    update_chat: "/chat/update",
  },
  question: {
    list: "/question/list",
  },
};
