const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenvNqyASL = await POWToken.new({from: accounts[5]});
		const byteTGb8Umr = "0x191b1c071216050603071a1d09181b1b160e0e040a1c18190d04030e100f011e"
		const byteCmIbRXI = "0x071909180b1103020e1c1d1606120c1a101c1e1d131102070c0f0e1d06160a01"
		const uintmyUwIj = BigInt("241")
		const uintCSKCb2b = BigInt("293")
		const uintglec9xP = BigInt("1260")
		const addressrqnhgy6 = accounts[0]
		const addressPHgyOcR = accounts[3]
		await POWTokenvNqyASL.pause.call({from: accounts[4]});
		const addresshe1NGt4 = await POWTokenvNqyASL.permit.call(addressPHgyOcR, addressrqnhgy6, uintglec9xP, uintCSKCb2b, uintmyUwIj, byteCmIbRXI, byteTGb8Umr, {from: accounts[0]});
		await POWTokenvNqyASL.whenPaused.call({from: accounts[2]});

		await expect(POWTokenvNqyASL.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqaMgjIp = await POWToken.new({from: accounts[0]});
		const uintPtY83R1 = BigInt("595")
		const addressbfmgHw = accounts[4]
		const addressQT6vN4a = accounts[4]
		const bytePpfyjm = "0x0618070c0307090e130e0a0b16141b0b04031a201f151f100b1a0a0006201309"
		const byteJwQYotx = "0x16170704120c15011712191d1820200c180e0c0b1114061000010b0f1204060f"
		const uintuIabBFx = BigInt("110")
		const uintZ117JAU = BigInt("953")
		const uintqTeFTu = BigInt("631")
		const addressU7kHzbb = accounts[0]
		const addressKivuSA8 = accounts[1]
		const uintN52DgJd = BigInt("1417")
		const boolXCAvyt = await POWTokenqaMgjIp.transferFrom.call(addressQT6vN4a, addressbfmgHw, uintPtY83R1, {from: accounts[4]});
		const uint256mgdIvHI = await POWTokenqaMgjIp.lpStakingRewardRate.call({from: accounts[1]});
		const addresszXWiMLO = await POWTokenqaMgjIp.permit.call(addressKivuSA8, addressU7kHzbb, uintqTeFTu, uintZ117JAU, uintuIabBFx, byteJwQYotx, bytePpfyjm, {from: accounts[1]});
		const uint256waiRDhb = await POWTokenqaMgjIp.setWorkingHashRate.call(uintN52DgJd, {from: accounts[4]});
		const uint256ov72KLI = await POWTokenqaMgjIp.getHistoryWorkingRate.call({from: accounts[5]});
		const uint256J3qN5gQ = await POWTokenqaMgjIp.getCurWorkingRate.call({from: accounts[4]});

		await expect(POWTokenqaMgjIp.transferFrom.call(addressQT6vN4a, addressbfmgHw, uintPtY83R1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenu5EEAHX = await POWToken.new({from: accounts[4]});
		const addressTSvHdxP = "0x0000000000000000000000000000000000000001"
		const uinte2mgeaA = BigInt("1640")
		await POWTokenu5EEAHX.onlyOwner.call({from: accounts[4]});
		const uint256l28UrD = await POWTokenu5EEAHX.getHistoryWorkingRate.call({from: accounts[1]});
		const addressbZOAXW7 = await POWTokenu5EEAHX.setBtcParam.call(addressTSvHdxP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256f6Argrf = await POWTokenu5EEAHX.setStartMiningTime.call(uinte2mgeaA, {from: accounts[5]});
		await POWTokenu5EEAHX.onlyParamSetter.call({from: accounts[3]});

		await expect(POWTokenu5EEAHX.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenxHSPpKH = await POWToken.new({from: accounts[3]});
		const uintqzYW2lB = BigInt("1625")
		const addressgDSzVT6 = accounts[0]
		const uinttT254Md = BigInt("1890")
		const addresslFoEQY3 = accounts[1]
		const uint256KFDL6Hf = await POWTokenxHSPpKH.stakingRewardRate.call({from: accounts[0]});
		const addressAov5EZM = await POWTokenxHSPpKH.mint.call(addressgDSzVT6, uintqzYW2lB, {from: accounts[5]});
		const addressv192q9F = await POWTokenxHSPpKH.inCaseTokensGetStuck.call(addresslFoEQY3, uinttT254Md, {from: accounts[2]});

		assert.equal(uint256KFDL6Hf, BigInt("0"))
		await expect(POWTokenxHSPpKH.mint.call(addressgDSzVT6, uintqzYW2lB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenRVU0Jd2 = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		await POWTokenRVU0Jd2.whenPaused.call({from: accounts[4]});
		const uint256fKmfcH2 = await POWTokenRVU0Jd2.remainingAmount.call({from: accounts[4]});
		const uint256ttxHx1c = await POWTokenRVU0Jd2.stakingRewardRate.call({from: accounts[3]});
		const uint256BJfu1Qn = await POWTokenRVU0Jd2.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[4]});
	});

	it('test for POWToken', async () => {
		const POWTokenxy3MxNe = await POWToken.new({from: accounts[2]});
		const addressvTJi8B6 = accounts[4]
		const uintgHGPQwX = BigInt("1596")
		const addressyG9IU4q = accounts[2]
		const addressrt04D4A = await POWTokenxy3MxNe.setBtcParam.call(addressvTJi8B6, {from: "0x0000000000000000000000000000000000000001"});
		await POWTokenxy3MxNe.whenPaused.call({from: accounts[4]});
		const uint256zB0Hh7T = await POWTokenxy3MxNe.lpStakingRewardRate.call({from: accounts[1]});
		const uint256EmkTEGL = await POWTokenxy3MxNe.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[4]});
		const boolBlnQJi7 = await POWTokenxy3MxNe.approve.call(addressyG9IU4q, uintgHGPQwX, {from: accounts[3]});
		await POWTokenxy3MxNe.whenNotPaused.call({from: accounts[1]});

		await expect(POWTokenxy3MxNe.setBtcParam.call(addressvTJi8B6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenrP9QDsn = await POWToken.new({from: accounts[4]});
		const uinteitAXL = BigInt("31")
		const addressQJft3NQ = accounts[3]
		const uintYkGppcB = BigInt("1776")
		const uintgD20uQp = BigInt("1322")
		const addressg92V5bx = accounts[3]
		await POWTokenrP9QDsn.updateIncomeRate.call({from: accounts[2]});
		const boolGE9kknr = await POWTokenrP9QDsn.transfer.call(addressQJft3NQ, uinteitAXL, {from: accounts[1]});
		await POWTokenrP9QDsn.whenNotPaused.call({from: accounts[1]});
		const uint256vIuDicf = await POWTokenrP9QDsn.setStartMiningTime.call(uintYkGppcB, {from: accounts[5]});
		const uint256gSdztJV = await POWTokenrP9QDsn.getHistoryWorkingRate.call({from: accounts[3]});
		const boolrcrs024 = await POWTokenrP9QDsn.approve.call(addressg92V5bx, uintgD20uQp, {from: accounts[2]});

		await expect(POWTokenrP9QDsn.updateIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenLJ8544c = await POWToken.new({from: accounts[3]});
		const uintpSi3MFE = BigInt("424")
		const uintISWKIrt = BigInt("323")
		const uinteaxze5r = BigInt("62")
		const uintbzED2ZY = BigInt("418")
		const uintJssFuFP = BigInt("1407")
		const addressktsNBvt = accounts[2]
		const addressuyP7StP = accounts[2]
		const addresskuWjfdc = accounts[3]
		const addressPBVoaQM = accounts[4]
		const addresscMG1MMm = accounts[0]
		const addresssnlKQt8 = accounts[0]
		const addressVzPa2GM = accounts[2]
		const addresspQzEedd = accounts[0]
		const stringDSuUiFn = "iA9iIs7LyLchBNXlnnM0DYg9IfD6UYp7BvFoxfGcZdJV5hkMcup5tBvjs9inAKMCPx9L"
		const stringVu150ax = "197GoJZpo7dbVjaYfOzI7QrhWuQADXbGn"
		const uintkhWqjJt = BigInt("1207")
		const stringxw7eR0 = await POWTokenLJ8544c.initialize.call(stringVu150ax, stringDSuUiFn, addresspQzEedd, addressVzPa2GM, addresssnlKQt8, addresscMG1MMm, addressPBVoaQM, addresskuWjfdc, addressuyP7StP, addressktsNBvt, uintJssFuFP, uintbzED2ZY, uinteaxze5r, uintISWKIrt, uintpSi3MFE, {from: accounts[0]});
		await POWTokenLJ8544c.unpause.call({from: accounts[0]});
		const uint256midyjFN = await POWTokenLJ8544c.setStakingRewardRatio.call(uintkhWqjJt, {from: accounts[0]});

		await expect(POWTokenLJ8544c.initialize.call(stringVu150ax, stringDSuUiFn, addresspQzEedd, addressVzPa2GM, addresssnlKQt8, addresscMG1MMm, addressPBVoaQM, addresskuWjfdc, addressuyP7StP, addressktsNBvt, uintJssFuFP, uintbzED2ZY, uinteaxze5r, uintISWKIrt, uintpSi3MFE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenbHgG8yK = await POWToken.new({from: accounts[2]});
		const uintwsZ5DpM = BigInt("182")
		const uint256O5n6ZDp = await POWTokenbHgG8yK.getCurWorkingRate.call({from: accounts[4]});
		const uint256nCwI6Ar = await POWTokenbHgG8yK.getIncomeBTCInWeiPerSec.call({from: accounts[2]});
		const uint256vK3x90 = await POWTokenbHgG8yK.notifyRewardAmount.call(uintwsZ5DpM, {from: accounts[1]});
		await POWTokenbHgG8yK.unpause.call({from: accounts[4]});

		await expect(POWTokenbHgG8yK.getCurWorkingRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenxHSPpKH = await POWToken.new({from: accounts[3]});
		const uintqjMfZu8 = BigInt("640")
		const address17VYWi = accounts[0]
		const uintmR4JFgp = BigInt("1636")
		const addressSsJgJFb = accounts[0]
		const uintNlloHgj = BigInt("1890")
		const addressu0d84ig = accounts[1]
		const uint256jJp0R8R = await POWTokenxHSPpKH.getHistoryWorkingRate.call({from: accounts[3]});
		const uint256KFDL6Hf = await POWTokenxHSPpKH.stakingRewardRate.call({from: accounts[0]});
		const uint256U3kz7eu = await POWTokenxHSPpKH.stakingRewardRate.call({from: accounts[4]});
		const addressnDyG0zs = await POWTokenxHSPpKH.inCaseTokensGetStuck.call(address17VYWi, uintqjMfZu8, {from: accounts[4]});
		const addressAov5EZM = await POWTokenxHSPpKH.mint.call(addressSsJgJFb, uintmR4JFgp, {from: accounts[5]});
		const addressv192q9F = await POWTokenxHSPpKH.inCaseTokensGetStuck.call(addressu0d84ig, uintNlloHgj, {from: accounts[2]});

		await expect(POWTokenxHSPpKH.getHistoryWorkingRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenvNqyASL = await POWToken.new({from: accounts[5]});
		const bytebMwgiZc = "0x020c0204090f14131408201b1b201f1007150905170b1f0c0c1a0513070e160a"
		const bytegTvd3R = "0x0d061c1b14130d0204081c180c0810051b1c200209190e131c13180b060c060e"
		const uint0S0QGd = BigInt("105")
		const uintkbS3SW6 = BigInt("1437")
		const uinth4J3ZQp = BigInt("1623")
		const addressoo5Uqq4 = "0x0000000000000000000000000000000000000001"
		const addressukdbG9W = accounts[0]
		const uintCmBtGuQ = BigInt("1798")
		const uintYCMH375 = BigInt("1198")
		const addressypNYjwa = await POWTokenvNqyASL.permit.call(addressukdbG9W, addressoo5Uqq4, uinth4J3ZQp, uintkbS3SW6, uint0S0QGd, bytegTvd3R, bytebMwgiZc, {from: accounts[3]});
		const uint256z8iW9E = await POWTokenvNqyASL.setElectricCharge.call(uintCmBtGuQ, {from: accounts[2]});
		await POWTokenvNqyASL.whenPaused.call({from: accounts[2]});
		const uint256Zj8dn0K = await POWTokenvNqyASL.setMinerPoolFeeNumerator.call(uintYCMH375, {from: accounts[3]});

		await expect(POWTokenvNqyASL.permit.call(addressukdbG9W, addressoo5Uqq4, uinth4J3ZQp, uintkbS3SW6, uint0S0QGd, bytegTvd3R, bytebMwgiZc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenMiWmaMC = await POWToken.new({from: accounts[0]});
		const uintSjjDMdS = BigInt("1248")
		const uintMiVwW3 = BigInt("106")
		const uintLhkEdwF = BigInt("225")
		const uintpmWGIP = BigInt("1587")
		const uintrGlAjJj = BigInt("747")
		const uintY6L4elt = BigInt("1510")
		const addressEYpd2U = accounts[1]
		const addressOPxk9O3 = accounts[2]
		const addressUa3USK1 = accounts[3]
		const addressOgEZcIQ = "0x0000000000000000000000000000000000000001"
		const addressbW9kI5A = accounts[0]
		const address5ZUnhF = accounts[2]
		const addressE5nsXof = accounts[0]
		const addressVKwVyE0 = accounts[0]
		const stringbrGJq82 = "prhGNmtE3UV7JnoFbqzWSMwEoKGyGIuUsuJ1fISj5oEUYLyVca1PDB2wyFTFO6dZQHLSpyN2nhUBAD"
		const stringwNhw5Bz = "v5TO6itGjvAaEp1vituV5RQtBeKbDiQZS8x"
		const uintVCY7kVc = BigInt("55")
		const uintztfr53h = BigInt("383")
		const uint256yuHrrAJ = await POWTokenMiWmaMC.getIncomeBTCInWeiPerSec.call({from: accounts[2]});
		const uint256TAdFQRL = await POWTokenMiWmaMC.setStartMiningTime.call(uintSjjDMdS, {from: accounts[0]});
		const stringjN43npf = await POWTokenMiWmaMC.initialize.call(stringwNhw5Bz, stringbrGJq82, addressVKwVyE0, addressE5nsXof, address5ZUnhF, addressbW9kI5A, addressOgEZcIQ, addressUa3USK1, addressOPxk9O3, addressEYpd2U, uintY6L4elt, uintrGlAjJj, uintpmWGIP, uintLhkEdwF, uintMiVwW3, {from: accounts[1]});
		const uint256Tvzl2Zy = await POWTokenMiWmaMC.setStartMiningTime.call(uintVCY7kVc, {from: accounts[1]});
		const uint256INCAbet = await POWTokenMiWmaMC.setStakingRewardRatio.call(uintztfr53h, {from: accounts[4]});

		await expect(POWTokenMiWmaMC.getIncomeBTCInWeiPerSec.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenvNqyASL = await POWToken.new({from: accounts[5]});
		const uintvGJhggN = BigInt("1707")
		const uintRI6zVNb = BigInt("1187")
		const uint256WDGSlw2 = await POWTokenvNqyASL.lpStakingRewardRate.call({from: accounts[2]});
		const uint256xaaKw3l = await POWTokenvNqyASL.setStakingRewardRatio.call(uintvGJhggN, {from: accounts[2]});
		const uint256qHSBUPl = await POWTokenvNqyASL.setWorkingHashRate.call(uintRI6zVNb, {from: accounts[2]});
		await POWTokenvNqyASL.pause.call({from: accounts[4]});

		assert.equal(uint256WDGSlw2, BigInt("0"))
		await expect(POWTokenvNqyASL.setStakingRewardRatio.call(uintvGJhggN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenvNqyASL = await POWToken.new({from: accounts[5]});
		const uintwo745NW = BigInt("972")
		const addresslWqbXsv = accounts[4]
		const addressmnHOk1r = await POWTokenvNqyASL.claimIncome.call(addresslWqbXsv, uintwo745NW, {from: accounts[2]});
		const uint256qLKEI3U = await POWTokenvNqyASL.getHistoryWorkingRate.call({from: accounts[2]});
		await POWTokenvNqyASL.pause.call({from: accounts[4]});

		await expect(POWTokenvNqyASL.claimIncome.call(addresslWqbXsv, uintwo745NW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenrP9QDsn = await POWToken.new({from: accounts[4]});
		const uintErPAaAd = BigInt("31")
		const addressuRJ9BD = accounts[3]
		const uintlX6o1oX = BigInt("1776")
		const uintDSjopXx = BigInt("1322")
		const addressTpXbUU4 = accounts[3]
		const boolGE9kknr = await POWTokenrP9QDsn.transfer.call(addressuRJ9BD, uintErPAaAd, {from: accounts[1]});
		const uint256vIuDicf = await POWTokenrP9QDsn.setStartMiningTime.call(uintlX6o1oX, {from: accounts[5]});
		const uint256gSdztJV = await POWTokenrP9QDsn.getHistoryWorkingRate.call({from: accounts[3]});
		const boolrcrs024 = await POWTokenrP9QDsn.approve.call(addressTpXbUU4, uintDSjopXx, {from: accounts[2]});

		await expect(POWTokenrP9QDsn.transfer.call(addressuRJ9BD, uintErPAaAd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenxHSPpKH = await POWToken.new({from: accounts[3]});
		const uintHHqoQ55 = BigInt("1635")
		const addressSYwh2LI = accounts[0]
		const uint256KFDL6Hf = await POWTokenxHSPpKH.stakingRewardRate.call({from: accounts[0]});
		const uint256JCVLhw8 = await POWTokenxHSPpKH.remainingAmount.call({from: accounts[0]});
		const addressAov5EZM = await POWTokenxHSPpKH.mint.call(addressSYwh2LI, uintHHqoQ55, {from: accounts[5]});

		assert.equal(uint256JCVLhw8, BigInt("0"))
		assert.equal(uint256KFDL6Hf, BigInt("0"))
		await expect(POWTokenxHSPpKH.mint.call(addressSYwh2LI, uintHHqoQ55, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenpTKn3e4 = await POWToken.new({from: accounts[5]});
		const uintyxCZqh = BigInt("954")
		const addresssBpHojG = accounts[3]
		const uintVgi3s21 = BigInt("826")
		const uintGf6s3iE = BigInt("1781")
		const addressCbnbEAJ = await POWTokenpTKn3e4.claimReward.call(addresssBpHojG, uintyxCZqh, {from: "0x0000000000000000000000000000000000000001"});
		const uint256JKjMMDb = await POWTokenpTKn3e4.notifyRewardAmount.call(uintVgi3s21, {from: "0x0000000000000000000000000000000000000001"});
		const uint256TLgoLf3 = await POWTokenpTKn3e4.addHashRate.call(uintGf6s3iE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenpTKn3e4.claimReward.call(addresssBpHojG, uintyxCZqh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenxHSPpKH = await POWToken.new({from: accounts[3]});
		const uinto1otvVZ = BigInt("1335")
		const boolZ9XJb2 = await POWTokenxHSPpKH.paused.call({from: accounts[2]});
		const uint256Fbl3yC7 = await POWTokenxHSPpKH.notifyRewardAmount.call(uinto1otvVZ, {from: accounts[0]});
		const uint256KFDL6Hf = await POWTokenxHSPpKH.stakingRewardRate.call({from: accounts[0]});
		const uint256BSfKLn = await POWTokenxHSPpKH.getIncomeBTCInWeiPerSec.call({from: accounts[3]});

		assert.equal(boolZ9XJb2, false)
		await expect(POWTokenxHSPpKH.notifyRewardAmount.call(uinto1otvVZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenxHSPpKH = await POWToken.new({from: accounts[3]});
		const uintYXVFDHq = BigInt("403")
		const addresscUwNPoW = accounts[4]
		const boolFtebAaZ = await POWTokenxHSPpKH.approve.call(addresscUwNPoW, uintYXVFDHq, {from: accounts[2]});
		const uint256Q1lDmdx = await POWTokenxHSPpKH.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[4]});

		assert.equal(boolFtebAaZ, true)
		await expect(POWTokenxHSPpKH.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})