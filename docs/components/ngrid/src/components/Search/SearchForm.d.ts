type Props = {
    value?: string;
    hint?: string;
    disabled?: boolean;
    onSearch: (value: string) => void;
};
declare function SearchForm({ value, hint, disabled, onSearch, }: Props): import("react/jsx-runtime").JSX.Element;
export default SearchForm;
