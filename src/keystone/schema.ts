import { list } from "@keystone-6/core"
import { allowAll } from "@keystone-6/core/access"
import { text, timestamp } from "@keystone-6/core/fields"
import { document } from "@keystone-6/fields-document"

import { type Lists } from ".keystone/types"
import { User } from "./schemas/User"
import { Post } from "./schemas/Post"
import { Role } from "./schemas/Role"

export const lists = {
	User,
	Post,
	Role,
} satisfies Lists
