const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEZAbdgfu = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintD7iiTnT = BigInt("1557")
		const addressttxsQoM = "0x0000000000000000000000000000000000000001"
		const addressLVnTkF = accounts[4]
		const uintpApOhV = BigInt("1655")
		const addressV80Cgxa = accounts[1]
		const boolrrkuZru = await REXUNIFINANCEZAbdgfu.transferFrom.call(addressLVnTkF, addressttxsQoM, uintD7iiTnT, {from: accounts[0]});
		const boolvrviy9 = await REXUNIFINANCEZAbdgfu.approve.call(addressV80Cgxa, uintpApOhV, {from: accounts[4]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCELtHQO9 = await REXUNIFINANCE.new({from: accounts[3]});
		const uintOiTh7zH = BigInt("1560")
		const addressd05rGln = accounts[0]
		const uintMTkhBO = BigInt("1334")
		const addressX1pQrUi = accounts[0]
		const uintooCsLTj = BigInt("48")
		const address5rRn2T = accounts[0]
		const uintVq1JXP0 = BigInt("375")
		const addressMMGD1t = accounts[1]
//		const boolLzweNJ4 = await REXUNIFINANCELtHQO9.approve.call(addressd05rGln, uintOiTh7zH, {from: accounts[0]});
//		const booliqaBHL7 = await REXUNIFINANCELtHQO9.increaseApproval.call(addressX1pQrUi, uintMTkhBO, {from: accounts[1]});
//		const boolS2gwyCz = await REXUNIFINANCELtHQO9.increaseApproval.call(address5rRn2T, uintooCsLTj, {from: accounts[0]});
//		const boolIlVZSJ = await REXUNIFINANCELtHQO9.increaseApproval.call(addressMMGD1t, uintVq1JXP0, {from: accounts[0]});

		await expect(REXUNIFINANCELtHQO9.approve.call(addressd05rGln, uintOiTh7zH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEEzkviIW = await REXUNIFINANCE.new({from: accounts[0]});
		const address0wSX3l = accounts[4]
		const addressczMR6Uz = accounts[1]
		const uintRQk1XA3 = BigInt("1851")
		const address9pW4lO = accounts[2]
//		const addressG9Q48uN = await REXUNIFINANCEEzkviIW.transferOwnership.call(address0wSX3l, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256QywqjPy = await REXUNIFINANCEEzkviIW.transferableTokens.call(addressczMR6Uz, {from: accounts[4]});
//		const boolhALN3Gy = await REXUNIFINANCEEzkviIW.decreaseApproval.call(address9pW4lO, uintRQk1XA3, {from: accounts[5]});

		await expect(REXUNIFINANCEEzkviIW.transferOwnership.call(address0wSX3l, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEJxHDewA = await REXUNIFINANCE.new({from: accounts[0]});
		const uintUknPCwD = BigInt("1771")
		const addressrCv9B9L = "0x0000000000000000000000000000000000000001"
		const addresskpMVSfs = accounts[1]
		const uint5u04YM = BigInt("982")
		const addressZny9rPb = accounts[1]
//		const boolIambzj = await REXUNIFINANCEJxHDewA.transfer.call(addressrCv9B9L, uintUknPCwD, {from: accounts[2]});
//		const uint256QEkErrw = await REXUNIFINANCEJxHDewA.transferableTokens.call(addresskpMVSfs, {from: accounts[4]});
//		const booliHYUqP0 = await REXUNIFINANCEJxHDewA.transfer.call(addressZny9rPb, uint5u04YM, {from: accounts[5]});

		await expect(REXUNIFINANCEJxHDewA.transfer.call(addressrCv9B9L, uintUknPCwD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEzHfKv0V = await REXUNIFINANCE.new({from: accounts[2]});
		const uintOrTixgs = BigInt("1181")
		const addressg2Iai8 = accounts[2]
		const uintZWNc3s = BigInt("501")
		const addresssblwEpK = accounts[4]
		const addressxlEkHgp = accounts[0]
//		const boolK1vSVK8 = await REXUNIFINANCEzHfKv0V.increaseApproval.call(addressg2Iai8, uintOrTixgs, {from: accounts[2]});
//		const boolMVQs0o1 = await REXUNIFINANCEzHfKv0V.approve.call(addresssblwEpK, uintZWNc3s, {from: accounts[3]});
//		const uint256xa9qGCv = await REXUNIFINANCEzHfKv0V.balanceOf.call(addressxlEkHgp, {from: accounts[4]});

		await expect(REXUNIFINANCEzHfKv0V.increaseApproval.call(addressg2Iai8, uintOrTixgs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEklNhoOb = await REXUNIFINANCE.new({from: accounts[3]});
		const uintBSHwH9q = BigInt("498")
		const addressXYFBSWL = accounts[0]
		const addressFdPCPxx = accounts[1]
		const uintx10c9x = BigInt("1265")
		const addressIbcI7dD = accounts[1]
		const addressJIqt0fn = accounts[3]
//		const bool01MJpy = await REXUNIFINANCEklNhoOb.transferFrom.call(addressFdPCPxx, addressXYFBSWL, uintBSHwH9q, {from: accounts[4]});
//		const boolFzFpG9A = await REXUNIFINANCEklNhoOb.decreaseApproval.call(addressIbcI7dD, uintx10c9x, {from: accounts[0]});
//		const uint256Gf86qJz = await REXUNIFINANCEklNhoOb.balanceOf.call(addressJIqt0fn, {from: accounts[2]});

		await expect(REXUNIFINANCEklNhoOb.transferFrom.call(addressFdPCPxx, addressXYFBSWL, uintBSHwH9q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEt5pTbND = await REXUNIFINANCE.new({from: accounts[5]});
		const uintb9piu5D = BigInt("1097")
		const addressX5kDnP = accounts[1]
		const uintY8xIT8p = BigInt("1561")
		const addresssbujBVA = accounts[1]
		const addressADwofMQ = accounts[4]
		const addresshUCLFA3 = accounts[4]
		const addressImQYW2S = accounts[3]
		const boolbtOm4wk = await REXUNIFINANCEt5pTbND.approve.call(addressX5kDnP, uintb9piu5D, {from: accounts[4]});
//		const boolxEh1MAh = await REXUNIFINANCEt5pTbND.transferFrom.call(addressADwofMQ, addresssbujBVA, uintY8xIT8p, {from: accounts[1]});
//		const addressxn0JVlb = await REXUNIFINANCEt5pTbND.transferOwnership.call(addresshUCLFA3, {from: accounts[1]});
//		const addressvEDS8zk = await REXUNIFINANCEt5pTbND.transferOwnership.call(addressImQYW2S, {from: accounts[1]});

		assert.equal(boolbtOm4wk, true)
		await expect(REXUNIFINANCEt5pTbND.transferFrom.call(addressADwofMQ, addresssbujBVA, uintY8xIT8p, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEQfRaLM = await REXUNIFINANCE.new({from: accounts[0]});
		const uintsW4iQtf = BigInt("1693")
		const addressh1zC4T1 = accounts[0]
		const uintYyvNsEU = BigInt("175")
		const addressAoqVY5S = "0x0000000000000000000000000000000000000001"
		const uintOyco3M = BigInt("1254")
		const addressvbQtmRV = accounts[0]
		const addressmDeimWV = accounts[3]
		const addressXsLGh3 = accounts[3]
		const boolOwuf9Li = await REXUNIFINANCEQfRaLM.approve.call(addressh1zC4T1, uintsW4iQtf, {from: "0x0000000000000000000000000000000000000001"});
		const boolvKgVwpJ = await REXUNIFINANCEQfRaLM.increaseApproval.call(addressAoqVY5S, uintYyvNsEU, {from: accounts[5]});
//		const boolEeUA68 = await REXUNIFINANCEQfRaLM.approve.call(addressvbQtmRV, uintOyco3M, {from: accounts[0]});
//		const uint256vEyB1jC = await REXUNIFINANCEQfRaLM.allowance.call(addressXsLGh3, addressmDeimWV, {from: accounts[4]});

		assert.equal(boolOwuf9Li, true)
		assert.equal(boolvKgVwpJ, true)
		await expect(REXUNIFINANCEQfRaLM.approve.call(addressvbQtmRV, uintOyco3M, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEaPSJYNF = await REXUNIFINANCE.new({from: accounts[0]});
		const uintZ0pWfJT = BigInt("1385")
		const addressTu9Y3R = accounts[1]
		const addressk6GXcJ = accounts[4]
		const boolTFVatqw = await REXUNIFINANCEaPSJYNF.increaseApproval.call(addressTu9Y3R, uintZ0pWfJT, {from: accounts[4]});
		const addressZaX4qBL = await REXUNIFINANCEaPSJYNF.transferOwnership.call(addressk6GXcJ, {from: accounts[0]});

		assert.equal(boolTFVatqw, true)
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEaPSJYNF = await REXUNIFINANCE.new({from: accounts[0]});
		const uintaDx4eyK = BigInt("1520")
		const addressHdx1oCO = accounts[1]
		const uintggr0Me2 = BigInt("1518")
		const addressPol4aWv = accounts[2]
		const addressJ42lz6 = accounts[0]
		const addressw7bVpgd = accounts[4]
		const boolWyQ2cH = await REXUNIFINANCEaPSJYNF.decreaseApproval.call(addressHdx1oCO, uintaDx4eyK, {from: accounts[4]});
//		const boolAXDiPg = await REXUNIFINANCEaPSJYNF.transferFrom.call(addressJ42lz6, addressPol4aWv, uintggr0Me2, {from: accounts[1]});
//		const addressbbobN6a = await REXUNIFINANCEaPSJYNF.transferOwnership.call(addressw7bVpgd, {from: accounts[4]});

		assert.equal(boolWyQ2cH, true)
		await expect(REXUNIFINANCEaPSJYNF.transferFrom.call(addressJ42lz6, addressPol4aWv, uintggr0Me2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCENFrQIpH = await REXUNIFINANCE.new({from: accounts[4]});
		const addressSOlnoJN = accounts[4]
		const addressXMpvzqY = accounts[2]
		const uintYiwUm4Z = BigInt("845")
		const addresscJUglc6 = accounts[2]
		const addressIXI3YkD = accounts[2]
		const address9tQTCa = accounts[0]
		const addressefcEfbf = accounts[4]
		const uint256xBPTDjw = await REXUNIFINANCENFrQIpH.balanceOf.call(addressSOlnoJN, {from: accounts[1]});
		const uint256HwI9u7F = await REXUNIFINANCENFrQIpH.balanceOf.call(addressXMpvzqY, {from: accounts[3]});
		const boolQytotNt = await REXUNIFINANCENFrQIpH.approve.call(addresscJUglc6, uintYiwUm4Z, {from: accounts[5]});
		const uint256i8gYq0 = await REXUNIFINANCENFrQIpH.balanceOf.call(addressIXI3YkD, {from: accounts[3]});
		const uint256T8PPcuC = await REXUNIFINANCENFrQIpH.allowance.call(addressefcEfbf, address9tQTCa, {from: accounts[4]});

		assert.equal(boolQytotNt, true)
		assert.equal(uint256HwI9u7F, BigInt("0"))
		assert.equal(uint256T8PPcuC, BigInt("0"))
		assert.equal(uint256i8gYq0, BigInt("0"))
		assert.equal(uint256xBPTDjw, BigInt("0"))
	});
})