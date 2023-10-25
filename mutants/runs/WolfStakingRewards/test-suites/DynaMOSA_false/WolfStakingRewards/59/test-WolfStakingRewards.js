const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressRaKIQmg = accounts[2]
		const addressVdKRT2q = "0x0000000000000000000000000000000000000001"
		const addressiy8txhm = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardsRU3EU19 = await WolfStakingRewards.new(addressRaKIQmg, addressVdKRT2q, addressiy8txhm, {from: accounts[0]});
		const uintxHdcXqw = BigInt("1784")
		const uint8Grf7c = BigInt("1637")
		const uintf1rVFTd = BigInt("648")
		const uint256Nlyf3lM = await WolfStakingRewardsRU3EU19.lastTimeRewardApplicable.call(uintxHdcXqw, {from: accounts[3]});
		await WolfStakingRewardsRU3EU19.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256z7HLdsz = await WolfStakingRewardsRU3EU19.getRewardForDuration.call(uint8Grf7c, {from: "0x0000000000000000000000000000000000000001"});
		const uintkXnocO2 = await WolfStakingRewardsRU3EU19.getReward.call(uintf1rVFTd, {from: accounts[3]});

		assert.equal(uint256Nlyf3lM, BigInt("0"))
		await expect(WolfStakingRewardsRU3EU19.onlyRewardsDistribution.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressMmRr8Cl = accounts[3]
		const addressdtVWRaC = "0x0000000000000000000000000000000000000001"
		const addressWIPMOO = accounts[2]
		const WolfStakingRewardsEB3ZVjd = await WolfStakingRewards.new(addressMmRr8Cl, addressdtVWRaC, addressWIPMOO, {from: accounts[1]});
		const uintYlH7CGV = BigInt("1531")
		const uinth9SZcNd = BigInt("1491")
		const uintJXb2zWB = BigInt("1700")
		const uintQY2pdBy = BigInt("197")
		const addressbARoBWo = accounts[0]
		const uintkAxrKFh = await WolfStakingRewardsEB3ZVjd.getReward.call(uintYlH7CGV, {from: accounts[5]});
		const uint256n6Eo11x = await WolfStakingRewardsEB3ZVjd.withdraw.call(uintJXb2zWB, uinth9SZcNd, {from: accounts[2]});
		const stringyg0HE22 = await WolfStakingRewardsEB3ZVjd.symbol.call({from: accounts[3]});
		const uint256D4ilpkf = await WolfStakingRewardsEB3ZVjd.earned.call(addressbARoBWo, uintQY2pdBy, {from: accounts[4]});

		await expect(WolfStakingRewardsEB3ZVjd.withdraw.call(uintJXb2zWB, uinth9SZcNd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringqY9P0zM = "XYUnFIdk58rPtSyEwJi4r9"
		const stringLi92fm = "WgjKX"
		const uinttiBL4SJ = BigInt("87")
		const WolfStakingRewards9wPtjS = await WolfStakingRewards.new(stringqY9P0zM, stringLi92fm, uinttiBL4SJ, {from: accounts[4]});
		const uintR5RDLz = BigInt("1664")
		const uintyGzpt7L = BigInt("1905")
		const addressSVtNM59 = accounts[1]
		const uint256sisCpiB = await WolfStakingRewards9wPtjS.rewardPerToken.call(uintR5RDLz, {from: accounts[4]});
		const stringy3OZawO = await WolfStakingRewards9wPtjS.symbol.call({from: accounts[2]});
		const stringIHgEuo = await WolfStakingRewards9wPtjS.name.call({from: accounts[0]});
		const addresscDe4OsZ = await WolfStakingRewards9wPtjS.updateReward.call(addressSVtNM59, uintyGzpt7L, {from: accounts[4]});
		await WolfStakingRewards9wPtjS.nonReentrant.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressm08UpHU = accounts[2]
		const addressvxZC73S = accounts[0]
		const addressXcuQtUK = accounts[3]
		const WolfStakingRewardszoSvacd = await WolfStakingRewards.new(addressm08UpHU, addressvxZC73S, addressXcuQtUK, {from: "0x0000000000000000000000000000000000000001"});
		const uintbKBccE6 = BigInt("1886")
		const uintPge5bBT = BigInt("43")
		const uintezl55rT = BigInt("326")
		const uint256wdATSyL = await WolfStakingRewardszoSvacd.totalSupplyPerPool.call(uintbKBccE6, {from: accounts[1]});
		const uint256n0SnnXS = await WolfStakingRewardszoSvacd.withdraw.call(uintezl55rT, uintPge5bBT, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringL7sZdx = "yFt7KwrI1LQ7xs53vih6GcbELlQupoYSpGuKc40olz0IPPRB3eiiEqv3kGbbF9sTR8MAxEl8fjPY9fz"
		const stringOjbnl3Q = "QgfMQ5gtZ2PkEIVi98HoU5PUvTQCQJsjFoDyAyAB012GcU2"
		const uintbFVe0vU = BigInt("254")
		const WolfStakingRewardsKYKa55 = await WolfStakingRewards.new(stringL7sZdx, stringOjbnl3Q, uintbFVe0vU, {from: accounts[0]});
		const uintAFqjZ7O = BigInt("1414")
		const uintxf1BG5U = BigInt("472")
		const uintUNGKUYz = BigInt("484")
		const uint256vhAyueU = await WolfStakingRewardsKYKa55.totalSupplyPerPool.call(uintAFqjZ7O, {from: accounts[1]});
		const uint256QvNjyjo = await WolfStakingRewardsKYKa55.stake.call(uintUNGKUYz, uintxf1BG5U, {from: accounts[1]});
		await WolfStakingRewardsKYKa55.onlyRewardsDistribution.call({from: accounts[2]});
		const stringhHorY3e = await WolfStakingRewardsKYKa55.symbol.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresslyMUYx6 = accounts[3]
		const addressafhmjgP = accounts[2]
		const addresspXjG7q2 = accounts[4]
		const WolfStakingRewardsp81D01 = await WolfStakingRewards.new(addresslyMUYx6, addressafhmjgP, addresspXjG7q2, {from: accounts[0]});
		const uintgzVBeBJ = BigInt("66")
		const uintmPGBLzu = BigInt("925")
		const uinto2899Qw = BigInt("1244")
		const addressA18tjSj = accounts[1]
		const uintKcXiUpq = BigInt("962")
		const uintRIIGh9G = BigInt("1309")
		const uintlXdB9gu = BigInt("1721")
		const uintApy8upk = BigInt("817")
		const uintj6UPUee = await WolfStakingRewardsp81D01.getReward.call(uintgzVBeBJ, {from: accounts[0]});
		const uint256WSasMqr = await WolfStakingRewardsp81D01.totalSupplyPerPool.call(uintmPGBLzu, {from: accounts[5]});
		const uint256Be320h = await WolfStakingRewardsp81D01.earned.call(addressA18tjSj, uinto2899Qw, {from: accounts[2]});
		const uint256qLYFdRL = await WolfStakingRewardsp81D01.withdraw.call(uintRIIGh9G, uintKcXiUpq, {from: accounts[0]});
		const uint256x6wUP4i = await WolfStakingRewardsp81D01.withdraw.call(uintApy8upk, uintlXdB9gu, {from: accounts[0]});

		assert.equal(uint256Be320h, BigInt("0"))
		assert.equal(uint256WSasMqr, BigInt("0"))
		await expect(WolfStakingRewardsp81D01.withdraw.call(uintRIIGh9G, uintKcXiUpq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringyPfy1YS = "knkvubqyw9kPFoV0yUn2GuyFCNmkXlsrlAEkbkaP7AN2uTezgR46JObMOzgTzOqdtbfr6TSQNWF"
		const stringNVEueh1 = "O3NcWzuznfdzy8buHhArOA8PUrs3zSbz8bFcmX8AKMy415qW6rzXFEQ28Rn3voiLQHNR93Pdev"
		const uintEQyW7R2 = BigInt("86")
		const WolfStakingRewardsLN1Q3oa = await WolfStakingRewards.new(stringyPfy1YS, stringNVEueh1, uintEQyW7R2, {from: accounts[0]});
		const uintw5zMJG6 = BigInt("1491")
		const uintHtWo90q = BigInt("340")
		const uintm8beAE = BigInt("72")
		const addressKtfsHvF = accounts[3]
		const stringTRGyEs7 = await WolfStakingRewardsLN1Q3oa.symbol.call({from: accounts[0]});
		const uint256Mv0wQG0 = await WolfStakingRewardsLN1Q3oa.withdrawRemainingBalance.call(uintHtWo90q, uintw5zMJG6, {from: accounts[0]});
		const uint256kROE6p = await WolfStakingRewardsLN1Q3oa.earned.call(addressKtfsHvF, uintm8beAE, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringM4KZoH3 = "mdlJp8Rugw8t6Yg8qYFkRAbraso9JiuHed7MLprgO8uJH5SFPcFR4T3nfr6IRKcxIugmVmFotwM4RCjFf4GtFsGNUceNBSenCp"
		const stringm6jbOiD = "P5wWemJPetNnv57uGoj8MjoYa7P2z6GTCw5WFCjuB9Iq3zAV08nPpOkn8sPd5qqYhEgO"
		const uintGNHFp5F = BigInt("29")
		const WolfStakingRewardsyCv61dd = await WolfStakingRewards.new(stringM4KZoH3, stringm6jbOiD, uintGNHFp5F, {from: accounts[4]});
		const uintiTopXqN = BigInt("1013")
		const uint1Hc27O = BigInt("851")
		const uint256sUQQ9km = await WolfStakingRewardsyCv61dd.exit.call(uintiTopXqN, {from: accounts[1]});
		const uint256gZbzw17 = await WolfStakingRewardsyCv61dd.exit.call(uint1Hc27O, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresscPq1mwx = accounts[3]
		const addressCC8FxAw = "0x0000000000000000000000000000000000000001"
		const addressJTjHBA4 = accounts[2]
		const WolfStakingRewardsEB3ZVjd = await WolfStakingRewards.new(addresscPq1mwx, addressCC8FxAw, addressJTjHBA4, {from: accounts[1]});
		const uintJbUNqkR = BigInt("1531")
		const uintro4a1Fy = BigInt("2024")
		const addressFLojo5h = accounts[3]
		const uintJSA55SQ = BigInt("1491")
		const uintDJmuPxE = BigInt("1700")
		const uintbiwtcxQ = BigInt("197")
		const addressxptnWg1 = accounts[2]
		const uintkAxrKFh = await WolfStakingRewardsEB3ZVjd.getReward.call(uintJbUNqkR, {from: accounts[5]});
		const uint256r7JWMck = await WolfStakingRewardsEB3ZVjd.balanceOfPerPool.call(addressFLojo5h, uintro4a1Fy, {from: accounts[0]});
		await WolfStakingRewardsEB3ZVjd.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256n6Eo11x = await WolfStakingRewardsEB3ZVjd.withdraw.call(uintDJmuPxE, uintJSA55SQ, {from: accounts[2]});
		const stringyg0HE22 = await WolfStakingRewardsEB3ZVjd.symbol.call({from: accounts[3]});
		const uint256D4ilpkf = await WolfStakingRewardsEB3ZVjd.earned.call(addressxptnWg1, uintbiwtcxQ, {from: accounts[4]});

		assert.equal(uint256r7JWMck, BigInt("0"))
		await expect(WolfStakingRewardsEB3ZVjd.onlyRewardsDistribution.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressejJJOOh = accounts[3]
		const addressMmXqyd = "0x0000000000000000000000000000000000000001"
		const addresshcKbeHD = accounts[2]
		const WolfStakingRewardsEB3ZVjd = await WolfStakingRewards.new(addressejJJOOh, addressMmXqyd, addresshcKbeHD, {from: accounts[1]});
		const uintYhycHmH = BigInt("1531")
		const uintYunt1gz = BigInt("1412")
		const uintElThmNL = BigInt("1174")
		const uintj4XcNdu = BigInt("2024")
		const addresss2XzY3w = accounts[3]
		const uintbqK3pvf = BigInt("1491")
		const uintrLZ7T4N = BigInt("1700")
		const uintk0Bw0Uy = BigInt("197")
		const addresspXwR6d7 = accounts[3]
		const uintkAxrKFh = await WolfStakingRewardsEB3ZVjd.getReward.call(uintYhycHmH, {from: accounts[5]});
		const uint256D0AwoLS = await WolfStakingRewardsEB3ZVjd.withdrawRemainingBalance.call(uintElThmNL, uintYunt1gz, {from: accounts[4]});
		const uint256r7JWMck = await WolfStakingRewardsEB3ZVjd.balanceOfPerPool.call(addresss2XzY3w, uintj4XcNdu, {from: accounts[0]});
		await WolfStakingRewardsEB3ZVjd.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256n6Eo11x = await WolfStakingRewardsEB3ZVjd.withdraw.call(uintrLZ7T4N, uintbqK3pvf, {from: accounts[2]});
		const stringyg0HE22 = await WolfStakingRewardsEB3ZVjd.symbol.call({from: accounts[3]});
		const uint256D4ilpkf = await WolfStakingRewardsEB3ZVjd.earned.call(addresspXwR6d7, uintk0Bw0Uy, {from: accounts[4]});

		await expect(WolfStakingRewardsEB3ZVjd.withdrawRemainingBalance.call(uintElThmNL, uintYunt1gz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringxkKzwqj = "6tfJOsFqqBb8tIfSl4fghgLdGW9HHxGl8myuyw5EXUXETgM8WTeMvBBybeTwO3yt4hbqFFdMrhzynxt"
		const stringQgJVvVZ = "tDk1WVkhowMNetym33pGGo3xG3E8RdUyi4h3"
		const uintK37q95q = BigInt("157")
		const WolfStakingRewardssyMu5Ay = await WolfStakingRewards.new(stringxkKzwqj, stringQgJVvVZ, uintK37q95q, {from: accounts[0]});
		const uintsALNbxQ = BigInt("223")
		const uintIyzrdh9 = BigInt("273")
		const uint8l66AKB8 = await WolfStakingRewardssyMu5Ay.decimals.call({from: accounts[0]});
		const uint256RREP6FG = await WolfStakingRewardssyMu5Ay.withdraw.call(uintIyzrdh9, uintsALNbxQ, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresswayR5Rt = accounts[3]
		const addressrjKqPWV = "0x0000000000000000000000000000000000000001"
		const addressjosjDwf = accounts[2]
		const WolfStakingRewardsEB3ZVjd = await WolfStakingRewards.new(addresswayR5Rt, addressrjKqPWV, addressjosjDwf, {from: accounts[1]});
		const uintDXI4JOy = BigInt("459")
		const uintUfhaTAl = BigInt("1531")
		const uintJSrmcV = BigInt("2024")
		const addressEI1I4Yw = accounts[3]
		const uint6MjIIG = BigInt("1409")
		const uintlMp8rq = BigInt("1491")
		const uintYLVPVCd = BigInt("1700")
		const uinttqxfe7T = BigInt("197")
		const addressOP8d8Mq = accounts[2]
		const uint256FiihsHp = await WolfStakingRewardsEB3ZVjd.exit.call(uintDXI4JOy, {from: accounts[4]});
		const uintkAxrKFh = await WolfStakingRewardsEB3ZVjd.getReward.call(uintUfhaTAl, {from: accounts[5]});
		const uint256r7JWMck = await WolfStakingRewardsEB3ZVjd.balanceOfPerPool.call(addressEI1I4Yw, uintJSrmcV, {from: accounts[0]});
		const uint256eLmZgtx = await WolfStakingRewardsEB3ZVjd.rewardPerToken.call(uint6MjIIG, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsEB3ZVjd.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256n6Eo11x = await WolfStakingRewardsEB3ZVjd.withdraw.call(uintYLVPVCd, uintlMp8rq, {from: accounts[2]});
		const stringyg0HE22 = await WolfStakingRewardsEB3ZVjd.symbol.call({from: accounts[3]});
		const uint256D4ilpkf = await WolfStakingRewardsEB3ZVjd.earned.call(addressOP8d8Mq, uinttqxfe7T, {from: accounts[4]});

		await expect(WolfStakingRewardsEB3ZVjd.exit.call(uintDXI4JOy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressEsJXUr1 = accounts[3]
		const addressbK1279l = "0x0000000000000000000000000000000000000001"
		const addressejuhLWV = accounts[2]
		const WolfStakingRewardsEB3ZVjd = await WolfStakingRewards.new(addressEsJXUr1, addressbK1279l, addressejuhLWV, {from: accounts[1]});
		const uintms6TvY = BigInt("1626")
		const uintWTEDv5Y = BigInt("147")
		const uintQU3gXRU = BigInt("1531")
		const uintMslCA8V = BigInt("1491")
		const uintP0JwHER = BigInt("1700")
		const uint256iDGthRZ = await WolfStakingRewardsEB3ZVjd.stake.call(uintWTEDv5Y, uintms6TvY, {from: accounts[2]});
		const uintkAxrKFh = await WolfStakingRewardsEB3ZVjd.getReward.call(uintQU3gXRU, {from: accounts[5]});
		const uint256n6Eo11x = await WolfStakingRewardsEB3ZVjd.withdraw.call(uintP0JwHER, uintMslCA8V, {from: accounts[2]});
		const stringyg0HE22 = await WolfStakingRewardsEB3ZVjd.symbol.call({from: accounts[3]});

		await expect(WolfStakingRewardsEB3ZVjd.stake.call(uintWTEDv5Y, uintms6TvY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const address7EZiQF = accounts[2]
		const addresspxShc9U = accounts[0]
		const addressbJt3Y2o = accounts[0]
		const WolfStakingRewardsLKbAaHy = await WolfStakingRewards.new(address7EZiQF, addresspxShc9U, addressbJt3Y2o, {from: accounts[2]});
		const uintD48ZbF = BigInt("257")
		const uintRiLPM6u = BigInt("1249")
		const uintFM1NMLT = await WolfStakingRewardsLKbAaHy.getReward.call(uintD48ZbF, {from: accounts[0]});
		const uint256RVIOqi = await WolfStakingRewardsLKbAaHy.getRewardForDuration.call(uintRiLPM6u, {from: accounts[0]});

		await expect(WolfStakingRewardsLKbAaHy.getRewardForDuration.call(uintRiLPM6u, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringxsEcGNR = "HOqOBgbWYi8glexdD7FiWSprDe81jcr4H0LXklY7ugTdLaQ2zMxOXeARjahrxQtTmONLFIMLrMJx6RVnqAEs2"
		const stringA4QLBeP = "ycUcuSXguEtumYVX6VwbJJuuvjcd4TCB6sSxvTsmwOU8is5xjNq59azJI7edFQ11sojRMeb2zDHEmnvpHn5nh"
		const uintV1AdTPF = BigInt("230")
		const WolfStakingRewardsNMid9vO = await WolfStakingRewards.new(stringxsEcGNR, stringA4QLBeP, uintV1AdTPF, {from: accounts[2]});
		const uintwRP6Ju2 = BigInt("2044")
		const uintY4fghi7 = BigInt("61")
		const uintR65fow8 = BigInt("481")
		const uinto5zb3ja = BigInt("1290")
		const addressasFjxms = accounts[0]
		const uintu0HYTij = BigInt("1618")
		const addressugwa71u = accounts[1]
		const uint256DU2V7H = await WolfStakingRewardsNMid9vO.exit.call(uintwRP6Ju2, {from: accounts[4]});
		const uint256JfjTDom = await WolfStakingRewardsNMid9vO.stake.call(uintR65fow8, uintY4fghi7, {from: "0x0000000000000000000000000000000000000001"});
		const uint8ZK316n = await WolfStakingRewardsNMid9vO.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const addressKVZ5CyC = await WolfStakingRewardsNMid9vO.updateReward.call(addressasFjxms, uinto5zb3ja, {from: accounts[3]});
		const uint256gItoLub = await WolfStakingRewardsNMid9vO.balanceOfPerPool.call(addressugwa71u, uintu0HYTij, {from: accounts[2]});
		await WolfStakingRewardsNMid9vO.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringOrCWrrB = "rRL4Yef0Lg9l56DqHSuHibTKHiM72BHOaVtQBOUIa4Fkth5lKfVOY5OITsI9ynQzLWLlmPU"
		const stringTDzJmag = "JenNxQfSAhFUDtY3V4lWzAzzSKIOWtR"
		const uintpQGdPsD = BigInt("90")
		const WolfStakingRewardspKlR1o8 = await WolfStakingRewards.new(stringOrCWrrB, stringTDzJmag, uintpQGdPsD, {from: accounts[1]});
		const uintgyW84Oo = BigInt("1284")
		const uinto1LGkpW = BigInt("1426")
		const uint256arrayun7ucOS = await WolfStakingRewardspKlR1o8.updateNotifyRewardAmount.call(uintgyW84Oo, {from: accounts[1]});
		const uint256cpyMIWe = await WolfStakingRewardspKlR1o8.getRewardForDuration.call(uinto1LGkpW, {from: accounts[3]});
		await WolfStakingRewardspKlR1o8.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringrYf3lPo = "JCirH6FlUHEhLeQV57NFg7HmQmCuEjTjOj2AKzmYpRd5PlVMtLkRVCnFJMWGzPcR14RS"
		const stringqKIWTPX = "ieZUCTmdinnjMC1MtXBfJw16dNwzG"
		const uintzGXGG2 = BigInt("184")
		const WolfStakingRewards4HIyv7 = await WolfStakingRewards.new(stringrYf3lPo, stringqKIWTPX, uintzGXGG2, {from: accounts[3]});
		const uinthXUqYwC = BigInt("218")
		const addresskMYhDwt = accounts[3]
		const uintgYUZEkB = BigInt("422")
		const uintsaQ3Dca = BigInt("951")
		const uint256As9HNHO = await WolfStakingRewards4HIyv7.balanceOfPerPool.call(addresskMYhDwt, uinthXUqYwC, {from: accounts[3]});
		const uint256arrayBstrBiw = await WolfStakingRewards4HIyv7.updateNotifyRewardAmount.call(uintgYUZEkB, {from: accounts[3]});
		await WolfStakingRewards4HIyv7.onlyOwner.call({from: accounts[1]});
		const stringEoDW7uy = await WolfStakingRewards4HIyv7.symbol.call({from: accounts[0]});
		const uint256ROwX6PY = await WolfStakingRewards4HIyv7.totalSupplyPerPool.call(uintsaQ3Dca, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringGyNHEcw = "kbJiJlTsD38wEntfdRl3ZlTVIaU9vp19RtDbRxW54nSggu6MT0gxihwUKtDbdPXrwXJA6a5uKHs2vid8ONfITWM"
		const stringop3rvju = "UsMAe838F"
		const uintLoeIRoE = BigInt("23")
		const WolfStakingRewardstub6tT = await WolfStakingRewards.new(stringGyNHEcw, stringop3rvju, uintLoeIRoE, {from: accounts[2]});
		const uint26Gumx = BigInt("909")
		const uintdC2txhV = BigInt("1238")
		const addressZqq1ChC = accounts[0]
		const uintBnT6BPt = BigInt("114")
		const uint256U1Md5ws = await WolfStakingRewardstub6tT.rewardPerToken.call(uint26Gumx, {from: accounts[2]});
		const uint256evzqLzC = await WolfStakingRewardstub6tT.balanceOfPerPool.call(addressZqq1ChC, uintdC2txhV, {from: accounts[0]});
		const stringOR6JWN = await WolfStakingRewardstub6tT.symbol.call({from: accounts[4]});
		const uint256Un9YwWQ = await WolfStakingRewardstub6tT.exit.call(uintBnT6BPt, {from: accounts[1]});
		const uint8x6wj2w = await WolfStakingRewardstub6tT.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const address31dP9N = accounts[3]
		const addressn5FhEwX = accounts[3]
		const addressrgroUb = accounts[2]
		const WolfStakingRewardsQs7zppS = await WolfStakingRewards.new(address31dP9N, addressn5FhEwX, addressrgroUb, {from: accounts[4]});
		const uintvvjYYEq = BigInt("1109")
		const uintS4gU6tm = BigInt("335")
		const uintCBKbmPC = BigInt("1946")
		const uintUXhxaUH = BigInt("825")
		const uintNgV8SOR = BigInt("1141")
		const addressodxecmj = accounts[4]
		const uinty3jRfK7 = BigInt("1550")
		const uintvRayay = BigInt("323")
		const uint256dffmFRd = await WolfStakingRewardsQs7zppS.withdrawRemainingBalance.call(uintS4gU6tm, uintvvjYYEq, {from: accounts[4]});
		const uint256wpnF4K7 = await WolfStakingRewardsQs7zppS.withdraw.call(uintUXhxaUH, uintCBKbmPC, {from: accounts[5]});
		const uint256JKzrRzd = await WolfStakingRewardsQs7zppS.earned.call(addressodxecmj, uintNgV8SOR, {from: accounts[4]});
		const uintAFunQ2i = await WolfStakingRewardsQs7zppS.getReward.call(uinty3jRfK7, {from: accounts[2]});
		const stringVWbHAPg = await WolfStakingRewardsQs7zppS.symbol.call({from: accounts[3]});
		const uintgfoseGY = await WolfStakingRewardsQs7zppS.getReward.call(uintvRayay, {from: accounts[3]});

		await expect(WolfStakingRewardsQs7zppS.withdrawRemainingBalance.call(uintS4gU6tm, uintvvjYYEq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringPTKrM4E = "b4D7c43p6kbCnY2lKDB1LmwLxsHKzB34mMrodBzH6jlYYiBpJte8X1L1BEwv6noKmspkQC9Zn4rYUsX57Kf2PtEMFsO"
		const string0x1LAU = "o4nbxjP7kCBOaDM3oBijmJD6ib4KiAdMAV5qzPtPBRYlWqlzP1uoczsMCdui5z"
		const uintABXVLm1 = BigInt("58")
		const WolfStakingRewardsKq1EDX4 = await WolfStakingRewards.new(stringPTKrM4E, string0x1LAU, uintABXVLm1, {from: accounts[4]});
		const uintQpSwEP3 = BigInt("661")
		const addressDiF1l0S = accounts[1]
		const uintf6OuAiv = BigInt("152")
		const uintpglLJLe = BigInt("1265")
		const addressL0hp4sn = accounts[0]
		await WolfStakingRewardsKq1EDX4.onlyRewardsDistribution.call({from: accounts[1]});
		const addressozwLS9r = await WolfStakingRewardsKq1EDX4.updateReward.call(addressDiF1l0S, uintQpSwEP3, {from: accounts[1]});
		const uint256wkoiHpE = await WolfStakingRewardsKq1EDX4.lastTimeRewardApplicable.call(uintf6OuAiv, {from: accounts[4]});
		const addressvtVaxZ = await WolfStakingRewardsKq1EDX4.updateReward.call(addressL0hp4sn, uintpglLJLe, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVy871ND = "V04H5EwHy7UeKqzN4zT3xwcCUITppdYN4G9"
		const stringLIKSULF = "ny"
		const uintpZMbcjn = BigInt("249")
		const WolfStakingRewardsULi6s1o = await WolfStakingRewards.new(stringVy871ND, stringLIKSULF, uintpZMbcjn, {from: accounts[1]});
		const uintjX230yn = BigInt("938")
		const uintkV93hoW = BigInt("1102")
		const addressFpCnru = "0x0000000000000000000000000000000000000001"
		const uintyMNq8wu = BigInt("1041")
		const uint2569CIqNK = await WolfStakingRewardsULi6s1o.lastTimeRewardApplicable.call(uintjX230yn, {from: accounts[1]});
		const uint256r1tmGQS = await WolfStakingRewardsULi6s1o.balanceOfPerPool.call(addressFpCnru, uintkV93hoW, {from: accounts[4]});
		const uint256CNEfPhP = await WolfStakingRewardsULi6s1o.exit.call(uintyMNq8wu, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzjYnNiZ = "jy3qr1kkV89GMRg4PVmlQXdY7pjjtHuRvTucg3fjqGEtkJz9W6kmk91p9QjoaTWb1bnMuJyXEPnYIJIHHvKo"
		const stringhTJEcP = "zC6ETu4EdVd8jcLKUUaPu11y0iMCQWTpehG"
		const uintwfDwyGT = BigInt("182")
		const WolfStakingRewardsQzRarj = await WolfStakingRewards.new(stringzjYnNiZ, stringhTJEcP, uintwfDwyGT, {from: accounts[4]});
		const uintUZyywgR = BigInt("1210")
		const address6ZV2BX = accounts[4]
		const uintBsJW0C = BigInt("1609")
		const uintbDnynM = BigInt("720")
		const uintR4PXwq = BigInt("191")
		const uintr3c9JqK = BigInt("998")
		const uint256Sdnnv9g = await WolfStakingRewardsQzRarj.earned.call(address6ZV2BX, uintUZyywgR, {from: accounts[0]});
		const stringgpHMht = await WolfStakingRewardsQzRarj.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256y9AWIpX = await WolfStakingRewardsQzRarj.stake.call(uintbDnynM, uintBsJW0C, {from: accounts[0]});
		const uint256PvdTwfh = await WolfStakingRewardsQzRarj.withdraw.call(uintr3c9JqK, uintR4PXwq, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjwVumf = "eahwXe3dzUHKrBWGUUDB7yvH1F2SFLUAI54u4ywgEMbfk"
		const stringki2zXi = "iG0NuEnFk5QGz1MxnzkTAuI1L2sxWaCkkqL4HNjWO2hYCCjYHlzhcel7ki2UPpLwQTCv4JAY5SDEYDJj8yg"
		const uinteE9Ii0M = BigInt("209")
		const WolfStakingRewardsNPLR1Vo = await WolfStakingRewards.new(stringjwVumf, stringki2zXi, uinteE9Ii0M, {from: accounts[4]});
		const uintMzwTFDa = BigInt("588")
		const uintluHmLcQ = BigInt("531")
		const addressDYq3UVW = accounts[0]
		const uintoSp2ljb = BigInt("1495")
		const uint256YVx6Rw1 = await WolfStakingRewardsNPLR1Vo.exit.call(uintMzwTFDa, {from: accounts[3]});
		const uint256WX5DGKh = await WolfStakingRewardsNPLR1Vo.earned.call(addressDYq3UVW, uintluHmLcQ, {from: accounts[0]});
		const uint256oMfNwRq = await WolfStakingRewardsNPLR1Vo.exit.call(uintoSp2ljb, {from: accounts[1]});
		const uint8ad64Str = await WolfStakingRewardsNPLR1Vo.decimals.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringEyKruld = "fgQLQbBePa8iLGszf4DFTOKfVWNsMZWhINiWamnOAl"
		const stringp53KBqK = "YZ3f84DgvLuzoEcckdPiizDA3OZmdjgMiHOVh5paVtRyNsp8AlamPuwgkjAH7WsqHq5"
		const uintzRW8IbO = BigInt("45")
		const WolfStakingRewardsPph9YR9 = await WolfStakingRewards.new(stringEyKruld, stringp53KBqK, uintzRW8IbO, {from: accounts[4]});
		const uintjjVu25H = BigInt("1001")
		const uintSB4vqWy = BigInt("172")
		const addressCoRfWy = accounts[3]
		const uint256HSzszAE = await WolfStakingRewardsPph9YR9.lastTimeRewardApplicable.call(uintjjVu25H, {from: accounts[2]});
		await WolfStakingRewardsPph9YR9.onlyOwner.call({from: accounts[3]});
		const uint256o3aW8lU = await WolfStakingRewardsPph9YR9.earned.call(addressCoRfWy, uintSB4vqWy, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressLUDs0uk = accounts[3]
		const addresshkoUggx = "0x0000000000000000000000000000000000000001"
		const addressHjOrLsL = accounts[2]
		const WolfStakingRewardsEB3ZVjd = await WolfStakingRewards.new(addressLUDs0uk, addresshkoUggx, addressHjOrLsL, {from: accounts[1]});
		const uintbEHS6t = BigInt("151")
		const uintns9jn01 = BigInt("1626")
		const uintxiO8zy9 = BigInt("170")
		const uintvz9EMsd = BigInt("1309")
		const uintcxVWCfJ = BigInt("1138")
		const uint256arrayIHdwSH = await WolfStakingRewardsEB3ZVjd.updateNotifyRewardAmount.call(uintbEHS6t, {from: accounts[4]});
		const uint256iDGthRZ = await WolfStakingRewardsEB3ZVjd.stake.call(uintxiO8zy9, uintns9jn01, {from: accounts[2]});
		const uint256f5nXtUs = await WolfStakingRewardsEB3ZVjd.withdrawRemainingBalance.call(uintcxVWCfJ, uintvz9EMsd, {from: accounts[3]});

		await expect(WolfStakingRewardsEB3ZVjd.updateNotifyRewardAmount.call(uintbEHS6t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringnA9bBfK = "Ua1R4isyzf2Jw1SHE4blctPH67o3BdZfRPzpcrGVIhc3aiAQJlemnN9UpdacRXcqaOJ1yZUb1H2R"
		const stringyGjngEj = "izt0sdGb8ix7Mlj1vqX57Cz0JLyLBn9OcSkhrei2wKKxGBTkCKrMz51xix1Q"
		const uintcK2SBt = BigInt("186")
		const WolfStakingRewardsPlGqO9 = await WolfStakingRewards.new(stringnA9bBfK, stringyGjngEj, uintcK2SBt, {from: accounts[1]});
		const uintfxsVr6 = BigInt("1691")
		const addressofJve6c = accounts[3]
		const uintN3fBAbp = BigInt("1206")
		const uintwRisOG = BigInt("2038")
		const uintPXkJqHz = BigInt("965")
		const addressA2UW3gN = accounts[4]
		const uinthOyceu8 = BigInt("760")
		const uint256bPLGvM = await WolfStakingRewardsPlGqO9.earned.call(addressofJve6c, uintfxsVr6, {from: accounts[4]});
		const uint256r0ltdxs = await WolfStakingRewardsPlGqO9.withdraw.call(uintwRisOG, uintN3fBAbp, {from: accounts[3]});
		await WolfStakingRewardsPlGqO9.onlyRewardsDistribution.call({from: accounts[3]});
		const addressMIBD05d = await WolfStakingRewardsPlGqO9.updateReward.call(addressA2UW3gN, uintPXkJqHz, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ocINUMo = await WolfStakingRewardsPlGqO9.lastTimeRewardApplicable.call(uinthOyceu8, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYpHSFZU = "GHjQUP3f2iDWFx6oe9nNQK47It2BwRxxzimekwGLaA1qbNYvWCRDsEq0pUSpsOReFeXl5IN621fBImmGSldK2Fz2"
		const stringb9Y2RxF = "Xu3ntKDzBctGp3K8FXR5bk1wSliBV5KNAh2yw0zYTkbvWGi"
		const uintThFfPR = BigInt("10")
		const WolfStakingRewardsgm7t8dP = await WolfStakingRewards.new(stringYpHSFZU, stringb9Y2RxF, uintThFfPR, {from: accounts[1]});
		const uintpwIo3Wn = BigInt("1884")
		const uintNHdsTCc = BigInt("1028")
		const addresspKQyeG = accounts[4]
		const uintH8BZVEF = BigInt("1085")
		const uintdnyLygl = BigInt("1365")
		const uintKZVWeL4 = BigInt("896")
		const uintjwCcpUV = BigInt("1178")
		const uint256mcUq3mu = await WolfStakingRewardsgm7t8dP.lastTimeRewardApplicable.call(uintpwIo3Wn, {from: accounts[2]});
		const address6ZmD7k = await WolfStakingRewardsgm7t8dP.updateReward.call(addresspKQyeG, uintNHdsTCc, {from: accounts[1]});
		const uint256arrayYfQHu2t = await WolfStakingRewardsgm7t8dP.updateNotifyRewardAmount.call(uintH8BZVEF, {from: accounts[2]});
		const uint256YvG1Vs = await WolfStakingRewardsgm7t8dP.withdrawRemainingBalance.call(uintKZVWeL4, uintdnyLygl, {from: accounts[3]});
		const uint256tNEVsem = await WolfStakingRewardsgm7t8dP.exit.call(uintjwCcpUV, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringdTW1z2A = "S4cR6BXRehnyW2s2c5aWJI0GajTOxd7vfNAsxaToBZXsCIIW4DW60HfdGjlqtB"
		const stringuxDGgYO = "zSe0e9eKBAnUVuuOxa7dIGOE4rIEjiQt15XeqWu8P2dT"
		const uintUpyGHGZ = BigInt("103")
		const WolfStakingRewards6LzvmS = await WolfStakingRewards.new(stringdTW1z2A, stringuxDGgYO, uintUpyGHGZ, {from: accounts[3]});
		const uintqmm6m2 = BigInt("515")
		const addresscxFuBe1 = accounts[0]
		const uinttuTuWq = BigInt("756")
		const uintxGJfhj = BigInt("272")
		const addressJ7BeGYs = accounts[2]
		const stringFUSBCa = await WolfStakingRewards6LzvmS.name.call({from: accounts[2]});
		const uint256PwDD4L2 = await WolfStakingRewards6LzvmS.earned.call(addresscxFuBe1, uintqmm6m2, {from: accounts[2]});
		const uint256Hs9dCDS = await WolfStakingRewards6LzvmS.getRewardForDuration.call(uinttuTuWq, {from: accounts[4]});
		const uint256K6JCmRw = await WolfStakingRewards6LzvmS.earned.call(addressJ7BeGYs, uintxGJfhj, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxbQcjSQ = "WzsOtgG489D9teFMQ9221BTKChPRowQ"
		const stringJIe0W2G = "32EvhnvB7kegI"
		const uintwLdMOet = BigInt("19")
		const WolfStakingRewardsTPbb8qr = await WolfStakingRewards.new(stringxbQcjSQ, stringJIe0W2G, uintwLdMOet, {from: accounts[2]});
		const uintVdG6OF = BigInt("865")
		const addressdIVcafw = accounts[4]
		const uintgrejdi0 = BigInt("215")
		const uinttYIUuDt = BigInt("1469")
		const addressCFuSfcF = accounts[0]
		const uint2564vJdU5 = await WolfStakingRewardsTPbb8qr.earned.call(addressdIVcafw, uintVdG6OF, {from: accounts[1]});
		const uint256a8iiPUW = await WolfStakingRewardsTPbb8qr.rewardPerToken.call(uintgrejdi0, {from: accounts[2]});
		const addressBUJiPA0 = await WolfStakingRewardsTPbb8qr.updateReward.call(addressCFuSfcF, uinttYIUuDt, {from: accounts[3]});
		await WolfStakingRewardsTPbb8qr.nonReentrant.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringucCHhRs = "fQxrEiZ5FY7qVoYG4IeBwD6r7lxojIXqwbnGt2cEvjhqWONGHZz8U31lgWehDLsjy1fGXAqBPjiENAd4JaaHmJCxzrly4mFQpfu"
		const stringxKU0Y3a = "wKmkbmzRZTOCv8DUEu1zhZ6YhvniCieriq63i7T6cAMadCGj47DimSJkGNuzPRrERj25fP7A8cYiO821FzcHoMco"
		const uintshxDoxH = BigInt("236")
		const WolfStakingRewardsgUncUFB = await WolfStakingRewards.new(stringucCHhRs, stringxKU0Y3a, uintshxDoxH, {from: accounts[2]});
		const uintrkBBHL = BigInt("1224")
		const addresskZKnPwi = accounts[0]
		const uintDTiynoy = BigInt("931")
		const uintvbWM4qc = BigInt("423")
		const uintj8yptux = BigInt("946")
		const uintsIL6KRs = BigInt("1613")
		const uintTS75fW6 = BigInt("628")
		const addresszovh6DY = accounts[1]
		const uint256kqdYkhS = await WolfStakingRewardsgUncUFB.balanceOfPerPool.call(addresskZKnPwi, uintrkBBHL, {from: accounts[1]});
		const uint256iDdrXT5 = await WolfStakingRewardsgUncUFB.withdrawRemainingBalance.call(uintvbWM4qc, uintDTiynoy, {from: accounts[2]});
		const uint256eJ6tDQ = await WolfStakingRewardsgUncUFB.withdraw.call(uintsIL6KRs, uintj8yptux, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsgUncUFB.onlyRewardsDistribution.call({from: accounts[3]});
		const addressdf0cJG5 = await WolfStakingRewardsgUncUFB.updateReward.call(addresszovh6DY, uintTS75fW6, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjzV2w01 = "bfzFZXR3lSqCmP"
		const stringcAYyLhZ = "qCOZZ58oYbTghCPhWZoMJdM8XewI4Xoobs4"
		const uintDoqoHBY = BigInt("132")
		const WolfStakingRewardsxdHGmi = await WolfStakingRewards.new(stringjzV2w01, stringcAYyLhZ, uintDoqoHBY, {from: accounts[5]});
		const uintRMZXYyT = BigInt("58")
		const uint256E6PnLGb = await WolfStakingRewardsxdHGmi.rewardPerToken.call(uintRMZXYyT, {from: accounts[4]});
		await WolfStakingRewardsxdHGmi.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsxdHGmi.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwgyhGC1 = "82LbqAPWlGKRoYVuUL23qNYAiDWuknRQy7lx9rP8vgiMwQuzDWMjPLNO19JrQpyv0Dy19ARsWaJ7jFkwwjRnVn9hA"
		const stringjy5agC = "jRUK8PHM1RNu5BoYohK970yWDBGtcKQxEaIAPGMnQqFMVGViLHv5UV62Dmp5W0OkV27C4jSz"
		const uintmxtwnlO = BigInt("74")
		const WolfStakingRewardsi2p0yCD = await WolfStakingRewards.new(stringwgyhGC1, stringjy5agC, uintmxtwnlO, {from: accounts[1]});
		const uint5YKsRa = BigInt("1930")
		const addressPbnamj = "0x0000000000000000000000000000000000000001"
		const uint256Zr6kB1M = await WolfStakingRewardsi2p0yCD.balanceOfPerPool.call(addressPbnamj, uint5YKsRa, {from: accounts[4]});
		await WolfStakingRewardsi2p0yCD.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringlYfPQ30 = "q9KVDJY9hdBcTlxnRR9jO7LeimA8xWWOtxYnVPMlOCktowJ3inoGabG3hscKtUOistKB"
		const stringTQOe52Q = "ezEk4e5mPPy"
		const uintGuFNO7d = BigInt("80")
		const WolfStakingRewardsIY1smQv = await WolfStakingRewards.new(stringlYfPQ30, stringTQOe52Q, uintGuFNO7d, {from: accounts[2]});
		const uintYCdcVez = BigInt("60")
		const uintgJ7B8CB = BigInt("1445")
		const uint8ePeMaIq = await WolfStakingRewardsIY1smQv.decimals.call({from: accounts[5]});
		const uint256EhzbRN = await WolfStakingRewardsIY1smQv.getRewardForDuration.call(uintYCdcVez, {from: accounts[3]});
		const stringqQVurUt = await WolfStakingRewardsIY1smQv.symbol.call({from: accounts[3]});
		const uint256unWCays = await WolfStakingRewardsIY1smQv.getRewardForDuration.call(uintgJ7B8CB, {from: accounts[4]});
		const stringSg3ofK1 = await WolfStakingRewardsIY1smQv.symbol.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnpxG3qV = "2nt9SYdILDDKrVEzNVCWGPmxz1KWbcNFA3Fq0c3GFDbQNuvU7qPQHYvFDi0RjoM8nTLFsWwrqiLBpgFunUVmz"
		const stringJHwlkXA = "i"
		const uintyOgPpjn = BigInt("248")
		const WolfStakingRewardsaokEKZ0 = await WolfStakingRewards.new(stringnpxG3qV, stringJHwlkXA, uintyOgPpjn, {from: accounts[4]});
		const uintG8Lcihf = BigInt("2023")
		const uintW7T8xAA = BigInt("45")
		const uintQzKlJnU = BigInt("1204")
		const addresstK3dHpH = accounts[4]
		const uintJ2PTXrm = BigInt("636")
		const uintQttGYYR = BigInt("575")
		const uint256KRky33D = await WolfStakingRewardsaokEKZ0.stake.call(uintW7T8xAA, uintG8Lcihf, {from: accounts[3]});
		const uint256mI5D3TU = await WolfStakingRewardsaokEKZ0.earned.call(addresstK3dHpH, uintQzKlJnU, {from: accounts[1]});
		const stringT5HPMWq = await WolfStakingRewardsaokEKZ0.symbol.call({from: accounts[4]});
		await WolfStakingRewardsaokEKZ0.onlyRewardsDistribution.call({from: accounts[5]});
		const stringaMukF6H = await WolfStakingRewardsaokEKZ0.symbol.call({from: accounts[1]});
		const uint256TxLNnkT = await WolfStakingRewardsaokEKZ0.withdraw.call(uintQttGYYR, uintJ2PTXrm, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxw6isze = "sDnHtX9sjYalEax8ofQ4K910gjfKNv6z4kw1PAL2iJkDoPEcPOdTBpjql"
		const stringSsMrquw = "aEVG9a7LS8ueO2kSpsU3oscyF9xajocoGG2UYEtVdxUsuYWvQyCucZpHUW7Q89Opdz613Qc76G3z9Bz0f17wo"
		const uintQDFkK2v = BigInt("171")
		const WolfStakingRewardsa699LIu = await WolfStakingRewards.new(stringxw6isze, stringSsMrquw, uintQDFkK2v, {from: accounts[3]});
		const uintO08JgE = BigInt("635")
		const uintYgF7Omg = BigInt("428")
		const addresszSyaFB1 = accounts[4]
		const uintB08ZLsW = BigInt("1394")
		const uint256arrayD6wyRDw = await WolfStakingRewardsa699LIu.updateNotifyRewardAmount.call(uintO08JgE, {from: accounts[0]});
		const uint8LOWa3Hd = await WolfStakingRewardsa699LIu.decimals.call({from: accounts[0]});
		await WolfStakingRewardsa699LIu.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256O2sND3Q = await WolfStakingRewardsa699LIu.balanceOfPerPool.call(addresszSyaFB1, uintYgF7Omg, {from: accounts[2]});
		const uint256FRjM4k = await WolfStakingRewardsa699LIu.rewardPerToken.call(uintB08ZLsW, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringarEyEKJ = "zwbEqlOvKgJRkeWRIND8CEvQLXeOi5DIVmAY"
		const stringesj0rgH = "JtVVMw1y2Gm8uWIwwEp2bRJXXTM2S4eUMhH"
		const uintiR3FFe5 = BigInt("204")
		const WolfStakingRewardsoJSWM5j = await WolfStakingRewards.new(stringarEyEKJ, stringesj0rgH, uintiR3FFe5, {from: accounts[5]});
		const uintIqkIRpY = BigInt("377")
		const uintuAnS43n = BigInt("810")
		const addresswaPAVHx = accounts[1]
		const uint256g55pk6Q = await WolfStakingRewardsoJSWM5j.exit.call(uintIqkIRpY, {from: accounts[0]});
		const uint864KJV3 = await WolfStakingRewardsoJSWM5j.decimals.call({from: accounts[3]});
		await WolfStakingRewardsoJSWM5j.nonReentrant.call({from: accounts[5]});
		const uint256Pf5XMZ = await WolfStakingRewardsoJSWM5j.balanceOfPerPool.call(addresswaPAVHx, uintuAnS43n, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFLivkIb = "jSTnjKVJnSDGQV1C1CV6HAydvll3rRJpuF2J7jnaS"
		const stringZPxTz7N = "JYruPlluNI4JljYKfTRLhScGnzOpMrJdpBq2KBxvLMvDtFOUjr0Crp1KWkaQ11mQPuDdjSQRV4XTOOiROYT9Uq4"
		const uintADstICp = BigInt("69")
		const WolfStakingRewardslbciTut = await WolfStakingRewards.new(stringFLivkIb, stringZPxTz7N, uintADstICp, {from: accounts[1]});
		const uintsKSgFw5 = BigInt("1749")
		const uintJ1ehSAk = BigInt("734")
		const uint256kl6i1Xa = await WolfStakingRewardslbciTut.totalSupplyPerPool.call(uintsKSgFw5, {from: accounts[2]});
		const uint256I0EiBCl = await WolfStakingRewardslbciTut.getRewardForDuration.call(uintJ1ehSAk, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringkyGDgWa = "vPL3VzR85sJl2Na1qU1czYK2m4RgzEohpVVzrj52f233rg65N4pWHBIOFy"
		const stringDrK7Wat = ""
		const uintyQO2Nr0 = BigInt("88")
		const WolfStakingRewardsbBCFmAi = await WolfStakingRewards.new(stringkyGDgWa, stringDrK7Wat, uintyQO2Nr0, {from: accounts[2]});
		const uinteIsPFX7 = BigInt("23")
		const uintix0Shy9 = BigInt("319")
		const uintqUV23v = BigInt("658")
		const uintbfY2oQ = BigInt("106")
		const uintCjiC7vZ = BigInt("397")
		const uint256pXVR1o4 = await WolfStakingRewardsbBCFmAi.stake.call(uintix0Shy9, uinteIsPFX7, {from: accounts[2]});
		const uint256d6sMe1J = await WolfStakingRewardsbBCFmAi.lastTimeRewardApplicable.call(uintqUV23v, {from: accounts[0]});
		const uint256SmbsP5 = await WolfStakingRewardsbBCFmAi.withdrawRemainingBalance.call(uintCjiC7vZ, uintbfY2oQ, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJG7ZoLK = "M7FdkUi1H5E3vYHoApy7vDTfDs7dre4SLdJFFtkVV5XedBNlLlsWSHqDMCae45voe8aABX82qtzL36DNY3d"
		const stringC1WyDbR = "L9tk1sFkHiEWitCurJNeQLh6KIniAR99LIbbsl7eiUa"
		const uintFf1LspA = BigInt("231")
		const WolfStakingRewardsxQ9j7Kk = await WolfStakingRewards.new(stringJG7ZoLK, stringC1WyDbR, uintFf1LspA, {from: "0x0000000000000000000000000000000000000001"});
		const uintyRYXj3J = BigInt("625")
		const uintDtIhuB9 = BigInt("809")
		const addressLTLwO9F = accounts[1]
		const uintBQPTA2O = BigInt("877")
		const uintUfsnaui = BigInt("1990")
		const uint256arraykDi4iB = await WolfStakingRewardsxQ9j7Kk.updateNotifyRewardAmount.call(uintyRYXj3J, {from: accounts[0]});
		const uint256pwYBWlh = await WolfStakingRewardsxQ9j7Kk.balanceOfPerPool.call(addressLTLwO9F, uintDtIhuB9, {from: accounts[1]});
		const uint256xeRngyj = await WolfStakingRewardsxQ9j7Kk.getRewardForDuration.call(uintBQPTA2O, {from: accounts[1]});
		const uint8DgANAB = await WolfStakingRewardsxQ9j7Kk.decimals.call({from: accounts[1]});
		const uint256CmteB9 = await WolfStakingRewardsxQ9j7Kk.lastTimeRewardApplicable.call(uintUfsnaui, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuGINAzW = "WRkHC0todF9RDbKFQlDMOuUu49QZo7LVwiYa"
		const stringXVHZ5pj = "zBAbsr4GXxt2uBc6tsyWVDXke0iloh1D7PzZBYnHjX"
		const uintQT1Lue = BigInt("234")
		const WolfStakingRewardsEAS3hk = await WolfStakingRewards.new(stringuGINAzW, stringXVHZ5pj, uintQT1Lue, {from: accounts[2]});
		const uintmZRJlT6 = BigInt("564")
		const uintWOdAzvo = BigInt("933")
		const uinthwEh2Dh = BigInt("1188")
		const uintiOMNqm7 = BigInt("1221")
		const uint256JLHWKX = await WolfStakingRewardsEAS3hk.getRewardForDuration.call(uintmZRJlT6, {from: accounts[5]});
		const uint256i9weMM6 = await WolfStakingRewardsEAS3hk.stake.call(uinthwEh2Dh, uintWOdAzvo, {from: accounts[2]});
		const uint256qPVhSu3 = await WolfStakingRewardsEAS3hk.lastTimeRewardApplicable.call(uintiOMNqm7, {from: accounts[4]});
		const uint8G90DAiv = await WolfStakingRewardsEAS3hk.decimals.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringe4DrENK = "YQG1m9qNjP6y7uP4JgjeuzKwjublxbyShYrKog"
		const stringOwDaNeA = "eP7Z8rbcTzvjkH4YU7mJNrhtrGLcY0MAKkLjb8eOkVlEjA0id3IB3Tvyh3DUoh5ahZdXiN6CkOkRTJpH8hbYH5pH"
		const uintBcFXuNr = BigInt("197")
		const WolfStakingRewardsgAohnnm = await WolfStakingRewards.new(stringe4DrENK, stringOwDaNeA, uintBcFXuNr, {from: accounts[4]});
		const uintncpz5Mt = BigInt("248")
		const uintRbxocrq = BigInt("1191")
		const uintdNLo6ub = BigInt("1704")
		const addressrCy6BgF = accounts[2]
		const uinttavITNa = BigInt("622")
		const uintqG21nAp = BigInt("702")
		const uintYNGXo6R = BigInt("986")
		const uintxgJcTWt = BigInt("269")
		const uintDMtH8Es = BigInt("915")
		const uintWynUlUL = BigInt("469")
		const uint256bJKIHkQ = await WolfStakingRewardsgAohnnm.stake.call(uintRbxocrq, uintncpz5Mt, {from: accounts[2]});
		const stringH5EsDbp = await WolfStakingRewardsgAohnnm.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256EvNzQ0 = await WolfStakingRewardsgAohnnm.balanceOfPerPool.call(addressrCy6BgF, uintdNLo6ub, {from: accounts[0]});
		const uint256yFNuHRq = await WolfStakingRewardsgAohnnm.withdraw.call(uintqG21nAp, uinttavITNa, {from: accounts[3]});
		const uint256A7vyLJO = await WolfStakingRewardsgAohnnm.stake.call(uintxgJcTWt, uintYNGXo6R, {from: accounts[0]});
		const uint256lZS9S84 = await WolfStakingRewardsgAohnnm.withdrawRemainingBalance.call(uintWynUlUL, uintDMtH8Es, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresslzB7Eqg = accounts[0]
		const addressX2gHy0E = accounts[0]
		const addressqCovmdM = accounts[0]
		const WolfStakingRewardsumS7QXJ = await WolfStakingRewards.new(addresslzB7Eqg, addressX2gHy0E, addressqCovmdM, {from: accounts[0]});
		const uintreQuyY = BigInt("7")
		const uintROhGYP = BigInt("1382")
		const uintoLADT1r = BigInt("883")
		const addressfmw2tVm = accounts[1]
		const uintjcn0vr = BigInt("1216")
		const uint34WkHS = BigInt("305")
		const uint256aXNf9O = await WolfStakingRewardsumS7QXJ.withdraw.call(uintROhGYP, uintreQuyY, {from: accounts[4]});
		const uint256ad2aHjH = await WolfStakingRewardsumS7QXJ.balanceOfPerPool.call(addressfmw2tVm, uintoLADT1r, {from: accounts[3]});
		const uint256FbUZ31B = await WolfStakingRewardsumS7QXJ.exit.call(uintjcn0vr, {from: accounts[3]});
		const uint256cHYRWcF = await WolfStakingRewardsumS7QXJ.rewardPerToken.call(uint34WkHS, {from: accounts[2]});
		const stringVN8PT8 = await WolfStakingRewardsumS7QXJ.symbol.call({from: accounts[3]});

		await expect(WolfStakingRewardsumS7QXJ.withdraw.call(uintROhGYP, uintreQuyY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringEFGR2MC = "Th38jLS1t74FqlYtQqzV9tdyDQvETBO9"
		const stringDzERamI = "JrjvsE8IcrSfwH"
		const uintVDTk5tV = BigInt("253")
		const WolfStakingRewardsWYV7Mg = await WolfStakingRewards.new(stringEFGR2MC, stringDzERamI, uintVDTk5tV, {from: accounts[0]});
		const uintYohQSOn = BigInt("1791")
		const uint8IsL6qIH = await WolfStakingRewardsWYV7Mg.decimals.call({from: accounts[3]});
		const uint256UnFrNr3 = await WolfStakingRewardsWYV7Mg.exit.call(uintYohQSOn, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZCFjhlx = "bKPIGSCAg8InUe5NHqMpGBiJIQMgYRjCYwlxpwXhXZufoZEkKQV1IBGrLuWG4FweXGAuv8EXtPipbIPaNI5PibqAiua2IWGkGg"
		const stringPBD9EP8 = "fLqBnhCEz1reP4Yqdm1576vnE5grATTVuBFfAw9quRokCUwhoZzqzDKBBRG4Ln46cyMRglyM2xOhwCPIefWQP8D6XeOdk6nkHYz"
		const uintAFQI4pT = BigInt("35")
		const WolfStakingRewardshtr62T5 = await WolfStakingRewards.new(stringZCFjhlx, stringPBD9EP8, uintAFQI4pT, {from: accounts[0]});
		const uintxJH6uI3 = BigInt("1151")
		const uintko6uDCf = BigInt("217")
		const uintSzEsFad = BigInt("1246")
		const addressyZ6C3Ur = accounts[5]
		const uintI25w4gB = BigInt("822")
		await WolfStakingRewardshtr62T5.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256f04zkLX = await WolfStakingRewardshtr62T5.withdraw.call(uintko6uDCf, uintxJH6uI3, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Da5oea = await WolfStakingRewardshtr62T5.earned.call(addressyZ6C3Ur, uintSzEsFad, {from: accounts[1]});
		const uint256iPTPNC4 = await WolfStakingRewardshtr62T5.lastTimeRewardApplicable.call(uintI25w4gB, {from: accounts[4]});
		const uint8v4IfvWX = await WolfStakingRewardshtr62T5.decimals.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringv3ppAMX = "3B3UsZEVOsBdQFzKVhsKvoVuaatyLX0ffU9Yb0NFPVkz7jusp3m10jOxQCvYff95Tk8LJARNJmoDs4BWZzY"
		const stringUg0ovls = "iFp4CkOfFfYwqaqBkc4eAEH8WpXBxtM1v3EpO1TBFgb3sArBISznOd"
		const uintc43NDV9 = BigInt("220")
		const WolfStakingRewardsQxmZAY0 = await WolfStakingRewards.new(stringv3ppAMX, stringUg0ovls, uintc43NDV9, {from: accounts[4]});
		const uintGMKHUg = BigInt("147")
		const uintqEcMKb6 = BigInt("1513")
		const uintv00iNbn = BigInt("650")
		const uintnblFoO2 = BigInt("253")
		const uintVHHhVO4 = BigInt("853")
		const uint256io8lhZ7 = await WolfStakingRewardsQxmZAY0.exit.call(uintGMKHUg, {from: accounts[1]});
		const uint256OJmYM3R = await WolfStakingRewardsQxmZAY0.totalSupplyPerPool.call(uintqEcMKb6, {from: accounts[2]});
		const uint256dCMy8Pp = await WolfStakingRewardsQxmZAY0.getRewardForDuration.call(uintv00iNbn, {from: accounts[2]});
		const uint256Oe3MJMV = await WolfStakingRewardsQxmZAY0.withdraw.call(uintVHHhVO4, uintnblFoO2, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPvlt4M4 = "TluhapM574KkMlHYbc6gNKjPHyUUdEXJvIjpdkmy3f4H3"
		const stringN3LM81 = "NQYRyB0gt8vm6Ds"
		const uintbizfHdc = BigInt("44")
		const WolfStakingRewardsCIZ9yCd = await WolfStakingRewards.new(stringPvlt4M4, stringN3LM81, uintbizfHdc, {from: accounts[2]});
		const uintyaFyn7 = BigInt("369")
		const uintZiyvLdi = BigInt("542")
		const uintc0qbrbo = BigInt("1295")
		const uintx6YiSPK = BigInt("113")
		const uint256GINU1QH = await WolfStakingRewardsCIZ9yCd.stake.call(uintZiyvLdi, uintyaFyn7, {from: accounts[4]});
		const uint256K0e9Lch = await WolfStakingRewardsCIZ9yCd.withdraw.call(uintx6YiSPK, uintc0qbrbo, {from: accounts[4]});
		const string1j1liP = await WolfStakingRewardsCIZ9yCd.name.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringadKJTmf = "q4rpEbJmauqDGxjjzg"
		const stringFZHYdZu = "Kc2VciANuaqXHRFmgAsMqIlfSJksyE5S5Um"
		const uintAXFjngP = BigInt("134")
		const WolfStakingRewardsOOWEyF9 = await WolfStakingRewards.new(stringadKJTmf, stringFZHYdZu, uintAXFjngP, {from: accounts[4]});
		const uintvVxu4rN = BigInt("1006")
		const addressxMREpZN = accounts[2]
		const uintqu7FIh = BigInt("174")
		const uint256BXfcqVl = await WolfStakingRewardsOOWEyF9.balanceOfPerPool.call(addressxMREpZN, uintvVxu4rN, {from: accounts[1]});
		const uint256AgTMeqw = await WolfStakingRewardsOOWEyF9.getRewardForDuration.call(uintqu7FIh, {from: accounts[3]});
		const stringUAzVrnl = await WolfStakingRewardsOOWEyF9.name.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringCRJWrQV = "6ofj2hk04vQECw8Z5ppuoPqbdKksNZ2Fh6FXwr4UzaUum1WhY3P3BQsv3abnPc7H"
		const stringcYpxfr = "jnDwcjMRStOWHtleKnef"
		const uintn5mX74Q = BigInt("231")
		const WolfStakingRewardsdpQ9M6A = await WolfStakingRewards.new(stringCRJWrQV, stringcYpxfr, uintn5mX74Q, {from: accounts[0]});
		const uintvCtmDoT = BigInt("1648")
		const addressIoyXCir = accounts[0]
		const uintVCFFbNJ = BigInt("605")
		const addresseYBNcfj = accounts[0]
		const uintBDvB3DU = BigInt("322")
		const addresslBLoTzp = accounts[2]
		const addressyGf9FPs = await WolfStakingRewardsdpQ9M6A.updateReward.call(addressIoyXCir, uintvCtmDoT, {from: accounts[1]});
		const uint256KHPCPSt = await WolfStakingRewardsdpQ9M6A.balanceOfPerPool.call(addresseYBNcfj, uintVCFFbNJ, {from: accounts[0]});
		const uint256hyMuaul = await WolfStakingRewardsdpQ9M6A.balanceOfPerPool.call(addresslBLoTzp, uintBDvB3DU, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPoL0kcn = "IuKefVvYuqQr2i6XUUeJvhqPavjPMfdior5IgngDuWoEnLrwizUOi14OOA5GiEa376RvWLq7a3DjMpTuWAyv4vz"
		const stringdBWYIyY = "1e"
		const uintKOmMxDF = BigInt("182")
		const WolfStakingRewardsn2O0uRz = await WolfStakingRewards.new(stringPoL0kcn, stringdBWYIyY, uintKOmMxDF, {from: accounts[1]});
		const uintYYjXxRt = BigInt("381")
		const uintwHXhjhE = BigInt("1467")
		const uintryMsK7Q = BigInt("1188")
		const uint256sp0KRcr = await WolfStakingRewardsn2O0uRz.exit.call(uintYYjXxRt, {from: accounts[1]});
		const uint256VM7MfVM = await WolfStakingRewardsn2O0uRz.exit.call(uintwHXhjhE, {from: accounts[1]});
		const uint256H9fS75 = await WolfStakingRewardsn2O0uRz.getRewardForDuration.call(uintryMsK7Q, {from: accounts[1]});
	});
})