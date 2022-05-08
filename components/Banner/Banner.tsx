import React, { useEffect, useState } from 'react';
import { BannerClose, BannerWrap } from './styledBanner';
import BannerItem from './BannerItem/BannerItem';
import { BANNER_CONTENT } from './BannerContent';

const Banner: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('isBannerHidden')) setVisible(false);
  }, []);

  const onClose = () => {
    localStorage.setItem('isBannerHidden', 'true');
    setVisible(false);
  };
  return (
    <React.Fragment>
      {visible ? (
        <BannerWrap>
          {BANNER_CONTENT.map((content) => (
            <React.Fragment key={content.title}>
              <BannerItem content={content} />
            </React.Fragment>
          ))}
          <BannerClose>
            <i className="calendar large close icon" onClick={onClose} />
          </BannerClose>
        </BannerWrap>
      ) : null}
    </React.Fragment>
  );
};
export default Banner;
