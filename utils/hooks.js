import {useEffect} from "react";

export function useTitle(newTitle) {
    let title
    if (process.browser) {
        title = document.title
    }
    useEffect(() => {
        if (newTitle instanceof String)
            document.title = newTitle
        return () => {
            document.title = title
        }
    })
}

export function useFavicon() {
    const rand = Math.floor(Math.random() * 10)
    console.log(rand)
    const favicon = () => <link rel="icon" href="/favicon/favicon-64x64.nj.ico"/>
    return favicon
}
