import { list } from "@keystone-6/core"
import type { Lists } from ".keystone/types"
import { relationship, text } from "@keystone-6/core/fields"
import { permissions } from "../access"
import { permissionFields } from "./permissions"
import { allowAll } from "@keystone-6/core/access"
//? ts doesn't like the spread `...permissionFields` but he's just being whiny
// @ts-ignore
export const Role: Lists.Role = list({
	// access: allowAll,
	access: {
		operation: {
			query: () => true,
			// query: permissions.canManageRoles,
			create: permissions.canManageRoles,
			delete: permissions.canManageRoles,
			update: permissions.canManageRoles,
		},
	},
	// ui: {
	// 	hideCreate: (args) => !permissions.canManageRoles(args),
	// 	hideDelete: (args) => !permissions.canManageRoles(args),
	// 	isHidden: (args) => !permissions.canManageRoles(args),
	// 	listView: {
	// 		initialColumns: ["label", "assignedTo", "role"],
	// 		initialSort: { field: "label", direction: "DESC" },
	// 	},
	// },
	fields: {
		name: text({ validation: { isRequired: true }, isIndexed: "unique" }),
		label: text({ validation: { isRequired: true }, isIndexed: "unique" }),
		...permissionFields,
		assignedTo: relationship({
			ref: "User.role",
			many: true,
			ui: {
				itemView: { fieldMode: "edit" },
			},
		}),
	},
})
