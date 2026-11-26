import styled from "styled-components";
import InputGroup from "../../../components/common/input/InputGroup.tsx";

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
`;

const AuthTitle = styled.h1`
    font-size: 28px;
    font-weight: 800;
    color: ${props => props.theme.color.primary};
    margin-bottom: 8px;
    text-align: center;
`;

const AuthSubtitle = styled.h6`
    font-size: 15px;
    color: ${props => props.theme.color.text.disabled};
    text-align: center;
    margin-bottom: 32px;
`;

function SignUpPage() {

    return (
        <AuthContainer>
            <AuthFormCard>
                <AuthTitle>회원가입</AuthTitle>
                <AuthSubtitle>토론대난투에 오신 것을 환영합니다!</AuthSubtitle>
                <InputGroup label={"아이디"} errorMessage={""}>
                </InputGroup>
                <InputGroup label={"비밀번호"} errorMessage={"1"} type={"password"}></InputGroup>
            </AuthFormCard>
        </AuthContainer>
    );
}

export default SignUpPage;
