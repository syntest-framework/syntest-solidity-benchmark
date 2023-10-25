const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingVzKA4Et = await SLTDStaking.new({from: accounts[4]});
		const address2JyWEd = accounts[2]
//		await SLTDStakingVzKA4Et.exit.call({from: accounts[4]});
//		await SLTDStakingVzKA4Et.onlyOwner.call({from: accounts[3]});
//		const addressFNcIKhR = await SLTDStakingVzKA4Et.transferOwnership.call(address2JyWEd, {from: accounts[1]});

		await expect(SLTDStakingVzKA4Et.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingBHuXqs = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressOKat2c = await SLTDStakingBHuXqs.owner.call({from: accounts[0]});
		const uint256qRX9STz = await SLTDStakingBHuXqs.lastTimeRewardApplicable.call({from: accounts[3]});
		const boolozTivnK = await SLTDStakingBHuXqs.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingZTbgwPE = await SLTDStaking.new({from: accounts[4]});
		const uintmmdmqKr = BigInt("849")
		const uintHINQvNx = BigInt("2003")
//		const uint256s7YwkRy = await SLTDStakingZTbgwPE.stake.call(uintmmdmqKr, {from: accounts[2]});
//		const uint256DcfLNGL = await SLTDStakingZTbgwPE.stake.call(uintHINQvNx, {from: accounts[2]});

		await expect(SLTDStakingZTbgwPE.stake.call(uintmmdmqKr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingfF25X4g = await SLTDStaking.new({from: accounts[3]});
		const uintH6pNqVX = BigInt("298")
//		const uint256qo1BKRD = await SLTDStakingfF25X4g.withdraw.call(uintH6pNqVX, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Wc4YTHd = await SLTDStakingfF25X4g.rewardPerToken.call({from: accounts[3]});

		await expect(SLTDStakingfF25X4g.withdraw.call(uintH6pNqVX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingVbQ3Efe = await SLTDStaking.new({from: accounts[2]});
		const addressYGgVtwc = accounts[4]
		const uintQISlx0 = BigInt("1891")
//		const addressBFgKAxT = await SLTDStakingVbQ3Efe.updateReward.call(addressYGgVtwc, {from: accounts[0]});
//		const uint256iKUt0Si = await SLTDStakingVbQ3Efe.stake.call(uintQISlx0, {from: accounts[5]});

		await expect(SLTDStakingVbQ3Efe.updateReward.call(addressYGgVtwc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingb6C4aYq = await SLTDStaking.new({from: accounts[5]});
		const addressjBITRkv = accounts[2]
		const uintoK0aLtq = BigInt("1612")
		const uint256FFbTMhf = await SLTDStakingb6C4aYq.totalSupply.call({from: accounts[2]});
		const boolr4sBU0G = await SLTDStakingb6C4aYq.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressvPnkBNJ = await SLTDStakingb6C4aYq.owner.call({from: accounts[4]});
//		const addressO9K7YnH = await SLTDStakingb6C4aYq.setRewardDistribution.call(addressjBITRkv, {from: accounts[3]});
//		const uint256rcSHjG = await SLTDStakingb6C4aYq.stake.call(uintoK0aLtq, {from: accounts[0]});

		assert.equal(addressvPnkBNJ, 0x18fE141800B1D504C5F660c8074252B5ca289205)
		assert.equal(boolr4sBU0G, false)
		assert.equal(uint256FFbTMhf, BigInt("0"))
		await expect(SLTDStakingb6C4aYq.setRewardDistribution.call(addressjBITRkv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingZTbgwPE = await SLTDStaking.new({from: accounts[4]});
		const uintZuoRhUb = BigInt("2003")
		const uint256xYrnaW6 = await SLTDStakingZTbgwPE.rewardPerToken.call({from: accounts[1]});
//		await SLTDStakingZTbgwPE.getReward.call({from: accounts[0]});
//		const uint256DcfLNGL = await SLTDStakingZTbgwPE.stake.call(uintZuoRhUb, {from: accounts[2]});

		assert.equal(uint256xYrnaW6, BigInt("0"))
		await expect(SLTDStakingZTbgwPE.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingZTbgwPE = await SLTDStaking.new({from: accounts[4]});
		const uintT3n0lW0 = BigInt("2018")
		const uintCFK1jhX = BigInt("2002")
//		const uint256SHaCRJs = await SLTDStakingZTbgwPE.notifyRewardAmount.call(uintT3n0lW0, {from: accounts[5]});
//		const uint256DcfLNGL = await SLTDStakingZTbgwPE.stake.call(uintCFK1jhX, {from: accounts[2]});

		await expect(SLTDStakingZTbgwPE.notifyRewardAmount.call(uintT3n0lW0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingfF25X4g = await SLTDStaking.new({from: accounts[3]});
		const addresshOfQWFs = accounts[2]
		const uintiXluagw = BigInt("1757")
		const uintU2XbsUG = BigInt("882")
//		await SLTDStakingfF25X4g.getReward.call({from: accounts[1]});
//		const addresseguio0G = await SLTDStakingfF25X4g.transferOwnership.call(addresshOfQWFs, {from: accounts[3]});
//		await SLTDStakingfF25X4g.exit.call({from: accounts[2]});
//		const uint256HvZyWZH = await SLTDStakingfF25X4g.withdraw.call(uintiXluagw, {from: accounts[0]});
//		const uint256VCUqqux = await SLTDStakingfF25X4g.withdraw.call(uintU2XbsUG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingfF25X4g.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingSysGhkz = await SLTDStaking.new({from: accounts[1]});
		const addresslvX2Yme = accounts[0]
		const addressNbGvmTI = accounts[4]
		const uintzk1BJRZ = BigInt("1587")
		const addressjBaUVP7 = await SLTDStakingSysGhkz.setRewardDistribution.call(addresslvX2Yme, {from: accounts[1]});
//		const addressq9SHvrT = await SLTDStakingSysGhkz.transferOwnership.call(addressNbGvmTI, {from: accounts[0]});
//		const uint256ImlFfSI = await SLTDStakingSysGhkz.stake.call(uintzk1BJRZ, {from: accounts[5]});
//		const addressZn9s26y = await SLTDStakingSysGhkz.owner.call({from: accounts[0]});

		await expect(SLTDStakingSysGhkz.transferOwnership.call(addressNbGvmTI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingfF25X4g = await SLTDStaking.new({from: accounts[3]});
//		await SLTDStakingfF25X4g.getReward.call({from: accounts[1]});
//		const uint256MzfjQwY = await SLTDStakingfF25X4g.lastTimeRewardApplicable.call({from: accounts[2]});
//		await SLTDStakingfF25X4g.renounceOwnership.call({from: accounts[3]});

		await expect(SLTDStakingfF25X4g.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})