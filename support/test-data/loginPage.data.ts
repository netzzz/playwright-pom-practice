import { loginErrorType } from '../../support/test-data/loginPageErrors.enum';

export class loginPageData {
    private static validUsername: string = "student";
    private static validPassword: string = "Password123";
    private static invalidUsername: string = "invalidUser";
    private static invalidPassword: string = "invalidPassword";

    private static errorMessages: { [key: string]: string } = {
        InvalidUsername : "Your username is invalid!",
        InvalidPassword : "Your password is invalid!"
    }

    public static getValidUsername = () => loginPageData.validUsername;
    public static getValidPassword = () => loginPageData.validPassword;
    public static getInvalidUsername = () => loginPageData.invalidUsername;
    public static getInvalidPassword = () => loginPageData.invalidPassword;

    public static getErrorMessage(errorType : loginErrorType): string{
        return loginPageData.errorMessages[errorType];
    }
}