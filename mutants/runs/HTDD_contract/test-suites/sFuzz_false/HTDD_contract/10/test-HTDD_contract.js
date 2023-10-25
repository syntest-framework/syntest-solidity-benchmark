const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractV55zl5m = await HTDD_contract.new({from: accounts[4]});
		const uintBB0dG8J = BigInt("228")
		const addresssRHA33G = accounts[5]
		const uintHvgvTw = BigInt("456")
		const addressVV0MqAn = accounts[4]
		const addressqYmAych = accounts[0]
		const uintFId4DS = BigInt("1147")
		const addressn0N23SO = accounts[2]
		const addressFGAP6pt = accounts[3]
		const addressxoIhLvK = accounts[3]
		const addressx3lT4JR = accounts[3]
		const boolJaYh8Hp = await HTDD_contractV55zl5m.approve.call(addresssRHA33G, uintBB0dG8J, {from: accounts[0]});
		const boolgLOhtms = await HTDD_contractV55zl5m.transferFrom.call(addressqYmAych, addressVV0MqAn, uintHvgvTw, {from: accounts[5]});
		const boold44Yi39 = await HTDD_contractV55zl5m.transferFrom.call(addressFGAP6pt, addressn0N23SO, uintFId4DS, {from: accounts[3]});
		const uint256TBOWmCL = await HTDD_contractV55zl5m.allowance.call(addressx3lT4JR, addressxoIhLvK, {from: accounts[2]});

		assert.equal(boolJaYh8Hp, true)
		await expect(HTDD_contractV55zl5m.transferFrom.call(addressqYmAych, addressVV0MqAn, uintHvgvTw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractecKmWeK = await HTDD_contract.new({from: accounts[3]});
		const addressiR5uyVm = "0x0000000000000000000000000000000000000001"
		const addressar76210 = accounts[2]
		const uintjtdcVda = BigInt("1564")
		const address2PjBOz = accounts[5]
		const uintFdivPrZ = BigInt("390")
		const addressE1QQgUm = accounts[4]
		const addressXJT8skd = accounts[3]
		const addressm5vtnC4 = accounts[1]
		const uint256RkCwp7W = await HTDD_contractecKmWeK.allowance.call(addressar76210, addressiR5uyVm, {from: accounts[2]});
		const boolUENoi3D = await HTDD_contractecKmWeK.approve.call(address2PjBOz, uintjtdcVda, {from: accounts[3]});
		const boolEzeiRj6 = await HTDD_contractecKmWeK.approve.call(addressE1QQgUm, uintFdivPrZ, {from: accounts[2]});
		const uint256pBjcpaP = await HTDD_contractecKmWeK.allowance.call(addressm5vtnC4, addressXJT8skd, {from: accounts[2]});

		assert.equal(boolEzeiRj6, true)
		assert.equal(boolUENoi3D, true)
		assert.equal(uint256RkCwp7W, BigInt("0"))
		assert.equal(uint256pBjcpaP, BigInt("0"))
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractqUJ9Kkc = await HTDD_contract.new({from: accounts[3]});
		const uintTLCBK4D = BigInt("1085")
		const addressZHlN7C = accounts[4]
		const uintYVFL03 = BigInt("231")
		const addressCeL4HYl = accounts[5]
		const addressrOo6eim = accounts[3]
		const uintH2seGz0 = BigInt("561")
		const addresseEHlGgl = accounts[3]
		const booltD1odxk = await HTDD_contractqUJ9Kkc.transfer.call(addressZHlN7C, uintTLCBK4D, {from: "0x0000000000000000000000000000000000000001"});
		const boolqU06ran = await HTDD_contractqUJ9Kkc.transferFrom.call(addressrOo6eim, addressCeL4HYl, uintYVFL03, {from: accounts[3]});
		const boollQCdsn2 = await HTDD_contractqUJ9Kkc.approve.call(addresseEHlGgl, uintH2seGz0, {from: accounts[2]});

		await expect(HTDD_contractqUJ9Kkc.transfer.call(addressZHlN7C, uintTLCBK4D, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contracttiLKrC = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintsfUAy2I = BigInt("1161")
		const addressQHPTq1 = "0x0000000000000000000000000000000000000001"
		const uintlblWB2S = BigInt("355")
		const addressErQ010L = accounts[2]
		const uintYo4WwHT = BigInt("282")
		const addresspNzm5iT = accounts[4]
		const addressBFEFgi7 = accounts[0]
		const uintHAm1raw = BigInt("307")
		const addresspYnFNpx = accounts[3]
		const uintTw2Djfc = BigInt("1201")
		const addressPrJ19iD = accounts[0]
		const addressGP3LqMh = accounts[0]
		const addressCqsuVBO = accounts[4]
		const booli6VERcm = await HTDD_contracttiLKrC.transfer.call(addressQHPTq1, uintsfUAy2I, {from: accounts[1]});
		const boolST072b = await HTDD_contracttiLKrC.approve.call(addressErQ010L, uintlblWB2S, {from: accounts[3]});
		const boolOEbDd6 = await HTDD_contracttiLKrC.transferFrom.call(addressBFEFgi7, addresspNzm5iT, uintYo4WwHT, {from: accounts[5]});
		const boolRpnfUbg = await HTDD_contracttiLKrC.transfer.call(addresspYnFNpx, uintHAm1raw, {from: accounts[1]});
		const boolpBRCCBV = await HTDD_contracttiLKrC.approve.call(addressPrJ19iD, uintTw2Djfc, {from: accounts[3]});
		const uint256PddnUfD = await HTDD_contracttiLKrC.allowance.call(addressCqsuVBO, addressGP3LqMh, {from: accounts[2]});
	});
})