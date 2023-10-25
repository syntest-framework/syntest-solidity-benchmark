const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsce3EG2d = await SSTRewards.new({from: accounts[5]});
		const uintg0XH5kb = BigInt("427")
		const uintk6kQet = BigInt("359")
		const addressJOfIR2I = "0x0000000000000000000000000000000000000001"
//		const uint256khyPlC5 = await SSTRewardsce3EG2d.withdraw.call(uintg0XH5kb, {from: accounts[4]});
//		const uint256bYkx37v = await SSTRewardsce3EG2d.rewardPerToken.call({from: accounts[2]});
//		const uint256qwPZbU = await SSTRewardsce3EG2d.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256a8b0IPB = await SSTRewardsce3EG2d.stake.call(uintk6kQet, {from: accounts[2]});
//		const uint256YoqLhBu = await SSTRewardsce3EG2d.balanceOf.call(addressJOfIR2I, {from: accounts[3]});

		await expect(SSTRewardsce3EG2d.withdraw.call(uintg0XH5kb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardseGg4DYW = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintoccj8Lw = BigInt("1913")
		const addressbGbbckW = accounts[4]
		const addressNHQB69j = accounts[3]
		const uinth0BBoZk = BigInt("431")
		const uint256W7ry0ra = await SSTRewardseGg4DYW.withdraw.call(uintoccj8Lw, {from: accounts[3]});
		const addressDV44ln = await SSTRewardseGg4DYW.updateReward.call(addressbGbbckW, {from: accounts[4]});
		const uint256Ciw4oBr = await SSTRewardseGg4DYW.lastTimeRewardApplicable.call({from: accounts[4]});
		const addressUg2SY0p = await SSTRewardseGg4DYW.updateReward.call(addressNHQB69j, {from: accounts[1]});
		const uint256eJOFSK = await SSTRewardseGg4DYW.stake.call(uinth0BBoZk, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsMYSQw5 = await SSTRewards.new({from: accounts[2]});
		const uintZ7vrRko = BigInt("313")
//		const uint256h4S7WyF = await SSTRewardsMYSQw5.stake.call(uintZ7vrRko, {from: accounts[3]});
//		await SSTRewardsMYSQw5.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SSTRewardsMYSQw5.stake.call(uintZ7vrRko, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsKCRQ8ag = await SSTRewards.new({from: accounts[2]});
		const addresswOvuwZU = accounts[2]
		const uintXUXkTDo = BigInt("128")
//		const address7oRRNk = await SSTRewardsKCRQ8ag.updateReward.call(addresswOvuwZU, {from: accounts[5]});
//		const uint256Tpd5SYp = await SSTRewardsKCRQ8ag.withdraw.call(uintXUXkTDo, {from: accounts[0]});
//		const uint256T97LxTL = await SSTRewardsKCRQ8ag.totalSupply.call({from: accounts[1]});
//		await SSTRewardsKCRQ8ag.getReward.call({from: accounts[4]});

		await expect(SSTRewardsKCRQ8ag.updateReward.call(addresswOvuwZU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsJGsmX1h = await SSTRewards.new({from: accounts[0]});
		const uintdQyWEwd = BigInt("308")
//		await SSTRewardsJGsmX1h.getReward.call({from: accounts[4]});
//		const uint256lHHhLZU = await SSTRewardsJGsmX1h.stake.call(uintdQyWEwd, {from: accounts[3]});

		await expect(SSTRewardsJGsmX1h.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsHe8dpH1 = await SSTRewards.new({from: accounts[1]});
		const addressfBRVYK0 = accounts[2]
		const uintOSXzsy4 = BigInt("1298")
//		await SSTRewardsHe8dpH1.exit.call({from: accounts[0]});
//		const uint256GvH2cl = await SSTRewardsHe8dpH1.earned.call(addressfBRVYK0, {from: accounts[2]});
//		const uint256aMb1IZS = await SSTRewardsHe8dpH1.withdraw.call(uintOSXzsy4, {from: accounts[0]});

		await expect(SSTRewardsHe8dpH1.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsJGsmX1h = await SSTRewards.new({from: accounts[0]});
		const uintN3J4jDL = BigInt("917")
		const uinthI6Ac8r = BigInt("308")
//		await SSTRewardsJGsmX1h.getReward.call({from: accounts[4]});
//		const uint256xFpxflJ = await SSTRewardsJGsmX1h.totalSupply.call({from: accounts[0]});
//		const uint256iv9OJFG = await SSTRewardsJGsmX1h.notifyRewardAmount.call(uintN3J4jDL, {from: accounts[1]});
//		const uint256lHHhLZU = await SSTRewardsJGsmX1h.stake.call(uinthI6Ac8r, {from: accounts[3]});

		await expect(SSTRewardsJGsmX1h.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})