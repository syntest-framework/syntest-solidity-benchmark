const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsHnUoWXT = await JGNRewards.new({from: accounts[4]});
		const addresseY5j4hb = accounts[5]
		const addressrs1hchA = accounts[3]
//		await JGNRewardsHnUoWXT.checkStart.call({from: accounts[4]});
//		const addressWI1Bten = await JGNRewardsHnUoWXT.updateReward.call(addresseY5j4hb, {from: accounts[1]});
//		const addressRdh5QJZ = await JGNRewardsHnUoWXT.updateReward.call(addressrs1hchA, {from: "0x0000000000000000000000000000000000000001"});
//		await JGNRewardsHnUoWXT.exit.call({from: accounts[5]});

		await expect(JGNRewardsHnUoWXT.checkStart.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsi5aVF5b = await JGNRewards.new({from: accounts[3]});
		const addressE3x17eC = accounts[1]
		const uintbmeFOgJ = BigInt("1050")
//		await JGNRewardsi5aVF5b.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		await JGNRewardsi5aVF5b.getReward.call({from: accounts[1]});
//		await JGNRewardsi5aVF5b.checkStart.call({from: accounts[1]});
//		const uint256t6mnWpy = await JGNRewardsi5aVF5b.earned.call(addressE3x17eC, {from: accounts[0]});
//		const uint256VqY44VH = await JGNRewardsi5aVF5b.stake.call(uintbmeFOgJ, {from: accounts[4]});

		await expect(JGNRewardsi5aVF5b.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsyrctXzK = await JGNRewards.new({from: accounts[5]});
		const uintlXk4mOO = BigInt("806")
		const addresskBIpd81 = accounts[2]
		const addressjEtUoRg = accounts[3]
		const uintGic0ODN = BigInt("1769")
		const addresslvTLxMa = accounts[4]
//		const uint256T4Z9SZy = await JGNRewardsyrctXzK.withdraw.call(uintlXk4mOO, {from: accounts[0]});
//		const addressJJEQBiQ = await JGNRewardsyrctXzK.updateReward.call(addresskBIpd81, {from: accounts[0]});
//		const uint256gmNiZbz = await JGNRewardsyrctXzK.earned.call(addressjEtUoRg, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256WHDjvEB = await JGNRewardsyrctXzK.stake.call(uintGic0ODN, {from: accounts[2]});
//		const addressO0MKPRc = await JGNRewardsyrctXzK.updateReward.call(addresslvTLxMa, {from: "0x0000000000000000000000000000000000000001"});

		await expect(JGNRewardsyrctXzK.withdraw.call(uintlXk4mOO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsQYj1WMx = await JGNRewards.new({from: accounts[3]});
		const uintS3Qr4UK = BigInt("867")
		const uintv3BLQaL = BigInt("921")
		const uint256hfXyus = await JGNRewardsQYj1WMx.rewardPerToken.call({from: accounts[1]});
//		const uint256VgYCitk = await JGNRewardsQYj1WMx.stake.call(uintS3Qr4UK, {from: accounts[0]});
//		const uint256Vi1kmzc = await JGNRewardsQYj1WMx.withdraw.call(uintv3BLQaL, {from: accounts[2]});

		assert.equal(uint256hfXyus, BigInt("0"))
		await expect(JGNRewardsQYj1WMx.stake.call(uintS3Qr4UK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsZ8Y8qJ = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcESSTz = BigInt("796")
		const addressA1iuzHw = accounts[2]
		const uintARhOnj7 = BigInt("1225")
		const uint256HC4l2gC = await JGNRewardsZ8Y8qJ.notifyRewardAmount.call(uintcESSTz, {from: accounts[0]});
		const addresscHVhQD = await JGNRewardsZ8Y8qJ.updateReward.call(addressA1iuzHw, {from: accounts[1]});
		const uint256iIBDS3e = await JGNRewardsZ8Y8qJ.stake.call(uintARhOnj7, {from: accounts[2]});
		await JGNRewardsZ8Y8qJ.getReward.call({from: accounts[1]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsmDg78Q1 = await JGNRewards.new({from: accounts[0]});
		const uinthEfa2jg = BigInt("1346")
//		await JGNRewardsmDg78Q1.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256JGo8P3a = await JGNRewardsmDg78Q1.totalSupply.call({from: accounts[0]});
//		const uint256sgKu8kD = await JGNRewardsmDg78Q1.withdraw.call(uinthEfa2jg, {from: accounts[1]});

		await expect(JGNRewardsmDg78Q1.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsO7bAQXp = await JGNRewards.new({from: accounts[0]});
		const uintHMltRKZ = BigInt("353")
//		const uint256I7SJbax = await JGNRewardsO7bAQXp.notifyRewardAmount.call(uintHMltRKZ, {from: accounts[1]});
//		const uint256rMMiqpq = await JGNRewardsO7bAQXp.rewardPerToken.call({from: accounts[4]});

		await expect(JGNRewardsO7bAQXp.notifyRewardAmount.call(uintHMltRKZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})