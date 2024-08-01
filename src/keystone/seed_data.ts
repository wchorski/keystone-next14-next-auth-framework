import type {
	UserCreateInput,
	RoleCreateInput,
	PostCreateInput,
} from ".keystone/types"

export const user_seeddata: UserCreateInput[] = [
	{
		name: "Adam the Admin",
		email: "adam@mail.lan",
		password: "adam@mail.lan",
		authId: "adam@mail.lan",
	},
	{
		name: "Eddy the Editor",
		email: "eddy@mail.lan",
		password: "eddy@mail.lan",
		authId: "eddy@mail.lan",
	},
	{
		name: "Cristina the Client",
		email: "cristina@mail.lan",
		password: "cristina@mail.lan",
		authId: "cristina@mail.lan",
	},
]

export const roles_seedjson: RoleCreateInput[] = [
	{
		name: "admin",
		label: "Admin",
		canSeeOtherUsers: true,
		canManageUsers: true,
		canManageRoles: true,
		canManagePosts: true,
		assignedTo: {
			connect: {
				email: "adam@mail.lan",
			},
		},
	},
	{
		name: "editor",
		label: "Editor",
		canManagePosts: true,
		assignedTo: {
			connect: {
				email: "eddy@mail.lan",
			},
		},
	},
	{
		name: "client",
		label: "Client",
		assignedTo: {
			connect: {
				email: "cristina@mail.lan",
			},
		},
	},
]

