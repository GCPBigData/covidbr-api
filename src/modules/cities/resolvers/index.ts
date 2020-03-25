import { Query, Resolver, Arg } from 'type-graphql'
import { fromNullable } from 'fp-ts/lib/Option'
import { CityFilterInput } from '../typeDefs/CityFilterInput'
import { City } from '../typeDefs/City'
import { findCity } from '../services/queries'

@Resolver(() => City)
export class CityResolver {
  @Query(() => City, { nullable: true })
  async city (@Arg('filter', { nullable: true }) filter?: CityFilterInput): Promise<City | null> {
    return findCity(fromNullable(filter))
  }
}