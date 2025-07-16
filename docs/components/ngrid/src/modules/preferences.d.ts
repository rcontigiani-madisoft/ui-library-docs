import { GridColumn } from '../typings';
export declare function updateColumnPreference<T>(columns: GridColumn<T>[], preference?: Pick<GridColumn<T>, "field" | "hidden" | "pinned">): GridColumn<T>[];
/**
 * Aggiorna la lista delle colonne che devono mostrare la UI di caricamento.
 * In questa lista vengono aggiunti i field delle colonne i cui dati non sono
 * presenti in memoria. Per appurare che il dato sia persente controlliamo il
 * campo associato a field nell'oggetto in memoria che rappresenta una cella della grid
 *
 * @param preference La preferenza impostata per la colonna
 * @param gridData Il dato di una cella della grid da comparare per verificare l'esistenza dei dati della colonna
 * @param pendingColumns La lista delle colonne che sono visibili con UI di caricamento
 */
export declare function updatePendingColumns<T>(preference: Pick<GridColumn<T>, "field" | "hidden" | "pinned">, gridData: T, pendingColumns: string[]): string[];
