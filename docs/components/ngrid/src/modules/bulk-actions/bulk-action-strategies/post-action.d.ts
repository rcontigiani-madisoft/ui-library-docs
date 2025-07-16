import { DataAction } from '../../../typings';
import { OnDataCallback } from '../bulk-actions';
/**
 * Modalità legacy per applicare le azioni di massa. L'azione viene inviata in un formato "intermedio" (non AJAX)
 * in modo da consentire una rapida transizione per rendere le vecchie azioni di massa indipendenti da APYDataGridBundle.
 * @param idsInQueryStringRequired Indica se inviare gli IDs in query string (richiesti per LEGACY_POST_MASS_ACTION)
 * @param onData Funzione non utilizzata da questo metodo
 * @param action L'azione di massa da applicare
 * @param ids L'array di id di elementi a cui applicare l'azione
 */
export declare function executePost(idsInQueryStringRequired: boolean, onData: OnDataCallback, action: DataAction, ids: string[]): void;
