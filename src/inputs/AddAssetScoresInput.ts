import { InputType, Field } from "type-graphql";

@InputType()
export class AddAssetScoresRequest {
  @Field()
  id: number;

  // @Field()
  // score_type_1: number;

  // @Field()
  // score_type_2: number;

  // @Field()
  // score_type_3: number;
}
