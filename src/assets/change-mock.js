export const ChangeLog = function (change) {
    return {
        "databaseChangeLog": [
            {
                "changeSet": change
            }
        ]
    }
};

export const CHANGE = {
    "id": "1",
    "author": "jilopez",
    "comment": "Creacion de tabla para plazos de liberacion de cashin",
    "preConditions": [{
        "onFail": "WARN",
        "onFailMessage": "La tabla Plazo_Liberacion_Cashin ya existe",
        "not": {
            "tableExists": {
                "schemaName": "dbo",
                "tableName": "Plazo_Liberacion_Cashin"
            }
        }
    }],
    "changes": [{
        "createTable": {
            "tableName": "Plazo_Liberacion_Cashin",
            "schemaName": "dbo",
            "columns": [{
                "column": {
                    "name": "id_plazo_liberacion",
                    "autoIncrement": true,
                    "startWith": 1,
                    "type": "int",
                    "constraints": {
                        "primaryKey": true,
                        "nullable": false
                    }
                }
            },
                {
                    "column": {
                        "name": "id_tipo_medio_pago",
                        "type": "int",
                        "constraints": {
                            "nullable": false,
                            "foreignKeyName": "fk_plazo_lib_cashin_tipo_mp",
                            "references": "tipo_medio_pago(id_tipo_medio_pago)"
                        }
                    }
                },
                {
                    "column": {
                        "name": "id_tipo_cuenta",
                        "type": "int",
                        "constraints": {
                            "nullable": true,
                            "foreignKeyName": "fk_plazo_lib_cashin_tipo_cta",
                            "references": "tipo(id_tipo)"
                        }
                    }
                },
                {
                    "column": {
                        "name": "id_cuenta",
                        "type": "int",
                        "constraints": {
                            "nullable": true,
                            "foreignKeyName": "fk_plazo_lib_cashin_cuenta",
                            "references": "cuenta(id_cuenta)"
                        }
                    }
                },
                {
                    "column": {
                        "name": "id_grupo_rubro",
                        "type": "int",
                        "constraints": {
                            "nullable": true,
                            "foreignKeyName": "fk_plazo_lib_cashin_grupo_rubro",
                            "references": "grupo_rubro(id_grupo_rubro)"
                        }
                    }
                },
                {
                    "column": {
                        "name": "id_canal",
                        "type": "int",
                        "constraints": {
                            "nullable": true,
                            "foreignKeyName": "fk_plazo_lib_cashin_canal",
                            "references": "canal_adhesion(id_canal)"
                        }
                    }
                },
                {
                    "column": {
                        "name": "dias_liberacion",
                        "type": "int",
                        "constraints": {
                            "nullable": false
                        }
                    }
                },
                {
                    "column": {
                        "name": "permite_baja",
                        "type": "bit",
                        "constraints": {
                            "nullable": false
                        }
                    }
                },
                {
                    "column": {
                        "name": "fecha_alta",
                        "type": "DATETIME",
                        "constraints": {
                            "nullable": true
                        }
                    }
                },
                {
                    "column": {
                        "name": "usuario_alta",
                        "type": "VARCHAR(20)",
                        "constraints": {
                            "nullable": true
                        }
                    }
                },
                {
                    "column": {
                        "name": "fecha_modificacion",
                        "type": "DATETIME",
                        "constraints": {
                            "nullable": true
                        }
                    }
                },
                {
                    "column": {
                        "name": "usuario_modificacion",
                        "type": "VARCHAR(20)",
                        "constraints": {
                            "nullable": true
                        }
                    }
                },
                {
                    "column": {
                        "name": "fecha_baja",
                        "type": "DATETIME",
                        "constraints": {
                            "nullable": true
                        }
                    }
                },
                {
                    "column": {
                        "name": "usuario_baja",
                        "type": "VARCHAR(20)",
                        "constraints": {
                            "nullable": true
                        }
                    }
                },
                {
                    "column": {
                        "name": "version",
                        "type": "INT",
                        "defaultValue": 0,
                        "constraints": {
                            "nullable": false
                        }
                    }
                }
            ]
        }
    }],
    "rollback": [{
        "dropForeignKeyConstraint": {
            "baseTableName": "Plazo_Liberacion_Cashin",
            "constraintName": "fk_plazo_lib_cashin_tipo_mp"
        }
    },
        {
            "dropForeignKeyConstraint": {
                "baseTableName": "Plazo_Liberacion_Cashin",
                "constraintName": "fk_plazo_lib_cashin_tipo_cta"
            }
        },
        {
            "dropForeignKeyConstraint": {
                "baseTableName": "Plazo_Liberacion_Cashin",
                "constraintName": "fk_plazo_lib_cashin_cuenta"
            }
        },
        {
            "dropForeignKeyConstraint": {
                "baseTableName": "Plazo_Liberacion_Cashin",
                "constraintName": "fk_plazo_lib_cashin_grupo_rubro"
            }
        },
        {
            "dropForeignKeyConstraint": {
                "baseTableName": "Plazo_Liberacion_Cashin",
                "constraintName": "fk_plazo_lib_cashin_canal"
            }
        },
        {
            "dropTable": {
                "schemaName": "dbo",
                "tableName": "Plazo_Liberacion_Cashin"
            }
        }
    ]
};