const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardscxjn3Y = await JGNRewards.new({from: accounts[3]});
		const uintJ7A7AQr = BigInt("1582")
		const uintJZ6pAMU = BigInt("1128")
		const uintJv0pqOS = BigInt("1017")
		const addressl1AE9g = accounts[2]
		const uint256Cs5dFs1 = await JGNRewardscxjn3Y.withdraw.call(uintJ7A7AQr, {from: "0x0000000000000000000000000000000000000001"});
		const uint256eoek2Bw = await JGNRewardscxjn3Y.withdraw.call(uintJZ6pAMU, {from: accounts[4]});
		const uint256N8rcwqh = await JGNRewardscxjn3Y.withdraw.call(uintJv0pqOS, {from: accounts[2]});
		await JGNRewardscxjn3Y.getReward.call({from: accounts[0]});
		const uint256yXS8GVr = await JGNRewardscxjn3Y.balanceOf.call(addressl1AE9g, {from: accounts[1]});

		await expect(JGNRewardscxjn3Y.withdraw.call(uintJ7A7AQr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsoLJyRc7 = await JGNRewards.new({from: accounts[1]});
		const uintegJkPvr = BigInt("740")
		const uint256Ol5W8K7 = await JGNRewardsoLJyRc7.notifyRewardAmount.call(uintegJkPvr, {from: accounts[5]});
		await JGNRewardsoLJyRc7.checkStart.call({from: accounts[0]});

		await expect(JGNRewardsoLJyRc7.notifyRewardAmount.call(uintegJkPvr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardslxC69F = await JGNRewards.new({from: accounts[0]});
		const addresskaTkr3l = accounts[3]
		const uinte2LqKE3 = BigInt("1974")
		const uintFzlO7rG = BigInt("72")
		const uint256ajyba6T = await JGNRewardslxC69F.totalSupply.call({from: accounts[1]});
		await JGNRewardslxC69F.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256iMt2ZmI = await JGNRewardslxC69F.balanceOf.call(addresskaTkr3l, {from: accounts[0]});
		const uint256Hnu6lEC = await JGNRewardslxC69F.withdraw.call(uinte2LqKE3, {from: accounts[2]});
		await JGNRewardslxC69F.checkStart.call({from: accounts[4]});
		const uint256YUSLKZT = await JGNRewardslxC69F.stake.call(uintFzlO7rG, {from: accounts[1]});

		assert.equal(uint256ajyba6T, BigInt("0"))
		await expect(JGNRewardslxC69F.checkStart.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsGHVk360 = await JGNRewards.new({from: accounts[2]});
		const addressDP7xLr = accounts[4]
		await JGNRewardsGHVk360.exit.call({from: accounts[4]});
		const uint256gaOh9RV = await JGNRewardsGHVk360.balanceOf.call(addressDP7xLr, {from: accounts[4]});
		const uint256bRZPHI2 = await JGNRewardsGHVk360.totalSupply.call({from: accounts[4]});

		await expect(JGNRewardsGHVk360.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsGFxhmm = await JGNRewards.new({from: accounts[3]});
		const addressWcGzWlX = accounts[0]
		const uintZnRVnrd = BigInt("1947")
		const uint256XBS7wPq = await JGNRewardsGFxhmm.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256xm7Q3gA = await JGNRewardsGFxhmm.earned.call(addressWcGzWlX, {from: accounts[4]});
		await JGNRewardsGFxhmm.getReward.call({from: accounts[2]});
		const uint256q0Sov0s = await JGNRewardsGFxhmm.withdraw.call(uintZnRVnrd, {from: accounts[4]});
		await JGNRewardsGFxhmm.exit.call({from: accounts[0]});

		assert.equal(uint256XBS7wPq, BigInt("0"))
		assert.equal(uint256xm7Q3gA, BigInt("0"))
		await expect(JGNRewardsGFxhmm.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsg1mxLox = await JGNRewards.new({from: accounts[5]});
		const addressHk9UFPc = accounts[2]
		const uintYClx1jK = BigInt("1782")
		const uint256Sz2IzYo = await JGNRewardsg1mxLox.balanceOf.call(addressHk9UFPc, {from: accounts[4]});
		const uint256uoyaT5 = await JGNRewardsg1mxLox.stake.call(uintYClx1jK, {from: accounts[1]});
		const uint256bVjD61S = await JGNRewardsg1mxLox.rewardPerToken.call({from: accounts[1]});
		await JGNRewardsg1mxLox.exit.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Sz2IzYo, BigInt("0"))
		await expect(JGNRewardsg1mxLox.stake.call(uintYClx1jK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardswoDVIQW = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVTcp4eg = BigInt("1670")
		await JGNRewardswoDVIQW.exit.call({from: accounts[0]});
		const uint256pzIKbFi = await JGNRewardswoDVIQW.lastTimeRewardApplicable.call({from: accounts[3]});
		await JGNRewardswoDVIQW.exit.call({from: accounts[1]});
		const uint256RwDrNnf = await JGNRewardswoDVIQW.stake.call(uintVTcp4eg, {from: accounts[2]});
		const uint256w8JRVEM = await JGNRewardswoDVIQW.totalSupply.call({from: accounts[2]});
	});
})