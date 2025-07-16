import { DataAction } from '../../../typings';
import { OnDataCallback } from '../bulk-actions';
/**
 * Applica una azione di massa secondo le modalità legacy definite dalla libreria di APYDataGridBundle.
 * Questa funzione è una soluzione di fallback temporanea, che consente una transizione più agevole
 * per il passaggio alle nuove grid.
 * NOTA: Rimuovere questa modalità d'invio delle azioni di massa quando la libreria APYDataGridBundle
 * sarà completamente rimossa.
 * @param element L'elemento HTML di riferimento in cui creare la form
 * @param onData La callback per la ricezione dei valori
 * @param action L'azione di massa da applicare
 * @param ids Array di ID di elementi a cui applicare l'azione
 */
export declare function executeLegacyGrid(element: HTMLElement | null, onData: OnDataCallback, action: DataAction, ids: string[]): void;
