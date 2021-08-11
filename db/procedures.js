export async function getProcedures(db) {
  return db
    .collection('procedures')
    .find()
    .toArray();
}
