import { ReactNode } from "react";
import { MenuItem, Link, SxProps } from "@mui/material";
import RouterLink from '../../app/routes/components/router-link';

type ItemRenderRowActionMenuItems = {
    name: string,
    icon: JSX.Element,
    href: string,
}

type Props = {
    item: ItemRenderRowActionMenuItems;
    sx?: SxProps;
};

export function RenderRowActionMenuItem({ item, sx = {} }: Props): ReactNode {
    return (
        <Link
            component={RouterLink}
            href={item.href}
            key={item.name}
            sx={{ textDecoration: 'none', color: 'inherit' }}
        >
            <MenuItem sx={{ py: 2, display: "flex", gap: 1, ...sx }}>
                {item.icon}
                {item.name}
            </MenuItem >
        </Link>
    )
}
