const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenGf0g3ZU = await MIMOToken.new({from: accounts[5]});
		const uintlPt5iuT = BigInt("706")
		const uintq6XuKuD = BigInt("2008")
		const uintSGBRi7 = BigInt("920")
		const addressv1hFG1x = accounts[2]
		const uint256KjmUjek = await MIMOTokenGf0g3ZU.setMinFee.call(uintlPt5iuT, {from: accounts[5]});
		const uint256hGfcZqS = await MIMOTokenGf0g3ZU.setFeeRate.call(uintq6XuKuD, {from: accounts[0]});
		const boolasm5Vq = await MIMOTokenGf0g3ZU.approve.call(addressv1hFG1x, uintSGBRi7, {from: accounts[3]});
		const uinteb4hGMc = await MIMOTokenGf0g3ZU.totalSupply.call({from: accounts[0]});

		assert.equal(boolasm5Vq, true)
		assert.equal(uinteb4hGMc, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenZvsId5h = await MIMOToken.new({from: accounts[3]});
		const uintHEsfIQ1 = BigInt("836")
		const uintQmviFWK = BigInt("1231")
		const addressOeVdphX = accounts[3]
		const addressraqFZU3 = accounts[2]
		const uintW2ABeLR = await MIMOTokenZvsId5h.totalSupply.call({from: accounts[4]});
		const uint256gRlGQwQ = await MIMOTokenZvsId5h.getFee.call(uintHEsfIQ1, {from: accounts[4]});
		const booliEeK1Cq = await MIMOTokenZvsId5h.transferFrom.call(addressraqFZU3, addressOeVdphX, uintQmviFWK, {from: accounts[1]});
		const uintZby5T6q = await MIMOTokenZvsId5h.totalSupply.call({from: accounts[1]});

		assert.equal(uint256gRlGQwQ, BigInt("50000000000000000"))
		assert.equal(uintW2ABeLR, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenZvsId5h.transferFrom.call(addressraqFZU3, addressOeVdphX, uintQmviFWK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenbUD9GtE = await MIMOToken.new({from: accounts[1]});
		const uintJClhoKP = BigInt("687")
		const addressa23GLTA = accounts[4]
		const uintTHb1Q0P = BigInt("264")
		const addresslj7MpTo = accounts[2]
		const addressEsjdC6 = accounts[1]
		const addressgtsuOu5 = accounts[2]
		const uintDqOaJye = BigInt("1083")
		const addresszEnec0G = accounts[1]
		const addressJqfeTEl = accounts[1]
		const uintlb7kgp = BigInt("1413")
		const boolPVb2GP = await MIMOTokenbUD9GtE.transfer.call(addressa23GLTA, uintJClhoKP, {from: accounts[2]});
		const boolbQJxkF5 = await MIMOTokenbUD9GtE.approve.call(addresslj7MpTo, uintTHb1Q0P, {from: accounts[3]});
		const uintdKKdnB6 = await MIMOTokenbUD9GtE.allowance.call(addressgtsuOu5, addressEsjdC6, {from: "0x0000000000000000000000000000000000000001"});
		const boolFFS3Ae = await MIMOTokenbUD9GtE.transferFrom.call(addressJqfeTEl, addresszEnec0G, uintDqOaJye, {from: accounts[2]});
		const uint256YhRdKr4 = await MIMOTokenbUD9GtE.setMinFee.call(uintlb7kgp, {from: accounts[2]});

		await expect(MIMOTokenbUD9GtE.transfer.call(addressa23GLTA, uintJClhoKP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenEVANTTe = await MIMOToken.new({from: accounts[4]});
		const addresskXDD7KN = accounts[0]
		const uintvwBsbbw = BigInt("255")
		const addressmaPjTZ2 = accounts[2]
		const uintZrTtDla = BigInt("822")
		const addresswdSKIVl = accounts[0]
		const uintlNCPj0u = BigInt("733")
		const addressQACOGyM = "0x0000000000000000000000000000000000000001"
		const uintESDjf6m = await MIMOTokenEVANTTe.balanceOf.call(addresskXDD7KN, {from: accounts[3]});
		const boolpmYY2PF = await MIMOTokenEVANTTe.approve.call(addressmaPjTZ2, uintvwBsbbw, {from: accounts[1]});
		const uint256K9uM2C = await MIMOTokenEVANTTe.setFeeRate.call(uintZrTtDla, {from: accounts[2]});
		const uintF6U1TYU = await MIMOTokenEVANTTe.balanceOf.call(addresswdSKIVl, {from: accounts[3]});
		const boolgsV1Fql = await MIMOTokenEVANTTe.approve.call(addressQACOGyM, uintlNCPj0u, {from: accounts[3]});

		assert.equal(boolgsV1Fql, true)
		assert.equal(boolpmYY2PF, true)
		assert.equal(uintESDjf6m, BigInt("0"))
		assert.equal(uintF6U1TYU, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenKygZMUa = await MIMOToken.new({from: accounts[2]});
		const addressHfd1qc1 = accounts[1]
		const addressyKrT9VJ = "0x0000000000000000000000000000000000000001"
		const uintSDeWHF = BigInt("139")
		const addressGlmKSTE = accounts[1]
		const uintgZ9cW07 = await MIMOTokenKygZMUa.allowance.call(addressyKrT9VJ, addressHfd1qc1, {from: accounts[5]});
		const uint256sw2oW5E = await MIMOTokenKygZMUa.setFeeRate.call(uintSDeWHF, {from: accounts[0]});
		const uintltOzSzO = await MIMOTokenKygZMUa.balanceOf.call(addressGlmKSTE, {from: accounts[4]});
		const uint3dLBaa = await MIMOTokenKygZMUa.totalSupply.call({from: accounts[2]});

		assert.equal(uint3dLBaa, BigInt("16000000000000000000000000"))
		assert.equal(uintgZ9cW07, BigInt("0"))
		assert.equal(uintltOzSzO, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenoZMzrr = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uint1iVBZz = BigInt("1421")
		const uintwdAHnxq = BigInt("22")
		const addressUT4fxul = accounts[4]
		const uint7EFklY = await MIMOTokenoZMzrr.totalSupply.call({from: accounts[4]});
		const uint256rNl6zdG = await MIMOTokenoZMzrr.setMinFee.call(uint1iVBZz, {from: accounts[5]});
		const boolOPlN18H = await MIMOTokenoZMzrr.approve.call(addressUT4fxul, uintwdAHnxq, {from: accounts[4]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenqzcJCzG = await MIMOToken.new({from: accounts[0]});
		const uintvER32J6 = BigInt("166")
		const uintNYTA25C = BigInt("1398")
		const uintN3VaQmM = BigInt("987")
		const addresslMQllm3 = "0x0000000000000000000000000000000000000000"
		const uint256eMy9hq = await MIMOTokenqzcJCzG.setMinFee.call(uintvER32J6, {from: accounts[2]});
		const uint256VbiPe7M = await MIMOTokenqzcJCzG.setFeeRate.call(uintNYTA25C, {from: accounts[4]});
		const boolMAWTbq2 = await MIMOTokenqzcJCzG.transfer.call(addresslMQllm3, uintN3VaQmM, {from: accounts[4]});

		await expect(MIMOTokenqzcJCzG.transfer.call(addresslMQllm3, uintN3VaQmM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})