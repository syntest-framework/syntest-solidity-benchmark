const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsE18NrT9 = await JGNRewards.new({from: accounts[5]});
		const uintieKEQ3H = BigInt("721")
		const uintlpAvdqa = BigInt("905")
		const uint256B8W1MA = await JGNRewardsE18NrT9.withdraw.call(uintieKEQ3H, {from: accounts[3]});
		const uint256u9RZtIl = await JGNRewardsE18NrT9.withdraw.call(uintlpAvdqa, {from: accounts[1]});

		await expect(JGNRewardsE18NrT9.withdraw.call(uintieKEQ3H, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardszXuiBGR = await JGNRewards.new({from: accounts[1]});
		const uintsizgtLQ = BigInt("707")
		await JGNRewardszXuiBGR.exit.call({from: accounts[1]});
		const uint256Ds0Spo7 = await JGNRewardszXuiBGR.notifyRewardAmount.call(uintsizgtLQ, {from: accounts[1]});
		const uint256nbiGiev = await JGNRewardszXuiBGR.rewardPerToken.call({from: accounts[2]});
		const uint256NMUUYG = await JGNRewardszXuiBGR.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(JGNRewardszXuiBGR.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsSALmCSo = await JGNRewards.new({from: accounts[4]});
		const uintpOaG5Os = BigInt("665")
		const uintlfVHXC5 = BigInt("958")
		const uint256VwZhJPG = await JGNRewardsSALmCSo.stake.call(uintpOaG5Os, {from: accounts[1]});
		const uint256e4YdiO2 = await JGNRewardsSALmCSo.rewardPerToken.call({from: accounts[3]});
		const uint256Zp9BIoV = await JGNRewardsSALmCSo.stake.call(uintlfVHXC5, {from: accounts[1]});

		await expect(JGNRewardsSALmCSo.stake.call(uintpOaG5Os, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsEv0DolT = await JGNRewards.new({from: accounts[1]});
		const uintiRdE902 = BigInt("610")
		const uintUCDm5h4 = BigInt("977")
		const uintGzdmTLN = BigInt("1767")
		const uint256PmlecuF = await JGNRewardsEv0DolT.notifyRewardAmount.call(uintiRdE902, {from: accounts[5]});
		const uint256sqvA53j = await JGNRewardsEv0DolT.withdraw.call(uintUCDm5h4, {from: accounts[5]});
		const uint256MpEn8w8 = await JGNRewardsEv0DolT.withdraw.call(uintGzdmTLN, {from: accounts[2]});
		await JGNRewardsEv0DolT.getReward.call({from: accounts[0]});

		await expect(JGNRewardsEv0DolT.notifyRewardAmount.call(uintiRdE902, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardscuON68P = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVSsncbB = BigInt("1140")
		const uintDvuGYZr = BigInt("1879")
		const uint256BmhiH0e = await JGNRewardscuON68P.notifyRewardAmount.call(uintVSsncbB, {from: accounts[1]});
		const uint256Va8q5uC = await JGNRewardscuON68P.withdraw.call(uintDvuGYZr, {from: accounts[5]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsE18NrT9 = await JGNRewards.new({from: accounts[5]});
		const uintlXK0tDF = BigInt("892")
		const uint256Yi2jVws = await JGNRewardsE18NrT9.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		await JGNRewardsE18NrT9.checkStart.call({from: accounts[3]});
		const uint256u9RZtIl = await JGNRewardsE18NrT9.withdraw.call(uintlXK0tDF, {from: accounts[1]});

		assert.equal(uint256Yi2jVws, BigInt("0"))
		await expect(JGNRewardsE18NrT9.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsE18NrT9 = await JGNRewards.new({from: accounts[5]});
		const addressJAwrnKI = accounts[5]
		const uintl1JA1Do = BigInt("905")
		const uint256B1K82u6 = await JGNRewardsE18NrT9.totalSupply.call({from: accounts[4]});
		await JGNRewardsE18NrT9.getReward.call({from: accounts[1]});
		const addressZe0xXOX = await JGNRewardsE18NrT9.updateReward.call(addressJAwrnKI, {from: accounts[1]});
		const uint256u9RZtIl = await JGNRewardsE18NrT9.withdraw.call(uintl1JA1Do, {from: accounts[1]});

		assert.equal(uint256B1K82u6, BigInt("0"))
		await expect(JGNRewardsE18NrT9.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})