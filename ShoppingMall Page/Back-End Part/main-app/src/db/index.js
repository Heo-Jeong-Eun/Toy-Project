import mongoose from 'mongoose';

const DB_URL =
    process.env.MONGODB_URL || 
    'MongoDB 서버 주소가 설정되지 않았습니다.\n./db/index.ts 파일을 확인해 주세요. \n.env 파일도 필요합니다.\n';

export * from './models/user-model';
