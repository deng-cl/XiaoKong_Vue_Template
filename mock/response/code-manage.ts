/** 响应数据基本结构 */
export interface IResponse {
    code: ResponseCode
    msg: string
    data: any
    ok: boolean
}

/** 状态码枚举类型 */
export enum ResponseCode {
    SUCCESS = 0,
    Fail = -1,
    SERVER_ERROR = 500,
}

/** 状态码对应响应基本信息的映射 */
export const responseMap: Map<ResponseCode, IResponse> = new Map([
    [ResponseCode.SUCCESS, genResponseBaseTemp(ResponseCode.SUCCESS, 'Success', null, true)],
    [ResponseCode.Fail, genResponseBaseTemp(ResponseCode.Fail, 'Failed', null, false)],
])

/** 生成响应基本结构 */
export function genResponseBaseTemp(code: ResponseCode, msg: string, data: any, ok: boolean): IResponse {
    return {
        code,
        msg,
        data,
        ok,
    }
}

/** 更具 code 获取对应响应信息 */
export function getResponseBaseTempByCode(code: ResponseCode): IResponse {
    let response = responseMap.get(code)
    if (!response) {
        response = genResponseBaseTemp(ResponseCode.SERVER_ERROR, 'System: response system error', null, false)
    }
    return response
}
