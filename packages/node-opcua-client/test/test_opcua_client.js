"use strict";
const OPCUAClient = require("..").OPCUAClient;
const ClientSecureChannelLayer =  require("..").ClientSecureChannelLayer;

const describe = require("node-opcua-leak-detector").describeWithLeakDetector;
describe("OPCUA Client",function() {

    it("it should create a client", function () {

        const client = OPCUAClient.create({});

    });
    it("should create a ClientSecureChannerLayer", function () {

        const channel = new ClientSecureChannelLayer({});
        channel.dispose();
    });

});
