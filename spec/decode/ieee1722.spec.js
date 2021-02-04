var ieee1722 = require("../../decode/ieee1722");
var events = require("events");
var shouldBehaveLikeADecoder = require("./decode").shouldBehaveLikeADecoder;
require("should");

describe("IEEE1722", function(){
  beforeEach(function () {
    this.example = Buffer.from("02818e0091e0f000fe8100024260f37804000510020000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "hex");
    this.eventEmitter = new events.EventEmitter();
    this.instance = new ieee1722(this.eventEmitter);
  });

  describe("#decode()", function(){
    shouldBehaveLikeADecoder("ieee1722", true);

    it("sets the #version to the IEEE1722 version", function() {
      this.instance.decode(this.example, 0);
      this.instance.should.have.property("version", 0);
    });

    it("sets the #subtype to the IEEE1722 subtype", function() {
      this.instance.decode(this.example, 0);
      this.instance.should.have.property("subtype", 2);
    });

    it("sets the #sequenceNum to the IEEE1722 sequenceNum", function() {
      this.instance.decode(this.example, 0);
      this.instance.should.have.property("sequenceNum", 142);
    });

    it("sets the #bit to the IEEE1722 bit", function() {
      this.instance.decode(this.example, 0);
      this.instance.should.have.property("bit", 16);
    });
  });
});
