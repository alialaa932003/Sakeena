import { useQuery } from "@tanstack/react-query";
import { POSTS_QUERY_KEYS } from "../constants/posts-query-keys";
import { getAllPosts } from "../services/getAllPosts";

export function useGetAllPosts() {
	return useQuery({
		queryKey: [POSTS_QUERY_KEYS.POSTS],
		queryFn: getAllPosts,
	});
}
