const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTRdocBzS = await PACT.new({from: accounts[3]});
		const uinthdV8jiC = BigInt("18")
		const addressKai1xqN = accounts[4]
		const addressze5N0yb = accounts[5]
		const uint8O0w8XoA = await PACTRdocBzS.decimals.call({from: accounts[5]});
//		const boolk1ljh3e = await PACTRdocBzS.transfer.call(addressKai1xqN, uinthdV8jiC, {from: accounts[3]});
//		const uintX6MIOmj = await PACTRdocBzS.balanceOf.call(addressze5N0yb, {from: accounts[2]});

		assert.equal(uint8O0w8XoA, BigInt("18"))
		await expect(PACTRdocBzS.transfer.call(addressKai1xqN, uinthdV8jiC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTj19UaX9 = await PACT.new({from: accounts[1]});
		const uintHEEF8Y = BigInt("394")
		const addressbuxUS6G = accounts[1]
		const addressQXYmfB5 = accounts[2]
		const addressb5QS0Om = accounts[0]
		const addressu4sPyoa = accounts[1]
		const addressfLYInrs = accounts[3]
		const boolZYWb7LJ = await PACTj19UaX9.approve.call(addressbuxUS6G, uintHEEF8Y, {from: accounts[4]});
//		const boolLajlZ3h = await PACTj19UaX9.setupFarming.call(addressQXYmfB5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8bozNuR3 = await PACTj19UaX9.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolzrngyUl = await PACTj19UaX9.setupTeam.call(addressb5QS0Om, {from: accounts[0]});
//		const uintL3SjWC4 = await PACTj19UaX9.balanceOf.call(addressu4sPyoa, {from: accounts[4]});
//		const boolxLzRFHq = await PACTj19UaX9.setupBasePool.call(addressfLYInrs, {from: accounts[0]});

		assert.equal(boolZYWb7LJ, true)
		await expect(PACTj19UaX9.setupFarming.call(addressQXYmfB5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTc0fAiTE = await PACT.new({from: accounts[2]});
		const addresscRJVY1C = accounts[3]
		const addresst3A0XTA = accounts[0]
		const addressrI2ItIJ = accounts[2]
		const uint8lqoBZb2 = await PACTc0fAiTE.decimals.call({from: accounts[0]});
		const uintawRPkgS = await PACTc0fAiTE.balanceOf.call(addresscRJVY1C, {from: accounts[0]});
//		const boolAGFWOQb = await PACTc0fAiTE.setupTeam.call(addresst3A0XTA, {from: accounts[4]});
//		const boolSldZbo2 = await PACTc0fAiTE.setupFarming.call(addressrI2ItIJ, {from: accounts[0]});

		assert.equal(uint8lqoBZb2, BigInt("18"))
		assert.equal(uintawRPkgS, BigInt("0"))
		await expect(PACTc0fAiTE.setupTeam.call(addresst3A0XTA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTOefDpOh = await PACT.new({from: accounts[1]});
		const uintGWau4iU = BigInt("1628")
		const addressj8uulWq = accounts[5]
		const addressNNN5SUV = accounts[2]
		const addresswJB1HuU = "0x0000000000000000000000000000000000000001"
		const addressCO8hBh5 = accounts[3]
		const uint8IhI95mX = await PACTOefDpOh.decimals.call({from: accounts[4]});
//		const boolTO3sjXc = await PACTOefDpOh.transferFrom.call(addressNNN5SUV, addressj8uulWq, uintGWau4iU, {from: accounts[0]});
//		const boolLWDwLCK = await PACTOefDpOh.setupTeam.call(addresswJB1HuU, {from: accounts[2]});
//		const boolj8BaSLN = await PACTOefDpOh.setupTeam.call(addressCO8hBh5, {from: accounts[5]});
//		const uint8HzhByvq = await PACTOefDpOh.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8IhI95mX, BigInt("18"))
		await expect(PACTOefDpOh.transferFrom.call(addressNNN5SUV, addressj8uulWq, uintGWau4iU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTguHN9fR = await PACT.new({from: accounts[0]});
		const addressbBkGXLJ = accounts[3]
		const uintiab54Sj = await PACTguHN9fR.totalSupply.call({from: accounts[4]});
		const stringUy2lTvU = await PACTguHN9fR.name.call({from: accounts[2]});
		const stringIVtKh8v = await PACTguHN9fR.symbol.call({from: accounts[0]});
//		const boolNupt2jb = await PACTguHN9fR.setupReserve.call(addressbBkGXLJ, {from: accounts[3]});

		assert.equal(stringIVtKh8v, "PACT")
		assert.equal(stringUy2lTvU, "P2PB2B community token")
		assert.equal(uintiab54Sj, BigInt("1000000000000000000000000000"))
		await expect(PACTguHN9fR.setupReserve.call(addressbBkGXLJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTVr9dDLU = await PACT.new({from: accounts[3]});
		const uintuqJFEFN = BigInt("1963")
		const addressufwGKmo = accounts[4]
		const addressZ1Oq3C = "0x0000000000000000000000000000000000000001"
		const addressG3MS7hw = accounts[3]
		const addresswQkbQTt = "0x0000000000000000000000000000000000000001"
		const addressubfvlAA = accounts[0]
		const addressqSWlp1g = accounts[0]
		const boolLgjy8bI = await PACTVr9dDLU.approve.call(addressufwGKmo, uintuqJFEFN, {from: accounts[0]});
		const uintAWiCvDX = await PACTVr9dDLU.balanceOf.call(addressZ1Oq3C, {from: accounts[2]});
		const uintvHkwALP = await PACTVr9dDLU.allowance.call(addresswQkbQTt, addressG3MS7hw, {from: accounts[2]});
//		const boolpvz1vpg = await PACTVr9dDLU.setupRewards.call(addressubfvlAA, {from: accounts[4]});
//		const uintDSlo3sm = await PACTVr9dDLU.balanceOf.call(addressqSWlp1g, {from: accounts[1]});

		assert.equal(boolLgjy8bI, true)
		assert.equal(uintAWiCvDX, BigInt("0"))
		assert.equal(uintvHkwALP, BigInt("0"))
		await expect(PACTVr9dDLU.setupRewards.call(addressubfvlAA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTabxSsGC = await PACT.new({from: accounts[5]});
		const addressxEZXkzH = accounts[2]
		const stringlNyRWn = await PACTabxSsGC.name.call({from: accounts[3]});
//		const boolSeu08uk = await PACTabxSsGC.setupBasePool.call(addressxEZXkzH, {from: accounts[3]});

		assert.equal(stringlNyRWn, "P2PB2B community token")
		await expect(PACTabxSsGC.setupBasePool.call(addressxEZXkzH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTRdocBzS = await PACT.new({from: accounts[3]});
		const uintRtW9Ezw = BigInt("926")
		const addressTertvDO = accounts[4]
		const uintokEuuFy = BigInt("18")
		const addressuFHHVxx = accounts[5]
		const addressH2BenR0 = accounts[5]
		const addressiQ6rwRQ = accounts[3]
//		const booleCPzlI = await PACTRdocBzS.burn.call(addressTertvDO, uintRtW9Ezw, {from: accounts[1]});
//		const uint8O0w8XoA = await PACTRdocBzS.decimals.call({from: accounts[5]});
//		const boolk1ljh3e = await PACTRdocBzS.transfer.call(addressuFHHVxx, uintokEuuFy, {from: accounts[3]});
//		const uintX6MIOmj = await PACTRdocBzS.balanceOf.call(addressH2BenR0, {from: accounts[2]});
//		const boolghZwwqB = await PACTRdocBzS.setupBasePool.call(addressiQ6rwRQ, {from: accounts[1]});

		await expect(PACTRdocBzS.burn.call(addressTertvDO, uintRtW9Ezw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTK19anwE = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressKFhCKRG = accounts[0]
		const addressjtoZJAX = accounts[3]
		const uintOBEt9uY = BigInt("2026")
		const addressSXrJAYL = accounts[4]
		const uintNat59hv = await PACTK19anwE.allowance.call(addressjtoZJAX, addressKFhCKRG, {from: accounts[4]});
		const uintAk1f5Jp = await PACTK19anwE.totalSupply.call({from: accounts[2]});
		const boolb09iRpN = await PACTK19anwE.approve.call(addressSXrJAYL, uintOBEt9uY, {from: accounts[0]});
	});

	it('test for PACT', async () => {
		const PACTRdocBzS = await PACT.new({from: accounts[3]});
		const uintHCeNkw2 = BigInt("0")
		const addressSfGmHr = accounts[4]
		const uintKehMnHf = BigInt("1408")
		const addresslGmq8e8 = accounts[4]
		const uintItuSaYd = BigInt("187")
		const addressDFXnPtA = accounts[2]
		const address17wFhS = accounts[0]
		const boolk1ljh3e = await PACTRdocBzS.transfer.call(addressSfGmHr, uintHCeNkw2, {from: accounts[3]});
//		const boolS27XEiW = await PACTRdocBzS.transfer.call(addresslGmq8e8, uintKehMnHf, {from: accounts[1]});
//		const boolkOwYfjf = await PACTRdocBzS.approve.call(addressDFXnPtA, uintItuSaYd, {from: "0x0000000000000000000000000000000000000001"});
//		const boolGdczuov = await PACTRdocBzS.setupRewards.call(address17wFhS, {from: accounts[5]});

		assert.equal(boolk1ljh3e, true)
		await expect(PACTRdocBzS.transfer.call(addresslGmq8e8, uintKehMnHf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})