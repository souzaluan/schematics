import { Create<%= singular(classify(name)) %>Data } from './create-<%= singular(name) %>.validator';

export class Update<%= singular(classify(name)) %>Data extends Create<%= singular(classify(name)) %>Data {}
