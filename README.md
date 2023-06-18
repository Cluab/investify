# Next.js Investment Platform

This is a small-scale investment platform developed using Next.js, React.js, and styled-components. It allows users to view and manage investment forms, including creating new forms, updating existing forms, and deleting forms.

## Features

- Home Page: The homepage displays all the investment forms in descending order of their action date. Each form preview includes the form title and a side menu of requirements such as Custodian Details, Other Information, and Certification.

- Form Actions: Users can perform CRUD operations (Create, Read, Update, Delete) on investment forms. They can create a new form, update existing forms, and delete forms.

- API Routes: Custom API routes are implemented in Next.js to handle the communication with the server for CRUD operations. The forms data is stored in a JSON file on the server-side.

- Data Storage: The investment form data is stored in a JSON file using the fs module to read and write data. This ensures persistence and retrieval of data between server restarts.

- Styling: CSS-in-JS solutions (styled-components) are used for styling the components, providing a modular and maintainable approach. The application is mobile responsive, adapting to different screen sizes.

## Technologies Used

- Next.js
- React.js
- styled-components
- fs module (for data storage)

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Cluab/investify.git
   ```

2. Navigate to the project directory:

   ```bash
   cd investify
   ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Usage

1. Start the development server:

  ```bash
  npm run dev
  ```

2. Open your browser and visit http://localhost:3000 to access the application.

## Authors

👤 **Ibrahim Suhail Al-Yousefi**

- GitHub: [@cluab](https://github.com/Cluab)
- Twitter: [@cluab122](https://twitter.com/cluab122)
- LinkedIn: [Ebrahim Al-Yousefi](https://www.linkedin.com/in/ebrahim-alyousefi/)
- Instagram: [@27.i.b](https://www.instagram.com/27.i.b/)

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Cluab/investify/issues) for any open issues.

## Show Your Support

If you like this project, please give it a star on GitHub!

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
