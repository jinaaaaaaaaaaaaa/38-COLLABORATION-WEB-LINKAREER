import { Fragment, lazy, Suspense } from 'react';

import { CENTER_BANNER_NORMAL_POST_INDEX } from '@pages/mento/constants/banner';
import { CENTER_AD_DATA } from '@pages/mento/mocks/centerAdData';
import type { Post } from '@pages/mento/types/post';

import MentoListItem from './mentoListItem/MentoListItem';

import * as styles from './MentoPostList.css';

const MentoCenterBanner = lazy(
  () =>
    import(
      '@pages/mento/components/mentoBanner/mentoCenterBanner/MentoCenterBanner'
    ),
);

interface MentoPostListProps {
  postList: Post[];
  isPending: boolean;
  isError: boolean;
}

const MentoPostList = ({
  postList,
  isPending,
  isError,
}: MentoPostListProps) => {
  if (isPending) {
    return <div>게시글을 불러오는 중입니다.</div>;
  }

  if (isError) {
    return <div>게시글을 불러오지 못했습니다.</div>;
  }

  const centerBannerTargetPostId = postList.filter((post) => !post.isNotice)[
    CENTER_BANNER_NORMAL_POST_INDEX
  ]?.id;

  return (
    <ul className={styles.postList}>
      {postList.map((post) => (
        <Fragment key={post.id}>
          <MentoListItem post={post} />

          {post.id === centerBannerTargetPostId && (
            <li>
              <Suspense fallback={null}>
                <MentoCenterBanner ad={CENTER_AD_DATA} />
              </Suspense>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};

export default MentoPostList;
