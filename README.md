# SebastianVernis.com - Portfolio and Digital Services Website

## Description

This project is the personal website and digital services platform for Sebastian Vernis. It serves as a portfolio to showcase web development projects and offers various digital marketing and web solutions. The website is designed as a single-page application (SPA)-like experience, with dynamic content loading for different sections.

## Features

*   **Dynamic Navigation:** Smooth scrolling and section visibility managed by JavaScript, creating an SPA-like feel.
*   **Inicio (Home):** Introduction, unique selling propositions, "About Me" section, and a simplified process overview.
*   **Servicios (Services):** Dynamically generated list of services offered, categorized for clarity (e.g., Diseño y Desarrollo Web, E-commerce y Pagos, Marketing Digital). Each service includes a title, category, focus, description, and associated media (image/video).
*   **Catálogo (Catalog/Portfolio):**
    *   Showcases sample websites with live demos embedded via iframes.
    *   Features include project name, description, category (rubro), and key characteristics.
    *   Interactive filtering system by category (rubro) and characteristics.
*   **Tienda (Store):**
    *   Presents packaged digital services and products for purchase or inquiry.
    *   Each item includes a name, short description, pricing (original and final), currency, availability, and associated media.
    *   Direct "Contactar" (Contact) button pre-fills the contact form with the service of interest.
*   **Contacto (Contact):**
    *   A comprehensive contact form for inquiries.
    *   Fields include name, email, company, website, service of interest, and message.
    *   Includes terms of service and privacy policy acceptance.
    *   Integrated with **Web3Forms** for backend email submission.
*   **Dynamic Media Handling:** Uses a centralized `multimediaData` object in `script.js` to manage paths to images and videos, making it easier to update media assets.

## Project Structure

*   **`index.html`**: The main HTML file that defines the structure of the single-page application. It contains placeholders for different sections that are dynamically shown/hidden.
*   **`script.js`**: Contains all the JavaScript logic for the website. This includes:
    *   Navigation handling and section visibility.
    *   Dynamic rendering of content for Services, Catalog, Store, and parts of the Home section.
    *   Data objects for services (`serviciosData`), catalog items (`catalogoData`), store products (`tiendaProductosData`), and media assets (`multimediaData`, `multimediaMap`, `tiendaMultimediaMap`).
    *   Catalog filtering logic.
    *   Contact form submission logic using `fetch` to Web3Forms.
*   **`styles.css`**: Contains all the CSS rules for styling the website, including layout, typography, colors, and responsiveness.
*   **`/Media/` (directory - assumed)**: Likely contains all media assets (images, videos) referenced in `script.js`.

## Key Data Structures (in `script.js`)

*   **`multimediaData`**: An object mapping media keys (e.g., `"vid_landing_page"`) to their file paths (e.g., `"/Media/Landing Pages/Video_de_Landing_Page_Generado.mp4"`).
*   **`multimediaMap` / `tiendaMultimediaMap`**: Objects mapping service/product titles or IDs to keys in `multimediaData` for easy media association.
*   **`serviciosData`**: An array of objects, where each object represents a service with properties like `titulo`, `categoria`, `enfoque`, and `descripcion`.
*   **`catalogoData`**: An array of objects, where each object represents a portfolio item with properties like `nombre`, `rubro`, `descripcion`, `demo` (link to live demo), and `caracteristicas` (array of features).
*   **`tiendaProductosData`**: An array of objects, where each object represents a product/service in the store with properties like `id`, `nombre`, `descripcionCorta`, `precioOriginal`, `precioFinal`, `moneda`, and `disponibilidad`.

## How to Run

1.  Clone or download the repository.
2.  Open the `index.html` file in a modern web browser.

No special build steps or server-side dependencies are required as it's a static website (HTML, CSS, JavaScript) that relies on a third-party service (Web3Forms) for contact form processing.

## Contact Form Integration

The contact form in the "Contacto" section uses [Web3Forms](https://web3forms.com/) to handle submissions. The `script.js` file sends the form data to a specific Web3Forms API endpoint using an access key.
