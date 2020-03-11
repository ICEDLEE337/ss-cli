import { Injectable } from '@nestjs/common';
import { CatCount } from './cat-count.parameter';
import { CatColor } from './cat-color.parameter';
import { CatDob } from './cat-dob.parameter';

@Injectable()
export class CatService {
  constructor(
    private readonly count: CatCount,
    private readonly color: CatColor,
    private readonly dob: CatDob
  ) {}

  meow(memberName: string) {
    const member = this[memberName];
    if (!member) {
      return `${memberName} is not defined in: ${Object.keys(this).sort().join(', ')}`;
    };
    return [JSON.stringify(member, null, 2), typeof member.typedValue].join('\n');
  }
}