export const posts_seedjson: PostCreateInput[] = [
	{
		title: "The Health Benefits of Berries",
		slug: "health-benefits-berries",
		dateCreated: "2023-05-01T10:00:00.000Z",
		dateModified: "2023-05-01T10:00:00.000Z",
		status: "PUBLIC",
		template: "FULLWIDTH",
		pinned: 5,
		featured_image:
			"https://res.cloudinary.com/dh5vxixzn/image/upload/v1682118263/cutefruit/banners/cf-banner-13_ywbvao.png",

		author: {
			connect: {
				email: "adam@mail.lan",
			},
		},
		excerpt:
			"Learn about the amazing health benefits of various types of berries, including blueberries, strawberries, and raspberries.",
		content: [
			{
				type: "paragraph",
				children: [
					{
						text: "Learn about the amazing health benefits of various types of berries, including blueberries, strawberries, and raspberries.",
					},
				],
			},
		],
	},
	{
		title: "The World of Exotic Fruits",
		slug: "exotic-fruits",
		dateCreated: "2023-06-15T12:30:00.000Z",
		dateModified: "2023-06-15T12:30:00.000Z",
		status: "PUBLIC",
		template: "FULLWIDTH",
		pinned: 1,
		featured_image:
			"https://res.cloudinary.com/dh5vxixzn/image/upload/v1682118262/cutefruit/banners/cf-banner-6_nsc9sd.png",

		author: {
			connect: {
				email: "adam@mail.lan",
			},
		},
		excerpt:
			"Take a journey to discover some of the most unique and exotic fruits from around the world, including jackfruit, durian, and mangosteen.",
		content: [
			{
				type: "paragraph",
				children: [
					{
						text: "Take a journey to discover some of the most unique and exotic fruits from around the world, including jackfruit, durian, and mangosteen.",
					},
				],
			},
		],
	},
	{
		title: "Fruit Smoothies: A Healthy and Delicious Option",
		slug: "fruit-smoothies-healthy-delicious",
		dateCreated: "2023-07-10T16:45:00.000Z",
		dateModified: "2023-07-10T16:45:00.000Z",
		status: "PUBLIC",
		template: "FULLWIDTH",
		pinned: 0,
		featured_image:
			"https://res.cloudinary.com/dh5vxixzn/image/upload/v1682118262/cutefruit/banners/cf-banner-3_uuufb0.png",

		author: {
			connect: {
				email: "adam@mail.lan",
			},
		},
		excerpt:
			"Find out how to make nutritious and tasty fruit smoothies using a variety of fruits, such as bananas, strawberries, and kiwis.",
		content: [
			{
				type: "paragraph",
				children: [
					{
						text: "Find out how to make nutritious and tasty fruit smoothies using a variety of fruits, such as bananas, strawberries, and kiwis.",
					},
				],
			},
		],
	},
	{
		title: "The Wonderful World of Apples",
		slug: "wonderful-world-apples",
		dateCreated: "2023-08-22T09:15:00.000Z",
		dateModified: "2023-08-22T09:15:00.000Z",
		status: "PUBLIC",
		template: "FULLWIDTH",
		pinned: 0,
		featured_image:
			"https://res.cloudinary.com/dh5vxixzn/image/upload/v1682118262/cutefruit/banners/cf-banner-9_kybrry.png",

		author: {
			connect: {
				email: "adam@mail.lan",
			},
		},
		excerpt:
			"Explore the diverse world of apples, from sweet and crisp varieties like Honeycrisp and Pink Lady to tart and tangy options like Granny Smith and Braeburn.",
		content: [
			{
				type: "paragraph",
				children: [
					{
						text: "Explore the diverse world of apples, from sweet and crisp varieties like Honeycrisp and Pink Lady to tart and tangy options like Granny Smith and Braeburn.",
					},
				],
			},
		],
	},
	{
		title: "The Beauty of Fruit Art",
		slug: "fruit-art",
		dateCreated: "2023-09-30T14:00:00.000Z",
		dateModified: "2023-09-30T14:00:00.000Z",
		status: "PUBLIC",
		template: "FULLWIDTH",
		pinned: 0,
		featured_image:
			"https://res.cloudinary.com/dh5vxixzn/image/upload/v1682118261/cutefruit/banners/cf-banner-8_muquqs.png",

		author: {
			connect: {
				email: "adam@mail.lan",
			},
		},
		excerpt:
			"Discover the creative and beautiful world of fruit art, from simple designs like watermelon baskets to intricate sculptures made from a variety of fruits.",
		content: [
			{
				type: "paragraph",
				children: [
					{
						text: "Discover the creative and beautiful world of fruit art, from simple designs like watermelon baskets to intricate sculptures made from a variety of fruits.",
					},
				],
			},
		],
	},
	{
		title: "Fruity Suprise",
		slug: "fruity-suprise",
		dateCreated: "2022-08-24T14:00:00.000Z",
		dateModified: "2022-08-24T14:00:00.000Z",
		status: "PUBLIC",
		template: "FULLWIDTH",
		pinned: 0,
		featured_image:
			"https://res.cloudinary.com/dh5vxixzn/image/upload/v1682118260/cutefruit/banners/cf-banner-16_znh0zo.jpg",

		author: {
			connect: {
				email: "adam@mail.lan",
			},
		},
		excerpt:
			"A delightful suprise in every box. Get to know your fruity friends.",
		content: [
			{
				type: "paragraph",
				children: [
					{
						text: "A delightful suprise in every box. Get to know your fruity friends.",
					},
				],
			},
		],
	},
	{
		title: "Exploring the World of Exotic Fruits",
		slug: "exploring-exotic-fruits",
		dateCreated: "2022-08-24T14:00:00.000Z",
		dateModified: "2023-04-17T14:00:00.000Z",
		status: "PUBLIC",
		template: "FULLWIDTH",
		pinned: 0,
		featured_image:
			"https://res.cloudinary.com/dh5vxixzn/image/upload/v1682118261/cutefruit/banners/cf-banner-4_a1mzp8.png",

		author: {
			connect: {
				email: "adam@mail.lan",
			},
		},
		excerpt:
			"Have you ever wondered what other fruits are out there beyond the ones you see at your local grocery store? There's a whole world of exotic fruits waiting to be discovered and tasted!",
		content: [
			{
				type: "paragraph",
				children: [
					{
						text: "Have you ever wondered what other fruits are out there beyond the ones you see at your local grocery store? There's a whole world of exotic fruits waiting to be discovered and tasted!",
					},
				],
			},
		],
	},
	{
		title: "The Sweet and Sour World of Citrus Fruits",
		slug: "sweet-sour-citrus-fruits",
		dateCreated: "2023-04-17T14:00:00.000Z",
		dateModified: "2024-02-28T14:00:00.000Z",
		status: "PUBLIC",
		template: "FULLWIDTH",
		pinned: 0,
		featured_image:
			"https://res.cloudinary.com/dh5vxixzn/image/upload/v1682118260/cutefruit/banners/cf-banner-15_w0csbb.jpg",

		author: {
			connect: {
				email: "adam@mail.lan",
			},
		},
		excerpt:
			"Discover the delicious and tangy world of citrus fruits, from lemons and limes to oranges and grapefruits.",
		content: [
			{
				type: "paragraph",
				children: [
					{
						text: "Discover the delicious and tangy world of citrus fruits, from lemons and limes to oranges and grapefruits.",
					},
				],
			},
		],
	},
	{
		title: "Fruit and Cheese Pairings for a Perfect Charcuterie Board",
		slug: "fruit-cheese-pairings-charcuterie-board",
		dateCreated: "2024-02-28T14:00:00.000Z",
		dateModified: "2024-02-28T14:00:00.000Z",
		status: "PUBLIC",
		template: "FULLWIDTH",
		pinned: 0,
		featured_image:
			"https://res.cloudinary.com/dh5vxixzn/image/upload/v1682118260/cutefruit/banners/cf-banner-14_opozkm.jpg",

		author: {
			connect: {
				email: "adam@mail.lan",
			},
		},
		excerpt:
			"Take your charcuterie board to the next level with these delicious fruit and cheese pairings, featuring combinations like figs and goat cheese and apples and cheddar.",
		content: [
			{
				type: "paragraph",
				children: [
					{
						text: "Take your charcuterie board to the next level with these delicious fruit and cheese pairings, featuring combinations like figs and goat cheese and apples and cheddar.",
					},
				],
			},
		],
	},
	{
		title: "The Beauty and Benefits of Dragon Fruit",
		slug: "dragon-fruit-beauty-benefits",
		dateCreated: "2024-01-12T09:15:00.000Z",
		dateModified: "2024-01-12T09:15:00.000Z",
		status: "PUBLIC",
		template: "FULLWIDTH",
		pinned: 0,
		featured_image:
			"https://res.cloudinary.com/dh5vxixzn/image/upload/v1682118260/cutefruit/banners/cf-banner-14_opozkm.jpg",

		author: {
			connect: {
				email: "adam@mail.lan",
			},
		},
		excerpt:
			"Discover the unique appearance and nutritional benefits of dragon fruit, also known as pitaya, and learn how to incorporate it into your diet.",
		content: [
			{
				type: "paragraph",
				children: [
					{
						text: "Discover the unique appearance and nutritional benefits of dragon fruit, also known as pitaya, and learn how to incorporate it into your diet.",
					},
				],
			},
		],
	},
	{
		title: "The World of Tropical Fruits",
		slug: "tropical-fruits",
		dateCreated: "2023-12-05T16:45:00.000Z",
		dateModified: "2023-12-05T16:45:00.000Z",
		status: "PUBLIC",
		template: "FULLWIDTH",
		pinned: 0,
		featured_image:
			"https://res.cloudinary.com/dh5vxixzn/image/upload/v1682118261/cutefruit/banners/cf-banner-4_a1mzp8.png",

		author: {
			connect: {
				email: "adam@mail.lan",
			},
		},
		excerpt:
			"Explore the amazing diversity of tropical fruits, including mangos, pineapples, and papayas, and learn about their health benefits and culinary uses.",
		content: [
			{
				type: "paragraph",
				children: [
					{
						text: "Explore the amazing diversity of tropical fruits, including mangos, pineapples, and papayas, and learn about their health benefits and culinary uses.",
					},
				],
			},
		],
	},
	{
		title: "The Best Fruits for a Summer Picnic",
		slug: "fruits-summer-picnic",
		dateCreated: "2023-11-20T12:30:00.000Z",
		dateModified: "2023-12-05T16:45:00.000Z",
		status: "PUBLIC",
		template: "FULLWIDTH",
		pinned: 0,
		featured_image:
			"https://res.cloudinary.com/dh5vxixzn/image/upload/v1682118262/cutefruit/banners/cf-banner-3_uuufb0.png",

		author: {
			connect: {
				email: "adam@mail.lan",
			},
		},
		excerpt:
			"Get ready for your next summer picnic with this guide to the best fruits to pack, including watermelon, cherries, and grapes.",
		content: [
			{
				type: "paragraph",
				children: [
					{
						text: "Get ready for your next summer picnic with this guide to the best fruits to pack, including watermelon, cherries, and grapes.",
					},
				],
			},
		],
	},
	{
		title: "The Many Uses of Pomegranates",
		slug: "uses-pomegranates",
		dateCreated: "2023-10-15T10:00:00.000Z",
		dateModified: "2023-12-05T16:45:00.000Z",
		status: "PUBLIC",
		template: "FULLWIDTH",
		pinned: 0,
		featured_image:
			"https://res.cloudinary.com/dh5vxixzn/image/upload/v1682118261/cutefruit/banners/cf-banner-5_hjsqjv.png",

		author: {
			connect: {
				email: "adam@mail.lan",
			},
		},
		excerpt:
			"Discover the many culinary and medicinal uses of pomegranates, including how to juice them and use their seeds in recipes.",
		content: [
			{
				type: "paragraph",
				children: [
					{
						text: "Discover the many culinary and medicinal uses of pomegranates, including how to juice them and use their seeds in recipes.",
					},
				],
			},
		],
	},
]
