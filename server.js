import 'babel-polyfill'
import React from 'react'
import express from 'express'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import bodyParser from 'body-parser'

import {App} from './src/App'


const path = require('path');
const fs = require('fs');


const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json())
app.use(express.static('build'))


   app.get('*', (req, res) => {
     
    const context = {}

    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
           <App/>
        </StaticRouter>
    )

    const html = `
       <html>
          <head>
          </head>
          <body>
             <div id="root">
               ${content}
             </div>
          </body>
       </html>
      `;

      res.send(html)
    
   })

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });