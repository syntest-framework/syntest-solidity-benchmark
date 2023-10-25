const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardJ1hat95 = await SLTDETHlpReward.new({from: accounts[0]});
		const uintQA87aqI = BigInt("948")
//		await SLTDETHlpRewardJ1hat95.onlyOwner.call({from: accounts[0]});
//		const boolIBt4629 = await SLTDETHlpRewardJ1hat95.isOwner.call({from: accounts[1]});
//		const uint256VsmPhXI = await SLTDETHlpRewardJ1hat95.totalSupply.call({from: accounts[0]});
//		const uint256D1xgKDo = await SLTDETHlpRewardJ1hat95.stake.call(uintQA87aqI, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256UqvJVW = await SLTDETHlpRewardJ1hat95.totalSupply.call({from: accounts[4]});

		await expect(SLTDETHlpRewardJ1hat95.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardvx1jStq = await SLTDETHlpReward.new({from: accounts[5]});
		const address12mUy8 = accounts[2]
		const addressUaYidvl = accounts[4]
//		const addresshyEn4HN = await SLTDETHlpRewardvx1jStq.transferOwnership.call(address12mUy8, {from: accounts[2]});
//		await SLTDETHlpRewardvx1jStq.getReward.call({from: accounts[0]});
//		await SLTDETHlpRewardvx1jStq.checkStart.call({from: accounts[0]});
//		await SLTDETHlpRewardvx1jStq.getReward.call({from: accounts[3]});
//		const addressDuf9pVd = await SLTDETHlpRewardvx1jStq.transferOwnership.call(addressUaYidvl, {from: accounts[3]});

		await expect(SLTDETHlpRewardvx1jStq.transferOwnership.call(address12mUy8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardTVVAMD7 = await SLTDETHlpReward.new({from: accounts[3]});
		const uint97nQHU = BigInt("130")
		const uintVXqe86n = BigInt("1971")
		const uint256MxOB3R5 = await SLTDETHlpRewardTVVAMD7.notifyRewardAmount.call(uint97nQHU, {from: accounts[3]});
//		await SLTDETHlpRewardTVVAMD7.exit.call({from: accounts[3]});
//		await SLTDETHlpRewardTVVAMD7.renounceOwnership.call({from: accounts[0]});
//		await SLTDETHlpRewardTVVAMD7.renounceOwnership.call({from: accounts[3]});
//		const uint256RNiIEBy = await SLTDETHlpRewardTVVAMD7.stake.call(uintVXqe86n, {from: accounts[4]});

		await expect(SLTDETHlpRewardTVVAMD7.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardcuLS4D = await SLTDETHlpReward.new({from: accounts[0]});
		const uintFH3cRND = BigInt("2019")
//		await SLTDETHlpRewardcuLS4D.getReward.call({from: accounts[1]});
//		const uint256MLpYjYc = await SLTDETHlpRewardcuLS4D.withdraw.call(uintFH3cRND, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardcuLS4D.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardfmBCOg5 = await SLTDETHlpReward.new({from: accounts[2]});
		const uintv15JgY = BigInt("1617")
		const uintua1cFJ7 = BigInt("1518")
		const addressrKyGjJN = accounts[5]
//		const uint256IPGcaiA = await SLTDETHlpRewardfmBCOg5.notifyRewardAmount.call(uintv15JgY, {from: accounts[4]});
//		const uint256MynEyVl = await SLTDETHlpRewardfmBCOg5.notifyRewardAmount.call(uintua1cFJ7, {from: accounts[4]});
//		const uint256DVJcb5Z = await SLTDETHlpRewardfmBCOg5.balanceOf.call(addressrKyGjJN, {from: accounts[3]});

		await expect(SLTDETHlpRewardfmBCOg5.notifyRewardAmount.call(uintv15JgY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardcuLS4D = await SLTDETHlpReward.new({from: accounts[0]});
		const uintbMEaHs = BigInt("1770")
		const uintDy2ep7 = BigInt("2019")
//		const uint256LPIgrU = await SLTDETHlpRewardcuLS4D.stake.call(uintbMEaHs, {from: accounts[3]});
//		await SLTDETHlpRewardcuLS4D.getReward.call({from: accounts[1]});
//		const uint256MLpYjYc = await SLTDETHlpRewardcuLS4D.withdraw.call(uintDy2ep7, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardcuLS4D.stake.call(uintbMEaHs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardcuLS4D = await SLTDETHlpReward.new({from: accounts[0]});
		const uintho0WbsX = BigInt("2019")
		const addressFZ38jj9 = await SLTDETHlpRewardcuLS4D.owner.call({from: accounts[1]});
//		await SLTDETHlpRewardcuLS4D.getReward.call({from: accounts[1]});
//		const uint256MLpYjYc = await SLTDETHlpRewardcuLS4D.withdraw.call(uintho0WbsX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressFZ38jj9, 0xd83770eE8Aff4f80F010c7fA288D8573e558a250)
		await expect(SLTDETHlpRewardcuLS4D.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardaE5TjAg = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLQk7aBv = BigInt("1228")
		const uintkJrhVD1 = BigInt("322")
		const uint256DASVBfI = await SLTDETHlpRewardaE5TjAg.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256uD7l1Bh = await SLTDETHlpRewardaE5TjAg.lastTimeRewardApplicable.call({from: accounts[2]});
		await SLTDETHlpRewardaE5TjAg.getReward.call({from: accounts[1]});
		const uint256J2qMd2I = await SLTDETHlpRewardaE5TjAg.stake.call(uintLQk7aBv, {from: accounts[2]});
		const uint256YupcJZ = await SLTDETHlpRewardaE5TjAg.stake.call(uintkJrhVD1, {from: accounts[1]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardTVVAMD7 = await SLTDETHlpReward.new({from: accounts[3]});
		const uintKgqOrH = BigInt("130")
		const uintWK5sm7B = BigInt("1971")
		const uint256MxOB3R5 = await SLTDETHlpRewardTVVAMD7.notifyRewardAmount.call(uintKgqOrH, {from: accounts[3]});
//		await SLTDETHlpRewardTVVAMD7.renounceOwnership.call({from: accounts[3]});
//		const uint256RNiIEBy = await SLTDETHlpRewardTVVAMD7.stake.call(uintWK5sm7B, {from: accounts[4]});

		await expect(SLTDETHlpRewardTVVAMD7.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardTVVAMD7 = await SLTDETHlpReward.new({from: accounts[3]});
		const uintDzoW1u = BigInt("130")
		const addressmjYo2LB = accounts[0]
		const uintx6WIKIF = BigInt("1954")
		const uint256MxOB3R5 = await SLTDETHlpRewardTVVAMD7.notifyRewardAmount.call(uintDzoW1u, {from: accounts[3]});
//		const uint256rxpQPnP = await SLTDETHlpRewardTVVAMD7.remainingReward.call({from: accounts[3]});
//		await SLTDETHlpRewardTVVAMD7.renounceOwnership.call({from: accounts[3]});
//		const uint256E2iDI2f = await SLTDETHlpRewardTVVAMD7.balanceOf.call(addressmjYo2LB, {from: accounts[1]});
//		const uint256RNiIEBy = await SLTDETHlpRewardTVVAMD7.stake.call(uintx6WIKIF, {from: accounts[4]});

		await expect(SLTDETHlpRewardTVVAMD7.remainingReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardTVVAMD7 = await SLTDETHlpReward.new({from: accounts[3]});
		const uintxRFs61 = BigInt("130")
		const uintCHkycMJ = BigInt("1459")
		const uintbdBAoXO = BigInt("1971")
		const uint256MxOB3R5 = await SLTDETHlpRewardTVVAMD7.notifyRewardAmount.call(uintxRFs61, {from: accounts[3]});
		const uint256ZjrIyUa = await SLTDETHlpRewardTVVAMD7.setStartTime.call(uintCHkycMJ, {from: accounts[3]});
//		await SLTDETHlpRewardTVVAMD7.renounceOwnership.call({from: accounts[3]});
//		const uint256RNiIEBy = await SLTDETHlpRewardTVVAMD7.stake.call(uintbdBAoXO, {from: accounts[4]});

		await expect(SLTDETHlpRewardTVVAMD7.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardcuLS4D = await SLTDETHlpReward.new({from: accounts[0]});
		const addressmFpwuY4 = accounts[2]
//		await SLTDETHlpRewardcuLS4D.getReward.call({from: accounts[1]});
//		const addressb7wLnF = await SLTDETHlpRewardcuLS4D.setRewardDistribution.call(addressmFpwuY4, {from: accounts[0]});

		await expect(SLTDETHlpRewardcuLS4D.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardcuLS4D = await SLTDETHlpReward.new({from: accounts[0]});
		const addressHlUEZYM = accounts[2]
//		await SLTDETHlpRewardcuLS4D.getReward.call({from: accounts[1]});
//		const addressG3SD6T = await SLTDETHlpRewardcuLS4D.setStakeAddress.call(addressHlUEZYM, {from: accounts[0]});
//		const addressoVhiqwD = await SLTDETHlpRewardcuLS4D.owner.call({from: accounts[4]});

		await expect(SLTDETHlpRewardcuLS4D.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardcuLS4D = await SLTDETHlpReward.new({from: accounts[0]});
		const addressFICKQrX = accounts[0]
		const addresspj9nCXP = accounts[1]
		const addressS1i7N0o = await SLTDETHlpRewardcuLS4D.transferOwnership.call(addressFICKQrX, {from: accounts[0]});
//		await SLTDETHlpRewardcuLS4D.getReward.call({from: accounts[1]});
//		const addressgFzCota = await SLTDETHlpRewardcuLS4D.setStakeAddress.call(addresspj9nCXP, {from: accounts[0]});
//		const uint256i7guKxC = await SLTDETHlpRewardcuLS4D.totalSupply.call({from: accounts[2]});

		await expect(SLTDETHlpRewardcuLS4D.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})