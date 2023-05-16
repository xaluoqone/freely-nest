import { Body, Controller, Get, Put } from '@nestjs/common'
import { TestService } from '../service/test.service'
import { Test } from '../database/table/test'

@Controller('test')
export class TestController {
    constructor(private readonly testService: TestService) {}

    @Get('/get')
    async getTest() {
        return this.testService.findAll()
    }

    @Put('/put')
    async getHello(@Body() test: Test) {
        return this.testService.insetOne(test)
    }
}
