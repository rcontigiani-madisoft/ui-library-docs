import { OptionValue } from '../../../typings';
import * as React from "react";
type NullableOption = OptionValue | null;
type OnChangeHandler = (newValue: OptionValue | null) => void;
type DateOptionComponentProps = {
    value: NullableOption;
    onChange: OnChangeHandler;
};
declare function withLocaleDateFormat<Props extends DateOptionComponentProps>(Component: React.FC<Props>): React.FC<Props>;
export default withLocaleDateFormat;
