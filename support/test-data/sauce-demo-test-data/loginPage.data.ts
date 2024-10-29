export enum LoginErrorType {
    EmptyUsernameEmptyPassword = "EmptyUsernameEmptyPassword",
    EmptyUsernameValidPassword = "EmptyUsernameValidPassword",
    ValidUsernameEmptyPassword = "ValidUsernameEmptyPassword",
    ValidUsernameInvalidPassword = "ValidUsernameInvalidPassword",
    InvalidUsernameValidPassword = "InvalidUsernameValidPassword"
}

export class LoginPageData {
    private static validUsername: string = "standard_user";
    private static validPassword: string = "secret_sauce";
    private static invalidUsername: string = "invalidUser";
    private static invalidPassword: string = "invalidPassword";

    private static errorMessages: { [key: string]: string } = {
        EmptyUsernameEmptyPassword : "Username is required",
        EmptyUsernameValidPassword : "Username is required",
        ValidUsernameEmptyPassword : "Password is required",
        ValidUsernameInvalidPassword : "Username and password do not match any user in this service",
        InvalidUsernameValidPassword : "Username and password do not match any user in this service"
    }

    public static getValidUsername = () => LoginPageData.validUsername;
    public static getValidPassword = () => LoginPageData.validPassword;
    public static getInvalidUsername = () => LoginPageData.invalidUsername;
    public static getInvalidPassword = () => LoginPageData.invalidPassword;

    public static getErrorMessage(errorType : LoginErrorType): string{
        return this.errorMessages[errorType];
    }
}