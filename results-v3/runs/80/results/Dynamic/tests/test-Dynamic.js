const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicFaFJu2D = await Dynamic.new({from: accounts[0]});
		const uintu4EW14E = BigInt("1244")
		const stringsa2h9VJ = "7vpk6Ikb91zdjxMuOQZkk1ABfW86W5DXTNcrA1c1p8wcxbJdFBRwLodeDU2b5tWdNzUNXGmTZaND9skEzC9XDj"
		const uintes7dG68 = BigInt("2008")
		const uintguUdEuk = BigInt("1360")
		const stringQSQol9T = "jtaKNxlglFnXwOOJSLz1bAaPQXKCi2bn4"
		const uintbbXiJnA = BigInt("1558")
		const boolKWzxUNW = await DynamicFaFJu2D.yolo.call(uintes7dG68, stringsa2h9VJ, uintu4EW14E, {from: "0x0000000000000000000000000000000000000001"});
		const boolDAnZM5 = await DynamicFaFJu2D.echidna_test.call({from: accounts[5]});
		const boolLzVSHtj = await DynamicFaFJu2D.yolo.call(uintbbXiJnA, stringQSQol9T, uintguUdEuk, {from: accounts[0]});

		assert.equal(boolDAnZM5, true)
		assert.equal(boolKWzxUNW, true)
		assert.equal(boolLzVSHtj, true)
	});

	it('test for Dynamic', async () => {
		const Dynamicbh9nreS = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintc3yF29x = BigInt("955")
		const stringcC65y1K = "heUSCbcfJCU4jIe145hojcf0iYPY6"
		const uintEbP5n7g = BigInt("1046")
		const uintKLVjQx = BigInt("1255")
		const stringIxkH9qL = "kz1JIRajtg5Hnz7oo2h7C0AlHuzYeW"
		const uintsm8Pjp0 = BigInt("1495")
		const uintz3BprON = BigInt("113")
		const stringcd7ufrX = "XTGb5lpQpiAf4ygmoJtj13LqDsuno1vjGJwZoE0r3DN1FULFs3J"
		const uint2wmRan = BigInt("1518")
		const uintYxmhQwg = BigInt("1503")
		const stringdsLBG4l = ""
		const uintvOH4fym = BigInt("599")
		const boolvdLeJUe = await Dynamicbh9nreS.yolo.call(uintEbP5n7g, stringcC65y1K, uintc3yF29x, {from: accounts[2]});
		const boolyvH38D = await Dynamicbh9nreS.yolo.call(uintsm8Pjp0, stringIxkH9qL, uintKLVjQx, {from: accounts[2]});
		const boolX14e89p = await Dynamicbh9nreS.yolo.call(uint2wmRan, stringcd7ufrX, uintz3BprON, {from: accounts[5]});
		const boolTZRTQYH = await Dynamicbh9nreS.yolo.call(uintvOH4fym, stringdsLBG4l, uintYxmhQwg, {from: accounts[1]});
	});
})