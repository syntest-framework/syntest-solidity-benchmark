const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsgQVLZVh = await JGNRewards.new({from: accounts[0]});
		const uintccRGwzg = BigInt("1740")
		const addressez56q9T = accounts[0]
		const uint256Ds1Svue = await JGNRewardsgQVLZVh.withdraw.call(uintccRGwzg, {from: accounts[1]});
		const uint256X6k0MSi = await JGNRewardsgQVLZVh.earned.call(addressez56q9T, {from: accounts[0]});
		const uint256IihpxBE = await JGNRewardsgQVLZVh.rewardPerToken.call({from: accounts[4]});

		await expect(JGNRewardsgQVLZVh.withdraw.call(uintccRGwzg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsyyQ4mQr = await JGNRewards.new({from: accounts[4]});
		const addressCWjqctJ = accounts[1]
		const addresssCf8RHt = accounts[3]
		const uintWciLCLW = BigInt("1722")
		const addressaFu4GI = await JGNRewardsyyQ4mQr.updateReward.call(addressCWjqctJ, {from: accounts[1]});
		const uint256oQTkxNq = await JGNRewardsyyQ4mQr.earned.call(addresssCf8RHt, {from: accounts[4]});
		const uint256LNvyaE = await JGNRewardsyyQ4mQr.withdraw.call(uintWciLCLW, {from: accounts[5]});

		await expect(JGNRewardsyyQ4mQr.updateReward.call(addressCWjqctJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsC1rtSU = await JGNRewards.new({from: accounts[3]});
		const uintHSTOc8A = BigInt("1387")
		const uintoyhj7m = BigInt("729")
		const addressXhu33xE = accounts[1]
		const uint256PLPhUyX = await JGNRewardsC1rtSU.notifyRewardAmount.call(uintHSTOc8A, {from: accounts[4]});
		const uint256OoGXUGL = await JGNRewardsC1rtSU.stake.call(uintoyhj7m, {from: accounts[4]});
		const uint256cyy2PMG = await JGNRewardsC1rtSU.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256SqW4ctF = await JGNRewardsC1rtSU.balanceOf.call(addressXhu33xE, {from: accounts[4]});
		const uint256X5kP0RO = await JGNRewardsC1rtSU.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(JGNRewardsC1rtSU.notifyRewardAmount.call(uintHSTOc8A, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsKeLFNKE = await JGNRewards.new({from: accounts[4]});
		const uintSkuO5Kk = BigInt("1671")
		await JGNRewardsKeLFNKE.exit.call({from: accounts[0]});
		const uint256ljgWf8o = await JGNRewardsKeLFNKE.withdraw.call(uintSkuO5Kk, {from: accounts[5]});
		const uint256NsJp2ih = await JGNRewardsKeLFNKE.totalSupply.call({from: accounts[2]});

		await expect(JGNRewardsKeLFNKE.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardslGAoV9W = await JGNRewards.new({from: accounts[5]});
		const uintxq9FkAw = BigInt("1282")
		const addressoSU7wd6 = accounts[4]
		const uint256JiOLLxc = await JGNRewardslGAoV9W.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		await JGNRewardslGAoV9W.getReward.call({from: accounts[1]});
		const uint256nQ1ka97 = await JGNRewardslGAoV9W.stake.call(uintxq9FkAw, {from: accounts[1]});
		const uint2563KUeRt = await JGNRewardslGAoV9W.balanceOf.call(addressoSU7wd6, {from: accounts[3]});
		await JGNRewardslGAoV9W.getReward.call({from: accounts[4]});
		await JGNRewardslGAoV9W.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256JiOLLxc, BigInt("0"))
		await expect(JGNRewardslGAoV9W.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsXjPeI44 = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintS1KGPJQ = BigInt("448")
		const uint256jGx8Pnq = await JGNRewardsXjPeI44.withdraw.call(uintS1KGPJQ, {from: accounts[2]});
		await JGNRewardsXjPeI44.checkStart.call({from: accounts[4]});
	});
})