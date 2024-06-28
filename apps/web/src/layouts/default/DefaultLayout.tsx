import { FC, ReactNode } from "react"
import HeaderDefault from "./Header";
import { MainDefault } from "./Main";

type Props = {
    children: ReactNode;
}

export const LayoutDefault: FC<Props> = ({ children }) => {
    return (
        <>
            <HeaderDefault />
            <MainDefault>
                {children}
            </MainDefault>
        </>
    )
}
