import { Module } from '@nestjs/common';
import { Create<%= singular(classify(name)) %>Service } from './services/create-<%= singular(name) %>.service';
import { I<%= classify(name) %>Repository } from './interfaces/<%= name %>.repository.interface';
import { Prisma<%= classify(name) %>Repository } from './repositories/prisma-<%= name %>.repository';
import { DatabaseModule } from 'src/database/database.module';
import { Update<%= singular(classify(name)) %>Service } from './services/update-<%= singular(name) %>.service';
import { <%= classify(name) %>Controller } from './<%= name %>.controller';
import { Find<%= singular(classify(name)) %>ByIdService } from './services/find-<%= singular(name) %>-by-id.service';
import { Search<%= classify(name) %>Service } from './services/search-<%= name %>.service';
import { Delete<%= singular(classify(name)) %>Service } from './services/delete-<%= singular(name) %>.service';

@Module({
  imports: [DatabaseModule],
  controllers: [<%= classify(name) %>Controller],
  providers: [
    Create<%= singular(classify(name)) %>Service,
    Update<%= singular(classify(name)) %>Service,
    Find<%= singular(classify(name)) %>ByIdService,
    Search<%= classify(name) %>Service,
    Delete<%= singular(classify(name)) %>Service,
    {
      provide: I<%= classify(name) %>Repository,
      useClass: Prisma<%= classify(name) %>Repository,
    },
  ],
})
export class <%= classify(name) %>Module {}
