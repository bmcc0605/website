// This file acts as a centralized location to store all style elements that are used more than once throughout the site
import { Enum } from './Enums';

export class BMStyle
{
    static sharedInstance = new BMStyle();
    isDarkMode = false;
    currentLanguage =  Enum.Language.English;

    setDarkMode(value: boolean)
    {
        this.isDarkMode = value;
    }

    setLanguage(value: Enum.Language)
    {
        this.currentLanguage = value;
    }

    // Colors
    private static LightColors = 
    {
        "UIMainColor": "#ffa000",
        "UIDarkColor": "#d17627", //"#ff7700";
        "UIDisabledColor": "#aaaaaa",
        
        "BackgroundColor": "#eeeeee",
        "BodyTextColor": "#666666",
        "BodyTextMobileWidthColor": "#eeeeee",
    
        "HeroTitleColor": "#ffffff",
        "HeroTitleHoveredColor": "#ffa000",

        "ContactBackgroundColor": "#dddddd",
        "ContactTextColor": "#090909",
    }

    private static DarkColors = 
    {
        "UIMainColor": "#ef7e00",
        "UIDarkColor": "#d17627",
        "UIDisabledColor": "#666666",
        
        "BackgroundColor": "#010011",
        "BodyTextColor": "#ebebeb",
        "BodyTextMobileWidthColor": "#eeeeee",
    
        "HeroTitleColor": "#ffffff",
        "HeroTitleHoveredColor": "#ef7e00",

        "ContactBackgroundColor": "#2c2c2c",
        "ContactTextColor": "#ebebeb",
    }

    colors()
    {
        return this.isDarkMode ? BMStyle.DarkColors : BMStyle.LightColors;
    }
    
    // Images
    private static LightImages = 
    {
        "HeroImage": "./src/images/hero_offset.png",
        "DeveloperPortrait": "./src/images/traveller_portrait.JPG",
        "EducatorPortrait": "./src/images/educator_portrait2.jpg",
        "TravellerPortrait": "./src/images/traveller_portrait.JPG"
    }

    private static DarkImages = 
    {
        "HeroImage": "./src/images/hero_dark.JPG",
        "DeveloperPortrait": "./src/images/portrait_dark.JPG",
        "EducatorPortrait": "./src/images/portrait_dark.JPG",
        "TravellerPortrait": "./src/images/steingasse.JPG",
    }

    images()
    {
        return this.isDarkMode? BMStyle.DarkImages : BMStyle.LightImages;
    }

    // Text
    private static EnglishText =
    {
        "Educator": "Educator",
        "Traveller": "Traveller",
        "Developer": "Developer",
        "DarkMode": "Dark Mode",
        "Language": "Language",
        "Contact": "CONTACT",
        "Name": "Name",
        "Email": "Email",
        "YourMessage": "Your Message",
        "Submit": "SUBMIT",
        "DeveloperParagraphText": "Someone once told me that time is a predator that stalks us all our lives, but I rather believe that time is a companion who goes with us on the journey, reminds us to cherish every moment, because they’ll never come again.",
        "EducatorParagraphText": "Someone once told me that time is a predator that stalks us all our lives, but I rather believe that time is a companion who goes with us on the journey, reminds us to cherish every moment, because they’ll never come again.",
        "TravellerParagraphText": "Someone once told me that time is a predator that stalks us all our lives, but I rather believe that time is a companion who goes with us on the journey, reminds us to cherish every moment, because they’ll never come again.",  
    }

    private static GermanText =
    {
        "Educator": "Erzieher",
        "Traveller": "Reisender",
        "Developer": "Entwickler",
        "DarkMode": "Dunkelmodus",
        "Language": "Sprache",
        "Contact": "KONTAKT",
        "Name": "Name",
        "Email": "Email",
        "YourMessage": "Deine Nachricht",
        "Submit": "SENDEN",
        "DeveloperParagraphText": "Someone once told me that time is a predator that stalks us all our lives, but I rather believe that time is a companion who goes with us on the journey, reminds us to cherish every moment, because they’ll never come again.",
        "EducatorParagraphText": "Someone once told me that time is a predator that stalks us all our lives, but I rather believe that time is a companion who goes with us on the journey, reminds us to cherish every moment, because they’ll never come again.",
        "TravellerParagraphText": "Someone once told me that time is a predator that stalks us all our lives, but I rather believe that time is a companion who goes with us on the journey, reminds us to cherish every moment, because they’ll never come again.",  
    }

    text()
    {
        switch (this.currentLanguage)
        {
            case Enum.Language.English:
                return BMStyle.EnglishText;
            case Enum.Language.German:
                return BMStyle.GermanText;
            default:
                return BMStyle.EnglishText;
        }
    }

    // Fonts
    static UITitleFont = "Raleway";
    static UIContentFont = "work sans";
    static UIIconFont = "icomoon";

    // Links
    static LinkedInUrl = "https://www.linkedin.com/in/bradleymccausland/";
    static GithubUrl = "https://github.com/bmcc0605";
    static MailToUrl = "mailto:bradmccausland20@gmail.com";

    // Dimensions
    static HeaderHeight = "70px";
    static MenuItemheight = "70px";

    // Durations
    static HeaderSlideTransitionTime = "0.7s";
}