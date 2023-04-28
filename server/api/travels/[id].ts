import { ITravel } from "~/types/travels"
import { getDateValue } from "~/utils/DateTime";
import { generateUUID } from "~/utils/uuid";

export default defineEventHandler(({ node, context }) => {

    if (!context.params?.id) throw new Error("Missing ID");


    const travel: ITravel = {
        id: context.params?.id,
        name: `Travel #666`,
        description: `The best travel in the world #88`,
        arrival: getDateValue(new Date()),
        departure: getDateValue(new Date()),
        price: 50000,
        rating: 65,
        image: "https://picsum.photos/500"
    }


    return travel




})
