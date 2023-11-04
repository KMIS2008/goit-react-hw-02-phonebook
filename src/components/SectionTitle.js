import { Title } from "./SectionTitle.styled";

export const SectionTitle = ({title, children})=> {
    return (
        <Title>
            {title}
           { children}
        </Title>
    )
    }