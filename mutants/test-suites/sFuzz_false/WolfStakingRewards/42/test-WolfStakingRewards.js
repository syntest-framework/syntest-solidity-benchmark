const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const stringKtKr1Ph = "XEoQCwFcifWSk8bAPV5z3SiAWRTRXTB1Vxd4C0zN48AnL3cxe2yoApiGmWb"
		const stringNHkUOJ = "mcXLMIW1FbbrkAPgWalk4R9LF3U2ZsLmCyreA3tIqqpQYUNlLjEw7tmCmU"
		const uintXGe7c5 = BigInt("39")
		const WolfStakingRewardsj8bEeVG = await WolfStakingRewards.new(stringKtKr1Ph, stringNHkUOJ, uintXGe7c5, {from: accounts[4]});
		const uintG1gItm4 = BigInt("1764")
		const uintk0VHh7c = BigInt("749")
		const uintSkFY4z = BigInt("1010")
		const uintXcK67rp = BigInt("1747")
		const uintQ4sw3VX = BigInt("1742")
		const uintm8MFvO8 = BigInt("998")
		const uint256XNDOX2e = await WolfStakingRewardsj8bEeVG.stake.call(uintk0VHh7c, uintG1gItm4, {from: accounts[2]});
		const stringEzwJqZY = await WolfStakingRewardsj8bEeVG.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256KeGigS = await WolfStakingRewardsj8bEeVG.withdraw.call(uintXcK67rp, uintSkFY4z, {from: accounts[1]});
		await WolfStakingRewardsj8bEeVG.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256fuvGuxC = await WolfStakingRewardsj8bEeVG.rewardPerToken.call(uintQ4sw3VX, {from: accounts[0]});
		const uint256qcVgAJF = await WolfStakingRewardsj8bEeVG.lastTimeRewardApplicable.call(uintm8MFvO8, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresscZaWn8F = accounts[4]
		const addressRvYsytq = accounts[0]
		const address2YynC7 = accounts[4]
		const WolfStakingRewardsXFPTNta = await WolfStakingRewards.new(addresscZaWn8F, addressRvYsytq, address2YynC7, {from: accounts[3]});
		const uintD2pAr0k = BigInt("1562")
		const uintjOXn4rs = BigInt("157")
		const uintozsGanV = BigInt("905")
		const uintg9tpR1a = BigInt("1473")
		const uintKDvIbwd = BigInt("1599")
		const uintEh1T7vd = BigInt("1990")
		const uintQNMdDPQ = BigInt("962")
		const uintKS55Ggk = await WolfStakingRewardsXFPTNta.getReward.call(uintD2pAr0k, {from: accounts[0]});
		const uint256GKppqtO = await WolfStakingRewardsXFPTNta.totalSupplyPerPool.call(uintjOXn4rs, {from: accounts[5]});
//		const uint256array868bzP = await WolfStakingRewardsXFPTNta.updateNotifyRewardAmount.call(uintozsGanV, {from: accounts[0]});
//		const uint256Rca3Qni = await WolfStakingRewardsXFPTNta.stake.call(uintKDvIbwd, uintg9tpR1a, {from: accounts[0]});
//		const stringQdXR02Z = await WolfStakingRewardsXFPTNta.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256giQy4uv = await WolfStakingRewardsXFPTNta.withdraw.call(uintQNMdDPQ, uintEh1T7vd, {from: accounts[1]});

		assert.equal(uint256GKppqtO, BigInt("0"))
		await expect(WolfStakingRewardsXFPTNta.updateNotifyRewardAmount.call(uintozsGanV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringyzzYXuq = "ayGshFtR95gVXiupghYQCho87D7OK7vLEVvFENJ5Z1akbvKfhmOmAckZV"
		const stringBU9JBbR = "bP3Fy7KpP8Hss1ciXFZE4h9mcMEtpin5DSLH9coXP7QbgGjz7pKxEb92vJXROigN"
		const uintbzfprHm = BigInt("84")
		const WolfStakingRewardsCiNzM0o = await WolfStakingRewards.new(stringyzzYXuq, stringBU9JBbR, uintbzfprHm, {from: accounts[1]});
		const uintsgVS0ve = BigInt("793")
		const uinthe19MzL = BigInt("448")
		const uintpHpCMF0 = BigInt("1675")
		const addressCWZPDZ = accounts[1]
		const uintIzzDsQb = await WolfStakingRewardsCiNzM0o.getReward.call(uintsgVS0ve, {from: accounts[0]});
		await WolfStakingRewardsCiNzM0o.onlyOwner.call({from: accounts[1]});
		const uint256arrayVuC5HQs = await WolfStakingRewardsCiNzM0o.updateNotifyRewardAmount.call(uinthe19MzL, {from: accounts[1]});
		const uint256dsKegPZ = await WolfStakingRewardsCiNzM0o.balanceOfPerPool.call(addressCWZPDZ, uintpHpCMF0, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXnNg2MM = "iQzPb2dNyoQsclHidkj7RRv"
		const stringGAJeVx3 = "iTX"
		const uintsDZYXS3 = BigInt("187")
		const WolfStakingRewardsZeDwpLu = await WolfStakingRewards.new(stringXnNg2MM, stringGAJeVx3, uintsDZYXS3, {from: accounts[5]});
		const uintkJzj5J8 = BigInt("1275")
		const uintmmLmar0 = BigInt("518")
		const uintIJHHdk0 = BigInt("1904")
		const uintFwKdOa = BigInt("1877")
		const uintjS57DgL = BigInt("17")
		const uintOpityPc = BigInt("1820")
		const addressbKuV81b = accounts[4]
		const uintmecMpxb = BigInt("1647")
		const uint256yCzEvi4 = await WolfStakingRewardsZeDwpLu.withdrawRemainingBalance.call(uintmmLmar0, uintkJzj5J8, {from: accounts[2]});
		await WolfStakingRewardsZeDwpLu.nonReentrant.call({from: accounts[5]});
		const uintjBrm35k = await WolfStakingRewardsZeDwpLu.getReward.call(uintIJHHdk0, {from: accounts[5]});
		const uint256qQSewFp = await WolfStakingRewardsZeDwpLu.stake.call(uintjS57DgL, uintFwKdOa, {from: accounts[5]});
		const addressb8BiRgV = await WolfStakingRewardsZeDwpLu.updateReward.call(addressbKuV81b, uintOpityPc, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NORn7Vn = await WolfStakingRewardsZeDwpLu.exit.call(uintmecMpxb, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressRqU2qwD = "0x0000000000000000000000000000000000000001"
		const addressjyj6fwy = "0x0000000000000000000000000000000000000001"
		const addressrXZ7EO = accounts[3]
		const WolfStakingRewardskISvRB = await WolfStakingRewards.new(addressRqU2qwD, addressjyj6fwy, addressrXZ7EO, {from: accounts[5]});
		const uintygsqnQ = BigInt("1324")
		const uintBX7n67e = BigInt("1562")
		const uintNw4eGsP = BigInt("496")
		const uintB7aQcXO = BigInt("564")
		const uintScdGW7Z = BigInt("1696")
		const addressutRwAC = accounts[2]
		const uint256IHj4MI5 = await WolfStakingRewardskISvRB.lastTimeRewardApplicable.call(uintygsqnQ, {from: accounts[0]});
//		const uint256wYBy9PZ = await WolfStakingRewardskISvRB.withdrawRemainingBalance.call(uintNw4eGsP, uintBX7n67e, {from: accounts[4]});
//		const uint8JgvDWuu = await WolfStakingRewardskISvRB.decimals.call({from: accounts[3]});
//		const uint256Igc4S0B = await WolfStakingRewardskISvRB.totalSupplyPerPool.call(uintB7aQcXO, {from: accounts[5]});
//		const addressIIZ9jBe = await WolfStakingRewardskISvRB.updateReward.call(addressutRwAC, uintScdGW7Z, {from: accounts[1]});

		assert.equal(uint256IHj4MI5, BigInt("0"))
		await expect(WolfStakingRewardskISvRB.withdrawRemainingBalance.call(uintNw4eGsP, uintBX7n67e, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressAsOord = accounts[1]
		const addressV25jjG1 = "0x0000000000000000000000000000000000000001"
		const addresseXrL9Vo = accounts[1]
		const WolfStakingRewardsFXWBKEF = await WolfStakingRewards.new(addressAsOord, addressV25jjG1, addresseXrL9Vo, {from: accounts[1]});
		const uintLJWEQDw = BigInt("528")
		const uintCIFKZP = BigInt("1935")
		const uintAMWJcW = BigInt("1765")
		const addressP52tC5Y = accounts[0]
		const uintlutUHht = BigInt("1699")
		const uintJbn6CJr = BigInt("1905")
		const uintf8YJiQs = BigInt("581")
		const addressFiPFgXN = accounts[2]
		const uintPNFjKN5 = BigInt("702")
//		const uint256VG3bHBd = await WolfStakingRewardsFXWBKEF.stake.call(uintCIFKZP, uintLJWEQDw, {from: accounts[1]});
//		const uint256PIeNkUL = await WolfStakingRewardsFXWBKEF.earned.call(addressP52tC5Y, uintAMWJcW, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ZCSqGcA = await WolfStakingRewardsFXWBKEF.withdraw.call(uintJbn6CJr, uintlutUHht, {from: accounts[4]});
//		const uint256Q3mmGU = await WolfStakingRewardsFXWBKEF.earned.call(addressFiPFgXN, uintf8YJiQs, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256CHzXwzJ = await WolfStakingRewardsFXWBKEF.getRewardForDuration.call(uintPNFjKN5, {from: accounts[3]});
//		const uint8kKObi2y = await WolfStakingRewardsFXWBKEF.decimals.call({from: accounts[4]});

		await expect(WolfStakingRewardsFXWBKEF.stake.call(uintCIFKZP, uintLJWEQDw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressBX5K237 = accounts[4]
		const addressRtxoIS = accounts[4]
		const addressrifaUtn = accounts[0]
		const WolfStakingRewardsyCFeCB = await WolfStakingRewards.new(addressBX5K237, addressRtxoIS, addressrifaUtn, {from: "0x0000000000000000000000000000000000000001"});
		const uintyi19I2y = BigInt("149")
		const uintQLFm254 = BigInt("668")
		const uintEmseHrC = BigInt("315")
		const uintXXu7nDj = BigInt("119")
		const uintCgCU2sd = BigInt("749")
		const uint8ZqSV02k = await WolfStakingRewardsyCFeCB.decimals.call({from: accounts[1]});
		const uint256iRycRTv = await WolfStakingRewardsyCFeCB.withdrawRemainingBalance.call(uintQLFm254, uintyi19I2y, {from: accounts[0]});
		const stringkesJNvT = await WolfStakingRewardsyCFeCB.name.call({from: accounts[1]});
		const uint256dMUPn3z = await WolfStakingRewardsyCFeCB.withdraw.call(uintXXu7nDj, uintEmseHrC, {from: accounts[5]});
		const uint256lOppD1Q = await WolfStakingRewardsyCFeCB.exit.call(uintCgCU2sd, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressXRjFHss = accounts[1]
		const addresscPcu5pU = accounts[0]
		const addressK9KKLNM = accounts[1]
		const WolfStakingRewardsVxMXRBf = await WolfStakingRewards.new(addressXRjFHss, addresscPcu5pU, addressK9KKLNM, {from: accounts[1]});
		const uintCC02Rqy = BigInt("410")
		const uintxL7kJJy = BigInt("218")
		const uintOE04iCO = BigInt("724")
		const uintzPXbGil = BigInt("261")
		const uint256G88iLN = await WolfStakingRewardsVxMXRBf.lastTimeRewardApplicable.call(uintCC02Rqy, {from: accounts[3]});
//		const uint256eKR5I89 = await WolfStakingRewardsVxMXRBf.exit.call(uintxL7kJJy, {from: accounts[4]});
//		const uint256qn8AQXF = await WolfStakingRewardsVxMXRBf.withdrawRemainingBalance.call(uintzPXbGil, uintOE04iCO, {from: accounts[3]});

		assert.equal(uint256G88iLN, BigInt("0"))
		await expect(WolfStakingRewardsVxMXRBf.exit.call(uintxL7kJJy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressYNPeesv = accounts[4]
		const addresszU0wOTe = accounts[5]
		const addresstUyFmFy = accounts[0]
		const WolfStakingRewardsUL5N1Ur = await WolfStakingRewards.new(addressYNPeesv, addresszU0wOTe, addresstUyFmFy, {from: accounts[3]});
		const uintPsnff3H = BigInt("1291")
		const uintHf1idN = BigInt("169")
//		const uint256kXLfQBX = await WolfStakingRewardsUL5N1Ur.getRewardForDuration.call(uintPsnff3H, {from: accounts[1]});
//		const uint256Kryl5lX = await WolfStakingRewardsUL5N1Ur.lastTimeRewardApplicable.call(uintHf1idN, {from: accounts[3]});

		await expect(WolfStakingRewardsUL5N1Ur.getRewardForDuration.call(uintPsnff3H, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresstOo5EZ = accounts[2]
		const addresseeLXp3f = accounts[0]
		const addressjqLYtk6 = accounts[4]
		const WolfStakingRewardsj5dgTC4 = await WolfStakingRewards.new(addresstOo5EZ, addresseeLXp3f, addressjqLYtk6, {from: accounts[1]});
		const uintzNTBjW = BigInt("964")
		const uint256QlcEk63 = await WolfStakingRewardsj5dgTC4.totalSupplyPerPool.call(uintzNTBjW, {from: accounts[0]});
//		const stringdGZSWw5 = await WolfStakingRewardsj5dgTC4.name.call({from: accounts[0]});
//		const uint8dXKadt = await WolfStakingRewardsj5dgTC4.decimals.call({from: accounts[1]});

		assert.equal(uint256QlcEk63, BigInt("0"))
		await expect(WolfStakingRewardsj5dgTC4.name.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressQatExOa = accounts[4]
		const addresspH5saho = accounts[5]
		const addressi1m579H = accounts[0]
		const WolfStakingRewardsUL5N1Ur = await WolfStakingRewards.new(addressQatExOa, addresspH5saho, addressi1m579H, {from: accounts[3]});
		const uintP5q7nMX = BigInt("1598")
		const uintnUDpnGI = BigInt("1570")
		const addressVXn83L = accounts[3]
		const uintRErHEQw = BigInt("1295")
		const uint256UJ6wZiH = await WolfStakingRewardsUL5N1Ur.totalSupplyPerPool.call(uintP5q7nMX, {from: accounts[4]});
		const uint256HnW8t7r = await WolfStakingRewardsUL5N1Ur.balanceOfPerPool.call(addressVXn83L, uintnUDpnGI, {from: accounts[1]});
//		const uint256kXLfQBX = await WolfStakingRewardsUL5N1Ur.getRewardForDuration.call(uintRErHEQw, {from: accounts[1]});

		assert.equal(uint256HnW8t7r, BigInt("0"))
		assert.equal(uint256UJ6wZiH, BigInt("0"))
		await expect(WolfStakingRewardsUL5N1Ur.getRewardForDuration.call(uintRErHEQw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressNmU6xM = accounts[4]
		const addressgRY5umH = accounts[0]
		const addressqaeU3iT = accounts[4]
		const WolfStakingRewardsXFPTNta = await WolfStakingRewards.new(addressNmU6xM, addressgRY5umH, addressqaeU3iT, {from: accounts[3]});
		const uintLyvMCFx = BigInt("506")
		const uintkppIcvo = BigInt("1959")
		const uintoBMwmUN = BigInt("1562")
		const uintwCWrwRH = BigInt("149")
		const uintVSZIPAi = BigInt("905")
		const uint0Okw1Q = BigInt("1049")
		const uintYCzb3zQ = BigInt("1777")
		const uintxlAyRkS = BigInt("1915")
		const uintEHpmHTt = BigInt("1990")
		const uinta8wB8P = BigInt("962")
//		const uint256KbsiDmx = await WolfStakingRewardsXFPTNta.withdraw.call(uintkppIcvo, uintLyvMCFx, {from: accounts[0]});
//		const uintKS55Ggk = await WolfStakingRewardsXFPTNta.getReward.call(uintoBMwmUN, {from: accounts[0]});
//		const uint256GKppqtO = await WolfStakingRewardsXFPTNta.totalSupplyPerPool.call(uintwCWrwRH, {from: accounts[5]});
//		const uint256array868bzP = await WolfStakingRewardsXFPTNta.updateNotifyRewardAmount.call(uintVSZIPAi, {from: accounts[0]});
//		const uint256G53Krz3 = await WolfStakingRewardsXFPTNta.withdrawRemainingBalance.call(uintYCzb3zQ, uint0Okw1Q, {from: accounts[0]});
//		const stringQdXR02Z = await WolfStakingRewardsXFPTNta.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256QNssp0F = await WolfStakingRewardsXFPTNta.lastTimeRewardApplicable.call(uintxlAyRkS, {from: accounts[0]});
//		const uint256giQy4uv = await WolfStakingRewardsXFPTNta.withdraw.call(uinta8wB8P, uintEHpmHTt, {from: accounts[1]});

		await expect(WolfStakingRewardsXFPTNta.withdraw.call(uintkppIcvo, uintLyvMCFx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringlaUOCHR = "sAseoNVNcp4ayQE1QXooalBbgUkX62T56Chqgz1OMuJTo19dJL3VXsvjnri6m"
		const stringJFSCytl = "UUExGzoZLRI5YFnYWd4V7LiOTrb2XlbvGDMM3FDIc1MSAa557EWqmp"
		const uintnSVxMt = BigInt("137")
		const WolfStakingRewardsalpTbiQ = await WolfStakingRewards.new(stringlaUOCHR, stringJFSCytl, uintnSVxMt, {from: accounts[3]});
		const uintKzqkjGK = BigInt("1620")
		const addressL0Px8au = accounts[4]
		const uintUQLZcK = BigInt("1163")
		const uint256Y059Id = await WolfStakingRewardsalpTbiQ.balanceOfPerPool.call(addressL0Px8au, uintKzqkjGK, {from: accounts[5]});
		await WolfStakingRewardsalpTbiQ.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256hS2vAq8 = await WolfStakingRewardsalpTbiQ.rewardPerToken.call(uintUQLZcK, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWHtI7lu = "evMDHIEQOEhys2ApvgeurCQCMJevEFDyfGJPKrX5iu0R1Kys3bVsdgzTo1bXbPJsgMTA7psTLD"
		const stringnmqjzjv = "JlUtmQ5rIczxsE2jjGxtr5sRdA3bgYd54eR7G32Cmvef43eb5ZICoWug9F1Ra04UH3u47gxWpaPmz05pvqmqz3IlaKVne9"
		const uintqmUE0Xk = BigInt("126")
		const WolfStakingRewardscfafd6R = await WolfStakingRewards.new(stringWHtI7lu, stringnmqjzjv, uintqmUE0Xk, {from: accounts[0]});
		await WolfStakingRewardscfafd6R.onlyRewardsDistribution.call({from: accounts[1]});
		const uint8NlGzBqJ = await WolfStakingRewardscfafd6R.decimals.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLXzJhSw = "6cgJ7TIFlFJXT6egNEzbS"
		const stringhFAfVvI = "Y7jjeNjN7XbS3zUFnUwn7qJixs3VnRGgmHHOFAMn7uaIYibeQI3BYJ6dXk"
		const uintmtdEIaz = BigInt("241")
		const WolfStakingRewards79bUtO = await WolfStakingRewards.new(stringLXzJhSw, stringhFAfVvI, uintmtdEIaz, {from: accounts[3]});
		const uinthB0bE4f = BigInt("1660")
		const uintWRcfOVI = BigInt("844")
		const uinteNpglok = BigInt("1533")
		const uint256dU7nJDi = await WolfStakingRewards79bUtO.withdrawRemainingBalance.call(uintWRcfOVI, uinthB0bE4f, {from: accounts[1]});
		const uint256xWCXxI9 = await WolfStakingRewards79bUtO.lastTimeRewardApplicable.call(uinteNpglok, {from: accounts[2]});
		await WolfStakingRewards79bUtO.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwZsVOET = "4zU"
		const stringR2FATZy = "FaA746KRMjDq7MS0BdCGu3MtLysk"
		const uintAMCvC03 = BigInt("87")
		const WolfStakingRewardszPyf1mS = await WolfStakingRewards.new(stringwZsVOET, stringR2FATZy, uintAMCvC03, {from: accounts[3]});
		const stringUZ5PyC = await WolfStakingRewardszPyf1mS.symbol.call({from: accounts[2]});
		const strings3mPUgS = await WolfStakingRewardszPyf1mS.symbol.call({from: accounts[3]});
		await WolfStakingRewardszPyf1mS.onlyOwner.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringEoSS0R = "U6HUikZ8MvcyBYNv2PkrspBclFSdR9m1cJVLPph"
		const stringYObS3d = "oVwryjT7oV1uH7XMouxlPPq8B3C5KVSN9KWTkgE65PwohUJuQsJHyNdNrIb2C7"
		const uintls7JMIV = BigInt("127")
		const WolfStakingRewardsjOxqz1d = await WolfStakingRewards.new(stringEoSS0R, stringYObS3d, uintls7JMIV, {from: accounts[2]});
		const uintq2cAG4r = BigInt("439")
		const uintupUFdPJ = BigInt("657")
		const uintTiP7qQe = BigInt("1173")
		const addressPKZI7AA = accounts[0]
		const uint256yjqSUq4 = await WolfStakingRewardsjOxqz1d.getRewardForDuration.call(uintq2cAG4r, {from: accounts[2]});
		const uintezBJm4S = await WolfStakingRewardsjOxqz1d.getReward.call(uintupUFdPJ, {from: accounts[2]});
		const uint256uqUQJpO = await WolfStakingRewardsjOxqz1d.earned.call(addressPKZI7AA, uintTiP7qQe, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDB7jSaR = "7zFcOlJjEKhxUPx41gv8PrhsBlM4VAa1YvcUkero6eQVXjBdeObfFbC7YD1Qp0gk1YLqmnNr4"
		const stringCJcPLVK = "8TPzeuu6BSjonRjWzd8wD7nN8O1dxmjfe9fTk9AKlzFtTePRdqb6I"
		const uint9GYEVM = BigInt("21")
		const WolfStakingRewardswmvp3kM = await WolfStakingRewards.new(stringDB7jSaR, stringCJcPLVK, uint9GYEVM, {from: accounts[1]});
		const uintJQgulWL = BigInt("722")
		const uinttuIe47P = BigInt("424")
		const uintG7uUM72 = BigInt("1806")
		const uintGmotq5z = BigInt("435")
		const uint2563iSNAK = await WolfStakingRewardswmvp3kM.exit.call(uintJQgulWL, {from: accounts[2]});
		const stringH6E2l2h = await WolfStakingRewardswmvp3kM.symbol.call({from: accounts[5]});
		const uinto1ewZCg = await WolfStakingRewardswmvp3kM.getReward.call(uinttuIe47P, {from: accounts[3]});
		const uint256Yce6al = await WolfStakingRewardswmvp3kM.withdrawRemainingBalance.call(uintGmotq5z, uintG7uUM72, {from: accounts[0]});
		await WolfStakingRewardswmvp3kM.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQ2OCEU1 = "32nSLBIsZSk3Klzd1rKA"
		const stringzxWIp7H = "IFHnsUu14OuUkbh5MH9GOi2QAqzCffW8PhEFqcTQJReRqldtjdVc2Esyb12BL5uEOs1"
		const uint0GnmbI = BigInt("92")
		const WolfStakingRewardslffXyz = await WolfStakingRewards.new(stringQ2OCEU1, stringzxWIp7H, uint0GnmbI, {from: accounts[1]});
		const uintvFQwyE9 = BigInt("550")
		const addressDemQWpJ = accounts[4]
		const uintTwZpG2G = BigInt("1527")
		const uintMSH6myB = BigInt("476")
		const addressv6Fax4 = "0x0000000000000000000000000000000000000001"
		await WolfStakingRewardslffXyz.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256nAORafD = await WolfStakingRewardslffXyz.earned.call(addressDemQWpJ, uintvFQwyE9, {from: accounts[1]});
		const uint256DhdAPDZ = await WolfStakingRewardslffXyz.lastTimeRewardApplicable.call(uintTwZpG2G, {from: accounts[1]});
		await WolfStakingRewardslffXyz.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256otdJLg2 = await WolfStakingRewardslffXyz.earned.call(addressv6Fax4, uintMSH6myB, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressxILjGK = accounts[4]
		const addressA4RtzPt = accounts[5]
		const addressbsTvPO5 = accounts[0]
		const WolfStakingRewardsUL5N1Ur = await WolfStakingRewards.new(addressxILjGK, addressA4RtzPt, addressbsTvPO5, {from: accounts[3]});
		const uintQEwQqF6 = BigInt("1990")
		const uintykTU5TR = BigInt("1096")
		const uintDwt14el = BigInt("1264")
		const uint1pQVIj = BigInt("349")
//		const uint256o9smSlp = await WolfStakingRewardsUL5N1Ur.withdrawRemainingBalance.call(uintykTU5TR, uintQEwQqF6, {from: accounts[3]});
//		const uint256kXLfQBX = await WolfStakingRewardsUL5N1Ur.getRewardForDuration.call(uintDwt14el, {from: accounts[1]});
//		const uint256RQSkyyD = await WolfStakingRewardsUL5N1Ur.rewardPerToken.call(uint1pQVIj, {from: accounts[4]});

		await expect(WolfStakingRewardsUL5N1Ur.withdrawRemainingBalance.call(uintykTU5TR, uintQEwQqF6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringKWGHBdm = "6sHPcxzKLLXqdqYN8RZnQqlZcPzrewa9iPwfNUgmW9OssjqTqYTeborbBQ7vomOIKVMj3vFbaWwaXrAUwWydaIaTe7kPEX"
		const stringg6cI8fO = "WLTbfwqUzdm4bkdOPEJ8smUl2j9URKANnUpreuqg9SMWA0Upgale7l9bgfjsievCbIQmjRUmHXHrva"
		const uintNSMZ3Tx = BigInt("103")
		const WolfStakingRewardsbKyORL = await WolfStakingRewards.new(stringKWGHBdm, stringg6cI8fO, uintNSMZ3Tx, {from: accounts[3]});
		const uint45hEEz = BigInt("1111")
		const uintPrb50qe = BigInt("132")
		const addresstyIyE6e = accounts[3]
		const uintXhqomub = BigInt("1404")
		const addressd99AwBl = "0x0000000000000000000000000000000000000001"
		const uintVMR96k = BigInt("1989")
		const addressSRELteO = accounts[4]
		const uintBbclOm0 = BigInt("558")
		const uint256MF72Ln = await WolfStakingRewardsbKyORL.rewardPerToken.call(uint45hEEz, {from: accounts[2]});
		const uint256kmD2czX = await WolfStakingRewardsbKyORL.balanceOfPerPool.call(addresstyIyE6e, uintPrb50qe, {from: accounts[0]});
		const uint256zXhXnTs = await WolfStakingRewardsbKyORL.earned.call(addressd99AwBl, uintXhqomub, {from: accounts[3]});
		const uint256l2Pnodd = await WolfStakingRewardsbKyORL.earned.call(addressSRELteO, uintVMR96k, {from: "0x0000000000000000000000000000000000000001"});
		const uint8g5Sjrhw = await WolfStakingRewardsbKyORL.decimals.call({from: accounts[5]});
		const uint256gdHZM0G = await WolfStakingRewardsbKyORL.lastTimeRewardApplicable.call(uintBbclOm0, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringNQQQM3a = "AwCskgu56aE0hnBYWrJgtgePFq3oTAFCySKMvQpSErbkMxji4mgvQUWADbgxD33gblAUCQS1jpNeLSUTmK88c2GGIsgPu3J"
		const stringUT7S8J3 = "1X6g1Um3Ixxz3yrg"
		const uintXKM4312 = BigInt("167")
		const WolfStakingRewardsHj9Fjcg = await WolfStakingRewards.new(stringNQQQM3a, stringUT7S8J3, uintXKM4312, {from: accounts[0]});
		const uintSlYWIh5 = BigInt("197")
		const addressdGCtc4 = accounts[0]
		const uintunHuQwV = BigInt("920")
		const addressinx6uft = await WolfStakingRewardsHj9Fjcg.updateReward.call(addressdGCtc4, uintSlYWIh5, {from: accounts[2]});
		const uint256mZJRnB7 = await WolfStakingRewardsHj9Fjcg.lastTimeRewardApplicable.call(uintunHuQwV, {from: accounts[4]});
		await WolfStakingRewardsHj9Fjcg.onlyOwner.call({from: accounts[2]});
		await WolfStakingRewardsHj9Fjcg.nonReentrant.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtH7QZS = "YeUg2Jq2PdgKsQrNXOK0"
		const stringZn9B2Pd = "ZZamZh5ipI4T7Llapn6zlsjgIKNG4dd6W7mHNWgbZ"
		const uintJFdaNa = BigInt("123")
		const WolfStakingRewardsl8zj69i = await WolfStakingRewards.new(stringtH7QZS, stringZn9B2Pd, uintJFdaNa, {from: accounts[0]});
		const uintEKFUju = BigInt("483")
		const uintnm15cFm = BigInt("1475")
		const uintQv1Iv7Y = BigInt("1493")
		const uintVfZHDZE = BigInt("243")
		const uintTirVVP7 = BigInt("19")
		await WolfStakingRewardsl8zj69i.nonReentrant.call({from: accounts[1]});
		const uintfnQkCb6 = await WolfStakingRewardsl8zj69i.getReward.call(uintEKFUju, {from: accounts[3]});
		const uint256JTxcI30 = await WolfStakingRewardsl8zj69i.stake.call(uintQv1Iv7Y, uintnm15cFm, {from: accounts[2]});
		await WolfStakingRewardsl8zj69i.nonReentrant.call({from: accounts[3]});
		const uint256qMUZZMr = await WolfStakingRewardsl8zj69i.stake.call(uintTirVVP7, uintVfZHDZE, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmE1XE1T = "MC05Aa4j4J1ZqaW6eOAxtiyHxo6gXebRZ80rypobEoXfifxeKJMrga7kKB2kLSSlVQ9etiKfknHxUBff4W7n"
		const stringLqovEp = "x59AhoIXcv7dygUTvwoA5PykQo3rVoNRPcn"
		const uintIpM15Cm = BigInt("44")
		const WolfStakingRewardsSel94Dk = await WolfStakingRewards.new(stringmE1XE1T, stringLqovEp, uintIpM15Cm, {from: accounts[0]});
		const uintpnEeLJQ = BigInt("1898")
		const uintdiUImW = BigInt("1943")
		const uintuejLWbX = BigInt("1070")
		const uintO4ExCKt = BigInt("192")
		const uintXKd1mon = BigInt("1444")
		const addressxvNg1oi = accounts[4]
		const string6kseVc = await WolfStakingRewardsSel94Dk.name.call({from: accounts[4]});
		const uint256BwqPB7h = await WolfStakingRewardsSel94Dk.totalSupplyPerPool.call(uintpnEeLJQ, {from: accounts[0]});
		const uint256PjVEOoI = await WolfStakingRewardsSel94Dk.exit.call(uintdiUImW, {from: accounts[4]});
		const uint256ebk9K7s = await WolfStakingRewardsSel94Dk.withdrawRemainingBalance.call(uintO4ExCKt, uintuejLWbX, {from: accounts[1]});
		const uint8n7HGwO = await WolfStakingRewardsSel94Dk.decimals.call({from: accounts[2]});
		const uint256xRJe02s = await WolfStakingRewardsSel94Dk.earned.call(addressxvNg1oi, uintXKd1mon, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHsZoNb = "o38UFU2QolWcHRDd8j8iIK827mbHKt2hCiwAZw7xeXt9jSr9TzWwkFaKZhT7BpItyn6ljfSgMJNYvo34mi7PTTw1fKQt1"
		const stringy902KgW = "RWCSVofVXpERxRZIQeDWIJhBUBCzG0qLNxw8"
		const uintVhtc2EB = BigInt("106")
		const WolfStakingRewardsbDoOERc = await WolfStakingRewards.new(stringHsZoNb, stringy902KgW, uintVhtc2EB, {from: accounts[3]});
		const uintoCQXAv9 = BigInt("1884")
		const uintCCLjfLs = BigInt("1556")
		const uinthdJ704K = BigInt("1659")
		const uint2565QALBT = await WolfStakingRewardsbDoOERc.exit.call(uintoCQXAv9, {from: accounts[0]});
		const stringmLQ2Rru = await WolfStakingRewardsbDoOERc.symbol.call({from: accounts[4]});
		await WolfStakingRewardsbDoOERc.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256l1x0MQs = await WolfStakingRewardsbDoOERc.withdrawRemainingBalance.call(uinthdJ704K, uintCCLjfLs, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPwdiwVL = "jCgAa9"
		const stringPoYIdM2 = "QaSjUMMBUgeWpBO8B3zt"
		const uintRJea7tA = BigInt("187")
		const WolfStakingRewardsxpn4j1x = await WolfStakingRewards.new(stringPwdiwVL, stringPoYIdM2, uintRJea7tA, {from: accounts[0]});
		const uintYggMeqG = BigInt("818")
		const addressfyCduRh = accounts[4]
		const uintoOWqPYu = BigInt("654")
		const uintbNGvbfB = BigInt("499")
		const uinthbL2QBT = BigInt("1984")
		const uint256arndMxw = await WolfStakingRewardsxpn4j1x.balanceOfPerPool.call(addressfyCduRh, uintYggMeqG, {from: accounts[1]});
		const uintiXunPLP = await WolfStakingRewardsxpn4j1x.getReward.call(uintoOWqPYu, {from: accounts[3]});
		const uint256YEkcNmY = await WolfStakingRewardsxpn4j1x.exit.call(uintbNGvbfB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256C1oIbGY = await WolfStakingRewardsxpn4j1x.getRewardForDuration.call(uinthbL2QBT, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringgwg69Kf = "ZsgwAAFymH11UnsDnvV7d"
		const stringvSoZCm4 = "hIug3QPQGv1dncuySrCLy9b0GqvQQ3AsqxW3hzE1dLkcNae2VKOlTeXcRaqFiovKmVdM3UaBre7U9"
		const uintSMFDvr4 = BigInt("41")
		const WolfStakingRewardsZ3Z062Q = await WolfStakingRewards.new(stringgwg69Kf, stringvSoZCm4, uintSMFDvr4, {from: accounts[4]});
		const uint5BVigJ = BigInt("1996")
		const uinttGpeA6o = BigInt("2044")
		const uintUzaSrNr = BigInt("1796")
		const addressP6db6Uf = accounts[1]
		const uintlXLCRqQ = await WolfStakingRewardsZ3Z062Q.getReward.call(uint5BVigJ, {from: accounts[2]});
		const uint256H1VffZi = await WolfStakingRewardsZ3Z062Q.getRewardForDuration.call(uinttGpeA6o, {from: accounts[5]});
		const uint256JCWsjk = await WolfStakingRewardsZ3Z062Q.balanceOfPerPool.call(addressP6db6Uf, uintUzaSrNr, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUMUf79D = "QTxlJwwoX1w77pwGVu"
		const stringAkGubUI = "LSd518oWjXyQ2GKPjQAYqALGFExB6qmjyFVXN01l4nWFWvQq"
		const uintctYqdGE = BigInt("69")
		const WolfStakingRewardsxKtA0rS = await WolfStakingRewards.new(stringUMUf79D, stringAkGubUI, uintctYqdGE, {from: accounts[4]});
		const uintelZGO85 = BigInt("1443")
		const uintR6dAvFv = BigInt("1060")
		const uintuoTvzU = BigInt("24")
		const uint256cWkg6gk = await WolfStakingRewardsxKtA0rS.exit.call(uintelZGO85, {from: accounts[3]});
		const uint256F2UrzYQ = await WolfStakingRewardsxKtA0rS.withdrawRemainingBalance.call(uintuoTvzU, uintR6dAvFv, {from: accounts[0]});
		const stringy5Hqu5G = await WolfStakingRewardsxKtA0rS.symbol.call({from: accounts[1]});
		await WolfStakingRewardsxKtA0rS.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringobDIh5z = "WjOV7WbWd4eDID4qENvoCwjfHBtYThgkekdyh5w"
		const stringCbne8FT = "pQ0NiTYaKAls6MN74jeUU04oT6jyoex4BWOzRNXOReipIPe3EJ48saXw4cMRByDItseLcmJMwIVOZJuhlUkVT73avRR"
		const uintcURZ8dh = BigInt("82")
		const WolfStakingRewardsIdb7VRN = await WolfStakingRewards.new(stringobDIh5z, stringCbne8FT, uintcURZ8dh, {from: accounts[4]});
		const uintNW2i4mj = BigInt("545")
		const addressuG6KdJ9 = accounts[1]
		const uintnqErXGd = BigInt("1444")
		const uintsBnLK6b = BigInt("371")
		const uint256kPZA7Rg = await WolfStakingRewardsIdb7VRN.balanceOfPerPool.call(addressuG6KdJ9, uintNW2i4mj, {from: accounts[3]});
		const uint256arraytx4DaZ = await WolfStakingRewardsIdb7VRN.updateNotifyRewardAmount.call(uintnqErXGd, {from: accounts[2]});
		const uint256SCeKeB = await WolfStakingRewardsIdb7VRN.totalSupplyPerPool.call(uintsBnLK6b, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMd7g8yJ = "q5Yvjl2rhsuK2dssU2c4Gam3Rqq94ZXn7DLxqmEwBcUvwFd"
		const stringg2pPdFW = "d3sDKUctyzArlyXWpY8qP1DN6lgY8CoyGr5CYpoot0cedBzPacGlfEhmT5rd85bBI"
		const uintjqNt33Y = BigInt("106")
		const WolfStakingRewardsMcX0gum = await WolfStakingRewards.new(stringMd7g8yJ, stringg2pPdFW, uintjqNt33Y, {from: accounts[0]});
		const uintD5UyPXU = BigInt("61")
		const uintwLVnDJN = BigInt("1967")
		const uinttsMk9Zm = BigInt("1094")
		const address15qYTz = accounts[2]
		const uintyjJZh6a = BigInt("295")
		const uintklxNUjj = BigInt("1675")
		const uintr6TVF4e = BigInt("1201")
		const addressOsUMhUS = accounts[3]
		const uint256IrsAPuP = await WolfStakingRewardsMcX0gum.stake.call(uintwLVnDJN, uintD5UyPXU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256JxVvFZ7 = await WolfStakingRewardsMcX0gum.earned.call(address15qYTz, uinttsMk9Zm, {from: accounts[4]});
		const uint256CgRIIrx = await WolfStakingRewardsMcX0gum.rewardPerToken.call(uintyjJZh6a, {from: accounts[3]});
		const uintRTCGOj = await WolfStakingRewardsMcX0gum.getReward.call(uintklxNUjj, {from: accounts[1]});
		const addressjhtOXE9 = await WolfStakingRewardsMcX0gum.updateReward.call(addressOsUMhUS, uintr6TVF4e, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringX0wlppA = "pnSxDFUqgjHEPSIbCv6m"
		const stringeDWcbgl = "yQwlAW69pwU8lrZRiJIH7oGeGwq5wAeqdfXlbmmzBB986MhFYIBoy2d5YT"
		const uintR8xUZzr = BigInt("241")
		const WolfStakingRewardsiiYBU9 = await WolfStakingRewards.new(stringX0wlppA, stringeDWcbgl, uintR8xUZzr, {from: "0x0000000000000000000000000000000000000001"});
		const uintrEJ0qjZ = BigInt("361")
		const addressMSmBaXi = accounts[2]
		const uintHd6YcUz = BigInt("1215")
		const addressJXjm7F9 = accounts[3]
		const uint256tjxFftt = await WolfStakingRewardsiiYBU9.balanceOfPerPool.call(addressMSmBaXi, uintrEJ0qjZ, {from: accounts[5]});
		await WolfStakingRewardsiiYBU9.nonReentrant.call({from: accounts[4]});
		const uint256CfTl3Tg = await WolfStakingRewardsiiYBU9.earned.call(addressJXjm7F9, uintHd6YcUz, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressKTMUp58 = accounts[4]
		const addressxfcv2bN = accounts[5]
		const addressZG37Jm0 = accounts[0]
		const WolfStakingRewardsUL5N1Ur = await WolfStakingRewards.new(addressKTMUp58, addressxfcv2bN, addressZG37Jm0, {from: accounts[3]});
		const uintPxfOVP = BigInt("10")
		const uintwMVHqgn = BigInt("618")
		const uintrqKOo2K = BigInt("879")
//		const uint256wy7F75l = await WolfStakingRewardsUL5N1Ur.exit.call(uintPxfOVP, {from: accounts[2]});
//		const uint256obFf9pV = await WolfStakingRewardsUL5N1Ur.lastTimeRewardApplicable.call(uintwMVHqgn, {from: accounts[5]});
//		const uint256kXLfQBX = await WolfStakingRewardsUL5N1Ur.getRewardForDuration.call(uintrqKOo2K, {from: accounts[1]});

		await expect(WolfStakingRewardsUL5N1Ur.exit.call(uintPxfOVP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringHuikkS = "LLXmSfpenwk7XHvdfHzGPE7IFrNhOT16zmj1f71HFG2dyzw9ZeaAlyLqDqXSN"
		const stringGLMrfFh = "xwlDY3huMxuRhs4pvmJ9WtidemQ7NuKQ4qOFlgc"
		const uintdXKlVI4 = BigInt("84")
		const WolfStakingRewardskC9AyMw = await WolfStakingRewards.new(stringHuikkS, stringGLMrfFh, uintdXKlVI4, {from: "0x0000000000000000000000000000000000000001"});
		const uinthtUq9B4 = BigInt("932")
		const addressNfzTxm = accounts[4]
		const uintZGkr6EW = BigInt("372")
		const address43GNoX = await WolfStakingRewardskC9AyMw.updateReward.call(addressNfzTxm, uinthtUq9B4, {from: accounts[1]});
		const uintnOJg0K4 = await WolfStakingRewardskC9AyMw.getReward.call(uintZGkr6EW, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLSJv8RZ = "B6bcuwgeAW6wELmoGf7nsqx2o9w1xVwB5H8WnzvGjmLII4g7X4VrhFLuipON5ODX"
		const stringubbHMmA = "ExaRLXyOV4rKsbzY9Puliof58gNIyWz8v"
		const uintmm8wh1i = BigInt("174")
		const WolfStakingRewardsbF51rB9 = await WolfStakingRewards.new(stringLSJv8RZ, stringubbHMmA, uintmm8wh1i, {from: accounts[0]});
		const uintQtmdzc = BigInt("1662")
		const uintGm0tlt7 = BigInt("1006")
		const uint256jvvZ28 = await WolfStakingRewardsbF51rB9.lastTimeRewardApplicable.call(uintQtmdzc, {from: accounts[3]});
		await WolfStakingRewardsbF51rB9.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256ywaPMuu = await WolfStakingRewardsbF51rB9.rewardPerToken.call(uintGm0tlt7, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringRBEmdUr = "EhdQIuRfocDFqMQPFedtzaEQ4Xj9"
		const stringxix0pE9 = "SFU05t8JY1UYP1yyXDKMlhICLqrdurIv0CCe8bipwVZ38YVU8zkXQKceuHB0SImDJb3MzjIougT1kQOgemXEg5q9p5pUuQymjs"
		const uinttXiSVZ3 = BigInt("55")
		const WolfStakingRewardsvvmGMP = await WolfStakingRewards.new(stringRBEmdUr, stringxix0pE9, uinttXiSVZ3, {from: accounts[1]});
		const uint4wqwEs = BigInt("50")
		const addressNtnPu55 = accounts[2]
		const uintGuCw6Cu = BigInt("1314")
		const addressLA0s9kX = accounts[4]
		const uintPQZJndU = BigInt("1064")
		const addressqvE0eKA = accounts[2]
		const uintKQi8v2b = BigInt("1906")
		const addressLov6XTn = accounts[3]
		const uint256Pr5zpU = await WolfStakingRewardsvvmGMP.balanceOfPerPool.call(addressNtnPu55, uint4wqwEs, {from: accounts[3]});
		const uint256zYET4ia = await WolfStakingRewardsvvmGMP.earned.call(addressLA0s9kX, uintGuCw6Cu, {from: accounts[3]});
		const addressZdelWW = await WolfStakingRewardsvvmGMP.updateReward.call(addressqvE0eKA, uintPQZJndU, {from: "0x0000000000000000000000000000000000000001"});
		const addressv9eDgo9 = await WolfStakingRewardsvvmGMP.updateReward.call(addressLov6XTn, uintKQi8v2b, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzOnmRW = "SvWwXSJ6PmBEWPge9QU4DEkODd7BgOoU5m6kjcadz26QBrltbRhtWYBUP5rrrAc75Yy2ph2uOXKDtaS"
		const stringe396BvC = "mYXrsol2lj7k1MapMWJCgTvTz69r9Much2DrU8TdZCLfCownRCrXgr7xs"
		const uintwbfFqSQ = BigInt("125")
		const WolfStakingRewardsJvNk4gA = await WolfStakingRewards.new(stringzOnmRW, stringe396BvC, uintwbfFqSQ, {from: accounts[3]});
		const uintK6Imsv = BigInt("234")
		const uintnDaYr5i = BigInt("5")
		const uintNaVe4Z = BigInt("249")
		const uintjihl28 = BigInt("90")
		const uint256IBvXnTS = await WolfStakingRewardsJvNk4gA.stake.call(uintnDaYr5i, uintK6Imsv, {from: accounts[3]});
		await WolfStakingRewardsJvNk4gA.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256EEABUZv = await WolfStakingRewardsJvNk4gA.getRewardForDuration.call(uintNaVe4Z, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsJvNk4gA.nonReentrant.call({from: accounts[1]});
		const uint256lld8hFC = await WolfStakingRewardsJvNk4gA.exit.call(uintjihl28, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeGmFjiQ = "alXX3YIK1wuuPiTgZ53xYuwjVXlCgxaH2KHrJZ9ikGryqmLZb"
		const stringWYjaHiq = "PbU7sVa8TMBADKRtb4TU5kxyw2U7udG7YDq9OI34fr3Bxjzk1WhIG6iBkirlWNhOrfsQcOkuIQDJ9hrT5S"
		const uintdpD7xUM = BigInt("228")
		const WolfStakingRewardsJbkbkM8 = await WolfStakingRewards.new(stringeGmFjiQ, stringWYjaHiq, uintdpD7xUM, {from: accounts[3]});
		const uintTMz9Cu = BigInt("1020")
		const uintUy41e2o = BigInt("1681")
		const uintzzWqjQC = BigInt("1841")
		const uintkU6lelp = BigInt("1100")
		const addressMGs9lCK = accounts[2]
		const uintSbJXF1L = BigInt("1366")
		const addressPVPgxoC = accounts[2]
		const uint256IhKPkNm = await WolfStakingRewardsJbkbkM8.rewardPerToken.call(uintTMz9Cu, {from: accounts[4]});
		const uint256arrayB31sDKm = await WolfStakingRewardsJbkbkM8.updateNotifyRewardAmount.call(uintUy41e2o, {from: accounts[3]});
		const uint256arrayiZNU4MW = await WolfStakingRewardsJbkbkM8.updateNotifyRewardAmount.call(uintzzWqjQC, {from: accounts[1]});
		await WolfStakingRewardsJbkbkM8.nonReentrant.call({from: accounts[1]});
		const uint256bHzbUiA = await WolfStakingRewardsJbkbkM8.earned.call(addressMGs9lCK, uintkU6lelp, {from: accounts[5]});
		const uint256N5GcPoP = await WolfStakingRewardsJbkbkM8.balanceOfPerPool.call(addressPVPgxoC, uintSbJXF1L, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhtp4fFa = "c8v12C"
		const stringvJaDNwu = "Cz0iNrO24mJPpzxX4vlPvV2wWibCIlrkowmxJ"
		const uintQYgqY4s = BigInt("184")
		const WolfStakingRewardswXd5YDR = await WolfStakingRewards.new(stringhtp4fFa, stringvJaDNwu, uintQYgqY4s, {from: accounts[4]});
		const uinta4fPMv8 = BigInt("351")
		const addressmdLGg2 = "0x0000000000000000000000000000000000000001"
		const uintHYGn6Yz = BigInt("39")
		const uintLtxZkjD = BigInt("1437")
		const uintUmKUZHg = BigInt("1977")
		const address06lMNm = accounts[3]
		const addressJ4F6EM = await WolfStakingRewardswXd5YDR.updateReward.call(addressmdLGg2, uinta4fPMv8, {from: accounts[0]});
		const uint256snIFFDf = await WolfStakingRewardswXd5YDR.stake.call(uintLtxZkjD, uintHYGn6Yz, {from: accounts[0]});
		const stringDqxM4ld = await WolfStakingRewardswXd5YDR.symbol.call({from: accounts[5]});
		const addressAD15w1D = await WolfStakingRewardswXd5YDR.updateReward.call(address06lMNm, uintUmKUZHg, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringO0PJQrR = "ImDNwji"
		const stringSIb1a1x = "R3JeHsyGuVwoDfncn8dREEsdk2RQnjy"
		const uintemRoqve = BigInt("91")
		const WolfStakingRewardsizKvsRE = await WolfStakingRewards.new(stringO0PJQrR, stringSIb1a1x, uintemRoqve, {from: accounts[0]});
		const uintbvvYdwr = BigInt("1587")
		const addressTtXlH4 = "0x0000000000000000000000000000000000000001"
		const uinttS77o5p = BigInt("1215")
		const stringq2M0t9Z = await WolfStakingRewardsizKvsRE.symbol.call({from: accounts[4]});
		const stringmtYhJeC = await WolfStakingRewardsizKvsRE.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const addressGdIrI6B = await WolfStakingRewardsizKvsRE.updateReward.call(addressTtXlH4, uintbvvYdwr, {from: accounts[1]});
		const uint256PygBE1z = await WolfStakingRewardsizKvsRE.rewardPerToken.call(uinttS77o5p, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringb2JYqy8 = "BYobqi99qEO4HW3JkM4OSG6TdPLZirf9kLUNdQ"
		const stringkveUJEX = "ZEvEhETCr4ugXV"
		const uintUxb8EBP = BigInt("130")
		const WolfStakingRewardsJONXDAN = await WolfStakingRewards.new(stringb2JYqy8, stringkveUJEX, uintUxb8EBP, {from: accounts[0]});
		const uintTRGGTRo = BigInt("799")
		const uintdZbwe80 = BigInt("969")
		const addressXFIB7EM = accounts[4]
		const uintXuvozbh = BigInt("1924")
		const uintwefQIM4 = BigInt("976")
		const uintMCxpz7H = BigInt("372")
		const addresstWJk85K = accounts[0]
		const uintr8SG72S = BigInt("1385")
		const uintt06yM08 = BigInt("1136")
		const uint256HEI3E5 = await WolfStakingRewardsJONXDAN.rewardPerToken.call(uintTRGGTRo, {from: accounts[2]});
		const uint256IwtqUs = await WolfStakingRewardsJONXDAN.earned.call(addressXFIB7EM, uintdZbwe80, {from: accounts[4]});
		const uint256y1xxXIS = await WolfStakingRewardsJONXDAN.stake.call(uintwefQIM4, uintXuvozbh, {from: accounts[1]});
		const addressxtiHLCx = await WolfStakingRewardsJONXDAN.updateReward.call(addresstWJk85K, uintMCxpz7H, {from: accounts[0]});
		const uint256MsvtQeP = await WolfStakingRewardsJONXDAN.getRewardForDuration.call(uintr8SG72S, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KgRKvkm = await WolfStakingRewardsJONXDAN.getRewardForDuration.call(uintt06yM08, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwGy2K2F = "4LYrbG8PgsmMUuLQvdkJK8WNYSfxdGRt2m"
		const stringfIFFNj3 = "bs3DB02LNN4mvv8JhThy8iBQNyjQPP8WByctayFuNUScXfNXAGspfW01lrmoqunRrEQgepC1K6aphbvWbdHsR5V"
		const uintVzlDEn4 = BigInt("113")
		const WolfStakingRewardsR88Vv0z = await WolfStakingRewards.new(stringwGy2K2F, stringfIFFNj3, uintVzlDEn4, {from: accounts[2]});
		const uinto66v5Iv = BigInt("1439")
		const addressJknlxly = accounts[1]
		const uint8ZMknF0T = await WolfStakingRewardsR88Vv0z.decimals.call({from: accounts[0]});
		const uint256KKzYLNS = await WolfStakingRewardsR88Vv0z.balanceOfPerPool.call(addressJknlxly, uinto66v5Iv, {from: accounts[0]});
		await WolfStakingRewardsR88Vv0z.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvrQw47f = "KusYiBRlu3RNshteF7OuBchjBtGGeo6I3hLh96b"
		const stringz9SFpYx = "pzFnPPVATdKOtq8YLCroKB8YbV2OlIr3TrOMWM5zpMRkhCs3LHBBY26m396NTnnS6zAqauXB8GVLScerPabEwR3gu8QL1qQ"
		const uintAZGV2Ss = BigInt("138")
		const WolfStakingRewardsoc2PhGG = await WolfStakingRewards.new(stringvrQw47f, stringz9SFpYx, uintAZGV2Ss, {from: "0x0000000000000000000000000000000000000001"});
		const uintnlvHXx7 = BigInt("1982")
		const uintqHlAg8Y = BigInt("65")
		const uintBUqN0H = BigInt("932")
		const uinte9R79i = BigInt("1040")
		const uintTXS0dpb = BigInt("1400")
		const uint256arraybfcgO7b = await WolfStakingRewardsoc2PhGG.updateNotifyRewardAmount.call(uintnlvHXx7, {from: accounts[5]});
		await WolfStakingRewardsoc2PhGG.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256jUcZ0AF = await WolfStakingRewardsoc2PhGG.stake.call(uintBUqN0H, uintqHlAg8Y, {from: accounts[4]});
		const uint256NuxZkzr = await WolfStakingRewardsoc2PhGG.withdraw.call(uintTXS0dpb, uinte9R79i, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringBUZYh36 = "11U8S7lg3VwLm8aKUIzYDcMUYsp9jzTJ6U"
		const stringHcSY1uG = "ZgdLkdTRVpeBHEYTR8MM2ndo5t2f9J7xLRin5541"
		const uintzme5pJJ = BigInt("146")
		const WolfStakingRewardsVeG1mpi = await WolfStakingRewards.new(stringBUZYh36, stringHcSY1uG, uintzme5pJJ, {from: accounts[1]});
		const uintSqiEGtX = BigInt("74")
		const uintAov5uRi = BigInt("1745")
		const uintjlXjQko = BigInt("558")
		const uintgj5aP9x = BigInt("1558")
		const uintt80Soie = await WolfStakingRewardsVeG1mpi.getReward.call(uintSqiEGtX, {from: accounts[0]});
		const uint256LneeWzr = await WolfStakingRewardsVeG1mpi.stake.call(uintjlXjQko, uintAov5uRi, {from: accounts[4]});
		const uintN2Y05HV = await WolfStakingRewardsVeG1mpi.getReward.call(uintgj5aP9x, {from: accounts[0]});
		const stringc4VCZ2U = await WolfStakingRewardsVeG1mpi.symbol.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPMJoSDe = "v"
		const stringvHiLigO = "TeLhshRu3XP0E2gOtYjJdIkzPO6l65Iy9LTYRnwPw1RkdkfyydliwAJbuA4f5ET"
		const uintcLIFXvg = BigInt("94")
		const WolfStakingRewardsuXeFop8 = await WolfStakingRewards.new(stringPMJoSDe, stringvHiLigO, uintcLIFXvg, {from: accounts[2]});
		const uintrg2ZseJ = BigInt("243")
		const uintnoqjeC = BigInt("1228")
		const uinty1lu2WO = BigInt("783")
		const uint256mRES5Qn = await WolfStakingRewardsuXeFop8.totalSupplyPerPool.call(uintrg2ZseJ, {from: accounts[3]});
		const uint256ibXk9qR = await WolfStakingRewardsuXeFop8.totalSupplyPerPool.call(uintnoqjeC, {from: accounts[3]});
		const uint256Ckzr3H7 = await WolfStakingRewardsuXeFop8.totalSupplyPerPool.call(uinty1lu2WO, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringas41oaC = "cbkaElRxuatClulEOJyoO02OuUuFCfWZ1silLKKeJhZMkk4hMJSFUS9StqpCRkBBYHWONsXaNIhywXTQWaTfLRHGt2Mx3b"
		const stringWhkeWn7 = "6JxWMHZ1QZMuHaN91VJQj34l9gxPnOeeFSdo7R7c4XswaC1UntkVTsSHQ0KSXcGkqA8PxRtrHqRdJvPxKGfFCkahXDAgRs"
		const uintVWPeqzu = BigInt("170")
		const WolfStakingRewardszk16vXv = await WolfStakingRewards.new(stringas41oaC, stringWhkeWn7, uintVWPeqzu, {from: "0x0000000000000000000000000000000000000001"});
		const uintOIMCuys = BigInt("1812")
		const uintnglccdW = BigInt("374")
		const uintBVRYhWA = BigInt("1027")
		const uinthOTtZcP = BigInt("2029")
		const uintr3HPO2p = BigInt("1919")
		await WolfStakingRewardszk16vXv.nonReentrant.call({from: accounts[1]});
		const uint256hFWLYHe = await WolfStakingRewardszk16vXv.withdrawRemainingBalance.call(uintnglccdW, uintOIMCuys, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayVTMMyX9 = await WolfStakingRewardszk16vXv.updateNotifyRewardAmount.call(uintBVRYhWA, {from: accounts[5]});
		const uint256Dj5CsN = await WolfStakingRewardszk16vXv.totalSupplyPerPool.call(uinthOTtZcP, {from: accounts[3]});
		const uint256ojzpWiX = await WolfStakingRewardszk16vXv.lastTimeRewardApplicable.call(uintr3HPO2p, {from: accounts[5]});
		const stringwI7ipWZ = await WolfStakingRewardszk16vXv.symbol.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKAlw9RQ = "DryFW5vmbaLPccIi6BTIPLjcz"
		const stringChRiAIo = "4YDRXgHYm9luS8PW1uShgbYBJVmGom"
		const uintARD5dKa = BigInt("176")
		const WolfStakingRewardsBcZEOOq = await WolfStakingRewards.new(stringKAlw9RQ, stringChRiAIo, uintARD5dKa, {from: "0x0000000000000000000000000000000000000001"});
		const uintAqb8CEV = BigInt("868")
		const addressylgCudK = accounts[4]
		const uintRE4HXhV = BigInt("575")
		const addressU4cFfeY = await WolfStakingRewardsBcZEOOq.updateReward.call(addressylgCudK, uintAqb8CEV, {from: accounts[3]});
		const uintEgFoMM = await WolfStakingRewardsBcZEOOq.getReward.call(uintRE4HXhV, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMJOpjxA = "bIxcsGZJ3sSle27w1ByHTaFetIiRgMMkXmWAjV1XywmSHqsNcm5gddIpH3t0DlFjPn4hUVYduVG482Tw6abLwy"
		const stringDA1u7AU = "9sVXmTPs0ic5wEYNLvUONOaUFQ69Ro2PaBEcweX2AdjrJy8iP5mfpQDGWvVPCYn2tQgyWqEJnvf8J2heXPyXV6qL4tQzHsZzaW"
		const uintT6Ostmh = BigInt("244")
		const WolfStakingRewardsqLBLZFL = await WolfStakingRewards.new(stringMJOpjxA, stringDA1u7AU, uintT6Ostmh, {from: accounts[0]});
		const uintb4Oautj = BigInt("201")
		const addressCEBtOvo = "0x0000000000000000000000000000000000000001"
		const uintHXRmO3n = BigInt("511")
		const uintomnrnl0 = BigInt("1115")
		const uint256Si0V3JU = await WolfStakingRewardsqLBLZFL.earned.call(addressCEBtOvo, uintb4Oautj, {from: accounts[5]});
		const uint2569eBLez = await WolfStakingRewardsqLBLZFL.exit.call(uintHXRmO3n, {from: accounts[2]});
		const uint256arrayyzRo2wN = await WolfStakingRewardsqLBLZFL.updateNotifyRewardAmount.call(uintomnrnl0, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringw5rKgJP = "8rDXbtScO67lzFvqxpJMuTBEc82RLfOK7jOB6MFofUnoRn2LNIyrzYKhMxcDw"
		const stringUJ47zr = "BY950aPuKUkyeA7"
		const uintdE5ySPY = BigInt("228")
		const WolfStakingRewardsZskSffK = await WolfStakingRewards.new(stringw5rKgJP, stringUJ47zr, uintdE5ySPY, {from: accounts[5]});
		const uintQQxwQWh = BigInt("1080")
		const addressqqjoW7g = accounts[1]
		const uintTWEg3AI = BigInt("1586")
		const addressKJnizYq = accounts[3]
		const stringMxlzihD = await WolfStakingRewardsZskSffK.symbol.call({from: accounts[0]});
		const uint256ELKV43j = await WolfStakingRewardsZskSffK.balanceOfPerPool.call(addressqqjoW7g, uintQQxwQWh, {from: accounts[3]});
		const addressk1sgTEM = await WolfStakingRewardsZskSffK.updateReward.call(addressKJnizYq, uintTWEg3AI, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringImIhHqw = "bBCcwjtgDkkgFtx7PoTTPe2OK1MU1PL47ahpAneAgMmIjWRFo7iWaUAOTLMS4JoxG3vkilFfEvRKog33N"
		const stringjkHvBWb = "ofotLQ3rkrfQwRECwfjVtnaHzv9TpMw2kQIjc"
		const uintePIRzYZ = BigInt("137")
		const WolfStakingRewardsM4dyfwE = await WolfStakingRewards.new(stringImIhHqw, stringjkHvBWb, uintePIRzYZ, {from: accounts[4]});
		const uintDKQhA90 = BigInt("1710")
		const uinttn68fx8 = BigInt("1550")
		const uintN7TYA0G = BigInt("1461")
		const uintABLVTvL = BigInt("1962")
		const addressYFMGNKz = accounts[2]
		const uint256zBrE6C2 = await WolfStakingRewardsM4dyfwE.exit.call(uintDKQhA90, {from: accounts[1]});
		const uint8MUCtX7 = await WolfStakingRewardsM4dyfwE.decimals.call({from: accounts[0]});
		const uint256kVHaAoA = await WolfStakingRewardsM4dyfwE.withdrawRemainingBalance.call(uintN7TYA0G, uinttn68fx8, {from: accounts[0]});
		const addressW932JMe = await WolfStakingRewardsM4dyfwE.updateReward.call(addressYFMGNKz, uintABLVTvL, {from: accounts[0]});
		await WolfStakingRewardsM4dyfwE.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringczBBIWr = "nHjz1Itch5FBUpmY4asLHHqE8MMT4i2QJYkZ"
		const stringIpvLRZ0 = "515FmfWKTBAzOBWYXw6QDCQqEWmKSyyHPURge9danwSnxXO51hjBdJiD7rsFHnmLpnfNFqac1Te5bk"
		const uintCNz60ck = BigInt("158")
		const WolfStakingRewardsQmGtG44 = await WolfStakingRewards.new(stringczBBIWr, stringIpvLRZ0, uintCNz60ck, {from: accounts[4]});
		const uintKehPuGu = BigInt("146")
		const addressmWAd88u = accounts[1]
		const uintlPRzMr5 = BigInt("1484")
		const uintJMobVz = BigInt("1367")
		const uintJbyyBVK = BigInt("1465")
		const uint256MWxaPGP = await WolfStakingRewardsQmGtG44.earned.call(addressmWAd88u, uintKehPuGu, {from: accounts[0]});
		const uint256YPLWq31 = await WolfStakingRewardsQmGtG44.withdrawRemainingBalance.call(uintJMobVz, uintlPRzMr5, {from: accounts[4]});
		const uintnWYGKwR = await WolfStakingRewardsQmGtG44.getReward.call(uintJbyyBVK, {from: accounts[5]});
	});
})