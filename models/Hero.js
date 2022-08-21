const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema({
  heroName: {
    type: String,
    required: [true, "Please give a hero name"],
    trim: true,
    unique: true,
  },
  realName: {
    type: String,
    required: true,
    maxlength: [200, "Please make the name short"],
  },
});

module.exports = mongoose.models.Hero || mongoose.model("Hero", HeroSchema);
