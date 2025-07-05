import { useEffect, useState } from "react";

const GoogleTranslate = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Initialize the Google Translate function
    window.googleTranslateElementInit = () => {
      try {
        new window.google.translate.TranslateElement(
          { 
            pageLanguage: "en",
            includedLanguages: "en,ta",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
          },
          "google_translate_element"
        );
        setIsReady(true);
        console.log("Google Translate initialized");
      } catch (error) {
        console.error("Google Translate initialization failed:", error);
      }
    };

    // Load the script if not already loaded
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () => console.error("Failed to load Google Translate script");
      document.body.appendChild(script);
    } else if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }

    return () => {
      // Cleanup
      const script = document.querySelector('script[src*="translate.google.com"]');
      if (script) document.body.removeChild(script);
    };
  }, []);

  const changeLanguage = (lang) => {
    if (!isReady) {
      console.log("Google Translate not ready yet");
      return;
    }

    const findAndChangeLanguage = (attempts = 0) => {
      const select = document.querySelector(".goog-te-combo");
      
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
        console.log(`Language changed to ${lang}`);
      } else if (attempts < 10) {  // Try up to 10 times
        setTimeout(() => findAndChangeLanguage(attempts + 1), 200 * (attempts + 1));
      } else {
        console.error("Could not find Google Translate select element after multiple attempts");
      }
    };

    findAndChangeLanguage();
  };

  return (
    <div>
      {/* Google Translate Widget - needs to be in DOM but can be visually hidden */}
      <div 
        id="google_translate_element" 
        style={{ 
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0
        }}
      ></div>

      {/* Language Buttons */}
      <div>
        <button 
          onClick={() => changeLanguage("en")} 
          className="btn btn-primary"
        >
          🇬🇧 English
        </button>
        <button 
          style={{ marginLeft: "10px" }} 
          onClick={() => changeLanguage("ta")} 
          className="btn btn-secondary"
        >
          🇮🇳 தமிழ்
        </button>
      </div>
    </div>
  );
};

export default GoogleTranslate;