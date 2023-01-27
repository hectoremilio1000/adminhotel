/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pruebas } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PruebasUpdateFormInputValues = {
    nombre?: string;
    precio?: number;
};
export declare type PruebasUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    precio?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PruebasUpdateFormOverridesProps = {
    PruebasUpdateFormGrid?: FormProps<GridProps>;
    nombre?: FormProps<TextFieldProps>;
    precio?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PruebasUpdateFormProps = React.PropsWithChildren<{
    overrides?: PruebasUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pruebas?: Pruebas;
    onSubmit?: (fields: PruebasUpdateFormInputValues) => PruebasUpdateFormInputValues;
    onSuccess?: (fields: PruebasUpdateFormInputValues) => void;
    onError?: (fields: PruebasUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PruebasUpdateFormInputValues) => PruebasUpdateFormInputValues;
    onValidate?: PruebasUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PruebasUpdateForm(props: PruebasUpdateFormProps): React.ReactElement;
