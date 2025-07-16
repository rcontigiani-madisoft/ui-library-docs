import { Entity, GridProps } from '../../typings';
type Props<T extends Entity> = Pick<GridProps<T>, "onSelectionChange">;
declare function RowSelectionHeader<T extends Entity>({ onSelectionChange }: Props<T>): import("react/jsx-runtime").JSX.Element;
export default RowSelectionHeader;
