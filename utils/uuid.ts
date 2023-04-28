
import crypto from "crypto"

export function generateUUID(){
    return crypto.randomBytes(16).toString("hex");
}
