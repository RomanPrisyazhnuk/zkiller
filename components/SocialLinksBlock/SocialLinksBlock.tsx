import React from 'react';
import { SocialLink, SocialLinksContainer } from './styledComponents';
import Link from 'next/link';
// import { socialLinks } from '../../constants/socialLinksConstants';
import map from 'lodash/map';

const SocialLinksBlock = () => (
  <SocialLinksContainer>
    {map(socialLinks, (linkData) => (
      <Link key={`social-${linkData.name}`} href={linkData.link}>
        <SocialLink title={`Мы в ${linkData.name}`} target="_blank">
          <i className={`big ${linkData.name} icon`} />
        </SocialLink>
      </Link>
    ))}
  </SocialLinksContainer>
);

export default SocialLinksBlock;
