import { Injectable } from '@nestjs/common';
import { CatCountParameter } from './cat-count.parameter';
import { CatColorParameter } from './cat-color.parameter';

@Injectable()
export class CatService {
  constructor(
    private readonly count: CatCountParameter,
    private readonly color: CatColorParameter
    ) {

  }

  meow () {
    return `i need ${this.count.value} cats that are ${this.color.value}`;
  }

}
