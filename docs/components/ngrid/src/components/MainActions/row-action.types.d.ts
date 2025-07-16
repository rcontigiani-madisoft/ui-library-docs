import { Entity, UIAction } from '../../typings';
import { PropsWithChildren } from '../../../../../../node_modules/react';
export type ActionProps<T extends Entity> = PropsWithChildren<{
    action: UIAction;
    item: T;
    gridId: string;
    ariaLabel: string;
    errorTitle?: (item: T) => string;
}>;
