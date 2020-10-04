import { S3PublisherService } from '@onivoro/server-build';

export const deployToS3 = (args: { from, to }) => {
    const { from, to } = args;
    return S3PublisherService.publish(from, to);
};