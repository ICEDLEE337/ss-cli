import { S3Service } from '@onivoro/server-build';

export const s3Publish = (args: { _, from, to, endpointUrl }) => {
    const { from, to, endpointUrl } = args;
    return new S3Service({ endpointUrl }).publish(from, to);
};