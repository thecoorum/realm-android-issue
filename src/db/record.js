import { Realm } from '@realm/react'

export default class Record extends Realm.Object {
  static schema = {
    name: 'Record',
    primaryKey: 'id',
    properties: {
      id: 'number',
      content: 'string'
    }
  }

  static create = ({ id, content }) => ({
    id,
    content
  })
}
