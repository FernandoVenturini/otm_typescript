/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/secao19/aula275/index.ts ***!
  \**************************************/
// Numeric Enums - Default
var Direction = /*#__PURE__*/function (Direction) {
  Direction[Direction["Up"] = 0] = "Up";
  Direction[Direction["Down"] = 1] = "Down";
  Direction[Direction["Left"] = 2] = "Left";
  Direction[Direction["Right"] = 3] = "Right";
  return Direction;
}(Direction || {});
console.log(Direction.Up); // Output: 0

// Numeric Enums - Initialized
var Status = /*#__PURE__*/function (Status) {
  Status[Status["Active"] = 1] = "Active";
  Status[Status["Inactive"] = 0] = "Inactive";
  Status[Status["Pending"] = 2] = "Pending";
  return Status;
}(Status || {});
console.log(Status.Pending); // Output: 0

// Numeric Enums - Fully Initialized
var StatusCode = /*#__PURE__*/function (StatusCode) {
  StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
  StatusCode[StatusCode["Success"] = 200] = "Success";
  StatusCode[StatusCode["Accepted"] = 202] = "Accepted";
  StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
  return StatusCode;
}(StatusCode || {});
console.log(StatusCode.Success); // Output: 200

// String Enums
var Color = /*#__PURE__*/function (Color) {
  Color["Red"] = "RED";
  Color["Green"] = "GREEN";
  Color["Blue"] = "BLUE";
  return Color;
}(Color || {});
console.log(Color.Green); // Output: "GREEN"

function getColorName(color) {
  console.log("The color is: ".concat(color));
}
getColorName(Color.Red); // Output: "The color is: RED"
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVsYTI3NS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQUEsSUFDS0EsU0FBUywwQkFBVEEsU0FBUztFQUFUQSxTQUFTLENBQVRBLFNBQVM7RUFBVEEsU0FBUyxDQUFUQSxTQUFTO0VBQVRBLFNBQVMsQ0FBVEEsU0FBUztFQUFUQSxTQUFTLENBQVRBLFNBQVM7RUFBQSxPQUFUQSxTQUFTO0FBQUEsRUFBVEEsU0FBUztBQU1kQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsU0FBUyxDQUFDRyxFQUFFLENBQUMsQ0FBQyxDQUFJOztBQUc5QjtBQUFBLElBQ0tDLE1BQU0sMEJBQU5BLE1BQU07RUFBTkEsTUFBTSxDQUFOQSxNQUFNO0VBQU5BLE1BQU0sQ0FBTkEsTUFBTTtFQUFOQSxNQUFNLENBQU5BLE1BQU07RUFBQSxPQUFOQSxNQUFNO0FBQUEsRUFBTkEsTUFBTTtBQUtYSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDOztBQUc3QjtBQUFBLElBQ0tDLFVBQVUsMEJBQVZBLFVBQVU7RUFBVkEsVUFBVSxDQUFWQSxVQUFVO0VBQVZBLFVBQVUsQ0FBVkEsVUFBVTtFQUFWQSxVQUFVLENBQVZBLFVBQVU7RUFBVkEsVUFBVSxDQUFWQSxVQUFVO0VBQUEsT0FBVkEsVUFBVTtBQUFBLEVBQVZBLFVBQVU7QUFNZkwsT0FBTyxDQUFDQyxHQUFHLENBQUNJLFVBQVUsQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQzs7QUFHakM7QUFBQSxJQUNLQyxLQUFLLDBCQUFMQSxLQUFLO0VBQUxBLEtBQUs7RUFBTEEsS0FBSztFQUFMQSxLQUFLO0VBQUEsT0FBTEEsS0FBSztBQUFBLEVBQUxBLEtBQUs7QUFLVlAsT0FBTyxDQUFDQyxHQUFHLENBQUNNLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsU0FBU0MsWUFBWUEsQ0FBQ0MsS0FBWSxFQUFRO0VBQ3RDVixPQUFPLENBQUNDLEdBQUcsa0JBQUFVLE1BQUEsQ0FBa0JELEtBQUssQ0FBRSxDQUFDO0FBQ3pDO0FBQ0FELFlBQVksQ0FBQ0YsS0FBSyxDQUFDSyxHQUFHLENBQUMsQ0FBQyxDQUFDLDhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlY2FvMTkvYXVsYTI3NS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOdW1lcmljIEVudW1zIC0gRGVmYXVsdFxuZW51bSBEaXJlY3Rpb24ge1xuICAgIFVwLFxuICAgIERvd24sXG4gICAgTGVmdCxcbiAgICBSaWdodFxufVxuY29uc29sZS5sb2coRGlyZWN0aW9uLlVwKTsgICAgLy8gT3V0cHV0OiAwXG5cblxuLy8gTnVtZXJpYyBFbnVtcyAtIEluaXRpYWxpemVkXG5lbnVtIFN0YXR1cyB7XG4gICAgQWN0aXZlID0gMSxcbiAgICBJbmFjdGl2ZSA9IDAsXG4gICAgUGVuZGluZyA9IDJcbn1cbmNvbnNvbGUubG9nKFN0YXR1cy5QZW5kaW5nKTsgLy8gT3V0cHV0OiAwXG5cblxuLy8gTnVtZXJpYyBFbnVtcyAtIEZ1bGx5IEluaXRpYWxpemVkXG5lbnVtIFN0YXR1c0NvZGUge1xuICAgIE5vdEZvdW5kID0gNDA0LFxuICAgIFN1Y2Nlc3MgPSAyMDAsXG4gICAgQWNjZXB0ZWQgPSAyMDIsXG4gICAgQmFkUmVxdWVzdCA9IDQwMFxufVxuY29uc29sZS5sb2coU3RhdHVzQ29kZS5TdWNjZXNzKTsgLy8gT3V0cHV0OiAyMDBcblxuXG4vLyBTdHJpbmcgRW51bXNcbmVudW0gQ29sb3Ige1xuICAgIFJlZCA9IFwiUkVEXCIsXG4gICAgR3JlZW4gPSBcIkdSRUVOXCIsXG4gICAgQmx1ZSA9IFwiQkxVRVwiXG59XG5jb25zb2xlLmxvZyhDb2xvci5HcmVlbik7IC8vIE91dHB1dDogXCJHUkVFTlwiXG5cbmZ1bmN0aW9uIGdldENvbG9yTmFtZShjb2xvcjogQ29sb3IpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhgVGhlIGNvbG9yIGlzOiAke2NvbG9yfWApO1xufVxuZ2V0Q29sb3JOYW1lKENvbG9yLlJlZCk7IC8vIE91dHB1dDogXCJUaGUgY29sb3IgaXM6IFJFRFwiXG4iXSwibmFtZXMiOlsiRGlyZWN0aW9uIiwiY29uc29sZSIsImxvZyIsIlVwIiwiU3RhdHVzIiwiUGVuZGluZyIsIlN0YXR1c0NvZGUiLCJTdWNjZXNzIiwiQ29sb3IiLCJHcmVlbiIsImdldENvbG9yTmFtZSIsImNvbG9yIiwiY29uY2F0IiwiUmVkIl0sInNvdXJjZVJvb3QiOiIifQ==