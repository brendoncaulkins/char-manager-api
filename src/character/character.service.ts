import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Character } from './character.entity';


@Injectable()
export class CharacterService {
    constructor(
        @InjectRepository(Character)
        private readonly characterRepo: Repository<Character>,
    ) { }

    async findAll(): Promise<Character[]> {
        return this.characterRepo.find();
    }
}
