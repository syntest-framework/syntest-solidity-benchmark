const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenvMXbyQ = await MIMOToken.new({from: accounts[4]});
		const uintAV07AY0 = BigInt("581")
		const addressCvaZoIu = accounts[3]
		const uintoB8ZqOj = BigInt("1283")
		const uintRiCoe6W = BigInt("1373")
		const addressDQa8fn = accounts[0]
		const addressx8bMwzX = accounts[1]
		const uint33pH91 = BigInt("1961")
		const addressptoHSlm = accounts[2]
		const addressU2OI0vj = accounts[0]
		const booluMo7W3R = await MIMOTokenvMXbyQ.approve.call(addressCvaZoIu, uintAV07AY0, {from: accounts[3]});
		const uint256X5Fp4XV = await MIMOTokenvMXbyQ.setFeeRate.call(uintoB8ZqOj, {from: accounts[2]});
		const booliU0ZkX8 = await MIMOTokenvMXbyQ.transferFrom.call(addressx8bMwzX, addressDQa8fn, uintRiCoe6W, {from: accounts[2]});
		const boolLkxv3wm = await MIMOTokenvMXbyQ.transferFrom.call(addressU2OI0vj, addressptoHSlm, uint33pH91, {from: accounts[1]});

		assert.equal(booluMo7W3R, true)
		await expect(MIMOTokenvMXbyQ.transferFrom.call(addressx8bMwzX, addressDQa8fn, uintRiCoe6W, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokendRzwRt = await MIMOToken.new({from: accounts[4]});
		const uintAjRF4JQ = BigInt("1792")
		const addressGFa4JhF = accounts[3]
		const addressSfzoq5N = accounts[3]
		const addressAFDmniE = accounts[4]
		const uinti4GxxxC = BigInt("1197")
		const addressFONeMq = accounts[0]
		const uintIZT2E4z = BigInt("1326")
		const addressSsMCz1 = accounts[0]
		const addressM87427F = accounts[3]
		const uintRsHrXGP = await MIMOTokendRzwRt.totalSupply.call({from: accounts[1]});
		const bools37MqTG = await MIMOTokendRzwRt.approve.call(addressGFa4JhF, uintAjRF4JQ, {from: accounts[0]});
		const uinthsv4WgT = await MIMOTokendRzwRt.allowance.call(addressAFDmniE, addressSfzoq5N, {from: "0x0000000000000000000000000000000000000001"});
		const boolKUGwpgm = await MIMOTokendRzwRt.approve.call(addressFONeMq, uinti4GxxxC, {from: accounts[1]});
		const boolVpXmyqz = await MIMOTokendRzwRt.transferFrom.call(addressM87427F, addressSsMCz1, uintIZT2E4z, {from: accounts[1]});

		assert.equal(boolKUGwpgm, true)
		assert.equal(bools37MqTG, true)
		assert.equal(uintRsHrXGP, BigInt("16000000000000000000000000"))
		assert.equal(uinthsv4WgT, BigInt("0"))
		await expect(MIMOTokendRzwRt.transferFrom.call(addressM87427F, addressSsMCz1, uintIZT2E4z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenjes5qJX = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDvwNvMl = BigInt("1416")
		const addressvUixol1 = accounts[4]
		const uint256iMx2AdA = await MIMOTokenjes5qJX.setFeeRate.call(uintDvwNvMl, {from: accounts[2]});
		const uintigawmkK = await MIMOTokenjes5qJX.balanceOf.call(addressvUixol1, {from: accounts[0]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokeneEhNo5R = await MIMOToken.new({from: accounts[1]});
		const uintDqPM0lo = BigInt("614")
		const addressEFiVHIf = accounts[0]
		const uint256e9G5OHc = await MIMOTokeneEhNo5R.getFee.call(uintDqPM0lo, {from: accounts[0]});
		const uintYu3dulR = await MIMOTokeneEhNo5R.balanceOf.call(addressEFiVHIf, {from: accounts[1]});
		const uintHMSWPwm = await MIMOTokeneEhNo5R.totalSupply.call({from: accounts[4]});
		const uintrxDZDyo = await MIMOTokeneEhNo5R.totalSupply.call({from: accounts[5]});

		assert.equal(uint256e9G5OHc, BigInt("50000000000000000"))
		assert.equal(uintHMSWPwm, BigInt("16000000000000000000000000"))
		assert.equal(uintYu3dulR, BigInt("0"))
		assert.equal(uintrxDZDyo, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenNgZSjxf = await MIMOToken.new({from: accounts[0]});
		const uintUAxidFq = BigInt("1749")
		const addressNrrF7oH = accounts[0]
		const uintR11rlE = BigInt("840")
		const addressbVONf2v = accounts[3]
		const uintGvtERgp = BigInt("86")
		const addresstwq6MRE = "0x0000000000000000000000000000000000000001"
		const boolEhyA5wI = await MIMOTokenNgZSjxf.approve.call(addressNrrF7oH, uintUAxidFq, {from: accounts[5]});
		const boolvRksQ8f = await MIMOTokenNgZSjxf.transfer.call(addressbVONf2v, uintR11rlE, {from: accounts[2]});
		const boolme1Osqr = await MIMOTokenNgZSjxf.approve.call(addresstwq6MRE, uintGvtERgp, {from: accounts[5]});

		assert.equal(boolEhyA5wI, true)
		await expect(MIMOTokenNgZSjxf.transfer.call(addressbVONf2v, uintR11rlE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenbl6xJ8I = await MIMOToken.new({from: accounts[3]});
		const uintFQCQ62a = BigInt("444")
		const addressoE6KHFq = accounts[2]
		const addressawSXgNP = accounts[4]
		const uintDnrtLIT = BigInt("1606")
		const uintWjvZ8iW = await MIMOTokenbl6xJ8I.totalSupply.call({from: accounts[2]});
		const uint256Zc0gm5K = await MIMOTokenbl6xJ8I.setMinFee.call(uintFQCQ62a, {from: accounts[4]});
		const uintmbEkI8N = await MIMOTokenbl6xJ8I.allowance.call(addressawSXgNP, addressoE6KHFq, {from: accounts[2]});
		const uint256HCysmE7 = await MIMOTokenbl6xJ8I.setFeeRate.call(uintDnrtLIT, {from: accounts[1]});

		assert.equal(uintWjvZ8iW, BigInt("16000000000000000000000000"))
		assert.equal(uintmbEkI8N, BigInt("0"))
	});
})