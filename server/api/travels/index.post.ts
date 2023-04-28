import { ITravel } from "~/types/travels"


export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    console.log(body,event)

    return body

})
