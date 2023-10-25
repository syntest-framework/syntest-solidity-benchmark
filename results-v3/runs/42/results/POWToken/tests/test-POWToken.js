const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenKSa1P4a = await POWToken.new({from: accounts[2]});
		const uintkiMT0po = BigInt("2006")
		const address9RhHy3 = accounts[0]
		const addressz3TAuvH = accounts[4]
		const uintbefDzX = BigInt("1333")
		const uintcl37Kkj = BigInt("543")
		const address2PUzWm = accounts[4]
		const addressXku2sQ2 = await POWTokenKSa1P4a.claimReward.call(address9RhHy3, uintkiMT0po, {from: accounts[0]});
		const addressRpGVJ1 = await POWTokenKSa1P4a.transferOwnership.call(addressz3TAuvH, {from: accounts[2]});
		const uint256v7dCPfE = await POWTokenKSa1P4a.setStakingRewardRatio.call(uintbefDzX, {from: accounts[4]});
		const addressMrpeuEc = await POWTokenKSa1P4a.claimReward.call(address2PUzWm, uintcl37Kkj, {from: accounts[2]});
		await POWTokenKSa1P4a.onlyParamSetter.call({from: accounts[0]});

		await expect(POWTokenKSa1P4a.claimReward.call(address9RhHy3, uintkiMT0po, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenqmuvJId = await POWToken.new({from: accounts[2]});
		const uintJr4t5XL = BigInt("1972")
		const addresslhAT3m4 = accounts[0]
		await POWTokenqmuvJId.whenNotPaused.call({from: accounts[2]});
		const uint256QZDyXHx = await POWTokenqmuvJId.remainingAmount.call({from: accounts[2]});
		const boolr6rTRWD = await POWTokenqmuvJId.transfer.call(addresslhAT3m4, uintJr4t5XL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenqmuvJId.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhlwbEPG = await POWToken.new({from: accounts[4]});
		const uintcUC6Pgd = BigInt("1448")
		const uinthTFhpTh = BigInt("613")
		const uintzsGr7yZ = BigInt("118")
		const uintGMWgCRM = BigInt("906")
		const uintCCaxEUv = BigInt("1531")
		const addressxervZi = accounts[2]
		const addresszVNjaBU = accounts[5]
		const addressdRMnBxJ = accounts[4]
		const addressFI58Nfa = accounts[5]
		const addresszLviZQ3 = accounts[3]
		const addressGl3E7Gc = accounts[4]
		const addressqH5rUY7 = accounts[3]
		const addressxz7WH6h = accounts[3]
		const stringH0jkxqs = "M8pjjcD2JlG4x3D1awhzgC"
		const stringedSF10d = "hyDupFmq9NO768YpkmdFTT65DZ0c2zCGeDDbMBUWoMryEIzy4X7XaVpERcdYwcfL4FASNd4tZU95fSyWKDGaosdta9Pt"
		const stringqhkGO3c = await POWTokenhlwbEPG.initialize.call(stringedSF10d, stringH0jkxqs, addressxz7WH6h, addressqH5rUY7, addressGl3E7Gc, addresszLviZQ3, addressFI58Nfa, addressdRMnBxJ, addresszVNjaBU, addressxervZi, uintCCaxEUv, uintGMWgCRM, uintzsGr7yZ, uinthTFhpTh, uintcUC6Pgd, {from: accounts[4]});
		await POWTokenhlwbEPG.whenNotPaused.call({from: accounts[4]});

		await expect(POWTokenhlwbEPG.initialize.call(stringedSF10d, stringH0jkxqs, addressxz7WH6h, addressqH5rUY7, addressGl3E7Gc, addresszLviZQ3, addressFI58Nfa, addressdRMnBxJ, addresszVNjaBU, addressxervZi, uintCCaxEUv, uintGMWgCRM, uintzsGr7yZ, uinthTFhpTh, uintcUC6Pgd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenwqCGU6C = await POWToken.new({from: accounts[0]});
		const uintkgKc3gm = BigInt("557")
		const uint256KdnPT4l = await POWTokenwqCGU6C.setDepreciationNumerator.call(uintkgKc3gm, {from: accounts[1]});
		const uint256kOBqmNh = await POWTokenwqCGU6C.lpStakingRewardRate.call({from: accounts[1]});

		await expect(POWTokenwqCGU6C.setDepreciationNumerator.call(uintkgKc3gm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhcqxdFD = await POWToken.new({from: accounts[5]});
		const addresscpBkeZx = accounts[0]
		const uintJ8Spdlu = BigInt("173")
		const uintyhvBk1z = BigInt("1064")
		const uintOfN6LQy = BigInt("18")
		const uint6n66gN = BigInt("566")
		const uintv2wzE84 = BigInt("324")
		const addressuVGN1gi = accounts[2]
		const addressUyPC0U9 = accounts[0]
		const addressvNiGNQX = accounts[3]
		const addressz2xgzaY = accounts[3]
		const addresscPK56nS = accounts[1]
		const addressJn5KYKX = accounts[0]
		const addressE7VPKnw = accounts[4]
		const addresshL0nCVZ = accounts[4]
		const stringDR1YZn = "H17mDizYTxfqbbBjdrfFb96ilEAOqkOwLV8Qotmz8sxRa1r7YuWWQoiOp8GoPX"
		const stringAoSKL4c = "hDvLkpEBxZsJqLyX7UAXJVs67YRZpvBUgbli2aHk2sY9gLU7Jc"
		const uintk6hcMA8 = BigInt("1912")
		const addressOEJvHH9 = accounts[3]
		const addressXK5Ek6y = await POWTokenhcqxdFD.transferOwnership.call(addresscpBkeZx, {from: accounts[3]});
		const stringBwsmaP = await POWTokenhcqxdFD.initialize.call(stringAoSKL4c, stringDR1YZn, addresshL0nCVZ, addressE7VPKnw, addressJn5KYKX, addresscPK56nS, addressz2xgzaY, addressvNiGNQX, addressUyPC0U9, addressuVGN1gi, uintv2wzE84, uint6n66gN, uintOfN6LQy, uintyhvBk1z, uintJ8Spdlu, {from: "0x0000000000000000000000000000000000000001"});
		await POWTokenhcqxdFD.whenPaused.call({from: accounts[1]});
		const addressMuKU1mS = await POWTokenhcqxdFD.claimIncome.call(addressOEJvHH9, uintk6hcMA8, {from: accounts[4]});

		await expect(POWTokenhcqxdFD.transferOwnership.call(addresscpBkeZx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenm8QleqV = await POWToken.new({from: accounts[1]});
		const uintVn6lrwJ = BigInt("1781")
		const addressmrRu45X = accounts[4]
		const addressG9zg8Xt = await POWTokenm8QleqV.claimIncome.call(addressmrRu45X, uintVn6lrwJ, {from: "0x0000000000000000000000000000000000000001"});
		await POWTokenm8QleqV.pause.call({from: accounts[0]});
		await POWTokenm8QleqV.whenNotPaused.call({from: accounts[4]});

		await expect(POWTokenm8QleqV.claimIncome.call(addressmrRu45X, uintVn6lrwJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenT9gpRc = await POWToken.new({from: accounts[4]});
		const addressJTckiHK = accounts[5]
		const uintrYLuat2 = BigInt("1621")
		const uint256vM506B = await POWTokenT9gpRc.lpStakingRewardRate.call({from: accounts[3]});
		await POWTokenT9gpRc.onlyParamSetter.call({from: accounts[0]});
		const addressaWsn4Zn = await POWTokenT9gpRc.transferOwnership.call(addressJTckiHK, {from: accounts[1]});
		const uint256nwGCjn = await POWTokenT9gpRc.setStakingRewardRatio.call(uintrYLuat2, {from: accounts[1]});

		assert.equal(uint256vM506B, BigInt("0"))
		await expect(POWTokenT9gpRc.onlyParamSetter.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenT9gpRc = await POWToken.new({from: accounts[4]});
		const addressgnusQZr = accounts[5]
		const uintXPkyfNQ = BigInt("1621")
		const uint256aTJuBQ4 = await POWTokenT9gpRc.getCurWorkingRate.call({from: accounts[0]});
		const uint256vM506B = await POWTokenT9gpRc.lpStakingRewardRate.call({from: accounts[3]});
		await POWTokenT9gpRc.onlyParamSetter.call({from: accounts[0]});
		const addressaWsn4Zn = await POWTokenT9gpRc.transferOwnership.call(addressgnusQZr, {from: accounts[1]});
		const uint256nwGCjn = await POWTokenT9gpRc.setStakingRewardRatio.call(uintXPkyfNQ, {from: accounts[1]});

		await expect(POWTokenT9gpRc.getCurWorkingRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhlwbEPG = await POWToken.new({from: accounts[4]});
		const bytesNogOld = "0x020a1b0809051205151e0409160f130801080d0b07161907170c1d0b11031b18"
		const byteEfZrx7c = "0x2003020c171204110f1f12100a0d04170f171217050b0a0a09080800070f0f0e"
		const uintQIvzkv = BigInt("242")
		const uintF0kVnr6 = BigInt("764")
		const uintNnYyzq8 = BigInt("540")
		const addressoZ7l07Z = accounts[3]
		const addressGtztm6 = accounts[2]
		const addressOPFaosp = await POWTokenhlwbEPG.permit.call(addressGtztm6, addressoZ7l07Z, uintNnYyzq8, uintF0kVnr6, uintQIvzkv, byteEfZrx7c, bytesNogOld, {from: accounts[1]});
		await POWTokenhlwbEPG.whenNotPaused.call({from: accounts[4]});

		await expect(POWTokenhlwbEPG.permit.call(addressGtztm6, addressoZ7l07Z, uintNnYyzq8, uintF0kVnr6, uintQIvzkv, byteEfZrx7c, bytesNogOld, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenT9gpRc = await POWToken.new({from: accounts[4]});
		const uint7xvCk5 = BigInt("1621")
		await POWTokenT9gpRc.updateIncomeRate.call({from: accounts[4]});
		const uint256vM506B = await POWTokenT9gpRc.lpStakingRewardRate.call({from: accounts[3]});
		await POWTokenT9gpRc.onlyParamSetter.call({from: accounts[0]});
		const uint256nwGCjn = await POWTokenT9gpRc.setStakingRewardRatio.call(uint7xvCk5, {from: accounts[1]});

		await expect(POWTokenT9gpRc.updateIncomeRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenT9gpRc = await POWToken.new({from: accounts[4]});
		const uintv2hbOWt = BigInt("1621")
		const uint256lhO6XLH = await POWTokenT9gpRc.remainingAmount.call({from: accounts[0]});
		await POWTokenT9gpRc.whenPaused.call({from: accounts[1]});
		const uint256vM506B = await POWTokenT9gpRc.lpStakingRewardRate.call({from: accounts[3]});
		const uint256nwGCjn = await POWTokenT9gpRc.setStakingRewardRatio.call(uintv2hbOWt, {from: accounts[1]});

		assert.equal(uint256lhO6XLH, BigInt("0"))
		await expect(POWTokenT9gpRc.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhlwbEPG = await POWToken.new({from: accounts[4]});
		const uintNrwzZ3a = BigInt("938")
		const addressL08hOHz = accounts[3]
		const addresspbxY5L = accounts[1]
		const uintY8I2OnX = BigInt("1196")
		const uintW0PkPQy = BigInt("121")
		const addresseTJGWpd = accounts[0]
		const boolo9gTbZi = await POWTokenhlwbEPG.transferFrom.call(addresspbxY5L, addressL08hOHz, uintNrwzZ3a, {from: accounts[0]});
		const uint256OIRSd3s = await POWTokenhlwbEPG.notifyRewardAmount.call(uintY8I2OnX, {from: accounts[2]});
		await POWTokenhlwbEPG.whenNotPaused.call({from: accounts[4]});
		const addressolsq8p = await POWTokenhlwbEPG.inCaseTokensGetStuck.call(addresseTJGWpd, uintW0PkPQy, {from: accounts[4]});

		await expect(POWTokenhlwbEPG.transferFrom.call(addresspbxY5L, addressL08hOHz, uintNrwzZ3a, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhlwbEPG = await POWToken.new({from: accounts[4]});
		const uint256qBWEBYj = await POWTokenhlwbEPG.getHistoryWorkingRate.call({from: accounts[1]});
		await POWTokenhlwbEPG.whenNotPaused.call({from: accounts[4]});

		await expect(POWTokenhlwbEPG.getHistoryWorkingRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenT9gpRc = await POWToken.new({from: accounts[4]});
		const uint256sqSUnh = await POWTokenT9gpRc.getIncomeBTCInWeiPerSec.call({from: accounts[1]});
		const uint256vM506B = await POWTokenT9gpRc.lpStakingRewardRate.call({from: accounts[3]});

		await expect(POWTokenT9gpRc.getIncomeBTCInWeiPerSec.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenT9gpRc = await POWToken.new({from: accounts[4]});
		const uintrRqP6Xq = BigInt("954")
		const addressUrxXco0 = accounts[5]
		const uint256vM506B = await POWTokenT9gpRc.lpStakingRewardRate.call({from: accounts[3]});
		const addressMcP3rXJ = await POWTokenT9gpRc.mint.call(addressUrxXco0, uintrRqP6Xq, {from: accounts[3]});

		assert.equal(uint256vM506B, BigInt("0"))
		await expect(POWTokenT9gpRc.mint.call(addressUrxXco0, uintrRqP6Xq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenT9gpRc = await POWToken.new({from: accounts[4]});
		const uintIRkSIfX = BigInt("989")
		const addressZq0tTlX = accounts[4]
		const uint256vM506B = await POWTokenT9gpRc.lpStakingRewardRate.call({from: accounts[3]});
		const boolcKj6SJ = await POWTokenT9gpRc.approve.call(addressZq0tTlX, uintIRkSIfX, {from: accounts[0]});

		assert.equal(boolcKj6SJ, true)
		assert.equal(uint256vM506B, BigInt("0"))
	});

	it('test for POWToken', async () => {
		const POWTokenT4QHmFs = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDwThC4u = BigInt("1475")
		const addressDZXET8T = accounts[2]
		const uintWfeKlMD = BigInt("1236")
		const addressHDzQH3r = accounts[1]
		const uinth1oqhlL = BigInt("1701")
		const addressEoOYn7I = accounts[1]
		const addressELFfeyE = await POWTokenT4QHmFs.claimIncome.call(addressDZXET8T, uintDwThC4u, {from: accounts[0]});
		const uint256DEFCpV8 = await POWTokenT4QHmFs.stakingRewardRate.call({from: accounts[3]});
		const addressP3HZX5K = await POWTokenT4QHmFs.inCaseTokensGetStuck.call(addressHDzQH3r, uintWfeKlMD, {from: accounts[3]});
		const addressOBIa6W = await POWTokenT4QHmFs.claimIncome.call(addressEoOYn7I, uinth1oqhlL, {from: accounts[0]});
		await POWTokenT4QHmFs.pause.call({from: accounts[4]});
	});

	it('test for POWToken', async () => {
		const POWTokenT9gpRc = await POWToken.new({from: accounts[4]});
		const boolaHu0ow = await POWTokenT9gpRc.paused.call({from: accounts[1]});
		const uint256CBiUQ2s = await POWTokenT9gpRc.getHistoryWorkingRate.call({from: accounts[3]});
		const uint256vM506B = await POWTokenT9gpRc.lpStakingRewardRate.call({from: accounts[3]});

		assert.equal(boolaHu0ow, false)
		await expect(POWTokenT9gpRc.getHistoryWorkingRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenG0PgPAh = await POWToken.new({from: accounts[3]});
		const uintIwxC1Ry = BigInt("1461")
		const addressq1gEk3H = accounts[1]
		const addressQiJw16H = accounts[4]
		const boolvAy7Jev = await POWTokenG0PgPAh.transfer.call(addressq1gEk3H, uintIwxC1Ry, {from: accounts[3]});
		const addresshxpnhUy = await POWTokenG0PgPAh.setBtcParam.call(addressQiJw16H, {from: accounts[0]});
		const uint256Oa2ziF = await POWTokenG0PgPAh.getHistoryWorkingRate.call({from: accounts[1]});

		await expect(POWTokenG0PgPAh.transfer.call(addressq1gEk3H, uintIwxC1Ry, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})