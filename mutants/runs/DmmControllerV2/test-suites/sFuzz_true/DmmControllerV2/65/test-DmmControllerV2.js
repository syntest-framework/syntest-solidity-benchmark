const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2SaSLvI8 = await DmmControllerV2.new({from: accounts[5]});
		const uintVmqWkJO = BigInt("1994")
		await DmmControllerV2SaSLvI8.renounceOwnership.call({from: accounts[4]});
		const uintzpaztWN = await DmmControllerV2SaSLvI8.enableMarket.call(uintVmqWkJO, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addresspkyvOUo = accounts[3]
		const addressKoeq12i = accounts[0]
		const addressjCspsOO = accounts[3]
		const addressIRpAuz0 = accounts[4]
		const addressVPj2lyh = accounts[2]
		const addressTIjztdr = accounts[4]
		const addresswqq0tUt = accounts[3]
		const addressCp255P = accounts[4]
		const address40zASI = accounts[1]
		const uinto0usPy = BigInt("1526")
		const uintLxGHpPJ = BigInt("1340")
		const address3TUjwp = accounts[3]
		const DmmControllerV2f5OjlQ6 = await DmmControllerV2.new(addresspkyvOUo, addressKoeq12i, addressjCspsOO, addressIRpAuz0, addressVPj2lyh, addressTIjztdr, addresswqq0tUt, addressCp255P, address40zASI, uinto0usPy, uintLxGHpPJ, address3TUjwp, {from: accounts[2]});
		const uintaTHRlJ1 = BigInt("465")
		const addressd5Irfoc = accounts[2]
		const uintThRQZI3 = await DmmControllerV2f5OjlQ6.getActiveCollateralization.call({from: accounts[4]});
		await DmmControllerV2f5OjlQ6.whenNotPaused.call({from: accounts[3]});
		const boolUviE01n = await DmmControllerV2f5OjlQ6.isOwner.call({from: accounts[1]});
		const uintmmpi9d = await DmmControllerV2f5OjlQ6.disableMarket.call(uintaTHRlJ1, {from: accounts[1]});
		const addressrUjPcUx = await DmmControllerV2f5OjlQ6.blacklist.call(addressd5Irfoc, {from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addressk07ka2J = accounts[0]
		const addressnAngiJN = accounts[2]
		const addressfos6kb = accounts[2]
		const addressS6wbhws = accounts[1]
		const addressM4wRuJL = accounts[3]
		const addressGqWlIOg = "0x0000000000000000000000000000000000000001"
		const addressGBzd1h0 = accounts[3]
		const addressbdEGMZ4 = accounts[1]
		const addressNraoZzA = accounts[5]
		const uintp5EUfJi = BigInt("195")
		const uint7OtKwG = BigInt("1450")
		const addressaLStgzN = accounts[0]
		const DmmControllerV2LadKzyJ = await DmmControllerV2.new(addressk07ka2J, addressnAngiJN, addressfos6kb, addressS6wbhws, addressM4wRuJL, addressGqWlIOg, addressGBzd1h0, addressbdEGMZ4, addressNraoZzA, uintp5EUfJi, uint7OtKwG, addressaLStgzN, {from: accounts[1]});
		const addresskoL2wZq = accounts[0]
		const addresso4qNqG5 = accounts[5]
		const addressa7ykNqV = accounts[5]
		const addresspz0hq6e = accounts[4]
		await DmmControllerV2LadKzyJ.requireIsFromAssetIntroducer.call({from: accounts[0]});
		const 
ubVpFXy = await DmmControllerV2LadKzyJ.addMarketFromExistingDmmToken.call(addresso4qNqG5, addresskoL2wZq, {from: accounts[0]});
		const address5ararV = await DmmControllerV2LadKzyJ.owner.call({from: accounts[1]});
		const addressTDpK5R = await DmmControllerV2LadKzyJ.transferOwnership.call(addressa7ykNqV, {from: accounts[5]});
		const 
m8Ro4l8 = await DmmControllerV2LadKzyJ.transferOwnershipToNewController.call(addresspz0hq6e, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressKHc7ur8 = accounts[4]
		const addressZo2rbhu = accounts[4]
		const addressGODURFv = accounts[3]
		const addressIrc54gk = accounts[1]
		const addressefnqaG = accounts[4]
		const addressq6cca2 = "0x0000000000000000000000000000000000000001"
		const address37HGed = accounts[1]
		const addresslPnH5qt = accounts[1]
		const addressU9tdcQ3 = accounts[1]
		const uintXuAfmt = BigInt("1710")
		const uintqygkqHC = BigInt("1826")
		const addressGbC2hkZ = accounts[2]
		const DmmControllerV2I92VhjN = await DmmControllerV2.new(addressKHc7ur8, addressZo2rbhu, addressGODURFv, addressIrc54gk, addressefnqaG, addressq6cca2, address37HGed, addresslPnH5qt, addressU9tdcQ3, uintXuAfmt, uintqygkqHC, addressGbC2hkZ, {from: accounts[4]});
		const uintoEF1DE = BigInt("1008")
		const uintO8sbfEw = BigInt("157")
		const uintn3jVmnC = BigInt("302")
		const 
DNApZkd = await DmmControllerV2I92VhjN.adminWithdrawFunds.call(uintO8sbfEw, uintoEF1DE, {from: accounts[4]});
		const uintXSLpAMP = await DmmControllerV2I92VhjN.requireIsNftOwner.call(uintn3jVmnC, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressYD4GfX0 = accounts[1]
		const addressxONrD9 = accounts[2]
		const addressrLprpn2 = accounts[5]
		const addressZvEBZLY = accounts[1]
		const addressdpNxuSz = accounts[4]
		const addressbCXU8kV = accounts[0]
		const addressIUgSgN = accounts[0]
		const addressEVEHtxn = accounts[5]
		const addressux2B6Ig = "0x0000000000000000000000000000000000000001"
		const uintc17VxOj = BigInt("298")
		const uintn1s5J7m = BigInt("785")
		const addressFR0rPFE = accounts[3]
		const DmmControllerV29sXgxM = await DmmControllerV2.new(addressYD4GfX0, addressxONrD9, addressrLprpn2, addressZvEBZLY, addressdpNxuSz, addressbCXU8kV, addressIUgSgN, addressEVEHtxn, addressux2B6Ig, uintc17VxOj, uintn1s5J7m, addressFR0rPFE, {from: accounts[2]});
		const addresswBQOtGI = "0x0000000000000000000000000000000000000001"
		const addressiyrGvGM = await DmmControllerV29sXgxM.owner.call({from: accounts[2]});
		const uintkns15iS = await DmmControllerV29sXgxM.getTokenIdFromDmmTokenAddress.call(addresswBQOtGI, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressfKgwMUD = accounts[1]
		const addressqYkjMTV = accounts[2]
		const addresssh11F03 = accounts[5]
		const addressCGqzqaB = accounts[1]
		const addressjughWuL = accounts[4]
		const addressc6tmHJ = accounts[0]
		const addressESkLhvs = accounts[0]
		const addresseM9NOAD = accounts[5]
		const addressqJjuXE = "0x0000000000000000000000000000000000000001"
		const uintLa1ZSVc = BigInt("298")
		const uintNSg5bRa = BigInt("785")
		const addressw6L1xyp = accounts[3]
		const DmmControllerV29sXgxM = await DmmControllerV2.new(addressfKgwMUD, addressqYkjMTV, addresssh11F03, addressCGqzqaB, addressjughWuL, addressc6tmHJ, addressESkLhvs, addresseM9NOAD, addressqJjuXE, uintLa1ZSVc, uintNSg5bRa, addressw6L1xyp, {from: accounts[2]});
		const addressK2ZC44I = accounts[1]
		const uintvT7FVU1 = BigInt("1638")
		const addresspM1Cwhs = "0x0000000000000000000000000000000000000001"
		const addressiyrGvGM = await DmmControllerV29sXgxM.owner.call({from: accounts[2]});
		const addressa6Ozqu = await DmmControllerV29sXgxM.setDmmEtherFactory.call(addressK2ZC44I, {from: accounts[4]});
		const uintcqy9k7s = await DmmControllerV29sXgxM.requireIsPrimaryMarketNft.call(uintvT7FVU1, {from: "0x0000000000000000000000000000000000000001"});
		const uintkns15iS = await DmmControllerV29sXgxM.getTokenIdFromDmmTokenAddress.call(addresspM1Cwhs, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressxnsJzVr = accounts[1]
		const addressgPee8Z5 = accounts[2]
		const addressFwqrqnO = accounts[5]
		const addresshWnECwf = accounts[1]
		const addresszRR5yO = accounts[4]
		const addressLWPQvj0 = accounts[0]
		const addresstwCMXUm = accounts[0]
		const addressY65XZgA = accounts[5]
		const addressY2yA6d = "0x0000000000000000000000000000000000000001"
		const uintBLojq4C = BigInt("298")
		const uintxKtLKJn = BigInt("785")
		const addressxWlSHu = accounts[3]
		const DmmControllerV29sXgxM = await DmmControllerV2.new(addressxnsJzVr, addressgPee8Z5, addressFwqrqnO, addresshWnECwf, addresszRR5yO, addressLWPQvj0, addresstwCMXUm, addressY65XZgA, addressY2yA6d, uintBLojq4C, uintxKtLKJn, addressxWlSHu, {from: accounts[2]});
		const addressF24FoYL = accounts[3]
		const addressn6lLD3o = accounts[1]
		const uintgBNKLTH = await DmmControllerV29sXgxM.getExchangeRate.call(addressF24FoYL, {from: "0x0000000000000000000000000000000000000001"});
		await DmmControllerV29sXgxM.onlyOwnerOrGuardian.call({from: accounts[2]});
		const uintkns15iS = await DmmControllerV29sXgxM.getTokenIdFromDmmTokenAddress.call(addressn6lLD3o, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressqRSwscS = accounts[0]
		const addressxriWurs = accounts[0]
		const addressSGbWPQ = accounts[1]
		const addressp3u3YQ6 = accounts[4]
		const addressNGlKrBI = accounts[1]
		const addressjtgN6BJ = accounts[1]
		const addresshsJYAO0 = "0x0000000000000000000000000000000000000001"
		const addressYOPHkgQ = accounts[4]
		const addressybZVDvE = accounts[4]
		const uintKjQUZCg = BigInt("10")
		const uintm0NGe3u = BigInt("1285")
		const addressl4zZpoD = accounts[4]
		const DmmControllerV2Xw3LmnX = await DmmControllerV2.new(addressqRSwscS, addressxriWurs, addressSGbWPQ, addressp3u3YQ6, addressNGlKrBI, addressjtgN6BJ, addresshsJYAO0, addressYOPHkgQ, addressybZVDvE, uintKjQUZCg, uintm0NGe3u, addressl4zZpoD, {from: accounts[5]});
		const addressY3C8TfY = accounts[5]
		const addressp0dPBwA = accounts[5]
		const uintnhdIspI = BigInt("2000")
		const addressOmh6g1E = await DmmControllerV2Xw3LmnX.getDmmTokenForUnderlying.call(addressY3C8TfY, {from: accounts[4]});
		const addressrkVnZhq = await DmmControllerV2Xw3LmnX.owner.call({from: accounts[1]});
		await DmmControllerV2Xw3LmnX.onlyOwner.call({from: accounts[1]});
		const uintet6UwdK = await DmmControllerV2Xw3LmnX.getExchangeRate.call(addressp0dPBwA, {from: accounts[0]});
		const uintaXipsYO = await DmmControllerV2Xw3LmnX.requireIsNftOwner.call(uintnhdIspI, {from: accounts[0]});
		await DmmControllerV2Xw3LmnX.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addressMkodudJ = accounts[1]
		const addressBoYhavl = accounts[1]
		const addressXS2B1vg = accounts[1]
		const addressSYHnzw2 = accounts[2]
		const addressVdxcg5J = accounts[3]
		const addresszl1yFBx = accounts[0]
		const addressD4meez = accounts[1]
		const addressBNc6BP8 = accounts[2]
		const addressg9j8b11 = accounts[0]
		const uintZkq4dnM = BigInt("1005")
		const uinttKAhDCm = BigInt("1379")
		const addressOngezCM = accounts[2]
		const DmmControllerV2BEYxPUr = await DmmControllerV2.new(addressMkodudJ, addressBoYhavl, addressXS2B1vg, addressSYHnzw2, addressVdxcg5J, addresszl1yFBx, addressD4meez, addressBNc6BP8, addressg9j8b11, uintZkq4dnM, uinttKAhDCm, addressOngezCM, {from: accounts[1]});
		const addressxmPhDHu = accounts[0]
		const addressHOiSHx7 = accounts[1]
		const uintHmYRQoh = BigInt("1561")
		const addresseJPk7uz = accounts[2]
		const addressQ20dTs = await DmmControllerV2BEYxPUr.setDmmEtherFactory.call(addressxmPhDHu, {from: accounts[1]});
		const addressEKX1n9 = await DmmControllerV2BEYxPUr.checkNotBlacklisted.call(addressHOiSHx7, {from: accounts[1]});
		const uinthen6AFQ = await DmmControllerV2BEYxPUr.requireTokenExists.call(uintHmYRQoh, {from: accounts[2]});
		await DmmControllerV2BEYxPUr.renounceGuardian.call({from: accounts[3]});
		const addressPNwEMHT = await DmmControllerV2BEYxPUr.transferOwnership.call(addresseJPk7uz, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressk9cYHN = accounts[1]
		const addressNFHa5Uz = accounts[1]
		const addressF4ZbTWr = accounts[1]
		const addressPGu7Quq = accounts[2]
		const addressntHwRP0 = accounts[3]
		const addressdTogqZd = accounts[0]
		const addressVHgt9K = accounts[1]
		const address010DgH = accounts[2]
		const addressLc6IScf = accounts[0]
		const uintyQ15EJj = BigInt("1005")
		const uintqL9liUi = BigInt("1379")
		const addressiGSPRF3 = accounts[2]
		const DmmControllerV2BEYxPUr = await DmmControllerV2.new(addressk9cYHN, addressNFHa5Uz, addressF4ZbTWr, addressPGu7Quq, addressntHwRP0, addressdTogqZd, addressVHgt9K, address010DgH, addressLc6IScf, uintyQ15EJj, uintqL9liUi, addressiGSPRF3, {from: accounts[1]});
		const addressSOCMAui = accounts[0]
		const addressaixbyvB = accounts[1]
		const uintLew0oTT = BigInt("487")
		const addressh4AQZXp = accounts[2]
		const addressQ20dTs = await DmmControllerV2BEYxPUr.setDmmEtherFactory.call(addressSOCMAui, {from: accounts[1]});
		await DmmControllerV2BEYxPUr.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		const addressEKX1n9 = await DmmControllerV2BEYxPUr.checkNotBlacklisted.call(addressaixbyvB, {from: accounts[1]});
		const uinthen6AFQ = await DmmControllerV2BEYxPUr.requireTokenExists.call(uintLew0oTT, {from: accounts[2]});
		await DmmControllerV2BEYxPUr.renounceGuardian.call({from: accounts[3]});
		const addressPNwEMHT = await DmmControllerV2BEYxPUr.transferOwnership.call(addressh4AQZXp, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressv12GM7 = accounts[3]
		const addressXe4H8ha = accounts[0]
		const addresse4t55uK = accounts[4]
		const addressvIhojf = accounts[4]
		const addressMTZQdis = accounts[4]
		const addresswkyfkdu = accounts[3]
		const addressxCsnu5o = accounts[1]
		const addresswa1wnLk = accounts[2]
		const addressMQwFOll = accounts[4]
		const uintvzngsyK = BigInt("1496")
		const uintP10Aam9 = BigInt("1701")
		const addressNu0mzt = accounts[0]
		const DmmControllerV2QgigLYm = await DmmControllerV2.new(addressv12GM7, addressXe4H8ha, addresse4t55uK, addressvIhojf, addressMTZQdis, addresswkyfkdu, addressxCsnu5o, addresswa1wnLk, addressMQwFOll, uintvzngsyK, uintP10Aam9, addressNu0mzt, {from: accounts[2]});
		const addressaQFlVkh = accounts[0]
		const uintb9FhAX = BigInt("1826")
		const 
BP1Ry9d = await DmmControllerV2QgigLYm.transferOwnership.call(addressaQFlVkh, {from: accounts[2]});
		await DmmControllerV2QgigLYm.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const uintlZE3ltw = await DmmControllerV2QgigLYm.requireIsPrimaryMarketNft.call(uintb9FhAX, {from: accounts[5]});
		await DmmControllerV2QgigLYm.whenNotPaused.call({from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressmRnjTUH = accounts[1]
		const addressVYksjtA = accounts[2]
		const address28ER0Y = accounts[5]
		const addressPhzzoNN = accounts[1]
		const addressVYdUXuH = accounts[4]
		const addressm0g9RmT = accounts[0]
		const addresshve0O1b = accounts[0]
		const address5AvYJj = accounts[5]
		const addresscOFQplj = "0x0000000000000000000000000000000000000001"
		const uintew1CC3 = BigInt("298")
		const uintO5Nf1Xq = BigInt("785")
		const addressJpZk4dg = accounts[3]
		const DmmControllerV29sXgxM = await DmmControllerV2.new(addressmRnjTUH, addressVYksjtA, address28ER0Y, addressPhzzoNN, addressVYdUXuH, addressm0g9RmT, addresshve0O1b, address5AvYJj, addresscOFQplj, uintew1CC3, uintO5Nf1Xq, addressJpZk4dg, {from: accounts[2]});
		const addressuKpHCJb = accounts[0]
		const addressHO3O5w0 = "0x0000000000000000000000000000000000000000"
		const uintsXaQO5B = await DmmControllerV29sXgxM.getInterestRateByUnderlyingTokenAddress.call(addressuKpHCJb, {from: accounts[1]});
		const uintkns15iS = await DmmControllerV29sXgxM.getTokenIdFromDmmTokenAddress.call(addressHO3O5w0, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressblDQVp4 = accounts[1]
		const addressGQ5Tvnl = accounts[2]
		const addressnkyuu4D = accounts[5]
		const addressA7ohNIM = accounts[1]
		const addressIbkWIzv = accounts[4]
		const addresscOFbjhU = accounts[0]
		const addressT6gtzoa = accounts[0]
		const addressSqlKBdy = accounts[5]
		const addressjfaEqS3 = "0x0000000000000000000000000000000000000001"
		const uintwC9fgRI = BigInt("298")
		const uintSnSUuUm = BigInt("785")
		const addressDg1Xcfv = accounts[3]
		const DmmControllerV29sXgxM = await DmmControllerV2.new(addressblDQVp4, addressGQ5Tvnl, addressnkyuu4D, addressA7ohNIM, addressIbkWIzv, addresscOFbjhU, addressT6gtzoa, addressSqlKBdy, addressjfaEqS3, uintwC9fgRI, uintSnSUuUm, addressDg1Xcfv, {from: accounts[2]});
		const addressbSUnQL = accounts[5]
		const uint2htBvB = BigInt("1031")
		const addressqFLtNut = "0x0000000000000000000000000000000000000002"
		const uintC7W8Mpf = await DmmControllerV29sXgxM.getExchangeRateByUnderlying.call(addressbSUnQL, {from: accounts[2]});
		const uintZwR0Gqm = await DmmControllerV29sXgxM.getInterestRateByDmmTokenId.call(uint2htBvB, {from: "0x0000000000000000000000000000000000000001"});
		const uintkns15iS = await DmmControllerV29sXgxM.getTokenIdFromDmmTokenAddress.call(addressqFLtNut, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressq5VHlWz = accounts[1]
		const addressPpG0Aj3 = accounts[2]
		const addressYy0213S = accounts[5]
		const addressBlWOtGc = accounts[1]
		const addressqsqXM7L = accounts[4]
		const addressiQvJIkO = accounts[0]
		const addressMou4AuV = accounts[0]
		const addressiNOvqBA = accounts[5]
		const addresswy75Hl1 = "0x0000000000000000000000000000000000000001"
		const uintFRcZt9X = BigInt("298")
		const uintJ7Bzqml = BigInt("785")
		const addressAZAhsuy = accounts[3]
		const DmmControllerV29sXgxM = await DmmControllerV2.new(addressq5VHlWz, addressPpG0Aj3, addressYy0213S, addressBlWOtGc, addressqsqXM7L, addressiQvJIkO, addressMou4AuV, addressiNOvqBA, addresswy75Hl1, uintFRcZt9X, uintJ7Bzqml, addressAZAhsuy, {from: accounts[2]});
		const addressvkuaTNt = accounts[4]
		const addressvKQHtM7 = "0x0000000000000000000000000000000000000000"
		const uinthZzwczT = await DmmControllerV29sXgxM.getInterestRateByDmmTokenAddress.call(addressvkuaTNt, {from: "0x0000000000000000000000000000000000000001"});
		const uintkns15iS = await DmmControllerV29sXgxM.getTokenIdFromDmmTokenAddress.call(addressvKQHtM7, {from: accounts[2]});
	});
})