const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTRcmXrQx = await PACT.new({from: accounts[1]});
		const uintjsXiTdy = BigInt("626")
		const addressXMUnSFW = accounts[2]
		const addresso6hTpcb = accounts[2]
		const addressnSeA8N = accounts[4]
		const addressFFO0GVG = accounts[5]
		const stringID5NL4i = await PACTRcmXrQx.name.call({from: accounts[0]});
		const boolG08BjPX = await PACTRcmXrQx.approve.call(addressXMUnSFW, uintjsXiTdy, {from: accounts[4]});
		const boolxYVmzgY = await PACTRcmXrQx.setupTeam.call(addresso6hTpcb, {from: accounts[1]});
		const bool8UT5SO = await PACTRcmXrQx.setupBasePool.call(addressnSeA8N, {from: accounts[2]});
		const uintHXokFRk = await PACTRcmXrQx.balanceOf.call(addressFFO0GVG, {from: accounts[5]});

		assert.equal(boolG08BjPX, true)
		assert.equal(stringID5NL4i, "P2PB2B community token")
		await expect(PACTRcmXrQx.setupTeam.call(addresso6hTpcb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT4BEODi = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressIWyBgu2 = accounts[4]
		const addressQPKeUwg = accounts[1]
		const addressLaaYImt = accounts[4]
		const uintjtowyU = BigInt("742")
		const addressDRkF6qZ = accounts[3]
		const uintGVr6zz = BigInt("197")
		const addresstitLcE = accounts[2]
		const boolBnTaQFa = await PACT4BEODi.setupRewards.call(addressIWyBgu2, {from: accounts[4]});
		const uint3rFxCY = await PACT4BEODi.allowance.call(addressLaaYImt, addressQPKeUwg, {from: accounts[2]});
		const booldsSRxEu = await PACT4BEODi.burn.call(addressDRkF6qZ, uintjtowyU, {from: accounts[4]});
		const bool5YPPPJ = await PACT4BEODi.burn.call(addresstitLcE, uintGVr6zz, {from: accounts[5]});
	});

	it('test for PACT', async () => {
		const PACTGsxAvG1 = await PACT.new({from: accounts[3]});
		const addressr21i5GN = accounts[4]
		const addressSvAndeK = "0x0000000000000000000000000000000000000001"
		const uintAKSjlQW = BigInt("1609")
		const addressMZwX27n = accounts[3]
		const uintIYBrCwD = await PACTGsxAvG1.allowance.call(addressSvAndeK, addressr21i5GN, {from: accounts[4]});
		const stringF8kcWlj = await PACTGsxAvG1.name.call({from: accounts[3]});
		const boollTgQ848 = await PACTGsxAvG1.approve.call(addressMZwX27n, uintAKSjlQW, {from: accounts[1]});

		assert.equal(boollTgQ848, true)
		assert.equal(stringF8kcWlj, "P2PB2B community token")
		assert.equal(uintIYBrCwD, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTevmStd = await PACT.new({from: accounts[1]});
		const addressr5ab0wz = accounts[4]
		const addresscbDcrbk = accounts[3]
		const uinty5BygDH = BigInt("386")
		const addressu584iZa = accounts[1]
		const addressp5NHPB0 = accounts[3]
		const uintpHZh37h = await PACTevmStd.balanceOf.call(addressr5ab0wz, {from: accounts[4]});
		const boolpDjwjAc = await PACTevmStd.setupRewards.call(addresscbDcrbk, {from: accounts[1]});
		const boolBq1jPJP = await PACTevmStd.approve.call(addressu584iZa, uinty5BygDH, {from: accounts[5]});
		const boolyuXAvn = await PACTevmStd.setupBasePool.call(addressp5NHPB0, {from: accounts[0]});
		const stringOGUJ3XF = await PACTevmStd.name.call({from: accounts[2]});

		assert.equal(uintpHZh37h, BigInt("0"))
		await expect(PACTevmStd.setupRewards.call(addresscbDcrbk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTW2cRsky = await PACT.new({from: accounts[4]});
		const uintfLEiCD = BigInt("1909")
		const addressvzbMlo = accounts[3]
		const addressbpBPisN = accounts[3]
		const boolX2jg0N9 = await PACTW2cRsky.transfer.call(addressvzbMlo, uintfLEiCD, {from: accounts[0]});
		const boolC6qHhG3 = await PACTW2cRsky.setupBasePool.call(addressbpBPisN, {from: accounts[4]});

		await expect(PACTW2cRsky.transfer.call(addressvzbMlo, uintfLEiCD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTtMukaUc = await PACT.new({from: accounts[2]});
		const addressKECvrEb = "0x0000000000000000000000000000000000000001"
		const addressQVFma8c = accounts[3]
		const addressqop8wvt = accounts[0]
		const stringu0Xyd6y = await PACTtMukaUc.name.call({from: accounts[0]});
		const uintIAXC8sF = await PACTtMukaUc.totalSupply.call({from: accounts[0]});
		const boolwjKmo3v = await PACTtMukaUc.setupTeam.call(addressKECvrEb, {from: "0x0000000000000000000000000000000000000001"});
		const uinthqRkIY3 = await PACTtMukaUc.allowance.call(addressqop8wvt, addressQVFma8c, {from: accounts[0]});
		const uint8qtfHjDp = await PACTtMukaUc.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringu0Xyd6y, "P2PB2B community token")
		assert.equal(uintIAXC8sF, BigInt("1000000000000000000000000000"))
		await expect(PACTtMukaUc.setupTeam.call(addressKECvrEb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTw7NuMK8 = await PACT.new({from: accounts[5]});
		const addressfeH28Gm = "0x0000000000000000000000000000000000000001"
		const uintz2CNWMi = BigInt("1486")
		const addressh5X8Ru = accounts[5]
		const addressXwzmaK = accounts[2]
		const boolON9Yvnw = await PACTw7NuMK8.setupReserve.call(addressfeH28Gm, {from: accounts[0]});
		const uint5b9HDG = await PACTw7NuMK8.totalSupply.call({from: accounts[3]});
		const stringZZWF7FO = await PACTw7NuMK8.name.call({from: accounts[2]});
		const boolI3C0SmX = await PACTw7NuMK8.transferFrom.call(addressXwzmaK, addressh5X8Ru, uintz2CNWMi, {from: accounts[5]});

		await expect(PACTw7NuMK8.setupReserve.call(addressfeH28Gm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTW2cRsky = await PACT.new({from: accounts[4]});
		const addressg22QUT7 = accounts[3]
		const boolC6qHhG3 = await PACTW2cRsky.setupBasePool.call(addressg22QUT7, {from: accounts[4]});

		await expect(PACTW2cRsky.setupBasePool.call(addressg22QUT7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTW2cRsky = await PACT.new({from: accounts[4]});
		const addressyxbByL6 = accounts[4]
		const uintin5VzY6 = BigInt("587")
		const addressMyud8Jd = accounts[3]
		const uintae4aSzr = BigInt("1909")
		const addressyCLhKC4 = accounts[3]
		const addressxWg4Dfg = accounts[3]
		const uintOlC63oO = await PACTW2cRsky.balanceOf.call(addressyxbByL6, {from: accounts[5]});
		const boolqsDrCKo = await PACTW2cRsky.burn.call(addressMyud8Jd, uintin5VzY6, {from: accounts[1]});
		const strings7RyjXY = await PACTW2cRsky.name.call({from: accounts[3]});
		const boolX2jg0N9 = await PACTW2cRsky.transfer.call(addressyCLhKC4, uintae4aSzr, {from: accounts[0]});
		const boolC6qHhG3 = await PACTW2cRsky.setupBasePool.call(addressxWg4Dfg, {from: accounts[4]});

		assert.equal(uintOlC63oO, BigInt("0"))
		await expect(PACTW2cRsky.burn.call(addressMyud8Jd, uintin5VzY6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTI2rbcEo = await PACT.new({from: accounts[1]});
		const uintfTNDyvz = BigInt("1445")
		const addressXbCkzTV = accounts[3]
		const addressMVyMwHi = accounts[0]
		const uintCRBhkv3 = BigInt("897")
		const addressjC0dASE = accounts[2]
		const addresslByAgS = accounts[3]
		const booltrbYGPA = await PACTI2rbcEo.approve.call(addressXbCkzTV, uintfTNDyvz, {from: accounts[1]});
		const stringBfzOOgF = await PACTI2rbcEo.symbol.call({from: accounts[2]});
		const boolECRLN2u = await PACTI2rbcEo.setupTeam.call(addressMVyMwHi, {from: accounts[0]});
		const boolve0hoaX = await PACTI2rbcEo.transfer.call(addressjC0dASE, uintCRBhkv3, {from: accounts[5]});
		const uintEZtgso6 = await PACTI2rbcEo.balanceOf.call(addresslByAgS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booltrbYGPA, true)
		assert.equal(stringBfzOOgF, "PACT")
		await expect(PACTI2rbcEo.setupTeam.call(addressMVyMwHi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTI2rbcEo = await PACT.new({from: accounts[1]});
		const uintmkHMIwO = BigInt("1166")
		const addressdRTeb2i = "0x0000000000000000000000000000000000000001"
		const addressoaXOpYd = accounts[3]
		const uintwO2Pwk = BigInt("1408")
		const addressbl8q53I = accounts[3]
		const address4tjGys = accounts[1]
		const addressNxl9060 = accounts[2]
		const uintjqmTwoJ = BigInt("897")
		const addressoeWsZQv = accounts[2]
		const boolKFkZCTF = await PACTI2rbcEo.transferFrom.call(addressoaXOpYd, addressdRTeb2i, uintmkHMIwO, {from: accounts[1]});
		const booltrbYGPA = await PACTI2rbcEo.approve.call(addressbl8q53I, uintwO2Pwk, {from: accounts[1]});
		const boolECRLN2u = await PACTI2rbcEo.setupTeam.call(address4tjGys, {from: accounts[0]});
		const boolAd3A8ai = await PACTI2rbcEo.setupTeam.call(addressNxl9060, {from: accounts[0]});
		const boolve0hoaX = await PACTI2rbcEo.transfer.call(addressoeWsZQv, uintjqmTwoJ, {from: accounts[5]});

		await expect(PACTI2rbcEo.transferFrom.call(addressoaXOpYd, addressdRTeb2i, uintmkHMIwO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTRWboTE = await PACT.new({from: accounts[0]});
		const uint8Y5CqEEA = await PACTRWboTE.decimals.call({from: accounts[0]});
		const stringF1LM8qU = await PACTRWboTE.name.call({from: accounts[0]});

		assert.equal(stringF1LM8qU, "P2PB2B community token")
		assert.equal(uint8Y5CqEEA, BigInt("18"))
	});

	it('test for PACT', async () => {
		const PACTW2cRsky = await PACT.new({from: accounts[4]});
		const addresszPTAiF = accounts[0]
		const addressTdTAvY3 = accounts[4]
		const boolUigPqD9 = await PACTW2cRsky.setupFarming.call(addresszPTAiF, {from: accounts[0]});
		const boolC6qHhG3 = await PACTW2cRsky.setupBasePool.call(addressTdTAvY3, {from: accounts[4]});
		const stringkcFRptU = await PACTW2cRsky.name.call({from: accounts[1]});

		await expect(PACTW2cRsky.setupFarming.call(addresszPTAiF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})