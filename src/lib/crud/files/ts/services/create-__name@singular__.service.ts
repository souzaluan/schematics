import { Injectable } from '@nestjs/common';
import { I<%= classify(name) %>Repository } from '../interfaces/<%= name %>.repository.interface';
import { Create<%= singular(classify(name)) %>Data } from '../validators/create-<%= singular(name) %>.validator';

@Injectable()
export class Create<%= singular(classify(name)) %>Service {
  constructor(private readonly <%= singular(name) %>Repository: I<%= classify(name) %>Repository) {}

  async execute(data: Create<%= singular(classify(name)) %>Data) {
    return this.<%= singular(name) %>Repository.create(data);
  }
}
