import "reflect-metadata";
import * as minimist from 'minimist';
import * as kebabcase from 'lodash.kebabcase';
export const Arg = (ctrFn: any) =>
    function argDecorator(constructor: any) {
        const args = minimist(process.argv.slice(2), { default: {} });
        const key = kebabcase(constructor.name).toLowerCase();

        return class extends constructor {
            key = key;
            source = 'process.argv';
            typedValue = ctrFn === Number ? ctrFn(args[key]) : new ctrFn(args[key]);
            value = args[key];
        };
    };
