import { InputType, Field } from "type-graphql";

@InputType()
export class CreateAssetRequest {
  @Field()
  type: string;

  @Field()
  filename: string;

  @Field()
  extension: string;

  @Field({ defaultValue: 0 })
  score_type_1: number;

  @Field({ defaultValue: 0 })
  score_type_2: number;

  @Field({ defaultValue: 0 })
  score_type_3: number;
}
