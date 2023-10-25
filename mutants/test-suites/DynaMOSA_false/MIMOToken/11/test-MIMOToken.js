const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenWPYhbQQ = await MIMOToken.new({from: accounts[3]});
		const uintqQwNSyN = BigInt("957")
		const address8dtPll = accounts[1]
		const addressN2jIPSF = accounts[5]
		const addresswRLyH42 = accounts[4]
		const uintiBSlV8F = BigInt("1478")
		const uintKSpqVaY = BigInt("267")
		const addressPsBAT4q = accounts[3]
		const addresswNxaF36 = accounts[0]
		const uintvOOlLN = BigInt("1781")
		const addressxP1Dv1g = accounts[3]
//		const booljiFQDEQ = await MIMOTokenWPYhbQQ.transfer.call(address8dtPll, uintqQwNSyN, {from: accounts[4]});
//		const uintoKtori = await MIMOTokenWPYhbQQ.allowance.call(addresswRLyH42, addressN2jIPSF, {from: accounts[1]});
//		const uint256r1PDJmO = await MIMOTokenWPYhbQQ.setFeeRate.call(uintiBSlV8F, {from: accounts[1]});
//		const uint256sE3ckwl = await MIMOTokenWPYhbQQ.setFeeRate.call(uintKSpqVaY, {from: accounts[0]});
//		const uintVuXsYCo = await MIMOTokenWPYhbQQ.allowance.call(addresswNxaF36, addressPsBAT4q, {from: accounts[3]});
//		const boolo2A20JP = await MIMOTokenWPYhbQQ.transfer.call(addressxP1Dv1g, uintvOOlLN, {from: accounts[0]});

		await expect(MIMOTokenWPYhbQQ.transfer.call(address8dtPll, uintqQwNSyN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenW7Qw8nj = await MIMOToken.new({from: accounts[1]});
		const uintJ9S33RN = BigInt("1195")
		const uintHg4eVHv = BigInt("3")
		const addressOF5yima = accounts[4]
		const addressiiZd02X = accounts[3]
		const addresso2sn9tR = accounts[0]
		const addressclgE8r = accounts[4]
		const uintqNDSl79 = BigInt("992")
		const uint256pfUQcx7 = await MIMOTokenW7Qw8nj.setFeeRate.call(uintJ9S33RN, {from: accounts[4]});
//		const boolji1MWyR = await MIMOTokenW7Qw8nj.transferFrom.call(addressiiZd02X, addressOF5yima, uintHg4eVHv, {from: accounts[4]});
//		const uintqpNBmaM = await MIMOTokenW7Qw8nj.allowance.call(addressclgE8r, addresso2sn9tR, {from: accounts[5]});
//		const uint256tfRCL3j = await MIMOTokenW7Qw8nj.setMinFee.call(uintqNDSl79, {from: accounts[2]});

		await expect(MIMOTokenW7Qw8nj.transferFrom.call(addressiiZd02X, addressOF5yima, uintHg4eVHv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenLyubE5w = await MIMOToken.new({from: accounts[4]});
		const uintd0vDw5H = BigInt("326")
		const uintJT36qEZ = BigInt("1281")
		const addressKiALX9W = "0x0000000000000000000000000000000000000001"
		const addressi15hQo1 = accounts[4]
		const addressMUq5afI = "0x0000000000000000000000000000000000000001"
		const addressWS2bICJ = accounts[0]
		const uint256IAYade = await MIMOTokenLyubE5w.getFee.call(uintd0vDw5H, {from: accounts[5]});
//		const boolf1LGGCq = await MIMOTokenLyubE5w.transferFrom.call(addressi15hQo1, addressKiALX9W, uintJT36qEZ, {from: accounts[2]});
//		const uintROjuMc6 = await MIMOTokenLyubE5w.allowance.call(addressWS2bICJ, addressMUq5afI, {from: accounts[0]});

		assert.equal(uint256IAYade, BigInt("50000000000000000"))
		await expect(MIMOTokenLyubE5w.transferFrom.call(addressi15hQo1, addressKiALX9W, uintJT36qEZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokene5zaRsW = await MIMOToken.new({from: accounts[1]});
		const addressTx2eJP2 = accounts[4]
		const addressFJMIfss = accounts[0]
		const addressneYiPH = accounts[2]
		const addressvJGaZBW = accounts[2]
		const uintKYsv4Q8 = BigInt("995")
		const uintxiPmVo9 = BigInt("90")
		const uintEptAFKX = BigInt("1779")
		const addressajyagFi = accounts[1]
		const uintWS6NVVy = await MIMOTokene5zaRsW.allowance.call(addressFJMIfss, addressTx2eJP2, {from: accounts[4]});
		const uintkv1mfT = await MIMOTokene5zaRsW.totalSupply.call({from: accounts[3]});
		const uintZ7EM8X9 = await MIMOTokene5zaRsW.allowance.call(addressvJGaZBW, addressneYiPH, {from: accounts[5]});
		const uint256JX06TVH = await MIMOTokene5zaRsW.getFee.call(uintKYsv4Q8, {from: accounts[2]});
		const uint256UESfEto = await MIMOTokene5zaRsW.setFeeRate.call(uintxiPmVo9, {from: accounts[2]});
		const boolJt4BFaW = await MIMOTokene5zaRsW.approve.call(addressajyagFi, uintEptAFKX, {from: accounts[1]});

		assert.equal(boolJt4BFaW, true)
		assert.equal(uint256JX06TVH, BigInt("50000000000000000"))
		assert.equal(uintWS6NVVy, BigInt("0"))
		assert.equal(uintZ7EM8X9, BigInt("0"))
		assert.equal(uintkv1mfT, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenPt7PHw = await MIMOToken.new({from: accounts[4]});
		const addressJW7XUCD = accounts[2]
		const addressx5eeoI = accounts[3]
		const addresskKrGLvG = accounts[1]
		const addressrB5kkg6 = accounts[4]
		const addressCwtsfZl = accounts[4]
		const uintNNtSHuq = BigInt("1381")
		const addressyHTT0ML = accounts[3]
		const uinttLImatV = await MIMOTokenPt7PHw.balanceOf.call(addressJW7XUCD, {from: "0x0000000000000000000000000000000000000001"});
		const uintoZbXT0k = await MIMOTokenPt7PHw.balanceOf.call(addressx5eeoI, {from: accounts[2]});
		const uintGy7eE8I = await MIMOTokenPt7PHw.balanceOf.call(addresskKrGLvG, {from: accounts[2]});
		const uintJADIez = await MIMOTokenPt7PHw.allowance.call(addressCwtsfZl, addressrB5kkg6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RKeun5A = await MIMOTokenPt7PHw.setFeeRate.call(uintNNtSHuq, {from: accounts[0]});
		const uinthB2Pxqp = await MIMOTokenPt7PHw.balanceOf.call(addressyHTT0ML, {from: accounts[4]});

		assert.equal(uintGy7eE8I, BigInt("0"))
		assert.equal(uintJADIez, BigInt("0"))
		assert.equal(uinthB2Pxqp, BigInt("0"))
		assert.equal(uintoZbXT0k, BigInt("0"))
		assert.equal(uinttLImatV, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenW7Qw8nj = await MIMOToken.new({from: accounts[1]});
		const uintMytPs3F = BigInt("1195")
		const addressAQfGIh7 = accounts[0]
		const addressm8YGzap = accounts[4]
		const uintExEmnij = BigInt("992")
		const uint256pfUQcx7 = await MIMOTokenW7Qw8nj.setFeeRate.call(uintMytPs3F, {from: accounts[4]});
		const uintqpNBmaM = await MIMOTokenW7Qw8nj.allowance.call(addressm8YGzap, addressAQfGIh7, {from: accounts[5]});
		const uint256tfRCL3j = await MIMOTokenW7Qw8nj.setMinFee.call(uintExEmnij, {from: accounts[2]});

		assert.equal(uintqpNBmaM, BigInt("0"))
	});
})