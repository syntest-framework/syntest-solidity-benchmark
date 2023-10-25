const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addresstR6MNPT = accounts[2]
		const FrogDAOGovernanceRewardsLErHvyx = await FrogDAOGovernanceRewards.new(addresstR6MNPT, {from: "0x0000000000000000000000000000000000000001"});
		const uinteKn8kkY = BigInt("20")
		const uintuUnaOmY = BigInt("467")
		const uint256WDVmw1s = await FrogDAOGovernanceRewardsLErHvyx.withdrawDevFund.call(uinteKn8kkY, {from: accounts[4]});
		const uint256Ckq5YtB = await FrogDAOGovernanceRewardsLErHvyx.devFundAvailable.call({from: accounts[2]});
		const uint256umYqV2J = await FrogDAOGovernanceRewardsLErHvyx.stake.call(uintuUnaOmY, {from: accounts[3]});
		await FrogDAOGovernanceRewardsLErHvyx.exit.call({from: accounts[4]});
		const uint256F7MA2Nt = await FrogDAOGovernanceRewardsLErHvyx.rewardPerToken.call({from: accounts[4]});
		const uint256y9CalJO = await FrogDAOGovernanceRewardsLErHvyx.devFundAvailable.call({from: accounts[1]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const address9HERYV = accounts[1]
		const FrogDAOGovernanceRewardsCk5b8U = await FrogDAOGovernanceRewards.new(address9HERYV, {from: accounts[3]});
		const addressBgEBc7b = "0x0000000000000000000000000000000000000001"
		const uintBjS1UFm = BigInt("1685")
		const uint0K1arZ = BigInt("1196")
		const addressiz6ZDRE = accounts[3]
		const uint256vI6CPhH = await FrogDAOGovernanceRewardsCk5b8U.earned.call(addressBgEBc7b, {from: "0x0000000000000000000000000000000000000001"});
		await FrogDAOGovernanceRewardsCk5b8U.getReward.call({from: accounts[1]});
		const uint256UFRr6Kf = await FrogDAOGovernanceRewardsCk5b8U.stake.call(uintBjS1UFm, {from: accounts[2]});
		const uint256VQasUm0 = await FrogDAOGovernanceRewardsCk5b8U.notifyRewardAmount.call(uint0K1arZ, {from: accounts[0]});
		await FrogDAOGovernanceRewardsCk5b8U.exit.call({from: accounts[4]});
		const addressEeTcRC = await FrogDAOGovernanceRewardsCk5b8U.updateReward.call(addressiz6ZDRE, {from: accounts[0]});

		assert.equal(uint256vI6CPhH, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsCk5b8U.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const address0jY0Fn = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardspbnXRqz = await FrogDAOGovernanceRewards.new(address0jY0Fn, {from: accounts[3]});
		const uint256pCivRCW = await FrogDAOGovernanceRewardspbnXRqz.devFundAvailable.call({from: accounts[3]});
		const uint256Pn7drN1 = await FrogDAOGovernanceRewardspbnXRqz.rewardPerToken.call({from: accounts[1]});
		const uint256FVeDHtF = await FrogDAOGovernanceRewardspbnXRqz.rewardPerToken.call({from: accounts[0]});
		await FrogDAOGovernanceRewardspbnXRqz.getReward.call({from: accounts[2]});

		assert.equal(uint256FVeDHtF, BigInt("0"))
		assert.equal(uint256Pn7drN1, BigInt("0"))
		assert.equal(uint256pCivRCW, BigInt("0"))
		await expect(FrogDAOGovernanceRewardspbnXRqz.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressEBJx34M = accounts[3]
		const FrogDAOGovernanceRewardsy68zqJa = await FrogDAOGovernanceRewards.new(addressEBJx34M, {from: accounts[3]});
		const addressNAvLzH1 = accounts[1]
		const uint256DLf8D7Z = await FrogDAOGovernanceRewardsy68zqJa.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		await FrogDAOGovernanceRewardsy68zqJa.exit.call({from: accounts[1]});
		const uint256cr2W1fq = await FrogDAOGovernanceRewardsy68zqJa.earned.call(addressNAvLzH1, {from: accounts[2]});
		const uint256V7qoFgL = await FrogDAOGovernanceRewardsy68zqJa.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256DLf8D7Z, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsy68zqJa.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressiqzBmZb = accounts[1]
		const FrogDAOGovernanceRewardsrN51wjL = await FrogDAOGovernanceRewards.new(addressiqzBmZb, {from: accounts[3]});
		const addressP3Et1ke = accounts[1]
		const uintVGagXpo = BigInt("1109")
		const addressIp6Tsiu = await FrogDAOGovernanceRewardsrN51wjL.updateReward.call(addressP3Et1ke, {from: accounts[2]});
		const uint256xnlR3ml = await FrogDAOGovernanceRewardsrN51wjL.rewardPerToken.call({from: accounts[0]});
		await FrogDAOGovernanceRewardsrN51wjL.getReward.call({from: accounts[4]});
		const uint256Y8ewyXE = await FrogDAOGovernanceRewardsrN51wjL.withdrawDevFund.call(uintVGagXpo, {from: accounts[4]});
		await FrogDAOGovernanceRewardsrN51wjL.checkStart.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsrN51wjL.exit.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsrN51wjL.updateReward.call(addressP3Et1ke, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressI7Nf6Jl = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardspbnXRqz = await FrogDAOGovernanceRewards.new(addressI7Nf6Jl, {from: accounts[3]});
		const uintKNbg8b0 = BigInt("1919")
		const uint256pCivRCW = await FrogDAOGovernanceRewardspbnXRqz.devFundAvailable.call({from: accounts[3]});
		const uint256Mc24JeC = await FrogDAOGovernanceRewardspbnXRqz.notifyRewardAmount.call(uintKNbg8b0, {from: accounts[0]});
		const uint256Pn7drN1 = await FrogDAOGovernanceRewardspbnXRqz.rewardPerToken.call({from: accounts[1]});
		const uint256FVeDHtF = await FrogDAOGovernanceRewardspbnXRqz.rewardPerToken.call({from: accounts[0]});
		await FrogDAOGovernanceRewardspbnXRqz.getReward.call({from: accounts[2]});

		assert.equal(uint256pCivRCW, BigInt("0"))
		await expect(FrogDAOGovernanceRewardspbnXRqz.notifyRewardAmount.call(uintKNbg8b0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresspTK4HX4 = accounts[1]
		const FrogDAOGovernanceRewardsCk5b8U = await FrogDAOGovernanceRewards.new(addresspTK4HX4, {from: accounts[3]});
		const addressJOD1vEy = "0x0000000000000000000000000000000000000000"
		const addressZbi56zV = accounts[0]
		const uintSkSM2m3 = BigInt("1685")
		const uintgsMsHN = BigInt("1196")
		const addressJBqQB86 = accounts[3]
		const uint256vI6CPhH = await FrogDAOGovernanceRewardsCk5b8U.earned.call(addressJOD1vEy, {from: "0x0000000000000000000000000000000000000001"});
		const addressZRvK3HA = await FrogDAOGovernanceRewardsCk5b8U.transferDevAddr.call(addressZbi56zV, {from: accounts[3]});
		await FrogDAOGovernanceRewardsCk5b8U.getReward.call({from: accounts[1]});
		const uint256UFRr6Kf = await FrogDAOGovernanceRewardsCk5b8U.stake.call(uintSkSM2m3, {from: accounts[2]});
		const uint256VQasUm0 = await FrogDAOGovernanceRewardsCk5b8U.notifyRewardAmount.call(uintgsMsHN, {from: accounts[0]});
		await FrogDAOGovernanceRewardsCk5b8U.exit.call({from: accounts[4]});
		const addressEeTcRC = await FrogDAOGovernanceRewardsCk5b8U.updateReward.call(addressJBqQB86, {from: accounts[0]});

		assert.equal(uint256vI6CPhH, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsCk5b8U.transferDevAddr.call(addressZbi56zV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressjIeQUHe = accounts[3]
		const FrogDAOGovernanceRewardsfWFHZVt = await FrogDAOGovernanceRewards.new(addressjIeQUHe, {from: accounts[0]});
		const uinttBbj3HM = BigInt("1578")
		const addresshwUaMol = accounts[0]
		const uintXNMfjr3 = BigInt("398")
		const uint256r0s21P2 = await FrogDAOGovernanceRewardsfWFHZVt.notifyRewardAmount.call(uinttBbj3HM, {from: accounts[0]});
		const uint256siYNAYl = await FrogDAOGovernanceRewardsfWFHZVt.devFundAvailable.call({from: accounts[0]});
		await FrogDAOGovernanceRewardsfWFHZVt.getReward.call({from: accounts[3]});
		const addressaI5vsjw = await FrogDAOGovernanceRewardsfWFHZVt.updateReward.call(addresshwUaMol, {from: accounts[2]});
		await FrogDAOGovernanceRewardsfWFHZVt.checkStart.call({from: accounts[0]});
		const uint256vfrWrT8 = await FrogDAOGovernanceRewardsfWFHZVt.notifyRewardAmount.call(uintXNMfjr3, {from: accounts[3]});
		const uint256BIJI1Qn = await FrogDAOGovernanceRewardsfWFHZVt.lastTimeRewardApplicable.call({from: accounts[1]});
		await FrogDAOGovernanceRewardsfWFHZVt.exit.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsfWFHZVt.notifyRewardAmount.call(uinttBbj3HM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressjkXhqwA = accounts[1]
		const FrogDAOGovernanceRewardsrN51wjL = await FrogDAOGovernanceRewards.new(addressjkXhqwA, {from: accounts[3]});
		const uint256xnlR3ml = await FrogDAOGovernanceRewardsrN51wjL.rewardPerToken.call({from: accounts[0]});
		await FrogDAOGovernanceRewardsrN51wjL.renounceDevAddr.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsrN51wjL.getReward.call({from: accounts[0]});
		await FrogDAOGovernanceRewardsrN51wjL.exit.call({from: accounts[4]});

		assert.equal(uint256xnlR3ml, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsrN51wjL.renounceDevAddr.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressTlfq2bW = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsqDVT6zB = await FrogDAOGovernanceRewards.new(addressTlfq2bW, {from: accounts[1]});
		const uintSCi1eYU = BigInt("1784")
		const uintKTsr2q6 = BigInt("1105")
		const uint256fxpBK9X = await FrogDAOGovernanceRewardsqDVT6zB.withdraw.call(uintSCi1eYU, {from: accounts[3]});
		await FrogDAOGovernanceRewardsqDVT6zB.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256QfrCVRx = await FrogDAOGovernanceRewardsqDVT6zB.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256Fi6BQD6 = await FrogDAOGovernanceRewardsqDVT6zB.stake.call(uintKTsr2q6, {from: accounts[1]});
		const uint256glcMGP7 = await FrogDAOGovernanceRewardsqDVT6zB.devFundAvailable.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsqDVT6zB.withdraw.call(uintSCi1eYU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressTDkzkK = accounts[1]
		const FrogDAOGovernanceRewardsrN51wjL = await FrogDAOGovernanceRewards.new(addressTDkzkK, {from: accounts[3]});
		const uintRKkoMFe = BigInt("1154")
		const uint256z819TdP = await FrogDAOGovernanceRewardsrN51wjL.withdrawDevFund.call(uintRKkoMFe, {from: accounts[0]});
		await FrogDAOGovernanceRewardsrN51wjL.getReward.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsrN51wjL.withdrawDevFund.call(uintRKkoMFe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressNfyM9CG = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardspbnXRqz = await FrogDAOGovernanceRewards.new(addressNfyM9CG, {from: accounts[3]});
		const uintmErKgRs = BigInt("888")
		const uinta34sLMW = BigInt("1342")
		const uint256pCivRCW = await FrogDAOGovernanceRewardspbnXRqz.devFundAvailable.call({from: accounts[3]});
		const uint256Pn7drN1 = await FrogDAOGovernanceRewardspbnXRqz.rewardPerToken.call({from: accounts[1]});
		const uint256gn8AL7o = await FrogDAOGovernanceRewardspbnXRqz.withdrawDevFund.call(uintmErKgRs, {from: "0x0000000000000000000000000000000000000001"});
		const uint256p99Y9KV = await FrogDAOGovernanceRewardspbnXRqz.withdrawDevFund.call(uinta34sLMW, {from: accounts[1]});
		const uint256FVeDHtF = await FrogDAOGovernanceRewardspbnXRqz.rewardPerToken.call({from: accounts[0]});
		await FrogDAOGovernanceRewardspbnXRqz.getReward.call({from: accounts[2]});

		assert.equal(uint256Pn7drN1, BigInt("0"))
		assert.equal(uint256pCivRCW, BigInt("0"))
		await expect(FrogDAOGovernanceRewardspbnXRqz.withdrawDevFund.call(uintmErKgRs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})