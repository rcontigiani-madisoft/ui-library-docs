import { GridProps } from '../../typings';
type GlobalActionsProps = Pick<GridProps<any>, "newItemLink" | "extraLinks" | "extraElements" | "actionConfigs" | "LinkComponent" | "urlParams" | "queryParams">;
declare function GlobalActions({ newItemLink, extraLinks, extraElements, actionConfigs, LinkComponent, urlParams, queryParams, }: GlobalActionsProps): import("react/jsx-runtime").JSX.Element | null;
export default GlobalActions;
