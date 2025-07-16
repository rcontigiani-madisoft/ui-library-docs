import { FormatParams } from '../typings';
export declare const DURATION_REGEX: RegExp;
export declare function formatDuration(minutes: number, params?: FormatParams): string;
export declare const parseDuration: (duration: string) => number;
