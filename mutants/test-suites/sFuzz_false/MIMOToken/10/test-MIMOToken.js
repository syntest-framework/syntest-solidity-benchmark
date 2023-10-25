const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenyV209yg = await MIMOToken.new({from: accounts[0]});
		const uintcc41LYE = BigInt("11")
		const addressbkqFEoN = "0x0000000000000000000000000000000000000001"
		const uintPYSqoe = BigInt("193")
		const addressQnGWcS6 = accounts[4]
		const uintiVOIZEh = BigInt("741")
		const addressc40ZxZ = accounts[2]
		const uintXi5GXCb = BigInt("1486")
		const addresslvdJauw = accounts[0]
		const addresse97YjiV = accounts[1]
		const uintOqZX0sK = BigInt("1862")
//		const boolgiOjXkV = await MIMOTokenyV209yg.transfer.call(addressbkqFEoN, uintcc41LYE, {from: accounts[0]});
//		const boolQ5sGUxc = await MIMOTokenyV209yg.approve.call(addressQnGWcS6, uintPYSqoe, {from: accounts[5]});
//		const booliq7l6v3 = await MIMOTokenyV209yg.approve.call(addressc40ZxZ, uintiVOIZEh, {from: accounts[5]});
//		const boolOV7qSfm = await MIMOTokenyV209yg.transferFrom.call(addresse97YjiV, addresslvdJauw, uintXi5GXCb, {from: accounts[0]});
//		const uintkxoHlNH = await MIMOTokenyV209yg.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256BqwKHZF = await MIMOTokenyV209yg.setFeeRate.call(uintOqZX0sK, {from: accounts[1]});

		await expect(MIMOTokenyV209yg.transfer.call(addressbkqFEoN, uintcc41LYE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenV4En1fl = await MIMOToken.new({from: accounts[2]});
		const addressUH7ROQ2 = accounts[4]
		const addressZEn1iXG = accounts[2]
		const uint9pcDD2 = BigInt("54")
		const addressJmAWJAh = accounts[0]
		const addressOzDU0ID = "0x0000000000000000000000000000000000000001"
		const addressoL3Z31N = accounts[2]
		const uintYLYaqX = BigInt("615")
		const uintUWbn0EW = await MIMOTokenV4En1fl.allowance.call(addressZEn1iXG, addressUH7ROQ2, {from: accounts[3]});
		const booldiIyqlE = await MIMOTokenV4En1fl.approve.call(addressJmAWJAh, uint9pcDD2, {from: accounts[0]});
		const uintRSjmQFz = await MIMOTokenV4En1fl.balanceOf.call(addressOzDU0ID, {from: accounts[5]});
		const uintvLpKCH3 = await MIMOTokenV4En1fl.balanceOf.call(addressoL3Z31N, {from: accounts[3]});
		const uint256XMh7ba = await MIMOTokenV4En1fl.setFeeRate.call(uintYLYaqX, {from: accounts[1]});

		assert.equal(booldiIyqlE, true)
		assert.equal(uintRSjmQFz, BigInt("0"))
		assert.equal(uintUWbn0EW, BigInt("0"))
		assert.equal(uintvLpKCH3, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenRcLEzl0 = await MIMOToken.new({from: accounts[0]});
		const uintPKLbDvJ = BigInt("1054")
		const uintIISYIBL = BigInt("823")
		const addresshZBCABy = accounts[3]
		const uint256bpPbffl = await MIMOTokenRcLEzl0.setMinFee.call(uintPKLbDvJ, {from: accounts[2]});
		const boolfEDaXmx = await MIMOTokenRcLEzl0.approve.call(addresshZBCABy, uintIISYIBL, {from: accounts[0]});

		assert.equal(boolfEDaXmx, true)
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenrgOg8hI = await MIMOToken.new({from: accounts[1]});
		const uintGKVvXpJ = BigInt("1541")
		const addresskg27clA = "0x0000000000000000000000000000000000000001"
		const addressvFF2k7t = accounts[3]
		const uintYwJHTVi = BigInt("1861")
		const addressH5BPdlx = accounts[2]
		const addressazsa1DD = accounts[1]
		const addressdcXwufP = accounts[0]
		const addresss5299Ra = accounts[0]
		const uintZBmSlbr = await MIMOTokenrgOg8hI.totalSupply.call({from: accounts[2]});
//		const boolOA05N92 = await MIMOTokenrgOg8hI.transferFrom.call(addressvFF2k7t, addresskg27clA, uintGKVvXpJ, {from: accounts[1]});
//		const boolyrf34JI = await MIMOTokenrgOg8hI.transfer.call(addressH5BPdlx, uintYwJHTVi, {from: "0x0000000000000000000000000000000000000001"});
//		const uintT6Szu7D = await MIMOTokenrgOg8hI.balanceOf.call(addressazsa1DD, {from: accounts[3]});
//		const uintQgXPNjr = await MIMOTokenrgOg8hI.allowance.call(addresss5299Ra, addressdcXwufP, {from: accounts[1]});

		assert.equal(uintZBmSlbr, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenrgOg8hI.transferFrom.call(addressvFF2k7t, addresskg27clA, uintGKVvXpJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenRcLEzl0 = await MIMOToken.new({from: accounts[0]});
		const uintIxzJTKU = BigInt("1049")
		const uintB37JZf3 = BigInt("1009")
		const uintTlbEqgf = BigInt("477")
		const addressmgV0zL0 = accounts[2]
		const uintx4Cz8Oh = BigInt("823")
		const addressfLKXzNf = accounts[3]
		const uint256bpPbffl = await MIMOTokenRcLEzl0.setMinFee.call(uintIxzJTKU, {from: accounts[2]});
		const uint256KAaLQf = await MIMOTokenRcLEzl0.getFee.call(uintB37JZf3, {from: accounts[1]});
		const boolZHGHXxs = await MIMOTokenRcLEzl0.approve.call(addressmgV0zL0, uintTlbEqgf, {from: accounts[3]});
		const boolfEDaXmx = await MIMOTokenRcLEzl0.approve.call(addressfLKXzNf, uintx4Cz8Oh, {from: accounts[0]});

		assert.equal(boolZHGHXxs, true)
		assert.equal(boolfEDaXmx, true)
		assert.equal(uint256KAaLQf, BigInt("50000000000000000"))
	});
})