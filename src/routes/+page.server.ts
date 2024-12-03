import { pds, profile } from "$lib/identity";
import { error } from '@sveltejs/kit';

interface PostSummary {
    title: string,
    rkey: string,
    createdAt: Date
}

// TODO: Maybe also add the option to show "url" level records as an env setting.
export async function load({ params }) {
    const rawResponse = await fetch(`${pds}/xrpc/com.atproto.repo.listRecords?repo=${profile.did}&collection=com.whtwnd.blog.entry`)
    try {
        const response = await rawResponse.json()
        const rx = /\/.{13}$/;
        let posts: PostSummary[] = [];
        for (let record of response["records"]) {
            const matches = rx.exec(record["uri"])
            if (matches && matches[0] && record["value"] && record["value"]["visibility"] === "public") {
                posts.push({
                    title: record["value"]["title"],
                    rkey: matches[0],
                    createdAt: new Date(record["value"]["createdAt"])
                })
            }
        }
        return { posts };
    } catch {
        //ignored
    }
    return {posts: []};
}