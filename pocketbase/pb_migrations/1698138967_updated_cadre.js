/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("03tpza2mh8kzxc5")

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ryg6jkrr",
    "name": "couleur_cadre",
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
  const collection = dao.findCollectionByNameOrId("03tpza2mh8kzxc5")

  // remove
  collection.schema.removeField("gei8yocs")

  // remove
  collection.schema.removeField("ryg6jkrr")

  return dao.saveCollection(collection)
})
