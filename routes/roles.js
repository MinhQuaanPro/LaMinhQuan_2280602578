<<<<<<< HEAD
// var express = require('express');
// var router = express.Router();
// let roleModel = require('../schemas/roles');

// // CREATE - Thêm role mới
// router.post('/', async function(req, res, next) {
//   try {
//     let role = await roleModel.create(req.body);
//     res.status(201).json({
//       success: true,
//       message: "Tạo role thành công",
//       data: role
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: "Lỗi tạo role",
//       error: error.message
//     });
//   }
// });

// // READ ALL - Lấy danh sách role
// router.get('/', async function(req, res, next) {
//   try {
//     let roles = await roleModel.find({isDeleted: false});
//     res.status(200).json({
//       success: true,
//       message: "Lấy danh sách role thành công",
//       data: roles
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Lỗi lấy danh sách role",
//       error: error.message
//     });
//   }
// });

// // READ ONE - Lấy role theo ID
// router.get('/:id', async function(req, res, next) {
//   try {
//     let role = await roleModel.findById(req.params.id);
//     if (!role) {
//       return res.status(404).json({
//         success: false,
//         message: "Role không tồn tại"
//       });
//     }
//     if (role.isDeleted) {
//       return res.status(404).json({
//         success: false,
//         message: "Role đã bị xóa"
//       });
//     }
//     res.status(200).json({
//       success: true,
//       message: "Lấy role thành công",
//       data: role
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Lỗi lấy role",
//       error: error.message
//     });
//   }
// });

// // UPDATE - Cập nhật role
// router.put('/:id', async function(req, res, next) {
//   try {
//     let role = await roleModel.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true, runValidators: true }
//     );
    
//     if (!role) {
//       return res.status(404).json({
//         success: false,
//         message: "Role không tồn tại"
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Cập nhật role thành công",
//       data: role
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: "Lỗi cập nhật role",
//       error: error.message
//     });
//   }
// });

// // DELETE - Xóa role (soft delete)
// router.delete('/:id', async function(req, res, next) {
//   try {
//     let role = await roleModel.findByIdAndUpdate(
//       req.params.id,
//       { isDeleted: true },
//       { new: true }
//     );

//     if (!role) {
//       return res.status(404).json({
//         success: false,
//         message: "Role không tồn tại"
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Xóa role thành công",
//       data: role
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Lỗi xóa role",
//       error: error.message
//     });
//   }
// });

// module.exports = router;

var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

// let roleModel = require("../schemas/roles");  // hoặc ../schemas/role
// let userModel = require("../schemas/users");  // hoặc ../schemas/user
let roleModel = require("../schemas/role.schema");
let userModel = require("../schemas/user.schema");

