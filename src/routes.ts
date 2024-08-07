import { Blocks, Bolt, Box, HandCoins, LayoutDashboard, LucideProps, ShoppingBasket, ShoppingCart, UserPen } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type NavItem = {
  title: string;
  href: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  label: string;
  isParent?: boolean;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  {
    title: 'Tableau de bord',
    href: '/',
    icon: LayoutDashboard,
    label: 'Tableau de bord'
  },
  {
    title: 'Achat',
    href: '/achat',
    icon: ShoppingCart,
    label: 'Achat',
    isParent: true,
    children: [
        {
            title: 'Fournisseurs',
            href: '/achat/fournisseurs',
            icon: UserPen,
            label: 'Fournisseurs'
        },
        {
            title: 'Familles',
            href: '/achat/familles',
            icon: Blocks,
            label: 'Familles'
        },
        {
            title: 'Articles',
            href: '/achat/articles',
            icon: Bolt,
            label: 'Articles'
        }
    ]
  },
  {
    title: 'Vente',
    href: '/vente',
    icon: HandCoins,
    label: 'Vente',
    isParent: true
  },
  {
    title: 'Stock',
    href: '/stock',
    icon: Box,
    label: 'Stock',
    isParent: true
  },
  {
    title: 'Production',
    href: '/production',
    icon: ShoppingBasket,
    label: 'Production',
    isParent: true
  },
];
