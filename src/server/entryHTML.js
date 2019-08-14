module.exports =  (content, initialData) => (
    `<!DOCTYPE html>
        <html>
            <head>
                <link href="css/bundle.css" type="text/css" rel="stylesheet">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
            <body>
                <div class="container-fluid" id="content">${content}</div>
                <script>${initialData}</script>
                <script src="js/bundle.js"></script>
            </body>
        </html>
    `
);