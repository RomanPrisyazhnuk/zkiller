import React, { useMemo } from 'react';
import { Container, List } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { map, last } from 'lodash';
// @ts-ignore
import Youtube from 'react-lazyload-youtube';
import 'react-lazyload-youtube/dist/index.css';
import { AppState } from '../../store/rootReducer';

import {
  DividerCustomize,
  ImageAvatar,
  ImageCountBlock,
  ItemList,
  ListContentCustomize,
  ListCustomize,
  ListHeader,
  SideBarWrapper,
} from './styledSidebarSelf';

interface SidebarProps {
  data: any;
}

const SidebarSelf: React.FC<SidebarProps> = ({ data }) => {
  const router = useRouter();

  const userData = useSelector((state: AppState) => state.user.userData);
  const gender = useSelector((state: AppState) => state.gender);
  const questions = useSelector((state: AppState) => state.questions);

  const isUser = useMemo<boolean>(() => !data.some((item: any) => item._id === userData.id), [data, userData]);
  const isGirl = useMemo<boolean>(() => gender === gender.female, [gender]);
  const showUser = useMemo<boolean>(() => !isGirl && userData && userData.name && isUser, [isGirl, userData, isUser]);
  const dataToShow = useMemo<string[]>(
    () =>
      isGirl
        ? ['scvcuFSzBxc', 'IE1RI0PjjSQ', 'Lv0SeLX_PIc', 'cCmFcYvXwSg']
        : ['rwC7hlNcGTE', 'WK_wZ9Medt0', 'ph1B4kGhgdU', 'dKbRxMXfm9Q'],
    [isGirl]
  );

  const moviesList: string[] =
    router.pathname === '/question/[id]' && Boolean(questions[`${router.query.id}`])
      ? map(questions[`${router.query.id}`].youtubeVideos, (video: string): string => last(video.split('?v='))!)
      : dataToShow;

  return (
    <SideBarWrapper>
      <>
        <ListCustomize divided relaxed>
          {moviesList.map((item: string) => (
            <ItemList key={item}>
              <Youtube width="100%" height="200px" videoId={item} />
            </ItemList>
          ))}
        </ListCustomize>
        <Container align="center" style={{ cursor: 'pointer' }}>
          {dataToShow.length > 10 && <DividerCustomize />}
        </Container>
        {showUser && (
          <>
            <DividerCustomize />
            <List className="userBlock">
              <ItemList>
                <ImageAvatar src={userData.avatar} />
                <ListContentCustomize>
                  <ListHeader>{userData.name}</ListHeader>
                  <ImageCountBlock>{userData.numberOfVictories}</ImageCountBlock>
                </ListContentCustomize>
              </ItemList>
            </List>
          </>
        )}
      </>
    </SideBarWrapper>
  );
};

export default SidebarSelf;
