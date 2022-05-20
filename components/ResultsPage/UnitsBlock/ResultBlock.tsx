import React, { ReactElement } from 'react';
import map from 'lodash/map';
import LoaderSemantic from '../../Loader/Loader';
import { ArmyType } from '../../../models/Army';
import EnemyUnitCard from './EnemyUnitCard/EnemyUnitCard';
import { EnemyUnitType } from '../../../models/Unit';

type TProps = {
  enemyArmy: ArmyType;
};

const ResultBlock = (props: TProps): ReactElement => {
  const { enemyArmy } = props;
  // useEffect(() => {
  //   getAuthors();
  // }, []);

  return enemyArmy ? (
    <>
      {map(enemyArmy, (item: EnemyUnitType) => (
        <EnemyUnitCard enemyUnit={item} key={item.id} />
      ))}
    </>
  ) : (
    <LoaderSemantic marginNeed={true} />
  );
};

export default ResultBlock;
