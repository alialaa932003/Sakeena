import type { Post } from "../types/post";

type PostCardProps = {
	post: Post;
};

export function PostCard({ post }: PostCardProps) {
	return (
		<article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
			<header className="mb-2">
				<h3 className="text-lg font-semibold text-slate-900">{post.title}</h3>
				{post.authorName ? (
					<p className="text-sm text-slate-500">By {post.authorName}</p>
				) : null}
			</header>
			<p className="text-slate-700">{post.body}</p>
		</article>
	);
}
