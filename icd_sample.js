var json = {
    "version": "1.0",
    "basePath": "http://jsondoc.eu01.aws.af.cm/api",
    "apis": [{
        "jsondocId": "4dfa8a6f-c036-4b80-9215-a840999e2e96",
        "name": "City Service",
        "description": "Methods for Cities",
        "methods": [{
            "jsondocId": "c9bcc765-9d1b-4876-a813-bade1df1f2e5",
            "path": "/cities/{name}",
            "description": "Gets a city with the given name. (Allowed values are just to demonstrate the annotation attribute)",
            "verb": "GET",
            "produces": ["application/json", "application/xml"],
            "consumes": [],
            "headers": [],
            "pathparameters": [{
                "jsondocId": "2f0f3e00-7c52-41f2-8ff1-7ae6b8da37b0",
                "name": "name",
                "description": "The city name",
                "type": "string",
                "required": "true",
                "allowedvalues": ["Melbourne", "Sydney", "Perth"],
                "format": ""
            }],
            "queryparameters": [],
            "bodyobject": null,
            "response": {
                "jsondocId": "6883ec51-ea97-4ede-a82c-4f327b938992",
                "object": "city",
                "multiple": "false",
                "mapKeyObject": null,
                "mapValueObject": null,
                "map": null
            },
            "apierrors": [{
                "jsondocId": "19480f7f-9b6e-4064-a6ed-2e724f603fcd",
                "code": "2000",
                "description": "City not found"
            }, {
                "jsondocId": "ca71c49d-c397-4bf5-b0e3-805c966d82a2",
                "code": "9000",
                "description": "Illegal argument"
            }]
        }, {
            "jsondocId": "03e3d94e-32c3-4c45-8def-54ce3da4ebe3",
            "path": "/cities/{id}",
            "description": "Modifies a city",
            "verb": "PUT",
            "produces": ["application/json", "application/xml"],
            "consumes": ["application/json"],
            "headers": [],
            "pathparameters": [{
                "jsondocId": "6c454e3e-64a0-4212-9a58-6a08ecf38a09",
                "name": "id",
                "description": "The city ID",
                "type": "integer",
                "required": "true",
                "allowedvalues": [],
                "format": ""
            }],
            "queryparameters": [],
            "bodyobject": {
                "jsondocId": "e9811963-fa62-4569-b196-6dde52810df2",
                "object": "city",
                "multiple": "false",
                "mapKeyObject": null,
                "mapValueObject": null,
                "map": null
            },
            "response": {
                "jsondocId": "f4cf250b-0dfa-45d4-ad78-37e1521e8978",
                "object": "city",
                "multiple": "false",
                "mapKeyObject": null,
                "mapValueObject": null,
                "map": null
            },
            "apierrors": []
        }, {
            "jsondocId": "073af9ef-1920-46ee-948e-6059c458b29a",
            "path": "/cities/{id}",
            "description": "Deleted a city by its ID",
            "verb": "DELETE",
            "produces": [],
            "consumes": [],
            "headers": [],
            "pathparameters": [{
                "jsondocId": "87a00ae1-202e-4951-b29c-b974c5a23f72",
                "name": "id",
                "description": "The city ID",
                "type": "integer",
                "required": "true",
                "allowedvalues": [],
                "format": ""
            }],
            "queryparameters": [],
            "bodyobject": null,
            "response": null,
            "apierrors": []
        }, {
            "jsondocId": "dc8b13b5-fe9a-4837-a2e6-b2b669728070",
            "path": "/cities/map",
            "description": "Gets a map of cities",
            "verb": "GET",
            "produces": ["application/json"],
            "consumes": [],
            "headers": [],
            "pathparameters": [],
            "queryparameters": [],
            "bodyobject": null,
            "response": {
                "jsondocId": "9244b5dc-b0bf-4213-af31-1c84d517c874",
                "object": "map",
                "multiple": "false",
                "mapKeyObject": "string",
                "mapValueObject": "city",
                "map": "map"
            },
            "apierrors": []
        }]
    }],
    "objects": [{
        "jsondocId": "85690525-0c1c-4bb0-ae69-4a6f04156d81",
        "name": "author",
        "description": "An author object belonging to an external jar",
        "fields": [{
            "jsondocId": "f710d148-2f49-402a-bf3c-86ea34cea30d",
            "name": "id",
            "type": "integer",
            "multiple": "false",
            "description": "The author's id",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "6a20f034-e83c-448b-9f2d-88edd8a1c67e",
            "name": "name",
            "type": "string",
            "multiple": "false",
            "description": "The author's name",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "233e425e-06d2-475a-a529-4a0c50e8bede",
            "name": "surname",
            "type": "string",
            "multiple": "false",
            "description": "The author's surname",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }]
    }, {
        "jsondocId": "3204b655-2e78-42bf-8553-39c753a54bb9",
        "name": "book",
        "description": "A book object belonging to an external jar",
        "fields": [{
            "jsondocId": "ddb98243-4b42-4c9e-a0d6-fe7678a80954",
            "name": "id",
            "type": "integer",
            "multiple": "false",
            "description": "The book's id",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "e6b07047-8266-490e-b80f-9270e66556a7",
            "name": "name",
            "type": "string",
            "multiple": "false",
            "description": "The book's title",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "e5327650-820f-49ba-857a-2ee8a1fddbc5",
            "name": "author",
            "type": "author",
            "multiple": "false",
            "description": "The book's author",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }]
    }, {
        "jsondocId": "2bdf6cfa-9752-43d5-9946-ebc2df81ae8b",
        "name": "city",
        "description": "",
        "fields": [{
            "jsondocId": "78ee8d7d-c991-43e9-9d40-835e590132a8",
            "name": "name",
            "type": "string",
            "multiple": "false",
            "description": "The name of the city",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "aab5cd96-5819-410c-851e-278b39eda112",
            "name": "population",
            "type": "integer",
            "multiple": "false",
            "description": "The population of the location",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "b62f6b3a-e3c9-438f-a8c6-0e924b45bf11",
            "name": "squarekm",
            "type": "integer",
            "multiple": "false",
            "description": "The square km of the location",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }]
    }, {
        "jsondocId": "9386efc9-93d5-4d99-931c-eb0ce24f85d6",
        "name": "country",
        "description": "",
        "fields": [{
            "jsondocId": "be1a9db1-a7aa-4b34-bd71-9fed2d395c90",
            "name": "name",
            "type": "string",
            "multiple": "false",
            "description": "The name of the country",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "a5c003e8-4aed-45df-a8a9-4de5f2a5c5cd",
            "name": "cities",
            "type": "city",
            "multiple": "true",
            "description": "The cities of the country",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "7c8b938c-0d93-43c4-9a92-6a0149002fce",
            "name": "population",
            "type": "integer",
            "multiple": "false",
            "description": "The population of the location",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "d896832d-632a-4171-ae97-7e4c2a29d437",
            "name": "squarekm",
            "type": "integer",
            "multiple": "false",
            "description": "The square km of the location",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }]
    }, {
        "jsondocId": "979db7c3-ee3d-4249-95fa-c7e1cf8bc0e9",
        "name": "user",
        "description": "",
        "fields": [{
            "jsondocId": "c4b9623a-420b-4742-9c9d-9b2725d6b6b9",
            "name": "id",
            "type": "integer",
            "multiple": "false",
            "description": "The ID of the user",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "0608a2d5-41ad-411c-bff0-63e37373e5a0",
            "name": "username",
            "type": "string",
            "multiple": "false",
            "description": "The username of the user",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "121703eb-a72b-4c68-b129-df5b19c447d9",
            "name": "age",
            "type": "integer",
            "multiple": "false",
            "description": "The age of the user",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "gender",
            "type": "string",
            "multiple": "false",
            "description": "The gender of the user",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }]
    }]
};