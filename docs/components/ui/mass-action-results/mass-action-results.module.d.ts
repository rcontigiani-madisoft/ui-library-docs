import { MassActionResponse, MassActionResults } from './mass-action-results.types';
export declare function isMassActionResponseFullSuccess(response: MassActionResponse): boolean;
export declare function parseMassActionResponse(response: MassActionResponse, unknownErrorFormatFn?: (id: string) => string): MassActionResults;
