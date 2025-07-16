import { DataAction } from '../../../typings';
import { ActionParams, OnDataCallback } from '../bulk-actions';
export declare function executeAjaxMass(onData: OnDataCallback, action: DataAction, ids: string[], params?: ActionParams | null): void;
