import { Injectable } from '@nestjs/common';
import { Criteria } from '../../domain/criteria/criteria';
import { ResponseSearch } from '../../domain/response/response-search';
import { Repository as IRepository } from '../../domain/repository';
import { ObjectLiteral, Repository } from 'typeorm';
import { TypeormCriteriaConverter } from './typeorm-criteria-converter';

@Injectable()
export class TypeOrmRepository<Model> implements IRepository<Model> {
  constructor(private readonly repository: Repository<ObjectLiteral>) { }

  async save(data: Model): Promise<Model> {
    return this.repository.save(data) as Model;
  }

  async search(criteria: Criteria): Promise<ResponseSearch<Model>> {
    const { skip, take } = TypeormCriteriaConverter.converter(criteria);
    const [rows, count] = await this.repository.findAndCount({
      skip: skip * take,
      take,
    });

    return { rows: rows as Model[], count };
  }
  async searchById(id: number): Promise<Model | null> {
    return this.repository.findOneBy({ id }) as Model | null;
  }

  async update(id: number, data: Model): Promise<Model> {
    await this.repository.update(id, data) as Model;
    return { id, ...data };
  }

  async remove(id: number): Promise<Model> {
    const data = await this.searchById(id);
    await this.repository.delete(id) as Model;
    return data;
  }
}
