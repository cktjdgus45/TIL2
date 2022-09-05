const STANDARD_GRAVITY = 9.81;

function potentialEnergy(mass, height) {
  // return mass * 9.81 * height; //숫자만 달랑쓰는건 나쁜냄새.
  return mass * STANDARD_GRAVITY * height;
}


