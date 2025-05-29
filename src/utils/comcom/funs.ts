type CurryFn<T extends any[], R> = T extends [infer First, ...infer Rest] ? (arg: First) => CurryFn<Rest, R> : R
/** 函数柯里化 */
export function curry<T extends any[], R>(fn: (...args: T) => R): CurryFn<T, R> {
    return function _curry(...args: any[]): any {
        return args.length >= fn.length ? fn(...(args as T)) : (...nextArgs: any[]) => _curry(...args, ...nextArgs)
    } as CurryFn<T, R>
}
