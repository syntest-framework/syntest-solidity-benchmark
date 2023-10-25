const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenZAbdgfu = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintD7iiTnT = BigInt("1557")
		const addressttxsQoM = "0x0000000000000000000000000000000000000001"
		const addressLVnTkF = accounts[4]
		const uintpApOhV = BigInt("1655")
		const addressV80Cgxa = accounts[1]
		const boolrrkuZru = await ThriftTokenZAbdgfu.transferFrom.call(addressLVnTkF, addressttxsQoM, uintD7iiTnT, {from: accounts[0]});
		const boolvrviy9 = await ThriftTokenZAbdgfu.approve.call(addressV80Cgxa, uintpApOhV, {from: accounts[4]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenLtHQO9 = await ThriftToken.new({from: accounts[3]});
		const uintOiTh7zH = BigInt("1560")
		const addressd05rGln = accounts[0]
		const uintMTkhBO = BigInt("1334")
		const addressX1pQrUi = accounts[0]
		const uintooCsLTj = BigInt("48")
		const address5rRn2T = accounts[0]
		const uintVq1JXP0 = BigInt("375")
		const addressMMGD1t = accounts[1]
		const boolLzweNJ4 = await ThriftTokenLtHQO9.approve.call(addressd05rGln, uintOiTh7zH, {from: accounts[0]});
		const booliqaBHL7 = await ThriftTokenLtHQO9.increaseApproval.call(addressX1pQrUi, uintMTkhBO, {from: accounts[1]});
		const boolS2gwyCz = await ThriftTokenLtHQO9.increaseApproval.call(address5rRn2T, uintooCsLTj, {from: accounts[0]});
		const boolIlVZSJ = await ThriftTokenLtHQO9.increaseApproval.call(addressMMGD1t, uintVq1JXP0, {from: accounts[0]});

		await expect(ThriftTokenLtHQO9.approve.call(addressd05rGln, uintOiTh7zH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenEzkviIW = await ThriftToken.new({from: accounts[0]});
		const address0wSX3l = accounts[4]
		const addressczMR6Uz = accounts[1]
		const uintRQk1XA3 = BigInt("1851")
		const address9pW4lO = accounts[2]
		const addressG9Q48uN = await ThriftTokenEzkviIW.transferOwnership.call(address0wSX3l, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QywqjPy = await ThriftTokenEzkviIW.transferableTokens.call(addressczMR6Uz, {from: accounts[4]});
		const boolhALN3Gy = await ThriftTokenEzkviIW.decreaseApproval.call(address9pW4lO, uintRQk1XA3, {from: accounts[5]});

		await expect(ThriftTokenEzkviIW.transferOwnership.call(address0wSX3l, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenJxHDewA = await ThriftToken.new({from: accounts[0]});
		const uintUknPCwD = BigInt("1771")
		const addressrCv9B9L = "0x0000000000000000000000000000000000000001"
		const addresskpMVSfs = accounts[1]
		const uint5u04YM = BigInt("982")
		const addressZny9rPb = accounts[1]
		const boolIambzj = await ThriftTokenJxHDewA.transfer.call(addressrCv9B9L, uintUknPCwD, {from: accounts[2]});
		const uint256QEkErrw = await ThriftTokenJxHDewA.transferableTokens.call(addresskpMVSfs, {from: accounts[4]});
		const booliHYUqP0 = await ThriftTokenJxHDewA.transfer.call(addressZny9rPb, uint5u04YM, {from: accounts[5]});

		await expect(ThriftTokenJxHDewA.transfer.call(addressrCv9B9L, uintUknPCwD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenzHfKv0V = await ThriftToken.new({from: accounts[2]});
		const uintOrTixgs = BigInt("1181")
		const addressg2Iai8 = accounts[2]
		const uintZWNc3s = BigInt("501")
		const addresssblwEpK = accounts[4]
		const addressxlEkHgp = accounts[0]
		const boolK1vSVK8 = await ThriftTokenzHfKv0V.increaseApproval.call(addressg2Iai8, uintOrTixgs, {from: accounts[2]});
		const boolMVQs0o1 = await ThriftTokenzHfKv0V.approve.call(addresssblwEpK, uintZWNc3s, {from: accounts[3]});
		const uint256xa9qGCv = await ThriftTokenzHfKv0V.balanceOf.call(addressxlEkHgp, {from: accounts[4]});

		await expect(ThriftTokenzHfKv0V.increaseApproval.call(addressg2Iai8, uintOrTixgs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenklNhoOb = await ThriftToken.new({from: accounts[3]});
		const uintBSHwH9q = BigInt("498")
		const addressXYFBSWL = accounts[0]
		const addressFdPCPxx = accounts[1]
		const uintx10c9x = BigInt("1265")
		const addressIbcI7dD = accounts[1]
		const addressJIqt0fn = accounts[3]
		const bool01MJpy = await ThriftTokenklNhoOb.transferFrom.call(addressFdPCPxx, addressXYFBSWL, uintBSHwH9q, {from: accounts[4]});
		const boolFzFpG9A = await ThriftTokenklNhoOb.decreaseApproval.call(addressIbcI7dD, uintx10c9x, {from: accounts[0]});
		const uint256Gf86qJz = await ThriftTokenklNhoOb.balanceOf.call(addressJIqt0fn, {from: accounts[2]});

		await expect(ThriftTokenklNhoOb.transferFrom.call(addressFdPCPxx, addressXYFBSWL, uintBSHwH9q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenzHfKv0V = await ThriftToken.new({from: accounts[2]});
		const addresswZ0UpE1 = accounts[2]
		const addressIz8gbcL = accounts[0]
		const uinty5Gxl1A = BigInt("1181")
		const addressE8zzdI = accounts[2]
		const uintfLCOJL = BigInt("501")
		const addressv3lNidA = accounts[4]
		const addressAgdQwbI = accounts[1]
		const uint256kTNjt1C = await ThriftTokenzHfKv0V.allowance.call(addressIz8gbcL, addresswZ0UpE1, {from: accounts[2]});
		const boolK1vSVK8 = await ThriftTokenzHfKv0V.increaseApproval.call(addressE8zzdI, uinty5Gxl1A, {from: accounts[2]});
		const boolMVQs0o1 = await ThriftTokenzHfKv0V.approve.call(addressv3lNidA, uintfLCOJL, {from: accounts[3]});
		const uint256xa9qGCv = await ThriftTokenzHfKv0V.balanceOf.call(addressAgdQwbI, {from: accounts[4]});

		assert.equal(uint256kTNjt1C, BigInt("0"))
		await expect(ThriftTokenzHfKv0V.increaseApproval.call(addressE8zzdI, uinty5Gxl1A, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokencXXFNj4 = await ThriftToken.new({from: accounts[3]});
		const uintthzoHRo = BigInt("168")
		const addressK677q8o = accounts[2]
		const addressDGDe6f6 = accounts[3]
		const addresslLAnkK = accounts[3]
		const addresskdkffd = accounts[3]
		const boolt30T6tR = await ThriftTokencXXFNj4.decreaseApproval.call(addressK677q8o, uintthzoHRo, {from: "0x0000000000000000000000000000000000000001"});
		const addressIzC3Dpm = await ThriftTokencXXFNj4.transferOwnership.call(addressDGDe6f6, {from: accounts[5]});
		const uint256TsH9G7y = await ThriftTokencXXFNj4.balanceOf.call(addresslLAnkK, {from: accounts[0]});
		const uint256dfEZmKD = await ThriftTokencXXFNj4.balanceOf.call(addresskdkffd, {from: accounts[3]});

		assert.equal(boolt30T6tR, true)
		await expect(ThriftTokencXXFNj4.transferOwnership.call(addressDGDe6f6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})