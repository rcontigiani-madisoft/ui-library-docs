import { BoolFormatTypes } from '../../typings';
type Props = {
    value: boolean;
    type?: BoolFormatTypes;
};
declare function BooleanFormatter({ value, type }: Props): "Sì" | "No" | import("react/jsx-runtime").JSX.Element;
export default BooleanFormatter;
