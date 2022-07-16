import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  content: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }
}, {
  timestamps: true
})

const activitySchema = new mongoose.Schema({
  actName: String,
  comments: [commentSchema],
  supplier: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }
}, {
  timestamps: true
})

const itemSchema = new mongoose.Schema({
  itemName: String,
  itemType:  String,
  comments: [commentSchema],
  supplier: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }
}, {
  timestamps: true
})

const eventSchema = new mongoose.Schema({
  owner:  {type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  guestList: [{type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
  comments: [commentSchema],
  activities: [activitySchema],
  items: [itemSchema],
  eventName: String, 
  eventDate: {type: Date},
  eventDetails: String,
},{
  timestamps: true,
})

const Event = mongoose.model('Event', eventSchema)

export { Event }