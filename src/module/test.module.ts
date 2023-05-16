import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Test } from '../database/table/test'
import { TestController } from '../controller/test.controller'
import { TestService } from '../service/test.service'

@Module({
    imports: [TypeOrmModule.forFeature([Test])],
    providers: [TestService],
    controllers: [TestController],
})
export class TestModule {}
