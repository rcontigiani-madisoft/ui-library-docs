export declare function getDaysInMonth(date: Date): number;
export declare function addDays(date: Date, days: number): Date;
export declare function addMonths(date: Date, months: number): Date;
export declare function addYears(date: Date, years: number): Date;
export declare function isSameDay(dateLeft: Date, dateRight: Date): boolean;
export declare function isToday(date: Date): boolean;
export declare function isValidDate(date: Date | string): boolean;
export declare function formatDate(date: Date, format?: "date-time" | "short-date" | "long-date" | "month" | "iso" | "local-iso" | "local-iso-date" | "date" | "time", defaultValue?: string): string;
export declare function getWeekday(date: Date): number;
export declare function startOfMonth(date: Date): Date;
export declare function startOfDay(date: Date): Date;
export declare function endOfDay(date: Date): Date;
/**
 * Ritorna il successivo giorno della settimana identificato
 * dall'intero passato. L'identificativo del giorno della settimana è quello
 * classico, cioè zero equivale a domenica, uno a lunedì, etc.
 * @param date La data di base.
 * @param weekday Il numero del giorno della settimana, zero è domenica.
 */
export declare function nextWeekday(date: Date, weekday: number): Date;
export declare function parseDate(str: string, baseDate?: Date): Date;
export declare function suggestDate(str: string): Date;
export declare function startOfYear(date: Date): Date;
export declare function endOfYear(date: Date): Date;
