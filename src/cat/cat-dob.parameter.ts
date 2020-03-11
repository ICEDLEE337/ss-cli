import { Parameter } from '../core/parameter.class';
import { Env } from '../core/env.decorator';
@Env(Date)
export class CatDob extends Parameter<Date> {
}