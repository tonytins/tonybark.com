import {env} from "$env/dynamic/public"

async function safeFetch(url: string) {
    const response = await fetch(url)
    if (!response.ok) throw new Error(response.status + ":" + response.statusText)
    return await response.json();
}

interface Profile {
    avatar: string,
    banner: string,
    displayName: string,
    did: string,
    handle: string,
    description: string,
    about: string | undefined
}

if (!env.PUBLIC_HANDLE) {
    throw new Error("Expected PUBLIC_HANDLE environment variable.")
}

const getProfile = await safeFetch(`https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=${env.PUBLIC_HANDLE}`)
export const profile: Profile = {
    avatar: getProfile["avatar"],
    banner: getProfile["banner"],
    displayName: getProfile["displayName"],
    did: getProfile["did"],
    handle: getProfile["handle"],
    description: getProfile["description"],
    about: env.PUBLIC_ABOUT,
}
export const avatar: string = getProfile["avatar"]
let split = profile.did.split(":")
let diddoc;
if (split[0] === "did") {
    if (split[1] === "plc") {
        diddoc = await safeFetch(`https://plc.directory/${profile.did}`)
    } else if (split[1] === "web") {
        diddoc = await safeFetch("https://" + split[2] + "/.well-known/did.json")
    } else {
        throw new Error("Invalid DID, Not blessed method")
    }
} else {
    throw new Error("Invalid DID, malformed")
}
let pdsurl;
for (let service of diddoc["service"]) {
    if (service["id"] === "#atproto_pds") {
        pdsurl = service["serviceEndpoint"]
    }
}
if (!pdsurl) {
    throw new Error("DID lacks #atproto_pds service")
}
export const pds: string = pdsurl;