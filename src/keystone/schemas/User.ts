import { list } from "@keystone-6/core"
import type { Lists } from ".keystone/types"
import {
	checkbox,
	relationship,
	text,
	timestamp,
} from "@keystone-6/core/fields"
var bcrypt = require("bcryptjs")
import { permissions, isLoggedIn, rules } from "../access"

import { allowAll } from "@keystone-6/core/access"
import { envs } from "../../../envs"

export const User: Lists.User = list({
	// access: allowAll,
	access: {
		filter: {
			//todo why is this causing type issue, it doesn't throw type issues in other repos?
			query: rules.canManageUsers,
			// query: () => true,
			update: () => true,
			delete: () => true,
		},
		operation: {
			create: () => true,
			query: () => true,
			update: () => true,
			delete: () => true,
		},
	},

	ui: {
		// hide backend from non admins
		// hideCreate: args => !permissions.canManageUsers(args),
		listView: {
			initialColumns: ["name", "nameLast", "email", "role"],
			initialSort: { field: "dateCreated", direction: "DESC" },
		},
	},

	// this is the fields for our User list
	fields: {
		// by adding isRequired, we enforce that every User should have a name
		//   if no name is provided, an error will be displayed
		name: text({ validation: { isRequired: true } }),
		email: text({
			validation: { isRequired: true },
			isIndexed: "unique",
		}),
		password: text({
			access: {
				read: () => true,
			},
			hooks: {
				beforeOperation: async ({ operation, resolvedData }) => {
					if (operation === "create" || operation === "update") {
						if (!resolvedData?.password) return console.log("no password set")
						const hash = await bcrypt.hash(
							resolvedData?.password,
							envs.WORK_FACTOR
						)
						resolvedData.password = hash
					}
				},
			},
		}),
		authId: text({ isIndexed: "unique", validation: { isRequired: true } }),
		stripeCustomerId: text({ isIndexed: true }),
		image: text({}),
		dateCreated: timestamp({ defaultValue: { kind: "now" } }),
		dateModified: timestamp({
			defaultValue: { kind: "now" },
			hooks: {
				beforeOperation({ resolvedData, operation }) {
					console.log("### dateMod beforeOperation")

					if (operation === "create" || operation === "update") {
						console.log("### WE updating")
						console.log({ resolvedData })

						resolvedData.dateModified = new Date().toISOString()
					}
				},
			},
		}),

		role: relationship({
			ref: "Role.assignedTo",
			// todo add access control
			// access: {
			// 	create: permissions.canManageUsers,
			// 	update: permissions.canManageUsers,
			// },
			ui: {
				createView: { fieldMode: "hidden" },
				itemView: { fieldMode: "hidden" },
			},
		}),
		posts: relationship({ ref: "Post.author", many: true }),
	},
	hooks: {},
})
