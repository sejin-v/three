import axios from 'axios';
// import NProgress from 'nprogress'
// import { generateLogKey } from './utils'
// import { KEY_ACCESS_TOKEN, KEY_REFRESH_TOKEN } from '~/config'

// import type { AxiosResponse } from 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    meta?: {
      useTokenUpdate?: boolean;
      useAuth?: boolean;
      useResponseAll?: boolean;
      useProgress?: boolean;
      useToast?: boolean;
      logKey?: string;
      prefix?: string;
      timeout?: number;
      useSse?: boolean;
      useV2?: boolean;
    };
  }
}

const baseUrl: string = import.meta.env.VITE_API_CONTEXT_PATH;
const service = axios.create({
  baseURL: baseUrl,
  headers: {},
});

service.interceptors.request.use(
  async (config) => {
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

// Axios 의 response 인터셉터
service.interceptors.response.use(
  async (response) => {
    // request 결과값이 있을 시 progressbar 종료
    const parsingResponse = {
      data: [],
      totalCount: 0,
    };
    parsingResponse.data = response.data.data.Items.map((item: any) => {
      const parsedItem: any = {};
      for (const key in item) {
        const value = item[key];
        if (value && typeof value === 'object') {
          // 객체의 첫 번째 키를 가져와 값을 추출
          const dataKey = Object.keys(value)[0] as string;
          parsedItem[key] = value[dataKey];
        }
      }
      return parsedItem;
    });
    parsingResponse.totalCount = response.data.data.Count;
    return parsingResponse;
  },

  async (error) => {
    return Promise.reject(error);
  }
);

export default service;
