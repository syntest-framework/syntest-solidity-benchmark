const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractRvqbUVb = await HTDD_contract.new({from: accounts[2]});
		const addresszhoDePL = accounts[2]
		const addressfm3eX5q = accounts[0]
		const uintbyB6ycK = BigInt("610")
		const addressn30H71d = accounts[5]
		const uint256a3SvQOJ = await HTDD_contractRvqbUVb.allowance.call(addressfm3eX5q, addresszhoDePL, {from: "0x0000000000000000000000000000000000000001"});
		const boolotAnw1q = await HTDD_contractRvqbUVb.transfer.call(addressn30H71d, uintbyB6ycK, {from: accounts[0]});

		assert.equal(uint256a3SvQOJ, BigInt("0"))
		await expect(HTDD_contractRvqbUVb.transfer.call(addressn30H71d, uintbyB6ycK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractwLUD7BC = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uinthjYbmpm = BigInt("558")
		const addressiHdLhNY = accounts[0]
		const uintAU2dQ8d = BigInt("90")
		const addressP72t0f = accounts[5]
		const uintSsME8Hp = BigInt("723")
		const addressBa2ArJF = accounts[2]
		const addressuEXt17P = accounts[1]
		const addressWam7L2 = accounts[2]
		const boolXmvqIR = await HTDD_contractwLUD7BC.transfer.call(addressiHdLhNY, uinthjYbmpm, {from: accounts[4]});
		const boolv0LxLCi = await HTDD_contractwLUD7BC.transfer.call(addressP72t0f, uintAU2dQ8d, {from: accounts[3]});
		const boolmtoWXgz = await HTDD_contractwLUD7BC.transfer.call(addressBa2ArJF, uintSsME8Hp, {from: accounts[5]});
		const uint256nkXLEo3 = await HTDD_contractwLUD7BC.allowance.call(addressWam7L2, addressuEXt17P, {from: accounts[0]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractdv1b3ee = await HTDD_contract.new({from: accounts[1]});
		const addressIlwz4hZ = accounts[1]
		const addressOwvYDc7 = accounts[5]
		const uintKUoHoof = BigInt("983")
		const addressGDoGoz0 = "0x0000000000000000000000000000000000000001"
		const uintR4l1VR = BigInt("1841")
		const addresspli97F = accounts[2]
		const addressDP35GRo = accounts[2]
		const uintFTu4P3s = BigInt("1097")
		const addresshj5bGVG = accounts[0]
		const addressQO3Mf1 = accounts[0]
		const uintDTFbMq8 = BigInt("1043")
		const addressj2GVLMH = accounts[5]
		const addressx54wOf3 = accounts[0]
		const uint256U2jjPX = await HTDD_contractdv1b3ee.allowance.call(addressOwvYDc7, addressIlwz4hZ, {from: accounts[3]});
		const boolUFxztOV = await HTDD_contractdv1b3ee.approve.call(addressGDoGoz0, uintKUoHoof, {from: accounts[0]});
		const boolM7ctifS = await HTDD_contractdv1b3ee.transferFrom.call(addressDP35GRo, addresspli97F, uintR4l1VR, {from: accounts[1]});
		const boolxVGiHW1 = await HTDD_contractdv1b3ee.transferFrom.call(addressQO3Mf1, addresshj5bGVG, uintFTu4P3s, {from: accounts[1]});
		const boolhRNtK1m = await HTDD_contractdv1b3ee.transferFrom.call(addressx54wOf3, addressj2GVLMH, uintDTFbMq8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolUFxztOV, true)
		assert.equal(uint256U2jjPX, BigInt("0"))
		await expect(HTDD_contractdv1b3ee.transferFrom.call(addressDP35GRo, addresspli97F, uintR4l1VR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractbcGtaDo = await HTDD_contract.new({from: accounts[0]});
		const addressg50T7uY = accounts[3]
		const addressQY270ga = accounts[5]
		const uintOfottZi = BigInt("981")
		const addressQuLHnQg = accounts[4]
		const uintiX1dnsI = BigInt("918")
		const addresslpwlGlH = accounts[3]
		const addressw8op3yL = accounts[2]
		const uintNoW4Sv0 = BigInt("2005")
		const addressJM8wTZH = accounts[3]
		const uint256hoDRg4s = await HTDD_contractbcGtaDo.allowance.call(addressQY270ga, addressg50T7uY, {from: accounts[5]});
		const boolQJ5NaS = await HTDD_contractbcGtaDo.transfer.call(addressQuLHnQg, uintOfottZi, {from: accounts[0]});
		const boolKP2YF80 = await HTDD_contractbcGtaDo.transferFrom.call(addressw8op3yL, addresslpwlGlH, uintiX1dnsI, {from: accounts[5]});
		const boolsAJ7wct = await HTDD_contractbcGtaDo.approve.call(addressJM8wTZH, uintNoW4Sv0, {from: accounts[3]});

		assert.equal(boolQJ5NaS, true)
		assert.equal(uint256hoDRg4s, BigInt("0"))
		await expect(HTDD_contractbcGtaDo.transferFrom.call(addressw8op3yL, addresslpwlGlH, uintiX1dnsI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractlD8WuP = await HTDD_contract.new({from: accounts[0]});
		const uintklppMHq = BigInt("576")
		const addressXaEOTut = accounts[4]
		const addressIL0CChB = accounts[0]
		const uintHQWPW0 = BigInt("1947")
		const addressIaUgrX = accounts[3]
		const addressf8ufmPX = "0x0000000000000000000000000000000000000001"
		const uint1z3VhK = BigInt("50")
		const addressaOYXFkw = accounts[2]
		const uintK8d15l = BigInt("1544")
		const addresscnDiLbK = accounts[4]
		const boolQfjJVNY = await HTDD_contractlD8WuP.transferFrom.call(addressIL0CChB, addressXaEOTut, uintklppMHq, {from: accounts[2]});
		const boolQY30tE3 = await HTDD_contractlD8WuP.transferFrom.call(addressf8ufmPX, addressIaUgrX, uintHQWPW0, {from: accounts[1]});
		const boolDyb1WVs = await HTDD_contractlD8WuP.approve.call(addressaOYXFkw, uint1z3VhK, {from: accounts[2]});
		const boolI5Ubb11 = await HTDD_contractlD8WuP.approve.call(addresscnDiLbK, uintK8d15l, {from: accounts[3]});

		await expect(HTDD_contractlD8WuP.transferFrom.call(addressIL0CChB, addressXaEOTut, uintklppMHq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractRBl1ouL = await HTDD_contract.new({from: accounts[1]});
		const uintLCeDOJm = BigInt("0")
		const addressWddfuG2 = accounts[4]
		const addressei9pJZX = accounts[1]
		const boolkUv1wVs = await HTDD_contractRBl1ouL.transferFrom.call(addressei9pJZX, addressWddfuG2, uintLCeDOJm, {from: accounts[3]});

		assert.equal(boolkUv1wVs, true)
	});
})