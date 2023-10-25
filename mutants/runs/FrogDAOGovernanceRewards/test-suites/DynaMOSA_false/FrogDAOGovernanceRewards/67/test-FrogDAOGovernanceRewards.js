const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressDFUhpp = accounts[0]
		const FrogDAOGovernanceRewardsUXzq4fQ = await FrogDAOGovernanceRewards.new(addressDFUhpp, {from: accounts[5]});
		const addressq3yCsGL = accounts[1]
		const uint256hjzxq1Z = await FrogDAOGovernanceRewardsUXzq4fQ.earned.call(addressq3yCsGL, {from: accounts[3]});
		await FrogDAOGovernanceRewardsUXzq4fQ.exit.call({from: accounts[4]});
		await FrogDAOGovernanceRewardsUXzq4fQ.checkhalve.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsUXzq4fQ.checkStart.call({from: accounts[5]});
		await FrogDAOGovernanceRewardsUXzq4fQ.checkhalve.call({from: accounts[0]});

		assert.equal(uint256hjzxq1Z, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsUXzq4fQ.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressE5xZSmI = accounts[2]
		const FrogDAOGovernanceRewardsIckYRgi = await FrogDAOGovernanceRewards.new(addressE5xZSmI, {from: accounts[3]});
		const addressumr1pN = accounts[2]
		const uint256sgR8WP8 = await FrogDAOGovernanceRewardsIckYRgi.rewardPerToken.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsIckYRgi.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256kF98IoT = await FrogDAOGovernanceRewardsIckYRgi.earned.call(addressumr1pN, {from: accounts[4]});

		assert.equal(uint256sgR8WP8, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsIckYRgi.checkStart.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressXqb6Bi = accounts[5]
		const FrogDAOGovernanceRewardsfHNQljy = await FrogDAOGovernanceRewards.new(addressXqb6Bi, {from: accounts[0]});
		const uintL6HhUXq = BigInt("635")
		const addressgG9NlfS = accounts[1]
		const uint256vDqxj2L = await FrogDAOGovernanceRewardsfHNQljy.devFundAvailable.call({from: accounts[5]});
		await FrogDAOGovernanceRewardsfHNQljy.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256e1r8Chh = await FrogDAOGovernanceRewardsfHNQljy.withdrawDevFund.call(uintL6HhUXq, {from: accounts[3]});
		const uint256Hi6ztX6 = await FrogDAOGovernanceRewardsfHNQljy.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressy8VE1tz = await FrogDAOGovernanceRewardsfHNQljy.updateReward.call(addressgG9NlfS, {from: accounts[2]});

		assert.equal(uint256vDqxj2L, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsfHNQljy.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresswnWXe0c = accounts[0]
		const FrogDAOGovernanceRewardsW4NUUsS = await FrogDAOGovernanceRewards.new(addresswnWXe0c, {from: accounts[3]});
		const uintEYwFFwB = BigInt("1027")
		const uint256ltTlY8x = await FrogDAOGovernanceRewardsW4NUUsS.stake.call(uintEYwFFwB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256r5pYMrJ = await FrogDAOGovernanceRewardsW4NUUsS.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		await FrogDAOGovernanceRewardsW4NUUsS.getReward.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsW4NUUsS.stake.call(uintEYwFFwB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresstGEUZFI = accounts[1]
		const FrogDAOGovernanceRewardsKOFcRk0 = await FrogDAOGovernanceRewards.new(addresstGEUZFI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bk16ECf = await FrogDAOGovernanceRewardsKOFcRk0.rewardPerToken.call({from: accounts[2]});
		const uint256qh618Ks = await FrogDAOGovernanceRewardsKOFcRk0.devFundAvailable.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsKOFcRk0.checkhalve.call({from: accounts[5]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressCU4MBpE = accounts[0]
		const FrogDAOGovernanceRewardsYp1KURS = await FrogDAOGovernanceRewards.new(addressCU4MBpE, {from: accounts[0]});
		const addressgOfuaZY = accounts[0]
		await FrogDAOGovernanceRewardsYp1KURS.renounceDevAddr.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsYp1KURS.renounceDevAddr.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256k6kRbq7 = await FrogDAOGovernanceRewardsYp1KURS.devFundAvailable.call({from: accounts[0]});
		const addressrAW3FJe = await FrogDAOGovernanceRewardsYp1KURS.updateReward.call(addressgOfuaZY, {from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsYp1KURS.renounceDevAddr.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressaxTGSDo = accounts[1]
		const FrogDAOGovernanceRewardsECFfAZ = await FrogDAOGovernanceRewards.new(addressaxTGSDo, {from: accounts[4]});
		const addressN3yNjEX = accounts[5]
		const uint256NZjiH7s = await FrogDAOGovernanceRewardsECFfAZ.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressBLwF24m = await FrogDAOGovernanceRewardsECFfAZ.transferDevAddr.call(addressN3yNjEX, {from: accounts[0]});
		const uint256rSrtIvd = await FrogDAOGovernanceRewardsECFfAZ.devFundAvailable.call({from: accounts[1]});

		assert.equal(uint256NZjiH7s, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsECFfAZ.transferDevAddr.call(addressN3yNjEX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressxX4zsZu = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsRkDC6gL = await FrogDAOGovernanceRewards.new(addressxX4zsZu, {from: accounts[3]});
		const uint7aB1oi = BigInt("724")
		const addresscwoHsQm = accounts[2]
		const uint256piVD8au = await FrogDAOGovernanceRewardsRkDC6gL.notifyRewardAmount.call(uint7aB1oi, {from: accounts[4]});
		const uint256DIWbjMz = await FrogDAOGovernanceRewardsRkDC6gL.earned.call(addresscwoHsQm, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsRkDC6gL.notifyRewardAmount.call(uint7aB1oi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressihWUqbd = accounts[2]
		const FrogDAOGovernanceRewardsIckYRgi = await FrogDAOGovernanceRewards.new(addressihWUqbd, {from: accounts[3]});
		const addresss4QVG6i = accounts[1]
		const uintC9HIbJh = BigInt("1780")
		const uint256kF98IoT = await FrogDAOGovernanceRewardsIckYRgi.earned.call(addresss4QVG6i, {from: accounts[4]});
		const uint256qCqLXjD = await FrogDAOGovernanceRewardsIckYRgi.withdraw.call(uintC9HIbJh, {from: accounts[4]});
		const uint256ydyg2m0 = await FrogDAOGovernanceRewardsIckYRgi.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256kF98IoT, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsIckYRgi.withdraw.call(uintC9HIbJh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressGqxZGns = accounts[2]
		const FrogDAOGovernanceRewardsrX8dXny = await FrogDAOGovernanceRewards.new(addressGqxZGns, {from: accounts[4]});
		const uintFmP0PaW = BigInt("95")
		const uinttKqHeyN = BigInt("1493")
		const uint256iZujwzD = await FrogDAOGovernanceRewardsrX8dXny.withdrawDevFund.call(uintFmP0PaW, {from: accounts[1]});
		const uint256qEcXgzm = await FrogDAOGovernanceRewardsrX8dXny.rewardPerToken.call({from: accounts[0]});
		const uint256viIZBa0 = await FrogDAOGovernanceRewardsrX8dXny.withdraw.call(uinttKqHeyN, {from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsrX8dXny.withdrawDevFund.call(uintFmP0PaW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressiUQKc4u = accounts[2]
		const FrogDAOGovernanceRewardsIckYRgi = await FrogDAOGovernanceRewards.new(addressiUQKc4u, {from: accounts[3]});
		const uintCkMhIA4 = BigInt("1964")
		const uint256Kc16jPc = await FrogDAOGovernanceRewardsIckYRgi.rewardPerToken.call({from: accounts[2]});
		const uint256bX2va26 = await FrogDAOGovernanceRewardsIckYRgi.withdrawDevFund.call(uintCkMhIA4, {from: accounts[2]});
		await FrogDAOGovernanceRewardsIckYRgi.renounceDevAddr.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Kc16jPc, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsIckYRgi.withdrawDevFund.call(uintCkMhIA4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressr8iwTt = accounts[0]
		const FrogDAOGovernanceRewardsUXzq4fQ = await FrogDAOGovernanceRewards.new(addressr8iwTt, {from: accounts[5]});
		const addresseqTykFy = "0x0000000000000000000000000000000000000001"
		const uintPNYFqX = BigInt("1086")
		const uint256hjzxq1Z = await FrogDAOGovernanceRewardsUXzq4fQ.earned.call(addresseqTykFy, {from: accounts[3]});
		const uint256kc5gYK9 = await FrogDAOGovernanceRewardsUXzq4fQ.devFundAvailable.call({from: accounts[0]});
		const uint256VxAgN6p = await FrogDAOGovernanceRewardsUXzq4fQ.notifyRewardAmount.call(uintPNYFqX, {from: accounts[5]});
		await FrogDAOGovernanceRewardsUXzq4fQ.exit.call({from: accounts[4]});
		await FrogDAOGovernanceRewardsUXzq4fQ.getReward.call({from: accounts[0]});
		await FrogDAOGovernanceRewardsUXzq4fQ.checkhalve.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsUXzq4fQ.checkStart.call({from: accounts[5]});
		await FrogDAOGovernanceRewardsUXzq4fQ.checkhalve.call({from: accounts[0]});

		assert.equal(uint256hjzxq1Z, BigInt("0"))
		assert.equal(uint256kc5gYK9, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsUXzq4fQ.notifyRewardAmount.call(uintPNYFqX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})