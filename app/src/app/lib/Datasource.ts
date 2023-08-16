import fetch, { RequestInit } from "node-fetch";

export function doGet(endpoint: string) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`
    return fetch(url).then((response:any) => response.json()).catch((e) => {
        console.log('Error on doGet', e);
        return e
    });
}

export function doPost(endpoint: string, data:FormData|string) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`
    let options: RequestInit = {
        "method" : "POST",
        "body": data,
        "headers": {
            "content-type" : "application/json"
        }
    }
    return fetch(url, options).then((response:any) => response.json()).catch((e) => {
        console.log('Error on doGet', e);
        return e
    });
}