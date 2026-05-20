import { API_ENDPOINT } from '@constants/apiEndpoints';
import { QUERY_KEY } from '@constants/queryKey';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

import type { FeaturedRecruitmentResponse } from '@apis/__generated__/data-contracts';
import { HTTPMethod, request } from '@apis/config/request';

export const getHomeFeaturedRecruitments = () => {
  return request<FeaturedRecruitmentResponse[]>({
    method: HTTPMethod.GET,
    url: API_ENDPOINT.HOME.JOB_POSTINGS,
  });
};

export const useGetHomeFeaturedRecruitmentsQuery = () => {
  return useQuery({
    queryKey: [...QUERY_KEY.HOME, 'featured-recruitments'],
    queryFn: getHomeFeaturedRecruitments,
    placeholderData: keepPreviousData,
  });
};
