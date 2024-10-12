export enum LoginErrorType {
    InvalidUsername = "InvalidUsername",
    InvalidPassword = "InvalidPassword"
}

export class LoginPageData {
    private static validUsername: string = "standard_user";
    private static validPassword: string = "secret_sauce";
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