import { useGetPostQuery } from '@pages/mento/apis/useMentoPostQuery';
import MentoTabBar from '@pages/mento/components/mentoTabBar/MentoTabBar';

import MentoPostList from './mentoPostList/MentoPostList';

import * as styles from './MentoPostSection.css';

const MentoPostSection = () => {
  const { data: postList = [], isPending, isError } = useGetPostQuery();

  return (
    <section className={styles.postSection}>
      <MentoTabBar />
      <MentoPostList
        postList={postList}
        isPending={isPending}
        isError={isError}
      />
    </section>
  );
};

export default MentoPostSection;
