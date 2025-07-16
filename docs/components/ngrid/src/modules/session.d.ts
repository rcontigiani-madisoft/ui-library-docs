import { Entity, GridState } from '../typings';
type SavedState<T extends Entity> = Omit<GridState<T>, "status" | "data" | "count" | "selected">;
interface StateSession<T extends Entity> {
    restore: () => SavedState<T> | null;
    save: (state: GridState<T>) => void;
}
declare function createStateSession<T extends Entity>(id: string): StateSession<T>;
declare function createNoSession(): StateSession<any>;
export { createNoSession };
export default createStateSession;
