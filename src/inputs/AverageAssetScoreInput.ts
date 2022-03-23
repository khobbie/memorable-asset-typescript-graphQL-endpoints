import { InputType, Field } from "type-graphql";

@InputType()
export class AverageScore {
  @Field()
  type: string;

  @Field()
  score_type: number;
}
