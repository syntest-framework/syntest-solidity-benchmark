const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Qfl3Z5k = await PRDZstakingV2.new({from: accounts[0]});
		const addressTk5ub3 = accounts[1]
		const uintBCC7Px5 = BigInt("1818")
		const uintnYOVov8 = await PRDZstakingV2Qfl3Z5k.getStakingScore.call(addressTk5ub3, {from: accounts[1]});
//		const uintNDITDVH = await PRDZstakingV2Qfl3Z5k.stake.call(uintBCC7Px5, {from: accounts[4]});
//		const uintBf44w1r = await PRDZstakingV2Qfl3Z5k.getTotalClaimed.call({from: accounts[4]});
//		const uintHPkgBb = await PRDZstakingV2Qfl3Z5k.getTotalUnStaked.call({from: accounts[4]});

		assert.equal(uintnYOVov8, BigInt("0"))
		await expect(PRDZstakingV2Qfl3Z5k.stake.call(uintBCC7Px5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2cmAKtuC = await PRDZstakingV2.new({from: accounts[0]});
		const addressAH53Arv = "0x0000000000000000000000000000000000000001"
		const uintAZg8cAV = await PRDZstakingV2cmAKtuC.getTotalFeeCollected.call({from: accounts[0]});
//		const addressZusIjWD = await PRDZstakingV2cmAKtuC.transferOwnership.call(addressAH53Arv, {from: "0x0000000000000000000000000000000000000001"});
//		const uintZqY1Nm = await PRDZstakingV2cmAKtuC.getTotalClaimed.call({from: accounts[3]});

		assert.equal(uintAZg8cAV, BigInt("0"))
		await expect(PRDZstakingV2cmAKtuC.transferOwnership.call(addressAH53Arv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2bYm9n9p = await PRDZstakingV2.new({from: accounts[4]});
		const addresspoPzFpX = accounts[0]
		const addressVf1ZyRL = "0x0000000000000000000000000000000000000001"
		const uintZGUf0GQ = BigInt("370")
		const uintHDIiSyw = await PRDZstakingV2bYm9n9p.getTotalUnStaked.call({from: accounts[5]});
//		const addressKHSods1 = await PRDZstakingV2bYm9n9p.transferOwnership.call(addresspoPzFpX, {from: accounts[2]});
//		await PRDZstakingV2bYm9n9p.deposit.call({from: accounts[1]});
//		const uintSG4mCpb = await PRDZstakingV2bYm9n9p.getPendingReward.call(addressVf1ZyRL, {from: accounts[2]});
//		const uintUwpQlO6 = await PRDZstakingV2bYm9n9p.stake.call(uintZGUf0GQ, {from: accounts[2]});

		assert.equal(uintHDIiSyw, BigInt("0"))
		await expect(PRDZstakingV2bYm9n9p.transferOwnership.call(addresspoPzFpX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2cF98Dsi = await PRDZstakingV2.new({from: accounts[3]});
		const addresskTjb4I = accounts[4]
		const uintwuUGBUF = await PRDZstakingV2cF98Dsi.getTotalUnStaked.call({from: accounts[2]});
//		await PRDZstakingV2cF98Dsi.claimReward.call({from: accounts[1]});
//		const addresseR3RXdG = await PRDZstakingV2cF98Dsi.transferOwnership.call(addresskTjb4I, {from: accounts[3]});

		assert.equal(uintwuUGBUF, BigInt("0"))
		await expect(PRDZstakingV2cF98Dsi.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2siD63XR = await PRDZstakingV2.new({from: accounts[1]});
		const addressCCc2ZiO = accounts[3]
//		await PRDZstakingV2siD63XR.claimScoreEth.call({from: accounts[2]});
//		const uint2igclv = await PRDZstakingV2siD63XR.getTotalClaimed.call({from: accounts[1]});
//		const uintnyo88Ih = await PRDZstakingV2siD63XR.getScoreEth.call(addressCCc2ZiO, {from: "0x0000000000000000000000000000000000000001"});
//		await PRDZstakingV2siD63XR.claimScoreEth.call({from: accounts[3]});

		await expect(PRDZstakingV2siD63XR.claimScoreEth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2VoLzIbe = await PRDZstakingV2.new({from: accounts[3]});
		const uintE6aVkWI = BigInt("556")
		const uintxb9ZTLU = await PRDZstakingV2VoLzIbe.getTotalClaimed.call({from: accounts[4]});
//		const uintclQLzaf = await PRDZstakingV2VoLzIbe.unstake.call(uintE6aVkWI, {from: accounts[2]});
//		const uintcLv42LP = await PRDZstakingV2VoLzIbe.getTotalClaimed.call({from: accounts[4]});

		assert.equal(uintxb9ZTLU, BigInt("0"))
		await expect(PRDZstakingV2VoLzIbe.unstake.call(uintE6aVkWI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2aKOhrb = await PRDZstakingV2.new({from: accounts[3]});
		const addressXRyJIxN = accounts[0]
		const uintPAbfHq7 = await PRDZstakingV2aKOhrb.getScoreEth.call(addressXRyJIxN, {from: accounts[3]});
		const uintRHgI7D = await PRDZstakingV2aKOhrb.getTotalUnStaked.call({from: accounts[3]});
//		await PRDZstakingV2aKOhrb.onlyOwner.call({from: accounts[0]});
//		const uint7skuhH = await PRDZstakingV2aKOhrb.getTotalFeeCollected.call({from: accounts[0]});
//		await PRDZstakingV2aKOhrb.claimScoreEth.call({from: accounts[1]});

		assert.equal(uintPAbfHq7, BigInt("0"))
		assert.equal(uintRHgI7D, BigInt("0"))
		await expect(PRDZstakingV2aKOhrb.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2cmAKtuC = await PRDZstakingV2.new({from: accounts[0]});
		const addressys7nKS = "0x0000000000000000000000000000000000000000"
		const uintAZg8cAV = await PRDZstakingV2cmAKtuC.getTotalFeeCollected.call({from: accounts[0]});
		const uintsohIksE = await PRDZstakingV2cmAKtuC.getNumberOfHolders.call({from: accounts[2]});
//		const addressZusIjWD = await PRDZstakingV2cmAKtuC.transferOwnership.call(addressys7nKS, {from: "0x0000000000000000000000000000000000000001"});
//		const uintpVRaOZq = await PRDZstakingV2cmAKtuC.getTotalUnStaked.call({from: accounts[5]});
//		const uintZqY1Nm = await PRDZstakingV2cmAKtuC.getTotalClaimed.call({from: accounts[3]});

		assert.equal(uintAZg8cAV, BigInt("0"))
		assert.equal(uintsohIksE, BigInt("0"))
		await expect(PRDZstakingV2cmAKtuC.transferOwnership.call(addressys7nKS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Qfl3Z5k = await PRDZstakingV2.new({from: accounts[0]});
		const addressrsaFLQ3 = accounts[1]
		const uintomcCgVh = BigInt("830")
		const uintZxkGn92 = BigInt("387")
		const uintnYOVov8 = await PRDZstakingV2Qfl3Z5k.getStakingScore.call(addressrsaFLQ3, {from: accounts[1]});
		const uintK8JsBQW = await PRDZstakingV2Qfl3Z5k.updateOffer.call(uintZxkGn92, uintomcCgVh, {from: accounts[0]});
		const uintBf44w1r = await PRDZstakingV2Qfl3Z5k.getTotalClaimed.call({from: accounts[4]});

		assert.equal(uintBf44w1r, BigInt("0"))
		assert.equal(uintnYOVov8, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2bfDpHN2 = await PRDZstakingV2.new({from: accounts[3]});
		const addresspdkagSI = accounts[1]
		const addressmms6f4k = accounts[2]
		const uintYKdwe2 = await PRDZstakingV2bfDpHN2.getTotalClaimed.call({from: accounts[4]});
//		await PRDZstakingV2bfDpHN2.deposit.call({from: accounts[2]});
//		const uintr60vebQ = await PRDZstakingV2bfDpHN2.getPendingReward.call(addresspdkagSI, {from: accounts[3]});
//		const uintkhVKrxn = await PRDZstakingV2bfDpHN2.getTotalStaked.call({from: accounts[3]});
//		const uintbRMSixq = await PRDZstakingV2bfDpHN2.getTotalUnStaked.call({from: accounts[2]});
//		const addressXrPwD5i = await PRDZstakingV2bfDpHN2.transferOwnership.call(addressmms6f4k, {from: accounts[0]});

		assert.equal(uintYKdwe2, BigInt("0"))
		await expect(PRDZstakingV2bfDpHN2.deposit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ebwWRyE = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressu3LfClM = accounts[4]
		const uintbkFgy8 = BigInt("525")
		const addressFx6b8FT = accounts[0]
		const uintI6D9BS7 = await PRDZstakingV2ebwWRyE.getStakingScore.call(addressu3LfClM, {from: accounts[3]});
		await PRDZstakingV2ebwWRyE.claimReward.call({from: accounts[4]});
		const uintUUj62MA = await PRDZstakingV2ebwWRyE.unstake.call(uintbkFgy8, {from: accounts[2]});
		const uintQ6f31n = await PRDZstakingV2ebwWRyE.getTotalFeeCollected.call({from: accounts[1]});
		const uintGorR4dB = await PRDZstakingV2ebwWRyE.getNumberOfHolders.call({from: accounts[2]});
		const uintKVE4H1C = await PRDZstakingV2ebwWRyE.getPendingReward.call(addressFx6b8FT, {from: accounts[4]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Qfl3Z5k = await PRDZstakingV2.new({from: accounts[0]});
		const addressXQWPa10 = accounts[1]
		const uintO6tEgXa = BigInt("1041")
		const uintnYOVov8 = await PRDZstakingV2Qfl3Z5k.getStakingScore.call(addressXQWPa10, {from: accounts[1]});
		const uintY3qzdx9 = await PRDZstakingV2Qfl3Z5k.updateScoreEth.call(uintO6tEgXa, {from: accounts[0]});

		assert.equal(uintnYOVov8, BigInt("0"))
	});
})