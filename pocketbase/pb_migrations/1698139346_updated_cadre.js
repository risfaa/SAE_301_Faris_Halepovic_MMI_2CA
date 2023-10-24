/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("03tpza2mh8kzxc5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gei8yocs",
    "name": "cadre_mat",
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
  const collection = dao.findCollectionByNameOrId("03tpza2mh8kzxc5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gei8yocs",
    "name": "cadre_materiaux",
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
