const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const addressWP40pgA = accounts[4]
		const addressWjediy5 = accounts[2]
		const addressDN4jq9r = accounts[0]
		const addressntSnBFC = accounts[5]
		const addressQ614OoD = "0x0000000000000000000000000000000000000001"
		const addressZ8dsZNI = accounts[4]
		const addressLNh3Tcd = accounts[2]
		const addressM2xSBPf = accounts[0]
		const addresssPBxXq7 = accounts[0]
		const uintWzMnsp0 = BigInt("1768")
		const uintvulqXuz = BigInt("1117")
		const addresssT2OrT = accounts[2]
		const DmmControllerV2oZxYUZH = await DmmControllerV2.new(addressWP40pgA, addressWjediy5, addressDN4jq9r, addressntSnBFC, addressQ614OoD, addressZ8dsZNI, addressLNh3Tcd, addressM2xSBPf, addresssPBxXq7, uintWzMnsp0, uintvulqXuz, addresssT2OrT, {from: accounts[2]});
		const uinthrhTS5x = BigInt("1183")
		const addressk1BaeFw = accounts[1]
		const uintBIzcOk2 = await DmmControllerV2oZxYUZH.setMinCollateralization.call(uinthrhTS5x, {from: accounts[1]});
		const boolEAQwnFY = await DmmControllerV2oZxYUZH.isMarketEnabledByDmmTokenAddress.call(addressk1BaeFw, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressqRKNHDC = accounts[2]
		const addressteNohZG = accounts[4]
		const address3KyAtG = accounts[4]
		const addresspoRLEu7 = accounts[3]
		const addresstVPVY1t = accounts[0]
		const addressqjJHs7m = accounts[0]
		const addressZvtTZt = accounts[4]
		const addresspxoVRrq = accounts[2]
		const addressPeFCOn = accounts[5]
		const uintbHCcz7q = BigInt("353")
		const uintlv0GZzY = BigInt("205")
		const addressRKV14Sa = accounts[1]
		const DmmControllerV2oS7eySZ = await DmmControllerV2.new(addressqRKNHDC, addressteNohZG, address3KyAtG, addresspoRLEu7, addresstVPVY1t, addressqjJHs7m, addressZvtTZt, addresspxoVRrq, addressPeFCOn, uintbHCcz7q, uintlv0GZzY, addressRKV14Sa, {from: accounts[2]});
		const addressH3xaYfm = "0x0000000000000000000000000000000000000001"
		const addressUHKczD1 = accounts[2]
		const uintnTV1YV = BigInt("790")
		const uintWNI4Na0 = BigInt("1443")
		const addressfWZ3gFv = accounts[2]
		const uintyMPAn7o = await DmmControllerV2oS7eySZ.getInterestRateByUnderlyingTokenAddress.call(addressH3xaYfm, {from: accounts[4]});
		const uintuxgq6Kw = await DmmControllerV2oS7eySZ.getExchangeRate.call(addressUHKczD1, {from: accounts[0]});
		const 
eIHy4ao = await DmmControllerV2oS7eySZ.adminWithdrawFunds.call(uintWNI4Na0, uintnTV1YV, {from: accounts[3]});
		const uintrOCeVUs = await DmmControllerV2oS7eySZ.getExchangeRateByUnderlying.call(addressfWZ3gFv, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const DmmControllerV2YIHY5LG = await DmmControllerV2.new({from: accounts[1]});
		const uinte7j6rCF = BigInt("1075")
		const uintpHNiMW = BigInt("330")
		const addressr4aaY99 = accounts[2]
		const addressOIV1yyZ = accounts[2]
		const addressD6N1np = accounts[3]
		const 
c07XwCN = await DmmControllerV2YIHY5LG.increaseTotalSupply.call(uintpHNiMW, uinte7j6rCF, {from: accounts[5]});
		const 
bqF36Ra = await DmmControllerV2YIHY5LG.addMarketFromExistingDmmToken.call(addressOIV1yyZ, addressr4aaY99, {from: accounts[2]});
		const uintvjZP6bt = await DmmControllerV2YIHY5LG.getTotalCollateralization.call({from: accounts[0]});
		await DmmControllerV2YIHY5LG.onlyPauser.call({from: accounts[2]});
		const boolAtL51xP = await DmmControllerV2YIHY5LG.isPauser.call(addressD6N1np, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressb9Ymiyq = accounts[2]
		const addressDOYrrBP = accounts[1]
		const addresstsfpMXI = accounts[0]
		const addressiT9gXgq = accounts[1]
		const addressdSkZILK = accounts[0]
		const addressRaTU2hB = accounts[1]
		const addressoNoAizf = accounts[4]
		const addresskLodKrq = accounts[0]
		const addresssh4dKNN = accounts[2]
		const uintv97jyo2 = BigInt("1911")
		const uintVbnRjW8 = BigInt("1184")
		const addressoXoKGk = accounts[2]
		const DmmControllerV2TnCeX23 = await DmmControllerV2.new(addressb9Ymiyq, addressDOYrrBP, addresstsfpMXI, addressiT9gXgq, addressdSkZILK, addressRaTU2hB, addressoNoAizf, addresskLodKrq, addresssh4dKNN, uintv97jyo2, uintVbnRjW8, addressoXoKGk, {from: accounts[0]});
		const addresso7ufQ4P = accounts[2]
		const uintAOQiMu = BigInt("1669")
		const uintLxHKNxI = BigInt("1929")
		const addressyaJmyE = "0x0000000000000000000000000000000000000001"
		const addresst4OVhta = accounts[5]
		const addressMtHFdur = await DmmControllerV2TnCeX23.checkNotBlacklisted.call(addresso7ufQ4P, {from: accounts[3]});
		const boolKXj9mZp = await DmmControllerV2TnCeX23.paused.call({from: accounts[1]});
		const 
HGfcA1Y = await DmmControllerV2TnCeX23.adminWithdrawFunds.call(uintLxHKNxI, uintAOQiMu, {from: accounts[1]});
		const bool1dn6Mp = await DmmControllerV2TnCeX23.paused.call({from: accounts[3]});
		const 
PZZKiaR = await DmmControllerV2TnCeX23.transferOwnershipToNewController.call(addressyaJmyE, {from: accounts[1]});
		const uintQyruYaC = await DmmControllerV2TnCeX23.getTokenIdFromDmmTokenAddress.call(addresst4OVhta, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressLDhATAP = accounts[4]
		const addressw2L6yWE = accounts[3]
		const addressr6IMvmR = accounts[0]
		const addressl8vqc4B = accounts[0]
		const addresstGp42o4 = "0x0000000000000000000000000000000000000001"
		const addressP0s9kba = accounts[1]
		const addressC3P3ZO7 = accounts[3]
		const addressM9ORQA7 = accounts[1]
		const addressb9Gyj7I = accounts[3]
		const uinteiGnV6W = BigInt("1331")
		const uintneGCPqy = BigInt("1452")
		const addressKXkwyuq = accounts[2]
		const DmmControllerV2wfX4yPJ = await DmmControllerV2.new(addressLDhATAP, addressw2L6yWE, addressr6IMvmR, addressl8vqc4B, addresstGp42o4, addressP0s9kba, addressC3P3ZO7, addressM9ORQA7, addressb9Gyj7I, uinteiGnV6W, uintneGCPqy, addressKXkwyuq, {from: accounts[1]});
		const addressR7g3dXr = accounts[3]
		const addressavsnOlM = accounts[2]
		const uinto7WUASu = BigInt("270")
		const addressjtadnxA = accounts[5]
		const uintGj9Irjh = BigInt("1485")
		const uintPEs5CJh = BigInt("1825")
		const uintohph4SI = BigInt("1033")
		const uintUfxHwm3 = BigInt("1080")
		const addressfzPlNij = await DmmControllerV2wfX4yPJ.transferOwnership.call(addressR7g3dXr, {from: accounts[1]});
		const addressoaJM97q = await DmmControllerV2wfX4yPJ.setOffChainAssetValuator.call(addressavsnOlM, {from: accounts[1]});
		const addressWZt4FbH = await DmmControllerV2wfX4yPJ.getDmmTokenAddressByDmmTokenId.call(uinto7WUASu, {from: accounts[3]});
		const 
vFgQveA = await DmmControllerV2wfX4yPJ.transferOwnershipToNewController.call(addressjtadnxA, {from: accounts[4]});
		const 
bbZshj = await DmmControllerV2wfX4yPJ.adminWithdrawFunds.call(uintPEs5CJh, uintGj9Irjh, {from: accounts[4]});
		const 
DEOk5KF = await DmmControllerV2wfX4yPJ.increaseTotalSupply.call(uintUfxHwm3, uintohph4SI, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressX6mzBIN = accounts[4]
		const addressKep4Ri7 = accounts[3]
		const addresslq7KRb7 = accounts[3]
		const addressZPRiDUJ = accounts[1]
		const addressyCoFONn = accounts[1]
		const addresseewGuCh = accounts[3]
		const addresskqWRjDD = accounts[1]
		const addressdL8QFGt = accounts[2]
		const addressAkMeWmT = accounts[4]
		const uintYW1QHTu = BigInt("1329")
		const uint21gl7X = BigInt("511")
		const addresswgzUkiv = accounts[1]
		const DmmControllerV2oV6Jh6p = await DmmControllerV2.new(addressX6mzBIN, addressKep4Ri7, addresslq7KRb7, addressZPRiDUJ, addressyCoFONn, addresseewGuCh, addresskqWRjDD, addressdL8QFGt, addressAkMeWmT, uintYW1QHTu, uint21gl7X, addresswgzUkiv, {from: accounts[0]});
		const addressUlpAMu6 = accounts[0]
		const addresscoMgzns = accounts[4]
		const addressyO7YO5z = accounts[2]
		const uintLzRfZT0 = await DmmControllerV2oV6Jh6p.getTotalCollateralization.call({from: accounts[1]});
		const addresszB7LT23 = await DmmControllerV2oV6Jh6p.setDmmTokenFactory.call(addressUlpAMu6, {from: accounts[0]});
		const addressd9rXgah = await DmmControllerV2oV6Jh6p.setOffChainCurrencyValuator.call(addresscoMgzns, {from: accounts[0]});
		await DmmControllerV2oV6Jh6p.requireIsFromAssetIntroducer.call({from: accounts[0]});
		const uintUnhQiR4 = await DmmControllerV2oV6Jh6p.getInterestRateByDmmTokenAddress.call(addressyO7YO5z, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addresssr1F27n = accounts[4]
		const addresszPd0Fws = accounts[3]
		const addressQgGwhrf = accounts[0]
		const addressjpg9oIY = accounts[0]
		const addressDOwUox = "0x0000000000000000000000000000000000000001"
		const addressyTj56uQ = accounts[1]
		const addressr1xYkwC = accounts[3]
		const addresskKd0fp = accounts[1]
		const addressOZVNuQ8 = accounts[3]
		const uintwRI3km = BigInt("1331")
		const uintgjvsmDV = BigInt("1452")
		const addressJT4Haja = accounts[2]
		const DmmControllerV2wfX4yPJ = await DmmControllerV2.new(addresssr1F27n, addresszPd0Fws, addressQgGwhrf, addressjpg9oIY, addressDOwUox, addressyTj56uQ, addressr1xYkwC, addresskKd0fp, addressOZVNuQ8, uintwRI3km, uintgjvsmDV, addressJT4Haja, {from: accounts[1]});
		const addressrbtlLU5 = accounts[3]
		const addressFEoJswm = accounts[3]
		const addressmdM51b9 = accounts[2]
		const uintXLns5Zd = BigInt("270")
		const addressKeWT0OK = accounts[5]
		const uintTDWcaIM = BigInt("1913")
		const uintG3ggVh3 = BigInt("1825")
		const uintWIBv5ah = BigInt("1033")
		const uintxhYj4YQ = BigInt("1080")
		const addresseS9aa6s = await DmmControllerV2wfX4yPJ.getUnderlyingTokenForDmm.call(addressrbtlLU5, {from: accounts[5]});
		const addressfzPlNij = await DmmControllerV2wfX4yPJ.transferOwnership.call(addressFEoJswm, {from: accounts[1]});
		const addressoaJM97q = await DmmControllerV2wfX4yPJ.setOffChainAssetValuator.call(addressmdM51b9, {from: accounts[1]});
		const addressWZt4FbH = await DmmControllerV2wfX4yPJ.getDmmTokenAddressByDmmTokenId.call(uintXLns5Zd, {from: accounts[3]});
		const 
vFgQveA = await DmmControllerV2wfX4yPJ.transferOwnershipToNewController.call(addressKeWT0OK, {from: accounts[4]});
		const 
bbZshj = await DmmControllerV2wfX4yPJ.adminWithdrawFunds.call(uintG3ggVh3, uintTDWcaIM, {from: accounts[4]});
		const 
DEOk5KF = await DmmControllerV2wfX4yPJ.increaseTotalSupply.call(uintxhYj4YQ, uintWIBv5ah, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressRU9UgRA = accounts[4]
		const addresseMXLaEy = accounts[3]
		const addresshp5GbeR = accounts[0]
		const addressaKIMqYn = accounts[0]
		const addressuIfVT23 = "0x0000000000000000000000000000000000000001"
		const addresswEgOGO0 = accounts[1]
		const addresst6Zlb3J = accounts[3]
		const addressV0leFeP = accounts[1]
		const addressyAJDls1 = accounts[3]
		const uintdF9NM4X = BigInt("1331")
		const uintjV3IMxz = BigInt("1452")
		const addressHGvltnM = accounts[2]
		const DmmControllerV2wfX4yPJ = await DmmControllerV2.new(addressRU9UgRA, addresseMXLaEy, addresshp5GbeR, addressaKIMqYn, addressuIfVT23, addresswEgOGO0, addresst6Zlb3J, addressV0leFeP, addressyAJDls1, uintdF9NM4X, uintjV3IMxz, addressHGvltnM, {from: accounts[1]});
		const addressE5vb2u4 = accounts[3]
		const addressEPypYD2 = accounts[2]
		const addressvJOuvYj = accounts[0]
		const uintzFAyCfT = BigInt("264")
		const addressfC8iDY5 = accounts[3]
		const uintDlp1bp = BigInt("1485")
		const uintPO38PGj = BigInt("1825")
		const addressfzPlNij = await DmmControllerV2wfX4yPJ.transferOwnership.call(addressE5vb2u4, {from: accounts[1]});
		const addressoaJM97q = await DmmControllerV2wfX4yPJ.setOffChainAssetValuator.call(addressEPypYD2, {from: accounts[1]});
		const uintMeGdw4v = await DmmControllerV2wfX4yPJ.getActiveCollateralization.call({from: accounts[1]});
		const 
SxV17rD = await DmmControllerV2wfX4yPJ.transferOwnershipToNewController.call(addressvJOuvYj, {from: accounts[4]});
		const addressWZt4FbH = await DmmControllerV2wfX4yPJ.getDmmTokenAddressByDmmTokenId.call(uintzFAyCfT, {from: accounts[3]});
		const 
vFgQveA = await DmmControllerV2wfX4yPJ.transferOwnershipToNewController.call(addressfC8iDY5, {from: accounts[4]});
		const 
bbZshj = await DmmControllerV2wfX4yPJ.adminWithdrawFunds.call(uintPO38PGj, uintDlp1bp, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressdzXQ5a6 = accounts[0]
		const addressKDLrjPr = accounts[1]
		const addresshAjce9 = accounts[1]
		const addressCWGeEgm = accounts[0]
		const addresss7SjGQf = "0x0000000000000000000000000000000000000001"
		const addressnHKkUd = accounts[3]
		const addressD5g3D5u = accounts[2]
		const addresshnzzm8F = "0x0000000000000000000000000000000000000001"
		const addresswQQVZMI = accounts[5]
		const uintvcmhwVh = BigInt("1645")
		const uintjwF73k5 = BigInt("1346")
		const addresstWuhz9B = accounts[1]
		const DmmControllerV2DDLxQOV = await DmmControllerV2.new(addressdzXQ5a6, addressKDLrjPr, addresshAjce9, addressCWGeEgm, addresss7SjGQf, addressnHKkUd, addressD5g3D5u, addresshnzzm8F, addresswQQVZMI, uintvcmhwVh, uintjwF73k5, addresstWuhz9B, {from: accounts[1]});
		const uinteOdO3eZ = BigInt("1841")
		const addressV5iOnzI = accounts[2]
		const uintjR1JMwj = BigInt("1405")
		const uintpjoRKjd = await DmmControllerV2DDLxQOV.setMinReserveRatio.call(uinteOdO3eZ, {from: accounts[1]});
		const addressaJOsUvR = await DmmControllerV2DDLxQOV.checkNotBlacklisted.call(addressV5iOnzI, {from: accounts[0]});
		const addresstbXNpal = await DmmControllerV2DDLxQOV.owner.call({from: accounts[3]});
		const uintmldq7bq = await DmmControllerV2DDLxQOV.disableMarket.call(uintjR1JMwj, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addresszUj8KHP = accounts[4]
		const addressF4fdaMg = accounts[2]
		const addresswTLEpt = accounts[0]
		const addresscMM2M2N = accounts[5]
		const addressADo5e2r = "0x0000000000000000000000000000000000000001"
		const addressNr00eyT = accounts[4]
		const addressbwIAeTP = accounts[2]
		const addressFoyM0h = accounts[0]
		const addressiHsSJqk = accounts[0]
		const uintlZDkKf0 = BigInt("1768")
		const uintgs68Qef = BigInt("1117")
		const addresspp25ugA = accounts[2]
		const DmmControllerV2oZxYUZH = await DmmControllerV2.new(addresszUj8KHP, addressF4fdaMg, addresswTLEpt, addresscMM2M2N, addressADo5e2r, addressNr00eyT, addressbwIAeTP, addressFoyM0h, addressiHsSJqk, uintlZDkKf0, uintgs68Qef, addresspp25ugA, {from: accounts[2]});
		const addressNr1Atl = accounts[2]
		const boolEAQwnFY = await DmmControllerV2oZxYUZH.isMarketEnabledByDmmTokenAddress.call(addressNr1Atl, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressMpdH2Me = accounts[4]
		const addressr3yjIph = accounts[3]
		const addressC6MgkPn = accounts[0]
		const addressE2yi0i = accounts[0]
		const addressm55del = "0x0000000000000000000000000000000000000001"
		const addresslNmNyks = accounts[1]
		const addressEVLn7Eu = accounts[3]
		const addressdZ93Bht = accounts[1]
		const addressWSXvD6q = accounts[3]
		const uintExVTYv = BigInt("1331")
		const uintgMZEPJw = BigInt("1452")
		const addressN7FSfz = accounts[2]
		const DmmControllerV2wfX4yPJ = await DmmControllerV2.new(addressMpdH2Me, addressr3yjIph, addressC6MgkPn, addressE2yi0i, addressm55del, addresslNmNyks, addressEVLn7Eu, addressdZ93Bht, addressWSXvD6q, uintExVTYv, uintgMZEPJw, addressN7FSfz, {from: accounts[1]});
		const addressQiYGO32 = accounts[3]
		const addressdWJdqJ3 = accounts[2]
		const uintwWa4SDF = BigInt("270")
		const addressSZFixBQ = accounts[1]
		const uinte1cua2Y = BigInt("997")
		const uintJY4NzKN = BigInt("1080")
		await DmmControllerV2wfX4yPJ.unpause.call({from: accounts[0]});
		const addressfzPlNij = await DmmControllerV2wfX4yPJ.transferOwnership.call(addressQiYGO32, {from: accounts[1]});
		const addressoaJM97q = await DmmControllerV2wfX4yPJ.setOffChainAssetValuator.call(addressdWJdqJ3, {from: accounts[1]});
		await DmmControllerV2wfX4yPJ.nonReentrant.call({from: accounts[4]});
		const addressAMrIoUA = await DmmControllerV2wfX4yPJ.guardian.call({from: accounts[3]});
		const addressWZt4FbH = await DmmControllerV2wfX4yPJ.getDmmTokenAddressByDmmTokenId.call(uintwWa4SDF, {from: accounts[3]});
		const 
vFgQveA = await DmmControllerV2wfX4yPJ.transferOwnershipToNewController.call(addressSZFixBQ, {from: accounts[4]});
		const 
DEOk5KF = await DmmControllerV2wfX4yPJ.increaseTotalSupply.call(uintJY4NzKN, uinte1cua2Y, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const address5f7rk0 = accounts[2]
		const addressFnZXIsr = accounts[3]
		const addressC1GgDRA = accounts[4]
		const addressifE7xxb = accounts[1]
		const addressu0t8zgC = accounts[0]
		const addressZ9ghGCp = accounts[3]
		const addressQw1kvCm = accounts[3]
		const addressfITQn0V = accounts[1]
		const addressBGa5EA = "0x0000000000000000000000000000000000000001"
		const uintR8lBFov = BigInt("1844")
		const uintDMDvrkK = BigInt("1572")
		const addressw7Rs6NK = accounts[2]
		const DmmControllerV2Sz9U41U = await DmmControllerV2.new(address5f7rk0, addressFnZXIsr, addressC1GgDRA, addressifE7xxb, addressu0t8zgC, addressZ9ghGCp, addressQw1kvCm, addressfITQn0V, addressBGa5EA, uintR8lBFov, uintDMDvrkK, addressw7Rs6NK, {from: accounts[0]});
		const addressISdgikE = accounts[4]
		const uintNlJQhLJ = BigInt("904")
		const uintR185Kx = BigInt("1222")
		const uintaOZcUJm = await DmmControllerV2Sz9U41U.getExchangeRateByUnderlying.call(addressISdgikE, {from: accounts[2]});
		await DmmControllerV2Sz9U41U.pause.call({from: accounts[4]});
		const uintsCx9fZ1 = await DmmControllerV2Sz9U41U.requireIsValidNft.call(uintNlJQhLJ, {from: accounts[4]});
		const uintWxhcu0F = await DmmControllerV2Sz9U41U.setMinCollateralization.call(uintR185Kx, {from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressG1c2BjV = accounts[4]
		const addressk5xddf6 = accounts[3]
		const addressF2SA94a = accounts[0]
		const addressE0tkJQF = accounts[0]
		const addressWzYSCF = "0x0000000000000000000000000000000000000001"
		const addressQ3LTGgb = accounts[1]
		const addresskMOaSUp = accounts[3]
		const addressD4BHE5M = accounts[1]
		const addressbQUEBr = accounts[3]
		const uintgbruu5x = BigInt("1331")
		const uintApjJLi4 = BigInt("1452")
		const addressa8hkZw2 = accounts[2]
		const DmmControllerV2wfX4yPJ = await DmmControllerV2.new(addressG1c2BjV, addressk5xddf6, addressF2SA94a, addressE0tkJQF, addressWzYSCF, addressQ3LTGgb, addresskMOaSUp, addressD4BHE5M, addressbQUEBr, uintgbruu5x, uintApjJLi4, addressa8hkZw2, {from: accounts[1]});
		const addressD1HNBbw = accounts[0]
		const uintfaDn7I = BigInt("339")
		const addressW0tBpXD = accounts[5]
		const uintBwxn0y5 = await DmmControllerV2wfX4yPJ.getTokenIdFromDmmTokenAddress.call(addressD1HNBbw, {from: accounts[1]});
		const addressWZt4FbH = await DmmControllerV2wfX4yPJ.getDmmTokenAddressByDmmTokenId.call(uintfaDn7I, {from: accounts[3]});
		const 
vFgQveA = await DmmControllerV2wfX4yPJ.transferOwnershipToNewController.call(addressW0tBpXD, {from: accounts[4]});
	});
})