var json = {
    "version": "1.0",
    "basePath": "https://hastaffdemo.agilexhealth.com/OrdersManagementResources/rest/patient/{assigning-authority}/{patient-id}/orders",
    "apis": [{
        "jsondocId": "4dfa8a6f-c036-4b80-9215-a840999e2e96",
        "name": "Orders Management Services",
        "description": "Methods for Orders Management",
        "methods": [ 
        {
            "jsondocId": "610cbac8-2489-44ab-8d82-7d8050eaf84e",
            "path": "/site/{site}/accept-order?orderType={orderType}&desiredDateTime={desiredDateTime}&patientLocation={patientLocation}&procedures={procedures}&orderIen={orderIen}", 
            "description": "Verifies an order to be accepted",
            "verb": "GET",
            "produces": ["application/json"],
            "consumes": [],
            "headers": [
                {
                    "name":"Authorization",
                    "description": "The OAUTH token (i.e. bearer some_token_id)"
                }
            ],
            "pathparameters": [
            	{
            		"name": "assigning-authority",
            		"description": "The assigning authority represents which system and facility (i.e. Vista, CDW, or SED)",
            		"type": "String",
            		"required": true
            	},
            	{
            		"name": "patient-id",
            		"description": "The unique identifier of the patient",
            		"type": "String",
            		"required": true
            	},
            	{
            		"name": "site",
            		"description": "The site id from the facility code",
                    "type": "String",
                    "required": true
            	}
            ],
            "queryparameters": [
            	{
            		"name":"orderType",
            		"description": "The type of order (RA is for Radiology)",
            		"type":"String",
            		"required": true,
            		"allowedvalues": ["RA"]
            	},
            	{
            		"name": "desiredDateTime",
            		"description": "This is the desired date for the order",
            		"type":"String",
            		"required": true
            	},
            	{
            		"name": "patientLocation",
            		"description": "The location of the patient",
            		"type":"String",
            		"required": true
            	},
            	{
            		"name": "procedures",
            		"description": "The procedure that is being ordered",
            		"type":"String",
            		"required": true
            	},
            	{
            		"name": "orderIen",
            		"description": "The unique identifier of the order (not required for new orders)",
            		"type":"String",
            		"required": false
            	}
            ],
            "bodyobject": null,
            "response": {
                "jsondocId": "8b5f362e-e198-4a8d-8e91-1c06cd158498",
                "object": "Text",
                "multiple": "false",
                "mapKeyObject": null,
                "mapValueObject": null,
                "map": null
            },
            "apierrors": []
        },
        {
            "jsondocId": "c9bcc765-9d1b-4876-a813-bade1df1f2e5",
            "path": "/site/{site}/admissions",
            "description": "Gets the patients admissions",
            "verb": "GET",
            "produces": ["application/json"],
            "consumes": [],
            "headers": [
                {
                    "name":"Authorization",
                    "description": "The OAUTH token (i.e. bearer some_token_id)"
                }
            ],
            "pathparameters": [
                {
                    "name": "assigning-authority",
                    "description": "The assigning authority represents which system and facility (i.e. Vista, CDW, or SED)",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "patient-id",
                    "description": "The unique identifier of the patient",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "site",
                    "description": "The site id from the facility code",
                    "type": "String",
                    "required": true
                }
            ],
            "queryparameters": [],
            "bodyobject": null,
            "response": {
                "jsondocId": "6883ec51-ea97-4ede-a82c-4f327b938992",
                "object": "Admissions",
                "multiple": "false",
                "mapKeyObject": null,
                "mapValueObject": null,
                "map": null
            },
            "apierrors": []
        },
        {
            "jsondocId": "073af9ef-1920-46ee-948e-6059c458b29a",
            "path": "/site/{site}/category-supplements?displayGroup={displayGroup}&category={category}",
            "description": "Will return a picklist entry for each selection item that is triggered by the category that the user passes in.",
            "verb": "GET",
            "produces": ["application/json"],
            "consumes": [],
            "headers": [
                {
                    "name":"Authorization",
                    "description": "The OAUTH token (i.e. bearer some_token_id)"
                }
            ],
            "pathparameters": [
                {
                    "name": "assigning-authority",
                    "description": "The assigning authority represents which system and facility (i.e. Vista, CDW, or SED)",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "patient-id",
                    "description": "The unique identifier of the patient",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "site",
                    "description": "The site id from the facility code",
                    "type": "String",
                    "required": true
                }
            ],
            "queryparameters": [
                {
                    "name":"displayGroup",
                    "description": "The imaging type",
                    "type":"String",
                    "required": true
                },
                {
                    "name":"category",
                    "description": "A valid category IEN (“C” or “S”).",
                    "type":"String",
                    "required": true,
                    "allowedvalues": ["C", "S"]
                }
            ],
            "bodyobject": null,
            "response": {
                "jsondocId": "6883ec51-ea97-4ede-a82c-4f327b938992",
                "object": "OrderPickListItemEntries",
                "multiple": "false",
                "mapKeyObject": null,
                "mapValueObject": null,
                "map": null
            },
            "apierrors": []
        }, 
        {
            "jsondocId": "dc8b13b5-fe9a-4837-a2e6-b2b669728070",
            "path": "/site/{site}/clinics",
            "description": "Will return a list of hospital clinics.",
            "verb": "GET",
            "produces": ["application/json"],
            "consumes": [],
            "headers": [
                {
                    "name":"Authorization",
                    "description": "The OAUTH token (i.e. bearer some_token_id)"
                }
            ],
            "pathparameters": [
                {
                    "name": "assigning-authority",
                    "description": "The assigning authority represents which system and facility (i.e. Vista, CDW, or SED)",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "patient-id",
                    "description": "The unique identifier of the patient",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "site",
                    "description": "The site id from the facility code",
                    "type": "String",
                    "required": true
                }
            ],
            "queryparameters": [],
            "bodyobject": null,
            "response": {
                "jsondocId": "6883ec51-ea97-4ede-a82c-4f327b938992",
                "object": "HospitalLocations",
                "multiple": "false",
                "mapKeyObject": null,
                "mapValueObject": null,
                "map": null
            },
            "apierrors": []
        },
        {
            "jsondocId": "3eab9ad2-ce25-4f30-afa6-4857ff91987c",
            "path": "/site/{site}/creatininetest",
            "description": "Get lab result of last Creatinine test.",
            "verb": "GET",
            "produces": ["application/json"],
            "consumes": [],
            "headers": [
                {
                    "name":"Authorization",
                    "description": "The OAUTH token (i.e. bearer some_token_id)"
                }
            ],
            "pathparameters": [
                {
                    "name": "assigning-authority",
                    "description": "The assigning authority represents which system and facility (i.e. Vista, CDW, or SED)",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "patient-id",
                    "description": "The unique identifier of the patient",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "site",
                    "description": "The site id from the facility code",
                    "type": "String",
                    "required": true
                }
            ],
            "queryparameters": [],
            "bodyobject": null,
            "response": {
                "jsondocId": "9f884117-da3e-48a2-bd57-7b4a2a19536d",
                "object": "LabResult",
                "multiple": "false",
                "mapKeyObject": null,
                "mapValueObject": null,
                "map": null
            },
            "apierrors": []
        },
        {
            "jsondocId": "17b07fa3-50ad-4e66-b0d5-e10f777a8fa7",
            "path": "/site/{site}/custom?status={status}&startDate={startDate}&endDate={endDate}",
            "description": "Get list of orders grouped by Order Type.",
            "verb": "GET",
            "produces": ["application/json"],
            "consumes": [],
            "headers": [
                {
                    "name":"Authorization",
                    "description": "The OAUTH token (i.e. bearer some_token_id)"
                }
            ],
            "pathparameters": [
                {
                    "name": "assigning-authority",
                    "description": "The assigning authority represents which system and facility (i.e. Vista, CDW, or SED)",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "patient-id",
                    "description": "The unique identifier of the patient",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "site",
                    "description": "The site id from the facility code",
                    "type": "String",
                    "required": true
                }
            ],
            "queryparameters": [
                {
                    "name":"status",
                    "description": "The status of the results to return (i.e. All, Only Imaging, Unsigned, etc.)",
                    "type":"String",
                    "required": true
                },
                {
                    "name":"startDate",
                    "description": "The startDate of the order",
                    "type":"String",
                    "required": false
                },
                {
                    "name":"endDate",
                    "description": "The endDate of the order",
                    "type":"String",
                    "required": false
                }
            ],
            "bodyobject": null,
            "response": {
                "jsondocId": "c71971b4-51cf-4569-b676-e6f76a76942d",
                "object": "GroupedOrderTypes",
                "multiple": "false",
                "mapKeyObject": null,
                "mapValueObject": null,
                "map": null
            },
            "apierrors": []
        },
        {
            "jsondocId": "f3c858c6-0766-4350-9073-f8c03c0103e3",
            "path": "/site/{site}/imaging-types",
            "description": "Get the available imaging types",
            "verb": "GET",
            "produces": ["application/json"],
            "consumes": [],
            "headers": [
                {
                    "name":"Authorization",
                    "description": "The OAUTH token (i.e. bearer some_token_id)"
                }
            ],
            "pathparameters": [
                {
                    "name": "assigning-authority",
                    "description": "The assigning authority represents which system and facility (i.e. Vista, CDW, or SED)",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "patient-id",
                    "description": "The unique identifier of the patient",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "site",
                    "description": "The site id from the facility code",
                    "type": "String",
                    "required": true
                }
            ],
            "queryparameters": [],
            "bodyobject": null,
            "response": {
                "jsondocId": "7c8ff87d-5b8a-4e5c-8eaa-4f699d358943",
                "object": "OrderImagingTypes",
                "multiple": "false",
                "mapKeyObject": null,
                "mapValueObject": null,
                "map": null
            },
            "apierrors": []
        },
        {
            "jsondocId": "fc2f5092-e975-41aa-84eb-4e775b141d5d",
            "path": "/site/{site}/imaging-lists?displayGroup={displayGroup}",
            "description": "Get the available imaging types",
            "verb": "GET",
            "produces": ["application/json"],
            "consumes": [],
            "headers": [
                {
                    "name":"Authorization",
                    "description": "The OAUTH token (i.e. bearer some_token_id)"
                }
            ],
            "pathparameters": [
                {
                    "name": "assigning-authority",
                    "description": "The assigning authority represents which system and facility (i.e. Vista, CDW, or SED)",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "patient-id",
                    "description": "The unique identifier of the patient",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "site",
                    "description": "The site id from the facility code",
                    "type": "String",
                    "required": true
                }
            ],
            "queryparameters": [
                {
                    "name":"displayGroup",
                    "description": "The imaging type",
                    "type":"String",
                    "required": true
                }
            ],
            "bodyobject": null,
            "response": {
                "jsondocId": "f90e5c04-8e4c-4648-9f8d-7a1e0d53ae02",
                "object": "OrderImagingLists",
                "multiple": "false",
                "mapKeyObject": null,
                "mapValueObject": null,
                "map": null
            },
            "apierrors": []
        },
        {
            "jsondocId": "191f90e9-1e34-4c7d-860f-376ea16dafc2",
            "path": "/site/{site}/inpatient-locations",
            "description": "Get the inpatient ordering locations",
            "verb": "GET",
            "produces": ["application/json"],
            "consumes": [],
            "headers": [
                {
                    "name":"Authorization",
                    "description": "The OAUTH token (i.e. bearer some_token_id)"
                }
            ],
            "pathparameters": [
                {
                    "name": "assigning-authority",
                    "description": "The assigning authority represents which system and facility (i.e. Vista, CDW, or SED)",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "patient-id",
                    "description": "The unique identifier of the patient",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "site",
                    "description": "The site id from the facility code",
                    "type": "String",
                    "required": true
                }
            ],
            "queryparameters": [],
            "bodyobject": null,
            "response": {
                "jsondocId": "58e3a1ad-320b-4acd-ab60-0cbcf7254509",
                "object": "OrderPickListItemEntries",
                "multiple": "false",
                "mapKeyObject": null,
                "mapValueObject": null,
                "map": null
            },
            "apierrors": []
        },
        {
            "jsondocId": "6f88661b-8943-41c8-baac-490c39a81a00",
            "path": "/site/{site}/locations",
            "description": "Get the outpatient ordering locations",
            "verb": "GET",
            "produces": ["application/json"],
            "consumes": [],
            "headers": [
                {
                    "name":"Authorization",
                    "description": "The OAUTH token (i.e. bearer some_token_id)"
                }
            ],
            "pathparameters": [
                {
                    "name": "assigning-authority",
                    "description": "The assigning authority represents which system and facility (i.e. Vista, CDW, or SED)",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "patient-id",
                    "description": "The unique identifier of the patient",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "site",
                    "description": "The site id from the facility code",
                    "type": "String",
                    "required": true
                }
            ],
            "queryparameters": [],
            "bodyobject": null,
            "response": {
                "jsondocId": "b1684b1c-aa9a-4152-a398-8a0550d5a1c4",
                "object": "HospitalLocations",
                "multiple": "false",
                "mapKeyObject": null,
                "mapValueObject": null,
                "map": null
            },
            "apierrors": []
        },
        {
            "jsondocId": "1f7a18f9-4e13-4e59-9291-c0737a7db8f1",
            "path": "/site/{site}/order-by-ien?orderIEN={orderIEN}&transfer={transfer}&patientEventId={patientEventId}&eventType={eventType}",
            "description": "Get order field information",
            "verb": "GET",
            "produces": ["application/json"],
            "consumes": [],
            "headers": [
                {
                    "name":"Authorization",
                    "description": "The OAUTH token (i.e. bearer some_token_id)"
                }
            ],
            "pathparameters": [
                {
                    "name": "assigning-authority",
                    "description": "The assigning authority represents which system and facility (i.e. Vista, CDW, or SED)",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "patient-id",
                    "description": "The unique identifier of the patient",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "site",
                    "description": "The site id from the facility code",
                    "type": "String",
                    "required": true
                }
            ],
            "queryparameters": [
                {
                    "name":"orderIEN",
                    "description": "The id of the order to retrieve",
                    "type":"String",
                    "required": true
                },
                {
                    "name":"transfer",
                    "description": "Will be passed by using app based on CPRS logic: transfer of medications from out to in or in to out",
                    "type":"String",
                    "required": true
                },
                {
                    "name":"patientEventId",
                    "description": "Patient Event Id",
                    "type":"String",
                    "required": true
                },
                {
                    "name":"eventType",
                    "description": "Event Type",
                    "type":"String",
                    "required": true
                }
            ],
            "bodyobject": null,
            "response": {
                "jsondocId": "1b667011-5f99-4a6e-90e5-266fe302b297",
                "object": "OrderResponse",
                "multiple": "false",
                "mapKeyObject": null,
                "mapValueObject": null,
                "map": null
            },
            "apierrors": []
        },
        {
            "jsondocId": "9385b58f-293b-4272-bc69-d8273bc3c85b",
            "path": "/site/{site}/procedure-message?procedureIen={procedureIen}",
            "description": "Gets the procedure message",
            "verb": "GET",
            "produces": ["application/json"],
            "consumes": [],
            "headers": [
                {
                    "name":"Authorization",
                    "description": "The OAUTH token (i.e. bearer some_token_id)"
                }
            ],
            "pathparameters": [
                {
                    "name": "assigning-authority",
                    "description": "The assigning authority represents which system and facility (i.e. Vista, CDW, or SED)",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "patient-id",
                    "description": "The unique identifier of the patient",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "site",
                    "description": "The site id from the facility code",
                    "type": "String",
                    "required": true
                }
            ],
            "queryparameters": [
                {
                    "name":"procedureIen",
                    "description": "The procedure IEN",
                    "type":"String",
                    "required": true
                }
            ],
            "bodyobject": null,
            "response": {
                "jsondocId": "fb53871b-c949-413d-8f50-644e00d0ce25",
                "object": "Text",
                "multiple": "false",
                "mapKeyObject": null,
                "mapValueObject": null,
                "map": null
            },
            "apierrors": []
        },
        {
            "jsondocId": "b954fcc6-b631-4f8c-b340-3967a4a44e12",
            "path": "/site/{site}/radiology-reports?startDate={startDate}&endDate={endDate}&maxReports={maxReports}",
            "description": "Gets the radiology reports for the given date range",
            "verb": "GET",
            "produces": ["application/json"],
            "consumes": [],
            "headers": [
                {
                    "name":"Authorization",
                    "description": "The OAUTH token (i.e. bearer some_token_id)"
                }
            ],
            "pathparameters": [
                {
                    "name": "assigning-authority",
                    "description": "The assigning authority represents which system and facility (i.e. Vista, CDW, or SED)",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "patient-id",
                    "description": "The unique identifier of the patient",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "site",
                    "description": "The site id from the facility code",
                    "type": "String",
                    "required": true
                }
            ],
            "queryparameters": [
                {
                    "name":"startDate",
                    "description": "The starting date range",
                    "type":"String",
                    "required": true
                },
                {
                    "name":"endDate",
                    "description": "The ending date range",
                    "type":"String",
                    "required": true
                },
                {
                    "name":"maxReports",
                    "description": "The total number of reports to return",
                    "type":"int",
                    "required": true
                }
            ],
            "bodyobject": null,
            "response": {
                "jsondocId": "140c11fe-57cb-4d2e-b8fe-b5252dc6e8db",
                "object": "RadiologyReports",
                "multiple": "false",
                "mapKeyObject": null,
                "mapValueObject": null,
                "map": null
            },
            "apierrors": []
        },
        {
            "jsondocId": "16ebd6ed-f719-4219-8c7a-d144a91e6bdc",
            "path": "/site/{site}/save-patient",
            "description": "Saves the order",
            "verb": "PUT",
            "produces": ["application/json"],
            "consumes": ["application/json"],
            "headers": [
                {
                    "name":"Authorization",
                    "description": "The OAUTH token (i.e. bearer some_token_id)"
                }
            ],
            "pathparameters": [
                {
                    "name": "assigning-authority",
                    "description": "The assigning authority represents which system and facility (i.e. Vista, CDW, or SED)",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "patient-id",
                    "description": "The unique identifier of the patient",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "site",
                    "description": "The site id from the facility code",
                    "type": "String",
                    "required": true
                }
            ],
            "queryparameters": [],
            "bodyobject": null,
            "response": {
                "jsondocId": "7723c985-98a1-49be-ac89-72bef6492ca8",
                "object": "Order",
                "multiple": "false",
                "mapKeyObject": null,
                "mapValueObject": null,
                "map": null
            },
            "apierrors": []
        },
        {
            "jsondocId": "3939292a-caef-4cad-b557-f88404694399",
            "path": "/site/{site}/statuses",
            "description": "Gets the order statuses",
            "verb": "GET",
            "produces": ["application/json"],
            "consumes": [],
            "headers": [
                {
                    "name":"Authorization",
                    "description": "The OAUTH token (i.e. bearer some_token_id)"
                }
            ],
            "pathparameters": [
                {
                    "name": "assigning-authority",
                    "description": "The assigning authority represents which system and facility (i.e. Vista, CDW, or SED)",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "patient-id",
                    "description": "The unique identifier of the patient",
                    "type": "String",
                    "required": true
                },
                {
                    "name": "site",
                    "description": "The site id from the facility code",
                    "type": "String",
                    "required": true
                }
            ],
            "queryparameters": [],
            "bodyobject": null,
            "response": {
                "jsondocId": "93c7ec7e-8bca-4752-866d-a24dd3470984",
                "object": "OrderStatuses",
                "multiple": "false",
                "mapKeyObject": null,
                "mapValueObject": null,
                "map": null
            },
            "apierrors": []
        }
        ]
    }],
    "objects": [
    {
        "jsondocId": "3204b655-2e78-42bf-8553-39c753a54bb9",
        "name": "Admissions",
        "description": "The patients admissions",
        "fields": [{
            "jsondocId": "ddb98243-4b42-4c9e-a0d6-fe7678a80954",
            "name": "size",
            "type": "integer",
            "multiple": "false",
            "description": "The book number of admissions",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "e6b07047-8266-490e-b80f-9270e66556a7",
            "name": "admissionsCollection",
            "type": "Collection<Admission>",
            "multiple": "true",
            "description": "A collection of Admission objects",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }]
    }, 
    {
        "jsondocId": "643cd845-5443-4313-8434-08aea35a251f",
        "name": "GroupedOrderTypes",
        "description": "",
        "fields": [{
            "jsondocId": "c4b9623a-420b-4742-9c9d-9b2725d6b6b9",
            "name": "groupedTypesList",
            "type": "Collection<GroupedTypes>",
            "multiple": "true",
            "description": "The collection of Grouped Types",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }]
    },
    {
        "jsondocId": "9386efc9-93d5-4d99-931c-eb0ce24f85d6",
        "name": "HospitalLocations",
        "description": "",
        "fields": [{
            "jsondocId": "be1a9db1-a7aa-4b34-bd71-9fed2d395c90",
            "name": "size",
            "type": "integer",
            "multiple": "false",
            "description": "The number of HospitalLocations",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "a5c003e8-4aed-45df-a8a9-4de5f2a5c5cd",
            "name": "hospitalLocationsCollection",
            "type": "Collection<HospitalLocation>",
            "multiple": "true",
            "description": "The HospitalLocations of the patient",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }]
    }, 
    {
        "jsondocId": "979db7c3-ee3d-4249-95fa-c7e1cf8bc0e9",
        "name": "LabResult",
        "description": "",
        "fields": [{
            "jsondocId": "c4b9623a-420b-4742-9c9d-9b2725d6b6b9",
            "name": "testId",
            "type": "String",
            "multiple": "false",
            "description": "The ID of the test",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "0608a2d5-41ad-411c-bff0-63e37373e5a0",
            "name": "testname",
            "type": "String",
            "multiple": "false",
            "description": "The name of the test",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "121703eb-a72b-4c68-b129-df5b19c447d9",
            "name": "resultedDate",
            "type": "Date",
            "multiple": "false",
            "description": "The date of the result",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "value",
            "type": "String",
            "multiple": "false",
            "description": "The value",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "graphable",
            "type": "Boolean",
            "multiple": "false",
            "description": "Graphable",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "valueUnits",
            "type": "String",
            "multiple": "false",
            "description": "The value units",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "referenceHigh",
            "type": "String",
            "multiple": "false",
            "description": "The reference high",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "referenceLow",
            "type": "String",
            "multiple": "false",
            "description": "The reference low",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "indicator",
            "type": "String",
            "multiple": "false",
            "description": "The indicator",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "abnormalIndicatorFlag",
            "type": "boolean",
            "multiple": "false",
            "description": "Abnormal Indication flag",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "abnormalIndicatorTriFlag",
            "type": "TriState",
            "multiple": "false",
            "description": "The abnormal Indication Tri Flag",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "accessionNumber",
            "type": "String",
            "multiple": "false",
            "description": "The acession number",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "labtype",
            "type": "String",
            "multiple": "false",
            "description": "The lab type",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "status",
            "type": "String",
            "multiple": "false",
            "description": "The status",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "comment",
            "type": "String",
            "multiple": "false",
            "description": "The comment",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "orderId",
            "type": "String",
            "multiple": "false",
            "description": "The order id",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "specimenId",
            "type": "String",
            "multiple": "false",
            "description": "The specimen id",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "specimenName",
            "type": "String",
            "multiple": "false",
            "description": "The specimen name",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "displayName",
            "type": "String",
            "multiple": "false",
            "description": "The display name",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "displayDescription",
            "type": "String",
            "multiple": "false",
            "description": "The display description",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "loinc",
            "type": "String",
            "multiple": "false",
            "description": "The loinc",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "specimenCollectionDate",
            "type": "Date",
            "multiple": "false",
            "description": "The specimen collection date",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "author",
            "type": "Author",
            "multiple": "false",
            "description": "The author",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }]
    },
    {
        "jsondocId": "eba86173-f669-46d8-94dc-7fcedb722d41",
        "name": "Order",
        "description": "",
        "fields": [{
            "jsondocId": "c4b9623a-420b-4742-9c9d-9b2725d6b6b9",
            "name": "orderId",
            "type": "String",
            "multiple": "false",
            "desc`ription": "The ID of the order",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "0608a2d5-41ad-411c-bff0-63e37373e5a0",
            "name": "orderedDate",
            "type": "Date",
            "multiple": "false",
            "description": "The ordering date",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "121703eb-a72b-4c68-b129-df5b19c447d9",
            "name": "startDate",
            "type": "Date",
            "multiple": "false",
            "description": "The start date of the order",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "stopDate",
            "type": "Date",
            "multiple": "false",
            "description": "The stop date of the order",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "status",
            "type": "String",
            "multiple": "false",
            "description": "The status",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "orderStatus",
            "type": "OrdersStatus",
            "multiple": "false",
            "description": "The order status",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "dateSigned",
            "type": "Date",
            "multiple": "false",
            "description": "The date the order was signed",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "verifyingNurse",
            "type": "String",
            "multiple": "false",
            "description": "The verifying Nurse",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "dateVerified",
            "type": "Date",
            "multiple": "false",
            "description": "The date the order was verified",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "verifyingClerk",
            "type": "String",
            "multiple": "false",
            "description": "The verifying Clerk",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "provider",
            "type": "MhpUser",
            "multiple": "false",
            "description": "The provider",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "orderText",
            "type": "String",
            "multiple": "false",
            "description": "The order text",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "orderDetail",
            "type": "String",
            "multiple": "false",
            "description": "The order detail",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "orderTypeId",
            "type": "String",
            "multiple": "false",
            "description": "The order type id",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "orderGrouping",
            "type": "OrderGrouping",
            "multiple": "false",
            "description": "The order grouping",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "orderType",
            "type": "String",
            "multiple": "false",
            "description": "The order type",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "orderSubType",
            "type": "String",
            "multiple": "false",
            "description": "The order sub type",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "errorMessage",
            "type": "String",
            "multiple": "false",
            "description": "The error message if exists",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "flag",
            "type": "Boolean",
            "multiple": "false",
            "description": "Flag",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "orderSignStatus",
            "type": "OrderSignStatus",
            "multiple": "false",
            "description": "The order sign status",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "orderProvider",
            "type": "OrderProvider",
            "multiple": "false",
            "description": "The order provider",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "orderLocation",
            "type": "OrderLocation",
            "multiple": "false",
            "description": "The order location",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }]
    },
    {
        "jsondocId": "1ddc8560-c42c-4d4a-a76b-7fac17f831da",
        "name": "OrderImagingLists",
        "description": "",
        "fields": [{
            "jsondocId": "c4b9623a-420b-4742-9c9d-9b2725d6b6b9",
            "name": "orderableImagingProcedures",
            "type": "OrderableImagingProcedures",
            "multiple": "true",
            "description": "The collection of orderableImagingProcedures",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "0608a2d5-41ad-411c-bff0-63e37373e5a0",
            "name": "orderImagingPickLists",
            "type": "OrderPickLists",
            "multiple": "true",
            "description": "The collection of order pick lists",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }]
    },
    {
        "jsondocId": "1830a3c0-9d86-4dba-897d-15f8b1366638",
        "name": "OrderImagingTypes",
        "description": "",
        "fields": [{
            "jsondocId": "c4b9623a-420b-4742-9c9d-9b2725d6b6b9",
            "name": "size",
            "type": "integer",
            "multiple": "false",
            "description": "The size of the collection",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "0608a2d5-41ad-411c-bff0-63e37373e5a0",
            "name": "orderImagingTypesValues",
            "type": "Collection<OrderImagingType>",
            "multiple": "true",
            "description": "The collection of orderImagingTypesValues",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }]
    },
    {
        "jsondocId": "2bdf6cfa-9752-43d5-9946-ebc2df81ae8b",
        "name": "OrderPickListItemEntries",
        "description": "",
        "fields": [{
            "jsondocId": "78ee8d7d-c991-43e9-9d40-835e590132a8",
            "name": "size",
            "type": "integer",
            "multiple": "false",
            "description": "The size of the collection",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "aab5cd96-5819-410c-851e-278b39eda112",
            "name": "orderPickListItemEntriesCollection",
            "type": "Collection<OrderPickListItemEntry>",
            "multiple": "true",
            "description": "The collection of OrderPickListItemEntry",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }]
    }, 
    {
        "jsondocId": "9c5c256b-d523-4d5a-85ae-b8c1be5c18a4",
        "name": "OrderResponse",
        "description": "",
        "fields": [{
            "jsondocId": "c4b9623a-420b-4742-9c9d-9b2725d6b6b9",
            "name": "name",
            "type": "String",
            "multiple": "false",
            "description": "The name of the Order Response",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "0608a2d5-41ad-411c-bff0-63e37373e5a0",
            "name": "promptIen",
            "type": "String",
            "multiple": "false",
            "description": "The prompt IEN",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "121703eb-a72b-4c68-b129-df5b19c447d9",
            "name": "instance",
            "type": "integer",
            "multiple": "false",
            "description": "The instance",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "promptId",
            "type": "String",
            "multiple": "false",
            "description": "The prompt ID",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "ivalue",
            "type": "String",
            "multiple": "false",
            "description": "The initial value",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "evalue",
            "type": "String",
            "multiple": "false",
            "description": "The end value",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "tvalue",
            "type": "Collection<String>",
            "multiple": "false",
            "description": "The text value",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "index",
            "type": "String",
            "multiple": "false",
            "description": "The index",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "entries",
            "type": "Collection<OrderResponseEntry>",
            "multiple": "false",
            "description": "Order Response Entries",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "9dfff735-8f60-4558-be9e-47ecf1624830",
            "name": "imagingType",
            "type": "String",
            "multiple": "false",
            "description": "The Imaging Type",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }]
    },
    {
        "jsondocId": "13d1caae-9836-4423-8e7d-7f875f8d8c7c",
        "name": "OrderStatuses",
        "description": "",
        "fields": [{
            "jsondocId": "0608a2d5-41ad-411c-bff0-63e37373e5a0",
            "name": "size",
            "type": "integer",
            "multiple": "false",
            "description": "The size of the collection",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "121703eb-a72b-4c68-b129-df5b19c447d9",
            "name": "statuses",
            "type": "Collection<OrderStatusValue>",
            "multiple": "true",
            "description": "The collection of OrderStatusValue",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }]
    },
    {
        "jsondocId": "3fa380b3-aa0d-403d-9e49-bee7f53f31da",
        "name": "RadiologyReports",
        "description": "",
        "fields": [{
            "jsondocId": "c4b9623a-420b-4742-9c9d-9b2725d6b6b9",
            "name": "size",
            "type": "integer",
            "multiple": "false",
            "description": "The size of the collection",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }, {
            "jsondocId": "0608a2d5-41ad-411c-bff0-63e37373e5a0",
            "name": "radiologyReportsCollection",
            "type": "Collection<RadiologyReport>",
            "multiple": "true",
            "description": "The collection of RadiologyReport",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }]
    },
    {
        "jsondocId": "85690525-0c1c-4bb0-ae69-4a6f04156d81",
        "name": "Text",
        "description": "An author object belonging to an external jar",
        "fields": [{
            "jsondocId": "f710d148-2f49-402a-bf3c-86ea34cea30d",
            "name": "textValue",
            "type": "String",
            "multiple": "false",
            "description": "The text value",
            "format": "",
            "allowedvalues": [],
            "mapKeyObject": null,
            "mapValueObject": null,
            "map": null
        }]
    }
    ]
};