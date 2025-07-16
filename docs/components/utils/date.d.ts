import { NormalizedInterval } from 'date-fns';
import * as dateFns from "date-fns";
export { months, weekdays } from './date-constants';
export declare function startOfWeek(date: Date | number): Date;
export declare function endOfWeek(date: Date | number): Date;
export declare const isSameDay: typeof dateFns.isSameDay, isToday: typeof dateFns.isToday, isSunday: typeof dateFns.isSunday, eachDayOfInterval: typeof dateFns.eachDayOfInterval, startOfDay: typeof dateFns.startOfDay, endOfDay: typeof dateFns.endOfDay, startOfMonth: typeof dateFns.startOfMonth, endOfMonth: typeof dateFns.endOfMonth, addDays: typeof dateFns.addDays, subDays: typeof dateFns.subDays, isWithinInterval: typeof dateFns.isWithinInterval, eachMonthOfInterval: typeof dateFns.eachMonthOfInterval, isSameMonth: typeof dateFns.isSameMonth, addMonths: typeof dateFns.addMonths, subMonths: typeof dateFns.subMonths, areIntervalsOverlapping: typeof dateFns.areIntervalsOverlapping, differenceInDays: typeof dateFns.differenceInDays, differenceInYears: typeof dateFns.differenceInYears, addMinutes: typeof dateFns.addMinutes, subWeeks: typeof dateFns.subWeeks, max: typeof dateFns.max, min: typeof dateFns.min;
export declare function parseDate(date: string, formatString: string, referenceDate?: Date): Date;
export declare function parseISODate(date: string): Date;
export declare function isValidDate(date: Date | string): boolean;
export declare function formatDate(date: Date | number, formatString: string): string;
export declare function formatToDateString(date: Date | number): string;
export declare function formatToISODate(date: Date | number): string;
export declare function formatToTimeString(date: Date | number): string;
export declare function age(date: Date | number): number;
/**
 * Data una stringa che rappresenta una data cerca di tornare il corrispondente oggetto di tipo Date.
 * Accetta anche stringhe del tipo: "Oggi", "Domani", "Ieri"
 */
export declare function smartParseDate(str: string, baseDate?: Date): Date;
export declare function smartFormatDate(date: Date, formatString: string): string;
export declare const reformatLongDateTime: (dateTimeString?: string) => string;
export declare function smartFormatInterval({ start, end, }: NormalizedInterval): string;
export declare const formatRelativeDate: (date: Date | number) => string;
/**
 * Unisce data e tempo in un unico Date object.
 * @param dateString Data in formato ISO. es. yyyy-MM-dd, yyyy-MM-ddTHH:mm:ss
 * @param timeString Ore, minuti (e secondi). es. HH:mm, HH:mm:ss
 * @returns la data composta dai due parametri.
 */
export declare const fromDateAndTime: (dateString: string, timeString?: string) => Date;
export declare function formatMinutes(totalMinutes: number): string;
