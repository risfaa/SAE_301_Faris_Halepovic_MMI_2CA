/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yp8aevoq17c7x4d")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "trfjtptv",
    "name": "verre_mat",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "igy1z38pqvcjbjn",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "trfjtptv",
    "name": "verre_materiaux",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "igy1z38pqvcjbjn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
