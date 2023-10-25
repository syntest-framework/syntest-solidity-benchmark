const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressbdgfuB = accounts[2]
		const addressHsUNmLG = accounts[4]
		const addressKf80Cgx = accounts[0]
		const WolfStakingRewardsQDpApOh = await WolfStakingRewards.new(addressbdgfuB, addressHsUNmLG, addressKf80Cgx, {from: accounts[1]});
		const uintNXadNI = BigInt("1908")
		const uintLZSJMb3 = BigInt("400")
		const uintjljpCLt = BigInt("254")
		const uinttM7XDyU = BigInt("273")
		const uintoN0iJpC = BigInt("1473")
		const uint256hRn2Tyo = await WolfStakingRewardsQDpApOh.stake.call(uintLZSJMb3, uintNXadNI, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsQDpApOh.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256GO9nZd2 = await WolfStakingRewardsQDpApOh.withdrawRemainingBalance.call(uinttM7XDyU, uintjljpCLt, {from: accounts[2]});
		await WolfStakingRewardsQDpApOh.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsQDpApOh.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256arraynHLVnTk = await WolfStakingRewardsQDpApOh.updateNotifyRewardAmount.call(uintoN0iJpC, {from: accounts[0]});

		await expect(WolfStakingRewardsQDpApOh.stake.call(uintLZSJMb3, uintNXadNI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringGDWvEXi = "4cjAx1eEIGq17bXpPPODMCV97DQUH6BDoxjxXO7KlOMue9UaseXjCul"
		const stringtGy8sfY = "AOs9mW1iouL7qeOzLy8mbHEGNtfmkqq7YFmTBergAQn0STH1bd"
		const uintw8Ik6Rm = BigInt("214")
		const WolfStakingRewardsCR6Uzay = await WolfStakingRewards.new(stringGDWvEXi, stringtGy8sfY, uintw8Ik6Rm, {from: accounts[4]});
		const uintAzN4Vop = BigInt("196")
		const uintQ5fsS7e = BigInt("437")
		const uints5n5wJ0 = BigInt("1587")
		await WolfStakingRewardsCR6Uzay.onlyRewardsDistribution.call({from: accounts[0]});
		await WolfStakingRewardsCR6Uzay.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256B9RxhWC = await WolfStakingRewardsCR6Uzay.stake.call(uintQ5fsS7e, uintAzN4Vop, {from: accounts[0]});
		const uint256IX3lQ9Q = await WolfStakingRewardsCR6Uzay.exit.call(uints5n5wJ0, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresshrwwc2s = "0x0000000000000000000000000000000000000001"
		const addressLRAnE1C = accounts[2]
		const addresszB9Lekn = accounts[4]
		const WolfStakingRewardsFCwD1JI = await WolfStakingRewards.new(addresshrwwc2s, addressLRAnE1C, addresszB9Lekn, {from: accounts[2]});
		const uintH0UlCYs = BigInt("1517")
		const uintqwqvty4 = BigInt("1873")
		const uintK62hbP = BigInt("98")
		const uintfExunmS = BigInt("673")
		const uintKgvUKHk = BigInt("1551")
		const uint256EGYMtMQ = await WolfStakingRewardsFCwD1JI.lastTimeRewardApplicable.call(uintH0UlCYs, {from: accounts[4]});
		const uint256jvE5myx = await WolfStakingRewardsFCwD1JI.rewardPerToken.call(uintqwqvty4, {from: accounts[2]});
		const uint256yEeboTc = await WolfStakingRewardsFCwD1JI.lastTimeRewardApplicable.call(uintK62hbP, {from: accounts[4]});
		const uintzFJRQ0x = await WolfStakingRewardsFCwD1JI.getReward.call(uintfExunmS, {from: accounts[3]});
		const uint256JcjM01 = await WolfStakingRewardsFCwD1JI.totalSupplyPerPool.call(uintKgvUKHk, {from: accounts[3]});

		assert.equal(uint256EGYMtMQ, BigInt("0"))
		assert.equal(uint256JcjM01, BigInt("0"))
		assert.equal(uint256jvE5myx, BigInt("0"))
		assert.equal(uint256yEeboTc, BigInt("0"))
	});

	it('test for WolfStakingRewards', async () => {
		const addressUorkanP = accounts[2]
		const addresshsFHRQQ = accounts[4]
		const addressMj00O2t = accounts[1]
		const WolfStakingRewardsetmHJUK = await WolfStakingRewards.new(addressUorkanP, addresshsFHRQQ, addressMj00O2t, {from: accounts[0]});
		const uinttSfXUba = BigInt("1051")
		const uintt6kWfzQ = BigInt("480")
		const uintzHfKv0V = BigInt("1042")
		const uintT86xCx = BigInt("1630")
		const uint256Bv2blwE = await WolfStakingRewardsetmHJUK.exit.call(uinttSfXUba, {from: accounts[3]});
		const uint256JG7lEkH = await WolfStakingRewardsetmHJUK.withdraw.call(uintzHfKv0V, uintt6kWfzQ, {from: accounts[2]});
		const uint256i1c36rC = await WolfStakingRewardsetmHJUK.lastTimeRewardApplicable.call(uintT86xCx, {from: accounts[0]});

		await expect(WolfStakingRewardsetmHJUK.exit.call(uinttSfXUba, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressPS1y4MU = accounts[0]
		const addresst5pTbND = accounts[2]
		const addressbKor3ao = accounts[5]
		const WolfStakingRewardsYyoSmQY = await WolfStakingRewards.new(addressPS1y4MU, addresst5pTbND, addressbKor3ao, {from: accounts[1]});
		const uinthPBgn74 = BigInt("508")
		const addresspjeKNPa = accounts[0]
		const uintHUfyMgs = BigInt("1678")
		const uintl7Eh1MA = BigInt("1113")
		const uinthwKDwof = BigInt("428")
		const uintozrUCLF = BigInt("20")
		const uintMXVQTvq = BigInt("276")
		const addresstrHqgkP = await WolfStakingRewardsYyoSmQY.updateReward.call(addresspjeKNPa, uinthPBgn74, {from: accounts[1]});
		const stringXltOm4w = await WolfStakingRewardsYyoSmQY.symbol.call({from: accounts[3]});
		const uint256QGX5kD = await WolfStakingRewardsYyoSmQY.withdraw.call(uintl7Eh1MA, uintHUfyMgs, {from: accounts[3]});
		const uint256GZ2bujB = await WolfStakingRewardsYyoSmQY.rewardPerToken.call(uinthwKDwof, {from: accounts[1]});
		const uint256t7n0JVl = await WolfStakingRewardsYyoSmQY.stake.call(uintMXVQTvq, uintozrUCLF, {from: accounts[2]});

		await expect(WolfStakingRewardsYyoSmQY.updateReward.call(addresspjeKNPa, uinthPBgn74, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressn57OOaD = accounts[2]
		const addressEr8bEMj = accounts[4]
		const address54aUlA = accounts[3]
		const WolfStakingRewardsdMiIy1 = await WolfStakingRewards.new(addressn57OOaD, addressEr8bEMj, address54aUlA, {from: accounts[0]});
		const uintfvxl1n = BigInt("222")
		const uintHBlrGB6 = BigInt("489")
		const uintYGYU8F1 = BigInt("299")
		const uintz8lJVMg = BigInt("918")
		const uintyEI8wdZ = BigInt("1611")
		const uintETLOJWF = BigInt("1995")
		const uint256g9SRdd9 = await WolfStakingRewardsdMiIy1.totalSupplyPerPool.call(uintfvxl1n, {from: accounts[2]});
		const uint256Id67X9m = await WolfStakingRewardsdMiIy1.rewardPerToken.call(uintHBlrGB6, {from: accounts[2]});
		const uint256WTGLxJl = await WolfStakingRewardsdMiIy1.stake.call(uintz8lJVMg, uintYGYU8F1, {from: accounts[0]});
		const uint2562YxqQK = await WolfStakingRewardsdMiIy1.stake.call(uintETLOJWF, uintyEI8wdZ, {from: accounts[0]});

		assert.equal(uint256Id67X9m, BigInt("0"))
		assert.equal(uint256g9SRdd9, BigInt("0"))
		await expect(WolfStakingRewardsdMiIy1.stake.call(uintz8lJVMg, uintYGYU8F1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresshEFy5Ia = accounts[2]
		const addresssGg3rBC = accounts[3]
		const addressaMI8zWD = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardsZtjfGrb = await WolfStakingRewards.new(addresshEFy5Ia, addresssGg3rBC, addressaMI8zWD, {from: accounts[0]});
		const uintxVFctTq = BigInt("1359")
		const uintp1498k = BigInt("1058")
		const uint256arraymxKaspW = await WolfStakingRewardsZtjfGrb.updateNotifyRewardAmount.call(uintxVFctTq, {from: accounts[5]});
		const uint8jfEhxe = await WolfStakingRewardsZtjfGrb.decimals.call({from: accounts[5]});
		const uint256UuwTXH = await WolfStakingRewardsZtjfGrb.getRewardForDuration.call(uintp1498k, {from: accounts[5]});
		await WolfStakingRewardsZtjfGrb.onlyOwner.call({from: accounts[4]});

		await expect(WolfStakingRewardsZtjfGrb.updateNotifyRewardAmount.call(uintxVFctTq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringJMwFvev = "QW1mwR38UDgH5PSTfY"
		const stringCcKgfUO = "2esI7uYZy1yT3F1etON"
		const uintWPCLRQa = BigInt("185")
		const WolfStakingRewardsOZKNeI = await WolfStakingRewards.new(stringJMwFvev, stringCcKgfUO, uintWPCLRQa, {from: accounts[2]});
		const uintC80eUEH = BigInt("757")
		const uintXNEsvg = BigInt("862")
		const uintWESQF6A = BigInt("1140")
		const uintwZ5zZaW = BigInt("1698")
		const uintvY6j6F2 = BigInt("1902")
		const uint256uFZpWJO = await WolfStakingRewardsOZKNeI.stake.call(uintXNEsvg, uintC80eUEH, {from: accounts[0]});
		const uint256nUyHL5K = await WolfStakingRewardsOZKNeI.lastTimeRewardApplicable.call(uintWESQF6A, {from: "0x0000000000000000000000000000000000000001"});
		const uinty0Gzfdj = await WolfStakingRewardsOZKNeI.getReward.call(uintwZ5zZaW, {from: accounts[0]});
		const stringvUyMeoO = await WolfStakingRewardsOZKNeI.name.call({from: accounts[4]});
		const uint256eHKCYRF = await WolfStakingRewardsOZKNeI.rewardPerToken.call(uintvY6j6F2, {from: accounts[2]});
		const stringkZ2TNx1 = await WolfStakingRewardsOZKNeI.name.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringsBpWRdF = "UzuUAxQt2h2u9TtAVFmIG4Y98Tv9nqiseSbydUf31PiDLLpLXMgvbjjuEhGAJuKF7urhjuxmK8sf"
		const stringgOa9jnZ = "yQM5f08P"
		const uintRXGbDaA = BigInt("211")
		const WolfStakingRewardsKfnyXkt = await WolfStakingRewards.new(stringsBpWRdF, stringgOa9jnZ, uintRXGbDaA, {from: accounts[0]});
		const uinty27KRBC = BigInt("943")
		const addressftJBQtP = accounts[0]
		const uintXYFNFj4 = BigInt("796")
		const uintK9g9RsO = BigInt("1219")
		const uintImCDcFY = BigInt("1288")
		const uint256uc6QjT4 = await WolfStakingRewardsKfnyXkt.balanceOfPerPool.call(addressftJBQtP, uinty27KRBC, {from: accounts[3]});
		const uint256cTRCplS = await WolfStakingRewardsKfnyXkt.withdraw.call(uintK9g9RsO, uintXYFNFj4, {from: accounts[0]});
		const uint256g1p483o = await WolfStakingRewardsKfnyXkt.totalSupplyPerPool.call(uintImCDcFY, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringRTXuBD = "wxbcp7AnKL8hyMP18bofN2ol6talwMcnGLWmqe29E8WVrVcbtjiGDaoTUFidCn7zrXD3rJo7nVWoxhF5"
		const stringitGHVja = "8U5WKLsJzO1Gc2PmebSRm1zsbCilQnx7KnAgnNtrqJc2IinYWjLI44S4LGR0WAsYPRLTE4otbg5H8sgIP6K"
		const uintv48z2uj = BigInt("46")
		const WolfStakingRewardsjnC1lYk = await WolfStakingRewards.new(stringRTXuBD, stringitGHVja, uintv48z2uj, {from: accounts[0]});
		const uintbdd5huQ = BigInt("534")
		const addressKROnjy = accounts[2]
		const uinth7dyhCS = BigInt("1617")
		const uintJmC64c8 = BigInt("1392")
		const uintI0sMoK9 = BigInt("344")
		const addressdoFFmiu = accounts[4]
		const uintuUMyoDe = BigInt("1808")
		const addressx53Zn4j = accounts[4]
		const uintZzdGjld = BigInt("1450")
		const uint256YyUWuk5 = await WolfStakingRewardsjnC1lYk.earned.call(addressKROnjy, uintbdd5huQ, {from: accounts[4]});
		const uint256wdOObaW = await WolfStakingRewardsjnC1lYk.stake.call(uintJmC64c8, uinth7dyhCS, {from: accounts[5]});
		const addressDtTCpKU = await WolfStakingRewardsjnC1lYk.updateReward.call(addressdoFFmiu, uintI0sMoK9, {from: accounts[5]});
		const addressJ062lqL = await WolfStakingRewardsjnC1lYk.updateReward.call(addressx53Zn4j, uintuUMyoDe, {from: "0x0000000000000000000000000000000000000001"});
		const uint256fUvOtwy = await WolfStakingRewardsjnC1lYk.rewardPerToken.call(uintZzdGjld, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const address1rQksY = "0x0000000000000000000000000000000000000001"
		const addressrTwiDSq = accounts[2]
		const addressiAWdSUH = accounts[4]
		const WolfStakingRewardsFCwD1JI = await WolfStakingRewards.new(address1rQksY, addressrTwiDSq, addressiAWdSUH, {from: accounts[2]});
		const uintoiCZMo7 = BigInt("1873")
		const uintJELfeve = BigInt("571")
		const uintVcRNZFm = BigInt("1743")
		const uintgBziIUh = BigInt("1702")
		const uintyWiuCSN = BigInt("673")
		const uintZPqhNN = BigInt("1551")
		const uint256jvE5myx = await WolfStakingRewardsFCwD1JI.rewardPerToken.call(uintoiCZMo7, {from: accounts[2]});
		const uint256bpVCymO = await WolfStakingRewardsFCwD1JI.getRewardForDuration.call(uintJELfeve, {from: accounts[4]});
		const uint256yEeboTc = await WolfStakingRewardsFCwD1JI.lastTimeRewardApplicable.call(uintVcRNZFm, {from: accounts[4]});
		const uint256r5osKj = await WolfStakingRewardsFCwD1JI.exit.call(uintgBziIUh, {from: "0x0000000000000000000000000000000000000001"});
		const uintzFJRQ0x = await WolfStakingRewardsFCwD1JI.getReward.call(uintyWiuCSN, {from: accounts[3]});
		const uint256JcjM01 = await WolfStakingRewardsFCwD1JI.totalSupplyPerPool.call(uintZPqhNN, {from: accounts[3]});

		assert.equal(uint256jvE5myx, BigInt("0"))
		await expect(WolfStakingRewardsFCwD1JI.getRewardForDuration.call(uintJELfeve, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const address8xR04V = accounts[2]
		const addressjOLr0ck = accounts[4]
		const addressvDxBI3B = accounts[3]
		const WolfStakingRewardsdMiIy1 = await WolfStakingRewards.new(address8xR04V, addressjOLr0ck, addressvDxBI3B, {from: accounts[0]});
		const uintIXMK1kC = BigInt("222")
		const uintRcEF8qq = BigInt("629")
		const uintid0O4Q = BigInt("1417")
		const uintfIrQNdB = BigInt("299")
		const uintkcjzNgL = BigInt("918")
		const uint256g9SRdd9 = await WolfStakingRewardsdMiIy1.totalSupplyPerPool.call(uintIXMK1kC, {from: accounts[2]});
		const uint256Z3MZfD2 = await WolfStakingRewardsdMiIy1.withdrawRemainingBalance.call(uintid0O4Q, uintRcEF8qq, {from: accounts[2]});
		const uint256WTGLxJl = await WolfStakingRewardsdMiIy1.stake.call(uintkcjzNgL, uintfIrQNdB, {from: accounts[0]});

		assert.equal(uint256g9SRdd9, BigInt("0"))
		await expect(WolfStakingRewardsdMiIy1.withdrawRemainingBalance.call(uintid0O4Q, uintRcEF8qq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringQJnOet = "V8dodyjlHo8hcg9uPrPpCDo5WSz83ytW4tdxd9WSUTkfzFm3sjUrQXhDUEiY9LOzKqH"
		const stringvVRYn6d = "RyMM4BUDPH5"
		const uintEbaTFKz = BigInt("137")
		const WolfStakingRewardsnI5eEs8 = await WolfStakingRewards.new(stringQJnOet, stringvVRYn6d, uintEbaTFKz, {from: "0x0000000000000000000000000000000000000001"});
		const uintPS9Kgkg = BigInt("1031")
		const uint256arrayyJ8kkTn = await WolfStakingRewardsnI5eEs8.updateNotifyRewardAmount.call(uintPS9Kgkg, {from: accounts[1]});
		await WolfStakingRewardsnI5eEs8.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressnOru0ms = "0x0000000000000000000000000000000000000001"
		const addressjsJ1zs4 = accounts[2]
		const addressrCR7sTP = accounts[4]
		const WolfStakingRewardsFCwD1JI = await WolfStakingRewards.new(addressnOru0ms, addressjsJ1zs4, addressrCR7sTP, {from: accounts[2]});
		const uintobSQHsy = BigInt("725")
		const uintHFoNF2v = BigInt("1551")
		const uintyFmsc6u = BigInt("1873")
		const uintAabkATo = BigInt("671")
		const uinto6GjdJ4 = BigInt("1551")
		const uint256pYqZc3h = await WolfStakingRewardsFCwD1JI.withdraw.call(uintHFoNF2v, uintobSQHsy, {from: accounts[0]});
		const uint256jvE5myx = await WolfStakingRewardsFCwD1JI.rewardPerToken.call(uintyFmsc6u, {from: accounts[2]});
		const uintzFJRQ0x = await WolfStakingRewardsFCwD1JI.getReward.call(uintAabkATo, {from: accounts[3]});
		const uint256JcjM01 = await WolfStakingRewardsFCwD1JI.totalSupplyPerPool.call(uinto6GjdJ4, {from: accounts[3]});

		await expect(WolfStakingRewardsFCwD1JI.withdraw.call(uintHFoNF2v, uintobSQHsy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressxSaketC = "0x0000000000000000000000000000000000000001"
		const addressVaG4KqG = accounts[2]
		const addresslo4Ygc5 = accounts[4]
		const WolfStakingRewardsFCwD1JI = await WolfStakingRewards.new(addressxSaketC, addressVaG4KqG, addresslo4Ygc5, {from: accounts[2]});
		const uintuZiiM5 = BigInt("634")
		const uintMRe7jOm = BigInt("1873")
		const uintFeftMPu = BigInt("105")
		const uintuWM6S0D = BigInt("1224")
		const uintBw0ZGkb = BigInt("1551")
		const uint256kXTuTW6 = await WolfStakingRewardsFCwD1JI.lastTimeRewardApplicable.call(uintuZiiM5, {from: accounts[0]});
		const uint256jvE5myx = await WolfStakingRewardsFCwD1JI.rewardPerToken.call(uintMRe7jOm, {from: accounts[2]});
		const uintzFJRQ0x = await WolfStakingRewardsFCwD1JI.getReward.call(uintFeftMPu, {from: accounts[3]});
		const uint256URwFSva = await WolfStakingRewardsFCwD1JI.rewardPerToken.call(uintuWM6S0D, {from: accounts[3]});
		const uint256JcjM01 = await WolfStakingRewardsFCwD1JI.totalSupplyPerPool.call(uintBw0ZGkb, {from: accounts[3]});

		assert.equal(uint256JcjM01, BigInt("0"))
		assert.equal(uint256URwFSva, BigInt("0"))
		assert.equal(uint256jvE5myx, BigInt("0"))
		assert.equal(uint256kXTuTW6, BigInt("0"))
	});

	it('test for WolfStakingRewards', async () => {
		const stringf8mJ9VX = "Iuetrnj2BdW"
		const stringbUSiYqt = "JxdLPO949NPfQs8LDvPFmNPn1KF4CTLSx8jRuQBeMi8XM2i7QgLIqyR0bn6VPLyAOPJp1SGMVkqqAEM4W4OTg34DNkryLFz"
		const uintlVpP6bK = BigInt("27")
		const WolfStakingRewardsYumAPGs = await WolfStakingRewards.new(stringf8mJ9VX, stringbUSiYqt, uintlVpP6bK, {from: accounts[5]});
		const uintv66G2g7 = BigInt("889")
		const addressMSyIQXS = accounts[3]
		const uintz3VoT0f = BigInt("236")
		const uintINOwfB7 = BigInt("6")
		const addressffn2JNS = accounts[5]
		const addressrAN3DC = await WolfStakingRewardsYumAPGs.updateReward.call(addressMSyIQXS, uintv66G2g7, {from: accounts[3]});
		const uintisCI6qk = await WolfStakingRewardsYumAPGs.getReward.call(uintz3VoT0f, {from: accounts[4]});
		await WolfStakingRewardsYumAPGs.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256zIExYYg = await WolfStakingRewardsYumAPGs.balanceOfPerPool.call(addressffn2JNS, uintINOwfB7, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressCHJ8JU = "0x0000000000000000000000000000000000000001"
		const addressvMBUjBk = accounts[2]
		const addressL7aq10F = accounts[4]
		const WolfStakingRewardsFCwD1JI = await WolfStakingRewards.new(addressCHJ8JU, addressvMBUjBk, addressL7aq10F, {from: accounts[2]});
		const uintC1uryKQ = BigInt("725")
		const uintI8ZMv5 = BigInt("1551")
		const uintCPm2ENe = BigInt("1987")
		const uintcuhJmkS = BigInt("1873")
		const uintrrGW5F1 = BigInt("1551")
		const uint256pYqZc3h = await WolfStakingRewardsFCwD1JI.withdraw.call(uintI8ZMv5, uintC1uryKQ, {from: accounts[0]});
		const uint256jGPGoWw = await WolfStakingRewardsFCwD1JI.totalSupplyPerPool.call(uintCPm2ENe, {from: accounts[2]});
		const uint256jvE5myx = await WolfStakingRewardsFCwD1JI.rewardPerToken.call(uintcuhJmkS, {from: accounts[2]});
		const uint256JcjM01 = await WolfStakingRewardsFCwD1JI.totalSupplyPerPool.call(uintrrGW5F1, {from: accounts[3]});

		await expect(WolfStakingRewardsFCwD1JI.withdraw.call(uintI8ZMv5, uintC1uryKQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressbrBGu93 = accounts[2]
		const addressTqGvVQY = accounts[4]
		const addressChAVdcJ = accounts[3]
		const WolfStakingRewardsdMiIy1 = await WolfStakingRewards.new(addressbrBGu93, addressTqGvVQY, addressChAVdcJ, {from: accounts[0]});
		const uintJrltf0 = BigInt("1522")
		const addresssTfJBH2 = accounts[3]
		const uintTiZfbGj = BigInt("221")
		const uint256oss8SV = await WolfStakingRewardsdMiIy1.balanceOfPerPool.call(addresssTfJBH2, uintJrltf0, {from: accounts[4]});
		const uint256g9SRdd9 = await WolfStakingRewardsdMiIy1.totalSupplyPerPool.call(uintTiZfbGj, {from: accounts[2]});
		const stringUWLdOtK = await WolfStakingRewardsdMiIy1.symbol.call({from: accounts[4]});

		assert.equal(uint256g9SRdd9, BigInt("0"))
		assert.equal(uint256oss8SV, BigInt("0"))
		await expect(WolfStakingRewardsdMiIy1.symbol.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringt5oLG9n = "9uuqLuX93b"
		const stringv12Xylo = "Gneb6QFwEhIBTz"
		const uintX9114V = BigInt("117")
		const WolfStakingRewardsVKdKQf = await WolfStakingRewards.new(stringt5oLG9n, stringv12Xylo, uintX9114V, {from: accounts[3]});
		const uintp2CPjvE = BigInt("2017")
		const uintKiV4kCA = BigInt("1425")
		const uintyVQWZH1 = BigInt("1625")
		const uintI37Ipzv = BigInt("1772")
		const uintfmJTbwv = BigInt("273")
		const uintJ4GpkHt = BigInt("1205")
		const uintUoJLtHM = BigInt("639")
		const uint256zyIJz48 = await WolfStakingRewardsVKdKQf.lastTimeRewardApplicable.call(uintp2CPjvE, {from: accounts[1]});
		const uint256iOUAESg = await WolfStakingRewardsVKdKQf.stake.call(uintyVQWZH1, uintKiV4kCA, {from: accounts[1]});
		const uint256Vfe6m7 = await WolfStakingRewardsVKdKQf.withdraw.call(uintfmJTbwv, uintI37Ipzv, {from: accounts[0]});
		const uint256UuCsBok = await WolfStakingRewardsVKdKQf.withdraw.call(uintUoJLtHM, uintJ4GpkHt, {from: accounts[3]});
		await WolfStakingRewardsVKdKQf.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressVVaRth8 = accounts[2]
		const addressDU3M4eN = accounts[4]
		const addresslLfqh7Q = accounts[3]
		const WolfStakingRewardsdMiIy1 = await WolfStakingRewards.new(addressVVaRth8, addressDU3M4eN, addresslLfqh7Q, {from: accounts[0]});
		const uintnPIYHtu = BigInt("209")
		const uintmLwinMb = BigInt("1702")
		const uintzRpLeDa = BigInt("28")
		const uintZjrHToD = BigInt("1426")
		const uintHDK28k4 = BigInt("1995")
		const uintabFYjmb = BigInt("273")
		const uintey5Z79U = BigInt("530")
		const uint256g9SRdd9 = await WolfStakingRewardsdMiIy1.totalSupplyPerPool.call(uintnPIYHtu, {from: accounts[2]});
		const uint256kV7A9e = await WolfStakingRewardsdMiIy1.withdrawRemainingBalance.call(uintzRpLeDa, uintmLwinMb, {from: accounts[0]});
		const uint256fkdKign = await WolfStakingRewardsdMiIy1.withdrawRemainingBalance.call(uintHDK28k4, uintZjrHToD, {from: "0x0000000000000000000000000000000000000001"});
		const stringnNU0UZR = await WolfStakingRewardsdMiIy1.symbol.call({from: accounts[2]});
		const uint256gtvuvfW = await WolfStakingRewardsdMiIy1.stake.call(uintey5Z79U, uintabFYjmb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256g9SRdd9, BigInt("0"))
		await expect(WolfStakingRewardsdMiIy1.withdrawRemainingBalance.call(uintzRpLeDa, uintmLwinMb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringwKoEXXx = "SbaAgwc5"
		const stringk8yppbm = "nflOgqdKwqU0Nweoix9obk6Ho8nxLIHQc4Laavw6fdeYpssqrH8cX5eCA1aUpFyAiranToIaYaAn3LcSqOynMZRRx"
		const uintE3sa8lf = BigInt("82")
		const WolfStakingRewardsE4FDK3B = await WolfStakingRewards.new(stringwKoEXXx, stringk8yppbm, uintE3sa8lf, {from: "0x0000000000000000000000000000000000000001"});
		const uintaDFDlFl = BigInt("542")
		const uintN9r10fS = BigInt("237")
		const uintDkIZueQ = BigInt("742")
		const uintbRDemtN = await WolfStakingRewardsE4FDK3B.getReward.call(uintaDFDlFl, {from: accounts[0]});
		await WolfStakingRewardsE4FDK3B.nonReentrant.call({from: accounts[0]});
		const uint256VYyX8vV = await WolfStakingRewardsE4FDK3B.withdraw.call(uintDkIZueQ, uintN9r10fS, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQ0mrGg0 = "tKC0CAuH8eMwOywXJ4KrgdNAdTPcAb7HM2kgvclUaVxtNnEeqkp3UshrWUgmb71g23lX1Gv"
		const stringPWUe2jp = "bodwhwOyiR6xJScjlNZvyv3aOb2cPiXXk6E3yAdrHd9jvOA7MjO5tY"
		const uintQ6OTL9 = BigInt("80")
		const WolfStakingRewardsNfkJFIR = await WolfStakingRewards.new(stringQ0mrGg0, stringPWUe2jp, uintQ6OTL9, {from: accounts[0]});
		const uintVItCBkw = BigInt("606")
		const addressH6NIlNm = accounts[1]
		const uintyjwWjAP = BigInt("1279")
		const uint256GqduGPX = await WolfStakingRewardsNfkJFIR.balanceOfPerPool.call(addressH6NIlNm, uintVItCBkw, {from: accounts[0]});
		const uint256RAFi0n2 = await WolfStakingRewardsNfkJFIR.rewardPerToken.call(uintyjwWjAP, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcxLmYRZ = "UG54YlLDAYy6Vsl5kri6e5OeeByMOLTaturCrsky91Xf0PL9OCKqXrCHyKvbpBoWvHDS0nQEHJ1Rjt1F3SXurkKtc8YqasPhli"
		const stringwX7CnKQ = "I3wQkzHmjEnO5mYoXO0PEMaKB"
		const uintX1wyNhN = BigInt("196")
		const WolfStakingRewardsA3AxLc = await WolfStakingRewards.new(stringcxLmYRZ, stringwX7CnKQ, uintX1wyNhN, {from: accounts[0]});
		const uintvhs7ncX = BigInt("913")
		const uintWmhdbMQ = BigInt("1029")
		const uintb6AUJrI = BigInt("1234")
		const addresszaf1y5s = accounts[0]
		const uint8k8BUOEt = await WolfStakingRewardsA3AxLc.decimals.call({from: accounts[0]});
		const uint256tHqQB0 = await WolfStakingRewardsA3AxLc.withdraw.call(uintWmhdbMQ, uintvhs7ncX, {from: accounts[4]});
		const addressmc9ydoE = await WolfStakingRewardsA3AxLc.updateReward.call(addresszaf1y5s, uintb6AUJrI, {from: accounts[3]});
		await WolfStakingRewardsA3AxLc.onlyOwner.call({from: accounts[1]});
		const stringSu9vMUY = await WolfStakingRewardsA3AxLc.symbol.call({from: accounts[5]});
		await WolfStakingRewardsA3AxLc.nonReentrant.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxXkGXln = "iVbz38IOFPTwNnzTlacqBca6pyespcp4LL23HvDJ0aVeyyaNQw4"
		const stringtmaXHzq = "iOw3CbqBtwbQ3A6UFECQVuRRXcf5HzhReBuH1zhtafW4ifg7sT2kc"
		const uintwpfmDZe = BigInt("20")
		const WolfStakingRewardsUZkaMEB = await WolfStakingRewards.new(stringxXkGXln, stringtmaXHzq, uintwpfmDZe, {from: accounts[0]});
		const uintAAgZYfu = BigInt("1544")
		const uintuFbdQ4 = BigInt("1408")
		const uintw4Nbvt1 = BigInt("1270")
		const uintt72T0D = BigInt("1288")
		const uint256MmUTD3q = await WolfStakingRewardsUZkaMEB.stake.call(uintuFbdQ4, uintAAgZYfu, {from: accounts[3]});
		const uint256AwrngEh = await WolfStakingRewardsUZkaMEB.getRewardForDuration.call(uintw4Nbvt1, {from: accounts[2]});
		const uintrCzdFzp = await WolfStakingRewardsUZkaMEB.getReward.call(uintt72T0D, {from: "0x0000000000000000000000000000000000000001"});
		const stringsisCJEE = await WolfStakingRewardsUZkaMEB.symbol.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPxsMTrI = "OfkMvV9oehYNAjoSY3km2kdXT4x9O3CbhWdmRi46m7gtQmEsZX2yMgZIfEmUeWroqTwT9yuAsbocx4MUPUvejgjRb"
		const stringfTAUtHJ = "DxyXdzQZBo9QFRb2pPdQyelEiSg2qfjhb5ScHIFhclF6LxhAWwexkl1S4nzxewOOms9nsznAzmnWWOYzoAIoVzbSboO"
		const uintY8Dbtmv = BigInt("31")
		const WolfStakingRewardsNDjhw3U = await WolfStakingRewards.new(stringPxsMTrI, stringfTAUtHJ, uintY8Dbtmv, {from: accounts[1]});
		const uintuI2MTPt = BigInt("1216")
		const uintOvWmIy = BigInt("1141")
		const uintI4ph8dO = BigInt("280")
		const uintESUIV3u = BigInt("1322")
		const addressWxbjEx2 = accounts[2]
		const uintol0FLCl = BigInt("1824")
		const addresspoj4x6X = accounts[3]
		const uintzErQSA = BigInt("1245")
		const addressLNXI3ce = accounts[5]
		const uint256arrayn5cxrs = await WolfStakingRewardsNDjhw3U.updateNotifyRewardAmount.call(uintuI2MTPt, {from: accounts[2]});
		const uint256V1jShW8 = await WolfStakingRewardsNDjhw3U.withdraw.call(uintI4ph8dO, uintOvWmIy, {from: accounts[5]});
		const addressfjuO5t = await WolfStakingRewardsNDjhw3U.updateReward.call(addressWxbjEx2, uintESUIV3u, {from: accounts[2]});
		const uint256wfuqgYZ = await WolfStakingRewardsNDjhw3U.earned.call(addresspoj4x6X, uintol0FLCl, {from: accounts[3]});
		const addresszJTKJDd = await WolfStakingRewardsNDjhw3U.updateReward.call(addressLNXI3ce, uintzErQSA, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringR1nDPt4 = "jJfXAXtMEpZ2NXrTIgLwjuefLHyIGWSsQ6VvVMYK308k3WH2Z708"
		const stringOw8kdk = "AYDRrAnrAVYcf6RLoDoI9I8CUn1UAeqp9xoYUS5okoTjfvOB3mHTbG2yGRgu9Llib8I2GyXQBp"
		const uintTgKo4jg = BigInt("235")
		const WolfStakingRewardsNh8TOHb = await WolfStakingRewards.new(stringR1nDPt4, stringOw8kdk, uintTgKo4jg, {from: accounts[3]});
		const uintUQZJjY0 = BigInt("23")
		const uintllGfAd = BigInt("629")
		const uintcFCazQE = BigInt("819")
		const uintOiRWOBY = BigInt("472")
		const uintsj6lr3l = BigInt("756")
		const uint256yPmu9Hr = await WolfStakingRewardsNh8TOHb.lastTimeRewardApplicable.call(uintUQZJjY0, {from: accounts[4]});
		const uint256b6hcX6i = await WolfStakingRewardsNh8TOHb.withdraw.call(uintcFCazQE, uintllGfAd, {from: accounts[2]});
		const uint256EAtkYka = await WolfStakingRewardsNh8TOHb.totalSupplyPerPool.call(uintOiRWOBY, {from: accounts[0]});
		const uint256arrayl7zyHuy = await WolfStakingRewardsNh8TOHb.updateNotifyRewardAmount.call(uintsj6lr3l, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcuWWx5 = "MjGDiRZUAhucq48QESYah1DjmXptr4Q7jbIdjh7bZmXIST0SLgOkyOMQY6FM1tAb8egX6wxbHzf3"
		const stringe6euDbc = "ImEv5PIhsU"
		const uintfx4YTv = BigInt("229")
		const WolfStakingRewardshcyZQR = await WolfStakingRewards.new(stringcuWWx5, stringe6euDbc, uintfx4YTv, {from: accounts[0]});
		const uintyeiMyO4 = BigInt("1904")
		const stringLSjlww1 = await WolfStakingRewardshcyZQR.symbol.call({from: accounts[5]});
		const uint256LZbjMhL = await WolfStakingRewardshcyZQR.lastTimeRewardApplicable.call(uintyeiMyO4, {from: accounts[3]});
		await WolfStakingRewardshcyZQR.nonReentrant.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringx4q3ejw = "disDkEkJTqHBqNWF55U4GiRxObzLE2T9DiRnOu94FgaIc1QOLJMtivhP2drLhR57XZuAT07PbfE"
		const stringdtrilfY = "v7ArzJjzsjStu3GB4DxAQe4i8LXRrHaLjXAKEJQazfDBwoxJR4dU5"
		const uintRlxZwpo = BigInt("91")
		const WolfStakingRewardseH1oUQY = await WolfStakingRewards.new(stringx4q3ejw, stringdtrilfY, uintRlxZwpo, {from: accounts[0]});
		const uintVNfxs3N = BigInt("1284")
		const addresssA6SN67 = accounts[0]
		const uintAsl8K57 = BigInt("341")
		const uinterui0Vi = BigInt("1172")
		const addressivnYtq = accounts[5]
		const uintKhSATHy = BigInt("989")
		const uint256ueqQE4z = await WolfStakingRewardseH1oUQY.balanceOfPerPool.call(addresssA6SN67, uintVNfxs3N, {from: accounts[3]});
		const uint256oVu7PkI = await WolfStakingRewardseH1oUQY.getRewardForDuration.call(uintAsl8K57, {from: accounts[3]});
		const uint256MdR9rPx = await WolfStakingRewardseH1oUQY.earned.call(addressivnYtq, uinterui0Vi, {from: accounts[1]});
		const uint256nnqRmQq = await WolfStakingRewardseH1oUQY.lastTimeRewardApplicable.call(uintKhSATHy, {from: accounts[3]});
		const uint8ZKedu73 = await WolfStakingRewardseH1oUQY.decimals.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringiW7NJlG = "bsajdVh632izTjYvBA7BmH"
		const stringEMwJddz = "epYPsdLcfI8agSWWg9FBEPsJffaZNygt5GTElOfr1Uh"
		const uintahXmvSY = BigInt("211")
		const WolfStakingRewardsC5t215j = await WolfStakingRewards.new(stringiW7NJlG, stringEMwJddz, uintahXmvSY, {from: accounts[1]});
		const uintR2HKK6 = BigInt("944")
		const uintvegn1V = BigInt("1700")
		const uintbOENHRb = BigInt("1618")
		const uintHwPYk5J = BigInt("1236")
		const uintoPM7ryl = BigInt("1883")
		const uintjfwwM5 = BigInt("1696")
		const uintI2A0qe = BigInt("1521")
		const uint256klNYwKR = await WolfStakingRewardsC5t215j.stake.call(uintvegn1V, uintR2HKK6, {from: accounts[0]});
		const uint256G6PARrM = await WolfStakingRewardsC5t215j.lastTimeRewardApplicable.call(uintbOENHRb, {from: accounts[3]});
		const uint256wELS2Gz = await WolfStakingRewardsC5t215j.withdrawRemainingBalance.call(uintoPM7ryl, uintHwPYk5J, {from: accounts[3]});
		const uint256qFeCh2F = await WolfStakingRewardsC5t215j.getRewardForDuration.call(uintjfwwM5, {from: accounts[2]});
		const uintpx53ppm = await WolfStakingRewardsC5t215j.getReward.call(uintI2A0qe, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressJ7MTcK = "0x0000000000000000000000000000000000000001"
		const addressorFDzlp = accounts[2]
		const addressbjXJzUz = accounts[1]
		const WolfStakingRewardsKohy30x = await WolfStakingRewards.new(addressJ7MTcK, addressorFDzlp, addressbjXJzUz, {from: "0x0000000000000000000000000000000000000001"});
		const uintwEaPL3t = BigInt("1576")
		const uintESFun0F = BigInt("1555")
		const uintitt1Gy = BigInt("1337")
		const uintbVN9D2 = BigInt("1328")
		const uintbR30MV7 = await WolfStakingRewardsKohy30x.getReward.call(uintwEaPL3t, {from: "0x0000000000000000000000000000000000000001"});
		const uinthCS6IsY = await WolfStakingRewardsKohy30x.getReward.call(uintESFun0F, {from: accounts[4]});
		const string3R2ys0 = await WolfStakingRewardsKohy30x.symbol.call({from: accounts[1]});
		const uint256Likjx35 = await WolfStakingRewardsKohy30x.withdrawRemainingBalance.call(uintbVN9D2, uintitt1Gy, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcYIOoC = "Ccsalqk0mHeRcgL6KRJfwQAkAXBl72U1BcXVDdGDO3Nz8qza7duzrlLslExRnkEgTY8OOVZQ0aLLLgLCxuZg5yLF"
		const stringUGMplYm = "PYwYJmOIDJXofsVe6u1YPhAEpWnAzw2rvlVULomrLWQSpikaKmRbmZavGlqE4jg9DbTcKYae5rEzmSVjXhpoSopKDIybJMacVeF"
		const uintOIUxim = BigInt("63")
		const WolfStakingRewardsXv5F93V = await WolfStakingRewards.new(stringcYIOoC, stringUGMplYm, uintOIUxim, {from: "0x0000000000000000000000000000000000000001"});
		const uintw5Nyjb6 = BigInt("1589")
		const uintfqqke9 = BigInt("174")
		const uintlNT4w2N = BigInt("589")
		const address6Lw9VM = accounts[3]
		const uint256rWcte2s = await WolfStakingRewardsXv5F93V.getRewardForDuration.call(uintw5Nyjb6, {from: accounts[3]});
		const uint256t8cebuv = await WolfStakingRewardsXv5F93V.totalSupplyPerPool.call(uintfqqke9, {from: accounts[0]});
		const uint256wGbleD3 = await WolfStakingRewardsXv5F93V.balanceOfPerPool.call(address6Lw9VM, uintlNT4w2N, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxCBsPIi = "XbDKJXJFAoKGTGRW48OJIM5lzWYq1WLYuW9annai"
		const string79U8QJ = "ARtBVKJPBz8wsPmbYPR1Ep"
		const uintPE3IqBu = BigInt("127")
		const WolfStakingRewardsYEGDkel = await WolfStakingRewards.new(stringxCBsPIi, string79U8QJ, uintPE3IqBu, {from: accounts[1]});
		const uintBitDdvd = BigInt("641")
		const addressECqvBQz = accounts[2]
		const uinthsGLKVE = BigInt("576")
		const uintE2E9t23 = BigInt("633")
		const uintmwC2l9F = BigInt("1253")
		const uint256eebhXuc = await WolfStakingRewardsYEGDkel.balanceOfPerPool.call(addressECqvBQz, uintBitDdvd, {from: accounts[1]});
		await WolfStakingRewardsYEGDkel.onlyOwner.call({from: accounts[1]});
		const uint256yNXsGXP = await WolfStakingRewardsYEGDkel.exit.call(uinthsGLKVE, {from: accounts[1]});
		const uint256bbwlR5C = await WolfStakingRewardsYEGDkel.lastTimeRewardApplicable.call(uintE2E9t23, {from: accounts[2]});
		const uint256hxwMMJT = await WolfStakingRewardsYEGDkel.lastTimeRewardApplicable.call(uintmwC2l9F, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfXwwOC5 = "HAOCJJA3f30rUxmNk93sv8o8k4oUnxIiG2R0gf6Atu1egE1Rh7V2UCCvkVlMef399oRU"
		const stringC5CnYdy = "IrbcOHq5kgQmbD3SlqvmJcycDw5RAjwUrxGCC8sHym16i4k2zius"
		const uintsh7Mp6 = BigInt("150")
		const WolfStakingRewardsM3Xby8q = await WolfStakingRewards.new(stringfXwwOC5, stringC5CnYdy, uintsh7Mp6, {from: accounts[2]});
		const uintnqNjpp9 = BigInt("131")
		const uintCp3yf2W = BigInt("1369")
		const uintWRm0Dpa = BigInt("70")
		const uintVFoGZQ = BigInt("1758")
		await WolfStakingRewardsM3Xby8q.onlyOwner.call({from: accounts[0]});
		const uint256arraymNGwcG = await WolfStakingRewardsM3Xby8q.updateNotifyRewardAmount.call(uintnqNjpp9, {from: accounts[1]});
		const uint256YpcSYtU = await WolfStakingRewardsM3Xby8q.getRewardForDuration.call(uintCp3yf2W, {from: accounts[3]});
		const uint256tcnjT0 = await WolfStakingRewardsM3Xby8q.withdraw.call(uintVFoGZQ, uintWRm0Dpa, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIv6uzJ = "utlVLUyYRxfwO2qsrx9UKUHzPazu5raPIuZ88aOrBNUtwkJH9AN259uHuzXzMslBWF"
		const stringstGbHPP = "80edzD6t4SK2CLbmTNplMRUkYt3zY8COxTgluFp2aGI1rSZfRS9nvRSx6knG2pk0hdo4ewhHVvAK3YG70MLtwmdHRyaL"
		const uintI0OzIKh = BigInt("205")
		const WolfStakingRewardsspnJ03X = await WolfStakingRewards.new(stringIv6uzJ, stringstGbHPP, uintI0OzIKh, {from: accounts[1]});
		const uintY00BkCA = BigInt("1230")
		const uintbpu1l2M = BigInt("1505")
		const uintMhTCKtK = BigInt("434")
		const uint256TKRcFKz = await WolfStakingRewardsspnJ03X.exit.call(uintY00BkCA, {from: accounts[2]});
		await WolfStakingRewardsspnJ03X.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256bExjH2X = await WolfStakingRewardsspnJ03X.totalSupplyPerPool.call(uintbpu1l2M, {from: accounts[2]});
		const stringQ3X3mtq = await WolfStakingRewardsspnJ03X.symbol.call({from: accounts[4]});
		const uint256NxK5xpp = await WolfStakingRewardsspnJ03X.totalSupplyPerPool.call(uintMhTCKtK, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFXoMOdG = "csLlthHY1J5KXMzsaJHcqUPrSCDAql3FVsNVgiPOQS2IRkYqDzcJmerLCkXSX5m9vnDtqyFhtEjGBHKrKzGSXR9x2"
		const stringwbA6BG2 = "JHCslGdg6CmcWQpqt9eKxPGZ3ieeMdMhmiNuhay89VNDX7vbOBN9Cv6rr9Dp71qaHz4EnHFC9Ck3qUYf9q7iaoaK2ytAcN9Tdl"
		const uintaYDE5jF = BigInt("91")
		const WolfStakingRewardsXMzC6L = await WolfStakingRewards.new(stringFXoMOdG, stringwbA6BG2, uintaYDE5jF, {from: accounts[4]});
		const uintaWOiv32 = BigInt("213")
		const uintPPHmanu = BigInt("1137")
		const uintJx5XJQC = BigInt("872")
		const uintDGa1J24 = BigInt("1243")
		const uintWq9myGe = BigInt("507")
		const uint4LiMRH = BigInt("740")
		const uintQ2QFUZ = await WolfStakingRewardsXMzC6L.getReward.call(uintaWOiv32, {from: accounts[3]});
		await WolfStakingRewardsXMzC6L.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256qTMso8 = await WolfStakingRewardsXMzC6L.withdraw.call(uintJx5XJQC, uintPPHmanu, {from: accounts[3]});
		const uint256tfoN90l = await WolfStakingRewardsXMzC6L.withdraw.call(uintWq9myGe, uintDGa1J24, {from: accounts[4]});
		const uint256oxC0h6A = await WolfStakingRewardsXMzC6L.rewardPerToken.call(uint4LiMRH, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVAwDyRn = "ZaLt1DmSh4SErLgC"
		const stringy7KbfgE = "cbAgz9rP0FWIcAigjnkH2MAkCzjWxMu1Wv8MEQQ2bJo4qdCTCS8ItUoNO"
		const uintC9MYvjw = BigInt("25")
		const WolfStakingRewardsmfPxf6y = await WolfStakingRewards.new(stringVAwDyRn, stringy7KbfgE, uintC9MYvjw, {from: accounts[1]});
		const uintwInvE8e = BigInt("1165")
		const uintCzhDlE3 = BigInt("1466")
		const uintOJWv1Bh = BigInt("490")
		const uintjpmjlLo = BigInt("1800")
		const uintWCkgCjY = BigInt("1559")
		const uint256arrayKUGKKI = await WolfStakingRewardsmfPxf6y.updateNotifyRewardAmount.call(uintwInvE8e, {from: accounts[1]});
		const uint256n4J23dO = await WolfStakingRewardsmfPxf6y.rewardPerToken.call(uintCzhDlE3, {from: accounts[2]});
		const uint256arrayEYq7Lak = await WolfStakingRewardsmfPxf6y.updateNotifyRewardAmount.call(uintOJWv1Bh, {from: accounts[1]});
		const uint256arrayKHSrRLQ = await WolfStakingRewardsmfPxf6y.updateNotifyRewardAmount.call(uintjpmjlLo, {from: accounts[0]});
		const uint256s1Q9LD4 = await WolfStakingRewardsmfPxf6y.rewardPerToken.call(uintWCkgCjY, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringlt2xqr = "XMifDAnTCUW5ovTgoSVShnTf9Rx1qQ1lEyUw50665N1lLwmKtUwrqborBprebjStqniBVEchHu2I3792V8PB8taJkyIybX3"
		const stringCjpMpQ8 = "Uq8A2DmgdutnM5Ey3ADVwQlzlxCjkg36cGvulzHrvVJ6g5ty3RbJ6PNyYbqajHh02hUQwr9lS1PxFKa8MYioKP4VRt8LUDsS"
		const uintgSPYQDa = BigInt("18")
		const WolfStakingRewardsZAU38o1 = await WolfStakingRewards.new(stringlt2xqr, stringCjpMpQ8, uintgSPYQDa, {from: "0x0000000000000000000000000000000000000001"});
		const uintWmcLEvz = BigInt("97")
		const uintSWN26s0 = BigInt("1971")
		const uintrFa72re = await WolfStakingRewardsZAU38o1.getReward.call(uintWmcLEvz, {from: accounts[4]});
		const uint256bn5mW5i = await WolfStakingRewardsZAU38o1.getRewardForDuration.call(uintSWN26s0, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbxmQcyx = "PJLg8krLtJsiFQMkRSaz1g4O3LQn9tDnwnMCnQyhD4wq5dfeMJWwm"
		const stringbs5WatY = "FbtUPw5IF7zrQGptgIRklaJEV5FmmSdncPKyRNcek25iSTzmcN3SyzYaPT8As"
		const uintZYz71bj = BigInt("45")
		const WolfStakingRewardsqpnAKB = await WolfStakingRewards.new(stringbxmQcyx, stringbs5WatY, uintZYz71bj, {from: accounts[2]});
		const uintbwpBMN3 = BigInt("862")
		await WolfStakingRewardsqpnAKB.onlyRewardsDistribution.call({from: accounts[3]});
		await WolfStakingRewardsqpnAKB.onlyOwner.call({from: accounts[2]});
		const uint256m24WlrZ = await WolfStakingRewardsqpnAKB.totalSupplyPerPool.call(uintbwpBMN3, {from: accounts[3]});
		const stringmBTvDy5 = await WolfStakingRewardsqpnAKB.symbol.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressJG3Hu7U = accounts[0]
		const addressGlltSLA = accounts[2]
		const addresslGljCc = accounts[2]
		const WolfStakingRewardsML8OAHk = await WolfStakingRewards.new(addressJG3Hu7U, addressGlltSLA, addresslGljCc, {from: accounts[3]});
		const uintSS68Gb5 = BigInt("1928")
		const addressIhvKWWO = accounts[2]
		const uintYziO7bH = BigInt("1702")
		const uintkFKW7pl = BigInt("1")
		const uintQF9gIWf = BigInt("931")
		const uint256ixE1cq = await WolfStakingRewardsML8OAHk.balanceOfPerPool.call(addressIhvKWWO, uintSS68Gb5, {from: accounts[4]});
		const uint256l91cZV = await WolfStakingRewardsML8OAHk.lastTimeRewardApplicable.call(uintYziO7bH, {from: accounts[0]});
		const uint25658S2OY = await WolfStakingRewardsML8OAHk.withdraw.call(uintQF9gIWf, uintkFKW7pl, {from: accounts[4]});

		assert.equal(uint256ixE1cq, BigInt("0"))
		assert.equal(uint256l91cZV, BigInt("0"))
		await expect(WolfStakingRewardsML8OAHk.withdraw.call(uintQF9gIWf, uintkFKW7pl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringdVokjNy = "BJ7rgO6lDEomMPGuwEichQGuV2vmJr"
		const stringoXnzAl3 = "WkPeM7Cn1fCKgF85N8PdCCHx791jMHw8cHFAGVaQeGHknusUKdQmomnvW5i3It"
		const uintE0lyD1S = BigInt("216")
		const WolfStakingRewardsKGrNaIt = await WolfStakingRewards.new(stringdVokjNy, stringoXnzAl3, uintE0lyD1S, {from: accounts[3]});
		const uintpqDlQiO = BigInt("550")
		const uintaEVw6Nt = BigInt("1692")
		const uintdwoPhzC = BigInt("582")
		const uint256AKB6dKq = await WolfStakingRewardsKGrNaIt.exit.call(uintpqDlQiO, {from: accounts[2]});
		const uint256arrayCedDQn0 = await WolfStakingRewardsKGrNaIt.updateNotifyRewardAmount.call(uintaEVw6Nt, {from: accounts[2]});
		const uint256E8ZAr1r = await WolfStakingRewardsKGrNaIt.rewardPerToken.call(uintdwoPhzC, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringx7KZm6I = "pEdmrmzwMCXM3ewiF4ymcFWKYRajlow89OGribuQGN2Xeqa4fhPm4laDQjohQdbm5"
		const stringF01fFHI = "4R3GmkQBeNnOEG4jv2PoLk0a3FeAOJUIgBHefO6wiBImg7UdR7x6O9p2DYudHTtQmf0kY6rVkId"
		const uintEYJ1pDx = BigInt("32")
		const WolfStakingRewardsh9UepTh = await WolfStakingRewards.new(stringx7KZm6I, stringF01fFHI, uintEYJ1pDx, {from: accounts[0]});
		const uintkFMclO7 = BigInt("1081")
		const uintCmEFUBH = BigInt("1962")
		const uintxzHf8pw = BigInt("168")
		const uintoQWanRC = BigInt("1458")
		await WolfStakingRewardsh9UepTh.onlyRewardsDistribution.call({from: accounts[4]});
		const stringO2tSvhT = await WolfStakingRewardsh9UepTh.name.call({from: accounts[4]});
		const uint256C1KsNaC = await WolfStakingRewardsh9UepTh.withdrawRemainingBalance.call(uintCmEFUBH, uintkFMclO7, {from: accounts[0]});
		const uintxWAEF3V = await WolfStakingRewardsh9UepTh.getReward.call(uintxzHf8pw, {from: accounts[5]});
		const uint256uHzeBBN = await WolfStakingRewardsh9UepTh.lastTimeRewardApplicable.call(uintoQWanRC, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzb7Q0jn = "CCl7DgvxpTaaEVeKCgHamOD6QVpL6toAO"
		const stringlerAtA = "jNYO5rJjrR4pkbJJNA1w2c4uwpiIBJ7SeAFj2KLddTQNLvRroHwp7OCLlpTyp0sJmfvqJNQgnmiBwN0AgSpmDPN"
		const uintxvVE8MQ = BigInt("21")
		const WolfStakingRewardswYUhFNT = await WolfStakingRewards.new(stringzb7Q0jn, stringlerAtA, uintxvVE8MQ, {from: accounts[0]});
		const uintBedBi8L = BigInt("1178")
		const uintlrgTbUG = BigInt("1931")
		const uint256oChn6Ab = await WolfStakingRewardswYUhFNT.lastTimeRewardApplicable.call(uintBedBi8L, {from: accounts[2]});
		const uint256arrayjeOODXC = await WolfStakingRewardswYUhFNT.updateNotifyRewardAmount.call(uintlrgTbUG, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvdu3HJW = "KPOAH1CucK1xKC8Fncuw7fTekVUCG9NB8mRT2DoEgUs8WrEAwzsciFxheCCiRgvfn4z"
		const stringVHifvR6 = "NxfVr36Wa7yj5BWFgNAhDd9RN4JwO9joHku1kGuaBGG9P"
		const uintNWCzHMV = BigInt("214")
		const WolfStakingRewardsceOkSy = await WolfStakingRewards.new(stringvdu3HJW, stringVHifvR6, uintNWCzHMV, {from: accounts[4]});
		const uintl8P3vN8 = BigInt("1162")
		const addressK0ujhlM = "0x0000000000000000000000000000000000000001"
		const uintxFIxu7F = BigInt("1407")
		const uintWKC3EIP = BigInt("993")
		const addressOawIUmm = await WolfStakingRewardsceOkSy.updateReward.call(addressK0ujhlM, uintl8P3vN8, {from: accounts[3]});
		await WolfStakingRewardsceOkSy.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256arrayFIm9vDY = await WolfStakingRewardsceOkSy.updateNotifyRewardAmount.call(uintxFIxu7F, {from: accounts[4]});
		await WolfStakingRewardsceOkSy.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256Y9sZSZE = await WolfStakingRewardsceOkSy.lastTimeRewardApplicable.call(uintWKC3EIP, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfcjtnjQ = "B4AKCg7FWQmYqs0kTaNsW14b0"
		const stringM8bJPI = "9quVRTFo2ONqRaoOT25PcEf1pvNI5YhPSIMDVdNkImP4YUyP"
		const uintFAKHEmE = BigInt("101")
		const WolfStakingRewardsxn6yyup = await WolfStakingRewards.new(stringfcjtnjQ, stringM8bJPI, uintFAKHEmE, {from: accounts[0]});
		const uintjaNutR4 = BigInt("1931")
		const uinteC6coZQ = BigInt("24")
		const uint256arrayp3U3FrS = await WolfStakingRewardsxn6yyup.updateNotifyRewardAmount.call(uintjaNutR4, {from: accounts[2]});
		await WolfStakingRewardsxn6yyup.nonReentrant.call({from: accounts[1]});
		const uint256arrayBDWisjy = await WolfStakingRewardsxn6yyup.updateNotifyRewardAmount.call(uinteC6coZQ, {from: accounts[3]});
		const stringUbSSQaM = await WolfStakingRewardsxn6yyup.symbol.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhJC8GiX = "l1clV4Qmdn6JJS47QJYggUdY"
		const stringVRCD6El = "ahDzi2MG4RFJcfsnz7xzVu0qbegYjzoTLxdtHeHi4exIRirVJVjk4upaHvXPrsoDi31a5L"
		const uintTKcxEd9 = BigInt("150")
		const WolfStakingRewardsmtaHblf = await WolfStakingRewards.new(stringhJC8GiX, stringVRCD6El, uintTKcxEd9, {from: accounts[4]});
		const uintu737HJP = BigInt("265")
		const uint256U2JxPHf = await WolfStakingRewardsmtaHblf.lastTimeRewardApplicable.call(uintu737HJP, {from: accounts[1]});
		await WolfStakingRewardsmtaHblf.onlyRewardsDistribution.call({from: accounts[1]});
		const uint8rUfXXr = await WolfStakingRewardsmtaHblf.decimals.call({from: accounts[1]});
		await WolfStakingRewardsmtaHblf.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringsrbG0Qj = "CX0NlDtTmGXjhbOkO7S2ky"
		const stringhVRbyw7 = "o2SFnYhyVrpXRK0V8TKIa86EeCayhlCOoarSPJvmjZnwkm"
		const uintgV7RdjG = BigInt("235")
		const WolfStakingRewardsyonVich = await WolfStakingRewards.new(stringsrbG0Qj, stringhVRbyw7, uintgV7RdjG, {from: accounts[3]});
		const uintxY4OWJf = BigInt("661")
		const uintNwJBxi = BigInt("669")
		const uintto9qTqr = BigInt("1262")
		const uintY9xLfbE = BigInt("1458")
		const uint256UooGm8 = await WolfStakingRewardsyonVich.withdrawRemainingBalance.call(uintNwJBxi, uintxY4OWJf, {from: accounts[0]});
		const uint256WJZqrb4 = await WolfStakingRewardsyonVich.totalSupplyPerPool.call(uintto9qTqr, {from: accounts[4]});
		const uint2565tRsxJ = await WolfStakingRewardsyonVich.lastTimeRewardApplicable.call(uintY9xLfbE, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringEJFBdCG = "WC2LJCeHviLsJ4QSlOYf7RMjzuEq5trVlDGlNIehhx5BqkMKfPN8uVwSJqf6Klp58xq8RSet4g"
		const stringdbOcK3w = "NBMM"
		const uintzgqhuY5 = BigInt("8")
		const WolfStakingRewardsi2uMQWj = await WolfStakingRewards.new(stringEJFBdCG, stringdbOcK3w, uintzgqhuY5, {from: "0x0000000000000000000000000000000000000001"});
		const uintBvGczzm = BigInt("1855")
		const uintfQKD0Q = BigInt("1363")
		const uintCjJ7Yb = BigInt("1520")
		const addressmPwFuEo = accounts[0]
		const uinteBSMTDo = BigInt("1146")
		const uint256f5uI8pg = await WolfStakingRewardsi2uMQWj.rewardPerToken.call(uintBvGczzm, {from: accounts[4]});
		const uint256M7XSNIe = await WolfStakingRewardsi2uMQWj.totalSupplyPerPool.call(uintfQKD0Q, {from: accounts[5]});
		const uint256RmB7tcK = await WolfStakingRewardsi2uMQWj.earned.call(addressmPwFuEo, uintCjJ7Yb, {from: accounts[5]});
		const uint256wEXpKg7 = await WolfStakingRewardsi2uMQWj.totalSupplyPerPool.call(uinteBSMTDo, {from: accounts[3]});
		const uint8gk5ijUr = await WolfStakingRewardsi2uMQWj.decimals.call({from: accounts[1]});
	});
})