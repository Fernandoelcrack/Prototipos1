import { dashboard, expenses, transactions, trend } from "./Icons";


export const menuItems = [
    {
        id: 1,
        title: 'Mi Tablero',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 3,
        title: "Ingresos",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Gastos",
        icon: expenses,
        link: "/dashboard",
    },
]
