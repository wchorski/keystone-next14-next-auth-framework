import React from "react"
import { keystoneContext } from "../keystone/context"
import Link from "next/link"
import { LoginForm } from "@components/LoginForm"
import { getServerSession } from "next-auth"
import { getProviders } from "next-auth/react"
import { nextAuthOptions } from "@/session"
import SignOutButton from "@components/SignOutButton"
import { envs } from "@/envs"
import { user_seeddata } from "@ks/seed_data"

type Props = {
	searchParams: {
		reset: string
		error: string
		callbackUrl?: string
	}
}

export default async function HomePage({ searchParams }: Props) {
	// WARNING: this does nothing for now
	//   you will probably use getServerSession from 'next/auth'
	//   https://next-auth.js.org/configuration/nextjs#in-app-directory
	const { error, callbackUrl } = searchParams
	const session = await getServerSession(nextAuthOptions)
	const providers = await getProviders()

	const users = await keystoneContext.withSession(session).query.User.findMany({
		query: "id name email",
	})
	const posts = await keystoneContext.withSession(session).query.Post.findMany({
		query: "id title slug",
	})
	const roles = await keystoneContext.withSession(session).query.Role.findMany({
		query: "id name",
	})

	return (
		<section>
			{callbackUrl ? (
				<p className="error">
					{" "}
					You must login to access the Keystone{" "}
					<Link href={envs.BACKEND_URL}>Admin page</Link>{" "}
				</p>
			) : (
				<p>
					<Link href={envs.BACKEND_URL}>
						{" "}
						Take me to the Keystone Admin page
					</Link>{" "}
				</p>
			)}
			<h1>{envs.SITE_TITLE}</h1>

			<div>
				<div>
					<h2>Roles:</h2>
					<ol>
						{roles.map((r: any) => {
							return (
								<li key={r.id}>
									<span>{r.name}</span>
								</li>
							)
						})}
					</ol>
				</div>

				<div>
					<p>try these different loggins</p>
					<table>
						<thead>
							<tr>
								<td>role</td>
								<td>email</td>
								<td>password</td>
								<td>description</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Admin</td>
								<td>adam@mail.lan</td>
								<td>adam@mail.lan</td>
								<td>can see all users</td>
							</tr>
							<tr>
								<td>Editor</td>
								<td>eddy@mail.lan</td>
								<td>eddy@mail.lan</td>
								<td>can only see self</td>
							</tr>
							<tr>
								<td>Client</td>
								<td>cristina@mail.lan</td>
								<td>cristina@mail.lan</td>
								<td>can only see self</td>
							</tr>
							<tr>
								<td>Not logged in</td>
								<td>n/a</td>
								<td>n/a</td>
								<td>Will see no users listed</td>
							</tr>
						</tbody>
					</table>
				</div>

				{session ? (
					<div className="callout blue">
						<p>
							{" "}
							currently logged in with email{" "}
							<strong> {session.user.email} </strong>
							<SignOutButton />
						</p>
						<pre>
							<h5>session:</h5>
							{JSON.stringify(session, null, 2)}
						</pre>
					</div>
				) : (
					<LoginForm providers={providers} />
				)}

				<h2>Users:</h2>
				{users.length > 0 ? (
					<>
						<ol>
							{users.map((u: any) => (
								<li key={u.id}>
									<span>
										{u.name}, {u.email}{" "}
									</span>
								</li>
							))}
						</ol>
					</>
				) : (
					<p className="callout red"> no users to list </p>
				)}
			</div>
			<div>
				<h2>Posts:</h2>
				{session ? (
					<ol>
						{posts.map((p: any) => {
							return (
								<li key={p.id}>
									<Link href={`/blog/${p.slug}`}>{p.title}</Link>
								</li>
							)
						})}
					</ol>
				) : (
					<p className="callout error"> Must be logged in to view posts </p>
				)}
			</div>
		</section>
	)
}
