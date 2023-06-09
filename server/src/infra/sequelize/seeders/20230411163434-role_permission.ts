"use strict";
module.exports = {
  async up(queryInterface) {
    try {
      await queryInterface.bulkInsert("role_permissions", [
        {
          id: 1,
          role_id: 1,
          permission_id: 1,
        },
        {
          id: 2,
          role_id: 1,
          permission_id: 2,
        },
        {
          id: 3,
          role_id: 1,
          permission_id: 3,
        },
        {
          id: 4,
          role_id: 1,
          permission_id: 4,
        },
        {
          id: 5,
          role_id: 1,
          permission_id: 5,
        },
        {
          id: 6,
          role_id: 1,
          permission_id: 6,
        },
        {
          id: 7,
          role_id: 1,
          permission_id: 7,
        },
        {
          id: 8,
          role_id: 1,
          permission_id: 8,
        },
        {
          id: 9,
          role_id: 1,
          permission_id: 9,
        },
        {
          id: 10,
          role_id: 1,
          permission_id: 10,
        },
        {
          id: 11,
          role_id: 1,
          permission_id: 11,
        },
        {
          id: 12,
          role_id: 1,
          permission_id: 12,
        },
        {
          id: 13,
          role_id: 1,
          permission_id: 13,
        },
        {
          id: 14,
          role_id: 1,
          permission_id: 14,
        },

      ]);
    } catch (error) {
      console.log(error);
    }
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("role_permissions", null, {})
  },
};
