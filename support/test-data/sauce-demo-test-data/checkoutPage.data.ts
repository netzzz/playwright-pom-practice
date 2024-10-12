export class CheckoutPageData {
    private static validFirstName: string = "John";
    private static validLastName: string = "Doe";
    private static validPostalCode: string = "11000";

    public static getValidFirstName = () => CheckoutPageData.validFirstName;
    public static getValidLastName = () => CheckoutPageData.validLastName;
    public static getValidPostalCode = () => CheckoutPageData.validPostalCode;
}