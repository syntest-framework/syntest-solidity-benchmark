const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardbcWFL72 = await SLTDETHlpReward.new({from: accounts[4]});
		const addressfedTmk = accounts[0]
		const addressSdoVup5 = accounts[3]
//		const addressPADJ3gY = await SLTDETHlpRewardbcWFL72.transferOwnership.call(addressfedTmk, {from: accounts[1]});
//		await SLTDETHlpRewardbcWFL72.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256B65NfSc = await SLTDETHlpRewardbcWFL72.earned.call(addressSdoVup5, {from: accounts[2]});
//		await SLTDETHlpRewardbcWFL72.getReward.call({from: accounts[4]});
//		await SLTDETHlpRewardbcWFL72.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardbcWFL72.transferOwnership.call(addressfedTmk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardp4abW1E = await SLTDETHlpReward.new({from: accounts[3]});
		const addressXjwYnQK = accounts[4]
		const uintpYSNsz = BigInt("378")
//		const addressN7qKcWP = await SLTDETHlpRewardp4abW1E.updateReward.call(addressXjwYnQK, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256pQGKPdr = await SLTDETHlpRewardp4abW1E.totalSupply.call({from: accounts[4]});
//		const uint256LUVkZet = await SLTDETHlpRewardp4abW1E.withdraw.call(uintpYSNsz, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardp4abW1E.updateReward.call(addressXjwYnQK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward627PaA = await SLTDETHlpReward.new({from: accounts[5]});
		const uintgN8JIw = BigInt("1598")
