import { IBookingWithTravel } from "~/types/bookings"
import { getDateValue } from "~/utils/DateTime";
import { generateUUID } from "~/utils/uuid";

export default defineEventHandler(({ node }) => {

    let bookings: Array<IBookingWithTravel> = Array.from({ length: 5 }, (_, idx) => {
        let booking: IBookingWithTravel = {
            id: generateUUID(),
            _travelId: generateUUID(),
            travel:{
                id: generateUUID(),
                name: `Travel #${idx}`,
                description: `The best travel in the world #${idx}`,
                arrival: getDateValue(new Date()),
                departure: getDateValue(new Date()),
                price: 50000,
                rating: 65,
                image: "https://source.unsplash.com/random"
            },
            payment: {
                type: "CrediTransfer",
                cardNumber: "453656527",
                cvc: 789,
                name: "Andrea Minato"
            },
            userInfo: {
                name: "Andrea",
                surname: "Minato",
                age: "18-25",
                email: "aminato@tempestive.com",
                gender: "Male",
                phone: "3471318101"
            }
        }
        return booking

    })

    return bookings


})
