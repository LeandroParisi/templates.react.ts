import { ITag } from 'Shared/CommonComponents/DumbComponents/TagsList/TagsList'

export const SerializeTags = (values : Array<any>) : Array<ITag> => values.map((value) => ({ id: value, name: value }))
