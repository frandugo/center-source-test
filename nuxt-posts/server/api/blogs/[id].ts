import { data } from '@/constants/index';
import { getRouterParams } from 'h3';

export default defineEventHandler((event) => {
    const { id } = getRouterParams(event);
    
    return data.find((blog) => blog.id === Number(id));
    
  });