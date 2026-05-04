import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Accident Stopper",
    description:
      "An Arduino-based safety system designed to detect risks and prevent accidents automatically. Detects obstacles within 4m and alerts the driver using buzzer and light signals, with an auto-stop mechanism and cushioning to reduce collision impact.",
    tags: ["Arduino", "C", "Ultrasonic Sensor", "HC-SR04", "IoT"],
    liveUrl: "",
    githubUrl: "https://github.com/yourusername/accident-stopper",
    image: "",
  },
  {
    id: 2,
    title: "Recipe Pro",
    description:
      "A web application that suggests recipes based on ingredients entered by the user. Features a user-friendly interface where users input available food items and receive suitable recipe suggestions with a fully responsive UI.",
    tags: ["HTML", "CSS", "JavaScript", "Web App"],
    liveUrl: "",
    githubUrl: "https://github.com/yourusername/recipe-pro",
    image: "",
  },
];