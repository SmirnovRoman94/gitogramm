import { makeRequest } from "../request";

export const getTrandings = (lang = 'javascript') => {
    const params = new URLSearchParams();
    const weekMS = 7 * 24 * 60 * 60 * 1000;
    const weekAgo = new Date(Date.now() - weekMS);

    const formateDate = [
        weekAgo.getFullYear(),
        weekAgo.getMonth()+1 < 10 ? `0${weekAgo.getMonth()+1}` : weekAgo.getMonth()+1,
        weekAgo.getDate() < 10 ? `0${weekAgo.getDate()}` : weekAgo.getDate()
    ].join('-')

    params.append('order', 'desc')
    params.append('sort', 'stars')
    params.append('per_page', 30)
    params.append('q', `language:${lang} created:>${formateDate}`)

    return makeRequest({
        url: `search/repositories?${params}`
    })
}