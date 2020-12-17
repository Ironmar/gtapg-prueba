import Person from "../../models/person";
const Mutation = {
  createPerson: async (_, { name, email, age, address, phone }) => {
    const newPerson = new Person({ name, email, age, address, phone });
    return await newPerson.save();
  },
  updatePerson: async (_, { id, name, email, age, address, phone }) => {
    return await Person.findByIdAndUpdate(id, {
      name,
      email,
      age,
      address,
      phone,
    });
  },
  deletePerson: async (_, { id }) => {
    return await Person.findByIdAndDelete(id);
  },
};

export default Mutation;
