import { Injectable } from '@nestjs/common';
import { I<%= classify(name) %>Repository } from '../interfaces/<%= name %>.repository.interface';
import { Update<%= singular(classify(name)) %>Data } from '../validators/update-<%= singular(name) %>.validator';

@Injectable()
export class Update<%= singular(classify(name)) %>Service {
  constructor(private readonly <%= singular(name) %>Repository: I<%= classify(name) %>Repository) {}

  async execute(id: string, data: Update<%= singular(classify(name)) %>Data) {
    return this.<%= singular(name) %>Repository.update(id, data);
  }
}
