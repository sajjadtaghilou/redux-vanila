import { registerListComponent } from "./components/ListComponent/ListComponent.js";
import { registerListItemComponent } from "./components/ListItemComponent/ListItemComponent.js";


/**
 * Main application load, registers the web components
 */
const app = () => {
    registerListComponent();
    registerListItemComponent();
    /**
     * Missing some other similar web components to render one cart details
     * and one component for select users
     */

    /**
     * Missing one class to handle routes by hash router to render components based
     * on route
     */
};

/**
 * Call the app method to register web components
 */
document.addEventListener("DOMContentLoaded", app);
