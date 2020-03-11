import "reflect-metadata";
import * as minimist from 'minimist';
import * as kebab from 'lodash.kebabcase';
export const Arg = (ctrFn: Function) =>
    function argDecorator(constructor: any) {
        console.log(arguments);
        console.log(constructor.name, ctrFn);
        const args = minimist(process.argv.slice(2), { default: {} });
        const key = kebab(constructor.name).replace('-parameter', '').toLowerCase();
        console.log(key);
        console.log(args);

        const typedValue = ctrFn(args[key]);

        return class extends constructor {
            value = args[key];
            typedValue = typedValue;
            name = constructor.name;
        };
    };
