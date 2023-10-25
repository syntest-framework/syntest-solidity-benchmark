const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3zrMWaE5 = await YRX3.new({from: accounts[3]});
		const addressx4u9mMv = accounts[2]
		const uintsuC2WUC = BigInt("820")
		const addressFD8Q0Un = accounts[2]
		const uint256ZuPjLsk = await YRX3zrMWaE5.earned.call(addressx4u9mMv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VdTs5s = await YRX3zrMWaE5.withdraw.call(uintsuC2WUC, {from: accounts[3]});
		const uint256fOtBUGr = await YRX3zrMWaE5.balanceOf.call(addressFD8Q0Un, {from: accounts[0]});
		const uint256YWTIyCs = await YRX3zrMWaE5.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ZuPjLsk, BigInt("0"))
		await expect(YRX3zrMWaE5.withdraw.call(uintsuC2WUC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3nkUd48G = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressYr3HziD = "0x0000000000000000000000000000000000000001"
		const addressMs00Li4 = accounts[3]
		await YRX3nkUd48G.checkNextEpoch.call({from: accounts[4]});
		const uint256pk4atjD = await YRX3nkUd48G.balanceOf.call(addressYr3HziD, {from: accounts[4]});
		const addressvjys0yS = await YRX3nkUd48G.toPayable.call(addressMs00Li4, {from: accounts[2]});
	});

	it('test for YRX3', async () => {
		const YRX3OxwVn1O = await YRX3.new({from: accounts[2]});
		await YRX3OxwVn1O.getReward.call({from: accounts[3]});
		const boolk92iguO = await YRX3OxwVn1O.isOwner.call({from: accounts[1]});
		await YRX3OxwVn1O.checkStart.call({from: accounts[5]});

		await expect(YRX3OxwVn1O.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3NWqqaLE = await YRX3.new({from: accounts[3]});
		const addressnZQOi5a = accounts[4]
		const uintrFDALwn = BigInt("1603")
		const addressLMOouE0 = accounts[4]
		await YRX3NWqqaLE.exit.call({from: accounts[0]});
		const addressuXHrpm5 = await YRX3NWqqaLE.setRewardDistribution.call(addressnZQOi5a, {from: accounts[1]});
		await YRX3NWqqaLE.onlyOwner.call({from: accounts[0]});
		await YRX3NWqqaLE.getReward.call({from: accounts[1]});
		const uint256DovEwGJ = await YRX3NWqqaLE.stake.call(uintrFDALwn, {from: accounts[5]});
		const addressIcdxsv8 = await YRX3NWqqaLE.transferOwnership.call(addressLMOouE0, {from: accounts[1]});

		await expect(YRX3NWqqaLE.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3JTtDycr = await YRX3.new({from: accounts[0]});
		const uintgeSucVW = BigInt("1153")
		const uint256ELZfC0 = await YRX3JTtDycr.stake.call(uintgeSucVW, {from: accounts[1]});
		await YRX3JTtDycr.checkStart.call({from: accounts[2]});
		await YRX3JTtDycr.getReward.call({from: accounts[5]});

		await expect(YRX3JTtDycr.stake.call(uintgeSucVW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3YV77wJ8 = await YRX3.new({from: accounts[2]});
		const addresstQdhoXu = accounts[3]
		const addressGX5wdq = accounts[1]
		const addressRnKTbnc = accounts[1]
		const addressfti8PQc = accounts[1]
		const addressmx0yYX5 = await YRX3YV77wJ8.transferOwnership.call(addresstQdhoXu, {from: accounts[3]});
		const addressO2d9AjN = await YRX3YV77wJ8.setRewardDistribution.call(addressGX5wdq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arjdjN = await YRX3YV77wJ8.earned.call(addressRnKTbnc, {from: accounts[5]});
		const addressUpdK9uj = await YRX3YV77wJ8.transferOwnership.call(addressfti8PQc, {from: accounts[3]});
		const uint256WV5CW6X = await YRX3YV77wJ8.lastTimeRewardApplicable.call({from: accounts[5]});

		await expect(YRX3YV77wJ8.transferOwnership.call(addresstQdhoXu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3qCBfP8 = await YRX3.new({from: accounts[4]});
		const addressKOoDOfw = accounts[5]
		const uintZvJ3ULG = BigInt("991")
		const uint256PktGwtP = await YRX3qCBfP8.balanceOf.call(addressKOoDOfw, {from: accounts[3]});
		await YRX3qCBfP8.notifyRewardAmount.call({from: accounts[3]});
		await YRX3qCBfP8.onlyOwner.call({from: accounts[1]});
		await YRX3qCBfP8.onlyOwner.call({from: accounts[4]});
		const uint256xfJuxB4 = await YRX3qCBfP8.stake.call(uintZvJ3ULG, {from: accounts[4]});
		const uint256OSEHOwy = await YRX3qCBfP8.lastTimeRewardApplicable.call({from: accounts[5]});

		assert.equal(uint256PktGwtP, BigInt("0"))
		await expect(YRX3qCBfP8.notifyRewardAmount.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3OxwVn1O = await YRX3.new({from: accounts[2]});
		await YRX3OxwVn1O.getReward.call({from: accounts[3]});
		const addressyAe05Vi = await YRX3OxwVn1O.owner.call({from: accounts[4]});
		const boolk92iguO = await YRX3OxwVn1O.isOwner.call({from: accounts[1]});
		await YRX3OxwVn1O.checkStart.call({from: accounts[5]});
		await YRX3OxwVn1O.onlyRewardDistribution.call({from: accounts[1]});
		await YRX3OxwVn1O.onlyRewardDistribution.call({from: accounts[4]});

		await expect(YRX3OxwVn1O.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3A0cgFEH = await YRX3.new({from: accounts[4]});
		const addressKz6abgh = accounts[5]
		const uinto3bRR8d = BigInt("1912")
		await YRX3A0cgFEH.renounceOwnership.call({from: accounts[4]});
		await YRX3A0cgFEH.getReward.call({from: accounts[4]});
		const addressJtd0sLu = await YRX3A0cgFEH.transferOwnership.call(addressKz6abgh, {from: "0x0000000000000000000000000000000000000001"});
		await YRX3A0cgFEH.renounceOwnership.call({from: accounts[0]});
		const uint256efMCcXA = await YRX3A0cgFEH.stake.call(uinto3bRR8d, {from: accounts[1]});
		await YRX3A0cgFEH.checkStart.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3A0cgFEH.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3IdYzMZJ = await YRX3.new({from: accounts[3]});
		const addressDJgpd1 = accounts[1]
		const uintsScAcMM = BigInt("374")
		await YRX3IdYzMZJ.getReward.call({from: accounts[0]});
		const uint256LwQpqyG = await YRX3IdYzMZJ.rewardPerToken.call({from: accounts[4]});
		const addressNEj6gDD = await YRX3IdYzMZJ.transferOwnership.call(addressDJgpd1, {from: accounts[3]});
		const uint256zSQq4z = await YRX3IdYzMZJ.stake.call(uintsScAcMM, {from: accounts[4]});

		await expect(YRX3IdYzMZJ.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3f6Fo1EL = await YRX3.new({from: accounts[2]});
		const address1FhsZ0 = accounts[1]
		const uintcXLCr2C = BigInt("850")
		const addressaSBEmOq = await YRX3f6Fo1EL.setRewardDistribution.call(address1FhsZ0, {from: accounts[2]});
		const boolXPRC0Tt = await YRX3f6Fo1EL.isOwner.call({from: accounts[2]});
		await YRX3f6Fo1EL.exit.call({from: accounts[1]});
		const uint256MD8oHcf = await YRX3f6Fo1EL.withdraw.call(uintcXLCr2C, {from: accounts[3]});
		const uint256LiU2Tc1 = await YRX3f6Fo1EL.rewardPerToken.call({from: accounts[3]});

		assert.equal(boolXPRC0Tt, true)
		await expect(YRX3f6Fo1EL.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})