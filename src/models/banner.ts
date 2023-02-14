export interface Ibanner {
    pic:string;
    targetID:number;
    targetType:number;
    typeTitle: string;
    bannerId: number;
    [proName:string]: any; //其他未知的api返回的字段类型

}[]