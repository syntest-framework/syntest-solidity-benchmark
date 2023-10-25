const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addressKHHoKuI = accounts[3]
		const addresss1eqLq2 = accounts[0]
		const uintjfYTaSb = BigInt("1937")
		const uintUTyrO6b = BigInt("1345")
		const NasiLiquidityPoolFactoryb2D4CiX = await NasiLiquidityPoolFactory.new(addressKHHoKuI, addresss1eqLq2, uintjfYTaSb, uintUTyrO6b, {from: accounts[0]});
		const addressjzKBHjc = accounts[0]
		const addressuSniQNm = accounts[0]
		const addresstTIrn76 = await NasiLiquidityPoolFactoryb2D4CiX._delegate.call(addressuSniQNm, addressjzKBHjc, {from: accounts[3]});
		await NasiLiquidityPoolFactoryb2D4CiX.pause.call({from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryb2D4CiX.pause.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressaGKY7T1 = accounts[0]
		const addressRUOUvvQ = accounts[2]
		const uinttaCUaQH = BigInt("1155")
		const uintiBojoDJ = BigInt("1930")
		const NasiLiquidityPoolFactoryHSNRQJk = await NasiLiquidityPoolFactory.new(addressaGKY7T1, addressRUOUvvQ, uinttaCUaQH, uintiBojoDJ, {from: accounts[2]});
		const uintzqfGrN8 = BigInt("841")
		const uintHsB0sli = BigInt("419")
		const addressXD2XDsD = "0x0000000000000000000000000000000000000001"
		const uint256Os6meYk = await NasiLiquidityPoolFactoryHSNRQJk.getBonusMultiplier.call(uintHsB0sli, uintzqfGrN8, {from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryHSNRQJk.unpause.call({from: accounts[1]});
		const uint256RFGkH36 = await NasiLiquidityPoolFactoryHSNRQJk.getCurrentVotes.call(addressXD2XDsD, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringfAVR0oe = "Q67iCK61zgpJob6T0htk3lJ8bdnoMRVRVCTGPgu18d"
		const stringgpQIkTa = "zcPVjIs5qRaHVt1wU8O8hp4f0shpu7gyDkxFfHN4BhoHDzC8M9WyP1Pq"
		const uinthdH5gPw = BigInt("78")
		const NasiLiquidityPoolFactorydinENzt = await NasiLiquidityPoolFactory.new(stringfAVR0oe, stringgpQIkTa, uinthdH5gPw, {from: accounts[3]});
		const addressug87GA1 = accounts[0]
		const uintq9bUkxM = BigInt("1023")
		const uintEGJ6SNd = BigInt("932")
		const uintWqVpwpd = BigInt("1830")
		const addressJm2Yeut = accounts[5]
		const uint256kJP5UM5 = await NasiLiquidityPoolFactorydinENzt.getCurrentVotes.call(addressug87GA1, {from: accounts[2]});
		const uint256eefPkaO = await NasiLiquidityPoolFactorydinENzt.deposit.call(uintEGJ6SNd, uintq9bUkxM, {from: accounts[1]});
		await NasiLiquidityPoolFactorydinENzt.onlyPauser.call({from: accounts[2]});
		const boolRn4405q = await NasiLiquidityPoolFactorydinENzt.increaseAllowance.call(addressJm2Yeut, uintWqVpwpd, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringYgOeg7 = "Mh1GqNqcWM4IRJdPsLkEQCOT4Zrs5UqUxnMYwH15gCk65OfZTwV8eKdJIIjSvBLymVph5NZGz697tMXHtgEWj8vod11f"
		const stringHAxeCcQ = "6ul5SjiwNolcaE3ZIpkuIZyFFYh7NuU9Qja532"
		const uintgSuDrBd = BigInt("101")
		const NasiLiquidityPoolFactoryiPFkgx7 = await NasiLiquidityPoolFactory.new(stringYgOeg7, stringHAxeCcQ, uintgSuDrBd, {from: "0x0000000000000000000000000000000000000001"});
		const boolPK6DCOR = await NasiLiquidityPoolFactoryiPFkgx7.isOwner.call({from: accounts[0]});
		const stringc4wlpRa = await NasiLiquidityPoolFactoryiPFkgx7.symbol.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressoI1VQU = "0x0000000000000000000000000000000000000001"
		const addresscbWOP45 = accounts[0]
		const uintW38cZez = BigInt("1583")
		const uintgVl8DCX = BigInt("713")
		const NasiLiquidityPoolFactoryT7APPOp = await NasiLiquidityPoolFactory.new(addressoI1VQU, addresscbWOP45, uintW38cZez, uintgVl8DCX, {from: accounts[3]});
		const uintDRb1TN2 = BigInt("1178")
		const addressWyB4nMd = accounts[4]
		const uintQWefq9 = BigInt("619")
		const uintmFCjozy = BigInt("2019")
		const addresszRYiXJI = accounts[4]
		const uint256kZKowI = await NasiLiquidityPoolFactoryT7APPOp.emergencyWithdraw.call(uintDRb1TN2, {from: accounts[4]});
		const uint256slWfDac = await NasiLiquidityPoolFactoryT7APPOp.pendingNasi.call(uintQWefq9, addressWyB4nMd, {from: accounts[1]});
		const uint8SSOSAQG = await NasiLiquidityPoolFactoryT7APPOp.decimals.call({from: accounts[1]});
		const boolyB2m9sT = await NasiLiquidityPoolFactoryT7APPOp.approve.call(addresszRYiXJI, uintmFCjozy, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringjbNdMw2 = "HOG1X94NuK9OQR1x63NEL98DUpl5s2XzdX9HRjcqHO"
		const stringM4qUeDM = "LABJEwrTli3uW4"
		const uintGfooDeB = BigInt("174")
		const NasiLiquidityPoolFactoryH19EESk = await NasiLiquidityPoolFactory.new(stringjbNdMw2, stringM4qUeDM, uintGfooDeB, {from: accounts[1]});
		const uintrHKt9H0 = BigInt("182")
		const addresszoeTZs = "0x0000000000000000000000000000000000000001"
		const addressxlww9hm = accounts[3]
		const uintffS38j6 = BigInt("1454")
		const addressW28x53K = accounts[3]
		const uintXoyMods = BigInt("512")
		const addressHjPUl6 = accounts[2]
		await NasiLiquidityPoolFactoryH19EESk.renounceMinter.call({from: accounts[1]});
		const uint256zqfRRPh = await NasiLiquidityPoolFactoryH19EESk.getPriorVotes.call(addresszoeTZs, uintrHKt9H0, {from: accounts[1]});
		const uint256fCpplm5 = await NasiLiquidityPoolFactoryH19EESk.getCurrentVotes.call(addressxlww9hm, {from: accounts[5]});
		const addressFpHY3l9 = await NasiLiquidityPoolFactoryH19EESk.burnFrom.call(addressW28x53K, uintffS38j6, {from: accounts[2]});
		const addressFOAoKcn = await NasiLiquidityPoolFactoryH19EESk.burnFrom.call(addressHjPUl6, uintXoyMods, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressCSlzQyN = accounts[4]
		const addressUVG7O1d = accounts[3]
		const uintAf8Evx8 = BigInt("2036")
		const uinteqq3Rxm = BigInt("90")
		const NasiLiquidityPoolFactorysq96MOj = await NasiLiquidityPoolFactory.new(addressCSlzQyN, addressUVG7O1d, uintAf8Evx8, uinteqq3Rxm, {from: accounts[0]});
		const uintoR9nXKY = BigInt("1671")
		const uintS6NAFRx = BigInt("1120")
		const addresse4hCbId = accounts[4]
		const addressgVZjfO = accounts[1]
		const uinthF14QJ2 = BigInt("996")
		const uintVdi97oS = BigInt("1166")
		const addressDospTS = "0x0000000000000000000000000000000000000001"
		const uint256hJU4V9T = await NasiLiquidityPoolFactorysq96MOj.deposit.call(uintS6NAFRx, uintoR9nXKY, {from: accounts[1]});
		const uint256TtgpWrO = await NasiLiquidityPoolFactorysq96MOj.allowance.call(addressgVZjfO, addresse4hCbId, {from: accounts[3]});
		const uint256t0IZPIU = await NasiLiquidityPoolFactorysq96MOj.migrate.call(uinthF14QJ2, {from: accounts[2]});
		await NasiLiquidityPoolFactorysq96MOj.pause.call({from: accounts[4]});
		const boolNhUKwn = await NasiLiquidityPoolFactorysq96MOj.mint.call(addressDospTS, uintVdi97oS, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringXNHYe9W = "XJ4ou8uWBm7Bi7s7TAUTyuMmOD9E"
		const stringsxr3Z7q = "hKN61TBj5E5zvd97ObWsaJteB31MfBwVtGowUP3pIhNZNPJywcig4zKbvBB6sLhctArZNEeo8fIkw98uppejAtMWK6B"
		const uintwWANxj2 = BigInt("87")
		const NasiLiquidityPoolFactoryIhgVDsF = await NasiLiquidityPoolFactory.new(stringXNHYe9W, stringsxr3Z7q, uintwWANxj2, {from: accounts[1]});
		const uintnLsKRQP = BigInt("1913")
		const uintchEZFPr = BigInt("1773")
		const uintFDq8xVH = BigInt("682")
		const stringQOLqtPk = await NasiLiquidityPoolFactoryIhgVDsF.symbol.call({from: accounts[4]});
		const uint256yh6z0sU = await NasiLiquidityPoolFactoryIhgVDsF.emergencyWithdraw.call(uintnLsKRQP, {from: accounts[2]});
		const uint256vmym9f7 = await NasiLiquidityPoolFactoryIhgVDsF.deposit.call(uintFDq8xVH, uintchEZFPr, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressQtKLrz5 = accounts[2]
		const addressep90glT = accounts[2]
		const uintB7zwggG = BigInt("1212")
		const uintPVWcLxp = BigInt("2012")
		const NasiLiquidityPoolFactoryXQPTrZF = await NasiLiquidityPoolFactory.new(addressQtKLrz5, addressep90glT, uintB7zwggG, uintPVWcLxp, {from: accounts[3]});
		await NasiLiquidityPoolFactoryXQPTrZF.renounceOwnership.call({from: accounts[4]});
		await NasiLiquidityPoolFactoryXQPTrZF.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresscgZQggQ = "0x0000000000000000000000000000000000000001"
		const addressNnpb4f4 = accounts[0]
		const uintEJl5tex = BigInt("1583")
		const uintmksl1DZ = BigInt("713")
		const NasiLiquidityPoolFactoryT7APPOp = await NasiLiquidityPoolFactory.new(addresscgZQggQ, addressNnpb4f4, uintEJl5tex, uintmksl1DZ, {from: accounts[3]});
		const addressNaSxBal = accounts[4]
		const uintjL4wotL = BigInt("619")
		const uintUAYZ0wu = BigInt("2019")
		const addressGMSyeYD = accounts[4]
		const uint256slWfDac = await NasiLiquidityPoolFactoryT7APPOp.pendingNasi.call(uintjL4wotL, addressNaSxBal, {from: accounts[1]});
		const uint8SSOSAQG = await NasiLiquidityPoolFactoryT7APPOp.decimals.call({from: accounts[1]});
		const boolyB2m9sT = await NasiLiquidityPoolFactoryT7APPOp.approve.call(addressGMSyeYD, uintUAYZ0wu, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressQS02Ut = accounts[0]
		const addressBzqjTng = accounts[4]
		const uintyFryUhy = BigInt("1025")
		const uintLDNqN6 = BigInt("1563")
		const NasiLiquidityPoolFactoryRPoPfi = await NasiLiquidityPoolFactory.new(addressQS02Ut, addressBzqjTng, uintyFryUhy, uintLDNqN6, {from: accounts[3]});
		const boolHh9nt5g = true
		const addressoR2FB4 = accounts[3]
		const uintN7LG1Xs = BigInt("1910")
		const uint256Gz6PcMu = await NasiLiquidityPoolFactoryRPoPfi.addLpToken.call(uintN7LG1Xs, addressoR2FB4, boolHh9nt5g, {from: accounts[3]});
		await NasiLiquidityPoolFactoryRPoPfi.renouncePauser.call({from: accounts[4]});
		const uint8Of5gq5a = await NasiLiquidityPoolFactoryRPoPfi.decimals.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressgjFiW5m = accounts[5]
		const addressuR063ia = accounts[1]
		const uintT0BefAo = BigInt("839")
		const uintijxPsUG = BigInt("450")
		const NasiLiquidityPoolFactoryobskRX2 = await NasiLiquidityPoolFactory.new(addressgjFiW5m, addressuR063ia, uintT0BefAo, uintijxPsUG, {from: accounts[1]});
		const uintZGdZ3zP = BigInt("1968")
		const uintHA6k9BF = BigInt("2017")
		const uint256N2HWlfK = await NasiLiquidityPoolFactoryobskRX2.updatePool.call(uintZGdZ3zP, {from: accounts[1]});
		const uint256oqIdQD4 = await NasiLiquidityPoolFactoryobskRX2.leaveStaking.call(uintHA6k9BF, {from: accounts[2]});
		const uint8GGvks1g = await NasiLiquidityPoolFactoryobskRX2.decimals.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringrPu0LtZ = "Kvvl90kdUo1bl76ztTmXfocoxhhrLBK3SuaM54OylNqAbPkXLkCChfT"
		const stringFH2p2an = "oG7qRnzgfOwK8NtRcu3UpdSfzFTfJtJN02TsQoYHd7oeADJAWaDlvdYVpFPeg81Et5xIT9dxsEh2VaGACXFecY"
		const uintyAxjaUW = BigInt("118")
		const NasiLiquidityPoolFactoryPKwwodd = await NasiLiquidityPoolFactory.new(stringrPu0LtZ, stringFH2p2an, uintyAxjaUW, {from: accounts[4]});
		const boolqI8r2QR = true
		const addressvAJi44U = accounts[3]
		const uintrI3JErQ = BigInt("1180")
		const uintjabEOw = BigInt("1671")
		const addressWQEzL3e = "0x0000000000000000000000000000000000000001"
		const addressgLuM9xb = accounts[1]
		await NasiLiquidityPoolFactoryPKwwodd.onlyOwner.call({from: accounts[2]});
		const uint256a7kysCQ = await NasiLiquidityPoolFactoryPKwwodd.addLpToken.call(uintrI3JErQ, addressvAJi44U, boolqI8r2QR, {from: accounts[1]});
		const boolx6lsxeS = await NasiLiquidityPoolFactoryPKwwodd.transferFrom.call(addressgLuM9xb, addressWQEzL3e, uintjabEOw, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringq2bIK50 = "aZTvHgmFgimP4VwiL0fBi5BOXMn5ouSYjptl8JbhXE1tlGzoxwVnupBdcJaXNw8NEi6l"
		const stringrYggBNG = "jCsdwAd66RshRGFjmfWkC9"
		const uintvC7iTOB = BigInt("73")
		const NasiLiquidityPoolFactoryiBD0XMV = await NasiLiquidityPoolFactory.new(stringq2bIK50, stringrYggBNG, uintvC7iTOB, {from: accounts[1]});
		const uintcn5oDuc = BigInt("1036")
		const uintFtcSiEh = BigInt("1486")
		const addressssk6syd = accounts[0]
		const byteo66HorP = "0x1e070f0401040b0603121b0a0e1511011f0f0c0e1b120c150409091c2010121f"
		const byteEV9YMn = "0x1b030116041d191c0a171f20031e031b0215060302161e0e1e0b07171106191f"
		const uintZWpsnyE = BigInt("242")
		const uintW3Z2zF = BigInt("1728")
		const uintNpz47Wy = BigInt("1833")
		const addressfEVYz8S = accounts[1]
		const booldS7OScc = false
		const uintvhMSJZ9 = BigInt("918")
		const uintGy56wrU = BigInt("1655")
		const uint256b1MCix7 = await NasiLiquidityPoolFactoryiBD0XMV.burn.call(uintcn5oDuc, {from: accounts[1]});
		await NasiLiquidityPoolFactoryiBD0XMV.renounceOwnership.call({from: accounts[4]});
		const boolOPDqy0V = await NasiLiquidityPoolFactoryiBD0XMV.mint.call(addressssk6syd, uintFtcSiEh, {from: accounts[2]});
		const 
ReKcAsI = await NasiLiquidityPoolFactoryiBD0XMV.delegateBySig.call(addressfEVYz8S, uintNpz47Wy, uintW3Z2zF, uintZWpsnyE, byteEV9YMn, byteo66HorP, {from: accounts[1]});
		const uint256Y3J9f9R = await NasiLiquidityPoolFactoryiBD0XMV.setAllocationPoint.call(uintGy56wrU, uintvhMSJZ9, booldS7OScc, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressc5DIkWJ = accounts[0]
		const addresstF3tRmv = accounts[4]
		const uintiptlyvr = BigInt("1101")
		const uintVtfVS7L = BigInt("121")
		const NasiLiquidityPoolFactoryZdippOj = await NasiLiquidityPoolFactory.new(addressc5DIkWJ, addresstF3tRmv, uintiptlyvr, uintVtfVS7L, {from: "0x0000000000000000000000000000000000000001"});
		const uintsf2YTS = BigInt("1053")
		const addressTVxeX9x = "0x0000000000000000000000000000000000000001"
		const uint8UZCT8 = BigInt("2036")
		await NasiLiquidityPoolFactoryZdippOj.whenPaused.call({from: accounts[1]});
		const boolsGApanO = await NasiLiquidityPoolFactoryZdippOj.increaseAllowance.call(addressTVxeX9x, uintsf2YTS, {from: accounts[2]});
		const uint2568tHAwQ = await NasiLiquidityPoolFactoryZdippOj.leaveStaking.call(uint8UZCT8, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresslXCkKwl = accounts[2]
		const addressCFRZSM = accounts[2]
		const uintqdU4EhY = BigInt("1212")
		const uintw4bWZGH = BigInt("2012")
		const NasiLiquidityPoolFactoryXQPTrZF = await NasiLiquidityPoolFactory.new(addresslXCkKwl, addressCFRZSM, uintqdU4EhY, uintw4bWZGH, {from: accounts[3]});
		const uintn6L9Dn9 = BigInt("1260")
		const uint256oWkYdEL = await NasiLiquidityPoolFactoryXQPTrZF.migrate.call(uintn6L9Dn9, {from: accounts[0]});
		await NasiLiquidityPoolFactoryXQPTrZF.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringc7VGBJ3 = "vSv96RkJSeNLoSbrNh6mxmT7duKXNCoTJwT3AlmpDeJsJs5DUfm3PGkSEf9c77aIPT0DkPMLiT"
		const stringPvmwiV = "SdC9mpzg98q1GXOH6NhKMCk8erYF3yReGOCbz6TWDI"
		const uintCyyVyFv = BigInt("206")
		const NasiLiquidityPoolFactoryUjmEtL8 = await NasiLiquidityPoolFactory.new(stringc7VGBJ3, stringPvmwiV, uintCyyVyFv, {from: accounts[3]});
		const addressH5vcDa2 = accounts[4]
		const uintKaKpGlY = BigInt("69")
		const addressIUzIdHO = accounts[0]
		const addressiWDiBj3 = accounts[4]
		const uintIyQ4R8r = BigInt("1433")
		const addressFXAes31 = accounts[3]
		const uintmdS59HQ = BigInt("1255")
		const addressoksAEfD = accounts[4]
		const boolcvNnI5 = await NasiLiquidityPoolFactoryUjmEtL8.isMinter.call(addressH5vcDa2, {from: accounts[0]});
		const boolUTKVVrV = await NasiLiquidityPoolFactoryUjmEtL8.transferFrom.call(addressiWDiBj3, addressIUzIdHO, uintKaKpGlY, {from: accounts[3]});
		const boolPJiWnxD = await NasiLiquidityPoolFactoryUjmEtL8.decreaseAllowance.call(addressFXAes31, uintIyQ4R8r, {from: accounts[0]});
		const boolFLGXF4o = await NasiLiquidityPoolFactoryUjmEtL8.transfer.call(addressoksAEfD, uintmdS59HQ, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressleZBpXd = "0x0000000000000000000000000000000000000001"
		const addresslrfXxej = accounts[0]
		const uintWuCeRDX = BigInt("1583")
		const uinteOWJ9rC = BigInt("713")
		const NasiLiquidityPoolFactoryT7APPOp = await NasiLiquidityPoolFactory.new(addressleZBpXd, addresslrfXxej, uintWuCeRDX, uinteOWJ9rC, {from: accounts[3]});
		const uintQBrpRh = BigInt("2024")
		const uint0AAdRW = BigInt("1182")
		const addressgmbPC2 = accounts[5]
		const uintFlqeWKr = BigInt("619")
		const bytetrmF7Y2 = "0x191819040b04101c100e06041a16191319120e150c080e13070f011d171b130b"
		const byteLBnFBcG = "0x121d0b202002120e1f1b0613060616051d000e041c08130119161202191a1a02"
		const uintZIqQEqE = BigInt("185")
		const uintj03Q8KN = BigInt("1302")
		const uintqOVUfs = BigInt("484")
		const addressEBRN6m = accounts[1]
		const uintyGOhfau = BigInt("1003")
		const uint256yuqW4wT = await NasiLiquidityPoolFactoryT7APPOp.withdraw.call(uint0AAdRW, uintQBrpRh, {from: accounts[3]});
		const uint256slWfDac = await NasiLiquidityPoolFactoryT7APPOp.pendingNasi.call(uintFlqeWKr, addressgmbPC2, {from: accounts[1]});
		const 
tc6EYw = await NasiLiquidityPoolFactoryT7APPOp.delegateBySig.call(addressEBRN6m, uintqOVUfs, uintj03Q8KN, uintZIqQEqE, byteLBnFBcG, bytetrmF7Y2, {from: accounts[0]});
		const uint256my3TW6V = await NasiLiquidityPoolFactoryT7APPOp.burn.call(uintyGOhfau, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringaLqxFc0 = "KUN53XNc8WJ88njQPFdS5kKNmOOqqzHsASKyGrpq8VyKMPXCgtCTSlVTGhrwSofhqyJmSoVFi8oKhOLucbs6lQ"
		const stringdjLGyas = "ZbB2rTss9c9GmvXyIeIpJnLIzHOoa62xoUmmrX1VFfL3mCNPyYHAiP"
		const uintv4VR4wC = BigInt("191")
		const NasiLiquidityPoolFactorymKJStpq = await NasiLiquidityPoolFactory.new(stringaLqxFc0, stringdjLGyas, uintv4VR4wC, {from: accounts[4]});
		const address31SAhw = accounts[4]
		const uintWvVuIOY = BigInt("1772")
		const stringpkChRHv = await NasiLiquidityPoolFactorymKJStpq.name.call({from: accounts[2]});
		await NasiLiquidityPoolFactorymKJStpq.onlyOwner.call({from: accounts[4]});
		const uint256w9K2htg = await NasiLiquidityPoolFactorymKJStpq.balanceOf.call(address31SAhw, {from: accounts[3]});
		const uint256Iwz16iB = await NasiLiquidityPoolFactorymKJStpq.emergencyWithdraw.call(uintWvVuIOY, {from: accounts[0]});
		await NasiLiquidityPoolFactorymKJStpq.renounceOwnership.call({from: accounts[3]});
		await NasiLiquidityPoolFactorymKJStpq.renounceOwnership.call({from: accounts[3]});
	});
})