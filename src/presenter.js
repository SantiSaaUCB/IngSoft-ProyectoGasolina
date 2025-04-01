import { calculateTotalTime, calculateWaitingTimeForVehicle } from './calculator.js';

export function renderQueue(queue, timePerVehicle) {
  const queueContainer = document.getElementById('queue-container');
  queueContainer.innerHTML = '';

  queue.forEach((vehicle, index) => {
    const listItem = document.createElement('li');
    const waitingTime = calculateWaitingTimeForVehicle(queue, index, timePerVehicle);
    listItem.textContent = `Vehicle #${vehicle.id} - Waiting time: ${waitingTime} min`;
    queueContainer.appendChild(listItem);
  });

  const totalTime = calculateTotalTime(queue, timePerVehicle);
  document.getElementById('total-time').textContent = `Total waiting time: ${totalTime} min`;
}

function initializeQueueManagement() {
  let queue = [];
  let timePerVehicle = 5;
  let vehicleId = 1;

  const btnAdd = document.getElementById('add-vehicle');
  const btnService = document.getElementById('service-vehicle');

  btnAdd.addEventListener('click', () => {
    queue.push({ id: vehicleId++ });
    renderQueue(queue, timePerVehicle);
  });

  btnService.addEventListener('click', () => {
    if (queue.length > 0) {
      queue.shift();
      renderQueue(queue, timePerVehicle);
    }
  });
}

document.addEventListener('DOMContentLoaded', initializeQueueManagement);