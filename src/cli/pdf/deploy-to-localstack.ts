import { S3PublisherService } from '@onivoro/server-build';

export const deployToLocalstack = (args: {from, to, endpointUrl}) => {
    const {from, to, endpointUrl} = args;
    return S3PublisherService.publish(from, to, endpointUrl || 'http://localhost:6654');
};