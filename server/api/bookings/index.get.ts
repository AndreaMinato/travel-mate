import { IBookingWithTravel } from "~/types/bookings"
import { getDateValue } from "~/utils/DateTime";
import { generateUUID } from "~/utils/uuid";

export default defineEventHandler(({ node }) => {

    let bookings: Array<IBookingWithTravel> = Array.from({ length: 15 }, (_, idx) => {
        let booking: IBookingWithTravel = {
            id: generateUUID(),
            _travelId: generateUUID(),
            travel: {
                id: generateUUID(),
                name: `Travel #${idx}`,
                description: `The best travel in the world #${idx}`,
                arrival: getDateValue(new Date()),
                departure: getDateValue(new Date()),
                price: 50000,
                rating: 65,
                image: "https://picsum.photos/500"
            },
            payment: {
                type: "CreditTransfer",
                cardNumber: "453656527",
                cvc: "678",
                name: "Andrea Minato"
            },
            userInfo: {
                name: "Andrea",
                surname: "Minato",
                age: "18-25",
                email: "someuser@travel-mate.com",
                gender: "Male",
                phone: "3471318101"
            },
            notes: Math.random() > 0.5 ? 'A booking with some additional notes' : ''
        }
        return booking

    })

    return bookings


})
