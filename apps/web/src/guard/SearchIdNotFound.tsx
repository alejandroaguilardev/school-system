import React from 'react'
import NotFoundView from '../presentation/404';


type Props = {
    children: React.ReactNode;
    data: boolean;
    isLoading: boolean;
    error: any;
};

export default function SearchIdNotFound({ children, isLoading, error, data }: Props) {
    if (!isLoading && (!data || error)) return <NotFoundView />
    if (!isLoading) return <>{children}</>
    return <></>;

}
