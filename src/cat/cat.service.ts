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

  meow(memberName: string) {
    const member = this[memberName];
    if (!member) {
      return `${memberName} is not defined in: ${Object.keys(this).sort().join(', ')}`;
    };
    return `${member.key}: ${typeof member.value} = ${member.value};`;
  }

}
