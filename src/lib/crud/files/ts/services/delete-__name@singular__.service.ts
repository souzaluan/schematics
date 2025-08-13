import { Injectable } from '@nestjs/common';
import { I<%= classify(name) %>Repository } from '../interfaces/<%= name %>.repository.interface';

@Injectable()
export class Delete<%= singular(classify(name)) %>Service {
  constructor(private readonly <%= singular(name) %>Repository: I<%= classify(name) %>Repository) {}

  async execute(id: string) {
    return this.<%= singular(name) %>Repository.delete(id);
  }
}
