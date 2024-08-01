require("dotenv").config()
// AUTH
const GOOGLE_AUTH_ID = process.env.GOOGLE_AUTH_ID!
const GOOGLE_AUTH_SECRET = process.env.GOOGLE_AUTH_SECRET!
const GITHUB_AUTH_ID = process.env.GITHUB_AUTH_ID!
const GITHUB_AUTH_SECRET = process.env.GITHUB_AUTH_SECRET!

const DATABASE_URL = process.env.DATABASE_URL
const DB_PROTOCOL = process.env.DB_PROTOCOL || "no_db_protocol"
const DB_USER = process.env.DB_USER || "no_db_user"
const DB_PASSWORD = process.env.DB_PASSWORD || "no_db_password"
const DB_DOMAIN = process.env.DB_DOMAIN || "no_db_domain"
const DB_PORT = process.env.DB_PORT || "no_db_port"
const DB_COLLECTION = process.env.DB_COLLECTION || "no_db_collection"
const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || "no_frontend_url"
const FRONTEND_DOMAIN =
	process.env.NEXT_PUBLIC_FRONTEND_DOMAIN || "no_frontend_domain"
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET!
const NEXTAUTH_URL = process.env.NEXTAUTH_URL
const BACKEND_URL =
	String(process.env.NEXT_PUBLIC_BACKEND_URL) || "no_backend_URL_set"
const BACKEND_PORT = process.env.BACKEND_PORT || "no_backend_port"
const SEED_ME = process.env.SEED_ME
const BASIC_USER_ROLE_NAME = process.env.BASIC_USER_ROLE_NAME!

const WORK_FACTOR = Number(process.env.WORK_FACTOR) || 13

const PERPAGE = Number(process.env.NEXT_PUBLIC_PERPAGE) || 20

const NODE_ENV = process.env.NODE_ENV

// FRONTEND
const SITE_TITLE = process.env.NEXT_PUBLIC_SITE_TITLE!
const SITE_DESC = process.env.NEXT_PUBLIC_SITE_DESC!

export const envs = {
	BASIC_USER_ROLE_NAME,
	GITHUB_AUTH_ID,
	GITHUB_AUTH_SECRET,
	GOOGLE_AUTH_ID,
	GOOGLE_AUTH_SECRET,
	PERPAGE,
	WORK_FACTOR,
	SITE_TITLE,
	DATABASE_URL,
	DB_PROTOCOL,
	DB_USER,
	DB_PASSWORD,
	DB_DOMAIN,
	DB_PORT,
	DB_COLLECTION,
	FRONTEND_URL,
	FRONTEND_DOMAIN,
	NEXTAUTH_SECRET,
	NEXTAUTH_URL,
	BACKEND_URL,
	BACKEND_PORT,
	SEED_ME,
	NODE_ENV,
}
