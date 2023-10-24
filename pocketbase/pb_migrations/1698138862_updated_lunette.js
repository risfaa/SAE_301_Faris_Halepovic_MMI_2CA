/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x1uy34jzcanv79l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bzwn5gff",
    "name": "compo_branche",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vb5vanfvpvrhz98",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rshngl36",
    "name": "compo_verre",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mtvzuvxv",
    "name": "compo_cadre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "03tpza2mh8kzxc5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x1uy34jzcanv79l")

  // remove
  collection.schema.removeField("bzwn5gff")

  // remove
  collection.schema.removeField("rshngl36")

  // remove
  collection.schema.removeField("mtvzuvxv")

  return dao.saveCollection(collection)
})
