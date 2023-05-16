import { Module } from '@nestjs/common'
import { AppController } from '../controller/app.controller'
import { AppService } from '../service/app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Test } from '../database/table/test'
import { TestModule } from './test.module'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '81.69.16.43',
            port: 3306,
            username: 'xal',
            password: 'xaluoqone',
            database: 'freely',
            entities: [Test],
            synchronize: true,
        }),
        TestModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
