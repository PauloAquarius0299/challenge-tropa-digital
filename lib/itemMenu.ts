import {
  LayoutGrid,
  CalendarDays,
  UserPlus,
  Users
} from 'lucide-react';

interface MenuItemBase {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

interface MenuLink extends MenuItemBase {
  url: string;
  subItems?: never;
}

interface MenuDropdown extends MenuItemBase {
  url?: never;
  subItems: {
    url: string;
    label: string;
  }[];
}

type MenuItem = MenuLink | MenuDropdown;

const menuItems: MenuItem[] = [
  {
    url: "/",
    icon: LayoutGrid,
    label: "Dashboard",
  },
  {
    url: "/events",
    icon: CalendarDays,
    label: "Events",
  },
  {
    url: "/equipes",
    icon: Users,
    label: "Equipes",
  },
  {
    url: "/inscricoes",
    icon: UserPlus,
    label: "Inscrições",
  },
];


export default menuItems;