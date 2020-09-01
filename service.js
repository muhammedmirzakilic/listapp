import List, { getList } from "./models/list";

export async function getListData(uid) {
  var list = await getList(uid);
  if (!list) {
    createNewList(uid);
    return {
      errorMessage: `List id ${uid} does not exist, so creating a new list`,
    };
  }
  return list;
}

async function createNewList(uid) {
  var list = new List();
  list.uid = uid;
  list.name = "Random";
  list.description = "Lorem ipsum";
  for (let index = 0; index < 5; index++) {
    list.items.push({
      name: `${index}. item`,
      description: "lorem ipsum",
    });
  }
  list.save();
}
