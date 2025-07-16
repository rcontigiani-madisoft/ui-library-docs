export type Enum<T extends string | number> = {
    value: T;
    description: string;
};
export interface BaseItem<T extends number | string = number> {
    id: T;
    nome: string;
}
export interface Allegato {
    id: string;
    nome: string;
    mimeType: string;
}
export type AllegatoAsset = {
    name: string;
    id: string;
} | {
    name: string;
    fileToken: string;
};
export type BasePerson = {
    id: number;
    nome: string;
    cognome: string;
};
export type Person = BasePerson & {
    cognomeNome: string;
};
export type Metadata<Action extends string = string> = {
    actions?: Action[];
};
export type AutoreModifica = {
    ruolo?: Enum<string>;
    cognomeNome: string;
};
export type AlunnoItem = Person & {
    classe: {
        id: number;
        nome: string;
        scuola: {
            nome: string;
        };
    };
};
export type AlunnoBaseItem = Person & {
    classe: BaseItem;
};
export type SelectOption<V extends string | number> = {
    label: string;
    value: V;
};
