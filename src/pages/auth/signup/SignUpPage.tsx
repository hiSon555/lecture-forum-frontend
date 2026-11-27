import styled from "styled-components";
import InputGroup from "../../../components/common/input/InputGroup.tsx";
import { useForm } from "react-hook-form";
import { createUserSchema } from "../../../schemas/auth/signUpSchema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { GenderType } from "../../../types/user.type.ts";
import SelectGroup, { type OptionType } from "../../../components/common/select/SelectGroup.tsx";
import Button from "../../../components/common/button/Button.tsx";
import {useNavigate} from "react-router";
import axiosInstance from "../../../api/axiosInstance.ts";
import * as axios from "axios";
import {
    AuthContainer,
    AuthFormCard,
    AuthRootErrorMessage,
    AuthSubtitle,
    AuthTitle,
} from "../../../styles/AuthStyles.tsx";



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
    const navigate = useNavigate();

    // register : input에 react-hook-form의 기능들을 등록할 때 사용할 수 있는 기능
    // handleSubmit : 전송할 때 사용할 수 있는 기능 (검증 후 전송하는 기능을 제공)
    // setError : 에러 메세지 내용을 우리가 수동으로 입력하고 싶을 때 사용
    // formState 중 errors : 에러 메세지 자체를 저장하고 있는 저장소 => root, 우리가 제공한 항목들
    //           중 inSubmitting : 전송 중임을 표현하는 boolean 변수 (전송 중은 true, 아닐 땐 false)
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<SignUpInput>({
        resolver: zodResolver(createUserSchema), // react-hook-form과 zod 연결
        mode: "onBlur", // 언제 검증할 것인가를 정하는 옵션 (온블러는 벗어날 때 적용)
    });

    const options: OptionType[] = [
        { text: "남자", value: GenderType.MALE },
        { text: "여자", value: GenderType.FEMALE },
    ];

    const onSubmit = async (input: SignUpInput) => {
        // 입력된 정보(input)을 가지고 백엔드에게 요청
        // 앞으로 fetch를 사용하지 않을 것 => axios 패키지를 이용할 것
        try {
            // 전송에 대한 내용을 기재하면 되는데, 그대로 데이터를 전달할 것인가?
            // 프론트엔드에서'만' 필요한 confirmPassword 항목이 있으니, 이것을 제외하고 전송
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { confirmPassword, ...submitData } = input;

            {/* // 사용자가 적은 내용을 함께 fetch를 통해 보내줘야 함 => 사용자가 적은 내용은 HTTP 메세지 중 body
            // fetch(주소, 옵션) => 주소는 필수값, 옵션은 선택값
            // 옵션 자리에는 객체 { method, header, body }
            const response = await fetch("http://localhost:8000/user/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submitData), // 객체를 그대로 body에 담아서 보낼 수 없고, JSON.stringify()를 통해 JSON 형식의 string으로 변환
            });

            // fetch는 백엔드가 400대나 500대로 오류임을 표시해도,
            // "성공"으로 생각함 -> 어쨌든 응답을 받았기에

            // 백엔드에서 보냊분 응답(string)을 JSON으로 파싱함
            const result = await response.json();

            if (!result.ok) {
                // error를 일으켜서 catch절을 실행시키는 명령
                throw new Error(result.message || "회원가입 중 오류가 발생하였습니다.");
            }

            alert("회원가입이 완료되었습니다. 로그인을 진행해주세요.");
            navigate("/auth/signin"); */}

            // fetch()로 통신하면, 백엔드가 전달해주는 response가 존재하기만 하면 성공으로 판단하지만,
            // axios로 통신하면, 백엔드가 2xx대 성공 코드를 전달해주어야만 성공으로 판단함
            // 이외의 실패는 catch로 처리해줘야 함
            await axiosInstance.post("/user/create", submitData)

            // 성공을 했을 때 백엔드가 전달해준 내용은 response.data에 객체 상태로 존재함
            // (axios는 파싱(가공)을 자동으로 해줌)

            alert("회원가입이 완료되었습니다. 로그인을 진행해주세요.");
            navigate("/auth/signin");

        } catch (err) {
            // 기본 에러메세지를 미리 마련
            let errorMessage = "회원가입 중 오류가 발생하였습니다.";

            if (axios.isAxiosError(err)) {
                // axios에서 발생된 에러라면, 백엔드에서 제공한 내용이 error.response.data.message 에 존재
                // 백엔드에서 전달해준 내용을 errorMessage에 저장
                errorMessage = err.response?.data?.message || errorMessage;
            } else if (err instanceof Error) {
                // axios에서 발생된 에러가 아닌, jS 표준 에러라면
                // err.message에 담긴 에러 내용을 errorMessage에 저장
                errorMessage = err.message;
            }

            setError("root", { message: errorMessage });
        }
    };

    return (
        <AuthContainer>
            <AuthFormCard onSubmit={handleSubmit(onSubmit)}>
                <AuthTitle>회원가입</AuthTitle>
                <AuthSubtitle>토론대난투에 오신 것을 환영합니다!</AuthSubtitle>
                <InputGroup // 필수값과 선택값을 잘 선택하여 있으면 출력, 없으면 출력지 않게 설계하기
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
                    placeholder={"example@example.com"}
                />
                <InputGroup
                    label={"전화번호"}
                    id={"phoneNumber"}
                    registerObj={register("phoneNumber")}
                    errorMessage={errors.phoneNumber?.message}
                    type={"tel"}
                    placeholder={"010-xxxx-xxxx"}
                />
                <SelectGroup
                    label={"성별"}
                    id={"gender"}
                    errorMessage={errors.gender?.message}
                    registerObj={register("gender")}
                    options={options}
                />

                {errors.root && <AuthRootErrorMessage>{errors.root.message}</AuthRootErrorMessage>}

                <Button
                    color={"primary"}
                    variant={"contained"}
                    type={"submit"}
                    disabled={isSubmitting}>
                    회원가입
                </Button>
            </AuthFormCard>
        </AuthContainer>
    );
}

export default SignUpPage;
