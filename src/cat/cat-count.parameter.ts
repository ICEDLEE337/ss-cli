import { Parameter } from '../core/parameter.class';
import { Arg } from '../core/arg.decorator';
@Arg(Number)
export class CatCount extends Parameter<number> {
}