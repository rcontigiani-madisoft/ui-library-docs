import { ActionConfigs, Entity, RowActions } from '../../typings';
type Props<T> = {
    item: T;
    gridId?: string;
    actionConfigs: ActionConfigs;
    urlParams?: string;
    rowActions: RowActions;
};
declare function MainActionsCell<T extends Entity>({ item, gridId, actionConfigs, rowActions, }: Props<T>): import("react/jsx-runtime").JSX.Element;
export default MainActionsCell;
