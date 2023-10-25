const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressEGNpmfE = accounts[1]
		const addressggiDAdV = accounts[4]
		const addressCIyHaUT = accounts[2]
		const WolfStakingRewardsvZbRGaz = await WolfStakingRewards.new(addressEGNpmfE, addressggiDAdV, addressCIyHaUT, {from: accounts[4]});
		const uintZYW8m8T = BigInt("9")
		const uintuj0Uj53 = BigInt("1823")
		const uintV6VIvtX = BigInt("710")
		const uintECBErT5 = BigInt("1651")
		const addressatRe14W = accounts[4]
//		const uint8Xsg7do = await WolfStakingRewardsvZbRGaz.decimals.call({from: accounts[1]});
//		const uint256szzaF6l = await WolfStakingRewardsvZbRGaz.withdraw.call(uintuj0Uj53, uintZYW8m8T, {from: accounts[3]});
//		const uint256gYSq9B = await WolfStakingRewardsvZbRGaz.lastTimeRewardApplicable.call(uintV6VIvtX, {from: accounts[2]});
//		const uint256bygOnnB = await WolfStakingRewardsvZbRGaz.earned.call(addressatRe14W, uintECBErT5, {from: accounts[0]});

		await expect(WolfStakingRewardsvZbRGaz.decimals.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressHaPBMk = "0x0000000000000000000000000000000000000001"
		const addressC1vY7Hf = accounts[1]
		const addressVpJKWR8 = accounts[2]
		const WolfStakingRewardsTyHGI4v = await WolfStakingRewards.new(addressHaPBMk, addressC1vY7Hf, addressVpJKWR8, {from: accounts[3]});
		const uintQfFrGtU = BigInt("369")
		const uintn1PTQWH = BigInt("1188")
		const uintIXadK9K = BigInt("407")
		const uintjgLCJLn = BigInt("589")
//		const uint256I99dCNV = await WolfStakingRewardsTyHGI4v.exit.call(uintQfFrGtU, {from: accounts[5]});
//		await WolfStakingRewardsTyHGI4v.onlyOwner.call({from: accounts[3]});
//		const uint256array3ILMr2 = await WolfStakingRewardsTyHGI4v.updateNotifyRewardAmount.call(uintn1PTQWH, {from: accounts[4]});
//		const uint256YCjW87B = await WolfStakingRewardsTyHGI4v.lastTimeRewardApplicable.call(uintIXadK9K, {from: accounts[3]});
//		const uintB0B1bN = await WolfStakingRewardsTyHGI4v.getReward.call(uintjgLCJLn, {from: accounts[0]});

		await expect(WolfStakingRewardsTyHGI4v.exit.call(uintQfFrGtU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringOalpnb = "KlB0KlDY9hTtfeFH1hyg14Rrv7ysKKwsQWyqzLiMOnsAtbW4k4rs6rLVAvEnC35twd3PohaZigpXoqe83JSYJY9UkVF"
		const stringI3SoD8d = "ekoZfBARJYwZOciOkATKRMXbGTADZOHiprcX2CkJlhcramNQHWimmmXN64H3I"
		const uintIHnxBLB = BigInt("106")
		const WolfStakingRewardsGJI1gtm = await WolfStakingRewards.new(stringOalpnb, stringI3SoD8d, uintIHnxBLB, {from: accounts[1]});
		const uintZzdv5rX = BigInt("778")
		const addressyzAtqe = accounts[1]
		const uintqPltwFu = BigInt("803")
		const uintlgsAaiT = BigInt("1218")
		const uintOqOxZxQ = BigInt("759")
		const addressrkp2C7d = accounts[0]
		const addresssdTc3pw = await WolfStakingRewardsGJI1gtm.updateReward.call(addressyzAtqe, uintZzdv5rX, {from: accounts[1]});
		const uint256lC90yFR = await WolfStakingRewardsGJI1gtm.withdrawRemainingBalance.call(uintlgsAaiT, uintqPltwFu, {from: accounts[0]});
		const uint256AYyKO8h = await WolfStakingRewardsGJI1gtm.balanceOfPerPool.call(addressrkp2C7d, uintOqOxZxQ, {from: accounts[2]});
		const stringriBcKcT = await WolfStakingRewardsGJI1gtm.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addressBTFKn6M = accounts[2]
		const addressBjr14GJ = accounts[1]
		const addressGOMrFJU = accounts[4]
		const WolfStakingRewardsZ6mDW35 = await WolfStakingRewards.new(addressBTFKn6M, addressBjr14GJ, addressGOMrFJU, {from: accounts[1]});
		const uintNq8j4Ou = BigInt("1841")
		const uintokOz12p = BigInt("1456")
//		const uint256arrayWrrexyo = await WolfStakingRewardsZ6mDW35.updateNotifyRewardAmount.call(uintNq8j4Ou, {from: accounts[3]});
//		const stringH2xhXyF = await WolfStakingRewardsZ6mDW35.symbol.call({from: accounts[1]});
//		const uint256iqxHTId = await WolfStakingRewardsZ6mDW35.getRewardForDuration.call(uintokOz12p, {from: accounts[2]});

		await expect(WolfStakingRewardsZ6mDW35.updateNotifyRewardAmount.call(uintNq8j4Ou, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringic7Hkv = "4OGIdAaI4pKmtxCw6aSykoV2OLczmFeU2iZR9wlv3BwMxXq4VUHJrbrVl4PImvGWhaIOuOzbzIQvNt4DqKPLG3nK"
		const stringMgiHDdA = "Ls5NWmBVkjug6WW7MwBWyHCEUekdVhG3WB2PorS8eMsSHSWVMVNp7hUuWD1Q3v9cosnTg"
		const uintlakStOP = BigInt("23")
		const WolfStakingRewardsmw5MAVY = await WolfStakingRewards.new(stringic7Hkv, stringMgiHDdA, uintlakStOP, {from: accounts[4]});
		const uintuQEKBS0 = BigInt("1537")
		const uintPsm81pK = BigInt("1446")
		const uintF6vORSK = BigInt("1767")
		const uintmVhHyf9 = BigInt("400")
		await WolfStakingRewardsmw5MAVY.nonReentrant.call({from: accounts[5]});
		const uint256arrayPJSQPXU = await WolfStakingRewardsmw5MAVY.updateNotifyRewardAmount.call(uintuQEKBS0, {from: accounts[5]});
		const uint256davp177 = await WolfStakingRewardsmw5MAVY.withdraw.call(uintF6vORSK, uintPsm81pK, {from: accounts[3]});
		const uint256nna7hGX = await WolfStakingRewardsmw5MAVY.exit.call(uintmVhHyf9, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringiSmQlYz = "FpYoVzr2hf4va3JQJjisXLIgALcvlQAu5eqWiZht9LQSf2Y5R3JequbjLVKOSOQbL2HzjxUwdzksg"
		const stringYShEX2 = "A6wyxooM9KIXNnK1k5eIy3N2REysM2hbcH9dk5fSmssa"
		const uintfWMQHQA = BigInt("206")
		const WolfStakingRewardsv0odJPZ = await WolfStakingRewards.new(stringiSmQlYz, stringYShEX2, uintfWMQHQA, {from: accounts[1]});
		const uintpTzU3uZ = BigInt("1925")
		const uintCbZwgJ8 = BigInt("557")
		const uintzT8Ltct = BigInt("751")
		const uint256gtngiVg = await WolfStakingRewardsv0odJPZ.rewardPerToken.call(uintpTzU3uZ, {from: accounts[4]});
		const uint256pnbWZ7b = await WolfStakingRewardsv0odJPZ.stake.call(uintzT8Ltct, uintCbZwgJ8, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressgraf075 = accounts[1]
		const addressV4sKRvS = accounts[3]
		const addressmDcXVGj = accounts[5]
		const WolfStakingRewardsxE9eTQc = await WolfStakingRewards.new(addressgraf075, addressV4sKRvS, addressmDcXVGj, {from: "0x0000000000000000000000000000000000000001"});
		const uintY8Tq2S5 = BigInt("759")
		const addressPXIuhiG = accounts[2]
		const stringlcSJ5KM = await WolfStakingRewardsxE9eTQc.symbol.call({from: accounts[5]});
		const uint256cuxCLcg = await WolfStakingRewardsxE9eTQc.balanceOfPerPool.call(addressPXIuhiG, uintY8Tq2S5, {from: accounts[0]});
		await WolfStakingRewardsxE9eTQc.onlyOwner.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const string7sShYp = "OsorSfIi2fmLzZ9EVcqFIYAPDLpuxQb0x"
		const stringiNKBAwJ = "M5R2NxxxJzfbsmlBJrsBGkSgDHOVZ5QMEDVXJoKIk5tXoSa1c6rvgO"
		const uintsADBMCb = BigInt("103")
		const WolfStakingRewardsZ5ZZogI = await WolfStakingRewards.new(string7sShYp, stringiNKBAwJ, uintsADBMCb, {from: accounts[4]});
		await WolfStakingRewardsZ5ZZogI.nonReentrant.call({from: accounts[3]});
		await WolfStakingRewardsZ5ZZogI.nonReentrant.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringEk0PuM9 = "lji588zC2CE4SjEkxLM"
		const stringi55L8d = "oqhnm2jofGLRy3OZBRjh0n3f2YbnohdsXRH81P2ANCDwmvIBsUAug"
		const uintTGyY6gS = BigInt("246")
		const WolfStakingRewardsYhro9nl = await WolfStakingRewards.new(stringEk0PuM9, stringi55L8d, uintTGyY6gS, {from: "0x0000000000000000000000000000000000000001"});
		const uintX6ucQ6K = BigInt("526")
		const uintJSc2qTx = BigInt("1373")
		const addresssVoIeXs = accounts[5]
		const uint256youarua = await WolfStakingRewardsYhro9nl.lastTimeRewardApplicable.call(uintX6ucQ6K, {from: accounts[3]});
		const uint256JxjE7bs = await WolfStakingRewardsYhro9nl.earned.call(addresssVoIeXs, uintJSc2qTx, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxh2G7Mf = "PtsMAGuRwDEPo4JhDIfP0wCPOjCBEKyqQQUad6DBZVd5tgtD3wHKbENAmI1GwSDwtvunANa8T43kmXjZr5E9Ar"
		const stringppQAEj = "86QpUXsUDskYF52jsMfm3BDCX6sYusd5VE5O3DUrB"
		const uintEoTSpgW = BigInt("21")
		const WolfStakingRewardsaDIUVkq = await WolfStakingRewards.new(stringxh2G7Mf, stringppQAEj, uintEoTSpgW, {from: accounts[5]});
		const uintHTYd2TD = BigInt("110")
		const addressqLRWexA = accounts[3]
		const uintJdfsf2f = BigInt("1030")
		const uintAYegdwG = BigInt("706")
		const uintmSCuBKh = BigInt("822")
		const uintRSzz1t = BigInt("684")
		const addressSE0WMRm = accounts[4]
		const uint8ibs7jUq = await WolfStakingRewardsaDIUVkq.decimals.call({from: accounts[5]});
		const uint256TdH7VVr = await WolfStakingRewardsaDIUVkq.balanceOfPerPool.call(addressqLRWexA, uintHTYd2TD, {from: accounts[3]});
		const uint256bUm7pG = await WolfStakingRewardsaDIUVkq.rewardPerToken.call(uintJdfsf2f, {from: accounts[3]});
		const uint256FajL1vG = await WolfStakingRewardsaDIUVkq.getRewardForDuration.call(uintAYegdwG, {from: accounts[5]});
		const uint256oFet3GM = await WolfStakingRewardsaDIUVkq.totalSupplyPerPool.call(uintmSCuBKh, {from: accounts[3]});
		const uint2565QnnHU = await WolfStakingRewardsaDIUVkq.earned.call(addressSE0WMRm, uintRSzz1t, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKw8JBAe = "2E6MkgNCTBNICpsMn7WJm8q9hf9LGHCiJFtIzfzIo8RfO4OwJ9dwQCGjsLcoIOHemXAgqEKqgQ5zGqX9UIXL5U9VqR7xugPYBp"
		const stringaaym3cG = "8u7JjnbsKYQMUzoagTNDOmntaEY51wnEMVjX2AjaDvjDwF"
		const uinti6Nj73F = BigInt("59")
		const WolfStakingRewardsuzDbiR7 = await WolfStakingRewards.new(stringKw8JBAe, stringaaym3cG, uinti6Nj73F, {from: accounts[4]});
		const uinttdeV1pl = BigInt("2035")
		const uint256VGGcCHQ = await WolfStakingRewardsuzDbiR7.getRewardForDuration.call(uinttdeV1pl, {from: accounts[4]});
		const stringyjsSht5 = await WolfStakingRewardsuzDbiR7.name.call({from: accounts[5]});
		await WolfStakingRewardsuzDbiR7.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsuzDbiR7.nonReentrant.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressLcLqPsi = "0x0000000000000000000000000000000000000001"
		const addressTptXuOj = accounts[2]
		const address2soloQ = accounts[3]
		const WolfStakingRewardsXBAJUpQ = await WolfStakingRewards.new(addressLcLqPsi, addressTptXuOj, address2soloQ, {from: accounts[2]});
		const uintO5fRY8h = BigInt("1067")
		const addressAJgVJoo = accounts[2]
		const uintI7Lbu7D = BigInt("446")
		const addressGITn8WS = accounts[0]
		const uintvTH2c1g = BigInt("25")
		const uintTMjgnj = BigInt("55")
		const addresszbmIMyD = accounts[4]
		const uintwgQhD4d = BigInt("287")
		const addresslymW5OW = accounts[2]
		const uint256cQUwvK7 = await WolfStakingRewardsXBAJUpQ.earned.call(addressAJgVJoo, uintO5fRY8h, {from: accounts[5]});
		const uint256YRMvvrO = await WolfStakingRewardsXBAJUpQ.balanceOfPerPool.call(addressGITn8WS, uintI7Lbu7D, {from: accounts[1]});
		const uint256SXDse4g = await WolfStakingRewardsXBAJUpQ.lastTimeRewardApplicable.call(uintvTH2c1g, {from: accounts[4]});
//		const addressv0JZByG = await WolfStakingRewardsXBAJUpQ.updateReward.call(addresszbmIMyD, uintTMjgnj, {from: accounts[1]});
//		const uint256dQnyWE = await WolfStakingRewardsXBAJUpQ.balanceOfPerPool.call(addresslymW5OW, uintwgQhD4d, {from: accounts[4]});
//		const uint8psxk6IY = await WolfStakingRewardsXBAJUpQ.decimals.call({from: accounts[1]});

		assert.equal(uint256SXDse4g, BigInt("0"))
		assert.equal(uint256YRMvvrO, BigInt("0"))
		assert.equal(uint256cQUwvK7, BigInt("0"))
		await expect(WolfStakingRewardsXBAJUpQ.updateReward.call(addresszbmIMyD, uintTMjgnj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringZ1q7RYt = "g3OdZOTdhNlyTGBV6XMKahMz8vmBn8G82gXa0e0rYYmyT1RXbnXj"
		const stringLIj4ucL = "ZOYgEEZSFv5TfgEhrJoUVUyiL1wpdGANB6TDkbWDPDaJCXFnjb5bbYq1PXa5c3vlY"
		const uintgg2uEAx = BigInt("110")
		const WolfStakingRewardsbCvEDLM = await WolfStakingRewards.new(stringZ1q7RYt, stringLIj4ucL, uintgg2uEAx, {from: accounts[1]});
		const uintV0uGGuC = BigInt("711")
		const uintrz5E9N2 = BigInt("1437")
		const uintrliBq2 = BigInt("455")
		const uinttEvClv6 = BigInt("179")
		const uintj8kZhy = BigInt("726")
		const stringilqJvJc = await WolfStakingRewardsbCvEDLM.symbol.call({from: accounts[1]});
		const uint256Aht6RI4 = await WolfStakingRewardsbCvEDLM.withdraw.call(uintrz5E9N2, uintV0uGGuC, {from: accounts[0]});
		await WolfStakingRewardsbCvEDLM.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256EvNG3n = await WolfStakingRewardsbCvEDLM.totalSupplyPerPool.call(uintrliBq2, {from: accounts[4]});
		const uint256jGmDf0M = await WolfStakingRewardsbCvEDLM.exit.call(uinttEvClv6, {from: accounts[2]});
		const uint256eh4Cck = await WolfStakingRewardsbCvEDLM.exit.call(uintj8kZhy, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressknOlNU5 = "0x0000000000000000000000000000000000000001"
		const addressqhCUsN = accounts[2]
		const addressy4Iup0B = accounts[3]
		const WolfStakingRewardsXBAJUpQ = await WolfStakingRewards.new(addressknOlNU5, addressqhCUsN, addressy4Iup0B, {from: accounts[2]});
		const uinte5YM2hq = BigInt("1043")
		const addressbadffR = accounts[2]
		const uintlMIBD2z = BigInt("193")
		const uintR519hD5 = BigInt("598")
		const uintkFhnNVB = BigInt("25")
		const uintzIj8Haq = BigInt("287")
		const addresscPuqEZ = accounts[2]
		const uintAE4Qak = BigInt("509")
		const uintdmerDZ = BigInt("127")
		const addresssQbEcrg = accounts[4]
		const uint256cQUwvK7 = await WolfStakingRewardsXBAJUpQ.earned.call(addressbadffR, uinte5YM2hq, {from: accounts[5]});
//		const uint256FMyRk7N = await WolfStakingRewardsXBAJUpQ.withdrawRemainingBalance.call(uintR519hD5, uintlMIBD2z, {from: accounts[3]});
//		const uint256SXDse4g = await WolfStakingRewardsXBAJUpQ.lastTimeRewardApplicable.call(uintkFhnNVB, {from: accounts[4]});
//		const uint256dQnyWE = await WolfStakingRewardsXBAJUpQ.balanceOfPerPool.call(addresscPuqEZ, uintzIj8Haq, {from: accounts[4]});
//		const uint256bTTJKX = await WolfStakingRewardsXBAJUpQ.exit.call(uintAE4Qak, {from: accounts[0]});
//		const uint8psxk6IY = await WolfStakingRewardsXBAJUpQ.decimals.call({from: accounts[1]});
//		const uint256xoEsv2G = await WolfStakingRewardsXBAJUpQ.balanceOfPerPool.call(addresssQbEcrg, uintdmerDZ, {from: accounts[3]});

		assert.equal(uint256cQUwvK7, BigInt("0"))
		await expect(WolfStakingRewardsXBAJUpQ.withdrawRemainingBalance.call(uintR519hD5, uintlMIBD2z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresswDrfCo9 = "0x0000000000000000000000000000000000000001"
		const addressSKxTq53 = accounts[2]
		const addressqKZn3Jm = accounts[3]
		const WolfStakingRewardsXBAJUpQ = await WolfStakingRewards.new(addresswDrfCo9, addressSKxTq53, addressqKZn3Jm, {from: accounts[2]});
		const uintMTylJaQ = BigInt("1067")
		const addressAae5QkF = accounts[2]
		const uintfhrIkDm = BigInt("1690")
		const uintdG3xvK = BigInt("82")
		const uintBnKlGWu = BigInt("1462")
		const uint256cQUwvK7 = await WolfStakingRewardsXBAJUpQ.earned.call(addressAae5QkF, uintMTylJaQ, {from: accounts[5]});
//		const uint256BH2k86 = await WolfStakingRewardsXBAJUpQ.stake.call(uintdG3xvK, uintfhrIkDm, {from: accounts[2]});
//		const uint256SXDse4g = await WolfStakingRewardsXBAJUpQ.lastTimeRewardApplicable.call(uintBnKlGWu, {from: accounts[4]});

		assert.equal(uint256cQUwvK7, BigInt("0"))
		await expect(WolfStakingRewardsXBAJUpQ.stake.call(uintdG3xvK, uintfhrIkDm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressgVlBnS = "0x0000000000000000000000000000000000000001"
		const addressWI4h5ae = accounts[3]
		const addressMaC0j2b = accounts[0]
		const WolfStakingRewardsawSD7zT = await WolfStakingRewards.new(addressgVlBnS, addressWI4h5ae, addressMaC0j2b, {from: accounts[5]});
		const uintUyd5Izp = BigInt("2039")
		const uintMo5wW2U = BigInt("177")
		const addressVnK0RKt = accounts[2]
		const uintNiaIEjg = BigInt("823")
		const uintILeXV9 = BigInt("1400")
		const addresszu2ynXJ = accounts[0]
		const uintqrpCUox = await WolfStakingRewardsawSD7zT.getReward.call(uintUyd5Izp, {from: accounts[5]});
//		const addressLFFAcVX = await WolfStakingRewardsawSD7zT.updateReward.call(addressVnK0RKt, uintMo5wW2U, {from: accounts[3]});
//		const uint256xfy5NQz = await WolfStakingRewardsawSD7zT.lastTimeRewardApplicable.call(uintNiaIEjg, {from: accounts[4]});
//		const uint8CXcyTaI = await WolfStakingRewardsawSD7zT.decimals.call({from: accounts[1]});
//		const addressGH7zDE = await WolfStakingRewardsawSD7zT.updateReward.call(addresszu2ynXJ, uintILeXV9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WolfStakingRewardsawSD7zT.updateReward.call(addressVnK0RKt, uintMo5wW2U, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const address9ok89d = "0x0000000000000000000000000000000000000001"
		const addressIL75DZd = accounts[2]
		const addressTt3KJGo = accounts[3]
		const WolfStakingRewardsXBAJUpQ = await WolfStakingRewards.new(address9ok89d, addressIL75DZd, addressTt3KJGo, {from: accounts[2]});
		const uintEoxSVsZ = BigInt("1067")
		const addressbobAsle = accounts[2]
		const uintKcrvGLq = BigInt("1690")
		const uintqUfLoBz = BigInt("82")
		const uintb9oao7A = BigInt("1456")
		const uint256cQUwvK7 = await WolfStakingRewardsXBAJUpQ.earned.call(addressbobAsle, uintEoxSVsZ, {from: accounts[5]});
//		const uint256BH2k86 = await WolfStakingRewardsXBAJUpQ.stake.call(uintqUfLoBz, uintKcrvGLq, {from: accounts[2]});
//		const uint8RrnIri = await WolfStakingRewardsXBAJUpQ.decimals.call({from: accounts[3]});
//		const uint256SXDse4g = await WolfStakingRewardsXBAJUpQ.lastTimeRewardApplicable.call(uintb9oao7A, {from: accounts[4]});

		assert.equal(uint256cQUwvK7, BigInt("0"))
		await expect(WolfStakingRewardsXBAJUpQ.stake.call(uintqUfLoBz, uintKcrvGLq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringk01wpND = "Jp5oB79thPrnhyhauPG5BaMj8Um3Yy"
		const stringoPspOUv = "F5p8SVZp6LiJbM9Auerd7SMfd8F"
		const uintk9Gk8li = BigInt("31")
		const WolfStakingRewardsJVFn0T = await WolfStakingRewards.new(stringk01wpND, stringoPspOUv, uintk9Gk8li, {from: accounts[3]});
		const uintLyuFkMu = BigInt("1081")
		const addressEj8UXgp = accounts[3]
		const uintFudTOno = BigInt("1717")
		await WolfStakingRewardsJVFn0T.onlyOwner.call({from: accounts[4]});
		const addressObqCl3 = await WolfStakingRewardsJVFn0T.updateReward.call(addressEj8UXgp, uintLyuFkMu, {from: accounts[1]});
		const uint256zGKz3ar = await WolfStakingRewardsJVFn0T.lastTimeRewardApplicable.call(uintFudTOno, {from: accounts[3]});
		const stringJDFWhlX = await WolfStakingRewardsJVFn0T.symbol.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresss3J0QM = "0x0000000000000000000000000000000000000001"
		const addressjE3nHbc = accounts[2]
		const addressWTBtwwH = accounts[3]
		const WolfStakingRewardsXBAJUpQ = await WolfStakingRewards.new(addresss3J0QM, addressjE3nHbc, addressWTBtwwH, {from: accounts[2]});
		const uintKhiI5HG = BigInt("1067")
		const addressto1AJG = accounts[2]
		const uintRmQiv6a = BigInt("1039")
		const uintnhk9O3q = BigInt("1722")
		const uinteN6wbt1 = BigInt("61")
		const uint256cQUwvK7 = await WolfStakingRewardsXBAJUpQ.earned.call(addressto1AJG, uintKhiI5HG, {from: accounts[5]});
		const uint256JOw1BWT = await WolfStakingRewardsXBAJUpQ.totalSupplyPerPool.call(uintRmQiv6a, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256BH2k86 = await WolfStakingRewardsXBAJUpQ.stake.call(uinteN6wbt1, uintnhk9O3q, {from: accounts[2]});

		assert.equal(uint256JOw1BWT, BigInt("0"))
		assert.equal(uint256cQUwvK7, BigInt("0"))
		await expect(WolfStakingRewardsXBAJUpQ.stake.call(uinteN6wbt1, uintnhk9O3q, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressyfXuvXP = "0x0000000000000000000000000000000000000001"
		const addressfVs7Psn = accounts[3]
		const addresszEWboPn = accounts[0]
		const WolfStakingRewardsawSD7zT = await WolfStakingRewards.new(addressyfXuvXP, addressfVs7Psn, addresszEWboPn, {from: accounts[5]});
		const uintbtfiqLw = BigInt("2039")
		const uintqKyqYZ5 = BigInt("1288")
		const uintgp0suTn = BigInt("1191")
		const uintWYyGcm2 = BigInt("268")
		const uintOTgOfnU = BigInt("823")
		const uintE0wpiQ = BigInt("1256")
		const addresspEH7BM5 = accounts[3]
		const uintqrpCUox = await WolfStakingRewardsawSD7zT.getReward.call(uintbtfiqLw, {from: accounts[5]});
//		const uint256nn5nFt9 = await WolfStakingRewardsawSD7zT.withdraw.call(uintgp0suTn, uintqKyqYZ5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256OCojLZ7 = await WolfStakingRewardsawSD7zT.rewardPerToken.call(uintWYyGcm2, {from: accounts[0]});
//		const uint256xfy5NQz = await WolfStakingRewardsawSD7zT.lastTimeRewardApplicable.call(uintOTgOfnU, {from: accounts[4]});
//		const uint8CXcyTaI = await WolfStakingRewardsawSD7zT.decimals.call({from: accounts[1]});
//		const addressGH7zDE = await WolfStakingRewardsawSD7zT.updateReward.call(addresspEH7BM5, uintE0wpiQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WolfStakingRewardsawSD7zT.withdraw.call(uintgp0suTn, uintqKyqYZ5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressWGosQXb = "0x0000000000000000000000000000000000000001"
		const addressqpyXJ7a = accounts[2]
		const addresst64gxbk = accounts[3]
		const WolfStakingRewardsXBAJUpQ = await WolfStakingRewards.new(addressWGosQXb, addressqpyXJ7a, addresst64gxbk, {from: accounts[2]});
		const uintYIra09V = BigInt("490")
		const uintJ58s1UU = BigInt("1719")
		const uint3TfZ65 = BigInt("336")
		const uintuLjJUCt = BigInt("423")
		const uintcJguAa4 = BigInt("1408")
//		const uint256zLsp0pw = await WolfStakingRewardsXBAJUpQ.getRewardForDuration.call(uintYIra09V, {from: accounts[0]});
//		const uint256BH2k86 = await WolfStakingRewardsXBAJUpQ.stake.call(uint3TfZ65, uintJ58s1UU, {from: accounts[2]});
//		const uint256qUY86st = await WolfStakingRewardsXBAJUpQ.withdrawRemainingBalance.call(uintcJguAa4, uintuLjJUCt, {from: accounts[5]});

		await expect(WolfStakingRewardsXBAJUpQ.getRewardForDuration.call(uintYIra09V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringswAjSz7 = "M6r1wvjhzY1CRtr3nT"
		const stringZpIUsaf = "GSw8yU5PAfGZxShIfnHKNwCzC2HAGaQqPyyw6ga2QVEaso2T3ZpjIsEcYXgomMBzGRvLnl"
		const uintI1W26wr = BigInt("122")
		const WolfStakingRewards7HSPpm = await WolfStakingRewards.new(stringswAjSz7, stringZpIUsaf, uintI1W26wr, {from: accounts[0]});
		const uintd63dpZu = BigInt("1892")
		const uintq5GA7HN = BigInt("1456")
		const uint256arrayF4lrhCT = await WolfStakingRewards7HSPpm.updateNotifyRewardAmount.call(uintd63dpZu, {from: accounts[4]});
		const uint256YICoJfi = await WolfStakingRewards7HSPpm.getRewardForDuration.call(uintq5GA7HN, {from: accounts[4]});
		await WolfStakingRewards7HSPpm.nonReentrant.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPGxiYRf = "sbbuyK3d8Bv2"
		const stringqo75rnB = "Mp7rj6zKqkhwMSrZ0fSAFSMKUkKsPbturBgBcLNziKnUiq"
		const uintRfg7aCm = BigInt("196")
		const WolfStakingRewardsZpGcgSK = await WolfStakingRewards.new(stringPGxiYRf, stringqo75rnB, uintRfg7aCm, {from: accounts[4]});
		const uintT378ic2 = BigInt("1473")
		const uintg4HXhD = BigInt("1154")
		const uintSeXjANK = BigInt("341")
		const uint256i7A3qXC = await WolfStakingRewardsZpGcgSK.stake.call(uintg4HXhD, uintT378ic2, {from: accounts[1]});
		const uint256XeCKYrD = await WolfStakingRewardsZpGcgSK.exit.call(uintSeXjANK, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhxGlFsw = "HpmjcZ4m8YTH9WJR9bXEcRBKURWy"
		const stringDmLWb0K = "FtfyOTCV7DsFrDK1Bc2TWvqrvQ35Ukh7UUlD932iThfTAlGgub7INjGj4TPA27qhTaQIphdQAp5DJ"
		const uintmvCAJW = BigInt("254")
		const WolfStakingRewardsCELYslb = await WolfStakingRewards.new(stringhxGlFsw, stringDmLWb0K, uintmvCAJW, {from: accounts[2]});
		const uintSryT1V5 = BigInt("1547")
		await WolfStakingRewardsCELYslb.onlyRewardsDistribution.call({from: accounts[4]});
		const uint8icUfMX = await WolfStakingRewardsCELYslb.decimals.call({from: accounts[4]});
		const uint256WRjySmM = await WolfStakingRewardsCELYslb.getRewardForDuration.call(uintSryT1V5, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressKiiDHxS = "0x0000000000000000000000000000000000000001"
		const addressWfDjThl = accounts[1]
		const addressIA40Anl = accounts[2]
		const WolfStakingRewardsCSdaAwH = await WolfStakingRewards.new(addressKiiDHxS, addressWfDjThl, addressIA40Anl, {from: accounts[0]});
		const uintwTov4CP = BigInt("33")
		const uinttaH3Usq = BigInt("621")
		const uintSPQ9FV = BigInt("430")
		const uintaFSsjz = BigInt("93")
//		const uint256Ae0X9A3 = await WolfStakingRewardsCSdaAwH.withdrawRemainingBalance.call(uinttaH3Usq, uintwTov4CP, {from: accounts[0]});
//		const uint256Dje6Sy = await WolfStakingRewardsCSdaAwH.exit.call(uintSPQ9FV, {from: accounts[0]});
//		const uint256CCZrcxG = await WolfStakingRewardsCSdaAwH.exit.call(uintaFSsjz, {from: accounts[3]});

		await expect(WolfStakingRewardsCSdaAwH.withdrawRemainingBalance.call(uinttaH3Usq, uintwTov4CP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringJ7dNeWp = "cJUZoURVinT9lkPjfnWHma8e4YIbyu3nSvotHoEiap6Fzm5xXW1oFZVj9C9aK75CixAU7Bbjcu3crJECqK7fUjUqI0FuV0ZQYR"
		const stringH6St5AF = "r8XKbRPuJZRxaycew"
		const uintZEmfZRK = BigInt("72")
		const WolfStakingRewardsDm0X2Fo = await WolfStakingRewards.new(stringJ7dNeWp, stringH6St5AF, uintZEmfZRK, {from: accounts[0]});
		const uintGFGPx1S = BigInt("363")
		const uintUR4CaY = BigInt("1787")
		const uintowaDRN0 = BigInt("1607")
		const uintwwBuR9v = BigInt("1126")
		const uint2563HBmF4 = await WolfStakingRewardsDm0X2Fo.withdraw.call(uintUR4CaY, uintGFGPx1S, {from: accounts[4]});
		const uint256VPrcpVV = await WolfStakingRewardsDm0X2Fo.withdrawRemainingBalance.call(uintwwBuR9v, uintowaDRN0, {from: accounts[1]});
		await WolfStakingRewardsDm0X2Fo.onlyOwner.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvFbSOL3 = "a7xtBn32MwHqgfvnPsokH3pVxdWa0I3NVfbYsSrjknWmr2pbaFcjsaohESJ5"
		const stringX4L6J8E = "gNhruPvrA1H1eKSUti1tsQh5zyXkkGF5FWioTrNulkuabB56E1UiPqQC4ccPvRiaIOy3FEm5jlPRKuRpFHUkpSAMLTGOsGgAG4"
		const uintQROp2eI = BigInt("141")
		const WolfStakingRewardskdqTMT = await WolfStakingRewards.new(stringvFbSOL3, stringX4L6J8E, uintQROp2eI, {from: accounts[3]});
		const uintXfWSzo = BigInt("1073")
		const uintwlMkzJe = BigInt("555")
		const uintm2VeLVK = BigInt("837")
		const uintaZK9vNg = BigInt("1885")
		const uintYQLghQs = BigInt("844")
		const addressUwrdxpF = accounts[2]
		const uint256c8Kwu0n = await WolfStakingRewardskdqTMT.lastTimeRewardApplicable.call(uintXfWSzo, {from: accounts[0]});
		const uint256HoJPSgf = await WolfStakingRewardskdqTMT.withdrawRemainingBalance.call(uintm2VeLVK, uintwlMkzJe, {from: accounts[3]});
		const uint256j1Jtog2 = await WolfStakingRewardskdqTMT.totalSupplyPerPool.call(uintaZK9vNg, {from: accounts[3]});
		const stringwl0pWgZ = await WolfStakingRewardskdqTMT.symbol.call({from: accounts[1]});
		const addresssj73CpT = await WolfStakingRewardskdqTMT.updateReward.call(addressUwrdxpF, uintYQLghQs, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtho480q = "S1jUclbNvOJDKNa828IfMweOfqVIcLBmOpfWXO81"
		const stringn7pKPBa = "tbMDAyuhJbTRHGcbaDtdRExp2QKEF6HcMB3jNvNpiChKpTNXNz6wxzzpHT0UUvg"
		const uintljqdSq8 = BigInt("248")
		const WolfStakingRewardsz0S5zNq = await WolfStakingRewards.new(stringtho480q, stringn7pKPBa, uintljqdSq8, {from: accounts[4]});
		const uintRIifOgy = BigInt("1778")
		const uintrb1Fkue = BigInt("87")
		const stringarBgxm = await WolfStakingRewardsz0S5zNq.symbol.call({from: accounts[3]});
		const uint256acuBTKU = await WolfStakingRewardsz0S5zNq.withdraw.call(uintrb1Fkue, uintRIifOgy, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringh388ek = "7SlPUO3nAwMESEprt8mTpuS1BhgSGUVwkhdqOW57p3bLZaeeXiDOjhxmhnBXZnsdrCh4do5t8VxoLBiXDXy"
		const stringKBOkPvI = "prNgLdsMWTROUIkf8fIOQs1"
		const uinteEUz2Rm = BigInt("172")
		const WolfStakingRewardsrSfq3lS = await WolfStakingRewards.new(stringh388ek, stringKBOkPvI, uinteEUz2Rm, {from: accounts[2]});
		const uintsSylJjk = BigInt("464")
		const uintZBzcALv = BigInt("1134")
		const uintqJaeQev = BigInt("929")
		const uintG3vYtyt = BigInt("1005")
		const uintm1rENHZ = BigInt("601")
		const uintOcIOiEY = BigInt("455")
		const addressIKzYPCd = accounts[3]
		const uintPrU8lqO = await WolfStakingRewardsrSfq3lS.getReward.call(uintsSylJjk, {from: accounts[4]});
		const uint256c5tAnqZ = await WolfStakingRewardsrSfq3lS.withdrawRemainingBalance.call(uintqJaeQev, uintZBzcALv, {from: accounts[1]});
		const uint256arrayUXvwJ3w = await WolfStakingRewardsrSfq3lS.updateNotifyRewardAmount.call(uintG3vYtyt, {from: accounts[0]});
		const uint256Afvx4AO = await WolfStakingRewardsrSfq3lS.lastTimeRewardApplicable.call(uintm1rENHZ, {from: accounts[4]});
		const uint256GhAOKL = await WolfStakingRewardsrSfq3lS.earned.call(addressIKzYPCd, uintOcIOiEY, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHQU3Dlh = "jQu"
		const stringu3kM9Dk = "GueVMCde8DRiXH4DGfW2kSnVlkP0NSyiC00iLI3tMR"
		const uintRRJllub = BigInt("41")
		const WolfStakingRewardsUfWNnMY = await WolfStakingRewards.new(stringHQU3Dlh, stringu3kM9Dk, uintRRJllub, {from: accounts[2]});
		const uintQ01u92V = BigInt("15")
		const uintjpd4p1W = BigInt("26")
		const uintzSEGH0g = BigInt("990")
		const uint256N20lhg = await WolfStakingRewardsUfWNnMY.getRewardForDuration.call(uintQ01u92V, {from: accounts[0]});
		const uint256DtIFFgX = await WolfStakingRewardsUfWNnMY.rewardPerToken.call(uintjpd4p1W, {from: accounts[3]});
		const uint256arrayHcg5MvB = await WolfStakingRewardsUfWNnMY.updateNotifyRewardAmount.call(uintzSEGH0g, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYvumWh = "HTKCFprhu5BFbSGkfkBH6JrnvutxLFTMvZFYnANQvfqkm1HAJgHe7pYsSHl4vyTd44ejL4XfiH"
		const stringkkT3Bcv = "mJtix2GXbYz1mwYdjfzEO1dwcZx4pjIV1rSAl9kbGniHwp0xysYGwZgn3L5p"
		const uintw3qbM7Q = BigInt("188")
		const WolfStakingRewardserfp7pr = await WolfStakingRewards.new(stringYvumWh, stringkkT3Bcv, uintw3qbM7Q, {from: accounts[1]});
		const uintYLraPH2 = BigInt("1603")
		const uintxpvMgF = BigInt("1502")
		const uintZy7X58U = BigInt("691")
		const uintZlbfKHN = BigInt("490")
		const uintY6T4SUk = BigInt("1719")
		await WolfStakingRewardserfp7pr.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256Bg4t9eo = await WolfStakingRewardserfp7pr.stake.call(uintxpvMgF, uintYLraPH2, {from: accounts[2]});
		const uint256KddC7V = await WolfStakingRewardserfp7pr.lastTimeRewardApplicable.call(uintZy7X58U, {from: accounts[1]});
		const uint256oyo69B9 = await WolfStakingRewardserfp7pr.withdraw.call(uintY6T4SUk, uintZlbfKHN, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPSUjELF = "smYpi2D2DpyDKvYC3cufCeop5hbf7XvNAWHj3C3pdAxmgxyYmGFntfp74zYuVofhhawU30I8AQQCusWpvCCYV9"
		const stringbp4ZfVJ = "8yLMbmkEp2XxfOVHowr1EDHQX27nQVyl6ozwwnkXuKIHiMgcSu441hfDktwORuEJSluq1vpy4y3gbAjHhUe7AN655qv3"
		const uintKVYmi0l = BigInt("178")
		const WolfStakingRewardsDRGdy2a = await WolfStakingRewards.new(stringPSUjELF, stringbp4ZfVJ, uintKVYmi0l, {from: accounts[0]});
		const uintyKVpkY = BigInt("848")
		const uintpn8pTsR = BigInt("1898")
		const uint256UkAIhf = await WolfStakingRewardsDRGdy2a.totalSupplyPerPool.call(uintyKVpkY, {from: accounts[0]});
		const stringd6HEAno = await WolfStakingRewardsDRGdy2a.symbol.call({from: accounts[1]});
		const stringAMl2iJA = await WolfStakingRewardsDRGdy2a.name.call({from: accounts[0]});
		const uint256xLM0ITn = await WolfStakingRewardsDRGdy2a.lastTimeRewardApplicable.call(uintpn8pTsR, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtDLnt8G = "C2kBOvtGFycy7eblFd2KVP5bXcktjRwFkYx38jRoMwNVqaRy"
		const stringXzeWm1R = "pirPn2yfE7rxmZxhkqmGqyBiZPvDUi"
		const uintrha9emL = BigInt("24")
		const WolfStakingRewardsilbjjN4 = await WolfStakingRewards.new(stringtDLnt8G, stringXzeWm1R, uintrha9emL, {from: accounts[3]});
		const uintKmJoAgx = BigInt("554")
		const uintAJjNQjV = BigInt("896")
		const uintJaGIxd0 = BigInt("900")
		const uintNg3QOTz = BigInt("39")
		const uintJK6KFGW = BigInt("399")
		const uintTPz44tD = BigInt("557")
		const uinteWMlheF = BigInt("179")
		const uintlvSHQQ1 = BigInt("1920")
		const uintVvRQelY = await WolfStakingRewardsilbjjN4.getReward.call(uintKmJoAgx, {from: accounts[4]});
		const uint256sxaVPrc = await WolfStakingRewardsilbjjN4.withdrawRemainingBalance.call(uintJaGIxd0, uintAJjNQjV, {from: accounts[5]});
		const uint256CNg7KfN = await WolfStakingRewardsilbjjN4.withdraw.call(uintJK6KFGW, uintNg3QOTz, {from: accounts[3]});
		const uint256vHG5MAC = await WolfStakingRewardsilbjjN4.getRewardForDuration.call(uintTPz44tD, {from: accounts[3]});
		const uint256YZ0QrbR = await WolfStakingRewardsilbjjN4.stake.call(uintlvSHQQ1, uinteWMlheF, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhGXZDE7 = "Pa4CvPN4VyNfBJX5jVjDOfGhAngb7lvF2"
		const stringXjKvUz8 = "QmBvgs7WVvkYLiSbgAAgc9ouUNQa5oknHfBIHRlHDxK7Xnc6GehV87JoUvYmvWKDe9Rm"
		const uintknpA1O = BigInt("54")
		const WolfStakingRewardsi4TUExF = await WolfStakingRewards.new(stringhGXZDE7, stringXjKvUz8, uintknpA1O, {from: accounts[2]});
		const uint1EmBZm = BigInt("2010")
		const uintKA79PPa = BigInt("551")
		const stringd9dJcVh = await WolfStakingRewardsi4TUExF.name.call({from: accounts[2]});
		const uint256OqJ7wBT = await WolfStakingRewardsi4TUExF.lastTimeRewardApplicable.call(uint1EmBZm, {from: accounts[4]});
		const uint256YaAEJNh = await WolfStakingRewardsi4TUExF.totalSupplyPerPool.call(uintKA79PPa, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzWyVrtH = "TTzDa"
		const stringwMkqGx4 = "d1DYtBDvZGbNpjvi4sjFoJOianv9xedniYsiMwnAX70nIiy6iqkeSssAeClXrw9gJL12qNL0UBzgB5lP5G4okerr"
		const uintTO1Wxbx = BigInt("163")
		const WolfStakingRewardsotirD74 = await WolfStakingRewards.new(stringzWyVrtH, stringwMkqGx4, uintTO1Wxbx, {from: accounts[0]});
		const uintPlStxJ7 = BigInt("1557")
		const uintZo748Vf = BigInt("626")
		await WolfStakingRewardsotirD74.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256GyOR9mN = await WolfStakingRewardsotirD74.withdrawRemainingBalance.call(uintZo748Vf, uintPlStxJ7, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDelCY0W = "Q1dSCZ91sUJ3XzcKZwPLU29PF9fv7OcNlgedzIIFfgd7KLCbA5GzrHYGAdKyaN2v6FgDpMpUMdXBleV2uAC8pLQfqOh"
		const stringXaLzvuY = "jwUGHKwKnszmBKqjuJuMukhg6qKwCXu8Ah4UhTlQM9amu"
		const uintxtIR771 = BigInt("1")
		const WolfStakingRewardsiWJRvXp = await WolfStakingRewards.new(stringDelCY0W, stringXaLzvuY, uintxtIR771, {from: accounts[4]});
		const uintegLDYlN = BigInt("354")
		const addressFNMVRN = "0x0000000000000000000000000000000000000001"
		const uintKI0whkv = BigInt("150")
		const uintiRikCgW = BigInt("498")
		const uint256E0kPbPK = await WolfStakingRewardsiWJRvXp.earned.call(addressFNMVRN, uintegLDYlN, {from: accounts[4]});
		const uint256J9N6UQq = await WolfStakingRewardsiWJRvXp.rewardPerToken.call(uintKI0whkv, {from: accounts[2]});
		await WolfStakingRewardsiWJRvXp.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256ZLPDe3j = await WolfStakingRewardsiWJRvXp.exit.call(uintiRikCgW, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXzx90vc = "EFa4o7PezOauXdSSdKkZh2Ykuuu2KVNwYF5DF2bTxcYUtgSyGrdIQPeKuCCzyNpwyyJJbnOtrviMjGemfcu"
		const stringPQpqFl6 = "2qO8doWL2eyagsTt9QPmu8tTuQuj00k108C1qM0KIPWYjkInw2Q3k"
		const uintcqwKbSk = BigInt("70")
		const WolfStakingRewardsfPp0qxM = await WolfStakingRewards.new(stringXzx90vc, stringPQpqFl6, uintcqwKbSk, {from: accounts[2]});
		const uintf5BZEjk = BigInt("1517")
		const uintg5IPG24 = BigInt("1664")
		const uintVDd5Ouh = BigInt("1127")
		const addressy4lYSAp = accounts[3]
		const uint256G3pWmq = await WolfStakingRewardsfPp0qxM.getRewardForDuration.call(uintf5BZEjk, {from: accounts[4]});
		const uint256bJxtp6 = await WolfStakingRewardsfPp0qxM.rewardPerToken.call(uintg5IPG24, {from: accounts[1]});
		const address2P06CI = await WolfStakingRewardsfPp0qxM.updateReward.call(addressy4lYSAp, uintVDd5Ouh, {from: accounts[4]});
		const stringZxzORR = await WolfStakingRewardsfPp0qxM.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtSGfVxt = "xEdWjCX7itGDPk8pR2iEVXgwFVbDyc8fBi4lbzgiGEiPhu94gwipRacHn1IvovLe8"
		const stringU2sIjEQ = "BuHpQu7HlnzgM1mxbXFRrzIzDvW3sENhgVeqPNYWpjPbsHGfz6CAP6YRhrxmJGDWU16bn2Tj1VFRQ6upu22DJ2awasSMsLnvaj"
		const uintPuKs21X = BigInt("56")
		const WolfStakingRewardsnCPpoD8 = await WolfStakingRewards.new(stringtSGfVxt, stringU2sIjEQ, uintPuKs21X, {from: accounts[4]});
		const uintAlQsqyT = BigInt("1713")
		const uintzuKO59b = BigInt("1077")
		const uintBBqCjiW = BigInt("1641")
		const uinta15qdha = BigInt("926")
		const uintZp8WE9 = BigInt("326")
		const uintqO7ZkSv = BigInt("684")
		const uintGcHhr3N = BigInt("266")
		const uint256c6Pacj2 = await WolfStakingRewardsnCPpoD8.stake.call(uintzuKO59b, uintAlQsqyT, {from: accounts[4]});
		await WolfStakingRewardsnCPpoD8.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qoaXX1w = await WolfStakingRewardsnCPpoD8.withdrawRemainingBalance.call(uinta15qdha, uintBBqCjiW, {from: accounts[4]});
		const uint256kAZ5uTE = await WolfStakingRewardsnCPpoD8.stake.call(uintqO7ZkSv, uintZp8WE9, {from: accounts[0]});
		const uint256ybRgnuO = await WolfStakingRewardsnCPpoD8.rewardPerToken.call(uintGcHhr3N, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringc5xWmEp = "x1EuHAVdXKny"
		const stringc2FIKmF = "Seo8fVup9WitrHfQJOmBFSsZlzleFmIw2iKSfS8tpE9MsCKnnh9jGU0gt4t8aY2hkO7RAGuxVVIfQKpCUgDc6YwMhyFl490rjr"
		const uinttAKFdTV = BigInt("201")
		const WolfStakingRewardsMbKFglF = await WolfStakingRewards.new(stringc5xWmEp, stringc2FIKmF, uinttAKFdTV, {from: accounts[4]});
		const uintk5TwDkh = BigInt("2039")
		const uintNJQAQr = BigInt("718")
		const uint256e0QggdQ = await WolfStakingRewardsMbKFglF.getRewardForDuration.call(uintk5TwDkh, {from: accounts[3]});
		const stringcVN9EuE = await WolfStakingRewardsMbKFglF.symbol.call({from: accounts[4]});
		const uint256rpMfd4o = await WolfStakingRewardsMbKFglF.totalSupplyPerPool.call(uintNJQAQr, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeKurx9V = "wSO2tYUhqu1a1fHUyMRbzfHiCYcW3JUmwoLyRgszc996wQyPtIMku6FThByll2Gl4PFVnXXvJ6oTLt5Ge"
		const stringsFi6AK = "1A6Jy8x1yGLxA1ueMSBU0Vkc0xEYagwBehqz92F8Mbt565ZWXXyD0n2PLEjUC4Elu9tntx1g"
		const uintJ6H3kB = BigInt("241")
		const WolfStakingRewardshQ07LGO = await WolfStakingRewards.new(stringeKurx9V, stringsFi6AK, uintJ6H3kB, {from: accounts[2]});
		const uintKlwvSm5 = BigInt("1924")
		const addressegqiGMl = accounts[3]
		const uintfUfAWVP = BigInt("1141")
		const addressvcm1HJ6 = await WolfStakingRewardshQ07LGO.updateReward.call(addressegqiGMl, uintKlwvSm5, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardshQ07LGO.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256sP7RiPm = await WolfStakingRewardshQ07LGO.totalSupplyPerPool.call(uintfUfAWVP, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringg3isOnI = "cMLLtdx7DXKfy5BidrY8S9mFe1Tdd8yvdTotw1B8E3nNx"
		const stringu7BjRVa = "obsdIRsiXmEK2jRlFyvm5FD2BwG5B344rEC1d49nzoReidZF5nz8"
		const uinthuCE4wJ = BigInt("110")
		const WolfStakingRewardszr5z8Y = await WolfStakingRewards.new(stringg3isOnI, stringu7BjRVa, uinthuCE4wJ, {from: accounts[1]});
		const uintK5s2Rwh = BigInt("25")
		const uintclXLLpM = BigInt("1499")
		const uintsQJKtxI = BigInt("2041")
		const addressMG8foaQ = accounts[2]
		const uintF2MZVCc = BigInt("1439")
		const addressNCA33OH = accounts[3]
		const uintjDz6Bm = BigInt("55")
		const uintAc81mdl = BigInt("1917")
		const addressq7fmRSo = accounts[4]
		const uinthYcsh5Q = BigInt("200")
		const uint256xKwLAgw = await WolfStakingRewardszr5z8Y.stake.call(uintclXLLpM, uintK5s2Rwh, {from: accounts[5]});
		const uint256ejTm3hW = await WolfStakingRewardszr5z8Y.earned.call(addressMG8foaQ, uintsQJKtxI, {from: accounts[2]});
		const uint25603VUNj = await WolfStakingRewardszr5z8Y.balanceOfPerPool.call(addressNCA33OH, uintF2MZVCc, {from: accounts[1]});
		const uintNsYczyS = await WolfStakingRewardszr5z8Y.getReward.call(uintjDz6Bm, {from: accounts[2]});
		const uint256W4ucXwG = await WolfStakingRewardszr5z8Y.earned.call(addressq7fmRSo, uintAc81mdl, {from: accounts[3]});
		const uint256arrayrLk1UX = await WolfStakingRewardszr5z8Y.updateNotifyRewardAmount.call(uinthYcsh5Q, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringEahkCt = "EYVEsyxyLy14LRhn2OGDVK06nNq8HyU6MJX2Z7putumlVx"
		const stringC1GEjXM = "wRoVEByYtxPsCeKWLs5WjqWRNUtZDjfeIa"
		const uintJa3ab0r = BigInt("250")
		const WolfStakingRewardsWY3pBJK = await WolfStakingRewards.new(stringEahkCt, stringC1GEjXM, uintJa3ab0r, {from: accounts[3]});
		const uintnv93YW = BigInt("1442")
		const uintpcibeZ = BigInt("968")
		const uint256Cf3WwIu = await WolfStakingRewardsWY3pBJK.getRewardForDuration.call(uintnv93YW, {from: accounts[2]});
		await WolfStakingRewardsWY3pBJK.nonReentrant.call({from: accounts[5]});
		const uint256G7QNeK = await WolfStakingRewardsWY3pBJK.rewardPerToken.call(uintpcibeZ, {from: accounts[0]});
		await WolfStakingRewardsWY3pBJK.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringAqLzAMN = "e3hw"
		const stringc8aBiXS = "zzg0L1LyvhVXNJ4Uf4vdiSXAZqtIYcdMjxAGTssiCmdR1qwcX7QkVVea0HkTEKRHK3IjomX5cf"
		const uintIk4dLg = BigInt("81")
		const WolfStakingRewardsq4hqGnk = await WolfStakingRewards.new(stringAqLzAMN, stringc8aBiXS, uintIk4dLg, {from: accounts[2]});
		const uintPdVBUIv = BigInt("1141")
		const uintRvZMT3 = BigInt("682")
		const uint256c46tjS0 = await WolfStakingRewardsq4hqGnk.exit.call(uintPdVBUIv, {from: accounts[2]});
		await WolfStakingRewardsq4hqGnk.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256arraycDOYE6v = await WolfStakingRewardsq4hqGnk.updateNotifyRewardAmount.call(uintRvZMT3, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringk2Fz0dM = "ADFNCTXmavhcz1wrnJTUq0NXb7ekRxctvx3MHXOBSkAY9FpjaQ84RQLEEEhdvHnCDUieAyr3TIYU7x8gs"
		const stringmeqEikf = "e0una7rLvGh5tLUOjkRomQbp0X8TVnC2QYePA"
		const uintJ2vaZMO = BigInt("103")
		const WolfStakingRewardsq124raJ = await WolfStakingRewards.new(stringk2Fz0dM, stringmeqEikf, uintJ2vaZMO, {from: accounts[1]});
		const uintGOTuDti = BigInt("1589")
		const uintbfXt2qY = BigInt("1096")
		const uintMBcuLn6 = BigInt("365")
		const uintFRPxrIq = BigInt("1985")
		const uint13WUVj = BigInt("1422")
		const addressoD7pNW3 = accounts[4]
		const uint256BbUYoPc = await WolfStakingRewardsq124raJ.lastTimeRewardApplicable.call(uintGOTuDti, {from: accounts[1]});
		const uint256arrayRGO77iz = await WolfStakingRewardsq124raJ.updateNotifyRewardAmount.call(uintbfXt2qY, {from: accounts[0]});
		const uint256sxmeng1 = await WolfStakingRewardsq124raJ.stake.call(uintFRPxrIq, uintMBcuLn6, {from: "0x0000000000000000000000000000000000000001"});
		const addressM7snvsZ = await WolfStakingRewardsq124raJ.updateReward.call(addressoD7pNW3, uint13WUVj, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeXDyEzV = "7lPBOsgmOeYQwCWnPbcT4P36tlNRgbeqf8NOJnotclpUzNkdorYEdUY64x11MhuTJpKs"
		const stringdRctHKB = "mvpURnq"
		const uintWbU9gv = BigInt("47")
		const WolfStakingRewardsajpsiiJ = await WolfStakingRewards.new(stringeXDyEzV, stringdRctHKB, uintWbU9gv, {from: accounts[2]});
		const uintLugJxwG = BigInt("1451")
		const uint3xyEwF = BigInt("1771")
		const uintRnuAOh2 = BigInt("479")
		const uintvfpANWR = BigInt("1450")
		const uintIKFgSdw = BigInt("1861")
		const uintgS1Jlb6 = BigInt("1318")
		const uinttHdebmU = BigInt("618")
		const uint256bRcy77F = await WolfStakingRewardsajpsiiJ.withdrawRemainingBalance.call(uint3xyEwF, uintLugJxwG, {from: accounts[2]});
		const uint256a0kitUz = await WolfStakingRewardsajpsiiJ.withdrawRemainingBalance.call(uintvfpANWR, uintRnuAOh2, {from: accounts[4]});
		const uintmWemR3H = await WolfStakingRewardsajpsiiJ.getReward.call(uintIKFgSdw, {from: accounts[4]});
		const uint256iOZXWpw = await WolfStakingRewardsajpsiiJ.stake.call(uinttHdebmU, uintgS1Jlb6, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringkxgXbLT = "oHt6ebxkgVPdDv5Ofjy68a"
		const stringcetICLH = "vgDC29qEaqGh5nymRslH3hSLaFyO"
		const uintIHmrHJu = BigInt("90")
		const WolfStakingRewardsk1kbPZD = await WolfStakingRewards.new(stringkxgXbLT, stringcetICLH, uintIHmrHJu, {from: accounts[3]});
		const uintgPWn8FP = BigInt("948")
		const uinthUAM7Tw = BigInt("1609")
		const addressjfcCed = "0x0000000000000000000000000000000000000001"
		const uintKHQdru = BigInt("1900")
		const addressA2xx1P = accounts[3]
		const uint256DFt24FS = await WolfStakingRewardsk1kbPZD.lastTimeRewardApplicable.call(uintgPWn8FP, {from: accounts[4]});
		const addressfly0FU8 = await WolfStakingRewardsk1kbPZD.updateReward.call(addressjfcCed, uinthUAM7Tw, {from: accounts[4]});
		await WolfStakingRewardsk1kbPZD.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256juZSuj = await WolfStakingRewardsk1kbPZD.earned.call(addressA2xx1P, uintKHQdru, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhhq7f4r = "LXi4l3ArFj5wQ9ndSyDi9lDKzntTxmF0bSXbtHNS7Ftlllwf5RxeEicgW1b1a1RZ"
		const stringjxyFL1M = "vooE7xq51YbWyOLlc9FLRLZEVudSdYERMOW55LZCjUxo0sxHIu7e0dmTUCkhERcwsimJEssNiU7"
		const uintyYY5nzS = BigInt("127")
		const WolfStakingRewardsIbEiMRy = await WolfStakingRewards.new(stringhhq7f4r, stringjxyFL1M, uintyYY5nzS, {from: accounts[2]});
		const uintHy7fMLB = BigInt("268")
		const uintJRUJGhS = BigInt("1750")
		const uintLEjTmKM = BigInt("1194")
		const addressHWO2t1A = accounts[2]
		const uintFMLOMtr = BigInt("568")
		const uint256iYe3hA = await WolfStakingRewardsIbEiMRy.getRewardForDuration.call(uintHy7fMLB, {from: accounts[0]});
		const uint256LjiTWy = await WolfStakingRewardsIbEiMRy.totalSupplyPerPool.call(uintJRUJGhS, {from: accounts[1]});
		const uint256LCW9wwi = await WolfStakingRewardsIbEiMRy.balanceOfPerPool.call(addressHWO2t1A, uintLEjTmKM, {from: accounts[0]});
		const uint256SOoG7I9 = await WolfStakingRewardsIbEiMRy.exit.call(uintFMLOMtr, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVNqp0rS = "xLfbEqA8HewBfhNkyJFbpd9i2VKPc8B5UZvSSTnndqvJLBKaKUfeI"
		const stringk9QnBIo = "Pf2OSUT0JXRvIprzrW075MTyaUtxIyEaqA6AKn"
		const uintOSpV9l5 = BigInt("66")
		const WolfStakingRewardsP6RxZHS = await WolfStakingRewards.new(stringVNqp0rS, stringk9QnBIo, uintOSpV9l5, {from: accounts[5]});
		const uintmRmT4eB = BigInt("1575")
		const uintnCjb5ZF = BigInt("1686")
		const uintEJP7Tc9 = BigInt("282")
		const uintUh4pKaR = await WolfStakingRewardsP6RxZHS.getReward.call(uintmRmT4eB, {from: accounts[2]});
		const uint256CLXO8zc = await WolfStakingRewardsP6RxZHS.lastTimeRewardApplicable.call(uintnCjb5ZF, {from: accounts[5]});
		const uint8xdq2ysU = await WolfStakingRewardsP6RxZHS.decimals.call({from: accounts[2]});
		const uintsud3OXc = await WolfStakingRewardsP6RxZHS.getReward.call(uintEJP7Tc9, {from: accounts[5]});
		const stringicbBztk = await WolfStakingRewardsP6RxZHS.symbol.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMhfp0n = "2nNNoYBKAFrp1lSYdO3KgbjFCicsWyUw2G7aik9InwJXoGkGjO4NiVjnVmwhUhnRE1uo5D4T1ZzNdtFCPLSiudY"
		const stringewHC2Hc = "maAzRTtR8MIudLfhVmFzw3UPBbKwL1SlObgUYnXKkUwEQkPf146Wnr5E11UMtiysjaHkpGhSO5rIQRbjwTQupn1dg"
		const uintsolBoj7 = BigInt("55")
		const WolfStakingRewardsezu1Upb = await WolfStakingRewards.new(stringMhfp0n, stringewHC2Hc, uintsolBoj7, {from: accounts[4]});
		const uintJ4TRkkK = BigInt("1121")
		const uintxykmew1 = BigInt("432")
		const uintv8LRB7i = BigInt("903")
		const uintslvwRLz = BigInt("1831")
		const addressoVPR3Jn = accounts[0]
		const uintiVlTgpT = BigInt("1531")
		const uintduNxcU = BigInt("1972")
		const addresskciNzE = accounts[3]
		const uint256dhN6YUw = await WolfStakingRewardsezu1Upb.lastTimeRewardApplicable.call(uintJ4TRkkK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayj52B2C = await WolfStakingRewardsezu1Upb.updateNotifyRewardAmount.call(uintxykmew1, {from: accounts[4]});
		const uint256mOu80gh = await WolfStakingRewardsezu1Upb.exit.call(uintv8LRB7i, {from: accounts[3]});
		const uint256yrC0T6c = await WolfStakingRewardsezu1Upb.earned.call(addressoVPR3Jn, uintslvwRLz, {from: "0x0000000000000000000000000000000000000001"});
		const uint256FwCTJnJ = await WolfStakingRewardsezu1Upb.exit.call(uintiVlTgpT, {from: accounts[0]});
		const uint256sGHWn89 = await WolfStakingRewardsezu1Upb.earned.call(addresskciNzE, uintduNxcU, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHndojLF = "BZs"
		const stringzwCkC8 = "V5GtPz"
		const uinttMaOnD7 = BigInt("35")
		const WolfStakingRewardsnSXV4ah = await WolfStakingRewards.new(stringHndojLF, stringzwCkC8, uinttMaOnD7, {from: accounts[5]});
		const uintrOCgW7x = BigInt("938")
		const uintPCI82x = BigInt("545")
		const uint256frsdV3o = await WolfStakingRewardsnSXV4ah.exit.call(uintrOCgW7x, {from: accounts[1]});
		const uintvyQDcv = await WolfStakingRewardsnSXV4ah.getReward.call(uintPCI82x, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcjPylct = "ESW6DMoaJVKTjNp6MGNNLvVEn"
		const stringJN0Ipf9 = "8WkTPGaa"
		const uintfC9T31Q = BigInt("222")
		const WolfStakingRewardsau3R8L7 = await WolfStakingRewards.new(stringcjPylct, stringJN0Ipf9, uintfC9T31Q, {from: accounts[3]});
		const uintx3gImnY = BigInt("486")
		const uintldZLX7V = BigInt("1918")
		const address4QxolK = accounts[4]
		const uintdSUxqu = BigInt("39")
		const addressk4j8LAG = accounts[2]
		const uintp6xBTxp = await WolfStakingRewardsau3R8L7.getReward.call(uintx3gImnY, {from: accounts[4]});
		await WolfStakingRewardsau3R8L7.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256aCnuwZO = await WolfStakingRewardsau3R8L7.earned.call(address4QxolK, uintldZLX7V, {from: accounts[3]});
		const uint256dySwHcK = await WolfStakingRewardsau3R8L7.balanceOfPerPool.call(addressk4j8LAG, uintdSUxqu, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWY23V1 = "ffqBCCekqfPxY2WflpiAtSQi2K5uQ0v7vtO"
		const stringYIo1SCf = "b6dyWuWUPt7RQBp7ht78zZ2ppR4aZeKXBfnI4jbQMDFq0wqhCSMaq7qRO2a3oim1hBcPiJfMUhmFFivMBrZAi34WSQzzI5Nm4M"
		const uintej8mbf = BigInt("3")
		const WolfStakingRewardsQx8ApOu = await WolfStakingRewards.new(stringWY23V1, stringYIo1SCf, uintej8mbf, {from: accounts[0]});
		const uintfTGc2pE = BigInt("1105")
		const addressSdGAGHS = accounts[3]
		const uintaC5nCd9 = BigInt("1458")
		const uinthuwVERi = BigInt("1862")
		const uint256m0ljeT = await WolfStakingRewardsQx8ApOu.earned.call(addressSdGAGHS, uintfTGc2pE, {from: accounts[3]});
		const uint256Ejg6HRF = await WolfStakingRewardsQx8ApOu.withdraw.call(uinthuwVERi, uintaC5nCd9, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFuvXdbX = "DznIZCdEgILuxkyDObHBBd2BIHWpCSNxRlM8Btpe"
		const stringwR03U2r = "6Zm6aTpaSFj9f0hASkzeFIqWSM6CvEDvVe9S6NWDdJNa"
		const uintIlinToK = BigInt("210")
		const WolfStakingRewardsywZcjS5 = await WolfStakingRewards.new(stringFuvXdbX, stringwR03U2r, uintIlinToK, {from: accounts[1]});
		const uinto6JdMk = BigInt("1202")
		const uintWhDcUj = BigInt("949")
		const uintlgpEpHK = BigInt("8")
		const uintoCXzr2 = BigInt("670")
		const addressPe7LEJ6 = accounts[4]
		const uint7nBQEH = BigInt("999")
		const uint256KZ6wt7e = await WolfStakingRewardsywZcjS5.withdrawRemainingBalance.call(uintWhDcUj, uinto6JdMk, {from: accounts[0]});
		const uint8lEsY6we = await WolfStakingRewardsywZcjS5.decimals.call({from: accounts[3]});
		const uint256aAl1YxP = await WolfStakingRewardsywZcjS5.totalSupplyPerPool.call(uintlgpEpHK, {from: accounts[4]});
		const uint256HPeqSbC = await WolfStakingRewardsywZcjS5.balanceOfPerPool.call(addressPe7LEJ6, uintoCXzr2, {from: accounts[5]});
		const uintiez0cya = await WolfStakingRewardsywZcjS5.getReward.call(uint7nBQEH, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVHJkZcX = "HbzLE3CIpGOFUT5Vgk17aB1s"
		const stringzFXjoY2 = "uBzO29Ngh5Exkz3X9oujo18PrsP1R3zadyhqztLObZKqtCPh7E0xWUMlaxZfZxanLdh54OzkZ3Bf8Y83cdGIy7VohzCciN"
		const uinthF3Fi4f = BigInt("1")
		const WolfStakingRewardsmdpVSX = await WolfStakingRewards.new(stringVHJkZcX, stringzFXjoY2, uinthF3Fi4f, {from: accounts[1]});
		const uintFgzKzeE = BigInt("1539")
		const addressat7fxp = accounts[0]
		const uintGsiBk60 = BigInt("812")
		const uintIA46AfF = BigInt("1717")
		const addressxZMAT64 = accounts[2]
		const uint5rNx4c = BigInt("732")
		const addressoX3fWG = await WolfStakingRewardsmdpVSX.updateReward.call(addressat7fxp, uintFgzKzeE, {from: accounts[1]});
		const uint256arrayx4CvHmo = await WolfStakingRewardsmdpVSX.updateNotifyRewardAmount.call(uintGsiBk60, {from: accounts[3]});
		const uint256Fn0ykQV = await WolfStakingRewardsmdpVSX.balanceOfPerPool.call(addressxZMAT64, uintIA46AfF, {from: accounts[4]});
		const uint256MwBdzj = await WolfStakingRewardsmdpVSX.rewardPerToken.call(uint5rNx4c, {from: "0x0000000000000000000000000000000000000001"});
	});
})