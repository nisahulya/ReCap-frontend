  
export interface CreditCard{
    id?:number,
    customerId:number;
    ownerName:string;
    creditCardNumber:string;
    expirationDate:string;
    securityCode:string;
}