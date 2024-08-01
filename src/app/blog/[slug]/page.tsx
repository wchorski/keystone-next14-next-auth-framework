import React from "react"
import type { Lists } from ".keystone/types"
import { keystoneContext } from "../../../keystone/context"
import { DocumentRender } from "../../DocumentRender"

type Props = {
	params: {
		slug: string | null | undefined
	}
	searchParams: { [key: string]: string | string[] | undefined }
}

export default async function BlogByIdPage({ params }: Props) {
	// WARNING: this does nothing for now
	//   you will probably use getServerSession from 'next/auth'
	//   https://next-auth.js.org/configuration/nextjs#in-app-directory
	const post = (await keystoneContext.sudo().query.Post.findOne({
		where: { slug: params.slug },
		query: `
      id
      title
      excerpt
      content {
        document
      }
    `,
	})) as Lists.Post.Item
	if (!post) return <p>post not found</p>

	return (
		<>
			<h1>{post.title}</h1>
			<p>
				<small>id: {post.id}</small>
			</p>

			<h5>excerpt:</h5>
			<p>{post.excerpt}</p>

			<h5>content:</h5>
			{/* @ts-ignore */}
			<DocumentRender document={post.content.document} />
		</>
	)
}
