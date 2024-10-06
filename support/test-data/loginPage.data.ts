import { LoginErrorType } from '../../support/test-data/loginPageErrors.enum';

export class LoginPageData {
    private static validUsername: string = "student";
    private static validPassword: string = "Password123";
    private static invalidUsername: string = "invalidUser";
    private static invalidPassword: string = "invalidPassword";

    private static errorMessages: { [key: string]: string } = {
        InvalidUsername : "Your username is invalid!",
        InvalidPassword : "Your password is invalid!"
    }

    public static getValidUsername = () => LoginPageData.validUsername;
    public static getValidPassword = () => LoginPageData.validPassword;
    public static getInvalidUsername = () => LoginPageData.invalidUsername;
    public static getInvalidPassword = () => LoginPageData.invalidPassword;

    public static getErrorMessage(errorType : LoginErrorType): string{
        return LoginPageData.errorMessages[errorType];
    }
}