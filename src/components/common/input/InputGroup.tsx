import Input from "./Input.tsx";
import type { InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { ErrorMessage, Label, Group } from "../group/Group.tsx";


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;             // ? 있을 수도 없을 수도: 이게 ~있다면
    errorMessage?: string;
    id?: string;
    registerObj?: UseFormRegisterReturn;
}

function InputGroup({ label, errorMessage, registerObj, id, ...x }: Props) {
    return (
        <Group>
            {label && <Label htmlFor={id}>{label}</Label>}  {/* 논리곱 = and | 라벨이 있다면 라벨의 입력창과 문구 출력케함*/}
            <Input id={id} $errorMessage={errorMessage} {...registerObj} {...x} />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>} {/* 논리곱22 */}
        </Group>
    );
}

export default InputGroup;
