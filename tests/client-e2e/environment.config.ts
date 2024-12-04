//@ts-check
const path = require("path")
const dotenv = require("dotenv")


dotenv.config({ path: path.resolve(__dirname, ".env") });

const {
    E2E_BASE_URL,
    E2E_ADMIN_USERNAME,
    E2E_ADMIN_PASSWORD
} = process.env

export const BASE_URL: string = E2E_BASE_URL;
export const ADMIN_USERNAME: string = E2E_ADMIN_USERNAME;
export const ADMIN_PASSWORD: string = E2E_ADMIN_PASSWORD;
