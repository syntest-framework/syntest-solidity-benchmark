const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressvcero6R = accounts[2]
		const addressE9EEHRW = accounts[1]
		const addressv1Gobso = accounts[1]
		const WolfStakingRewardsKciVBz = await WolfStakingRewards.new(addressvcero6R, addressE9EEHRW, addressv1Gobso, {from: accounts[2]});
		const uintJpcGwGZ = BigInt("1279")
		const uintXVWPAcO = BigInt("296")
//		const uint256fG6WXtS = await WolfStakingRewardsKciVBz.withdraw.call(uintXVWPAcO, uintJpcGwGZ, {from: accounts[0]});
//		const uint8mHcpfAj = await WolfStakingRewardsKciVBz.decimals.call({from: accounts[1]});

		await expect(WolfStakingRewardsKciVBz.withdraw.call(uintXVWPAcO, uintJpcGwGZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringTvh0LNz = "GCeGo8D1h5LcTfBT6E1rHKFtJAOEUuIHl1v"
		const stringHKDCP0 = "RfLY5NwJa6hp3TLcWiX6StqmkbkpAYMRVa3kl2cFTUoyKgqHZpYTIIxyP04ccIUs1Pfhm4MuYnAuZoTFQJlVKYTxgTx"
		const uintSOhiSLE = BigInt("80")
		const WolfStakingRewardsluNxWqp = await WolfStakingRewards.new(stringTvh0LNz, stringHKDCP0, uintSOhiSLE, {from: "0x0000000000000000000000000000000000000001"});
		const uintjK9h00Z = BigInt("1969")
		const uintUwFixbO = BigInt("742")
		const uintFnA6906 = BigInt("1219")
		const uintj5dKu8h = BigInt("722")
		const uint256jGsIQwR = await WolfStakingRewardsluNxWqp.rewardPerToken.call(uintjK9h00Z, {from: accounts[0]});
		const uint256IZxfqiE = await WolfStakingRewardsluNxWqp.exit.call(uintUwFixbO, {from: accounts[0]});
		const uint256kRk13vQ = await WolfStakingRewardsluNxWqp.totalSupplyPerPool.call(uintFnA6906, {from: accounts[1]});
		const stringooNTLv = await WolfStakingRewardsluNxWqp.symbol.call({from: accounts[0]});
		const stringxogBTF = await WolfStakingRewardsluNxWqp.symbol.call({from: accounts[0]});
		const uint256kFReAv = await WolfStakingRewardsluNxWqp.rewardPerToken.call(uintj5dKu8h, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressVcIVK4C = "0x0000000000000000000000000000000000000001"
		const addressmLFbgfV = accounts[0]
		const addressfanowY1 = accounts[0]
		const WolfStakingRewardslv0bvJy = await WolfStakingRewards.new(addressVcIVK4C, addressmLFbgfV, addressfanowY1, {from: accounts[3]});
//		const stringc2HhWmb = await WolfStakingRewardslv0bvJy.name.call({from: accounts[3]});
//		await WolfStakingRewardslv0bvJy.nonReentrant.call({from: accounts[1]});
//		await WolfStakingRewardslv0bvJy.onlyRewardsDistribution.call({from: accounts[2]});
//		await WolfStakingRewardslv0bvJy.nonReentrant.call({from: accounts[5]});

		await expect(WolfStakingRewardslv0bvJy.name.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringTS38Lpo = "lW4odrkbp24WmwpMcXjEQfUj5eG59ucWJdguDkkIGImILm1tlqqXM"
		const stringPwK6S0e = "ZykEB5TRdkWyFgl5yH1tdGuRCKHsuRjyFuqtqhi621ifY3p8pj9x7T0NNCpdb"
		const uintrlUto0y = BigInt("66")
		const WolfStakingRewardsDZCzUBb = await WolfStakingRewards.new(stringTS38Lpo, stringPwK6S0e, uintrlUto0y, {from: accounts[0]});
		const uintGVClI5q = BigInt("1475")
		const uintlW3FhIY = BigInt("1381")
		const uintaOUol0O = BigInt("1814")
		await WolfStakingRewardsDZCzUBb.onlyOwner.call({from: accounts[4]});
		const uint256arrayJa5UBR0 = await WolfStakingRewardsDZCzUBb.updateNotifyRewardAmount.call(uintGVClI5q, {from: accounts[1]});
		const uint256lk8yuCI = await WolfStakingRewardsDZCzUBb.totalSupplyPerPool.call(uintlW3FhIY, {from: accounts[4]});
		const stringgjRIU2I = await WolfStakingRewardsDZCzUBb.symbol.call({from: accounts[0]});
		await WolfStakingRewardsDZCzUBb.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Voi4kCd = await WolfStakingRewardsDZCzUBb.exit.call(uintaOUol0O, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringNGRh0oJ = "iDueFxUQDumsRgGyr6OsHifX4PPtzlnIqdpWs8c2V5H8d"
		const stringigTnAtZ = "xnikz59XAATy6r5FmWuI"
		const uinteOSy8IU = BigInt("88")
		const WolfStakingRewards9c259W = await WolfStakingRewards.new(stringNGRh0oJ, stringigTnAtZ, uinteOSy8IU, {from: accounts[4]});
		const uintZTtNeLu = BigInt("564")
		const uint6sopfJ = BigInt("413")
		const uintsU4YI9O = BigInt("1217")
		const uintRyEcpKd = BigInt("797")
		const uintrmdC8GY = BigInt("1069")
		const uintT2Bhre2 = BigInt("770")
		const addressEg9N21O = accounts[3]
		const uint256SbfO1z = await WolfStakingRewards9c259W.stake.call(uint6sopfJ, uintZTtNeLu, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ykF74TS = await WolfStakingRewards9c259W.totalSupplyPerPool.call(uintsU4YI9O, {from: accounts[1]});
		const uint256dmGwkSZ = await WolfStakingRewards9c259W.rewardPerToken.call(uintRyEcpKd, {from: accounts[4]});
		const uint256arrayK5nrsoR = await WolfStakingRewards9c259W.updateNotifyRewardAmount.call(uintrmdC8GY, {from: accounts[1]});
		const addressjsVeeA5 = await WolfStakingRewards9c259W.updateReward.call(addressEg9N21O, uintT2Bhre2, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJtDGtxK = "UqB42OlmGoctR1EuP7s3FrpHzMPRPJpdEKsncxekg5nutv5DHk0b"
		const stringg8puqqv = "8CeoSTcyhkMl5C45IyvI2s83FbLKvHZ"
		const uinthwvwBu = BigInt("173")
		const WolfStakingRewardswYDDyhq = await WolfStakingRewards.new(stringJtDGtxK, stringg8puqqv, uinthwvwBu, {from: accounts[2]});
		const uintJ7NWBIt = BigInt("591")
		const uintx7U6gHE = BigInt("1319")
		const uintavneB6L = BigInt("1698")
		const uintVRM7ePq = BigInt("3")
		const uintOTNIvBC = BigInt("993")
		const addressxl6fXL1 = accounts[2]
		const uint256XCtiw8X = await WolfStakingRewardswYDDyhq.lastTimeRewardApplicable.call(uintJ7NWBIt, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bGzWaz = await WolfStakingRewardswYDDyhq.stake.call(uintavneB6L, uintx7U6gHE, {from: accounts[1]});
		await WolfStakingRewardswYDDyhq.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256Eu9sD4b = await WolfStakingRewardswYDDyhq.getRewardForDuration.call(uintVRM7ePq, {from: accounts[3]});
		const addressZW9B1KD = await WolfStakingRewardswYDDyhq.updateReward.call(addressxl6fXL1, uintOTNIvBC, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJqaQ7t = "T4IxwKvr93Iftgu96JWiBS9nuv1P461GDgdtb19cgBSrTrtkoAEYmnWKqBkHa5JpXjlM6q5H0OXMlP9XpHfp67"
		const stringrEGNoI8 = "TZHcDzktcY1qhQs0iv"
		const uintoowfq2G = BigInt("3")
		const WolfStakingRewardsGTX5Nek = await WolfStakingRewards.new(stringJqaQ7t, stringrEGNoI8, uintoowfq2G, {from: accounts[1]});
		const uint4sjdys = BigInt("1968")
		const addressixDofGM = accounts[5]
		const uintROxwLYI = BigInt("35")
		const addresstK44sv = accounts[2]
		const addressaUIcV1t = await WolfStakingRewardsGTX5Nek.updateReward.call(addressixDofGM, uint4sjdys, {from: accounts[2]});
		const addressc5yqIbu = await WolfStakingRewardsGTX5Nek.updateReward.call(addresstK44sv, uintROxwLYI, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWTlukQd = "Jn6dvHXny07cR1Lzyg1DOaNDoOB"
		const stringpUtkiyr = "qs5qo9r8OrMcxBMUwg8ucD9SEGupNah1qY"
		const uinth5ehK6I = BigInt("27")
		const WolfStakingRewardstk5INhd = await WolfStakingRewards.new(stringWTlukQd, stringpUtkiyr, uinth5ehK6I, {from: accounts[0]});
		const uintB5ezwqn = BigInt("635")
		const uintOPtoVXM = BigInt("1304")
		const addresshaZIsV4 = accounts[0]
		const uintIjLaqlv = BigInt("1131")
		const uint256CDBwIT6 = await WolfStakingRewardstk5INhd.totalSupplyPerPool.call(uintB5ezwqn, {from: accounts[3]});
		const uint256S7OlQ2l = await WolfStakingRewardstk5INhd.balanceOfPerPool.call(addresshaZIsV4, uintOPtoVXM, {from: accounts[0]});
		const uint256ouTnpRX = await WolfStakingRewardstk5INhd.getRewardForDuration.call(uintIjLaqlv, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressWDXMKY2 = accounts[2]
		const addressqDLSCG3 = accounts[1]
		const addressUI9HEWT = accounts[1]
		const WolfStakingRewardsKciVBz = await WolfStakingRewards.new(addressWDXMKY2, addressqDLSCG3, addressUI9HEWT, {from: accounts[2]});
		const uintfE9M5Ry = BigInt("405")
		const uintvdlpl2G = BigInt("1276")
		const uintT0jeuyP = BigInt("296")
		const uintV3TkNpS = BigInt("145")
		const addresso2B9YN = accounts[4]
		const uint256mTYXCNR = await WolfStakingRewardsKciVBz.totalSupplyPerPool.call(uintfE9M5Ry, {from: accounts[0]});
//		const uint256fG6WXtS = await WolfStakingRewardsKciVBz.withdraw.call(uintT0jeuyP, uintvdlpl2G, {from: accounts[0]});
//		const uint256ZwKCX7 = await WolfStakingRewardsKciVBz.earned.call(addresso2B9YN, uintV3TkNpS, {from: accounts[0]});
//		const uint8mHcpfAj = await WolfStakingRewardsKciVBz.decimals.call({from: accounts[1]});

		assert.equal(uint256mTYXCNR, BigInt("0"))
		await expect(WolfStakingRewardsKciVBz.withdraw.call(uintT0jeuyP, uintvdlpl2G, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressrNtaYcU = accounts[2]
		const addressgO73JJi = accounts[1]
		const addressfT2zKv = accounts[1]
		const WolfStakingRewardsKciVBz = await WolfStakingRewards.new(addressrNtaYcU, addressgO73JJi, addressfT2zKv, {from: accounts[2]});
		const uintz20OrS = BigInt("1793")
		const addressZDwUtdS = accounts[4]
		const uintiWKM5n3 = BigInt("1263")
		const uintfap88H4 = BigInt("296")
		const uint256l9c0CrE = await WolfStakingRewardsKciVBz.balanceOfPerPool.call(addressZDwUtdS, uintz20OrS, {from: accounts[0]});
//		const uint256fG6WXtS = await WolfStakingRewardsKciVBz.withdraw.call(uintfap88H4, uintiWKM5n3, {from: accounts[0]});
//		const uint8mHcpfAj = await WolfStakingRewardsKciVBz.decimals.call({from: accounts[1]});

		assert.equal(uint256l9c0CrE, BigInt("0"))
		await expect(WolfStakingRewardsKciVBz.withdraw.call(uintfap88H4, uintiWKM5n3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringe8LIdb2 = "L3xRj7otnLUTij"
		const stringzYf0gSN = "4wNPQTCmqSDJVpNLPLJTBNfSE"
		const uintvkOQywS = BigInt("36")
		const WolfStakingRewardseGRi0aC = await WolfStakingRewards.new(stringe8LIdb2, stringzYf0gSN, uintvkOQywS, {from: accounts[0]});
		const uintVeLBmc = BigInt("279")
		const uintN05gurc = BigInt("104")
		const uintoM10aHO = BigInt("1499")
		const uintZTS4vbi = await WolfStakingRewardseGRi0aC.getReward.call(uintVeLBmc, {from: accounts[3]});
		const uint256arrayd29h20Y = await WolfStakingRewardseGRi0aC.updateNotifyRewardAmount.call(uintN05gurc, {from: "0x0000000000000000000000000000000000000001"});
		const uint256tmOqn2 = await WolfStakingRewardseGRi0aC.rewardPerToken.call(uintoM10aHO, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresstst0Q7d = accounts[2]
		const addresspnKlvw8 = accounts[1]
		const addressoy1SRq = accounts[1]
		const WolfStakingRewardsKciVBz = await WolfStakingRewards.new(addresstst0Q7d, addresspnKlvw8, addressoy1SRq, {from: accounts[2]});
		const uintSyvgGnB = BigInt("1707")
		const uintxEF05Ma = await WolfStakingRewardsKciVBz.getReward.call(uintSyvgGnB, {from: accounts[5]});
//		const uint8mHcpfAj = await WolfStakingRewardsKciVBz.decimals.call({from: accounts[1]});

		await expect(WolfStakingRewardsKciVBz.decimals.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressz1kdh7Q = accounts[2]
		const addressO0cgVnc = accounts[1]
		const addressa4yr1Pl = accounts[1]
		const WolfStakingRewardsKciVBz = await WolfStakingRewards.new(addressz1kdh7Q, addressO0cgVnc, addressa4yr1Pl, {from: accounts[2]});
		const uinttR1a4ka = BigInt("690")
		const addressWsTC5OW = accounts[1]
		const uintAJVwQ5C = BigInt("664")
		const uintA8080w3 = BigInt("138")
		const uintmUBn5L3 = BigInt("1707")
		const uint256Mr4pi4d = await WolfStakingRewardsKciVBz.earned.call(addressWsTC5OW, uinttR1a4ka, {from: accounts[1]});
//		const uint256anGCKBw = await WolfStakingRewardsKciVBz.stake.call(uintA8080w3, uintAJVwQ5C, {from: accounts[0]});
//		const uintxEF05Ma = await WolfStakingRewardsKciVBz.getReward.call(uintmUBn5L3, {from: accounts[5]});
//		const uint8mHcpfAj = await WolfStakingRewardsKciVBz.decimals.call({from: accounts[1]});

		assert.equal(uint256Mr4pi4d, BigInt("0"))
		await expect(WolfStakingRewardsKciVBz.stake.call(uintA8080w3, uintAJVwQ5C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressv0tB0iu = accounts[2]
		const addressLiFQLH = accounts[1]
		const addresst6m3Zke = accounts[1]
		const WolfStakingRewardsKciVBz = await WolfStakingRewards.new(addressv0tB0iu, addressLiFQLH, addresst6m3Zke, {from: accounts[2]});
		const uinthDjzVGr = BigInt("587")
//		const uint256arrayC2CLTK5 = await WolfStakingRewardsKciVBz.updateNotifyRewardAmount.call(uinthDjzVGr, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8mHcpfAj = await WolfStakingRewardsKciVBz.decimals.call({from: accounts[1]});

		await expect(WolfStakingRewardsKciVBz.updateNotifyRewardAmount.call(uinthDjzVGr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressnlXcsvg = accounts[2]
		const addresscKxeJi1 = accounts[1]
		const addresssxXKlL4 = accounts[1]
		const WolfStakingRewardsKciVBz = await WolfStakingRewards.new(addressnlXcsvg, addresscKxeJi1, addresssxXKlL4, {from: accounts[2]});
		const uintIrGikg7 = BigInt("1414")
//		const uint256x9csoQ4 = await WolfStakingRewardsKciVBz.exit.call(uintIrGikg7, {from: accounts[4]});
//		const uint8mHcpfAj = await WolfStakingRewardsKciVBz.decimals.call({from: accounts[1]});

		await expect(WolfStakingRewardsKciVBz.exit.call(uintIrGikg7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringcCsB1RP = "Ue7VgsY2g8N7DrIFNqTSM7zhpyqiGZLaYtqnai5NjK5bvlxDm2oAGfBVQehny3EaqeBODZMWzWjgRGk775bT"
		const stringA5pmwx = "BYpHOg5IdHOt32hvWWznvX24L8osa51nVSGT6RcX6YwOMjoFZzQxIjpLdd5RtkYR7uIpto7VTclvkRQabKgxlGLoJbh6"
		const uintsXOrLEj = BigInt("1")
		const WolfStakingRewardsaRAEEY9 = await WolfStakingRewards.new(stringcCsB1RP, stringA5pmwx, uintsXOrLEj, {from: accounts[4]});
		const uintW5WyiE8 = BigInt("553")
		const uintgSo2jD1 = BigInt("484")
		const uintpOITQ1Z = BigInt("1100")
		const uintF27OPf = BigInt("437")
		await WolfStakingRewardsaRAEEY9.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsaRAEEY9.nonReentrant.call({from: accounts[0]});
		const uint256uUdvDs = await WolfStakingRewardsaRAEEY9.rewardPerToken.call(uintW5WyiE8, {from: accounts[2]});
		const uint256PfJCVD8 = await WolfStakingRewardsaRAEEY9.stake.call(uintpOITQ1Z, uintgSo2jD1, {from: accounts[4]});
		const uint256Rd6GJa = await WolfStakingRewardsaRAEEY9.lastTimeRewardApplicable.call(uintF27OPf, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDrbhqkY = "DID66KaU8HUzCVc9eTKb68Hhmjq1QxEikBaiZFZ4heIVnL8gj0cBMcru1z2Ht"
		const stringKPOma2 = "oZLzd52i2G7Jag9HaLDxbeiS"
		const uintJeQxa3Q = BigInt("217")
		const WolfStakingRewardsKhPzGID = await WolfStakingRewards.new(stringDrbhqkY, stringKPOma2, uintJeQxa3Q, {from: accounts[2]});
		const uintiNCuvIG = BigInt("640")
		const uintjlzDGIm = BigInt("120")
		const uintnksEBpR = BigInt("712")
		const uintC9D3N45 = BigInt("822")
		const addressHCcp3iJ = accounts[0]
		await WolfStakingRewardsKhPzGID.onlyOwner.call({from: accounts[0]});
		const uint256wBf5aS9 = await WolfStakingRewardsKhPzGID.withdrawRemainingBalance.call(uintjlzDGIm, uintiNCuvIG, {from: accounts[2]});
		await WolfStakingRewardsKhPzGID.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Z2v6a1d = await WolfStakingRewardsKhPzGID.totalSupplyPerPool.call(uintnksEBpR, {from: accounts[4]});
		const addressR9E2CT4 = await WolfStakingRewardsKhPzGID.updateReward.call(addressHCcp3iJ, uintC9D3N45, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addressWZqILPb = accounts[2]
		const addressWaXtcWI = accounts[1]
		const addresszFa7og6 = accounts[1]
		const WolfStakingRewardsKciVBz = await WolfStakingRewards.new(addressWZqILPb, addressWaXtcWI, addresszFa7og6, {from: accounts[2]});
		const uintBXnzZi2 = BigInt("479")
		const uintniFi0n = BigInt("467")
		const uintBCNXwZo = BigInt("1854")
		const uint256j5yG5ps = await WolfStakingRewardsKciVBz.lastTimeRewardApplicable.call(uintBXnzZi2, {from: accounts[1]});
//		const uint256Y8VbRR = await WolfStakingRewardsKciVBz.withdrawRemainingBalance.call(uintBCNXwZo, uintniFi0n, {from: accounts[1]});
//		const uint8mHcpfAj = await WolfStakingRewardsKciVBz.decimals.call({from: accounts[1]});

		assert.equal(uint256j5yG5ps, BigInt("0"))
		await expect(WolfStakingRewardsKciVBz.withdrawRemainingBalance.call(uintBCNXwZo, uintniFi0n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringQqSCt9m = "1JitI78ZDnj72DECroN6mHrkTMGfMaBRWavFRX"
		const stringhhhHxgr = "n7luYBqZRqVuX7BOG8TTlxOpg"
		const uintb4jPr4T = BigInt("246")
		const WolfStakingRewardsDd6hOt5 = await WolfStakingRewards.new(stringQqSCt9m, stringhhhHxgr, uintb4jPr4T, {from: accounts[4]});
		const uint3vSyX8 = BigInt("1482")
		const uintWexI3kE = BigInt("458")
		const addressQ6HKENU = accounts[5]
		const uinteJr1vEz = BigInt("697")
		const addressAGCr9Hg = accounts[4]
		const uintFgkarkG = BigInt("380")
		const uinthNhMZXu = BigInt("1107")
		const addressULRqBz = accounts[3]
		const uintgruGsl = BigInt("1856")
		const uint256vaAm6KD = await WolfStakingRewardsDd6hOt5.getRewardForDuration.call(uint3vSyX8, {from: "0x0000000000000000000000000000000000000001"});
		const uint256kZI6QEg = await WolfStakingRewardsDd6hOt5.earned.call(addressQ6HKENU, uintWexI3kE, {from: accounts[4]});
		const addressBBQMZGZ = await WolfStakingRewardsDd6hOt5.updateReward.call(addressAGCr9Hg, uinteJr1vEz, {from: "0x0000000000000000000000000000000000000001"});
		const uint256OYQSJwh = await WolfStakingRewardsDd6hOt5.totalSupplyPerPool.call(uintFgkarkG, {from: accounts[0]});
		const uint256w7XzSid = await WolfStakingRewardsDd6hOt5.balanceOfPerPool.call(addressULRqBz, uinthNhMZXu, {from: accounts[0]});
		const uintOCslNuv = await WolfStakingRewardsDd6hOt5.getReward.call(uintgruGsl, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressGrb2JMN = accounts[2]
		const addressgKapxyB = accounts[1]
		const addresstHoGEVf = accounts[1]
		const WolfStakingRewardsKciVBz = await WolfStakingRewards.new(addressGrb2JMN, addressgKapxyB, addresstHoGEVf, {from: accounts[2]});
		const uintGcKWtao = BigInt("1911")
		const uintuQF2vAp = BigInt("1191")
		const uintjPJuIhR = BigInt("1161")
		const uintxcn9Vtc = BigInt("185")
		const uintcGInThl = BigInt("1279")
		const uinte9BxMvL = BigInt("296")
		const uinte6Zs6K1 = await WolfStakingRewardsKciVBz.getReward.call(uintGcKWtao, {from: accounts[2]});
//		const uint256G7sDWhV = await WolfStakingRewardsKciVBz.getRewardForDuration.call(uintuQF2vAp, {from: accounts[3]});
//		const uint256XDqzLQ = await WolfStakingRewardsKciVBz.withdraw.call(uintxcn9Vtc, uintjPJuIhR, {from: accounts[2]});
//		await WolfStakingRewardsKciVBz.onlyOwner.call({from: accounts[2]});
//		const uint256fG6WXtS = await WolfStakingRewardsKciVBz.withdraw.call(uinte9BxMvL, uintcGInThl, {from: accounts[0]});

		await expect(WolfStakingRewardsKciVBz.getRewardForDuration.call(uintuQF2vAp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringJWQIHUD = "NCm1HSFhnsWvTCWSST1oPFFkgSTwDzDvUs"
		const stringroPsHaO = "axyf2v8IzjDKa39oTHhuvJWaY3cAgSCDwMWJxqPFqsTNet2PcQhYg5E6cR9oB4UJsbEwzUjmoL18Fredd5eQcPlbLrNsnRw4u4"
		const uintzUyiFPG = BigInt("41")
		const WolfStakingRewardsYF8hlL = await WolfStakingRewards.new(stringJWQIHUD, stringroPsHaO, uintzUyiFPG, {from: accounts[2]});
		const uintDKsB3HU = BigInt("1056")
		const uintU9EqoSx = BigInt("629")
		const addressY4k7xSu = accounts[0]
		const uintHt87kAH = BigInt("692")
		const addressxhRBg8r = "0x0000000000000000000000000000000000000001"
		const uintEpVG9vt = BigInt("195")
		const addressr4KAxuu = accounts[5]
		const uintj1NskGt = BigInt("922")
		const addressBuqmg7 = accounts[3]
		const uint256b3SFpSP = await WolfStakingRewardsYF8hlL.lastTimeRewardApplicable.call(uintDKsB3HU, {from: accounts[1]});
		const uint256fhiJNU = await WolfStakingRewardsYF8hlL.earned.call(addressY4k7xSu, uintU9EqoSx, {from: accounts[1]});
		const uint256IZZxmq = await WolfStakingRewardsYF8hlL.balanceOfPerPool.call(addressxhRBg8r, uintHt87kAH, {from: accounts[1]});
		const uint256VxGB7bZ = await WolfStakingRewardsYF8hlL.balanceOfPerPool.call(addressr4KAxuu, uintEpVG9vt, {from: accounts[4]});
		const uint256Lj960pd = await WolfStakingRewardsYF8hlL.earned.call(addressBuqmg7, uintj1NskGt, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbZK4Q8 = ""
		const stringl8R53lT = "AxAVCcE8PTN69voZ4366gL8KswIlya6jQ2CVVsKJ3A7iBsL4qxX8VoljAefMw9RhG5UGaGGCI7oIuds5i6ZTp1Y3UM6w"
		const uintSMaJ26f = BigInt("153")
		const WolfStakingRewardsC0MXZB7 = await WolfStakingRewards.new(stringbZK4Q8, stringl8R53lT, uintSMaJ26f, {from: "0x0000000000000000000000000000000000000001"});
		const uintWOsSbJU = BigInt("930")
		const uintGfDuM7I = BigInt("931")
		const uintqvMFCvg = BigInt("1138")
		const stringkgHLrPp = await WolfStakingRewardsC0MXZB7.symbol.call({from: accounts[3]});
		const uint256yNrx9Vt = await WolfStakingRewardsC0MXZB7.lastTimeRewardApplicable.call(uintWOsSbJU, {from: accounts[0]});
		const uint2567xI8ld = await WolfStakingRewardsC0MXZB7.withdrawRemainingBalance.call(uintqvMFCvg, uintGfDuM7I, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressEWLZ4l = accounts[1]
		const addressoVF8oTj = accounts[3]
		const address2EWnr2 = accounts[4]
		const WolfStakingRewardszIBELKL = await WolfStakingRewards.new(addressEWLZ4l, addressoVF8oTj, address2EWnr2, {from: "0x0000000000000000000000000000000000000001"});
		const uintuEbj9V = BigInt("1515")
		const addressNbn8r2u = accounts[1]
		const uintTEXEfG = BigInt("667")
		const addressvms0Gtj = accounts[0]
		const uintYpvDEH4 = BigInt("1872")
		await WolfStakingRewardszIBELKL.onlyRewardsDistribution.call({from: accounts[3]});
		await WolfStakingRewardszIBELKL.onlyOwner.call({from: accounts[3]});
		await WolfStakingRewardszIBELKL.onlyRewardsDistribution.call({from: accounts[3]});
		const addressK5NtYi = await WolfStakingRewardszIBELKL.updateReward.call(addressNbn8r2u, uintuEbj9V, {from: accounts[1]});
		const uint256GFMG8DT = await WolfStakingRewardszIBELKL.earned.call(addressvms0Gtj, uintTEXEfG, {from: accounts[4]});
		const uint256SQFgR0a = await WolfStakingRewardszIBELKL.rewardPerToken.call(uintYpvDEH4, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const string1qSyP6 = "RfWSrjEGh9OOIOaewUezTP7tHbsJOPIvb56X6CxoGkXDDSF5L6PS0orfPOdM9hl5u8tN4G9OclYDCJYxKAvlF1pV4SOL"
		const stringcsfAbbE = "FYxodkgb6oQ3OV36jcwWjHJB4y60Ezo9MJ6PCmqEjIWyKmHg82TOm"
		const uintJyr4qOq = BigInt("48")
		const WolfStakingRewardspGxmfQ = await WolfStakingRewards.new(string1qSyP6, stringcsfAbbE, uintJyr4qOq, {from: accounts[3]});
		const uintr8zu1tv = BigInt("184")
		const uintZSe6Az0 = BigInt("94")
		const uintFg5hID = BigInt("12")
		const uintao5Eta = BigInt("10")
		const uint256JX1Bpto = await WolfStakingRewardspGxmfQ.withdraw.call(uintZSe6Az0, uintr8zu1tv, {from: accounts[1]});
		const uint256iIux20G = await WolfStakingRewardspGxmfQ.getRewardForDuration.call(uintFg5hID, {from: accounts[3]});
		const uint256QrSMbeJ = await WolfStakingRewardspGxmfQ.lastTimeRewardApplicable.call(uintao5Eta, {from: accounts[0]});
		const stringwuxaqy = await WolfStakingRewardspGxmfQ.name.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfLhh3By = "zWpUnVudkD63YEOEc6mNwSVzetbCmZK"
		const stringTUdLwP = "rBAFufKOtCt1WMbrYJ59B5jeUjDCK1V6UAUKAYXvMlM5eTN533MvWOKLkS2GC"
		const uintJcHQCp5 = BigInt("123")
		const WolfStakingRewardse7J0R82 = await WolfStakingRewards.new(stringfLhh3By, stringTUdLwP, uintJcHQCp5, {from: accounts[2]});
		const stringdx6v8ye = await WolfStakingRewardse7J0R82.name.call({from: accounts[0]});
		const uint8GmYii6u = await WolfStakingRewardse7J0R82.decimals.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressSZNeQKW = accounts[2]
		const addressq6NSGNx = accounts[1]
		const addressOgaVPq1 = accounts[1]
		const WolfStakingRewardsKciVBz = await WolfStakingRewards.new(addressSZNeQKW, addressq6NSGNx, addressOgaVPq1, {from: accounts[2]});
		const uintZWCVIt = BigInt("840")
		const uintbN75fBm = BigInt("1812")
		const uintkISu4Gm = BigInt("1707")
//		const uint256k9CeCW = await WolfStakingRewardsKciVBz.withdrawRemainingBalance.call(uintbN75fBm, uintZWCVIt, {from: accounts[2]});
//		const uintxEF05Ma = await WolfStakingRewardsKciVBz.getReward.call(uintkISu4Gm, {from: accounts[5]});

		await expect(WolfStakingRewardsKciVBz.withdrawRemainingBalance.call(uintbN75fBm, uintZWCVIt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringsHjVqUH = "n67bF4GdNG5Vc0PHGhoQjG7ITzl3uSdMWiDzN"
		const stringj3T0coh = "mnP4P3OuIc57i8JuiXcP3mcua"
		const uintsFR4bLh = BigInt("41")
		const WolfStakingRewardsqZzrF0k = await WolfStakingRewards.new(stringsHjVqUH, stringj3T0coh, uintsFR4bLh, {from: accounts[4]});
		const uintDFMNQmt = BigInt("847")
		const uintf5BUAH0 = BigInt("1915")
		const uintrLU5yf6 = BigInt("1264")
		const uintNRM10FD = BigInt("1743")
		const uintmdzC8Fy = BigInt("1121")
		const uint256uZgVO0 = await WolfStakingRewardsqZzrF0k.totalSupplyPerPool.call(uintDFMNQmt, {from: accounts[4]});
		const uintuHf1ZWY = await WolfStakingRewardsqZzrF0k.getReward.call(uintf5BUAH0, {from: accounts[3]});
		const uint256arrayvGr0mZ = await WolfStakingRewardsqZzrF0k.updateNotifyRewardAmount.call(uintrLU5yf6, {from: accounts[2]});
		const uint256O6TzvVv = await WolfStakingRewardsqZzrF0k.exit.call(uintNRM10FD, {from: accounts[3]});
		const uint256GEaAnB7 = await WolfStakingRewardsqZzrF0k.totalSupplyPerPool.call(uintmdzC8Fy, {from: accounts[3]});
		const uint8RiksX5f = await WolfStakingRewardsqZzrF0k.decimals.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJnQNHpd = "c"
		const stringYExza2j = "w8ic5EMOFuVljea"
		const uintXOc6S5R = BigInt("138")
		const WolfStakingRewardsqdl1ACi = await WolfStakingRewards.new(stringJnQNHpd, stringYExza2j, uintXOc6S5R, {from: accounts[3]});
		const uintXYecnll = BigInt("7")
		const uintLd6i7sE = BigInt("1292")
		const uintsidcix1 = BigInt("1434")
		const uintdl42pR = BigInt("1311")
		const addressXbAYCJ = "0x0000000000000000000000000000000000000001"
		const uintGF87j22 = BigInt("1508")
		const uintyHHnxre = BigInt("1603")
		const uint256nlp85U6 = await WolfStakingRewardsqdl1ACi.exit.call(uintXYecnll, {from: accounts[3]});
		await WolfStakingRewardsqdl1ACi.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256PrYFg52 = await WolfStakingRewardsqdl1ACi.withdrawRemainingBalance.call(uintsidcix1, uintLd6i7sE, {from: accounts[5]});
		await WolfStakingRewardsqdl1ACi.onlyOwner.call({from: accounts[4]});
		const addressycaCRsM = await WolfStakingRewardsqdl1ACi.updateReward.call(addressXbAYCJ, uintdl42pR, {from: accounts[3]});
		const uint256dgBJrj9 = await WolfStakingRewardsqdl1ACi.stake.call(uintyHHnxre, uintGF87j22, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringdLgVYUx = "hg9nR"
		const string9znuKl = "lCiQlyBT4qgqee2DNYyAH"
		const uintkP3qYDS = BigInt("26")
		const WolfStakingRewardsAd0ELwK = await WolfStakingRewards.new(stringdLgVYUx, string9znuKl, uintkP3qYDS, {from: accounts[1]});
		const uintAPEk7Id = BigInt("109")
		const uintgpts9IO = BigInt("1927")
		const addressK23UKFz = accounts[1]
		const uintdI7l2fO = BigInt("802")
		const uint256arrayW4wAGuY = await WolfStakingRewardsAd0ELwK.updateNotifyRewardAmount.call(uintAPEk7Id, {from: accounts[0]});
		const stringmgPhYkd = await WolfStakingRewardsAd0ELwK.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256U7CDdrH = await WolfStakingRewardsAd0ELwK.balanceOfPerPool.call(addressK23UKFz, uintgpts9IO, {from: accounts[3]});
		const uint256JGdWE5M = await WolfStakingRewardsAd0ELwK.totalSupplyPerPool.call(uintdI7l2fO, {from: accounts[3]});
		const stringysm2cfm = await WolfStakingRewardsAd0ELwK.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringf3Guanq = "KRg3BAuxEFvLiJ2gH0xG"
		const stringM0joE3t = "eYS6gJMRER3kNO5VvRK8HX8QoznuD8gNVa"
		const uintSsje0Uq = BigInt("2")
		const WolfStakingRewardsuZ7PcyU = await WolfStakingRewards.new(stringf3Guanq, stringM0joE3t, uintSsje0Uq, {from: accounts[0]});
		const uintpo2L6Fs = BigInt("222")
		const uintuBDaUxP = BigInt("263")
		const uint256ah9hAUE = await WolfStakingRewardsuZ7PcyU.exit.call(uintpo2L6Fs, {from: accounts[0]});
		const uint8PEUWPf4 = await WolfStakingRewardsuZ7PcyU.decimals.call({from: accounts[4]});
		const uint256q43aHq1 = await WolfStakingRewardsuZ7PcyU.exit.call(uintuBDaUxP, {from: accounts[0]});
		await WolfStakingRewardsuZ7PcyU.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDBxuD6z = "A3KJiQLHLUpaH1goTM5EV5L3K"
		const stringDlXVGBo = "YI3GI7"
		const uintvPWz89m = BigInt("22")
		const WolfStakingRewardsq9WogfC = await WolfStakingRewards.new(stringDBxuD6z, stringDlXVGBo, uintvPWz89m, {from: accounts[3]});
		const uinty4v2FDH = BigInt("1852")
		const uintiZT0Or = BigInt("1605")
		const uintaLij7a = BigInt("199")
		const addressGS2urij = accounts[0]
		const uintUTcDOgd = BigInt("1785")
		const addressVfYLCll = accounts[4]
		const uintN9buI5o = BigInt("607")
		const uintkDCMQAj = BigInt("1937")
		const uint256arrayHeib3u1 = await WolfStakingRewardsq9WogfC.updateNotifyRewardAmount.call(uinty4v2FDH, {from: accounts[1]});
		const uint256tb2au6r = await WolfStakingRewardsq9WogfC.getRewardForDuration.call(uintiZT0Or, {from: "0x0000000000000000000000000000000000000001"});
		const stringZKI95uh = await WolfStakingRewardsq9WogfC.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const address1rVhqS = await WolfStakingRewardsq9WogfC.updateReward.call(addressGS2urij, uintaLij7a, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Xct7JBr = await WolfStakingRewardsq9WogfC.earned.call(addressVfYLCll, uintUTcDOgd, {from: accounts[5]});
		const uint256fILkjK6 = await WolfStakingRewardsq9WogfC.withdraw.call(uintkDCMQAj, uintN9buI5o, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHFpw1w = "Xpqs23zhxtzoizgakEQg9FYVbvVOqErRQkvPp"
		const stringpuwDKfr = "7ibfiAI7WvmxmE5oA8t4eQ3VWm4bLISdkP0lbe975279VC1C8G7d33n8c7xUlUoqUGbhJGTAcU"
		const uintAhchTxX = BigInt("210")
		const WolfStakingRewardsz78x7AH = await WolfStakingRewards.new(stringHFpw1w, stringpuwDKfr, uintAhchTxX, {from: accounts[4]});
		const uintb02DJG = BigInt("605")
		const addressNE3cGg6 = accounts[3]
		const uint256mibmJ0j = await WolfStakingRewardsz78x7AH.earned.call(addressNE3cGg6, uintb02DJG, {from: accounts[2]});
		await WolfStakingRewardsz78x7AH.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhrG6KOj = "TrQq6rEoU8ot8hPw6S3Sx2eV9cugm6tLGdRJ5Mo"
		const stringEcv44Yg = "Ffs4cYKyQXf4c2prfrMxOcb1KSRMQI1gMmBPNb5O7meWHdiN"
		const uintQ7r9rK4 = BigInt("17")
		const WolfStakingRewardsKdEpU25 = await WolfStakingRewards.new(stringhrG6KOj, stringEcv44Yg, uintQ7r9rK4, {from: accounts[1]});
		const uintcXvTJTD = BigInt("1908")
		const uintWkNu9G4 = BigInt("1056")
		const uint256nzADOPT = await WolfStakingRewardsKdEpU25.getRewardForDuration.call(uintcXvTJTD, {from: accounts[3]});
		await WolfStakingRewardsKdEpU25.onlyRewardsDistribution.call({from: accounts[0]});
		const uintVeufUIH = await WolfStakingRewardsKdEpU25.getReward.call(uintWkNu9G4, {from: accounts[1]});
		const stringbHcZaGF = await WolfStakingRewardsKdEpU25.symbol.call({from: accounts[2]});
		const uint8GRb1xCf = await WolfStakingRewardsKdEpU25.decimals.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringux3f5Jx = "Y1g7yiMvQECtNEAqjkp9APfZK"
		const stringiCs8WyM = "7U6432Ai2MttzPp6frJaTzR45w7QUPv1byuOhdoy7XsesNtjHfVMDBm1SObBSUmDgVtj"
		const uintzJtgX7A = BigInt("226")
		const WolfStakingRewardsvdqfmcB = await WolfStakingRewards.new(stringux3f5Jx, stringiCs8WyM, uintzJtgX7A, {from: accounts[4]});
		const uintQJTKSvw = BigInt("537")
		await WolfStakingRewardsvdqfmcB.nonReentrant.call({from: accounts[4]});
		await WolfStakingRewardsvdqfmcB.nonReentrant.call({from: accounts[0]});
		const uintTB96tHp = await WolfStakingRewardsvdqfmcB.getReward.call(uintQJTKSvw, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvl7bew = "OtNDUeVR7unOWAp3WPPl04iYLcpEbNk8owgV10rcSAe6IUxEIBHl1a3h3P2SMw4Xx1mt"
		const stringhkdp6lh = "9Ns"
		const uintxr3QAqv = BigInt("240")
		const WolfStakingRewardslE9nHOQ = await WolfStakingRewards.new(stringvl7bew, stringhkdp6lh, uintxr3QAqv, {from: accounts[2]});
		const uintivWn1PE = BigInt("1308")
		const uintmKYOPcI = BigInt("652")
		const uintsVIccxW = BigInt("1382")
		const addressGYRJ2C = accounts[3]
		const uintzUKsjtN = BigInt("1305")
		const addressbjk3doT = accounts[1]
		const uint256CXsRAg = await WolfStakingRewardslE9nHOQ.withdrawRemainingBalance.call(uintmKYOPcI, uintivWn1PE, {from: accounts[4]});
		const uint256pqaLPr = await WolfStakingRewardslE9nHOQ.earned.call(addressGYRJ2C, uintsVIccxW, {from: accounts[0]});
		const uint256FK0svK = await WolfStakingRewardslE9nHOQ.balanceOfPerPool.call(addressbjk3doT, uintzUKsjtN, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMB4JQB8 = "1JL"
		const stringM2aGNAq = "MvCOS88tyLxNv"
		const uintD7xrC7 = BigInt("130")
		const WolfStakingRewardsHTsCC4i = await WolfStakingRewards.new(stringMB4JQB8, stringM2aGNAq, uintD7xrC7, {from: accounts[2]});
		const uintmePIoWo = BigInt("1539")
		const addresscsEZDxc = accounts[5]
		const uintiSMTGDI = BigInt("1946")
		const uintA2ArBSN = BigInt("2034")
		const addressyoqAkt = accounts[4]
		const uintFD0f0IR = BigInt("460")
		const uintog6rYky = BigInt("1483")
		const uintpeE7gmH = BigInt("1578")
		const uint256vn2y9hT = await WolfStakingRewardsHTsCC4i.balanceOfPerPool.call(addresscsEZDxc, uintmePIoWo, {from: accounts[0]});
		const uint256arrayJk5LnPX = await WolfStakingRewardsHTsCC4i.updateNotifyRewardAmount.call(uintiSMTGDI, {from: accounts[3]});
		const addressyRX4iAT = await WolfStakingRewardsHTsCC4i.updateReward.call(addressyoqAkt, uintA2ArBSN, {from: accounts[0]});
		const uint256fSkjlG1 = await WolfStakingRewardsHTsCC4i.getRewardForDuration.call(uintFD0f0IR, {from: accounts[5]});
		const uint256oP1NodE = await WolfStakingRewardsHTsCC4i.rewardPerToken.call(uintog6rYky, {from: accounts[5]});
		const uintowgynbX = await WolfStakingRewardsHTsCC4i.getReward.call(uintpeE7gmH, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQ8ha2xE = "4kza2Qb7G6FiHHnRcD86EafpwZR7xXnFZ0iHfGKrBo2mkw8nrbef1EPi3YSR9sdRl"
		const stringSEDDd2J = "gBDNI2BL3dxz5QiYfbWnA34qTAbrNyewg5y8CJk3OLGbkUpKc8PKB3"
		const uintoZHFfUc = BigInt("106")
		const WolfStakingRewardsv9ivqbx = await WolfStakingRewards.new(stringQ8ha2xE, stringSEDDd2J, uintoZHFfUc, {from: accounts[2]});
		const uintkJH4LQT = BigInt("881")
		const uintXCirPz = BigInt("1510")
		const addresstVblGTo = accounts[4]
		const uint256y5ThYAQ = await WolfStakingRewardsv9ivqbx.rewardPerToken.call(uintkJH4LQT, {from: accounts[0]});
		const addresspa0EWWG = await WolfStakingRewardsv9ivqbx.updateReward.call(addresstVblGTo, uintXCirPz, {from: accounts[3]});
		const uint8R3bHHOm = await WolfStakingRewardsv9ivqbx.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsv9ivqbx.onlyOwner.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLW3071E = "BBTwaicSOovBmQwVqqaaDBAgajvafivLXoGRGupIVHr"
		const stringYTqKA1 = "f3UZoxvkadqGXBXBVjHFP4K"
		const uintwm0xIG0 = BigInt("182")
		const WolfStakingRewardsYTM5ebJ = await WolfStakingRewards.new(stringLW3071E, stringYTqKA1, uintwm0xIG0, {from: accounts[1]});
		const uintZUELvL = BigInt("1506")
		const addressfwf7gWi = accounts[2]
		const uintdbIv2m = BigInt("1581")
		const addressri0bdJ2 = accounts[1]
		const uintg59feIh = BigInt("1122")
		const uintf2gfjYl = BigInt("253")
		const uint256Bb8VnKz = await WolfStakingRewardsYTM5ebJ.balanceOfPerPool.call(addressfwf7gWi, uintZUELvL, {from: accounts[2]});
		const uint256awKkCT0 = await WolfStakingRewardsYTM5ebJ.earned.call(addressri0bdJ2, uintdbIv2m, {from: accounts[5]});
		const uint256bDXbpiN = await WolfStakingRewardsYTM5ebJ.withdrawRemainingBalance.call(uintf2gfjYl, uintg59feIh, {from: accounts[2]});
		await WolfStakingRewardsYTM5ebJ.onlyOwner.call({from: accounts[0]});
		await WolfStakingRewardsYTM5ebJ.onlyOwner.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjPYdwjv = "iWPjeW105MYS2KDOO8KsKMa9GF8KTdHxk7xu5FnX3qksqtwCbwnKIVXF4f1I5nKRzeeYH0VW702vPB9bpA0ARA25BYPYEJ8MMP"
		const stringHxAK5py = "dTiNRSCxw2xjWi5KY7TQv2ZtcfUNzhp5GFONEDCrpmefj9HhJsr3ozPd8r2xrVhx4PEpuYk8L1kNau8woL9"
		const uinti6bXmW1 = BigInt("28")
		const WolfStakingRewardsoZdyg8n = await WolfStakingRewards.new(stringjPYdwjv, stringHxAK5py, uinti6bXmW1, {from: accounts[4]});
		const uint1iNXPy = BigInt("529")
		const uinti8PCz1c = BigInt("653")
		const uintBkcjVY = BigInt("236")
		const uinttFzE8V = BigInt("1661")
		const uint256V5P681R = await WolfStakingRewardsoZdyg8n.lastTimeRewardApplicable.call(uint1iNXPy, {from: accounts[3]});
		const uintxfdgb2L = await WolfStakingRewardsoZdyg8n.getReward.call(uinti8PCz1c, {from: accounts[3]});
		const uint256TD1kzVv = await WolfStakingRewardsoZdyg8n.stake.call(uinttFzE8V, uintBkcjVY, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringNe6jsYx = "IZ01OItKdt2z4s6WuHDhewwKnSXCikxuia9GEPwwuJMduF9ijrJnu"
		const stringPzxQ8MB = "dz8dpJcOaHFisnE36UovUg94vhIhlg5SvCofYwYT7XWX5GKv3ZBkvMPKX9AUQ"
		const uintMtw2AW = BigInt("116")
		const WolfStakingRewardswT7cZE6 = await WolfStakingRewards.new(stringNe6jsYx, stringPzxQ8MB, uintMtw2AW, {from: accounts[2]});
		const uint47xwaW = BigInt("1387")
		const uintYlsqHMS = BigInt("245")
		const uintEa4OoaF = BigInt("1681")
		const uintUWWEqq5 = BigInt("1763")
		const uintZjNPl4 = BigInt("1934")
		const uint25608KSGt = await WolfStakingRewardswT7cZE6.withdrawRemainingBalance.call(uintYlsqHMS, uint47xwaW, {from: accounts[3]});
		const uint256pdBURgd = await WolfStakingRewardswT7cZE6.stake.call(uintUWWEqq5, uintEa4OoaF, {from: accounts[3]});
		const uint256arraylSAR8EC = await WolfStakingRewardswT7cZE6.updateNotifyRewardAmount.call(uintZjNPl4, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringiGF5N2 = "yp4gpLQnNBOgKmHy4rnvi9yRPgMEgKbCANrg6THdFNaT"
		const stringh04wwHo = "8qXSDqcY4jMi0xj2JtORh1yW3wGYKBavmXLC26cxCOEal9ozvbOqy5HyvzpEDbU5hdG6eFWLjg3rh4YTbQDJ6Jc8VXMoIJK3PC"
		const uintT3c5lDJ = BigInt("206")
		const WolfStakingRewardsQjyWmK = await WolfStakingRewards.new(stringiGF5N2, stringh04wwHo, uintT3c5lDJ, {from: accounts[1]});
		const uintA3aaf9w = BigInt("1107")
		const uintFuKLznT = BigInt("1948")
		const addressTtKhlvo = accounts[0]
		const uintPKgkj5Y = BigInt("61")
		const uintRh4Xv5H = BigInt("288")
		const uintiB4GafQ = BigInt("609")
		const uint256WfqJBt = await WolfStakingRewardsQjyWmK.exit.call(uintA3aaf9w, {from: accounts[1]});
		const uint256gxGz3r = await WolfStakingRewardsQjyWmK.balanceOfPerPool.call(addressTtKhlvo, uintFuKLznT, {from: accounts[1]});
		const uint256fhHHSSr = await WolfStakingRewardsQjyWmK.lastTimeRewardApplicable.call(uintPKgkj5Y, {from: accounts[4]});
		const uint256vS0hUTV = await WolfStakingRewardsQjyWmK.rewardPerToken.call(uintRh4Xv5H, {from: accounts[2]});
		const uint2561AZe6j = await WolfStakingRewardsQjyWmK.exit.call(uintiB4GafQ, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringiQFIK2k = "qTWbsQMvXFrfoIVYVKUJ7uBA4JHnl8W1R"
		const stringCB8eNwk = "57hcG8R6jbICxRCWxdlkGdEW7TATGyHMqKMgft25HoL737wpHDBDQnY03osOg1TF"
		const uintqbhgyA9 = BigInt("134")
		const WolfStakingRewardsPPYC68l = await WolfStakingRewards.new(stringiQFIK2k, stringCB8eNwk, uintqbhgyA9, {from: accounts[3]});
		const uintr1yeZVo = BigInt("1459")
		const address243Jxy = accounts[0]
		const uintZetDEjT = BigInt("838")
		const uintxXySFDB = BigInt("304")
		const addresseRp3uKw = accounts[1]
		const uint256ZXeOHc2 = await WolfStakingRewardsPPYC68l.balanceOfPerPool.call(address243Jxy, uintr1yeZVo, {from: accounts[4]});
		await WolfStakingRewardsPPYC68l.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256reCLgWf = await WolfStakingRewardsPPYC68l.exit.call(uintZetDEjT, {from: accounts[4]});
		const addressyyWdBKY = await WolfStakingRewardsPPYC68l.updateReward.call(addresseRp3uKw, uintxXySFDB, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringsLhTiHa = "dlN9R7X4IqYhkb4zzpqTgltIOM"
		const stringq5KGtxY = "Kv1uoY2FffyAY"
		const uintulOSQVN = BigInt("175")
		const WolfStakingRewardsliDm39h = await WolfStakingRewards.new(stringsLhTiHa, stringq5KGtxY, uintulOSQVN, {from: accounts[5]});
		const uintq1wvUjD = BigInt("599")
		const uinthtUOyKG = BigInt("823")
		const uint256rzTqA9p = await WolfStakingRewardsliDm39h.totalSupplyPerPool.call(uintq1wvUjD, {from: "0x0000000000000000000000000000000000000001"});
		const uintQP9O45M = await WolfStakingRewardsliDm39h.getReward.call(uinthtUOyKG, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbjkWv5r = "YhMX9pjHXlNRPjhe4vGAT64I1Q3gwLBkArL5XwnjETgVfSX6gTHRVFMd4A5h27ynvxnpEUEw3gWigq"
		const stringfOltZAA = "05Nud8pmyO2WKGUxLVhOMQmSGmuFlhkZdBl1EUM1wMH7xeCOENxogjpIw2g9mCpKYM3fR8s3NGLhlGpEKUMUyX"
		const uintEiJSvJv = BigInt("19")
		const WolfStakingRewardsVlExD98 = await WolfStakingRewards.new(stringbjkWv5r, stringfOltZAA, uintEiJSvJv, {from: accounts[1]});
		const uintBIG80Et = BigInt("1887")
		const uint2qw4ob = BigInt("1443")
		const uintkNCODGS = BigInt("411")
		const uint256pItfRxg = await WolfStakingRewardsVlExD98.stake.call(uint2qw4ob, uintBIG80Et, {from: accounts[0]});
		const uint256uv6iVnS = await WolfStakingRewardsVlExD98.totalSupplyPerPool.call(uintkNCODGS, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringa1nnhbC = "62n9A1EGH5gcFY16Xs8K7VGSy1xQ48gATJjq1kHkShD7m9nqnatiBXhEEJdTleEAsgSGhJQkiphk5u6TIpprqswyHK35"
		const stringogK7esh = "Km1SqdljaQBOoUuEfjrDQrhrV4vb79Bh"
		const uintZoatWKy = BigInt("234")
		const WolfStakingRewardsKzAgRO = await WolfStakingRewards.new(stringa1nnhbC, stringogK7esh, uintZoatWKy, {from: accounts[3]});
		const uintDOaIFG = BigInt("761")
		const addressbEE308r = accounts[1]
		const uintVpRPag3 = BigInt("1316")
		const addressaHcDdqh = "0x0000000000000000000000000000000000000001"
		const uintuA2f0KV = BigInt("801")
		const uintxoxt30l = BigInt("1363")
		const uint256X7DJey = await WolfStakingRewardsKzAgRO.earned.call(addressbEE308r, uintDOaIFG, {from: accounts[4]});
		const uint256qr29kwy = await WolfStakingRewardsKzAgRO.balanceOfPerPool.call(addressaHcDdqh, uintVpRPag3, {from: accounts[4]});
		const uint256arrayrVk47xc = await WolfStakingRewardsKzAgRO.updateNotifyRewardAmount.call(uintuA2f0KV, {from: accounts[2]});
		const uint256tbl3QyD = await WolfStakingRewardsKzAgRO.exit.call(uintxoxt30l, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPTD3mb = "3Lz"
		const stringhi5HSG4 = "pM0LcQb7WAl9Y5q6ql2hAfz"
		const uintFimXzaY = BigInt("18")
		const WolfStakingRewardsjkakJ06 = await WolfStakingRewards.new(stringPTD3mb, stringhi5HSG4, uintFimXzaY, {from: accounts[2]});
		const uintntVqSMh = BigInt("1345")
		const addressYpSn0gY = accounts[3]
		const uintUrd6TFR = BigInt("637")
		const addressMjJPKWa = accounts[1]
		const uintFijlcoI = BigInt("1464")
		const addressRSw7Ym = accounts[5]
		const uint256eAA5nPO = await WolfStakingRewardsjkakJ06.earned.call(addressYpSn0gY, uintntVqSMh, {from: accounts[3]});
		const uint256R5GOkDc = await WolfStakingRewardsjkakJ06.earned.call(addressMjJPKWa, uintUrd6TFR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256uIm2s09 = await WolfStakingRewardsjkakJ06.earned.call(addressRSw7Ym, uintFijlcoI, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const string8CvGxk = "N5FHDrXL8"
		const stringd0Rg3IW = "EwfgkPG596HuiDT8KBvKQSkRa1YLt1ryVtRYtoRxhxtqGgEntrIiVcUQhO4apQ6zpSrTraX8sTO552iUVLXDMu6"
		const uintkuFy68V = BigInt("133")
		const WolfStakingRewardseRKzalf = await WolfStakingRewards.new(string8CvGxk, stringd0Rg3IW, uintkuFy68V, {from: accounts[2]});
		const uintbsJQbMM = BigInt("399")
		const uintRQHh3s3 = BigInt("362")
		const uintbGvCXw7 = BigInt("1095")
		const uintam3oE5 = BigInt("1545")
		const uint256oVCrpos = await WolfStakingRewardseRKzalf.withdraw.call(uintRQHh3s3, uintbsJQbMM, {from: "0x0000000000000000000000000000000000000001"});
		const stringtCAU0M = await WolfStakingRewardseRKzalf.symbol.call({from: accounts[5]});
		const uint256ntFB00O = await WolfStakingRewardseRKzalf.lastTimeRewardApplicable.call(uintbGvCXw7, {from: accounts[4]});
		const uint256AQR5qbm = await WolfStakingRewardseRKzalf.totalSupplyPerPool.call(uintam3oE5, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDYPwW9C = "GktMQLQPiZNk"
		const stringRpcwH3r = "VtGpcCBLvaFX2exv2bFmQ7VEdeiRLYOjmQ4usYUB6A78RM4xUYHDKobeoQSmiH0M2I8"
		const uintDi7MQjh = BigInt("39")
		const WolfStakingRewardsCTP4Yfg = await WolfStakingRewards.new(stringDYPwW9C, stringRpcwH3r, uintDi7MQjh, {from: accounts[2]});
		const uintG04xg1R = BigInt("977")
		const uintNQAhFAt = BigInt("1785")
		const uint256fA5Wice = await WolfStakingRewardsCTP4Yfg.totalSupplyPerPool.call(uintG04xg1R, {from: accounts[1]});
		const uint256arrayj7JJfKu = await WolfStakingRewardsCTP4Yfg.updateNotifyRewardAmount.call(uintNQAhFAt, {from: accounts[1]});
		const stringyygXxkc = await WolfStakingRewardsCTP4Yfg.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFAuict1 = "SOeJyMSsCGHEFHeUQBWplA7GJyo67GJ4NTsB3bOlg"
		const stringrkOLnD3 = "9bl7cWB7aSeUhbObIMEj2juOjUm8FbXCCotBuJttQLy51Yh"
		const uintrk4GRdh = BigInt("162")
		const WolfStakingRewardsBezefxr = await WolfStakingRewards.new(stringFAuict1, stringrkOLnD3, uintrk4GRdh, {from: accounts[2]});
		const uintN6xSZaP = BigInt("825")
		const uintrAeaIn8 = BigInt("1868")
		const uintoQ2kb2 = BigInt("423")
		const addressfRkfI2W = accounts[2]
		const uint256arrayzspQQPt = await WolfStakingRewardsBezefxr.updateNotifyRewardAmount.call(uintN6xSZaP, {from: accounts[1]});
		const uint256AXFku0 = await WolfStakingRewardsBezefxr.totalSupplyPerPool.call(uintrAeaIn8, {from: accounts[0]});
		const uint256q1rF2h = await WolfStakingRewardsBezefxr.earned.call(addressfRkfI2W, uintoQ2kb2, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUMTqdOs = "JegJmBJhD6vBM7LsDGpirjZJdd5WNFLFtS2ptdlpYUiTd24I9eAFPB"
		const stringtp0Sp0H = "T49kgwAnrgpK2xEvlod2HQC7qQ9uGmmHtkEQAJcspVAo"
		const uintx3kngbs = BigInt("39")
		const WolfStakingRewardssVx4pvC = await WolfStakingRewards.new(stringUMTqdOs, stringtp0Sp0H, uintx3kngbs, {from: accounts[1]});
		const uintjghXot8 = BigInt("179")
		const uintYgW8NuI = BigInt("347")
		const uintR5qf263 = BigInt("1514")
		const uintw9HOK2 = BigInt("1467")
		const uintquzsWMn = BigInt("1999")
		const addressH0ITgXi = accounts[1]
		const uint256qB0xkNa = await WolfStakingRewardssVx4pvC.withdraw.call(uintYgW8NuI, uintjghXot8, {from: accounts[5]});
		const uint8O6YU5wH = await WolfStakingRewardssVx4pvC.decimals.call({from: accounts[1]});
		const uint256BeUgBMB = await WolfStakingRewardssVx4pvC.stake.call(uintw9HOK2, uintR5qf263, {from: accounts[0]});
		const uint8lu61Dgb = await WolfStakingRewardssVx4pvC.decimals.call({from: accounts[4]});
		const uint256tg2jB8j = await WolfStakingRewardssVx4pvC.earned.call(addressH0ITgXi, uintquzsWMn, {from: accounts[1]});
	});
})