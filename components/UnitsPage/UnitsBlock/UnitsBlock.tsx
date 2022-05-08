import React, { ReactElement, useEffect } from 'react';
import map from 'lodash/map';
import { UserType } from '../../../models/User';
import LoaderSemantic from '../../Loader/Loader';
import UnitCard from './UnitCard';
import { ArmyType } from '../../../models/Army';

type TProps = {
  getAuthors: () => void;
  army: ArmyType;
};

const UnitsBlock = (props: TProps): ReactElement => {
  const { army } = props;

  // useEffect(() => {
  //   getAuthors();
  // }, []);

  return army ? (
    <>
      {map(army, (item: UserType) => (
        <UnitCard id = {item.id} key={item.id} />
      ))}
    </>
  ) : (
    <LoaderSemantic marginNeed={true} />
  );
};

export default UnitsBlock;
