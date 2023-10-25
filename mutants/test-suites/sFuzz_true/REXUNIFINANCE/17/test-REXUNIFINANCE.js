const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEKSLFNHi = await REXUNIFINANCE.new({from: accounts[3]});
		const uintyDNtwsU = BigInt("1993")
		const addressvhjeUgl = accounts[2]
		const uintEeN7SyM = BigInt("1329")
		const addressqVRQub9 = "0x0000000000000000000000000000000000000001"
		const uintwpNKVsI = BigInt("1746")
		const addressefzWpfj = accounts[3]
		const addresshlHd6ZV = accounts[3]
//		const boolGah8f9 = await REXUNIFINANCEKSLFNHi.transfer.call(addressvhjeUgl, uintyDNtwsU, {from: accounts[2]});
//		const boolePMBMjL = await REXUNIFINANCEKSLFNHi.transfer.call(addressqVRQub9, uintEeN7SyM, {from: accounts[1]});
//		const boolpiJm42R = await REXUNIFINANCEKSLFNHi.transfer.call(addressefzWpfj, uintwpNKVsI, {from: accounts[5]});
//		const addressfiMnceq = await REXUNIFINANCEKSLFNHi.transferOwnership.call(addresshlHd6ZV, {from: accounts[1]});

		await expect(REXUNIFINANCEKSLFNHi.transfer.call(addressvhjeUgl, uintyDNtwsU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCECfgox7g = await REXUNIFINANCE.new({from: accounts[2]});
		const uintPOfFo0g = BigInt("429")
		const addressrBepB4G = accounts[1]
		const addressXrALVR1 = "0x0000000000000000000000000000000000000001"
		const uintpH61VWw = BigInt("466")
		const addressTyXBg0a = accounts[0]
		const addressoEqyzLg = "0x0000000000000000000000000000000000000001"
//		const boolwYrkBCP = await REXUNIFINANCECfgox7g.transfer.call(addressrBepB4G, uintPOfFo0g, {from: accounts[3]});
//		const uint256MClSWlo = await REXUNIFINANCECfgox7g.balanceOf.call(addressXrALVR1, {from: accounts[1]});
//		const boolLoIVexm = await REXUNIFINANCECfgox7g.approve.call(addressTyXBg0a, uintpH61VWw, {from: accounts[4]});
//		const addressCkQe4h4 = await REXUNIFINANCECfgox7g.transferOwnership.call(addressoEqyzLg, {from: accounts[0]});

		await expect(REXUNIFINANCECfgox7g.transfer.call(addressrBepB4G, uintPOfFo0g, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEKYTMCTG = await REXUNIFINANCE.new({from: accounts[2]});
		const uintqQTatxx = BigInt("2033")
		const addressErmq08 = accounts[2]
		const uintJTL1xe = BigInt("1977")
		const addressnOLwRLm = accounts[1]
		const uintX7JDZi = BigInt("1322")
		const addressrDGHFAE = accounts[1]
		const addressta5HEiT = accounts[3]
		const boolpTzFJS4 = await REXUNIFINANCEKYTMCTG.increaseApproval.call(addressErmq08, uintqQTatxx, {from: accounts[0]});
		const boolZhgHUG = await REXUNIFINANCEKYTMCTG.approve.call(addressnOLwRLm, uintJTL1xe, {from: accounts[3]});
//		const boolPa0cBYO = await REXUNIFINANCEKYTMCTG.transfer.call(addressrDGHFAE, uintX7JDZi, {from: accounts[3]});
//		const uint2565AwOmU = await REXUNIFINANCEKYTMCTG.balanceOf.call(addressta5HEiT, {from: accounts[3]});

		assert.equal(boolZhgHUG, true)
		assert.equal(boolpTzFJS4, true)
		await expect(REXUNIFINANCEKYTMCTG.transfer.call(addressrDGHFAE, uintX7JDZi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEcxtngE1 = await REXUNIFINANCE.new({from: accounts[2]});
		const addresslvPNVs5 = accounts[1]
		const addresszdzPQcB = accounts[4]
		const uintiZuuWaH = BigInt("1391")
		const addressEF63ZIr = accounts[0]
		const uintA9kNk6I = BigInt("276")
		const addresszkHB98K = accounts[0]
		const uintD1w45aV = BigInt("860")
		const addressmRjydio = accounts[1]
		const uint256nEpXYSw = await REXUNIFINANCEcxtngE1.transferableTokens.call(addresslvPNVs5, {from: accounts[0]});
		const uint256eeQmz97 = await REXUNIFINANCEcxtngE1.transferableTokens.call(addresszdzPQcB, {from: "0x0000000000000000000000000000000000000001"});
		const boolABEu3UV = await REXUNIFINANCEcxtngE1.increaseApproval.call(addressEF63ZIr, uintiZuuWaH, {from: accounts[5]});
//		const boolj6lbkYh = await REXUNIFINANCEcxtngE1.approve.call(addresszkHB98K, uintA9kNk6I, {from: accounts[0]});
//		const bool0vGIAk = await REXUNIFINANCEcxtngE1.transfer.call(addressmRjydio, uintD1w45aV, {from: accounts[5]});

		assert.equal(boolABEu3UV, true)
		assert.equal(uint256eeQmz97, BigInt("0"))
		assert.equal(uint256nEpXYSw, BigInt("0"))
		await expect(REXUNIFINANCEcxtngE1.approve.call(addresszkHB98K, uintA9kNk6I, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEasKMvZP = await REXUNIFINANCE.new({from: accounts[4]});
		const uintZQIQM4q = BigInt("1380")
		const addresssnDnJIb = accounts[0]
		const uintlpEmbw = BigInt("2")
		const addresseLmnS8x = accounts[5]
		const uintnKP6F4z = BigInt("388")
		const addresso1NiAUI = accounts[2]
		const addressiFkfoZx = "0x0000000000000000000000000000000000000001"
		const boolu8IjGlt = await REXUNIFINANCEasKMvZP.approve.call(addresssnDnJIb, uintZQIQM4q, {from: accounts[1]});
		const boolY4Y0WjM = await REXUNIFINANCEasKMvZP.decreaseApproval.call(addresseLmnS8x, uintlpEmbw, {from: accounts[3]});
//		const boolamTa237 = await REXUNIFINANCEasKMvZP.transferFrom.call(addressiFkfoZx, addresso1NiAUI, uintnKP6F4z, {from: accounts[4]});

		assert.equal(boolY4Y0WjM, true)
		assert.equal(boolu8IjGlt, true)
		await expect(REXUNIFINANCEasKMvZP.transferFrom.call(addressiFkfoZx, addresso1NiAUI, uintnKP6F4z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEUDPHgsk = await REXUNIFINANCE.new({from: accounts[1]});
		const uint85M5RK = BigInt("512")
		const addresscYicy2x = accounts[3]
		const addressBRu4K8U = accounts[5]
		const addressz2VY2FD = accounts[3]
		const uintKmomnaE = BigInt("697")
		const addressZv1eZRm = accounts[4]
		const boolA4jjK3c = await REXUNIFINANCEUDPHgsk.increaseApproval.call(addresscYicy2x, uint85M5RK, {from: accounts[5]});
		const uint256Ev4M1F = await REXUNIFINANCEUDPHgsk.allowance.call(addressz2VY2FD, addressBRu4K8U, {from: accounts[4]});
		const boolTSbFR2n = await REXUNIFINANCEUDPHgsk.approve.call(addressZv1eZRm, uintKmomnaE, {from: accounts[1]});

		assert.equal(boolA4jjK3c, true)
		assert.equal(boolTSbFR2n, true)
		assert.equal(uint256Ev4M1F, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEwgGe6Fn = await REXUNIFINANCE.new({from: accounts[3]});
		const uintEuPHwk = BigInt("1947")
		const addressTst1r8U = accounts[0]
		const addressmmGpNxa = accounts[4]
		const addressqEG8cJx = accounts[1]
		const boolTi6bFkq = await REXUNIFINANCEwgGe6Fn.approve.call(addressTst1r8U, uintEuPHwk, {from: accounts[2]});
//		const addressXrepr2X = await REXUNIFINANCEwgGe6Fn.transferOwnership.call(addressmmGpNxa, {from: accounts[1]});
//		const uint256L82TN3a = await REXUNIFINANCEwgGe6Fn.balanceOf.call(addressqEG8cJx, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolTi6bFkq, true)
		await expect(REXUNIFINANCEwgGe6Fn.transferOwnership.call(addressmmGpNxa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEOcalO9D = await REXUNIFINANCE.new({from: accounts[0]});
		const uinth87V84E = BigInt("205")
		const addressHK0lwt5 = accounts[0]
		const addresslcEfNsa = accounts[0]
		const addressJYgakgd = accounts[0]
		const boolEg5zjax = await REXUNIFINANCEOcalO9D.approve.call(addressHK0lwt5, uinth87V84E, {from: accounts[5]});
//		const addressAfuH7Cw = await REXUNIFINANCEOcalO9D.transferOwnership.call(addresslcEfNsa, {from: accounts[0]});
//		const addressuAvkJJX = await REXUNIFINANCEOcalO9D.transferOwnership.call(addressJYgakgd, {from: accounts[0]});

		assert.equal(boolEg5zjax, true)
		await expect(REXUNIFINANCEOcalO9D.transferOwnership.call(addresslcEfNsa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEOcalO9D = await REXUNIFINANCE.new({from: accounts[0]});
		const uintbnN3AgC = BigInt("1455")
		const addressG1vDYUM = accounts[3]
		const uintpILu6zP = BigInt("205")
		const addressld4GFc = accounts[0]
		const addressXyuaaRa = accounts[1]
		const addressa0uAq4O = accounts[0]
		const boolo91lEfy = await REXUNIFINANCEOcalO9D.increaseApproval.call(addressG1vDYUM, uintbnN3AgC, {from: accounts[1]});
		const boolEg5zjax = await REXUNIFINANCEOcalO9D.approve.call(addressld4GFc, uintpILu6zP, {from: accounts[5]});
		const addressAfuH7Cw = await REXUNIFINANCEOcalO9D.transferOwnership.call(addressXyuaaRa, {from: accounts[0]});
//		const addressuAvkJJX = await REXUNIFINANCEOcalO9D.transferOwnership.call(addressa0uAq4O, {from: accounts[0]});

		assert.equal(boolEg5zjax, true)
		assert.equal(boolo91lEfy, true)
		await expect(REXUNIFINANCEOcalO9D.transferOwnership.call(addressa0uAq4O, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEPV3akSh = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addresswz4BJq6 = accounts[4]
		const addressPye2xbg = accounts[3]
		const uintplSJDQy = BigInt("837")
		const addressJEZiwGz = accounts[3]
		const addressir2JLFL = accounts[4]
		const uint256OEZwPU = await REXUNIFINANCEPV3akSh.transferableTokens.call(addresswz4BJq6, {from: accounts[2]});
		const uint256g9W0F1r = await REXUNIFINANCEPV3akSh.transferableTokens.call(addressPye2xbg, {from: accounts[5]});
		const boolpB8PEMR = await REXUNIFINANCEPV3akSh.approve.call(addressJEZiwGz, uintplSJDQy, {from: accounts[1]});
		const uint256qgqRQzp = await REXUNIFINANCEPV3akSh.balanceOf.call(addressir2JLFL, {from: accounts[0]});
	});
})