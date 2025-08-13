import { ApiProperty } from '@nestjs/swagger';
import { IBaseEntity } from 'src/modules/common/interfaces/base.entity.interface';

export abstract class I<%= singular(classify(name)) %>Entity implements IBaseEntity {
  @ApiProperty({ readOnly: true })
  abstract id: string;

  @ApiProperty({ readOnly: true })
  abstract createdAt: Date;

  @ApiProperty({
    nullable: true,
    type: 'string',
    format: 'date-time',
    readOnly: true,
  })
  abstract updatedAt: Date | null;
}
