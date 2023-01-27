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
export declare type UsuarioCreateFormInputValues = {
    nombre?: string;
};
export declare type UsuarioCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsuarioCreateFormOverridesProps = {
    UsuarioCreateFormGrid?: FormProps<GridProps>;
    nombre?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsuarioCreateFormProps = React.PropsWithChildren<{
    overrides?: UsuarioCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UsuarioCreateFormInputValues) => UsuarioCreateFormInputValues;
    onSuccess?: (fields: UsuarioCreateFormInputValues) => void;
    onError?: (fields: UsuarioCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UsuarioCreateFormInputValues) => UsuarioCreateFormInputValues;
    onValidate?: UsuarioCreateFormValidationValues;
} & React.CSSProperties>;
export default function UsuarioCreateForm(props: UsuarioCreateFormProps): React.ReactElement;
