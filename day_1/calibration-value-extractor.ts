import { readFileSync } from "fs";

const calibrationDocumentList = readFileSync("./input.txt", "utf-8").split(
  /[\r\n]+/
);
let fixedCalibrationDocumentList = new Array();

const digitRegex = "/[^0-9]/g";

function sumCalibrationValues() {
  createCalibrationValueList();
  console.log(
    "Sum of Calibration Values is: " +
      fixedCalibrationDocumentList.reduce((sum, a) => sum + a, 0)
  );
}

function createCalibrationValueList() {
  calibrationDocumentList.forEach((calibrationPoint) => {
    fixedCalibrationDocumentList.push(
      formatToTwoDigitCalibrationValue(calibrationPoint.replace(digitRegex, ""))
    );
  });
  console.log(fixedCalibrationDocumentList);
}

function formatToTwoDigitCalibrationValue(calibrationPoint: string) {
  if (calibrationPoint.length < 3) {
    return Number(calibrationPoint);
  } else {
    return Number(
      calibrationPoint
        .charAt(0)
        .concat(calibrationPoint.charAt(calibrationPoint.length - 1))
    );
  }
}

sumCalibrationValues();
