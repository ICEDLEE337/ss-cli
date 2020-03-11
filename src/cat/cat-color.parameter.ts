import { Parameter } from '../core/parameter.class';
import { Arg } from '../core/arg.decorator';
@Arg(String)
export class CatColor extends Parameter<string> {
}