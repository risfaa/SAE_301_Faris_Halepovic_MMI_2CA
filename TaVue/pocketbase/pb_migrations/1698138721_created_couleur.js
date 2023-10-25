/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jyiqdzsu7qcaunn",
    "created": "2023-10-24 09:12:01.105Z",
    "updated": "2023-10-24 09:12:01.105Z",
    "name": "couleur",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yq97ogmq",
        "name": "libelle_couleur",
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
  const collection = dao.findCollectionByNameOrId("jyiqdzsu7qcaunn");

  return dao.deleteCollection(collection);
})
