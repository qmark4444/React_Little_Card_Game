// module.exports =  function(content, script){
//     return (
//         `<!DOCTYPE html>
//             <html>
//                 <head>
//                     <link href="css/bootstrap.css" type="text/css" rel="stylesheet"> 
//                     <meta name="viewport" content="width=device-width, initial-scale=1">
//                 </head>
//                 <body>
//                     <div class="container-fluid" id="content">${content}</div>
//                     <script>${script}</script>
//                     <script src="js/bundle.js"></script>
//                 </body>
//             </html>
//         `
//     )
// }

module.exports =  (content, initialData) => 
    (
        `<!DOCTYPE html>
            <html>
                <head>
                    <link href="css/bootstrap.css" type="text/css" rel="stylesheet"> 
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