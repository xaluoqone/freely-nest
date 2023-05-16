import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Test } from '../database/table/test'
import { Repository } from 'typeorm'

@Injectable()
export class TestService {
    constructor(
        @InjectRepository(Test) private testRepository: Repository<Test>,
    ) {}

    async findAll() {
        return this.testRepository.find()
    }

    async insetOne(test: Test) {
        await this.testRepository.insert(test)
        return test
    }
}
