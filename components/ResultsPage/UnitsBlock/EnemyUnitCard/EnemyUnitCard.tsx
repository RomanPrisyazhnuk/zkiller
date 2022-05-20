import React, { ReactElement } from 'react';
import { UnitAvatar, UnitBlockContent } from './styledComponents';
import { CardBlockContainer, ContentBlockContainer, DescriptionText } from '../../../../commonStyles/styledApp';
import LoaderSemantic from '../../../Loader/Loader';
import { EnemyUnitType } from '../../../../models/Unit';

type TProps = {
  enemyUnit: EnemyUnitType;
};

const EnemyUnitCard = (props: TProps): ReactElement => {
  const { enemyUnit } = props;
  return enemyUnit ? (
    <CardBlockContainer>
      <ContentBlockContainer>
        {enemyUnit.imgSrc ? <UnitAvatar src={enemyUnit.imgSrc} /> : <UnitAvatar src="/static/noAvatar.webp" />}
        <DescriptionText>{enemyUnit.title}</DescriptionText>
        <UnitBlockContent>
          <DescriptionText>{enemyUnit.count}</DescriptionText>
        </UnitBlockContent>
        <DescriptionText>{enemyUnit.count * enemyUnit.bounty}$</DescriptionText>
      </ContentBlockContainer>
    </CardBlockContainer>
  ) : (
    <LoaderSemantic marginNeed={true} />
  );
};

export default EnemyUnitCard;
