import { Parameter } from '../core/parameter.class';
import { Arg } from '../core/arg.decorator';
@Arg
export class CatParameter extends Parameter<number> {
}