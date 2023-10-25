/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vb5vanfvpvrhz98",
    "created": "2023-10-24 09:10:05.332Z",
    "updated": "2023-10-24 09:10:05.332Z",
    "name": "branche",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ffkto6ph",
        "name": "libelle_branche",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vb5vanfvpvrhz98");

  return dao.deleteCollection(collection);
})
