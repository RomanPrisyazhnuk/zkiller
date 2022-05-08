import React from 'react';
import { BannerItemWrap, ItemText, ItemImage } from './styledBannerItem';
import { IBannerItem } from '../BannerContent';

interface BannerItemProps {
  content: IBannerItem;
}

const BannerItem: React.FC<BannerItemProps> = (props: BannerItemProps) => (
  <BannerItemWrap>
    <ItemImage src="/static/bigLogo.webp" />
    <ItemText>{props.content.title}</ItemText>
  </BannerItemWrap>
);

export default BannerItem;
