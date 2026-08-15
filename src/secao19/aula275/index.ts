// Numeric Enums - Default
enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction.Up);    // Output: 0


// Numeric Enums - Initialized
enum Status {
    Active = 1,
    Inactive = 0,
    Pending = 2
}
console.log(Status.Pending); // Output: 0


// Numeric Enums - Fully Initialized
enum StatusCode {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
console.log(StatusCode.Success); // Output: 200


// String Enums
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
console.log(Color.Green); // Output: "GREEN"

function getColorName(color: Color): void {
    console.log(`The color is: ${color}`);
}
getColorName(Color.Red); // Output: "The color is: RED"
