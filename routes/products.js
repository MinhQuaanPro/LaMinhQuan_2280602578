var express = require('express');
var router = express.Router();
let productModel = require('../schemas/products')

// CREATE - Thêm sản phẩm mới
router.post('/', async function(req, res, next) {
  try {
    let product = await productModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "Tạo sản phẩm thành công",
      data: product
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Lỗi tạo sản phẩm",
      error: error.message
    });
  }
});

// READ ALL - Lấy tất cả sản phẩm (không cần truy vấn)
router.get('/', async function(req, res, next) {
  try {
    let products = await productModel.find({isDeleted: false}).populate('category');
    res.status(200).json({
      success: true,
      message: "Lấy danh sách sản phẩm thành công",
      data: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Lỗi lấy danh sách sản phẩm",
      error: error.message
    });
  }
});

// READ ONE - Lấy sản phẩm theo ID
router.get('/:id', async function(req, res, next) {
  try {
    let product = await productModel.findById(req.params.id).populate('category');
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Sản phẩm không tồn tại"
      });
    }
    if (product.isDeleted) {
      return res.status(404).json({
        success: false,
        message: "Sản phẩm đã bị xóa"
      });
    }
    res.status(200).json({
      success: true,
      message: "Lấy sản phẩm thành công",
      data: product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Lỗi lấy sản phẩm",
      error: error.message
    });
  }
});

// UPDATE - Cập nhật sản phẩm
router.put('/:id', async function(req, res, next) {
  try {
    let product = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Sản phẩm không tồn tại"
      });
    }

    res.status(200).json({
      success: true,
      message: "Cập nhật sản phẩm thành công",
      data: product
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Lỗi cập nhật sản phẩm",
      error: error.message
    });
  }
});

// DELETE - Xóa sản phẩm (soft delete)
router.delete('/:id', async function(req, res, next) {
  try {
    let product = await productModel.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Sản phẩm không tồn tại"
      });
    }

    res.status(200).json({
      success: true,
      message: "Xóa sản phẩm thành công",
      data: product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Lỗi xóa sản phẩm",
      error: error.message
    });
  }
});

module.exports = router;
