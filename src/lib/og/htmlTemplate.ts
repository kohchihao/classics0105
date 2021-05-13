export function getHtml(title, subtitle) {
  return `
    <!DOCTYPE html>
    <html>
        <meta charset="utf-8">
        <title>Generated Image</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            @import url("https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap");
            
            html,
            body {
              padding: 0;
              margin: 0;
              width: 100%;
              height: 100%;
            }
            
            * {
              box-sizing: border-box;
            }
            
            .top-background {
                background: linear-gradient(to right, rgba(0, 0, 0, 0.48), transparent),
                    url(https://classics0105.vercel.app/images/background.jpg);
                width: 100vh;
                height: 100vh;
                background-size: cover;
                background-position: center center;
            }
            
            .main {
              text-align: center;
            
              width: 100%;
              height: 100%;
            
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 48px;
            }
            
            .title {
              font-size: 5rem;
              word-wrap: break-word;
              letter-spacing: -0.05em;
              font-weight: 800;
              font-family: "Inter", sans-serif;
              color: white;
            }

            .subtitle {
              font-size: 2rem;
              word-wrap: break-word;
              letter-spacing: -0.05em;
              font-weight: 300;
              font-family: "Inter", sans-serif;
              color: white;
            }
        </style>
        <body>
            <div class="main top-background">
              <h1 class="title">${title}</h1>
              <h2 class="subtitle">${subtitle}</h2>
            </div>
        </body>
    </html>
`;
}
