# Chef AI

Chef AI is a web application that helps you generate recipes based on the ingredients you have on hand. Simply input your ingredients, and Chef AI will suggest a recipe for you.

## Features

- Add ingredients to your list
- Generate a recipe based on your ingredients
- Responsive design for mobile and desktop

## Technologies Used

- React
- PostCSS
- Hugging Face Inference API

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/CopyNiinja/ChefAi.git
   cd chef-ai
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your Hugging Face API key:
   ```env
   VITE_HF_ACCESS_KEY=your_hugging_face_api_key
   ```

### Running the Application

1. Start the development server:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- `src/components`: Contains React components
- `src/index.css`: Contains global styles
- `src/AI.js`: Contains the logic for interacting with the Hugging Face API

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Hugging Face](https://huggingface.co/) for the Inference API
- [Bob Ziroll's React Course]
