import { ReactNode } from "react";
import { MenuItem } from "@mui/material";


type Props<T> = {
    row: T;
    item: {
        name: string,
        icon: JSX.Element,
    };
    onSelected: (value: T) => void;
};

export function RenderRowActionMenuItemButton<T>({ item, onSelected, row }: Props<T>): ReactNode {
    return (
        <MenuItem onClick={() => onSelected(row)} key={item.name} sx={{ textDecoration: 'none', color: 'inherit', py: 2, display: "flex", gap: 1 }}>
            {item.icon}
            {item.name}
        </MenuItem >
    )
}
