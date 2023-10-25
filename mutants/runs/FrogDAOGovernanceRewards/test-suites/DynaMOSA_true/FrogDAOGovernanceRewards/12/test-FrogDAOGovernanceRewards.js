const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressLHaNObs = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsoBjek4M = await FrogDAOGovernanceRewards.new(addressLHaNObs, {from: accounts[3]});
		const addressp15zIUr = "0x0000000000000000000000000000000000000001"
		await FrogDAOGovernanceRewardsoBjek4M.renounceDevAddr.call({from: accounts[5]});
		await FrogDAOGovernanceRewardsoBjek4M.exit.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsoBjek4M.renounceDevAddr.call({from: accounts[5]});
		const addressGDMEa98 = await FrogDAOGovernanceRewardsoBjek4M.updateReward.call(addressp15zIUr, {from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsoBjek4M.renounceDevAddr.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const address8TF6yH = accounts[1]
		const FrogDAOGovernanceRewardsWlvjqZC = await FrogDAOGovernanceRewards.new(address8TF6yH, {from: accounts[0]});
		const uinto1LTciU = BigInt("644")
		const uint256v3ffCea = await FrogDAOGovernanceRewardsWlvjqZC.stake.call(uinto1LTciU, {from: accounts[2]});
		const uint256kIEt1Vi = await FrogDAOGovernanceRewardsWlvjqZC.rewardPerToken.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsWlvjqZC.stake.call(uinto1LTciU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressIrBXikf = accounts[4]
		const FrogDAOGovernanceRewardsILYzRLE = await FrogDAOGovernanceRewards.new(addressIrBXikf, {from: accounts[1]});
		const uintPNctYPD = BigInt("456")
		const address8OF45A = "0x0000000000000000000000000000000000000001"
		const uintIoySUOr = BigInt("848")
		await FrogDAOGovernanceRewardsILYzRLE.checkhalve.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsILYzRLE.getReward.call({from: accounts[2]});
		const uint256r8ThSI = await FrogDAOGovernanceRewardsILYzRLE.stake.call(uintPNctYPD, {from: accounts[2]});
		await FrogDAOGovernanceRewardsILYzRLE.getReward.call({from: accounts[4]});
		const addressVHetWmm = await FrogDAOGovernanceRewardsILYzRLE.transferDevAddr.call(address8OF45A, {from: accounts[2]});
		const uint256QA8hLFH = await FrogDAOGovernanceRewardsILYzRLE.stake.call(uintIoySUOr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardsILYzRLE.checkhalve.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressdGCQJnW = accounts[4]
		const FrogDAOGovernanceRewardsFgthu8U = await FrogDAOGovernanceRewards.new(addressdGCQJnW, {from: accounts[3]});
		const uints4lILxq = BigInt("1688")
		const uintZH9d11p = BigInt("245")
		const uint256F7eNRbo = await FrogDAOGovernanceRewardsFgthu8U.notifyRewardAmount.call(uints4lILxq, {from: accounts[5]});
		await FrogDAOGovernanceRewardsFgthu8U.exit.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsFgthu8U.renounceDevAddr.call({from: accounts[2]});
		const uint256kJEBFXE = await FrogDAOGovernanceRewardsFgthu8U.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256QNxxPJ9 = await FrogDAOGovernanceRewardsFgthu8U.devFundAvailable.call({from: accounts[1]});
		const uint256SvT4Q16 = await FrogDAOGovernanceRewardsFgthu8U.stake.call(uintZH9d11p, {from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsFgthu8U.notifyRewardAmount.call(uints4lILxq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressEqexI5 = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsSCwn4Ey = await FrogDAOGovernanceRewards.new(addressEqexI5, {from: accounts[1]});
		const uintYBwp7xP = BigInt("1940")
		const uintP2IRB3H = BigInt("1313")
		const addressce0x9m8 = accounts[1]
		const uint256wxtDZ1i = await FrogDAOGovernanceRewardsSCwn4Ey.withdraw.call(uintYBwp7xP, {from: accounts[1]});
		await FrogDAOGovernanceRewardsSCwn4Ey.getReward.call({from: accounts[4]});
		const uint256oHiugNH = await FrogDAOGovernanceRewardsSCwn4Ey.devFundAvailable.call({from: accounts[1]});
		const uint256Y9BzfzZ = await FrogDAOGovernanceRewardsSCwn4Ey.stake.call(uintP2IRB3H, {from: accounts[5]});
		const uint256pfM4met = await FrogDAOGovernanceRewardsSCwn4Ey.earned.call(addressce0x9m8, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsSCwn4Ey.withdraw.call(uintYBwp7xP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressdsgdrkn = accounts[1]
		const FrogDAOGovernanceRewardsaJfT59 = await FrogDAOGovernanceRewards.new(addressdsgdrkn, {from: accounts[2]});
		const addressgGg2piD = "0x0000000000000000000000000000000000000001"
		const uint256KtSeHbG = await FrogDAOGovernanceRewardsaJfT59.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256UfRA5vM = await FrogDAOGovernanceRewardsaJfT59.earned.call(addressgGg2piD, {from: accounts[5]});
		const uint256LRgJBAo = await FrogDAOGovernanceRewardsaJfT59.devFundAvailable.call({from: accounts[1]});

		assert.equal(uint256KtSeHbG, BigInt("0"))
		assert.equal(uint256LRgJBAo, BigInt("0"))
		assert.equal(uint256UfRA5vM, BigInt("0"))
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressMKnzLPS = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsiXJ6tie = await FrogDAOGovernanceRewards.new(addressMKnzLPS, {from: accounts[3]});
		const uintOpUZd6i = BigInt("1737")
		const uintUQSjiys = BigInt("1852")
		const uint256ECpW1H = await FrogDAOGovernanceRewardsiXJ6tie.rewardPerToken.call({from: accounts[0]});
		const uint256WoBYQB9 = await FrogDAOGovernanceRewardsiXJ6tie.lastTimeRewardApplicable.call({from: accounts[0]});
		await FrogDAOGovernanceRewardsiXJ6tie.exit.call({from: accounts[4]});
		const uint256F9MqBlP = await FrogDAOGovernanceRewardsiXJ6tie.withdrawDevFund.call(uintOpUZd6i, {from: accounts[0]});
		const uint256Es0KY41 = await FrogDAOGovernanceRewardsiXJ6tie.withdraw.call(uintUQSjiys, {from: accounts[1]});

		assert.equal(uint256ECpW1H, BigInt("0"))
		assert.equal(uint256WoBYQB9, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsiXJ6tie.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresstD00pu = accounts[4]
		const FrogDAOGovernanceRewardsth4GLpO = await FrogDAOGovernanceRewards.new(addresstD00pu, {from: accounts[0]});
		const uinturSnr8J = BigInt("782")
		const uint256awxwixt = await FrogDAOGovernanceRewardsth4GLpO.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256e11EBOj = await FrogDAOGovernanceRewardsth4GLpO.notifyRewardAmount.call(uinturSnr8J, {from: accounts[0]});

		assert.equal(uint256awxwixt, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsth4GLpO.notifyRewardAmount.call(uinturSnr8J, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressNjIRG4h = accounts[3]
		const FrogDAOGovernanceRewardsdrfWryi = await FrogDAOGovernanceRewards.new(addressNjIRG4h, {from: accounts[4]});
		const uinth91h9Nu = BigInt("25")
		const uintUPyix8p = BigInt("1636")
		const addressCIo5ZV7 = accounts[3]
		const addresstGRXwn = accounts[3]
		const uint256EBmr8mf = await FrogDAOGovernanceRewardsdrfWryi.withdrawDevFund.call(uinth91h9Nu, {from: accounts[0]});
		const uint256vG0sAkC = await FrogDAOGovernanceRewardsdrfWryi.notifyRewardAmount.call(uintUPyix8p, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hj5nuMM = await FrogDAOGovernanceRewardsdrfWryi.earned.call(addressCIo5ZV7, {from: accounts[0]});
		const addressxpaFeDS = await FrogDAOGovernanceRewardsdrfWryi.updateReward.call(addresstGRXwn, {from: accounts[5]});

		await expect(FrogDAOGovernanceRewardsdrfWryi.withdrawDevFund.call(uinth91h9Nu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressPTUXCHx = accounts[5]
		const FrogDAOGovernanceRewardsKGBVCUK = await FrogDAOGovernanceRewards.new(addressPTUXCHx, {from: "0x0000000000000000000000000000000000000001"});
		const uint1DwQBc = BigInt("1887")
		const uint256WhMxlAl = await FrogDAOGovernanceRewardsKGBVCUK.notifyRewardAmount.call(uint1DwQBc, {from: accounts[5]});
		const uint256tXAx1W1 = await FrogDAOGovernanceRewardsKGBVCUK.devFundAvailable.call({from: accounts[2]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressN6mcVu5 = accounts[1]
		const FrogDAOGovernanceRewardsg6r4vfm = await FrogDAOGovernanceRewards.new(addressN6mcVu5, {from: accounts[5]});
		const uint9QwDHf = BigInt("1311")
		const uinth09vstu = BigInt("34")
		const uinteGTiLrh = BigInt("1442")
		const uintwMhd92j = BigInt("1236")
		const uint256cJFOXde = await FrogDAOGovernanceRewardsg6r4vfm.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256H2wqDMz = await FrogDAOGovernanceRewardsg6r4vfm.withdrawDevFund.call(uint9QwDHf, {from: accounts[1]});
		const uint256V9SvSRY = await FrogDAOGovernanceRewardsg6r4vfm.stake.call(uinth09vstu, {from: accounts[1]});
		const uint256LF41Db = await FrogDAOGovernanceRewardsg6r4vfm.withdraw.call(uinteGTiLrh, {from: accounts[2]});
		await FrogDAOGovernanceRewardsg6r4vfm.exit.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsg6r4vfm.exit.call({from: accounts[3]});
		const uint256unTo9fN = await FrogDAOGovernanceRewardsg6r4vfm.stake.call(uintwMhd92j, {from: accounts[1]});
		await FrogDAOGovernanceRewardsg6r4vfm.checkStart.call({from: accounts[0]});

		assert.equal(uint256cJFOXde, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsg6r4vfm.withdrawDevFund.call(uint9QwDHf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressxQv6r9g = accounts[1]
		const FrogDAOGovernanceRewardsWlvjqZC = await FrogDAOGovernanceRewards.new(addressxQv6r9g, {from: accounts[0]});
		const addressgXMi7Uo = accounts[0]
		const uintbokbQfI = BigInt("661")
		const addressnmd5oLm = await FrogDAOGovernanceRewardsWlvjqZC.transferDevAddr.call(addressgXMi7Uo, {from: accounts[0]});
		const uint256v3ffCea = await FrogDAOGovernanceRewardsWlvjqZC.stake.call(uintbokbQfI, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsWlvjqZC.transferDevAddr.call(addressgXMi7Uo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressw5qWBFo = accounts[1]
		const FrogDAOGovernanceRewardsWlvjqZC = await FrogDAOGovernanceRewards.new(addressw5qWBFo, {from: accounts[0]});
		const addressuivEpmX = accounts[3]
		const addressc5CFBwj = "0x0000000000000000000000000000000000000001"
		const addressft9Ehbm = accounts[3]
		const addressukFw3TS = await FrogDAOGovernanceRewardsWlvjqZC.transferDevAddr.call(addressuivEpmX, {from: accounts[1]});
		const uint256EZcYIO3 = await FrogDAOGovernanceRewardsWlvjqZC.earned.call(addressc5CFBwj, {from: accounts[2]});
		await FrogDAOGovernanceRewardsWlvjqZC.checkStart.call({from: accounts[3]});
		const addressnmd5oLm = await FrogDAOGovernanceRewardsWlvjqZC.transferDevAddr.call(addressft9Ehbm, {from: accounts[0]});

		assert.equal(uint256EZcYIO3, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsWlvjqZC.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})