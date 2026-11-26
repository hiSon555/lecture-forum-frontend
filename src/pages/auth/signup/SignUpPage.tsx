import styled from "styled-components";
import InputGroup from "../../../components/common/input/InputGroup.tsx";
import { useForm } from "react-hook-form";
import { createUserSchema } from "../../../schemas/auth/signUpSchema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { GenderType } from "../../../types/user.type.ts";
import SelectGroup, { type OptionType } from "../../../components/common/select/SelectGroup.tsx";

const AuthContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AuthFormCard = styled.form`
    width: 100%;
    max-width: 480px;
    background-color: ${props => props.theme.color.background.paper};
    border: 1px solid ${props => props.theme.color.divider};
    border-radius: 8px;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const AuthTitle = styled.h1`
    font-size: 28px;
    font-weight: 800;
    color: ${props => props.theme.color.primary};
    margin-bottom: -15px;
    text-align: center;
`;

const AuthSubtitle = styled.h6`
    font-size: 15px;
    color: ${props => props.theme.color.text.disabled};
    text-align: center;
    margin-bottom: 32px;
`;

type SignUpInput = {
    username: string;
    password: string;
    nickName: string;
    confirmPassword: string;
    email: string;
    phoneNumber: string;
    gender: GenderType;
};

function SignUpPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpInput>({
        resolver: zodResolver(createUserSchema), // react-hook-form과 zod 연결
        mode: "onBlur", // 언제 검증할 것인가를 정하는 옵션
    });

    const options: OptionType[] = [
        { text: "남자", value: GenderType.MALE },
        { text: "여자", value: GenderType.FEMALE },
    ];

    return (
        <AuthContainer>
            <AuthFormCard>
                <AuthTitle>회원가입</AuthTitle>
                <AuthSubtitle>토론대난투에 오신 것을 환영합니다!</AuthSubtitle>
                <InputGroup
                    label={"아이디"}
                    id={"username"}
                    registerObj={register("username")}
                    errorMessage={errors.username?.message}
                    placeholder={"4자 이상 필요"}
                />
                <InputGroup
                    label={"비밀번호"}
                    id={"password"}
                    registerObj={register("password")}
                    errorMessage={errors.password?.message}
                    type={"password"}
                    placeholder={"6자 이상 필요"}
                />
                <InputGroup
                    label={"비밀번호확인"}
                    id={"confirmPassword"}
                    errorMessage={errors.confirmPassword?.message}
                    registerObj={register("confirmPassword")}
                    type={"password"}
                    placeholder={"비밀번호를 한 번 더 입력해주세요"}
                />
                <InputGroup
                    label={"닉네임"}
                    id={"nickName"}
                    registerObj={register("nickName")}
                    errorMessage={errors.nickName?.message}
                    placeholder={"nickName"}
                />
                <InputGroup
                    label={"이메일"}
                    id={"email"}
                    registerObj={register("email")}
                    errorMessage={errors.email?.message}
                    type={"email"}
                />
                <InputGroup
                    label={"전화번호"}
                    id={"phoneNumber"}
                    registerObj={register("phoneNumber")}
                    errorMessage={errors.phoneNumber?.message}
                    type={"tel"}
                />
                <SelectGroup
                    label={"성별"}
                    id={"gender"}
                    errorMessage={errors.gender?.message}
                    registerObj={register("gender")}
                    options={options}></SelectGroup>
            </AuthFormCard>
        </AuthContainer>
    );
}

export default SignUpPage;
