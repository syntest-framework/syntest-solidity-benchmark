const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressiZkM2C = accounts[4]
		const addressmjY5cPa = accounts[2]
		const addresshAM16D1 = accounts[0]
		const WolfStakingRewardscUE6rPf = await WolfStakingRewards.new(addressiZkM2C, addressmjY5cPa, addresshAM16D1, {from: accounts[4]});
		const uintigZZEN1 = BigInt("1500")
		const uintA0yMuFM = BigInt("46")
		const addressaP3oak = accounts[0]
		const uinte2Do9do = BigInt("1126")
		const uintQjM62Fu = BigInt("1822")
		const uintORgPQxZ = await WolfStakingRewardscUE6rPf.getReward.call(uintigZZEN1, {from: accounts[4]});
		const uint256zuLzlCP = await WolfStakingRewardscUE6rPf.balanceOfPerPool.call(addressaP3oak, uintA0yMuFM, {from: accounts[1]});
//		const uint256YZ4mF9O = await WolfStakingRewardscUE6rPf.exit.call(uinte2Do9do, {from: accounts[1]});
//		const uint256arrayAVrWJ04 = await WolfStakingRewardscUE6rPf.updateNotifyRewardAmount.call(uintQjM62Fu, {from: "0x0000000000000000000000000000000000000001"});
//		await WolfStakingRewardscUE6rPf.nonReentrant.call({from: accounts[0]});

		assert.equal(uint256zuLzlCP, BigInt("0"))
		await expect(WolfStakingRewardscUE6rPf.exit.call(uinte2Do9do, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringY5U833V = "LIzGRwLs80dehV"
		const stringeMZgNVd = ""
		const uintbJMbjwl = BigInt("54")
		const WolfStakingRewardsNcb4wtI = await WolfStakingRewards.new(stringY5U833V, stringeMZgNVd, uintbJMbjwl, {from: accounts[3]});
		const uint4KEgVc = BigInt("277")
		const uintofexVai = BigInt("1221")
		const addressAko99cP = accounts[4]
		const uintAwfPTgL = BigInt("726")
		const uintvh7qiu = BigInt("483")
		const uintIMChILY = BigInt("1994")
		const uintlts21Tc = BigInt("529")
		await WolfStakingRewardsNcb4wtI.nonReentrant.call({from: accounts[5]});
		const uint256wD7MUAb = await WolfStakingRewardsNcb4wtI.getRewardForDuration.call(uint4KEgVc, {from: "0x0000000000000000000000000000000000000001"});
		const addressASpOmID = await WolfStakingRewardsNcb4wtI.updateReward.call(addressAko99cP, uintofexVai, {from: accounts[2]});
		const uint256rU2zbhh = await WolfStakingRewardsNcb4wtI.withdraw.call(uintvh7qiu, uintAwfPTgL, {from: accounts[4]});
		const uint256B3WOJMQ = await WolfStakingRewardsNcb4wtI.getRewardForDuration.call(uintIMChILY, {from: accounts[4]});
		const uint256arrayz8yUoB0 = await WolfStakingRewardsNcb4wtI.updateNotifyRewardAmount.call(uintlts21Tc, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressiOUX1JK = accounts[2]
		const addressBNcQkGz = accounts[0]
		const addressjsT9gMc = accounts[4]
		const WolfStakingRewardsIl3gelg = await WolfStakingRewards.new(addressiOUX1JK, addressBNcQkGz, addressjsT9gMc, {from: accounts[5]});
		const uint8d0Xvq = BigInt("1285")
		const addressCBj1RY8 = accounts[5]
//		await WolfStakingRewardsIl3gelg.onlyRewardsDistribution.call({from: accounts[1]});
//		const uint8NSZmRf = await WolfStakingRewardsIl3gelg.decimals.call({from: accounts[2]});
//		await WolfStakingRewardsIl3gelg.onlyRewardsDistribution.call({from: accounts[3]});
//		const addressKytoIW = await WolfStakingRewardsIl3gelg.updateReward.call(addressCBj1RY8, uint8d0Xvq, {from: accounts[3]});

		await expect(WolfStakingRewardsIl3gelg.onlyRewardsDistribution.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringIkDZSwk = "Ieyvu10B7ZXjVc6mftxfvtssCQf9eWBYb7f7LOHaClQrxzFp7CHG41U4lLf6TSArLrXkAU2"
		const stringDd5dVlJ = "seCOErQ"
		const uintnYBou1V = BigInt("194")
		const WolfStakingRewardsk1EeSDk = await WolfStakingRewards.new(stringIkDZSwk, stringDd5dVlJ, uintnYBou1V, {from: accounts[5]});
		const uintqV1x9k1 = BigInt("994")
		const uintJ68Gxz = BigInt("1589")
		const uintbmg1IIx = BigInt("1453")
		const addressdRtefQO = accounts[4]
		const uint256FzE61T = await WolfStakingRewardsk1EeSDk.lastTimeRewardApplicable.call(uintqV1x9k1, {from: accounts[2]});
		const uint256yaSUKJ5 = await WolfStakingRewardsk1EeSDk.totalSupplyPerPool.call(uintJ68Gxz, {from: accounts[4]});
		const uint8PSFWbKQ = await WolfStakingRewardsk1EeSDk.decimals.call({from: accounts[3]});
		const uint256K61iEaj = await WolfStakingRewardsk1EeSDk.earned.call(addressdRtefQO, uintbmg1IIx, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addresszmnOytP = accounts[0]
		const addressaN2kmTo = accounts[5]
		const addressa1iUgYr = accounts[4]
		const WolfStakingRewardsFh5l9fV = await WolfStakingRewards.new(addresszmnOytP, addressaN2kmTo, addressa1iUgYr, {from: accounts[0]});
		const uintwtsYK4Y = BigInt("586")
		const uintSk2kWi = BigInt("1307")
		const uintTae3RQn = BigInt("1266")
		const uintLTCUPKq = BigInt("1267")
		const addressyxUYDax = accounts[2]
		const uintfcX1d6W = BigInt("1895")
		const uint256jfMWJ4 = await WolfStakingRewardsFh5l9fV.lastTimeRewardApplicable.call(uintwtsYK4Y, {from: accounts[2]});
//		const uint256noBJFhs = await WolfStakingRewardsFh5l9fV.withdrawRemainingBalance.call(uintTae3RQn, uintSk2kWi, {from: accounts[0]});
//		const uint256xTa7HLu = await WolfStakingRewardsFh5l9fV.earned.call(addressyxUYDax, uintLTCUPKq, {from: accounts[4]});
//		await WolfStakingRewardsFh5l9fV.onlyOwner.call({from: accounts[3]});
//		const uint256qLja6ee = await WolfStakingRewardsFh5l9fV.totalSupplyPerPool.call(uintfcX1d6W, {from: accounts[3]});

		assert.equal(uint256jfMWJ4, BigInt("0"))
		await expect(WolfStakingRewardsFh5l9fV.withdrawRemainingBalance.call(uintTae3RQn, uintSk2kWi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresswpVZyMF = "0x0000000000000000000000000000000000000001"
		const addressikiyUow = accounts[5]
		const addressJZMwKhK = accounts[4]
		const WolfStakingRewardsMdqx0GU = await WolfStakingRewards.new(addresswpVZyMF, addressikiyUow, addressJZMwKhK, {from: accounts[1]});
		const uintAXzXtH7 = BigInt("847")
		const uintKzG1Kc = BigInt("1387")
		const uintt5lJs7N = BigInt("829")
		const uintojS7yv = BigInt("938")
		const uintXoH50kP = BigInt("1105")
//		const uint256pqe8SD4 = await WolfStakingRewardsMdqx0GU.withdraw.call(uintKzG1Kc, uintAXzXtH7, {from: accounts[2]});
//		await WolfStakingRewardsMdqx0GU.nonReentrant.call({from: accounts[1]});
//		const uint256K8m2KZv = await WolfStakingRewardsMdqx0GU.withdrawRemainingBalance.call(uintojS7yv, uintt5lJs7N, {from: accounts[0]});
//		await WolfStakingRewardsMdqx0GU.onlyOwner.call({from: accounts[1]});
//		const uintfj6569g = await WolfStakingRewardsMdqx0GU.getReward.call(uintXoH50kP, {from: accounts[0]});

		await expect(WolfStakingRewardsMdqx0GU.withdraw.call(uintKzG1Kc, uintAXzXtH7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressmHTHRbF = accounts[3]
		const address5y7Wje = accounts[2]
		const addressskJyQL = accounts[2]
		const WolfStakingRewardsWybsT0t = await WolfStakingRewards.new(addressmHTHRbF, address5y7Wje, addressskJyQL, {from: "0x0000000000000000000000000000000000000001"});
		const uintpkP2xl8 = BigInt("1720")
		const addressGtSiqOd = accounts[5]
		const uintyP2KIT = BigInt("861")
		const uintX6wcqI7 = BigInt("900")
		const uint256AKZOd6j = await WolfStakingRewardsWybsT0t.balanceOfPerPool.call(addressGtSiqOd, uintpkP2xl8, {from: accounts[2]});
		const uint256pKKqLI8 = await WolfStakingRewardsWybsT0t.lastTimeRewardApplicable.call(uintyP2KIT, {from: accounts[1]});
		const uint1gj9pf = await WolfStakingRewardsWybsT0t.getReward.call(uintX6wcqI7, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringqJfDy4 = "A24esSrO8dDe8JDR8aWBXbWyTsgvWEpF9TzjNS1UJViNoKxHEwD954J8xvp3LgQbzqiCSsWk9R"
		const stringMuaYhmZ = "XIbOD9AIGtowq9DFEtoJGae19l"
		const uintRySBdq6 = BigInt("64")
		const WolfStakingRewardsqpijaET = await WolfStakingRewards.new(stringqJfDy4, stringMuaYhmZ, uintRySBdq6, {from: accounts[5]});
		const uintDqZEH0i = BigInt("188")
		const uintTkUMCvo = BigInt("1975")
		const uintWSVxq5z = BigInt("1448")
		const uint256xziBLOP = await WolfStakingRewardsqpijaET.rewardPerToken.call(uintDqZEH0i, {from: accounts[2]});
		const uintxXiW8bB = await WolfStakingRewardsqpijaET.getReward.call(uintTkUMCvo, {from: accounts[3]});
		const uint256MTZDZ7 = await WolfStakingRewardsqpijaET.exit.call(uintWSVxq5z, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressVzATesJ = accounts[4]
		const addressMUTMJb = accounts[2]
		const addressK3mDZlW = accounts[0]
		const WolfStakingRewardscUE6rPf = await WolfStakingRewards.new(addressVzATesJ, addressMUTMJb, addressK3mDZlW, {from: accounts[4]});
		const uintk1xqAY9 = BigInt("1500")
		const uintER3rTZq = BigInt("46")
		const addressKNv5Dk = accounts[0]
		const uintVI0wkPJ = BigInt("1126")
		const uintWMr75oq = BigInt("378")
		const addressFhgiht = accounts[0]
		const uintsGHfCq0 = BigInt("266")
		const uintEVI5EPf = BigInt("1460")
		const uintsflKx9u = BigInt("1827")
		const uintORgPQxZ = await WolfStakingRewardscUE6rPf.getReward.call(uintk1xqAY9, {from: accounts[4]});
		const uint256zuLzlCP = await WolfStakingRewardscUE6rPf.balanceOfPerPool.call(addressKNv5Dk, uintER3rTZq, {from: accounts[1]});
//		const uint256YZ4mF9O = await WolfStakingRewardscUE6rPf.exit.call(uintVI0wkPJ, {from: accounts[1]});
//		const uint256WATzB0P = await WolfStakingRewardscUE6rPf.balanceOfPerPool.call(addressFhgiht, uintWMr75oq, {from: accounts[3]});
//		const uint256l4otCyV = await WolfStakingRewardscUE6rPf.stake.call(uintEVI5EPf, uintsGHfCq0, {from: accounts[3]});
//		const uint256arrayAVrWJ04 = await WolfStakingRewardscUE6rPf.updateNotifyRewardAmount.call(uintsflKx9u, {from: "0x0000000000000000000000000000000000000001"});
//		await WolfStakingRewardscUE6rPf.nonReentrant.call({from: accounts[0]});

		assert.equal(uint256zuLzlCP, BigInt("0"))
		await expect(WolfStakingRewardscUE6rPf.exit.call(uintVI0wkPJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringcRlG4l = "YFkdD1hPBKl3nYVCmYGjBq8hNctg5u9o1GnXIW5wUPeLOlAVPazvMLQI3SPvlBxHQ3T1kcbseSyL9JpIqU3x503m0TGnMdN5C"
		const stringpO5GEI = "ofNDueSBsOaaiWF"
		const uintihoasdU = BigInt("199")
		const WolfStakingRewardsDvU4Ksk = await WolfStakingRewards.new(stringcRlG4l, stringpO5GEI, uintihoasdU, {from: accounts[1]});
		const uintBFZ5URp = BigInt("741")
		const uintYouJLaf = BigInt("1177")
		const uintQjq4tk6 = BigInt("93")
		const stringQnUN6PT = await WolfStakingRewardsDvU4Ksk.symbol.call({from: accounts[2]});
		const stringqpaEoat = await WolfStakingRewardsDvU4Ksk.symbol.call({from: accounts[1]});
		const uint256NeRl8Mc = await WolfStakingRewardsDvU4Ksk.exit.call(uintBFZ5URp, {from: accounts[2]});
		const uint256KCY8HW = await WolfStakingRewardsDvU4Ksk.stake.call(uintQjq4tk6, uintYouJLaf, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressp9Xzs7 = accounts[5]
		const addressAVA3hNr = accounts[5]
		const address8MGLml = accounts[1]
		const WolfStakingRewardsao0ojZ = await WolfStakingRewards.new(addressp9Xzs7, addressAVA3hNr, address8MGLml, {from: accounts[1]});
		const uintLwSBQFW = BigInt("910")
		const uinthn9oLQ2 = BigInt("40")
		const uint256cbUl2sf = await WolfStakingRewardsao0ojZ.lastTimeRewardApplicable.call(uintLwSBQFW, {from: accounts[2]});
		const uint256wGFKkpG = await WolfStakingRewardsao0ojZ.totalSupplyPerPool.call(uinthn9oLQ2, {from: accounts[0]});
//		const stringUVMACnp = await WolfStakingRewardsao0ojZ.symbol.call({from: accounts[5]});

		assert.equal(uint256cbUl2sf, BigInt("0"))
		assert.equal(uint256wGFKkpG, BigInt("0"))
		await expect(WolfStakingRewardsao0ojZ.symbol.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringJxDQBrO = "62SIhnETBlfF4ZhnJdF9o9J04Fhu4j2NpDCRuBy29KUkd"
		const stringIpjcQ6W = "OKL2bgOfUQmmqycu52"
		const uintyvp0sbq = BigInt("124")
		const WolfStakingRewardsyLDukkD = await WolfStakingRewards.new(stringJxDQBrO, stringIpjcQ6W, uintyvp0sbq, {from: accounts[1]});
		const uintUG51rSR = BigInt("985")
		const uintVfezte = BigInt("462")
		const uintDItoM7a = BigInt("728")
		const uint256PFrjWP3 = await WolfStakingRewardsyLDukkD.lastTimeRewardApplicable.call(uintUG51rSR, {from: accounts[1]});
		const uint8EZNFXc2 = await WolfStakingRewardsyLDukkD.decimals.call({from: accounts[3]});
		const uintSN4fu7R = await WolfStakingRewardsyLDukkD.getReward.call(uintVfezte, {from: accounts[1]});
		const uint256arrayYoWSi00 = await WolfStakingRewardsyLDukkD.updateNotifyRewardAmount.call(uintDItoM7a, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressP7385B4 = accounts[5]
		const addressIqVMAn = accounts[5]
		const address17NTBO = accounts[1]
		const WolfStakingRewardsao0ojZ = await WolfStakingRewards.new(addressP7385B4, addressIqVMAn, address17NTBO, {from: accounts[1]});
		const uintf3AI9Pa = BigInt("1510")
		const uintKjPML29 = BigInt("1379")
		const uintc4gTZyg = BigInt("680")
		const uintc5Hw37n = BigInt("653")
		const addressTmF2Q8b = accounts[4]
		const uintck3FWZE = BigInt("573")
		const addressFSJdb2e = accounts[1]
//		const uint256U3ZXKY = await WolfStakingRewardsao0ojZ.withdraw.call(uintKjPML29, uintf3AI9Pa, {from: accounts[1]});
//		const uintJKjhff6 = await WolfStakingRewardsao0ojZ.getReward.call(uintc4gTZyg, {from: accounts[0]});
//		await WolfStakingRewardsao0ojZ.onlyRewardsDistribution.call({from: accounts[3]});
//		const uint256sLoH3yN = await WolfStakingRewardsao0ojZ.earned.call(addressTmF2Q8b, uintc5Hw37n, {from: accounts[3]});
//		const uint256grXHypD = await WolfStakingRewardsao0ojZ.earned.call(addressFSJdb2e, uintck3FWZE, {from: accounts[0]});

		await expect(WolfStakingRewardsao0ojZ.withdraw.call(uintKjPML29, uintf3AI9Pa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressdl0PTxu = accounts[5]
		const addressxhiCbIB = accounts[5]
		const addresseR8bnIP = accounts[1]
		const WolfStakingRewardsao0ojZ = await WolfStakingRewards.new(addressdl0PTxu, addressxhiCbIB, addresseR8bnIP, {from: accounts[1]});
		const uintIQae71v = BigInt("1557")
		const uintaQG4o0I = BigInt("1518")
		const uintTiSSQFl = BigInt("341")
		const uintjmiXqRe = BigInt("612")
		const uint256cbUl2sf = await WolfStakingRewardsao0ojZ.lastTimeRewardApplicable.call(uintIQae71v, {from: accounts[2]});
		const uint256wGL0KgY = await WolfStakingRewardsao0ojZ.totalSupplyPerPool.call(uintaQG4o0I, {from: accounts[1]});
//		const uint256qnvRzRH = await WolfStakingRewardsao0ojZ.withdrawRemainingBalance.call(uintjmiXqRe, uintTiSSQFl, {from: accounts[0]});
//		const stringUVMACnp = await WolfStakingRewardsao0ojZ.symbol.call({from: accounts[5]});

		assert.equal(uint256cbUl2sf, BigInt("0"))
		assert.equal(uint256wGL0KgY, BigInt("0"))
		await expect(WolfStakingRewardsao0ojZ.withdrawRemainingBalance.call(uintjmiXqRe, uintTiSSQFl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressroZ54uJ = accounts[5]
		const addressGu4GRBt = accounts[5]
		const addressAtRw46W = accounts[1]
		const WolfStakingRewardsao0ojZ = await WolfStakingRewards.new(addressroZ54uJ, addressGu4GRBt, addressAtRw46W, {from: accounts[1]});
		const uintT6fWacY = BigInt("1802")
		const uintms6zVCp = BigInt("910")
//		const uint256eomtEw = await WolfStakingRewardsao0ojZ.getRewardForDuration.call(uintT6fWacY, {from: "0x0000000000000000000000000000000000000001"});
//		await WolfStakingRewardsao0ojZ.nonReentrant.call({from: accounts[2]});
//		const uint256cbUl2sf = await WolfStakingRewardsao0ojZ.lastTimeRewardApplicable.call(uintms6zVCp, {from: accounts[2]});

		await expect(WolfStakingRewardsao0ojZ.getRewardForDuration.call(uintT6fWacY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringiEchYeE = "JVheTr2nbqyzeV4e7N805wYUPLCDZsOiPX1BKPjY12CDmqIYSN4mkIJFO8XyIgmhev6bnYCbCpE2qIQwJBS"
		const stringtZ1kyDL = "z63YvpqkTIsxUsx7J1uARoksSUHP6GSaXy"
		const uintxWp1Unu = BigInt("22")
		const WolfStakingRewardsKzjoxr3 = await WolfStakingRewards.new(stringiEchYeE, stringtZ1kyDL, uintxWp1Unu, {from: accounts[1]});
		const uintXO0mmBm = BigInt("1217")
		const uintjACUSA7 = BigInt("1913")
		const uintwnjeBwE = BigInt("655")
		const uint256IfOr1t = await WolfStakingRewardsKzjoxr3.rewardPerToken.call(uintXO0mmBm, {from: accounts[1]});
		const uint256cPyiv9E = await WolfStakingRewardsKzjoxr3.rewardPerToken.call(uintjACUSA7, {from: accounts[1]});
		const stringndpNgwz = await WolfStakingRewardsKzjoxr3.name.call({from: accounts[4]});
		const uint256d977X3C = await WolfStakingRewardsKzjoxr3.exit.call(uintwnjeBwE, {from: accounts[0]});
		const uint8n1HhV2I = await WolfStakingRewardsKzjoxr3.decimals.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIBXKB3H = "UskNcaGj83oKlCQCzZsMIj8eVxlyJDeal6mVtEOg97rU142LO2WeMZq5PMzBT66xJXxPfGiW7gZs7vkYeCrubUzG5KS9pM5w"
		const stringRM16q3h = "W6iWuiBNODjkKt5sLX3oPM3g7YR8qqMzmtTXMliDNaJASbXsBlNRC1dADmMU4wK1PXjCnCPWEmS91"
		const uintHfZPn6V = BigInt("51")
		const WolfStakingRewardsSVfhQLw = await WolfStakingRewards.new(stringIBXKB3H, stringRM16q3h, uintHfZPn6V, {from: accounts[2]});
		const uintXU26k5f = BigInt("840")
		const uintnnM6gEo = BigInt("568")
		const addressYvju1SL = "0x0000000000000000000000000000000000000001"
		const uintGrY8iJP = BigInt("368")
		const uintiAqCrF = BigInt("8")
		const uintYtYtxyv = BigInt("404")
		const addresshToUw6j = accounts[0]
		const uint8Z8kM8Lg = await WolfStakingRewardsSVfhQLw.decimals.call({from: accounts[4]});
		const uint256enONIt = await WolfStakingRewardsSVfhQLw.exit.call(uintXU26k5f, {from: accounts[2]});
		const stringLjhtVZS = await WolfStakingRewardsSVfhQLw.symbol.call({from: accounts[0]});
		const uint2569OrVCk = await WolfStakingRewardsSVfhQLw.balanceOfPerPool.call(addressYvju1SL, uintnnM6gEo, {from: accounts[1]});
		const uint256TdJv4Za = await WolfStakingRewardsSVfhQLw.withdraw.call(uintiAqCrF, uintGrY8iJP, {from: accounts[1]});
		const addressEu18SfF = await WolfStakingRewardsSVfhQLw.updateReward.call(addresshToUw6j, uintYtYtxyv, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringF26tQG8 = "E1iqERCnMXXcboIyFq"
		const stringgwWE9qF = "VjffBER34"
		const uintHvrlWnz = BigInt("18")
		const WolfStakingRewardsfp7q51T = await WolfStakingRewards.new(stringF26tQG8, stringgwWE9qF, uintHvrlWnz, {from: accounts[3]});
		const uintFBwqG51 = BigInt("1693")
		const uintPLqe6C = BigInt("1772")
		const addressOJbubR4 = "0x0000000000000000000000000000000000000001"
		const uintueUPLy = BigInt("1412")
		const uintEJc8NxB = BigInt("478")
		const uintx6OXe0E = BigInt("1492")
		const uintJndUwAF = BigInt("1181")
		const uint256arrayFWVyzas = await WolfStakingRewardsfp7q51T.updateNotifyRewardAmount.call(uintFBwqG51, {from: accounts[1]});
		const uint256bPMSXBi = await WolfStakingRewardsfp7q51T.balanceOfPerPool.call(addressOJbubR4, uintPLqe6C, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NS5oWG4 = await WolfStakingRewardsfp7q51T.withdraw.call(uintEJc8NxB, uintueUPLy, {from: accounts[3]});
		const uint256arrayUriUopg = await WolfStakingRewardsfp7q51T.updateNotifyRewardAmount.call(uintx6OXe0E, {from: "0x0000000000000000000000000000000000000001"});
		const uint2560oF5jC = await WolfStakingRewardsfp7q51T.rewardPerToken.call(uintJndUwAF, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressAhzuyo4 = accounts[5]
		const addressOJ0jwua = accounts[5]
		const addressrl8TbEw = accounts[1]
		const WolfStakingRewardsao0ojZ = await WolfStakingRewards.new(addressAhzuyo4, addressOJ0jwua, addressrl8TbEw, {from: accounts[1]});
		const uintnzIvmTb = BigInt("883")
		const uintQpCzrG5 = BigInt("1299")
		const uintoVfIXW = BigInt("948")
//		const uint256rgePTJb = await WolfStakingRewardsao0ojZ.stake.call(uintQpCzrG5, uintnzIvmTb, {from: accounts[3]});
//		const uint256cbUl2sf = await WolfStakingRewardsao0ojZ.lastTimeRewardApplicable.call(uintoVfIXW, {from: accounts[2]});

		await expect(WolfStakingRewardsao0ojZ.stake.call(uintQpCzrG5, uintnzIvmTb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresswpcsxpN = accounts[5]
		const addressebqQLxv = accounts[5]
		const addressKtbyr2 = accounts[1]
		const WolfStakingRewardsao0ojZ = await WolfStakingRewards.new(addresswpcsxpN, addressebqQLxv, addressKtbyr2, {from: accounts[1]});
		const uintggJT1kw = BigInt("1570")
		const uintOqS9jnm = BigInt("1462")
		const uint256oBWfiHx = await WolfStakingRewardsao0ojZ.lastTimeRewardApplicable.call(uintggJT1kw, {from: accounts[1]});
		const uintJKjhff6 = await WolfStakingRewardsao0ojZ.getReward.call(uintOqS9jnm, {from: accounts[0]});

		assert.equal(uint256oBWfiHx, BigInt("0"))
	});

	it('test for WolfStakingRewards', async () => {
		const addressWoHZkLP = accounts[5]
		const addressVvjDKaK = accounts[5]
		const addressUtPeMXC = accounts[1]
		const WolfStakingRewardsao0ojZ = await WolfStakingRewards.new(addressWoHZkLP, addressVvjDKaK, addressUtPeMXC, {from: accounts[1]});
		const uintnfjuklW = BigInt("1612")
		const uintaPvsfOO = BigInt("1299")
		const uintPh0c6np = BigInt("6")
//		const uint256rgePTJb = await WolfStakingRewardsao0ojZ.stake.call(uintaPvsfOO, uintnfjuklW, {from: accounts[3]});
//		const uint256jkSvaQl = await WolfStakingRewardsao0ojZ.getRewardForDuration.call(uintPh0c6np, {from: accounts[4]});

		await expect(WolfStakingRewardsao0ojZ.stake.call(uintaPvsfOO, uintnfjuklW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringhn4bLgh = "9NlZzWhhV"
		const stringjVC1yRl = "vb2gAtjseIll4TS029J0jpumqC2TAGdo7"
		const uintwccPio = BigInt("84")
		const WolfStakingRewardssP6SuEs = await WolfStakingRewards.new(stringhn4bLgh, stringjVC1yRl, uintwccPio, {from: accounts[1]});
		const uintjVznmZ = BigInt("1090")
		const uintec66HgA = BigInt("776")
		const uintBs8iGjs = BigInt("433")
		const addressCcwDsZi = accounts[2]
		const uintgLAmPN = await WolfStakingRewardssP6SuEs.getReward.call(uintjVznmZ, {from: accounts[1]});
		const uint256ZcnVOCo = await WolfStakingRewardssP6SuEs.getRewardForDuration.call(uintec66HgA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xe5AqH = await WolfStakingRewardssP6SuEs.earned.call(addressCcwDsZi, uintBs8iGjs, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYprMBET = "sziL2oMcQpz6iyHlsX3GIKwcf4b8zc"
		const stringVSMVj5Y = "kAVpfLA554Gbty5mbqqn"
		const uintOzTdzCy = BigInt("243")
		const WolfStakingRewardsmHjnZ2D = await WolfStakingRewards.new(stringYprMBET, stringVSMVj5Y, uintOzTdzCy, {from: accounts[1]});
		const uintFJO9zae = BigInt("190")
		const addressbpoxA9s = accounts[1]
		const uintJ1o9bZD = BigInt("1564")
		const uintokbm8X2 = BigInt("1215")
		await WolfStakingRewardsmHjnZ2D.nonReentrant.call({from: accounts[2]});
		const uint256wku81b1 = await WolfStakingRewardsmHjnZ2D.balanceOfPerPool.call(addressbpoxA9s, uintFJO9zae, {from: accounts[4]});
		const uint256ZtoHmvr = await WolfStakingRewardsmHjnZ2D.exit.call(uintJ1o9bZD, {from: accounts[3]});
		const uintg9JKHeM = await WolfStakingRewardsmHjnZ2D.getReward.call(uintokbm8X2, {from: accounts[0]});
		await WolfStakingRewardsmHjnZ2D.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringovt6pP5 = "kczL65Sp7VcLjWMHQIwp4uvQlisCXtFZeqxp850tLjNmBvgGKVm40BvuCUmT53shicRJyBnobLxOozeNkM44"
		const stringvNTApEj = "NOxMhdtfmWku"
		const uintGsHasaY = BigInt("207")
		const WolfStakingRewardstL18Dre = await WolfStakingRewards.new(stringovt6pP5, stringvNTApEj, uintGsHasaY, {from: accounts[3]});
		const uintLZ6q884 = BigInt("75")
		const addressX9Izjc = accounts[1]
		const uintjvYmRB3 = BigInt("594")
		const uintetMqoTU = BigInt("1299")
		const uint256SlDQDAL = await WolfStakingRewardstL18Dre.earned.call(addressX9Izjc, uintLZ6q884, {from: accounts[3]});
		const uint256VfhNkuY = await WolfStakingRewardstL18Dre.rewardPerToken.call(uintjvYmRB3, {from: accounts[3]});
		await WolfStakingRewardstL18Dre.nonReentrant.call({from: accounts[2]});
		const uint256SKxpjuK = await WolfStakingRewardstL18Dre.rewardPerToken.call(uintetMqoTU, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressZD7ubte = accounts[5]
		const addressYcGKA6t = accounts[5]
		const addressvYVBf7r = accounts[1]
		const WolfStakingRewardsao0ojZ = await WolfStakingRewards.new(addressZD7ubte, addressYcGKA6t, addressvYVBf7r, {from: accounts[1]});
		const uintYD19kZ = BigInt("1513")
		const uinttixsJ5h = BigInt("776")
		const uintFQvcX41 = BigInt("667")
//		const uint256arraykp920UE = await WolfStakingRewardsao0ojZ.updateNotifyRewardAmount.call(uintYD19kZ, {from: accounts[2]});
//		const uint256eN5vDRA = await WolfStakingRewardsao0ojZ.exit.call(uinttixsJ5h, {from: accounts[4]});
//		const uintJKjhff6 = await WolfStakingRewardsao0ojZ.getReward.call(uintFQvcX41, {from: accounts[0]});

		await expect(WolfStakingRewardsao0ojZ.updateNotifyRewardAmount.call(uintYD19kZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringCslWIkO = "mlJ9ueZ6CmNMxaY3I1BmxzSbzO87SUPQnGdvc5BY02otpwQAkG11uizrqEmVMQRq7tooFFJ83qPsO3P8zt7NzF2yDeVezVL"
		const stringUrmCcIa = "jZl"
		const uintSBVoez1 = BigInt("218")
		const WolfStakingRewardsLHsBDnk = await WolfStakingRewards.new(stringCslWIkO, stringUrmCcIa, uintSBVoez1, {from: accounts[3]});
		const uintojgNfmM = BigInt("155")
		const addressnPFZamt = accounts[2]
		const uintZZICX2q = BigInt("876")
		const uintIiRlvPH = BigInt("1954")
		const addressCv4Tm6U = await WolfStakingRewardsLHsBDnk.updateReward.call(addressnPFZamt, uintojgNfmM, {from: accounts[2]});
		const uint256xgZew62 = await WolfStakingRewardsLHsBDnk.totalSupplyPerPool.call(uintZZICX2q, {from: accounts[1]});
		await WolfStakingRewardsLHsBDnk.nonReentrant.call({from: accounts[3]});
		const uint256soSJlJR = await WolfStakingRewardsLHsBDnk.lastTimeRewardApplicable.call(uintIiRlvPH, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringv3CZ9SN = "Xqky1TAzP36hKpy2lPSDs88D2cork8JiruT1EIW"
		const stringtlYBFD = "1vyLbk7bgTqS6Fwgp"
		const uintrj1lgr = BigInt("25")
		const WolfStakingRewardsgBedyNk = await WolfStakingRewards.new(stringv3CZ9SN, stringtlYBFD, uintrj1lgr, {from: accounts[2]});
		const uintELg3Tc2 = BigInt("1904")
		const uintb7aUVoV = BigInt("1519")
		const uintNypuTX = BigInt("1166")
		const addressfoRK9u6 = accounts[2]
		const uintNHe9rnM = await WolfStakingRewardsgBedyNk.getReward.call(uintELg3Tc2, {from: accounts[0]});
		const uint256golxdiy = await WolfStakingRewardsgBedyNk.rewardPerToken.call(uintb7aUVoV, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsgBedyNk.nonReentrant.call({from: accounts[3]});
		const addressv4nVCwF = await WolfStakingRewardsgBedyNk.updateReward.call(addressfoRK9u6, uintNypuTX, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringpoCEL3V = "cnt7327TfTVBwkpezvpiWegAspZSloW4P2ga"
		const stringEYOnMJK = "eVSdH5s54nD"
		const uintSozI7q6 = BigInt("46")
		const WolfStakingRewardsiAlSTSc = await WolfStakingRewards.new(stringpoCEL3V, stringEYOnMJK, uintSozI7q6, {from: accounts[1]});
		const uintGrFzgIa = BigInt("192")
		const uintMpuhNEm = BigInt("1426")
		const uintypZlfOG = BigInt("888")
		const uintg0Z7RL2 = BigInt("1652")
		const uint256kW6C8rE = await WolfStakingRewardsiAlSTSc.withdraw.call(uintMpuhNEm, uintGrFzgIa, {from: accounts[3]});
		const uint256KzBJ9D = await WolfStakingRewardsiAlSTSc.totalSupplyPerPool.call(uintypZlfOG, {from: accounts[2]});
		const uint256XWMe7SG = await WolfStakingRewardsiAlSTSc.totalSupplyPerPool.call(uintg0Z7RL2, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringCE2avGw = "mcYw5ivzI7s1aihLAmE0Kjs1xNr0prWCELbuPbXRUCmtPGRAw457SDNUC5HEwz"
		const stringI5s5Sq3 = "FZeseKgkM0l6bITzspJNq6r0ED0PFbCvrl2p2NwCqfWOQj7GJt0Xs77Vtn3vWs8qiU46shzmKET32wU7B7JOF6TexbSUi"
		const uintOzaPkC = BigInt("20")
		const WolfStakingRewardsbKahF3w = await WolfStakingRewards.new(stringCE2avGw, stringI5s5Sq3, uintOzaPkC, {from: accounts[5]});
		const uintC25a8A8 = BigInt("2019")
		const addressvBWderf = accounts[2]
		const uintDdMZgY = BigInt("1512")
		const addresslDgv3ag = accounts[0]
		const uintRK1mV9u = BigInt("801")
		const uintlk9a3T = BigInt("517")
		const uintA52uNq = BigInt("1579")
		const uint256RZBTpS = await WolfStakingRewardsbKahF3w.balanceOfPerPool.call(addressvBWderf, uintC25a8A8, {from: accounts[5]});
		const stringu7kczQl = await WolfStakingRewardsbKahF3w.symbol.call({from: accounts[3]});
		const uint256qVNqlml = await WolfStakingRewardsbKahF3w.earned.call(addresslDgv3ag, uintDdMZgY, {from: accounts[1]});
		const uintvY7bIx = await WolfStakingRewardsbKahF3w.getReward.call(uintRK1mV9u, {from: accounts[2]});
		await WolfStakingRewardsbKahF3w.onlyOwner.call({from: accounts[1]});
		const uint256u8HKls = await WolfStakingRewardsbKahF3w.withdrawRemainingBalance.call(uintA52uNq, uintlk9a3T, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringgQOuPbm = "HFAsb8d8kouMxuezvC8q7oo3RfoRplqm30cI386YXesGczRsJWQOqX3J24kDDHIJbN53oSRe"
		const stringkwLOeYX = "o7ogebEikNimcvWTSmSFpwh8LkdnaAnoKQosKqAPUHNsFzluz7mWcXaQQojofOyXY"
		const uinthGAmBBV = BigInt("157")
		const WolfStakingRewardsDGxnNHl = await WolfStakingRewards.new(stringgQOuPbm, stringkwLOeYX, uinthGAmBBV, {from: "0x0000000000000000000000000000000000000001"});
		const uintGQMlraf = BigInt("507")
		const uinthHYL5l = BigInt("1748")
		const uintqNgbJS9 = BigInt("128")
		const uintn3HDIun = BigInt("1154")
		const uint256dZq3j9 = await WolfStakingRewardsDGxnNHl.totalSupplyPerPool.call(uintGQMlraf, {from: accounts[2]});
		const uint256JNPEv8k = await WolfStakingRewardsDGxnNHl.getRewardForDuration.call(uinthHYL5l, {from: accounts[4]});
		const uint256t8JF2Np = await WolfStakingRewardsDGxnNHl.totalSupplyPerPool.call(uintqNgbJS9, {from: accounts[0]});
		await WolfStakingRewardsDGxnNHl.nonReentrant.call({from: accounts[0]});
		const stringGlKIfGb = await WolfStakingRewardsDGxnNHl.name.call({from: accounts[4]});
		const uintNriEfWo = await WolfStakingRewardsDGxnNHl.getReward.call(uintn3HDIun, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYLKNX7k = "TJuwkN5JDehMMghm1huJq5uWRMCuGpWwQwcRy5wOikHBHraUUyjjs98eCuskwzYgXz6WR7pjtw55H2Li86ndCIf"
		const stringT6zbdvk = "njFe6vrMMtog4SCcW2cN7rAwp6SBcjzBF6Ogde5xDyqxZgwWFfgMQIKfL21tQs533oXEbs69h6WK1SeAANPis"
		const uintL7a6sof = BigInt("79")
		const WolfStakingRewardssP0oH6 = await WolfStakingRewards.new(stringYLKNX7k, stringT6zbdvk, uintL7a6sof, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardssP0oH6.onlyRewardsDistribution.call({from: accounts[0]});
		await WolfStakingRewardssP0oH6.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const stringN0ql8Nd = await WolfStakingRewardssP0oH6.name.call({from: accounts[1]});
		const stringpTJ4023 = await WolfStakingRewardssP0oH6.name.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQHeP4ig = "NRfTzE9vV753aOlqaNz"
		const stringTHFtR4U = "RtnWyjiOExduZdBY0C3hBUqJddxKjO9ekexOv3yt655g9F6OJoLjQvz7bnjEvCbcuXHklD"
		const uintPsGOxP = BigInt("68")
		const WolfStakingRewardsicirI2 = await WolfStakingRewards.new(stringQHeP4ig, stringTHFtR4U, uintPsGOxP, {from: accounts[1]});
		const uintCbubE9I = BigInt("425")
		const uintktKj2Mw = BigInt("77")
		const uinta3MkqCr = BigInt("1939")
		const uintGGGXJm4 = BigInt("1971")
		const uint256arrayDPHTG5b = await WolfStakingRewardsicirI2.updateNotifyRewardAmount.call(uintCbubE9I, {from: accounts[4]});
		const uint256mmhpJCB = await WolfStakingRewardsicirI2.withdraw.call(uinta3MkqCr, uintktKj2Mw, {from: accounts[3]});
		const uint256NFFxFKG = await WolfStakingRewardsicirI2.totalSupplyPerPool.call(uintGGGXJm4, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const string08Dtve = "AZqPm4xT6QuyqfoDwIXcaGObpQscwJGZKpoiWbsfvWk82pX0cRRN42i4PSP2EYgv1QDP3jImiDrdLGYZM4RMDgq"
		const stringqNHzDWV = "WN3oAmVpE5iCYdJibju9B6Pjw"
		const uintzvemZX = BigInt("69")
		const WolfStakingRewardsMPuSPua = await WolfStakingRewards.new(string08Dtve, stringqNHzDWV, uintzvemZX, {from: accounts[0]});
		const uintArdfa6S = BigInt("725")
		const uintTYxJtni = BigInt("1885")
		const uint256NdScUmk = await WolfStakingRewardsMPuSPua.lastTimeRewardApplicable.call(uintArdfa6S, {from: accounts[2]});
		const uint256arrayleKHHOt = await WolfStakingRewardsMPuSPua.updateNotifyRewardAmount.call(uintTYxJtni, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIjY3Ss = "eLf2FE8dzFgEF0BJHbFOBuv"
		const stringrr94I3U = "jOl3aksFgmGza5JiUD1hvxBp2wi5ftQU62j2nlA1Q7aKifYRqctqxjsnpwvQFL1v4VNSq53q3IlWUAJbqcVvwQvRBjXzEKTg2p"
		const uintJVy0a0d = BigInt("90")
		const WolfStakingRewardshT3b4a9 = await WolfStakingRewards.new(stringIjY3Ss, stringrr94I3U, uintJVy0a0d, {from: accounts[1]});
		const uintdlkCLPE = BigInt("78")
		const uintMOCBS3p = BigInt("956")
		const addressSnslJtN = accounts[1]
		const uint8w7YalBI = await WolfStakingRewardshT3b4a9.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringBTbezW = await WolfStakingRewardshT3b4a9.symbol.call({from: accounts[5]});
		const uintK2udPE7 = await WolfStakingRewardshT3b4a9.getReward.call(uintdlkCLPE, {from: accounts[0]});
		const uint256B1CPios = await WolfStakingRewardshT3b4a9.balanceOfPerPool.call(addressSnslJtN, uintMOCBS3p, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYkEQVf = "qBPhh5UP4ZtUqnRh"
		const string9uTDAR = "XI1CwLSdU5J1POV9tplW1qMmX"
		const uintKLVJNZP = BigInt("52")
		const WolfStakingRewardssG3mwPM = await WolfStakingRewards.new(stringYkEQVf, string9uTDAR, uintKLVJNZP, {from: accounts[4]});
		const uintxlS1WCO = BigInt("48")
		const uintVgjxsZ3 = BigInt("1227")
		const uintpKj31Pm = BigInt("1952")
		const uint256kiGABMI = await WolfStakingRewardssG3mwPM.totalSupplyPerPool.call(uintxlS1WCO, {from: accounts[0]});
		const stringbY1FGaa = await WolfStakingRewardssG3mwPM.name.call({from: accounts[2]});
		const uint256J8n2ux = await WolfStakingRewardssG3mwPM.withdrawRemainingBalance.call(uintpKj31Pm, uintVgjxsZ3, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringydlGnRh = "VV1ehKMjyTNaei8fNy"
		const stringMfXLvj = "oLyPWy1vEiVHGAbQxREMEY2gCzqf88F5BUBxz"
		const uintFIipyI = BigInt("137")
		const WolfStakingRewardsGynzdg2 = await WolfStakingRewards.new(stringydlGnRh, stringMfXLvj, uintFIipyI, {from: accounts[0]});
		const uintg7bnHbt = BigInt("397")
		const uintTYthMH = BigInt("1463")
		const uintWsLCgYe = BigInt("347")
		await WolfStakingRewardsGynzdg2.onlyOwner.call({from: accounts[4]});
		const uint256i1e7lv6 = await WolfStakingRewardsGynzdg2.totalSupplyPerPool.call(uintg7bnHbt, {from: accounts[1]});
		const uint2566HHuzF = await WolfStakingRewardsGynzdg2.stake.call(uintWsLCgYe, uintTYthMH, {from: accounts[0]});
		await WolfStakingRewardsGynzdg2.onlyRewardsDistribution.call({from: accounts[4]});
		await WolfStakingRewardsGynzdg2.nonReentrant.call({from: accounts[4]});
		const strings371vM = await WolfStakingRewardsGynzdg2.symbol.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjka8z7g = "FiLDXXYhpTCh3UBv4F5ay3kECNMvriwlysgXbf5bzAsenyUeKUKT1jrLDcq"
		const stringthSyVG = "KORNHRnJlbfvLut74AQtXUa8gOPxAmp1dyurL7iufUnYQm4CbejqpbkrXbL4stCUh1"
		const uintBCFkTtB = BigInt("168")
		const WolfStakingRewardsMnjIuz1 = await WolfStakingRewards.new(stringjka8z7g, stringthSyVG, uintBCFkTtB, {from: "0x0000000000000000000000000000000000000001"});
		const uintNJKQYYT = BigInt("1880")
		const uintykfkhVj = BigInt("688")
		const uint256NB5KCaU = await WolfStakingRewardsMnjIuz1.totalSupplyPerPool.call(uintNJKQYYT, {from: accounts[3]});
		const uintWtUjqqr = await WolfStakingRewardsMnjIuz1.getReward.call(uintykfkhVj, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUM2QS5j = "K7SeD7fPe2Zt7DIWSQcjuzNJCkl20eEmVXPslgox47vHVkrXVse9tMd9YmIWfFJrsQQr8tRfvh9cDCm1RTZxIGwyRVxgK"
		const stringVEfqKpp = "9UBdWZJo4fvWB6M"
		const uintZ5A6vWE = BigInt("61")
		const WolfStakingRewardseeWE3qN = await WolfStakingRewards.new(stringUM2QS5j, stringVEfqKpp, uintZ5A6vWE, {from: accounts[2]});
		const uintIgrpXLi = BigInt("1221")
		const addressFXuusHe = accounts[2]
		const uintzMaWRD7 = BigInt("815")
		const addresszHBfnyw = accounts[4]
		const uintrrFXveV = BigInt("1242")
		const uint256lfJWGZD = await WolfStakingRewardseeWE3qN.balanceOfPerPool.call(addressFXuusHe, uintIgrpXLi, {from: accounts[1]});
		const addressBM8JGiP = await WolfStakingRewardseeWE3qN.updateReward.call(addresszHBfnyw, uintzMaWRD7, {from: accounts[1]});
		const uint256arrayxlL7Hiw = await WolfStakingRewardseeWE3qN.updateNotifyRewardAmount.call(uintrrFXveV, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringOfqkZn = "xj6lhp6ad14Loj94HszjU3BauYq9DBWH29Q8xwl0gumHfk8jI1FcVzDHpvkFYeLjmqN"
		const stringgSZub7b = "fztyH9QRT443JQATdRFmkMKzbT"
		const uintGVWBrJ = BigInt("38")
		const WolfStakingRewardsTi8Wst7 = await WolfStakingRewards.new(stringOfqkZn, stringgSZub7b, uintGVWBrJ, {from: accounts[3]});
		const uintgzQGbqF = BigInt("53")
		const uintLeDJuP = BigInt("1618")
		const uint8BnXHLTH = await WolfStakingRewardsTi8Wst7.decimals.call({from: accounts[2]});
		const uint256arraybHBGGTP = await WolfStakingRewardsTi8Wst7.updateNotifyRewardAmount.call(uintgzQGbqF, {from: accounts[2]});
		const uint8GN5RZAK = await WolfStakingRewardsTi8Wst7.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsTi8Wst7.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256YgVE1Z = await WolfStakingRewardsTi8Wst7.totalSupplyPerPool.call(uintLeDJuP, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhjU5bS = "GJEWMwtnOe9lYOMYU52Z7k3ICRRf5b616CQISmnJM2vLTrpJuMaBPrAkvD7ItlMR2tSqvP"
		const stringWl9Ky0 = "sc6ncbNoT3P1iio3nRwMlQUotEn6LTVnJ3KkHlbomKuUMIpN8nPiZCiZguQttC"
		const uintRFn8O7o = BigInt("149")
		const WolfStakingRewardsHBCQgKY = await WolfStakingRewards.new(stringhjU5bS, stringWl9Ky0, uintRFn8O7o, {from: accounts[1]});
		const uintCTYLroU = BigInt("1214")
		const uintvgVeQl5 = BigInt("655")
		const uintr3oKyM7 = BigInt("829")
		const uint256M4pId7y = await WolfStakingRewardsHBCQgKY.rewardPerToken.call(uintCTYLroU, {from: accounts[2]});
		const uint256NrzFd0J = await WolfStakingRewardsHBCQgKY.withdrawRemainingBalance.call(uintr3oKyM7, uintvgVeQl5, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringekb26tB = "ntXx34xKHXfC4JcDRiWSQ1T2FOmybsJz43w0BT6sGTGFIJQVSIpHzb2iHIxwBSbup"
		const stringkR6tdb5 = "CfYhPYP"
		const uintkM1wN4k = BigInt("83")
		const WolfStakingRewardsuLcoB3h = await WolfStakingRewards.new(stringekb26tB, stringkR6tdb5, uintkM1wN4k, {from: accounts[2]});
		const uintSve1ucI = BigInt("1834")
		const uintsc3aBkY = BigInt("1527")
		const uintIOQMITq = BigInt("981")
		const uinttlE5dv = BigInt("524")
		await WolfStakingRewardsuLcoB3h.nonReentrant.call({from: accounts[2]});
		const uint256uOKnnes = await WolfStakingRewardsuLcoB3h.stake.call(uintsc3aBkY, uintSve1ucI, {from: accounts[1]});
		const uint256l7gwidE = await WolfStakingRewardsuLcoB3h.withdraw.call(uinttlE5dv, uintIOQMITq, {from: accounts[3]});
		await WolfStakingRewardsuLcoB3h.nonReentrant.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXqOiGvs = "gHzSA5rALTGRkS4w3sX1kwtM2jwQ4Drlc"
		const stringAMnY73 = "1gtVAM1lhXoy4nLNMkNrFEHwRBFsxEfcIBmn8ptweGBeNRFwBBIHUicugisY"
		const uintX4JqRAd = BigInt("19")
		const WolfStakingRewardsfVmqCsl = await WolfStakingRewards.new(stringXqOiGvs, stringAMnY73, uintX4JqRAd, {from: accounts[0]});
		const uintIZOp0cc = BigInt("346")
		const uintUST1lvJ = BigInt("840")
		const uintJ0fojvS = BigInt("863")
		const addresskSRHxq = accounts[1]
		const uintxkDKnvm = BigInt("397")
		const uint256QyedlXc = await WolfStakingRewardsfVmqCsl.rewardPerToken.call(uintIZOp0cc, {from: accounts[0]});
		await WolfStakingRewardsfVmqCsl.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsfVmqCsl.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256JU1vg1 = await WolfStakingRewardsfVmqCsl.getRewardForDuration.call(uintUST1lvJ, {from: accounts[2]});
		const addressqY1Uxae = await WolfStakingRewardsfVmqCsl.updateReward.call(addresskSRHxq, uintJ0fojvS, {from: accounts[4]});
		const uint256unJbYTB = await WolfStakingRewardsfVmqCsl.lastTimeRewardApplicable.call(uintxkDKnvm, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringb9JoVv = "gKpblR6ULvFmQu6MgOVlR2e8gDembp7tKtuLazT4G2D6Rb14JHU9tuxe8ROeRyTKUxjcyc8l"
		const stringV6IGWZA = "CzAi3Dxx9zXVShq9OkKMwCyaODv8LHk9eMFd3MI1mYvUU7T2ZLQh6cUsRlyhBxRINIxJNFwbWtQOawqzD00ubYPxX1OrM1OAH"
		const uintUeOoGw = BigInt("30")
		const WolfStakingRewardsvX5mONM = await WolfStakingRewards.new(stringb9JoVv, stringV6IGWZA, uintUeOoGw, {from: accounts[1]});
		const uintnm08xzZ = BigInt("1846")
		const uintrSOitmV = BigInt("73")
		const uintPMzX6ld = await WolfStakingRewardsvX5mONM.getReward.call(uintnm08xzZ, {from: accounts[0]});
		const uint256PQMgxhn = await WolfStakingRewardsvX5mONM.exit.call(uintrSOitmV, {from: accounts[2]});
		const uint8jSsUKU3 = await WolfStakingRewardsvX5mONM.decimals.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZmuXOC = "GTcVGtg2kqbPkyEqNnhLwzE5kMjkLxykRBEkEfjaNqXWl6EzjTVdw4qarYHQOeSxqSDz5m4MoJRO54fHpmh6a5OE6"
		const stringtPl9LKA = "7YsaiMJiQBQBFTzeATsoetakANac"
		const uintJIr2Far = BigInt("25")
		const WolfStakingRewardsH3x7I4Z = await WolfStakingRewards.new(stringZmuXOC, stringtPl9LKA, uintJIr2Far, {from: accounts[1]});
		const uintPwuGiTB = BigInt("1660")
		const uintvR87rGs = BigInt("288")
		const uintUnqO8qt = BigInt("1120")
		await WolfStakingRewardsH3x7I4Z.onlyRewardsDistribution.call({from: accounts[4]});
		const stringb1i2Mc8 = await WolfStakingRewardsH3x7I4Z.name.call({from: accounts[3]});
		const uint256ci1LXsO = await WolfStakingRewardsH3x7I4Z.withdraw.call(uintvR87rGs, uintPwuGiTB, {from: accounts[4]});
		const uint256wViRwTR = await WolfStakingRewardsH3x7I4Z.rewardPerToken.call(uintUnqO8qt, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwY2AqY9 = "c3TInlUxONfqrexF2QKHFQbjhwowWY7TP9JwylxVTFK4uBUmb4FaHVWhA1RVuMBaNKYmCeb7FN8j7pUdvc7g6VHFgPiupo3"
		const stringqdXuKAD = "NDMiIF"
		const uintKwAyrqw = BigInt("215")
		const WolfStakingRewardsdJKXK0J = await WolfStakingRewards.new(stringwY2AqY9, stringqdXuKAD, uintKwAyrqw, {from: "0x0000000000000000000000000000000000000001"});
		const uintNMJBB8s = BigInt("507")
		const uintaMEQnp = BigInt("345")
		const uintY6MvpLV = BigInt("1450")
		const uintOriXTtP = BigInt("613")
		const uintZVxDhUL = BigInt("1130")
		const addressVg3Te2l = accounts[0]
		const uintXz6RKhh = BigInt("1025")
		const uintXwmGOJn = BigInt("1434")
		const addressjiFQEQH = accounts[4]
		const uint256yCsEPB6 = await WolfStakingRewardsdJKXK0J.lastTimeRewardApplicable.call(uintNMJBB8s, {from: accounts[4]});
		const uint256suLicPI = await WolfStakingRewardsdJKXK0J.exit.call(uintaMEQnp, {from: accounts[5]});
		const uint256zghz6Y4 = await WolfStakingRewardsdJKXK0J.withdrawRemainingBalance.call(uintOriXTtP, uintY6MvpLV, {from: accounts[3]});
		const uint256OM60NHu = await WolfStakingRewardsdJKXK0J.balanceOfPerPool.call(addressVg3Te2l, uintZVxDhUL, {from: accounts[1]});
		const uint256arraydDLllf = await WolfStakingRewardsdJKXK0J.updateNotifyRewardAmount.call(uintXz6RKhh, {from: accounts[3]});
		const uint256oya4Rwt = await WolfStakingRewardsdJKXK0J.earned.call(addressjiFQEQH, uintXwmGOJn, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYHCOJok = "xy34gNIMkjJGRaeDgqleWwG37PmCck3CmLSnsHi2Tm6dkhp4HyLfSZ6yP9EQQKjMpETUCF5Qw9LVBpJSP"
		const stringVWBU1L = "q1yseRg46xPsKf9L1TIqWZZ54K44bAp1kEBimeSTJD2CuT62FJ"
		const uintlaGVAFM = BigInt("187")
		const WolfStakingRewardse2a1k9O = await WolfStakingRewards.new(stringYHCOJok, stringVWBU1L, uintlaGVAFM, {from: accounts[0]});
		const uintPDDkKE = BigInt("6")
		const addressNeHKVQu = accounts[4]
		const uintzWeHoSi = BigInt("1585")
		const uint256DhFnuqf = await WolfStakingRewardse2a1k9O.earned.call(addressNeHKVQu, uintPDDkKE, {from: accounts[2]});
		const uint256gy0yBsG = await WolfStakingRewardse2a1k9O.getRewardForDuration.call(uintzWeHoSi, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringx4REuyk = "IMbjH1u3dHzt7vHQaYUsvGmczRCyu17TpJeo6PlHS"
		const stringbdsKidw = "KVChI0QEYs4VlkkMx"
		const uintI8ChI63 = BigInt("194")
		const WolfStakingRewardsCPJpcku = await WolfStakingRewards.new(stringx4REuyk, stringbdsKidw, uintI8ChI63, {from: accounts[5]});
		const uintcD7SWpH = BigInt("824")
		const address2GozVr = accounts[0]
		const uintu5xZfyD = BigInt("822")
		const addresshnaYXNn = accounts[3]
		await WolfStakingRewardsCPJpcku.nonReentrant.call({from: accounts[4]});
		const addressHMq9b9 = await WolfStakingRewardsCPJpcku.updateReward.call(address2GozVr, uintcD7SWpH, {from: accounts[3]});
		const stringXtO0FJD = await WolfStakingRewardsCPJpcku.symbol.call({from: accounts[5]});
		const addressdpgKD7B = await WolfStakingRewardsCPJpcku.updateReward.call(addresshnaYXNn, uintu5xZfyD, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringin056xv = "dNnWTrB6"
		const stringBPjC0RO = "1azlFWhCcKZDyt5VZGMPBbTwl5qP02gjgfeKQLuDUBve3oXsYgfMN8yCNfFIzyss6VSBI8GHbBu752VfAzweOs"
		const uintc9XMmAx = BigInt("12")
		const WolfStakingRewardsVoYch3v = await WolfStakingRewards.new(stringin056xv, stringBPjC0RO, uintc9XMmAx, {from: "0x0000000000000000000000000000000000000001"});
		const uintreGzGh4 = BigInt("84")
		const uint256yj9szuD = await WolfStakingRewardsVoYch3v.rewardPerToken.call(uintreGzGh4, {from: accounts[4]});
		const stringEowsURI = await WolfStakingRewardsVoYch3v.name.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringCNPhYEj = "wwyiyPozwTvO9J1CGuamTTqBSK2D4uNXYqR7wytQaVT5F6fv"
		const stringCDPeFD = "AnFbcLUyCMDQBCtg"
		const uintrATLRqv = BigInt("44")
		const WolfStakingRewardsGr4ycLj = await WolfStakingRewards.new(stringCNPhYEj, stringCDPeFD, uintrATLRqv, {from: accounts[2]});
		const uintgyNX2OC = BigInt("952")
		const uintgIlctXf = BigInt("994")
		const uintutVtgkK = BigInt("917")
		const uintSOPG5wB = BigInt("333")
		const uintqymdKPP = BigInt("1939")
		const uintF2HkgyE = BigInt("953")
		const uint9AUpuY = BigInt("722")
		const uint256qF3JKR4 = await WolfStakingRewardsGr4ycLj.getRewardForDuration.call(uintgyNX2OC, {from: accounts[4]});
		const uint256zlujsYW = await WolfStakingRewardsGr4ycLj.stake.call(uintutVtgkK, uintgIlctXf, {from: accounts[1]});
		const uint256KjJch3A = await WolfStakingRewardsGr4ycLj.getRewardForDuration.call(uintSOPG5wB, {from: accounts[4]});
		const uint256bLtYlYE = await WolfStakingRewardsGr4ycLj.withdrawRemainingBalance.call(uintF2HkgyE, uintqymdKPP, {from: accounts[1]});
		const uint256arrayHvhrXxT = await WolfStakingRewardsGr4ycLj.updateNotifyRewardAmount.call(uint9AUpuY, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUz1gTCr = "HCypWy3FXP4tOm4C7F23ss5wu8OVY9zCOxLxrRHpPEb4xHuT4"
		const stringlJfarCQ = "nTSNeInjmQnsMy882lTkqwkWSOoAzoPc5tRf9svDrhEldOQiOC7DQn4"
		const uintYPJCspX = BigInt("66")
		const WolfStakingRewardsF3JZMZi = await WolfStakingRewards.new(stringUz1gTCr, stringlJfarCQ, uintYPJCspX, {from: accounts[5]});
		const uintOSUdh3B = BigInt("40")
		const uintHGsPkLY = BigInt("870")
		const uintfhtVx92 = BigInt("640")
		const addressk0jY1T4 = accounts[2]
		const stringcdqCO8 = await WolfStakingRewardsF3JZMZi.symbol.call({from: accounts[3]});
		const uint256WMqxZhx = await WolfStakingRewardsF3JZMZi.getRewardForDuration.call(uintOSUdh3B, {from: accounts[1]});
		await WolfStakingRewardsF3JZMZi.nonReentrant.call({from: accounts[4]});
		const uint256dXaviiB = await WolfStakingRewardsF3JZMZi.rewardPerToken.call(uintHGsPkLY, {from: accounts[4]});
		await WolfStakingRewardsF3JZMZi.nonReentrant.call({from: accounts[3]});
		const uint256ga25S6X = await WolfStakingRewardsF3JZMZi.balanceOfPerPool.call(addressk0jY1T4, uintfhtVx92, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUX4FUoL = "v3zpYev8j3x062V9K96d3C2YTybovNqgJAJYNV227s1Emeo5MWtD"
		const stringJ2FkuW = "6OC9QgfknTlErYX7Ewp4nodZIBwl8GuM6nb3a6v67Hv9VKSXXv4MYAs4r1j4b5vL8ESAM55vnmzCr9oJ4iIIV74Xk0dNhF"
		const uintUVt1WWV = BigInt("66")
		const WolfStakingRewardsXJWkKdN = await WolfStakingRewards.new(stringUX4FUoL, stringJ2FkuW, uintUVt1WWV, {from: accounts[2]});
		const uintzIhqlU = BigInt("1406")
		const uintta2nrgR = BigInt("385")
		const uintB5HLCPp = BigInt("426")
		const uint5YlbFq = BigInt("759")
		const uintsGG2rof = BigInt("1407")
		const uintEAfbIDB = BigInt("1403")
		const uint8MXygOqG = await WolfStakingRewardsXJWkKdN.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256cFg6hSj = await WolfStakingRewardsXJWkKdN.getRewardForDuration.call(uintzIhqlU, {from: accounts[3]});
		const uint256arrayIa8n1wr = await WolfStakingRewardsXJWkKdN.updateNotifyRewardAmount.call(uintta2nrgR, {from: accounts[2]});
		const uint256eIYpvDC = await WolfStakingRewardsXJWkKdN.withdrawRemainingBalance.call(uint5YlbFq, uintB5HLCPp, {from: accounts[4]});
		const uint256u43aD8F = await WolfStakingRewardsXJWkKdN.withdraw.call(uintEAfbIDB, uintsGG2rof, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDsrkSND = "RnxntoAUthiUdeiN"
		const stringkQuw9D0 = "x7LXmJADqmzUsi5C3xJ4Im4XRJQixtcIfqWKe"
		const uintmGtSx7O = BigInt("161")
		const WolfStakingRewardsgCY5qPQ = await WolfStakingRewards.new(stringDsrkSND, stringkQuw9D0, uintmGtSx7O, {from: accounts[2]});
		const uintFIZYGMY = BigInt("1976")
		const uintpzD6EG8 = BigInt("2028")
		const uintcBubO7c = BigInt("913")
		const uint1yIP7t = BigInt("961")
		const addresskNr0JJW = accounts[2]
		const uint256arrayBzJQfed = await WolfStakingRewardsgCY5qPQ.updateNotifyRewardAmount.call(uintFIZYGMY, {from: accounts[1]});
		const uint256arrayjcnyZPm = await WolfStakingRewardsgCY5qPQ.updateNotifyRewardAmount.call(uintpzD6EG8, {from: accounts[0]});
		const uint256mQ0XpOP = await WolfStakingRewardsgCY5qPQ.lastTimeRewardApplicable.call(uintcBubO7c, {from: accounts[3]});
		const stringZYCBDNm = await WolfStakingRewardsgCY5qPQ.symbol.call({from: accounts[1]});
		const uint256P9Luyg7 = await WolfStakingRewardsgCY5qPQ.balanceOfPerPool.call(addresskNr0JJW, uint1yIP7t, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringoqm4Eo3 = "BpJjLwkhcd2F6quROnPX891TXHHwkFveNVLdh70dS7jGCdb1gJhKpqOfWVrUroYsRUWAOylzvFioTCDD"
		const stringRwOtcp2 = "uYYIIsQw99OrjAzC0Kf0zFcDszk4Jsmvsj5DXEnPnWcPU2lnFvf6wYuqX2MxeeGjmPQNBlEAZ1Hl3w7xb"
		const uintJ4FCi0i = BigInt("45")
		const WolfStakingRewardsQxgBu9Z = await WolfStakingRewards.new(stringoqm4Eo3, stringRwOtcp2, uintJ4FCi0i, {from: accounts[5]});
		const uintk8BDfje = BigInt("907")
		const uintOsdXwiF = BigInt("1757")
		const uint256vijAeMV = await WolfStakingRewardsQxgBu9Z.lastTimeRewardApplicable.call(uintk8BDfje, {from: accounts[0]});
		const uint256eTzAzDq = await WolfStakingRewardsQxgBu9Z.exit.call(uintOsdXwiF, {from: accounts[3]});
		await WolfStakingRewardsQxgBu9Z.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfjc2saK = "fzPKJ6TgQvI"
		const string1nY2UZ = "42ZFSLGV1Ktp9Fwu2zl87r108MCtORIA3fSZMkbgXuBLScCAQuc4T6LXBnHhG8m6D4seuUsKXR6o7ZLAlbcR0wvftAeHBYrN4"
		const uintLyW95sc = BigInt("100")
		const WolfStakingRewardszx4tklP = await WolfStakingRewards.new(stringfjc2saK, string1nY2UZ, uintLyW95sc, {from: accounts[4]});
		const uintlScIPLV = BigInt("1734")
		const uintrGWqcqz = BigInt("332")
		const addressRooIAsU = accounts[3]
		const uint256ClLX4XE = await WolfStakingRewardszx4tklP.exit.call(uintlScIPLV, {from: accounts[0]});
		const uint256bVHgDW4 = await WolfStakingRewardszx4tklP.balanceOfPerPool.call(addressRooIAsU, uintrGWqcqz, {from: accounts[4]});
		await WolfStakingRewardszx4tklP.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFATfUth = "j5pkAnLpPMOtWAyh5piGw0DaY2dJtpfnQcPXT8YeLqSmXY"
		const stringKjJA7b = "QWcZEuMi8LGGDb4mcXQ04bAmqjL7Bo3AYzh7Nhi1cfszpKCIK6gWlBTG7ONnRzPuKON"
		const uintOgsB8GQ = BigInt("244")
		const WolfStakingRewardsDhcJiTT = await WolfStakingRewards.new(stringFATfUth, stringKjJA7b, uintOgsB8GQ, {from: accounts[2]});
		const uintMoCIP4I = BigInt("331")
		const uint256ZDyBzZ6 = await WolfStakingRewardsDhcJiTT.getRewardForDuration.call(uintMoCIP4I, {from: accounts[0]});
		const uint8BCkVC5 = await WolfStakingRewardsDhcJiTT.decimals.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbjL2nCB = "NX7X7IwXIXUG8Il2Mrz8nXeC66vusxYh4zQRbposLFlL4WdF07dzOlodMdDBweb7Hn1Gyis7PSSOR5gMbD6S5jyiRHf7Nrr"
		const string5VZ0C9 = "GivQdFRvNmxVLvBVW8oNjzM99xalDffGseOexjhPT4RbRVMtPwVz0UjJCjFt1vDsLftJ8fWNjMhtASpzJSua1yxzEB"
		const uintrpuGcCl = BigInt("6")
		const WolfStakingRewardsNk9meBf = await WolfStakingRewards.new(stringbjL2nCB, string5VZ0C9, uintrpuGcCl, {from: accounts[1]});
		const uintJOIBFv2 = BigInt("73")
		const uintWGmdEdZ = BigInt("774")
		const uintfIemRZO = BigInt("43")
		const uintZly4KnF = BigInt("1969")
		const uint256JBtM6Mx = await WolfStakingRewardsNk9meBf.withdrawRemainingBalance.call(uintWGmdEdZ, uintJOIBFv2, {from: accounts[0]});
		const uint256OON18Dg = await WolfStakingRewardsNk9meBf.withdraw.call(uintZly4KnF, uintfIemRZO, {from: accounts[2]});
		await WolfStakingRewardsNk9meBf.nonReentrant.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHE2KWFO = "pswlIpjjkjp2wAGEtFoANsJ73FJu"
		const stringqnJVbz4 = "MsJQrgoRcYZHGoI5EnzTvwSQWxzcTYOePdyEocLFRAxOjV17Ljd3cCLmOFzogVME5wYlx7qGUdBP0wHPpjpwdv8DH09wdNNzt"
		const uint8Kx8H0 = BigInt("214")
		const WolfStakingRewardsu1FVCk = await WolfStakingRewards.new(stringHE2KWFO, stringqnJVbz4, uint8Kx8H0, {from: accounts[2]});
		const uintbBbqht = BigInt("555")
		const uintuupz0C7 = BigInt("237")
		const uintNQXV0Hr = BigInt("1811")
		const uintcOvADCB = await WolfStakingRewardsu1FVCk.getReward.call(uintbBbqht, {from: accounts[3]});
		const uint256EI3yXB6 = await WolfStakingRewardsu1FVCk.exit.call(uintuupz0C7, {from: accounts[1]});
		const uint8VobCjA4 = await WolfStakingRewardsu1FVCk.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringcn0DaG2 = await WolfStakingRewardsu1FVCk.name.call({from: accounts[4]});
		const uint256eOMOf58 = await WolfStakingRewardsu1FVCk.totalSupplyPerPool.call(uintNQXV0Hr, {from: accounts[2]});
	});
})