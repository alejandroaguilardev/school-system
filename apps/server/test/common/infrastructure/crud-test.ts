import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

export class CrudTest {
  static async create(
    app: INestApplication,
    route: string,
    dto: any,
  ): Promise<request.Response> {
    return await request(app.getHttpServer())
      .post(route)
      .send(dto)
      .expect(201);
  }

  static async update(
    app: INestApplication,
    route: string,
    dto: any,
    dtoUpdate: any,
  ): Promise<request.Response> {
    const response = await request(app.getHttpServer())
      .post(route)
      .send(dto)
      .expect(201);

    return await request(app.getHttpServer())
      .put(`${route}/${response.body.data.id}`)
      .send(dtoUpdate)
      .expect(200);
  }

  static async remove(
    app: INestApplication,
    route: string,
    dto: any,
  ): Promise<request.Response> {
    const response = await request(app.getHttpServer())
      .post(route)
      .send(dto)
      .expect(201);

    return await request(app.getHttpServer())
      .delete(`${route}/${response.body.data.id}`)
      .expect(200);
  }

  static async search(
    app: INestApplication,
    route: string,
  ): Promise<request.Response> {
    return await request(app.getHttpServer())
      .get(`${route}`)
      .expect(200);
  }

  static async searchById(
    app: INestApplication,
    route: string,
    dto: any,
  ): Promise<request.Response> {
    const response = await request(app.getHttpServer())
      .post(route)
      .send(dto)
      .expect(201);

    return await request(app.getHttpServer())
      .get(`${route}/${response.body.data.id}`)
      .expect(200);
  }


  static async updateOnly(
    app: INestApplication,
    route: string,
    id: number,
    dto: any,
  ): Promise<request.Response> {

    return await request(app.getHttpServer())
      .put(`${route}/${id}`)
      .send(dto)
      .expect(200);
  }


  static async searchByIdOnly(
    app: INestApplication,
    route: string,
    dto: any,
  ): Promise<request.Response> {
    return await request(app.getHttpServer())
      .get(`${route}/${dto.id}`)
      .expect(200);
  }

  static async removeOnly(
    app: INestApplication,
    route: string,
    dto: any,
  ): Promise<request.Response> {
    return await request(app.getHttpServer())
      .delete(`${route}/${dto.id}`)
      .expect(200);
  }
}
