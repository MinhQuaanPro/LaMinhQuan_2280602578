<<<<<<< HEAD
// var express = require('express');
// var router = express.Router();
// let userModel = require('../schemas/users');

// // CREATE - Thêm user mới
// router.post('/', async function(req, res, next) {
//   try {
//     let user = await userModel.create(req.body);
//     res.status(201).json({
//       success: true,
//       message: "Tạo user thành công",
//       data: user
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: "Lỗi tạo user",
//       error: error.message
//     });
//   }
// });

// // READ ALL - Lấy danh sách user
// router.get('/', async function(req, res, next) {
//   try {
//     let users = await userModel.find({isDeleted: false}).populate('role');
//     res.status(200).json({
//       success: true,
//       message: "Lấy danh sách user thành công",
//       data: users
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Lỗi lấy danh sách user",
//       error: error.message
//     });
//   }
// });

// // READ ONE - Lấy user theo ID
// router.get('/:id', async function(req, res, next) {
//   try {
//     let user = await userModel.findById(req.params.id).populate('role');
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User không tồn tại"
//       });
//     }
//     if (user.isDeleted) {
//       return res.status(404).json({
//         success: false,
//         message: "User đã bị xóa"
//       });
//     }
//     res.status(200).json({
//       success: true,
//       message: "Lấy user thành công",
//       data: user
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Lỗi lấy user",
//       error: error.message
//     });
//   }
// });

// // UPDATE - Cập nhật user
// router.put('/:id', async function(req, res, next) {
//   try {
//     let user = await userModel.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true, runValidators: true }
//     );
    
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User không tồn tại"
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Cập nhật user thành công",
//       data: user
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: "Lỗi cập nhật user",
//       error: error.message
//     });
//   }
// });

// // DELETE - Xóa user (soft delete)
// router.delete('/:id', async function(req, res, next) {
//   try {
//     let user = await userModel.findByIdAndUpdate(
//       req.params.id,
//       { isDeleted: true },
//       { new: true }
//     );

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User không tồn tại"
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Xóa user thành công",
//       data: user
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Lỗi xóa user",
//       error: error.message
//     });
//   }
// });

// module.exports = router;

var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

// let userModel = require("../schemas/users"); // hoặc ../schemas/user
let userModel = require("../schemas/user.schema");

// 2) POST /api/v1/users/enable
router.post("/enable", async function (req, res) {
  try {
    const { email, username } = req.body;

    if (!email || !username) {
      return res.status(400).json({
        success: false,
        message: "Thiếu email hoặc username",
      });
    }

    const user = await userModel.findOneAndUpdate(
      { email, username, isDeleted: false },
      { $set: { status: true } },
      { returnDocument: 'after' }
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Sai email/username hoặc user không tồn tại",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Enable user thành công",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Lỗi enable user",
      error: error.message,
    });
  }
});

// 3) POST /api/v1/users/disable
router.post("/disable", async function (req, res) {
  try {
    const { email, username } = req.body;

    if (!email || !username) {
      return res.status(400).json({
        success: false,
        message: "Thiếu email hoặc username",
      });
    }

    const user = await userModel.findOneAndUpdate(
      { email, username, isDeleted: false },
      { $set: { status: false } },
      { returnDocument: 'after' }
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Sai email/username hoặc user không tồn tại",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Disable user thành công",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Lỗi disable user",
      error: error.message,
    });
  }
});