// CREATE - Thêm role mới
router.post("/", async function (req, res) {
=======
var express = require('express');
var router = express.Router();
let roleModel = require('../schemas/roles');

// CREATE - Thêm role mới
router.post('/', async function(req, res, next) {
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
  try {
    let role = await roleModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "Tạo role thành công",
<<<<<<< HEAD
      data: role,
=======
      data: role
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Lỗi tạo role",
<<<<<<< HEAD
      error: error.message,
=======
      error: error.message
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  }
});

<<<<<<< HEAD
// READ ALL - Lấy danh sách role (chưa xoá)
router.get("/", async function (req, res) {
  try {
    let roles = await roleModel.find({ isDeleted: false });
    res.status(200).json({
      success: true,
      message: "Lấy danh sách role thành công",
      data: roles,
=======
// READ ALL - Lấy danh sách role
router.get('/', async function(req, res, next) {
  try {
    let roles = await roleModel.find({isDeleted: false});
    res.status(200).json({
      success: true,
      message: "Lấy danh sách role thành công",
      data: roles
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Lỗi lấy danh sách role",
<<<<<<< HEAD
      error: error.message,
=======
      error: error.message
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  }
});

<<<<<<< HEAD
// 4) READ users theo role id
// GET /api/v1/roles/:id/users
router.get("/:id/users", async function (req, res) {
  try {
    const roleId = req.params.id;
    if (!mongoose.isValidObjectId(roleId)) {
      return res.status(400).json({ success: false, message: "Role ID không hợp lệ" });
    }

    const users = await userModel
      .find({ role: roleId, isDeleted: false })
      .populate("role")
      .select("-password");

    return res.status(200).json({
      success: true,
      message: "Lấy danh sách user theo role thành công",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Lỗi lấy user theo role",
      error: error.message,
    });
  }
});

// READ ONE - Lấy role theo ID (chưa xoá)
router.get("/:id", async function (req, res) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "Role ID không hợp lệ" });
    }

    let role = await roleModel.findOne({ _id: req.params.id, isDeleted: false });
    if (!role) {
      return res.status(404).json({
        success: false,
        message: "Role không tồn tại hoặc đã bị xóa",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lấy role thành công",
      data: role,
=======
// READ ONE - Lấy role theo ID
router.get('/:id', async function(req, res, next) {
  try {
    let role = await roleModel.findById(req.params.id);
    if (!role) {
      return res.status(404).json({
        success: false,
        message: "Role không tồn tại"
      });
    }
    if (role.isDeleted) {
      return res.status(404).json({
        success: false,
        message: "Role đã bị xóa"
      });
    }
    res.status(200).json({
      success: true,
      message: "Lấy role thành công",
      data: role
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Lỗi lấy role",
<<<<<<< HEAD
      error: error.message,
=======
      error: error.message
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  }
});

<<<<<<< HEAD
// UPDATE - Cập nhật role (chỉ update role chưa xoá)
router.put("/:id", async function (req, res) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "Role ID không hợp lệ" });
    }

    const { isDeleted, ...updateData } = req.body;

    let role = await roleModel.findOneAndUpdate(
      { _id: req.params.id, isDeleted: false },
      updateData,
      { new: true, runValidators: true }
    );

    if (!role) {
      return res.status(404).json({
        success: false,
        message: "Role không tồn tại hoặc đã bị xóa",
=======
// READ USERS BY ROLE - Lấy danh sách user theo role ID
router.get('/:id/users', async function(req, res, next) {
  try {
    // Check if role exists and is not deleted first
    let role = await roleModel.findById(req.params.id);
    if (!role || role.isDeleted) {
      return res.status(404).json({
        success: false,
        message: "Role không tồn tại hoặc đã bị xóa"
      });
    }

    // Require userModel dynamically to avoid circular dependency issues if any
    let userModel = require('../schemas/users');
    let users = await userModel.find({ role: req.params.id, isDeleted: false });

    res.status(200).json({
      success: true,
      message: `Lấy danh sách user của role ${role.name} thành công`,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Lỗi lấy danh sách user theo role",
      error: error.message
    });
  }
});

// UPDATE - Cập nhật role
router.put('/:id', async function(req, res, next) {
  try {
    let role = await roleModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!role) {
      return res.status(404).json({
        success: false,
        message: "Role không tồn tại"
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
      });
    }

    res.status(200).json({
      success: true,
      message: "Cập nhật role thành công",
<<<<<<< HEAD
      data: role,
=======
      data: role
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Lỗi cập nhật role",
<<<<<<< HEAD
      error: error.message,
=======
      error: error.message
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  }
});

// DELETE - Xóa role (soft delete)
<<<<<<< HEAD
router.delete("/:id", async function (req, res) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "Role ID không hợp lệ" });
    }

    let role = await roleModel.findOneAndUpdate(
      { _id: req.params.id, isDeleted: false },
      { $set: { isDeleted: true } },
=======
router.delete('/:id', async function(req, res, next) {
  try {
    let role = await roleModel.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
      { new: true }
    );

    if (!role) {
      return res.status(404).json({
        success: false,
<<<<<<< HEAD
        message: "Role không tồn tại hoặc đã bị xóa",
=======
        message: "Role không tồn tại"
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
      });
    }

    res.status(200).json({
      success: true,
      message: "Xóa role thành công",
<<<<<<< HEAD
      data: role,
=======
      data: role
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Lỗi xóa role",
<<<<<<< HEAD
      error: error.message,
=======
      error: error.message
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  }
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
