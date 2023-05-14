import { useAppDispatch, useAppSelector } from '../store/hooks';
import Router, { useRouter } from 'next/router'

export const ProtectRoute = ({ children }: any) => {
    const { info } = useAppSelector((state: any) => state.auth);
    if (!info) {
        return Router.push("/admin/login");
    }

    return children;
};