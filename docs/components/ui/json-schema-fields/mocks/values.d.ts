export declare const emptyBaseValues: {
    textarea: string;
    email: string;
    textinput: string;
    numberinput: string;
    checkbox: boolean;
    multiselect: never[];
    date: string;
    select: string;
    asyncSelect: string;
    file: {
        name: string;
        fileToken: string;
    };
    array: never[];
};
export declare const baseValues: {
    textarea: string;
    email: string;
    textinput: string;
    numberinput: string;
    checkbox: boolean;
    multiselect: string[];
    date: string;
    select: string;
    asyncSelect: string;
    file: {
        id: string;
        name: string;
        fileToken: string;
    };
    array: {
        modulo: string;
        descrizione: string;
        ore: string;
    }[];
};
export declare const fieldsetValues: {
    fieldset1: {
        name: string;
        foto: {
            id: string;
            name: string;
            fileToken: string;
        };
    };
    fieldset2: {
        checkbox: boolean;
        autorizzazioneTrasmissioneDatiATerzi: boolean;
        moduliAggiuntivi: {
            modulo: string;
            descrizione: string;
            ore: string;
        }[];
    };
};
