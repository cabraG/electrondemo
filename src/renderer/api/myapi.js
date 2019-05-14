import request from '@/utils/request'

export function getList(params) {
    return request({
        url: '/PLCTagSelect',
        method: 'get',
        params
    })

    
}

export function HistoryValueSelect(data) {
    return request({
        url: '/HistoryValueSelect',
        method: 'post',
        data
    })
    
}