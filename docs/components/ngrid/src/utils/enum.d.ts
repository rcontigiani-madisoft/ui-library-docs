export type Enum = {
    value: string;
    description: string;
};
export declare function isEnum(value: unknown): value is Enum;
