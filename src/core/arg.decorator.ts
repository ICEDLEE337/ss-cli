import "reflect-metadata";
import * as minimist from 'minimist';

export const Arg = function argDecorator(constructor: any) {
    console.log(arguments);
    console.log(constructor.name);
    const args = minimist(process.argv.slice(2), { default: { cat: 'silver' } });
    const key = constructor.name.toUpperCase().replace('PARAMETER', '').toLowerCase();
    console.log(key);
    console.log(args);

    return class extends constructor {
        value = args[key];
        name = constructor.name;
    };
};
