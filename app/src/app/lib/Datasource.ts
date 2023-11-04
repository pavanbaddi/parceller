import _ from "lodash";
import fetch, { RequestInit, BodyInit } from "node-fetch";

export function doGet(endpoint: string) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`
    return fetch(url).then((response: any) => {
        return response.json()
    }).catch((e:any) => {
        console.log('Error on doGet', e);
        throw e;
    });
}

export function doPost(endpoint: string, data:string) {
    let body: BodyInit = data
    const url = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`
    let options: RequestInit = {
        "method" : "POST",
        "body": body,
        "headers": {
            "content-type" : "application/json"
        }
    }
    return fetch(url, options).then((response:any) => response.json()).catch((e:any) => {
        console.log('Error on doPost', e);
        return e
    });
}