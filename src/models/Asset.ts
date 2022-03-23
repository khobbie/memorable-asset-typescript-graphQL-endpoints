import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Min, Max } from "class-validator";

@Entity()
@ObjectType()
export class Asset extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field(() => String)
  @Column({ nullable: false })
  type: string;

  @Field(() => String)
  @Column({ nullable: false })
  filename: string;

  @Field(() => String)
  @Column({ nullable: false })
  extension: string;

  @Field(() => Number)
  @Min(0)
  @Max(100)
  @Column({ nullable: true })
  score_type_1: number;

  @Field(() => Number)
  @Min(0)
  @Max(100)
  @Column({ nullable: true })
  score_type_2: number;

  @Field(() => Number)
  @Min(0)
  @Max(100)
  @Column({ nullable: true })
  score_type_3: number;
}
