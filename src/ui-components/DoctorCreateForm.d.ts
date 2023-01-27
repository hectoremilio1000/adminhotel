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
export declare type DoctorCreateFormInputValues = {
    nombre?: string;
};
export declare type DoctorCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DoctorCreateFormOverridesProps = {
    DoctorCreateFormGrid?: FormProps<GridProps>;
    nombre?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DoctorCreateFormProps = React.PropsWithChildren<{
    overrides?: DoctorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DoctorCreateFormInputValues) => DoctorCreateFormInputValues;
    onSuccess?: (fields: DoctorCreateFormInputValues) => void;
    onError?: (fields: DoctorCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DoctorCreateFormInputValues) => DoctorCreateFormInputValues;
    onValidate?: DoctorCreateFormValidationValues;
} & React.CSSProperties>;
export default function DoctorCreateForm(props: DoctorCreateFormProps): React.ReactElement;
