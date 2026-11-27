import type { ReactNode, SelectHTMLAttributes } from "react";
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
    registerObj?: UseFormRegisterReturn;    // 프로퍼티 타입은 규칙
    options: OptionType[]; // 기본 코드를 써서 커서를 올리면 해당 배열의 값을 가져야 한다고 알 수 있고, 또 다시 누르면 안의 프로퍼티를 알 수 있음
    children?: ReactNode;                   // 프로퍼티 22
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
