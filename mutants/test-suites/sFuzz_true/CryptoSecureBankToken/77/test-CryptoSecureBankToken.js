const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokengMj2Y2s = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintW38tJTm = BigInt("990")
		const addressYRh2Mfz = accounts[2]
		const addressoEJ4Z1T = accounts[4]
		const addressa3fG2fX = accounts[3]
		const addressWrdHTtM = await CryptoSecureBankTokengMj2Y2s.getOwner.call({from: accounts[3]});
//		const boolaanBY6L = await CryptoSecureBankTokengMj2Y2s.transferFrom.call(addressoEJ4Z1T, addressYRh2Mfz, uintW38tJTm, {from: accounts[1]});
//		const addressDzIeEvY = await CryptoSecureBankTokengMj2Y2s.setOwner2.call(addressa3fG2fX, {from: accounts[3]});

		assert.equal(addressWrdHTtM, 0xde1846538A6a15475949f9Be0E2887C3645AB4A6)
		await expect(CryptoSecureBankTokengMj2Y2s.transferFrom.call(addressoEJ4Z1T, addressYRh2Mfz, uintW38tJTm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenzgkXU9E = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintEZS8hc4 = await CryptoSecureBankTokenzgkXU9E.totalSupply.call({from: accounts[2]});
//		await CryptoSecureBankTokenzgkXU9E.whenNotPaused.call({from: accounts[1]});

		assert.equal(uintEZS8hc4, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenzgkXU9E.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenYvfj8d = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressHT7wbHF = accounts[4]
		const uintwlzs19n = BigInt("605")
		const addressxywv78S = accounts[0]
		const addressakxWfvU = accounts[3]
		const addressIebz7bO = "0x0000000000000000000000000000000000000001"
		const uintUI2hlWO = BigInt("34")
		const uinthyL9HP4 = BigInt("411")
		const uintYuPZgCH = await CryptoSecureBankTokenYvfj8d.totalSupply.call({from: accounts[4]});
		const boolTS7jBJ = await CryptoSecureBankTokenYvfj8d.getBlackListStatus.call(addressHT7wbHF, {from: accounts[1]});
//		const boolo35zpL3 = await CryptoSecureBankTokenYvfj8d.transferFrom.call(addressakxWfvU, addressxywv78S, uintwlzs19n, {from: accounts[1]});
//		const addressRV0yyi4 = await CryptoSecureBankTokenYvfj8d.getOwner.call({from: accounts[1]});
//		const uint2rRY5l = await CryptoSecureBankTokenYvfj8d.balanceOf.call(addressIebz7bO, {from: accounts[1]});
//		const uintHGaxFON = await CryptoSecureBankTokenYvfj8d.setParams.call(uinthyL9HP4, uintUI2hlWO, {from: accounts[1]});

		assert.equal(boolTS7jBJ, false)
		assert.equal(uintYuPZgCH, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenYvfj8d.transferFrom.call(addressakxWfvU, addressxywv78S, uintwlzs19n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenmRP2hTl = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressW2qAYfs = accounts[2]
		const uintQtvEF62 = BigInt("1449")
		const addressgpcNADJ = accounts[5]
//		const addressWHFmEDH = await CryptoSecureBankTokenmRP2hTl.setOwner2.call(addressW2qAYfs, {from: accounts[3]});
//		const boolD6H1Yf5 = await CryptoSecureBankTokenmRP2hTl.transfer.call(addressgpcNADJ, uintQtvEF62, {from: accounts[0]});
//		const addressj3QEh3H = await CryptoSecureBankTokenmRP2hTl.getOwner.call({from: accounts[3]});

		await expect(CryptoSecureBankTokenmRP2hTl.setOwner2.call(addressW2qAYfs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNTMtpCI = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintKXCFyWW = BigInt("1351")
		const addresstGX75o = "0x0000000000000000000000000000000000000001"
		const addressePK3tFT = accounts[3]
		const boolZZCvsJ3 = await CryptoSecureBankTokenNTMtpCI.redeem.call(uintKXCFyWW, {from: accounts[4]});
		await CryptoSecureBankTokenNTMtpCI.whenNotPaused.call({from: accounts[3]});
		const uintjktwZR = await CryptoSecureBankTokenNTMtpCI.allowance.call(addressePK3tFT, addresstGX75o, {from: accounts[1]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenqcyWRm1 = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressd565lOE = accounts[1]
		const addressjJUyGiX = accounts[2]
		const addressEb5UOOI = accounts[0]
		const addressdufJujj = accounts[4]
		const uintFsT3hkJ = BigInt("1704")
		const addressXeIOqPH = accounts[4]
		const uintgVsQoUz = await CryptoSecureBankTokenqcyWRm1.balanceOf.call(addressd565lOE, {from: accounts[0]});
		const uinthiTNXhy = await CryptoSecureBankTokenqcyWRm1.balanceOf.call(addressjJUyGiX, {from: accounts[0]});
		const addressHtwsT3Q = await CryptoSecureBankTokenqcyWRm1.addBlackList.call(addressEb5UOOI, {from: accounts[1]});
//		const addressAlS0Zwi = await CryptoSecureBankTokenqcyWRm1.transferOwnership.call(addressdufJujj, {from: accounts[0]});
//		await CryptoSecureBankTokenqcyWRm1.onlyOwner.call({from: accounts[4]});
//		const boolDBfahgO = await CryptoSecureBankTokenqcyWRm1.transfer.call(addressXeIOqPH, uintFsT3hkJ, {from: accounts[4]});

		assert.equal(uintgVsQoUz, BigInt("100000000000000000000000000"))
		assert.equal(uinthiTNXhy, BigInt("0"))
		await expect(CryptoSecureBankTokenqcyWRm1.transferOwnership.call(addressdufJujj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokengMj2Y2s = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressljLYwon = accounts[1]
		const address8ndIi1 = accounts[4]
		const uintPNOzW68 = await CryptoSecureBankTokengMj2Y2s.allowance.call(address8ndIi1, addressljLYwon, {from: "0x0000000000000000000000000000000000000001"});
		const addressWrdHTtM = await CryptoSecureBankTokengMj2Y2s.getOwner.call({from: accounts[3]});

		assert.equal(addressWrdHTtM, 0xde1846538A6a15475949f9Be0E2887C3645AB4A6)
		assert.equal(uintPNOzW68, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenYvfj8d = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressMlYLxSK = accounts[4]
		const addressL1cd67 = accounts[3]
		const uintwJg3Wz6 = BigInt("605")
		const addressvje03zD = accounts[1]
		const addressTLXUhz0 = accounts[3]
		const uintYuPZgCH = await CryptoSecureBankTokenYvfj8d.totalSupply.call({from: accounts[4]});
		const boolTS7jBJ = await CryptoSecureBankTokenYvfj8d.getBlackListStatus.call(addressMlYLxSK, {from: accounts[1]});
//		const addresszxqxYiM = await CryptoSecureBankTokenYvfj8d.destroyBlackFunds.call(addressL1cd67, {from: accounts[3]});
//		const boolo35zpL3 = await CryptoSecureBankTokenYvfj8d.transferFrom.call(addressTLXUhz0, addressvje03zD, uintwJg3Wz6, {from: accounts[1]});
//		const addressRV0yyi4 = await CryptoSecureBankTokenYvfj8d.getOwner.call({from: accounts[1]});

		assert.equal(boolTS7jBJ, false)
		assert.equal(uintYuPZgCH, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenYvfj8d.destroyBlackFunds.call(addressL1cd67, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokengMj2Y2s = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintGmcj9fI = BigInt("1937")
		const addressL1asuGE = accounts[2]
		const uintND6CbOV = BigInt("963")
		const addressKqOkb4W = accounts[2]
		const addressgshkrgx = accounts[4]
		const uintvfn3lE5 = BigInt("990")
		const addressF74g3E = accounts[2]
		const addressg321r43 = accounts[5]
		const boolcmOcIh = await CryptoSecureBankTokengMj2Y2s.approve.call(addressL1asuGE, uintGmcj9fI, {from: accounts[5]});
//		const boolW122Skr = await CryptoSecureBankTokengMj2Y2s.transferFrom.call(addressgshkrgx, addressKqOkb4W, uintND6CbOV, {from: accounts[1]});
//		const boolaanBY6L = await CryptoSecureBankTokengMj2Y2s.transferFrom.call(addressg321r43, addressF74g3E, uintvfn3lE5, {from: accounts[1]});

		assert.equal(boolcmOcIh, true)
		await expect(CryptoSecureBankTokengMj2Y2s.transferFrom.call(addressgshkrgx, addressKqOkb4W, uintND6CbOV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokengMj2Y2s = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintnKF0XaU = BigInt("381")
		const addressypDkUfe = accounts[1]
		const uintq48sOVr = BigInt("350")
		const uintlzt94y = BigInt("990")
		const addressfb6tQNb = accounts[2]
		const addressSSqFCpj = accounts[5]
		const boolL24g18w = await CryptoSecureBankTokengMj2Y2s.approve.call(addressypDkUfe, uintnKF0XaU, {from: accounts[4]});
		const boolalrtAW0 = await CryptoSecureBankTokengMj2Y2s.redeem.call(uintq48sOVr, {from: accounts[0]});
//		const boolaanBY6L = await CryptoSecureBankTokengMj2Y2s.transferFrom.call(addressSSqFCpj, addressfb6tQNb, uintlzt94y, {from: accounts[1]});

		assert.equal(boolL24g18w, true)
		assert.equal(boolalrtAW0, true)
		await expect(CryptoSecureBankTokengMj2Y2s.transferFrom.call(addressSSqFCpj, addressfb6tQNb, uintlzt94y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokengMj2Y2s = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressz21Iaug = accounts[4]
		const addresszbfdjk9 = accounts[1]
		const addressoj4bQC = accounts[4]
		const uintQbsso0U = BigInt("260")
		const addressZD6ksiB = accounts[2]
		const uintO32boZ = await CryptoSecureBankTokengMj2Y2s.balanceOf.call(addressz21Iaug, {from: accounts[4]});
		const uintPNOzW68 = await CryptoSecureBankTokengMj2Y2s.allowance.call(addressoj4bQC, addresszbfdjk9, {from: "0x0000000000000000000000000000000000000001"});
//		const booll5JIz3J = await CryptoSecureBankTokengMj2Y2s.transfer.call(addressZD6ksiB, uintQbsso0U, {from: accounts[3]});

		assert.equal(uintO32boZ, BigInt("0"))
		assert.equal(uintPNOzW68, BigInt("0"))
		await expect(CryptoSecureBankTokengMj2Y2s.transfer.call(addressZD6ksiB, uintQbsso0U, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenIWB3pUd = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressLE0tixk = accounts[3]
		const addressxn6vW69 = accounts[0]
		const uintl8aEHJl = BigInt("789")
		const uintqOIfe3 = BigInt("1969")
		const addressALEutmf = accounts[0]
		const addressmTibah4 = accounts[4]
		const uintmHNLsdX = await CryptoSecureBankTokenIWB3pUd.allowance.call(addressxn6vW69, addressLE0tixk, {from: accounts[3]});
//		const uintv0t9ox2 = await CryptoSecureBankTokenIWB3pUd.setParams.call(uintqOIfe3, uintl8aEHJl, {from: accounts[2]});
//		const addressNLUZp19 = await CryptoSecureBankTokenIWB3pUd.transferOwnership.call(addressALEutmf, {from: accounts[0]});
//		const uintvJckNv8 = await CryptoSecureBankTokenIWB3pUd.balanceOf.call(addressmTibah4, {from: accounts[5]});

		assert.equal(uintmHNLsdX, BigInt("0"))
		await expect(CryptoSecureBankTokenIWB3pUd.setParams.call(uintqOIfe3, uintl8aEHJl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokengMj2Y2s = await CryptoSecureBankToken.new({from: accounts[0]});
		const addresspZaKleo = accounts[3]
		const addressdtXoKUQ = accounts[0]
		const addressA6KlAYI = accounts[7]
		const addresspY88o9s = accounts[1]
		const uintOsPWb41 = BigInt("1096")
		const addressJRXRvmy = accounts[2]
		const uintplKCnJb = BigInt("46")
		const addressia7QpBa = accounts[4]
		const addresscCe7Vxf = "0x0000000000000000000000000000000000000001"
		const boolI3eZIwO = await CryptoSecureBankTokengMj2Y2s.getBlackListStatus.call(addresspZaKleo, {from: "0x0000000000000000000000000000000000000001"});
		const uintTx85eSW = await CryptoSecureBankTokengMj2Y2s.balanceOf.call(addressdtXoKUQ, {from: accounts[4]});
		const uintO32boZ = await CryptoSecureBankTokengMj2Y2s.balanceOf.call(addressA6KlAYI, {from: accounts[4]});
		const uintKQYgdXf = await CryptoSecureBankTokengMj2Y2s.balanceOf.call(addresspY88o9s, {from: "0x0000000000000000000000000000000000000001"});
		const boolMQTKKy = await CryptoSecureBankTokengMj2Y2s.transfer.call(addressJRXRvmy, uintOsPWb41, {from: accounts[0]});
//		const boolZKb6Edh = await CryptoSecureBankTokengMj2Y2s.transferFrom.call(addresscCe7Vxf, addressia7QpBa, uintplKCnJb, {from: accounts[3]});

		assert.equal(boolI3eZIwO, false)
		assert.equal(boolMQTKKy, true)
		assert.equal(uintKQYgdXf, BigInt("0"))
		assert.equal(uintO32boZ, BigInt("0"))
		assert.equal(uintTx85eSW, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokengMj2Y2s.transferFrom.call(addresscCe7Vxf, addressia7QpBa, uintplKCnJb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenzgkXU9E = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressRQlhBHX = accounts[1]
		const uintOza4L7 = BigInt("883")
		const address0kHDOi = await CryptoSecureBankTokenzgkXU9E.removeBlackList.call(addressRQlhBHX, {from: accounts[3]});
		const booliubafbB = await CryptoSecureBankTokenzgkXU9E.redeem.call(uintOza4L7, {from: accounts[3]});
		const uintEZS8hc4 = await CryptoSecureBankTokenzgkXU9E.totalSupply.call({from: accounts[2]});

		assert.equal(booliubafbB, true)
		assert.equal(uintEZS8hc4, BigInt("100000000000000000000000000"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenZsHaPOp = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressZgFknIM = accounts[0]
		const uintxvRHiM8 = BigInt("50")
		const addressCzE98zU = accounts[4]
		const addressgfRm4GY = accounts[4]
		const uintK7YXDu = BigInt("1667")
		const addressr1vRWt1 = accounts[3]
		const addressCnB6vL = await CryptoSecureBankTokenZsHaPOp.setOwner2.call(addressZgFknIM, {from: accounts[0]});
		const addressQPl6cBg = await CryptoSecureBankTokenZsHaPOp.getOwner.call({from: accounts[1]});
//		const booli71zaNA = await CryptoSecureBankTokenZsHaPOp.transfer.call(addressCzE98zU, uintxvRHiM8, {from: accounts[1]});
//		const addressG4wEeoN = await CryptoSecureBankTokenZsHaPOp.transferOwnership.call(addressgfRm4GY, {from: accounts[0]});
//		const boolTFmozCz = await CryptoSecureBankTokenZsHaPOp.approve.call(addressr1vRWt1, uintK7YXDu, {from: accounts[3]});
//		const uintMGeRCP = await CryptoSecureBankTokenZsHaPOp.totalSupply.call({from: accounts[2]});

		assert.equal(addressQPl6cBg, 0xde1846538A6a15475949f9Be0E2887C3645AB4A6)
		await expect(CryptoSecureBankTokenZsHaPOp.transfer.call(addressCzE98zU, uintxvRHiM8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken4njEq4 = await CryptoSecureBankToken.new({from: accounts[5]});
		const uintxV2dHq = BigInt("68")
		const addressOUwko9V = accounts[3]
		const addressXlqxcTG = accounts[4]
		const addresskofQOpO = accounts[4]
		const addressPjaZn4n = accounts[1]
		const bool2p9u9I = await CryptoSecureBankToken4njEq4.approve.call(addressOUwko9V, uintxV2dHq, {from: accounts[4]});
		const addressBRexPq4 = await CryptoSecureBankToken4njEq4.transferOwnership.call(addressXlqxcTG, {from: accounts[5]});
		const boolfOww9qO = await CryptoSecureBankToken4njEq4.getBlackListStatus.call(addresskofQOpO, {from: accounts[5]});
		const boolGNsAJQ2 = await CryptoSecureBankToken4njEq4.getBlackListStatus.call(addressPjaZn4n, {from: accounts[2]});

		assert.equal(bool2p9u9I, true)
		assert.equal(boolGNsAJQ2, false)
		assert.equal(boolfOww9qO, false)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokengMj2Y2s = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintvAYC5SM = BigInt("0")
		const addressZBnninP = accounts[0]
		const addressqfFZSoK = accounts[5]
		const boolUWupoy5 = await CryptoSecureBankTokengMj2Y2s.transfer.call(addressZBnninP, uintvAYC5SM, {from: accounts[1]});
//		const addressSMioFm0 = await CryptoSecureBankTokengMj2Y2s.destroyBlackFunds.call(addressqfFZSoK, {from: accounts[3]});

		assert.equal(boolUWupoy5, true)
		await expect(CryptoSecureBankTokengMj2Y2s.destroyBlackFunds.call(addressqfFZSoK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokengMj2Y2s = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressL2V522y = accounts[3]
		const addressoY3AavP = accounts[2]
		const addressaBXDXh2 = accounts[4]
		const booleh3CPxU = await CryptoSecureBankTokengMj2Y2s.deprecate.call(addressL2V522y, {from: accounts[0]});
		const uintPNOzW68 = await CryptoSecureBankTokengMj2Y2s.allowance.call(addressaBXDXh2, addressoY3AavP, {from: "0x0000000000000000000000000000000000000001"});
//		await CryptoSecureBankTokengMj2Y2s.pause.call({from: accounts[1]});

		assert.equal(booleh3CPxU, true)
		assert.equal(uintPNOzW68, BigInt("0"))
		await expect(CryptoSecureBankTokengMj2Y2s.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})