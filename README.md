# Cookie Consent Banner

A simple, lightweight cookie consent banner implementation using vanilla JavaScript.

## Features

- **DOM Manipulation**: Creates and manages the banner element dynamically
- **Event Handling**: Responds to user interaction with the accept button
- **Persistence**: Uses localStorage to remember user consent across sessions
- **Responsive Design**: Works on both desktop and mobile devices
- **Smooth Animations**: CSS transitions for showing/hiding the banner

## Project Structure

```
cookie-consent/
├── src/
│   ├── index.html    # Main HTML structure
│   ├── styles.css    # Banner and page styling
│   └── script.js     # Banner logic and persistence
├── tests/            # Test directory
└── README.md         # Documentation
```

## How It Works

1. **First Visit**: When a user visits the page for the first time, the cookie consent banner appears at the bottom of the screen.

2. **Accepting Cookies**: Clicking the "Accept" button:
   - Saves consent to localStorage
   - Animates the banner out of view
   - Prevents future display of the banner

3. **Return Visits**: If the user has previously accepted cookies, the banner is hidden automatically.

## Usage

Open `src/index.html` in a web browser to see the cookie consent banner in action.

```bash
# Using a local server (recommended)
cd src && npx serve .

# Or simply open the file directly
open src/index.html
```

## Customization

### Styling
Edit `src/styles.css` to customize:
- Banner colors (`background-color`, `color`)
- Button style (`.cookie-btn`)
- Banner position (`.cookie-banner`)

### Behavior
Edit `src/script.js` to modify:
- Storage key name (`STORAGE_KEY`)
- Animation timing in CSS and JavaScript

## Browser Support

Works in all modern browsers that support:
- localStorage
- CSS3 Transitions
- ES5 JavaScript

## License

MIT License