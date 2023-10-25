const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEtRH36Ly = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintE3dGdfw = BigInt("1123")
		const addressdyi4xFq = accounts[4]
		const addressei6H4bH = accounts[3]
		const addresslq82l00 = accounts[0]
		const boolau90PAb = await REXUNIFINANCEtRH36Ly.increaseApproval.call(addressdyi4xFq, uintE3dGdfw, {from: accounts[1]});
		const uint256lU0XsDH = await REXUNIFINANCEtRH36Ly.allowance.call(addresslq82l00, addressei6H4bH, {from: accounts[4]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCENwDGiO5 = await REXUNIFINANCE.new({from: accounts[2]});
		const uintzkQKUvW = BigInt("33")
		const addressobA2xLC = accounts[0]
		const addressWBZBrHy = accounts[0]
		const boolc47oiG8 = await REXUNIFINANCENwDGiO5.approve.call(addressobA2xLC, uintzkQKUvW, {from: accounts[1]});
		const addressH4MyKT8 = await REXUNIFINANCENwDGiO5.transferOwnership.call(addressWBZBrHy, {from: accounts[2]});

		assert.equal(boolc47oiG8, true)
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEPsRgaVS = await REXUNIFINANCE.new({from: accounts[4]});
		const uintU7cXjt6 = BigInt("547")
		const addressa1zELZB = accounts[0]
		const uintFxSd8NA = BigInt("1505")
		const addressxa2S5rm = accounts[4]
		const uintSszvyv = BigInt("1457")
		const addressC4zeCEs = accounts[1]
		const boolIfu2W5z = await REXUNIFINANCEPsRgaVS.approve.call(addressa1zELZB, uintU7cXjt6, {from: accounts[5]});
		const boolixaORkg = await REXUNIFINANCEPsRgaVS.decreaseApproval.call(addressxa2S5rm, uintFxSd8NA, {from: accounts[3]});
//		const boola9wNK94 = await REXUNIFINANCEPsRgaVS.decreaseApproval.call(addressC4zeCEs, uintSszvyv, {from: accounts[1]});

		assert.equal(boolIfu2W5z, true)
		assert.equal(boolixaORkg, true)
		await expect(REXUNIFINANCEPsRgaVS.decreaseApproval.call(addressC4zeCEs, uintSszvyv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCElplsMa8 = await REXUNIFINANCE.new({from: accounts[3]});
		const uintvvxz1sr = BigInt("1502")
		const addressmUvxoa9 = accounts[3]
		const uintYoetjT5 = BigInt("181")
		const addressvDu3Wif = accounts[0]
		const addressBeXd3Ke = accounts[5]
		const boolICIgpB0 = await REXUNIFINANCElplsMa8.approve.call(addressmUvxoa9, uintvvxz1sr, {from: accounts[2]});
//		const boolIt7vUsD = await REXUNIFINANCElplsMa8.transferFrom.call(addressBeXd3Ke, addressvDu3Wif, uintYoetjT5, {from: accounts[5]});

		assert.equal(boolICIgpB0, true)
		await expect(REXUNIFINANCElplsMa8.transferFrom.call(addressBeXd3Ke, addressvDu3Wif, uintYoetjT5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEYvFuZcv = await REXUNIFINANCE.new({from: accounts[0]});
		const uintIfVFEAp = BigInt("547")
		const addressimHpQu0 = accounts[4]
		const uintant9PkV = BigInt("545")
		const addressuoZfPfJ = accounts[4]
		const boolHeYRsfz = await REXUNIFINANCEYvFuZcv.increaseApproval.call(addressimHpQu0, uintIfVFEAp, {from: accounts[2]});
		const boolXchwY0e = await REXUNIFINANCEYvFuZcv.approve.call(addressuoZfPfJ, uintant9PkV, {from: accounts[2]});

		assert.equal(boolHeYRsfz, true)
		assert.equal(boolXchwY0e, true)
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCElplsMa8 = await REXUNIFINANCE.new({from: accounts[3]});
		const uinttK2S2G = BigInt("1502")
		const addressl120xgu = accounts[3]
		const uintVjibIqZ = BigInt("1082")
		const addresspctNHm = "0x0000000000000000000000000000000000000001"
		const addressak0pMJa = accounts[0]
		const uintMVaq3z = BigInt("181")
		const addressUv3Q5SQ = accounts[1]
		const addresslX2CVB5 = accounts[5]
		const boolICIgpB0 = await REXUNIFINANCElplsMa8.approve.call(addressl120xgu, uinttK2S2G, {from: accounts[2]});
//		const boolb28koqI = await REXUNIFINANCElplsMa8.transfer.call(addresspctNHm, uintVjibIqZ, {from: accounts[3]});
//		const uint256qWoI4xs = await REXUNIFINANCElplsMa8.balanceOf.call(addressak0pMJa, {from: "0x0000000000000000000000000000000000000001"});
//		const boolIt7vUsD = await REXUNIFINANCElplsMa8.transferFrom.call(addresslX2CVB5, addressUv3Q5SQ, uintMVaq3z, {from: accounts[5]});

		assert.equal(boolICIgpB0, true)
		await expect(REXUNIFINANCElplsMa8.transfer.call(addresspctNHm, uintVjibIqZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEXfsRXkT = await REXUNIFINANCE.new({from: accounts[3]});
		const addresse09yn4z = accounts[0]
		const addressOsl2q9T = accounts[4]
		const addresscVlSalN = accounts[5]
		const uint256O1509FZ = await REXUNIFINANCEXfsRXkT.allowance.call(addressOsl2q9T, addresse09yn4z, {from: accounts[0]});
		const uint256rRTYbCr = await REXUNIFINANCEXfsRXkT.balanceOf.call(addresscVlSalN, {from: accounts[1]});

		assert.equal(uint256O1509FZ, BigInt("0"))
		assert.equal(uint256rRTYbCr, BigInt("0"))
	});
})