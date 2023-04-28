import { ITravel } from "./travels"

export interface IBooking {
    _travelId: string,
    id: string,
    userInfo: ICustomerInfo,
    payment: PaymentType,
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

type CrediTransfer = {
    type: "CrediTransfer"
    cardNumber: string,
    name: string,
    cvc: number
}

type Paypal = {
    type: "Paypal"
    email: string
}

type Revolut = {
    type: "Revolut"
    accountName: string
}

export type PaymentType = CrediTransfer | Paypal | Revolut
