import { data } from '@/constants/index';

export default defineEventHandler((event: any) => {
    if (event.req.method === 'GET') {
      return data;
    }
  });