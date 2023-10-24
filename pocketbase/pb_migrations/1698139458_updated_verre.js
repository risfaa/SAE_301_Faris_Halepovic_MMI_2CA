/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yp8aevoq17c7x4d")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b5qf3bhs",
    "name": "couleur_verre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "yp8aevoq17c7x4d",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yp8aevoq17c7x4d")

  // remove
  collection.schema.removeField("b5qf3bhs")

  return dao.saveCollection(collection)
})
