export declare const baseSchema: {
    title: string;
    type: string;
    properties: {
        textarea: {
            type: string;
            title: string;
            widget: string;
        };
        email: {
            type: string;
            title: string;
            widget: string;
        };
        textinput: {
            type: string;
            title: string;
        };
        numberinput: {
            type: string;
            title: string;
        };
        checkbox: {
            type: string;
            title: string;
            widget: string;
        };
        multiselect: {
            items: {
                type: string;
                enum: string[];
                enumNames: string[];
            };
            minItems: number;
            uniqueItems: boolean;
            type: string;
            title: string;
        };
        date: {
            format: string;
            type: string;
            title: string;
            propertyOrder: number;
        };
        select: {
            enum: string[];
            type: string;
            title: string;
            enumNames: string[];
        };
        asyncSelect: {
            type: string;
            searchUrl: string;
            getByIdUrl: string;
            title: string;
            widget: string;
            propertyOrder: number;
        };
        file: {
            title: string;
            type: string;
            properties: {
                name: {
                    type: string;
                    title: string;
                    propertyOrder: number;
                };
                fileToken: {
                    type: string;
                    title: string;
                    attr: {
                        accept: string;
                        'data-dimensione-massima': number;
                        'data-dimensione-massima-mime-types': string;
                    };
                    widget: string;
                    propertyOrder: number;
                };
            };
            required: string[];
            widget: string;
            propertyOrder: number;
        };
        array: {
            type: string;
            title: string;
            items: {
                title: string;
                type: string;
                properties: {
                    modulo: {
                        enum: string[];
                        type: string;
                        title: string;
                        enumNames: string[];
                        propertyOrder: number;
                    };
                    descrizione: {
                        type: string;
                        title: string;
                        widget: string;
                        propertyOrder: number;
                    };
                    ore: {
                        type: string;
                        title: string;
                        propertyOrder: number;
                    };
                };
                required: string[];
            };
            propertyOrder: number;
        };
    };
};
export declare const schemaWithAttrs: {
    title: string;
    type: string;
    properties: {
        textarea: {
            type: string;
            title: string;
            widget: string;
        };
        email: {
            type: string;
            title: string;
            widget: string;
        };
        textinput: {
            type: string;
            title: string;
        };
        numberinput: {
            type: string;
            title: string;
            minLength: number;
            maxLength: number;
        };
        checkbox: {
            type: string;
            title: string;
            widget: string;
        };
        multiselect: {
            items: {
                type: string;
                enum: string[];
                enumNames: string[];
            };
            minItems: number;
            uniqueItems: boolean;
            type: string;
            title: string;
        };
        date: {
            format: string;
            type: string;
            title: string;
            propertyOrder: number;
        };
        select: {
            enum: string[];
            type: string;
            title: string;
            enumNames: string[];
        };
        asyncSelect: {
            type: string;
            searchUrl: string;
            getByIdUrl: string;
            title: string;
            widget: string;
            propertyOrder: number;
        };
        required: string[];
    };
};
export declare const fieldsetSchema: {
    title: string;
    type: string;
    properties: {
        fieldset1: {
            title: string;
            type: string;
            properties: {
                name: {
                    type: string;
                    title: string;
                };
                foto: {
                    title: string;
                    type: string;
                    properties: {
                        name: {
                            type: string;
                            title: string;
                            propertyOrder: number;
                        };
                        fileToken: {
                            type: string;
                            title: string;
                            attr: {
                                accept: string;
                                'data-dimensione-massima': number;
                                'data-dimensione-massima-mime-types': string;
                            };
                            widget: string;
                            propertyOrder: number;
                        };
                    };
                    required: string[];
                    widget: string;
                    propertyOrder: number;
                };
            };
            required: string[];
            propertyOrder: number;
        };
        fieldset2: {
            title: string;
            type: string;
            properties: {
                checkbox: {
                    type: string;
                    title: string;
                    widget: string;
                };
                autorizzazioneTrasmissioneDatiATerzi: {
                    type: string;
                    title: string;
                    widget: string;
                    propertyOrder: number;
                };
                moduliAggiuntivi: {
                    type: string;
                    title: string;
                    items: {
                        title: string;
                        type: string;
                        properties: {
                            modulo: {
                                enum: string[];
                                type: string;
                                title: string;
                                enumNames: string[];
                                propertyOrder: number;
                            };
                            descrizione: {
                                type: string;
                                title: string;
                                widget: string;
                                propertyOrder: number;
                            };
                            ore: {
                                type: string;
                                title: string;
                                propertyOrder: number;
                            };
                        };
                        required: string[];
                    };
                    propertyOrder: number;
                };
            };
            required: string[];
            propertyOrder: number;
        };
    };
};
