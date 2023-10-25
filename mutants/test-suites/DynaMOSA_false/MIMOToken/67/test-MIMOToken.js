const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenHUxgOxE = await MIMOToken.new({from: accounts[2]});
		const addressnqeSe2w = accounts[1]
		const uintRsKQyB2 = BigInt("838")
		const uintJjYGngE = BigInt("1250")
		const addressDUgTOQH = accounts[0]
		const uintRoqgnhy = await MIMOTokenHUxgOxE.balanceOf.call(addressnqeSe2w, {from: accounts[3]});
		const uint256O0gSQQJ = await MIMOTokenHUxgOxE.setMinFee.call(uintRsKQyB2, {from: accounts[3]});
//		const boolhLYkS56 = await MIMOTokenHUxgOxE.transfer.call(addressDUgTOQH, uintJjYGngE, {from: accounts[2]});

		assert.equal(uintRoqgnhy, BigInt("0"))
		await expect(MIMOTokenHUxgOxE.transfer.call(addressDUgTOQH, uintJjYGngE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenMK0LmJr = await MIMOToken.new({from: accounts[1]});
		const addressE6opRZI = accounts[1]
		const uintgsc87SK = BigInt("236")
		const uinthPmPKyX = BigInt("484")
		const uintWKKsW9c = BigInt("492")
		const uintoU9Y0sY = await MIMOTokenMK0LmJr.balanceOf.call(addressE6opRZI, {from: accounts[2]});
		const uint256RPvdM0m = await MIMOTokenMK0LmJr.setFeeRate.call(uintgsc87SK, {from: accounts[1]});
		const uint256QVd5yfD = await MIMOTokenMK0LmJr.setMinFee.call(uinthPmPKyX, {from: accounts[3]});
		const uint256fVjsP43 = await MIMOTokenMK0LmJr.setMinFee.call(uintWKKsW9c, {from: accounts[3]});

		assert.equal(uintoU9Y0sY, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenBrWYcsV = await MIMOToken.new({from: accounts[0]});
		const addresscjJtwaL = accounts[5]
		const uintyEDT9ex = BigInt("1360")
		const addressgsrYu1e = accounts[0]
		const addresscFfbF9U = accounts[1]
		const addressk8b2g8f = accounts[2]
		const uintGXcU3Hb = await MIMOTokenBrWYcsV.balanceOf.call(addresscjJtwaL, {from: accounts[4]});
		const uinthjLya7w = await MIMOTokenBrWYcsV.totalSupply.call({from: accounts[1]});
		const uint256BhYqNhf = await MIMOTokenBrWYcsV.setFeeRate.call(uintyEDT9ex, {from: "0x0000000000000000000000000000000000000001"});
		const uintPH7h2YI = await MIMOTokenBrWYcsV.balanceOf.call(addressgsrYu1e, {from: accounts[3]});
		const uintam8TA56 = await MIMOTokenBrWYcsV.allowance.call(addressk8b2g8f, addresscFfbF9U, {from: accounts[2]});

		assert.equal(uintGXcU3Hb, BigInt("0"))
		assert.equal(uintPH7h2YI, BigInt("0"))
		assert.equal(uintam8TA56, BigInt("0"))
		assert.equal(uinthjLya7w, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenqZXKky2 = await MIMOToken.new({from: accounts[2]});
		const uintS1QrAgL = BigInt("1959")
		const addressFA7vrvF = accounts[0]
		const addressQMiqnT8 = accounts[4]
		const uintVZbFKH = BigInt("259")
		const boolgJbwSjF = await MIMOTokenqZXKky2.approve.call(addressFA7vrvF, uintS1QrAgL, {from: accounts[3]});
		const uintLS92r9 = await MIMOTokenqZXKky2.balanceOf.call(addressQMiqnT8, {from: "0x0000000000000000000000000000000000000001"});
		const uint256IxHobSR = await MIMOTokenqZXKky2.setMinFee.call(uintVZbFKH, {from: accounts[1]});

		assert.equal(boolgJbwSjF, true)
		assert.equal(uintLS92r9, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenCfp4gS9 = await MIMOToken.new({from: accounts[3]});
		const addressaJLMoO8 = accounts[5]
		const addresshrdRbJc = "0x0000000000000000000000000000000000000001"
		const uintaQfIgOq = BigInt("2030")
		const uintUjv4Dmq = BigInt("93")
		const uintuQ1naS7 = await MIMOTokenCfp4gS9.allowance.call(addresshrdRbJc, addressaJLMoO8, {from: accounts[1]});
		const uint256UINFlp = await MIMOTokenCfp4gS9.getFee.call(uintaQfIgOq, {from: accounts[1]});
		const uintJoh4qBq = await MIMOTokenCfp4gS9.totalSupply.call({from: accounts[4]});
		const uint256KzoXjde = await MIMOTokenCfp4gS9.getFee.call(uintUjv4Dmq, {from: accounts[1]});

		assert.equal(uint256KzoXjde, BigInt("50000000000000000"))
		assert.equal(uint256UINFlp, BigInt("50000000000000000"))
		assert.equal(uintJoh4qBq, BigInt("16000000000000000000000000"))
		assert.equal(uintuQ1naS7, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenp1MWLBH = await MIMOToken.new({from: accounts[1]});
		const uintaxS9Dt1 = BigInt("479")
		const addressoznlBjs = accounts[0]
		const addressui3QUk9 = accounts[3]
		const uintTTMr9MZ = BigInt("1189")
		const uintD72NvpP = BigInt("1250")
		const addressLSfAIu4 = accounts[1]
		const addressf45gi3D = "0x0000000000000000000000000000000000000001"
		const uint256ZmtVwKI = await MIMOTokenp1MWLBH.getFee.call(uintaxS9Dt1, {from: accounts[0]});
		const uintQ1iP3DD = await MIMOTokenp1MWLBH.allowance.call(addressui3QUk9, addressoznlBjs, {from: accounts[0]});
		const uintAOoU6e = await MIMOTokenp1MWLBH.totalSupply.call({from: accounts[0]});
		const uintGEMRp7P = await MIMOTokenp1MWLBH.totalSupply.call({from: accounts[0]});
		const uint256G5guLV = await MIMOTokenp1MWLBH.setFeeRate.call(uintTTMr9MZ, {from: accounts[2]});
//		const boolTFDM9jm = await MIMOTokenp1MWLBH.transferFrom.call(addressf45gi3D, addressLSfAIu4, uintD72NvpP, {from: accounts[1]});

		assert.equal(uint256ZmtVwKI, BigInt("50000000000000000"))
		assert.equal(uintAOoU6e, BigInt("16000000000000000000000000"))
		assert.equal(uintGEMRp7P, BigInt("16000000000000000000000000"))
		assert.equal(uintQ1iP3DD, BigInt("0"))
		await expect(MIMOTokenp1MWLBH.transferFrom.call(addressf45gi3D, addressLSfAIu4, uintD72NvpP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokendOvzVGQ = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGXHeiTR = BigInt("35")
		const addresshcTqxCi = accounts[4]
		const addressX9wWT1q = accounts[0]
		const addresssXMyapn = accounts[0]
		const addresskHp0iBO = accounts[3]
		const booldOnvrwG = await MIMOTokendOvzVGQ.transfer.call(addresshcTqxCi, uintGXHeiTR, {from: accounts[5]});
		const uintP5WH2qU = await MIMOTokendOvzVGQ.balanceOf.call(addressX9wWT1q, {from: accounts[4]});
		const uintGxZ0I9n = await MIMOTokendOvzVGQ.allowance.call(addresskHp0iBO, addresssXMyapn, {from: accounts[2]});
	});
})