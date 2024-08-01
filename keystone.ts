import { config } from "@keystone-6/core"
import { lists } from "./src/keystone/schema"
import { seedDatabase } from "./src/keystone/seed"
import type { Context } from ".keystone/types"
import { nextAuthSessionStrategy } from "./session"

export default config({
	db: {
		provider: "sqlite",
		url: `file:${process.cwd()}/data.db`, // next.js requires an absolute path for sqlite
		onConnect: async (context: Context) => {
			await seedDatabase(context)
		},

		// // WARNING: this is only needed for our monorepo examples, dont do this
		// prismaClientPath: 'node_modules/.myprisma/client',
	},
	server: {
		port: Number(process.env.BACKEND_PORT) || 3001,
		cors: { origin: ["http://localhost:3000"], credentials: true },
	},
	lists,
	ui: {
		// the following api routes are required for nextauth.js
		publicPages: [
			"/api/auth/csrf",
			"/api/auth/signin",
			"/api/auth/callback",
			"/api/auth/session",
			"/api/auth/providers",
			"/api/auth/signout",
			"/api/auth/error",

			//! each provider will need a separate callback and signin page listed here
			"/api/auth/signin/github",
			"/api/auth/callback/github",
			"/api/auth/signin/credentials",
			"/api/auth/callback/credentials",
		],

		// adding page middleware ensures that users are redirected to the signin page if they are not signed in.
		pageMiddleware: async ({ wasAccessAllowed }) => {
			if (wasAccessAllowed) return

			return {
				kind: "redirect",
				to: "/api/auth/signin",
			}
		},
	},
	// commenting blow line out stops the `Error: <Html> should not be imported outside of pages/_document.` and allows a successful `yarn keystone build`
	session: nextAuthSessionStrategy,
})
