import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Create<%= singular(classify(name)) %>Data } from './validators/create-<%= singular(name) %>.validator';
import { Create<%= singular(classify(name)) %>Service } from './services/create-<%= singular(name) %>.service';
import { Update<%= singular(classify(name)) %>Data } from './validators/update-<%= singular(name) %>.validator';
import { Update<%= singular(classify(name)) %>Service } from './services/update-<%= singular(name) %>.service';
import { Delete<%= singular(classify(name)) %>Service } from './services/delete-<%= singular(name) %>.service';
import { Find<%= singular(classify(name)) %>ByIdService } from './services/find-<%= singular(name) %>-by-id.service';
import { Search<%= classify(name) %>Service } from './services/search-<%= name %>.service';
import { Search<%= classify(name) %>Query } from './validators/search-<%= name %>.validator';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { I<%= singular(classify(name)) %>Entity } from './interfaces/<%= singular(name) %>.entity.interface';
import { ISearch<%= classify(name) %>Result } from './interfaces/<%= name %>.repository.interface';

@Controller('/<%= dasherize(name) %>')
export class <%= classify(name) %>Controller {
  constructor(
    private readonly create<%= singular(classify(name)) %>Service: Create<%= singular(classify(name)) %>Service,
    private readonly update<%= singular(classify(name)) %>Service: Update<%= singular(classify(name)) %>Service,
    private readonly delete<%= singular(classify(name)) %>Service: Delete<%= singular(classify(name)) %>Service,
    private readonly find<%= singular(classify(name)) %>ByIdService: Find<%= singular(classify(name)) %>ByIdService,
    private readonly search<%= classify(name) %>Service: Search<%= classify(name) %>Service,
  ) {}

  @Post('/')
  @ApiOperation({ summary: 'Create <%= singular(name) %>' })
  @ApiCreatedResponse({
    description: '<%= singular(classify(name)) %> has been successfully created',
    type: I<%= singular(classify(name)) %>Entity,
  })
  @ApiBadRequestResponse({ description: 'Validation error' })
  async create(@Body() body: Create<%= singular(classify(name)) %>Data) {
    return this.create<%= singular(classify(name)) %>Service.execute(body);
  }

  @Get('/')
  @ApiOperation({ summary: 'Search <%= name %>' })
  @ApiOkResponse({
    description: '<%= classify(name) %> has been listed',
    type: ISearch<%= classify(name) %>Result,
  })
  @ApiBadRequestResponse({ description: 'Validation error' })
  @ApiOperation({ summary: 'Search <%= name %>' })
  async search(@Query() query: Search<%= classify(name) %>Query) {
    return this.search<%= classify(name) %>Service.execute(query);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update <%= singular(name) %>' })
  @ApiOkResponse({
    description: '<%= singular(classify(name)) %> has been successfully updated',
    type: I<%= singular(classify(name)) %>Entity,
  })
  @ApiNotFoundResponse({ description: '<%= singular(classify(name)) %> not found' })
  @ApiBadRequestResponse({ description: 'Validation error' })
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: Update<%= singular(classify(name)) %>Data,
  ) {
    return this.update<%= singular(classify(name)) %>Service.execute(id, body);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete <%= singular(name) %>' })
  @ApiOkResponse({
    description: '<%= singular(classify(name)) %> has been successfully deleted',
    type: I<%= singular(classify(name)) %>Entity,
  })
  @ApiBadRequestResponse({ description: 'Validation error' })
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.delete<%= singular(classify(name)) %>Service.execute(id);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Find <%= singular(name) %> by ID' })
  @ApiOkResponse({
    description: '<%= singular(classify(name)) %> has been found',
    type: I<%= singular(classify(name)) %>Entity,
  })
  @ApiNotFoundResponse({ description: '<%= singular(classify(name)) %> not found' })
  @ApiBadRequestResponse({ description: 'Validation error' })
  async findById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.find<%= singular(classify(name)) %>ByIdService.execute(id);
  }
}
