const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenyWPFEjw = await MIMOToken.new({from: accounts[4]});
		const uint8NzTL6 = BigInt("1773")
		const addressg6C9XvK = accounts[3]
		const uint256Z5xrqdC = await MIMOTokenyWPFEjw.setFeeRate.call(uint8NzTL6, {from: accounts[1]});
		const uint40gznC = await MIMOTokenyWPFEjw.totalSupply.call({from: accounts[3]});
		const uinthzZG8M = await MIMOTokenyWPFEjw.balanceOf.call(addressg6C9XvK, {from: accounts[4]});
		const uintozi6yJf = await MIMOTokenyWPFEjw.totalSupply.call({from: accounts[1]});

		assert.equal(uint40gznC, BigInt("16000000000000000000000000"))
		assert.equal(uinthzZG8M, BigInt("0"))
		assert.equal(uintozi6yJf, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokentlggRWn = await MIMOToken.new({from: accounts[2]});
		const addressvnBqS5C = accounts[3]
		const uintSD1fvOW = BigInt("2035")
		const addressixU6kZ0 = "0x0000000000000000000000000000000000000001"
		const address8SBZ6C = accounts[5]
		const uintOzWq4XS = BigInt("571")
		const uintwzbFXkt = BigInt("1586")
		const addresszugi2Un = accounts[5]
		const uintmCTzTPW = BigInt("1797")
		const addressGsvhMD = accounts[4]
		const addressEpNLLjA = accounts[1]
		const uintz9x4fib = await MIMOTokentlggRWn.balanceOf.call(addressvnBqS5C, {from: accounts[2]});
		const booleQaZGBa = await MIMOTokentlggRWn.transferFrom.call(address8SBZ6C, addressixU6kZ0, uintSD1fvOW, {from: accounts[0]});
		const uint256XAVBgKa = await MIMOTokentlggRWn.setMinFee.call(uintOzWq4XS, {from: accounts[4]});
		const boolFWIzzCb = await MIMOTokentlggRWn.approve.call(addresszugi2Un, uintwzbFXkt, {from: accounts[0]});
		const boolJYKkz8T = await MIMOTokentlggRWn.transferFrom.call(addressEpNLLjA, addressGsvhMD, uintmCTzTPW, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintz9x4fib, BigInt("0"))
		await expect(MIMOTokentlggRWn.transferFrom.call(address8SBZ6C, addressixU6kZ0, uintSD1fvOW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenHj3JjQy = await MIMOToken.new({from: accounts[2]});
		const address3HpbuS = accounts[1]
		const addressZ03lHAC = "0x0000000000000000000000000000000000000001"
		const addressujSoB1N = accounts[4]
		const addresseFWCQQB = accounts[1]
		const uintQadXJl0 = BigInt("702")
		const addressw9gs57n = accounts[0]
		const uintHCQCuN0 = BigInt("815")
		const addressYMB75LR = accounts[2]
		const uintLQ9ov1 = await MIMOTokenHj3JjQy.allowance.call(addressZ03lHAC, address3HpbuS, {from: accounts[0]});
		const uintwhRJwx3 = await MIMOTokenHj3JjQy.allowance.call(addresseFWCQQB, addressujSoB1N, {from: accounts[4]});
		const boolUwxvaVS = await MIMOTokenHj3JjQy.approve.call(addressw9gs57n, uintQadXJl0, {from: accounts[3]});
		const uint256hgzSAiU = await MIMOTokenHj3JjQy.setFeeRate.call(uintHCQCuN0, {from: accounts[2]});
		const uintpdyXSIF = await MIMOTokenHj3JjQy.balanceOf.call(addressYMB75LR, {from: accounts[4]});

		assert.equal(boolUwxvaVS, true)
		assert.equal(uintLQ9ov1, BigInt("0"))
		assert.equal(uintpdyXSIF, BigInt("0"))
		assert.equal(uintwhRJwx3, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenMIds4ti = await MIMOToken.new({from: accounts[2]});
		const addressbUO3JZL = accounts[3]
		const uintzxp1IwT = BigInt("321")
		const addressrOK3pj3 = accounts[4]
		const uintPjSj2e = await MIMOTokenMIds4ti.balanceOf.call(addressbUO3JZL, {from: accounts[2]});
		const boolzqlicA = await MIMOTokenMIds4ti.transfer.call(addressrOK3pj3, uintzxp1IwT, {from: accounts[2]});

		assert.equal(uintPjSj2e, BigInt("0"))
		await expect(MIMOTokenMIds4ti.transfer.call(addressrOK3pj3, uintzxp1IwT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokensqhxz7T = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgeA2MdT = BigInt("934")
		const uintCxGh30K = BigInt("117")
		const uintpBbKwHx = BigInt("187")
		const addressy5H7HdK = accounts[1]
		const uint2567QS6iP = await MIMOTokensqhxz7T.setFeeRate.call(uintgeA2MdT, {from: accounts[4]});
		const uint256b5f1pm = await MIMOTokensqhxz7T.setMinFee.call(uintCxGh30K, {from: accounts[2]});
		const boolR6eG5j = await MIMOTokensqhxz7T.approve.call(addressy5H7HdK, uintpBbKwHx, {from: accounts[3]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenxv1pwAW = await MIMOToken.new({from: accounts[1]});
		const addressLFbCSW = "0x0000000000000000000000000000000000000001"
		const uintgZjBmr1 = BigInt("1746")
		const uintoLAsKwZ = BigInt("310")
		const uintclJzukA = await MIMOTokenxv1pwAW.balanceOf.call(addressLFbCSW, {from: accounts[4]});
		const uint2565mIxaC = await MIMOTokenxv1pwAW.getFee.call(uintgZjBmr1, {from: accounts[2]});
		const uint256dQfSRg = await MIMOTokenxv1pwAW.setFeeRate.call(uintoLAsKwZ, {from: accounts[3]});

		assert.equal(uint2565mIxaC, BigInt("50000000000000000"))
		assert.equal(uintclJzukA, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenMIds4ti = await MIMOToken.new({from: accounts[2]});
		const uintp4OFJiB = BigInt("13")
		const uintO1gNy9x = BigInt("206")
		const address9qDVPH = accounts[4]
		const addresslwG2nPU = accounts[5]
		const addresssIY2HmT = accounts[3]
		const uint256vnjY40 = await MIMOTokenMIds4ti.setMinFee.call(uintp4OFJiB, {from: accounts[0]});
		const boolXDyQ9Ag = await MIMOTokenMIds4ti.transferFrom.call(addresslwG2nPU, address9qDVPH, uintO1gNy9x, {from: accounts[1]});
		const uintPjSj2e = await MIMOTokenMIds4ti.balanceOf.call(addresssIY2HmT, {from: accounts[2]});

		await expect(MIMOTokenMIds4ti.transferFrom.call(addresslwG2nPU, address9qDVPH, uintO1gNy9x, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})