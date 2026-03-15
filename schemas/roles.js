const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: [true, 'name khong duoc trung'],
      required: [true, 'name khong duoc rong'],
    },
    description: {
      type: String,
      default: '',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

<<<<<<< HEAD
// module.exports = new mongoose.model('role', roleSchema);
module.exports = require("./role.schema");
=======
module.exports = new mongoose.model('role', roleSchema);
>>>>>>> 6328ab771474f85f3d757bf3124e8c0cdfa6bc5f
