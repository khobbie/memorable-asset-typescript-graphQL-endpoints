import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Asset extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

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
  @Column({ nullable: true })
  score_type_1: number;

  @Field(() => Number)
  @Column({ nullable: true })
  score_type_2: number;

  @Field(() => Number)
  @Column({ nullable: true })
  score_type_3: number;
}
