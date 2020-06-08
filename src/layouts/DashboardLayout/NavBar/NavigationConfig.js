import DashboardIcon from '@material-ui/icons/Dashboard';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import SearchIcon from '@material-ui/icons/SearchOutlined';

import { USER_PERMISSIONS } from 'constants/permissions';

export const navConfig = [
  {
    items: [
      {
        title: 'Inicio',
        icon: DashboardIcon,
        href: '/app/reports/dashboard',
      },
    ],
  },
  {
    items: [
      {
        title: 'Atención al cliente',
        icon: PhoneOutlinedIcon,
        href: '/app/customercare',
        items: [
          {
            icon: SearchIcon,
            title: 'Buscar',
            href: '/app/customercare/search',
            permission: USER_PERMISSIONS.SEARCH_CLIENTS,
          },
        ],
      },
    ],
  },
];
