export function calculateTotalTime(queue, timePerVehicle) {
     return queue.length * timePerVehicle;
}
export function calculateWaitingTimeForVehicle(queue, vehicleIndex, timePerVehicle) {
     return vehicleIndex * timePerVehicle;
}
   