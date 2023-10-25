const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3fVmocXO = await YRX3.new({from: accounts[1]});
		const addressv4wC9jk = accounts[0]
		const uint256jF93qhO = await YRX3fVmocXO.totalSupply.call({from: accounts[3]});
		const boolV6owSKG = await YRX3fVmocXO.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressbVHwkF = await YRX3fVmocXO.emergencyDrain.call(addressv4wC9jk, {from: accounts[3]});
		await YRX3fVmocXO.renounceOwnership.call({from: accounts[0]});

		assert.equal(boolV6owSKG, false)
		assert.equal(uint256jF93qhO, BigInt("0"))
		await expect(YRX3fVmocXO.emergencyDrain.call(addressv4wC9jk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3BTXoFYu = await YRX3.new({from: accounts[3]});
		const addresscC60A4q = accounts[1]
		await YRX3BTXoFYu.exit.call({from: accounts[5]});
		const addressXY0U3ge = await YRX3BTXoFYu.updateReward.call(addresscC60A4q, {from: accounts[0]});
		const uint256ZVpODuj = await YRX3BTXoFYu.totalSupply.call({from: accounts[0]});
		await YRX3BTXoFYu.checkStart.call({from: accounts[3]});

		await expect(YRX3BTXoFYu.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3kdLHRO1 = await YRX3.new({from: accounts[4]});
		const addressqzpNiC = accounts[2]
		const uintE1kvl67 = BigInt("360")
		await YRX3kdLHRO1.onlyRewardDistribution.call({from: accounts[1]});
		const addressQj30Stl = await YRX3kdLHRO1.setRewardDistribution.call(addressqzpNiC, {from: accounts[0]});
		const uint256hWAVRPc = await YRX3kdLHRO1.withdraw.call(uintE1kvl67, {from: accounts[5]});

		await expect(YRX3kdLHRO1.onlyRewardDistribution.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3OGxrl6x = await YRX3.new({from: accounts[1]});
		const uintWHXBYtn = BigInt("1484")
		const boolpxIQzU9 = await YRX3OGxrl6x.isOwner.call({from: accounts[3]});
		await YRX3OGxrl6x.renounceOwnership.call({from: accounts[2]});
		const uint2567KNBIU = await YRX3OGxrl6x.withdraw.call(uintWHXBYtn, {from: accounts[0]});
		await YRX3OGxrl6x.getReward.call({from: accounts[1]});

		assert.equal(boolpxIQzU9, false)
		await expect(YRX3OGxrl6x.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3cn6DuQR = await YRX3.new({from: accounts[3]});
		const boolisVRRJB = await YRX3cn6DuQR.isOwner.call({from: accounts[3]});
		await YRX3cn6DuQR.getReward.call({from: accounts[3]});

		assert.equal(boolisVRRJB, true)
		await expect(YRX3cn6DuQR.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3J3KgQX3 = await YRX3.new({from: accounts[1]});
		const uintF3lGBzs = BigInt("55")
		const uint256sRX7ToR = await YRX3J3KgQX3.totalSupply.call({from: accounts[0]});
		const uint256QuUlDQx = await YRX3J3KgQX3.withdraw.call(uintF3lGBzs, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256sRX7ToR, BigInt("0"))
		await expect(YRX3J3KgQX3.withdraw.call(uintF3lGBzs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3oAyn73u = await YRX3.new({from: accounts[3]});
		const uintyxZnKa = BigInt("1845")
		const addressqnr6ohz = accounts[4]
		const uint256RzxB0A0 = await YRX3oAyn73u.stake.call(uintyxZnKa, {from: accounts[3]});
		const uint256O7ZHJDI = await YRX3oAyn73u.balanceOf.call(addressqnr6ohz, {from: "0x0000000000000000000000000000000000000001"});
		await YRX3oAyn73u.getReward.call({from: accounts[1]});
		const uint256hnB724v = await YRX3oAyn73u.rewardPerToken.call({from: accounts[1]});

		await expect(YRX3oAyn73u.stake.call(uintyxZnKa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3cn6DuQR = await YRX3.new({from: accounts[3]});
		const addressaoMrClB = await YRX3cn6DuQR.owner.call({from: accounts[4]});
		await YRX3cn6DuQR.getReward.call({from: accounts[3]});
		await YRX3cn6DuQR.onlyRewardDistribution.call({from: accounts[0]});

		assert.equal(addressaoMrClB, 0xB72Fab85F45179Ca7f8A68D130390A37E5a7CD02)
		await expect(YRX3cn6DuQR.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3cn6DuQR = await YRX3.new({from: accounts[3]});
		await YRX3cn6DuQR.getReward.call({from: accounts[3]});
		await YRX3cn6DuQR.renounceOwnership.call({from: accounts[3]});

		await expect(YRX3cn6DuQR.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3c1fVF5E = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressFLc361n = accounts[2]
		const addressGB7QkxT = accounts[3]
		const addresskASj3Ys = await YRX3c1fVF5E.setRewardDistribution.call(addressFLc361n, {from: accounts[1]});
		const uint256h3QFImV = await YRX3c1fVF5E.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressXAaU4ZE = await YRX3c1fVF5E.emergencyDrain.call(addressGB7QkxT, {from: accounts[4]});
		await YRX3c1fVF5E.notifyRewardAmount.call({from: accounts[4]});
		await YRX3c1fVF5E.checkStart.call({from: accounts[2]});
	});

	it('test for YRX3', async () => {
		const YRX3cn6DuQR = await YRX3.new({from: accounts[3]});
		const addressETCA8ND = accounts[5]
		await YRX3cn6DuQR.getReward.call({from: accounts[3]});
		const addressjdrulky = await YRX3cn6DuQR.transferOwnership.call(addressETCA8ND, {from: accounts[3]});

		await expect(YRX3cn6DuQR.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3cn6DuQR = await YRX3.new({from: accounts[3]});
		const addressgQe5WHH = "0x0000000000000000000000000000000000000001"
		await YRX3cn6DuQR.getReward.call({from: accounts[3]});
		const addressbkuHa1P = await YRX3cn6DuQR.setRewardDistribution.call(addressgQe5WHH, {from: accounts[3]});

		await expect(YRX3cn6DuQR.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})