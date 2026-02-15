Valentine Captcha
This is a "Captcha" style web application for Valentine's Day.

🚀 How to Install and Run
To run this project, you need Node.js installed.

Open your terminal inside the project folder (valentine-captcha).
Install dependencies:
npm install
Start the project in development mode:
npm run dev
Open the link shown in the terminal (usually http://localhost:5173).
🖼️ Setting Up Images
This project requires your own photos as they are not included in the repository.

How many photos do you need?
You need 19 images:

18 images (files 1.jpg – 18.jpg) — for the main captcha grid (3 columns × 6 rows).
1 image (file 19.jpg) — the small target icon (example of what to look for).
Requirements for photos
Format: .jpg
Ratio: Square images work best (e.g., 500x500 pixels) to display correctly in grid cells. If not square, they will be automatically center-cropped.
How to add photos?
There are two ways to do this:

Method 1: Automatically (Recommended)
In the parent folder (where this project folder is located), there is a script named setup_images.ps1.

Prepare 19 .jpg files and name them photo_1_...jpg, photo_2_...jpg, etc.
Place these photos in the same folder as setup_images.ps1.
Run setup_images.ps1 (right-click -> "Run with PowerShell").
The script will automatically rename and copy the files into the public/images folder inside the project.
Method 2: Manually
Go to valentine-captcha -> public.
Create an images folder (if it doesn't exist).
Copy your 19 photos there.
Manually rename them to 1.jpg, 2.jpg, ..., 19.jpg.
