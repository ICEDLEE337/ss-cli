import { Injectable } from '@nestjs/common';
import { CatParameter } from './cat.parameter';

@Injectable()
export class CatService {
  constructor(private readonly cat: CatParameter) {

  }

  meow () {
    return `i'm a ${this.cat.value} cat`;
  }

}
