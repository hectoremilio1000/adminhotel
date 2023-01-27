/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Usuario } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsuarioUpdateFormInputValues = {
    nombre?: string;
};
export declare type UsuarioUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsuarioUpdateFormOverridesProps = {
    UsuarioUpdateFormGrid?: FormProps<GridProps>;
    nombre?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsuarioUpdateFormProps = React.PropsWithChildren<{
    overrides?: UsuarioUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    usuario?: Usuario;
    onSubmit?: (fields: UsuarioUpdateFormInputValues) => UsuarioUpdateFormInputValues;
    onSuccess?: (fields: UsuarioUpdateFormInputValues) => void;
    onError?: (fields: UsuarioUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UsuarioUpdateFormInputValues) => UsuarioUpdateFormInputValues;
    onValidate?: UsuarioUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UsuarioUpdateForm(props: UsuarioUpdateFormProps): React.ReactElement;
