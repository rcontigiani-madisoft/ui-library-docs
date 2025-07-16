import { formatDate } from '../../utils/date';
type Props = {
    date: string | null;
    format: Parameters<typeof formatDate>["1"];
};
declare function DateTimeFormatter({ date, format }: Props): import("react/jsx-runtime").JSX.Element;
export default DateTimeFormatter;
