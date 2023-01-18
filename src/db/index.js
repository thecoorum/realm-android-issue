import { createRealmContext } from "@realm/react";

import Record from './record'

export const { RealmProvider, useRealm, useObject, useQuery } = createRealmContext({
  schema: [Record]
})
