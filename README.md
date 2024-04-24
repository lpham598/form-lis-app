## Description

This repository contains a simple form web application with a front end built using Vite and React, and a back end built with Flask. Both the front end and back end are contained within the same repository, with the front end located in the `client` directory and the back end in the `server` directory.

## Prerequisites

- Node.js (for running the front end)
- Python 3 (for running the back end)
- npm (Node Package Manager)
- pip (Python Package Installer)

## Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/`your-github-username`/form-lis-app.git
   ```

2. **Navigate to the Server Directory:**

   ```bash
   cd form-lis-app/server
   ```

3. **Install Back End Dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Back End Server:**
   On Mac:

   ```bash
   python3 app.py
   ```

   On Windows:

   ```bash
   python app.py
   ```

5. **Open Another Terminal Window:**

6. **Navigate to the Client Directory:**

   ```bash
   cd form-lis-app/client
   ```

7. **Install Front End Dependencies:**

   ```bash
   npm install
   ```

8. **Run the Front End Development Server:**

   ```bash
   npm run dev
   ```

9. **Access the application:**

   ```bash
   If your browser does not open automatically, navigate to http://localhost:5173/ in your web browser.
   ```

10. **For adding multiple entries:**

   ```bash
   Renavigate to http://localhost:5173/ in your web browser to add another entry.
   ```

## Usage

You can now use the web application locally with both the front end and back end servers running. The front end communicates with the back end through HTTP requests.

## Contributing

Feel free to contribute to this project by forking the repository and creating pull requests. Any contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the Vite, React, and Flask communities for their fantastic work and support.
