import { Entity, UIAction } from '../../typings';
type ActionMenuProps<T extends Entity> = {
    actions: UIAction[];
    item: T;
    gridId: string;
    primaryColumn: string;
    errorTitle?: (item: T) => string;
};
declare function ActionMenu<T extends Entity>({ actions, item, gridId, primaryColumn, }: ActionMenuProps<T>): import("react/jsx-runtime").JSX.Element | null;
export default ActionMenu;
