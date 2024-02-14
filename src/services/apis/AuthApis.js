import { urls } from "../Urls";
import { AuthService } from "../http/AuthService";

export class AuthApi {
  static signup(data) {
    return AuthService.post(urls.auth.signup, data);
  }

  static signin(data) {
    return AuthService.post(urls.auth.signin, data);
  }
}
