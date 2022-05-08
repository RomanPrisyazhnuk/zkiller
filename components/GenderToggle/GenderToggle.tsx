import React, { useMemo } from 'react';
import { Radio } from 'semantic-ui-react';

import { gender as genderConst } from '../../constants/enums';

import { ToggleBlock, ToggleBlockItem, ToggleBlockTitleItem, ToggleWrap } from './styledComponents';
import { connect } from 'react-redux';
import { AppState } from '../../store/rootReducer';
import { changeGender } from '../../store/redux/actionCreators/actionCreators';

interface IComponentProps {
  gender: string;
  changeGender: (gender: string) => any;
}

const GenderToggle: React.FC<IComponentProps> = ({ gender, changeGender }) => {
  const isGirl = useMemo<boolean>(() => gender === genderConst.female, [gender]);
  const handleChangeGender = () => {
    const value = isGirl ? genderConst.male : genderConst.female;
    changeGender(value);
  };

  return (
    <ToggleBlock>
      <ToggleBlockTitleItem></ToggleBlockTitleItem>
      <ToggleBlockItem>
        <ToggleWrap>
          <i className="mars large icon" />
          <Radio toggle onChange={handleChangeGender} checked={isGirl} />
          <i className="venus large icon" />
        </ToggleWrap>
      </ToggleBlockItem>
    </ToggleBlock>
  );
};

export default connect(
  (state: AppState) => ({
    gender: state.gender,
  }),
  (dispatch: any) => ({
    changeGender: (payload: string) => dispatch(changeGender(payload)),
  })
)(GenderToggle);
