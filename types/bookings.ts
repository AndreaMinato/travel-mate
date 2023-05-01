import { ITravel } from "./travels"

export interface IBooking {
    _travelId: string,
    id: string,
    userInfo: ICustomerInfo,
    payment: IPaymentType,
    notes?: string
}

export type IBookingWithTravel = IBooking & {
    travel: ITravel
}

export interface ICustomerInfo {
    name: string,
    surname: string,
    email: string,
    phone: string,
    age: string,
    gender: Gender
}

export type Gender = "Male" | "Female" | "Non Bynary"

type None = {
    type: ""
}
type CreditTransfer = {
    type: "CreditTransfer"
    cardNumber: string,
    name: string,
    cvc: string
}

type Paypal = {
    type: "Paypal"
    email: string
}

type Revolut = {
    type: "Revolut"
    accountName: string
}

export type IPaymentType = None|CreditTransfer | Paypal | Revolut