// 1) CREATE user - POST /api/v1/users
router.post("/", async function (req, res) {
  try {
    let user = await userModel.create(req.body);
    const data = user.toObject();
    delete data.password;

    res.status(201).json({
      success: true,
      message: "Tạo user thành công",
      data,
=======
var express = require('express');
var router = express.Router();
let userModel = require('../schemas/users');

// CREATE - Thêm user mới
router.post('/', async function(req, res, next) {
  try {
    let user = await userModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "Tạo user thành công",
      data: user
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Lỗi tạo user",
<<<<<<< HEAD
      error: error.message,
=======
      error: error.message
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  }
});

<<<<<<< HEAD
// 1) READ ALL - GET /api/v1/users
router.get("/", async function (req, res) {
  try {
    let users = await userModel
      .find({ isDeleted: false })
      .populate("role")
      .select("-password");

    res.status(200).json({
      success: true,
      message: "Lấy danh sách user thành công",
      data: users,
=======
// READ ALL - Lấy danh sách user
router.get('/', async function(req, res, next) {
  try {
    let users = await userModel.find({isDeleted: false}).populate('role');
    res.status(200).json({
      success: true,
      message: "Lấy danh sách user thành công",
      data: users
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Lỗi lấy danh sách user",
<<<<<<< HEAD
      error: error.message,
=======
      error: error.message
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  }
});

<<<<<<< HEAD
// 1) READ ONE - GET /api/v1/users/:id
router.get("/:id", async function (req, res) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "User ID không hợp lệ" });
    }

    let user = await userModel
      .findOne({ _id: req.params.id, isDeleted: false })
      .populate("role")
      .select("-password");
=======
// ENABLE USER - Kích hoạt user
router.post('/enable', async function(req, res, next) {
  try {
    const { email, username } = req.body;
    
    if (!email || !username) {
      return res.status(400).json({
        success: false,
        message: "Vui lòng cung cấp email và username"
      });
    }

    let user = await userModel.findOneAndUpdate(
      { email: email, username: username, isDeleted: false },
      { status: true },
      { new: true }
    ).populate('role');
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f

    if (!user) {
      return res.status(404).json({
        success: false,
<<<<<<< HEAD
        message: "User không tồn tại hoặc đã bị xóa",
=======
        message: "Không tìm thấy user hoặc thông tin không trùng khớp"
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
      });
    }

    res.status(200).json({
      success: true,
<<<<<<< HEAD
      message: "Lấy user thành công",
      data: user,
=======
      message: "Kích hoạt tài khoản thành công",
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Lỗi kích hoạt tài khoản",
      error: error.message
    });
  }
});

// DISABLE USER - Vô hiệu hoá user
router.post('/disable', async function(req, res, next) {
  try {
    const { email, username } = req.body;
    
    if (!email || !username) {
      return res.status(400).json({
        success: false,
        message: "Vui lòng cung cấp email và username"
      });
    }

    let user = await userModel.findOneAndUpdate(
      { email: email, username: username, isDeleted: false },
      { status: false },
      { new: true }
    ).populate('role');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy user hoặc thông tin không trùng khớp"
      });
    }

    res.status(200).json({
      success: true,
      message: "Vô hiệu hoá tài khoản thành công",
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Lỗi vô hiệu hoá tài khoản",
      error: error.message
    });
  }
});

// READ ONE - Lấy user theo ID
router.get('/:id', async function(req, res, next) {
  try {
    let user = await userModel.findById(req.params.id).populate('role');
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User không tồn tại"
      });
    }
    if (user.isDeleted) {
      return res.status(404).json({
        success: false,
        message: "User đã bị xóa"
      });
    }
    res.status(200).json({
      success: true,
      message: "Lấy user thành công",
      data: user
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Lỗi lấy user",
<<<<<<< HEAD
      error: error.message,
=======
      error: error.message
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  }
});

<<<<<<< HEAD
// 1) UPDATE - PUT /api/v1/users/:id
// 1) UPDATE - PUT /api/v1/users/:id
router.put("/:id", async function (req, res) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "User ID không hợp lệ" });
    }

    const { isDeleted, ...updateData } = req.body;

    let user = await userModel
      .findOneAndUpdate(
        { _id: req.params.id, isDeleted: false },
        updateData,
        { returnDocument: 'after', runValidators: true }
      )
      .populate("role")
      .select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User không tồn tại hoặc đã bị xóa",
=======
// UPDATE - Cập nhật user
router.put('/:id', async function(req, res, next) {
  try {
    let user = await userModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User không tồn tại"
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
      });
    }

    res.status(200).json({
      success: true,
      message: "Cập nhật user thành công",
<<<<<<< HEAD
      data: user,
=======
      data: user
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Lỗi cập nhật user",
<<<<<<< HEAD
      error: error.message,
=======
      error: error.message
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  }
});

<<<<<<< HEAD
// 1) DELETE (soft delete) - DELETE /api/v1/users/:id
router.delete("/:id", async function (req, res) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "User ID không hợp lệ" });
    }

    let user = await userModel.findOneAndUpdate(
      { _id: req.params.id, isDeleted: false },
      { $set: { isDeleted: true } },
      {  returnDocument: 'after' }
    ).select("-password");
=======
// DELETE - Xóa user (soft delete)
router.delete('/:id', async function(req, res, next) {
  try {
    let user = await userModel.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f

    if (!user) {
      return res.status(404).json({
        success: false,
<<<<<<< HEAD
        message: "User không tồn tại hoặc đã bị xóa",
=======
        message: "User không tồn tại"
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
      });
    }

    res.status(200).json({
      success: true,
      message: "Xóa user thành công",
<<<<<<< HEAD
      data: user,
=======
      data: user
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Lỗi xóa user",
<<<<<<< HEAD
      error: error.message,
=======
      error: error.message
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
    });
  }
});

module.exports = router;
