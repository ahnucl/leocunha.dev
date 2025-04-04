import { Injectable } from '@nestjs/common'

import { x, Id } from '@core'

@Injectable()
export class AppService {
  getHello(): string {
    const array = [Id.generate(), Id.generate(), Id.generate()]

    return 'Hello World! ' + x + array.join(', ')
  }
}
