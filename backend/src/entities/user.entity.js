import { EntitySchema } from "typeorm";

export const User = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
    id: {
        primary: true,
        type: "int",
        generated: true,
        },
    name: {
        type: "varchar",
        length: 100,
        nullable: false,
        },
    email: {
        type: "varchar",
        length: 100,
        unique: true,
        nullable: false,
        },
    password: {
        type: "varchar",
        nullable: false,
        },
    createdAt: {
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        },
    updatedAt: {
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
        },
    },
});
