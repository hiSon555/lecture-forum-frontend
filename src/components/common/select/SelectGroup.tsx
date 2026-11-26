import type { SelectHTMLAttributes } from "react";
import { ErrorMessage, Group, Label } from "../group/Group.tsx";
import type { UseFormRegisterReturn } from "react-hook-form";
import Select from "./Select.tsx";

export type OptionType = {
    text: string;
    value: string;
    selected?: boolean;
};

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    errorMessage?: string;
    id?: string;
    registerObj?: UseFormRegisterReturn;
    children1?: string;
    options: OptionType[];
}

function SelectGroup({ label, errorMessage, id, registerObj, options, ...x }: Props) {
    return (
        <Group>
            {label && <Label htmlFor={id}>{label}</Label>}
            <Select id={id} $errorMessage={errorMessage} {...registerObj} {...x}>
                {options.map((option, index) => (
                    <option key={index} value={option.value} selected={option.selected}>
                        {option.text}
                    </option>
                ))}
            </Select>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Group>
    );
}

export default SelectGroup;
