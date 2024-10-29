export enum CheckoutErrorType {
    EmptyFirstName = "EmptyFirstName",
    EmptyLastName = "EmptyLastName",
    EmptyPostalCode = "EmptyPostalCode",
}

export class CheckoutPageData {
    private static validFirstName: string = "John";
    private static validLastName: string = "Doe";
    private static validPostalCode: string = "11000";

    public static getValidFirstName = () => CheckoutPageData.validFirstName;
    public static getValidLastName = () => CheckoutPageData.validLastName;
    public static getValidPostalCode = () => CheckoutPageData.validPostalCode;

    private static errorMessages: { [key: string]: string } = {
        EmptyFirstName : "First Name is required",
        EmptyLastName : "Last Name is required",
        EmptyPostalCode : "Postal Code is required"
    }

    public static getErrorMessage(errorType : CheckoutErrorType): string{
        return this.errorMessages[errorType];
    }
}