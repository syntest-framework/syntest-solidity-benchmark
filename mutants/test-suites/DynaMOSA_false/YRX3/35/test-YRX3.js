const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3SCHcsAD = await YRX3.new({from: accounts[3]});
		const uintWLnDefY = BigInt("257")
		const addressgJ83SOT = accounts[2]
//		await YRX3SCHcsAD.getReward.call({from: accounts[2]});
//		const uint256Nr4QE8J = await YRX3SCHcsAD.withdraw.call(uintWLnDefY, {from: accounts[1]});
//		const addressHrCi2Z = await YRX3SCHcsAD.updateReward.call(addressgJ83SOT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3SCHcsAD.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3jN7QkI2 = await YRX3.new({from: accounts[4]});
		const uintZFrXlpP = BigInt("134")
		const uintXHUP96R = BigInt("894")
//		const uint256bt2gcnN = await YRX3jN7QkI2.stake.call(uintZFrXlpP, {from: accounts[0]});
//		const uint256MISHXOW = await YRX3jN7QkI2.stake.call(uintXHUP96R, {from: accounts[4]});
//		await YRX3jN7QkI2.onlyRewardDistribution.call({from: accounts[4]});

		await expect(YRX3jN7QkI2.stake.call(uintZFrXlpP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3qNYifI = await YRX3.new({from: accounts[4]});
		const uintMMXzXfG = BigInt("367")
//		await YRX3qNYifI.exit.call({from: accounts[2]});
//		await YRX3qNYifI.onlyRewardDistribution.call({from: accounts[2]});
//		const uint256hJEOfnl = await YRX3qNYifI.stake.call(uintMMXzXfG, {from: accounts[3]});
//		await YRX3qNYifI.renounceOwnership.call({from: accounts[2]});

		await expect(YRX3qNYifI.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3pFy5o8o = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqXn7owo = BigInt("1931")
		const addressGaUBywC = accounts[1]
		const addressOYJAoad = accounts[5]
		const uint256Rq4grea = await YRX3pFy5o8o.withdraw.call(uintqXn7owo, {from: accounts[4]});
		const addressf70yiWG = await YRX3pFy5o8o.emergencyDrain.call(addressGaUBywC, {from: accounts[3]});
		const addressEHa4sV9 = await YRX3pFy5o8o.transferOwnership.call(addressOYJAoad, {from: accounts[0]});
		const uint256L8N2vTi = await YRX3pFy5o8o.rewardPerToken.call({from: accounts[3]});
	});

	it('test for YRX3', async () => {
		const YRX33CC5B5 = await YRX3.new({from: accounts[3]});
		const addressSWtjuds = accounts[2]
		const addressBjYwwJ = accounts[1]
		const uintzDXCorP = BigInt("1236")
//		const addressKT9SLnd = await YRX33CC5B5.updateReward.call(addressSWtjuds, {from: accounts[4]});
//		const addressl4w6A9u = await YRX33CC5B5.toPayable.call(addressBjYwwJ, {from: accounts[5]});
//		await YRX33CC5B5.checkStart.call({from: accounts[0]});
//		const uint256ulGLqYT = await YRX33CC5B5.stake.call(uintzDXCorP, {from: accounts[2]});

		await expect(YRX33CC5B5.updateReward.call(addressSWtjuds, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3zw9919 = await YRX3.new({from: accounts[4]});
		const uintRGCHMeF = BigInt("1055")
		const addressPPCyWhp = accounts[4]
		const boolCs57KJ = await YRX3zw9919.isOwner.call({from: accounts[0]});
//		await YRX3zw9919.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256KaLxUoG = await YRX3zw9919.withdraw.call(uintRGCHMeF, {from: accounts[1]});
//		const addressqbIR0cL = await YRX3zw9919.updateReward.call(addressPPCyWhp, {from: accounts[3]});

		assert.equal(boolCs57KJ, false)
		await expect(YRX3zw9919.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX33CC5B5 = await YRX3.new({from: accounts[3]});
		const addressfdwgRFD = accounts[2]
		const addressWZ2ZXD = accounts[1]
		const uintYtkk18p = BigInt("1236")
//		await YRX33CC5B5.notifyRewardAmount.call({from: accounts[4]});
//		const addressKT9SLnd = await YRX33CC5B5.updateReward.call(addressfdwgRFD, {from: accounts[4]});
//		const addressl4w6A9u = await YRX33CC5B5.toPayable.call(addressWZ2ZXD, {from: accounts[5]});
//		await YRX33CC5B5.checkStart.call({from: accounts[0]});
//		const uint256ulGLqYT = await YRX33CC5B5.stake.call(uintYtkk18p, {from: accounts[2]});

		await expect(YRX33CC5B5.notifyRewardAmount.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3YzjYDYC = await YRX3.new({from: accounts[5]});
		const addressf84ZskS = accounts[4]
		const addressXBeXZvG = await YRX3YzjYDYC.setRewardDistribution.call(addressf84ZskS, {from: accounts[5]});
//		await YRX3YzjYDYC.renounceOwnership.call({from: accounts[4]});
//		await YRX3YzjYDYC.checkNextEpoch.call({from: accounts[1]});

		await expect(YRX3YzjYDYC.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3SCHcsAD = await YRX3.new({from: accounts[3]});
		const uintw0Zgo0r = BigInt("257")
		const addressoYkP0FR = accounts[0]
		const addressIzDM8zB = accounts[2]
//		await YRX3SCHcsAD.getReward.call({from: accounts[2]});
//		const addressBId333D = await YRX3SCHcsAD.owner.call({from: accounts[1]});
//		const uint256Nr4QE8J = await YRX3SCHcsAD.withdraw.call(uintw0Zgo0r, {from: accounts[1]});
//		const uint256Qk6acdR = await YRX3SCHcsAD.earned.call(addressoYkP0FR, {from: accounts[3]});
//		const addressHrCi2Z = await YRX3SCHcsAD.updateReward.call(addressIzDM8zB, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3SCHcsAD.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3SCHcsAD = await YRX3.new({from: accounts[3]});
		const addresswhoV5b4 = accounts[2]
		const uintWTwWCxA = BigInt("74")
//		await YRX3SCHcsAD.getReward.call({from: accounts[2]});
//		const boolK9My7nr = await YRX3SCHcsAD.isOwner.call({from: accounts[5]});
//		const uint256McRuFQn = await YRX3SCHcsAD.lastTimeRewardApplicable.call({from: accounts[1]});
//		const addressyGqotCk = await YRX3SCHcsAD.transferOwnership.call(addresswhoV5b4, {from: accounts[3]});
//		const uint256Fejdj1 = await YRX3SCHcsAD.withdraw.call(uintWTwWCxA, {from: accounts[3]});

		await expect(YRX3SCHcsAD.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})