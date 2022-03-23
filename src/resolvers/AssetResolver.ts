import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import { Asset } from "../models/Asset";
import { CreateAssetRequest } from "../inputs/CreateAssetInput";
import { AddAssetScoresRequest } from "../inputs/AddAssetScoresInput";
import { AverageScore } from "../inputs/AverageAssetScoreInput";
import { Any, Connection, Double, getConnection, getManager } from "typeorm";

@Resolver()
export class AssetResolver {
  @Query(() => [Asset])
  async getAssets() {
    return await Asset.find();
  }

  @Query(() => Asset)
  async asset(@Arg("id") id: string) {
    return await Asset.findOne({ where: { id } });
  }

  @Mutation(() => Asset)
  async createAsset(@Arg("data") data: CreateAssetRequest) {
    const asset = Asset.create(data);
    await asset.save();
    return asset;
  }

  @Mutation(() => Number)
  async totalAssetsScores(@Arg("data") data: AddAssetScoresRequest) {
    const id = data.id;
    const asset = await Asset.findOne({ where: { id } });
    const totalScores = await this.totalScores(
      Number(asset?.score_type_1),
      Number(asset?.score_type_1),
      Number(asset?.score_type_1)
    );

    return totalScores;
  }

  async totalScores(
    score_type_1: number,
    score_type_2: number,
    score_type_3: number
  ) {
    return (await score_type_1) + score_type_2 + score_type_3;
  }

  @Query(() => String)
  async averageScore(@Arg("data") data: AverageScore) {
    const type = data.type;
    const scoreType = Number(data.score_type);
    // return "Hello World";

    let scoreType_i = "score_type_1";

    switch (scoreType) {
      case 1:
        scoreType_i = "score_type_1";
        break;
      case 2:
        scoreType_i = "score_type_2";
        break;
      case 3:
        scoreType_i = "score_type_3";
        break;

      default:
        return "ScoreType does not exist";

        break;
    }

    // return scoreType_i;

    const entityManager = getManager();
    let result = await entityManager.query(
      `
        SELECT AVG( $1) AS average_score FROM asset WHERE type=$2;
        `,
      [scoreType_i, type]
    );

    return result[0].average_score.toString(); //result[0].average_score.toString();
    /*
    return result
      .then((res) => {
        return res[0].average_score.toString();
      })
      .catch((e) => {
        return "Server Error";
      });

    // return Math.floor(result. .average_score).toString();
    */
  }
}
