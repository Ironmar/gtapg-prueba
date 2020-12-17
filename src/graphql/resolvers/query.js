import Person from "../../models/person";
const Query = {
  getPersons: async () => {
    return await Person.find();
  },
  getPerson: async (_, { id }) => {
    return await Person.findById(id);
  },
};
export default Query;
