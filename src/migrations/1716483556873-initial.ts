import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1716483556873 implements MigrationInterface {
    name = 'Initial1716483556873'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "faults" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_00c45a28afbba70a1aaae9f25cd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cars" ("id" SERIAL NOT NULL, "brand" character varying NOT NULL, "color" character varying NOT NULL, "garageId" integer, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "garages" ("id" SERIAL NOT NULL, "address" character varying NOT NULL, "capacity" character varying NOT NULL, CONSTRAINT "PK_5aab32f702d77c87b2555553919" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "car_fault" ("fault_id" integer NOT NULL, "car_id" integer NOT NULL, CONSTRAINT "PK_b0104684085e4a0776575d17f50" PRIMARY KEY ("fault_id", "car_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7f66eb935008d5246b47bd0b76" ON "car_fault" ("fault_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_8b40c660ac84bd1081ff93bb97" ON "car_fault" ("car_id") `);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_31f371255dc7adf8be81d032e4e" FOREIGN KEY ("garageId") REFERENCES "garages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "car_fault" ADD CONSTRAINT "FK_7f66eb935008d5246b47bd0b76c" FOREIGN KEY ("fault_id") REFERENCES "faults"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "car_fault" ADD CONSTRAINT "FK_8b40c660ac84bd1081ff93bb97c" FOREIGN KEY ("car_id") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car_fault" DROP CONSTRAINT "FK_8b40c660ac84bd1081ff93bb97c"`);
        await queryRunner.query(`ALTER TABLE "car_fault" DROP CONSTRAINT "FK_7f66eb935008d5246b47bd0b76c"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_31f371255dc7adf8be81d032e4e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8b40c660ac84bd1081ff93bb97"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7f66eb935008d5246b47bd0b76"`);
        await queryRunner.query(`DROP TABLE "car_fault"`);
        await queryRunner.query(`DROP TABLE "garages"`);
        await queryRunner.query(`DROP TABLE "cars"`);
        await queryRunner.query(`DROP TABLE "faults"`);
    }

}
