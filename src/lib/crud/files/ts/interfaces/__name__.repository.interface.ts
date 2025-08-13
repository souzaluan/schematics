import {
  ISearchParams,
  ISearchResult,
} from 'src/modules/common/interfaces/search.interface';
import { I<%= singular(classify(name)) %>Entity } from './<%= singular(name) %>.entity.interface';
import { ApiProperty } from '@nestjs/swagger';

export interface ICreate<%= singular(classify(name)) %>Params {}

export interface IUpdate<%= singular(classify(name)) %>Params extends ICreate<%= singular(classify(name)) %>Params {}

/**
 * @docs
 * See the docs specification here https://docs.nestjs.com/openapi/operations#responses
 */
export abstract class ISearch<%= classify(name) %>Result implements ISearchResult<I<%= singular(classify(name)) %>Entity> {
  @ApiProperty({ type: [I<%= singular(classify(name)) %>Entity] })
  data: I<%= singular(classify(name)) %>Entity[];

  @ApiProperty()
  total: number;
}

export abstract class I<%= classify(name) %>Repository {
  abstract create(params: ICreate<%= singular(classify(name)) %>Params): Promise<I<%= singular(classify(name)) %>Entity>;
  abstract update(id: string, params: IUpdate<%= singular(classify(name)) %>Params): Promise<I<%= singular(classify(name)) %>Entity>;
  abstract delete(id: string): Promise<I<%= singular(classify(name)) %>Entity>;
  abstract search(params: ISearchParams): Promise<ISearch<%= classify(name) %>Result>;
  abstract findById(id: string): Promise<I<%= singular(classify(name)) %>Entity | null>;
}
