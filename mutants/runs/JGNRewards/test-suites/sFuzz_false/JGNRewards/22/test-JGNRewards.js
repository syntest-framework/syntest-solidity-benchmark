const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsR9irYPC = await JGNRewards.new({from: accounts[2]});
		const uintwZT2Wkz = BigInt("854")
		const uintUx1F4dE = BigInt("1125")
		const uintiy1BzdX = BigInt("1410")
		const uintOlpeWT = BigInt("1762")
		const uint256ZZJFlTN = await JGNRewardsR9irYPC.stake.call(uintwZT2Wkz, {from: accounts[3]});
		const uint256VcwFr9 = await JGNRewardsR9irYPC.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256xTZHXtT = await JGNRewardsR9irYPC.stake.call(uintUx1F4dE, {from: accounts[1]});
		const uint256XxFGsAw = await JGNRewardsR9irYPC.withdraw.call(uintiy1BzdX, {from: accounts[3]});
		await JGNRewardsR9irYPC.exit.call({from: accounts[2]});
		const uint256s10WuBn = await JGNRewardsR9irYPC.stake.call(uintOlpeWT, {from: accounts[1]});

		await expect(JGNRewardsR9irYPC.stake.call(uintwZT2Wkz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsaKD1CqX = await JGNRewards.new({from: accounts[1]});
		const uintCmVqAB = BigInt("1117")
		const uinth61c6Q = BigInt("818")
		const uint256j5FXHX = await JGNRewardsaKD1CqX.withdraw.call(uintCmVqAB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Q2DgyXX = await JGNRewardsaKD1CqX.stake.call(uinth61c6Q, {from: "0x0000000000000000000000000000000000000001"});

		await expect(JGNRewardsaKD1CqX.withdraw.call(uintCmVqAB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardstVFXy6V = await JGNRewards.new({from: accounts[5]});
		const addressjj9PKE9 = accounts[5]
		const uintltWHHAy = BigInt("963")
		const addressDVSgDKC = accounts[4]
		const addressNm5w0mM = await JGNRewardstVFXy6V.updateReward.call(addressjj9PKE9, {from: accounts[0]});
		const uint256LDzOaIF = await JGNRewardstVFXy6V.stake.call(uintltWHHAy, {from: "0x0000000000000000000000000000000000000001"});
		const addressdXzsPID = await JGNRewardstVFXy6V.updateReward.call(addressDVSgDKC, {from: accounts[1]});

		await expect(JGNRewardstVFXy6V.updateReward.call(addressjj9PKE9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsYJQhk7u = await JGNRewards.new({from: accounts[2]});
		const addressUEB2e2 = "0x0000000000000000000000000000000000000001"
		const uint4AK4Z3 = BigInt("714")
		const uintDluBMyg = BigInt("539")
		await JGNRewardsYJQhk7u.getReward.call({from: accounts[4]});
		const uint256Bl7sRBa = await JGNRewardsYJQhk7u.balanceOf.call(addressUEB2e2, {from: accounts[4]});
		const uint256kPlnLYM = await JGNRewardsYJQhk7u.withdraw.call(uint4AK4Z3, {from: accounts[5]});
		const uint256GyADM8c = await JGNRewardsYJQhk7u.withdraw.call(uintDluBMyg, {from: accounts[2]});
		await JGNRewardsYJQhk7u.getReward.call({from: accounts[1]});

		await expect(JGNRewardsYJQhk7u.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsYJQhk7u = await JGNRewards.new({from: accounts[2]});
		const addresswO1fcpS = "0x0000000000000000000000000000000000000001"
		const uintTRG2htM = BigInt("539")
		await JGNRewardsYJQhk7u.getReward.call({from: accounts[4]});
		const uint256Bl7sRBa = await JGNRewardsYJQhk7u.balanceOf.call(addresswO1fcpS, {from: accounts[4]});
		await JGNRewardsYJQhk7u.exit.call({from: accounts[0]});
		const uint256GyADM8c = await JGNRewardsYJQhk7u.withdraw.call(uintTRG2htM, {from: accounts[2]});
		await JGNRewardsYJQhk7u.getReward.call({from: accounts[1]});

		await expect(JGNRewardsYJQhk7u.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsVqndKsT = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwkBlhD = BigInt("1026")
		const uint256mtOEk6B = await JGNRewardsVqndKsT.stake.call(uintwkBlhD, {from: accounts[2]});
		const uint256IAsBrpz = await JGNRewardsVqndKsT.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		await JGNRewardsVqndKsT.getReward.call({from: accounts[0]});
		const uint256oPPW0O = await JGNRewardsVqndKsT.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsYJQhk7u = await JGNRewards.new({from: accounts[2]});
		const uintZMGEwX = BigInt("1757")
		await JGNRewardsYJQhk7u.getReward.call({from: accounts[1]});
		const uint256Iq8e50p = await JGNRewardsYJQhk7u.notifyRewardAmount.call(uintZMGEwX, {from: accounts[2]});

		await expect(JGNRewardsYJQhk7u.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})