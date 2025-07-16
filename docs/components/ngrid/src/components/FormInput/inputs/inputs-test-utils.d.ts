import { FormInputProps } from '../FormInput';
import * as React from "react";
export declare function renderValueInput(InputComponent: React.FC<FormInputProps>, props: Omit<FormInputProps, "id">): void;
export declare function getTestForm(): HTMLElement;
export declare function getTestInput(): HTMLElement;
export declare function getTestSearchQuery(value: string): string;
export declare function spyOnFetchColorOptions(): void;
