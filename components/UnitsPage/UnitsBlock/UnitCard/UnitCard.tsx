import React, { ReactElement } from 'react';
import { BuyUnitButton, UnitAvatar, UnitBlockContent } from './styledComponents';
import { CardBlockContainer, ContentBlockContainer, DescriptionText } from '../../../../commonStyles/styledApp';
import LoaderSemantic from '../../../Loader/Loader';
import { UnitType } from '../../../../models/Unit';

type TProps = {
  unit: UnitType;
  count: number;
  level: number;
  lossMoney: (cost: number) => {};
  gainUnit: ({}) => {};
  gainLevel: ({}) => {};
};

const AuthorCard = (props: TProps): ReactElement => {
  const { unit, count, level, lossMoney, gainUnit, gainLevel } = props;
  const levelCost = unit.levelCost * level * unit.levelCostMultiplier;
  const buyUnit = () => {
    lossMoney(unit.cost);
    gainUnit({ id: unit.id, amount: 1 });
  };
  const buyLevel = () => {
    lossMoney(levelCost);
    gainLevel(unit.id);
  };
  return unit ? (
    <CardBlockContainer>
      <ContentBlockContainer>
        {unit.imgSrc ? <UnitAvatar src={unit.imgSrc} /> : <UnitAvatar src="/static/noAvatar.webp" />}
        <DescriptionText>{count}</DescriptionText>
        <DescriptionText>lev.{level}</DescriptionText>
        <UnitBlockContent>
          <DescriptionText>{unit.title}</DescriptionText>
        </UnitBlockContent>
        <BuyUnitButton onClick={() => buyUnit()}>Купити ${unit.cost}</BuyUnitButton>
        <BuyUnitButton onClick={() => buyLevel()}>Підвищити ${levelCost}</BuyUnitButton>
      </ContentBlockContainer>
    </CardBlockContainer>
  ) : (
    <LoaderSemantic marginNeed={true} />
  );
};

export default AuthorCard;
