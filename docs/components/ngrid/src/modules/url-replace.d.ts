import { Entity, GridProps } from '../typings';
export declare function transformURLProps<T extends Entity>(props: GridProps<T>): GridProps<T>;
export declare function buildRequestUrl(urlTemplate: string, search?: string, queryParams?: string): string;
