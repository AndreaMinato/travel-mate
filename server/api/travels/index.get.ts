import { ITravel } from "~/types/travels"
import { getDateValue } from "~/utils/DateTime";
import { generateUUID } from "~/utils/uuid";

export default defineEventHandler(({ node }) => {

console.log("son qui")

    let travels: Array<ITravel> = Array.from({ length: 5 }, (_, idx) => {

        return {
            id: generateUUID(),
            name: `Travel #${idx}`,
            description: `The best travel in the world #${idx}`,
            arrival: getDateValue(new Date()),
            departure: getDateValue(new Date()),
            price: 50000,
            rating: 65,
            image: "https://picsum.photos/500"
        }


    })

    const url = new URL(node.req.url!, `http://${node.req.headers.host}`)

    if (url.searchParams.has('name')) {
        const name = url.searchParams.get('name') ?? ""
        travels = travels.filter(travel => travel.name.includes(name))
    }

    return travels




})
