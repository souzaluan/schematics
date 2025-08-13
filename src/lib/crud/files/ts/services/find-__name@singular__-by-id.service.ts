import { Injectable, NotFoundException } from '@nestjs/common';
import { I<%= classify(name) %>Repository } from '../interfaces/<%= name %>.repository.interface';

@Injectable()
export class Find<%= singular(classify(name)) %>ByIdService {
  constructor(private readonly <%= singular(name) %>Repository: I<%= classify(name) %>Repository) {}

  async execute(id: string) {
    const <%= singular(name) %> = await this.<%= singular(name) %>Repository.findById(id);

    if (!<%= singular(name) %>) {
      throw new NotFoundException('<%= singular(classify(name)) %> not found');
    }

    return <%= singular(name) %>;
  }
}
