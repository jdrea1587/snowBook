// const { city, skistore, user } = require('./models');
// const { Op } = Sequelize;

// const getAllUsers = async () => {
//   try {
//     //  Should find all users
//     //  return the result of your query
//     const res = await user.findAll();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const createNewUser = async () => {
//   const result = await user.create({
//     interest: '',
//       level: '',
//       firstName: '',
//       typeOfRide: '',
//       isBackcountry: null,
//       gender: '',
//       personalStory: '',
//       contactInfo: '',
//       isInstructor: null,
//       isOver21: null,
//       lastName: '',
//       zipCide: null
//   });
//   console.log(result);

// };

// // const jane = await User.create({ name: "Jane" });

// // jane.set({
// //   name: "Ada",
// //   favoriteColor: "blue"
// // });
// // // As above, the database still has "Jane" and "green"
// // await jane.save();

// const updateUser = async () => {
//     const result = await User.update(

//     )
// }

// const getUserByTypeOfRide = async () => {
//     try {
//       //  Should find all users
//       const result = await User.findAll({ attributes: ['email'] });
//   console.log(result);
//       //  return the result of your query by ride type
//       const res = await user.findAll({
//           attributes: (['typeOfRide'])
//         //   include: typeOfRide
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getUserIsInstructor = async () => {
//     try {
//       //  Should find all users
//       //  return the result of your query of isInstructor
//       const res = await user.findAll({
//           include: isInstructor
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getUserByLocation = async () => {
//     try {
//       //  Should find all users
//       //  return the result of your query user location
//       const res = await user.findAll({
//           include: location
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

// module.exports = {
//   getAllUsers,
//   updateUser,
//   getUserByTypeOfRide,
//   getUserIsInstructor,
//   getUserByLocation,
//   createNewUser
// };
