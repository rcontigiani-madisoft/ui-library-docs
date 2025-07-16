import { OptionValue } from '../../../typings';
import { FilterComponent } from '../filters-factory';
import * as React from "react";
type NullableOption = OptionValue | null;
type Props = Pick<React.ComponentProps<FilterComponent<string>>, "value" | "error" | "onChangeValue"> & {
    id: string;
};
declare const BetweenDatesFilter: React.FC<Props>;
export declare function getStartOption(option: NullableOption): NullableOption;
export default BetweenDatesFilter;
