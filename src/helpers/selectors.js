
// returns an array of appointments for that day
function getAppointmentsForDay(state, dayName) {
  
  const dailyAppointments = [];

    // loop through the days array in the state object
    // forEach checks that there are items in an array
  state.days.forEach(day => {

    if (day.name === dayName) {

     // iterate thru the appointments array in each DAY object
      day.appointments.forEach(appointment => {

        // lookup the object with that name and push to the dailyAppointments array
          dailyAppointments.push(state.appointments[appointment]);
      });  
    }
  });
    return dailyAppointments; 
};





export {getAppointmentsForDay};

// module.exports = {getAppointmentsForDay};
//1. export default --> to import default export, need to import without curly braces