//		const uint256LsmJB66 = await SLTDETHlpReward627PaA.stake.call(uintgN8JIw, {from: accounts[3]});
//		await SLTDETHlpReward627PaA.onlyRewardDistribution.call({from: accounts[1]});

		await expect(SLTDETHlpReward627PaA.stake.call(uintgN8JIw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardvq06r00 = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressPjhCLdJ = accounts[2]
		const uintnr4I3sQ = BigInt("470")
		const addressRKBjV8r = "0x0000000000000000000000000000000000000001"
		const uint256yv3LaV = await SLTDETHlpRewardvq06r00.earned.call(addressPjhCLdJ, {from: accounts[4]});
		const uint256u1UBToz = await SLTDETHlpRewardvq06r00.stake.call(uintnr4I3sQ, {from: accounts[0]});
		const addressrPBYMIG = await SLTDETHlpRewardvq06r00.transferOwnership.call(addressRKBjV8r, {from: accounts[0]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardAgHJhRd = await SLTDETHlpReward.new({from: accounts[4]});
		const uintVylBIHa = BigInt("731")
		const boolPC5yVo = await SLTDETHlpRewardAgHJhRd.isOwner.call({from: accounts[4]});
		const uint2562EScvn = await SLTDETHlpRewardAgHJhRd.rewardPerToken.call({from: accounts[3]});
//		const uint256StUa7Q = await SLTDETHlpRewardAgHJhRd.notifyRewardAmount.call(uintVylBIHa, {from: accounts[0]});
//		await SLTDETHlpRewardAgHJhRd.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolPC5yVo, true)
		assert.equal(uint2562EScvn, BigInt("0"))
		await expect(SLTDETHlpRewardAgHJhRd.notifyRewardAmount.call(uintVylBIHa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardd5F69Wa = await SLTDETHlpReward.new({from: accounts[2]});
		const uintDf4xkqI = BigInt("354")
		const addresscD7fn0T = accounts[0]
		const uinttBkDxdJ = BigInt("1427")
		const uintNTaf9GA = BigInt("1446")
//		const uint256emp4Ye = await SLTDETHlpRewardd5F69Wa.withdraw.call(uintDf4xkqI, {from: accounts[3]});
//		await SLTDETHlpRewardd5F69Wa.onlyRewardDistribution.call({from: accounts[4]});
//		const uint256mO3Qbe = await SLTDETHlpRewardd5F69Wa.balanceOf.call(addresscD7fn0T, {from: accounts[2]});
//		const uint256AkDkRAa = await SLTDETHlpRewardd5F69Wa.withdraw.call(uinttBkDxdJ, {from: accounts[1]});
//		const uint256cF33mCb = await SLTDETHlpRewardd5F69Wa.stake.call(uintNTaf9GA, {from: accounts[1]});
//		await SLTDETHlpRewardd5F69Wa.checkStart.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardd5F69Wa.withdraw.call(uintDf4xkqI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward627PaA = await SLTDETHlpReward.new({from: accounts[5]});
		const uintXr3E330 = BigInt("1598")
		const uintbikdwx8 = BigInt("1163")
//		await SLTDETHlpReward627PaA.getReward.call({from: accounts[0]});
//		const uint256LsmJB66 = await SLTDETHlpReward627PaA.stake.call(uintXr3E330, {from: accounts[3]});
//		const uint256or7sX3h = await SLTDETHlpReward627PaA.withdraw.call(uintbikdwx8, {from: accounts[4]});
//		await SLTDETHlpReward627PaA.onlyRewardDistribution.call({from: accounts[1]});

		await expect(SLTDETHlpReward627PaA.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardQq8pS1E = await SLTDETHlpReward.new({from: accounts[3]});
		const uintaOyfNrQ = BigInt("87")
		const addressGUCB1Qc = accounts[0]
//		await SLTDETHlpRewardQq8pS1E.exit.call({from: accounts[1]});
//		const uint256RSW26bk = await SLTDETHlpRewardQq8pS1E.stake.call(uintaOyfNrQ, {from: accounts[5]});
//		const addressgGxsaWk = await SLTDETHlpRewardQq8pS1E.setRewardDistribution.call(addressGUCB1Qc, {from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardQq8pS1E.renounceOwnership.call({from: accounts[0]});

		await expect(SLTDETHlpRewardQq8pS1E.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward627PaA = await SLTDETHlpReward.new({from: accounts[5]});
		const addressxQvjDn = accounts[0]
		const uintsI02KVa = BigInt("1588")
//		const uint256ZSvJecJ = await SLTDETHlpReward627PaA.remainingReward.call({from: accounts[0]});
//		const uint256khkc7G = await SLTDETHlpReward627PaA.balanceOf.call(addressxQvjDn, {from: accounts[2]});
//		const uint256LsmJB66 = await SLTDETHlpReward627PaA.stake.call(uintsI02KVa, {from: accounts[3]});

		await expect(SLTDETHlpReward627PaA.remainingReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardmLS7JO8 = await SLTDETHlpReward.new({from: accounts[0]});
		const addressp0b5Xp1 = accounts[5]
		const uint256PQF37vZ = await SLTDETHlpRewardmLS7JO8.rewardPerToken.call({from: accounts[0]});
		const addressFKup1F = await SLTDETHlpRewardmLS7JO8.owner.call({from: accounts[1]});
//		const addressZA8ARdD = await SLTDETHlpRewardmLS7JO8.transferOwnership.call(addressp0b5Xp1, {from: accounts[4]});
//		await SLTDETHlpRewardmLS7JO8.getReward.call({from: accounts[0]});
//		const uint256Ri4xLNM = await SLTDETHlpRewardmLS7JO8.rewardPerToken.call({from: accounts[0]});
//		const uint256cT43g7J = await SLTDETHlpRewardmLS7JO8.remainingReward.call({from: accounts[4]});

		assert.equal(addressFKup1F, 0x49Eb12Bb47ebBeF18bC0043a41D3EE06d003c758)
		assert.equal(uint256PQF37vZ, BigInt("0"))
		await expect(SLTDETHlpRewardmLS7JO8.transferOwnership.call(addressp0b5Xp1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward627PaA = await SLTDETHlpReward.new({from: accounts[5]});
		const uinthCE3F81 = BigInt("178")
		const uintc4VsOin = BigInt("1606")
		const addresszJU28T = accounts[0]
		const uint256gCLZclx = await SLTDETHlpReward627PaA.setStartTime.call(uinthCE3F81, {from: accounts[5]});
//		const uint256LsmJB66 = await SLTDETHlpReward627PaA.stake.call(uintc4VsOin, {from: accounts[3]});
//		const uint256ojitvi1 = await SLTDETHlpReward627PaA.earned.call(addresszJU28T, {from: accounts[1]});

		await expect(SLTDETHlpReward627PaA.stake.call(uintc4VsOin, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward627PaA = await SLTDETHlpReward.new({from: accounts[5]});
		const addressaZEYXhn = accounts[5]
		const uinttuoiaNe = BigInt("318")
		const addressFriwaBd = "0x0000000000000000000000000000000000000001"
		const addressblRPRtN = await SLTDETHlpReward627PaA.setRewardDistribution.call(addressaZEYXhn, {from: accounts[5]});
//		const uint256UakuBsh = await SLTDETHlpReward627PaA.notifyRewardAmount.call(uinttuoiaNe, {from: accounts[4]});
//		await SLTDETHlpReward627PaA.exit.call({from: accounts[0]});
//		await SLTDETHlpReward627PaA.getReward.call({from: accounts[0]});
//		const addressSZJPfJI = await SLTDETHlpReward627PaA.updateReward.call(addressFriwaBd, {from: accounts[2]});

		await expect(SLTDETHlpReward627PaA.notifyRewardAmount.call(uinttuoiaNe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewarddPlUtt = await SLTDETHlpReward.new({from: accounts[2]});
		const addressLyCPGyR = accounts[4]
		const addressv5acPwI = await SLTDETHlpRewarddPlUtt.setStakeAddress.call(addressLyCPGyR, {from: accounts[2]});
		const uint256INk62Vn = await SLTDETHlpRewarddPlUtt.totalSupply.call({from: accounts[4]});

		assert.equal(uint256INk62Vn, BigInt("0"))
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward627PaA = await SLTDETHlpReward.new({from: accounts[5]});
		const uintR50xR2z = BigInt("600")
		const uintuIRnmCI = BigInt("1598")
		const uint256SlsC5xh = await SLTDETHlpReward627PaA.notifyRewardAmount.call(uintR50xR2z, {from: accounts[5]});
//		const uint256LsmJB66 = await SLTDETHlpReward627PaA.stake.call(uintuIRnmCI, {from: accounts[3]});

		await expect(SLTDETHlpReward627PaA.stake.call(uintuIRnmCI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward627PaA = await SLTDETHlpReward.new({from: accounts[5]});
//		await SLTDETHlpReward627PaA.getReward.call({from: accounts[0]});
//		await SLTDETHlpReward627PaA.renounceOwnership.call({from: accounts[5]});

		await expect(SLTDETHlpReward627PaA.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward627PaA = await SLTDETHlpReward.new({from: accounts[5]});
		const addresshrdK00q = accounts[3]
		const addressJmhi9dD = accounts[0]
		const uint256pPQ8woA = await SLTDETHlpReward627PaA.balanceOf.call(addresshrdK00q, {from: accounts[4]});
//		await SLTDETHlpReward627PaA.getReward.call({from: accounts[3]});
//		await SLTDETHlpReward627PaA.getReward.call({from: accounts[0]});
//		const addressP3K0Yp4 = await SLTDETHlpReward627PaA.transferOwnership.call(addressJmhi9dD, {from: accounts[5]});

		assert.equal(uint256pPQ8woA, BigInt("0"))
		await expect(SLTDETHlpReward627PaA.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})