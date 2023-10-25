const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const stringj8tPytY = "lHvOQhXLyJHagHv3aTdqSjvQ0gLZvnXHblKasn0DOcolCYfhxI623EAkoYv3vQui"
		const stringPEt7q3s = "vN5I08Od6mVXVeStBCQcsuMaE5acnqCuTi0y8H3WRz7bkb5hXKCO9bw"
		const uintmoc8STI = BigInt("197")
		const ETFXPoolQ06jma2 = await ETFXPool.new(stringj8tPytY, stringPEt7q3s, uintmoc8STI, {from: accounts[1]});
		const addressqtDgTO = accounts[2]
		const addressA4HwEU = "0x0000000000000000000000000000000000000001"
		const uintTNU00U = BigInt("747")
		const addresspy5esTO = accounts[0]
		const uint256wJuVTSP = await ETFXPoolQ06jma2.balanceOf.call(addressqtDgTO, {from: accounts[0]});
		const addressKPlxMpR = await ETFXPoolQ06jma2.transferOwnership.call(addressA4HwEU, {from: accounts[3]});
		const uint256YMaPAQP = await ETFXPoolQ06jma2.rewardPerToken.call({from: accounts[4]});
		const uint8um4lGU = await ETFXPoolQ06jma2.decimals.call({from: accounts[2]});
		const boolZO1arq6 = await ETFXPoolQ06jma2.decreaseAllowance.call(addresspy5esTO, uintTNU00U, {from: accounts[0]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolv4liGct = await ETFXPool.new({from: accounts[3]});
		const uintLz0qhtY = BigInt("1386")
		const addresswfTUfLT = accounts[1]
		const uintGg9MJyV = BigInt("1558")
		const addresszI4kIs5 = accounts[2]
		const addressNfaa0EK = accounts[0]
		const uintXwiQPm7 = BigInt("483")
		const addresse4KJCcJ = "0x0000000000000000000000000000000000000001"
		const boolchz2D2K = await ETFXPoolv4liGct.increaseAllowance.call(addresswfTUfLT, uintLz0qhtY, {from: "0x0000000000000000000000000000000000000001"});
		await ETFXPoolv4liGct.exit.call({from: accounts[4]});
		const boolTpLJHAe = await ETFXPoolv4liGct.transferFrom.call(addressNfaa0EK, addresszI4kIs5, uintGg9MJyV, {from: accounts[3]});
		const booln4cImil = await ETFXPoolv4liGct.approve.call(addresse4KJCcJ, uintXwiQPm7, {from: accounts[2]});

		assert.equal(boolchz2D2K, true)
		await expect(ETFXPoolv4liGct.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolYTZZWCV = await ETFXPool.new({from: accounts[4]});
		await ETFXPoolYTZZWCV.nonReentrant.call({from: accounts[4]});
		const uint256mr2Wjkv = await ETFXPoolYTZZWCV.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const stringskAM1iz = await ETFXPoolYTZZWCV.symbol.call({from: accounts[1]});
		await ETFXPoolYTZZWCV.renounceOwnership.call({from: accounts[2]});

		await expect(ETFXPoolYTZZWCV.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolru5bjGQ = await ETFXPool.new({from: accounts[4]});
		const addresss8xwnpo = accounts[3]
		const addressdDkQviB = accounts[3]
		const addressykXn60c = accounts[1]
		const addressqLEcBfh = accounts[4]
		const addressPAAwPsJ = await ETFXPoolru5bjGQ.transferOwnership.call(addresss8xwnpo, {from: accounts[4]});
		const uint256cNQybNm = await ETFXPoolru5bjGQ.allowance.call(addressykXn60c, addressdDkQviB, {from: accounts[4]});
		await ETFXPoolru5bjGQ.renounceOwnership.call({from: accounts[4]});
		const uint256TDp2esR = await ETFXPoolru5bjGQ.balanceOf.call(addressqLEcBfh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256cNQybNm, BigInt("0"))
		await expect(ETFXPoolru5bjGQ.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoollpCI8qU = await ETFXPool.new({from: accounts[4]});
		const uintdYrIVhT = BigInt("1594")
		const uintNYkYGcw = BigInt("333")
		const addressHQcFPrf = accounts[0]
		const addressZJtu5rt = accounts[0]
		const uintWrXoGKA = BigInt("1252")
		const addressgUgt0g = accounts[2]
		const uintLrjyemr = BigInt("1344")
		const addressSYKVMxL = accounts[3]
		const addressSaUSwMK = accounts[4]
		const addressl9EdLyH = accounts[4]
		const addressxmhzFMj = "0x0000000000000000000000000000000000000001"
		const uint256TWJihph = await ETFXPoollpCI8qU.withdraw.call(uintdYrIVhT, {from: accounts[2]});
		const boolhwfxULy = await ETFXPoollpCI8qU.transferFrom.call(addressZJtu5rt, addressHQcFPrf, uintNYkYGcw, {from: accounts[4]});
		const booleian3ZW = await ETFXPoollpCI8qU.approve.call(addressgUgt0g, uintWrXoGKA, {from: accounts[2]});
		const uint256ohBk8LK = await ETFXPoollpCI8qU.stake.call(uintLrjyemr, {from: accounts[3]});
		const uint256Oq7tl7b = await ETFXPoollpCI8qU.allowance.call(addressSaUSwMK, addressSYKVMxL, {from: accounts[1]});
		const uint256WHOuRqM = await ETFXPoollpCI8qU.allowance.call(addressxmhzFMj, addressl9EdLyH, {from: accounts[0]});

		await expect(ETFXPoollpCI8qU.withdraw.call(uintdYrIVhT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolcmddby7 = await ETFXPool.new({from: accounts[4]});
		const addressNWEhdvv = accounts[3]
		await ETFXPoolcmddby7.getReward.call({from: accounts[4]});
		await ETFXPoolcmddby7.getReward.call({from: accounts[1]});
		const stringduozSox = await ETFXPoolcmddby7.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256uJAiZJL = await ETFXPoolcmddby7.balanceOf.call(addressNWEhdvv, {from: accounts[4]});

		await expect(ETFXPoolcmddby7.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolyLkizM = await ETFXPool.new({from: accounts[2]});
		const uintXZqrKAg = BigInt("643")
		const uintv6c5gd5 = BigInt("1443")
		const addresstcO1xnQ = accounts[2]
		const addressovOmM9s = accounts[0]
		const uintEisigkr = BigInt("1341")
		const addressQOlSY3n = accounts[5]
		const uint256Ub0hDFy = await ETFXPoolyLkizM.stake.call(uintXZqrKAg, {from: accounts[0]});
		await ETFXPoolyLkizM.nonReentrant.call({from: accounts[0]});
		const stringz4y0Lu = await ETFXPoolyLkizM.name.call({from: accounts[3]});
		const boolB2zzDq = await ETFXPoolyLkizM.transferFrom.call(addressovOmM9s, addresstcO1xnQ, uintv6c5gd5, {from: accounts[5]});
		const boolviDvHFh = await ETFXPoolyLkizM.transfer.call(addressQOlSY3n, uintEisigkr, {from: accounts[5]});

		await expect(ETFXPoolyLkizM.stake.call(uintXZqrKAg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolATxq7T = await ETFXPool.new({from: accounts[1]});
		const uinthSZPcV = BigInt("848")
		const addressWeJKHuy = accounts[4]
		const boolMB4us8M = await ETFXPoolATxq7T.decreaseAllowance.call(addressWeJKHuy, uinthSZPcV, {from: accounts[1]});
		const uint256IRAiZTk = await ETFXPoolATxq7T.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPoolATxq7T.decreaseAllowance.call(addressWeJKHuy, uinthSZPcV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolATxq7T = await ETFXPool.new({from: accounts[1]});
		const uintTzGHKYD = BigInt("845")
		const addressuGPjmUt = accounts[5]
		const uintiihGVvk = BigInt("867")
		const addressAfof38u = accounts[4]
		const boolWkPgK32 = await ETFXPoolATxq7T.approve.call(addressuGPjmUt, uintTzGHKYD, {from: accounts[1]});
		const uint256u19dxlZ = await ETFXPoolATxq7T.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await ETFXPoolATxq7T.nonReentrant.call({from: accounts[4]});
		const boolMB4us8M = await ETFXPoolATxq7T.decreaseAllowance.call(addressAfof38u, uintiihGVvk, {from: accounts[1]});
		const uint256IRAiZTk = await ETFXPoolATxq7T.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolWkPgK32, true)
		assert.equal(uint256u19dxlZ, BigInt("0"))
		await expect(ETFXPoolATxq7T.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolX8bcFAU = await ETFXPool.new({from: accounts[4]});
		const addressLBhxMtq = accounts[2]
		const addressbkL2OG = accounts[3]
		const uint8s02TsR0 = await ETFXPoolX8bcFAU.decimals.call({from: accounts[5]});
		const uint256h1m0FBG = await ETFXPoolX8bcFAU.balanceOf.call(addressLBhxMtq, {from: accounts[0]});
		const uint256h9FXTi = await ETFXPoolX8bcFAU.totalSupply.call({from: accounts[4]});
		const addressv2JGfS = await ETFXPoolX8bcFAU.owner.call({from: accounts[0]});
		const uint256jGWLuM = await ETFXPoolX8bcFAU.balanceOf.call(addressbkL2OG, {from: accounts[0]});

		assert.equal(addressv2JGfS, 0x5Fd0997FbDD4014B00e74d590534E0BCa92F48b3)
		assert.equal(uint256h1m0FBG, BigInt("0"))
		assert.equal(uint256h9FXTi, BigInt("0"))
		assert.equal(uint256jGWLuM, BigInt("0"))
		assert.equal(uint8s02TsR0, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolATxq7T = await ETFXPool.new({from: accounts[1]});
		const uintEb1nxrV = BigInt("165")
		const addressml7f6O = accounts[1]
		const addressfZStvGT = "0x0000000000000000000000000000000000000001"
		const uintzvTJqU = BigInt("835")
		const addressoL0DA9 = accounts[4]
		const uintNdS9SA3 = BigInt("1703")
		const addressu6dLUXg = accounts[2]
		const booljxGCMYX = await ETFXPoolATxq7T.transferFrom.call(addressfZStvGT, addressml7f6O, uintEb1nxrV, {from: accounts[5]});
		const boolMB4us8M = await ETFXPoolATxq7T.decreaseAllowance.call(addressoL0DA9, uintzvTJqU, {from: accounts[1]});
		const boolzYwn1FB = await ETFXPoolATxq7T.increaseAllowance.call(addressu6dLUXg, uintNdS9SA3, {from: accounts[0]});

		await expect(ETFXPoolATxq7T.transferFrom.call(addressfZStvGT, addressml7f6O, uintEb1nxrV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolATxq7T = await ETFXPool.new({from: accounts[1]});
		const uintL61xgzZ = BigInt("848")
		const addressgmvlH4x = accounts[5]
		const uint256u1LraV9 = await ETFXPoolATxq7T.rewardPerToken.call({from: accounts[1]});
		const boolMB4us8M = await ETFXPoolATxq7T.decreaseAllowance.call(addressgmvlH4x, uintL61xgzZ, {from: accounts[1]});

		assert.equal(uint256u1LraV9, BigInt("0"))
		await expect(ETFXPoolATxq7T.decreaseAllowance.call(addressgmvlH4x, uintL61xgzZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolAR6zvJo = await ETFXPool.new({from: accounts[3]});
		const uintLVOekrG = BigInt("1619")
		const address3v5U33 = accounts[4]
		const addressccIUykx = accounts[1]
		const addressFe6VN7V = accounts[4]
		const boolG0nRnZb = await ETFXPoolAR6zvJo.transfer.call(address3v5U33, uintLVOekrG, {from: accounts[1]});
		await ETFXPoolAR6zvJo.nonReentrant.call({from: accounts[3]});
		const addressLSAlrIF = await ETFXPoolAR6zvJo.transferOwnership.call(addressccIUykx, {from: accounts[4]});
		const addressuz2hdIQ = await ETFXPoolAR6zvJo.transferOwnership.call(addressFe6VN7V, {from: accounts[5]});

		await expect(ETFXPoolAR6zvJo.transfer.call(address3v5U33, uintLVOekrG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolATxq7T = await ETFXPool.new({from: accounts[1]});
		const uintrsUaKEg = BigInt("148")
		const addressoyX6xqA = accounts[0]
		const boolMI4mu6F = await ETFXPoolATxq7T.approve.call(addressoyX6xqA, uintrsUaKEg, {from: accounts[2]});
		const stringo67M6tB = await ETFXPoolATxq7T.name.call({from: accounts[0]});
		const uint256IRAiZTk = await ETFXPoolATxq7T.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolMI4mu6F, true)
		assert.equal(stringo67M6tB, "ETFX-FARM")
		assert.equal(uint256IRAiZTk, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolATxq7T = await ETFXPool.new({from: accounts[1]});
		const uinteJbq3TB = BigInt("848")
		const addresssmrKCb4 = accounts[5]
		await ETFXPoolATxq7T.renounceOwnership.call({from: accounts[2]});
		await ETFXPoolATxq7T.exit.call({from: accounts[1]});
		const uint8q2mIEi = await ETFXPoolATxq7T.decimals.call({from: accounts[3]});
		const boolMB4us8M = await ETFXPoolATxq7T.decreaseAllowance.call(addresssmrKCb4, uinteJbq3TB, {from: accounts[1]});

		await expect(ETFXPoolATxq7T.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolATxq7T = await ETFXPool.new({from: accounts[1]});
		const uint256IRAiZTk = await ETFXPoolATxq7T.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const stringL0FpvcS = await ETFXPoolATxq7T.symbol.call({from: accounts[2]});

		assert.equal(stringL0FpvcS, "FETFX")
		assert.equal(uint256IRAiZTk, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolOy3FqHF = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintkjT27k1 = BigInt("203")
		const addressTGKAcvf = accounts[4]
		const addressIEqEMmM = accounts[3]
		const addressrQEfBse = accounts[4]
		const boolgeCTJx = await ETFXPoolOy3FqHF.transfer.call(addressTGKAcvf, uintkjT27k1, {from: accounts[1]});
		const uint256fyMy90N = await ETFXPoolOy3FqHF.allowance.call(addressrQEfBse, addressIEqEMmM, {from: accounts[0]});
		await ETFXPoolOy3FqHF.onlyOwner.call({from: accounts[3]});
	});
})