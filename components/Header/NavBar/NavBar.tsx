import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const headerItem = [
  {
    idItem: 'questionsItem',
    resourcesKey: 'questionsItem',
    name: 'Вопросы',
    path: '/questions',
  },
  {
    idItem: 'articlesItem',
    resourcesKey: 'articlesItem',
    name: 'Статьи',
    path: '/articles',
  },
  {
    idItem: 'authorsItem',
    resourcesKey: 'authorsItem',
    name: 'Авторы',
    path: '/authors',
  },
];

import { NavBarMenu, LinkItem } from './styledComponents';

const NavBar: React.FC = () => {
  const route = useRouter();
  const activeLink = (path: string) => path === route.pathname;

  return (
    <NavBarMenu>
      {headerItem.map((item) => (
        <Link href={item.path} key={item.idItem}>
          <LinkItem theme={{ active: activeLink(item.path) }}>{item.name}</LinkItem>
        </Link>
      ))}
    </NavBarMenu>
  );
};

export default NavBar;
