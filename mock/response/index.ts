import { type IResponse, ResponseCode, getResponseBaseTempByCode } from './code-manage'

/** 通用响应信息获取函数 */
export const responseWrapper = (code: ResponseCode, data: any = null): IResponse => {
    const response = getResponseBaseTempByCode(code)
    response.data = data
    return response
}

/** 成功响应抽取（常用） */
export const responseWrapperSuccess = (data: any = null): IResponse => {
    return responseWrapper(ResponseCode.SUCCESS, data)
}

/** 失败响应抽取（常用） */
export const responseWrapperFailed = (data: any = null): IResponse => {
    return responseWrapper(ResponseCode.Fail, data)
}
