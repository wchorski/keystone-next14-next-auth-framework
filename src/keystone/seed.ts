import type {
	Lists,
	Context,
	UserCreateInput,
	RoleCreateInput,
	PostCreateInput,
} from ".keystone/types"
import { user_seeddata, roles_seedjson, posts_seedjson } from "./seed_data"

const seedUsers = async (context: Context) => {
	const { db } = context.sudo()
	const rawJSONData = JSON.stringify(user_seeddata)
	const seedUsers: any[] = JSON.parse(rawJSONData)
	const usersAlreadyInDatabase = await db.User.findMany({
		where: {
			email: { in: seedUsers.map((user) => user.email) },
		},
	})
	const usersToCreate = seedUsers.filter(
		(seedUser) =>
			!usersAlreadyInDatabase.some(
				(u: UserCreateInput) => u.email === seedUser.email
			)
	)

	usersToCreate.map((obj) => {
		console.log(" + USER: " + obj.email)
	})

	await db.User.createMany({
		data: usersToCreate,
	})
}

const seedRoles = async (context: Context) => {
	const { db } = context.sudo()

	const seedRoles = roles_seedjson

	const objsAlreadyInDatabase = await db.Role.findMany({
		where: {
			name: { in: seedRoles.map((i) => i.name) as string[] },
		},
	})
	const itemsToCreate = seedRoles.filter(
		(seedRole) =>
			!objsAlreadyInDatabase.some(
				(u: RoleCreateInput) => u.name === seedRole.name
			)
	)

	itemsToCreate.map((obj) => {
		console.log(" + Role: " + obj.name)
	})

	await db.Role.createMany({
		data: itemsToCreate,
	})
}

// seed posts and connect with users
const seedPosts = async (context: Context) => {
	const { db } = context.sudo()
	const seedPosts = posts_seedjson
	const postsAlreadyInDatabase = await db.Post.findMany({
		where: {
			slug: { in: seedPosts.map((post) => post.slug) as string[] },
		},
	})

	const postsToCreate = seedPosts.filter(
		(seedPost) => !postsAlreadyInDatabase.some((p) => p.slug === seedPost.slug)
	)

	postsToCreate.map((obj) => {
		console.log(" + Post: " + obj.slug)
	})

	await db.Post.createMany({
		data: postsToCreate.map((p: PostCreateInput) => ({
			...p,
			// @ts-ignore
			content: p?.content?.document,
		})),
	})
}

export const seedDatabase = async (context: Context) => {
	console.log(`🌱🌱🌱 Seeding database... 🌱🌱🌱`)
	await seedUsers(context)
	await seedRoles(context)
	await seedPosts(context)
	console.log(`🌱🌱🌱 Seeding database completed. 🌱🌱🌱`)
}
