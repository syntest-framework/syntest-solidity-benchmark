const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const stringZGid9AJ = "LJIw8qxMrgSSCLd0UfcdJALhgEX2s4AUmC9nGNE"
		const stringBZjlllo = "NfgNuYtUwWzOxviGwVpuvLDcW1Bt7c6woIF6mp3MT9MbRRBEqghn14eceGTi"
		const uintfJaYCo = BigInt("160")
		const WolfStakingRewardsxhvDj0K = await WolfStakingRewards.new(stringZGid9AJ, stringBZjlllo, uintfJaYCo, {from: accounts[0]});
		const uintn7Zmkxt = BigInt("1250")
		const uint8DMb1pDl = await WolfStakingRewardsxhvDj0K.decimals.call({from: accounts[3]});
		const uint256VfMNsjm = await WolfStakingRewardsxhvDj0K.totalSupplyPerPool.call(uintn7Zmkxt, {from: accounts[1]});
		await WolfStakingRewardsxhvDj0K.onlyOwner.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuJEQ18h = "VJ9"
		const stringvUgV9y0 = "parCF2ERPhf2QbgvfkIpwud3gYgegtjjXQ8SaoQrLgG3p3pEa63q7d2EE5XQ5h"
		const uintnNvoHHf = BigInt("18")
		const WolfStakingRewardseLhZySC = await WolfStakingRewards.new(stringuJEQ18h, stringvUgV9y0, uintnNvoHHf, {from: accounts[1]});
		const uint9ODqmF = BigInt("31")
		const uintwrCAubJ = BigInt("162")
		const addressRABflLg = accounts[3]
		await WolfStakingRewardseLhZySC.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256aluEmo9 = await WolfStakingRewardseLhZySC.getRewardForDuration.call(uint9ODqmF, {from: accounts[2]});
		const addressqnXK98f = await WolfStakingRewardseLhZySC.updateReward.call(addressRABflLg, uintwrCAubJ, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressSpiwOp3 = accounts[0]
		const addresskB44YBM = accounts[0]
		const addressp49gYfx = accounts[2]
		const WolfStakingRewardstZsntUS = await WolfStakingRewards.new(addressSpiwOp3, addresskB44YBM, addressp49gYfx, {from: accounts[0]});
		const uintFpywk1R = BigInt("497")
		const address7kw0wd = accounts[4]
		const uintelnhGR6 = BigInt("1247")
		const uintymd8zkA = BigInt("2011")
		const addressa4nc7f = accounts[1]
		const uintjQqyEjV = BigInt("83")
		const uintvy0FLkI = BigInt("629")
		const addressLTrcAIP = accounts[0]
		const uint256a246LTJ = await WolfStakingRewardstZsntUS.balanceOfPerPool.call(address7kw0wd, uintFpywk1R, {from: accounts[4]});
//		const uint256jIbu5ci = await WolfStakingRewardstZsntUS.exit.call(uintelnhGR6, {from: accounts[0]});
//		const uint256WcJY4Ru = await WolfStakingRewardstZsntUS.balanceOfPerPool.call(addressa4nc7f, uintymd8zkA, {from: accounts[5]});
//		const uint256arrayOzresXc = await WolfStakingRewardstZsntUS.updateNotifyRewardAmount.call(uintjQqyEjV, {from: accounts[3]});
//		const addressEFq4Hw = await WolfStakingRewardstZsntUS.updateReward.call(addressLTrcAIP, uintvy0FLkI, {from: accounts[5]});

		assert.equal(uint256a246LTJ, BigInt("0"))
		await expect(WolfStakingRewardstZsntUS.exit.call(uintelnhGR6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressoYXzetI = accounts[3]
		const addressJ1LoTYe = accounts[1]
		const addressx7nnvbJ = accounts[5]
		const WolfStakingRewardseHeUjZc = await WolfStakingRewards.new(addressoYXzetI, addressJ1LoTYe, addressx7nnvbJ, {from: accounts[2]});
		const uintyCdZEjU = BigInt("134")
		const uintxNqPkGe = BigInt("143")
		const uintEpZhsIX = BigInt("102")
		const uintJJ0xEKA = BigInt("1334")
		const uintJts0gp = BigInt("1157")
		const uintrQyWYs9 = BigInt("1070")
		const uint256jwXOTd = await WolfStakingRewardseHeUjZc.totalSupplyPerPool.call(uintyCdZEjU, {from: accounts[4]});
		const uint256Kj5jxaf = await WolfStakingRewardseHeUjZc.rewardPerToken.call(uintxNqPkGe, {from: accounts[4]});
//		const uint256VIAYLHb = await WolfStakingRewardseHeUjZc.withdraw.call(uintJJ0xEKA, uintEpZhsIX, {from: accounts[3]});
//		const uint256c5ytay = await WolfStakingRewardseHeUjZc.withdrawRemainingBalance.call(uintrQyWYs9, uintJts0gp, {from: accounts[1]});

		assert.equal(uint256Kj5jxaf, BigInt("0"))
		assert.equal(uint256jwXOTd, BigInt("0"))
		await expect(WolfStakingRewardseHeUjZc.withdraw.call(uintJJ0xEKA, uintEpZhsIX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressZaSkzW = accounts[0]
		const addressDyklXML = accounts[0]
		const addressyShProx = accounts[1]
		const WolfStakingRewardsEX4nbW = await WolfStakingRewards.new(addressZaSkzW, addressDyklXML, addressyShProx, {from: accounts[3]});
		const uintf6LZJK3 = BigInt("445")
		const addressoRH9Yji = accounts[4]
		const uintsfzEKDg = BigInt("340")
		const addressVjSEVX0 = "0x0000000000000000000000000000000000000001"
//		await WolfStakingRewardsEX4nbW.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressuhwdFP5 = await WolfStakingRewardsEX4nbW.updateReward.call(addressoRH9Yji, uintf6LZJK3, {from: accounts[4]});
//		const uint256UJUYGf = await WolfStakingRewardsEX4nbW.balanceOfPerPool.call(addressVjSEVX0, uintsfzEKDg, {from: accounts[3]});

		await expect(WolfStakingRewardsEX4nbW.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringToqgeQq = "ormn8iYVBQv0iUPePajBimNvF4d26p9pwFZoh9LJGJz"
		const stringPAB2STl = "56hbN4IgmY3"
		const uintjbHzia = BigInt("74")
		const WolfStakingRewardsjumRYaB = await WolfStakingRewards.new(stringToqgeQq, stringPAB2STl, uintjbHzia, {from: accounts[1]});
		const uintzMWSPIv = BigInt("1184")
		const uinthdmSjjT = BigInt("1098")
		const uintAWz3eef = BigInt("859")
		const addressOiDhbTN = accounts[5]
		const uint256MOyBPWP = await WolfStakingRewardsjumRYaB.lastTimeRewardApplicable.call(uintzMWSPIv, {from: accounts[4]});
		const uint8WtDUmSf = await WolfStakingRewardsjumRYaB.decimals.call({from: accounts[0]});
		const uint256arrayq5GKrZi = await WolfStakingRewardsjumRYaB.updateNotifyRewardAmount.call(uinthdmSjjT, {from: accounts[0]});
		await WolfStakingRewardsjumRYaB.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256unffQ50 = await WolfStakingRewardsjumRYaB.earned.call(addressOiDhbTN, uintAWz3eef, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addressAYRU2Fg = accounts[1]
		const addressyx37XzZ = "0x0000000000000000000000000000000000000001"
		const addressdYzgEIo = accounts[3]
		const WolfStakingRewardsksUGcPg = await WolfStakingRewards.new(addressAYRU2Fg, addressyx37XzZ, addressdYzgEIo, {from: accounts[4]});
		const uintHRA8Smt = BigInt("598")
		const uintV6ShflO = BigInt("1507")
		const uintAnP1ylh = BigInt("52")
		const addressP9h5mUu = accounts[2]
		const uintiBpX7Z4 = BigInt("805")
//		const uint256qXDgWUo = await WolfStakingRewardsksUGcPg.withdrawRemainingBalance.call(uintV6ShflO, uintHRA8Smt, {from: accounts[0]});
//		const uint256SXZbS6x = await WolfStakingRewardsksUGcPg.earned.call(addressP9h5mUu, uintAnP1ylh, {from: accounts[1]});
//		const uintrIIuXX = await WolfStakingRewardsksUGcPg.getReward.call(uintiBpX7Z4, {from: accounts[1]});

		await expect(WolfStakingRewardsksUGcPg.withdrawRemainingBalance.call(uintV6ShflO, uintHRA8Smt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringbHx30ye = "q4cEzQLA6WoupU4zrzb794nMvdfjQNbXqWPN3GOVu"
		const stringFRO95P0 = "Hp79WiE7OBkFvV"
		const uintql23Rx = BigInt("172")
		const WolfStakingRewardsok2dCJQ = await WolfStakingRewards.new(stringbHx30ye, stringFRO95P0, uintql23Rx, {from: accounts[1]});
		const uintHcIClNn = BigInt("1886")
		const uinte0MIGMp = BigInt("1125")
		const uintBmzjtSx = BigInt("54")
		const uintEgYfaHT = BigInt("161")
		const uint256dxWOEn = await WolfStakingRewardsok2dCJQ.totalSupplyPerPool.call(uintHcIClNn, {from: accounts[2]});
		const uint256AyVW9h7 = await WolfStakingRewardsok2dCJQ.withdrawRemainingBalance.call(uintBmzjtSx, uinte0MIGMp, {from: accounts[2]});
		const uint256PA92VAW = await WolfStakingRewardsok2dCJQ.rewardPerToken.call(uintEgYfaHT, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSwcMha = "Gb4oqLnYkvEAdTnZYIkxeFCPuHz289wVueemwb6rSkTd3"
		const stringeePIKwF = "IvIyOtYrorYCr7nGJ02XFg6L5wOdiDqAjbtLzHhqcjK81ccJXjhw089ffHoINhF4"
		const uintT5sFT3e = BigInt("61")
		const WolfStakingRewardsYuLpVWX = await WolfStakingRewards.new(stringSwcMha, stringeePIKwF, uintT5sFT3e, {from: accounts[3]});
		const uintE7UMc1n = BigInt("915")
		const uintUmfmGyf = BigInt("1307")
		const uintmEX5rg = BigInt("442")
		const uintUDD0RHb = BigInt("1539")
		const addressZNTGxEb = accounts[4]
		const uintFelqZdU = BigInt("1802")
		const addressDYKApsy = accounts[1]
		const uint256lSxfCL = await WolfStakingRewardsYuLpVWX.totalSupplyPerPool.call(uintE7UMc1n, {from: accounts[2]});
		const uint256nZum6Cf = await WolfStakingRewardsYuLpVWX.withdrawRemainingBalance.call(uintmEX5rg, uintUmfmGyf, {from: "0x0000000000000000000000000000000000000001"});
		const addressQdQKPr = await WolfStakingRewardsYuLpVWX.updateReward.call(addressZNTGxEb, uintUDD0RHb, {from: accounts[1]});
		const stringzTeYBBJ = await WolfStakingRewardsYuLpVWX.symbol.call({from: accounts[3]});
		const uint256qm2U0w = await WolfStakingRewardsYuLpVWX.balanceOfPerPool.call(addressDYKApsy, uintFelqZdU, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressgiridLF = "0x0000000000000000000000000000000000000001"
		const addressGSYrbRJ = accounts[0]
		const addressmZfhFI0 = accounts[1]
		const WolfStakingRewardsSGICKiw = await WolfStakingRewards.new(addressgiridLF, addressGSYrbRJ, addressmZfhFI0, {from: "0x0000000000000000000000000000000000000001"});
		const uintcye6c0x = BigInt("1071")
		const uintkjzmpHt = BigInt("1476")
		const uintKxxMMgb = BigInt("1476")
		const uint256z7dNFNX = await WolfStakingRewardsSGICKiw.withdraw.call(uintkjzmpHt, uintcye6c0x, {from: accounts[1]});
		const uint256L20vpWJ = await WolfStakingRewardsSGICKiw.getRewardForDuration.call(uintKxxMMgb, {from: accounts[3]});
		await WolfStakingRewardsSGICKiw.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresskW6Szcn = accounts[0]
		const addresscpfwOv7 = accounts[0]
		const addressO2rvHRm = accounts[2]
		const WolfStakingRewardstZsntUS = await WolfStakingRewards.new(addresskW6Szcn, addresscpfwOv7, addressO2rvHRm, {from: accounts[0]});
		const uintQP6zbBm = BigInt("497")
		const addressalyT55y = accounts[4]
		const uintC3k74ai = BigInt("877")
		const uintGeHlhbR = BigInt("1287")
		const uint256a246LTJ = await WolfStakingRewardstZsntUS.balanceOfPerPool.call(addressalyT55y, uintQP6zbBm, {from: accounts[4]});
//		const uint256p3iv7F8 = await WolfStakingRewardstZsntUS.getRewardForDuration.call(uintC3k74ai, {from: accounts[2]});
//		const uint256jIbu5ci = await WolfStakingRewardstZsntUS.exit.call(uintGeHlhbR, {from: accounts[0]});

		assert.equal(uint256a246LTJ, BigInt("0"))
		await expect(WolfStakingRewardstZsntUS.getRewardForDuration.call(uintC3k74ai, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringBgGgmcd = "7FhTIS4"
		const stringXEZ3vo2 = "dUjPW1MROs6efqh7sXsqzJflldMZYPDjujdkvq4"
		const uintFlsRqqJ = BigInt("196")
		const WolfStakingRewardsxzqjrM0 = await WolfStakingRewards.new(stringBgGgmcd, stringXEZ3vo2, uintFlsRqqJ, {from: accounts[2]});
		await WolfStakingRewardsxzqjrM0.nonReentrant.call({from: accounts[4]});
		const stringyyQYf2 = await WolfStakingRewardsxzqjrM0.symbol.call({from: accounts[4]});
		const stringzfnrUWj = await WolfStakingRewardsxzqjrM0.symbol.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressb8rS1w = accounts[3]
		const addressuDOX9v1 = accounts[1]
		const addressYKLkUWG = accounts[5]
		const WolfStakingRewardseHeUjZc = await WolfStakingRewards.new(addressb8rS1w, addressuDOX9v1, addressYKLkUWG, {from: accounts[2]});
		const uintYHY1Oog = BigInt("134")
		const uinthaETPoZ = BigInt("2031")
		const uintkz7yNfz = BigInt("463")
		const uintC6QDzrP = BigInt("143")
		const uintFHdX2Vi = BigInt("102")
		const uintyKCPsQ = BigInt("1334")
		const uintGk0IIOs = BigInt("1157")
		const uintNuQoKcr = BigInt("1070")
		const uinttejoUp = BigInt("105")
		const uintXg1Vlqu = BigInt("241")
		const uint256jwXOTd = await WolfStakingRewardseHeUjZc.totalSupplyPerPool.call(uintYHY1Oog, {from: accounts[4]});
		const uint256MeoGnL = await WolfStakingRewardseHeUjZc.rewardPerToken.call(uinthaETPoZ, {from: accounts[1]});
//		const uint256arrayc0WT5MC = await WolfStakingRewardseHeUjZc.updateNotifyRewardAmount.call(uintkz7yNfz, {from: accounts[4]});
//		const uint256Kj5jxaf = await WolfStakingRewardseHeUjZc.rewardPerToken.call(uintC6QDzrP, {from: accounts[4]});
//		const uint256VIAYLHb = await WolfStakingRewardseHeUjZc.withdraw.call(uintyKCPsQ, uintFHdX2Vi, {from: accounts[3]});
//		const uint256c5ytay = await WolfStakingRewardseHeUjZc.withdrawRemainingBalance.call(uintNuQoKcr, uintGk0IIOs, {from: accounts[1]});
//		const stringrRNZxh = await WolfStakingRewardseHeUjZc.name.call({from: accounts[2]});
//		const uint256hoiE2uy = await WolfStakingRewardseHeUjZc.rewardPerToken.call(uinttejoUp, {from: accounts[3]});
//		const uint25680I6As = await WolfStakingRewardseHeUjZc.getRewardForDuration.call(uintXg1Vlqu, {from: accounts[0]});

		assert.equal(uint256MeoGnL, BigInt("0"))
		assert.equal(uint256jwXOTd, BigInt("0"))
		await expect(WolfStakingRewardseHeUjZc.updateNotifyRewardAmount.call(uintkz7yNfz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringWCLM85G = "bg7YbJmBYwehbOUI6IETrtbjeuD6d73te3B9M8wNQXwkuuN2i3vkFeFHwz5q64lKuUgg6qdEgIOHd59I87k98gLehWvtB8"
		const stringup8WmnL = "L5QXW4YaKfDdovhq35hO3mzABQDMa3tU3pRrZQb2yrNNMiMxw5YeUstY1hy9o38NbQBMCYP3IjpW8TFgmtUuMaTH6"
		const uintvVCc2wH = BigInt("148")
		const WolfStakingRewardsfLphAO9 = await WolfStakingRewards.new(stringWCLM85G, stringup8WmnL, uintvVCc2wH, {from: accounts[2]});
		const uintjJimoxn = BigInt("1149")
		const uintdebFOWP = BigInt("217")
		const uintjEZ17Eu = BigInt("305")
		const uintszRObbD = BigInt("1311")
		const addresseFDv83 = accounts[5]
		const uintX8BXZlh = BigInt("760")
		const addressRgU6QTy = accounts[4]
		const uint256gE7AtQp = await WolfStakingRewardsfLphAO9.lastTimeRewardApplicable.call(uintjJimoxn, {from: accounts[4]});
		const uint256rUaCp22 = await WolfStakingRewardsfLphAO9.withdraw.call(uintjEZ17Eu, uintdebFOWP, {from: accounts[2]});
		const uint256pgiEHs = await WolfStakingRewardsfLphAO9.balanceOfPerPool.call(addresseFDv83, uintszRObbD, {from: accounts[2]});
		const stringAFN2vqu = await WolfStakingRewardsfLphAO9.name.call({from: accounts[3]});
		const uint256c9It6b6 = await WolfStakingRewardsfLphAO9.balanceOfPerPool.call(addressRgU6QTy, uintX8BXZlh, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressBbivzXT = accounts[3]
		const addressx6qCTA = accounts[1]
		const addressPUKrF21 = accounts[5]
		const WolfStakingRewardseHeUjZc = await WolfStakingRewards.new(addressBbivzXT, addressx6qCTA, addressPUKrF21, {from: accounts[2]});
		const uintmK4l7t = BigInt("77")
		const uintd9n0vnV = BigInt("635")
		const uintayms3K = BigInt("134")
		const uintoqcdmW4 = BigInt("143")
		const uintaI0Tf92 = BigInt("1834")
		const uintDO5gBqe = BigInt("152")
		const uintMiryZrS = BigInt("429")
		const uintFVBKfwP = BigInt("1824")
		const addressVtVirOo = accounts[3]
		const uintkKUriP8 = BigInt("890")
		const uintJXIONim = BigInt("1157")
		const uintEWolEdb = BigInt("1070")
		const uintuK3RQDy = await WolfStakingRewardseHeUjZc.getReward.call(uintmK4l7t, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256kJnHQZ = await WolfStakingRewardseHeUjZc.exit.call(uintd9n0vnV, {from: accounts[0]});
//		const uint256jwXOTd = await WolfStakingRewardseHeUjZc.totalSupplyPerPool.call(uintayms3K, {from: accounts[4]});
//		const uint256Kj5jxaf = await WolfStakingRewardseHeUjZc.rewardPerToken.call(uintoqcdmW4, {from: accounts[4]});
//		const uint256baqjxm = await WolfStakingRewardseHeUjZc.exit.call(uintaI0Tf92, {from: accounts[3]});
//		const uint256yVhzHBh = await WolfStakingRewardseHeUjZc.withdrawRemainingBalance.call(uintMiryZrS, uintDO5gBqe, {from: accounts[0]});
//		const uint256IOf0CA = await WolfStakingRewardseHeUjZc.earned.call(addressVtVirOo, uintFVBKfwP, {from: accounts[2]});
//		const uint256arrayzA3yaml = await WolfStakingRewardseHeUjZc.updateNotifyRewardAmount.call(uintkKUriP8, {from: accounts[4]});
//		const uint256c5ytay = await WolfStakingRewardseHeUjZc.withdrawRemainingBalance.call(uintEWolEdb, uintJXIONim, {from: accounts[1]});

		await expect(WolfStakingRewardseHeUjZc.exit.call(uintd9n0vnV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressBmiBUe2 = accounts[3]
		const addressAzvtxar = accounts[1]
		const addresscb4wOUI = accounts[5]
		const WolfStakingRewardseHeUjZc = await WolfStakingRewards.new(addressBmiBUe2, addressAzvtxar, addresscb4wOUI, {from: accounts[2]});
		const uinteDm04OA = BigInt("143")
		const uintlKpSYBY = BigInt("1087")
		const uint44hKQx = BigInt("1770")
		const uintUxoKJU3 = BigInt("287")
		const uintAnYvzkf = BigInt("1143")
		const uintzBQaVdO = BigInt("841")
		const uintz2ajkki = BigInt("1710")
		const uintYZde3ed = BigInt("2020")
		const uintqQWCR35 = BigInt("1185")
		const uinta8RHlL9 = BigInt("151")
		const uint6GihMu = BigInt("1192")
		const uintg2REcwD = BigInt("507")
		const uint256Kj5jxaf = await WolfStakingRewardseHeUjZc.rewardPerToken.call(uinteDm04OA, {from: accounts[4]});
//		const uint256VIAYLHb = await WolfStakingRewardseHeUjZc.withdraw.call(uint44hKQx, uintlKpSYBY, {from: accounts[3]});
//		const uint256511G2P = await WolfStakingRewardseHeUjZc.stake.call(uintAnYvzkf, uintUxoKJU3, {from: accounts[5]});
//		const uint256zFi3wi3 = await WolfStakingRewardseHeUjZc.withdrawRemainingBalance.call(uintz2ajkki, uintzBQaVdO, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ReZxQVg = await WolfStakingRewardseHeUjZc.rewardPerToken.call(uintYZde3ed, {from: accounts[3]});
//		const uint256c5ytay = await WolfStakingRewardseHeUjZc.withdrawRemainingBalance.call(uinta8RHlL9, uintqQWCR35, {from: accounts[1]});
//		const uint256QDQes5D = await WolfStakingRewardseHeUjZc.stake.call(uintg2REcwD, uint6GihMu, {from: accounts[2]});
//		await WolfStakingRewardseHeUjZc.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256Kj5jxaf, BigInt("0"))
		await expect(WolfStakingRewardseHeUjZc.withdraw.call(uint44hKQx, uintlKpSYBY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringDtsEY7f = "0qgbCH79QmoQDH851"
		const stringZ7lTKkV = "EGHTCCbC3R5ql4t"
		const uintXKz2vYH = BigInt("142")
		const WolfStakingRewardshDmpZBU = await WolfStakingRewards.new(stringDtsEY7f, stringZ7lTKkV, uintXKz2vYH, {from: accounts[3]});
		const uinthQfmJOM = BigInt("1739")
		const uintWsERm70 = BigInt("110")
		const uintDhfRFUs = BigInt("412")
		const uintLEAM3rC = BigInt("351")
		const addresslTnUNYW = accounts[4]
		const uintlqEElt = BigInt("978")
		const uintq0U83h1 = BigInt("1869")
		const uint8v6IYOCH = await WolfStakingRewardshDmpZBU.decimals.call({from: accounts[4]});
		const uintkiTJy84 = await WolfStakingRewardshDmpZBU.getReward.call(uinthQfmJOM, {from: accounts[2]});
		const uint256mah8b7J = await WolfStakingRewardshDmpZBU.exit.call(uintWsERm70, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Ltp5EvF = await WolfStakingRewardshDmpZBU.exit.call(uintDhfRFUs, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LhqnHcf = await WolfStakingRewardshDmpZBU.earned.call(addresslTnUNYW, uintLEAM3rC, {from: accounts[2]});
		const uint256lpkhOKF = await WolfStakingRewardshDmpZBU.withdrawRemainingBalance.call(uintq0U83h1, uintlqEElt, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresswK53rf3 = accounts[3]
		const addressaCKWYyM = accounts[1]
		const addressGkN57z = accounts[5]
		const WolfStakingRewardseHeUjZc = await WolfStakingRewards.new(addresswK53rf3, addressaCKWYyM, addressGkN57z, {from: accounts[2]});
		const uintiYPsPhK = BigInt("134")
		const uintO1cwRhN = BigInt("123")
		const uintBKnqv49 = BigInt("1015")
		const uintLRv1I7P = BigInt("592")
		const uintfzcZh7 = BigInt("1419")
		const addressHcJU7n = accounts[2]
		const uintXNjoNNG = BigInt("102")
		const uintyYtNsc = BigInt("1334")
		const uintmfvGalt = BigInt("1157")
		const uintJT3KKbw = BigInt("1070")
		const uintXlObBEK = BigInt("105")
		const uint256jwXOTd = await WolfStakingRewardseHeUjZc.totalSupplyPerPool.call(uintiYPsPhK, {from: accounts[4]});
		const uint256Kj5jxaf = await WolfStakingRewardseHeUjZc.rewardPerToken.call(uintO1cwRhN, {from: accounts[4]});
//		const uint2561TIAHF = await WolfStakingRewardseHeUjZc.withdrawRemainingBalance.call(uintLRv1I7P, uintBKnqv49, {from: accounts[2]});
//		const addressbqubQ5 = await WolfStakingRewardseHeUjZc.updateReward.call(addressHcJU7n, uintfzcZh7, {from: accounts[3]});
//		const uint256VIAYLHb = await WolfStakingRewardseHeUjZc.withdraw.call(uintyYtNsc, uintXNjoNNG, {from: accounts[3]});
//		const uint256c5ytay = await WolfStakingRewardseHeUjZc.withdrawRemainingBalance.call(uintJT3KKbw, uintmfvGalt, {from: accounts[1]});
//		const stringrRNZxh = await WolfStakingRewardseHeUjZc.name.call({from: accounts[2]});
//		const uint256hoiE2uy = await WolfStakingRewardseHeUjZc.rewardPerToken.call(uintXlObBEK, {from: accounts[3]});

		assert.equal(uint256Kj5jxaf, BigInt("0"))
		assert.equal(uint256jwXOTd, BigInt("0"))
		await expect(WolfStakingRewardseHeUjZc.withdrawRemainingBalance.call(uintLRv1I7P, uintBKnqv49, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringNXXtfXQ = "iwUoFsfQDHCQ5kUwDR2nvXnBQOvfaDT5pKch"
		const stringxOqclBB = "GvXGaXn2aB5j09UXmsuPpGaYN7Ya9kEoIKiVVFMMgoR4hBcSnFXn3BoCURYDXvgx"
		const uintCk6YH7M = BigInt("87")
		const WolfStakingRewardsjUi7JIY = await WolfStakingRewards.new(stringNXXtfXQ, stringxOqclBB, uintCk6YH7M, {from: accounts[3]});
		const uintsEi3hoK = BigInt("928")
		const addressu09DArt = accounts[4]
		const uintWJWrw4K = BigInt("447")
		const uintUPPLuqS = BigInt("1292")
		await WolfStakingRewardsjUi7JIY.onlyRewardsDistribution.call({from: accounts[5]});
		const addressvPnZP9N = await WolfStakingRewardsjUi7JIY.updateReward.call(addressu09DArt, uintsEi3hoK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256t6yZGTh = await WolfStakingRewardsjUi7JIY.exit.call(uintWJWrw4K, {from: accounts[0]});
		const uintzfkz80C = await WolfStakingRewardsjUi7JIY.getReward.call(uintUPPLuqS, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringaBCPRl = "YIv9swagEJ2NrfdSP2BaqNQKTvCGXJmWEQnO26B2ASlMxj2XA4uPbRBgezam86NNrpq6GoVtj6PEQSrVFtbYZJCjU1BhqNk3N"
		const stringrShztKr = "89I1RaqOLy6MJ2ovUCWBi24yQhp"
		const uintaEUr4gu = BigInt("40")
		const WolfStakingRewardshuCnaAs = await WolfStakingRewards.new(stringaBCPRl, stringrShztKr, uintaEUr4gu, {from: accounts[4]});
		const uintSGHxGNA = BigInt("845")
		const uintBj1wjWG = BigInt("1887")
		const uintBSWwhZ = BigInt("979")
		const uint256q6ZuIEk = await WolfStakingRewardshuCnaAs.getRewardForDuration.call(uintSGHxGNA, {from: accounts[3]});
		const uint256cY2doWs = await WolfStakingRewardshuCnaAs.totalSupplyPerPool.call(uintBj1wjWG, {from: accounts[0]});
		const stringNpnuD9H = await WolfStakingRewardshuCnaAs.symbol.call({from: accounts[1]});
		const uint256boPWBKl = await WolfStakingRewardshuCnaAs.lastTimeRewardApplicable.call(uintBSWwhZ, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressu67YGkY = accounts[3]
		const addressPYbla6Y = accounts[0]
		const address8XBRYg = accounts[4]
		const WolfStakingRewardszoZLO9G = await WolfStakingRewards.new(addressu67YGkY, addressPYbla6Y, address8XBRYg, {from: accounts[0]});
		const uintGk9v1Ib = BigInt("1847")
		const uintKkvrvFv = BigInt("483")
		const uintU4PWRLp = BigInt("987")
		const uintycQqB3V = BigInt("1987")
		const uintJAVIHt = BigInt("316")
//		const uint256lweyoj = await WolfStakingRewardszoZLO9G.stake.call(uintKkvrvFv, uintGk9v1Ib, {from: accounts[2]});
//		const uinttk2kuzP = await WolfStakingRewardszoZLO9G.getReward.call(uintU4PWRLp, {from: accounts[3]});
//		const uint256sdxHwe8 = await WolfStakingRewardszoZLO9G.withdraw.call(uintJAVIHt, uintycQqB3V, {from: accounts[1]});

		await expect(WolfStakingRewardszoZLO9G.stake.call(uintKkvrvFv, uintGk9v1Ib, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const address03qABX = accounts[3]
		const addressoFEcfIH = accounts[0]
		const addressBCzhfIn = accounts[4]
		const WolfStakingRewardszoZLO9G = await WolfStakingRewards.new(address03qABX, addressoFEcfIH, addressBCzhfIn, {from: accounts[0]});
		const uintjwrUr4 = BigInt("982")
		const uintVrns72X = BigInt("1987")
		const uintnoFzHKs = BigInt("316")
		const uintHAwPj24 = BigInt("1633")
		const uintWGF7fGp = BigInt("1943")
		const uintjouqpbQ = BigInt("998")
		const uinttk2kuzP = await WolfStakingRewardszoZLO9G.getReward.call(uintjwrUr4, {from: accounts[3]});
//		const uint256sdxHwe8 = await WolfStakingRewardszoZLO9G.withdraw.call(uintnoFzHKs, uintVrns72X, {from: accounts[1]});
//		const uint256Vsns9m3 = await WolfStakingRewardszoZLO9G.rewardPerToken.call(uintHAwPj24, {from: accounts[1]});
//		const uint256XCzPm4R = await WolfStakingRewardszoZLO9G.stake.call(uintjouqpbQ, uintWGF7fGp, {from: accounts[3]});

		await expect(WolfStakingRewardszoZLO9G.withdraw.call(uintnoFzHKs, uintVrns72X, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressW4WJohx = accounts[3]
		const addressOBqkKQM = accounts[0]
		const addressBtRXJao = accounts[4]
		const WolfStakingRewardszoZLO9G = await WolfStakingRewards.new(addressW4WJohx, addressOBqkKQM, addressBtRXJao, {from: accounts[0]});
		const uintccFsahR = BigInt("915")
		const uintSoyVtBq = BigInt("1622")
		const uintaqELBPD = BigInt("163")
		const uintOmqbfnw = BigInt("982")
		const uintQA60JlC = BigInt("1987")
		const uintU1x9iSa = BigInt("316")
		const uintfAxRbzg = BigInt("592")
		const uintQqdCVjv = BigInt("1621")
		const uintRBXCL6i = BigInt("1943")
		const uintqKvej8C = BigInt("998")
//		const uint2564BhBxj = await WolfStakingRewardszoZLO9G.stake.call(uintSoyVtBq, uintccFsahR, {from: accounts[4]});
//		const uint256raU4SP = await WolfStakingRewardszoZLO9G.lastTimeRewardApplicable.call(uintaqELBPD, {from: accounts[4]});
//		const uinttk2kuzP = await WolfStakingRewardszoZLO9G.getReward.call(uintOmqbfnw, {from: accounts[3]});
//		const uint256sdxHwe8 = await WolfStakingRewardszoZLO9G.withdraw.call(uintU1x9iSa, uintQA60JlC, {from: accounts[1]});
//		const uint2569zFRxM = await WolfStakingRewardszoZLO9G.getRewardForDuration.call(uintfAxRbzg, {from: accounts[2]});
//		const uint256Vsns9m3 = await WolfStakingRewardszoZLO9G.rewardPerToken.call(uintQqdCVjv, {from: accounts[1]});
//		const uint256XCzPm4R = await WolfStakingRewardszoZLO9G.stake.call(uintqKvej8C, uintRBXCL6i, {from: accounts[3]});

		await expect(WolfStakingRewardszoZLO9G.stake.call(uintSoyVtBq, uintccFsahR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringFhtMDdD = "eZBBTS7zbMqboJoS7zuhh19cmDfvF1chYJBxrFxCKHwXNMIcl2Z5SPA3wNdtSIxj1YW2kqIzSKOGxEObX62IqRlwQkv5k"
		const stringmVFl4VR = "ImsvhJNuKcuifUGqh4gjpVCfCi"
		const uintrdHFOOm = BigInt("42")
		const WolfStakingRewardsqHAxRSZ = await WolfStakingRewards.new(stringFhtMDdD, stringmVFl4VR, uintrdHFOOm, {from: accounts[3]});
		const uintRGhzScQ = BigInt("1521")
		const uintZpTJKnc = BigInt("1772")
		const uintNcIZZ6 = BigInt("345")
		const uintQGIFG6U = BigInt("1963")
		const stringvxm0AsB = await WolfStakingRewardsqHAxRSZ.name.call({from: accounts[0]});
		await WolfStakingRewardsqHAxRSZ.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const stringzEbR1JG = await WolfStakingRewardsqHAxRSZ.symbol.call({from: accounts[0]});
		const uint256arrayXhia9LL = await WolfStakingRewardsqHAxRSZ.updateNotifyRewardAmount.call(uintRGhzScQ, {from: accounts[4]});
		const uint256HCHtfv4 = await WolfStakingRewardsqHAxRSZ.stake.call(uintNcIZZ6, uintZpTJKnc, {from: accounts[4]});
		const uint2569usbbC = await WolfStakingRewardsqHAxRSZ.totalSupplyPerPool.call(uintQGIFG6U, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringoqKIo3J = "CzEg6vw3xxjBwykOQoIEmEalt"
		const stringqULkHwG = "SWfMADdvJCCqGrrDgCuWVqXCLvOcmnJbT3FKW2DOJs8SX5Q30rwW2c37BlMSKl9xaVreumJcaKx8p3pAFDcEbLEIARz1"
		const uintOuLkK0 = BigInt("211")
		const WolfStakingRewardsAhc4cDS = await WolfStakingRewards.new(stringoqKIo3J, stringqULkHwG, uintOuLkK0, {from: accounts[5]});
		const uintu9BObgq = BigInt("393")
		await WolfStakingRewardsAhc4cDS.nonReentrant.call({from: accounts[1]});
		const uint256EbFJUjg = await WolfStakingRewardsAhc4cDS.exit.call(uintu9BObgq, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwiyUfL6 = "GH9iGUPFetmqbxWDx24kr96weztKamqXJURPaOUwcsSvJtCRCTQwGK5h4"
		const stringO94zemh = "Gu3zyLfNSURQ7zUHcBUB5RT2Slt8kXpl364ckWwjwaqDrXvp9E"
		const uintQsDlIfK = BigInt("179")
		const WolfStakingRewardsY9otnVs = await WolfStakingRewards.new(stringwiyUfL6, stringO94zemh, uintQsDlIfK, {from: accounts[4]});
		const uintpdYVnEY = BigInt("126")
		const addressxYTsCwS = accounts[1]
		const uintvLn50Ir = BigInt("657")
		const uintgWzDQKe = BigInt("31")
		const uintBXynCY = BigInt("2033")
		const addressAiu8Gv = await WolfStakingRewardsY9otnVs.updateReward.call(addressxYTsCwS, uintpdYVnEY, {from: accounts[2]});
		const uintCl7x4a9 = await WolfStakingRewardsY9otnVs.getReward.call(uintvLn50Ir, {from: accounts[5]});
		const uint256J46vncw = await WolfStakingRewardsY9otnVs.stake.call(uintBXynCY, uintgWzDQKe, {from: accounts[2]});
		await WolfStakingRewardsY9otnVs.onlyRewardsDistribution.call({from: accounts[0]});
		await WolfStakingRewardsY9otnVs.nonReentrant.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLaP6JI4 = "QyPcBRcNNa49XjSddwg4gdbO1zWJ1ERw8OhKMDfMHJqcCJBWDIMkvde5viCdC"
		const stringh5WvC92 = "B5b8WrzgKDyLQHAg9kTA6n7SAWth9XssG"
		const uintpUiAbXm = BigInt("94")
		const WolfStakingRewardsmgZmT6 = await WolfStakingRewards.new(stringLaP6JI4, stringh5WvC92, uintpUiAbXm, {from: "0x0000000000000000000000000000000000000001"});
		const uintNVwxM4b = BigInt("903")
		const uintMh9GWWn = BigInt("596")
		const uintXRe444f = BigInt("414")
		const stringP2UPmWL = await WolfStakingRewardsmgZmT6.symbol.call({from: accounts[4]});
		await WolfStakingRewardsmgZmT6.onlyRewardsDistribution.call({from: accounts[3]});
		const uint2566W2gCs = await WolfStakingRewardsmgZmT6.stake.call(uintMh9GWWn, uintNVwxM4b, {from: accounts[3]});
		const uint256C8neekz = await WolfStakingRewardsmgZmT6.exit.call(uintXRe444f, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSGqiAaQ = "ypI0TAcmrMuWd8s8SeVNFXnlNbp"
		const stringVzyBJPi = "fPMWA4qaw5FtJDimujloKDWViHCI307zytKYnZPMvScy31k7YNY6"
		const uintWpLoYMO = BigInt("184")
		const WolfStakingRewardskQ2EneB = await WolfStakingRewards.new(stringSGqiAaQ, stringVzyBJPi, uintWpLoYMO, {from: accounts[3]});
		const uintdxxEY7n = BigInt("1819")
		const uintzYaaOuW = BigInt("1472")
		const uintcInF1Xl = BigInt("574")
		const uintglLDJsU = BigInt("2002")
		const uint256FG93wx = await WolfStakingRewardskQ2EneB.getRewardForDuration.call(uintdxxEY7n, {from: accounts[2]});
		const uint256cVxqaYd = await WolfStakingRewardskQ2EneB.rewardPerToken.call(uintzYaaOuW, {from: accounts[2]});
		const uint256nzTVdv = await WolfStakingRewardskQ2EneB.getRewardForDuration.call(uintcInF1Xl, {from: accounts[2]});
		await WolfStakingRewardskQ2EneB.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256nOioFNn = await WolfStakingRewardskQ2EneB.getRewardForDuration.call(uintglLDJsU, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringRvgx6xu = "gQJaGscGYh5shu15PnPziUz96edVPaRXxAcFDOHeksiGUTTkWXI18cqNOjXU6EzXf7fvkXeQkMbH1eRfKnwjozVjEge2RIYtB"
		const stringVOBMmbW = "V"
		const uintVvPmOok = BigInt("194")
		const WolfStakingRewardsml2L7Ej = await WolfStakingRewards.new(stringRvgx6xu, stringVOBMmbW, uintVvPmOok, {from: accounts[3]});
		const uintWmKLK5D = BigInt("833")
		const uintprBZvvl = BigInt("174")
		const uintwp9qyjW = BigInt("321")
		const uint256jOiKxeh = await WolfStakingRewardsml2L7Ej.lastTimeRewardApplicable.call(uintWmKLK5D, {from: accounts[3]});
		const stringVuF0Xv1 = await WolfStakingRewardsml2L7Ej.name.call({from: accounts[5]});
		const uint8K761sZC = await WolfStakingRewardsml2L7Ej.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qsj34Kt = await WolfStakingRewardsml2L7Ej.exit.call(uintprBZvvl, {from: accounts[2]});
		const uint256I2kdbsr = await WolfStakingRewardsml2L7Ej.totalSupplyPerPool.call(uintwp9qyjW, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxGGV22R = "gsfGSAVQT272L3kWBbvQLNUrqftK0PURLgnzkkPwXP47HofIaEg3InB8v5QcXdyiSf9ERYEFIEPNjUzxyTu"
		const stringYxVssqm = "7KgpbU83x3o9C0yVC8kRnx3LFllrurqss8neoUMtjtbd"
		const uintyOXWbVx = BigInt("146")
		const WolfStakingRewardsMKJLfL = await WolfStakingRewards.new(stringxGGV22R, stringYxVssqm, uintyOXWbVx, {from: accounts[1]});
		const uintQJe4KHL = BigInt("1343")
		const uintaqBNW5S = BigInt("1716")
		const uintw1xOxiJ = BigInt("1242")
		const uintpoDBpOG = BigInt("312")
		const uint256xV3w79h = await WolfStakingRewardsMKJLfL.withdrawRemainingBalance.call(uintaqBNW5S, uintQJe4KHL, {from: accounts[0]});
		await WolfStakingRewardsMKJLfL.nonReentrant.call({from: accounts[1]});
		const uint256BLWjU1z = await WolfStakingRewardsMKJLfL.withdraw.call(uintpoDBpOG, uintw1xOxiJ, {from: accounts[3]});
		await WolfStakingRewardsMKJLfL.nonReentrant.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressCTZrEiW = accounts[3]
		const addressFG5Xims = accounts[0]
		const addressFOG4zw = accounts[4]
		const WolfStakingRewardszoZLO9G = await WolfStakingRewards.new(addressCTZrEiW, addressFG5Xims, addressFOG4zw, {from: accounts[0]});
		const uintvmht8Nz = BigInt("1992")
		const addressVbTgm5j = accounts[2]
		const uintTgcMPZQ = BigInt("1508")
		const uintOAJIqEr = BigInt("0")
		const uintOx9JQZ = BigInt("29")
		const addressB4uSdN0 = accounts[3]
		const uintpPppoh7 = BigInt("2033")
		const uintlhQOYoN = BigInt("344")
		const uintOqZ9F4z = BigInt("461")
		const uint256tOyaFg = await WolfStakingRewardszoZLO9G.earned.call(addressVbTgm5j, uintvmht8Nz, {from: accounts[4]});
//		const uint256UQ6AeLG = await WolfStakingRewardszoZLO9G.withdraw.call(uintOAJIqEr, uintTgcMPZQ, {from: accounts[3]});
//		const uint256hIwJQi3 = await WolfStakingRewardszoZLO9G.balanceOfPerPool.call(addressB4uSdN0, uintOx9JQZ, {from: accounts[2]});
//		const uint256sdxHwe8 = await WolfStakingRewardszoZLO9G.withdraw.call(uintlhQOYoN, uintpPppoh7, {from: accounts[1]});
//		const uintFxT8Fou = await WolfStakingRewardszoZLO9G.getReward.call(uintOqZ9F4z, {from: accounts[2]});

		assert.equal(uint256tOyaFg, BigInt("0"))
		await expect(WolfStakingRewardszoZLO9G.withdraw.call(uintOAJIqEr, uintTgcMPZQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringVHpzbBP = "d4cyGoHzzgkI5SU"
		const stringBsOfP7r = "CiMM8VXjAQvekKkkb5Aw5B0ac8LGxB7C7b5OLvxUW2jQgN2kGrO7mIre"
		const uint7VsMkO = BigInt("9")
		const WolfStakingRewardsAudbyRD = await WolfStakingRewards.new(stringVHpzbBP, stringBsOfP7r, uint7VsMkO, {from: accounts[3]});
		const uintgQxvnzk = BigInt("591")
		const uintUFfmwp = BigInt("265")
		const uintD6fCc4S = BigInt("450")
		const uintNn45cOe = BigInt("636")
		const uintHl7ZM5h = BigInt("84")
		const uintyXjBcjH = BigInt("829")
		const uintULIHYv0 = BigInt("1642")
		const uintT8ilpm2 = BigInt("347")
		const uint256YLRoo02 = await WolfStakingRewardsAudbyRD.exit.call(uintgQxvnzk, {from: accounts[5]});
		const uintMXdfE7Y = await WolfStakingRewardsAudbyRD.getReward.call(uintUFfmwp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256T2Oaa0D = await WolfStakingRewardsAudbyRD.stake.call(uintNn45cOe, uintD6fCc4S, {from: accounts[3]});
		const uint256LXT9c08 = await WolfStakingRewardsAudbyRD.rewardPerToken.call(uintHl7ZM5h, {from: accounts[1]});
		const uint2561zNwuH = await WolfStakingRewardsAudbyRD.withdrawRemainingBalance.call(uintULIHYv0, uintyXjBcjH, {from: accounts[0]});
		const uint256arrayOdbYHIA = await WolfStakingRewardsAudbyRD.updateNotifyRewardAmount.call(uintT8ilpm2, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringD7ENvQp = "cl"
		const stringOQdSoxP = "9j2rsfAW6ICIu0f2X4c266uTIqloFNAcqkvSEX"
		const uintJNtW3D5 = BigInt("121")
		const WolfStakingRewardsOTR1QzN = await WolfStakingRewards.new(stringD7ENvQp, stringOQdSoxP, uintJNtW3D5, {from: accounts[4]});
		const uintqQphKHf = BigInt("25")
		const addresskIIShwB = accounts[3]
		const uintIJC4wO = BigInt("2021")
		const addressTXyRPyR = accounts[0]
		const uintVW7ZxH = BigInt("1424")
		const uint256OpF2Y8S = await WolfStakingRewardsOTR1QzN.earned.call(addresskIIShwB, uintqQphKHf, {from: accounts[3]});
		const uint256whktygO = await WolfStakingRewardsOTR1QzN.earned.call(addressTXyRPyR, uintIJC4wO, {from: accounts[4]});
		const uint256RHASgD2 = await WolfStakingRewardsOTR1QzN.totalSupplyPerPool.call(uintVW7ZxH, {from: accounts[1]});
		const stringqvVKekY = await WolfStakingRewardsOTR1QzN.symbol.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfeY5rX7 = "RtQntIAv9ndXlg71qdFlfGgro5vCf3DZrsLbu1V"
		const stringto9fF0a = "sI1IvT48IqtnCRQbTh3I5RtGB3WFywyxFBDp8h8wOIQP9Os8uXxnu84uNlzgTnk38LoUmZE0LxLTxX17nOe"
		const uintJBeQDTG = BigInt("35")
		const WolfStakingRewardsbi16nr = await WolfStakingRewards.new(stringfeY5rX7, stringto9fF0a, uintJBeQDTG, {from: accounts[3]});
		const uintHnlRWNP = BigInt("1601")
		const uintkcNzJsD = BigInt("1793")
		const uint256PLW8pWM = await WolfStakingRewardsbi16nr.withdraw.call(uintkcNzJsD, uintHnlRWNP, {from: accounts[2]});
		await WolfStakingRewardsbi16nr.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKX1rWBU = "JtMdvPoYl3OkhrEeDVEGyDvQI8ypIvVq1A7nGd94qsRTTSXhJwn7n1DRF518MwrXnemuEEd8nrSWfyHwOr8wMXzV16UIA"
		const stringQNnzjUY = "QQolPIN9wgqPicNEgxq2NyJK5kPlwHMlFiXnztYwgXwGI3mFM2XXXoSTKME"
		const uintoFz9go = BigInt("238")
		const WolfStakingRewardswnTzs4G = await WolfStakingRewards.new(stringKX1rWBU, stringQNnzjUY, uintoFz9go, {from: accounts[5]});
		const uintOBV7SuW = BigInt("1865")
		const addressv6j9Szp = accounts[3]
		const uinttwGXseT = BigInt("309")
		const uintyphkHq = BigInt("780")
		const uintmvIlN80 = BigInt("221")
		const address2qt3IL = await WolfStakingRewardswnTzs4G.updateReward.call(addressv6j9Szp, uintOBV7SuW, {from: accounts[1]});
		const uint256iab0hwT = await WolfStakingRewardswnTzs4G.lastTimeRewardApplicable.call(uinttwGXseT, {from: accounts[4]});
		await WolfStakingRewardswnTzs4G.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256fHoozRI = await WolfStakingRewardswnTzs4G.withdraw.call(uintmvIlN80, uintyphkHq, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const string2HOTgF = "NdwYsR4kOo9pmLMrIryv1iFe0q3Svo"
		const stringoFGBOv6 = "kx"
		const uintlVD75Gn = BigInt("229")
		const WolfStakingRewardsXUUp7qY = await WolfStakingRewards.new(string2HOTgF, stringoFGBOv6, uintlVD75Gn, {from: accounts[4]});
		const uintjVuVaHH = BigInt("1983")
		const addressoKfzw8q = accounts[1]
		const uintcdHnNgS = BigInt("18")
		const addressMDn5cBr = accounts[0]
		const uintUMyFMx = BigInt("475")
		const addressn1UOl0w = await WolfStakingRewardsXUUp7qY.updateReward.call(addressoKfzw8q, uintjVuVaHH, {from: accounts[2]});
		await WolfStakingRewardsXUUp7qY.nonReentrant.call({from: accounts[4]});
		const uint256iOXhtq4 = await WolfStakingRewardsXUUp7qY.earned.call(addressMDn5cBr, uintcdHnNgS, {from: accounts[2]});
		const uint256arrayWh9Wavo = await WolfStakingRewardsXUUp7qY.updateNotifyRewardAmount.call(uintUMyFMx, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringAOqQqx7 = "NmdShLTei7tOQIj43pQLN7mexeMJLm1Vpv6NO2qM81mP28NI5Bb2PdT"
		const stringkAVx83a = "rIkSFykRnlzwUgXk1Bv2sDqMxI5M3VovMhcL"
		const uintoBJv9p0 = BigInt("109")
		const WolfStakingRewards16NGB9 = await WolfStakingRewards.new(stringAOqQqx7, stringkAVx83a, uintoBJv9p0, {from: accounts[0]});
		const uintVoTEQJ6 = BigInt("458")
		const uintk7akNx = BigInt("64")
		const uintAQP7Ffq = BigInt("1309")
		const uintNy2QMhg = BigInt("104")
		const uintiMWjHbl = BigInt("1544")
		const uint256D0N1Dhc = await WolfStakingRewards16NGB9.getRewardForDuration.call(uintVoTEQJ6, {from: accounts[4]});
		const uint256PqqhOp = await WolfStakingRewards16NGB9.stake.call(uintAQP7Ffq, uintk7akNx, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iNCZa9b = await WolfStakingRewards16NGB9.getRewardForDuration.call(uintNy2QMhg, {from: accounts[0]});
		const stringiHiGfgo = await WolfStakingRewards16NGB9.symbol.call({from: accounts[4]});
		const uint256RGis6DM = await WolfStakingRewards16NGB9.lastTimeRewardApplicable.call(uintiMWjHbl, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringEOpLGz5 = "2viwYEjW1pA96w8eughc85wlJm9mUh428xO3s"
		const stringB9B4dso = "c5X9VJluUTw"
		const uintBVQJvJ3 = BigInt("42")
		const WolfStakingRewardsreYm4fm = await WolfStakingRewards.new(stringEOpLGz5, stringB9B4dso, uintBVQJvJ3, {from: accounts[0]});
		const uinthkkpmcx = BigInt("246")
		const uintjsrF27C = BigInt("1977")
		const uintnkRKs3z = BigInt("2034")
		const addressx1npoyX = accounts[2]
		const uinteeHVc67 = BigInt("1616")
		const uintep8KESA = BigInt("1955")
		const uinti72PGw7 = BigInt("1860")
		const stringigGpH8k = await WolfStakingRewardsreYm4fm.symbol.call({from: accounts[3]});
		const uint256eGFVVo3 = await WolfStakingRewardsreYm4fm.withdrawRemainingBalance.call(uintjsrF27C, uinthkkpmcx, {from: accounts[5]});
		await WolfStakingRewardsreYm4fm.onlyOwner.call({from: accounts[0]});
		const addresslySB7P = await WolfStakingRewardsreYm4fm.updateReward.call(addressx1npoyX, uintnkRKs3z, {from: accounts[2]});
		const uint256Rt7l6oj = await WolfStakingRewardsreYm4fm.stake.call(uintep8KESA, uinteeHVc67, {from: accounts[3]});
		const uint256npSlIXC = await WolfStakingRewardsreYm4fm.rewardPerToken.call(uinti72PGw7, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringgLD1fbJ = "dX3BMLfqyrNl6fxY"
		const stringz2XWLcd = "2jsWpzXH1wCQgmWEtKJk3ukBIbE9FF6uKiwlprIdvtwAFC5Ym228joov83MIkXkwNSWJDN2VM98ocsYOPIQSWy8DMYASd"
		const uintIz2PbK1 = BigInt("10")
		const WolfStakingRewardsYZO5UB5 = await WolfStakingRewards.new(stringgLD1fbJ, stringz2XWLcd, uintIz2PbK1, {from: accounts[3]});
		const uintXLEq9nW = BigInt("1550")
		const uintDJCZKrO = BigInt("204")
		const uintCwExDd = BigInt("1796")
		const uintjMNZqrH = BigInt("1708")
		const uintbil34V = await WolfStakingRewardsYZO5UB5.getReward.call(uintXLEq9nW, {from: accounts[0]});
		const uint256cViI8wH = await WolfStakingRewardsYZO5UB5.getRewardForDuration.call(uintDJCZKrO, {from: accounts[0]});
		await WolfStakingRewardsYZO5UB5.nonReentrant.call({from: accounts[2]});
		const uintLhevTYS = await WolfStakingRewardsYZO5UB5.getReward.call(uintCwExDd, {from: accounts[2]});
		const uint256tLWY7GG = await WolfStakingRewardsYZO5UB5.lastTimeRewardApplicable.call(uintjMNZqrH, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUhSCfT9 = "8lSFUzMYQlOuhEuf"
		const stringjZWMzSf = "uwFxnYjyCfhHuFL3ktFuUKkLd"
		const uintqme3HbU = BigInt("138")
		const WolfStakingRewardsCfHYoxn = await WolfStakingRewards.new(stringUhSCfT9, stringjZWMzSf, uintqme3HbU, {from: accounts[3]});
		const uintsr57xfE = BigInt("1689")
		const uintFf3kJ46 = BigInt("810")
		const uintcKlnFU1 = BigInt("675")
		const uinthGKZtLd = BigInt("1264")
		const uintg6dHBfC = BigInt("1377")
		const uintH77VfS8 = await WolfStakingRewardsCfHYoxn.getReward.call(uintsr57xfE, {from: accounts[4]});
		const uint256OutPyz7 = await WolfStakingRewardsCfHYoxn.stake.call(uintcKlnFU1, uintFf3kJ46, {from: accounts[0]});
		const stringnHWoupl = await WolfStakingRewardsCfHYoxn.symbol.call({from: accounts[2]});
		const uint256lAdhQRE = await WolfStakingRewardsCfHYoxn.lastTimeRewardApplicable.call(uinthGKZtLd, {from: accounts[2]});
		await WolfStakingRewardsCfHYoxn.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256TNj6x7 = await WolfStakingRewardsCfHYoxn.totalSupplyPerPool.call(uintg6dHBfC, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringetyJ3jY = "JAvn8DqtYFLDjSpJbasJdCj6RvZhq8AqQdtntCESb2xdDno26hCJBT3LdriPFn3vGvKRIlk7R3x"
		const stringMYFWcGs = "pc2xpJduSxJ1E9tS1HBkC1gb5oP2j7swQu87Kd0CNUCfr4nQsKotDibQed4HhPNxo0hm16re8"
		const uintw0XpYfn = BigInt("106")
		const WolfStakingRewardsCMGi81 = await WolfStakingRewards.new(stringetyJ3jY, stringMYFWcGs, uintw0XpYfn, {from: accounts[0]});
		const uintAh994bT = BigInt("1425")
		const uintTxSRWEW = BigInt("1476")
		const uintnG3xI38 = BigInt("1275")
		const uintgBcxH9e = BigInt("699")
		const uintxnhSBqr = BigInt("700")
		const uintJerTHS = BigInt("1405")
		const uint256AglEADz = await WolfStakingRewardsCMGi81.withdraw.call(uintTxSRWEW, uintAh994bT, {from: accounts[3]});
		const uint256nkEacZk = await WolfStakingRewardsCMGi81.rewardPerToken.call(uintnG3xI38, {from: accounts[1]});
		const uint256GaEqfTX = await WolfStakingRewardsCMGi81.withdraw.call(uintxnhSBqr, uintgBcxH9e, {from: accounts[0]});
		const uint256O45FAYu = await WolfStakingRewardsCMGi81.exit.call(uintJerTHS, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnBRNOxO = "uKhaxWhGCDPxGCrtfohB3hEPW9hdkTPoeRy"
		const stringHaAuwBI = "Kq98nbvHElOnGjoYIzO"
		const uinttj0AvxR = BigInt("182")
		const WolfStakingRewardsxj2qQ33 = await WolfStakingRewards.new(stringnBRNOxO, stringHaAuwBI, uinttj0AvxR, {from: accounts[1]});
		const uintzd0lnbQ = BigInt("1738")
		const uintauxVrIb = BigInt("1325")
		const uintyYPbqKK = await WolfStakingRewardsxj2qQ33.getReward.call(uintzd0lnbQ, {from: accounts[2]});
		const uint256Po4hSni = await WolfStakingRewardsxj2qQ33.exit.call(uintauxVrIb, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringc3xFQX = "oYyFnXRUwgOZ1oiRFeykyJL2koHElJ"
		const stringQZ2aLXf = "1wV2iQFtCpwHTB5ymmAipak5mgSChszjiLJom4NIDuT"
		const uintYRhruZN = BigInt("40")
		const WolfStakingRewardssg8h8qo = await WolfStakingRewards.new(stringc3xFQX, stringQZ2aLXf, uintYRhruZN, {from: accounts[0]});
		const uintR8clNLH = BigInt("1702")
		const uintVOyeQay = BigInt("1381")
		const addressncTOmBS = accounts[5]
		const uintc34Qs9Z = BigInt("146")
		const uintuDR01bX = BigInt("789")
		const uintfajm0p1 = BigInt("538")
		const uint256FbayD7R = await WolfStakingRewardssg8h8qo.getRewardForDuration.call(uintR8clNLH, {from: accounts[4]});
		const uint256CR41YcY = await WolfStakingRewardssg8h8qo.balanceOfPerPool.call(addressncTOmBS, uintVOyeQay, {from: accounts[5]});
		const uint256xzHLBD = await WolfStakingRewardssg8h8qo.lastTimeRewardApplicable.call(uintc34Qs9Z, {from: accounts[1]});
		const uintmh9q5LR = await WolfStakingRewardssg8h8qo.getReward.call(uintuDR01bX, {from: accounts[4]});
		const uint256qAz64st = await WolfStakingRewardssg8h8qo.getRewardForDuration.call(uintfajm0p1, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnTQNnu4 = "iNizLqkNk0ekfrEMk6"
		const stringkJh2Jo = "f6XoDTk8aEqYAN"
		const uintjr5ev8i = BigInt("134")
		const WolfStakingRewardshOG1THi = await WolfStakingRewards.new(stringnTQNnu4, stringkJh2Jo, uintjr5ev8i, {from: accounts[2]});
		const uint2RlQ1y = BigInt("1082")
		const uintxVnikZl = BigInt("600")
		const uint256jimKGzb = await WolfStakingRewardshOG1THi.withdrawRemainingBalance.call(uintxVnikZl, uint2RlQ1y, {from: accounts[1]});
		const stringxULwmnh = await WolfStakingRewardshOG1THi.symbol.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFgF3bSi = "dtsCpEfqeT8uaoNFHzoBGi5geNbAbCDnForTlnmrGS8jA87GBd3jsCM5xonRzKxG0J6GyjirDM"
		const stringmkb5vnu = "UxAqGUNznCefLiaN4Q4kehKq4bAs4mIO0cySW10aKcRUxi9GR8nJ83lnTXN4ol11qV0qMNjO6xh"
		const uintWlAmASe = BigInt("34")
		const WolfStakingRewardspkiGyU = await WolfStakingRewards.new(stringFgF3bSi, stringmkb5vnu, uintWlAmASe, {from: accounts[2]});
		const uintCzuVLAm = BigInt("993")
		const uintNvaEwd = BigInt("63")
		const uint256LcT6vXf = await WolfStakingRewardspkiGyU.exit.call(uintCzuVLAm, {from: accounts[0]});
		const stringRjbiMv4 = await WolfStakingRewardspkiGyU.symbol.call({from: accounts[0]});
		await WolfStakingRewardspkiGyU.onlyOwner.call({from: accounts[3]});
		const uint256jyMs8BL = await WolfStakingRewardspkiGyU.lastTimeRewardApplicable.call(uintNvaEwd, {from: accounts[3]});
		await WolfStakingRewardspkiGyU.onlyOwner.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYZw1F8Q = "8qcoeL2baozQ2pWKbhZ6YXJoxJ"
		const stringP4ODoa4 = "rEhoAJoem"
		const uintX4RVVLa = BigInt("70")
		const WolfStakingRewardsruaw6ZS = await WolfStakingRewards.new(stringYZw1F8Q, stringP4ODoa4, uintX4RVVLa, {from: accounts[4]});
		const uintaS6okmK = BigInt("685")
		const uintyEUu8KI = BigInt("1756")
		const addresszt7n6nP = accounts[3]
		const uintUfi7nB2 = BigInt("171")
		const uintOMIvuzF = BigInt("1308")
		const uintTTF1cS5 = BigInt("598")
		const uintYMpteP7 = BigInt("1506")
		const uintAruUiI = BigInt("1823")
		const uint256dYcWOaH = await WolfStakingRewardsruaw6ZS.getRewardForDuration.call(uintaS6okmK, {from: accounts[2]});
		const address7akHs7 = await WolfStakingRewardsruaw6ZS.updateReward.call(addresszt7n6nP, uintyEUu8KI, {from: accounts[1]});
		const uint256nJiQCfP = await WolfStakingRewardsruaw6ZS.getRewardForDuration.call(uintUfi7nB2, {from: accounts[4]});
		const uint256vm5Irtw = await WolfStakingRewardsruaw6ZS.stake.call(uintTTF1cS5, uintOMIvuzF, {from: "0x0000000000000000000000000000000000000001"});
		const uint2568hNwal = await WolfStakingRewardsruaw6ZS.withdraw.call(uintAruUiI, uintYMpteP7, {from: accounts[5]});
		const uint8tGLCmpB = await WolfStakingRewardsruaw6ZS.decimals.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfgX8ILY = "JRnp8P8WhHYkHVzS0R3Vr1gJDq8QlrGoYWOZ2Fk1Fc7V4d7qs"
		const stringsEP7SU = "ebOfV8tltG6COkLCQDKGmuYn4Ovj4JUgod63T4R2XKusPlNj4mEFooMJ"
		const uintj2DmbPS = BigInt("236")
		const WolfStakingRewardsSQpjndA = await WolfStakingRewards.new(stringfgX8ILY, stringsEP7SU, uintj2DmbPS, {from: accounts[2]});
		const uintdw0Doud = BigInt("1352")
		await WolfStakingRewardsSQpjndA.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8clVirTx = await WolfStakingRewardsSQpjndA.decimals.call({from: accounts[3]});
		const uint256arrayElWzz1w = await WolfStakingRewardsSQpjndA.updateNotifyRewardAmount.call(uintdw0Doud, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIOdgmdJ = "1vRzrz0kQEq4gEqzdF1XK8XLLY4qBambw4BRLmZPAF4kLb7TQSSj6a3lqhGVOpj5Ngy27TRJtHsD4XfQYUTeckyc5b8uVisi"
		const stringD4RStN8 = "k5mEOiCKFlE3cuvC65PSY6lkGNLfBgJnYVUqxgn42izEoXdw5HYsfIyfH0lwCwCs9sbSft8ZhLf1PCY2e4ca7l6HIKZQ5YW"
		const uintNzyZzFh = BigInt("59")
		const WolfStakingRewardsfeuPQP3 = await WolfStakingRewards.new(stringIOdgmdJ, stringD4RStN8, uintNzyZzFh, {from: accounts[2]});
		const uintXWbWXCr = BigInt("555")
		const uintPrgF0MP = BigInt("1786")
		const uintPQagOF = BigInt("1585")
		const uintOzW1haq = BigInt("1915")
		const uintAmdeEPH = BigInt("1475")
		const addressk7RB2pP = accounts[3]
		const uint256qnW8qj = await WolfStakingRewardsfeuPQP3.lastTimeRewardApplicable.call(uintXWbWXCr, {from: accounts[4]});
		const uintA3BQxg = await WolfStakingRewardsfeuPQP3.getReward.call(uintPrgF0MP, {from: accounts[0]});
		const uint256i31aoj9 = await WolfStakingRewardsfeuPQP3.stake.call(uintOzW1haq, uintPQagOF, {from: accounts[0]});
		const addressTv6iJXK = await WolfStakingRewardsfeuPQP3.updateReward.call(addressk7RB2pP, uintAmdeEPH, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const string1mlizE = "7gx3GzKXISeYEaLuNMqWzDeQJOgCGOXOkBXmCJ64wg6"
		const stringwmD8FM = "gp4mXqGF34vcozxUfjqVjiLUKEq2n"
		const uintCjZYwZL = BigInt("182")
		const WolfStakingRewardsRspQ69F = await WolfStakingRewards.new(string1mlizE, stringwmD8FM, uintCjZYwZL, {from: accounts[0]});
		const uintCgTJVDT = BigInt("130")
		const uintmMwVjx = BigInt("556")
		const addressRlCMZAl = accounts[0]
		const uintPegAmdo = BigInt("740")
		const addressijPNLbA = "0x0000000000000000000000000000000000000001"
		const uintO4rkCad = BigInt("1455")
		const uint256PvArnmS = await WolfStakingRewardsRspQ69F.rewardPerToken.call(uintCgTJVDT, {from: accounts[5]});
		const uint2568HBFqv = await WolfStakingRewardsRspQ69F.earned.call(addressRlCMZAl, uintmMwVjx, {from: accounts[1]});
		const addressk8v0V1q = await WolfStakingRewardsRspQ69F.updateReward.call(addressijPNLbA, uintPegAmdo, {from: accounts[1]});
		const uintbzc2cFw = await WolfStakingRewardsRspQ69F.getReward.call(uintO4rkCad, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIMGc55o = "4knTqxh8UBscbkm12MJfdpMVAj6LVP6By"
		const string5x85Cs = "qrfeWXcyloOAQolVf7zW8bH8"
		const uint9iHxOi = BigInt("179")
		const WolfStakingRewardsEdc051D = await WolfStakingRewards.new(stringIMGc55o, string5x85Cs, uint9iHxOi, {from: accounts[2]});
		const uintj2VfAG9 = BigInt("896")
		const addressEHb5Wj0 = accounts[0]
		const uintFjgj2vg = BigInt("477")
		const addressXNu43xo = accounts[3]
		const uintkeeh67P = BigInt("92")
		const uintkMxTZuV = BigInt("29")
		const stringyX8Sj5r = await WolfStakingRewardsEdc051D.symbol.call({from: accounts[2]});
		const addressAd5X3ga = await WolfStakingRewardsEdc051D.updateReward.call(addressEHb5Wj0, uintj2VfAG9, {from: accounts[0]});
		const uint256GzxT5k = await WolfStakingRewardsEdc051D.balanceOfPerPool.call(addressXNu43xo, uintFjgj2vg, {from: accounts[2]});
		const uint256jihPX1Z = await WolfStakingRewardsEdc051D.stake.call(uintkMxTZuV, uintkeeh67P, {from: accounts[0]});
		await WolfStakingRewardsEdc051D.nonReentrant.call({from: accounts[1]});
	});
})