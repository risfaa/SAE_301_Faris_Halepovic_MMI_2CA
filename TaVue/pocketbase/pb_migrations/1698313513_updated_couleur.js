/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jyiqdzsu7qcaunn")

  collection.name = "Couleur"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jyiqdzsu7qcaunn")

  collection.name = "couleur"

  return dao.saveCollection(collection)
})
