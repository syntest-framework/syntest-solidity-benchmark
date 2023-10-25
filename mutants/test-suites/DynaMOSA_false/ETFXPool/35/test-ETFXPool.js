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
//		await ETFXPoolv4liGct.exit.call({from: accounts[4]});
//		const boolTpLJHAe = await ETFXPoolv4liGct.transferFrom.call(addressNfaa0EK, addresszI4kIs5, uintGg9MJyV, {from: accounts[3]});
//		const booln4cImil = await ETFXPoolv4liGct.approve.call(addresse4KJCcJ, uintXwiQPm7, {from: accounts[2]});

		assert.equal(boolchz2D2K, true)
		await expect(ETFXPoolv4liGct.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolYTZZWCV = await ETFXPool.new({from: accounts[4]});
//		await ETFXPoolYTZZWCV.nonReentrant.call({from: accounts[4]});
//		const uint256mr2Wjkv = await ETFXPoolYTZZWCV.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const stringskAM1iz = await ETFXPoolYTZZWCV.symbol.call({from: accounts[1]});
//		await ETFXPoolYTZZWCV.renounceOwnership.call({from: accounts[2]});

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
//		await ETFXPoolru5bjGQ.renounceOwnership.call({from: accounts[4]});
//		const uint256TDp2esR = await ETFXPoolru5bjGQ.balanceOf.call(addressqLEcBfh, {from: "0x0000000000000000000000000000000000000001"});

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
//		const uint256TWJihph = await ETFXPoollpCI8qU.withdraw.call(uintdYrIVhT, {from: accounts[2]});
//		const boolhwfxULy = await ETFXPoollpCI8qU.transferFrom.call(addressZJtu5rt, addressHQcFPrf, uintNYkYGcw, {from: accounts[4]});
//		const booleian3ZW = await ETFXPoollpCI8qU.approve.call(addressgUgt0g, uintWrXoGKA, {from: accounts[2]});
//		const uint256ohBk8LK = await ETFXPoollpCI8qU.stake.call(uintLrjyemr, {from: accounts[3]});
//		const uint256Oq7tl7b = await ETFXPoollpCI8qU.allowance.call(addressSaUSwMK, addressSYKVMxL, {from: accounts[1]});
//		const uint256WHOuRqM = await ETFXPoollpCI8qU.allowance.call(addressxmhzFMj, addressl9EdLyH, {from: accounts[0]});

		await expect(ETFXPoollpCI8qU.withdraw.call(uintdYrIVhT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolcmddby7 = await ETFXPool.new({from: accounts[4]});
		const addressNWEhdvv = accounts[3]
//		await ETFXPoolcmddby7.getReward.call({from: accounts[4]});
//		await ETFXPoolcmddby7.getReward.call({from: accounts[1]});
//		const stringduozSox = await ETFXPoolcmddby7.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256uJAiZJL = await ETFXPoolcmddby7.balanceOf.call(addressNWEhdvv, {from: accounts[4]});

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
//		const uint256Ub0hDFy = await ETFXPoolyLkizM.stake.call(uintXZqrKAg, {from: accounts[0]});
//		await ETFXPoolyLkizM.nonReentrant.call({from: accounts[0]});
//		const stringz4y0Lu = await ETFXPoolyLkizM.name.call({from: accounts[3]});
//		const boolB2zzDq = await ETFXPoolyLkizM.transferFrom.call(addressovOmM9s, addresstcO1xnQ, uintv6c5gd5, {from: accounts[5]});
//		const boolviDvHFh = await ETFXPoolyLkizM.transfer.call(addressQOlSY3n, uintEisigkr, {from: accounts[5]});

		await expect(ETFXPoolyLkizM.stake.call(uintXZqrKAg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolATxq7T = await ETFXPool.new({from: accounts[1]});
		const uinthSZPcV = BigInt("848")
		const addressWeJKHuy = accounts[4]
//		const boolMB4us8M = await ETFXPoolATxq7T.decreaseAllowance.call(addressWeJKHuy, uinthSZPcV, {from: accounts[1]});
//		const uint256IRAiZTk = await ETFXPoolATxq7T.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPoolATxq7T.decreaseAllowance.call(addressWeJKHuy, uinthSZPcV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolATxq7T = await ETFXPool.new({from: accounts[1]});
		const addressLFdbX4x = accounts[4]
		const addressUBm5Xm = accounts[1]
		const uintDVC1ztM = BigInt("848")
		const addresssyzC56E = accounts[4]
//		const addressYDL3AdO = await ETFXPoolATxq7T.transferOwnership.call(addressLFdbX4x, {from: accounts[3]});
//		const uint256RZ8ehD = await ETFXPoolATxq7T.balanceOf.call(addressUBm5Xm, {from: accounts[2]});
//		const boolMB4us8M = await ETFXPoolATxq7T.decreaseAllowance.call(addresssyzC56E, uintDVC1ztM, {from: accounts[1]});
//		const uint256IRAiZTk = await ETFXPoolATxq7T.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPoolATxq7T.transferOwnership.call(addressLFdbX4x, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolcmddby7 = await ETFXPool.new({from: accounts[4]});
		const uintTzGHKYD = BigInt("845")
		const addressuGPjmUt = accounts[5]
		const addressgdvS6CL = accounts[3]
		const boolWkPgK32 = await ETFXPoolcmddby7.approve.call(addressuGPjmUt, uintTzGHKYD, {from: accounts[1]});
//		await ETFXPoolcmddby7.getReward.call({from: accounts[4]});
//		await ETFXPoolcmddby7.nonReentrant.call({from: accounts[4]});
//		await ETFXPoolcmddby7.getReward.call({from: accounts[1]});
//		const stringduozSox = await ETFXPoolcmddby7.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256uJAiZJL = await ETFXPoolcmddby7.balanceOf.call(addressgdvS6CL, {from: accounts[4]});

		assert.equal(boolWkPgK32, true)
		await expect(ETFXPoolcmddby7.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolnFI9yE7 = await ETFXPool.new({from: accounts[5]});
		const uintZlhHIzQ = BigInt("1092")
		const addressNGmzUk = accounts[0]
		const address0K9Tiu = accounts[2]
		const uintuvAPIZN = BigInt("1047")
		const addressTFznNtC = accounts[2]
		const uintghx3Vd3 = BigInt("505")
		const addresstnLk2hu = accounts[1]
		const addressfNo3D5 = accounts[1]
		const addresshtGPy4I = accounts[3]
//		const boolFcYZBtr = await ETFXPoolnFI9yE7.transferFrom.call(address0K9Tiu, addressNGmzUk, uintZlhHIzQ, {from: accounts[1]});
//		const boolecDGp9u = await ETFXPoolnFI9yE7.approve.call(addressTFznNtC, uintuvAPIZN, {from: accounts[0]});
//		await ETFXPoolnFI9yE7.getReward.call({from: accounts[5]});
//		const boolnVAGLw7 = await ETFXPoolnFI9yE7.transferFrom.call(addressfNo3D5, addresstnLk2hu, uintghx3Vd3, {from: "0x0000000000000000000000000000000000000001"});
//		const addressZ69MSA5 = await ETFXPoolnFI9yE7.transferOwnership.call(addresshtGPy4I, {from: accounts[0]});

		await expect(ETFXPoolnFI9yE7.transferFrom.call(address0K9Tiu, addressNGmzUk, uintZlhHIzQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolLEs4JQ = await ETFXPool.new({from: accounts[3]});
		const addressEm385RB = accounts[5]
		const uint256vKFKRYt = await ETFXPoolLEs4JQ.balanceOf.call(addressEm385RB, {from: "0x0000000000000000000000000000000000000001"});
		const uint8tT24LdK = await ETFXPoolLEs4JQ.decimals.call({from: accounts[4]});
		const uint256fDsVaVp = await ETFXPoolLEs4JQ.totalSupply.call({from: accounts[4]});
//		await ETFXPoolLEs4JQ.renounceOwnership.call({from: accounts[0]});
//		const addressxkmTaO3 = await ETFXPoolLEs4JQ.owner.call({from: accounts[5]});

		assert.equal(uint256fDsVaVp, BigInt("0"))
		assert.equal(uint256vKFKRYt, BigInt("0"))
		assert.equal(uint8tT24LdK, BigInt("8"))
		await expect(ETFXPoolLEs4JQ.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolru5bjGQ = await ETFXPool.new({from: accounts[4]});
		const addressTvh6AgL = accounts[3]
		const uintU78fbXf = BigInt("706")
		const addressxjnhL82 = accounts[4]
		const uintFuxTaS = BigInt("1316")
		const addressn5ANvd2 = accounts[2]
		const addressJHzQmPv = accounts[0]
		const addressPAAwPsJ = await ETFXPoolru5bjGQ.transferOwnership.call(addressTvh6AgL, {from: accounts[4]});
		const uint256CoBcpA8 = await ETFXPoolru5bjGQ.rewardPerToken.call({from: accounts[3]});
//		await ETFXPoolru5bjGQ.renounceOwnership.call({from: accounts[4]});
//		const uint256yCybzF1 = await ETFXPoolru5bjGQ.withdraw.call(uintU78fbXf, {from: accounts[3]});
//		const uint256TDp2esR = await ETFXPoolru5bjGQ.balanceOf.call(addressxjnhL82, {from: "0x0000000000000000000000000000000000000001"});
//		const bool3Dj1O6 = await ETFXPoolru5bjGQ.transferFrom.call(addressJHzQmPv, addressn5ANvd2, uintFuxTaS, {from: accounts[3]});
//		const string6vxpeI = await ETFXPoolru5bjGQ.symbol.call({from: accounts[5]});

		assert.equal(uint256CoBcpA8, BigInt("0"))
		await expect(ETFXPoolru5bjGQ.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolru5bjGQ = await ETFXPool.new({from: accounts[4]});
		const addressmDtl2vz = accounts[3]
		const uintO7lbnRY = BigInt("706")
		const addressPozXG3V = accounts[4]
		const addressPAAwPsJ = await ETFXPoolru5bjGQ.transferOwnership.call(addressmDtl2vz, {from: accounts[4]});
		const stringIeW2vIc = await ETFXPoolru5bjGQ.symbol.call({from: accounts[0]});
		const uint256CoBcpA8 = await ETFXPoolru5bjGQ.rewardPerToken.call({from: accounts[3]});
//		await ETFXPoolru5bjGQ.renounceOwnership.call({from: accounts[4]});
//		const uint256yCybzF1 = await ETFXPoolru5bjGQ.withdraw.call(uintO7lbnRY, {from: accounts[3]});
//		const uint256TDp2esR = await ETFXPoolru5bjGQ.balanceOf.call(addressPozXG3V, {from: "0x0000000000000000000000000000000000000001"});
//		const string6vxpeI = await ETFXPoolru5bjGQ.symbol.call({from: accounts[5]});

		assert.equal(stringIeW2vIc, "FETFX")
		assert.equal(uint256CoBcpA8, BigInt("0"))
		await expect(ETFXPoolru5bjGQ.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolru5bjGQ = await ETFXPool.new({from: accounts[4]});
		const addressIXdbo89 = accounts[4]
		const uintfv2FYOn = BigInt("1361")
		const addressFwpFK8D = accounts[0]
		const uintt7mdqRg = BigInt("706")
		const addressdusMmpX = accounts[4]
		const addressPAAwPsJ = await ETFXPoolru5bjGQ.transferOwnership.call(addressIXdbo89, {from: accounts[4]});
		const uint256CoBcpA8 = await ETFXPoolru5bjGQ.rewardPerToken.call({from: accounts[3]});
//		await ETFXPoolru5bjGQ.renounceOwnership.call({from: accounts[4]});
//		const boolr40fMYA = await ETFXPoolru5bjGQ.transfer.call(addressFwpFK8D, uintfv2FYOn, {from: accounts[3]});
//		const uint256yCybzF1 = await ETFXPoolru5bjGQ.withdraw.call(uintt7mdqRg, {from: accounts[3]});
//		await ETFXPoolru5bjGQ.onlyOwner.call({from: accounts[4]});
//		const uint256TDp2esR = await ETFXPoolru5bjGQ.balanceOf.call(addressdusMmpX, {from: "0x0000000000000000000000000000000000000001"});
//		const string6vxpeI = await ETFXPoolru5bjGQ.symbol.call({from: accounts[5]});

		assert.equal(uint256CoBcpA8, BigInt("0"))
		await expect(ETFXPoolru5bjGQ.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolaEeSeCA = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uinthBquiQH = BigInt("1822")
		const addressoEXFeas = accounts[5]
		const addressexLU56 = accounts[2]
		const uintO9PpVEs = BigInt("101")
		const addressi2PlNYr = accounts[3]
		const uintBkLwEfX = BigInt("121")
		const addressqRCnyI = accounts[2]
		const boolY29RgBE = await ETFXPoolaEeSeCA.increaseAllowance.call(addressoEXFeas, uinthBquiQH, {from: accounts[2]});
		const uint256Zn1oDi = await ETFXPoolaEeSeCA.totalSupply.call({from: accounts[3]});
		const uint256J6RBZF = await ETFXPoolaEeSeCA.balanceOf.call(addressexLU56, {from: accounts[0]});
		const boolfpex8jF = await ETFXPoolaEeSeCA.transfer.call(addressi2PlNYr, uintO9PpVEs, {from: accounts[4]});
		const boolqyHExe2 = await ETFXPoolaEeSeCA.approve.call(addressqRCnyI, uintBkLwEfX, {from: accounts[2]});
		await ETFXPoolaEeSeCA.nonReentrant.call({from: accounts[2]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolru5bjGQ = await ETFXPool.new({from: accounts[4]});
		const addresshhcme3w = accounts[3]
		const uintAl7cwcC = BigInt("706")
		const addresssITs4N = accounts[4]
		const uintaEfC9hc = BigInt("1316")
		const addresswpzxXcg = accounts[2]
		const addressKiX1fET = accounts[0]
		const addressPAAwPsJ = await ETFXPoolru5bjGQ.transferOwnership.call(addresshhcme3w, {from: accounts[4]});
		const stringcwBfuhb = await ETFXPoolru5bjGQ.name.call({from: accounts[0]});
		const uint256CoBcpA8 = await ETFXPoolru5bjGQ.rewardPerToken.call({from: accounts[3]});
//		await ETFXPoolru5bjGQ.renounceOwnership.call({from: accounts[4]});
//		const uint256yCybzF1 = await ETFXPoolru5bjGQ.withdraw.call(uintAl7cwcC, {from: accounts[3]});
//		const uint256TDp2esR = await ETFXPoolru5bjGQ.balanceOf.call(addresssITs4N, {from: "0x0000000000000000000000000000000000000001"});
//		const bool3Dj1O6 = await ETFXPoolru5bjGQ.transferFrom.call(addressKiX1fET, addresswpzxXcg, uintaEfC9hc, {from: accounts[3]});
//		const string6vxpeI = await ETFXPoolru5bjGQ.symbol.call({from: accounts[5]});

		assert.equal(stringcwBfuhb, "ETFX-FARM")
		assert.equal(uint256CoBcpA8, BigInt("0"))
		await expect(ETFXPoolru5bjGQ.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolru5bjGQ = await ETFXPool.new({from: accounts[4]});
		const addressVAs1g0B = accounts[4]
		const uint9wQPDw = BigInt("706")
		const addressGPigi75 = accounts[4]
		const uintgErjiKQ = BigInt("1316")
		const addressmnussrQ = accounts[2]
		const addressFi8WKWB = accounts[0]
		const uint256ZhpSCFN = await ETFXPoolru5bjGQ.totalSupply.call({from: accounts[5]});
		const addressPAAwPsJ = await ETFXPoolru5bjGQ.transferOwnership.call(addressVAs1g0B, {from: accounts[4]});
		const addresszqlUiHH = await ETFXPoolru5bjGQ.owner.call({from: accounts[3]});
		const uint256CMWgeNv = await ETFXPoolru5bjGQ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256CoBcpA8 = await ETFXPoolru5bjGQ.rewardPerToken.call({from: accounts[3]});
		const uint8moPVYPy = await ETFXPoolru5bjGQ.decimals.call({from: accounts[5]});
		const uint8IoiI7uB = await ETFXPoolru5bjGQ.decimals.call({from: accounts[2]});
//		const uint256yCybzF1 = await ETFXPoolru5bjGQ.withdraw.call(uint9wQPDw, {from: accounts[3]});
//		const uint256TDp2esR = await ETFXPoolru5bjGQ.balanceOf.call(addressGPigi75, {from: "0x0000000000000000000000000000000000000001"});
//		const bool3Dj1O6 = await ETFXPoolru5bjGQ.transferFrom.call(addressFi8WKWB, addressmnussrQ, uintgErjiKQ, {from: accounts[3]});
//		const string6vxpeI = await ETFXPoolru5bjGQ.symbol.call({from: accounts[5]});

		assert.equal(addresszqlUiHH, 0xAbfD1766E9aad7c7F30fa2561032e8d5152Ec802)
		assert.equal(uint256CMWgeNv, BigInt("0"))
		assert.equal(uint256CoBcpA8, BigInt("0"))
		assert.equal(uint256ZhpSCFN, BigInt("0"))
		assert.equal(uint8IoiI7uB, BigInt("8"))
		assert.equal(uint8moPVYPy, BigInt("8"))
		await expect(ETFXPoolru5bjGQ.withdraw.call(uint9wQPDw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})