import { Injectable } from '@nestjs/common';
import { I<%= singular(classify(name)) %>Entity } from '../interfaces/<%= singular(name) %>.entity.interface';
import {
  ICreate<%= singular(classify(name)) %>Params,
IUpdate<%= singular(classify(name)) %>Params,
  I<%= classify(name) %>Repository,
} from '../interfaces/<%= name %>.repository.interface';
import { PrismaService } from '../../../database/prisma/prisma.service';
import {
  ISearchParams,
  ISearchResult,
} from 'src/modules/common/interfaces/search.interface';
import { Prisma } from '@prisma/client';

@Injectable()
export class Prisma<%= classify(name) %>Repository implements I<%= classify(name) %>Repository {
  constructor(private prisma: PrismaService) {}

  async create(data: ICreate<%= singular(classify(name)) %>Params): Promise<I<%= singular(classify(name)) %>Entity> {
    return this.prisma.<%= singular(camelize(name)) %>.create({ data });
  }

  async update(id: string, data: IUpdate<%= singular(classify(name)) %>Params): Promise<I<%= singular(classify(name)) %>Entity> {
    return this.prisma.<%= singular(camelize(name)) %>.update({ where: { id }, data });
  }

  async delete(id: string): Promise<I<%= singular(classify(name)) %>Entity> {
    return this.prisma.<%= singular(camelize(name)) %>.delete({ where: { id } });
  }

  async findById(id: string): Promise<I<%= singular(classify(name)) %>Entity | null> {
    return this.prisma.<%= singular(camelize(name)) %>.findUnique({ where: { id } });
  }

  async search(params: ISearchParams): Promise<ISearchResult<I<%= singular(classify(name)) %>Entity>> {
    const { limit, page, sort, search } = params;

    const args: Prisma.<%= singular(classify(name)) %>FindManyArgs = {
      skip: (page - 1) * limit,
      take: limit,
    };

    if (sort) {
      args.orderBy = {
        [sort.column]: sort.direction,
      };
    }

    if (search) {
      args.where = {
        OR: [
          { email: { contains: search, mode: 'insensitive' } },
          { name: { contains: search, mode: 'insensitive' } },
        ],
      };
    }

    const data = await this.prisma.<%= singular(camelize(name)) %>.findMany(args);
    const total = await this.prisma.<%= singular(camelize(name)) %>.count();

    return { data, total };
  }
}
