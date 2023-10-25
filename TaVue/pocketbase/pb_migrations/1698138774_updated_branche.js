/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vb5vanfvpvrhz98")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yf6gzpqx",
    "name": "couleur_branche",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "jyiqdzsu7qcaunn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vb5vanfvpvrhz98")

  // remove
  collection.schema.removeField("yf6gzpqx")

  return dao.saveCollection(collection)
})
