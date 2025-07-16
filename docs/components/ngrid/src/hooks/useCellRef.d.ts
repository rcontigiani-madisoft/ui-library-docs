import { GridColumn } from '../typings';
import * as React from "react";
/**
 * Gestisce in modo imperativo le proprietà dell'elemento del DOM che rappresenta
 * una cella.
 * @param {GridColumn<T>} column La configurazione della colonna relativa alla cella
 * @returns Il RefObject della cell
 */
export declare function useCellRef<T>(column: GridColumn<T>): React.MutableRefObject<null>;
