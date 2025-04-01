import { calculateTotalTime, calculateWaitingTimeForVehicle } from "./calculator.js";

describe("Calculator Functions", () => {
  describe("calculateTotalTime", () => {
    it("should return 0 when the queue is empty", () => {
      const queue = [];
      const timePerVehicle = 5;
      expect(calculateTotalTime(queue, timePerVehicle)).toEqual(0);
    });

    it("should return the total waiting time for a non-empty queue", () => {
      const queue = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const timePerVehicle = 5;
      expect(calculateTotalTime(queue, timePerVehicle)).toEqual(15);
    });
  });

  describe("calculateWaitingTimeForVehicle", () => {
    const queue = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const timePerVehicle = 5;

    it("should return 0 for the first vehicle", () => {
      expect(calculateWaitingTimeForVehicle(queue, 0, timePerVehicle)).toEqual(0);
    });

    it("should return the correct waiting time for the second vehicle", () => {
      expect(calculateWaitingTimeForVehicle(queue, 1, timePerVehicle)).toEqual(5);
    });

    it("should return the correct waiting time for the third vehicle", () => {
      expect(calculateWaitingTimeForVehicle(queue, 2, timePerVehicle)).toEqual(10);
    });
  });
});
