import React, { ReactElement } from 'react';
import { BuyUnitButton, UnitAvatar, UnitBlockContent } from './styledComponents';
import {
  ContentBlockContainer,
  DescriptionText,
  CardBlockContainer,
} from '../../../../commonStyles/styledApp';
// import map from 'lodash/map';
import LoaderSemantic from '../../../Loader/Loader';
// import Link from 'next/link';
// import { UserType } from '../../../../models/User';
import { Unit } from '../../../../models/Unit';

type TProps = {
  unit: Unit;
  count: number;
};

const AuthorCard = (props: TProps): ReactElement => {
  const { unit, count,  lossMoney, gainUnit } = props;
  const buyUnit = () => {
    lossMoney(unit.cost);
    gainUnit({ id: unit.id, amount: 1 });
  };
  return unit ? (
    <CardBlockContainer>
      <ContentBlockContainer>
        {unit.imgSrc ? <UnitAvatar src={unit.imgSrc} /> : <UnitAvatar src="/static/noAvatar.webp" />}
        <DescriptionText>{count}</DescriptionText>
        <UnitBlockContent>
          <DescriptionText>{unit.title}</DescriptionText>
        </UnitBlockContent>
        <BuyUnitButton onClick={() => buyUnit()}>Купить ${unit.cost}</BuyUnitButton>
      </ContentBlockContainer>
    </CardBlockContainer>
  ) : (
    <LoaderSemantic marginNeed={true} />
  );
};

export default AuthorCard;
