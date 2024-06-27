# Realtime Chatting Welcome

Welcome to my personal repository! This repository showcases a real-time chat application developed using a modern tech stack and best practices in software development.

## Tech Stack
- **Backend**: Spring Boot, Spring WebFlux, Spring Data Reactive MongoDB, Redis
- **Frontend**: React, Socket.IO
- **WebSocket Communication**: Implemented WebSocket for real-time, bidirectional communication.
- **Reactive Programming**: Leveraged WebFlux for non-blocking operations.
- **Data Handling**: Used Spring Data Reactive MongoDB for efficient database interactions.
- **Authentication**: Integrated OAuth2 with Google for secure user login.
- **Caching and Messaging**: Implemented Redis for caching and Pub/Sub messaging.
- **Testing**: Employed various testing techniques to ensure application reliability.
- **Documentation**: Maintained comprehensive project documentation.

## Features

- **Real-Time Communication**: Provides seamless real-time chat experiences using WebSocket and Socket.IO.
- **Scalability and Performance**: Utilizes reactive programming and efficient data handling for improved scalability and performance.
- **Secure Authentication**: Ensures secure user authentication using OAuth2 with Google.
- **Responsive UI**: Developed a dynamic and responsive user interface with React.
- **Caching and Messaging**: Implements Redis for caching and Pub/Sub messaging to optimize performance.

## How to Use
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Nonobeam/Websocket-Realtime-Chatting
   cd repository
   ```

2. **Backend Setup**:
   - Ensure you have Java JDK, Maven, and MongoDB installed.
   - Configure `application.properties` for MongoDB and Redis settings.
   - Build and run the Spring Boot application.

3. **Frontend Setup**:
   - Navigate to the `frontend` directory.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React development server:
     ```bash
     npm start
     ```

4. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3000`.

## Testing
- **Unit Tests**: Includes comprehensive unit tests for backend services and components.
- **Integration Tests**: Tests WebSocket communication, data handling, and authentication flows.
- **End-to-End Tests**: Simulates user interactions and validates real-time chat functionality.

## Documentation
- Comprehensive project documentation is available within the repository.
- For further details on architecture, setup, and usage, refer to the documentation files.

## Contributions
Feel free to explore, fork, and contribute to this repository. Your feedback and contributions are welcome!

---

This README.md provides an overview of the project, setup instructions, features, and testing details. For any questions or feedback, please contact me at [phuc0405.dev@gmail.com](phuc0405.dev@gmail.com).

