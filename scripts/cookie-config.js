require("https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js");

CookieConsent.run({
    // General configuration
    type: "banner", // You can use 'banner', 'popup', or 'fullscreen'
    theme: "classic", // 'classic', 'edgeless', or 'flat'
    position: "bottom", // 'top', 'bottom', 'left', 'right', etc.

    // Cookie consent message
    message: "We use cookies to improve your experience on our site. By continuing to use this site, you agree to our use of cookies.",

    // Button configuration
    button: {
        text: "I Agree",
        background: "#4CAF50", // Customize button color
        textColor: "#FFFFFF", // Button text color
    },

    // Decline button configuration
    declineButton: {
        text: "Decline",
        background: "#F44336", // Customize decline button color
        textColor: "#FFFFFF", // Decline button text color
    },

    // Custom styles (CSS classes or inline styles)
    styles: {
        backgroundColor: "#333", // Background color of the banner or popup
        color: "#fff", // Text color
        fontFamily: "'Arial', sans-serif", // Font style
        padding: "15px", // Padding around the content
        borderRadius: "8px", // Border radius for rounded corners
    },

    // Additional configurations
    autoEnable: true, // Automatically enable consent on page load
    onAccept: function () {
        console.log("User accepted cookies!");
        // Perform any custom actions on acceptance here
    },
    onDecline: function () {
        console.log("User declined cookies!");
        // Perform any custom actions on decline here
    },

    // Expiry time (in days)
    expiryDays: 365,

    // Accept button positioning
    buttonPosition: "center", // 'left', 'center', 'right'
});
