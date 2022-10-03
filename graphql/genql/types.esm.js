export default {
    "scalars": [
        1,
        2,
        5
    ],
    "types": {
        "Article": {
            "id": [
                1
            ],
            "title": [
                2
            ],
            "url": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ID": {},
        "String": {},
        "Mutation": {
            "createArticle": [
                0,
                {
                    "title": [
                        2,
                        "String!"
                    ],
                    "url": [
                        2,
                        "String!"
                    ]
                }
            ],
            "createProject": [
                4,
                {
                    "name": [
                        2,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Project": {
            "deleted": [
                5
            ],
            "id": [
                1
            ],
            "name": [
                2
            ],
            "tasks": [
                7
            ],
            "__typename": [
                2
            ]
        },
        "Boolean": {},
        "Query": {
            "article": [
                0,
                {
                    "articleID": [
                        2,
                        "String!"
                    ]
                }
            ],
            "articles": [
                0
            ],
            "project": [
                4,
                {
                    "projectID": [
                        2,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Task": {
            "assignee": [
                8
            ],
            "id": [
                1
            ],
            "name": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "User": {
            "email": [
                2
            ],
            "id": [
                1
            ],
            "name": [
                2
            ],
            "__typename": [
                2
            ]
        }
    }
}