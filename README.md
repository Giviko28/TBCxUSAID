# TBC x USAID Technical Task

<img alt="USAID Logo" height="75" src="https://static.wixstatic.com/media/93e8a3_a356bb7d201f4f47870683655e9e4120~mv2.png/v1/fill/w_271,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%204_2x_edited.png"/>
<img alt="TBC Logo" height="75" src="https://upload.wikimedia.org/wikipedia/en/e/e2/TBC_Bank_logo.svg" width="200"/>


What your viewing here is a fully functional "replica" of https://www.tbcacademy.ge/usaid
## Project Structure

The structure is as simple as it gets.

- **`js/`**: Contains all the javascript for the project    
  - **`slider.js`**: handles slides/animations for the slider on both mobile and desktop
  - **`accordion.js`** handles the FAQ section of the website.
  - **`responsive.js`** handles everything (90% of the code is header related) for the mobile version.
- **`styles/`**: Contains all the CSS (using BEM naming convention)
    - **`queries.css`**: handles responsive css (everything but the hamburger menu animations)
    - **`menu_button.css`** handles the hamburger menu animations
    - **`images.css`**: Since image sizes differ from mobile to desktop, this file contains all the styling for both mobile and desktop images
    - **`styles.css`**: handles the styling for the desktop version
- **`svgs/`**: contains all the svg's
- **`index.html`**: The one and only .html, containers used for mobile and desktop are easily distinguished from one another by comments and it's class names.

## Tech stack

When it comes to technologies and libraries, I went for a simple approach (everything's pure vanilla).

- **Vanilla JavaScript:**
- **CSS:** 
- **HTML:**


## Getting Started
To get my project running, follow these procedures:


**Clone the Repository:**
```
git clone https://github.com/Giviko28/TBCxUSAID
```

**Navigate to the Project Directory:**
```
cd tbc
```

**Open `index.html` in a web browser**
 - Double-click on the file or open it with your preferred browser. 


## Usage / Disclaimer

This website is available in two sizes - Desktop and Mobile-SM.

The width of the mobile version is fixed to 320px (because that's the way TBC has its website setup).

The only issue that can arise is the usage of a laptop. Because I'm using this meta tag: 
```
<meta name="viewport" content="width=320, user-scalable=yes">
```
Devices with widths below 1600px will display the mobile version.

Although I could avoid this by conditionally applying meta tags, I've decided to play it safe by straight-up copying this meta tag from the original website. (What they do is conditionally apply meta tags, or that's what I think they do xD)
