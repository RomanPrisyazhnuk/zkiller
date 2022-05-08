import React, { ReactElement } from 'react';
import { AuthorAvatar, AuthorBlockContent, AuthorSocialLink } from './styledComponents';
import {
  TitleText,
  TextWrap,
  ContentBlockContainer,
  DescriptionText,
  CardBlockContainer,
} from '../../../../commonStyles/styledApp';
import map from 'lodash/map';
import LoaderSemantic from '../../../Loader/Loader';
import Link from 'next/link';
import { UserType } from '../../../../models/User';

type TProps = {
  author: UserType;
};

const AuthorCard = (props: TProps): ReactElement => {
  const { author } = props;

  return author ? (
    <CardBlockContainer>
      <TextWrap>
        <Link href={`/author/${author.seoId}`}>
          <TitleText>{author.name}</TitleText>
        </Link>
      </TextWrap>
      <ContentBlockContainer>
        {author.imgSrc ? <AuthorAvatar src={author.imgSrc} /> : <AuthorAvatar src="/static/noAvatar.webp" />}
        <AuthorBlockContent>
          <DescriptionText>{author.description}</DescriptionText>
          {map(author.socialLinks, (item) => (
            <AuthorSocialLink
              title={`${item.name} автора`}
              key={`social-${item.name}`}
              href={item.link}
              target="_blank"
            >
              <i className={`large ${item.name.toLowerCase()} black icon`} />
            </AuthorSocialLink>
          ))}
        </AuthorBlockContent>
      </ContentBlockContainer>
    </CardBlockContainer>
  ) : (
    <LoaderSemantic marginNeed={true} />
  );
};

export default AuthorCard;
