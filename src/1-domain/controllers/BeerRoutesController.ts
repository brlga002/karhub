import { ApplicationError } from '0-core/application/result/ApplicationError'
import { ApplicationResult } from '0-core/application/result/ApplicationResult'
import { Either } from '0-core/domain/result/Either'
import { CreateEntity } from '0-core/interfaces/controllers/CreateEntity'
import { DeleteEntity } from '0-core/interfaces/controllers/DeleteEntity'
import { GetEntity } from '0-core/interfaces/controllers/GetEntity'
import { ListGetEntities } from '0-core/interfaces/controllers/ListGetEntities'
import { UpdateEntity } from '0-core/interfaces/controllers/UpdateEntity'
import { BeerDto, NewBeerDto, UpdateBeerDto } from '1-domain/entities/Beer/Beer'
import { Playlist } from '1-domain/services/PlaylistService'

export type InputFindBeerStyleAndPlaylist = {
  temperature: number
}

export type ResponseFindBeerStyleAndPlaylist = {
  beerStyle: string
  playlist: Playlist
}

export type OutputFindBeerStyleAndPlaylist = Promise<
  Either<ApplicationError, ApplicationResult<ResponseFindBeerStyleAndPlaylist>>
>

export interface BeerRoutesController
  extends CreateEntity<NewBeerDto>,
    ListGetEntities<BeerDto>,
    GetEntity<BeerDto>,
    UpdateEntity<UpdateBeerDto>,
    DeleteEntity {
  findBeerStyleAndPlaylist(
    input: InputFindBeerStyleAndPlaylist,
  ): OutputFindBeerStyleAndPlaylist
}
