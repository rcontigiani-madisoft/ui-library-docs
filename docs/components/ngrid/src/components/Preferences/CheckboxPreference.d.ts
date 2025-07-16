import * as React from 'react';
type CheckboxPreferenceProps = {
    label: string;
    value: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    description?: string;
};
declare const CheckboxPreference: React.FC<CheckboxPreferenceProps>;
export default CheckboxPreference;
