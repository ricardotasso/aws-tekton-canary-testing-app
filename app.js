//Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
//SPDX-License-Identifier: MIT-0

var express = require("express");
var app = express();
var AWSXRay = require('aws-xray-sdk');

app.use(AWSXRay.express.openSegment('Product-Detail-V1'));

app.get("/catalogDetail", (req, res, next) => {
  console.log("Catalog Detail Version 2 Get Request Successful");
  res.json({
             "version":"3",
             "vendors":[ "ABC.com", "XYZ.com", "PQR.com", "ZOP.com", "Switzerland.com" , "WXD.com", "TQW.com"]
              } )
});

app.get("/ping", (req, res, next) => {
  res.json("Healthy")
});

app.use(AWSXRay.express.closeSegment()); 

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
