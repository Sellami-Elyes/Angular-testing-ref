import { CalculatorService } from "./calculator.service";
import { TestBed } from "@angular/core/testing";
import { LoggerService } from "./logger.service";

describe("calculator service", () => {
  let calculator: CalculatorService, loggerSpy: any;

  beforeEach(() => {
    console.log(" Initializers in beforeEach ");
    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);

    TestBed.configureTestingModule({
    providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerSpy },
      ],
    });
    calculator = TestBed.inject(CalculatorService)
});
  it("should add two numbers", () => {
    console.log("add");
    const result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it("should subtract two numbers", () => {
    console.log("substract");
    const result = calculator.subtract(5, 1);
    expect(result).toBe(4, "unexpected substraction result");
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

});
