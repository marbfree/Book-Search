const { User, Book } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    book: async (parent, { bookId }) => {
        return Book.findOneAndUpdate({ _id: bookId });
      },
    
  },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      return User.create({ username, email, password });
    },
    saveBook: async (parent, { bookId, authors, description,  bookId, image, link, title }) => {
      return Book.findOneAndUpdate(
        { _id: bookId },
        {
          $addToSet: { books: { bookId } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    deleteUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
    deleteBook: async (parent, { bookId }) => {
      return Book.findOneAndUpdate(
        { _id: bookId },
        { $pull: { books: { _id: bookId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;