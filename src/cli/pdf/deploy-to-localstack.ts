import { S3PublisherService } from '@onivoro/server-build';
import * as minimist from 'minimist';

export const deployToLocalstack = () => {
    const {from, to} = minimist(process.argv.slice(2));
    const { publish } = S3PublisherService;
    return publish(from, to, 'http://localhost:6654');
};