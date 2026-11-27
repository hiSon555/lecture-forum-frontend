import styled from "styled-components";

export const AuthContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AuthFormCard = styled.form`
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

export const AuthTitle = styled.h1`
    font-size: 28px;
    font-weight: 800;
    color: ${props => props.theme.color.primary};
    margin-bottom: -15px;
    text-align: center;
`;

export const AuthSubtitle = styled.h6`
    font-size: 15px;
    color: ${props => props.theme.color.text.disabled};
    text-align: center;
    margin-bottom: 32px;
`;

export const AuthRootErrorMessage = styled.p`
    font-size: 14px;
    text-align: center;
    color: ${props => props.theme.color.error};
    font-weight: 500;
    margin-bottom: 50px;
`;