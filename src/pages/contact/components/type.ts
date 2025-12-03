import type { Control, FieldValues, Path } from "react-hook-form";

export interface ITextInput<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    label: string;
    className?: string;
    placeholder: string;
    disabled?: boolean;
}