export default defineEventHandler(({ node, context }) => {

    if (!context.params?.id) throw new Error("Missing ID");

    return null

})
