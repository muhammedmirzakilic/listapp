import mongoose from "mongoose";

var listSchema = mongoose.Schema({
  uid: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  items: [],
  isActive: {
    type: Boolean,
    default: true,
  },
});

var List = mongoose.model("list", listSchema);

export async function getList(uid) {
  var list = await List.findOne({ uid });
  if (list) list = list.toJSON();
  return list;
}

export default List;
