import React, { ReactElement, useEffect } from 'react';
import map from 'lodash/map';
import { UserType } from '../../../models/User';
import LoaderSemantic from '../../Loader/Loader';
import AuthorCard from '../../AuthorPage/AuthorBlock/AuthorsCard/AuthorsCard';

type TProps = {
  getAuthors: () => void;
  authors: UserType[];
};

const AuthorsBlock = (props: TProps): ReactElement => {
  const { getAuthors, authors } = props;

  useEffect(() => {
    getAuthors();
  }, []);

  return authors ? (
    <>
      {map(authors, (item: UserType) => (
        <AuthorCard author={item} key={item.seoId} />
      ))}
    </>
  ) : (
    <LoaderSemantic marginNeed={true} />
  );
};

export default AuthorsBlock;
