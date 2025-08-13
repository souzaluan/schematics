import { Injectable } from '@nestjs/common';
import { I<%= classify(name) %>Repository } from '../interfaces/<%= name %>.repository.interface';
import { Search<%= classify(name) %>Query } from '../validators/search-<%= name %>.validator';

@Injectable()
export class Search<%= classify(name) %>Service {
  constructor(private readonly <%= singular(name) %>Repository: I<%= classify(name) %>Repository) {}

  async execute(params: Search<%= classify(name) %>Query) {
    return this.<%= singular(name) %>Repository.search({
      limit: params.limit ?? 10,
      page: params.page ?? 1,
      search: params.search,
      sort: {
        column: params.sortBy ?? 'createdAt',
        direction: params.order ?? 'desc',
      },
    });
  }
}
