/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PruebasCreateFormInputValues = {
    nombre?: string;
    precio?: number;
};
export declare type PruebasCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    precio?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PruebasCreateFormOverridesProps = {
    PruebasCreateFormGrid?: FormProps<GridProps>;
    nombre?: FormProps<TextFieldProps>;
    precio?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PruebasCreateFormProps = React.PropsWithChildren<{
    overrides?: PruebasCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PruebasCreateFormInputValues) => PruebasCreateFormInputValues;
    onSuccess?: (fields: PruebasCreateFormInputValues) => void;
    onError?: (fields: PruebasCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PruebasCreateFormInputValues) => PruebasCreateFormInputValues;
    onValidate?: PruebasCreateFormValidationValues;
} & React.CSSProperties>;
export default function PruebasCreateForm(props: PruebasCreateFormProps): React.ReactElement;
