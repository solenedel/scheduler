
// returns an array of appointments for that day
function getAppointmentsForDay(state, day) {
  
  const finalArray = [];

  // if the days array is not empty:
  if (state.days.length !== 0) {

    // loop through the days array in the state object
  state.days.forEach(DAY => {

    if (DAY.name === day) {

     // iterate thru the appointments array in each DAY object
      DAY.appointments.map(appointment => {

        // iterate thru the objects in the appointment object
        for (const appt in state.appointments) {

          
          if (appointment === state.appointments[appt].id) {
            finalArray.push(state.appointments[appt]);
          }
        }
          
      }); 
       
    }
  });

  } else {
    return [];
  }
    console.log('finalArray: ', finalArray);

    return finalArray; 
};





export {getAppointmentsForDay};

// module.exports = {getAppointmentsForDay};
//1. export default --> to import default export, need to import without curly braces