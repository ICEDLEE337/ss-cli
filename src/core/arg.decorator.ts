import "reflect-metadata";
import * as minimist from 'minimist';
import * as kebab from 'lodash.kebabcase';
export const Arg = (ctrFn: Function) =>
    function argDecorator(constructor: any) {
        const args = minimist(process.argv.slice(2), { default: {} });
        const key = kebab(constructor.name).replace('-parameter', '').toLowerCase();

        return class extends constructor {
            value = args[key];
            typedValue = ctrFn(args[key]);
            name = constructor.name;
        };
    };
