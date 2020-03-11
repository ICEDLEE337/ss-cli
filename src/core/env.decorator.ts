import "reflect-metadata";
import * as kebabcase from 'lodash.kebabcase';
export const Env = (ctrFn: any) =>
    function envDecorator(constructor: any) {
        const key = kebabcase(constructor.name).toUpperCase().replace('-', '_');

        const value = process.env[key];
        return class extends constructor {
            key = key;
            source = 'process.env';
            typedValue =  ctrFn === Number ? ctrFn(value) : new ctrFn(value);
            value = value;
        };
    };
