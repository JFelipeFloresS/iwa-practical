const   express = require('express'), // Allows to respond to HTTP requests, defines routing and renders the required content
        fs = require('fs'), // Working with the file system (read and write files)
        http = require('http'), // HTTP server
        path = require('path'), // Allows work with directory paths
        xml2js = require('xml2js'), // XML <-> JSON converter
        xmlParse = require('xslt-processor').xmlParse, // Parsing XML
        xsltProcess = require('xslt-processor').xsltProcess; // Processing XSLT

const   router = express(),
        server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'views'))); // Serving static content from "views" folder