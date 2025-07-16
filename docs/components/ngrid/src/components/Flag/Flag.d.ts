import { TextAlertProps } from '../Alert/TextAlert';
export type FlagState = Omit<TextAlertProps, "onClose"> & {
    id: string;
};
type Props = {
    flags: FlagState[];
    onClose: (id: string | null) => void;
};
declare function Flag({ flags, onClose }: Props): import("react/jsx-runtime").JSX.Element | null;
export default Flag;
