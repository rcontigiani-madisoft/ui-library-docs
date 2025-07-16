import { MassActionResults } from './mass-action-results.types';
type Props = {
    results: MassActionResults;
    successMessageExtractor?: (count: number) => string;
};
export declare function MassActionResultsView({ results: { successCount, info, warnings, errors }, successMessageExtractor, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
