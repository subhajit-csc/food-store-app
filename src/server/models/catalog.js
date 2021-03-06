const mongoose = require('mongoose')
const validator = require('validator')
const { toJSON, paginate } = require('./plugins');

/**
 * @typedef FoodCatagory
 * @property {string} categoryName.required - Category Name - eg: Moglai
 * @property {string} categoryDescription - Category Description - eg: Moglai
 * @property {Array.<Items>} items.required - Items
 */
/**
 * @typedef Items
 * @property {string} itemName.required - Item Name - eg: Biriyani
 * @property {string} description - Description - eg: Biriyani
 * @property {string} itemCode.required - Item Code - eg: IT0001
 * @property {boolean} inStock.required - inStock - eg: true
 * @property {Array.<Prices>} prices.required - Prices
 */
/**
 * @typedef Prices
 * @property {string} unit.required - Unit - eg: FULL,HALF
 * @property {number} price - Price - eg: 120
 * @property {number} discount - Discount - eg: 10
 */

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: true
  },
  categoryDescription: {
    type: String,
    trim: true
  },
  items: [{
    itemName: {
      type: String,
      required: true,
      trim: true,
      index: true,
      unique: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    itemCode: {
      type: String,
      required: true,
      trim: true,
      index: true,
      unique: true
    },
    inStock: {
      type: Boolean,
      required: true,
      default: true,
    },
    prices: [{
      unit: {
        type: String,
        required: true,
        trim: true
      },
      price: {
        type: Number,
        required: true
      },
      discount: {
        type: Number,
        required: true
      }
    }

    ]
  }
  ]
}, {
  timestamps: true,
  versionKey: false
})


// add plugin that converts mongoose to json
categorySchema.plugin(toJSON);
categorySchema.plugin(paginate);

//Define Text Index
categorySchema.index({
  categoryName: "text",
  categoryDescription: "text",
  itemName: "text",
  description: "text"
},
  {
    weights: {
      categoryName: 1,
      categoryDescription: 1,
      itemName: 1,
      description: 1
    },
    name: "TextIndex"
  });


const Catalog = mongoose.model('catalog', categorySchema)

module.exports = Catalog
