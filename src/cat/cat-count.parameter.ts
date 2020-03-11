import { Parameter } from '../core/parameter.class';
import { Arg } from '../core/arg.decorator';
@Arg(Number)
export class CatCountParameter extends Parameter<number> {
}