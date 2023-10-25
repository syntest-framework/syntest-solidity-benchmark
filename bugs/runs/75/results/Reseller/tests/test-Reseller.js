const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrDYgTYPu = accounts[1]
		const FOSTERAddrEDraP1 = accounts[2]
		const initialRatekIw7K5j = BigInt("1672")
		const initialPeriodhTL3G5T = BigInt("887")
		const initialOwnerwbhv6V = accounts[0]
		const contracttzZtZH = await Reseller.new(USDTAddrDYgTYPu, FOSTERAddrEDraP1, initialRatekIw7K5j, initialPeriodhTL3G5T, initialOwnerwbhv6V, {from: accounts[2]});
		const accountUjIxKxv = accounts[1]
		const _ref5Ag8FNAA = accounts[4]
		const _ref4m3CEfMy = accounts[4]
		const _ref3brYCCkq = accounts[1]
		const _ref2mpJUp7t = accounts[4]
		const _ref1wkisLEz = accounts[3]
		const valuebSBrRFK = BigInt("1094")
		const _periody3aBf3 = BigInt("1418")
		const amountkbZaDn = BigInt("1646")
		const recipientBwuLpa = accounts[0]
		const nullYXHdBVg = await contracttzZtZH.allowanceFOSTER.call(accountUjIxKxv, {from: accounts[1]});
		await contracttzZtZH.buy.call(valuebSBrRFK, _ref1wkisLEz, _ref2mpJUp7t, _ref3brYCCkq, _ref4m3CEfMy, _ref5Ag8FNAA, {from: "0x0000000000000000000000000000000000000001"});
		await contracttzZtZH.freezeAndTransfer.call(recipientBwuLpa, amountkbZaDn, _periody3aBf3, {from: accounts[3]});
		await contracttzZtZH.switchState.call({from: accounts[4]});

		await expect(contracttzZtZH.allowanceFOSTER.call(accountUjIxKxv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrv0Z0eTk = accounts[2]
		const FOSTERAddrGKyoqE = "0x0000000000000000000000000000000000000001"
		const initialRateLE1aRxq = BigInt("1189")
		const initialPeriodPUchLGI = BigInt("309")
		const initialOwnerkikjSj = accounts[3]
		const contractsZDQmAv = await Reseller.new(USDTAddrv0Z0eTk, FOSTERAddrGKyoqE, initialRateLE1aRxq, initialPeriodPUchLGI, initialOwnerkikjSj, {from: accounts[0]});
		const newRateFV4b7hG = BigInt("1255")
		const newRateyiIXHht = BigInt("53")
		const newBoss3BkxyzN = accounts[5]
		const accountxFnGfZ2 = accounts[0]
		const level5WxP66Ah = BigInt("48")
		const level4EjX5dP9 = BigInt("40")
		const level3TjF8Jkd = BigInt("193")
		const level2tERSlG = BigInt("200")
		const level1tHZaNq7 = BigInt("6")
		await contractsZDQmAv.setRate.call(newRateFV4b7hG, {from: accounts[5]});
		await contractsZDQmAv.setRate.call(newRateyiIXHht, {from: accounts[2]});
		await contractsZDQmAv.deposeBoss3.call(newBoss3BkxyzN, {from: accounts[4]});
		const nulltbqYwqL = await contractsZDQmAv.allowanceUSDT.call(accountxFnGfZ2, {from: accounts[1]});
		await contractsZDQmAv.setRefBonus.call(level1tHZaNq7, level2tERSlG, level3TjF8Jkd, level4EjX5dP9, level5WxP66Ah, {from: accounts[4]});

		await expect(contractsZDQmAv.setRate.call(newRateFV4b7hG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrGWn6n3 = accounts[5]
		const FOSTERAddrNa44pP = accounts[5]
		const initialRateIYGLjyH = BigInt("2000")
		const initialPeriodP8CBOZT = BigInt("1830")
		const initialOwnerpiHjujJ = accounts[2]
		const contractmuGz4te = await Reseller.new(USDTAddrGWn6n3, FOSTERAddrNa44pP, initialRateIYGLjyH, initialPeriodP8CBOZT, initialOwnerpiHjujJ, {from: accounts[0]});
		const level5aZ81GIV = BigInt("241")
		const level4vBZdthO = BigInt("27")
		const level3lbXe8W5 = BigInt("140")
		const level2bohe91 = BigInt("58")
		const level1vFjyE1 = BigInt("146")
		const newMinimumjoK927O = BigInt("1473")
		const _periodGRUj2d7 = BigInt("1375")
		const amountNYhttmB = BigInt("823")
		const recipientSc74350 = "0x0000000000000000000000000000000000000001"
		const _ref5OuhGyd9 = accounts[3]
		const _ref4cpQoA2A = accounts[2]
		const _ref3dTvMr0F = accounts[0]
		const _ref2MYzryWz = accounts[2]
		const _ref1n2Cibn = accounts[1]
		const valueDT2n4x1 = BigInt("954")
		const newRateU3NPyNJ = BigInt("141")
		const accountWIcZGwO = accounts[1]
		await contractmuGz4te.setRefBonus.call(level1vFjyE1, level2bohe91, level3lbXe8W5, level4vBZdthO, level5aZ81GIV, {from: accounts[5]});
		await contractmuGz4te.setMinimum.call(newMinimumjoK927O, {from: accounts[3]});
		await contractmuGz4te.freezeAndTransfer.call(recipientSc74350, amountNYhttmB, _periodGRUj2d7, {from: accounts[2]});
		await contractmuGz4te.buy.call(valueDT2n4x1, _ref1n2Cibn, _ref2MYzryWz, _ref3dTvMr0F, _ref4cpQoA2A, _ref5OuhGyd9, {from: accounts[4]});
		await contractmuGz4te.setRate.call(newRateU3NPyNJ, {from: accounts[4]});
		const nullPjqnGLr = await contractmuGz4te.balanceFOSTER.call(accountWIcZGwO, {from: accounts[4]});

		await expect(contractmuGz4te.setRefBonus.call(level1vFjyE1, level2bohe91, level3lbXe8W5, level4vBZdthO, level5aZ81GIV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrugbrIr = accounts[3]
		const FOSTERAddrQZ8vSH6 = accounts[5]
		const initialRateDadaYlZ = BigInt("679")
		const initialPeriodhnqHtto = BigInt("1222")
		const initialOwnerFr4SdEE = accounts[4]
		const contractymikbfi = await Reseller.new(USDTAddrugbrIr, FOSTERAddrQZ8vSH6, initialRateDadaYlZ, initialPeriodhnqHtto, initialOwnerFr4SdEE, {from: accounts[0]});
		const valueyHN8qGK = BigInt("597")
		const recipientypkTbHC = accounts[1]
		const ERC20TokenjUI3Gmt = accounts[2]
		const newBoss3F34c0C1 = accounts[0]
		const accountJAADnqx = accounts[4]
		await contractymikbfi.switchState.call({from: accounts[4]});
		await contractymikbfi.withdrawERC20.call(ERC20TokenjUI3Gmt, recipientypkTbHC, valueyHN8qGK, {from: accounts[3]});
		await contractymikbfi.deposeBoss3.call(newBoss3F34c0C1, {from: accounts[3]});
		const nullv8dSW4 = await contractymikbfi.balanceFOSTER.call(accountJAADnqx, {from: accounts[2]});
		await contractymikbfi.switchState.call({from: accounts[2]});

		await expect(contractymikbfi.switchState.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCtMlaNr = accounts[2]
		const FOSTERAddreCkXjfO = accounts[1]
		const initialRateOVW9IK = BigInt("1392")
		const initialPeriodA9e3ag3 = BigInt("633")
		const initialOwnerlWe9NQf = accounts[4]
		const contractlN4ttp = await Reseller.new(USDTAddrCtMlaNr, FOSTERAddreCkXjfO, initialRateOVW9IK, initialPeriodA9e3ag3, initialOwnerlWe9NQf, {from: accounts[2]});
		const commentmKy1G7B = "R2SFpU2puUTGWaoC2fRGIHfuGDeDMeM3wAXRnWAp4fsvdUZRa0"
		const _ref5zuCMVqq = accounts[4]
		const _ref4P2sw1W = accounts[3]
		const _ref3S3ML8NX = accounts[1]
		const _ref2lZER0b = accounts[2]
		const _ref1h14dPY7 = accounts[0]
		const valueChXxZTP = BigInt("561")
		const newMinimumD1bQs0B = BigInt("1972")
		const newBoss2WByJRxH = accounts[1]
		const newFeeWzT04cx = BigInt("243")
		const accountTcPbAoa = accounts[5]
		const commentlo6hYsn = "WmSrfxIZicRjDoUR3qCjjXwfpTqCSzPGjcdNhjwXFfARnOgRGTST5Tq6AbVKFLlinbsKhuLVF95GzKWNAzoE4Tn3YlTaZ"
		const _ref5oRdXtyC = accounts[3]
		const _ref4The4dx7 = accounts[5]
		const _ref3NuLTPF7 = accounts[2]
		const _ref2Jl1Pu8W = accounts[4]
		const _ref1ydJczI4 = accounts[4]
		const valueNqmZkbr = BigInt("1769")
		await contractlN4ttp.purchase.call(valueChXxZTP, _ref1h14dPY7, _ref2lZER0b, _ref3S3ML8NX, _ref4P2sw1W, _ref5zuCMVqq, commentmKy1G7B, {from: accounts[2]});
		await contractlN4ttp.setMinimum.call(newMinimumD1bQs0B, {from: accounts[4]});
		await contractlN4ttp.deposeBoss2.call(newBoss2WByJRxH, {from: accounts[1]});
		await contractlN4ttp.setFee.call(newFeeWzT04cx, {from: accounts[3]});
		const nulljsBkH3T = await contractlN4ttp.allowanceUSDT.call(accountTcPbAoa, {from: accounts[2]});
		await contractlN4ttp.purchase.call(valueNqmZkbr, _ref1ydJczI4, _ref2Jl1Pu8W, _ref3NuLTPF7, _ref4The4dx7, _ref5oRdXtyC, commentlo6hYsn, {from: accounts[0]});

		await expect(contractlN4ttp.purchase.call(valueChXxZTP, _ref1h14dPY7, _ref2lZER0b, _ref3S3ML8NX, _ref4P2sw1W, _ref5zuCMVqq, commentmKy1G7B, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrGLgCfGl = accounts[1]
		const FOSTERAddr7NSrOC = accounts[3]
		const initialRateFdWsumE = BigInt("51")
		const initialPeriodUoedCG = BigInt("260")
		const initialOwnerCvbx2da = accounts[4]
		const contractwgcGZJ = await Reseller.new(USDTAddrGLgCfGl, FOSTERAddr7NSrOC, initialRateFdWsumE, initialPeriodUoedCG, initialOwnerCvbx2da, {from: accounts[3]});
		const _ref5mFSylJ2 = accounts[1]
		const _ref4FdouZhw = accounts[3]
		const _ref3aIdR9Z5 = accounts[2]
		const _ref2f4meu8A = accounts[2]
		const _ref1KWOEEye = accounts[2]
		const valueynSEOBa = BigInt("1317")
		const newMinimumT6SqYJ8 = BigInt("812")
		const newBoss2jiFqPUY = accounts[2]
		const valueNFoTilX = BigInt("1373")
		const recipientKBMdCdB = accounts[2]
		const ERC20TokenXnS8a6 = accounts[3]
		const accountsRxA0E = accounts[3]
		await contractwgcGZJ.buy.call(valueynSEOBa, _ref1KWOEEye, _ref2f4meu8A, _ref3aIdR9Z5, _ref4FdouZhw, _ref5mFSylJ2, {from: accounts[2]});
		await contractwgcGZJ.setMinimum.call(newMinimumT6SqYJ8, {from: "0x0000000000000000000000000000000000000001"});
		await contractwgcGZJ.deposeBoss2.call(newBoss2jiFqPUY, {from: accounts[0]});
		await contractwgcGZJ.withdrawERC20.call(ERC20TokenXnS8a6, recipientKBMdCdB, valueNFoTilX, {from: accounts[2]});
		const nullMRAmWYG = await contractwgcGZJ.allowanceFOSTER.call(accountsRxA0E, {from: accounts[3]});

		await expect(contractwgcGZJ.buy.call(valueynSEOBa, _ref1KWOEEye, _ref2f4meu8A, _ref3aIdR9Z5, _ref4FdouZhw, _ref5mFSylJ2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddruFmACyo = accounts[1]
		const FOSTERAddrbtrJm5I = accounts[3]
		const initialRatelM0qefu = BigInt("1128")
		const initialPeriodrNhj8k8 = BigInt("817")
		const initialOwneryv0jhxA = accounts[3]
		const contractNcn5mXp = await Reseller.new(USDTAddruFmACyo, FOSTERAddrbtrJm5I, initialRatelM0qefu, initialPeriodrNhj8k8, initialOwneryv0jhxA, {from: accounts[1]});
		const newBoss1nOHkfJo = accounts[0]
		const valueNHxK7qp = BigInt("174")
		const recipientDouweyj = accounts[2]
		const ERC20TokenFDDtAHY = accounts[1]
		const newBoss2KlGDpJ5 = accounts[1]
		const level51UAhPL = BigInt("93")
		const level4dGmr2h5 = BigInt("61")
		const level3h8jqIUV = BigInt("240")
		const level2QbShnKo = BigInt("224")
		const level1ixrZQs7 = BigInt("215")
		await contractNcn5mXp.deposeBoss1.call(newBoss1nOHkfJo, {from: accounts[1]});
		await contractNcn5mXp.withdrawERC20.call(ERC20TokenFDDtAHY, recipientDouweyj, valueNHxK7qp, {from: accounts[2]});
		await contractNcn5mXp.deposeBoss2.call(newBoss2KlGDpJ5, {from: "0x0000000000000000000000000000000000000001"});
		await contractNcn5mXp.setRefBonus.call(level1ixrZQs7, level2QbShnKo, level3h8jqIUV, level4dGmr2h5, level51UAhPL, {from: accounts[5]});

		await expect(contractNcn5mXp.deposeBoss1.call(newBoss1nOHkfJo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrEfR8ScR = accounts[5]
		const FOSTERAddrFCIP82O = accounts[4]
		const initialRateYfjBOnA = BigInt("846")
		const initialPeriodeIcbXhf = BigInt("994")
		const initialOwnerx2u3omP = accounts[0]
		const contractRaAVeA = await Reseller.new(USDTAddrEfR8ScR, FOSTERAddrFCIP82O, initialRateYfjBOnA, initialPeriodeIcbXhf, initialOwnerx2u3omP, {from: accounts[3]});
		const valuekRfTWQ = BigInt("882")
		const valueJQDMja8 = BigInt("1048")
		const recipientw2ZDmBw = accounts[2]
		const ERC20TokenmVlFNK = "0x0000000000000000000000000000000000000001"
		const newMinimumZJnLIOk = BigInt("1499")
		await contractRaAVeA.withdraw.call(valuekRfTWQ, {from: accounts[1]});
		await contractRaAVeA.withdrawERC20.call(ERC20TokenmVlFNK, recipientw2ZDmBw, valueJQDMja8, {from: "0x0000000000000000000000000000000000000001"});
		await contractRaAVeA.setMinimum.call(newMinimumZJnLIOk, {from: accounts[0]});

		await expect(contractRaAVeA.withdraw.call(valuekRfTWQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrYfizOjr = accounts[5]
		const FOSTERAddrtaLGMfK = accounts[1]
		const initialRateWYTmvm9 = BigInt("479")
		const initialPerioduCqScho = BigInt("1009")
		const initialOwnersvegcDX = accounts[0]
		const contractB6jdncw = await Reseller.new(USDTAddrYfizOjr, FOSTERAddrtaLGMfK, initialRateWYTmvm9, initialPerioduCqScho, initialOwnersvegcDX, {from: accounts[2]});
		const newPeriodl3Ffq0w = BigInt("1547")
		const accountjsJngUv = accounts[5]
		await contractB6jdncw.setPeriod.call(newPeriodl3Ffq0w, {from: accounts[2]});
		const nulln08MADG = await contractB6jdncw.balanceFOSTER.call(accountjsJngUv, {from: accounts[3]});

		await expect(contractB6jdncw.setPeriod.call(newPeriodl3Ffq0w, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrBKGn6FJ = accounts[5]
		const FOSTERAddruOZI5e5 = accounts[1]
		const initialRatezdHoGHF = BigInt("479")
		const initialPeriodD6SnsuX = BigInt("1009")
		const initialOwnerSbmHDgK = accounts[0]
		const contractRM2Rtc = await Reseller.new(USDTAddrBKGn6FJ, FOSTERAddruOZI5e5, initialRatezdHoGHF, initialPeriodD6SnsuX, initialOwnerSbmHDgK, {from: accounts[2]});
		const accountBvuG9du = accounts[6]
		const nullb9USAs3 = await contractRM2Rtc.balanceFOSTER.call(accountBvuG9du, {from: accounts[3]});

		await expect(contractRM2Rtc.balanceFOSTER.call(accountBvuG9du, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrocjyULM = accounts[5]
		const FOSTERAddrhx7zBsn = accounts[4]
		const initialRateJDeojmo = BigInt("846")
		const initialPeriodAOYu3W = BigInt("994")
		const initialOwnerJA93QSg = accounts[0]
		const contractqK8c5rS = await Reseller.new(USDTAddrocjyULM, FOSTERAddrhx7zBsn, initialRateJDeojmo, initialPeriodAOYu3W, initialOwnerJA93QSg, {from: accounts[3]});
		const accounteMwmUfs = accounts[1]
		const valueI3IIS9f = BigInt("882")
		const newMinimumZGPfI7a = BigInt("1541")
		const nullrpkZZdS = await contractqK8c5rS.balanceUSDT.call(accounteMwmUfs, {from: accounts[2]});
		await contractqK8c5rS.withdraw.call(valueI3IIS9f, {from: accounts[1]});
		await contractqK8c5rS.setMinimum.call(newMinimumZGPfI7a, {from: accounts[0]});

		await expect(contractqK8c5rS.balanceUSDT.call(accounteMwmUfs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrVtYUPtd = accounts[5]
		const FOSTERAddrlmtWDhj = accounts[1]
		const initialRated2DAHwc = BigInt("479")
		const initialPeriodNPEVlpa = BigInt("1009")
		const initialOwnerXkCGXZo = accounts[0]
		const contractclmNXsq = await Reseller.new(USDTAddrVtYUPtd, FOSTERAddrlmtWDhj, initialRated2DAHwc, initialPeriodNPEVlpa, initialOwnerXkCGXZo, {from: accounts[2]});
		const newBoss2ICMI6c = accounts[3]
		const accountfmzTwBm = accounts[7]
		await contractclmNXsq.deposeBoss2.call(newBoss2ICMI6c, {from: accounts[0]});
		const nulleqfsBBM = await contractclmNXsq.balanceFOSTER.call(accountfmzTwBm, {from: accounts[3]});

		await expect(contractclmNXsq.deposeBoss2.call(newBoss2ICMI6c, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrjT5cwqm = accounts[5]
		const FOSTERAddrrqSeoqu = accounts[1]
		const initialRateLjJa2I = BigInt("479")
		const initialPeriodxmJAgfH = BigInt("1009")
		const initialOwnercDJe9bp = accounts[0]
		const contractHuDpMYa = await Reseller.new(USDTAddrjT5cwqm, FOSTERAddrrqSeoqu, initialRateLjJa2I, initialPeriodxmJAgfH, initialOwnercDJe9bp, {from: accounts[2]});
		const amountxJRDssY = BigInt("1463")
		const newBoss2wU2nTm = accounts[2]
		const accountYERpUp = accounts[7]
		const level5AvRteK = BigInt("121")
		const level4ZMsH0HT = BigInt("115")
		const level3VOILB5l = BigInt("240")
		const level23CtulH = BigInt("132")
		const level1w9ey1Ry = BigInt("53")
		const nullKO1nPR0 = await contractHuDpMYa.getEstimation.call(amountxJRDssY, {from: accounts[4]});
		await contractHuDpMYa.deposeBoss2.call(newBoss2wU2nTm, {from: accounts[3]});
		const nullrBWKFAp = await contractHuDpMYa.balanceFOSTER.call(accountYERpUp, {from: accounts[3]});
		await contractHuDpMYa.setRefBonus.call(level1w9ey1Ry, level23CtulH, level3VOILB5l, level4ZMsH0HT, level5AvRteK, {from: accounts[4]});

		assert.equal(nullKO1nPR0, 700777)
		await expect(contractHuDpMYa.deposeBoss2.call(newBoss2wU2nTm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrLxxCrXv = accounts[5]
		const FOSTERAddrRt8reTo = accounts[4]
		const initialRateqga1tjY = BigInt("846")
		const initialPeriodpRJyxI1 = BigInt("994")
		const initialOwnerKQf1mDn = accounts[0]
		const contractSgyEZ7 = await Reseller.new(USDTAddrLxxCrXv, FOSTERAddrRt8reTo, initialRateqga1tjY, initialPeriodpRJyxI1, initialOwnerKQf1mDn, {from: accounts[3]});
		const newMinimumyWBqGG0 = BigInt("536")
		const valuec203uA6 = BigInt("882")
		const newMinimum4iypHJ = BigInt("1499")
		await contractSgyEZ7.setMinimum.call(newMinimumyWBqGG0, {from: accounts[3]});
		await contractSgyEZ7.withdraw.call(valuec203uA6, {from: accounts[1]});
		await contractSgyEZ7.setMinimum.call(newMinimum4iypHJ, {from: accounts[0]});

		await expect(contractSgyEZ7.setMinimum.call(newMinimumyWBqGG0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrMIdMWg = accounts[5]
		const FOSTERAddrsfOacLy = accounts[4]
		const initialRateqEZmUoP = BigInt("846")
		const initialPeriodKt3Iyp = BigInt("994")
		const initialOwnergv8RpoS = accounts[0]
		const contractJB95Vwh = await Reseller.new(USDTAddrMIdMWg, FOSTERAddrsfOacLy, initialRateqEZmUoP, initialPeriodKt3Iyp, initialOwnergv8RpoS, {from: accounts[3]});
		const newBoss3GPKL9NO = accounts[2]
		const newPeriodtrdox7P = BigInt("495")
		const valueZWmBzg = BigInt("882")
		const accountUKBLq1 = accounts[0]
		await contractJB95Vwh.deposeBoss3.call(newBoss3GPKL9NO, {from: accounts[2]});
		await contractJB95Vwh.setPeriod.call(newPeriodtrdox7P, {from: accounts[3]});
		await contractJB95Vwh.withdraw.call(valueZWmBzg, {from: accounts[1]});
		const nullkx0Yvys = await contractJB95Vwh.balanceUSDT.call(accountUKBLq1, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractJB95Vwh.deposeBoss3.call(newBoss3GPKL9NO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrVb4KJ0t = accounts[5]
		const FOSTERAddroFCgk6k = accounts[1]
		const initialRateUxTwst = BigInt("479")
		const initialPeriodiWSUctX = BigInt("1009")
		const initialOwnergJgvdNw = accounts[0]
		const contractjfRHt8B = await Reseller.new(USDTAddrVb4KJ0t, FOSTERAddroFCgk6k, initialRateUxTwst, initialPeriodiWSUctX, initialOwnergJgvdNw, {from: accounts[2]});
		const newFeeuhEyrVl = BigInt("20")
		const newMinimumF6vB8KP = BigInt("1513")
		const accountoDmaCvV = accounts[8]
		await contractjfRHt8B.setFee.call(newFeeuhEyrVl, {from: accounts[0]});
		await contractjfRHt8B.setMinimum.call(newMinimumF6vB8KP, {from: accounts[3]});
		const nullsnRoHPb = await contractjfRHt8B.balanceFOSTER.call(accountoDmaCvV, {from: accounts[3]});

		await expect(contractjfRHt8B.setFee.call(newFeeuhEyrVl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrMH8AuiC = accounts[1]
		const FOSTERAddrEQ3Paad = accounts[2]
		const initialRateRfOPgc9 = BigInt("267")
		const initialPerioduVsSv9r = BigInt("829")
		const initialOwnerpTVNEBx = accounts[1]
		const contractesqiaHP = await Reseller.new(USDTAddrMH8AuiC, FOSTERAddrEQ3Paad, initialRateRfOPgc9, initialPerioduVsSv9r, initialOwnerpTVNEBx, {from: accounts[0]});
		const newPeriodlAUsN7Y = BigInt("1601")
		const commentneVsbIf = "oCVc"
		const _ref5gfh19ly = accounts[3]
		const _ref4R7qNvyx = accounts[1]
		const _ref3GVGsdeY = accounts[1]
		const _ref2Y2dktp0 = "0x0000000000000000000000000000000000000001"
		const _ref1qWXCoQY = accounts[2]
		const valuev1tqA9v = BigInt("1472")
		const accountdu3Ly1 = accounts[4]
		const _periodSW8slDO = BigInt("1134")
		const amount4kFqw2 = BigInt("908")
		const recipientjo7MFsr = accounts[0]
		await contractesqiaHP.setPeriod.call(newPeriodlAUsN7Y, {from: accounts[1]});
		await contractesqiaHP.purchase.call(valuev1tqA9v, _ref1qWXCoQY, _ref2Y2dktp0, _ref3GVGsdeY, _ref4R7qNvyx, _ref5gfh19ly, commentneVsbIf, {from: accounts[2]});
		const nulleuNowt6 = await contractesqiaHP.allowanceUSDT.call(accountdu3Ly1, {from: accounts[4]});
		await contractesqiaHP.freezeAndTransfer.call(recipientjo7MFsr, amount4kFqw2, _periodSW8slDO, {from: accounts[4]});

		await expect(contractesqiaHP.setPeriod.call(newPeriodlAUsN7Y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrTwI9PZ6 = accounts[5]
		const FOSTERAddrn649xMD = accounts[1]
		const initialRatelI3jdVc = BigInt("479")
		const initialPeriodevTyB9q = BigInt("1009")
		const initialOwnervWA11Zk = accounts[0]
		const contractrMJ0U46 = await Reseller.new(USDTAddrTwI9PZ6, FOSTERAddrn649xMD, initialRatelI3jdVc, initialPeriodevTyB9q, initialOwnervWA11Zk, {from: accounts[2]});
		const _perioduWm3ZWG = BigInt("859")
		const amountocT3kpr = BigInt("1054")
		const recipientjpQgbFQ = accounts[0]
		const accountuirzlwF = accounts[7]
		await contractrMJ0U46.freezeAndTransfer.call(recipientjpQgbFQ, amountocT3kpr, _perioduWm3ZWG, {from: accounts[2]});
		const nullqENI5zV = await contractrMJ0U46.balanceFOSTER.call(accountuirzlwF, {from: accounts[3]});

		await expect(contractrMJ0U46.freezeAndTransfer.call(recipientjpQgbFQ, amountocT3kpr, _perioduWm3ZWG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrJVqJmlL = accounts[5]
		const FOSTERAddrd3Wbcfa = accounts[4]
		const initialRatebfqyqal = BigInt("846")
		const initialPeriodtHE2lW = BigInt("994")
		const initialOwnerGXVZkTQ = accounts[0]
		const contractYjIMdl2 = await Reseller.new(USDTAddrJVqJmlL, FOSTERAddrd3Wbcfa, initialRatebfqyqal, initialPeriodtHE2lW, initialOwnerGXVZkTQ, {from: accounts[3]});
		const newBoss4Zj9FDh = "0x0000000000000000000000000000000000000001"
		const valuev4VHLcz = BigInt("1707")
		await contractYjIMdl2.deposeBoss4.call(newBoss4Zj9FDh, {from: accounts[3]});
		await contractYjIMdl2.withdraw.call(valuev4VHLcz, {from: accounts[1]});

		await expect(contractYjIMdl2.deposeBoss4.call(newBoss4Zj9FDh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrZF08T9E = accounts[5]
		const FOSTERAddrhg1kR1 = accounts[4]
		const initialRateWDUse8o = BigInt("846")
		const initialPeriodbX3CHod = BigInt("994")
		const initialOwnerRZpjyf = accounts[0]
		const contractUg3ZDmI = await Reseller.new(USDTAddrZF08T9E, FOSTERAddrhg1kR1, initialRateWDUse8o, initialPeriodbX3CHod, initialOwnerRZpjyf, {from: accounts[3]});
		const accountgHFaCg = accounts[4]
		const valuen7n66kC = BigInt("1649")
		const nullqhcQ1A = await contractUg3ZDmI.allowanceUSDT.call(accountgHFaCg, {from: accounts[3]});
		await contractUg3ZDmI.withdraw.call(valuen7n66kC, {from: accounts[1]});

		await expect(contractUg3ZDmI.allowanceUSDT.call(accountgHFaCg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrmYcQcW = accounts[0]
		const FOSTERAddrUF6WT0E = accounts[4]
		const initialRatejSrd9At = BigInt("44")
		const initialPeriodYe2OkVn = BigInt("436")
		const initialOwnerYFCOAkO = accounts[0]
		const contractYTHx5EM = await Reseller.new(USDTAddrmYcQcW, FOSTERAddrUF6WT0E, initialRatejSrd9At, initialPeriodYe2OkVn, initialOwnerYFCOAkO, {from: accounts[2]});
		const _periodukUVJnn = BigInt("532")
		const amount1dg3MB = BigInt("1316")
		const recipientgwDB49a = "0x0000000000000000000000000000000000000001"
		const valueQKYrJgT = BigInt("1394")
		const newFeeM8BqjbK = BigInt("47")
		const newBoss2pifHGSf = accounts[4]
		const newFeeXS3UL67 = BigInt("110")
		const _periodFcwBGkf = BigInt("1035")
		const amountJWbQ7L1 = BigInt("1802")
		const recipientfFAopiT = accounts[0]
		await contractYTHx5EM.freezeAndTransfer.call(recipientgwDB49a, amount1dg3MB, _periodukUVJnn, {from: accounts[0]});
		await contractYTHx5EM.withdraw.call(valueQKYrJgT, {from: accounts[3]});
		await contractYTHx5EM.setFee.call(newFeeM8BqjbK, {from: accounts[0]});
		await contractYTHx5EM.deposeBoss2.call(newBoss2pifHGSf, {from: accounts[0]});
		await contractYTHx5EM.setFee.call(newFeeXS3UL67, {from: accounts[4]});
		await contractYTHx5EM.freezeAndTransfer.call(recipientfFAopiT, amountJWbQ7L1, _periodFcwBGkf, {from: accounts[2]});

		await expect(contractYTHx5EM.freezeAndTransfer.call(recipientgwDB49a, amount1dg3MB, _periodukUVJnn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrfRg1hRI = accounts[5]
		const FOSTERAddrywwFHfn = accounts[4]
		const initialRateOX1euGA = BigInt("846")
		const initialPeriodLWBISP = BigInt("994")
		const initialOwnergnKPrQ = accounts[0]
		const contractU55loOf = await Reseller.new(USDTAddrfRg1hRI, FOSTERAddrywwFHfn, initialRateOX1euGA, initialPeriodLWBISP, initialOwnergnKPrQ, {from: accounts[3]});
		const level5GAARtei = BigInt("114")
		const level4MZEoWtw = BigInt("178")
		const level3EVtnJNu = BigInt("114")
		const level2zU4udj = BigInt("233")
		const level1UVIeHFB = BigInt("93")
		const accountRUz5xfw = accounts[0]
		const valueBvHVlj = BigInt("1655")
		await contractU55loOf.setRefBonus.call(level1UVIeHFB, level2zU4udj, level3EVtnJNu, level4MZEoWtw, level5GAARtei, {from: accounts[0]});
		const nullweTQCKg = await contractU55loOf.allowanceFOSTER.call(accountRUz5xfw, {from: accounts[2]});
		await contractU55loOf.withdraw.call(valueBvHVlj, {from: accounts[1]});

		await expect(contractU55loOf.setRefBonus.call(level1UVIeHFB, level2zU4udj, level3EVtnJNu, level4MZEoWtw, level5GAARtei, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrL85NHKH = accounts[5]
		const FOSTERAddrB31BKhH = accounts[1]
		const initialRateVKAF9Yl = BigInt("479")
		const initialPeriodVIia85x = BigInt("1009")
		const initialOwnermQNTdb = accounts[0]
		const contractJTDEpv = await Reseller.new(USDTAddrL85NHKH, FOSTERAddrB31BKhH, initialRateVKAF9Yl, initialPeriodVIia85x, initialOwnermQNTdb, {from: accounts[2]});
		const commentCdGs2tL = "QrtB6LDCcGLzRXAIkyBer33icTPWmgZF59ZfUa1LtlIM5YY2uUWNLu1"
		const _ref5gyv34lS = accounts[3]
		const _ref4NuBBTvi = accounts[4]
		const _ref3tLIBqVP = accounts[2]
		const _ref2UuKDiFT = accounts[0]
		const _ref1hBzBJc0 = accounts[1]
		const valuePjPWM2M = BigInt("948")
		const accountmG8RpjU = accounts[8]
		const newFeemTDV9GC = BigInt("30")
		await contractJTDEpv.purchase.call(valuePjPWM2M, _ref1hBzBJc0, _ref2UuKDiFT, _ref3tLIBqVP, _ref4NuBBTvi, _ref5gyv34lS, commentCdGs2tL, {from: accounts[0]});
		const nullt2Pu2Qb = await contractJTDEpv.balanceFOSTER.call(accountmG8RpjU, {from: accounts[3]});
		await contractJTDEpv.setFee.call(newFeemTDV9GC, {from: accounts[0]});

		await expect(contractJTDEpv.purchase.call(valuePjPWM2M, _ref1hBzBJc0, _ref2UuKDiFT, _ref3tLIBqVP, _ref4NuBBTvi, _ref5gyv34lS, commentCdGs2tL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrWKzdC24 = accounts[0]
		const FOSTERAddr3ZdSwt = accounts[2]
		const initialRate5C8jR7 = BigInt("1622")
		const initialPeriodGVYeTO = BigInt("828")
		const initialOwnerw1Eyh6H = accounts[2]
		const contractoBMCjc9 = await Reseller.new(USDTAddrWKzdC24, FOSTERAddr3ZdSwt, initialRate5C8jR7, initialPeriodGVYeTO, initialOwnerw1Eyh6H, {from: accounts[1]});
		const newBoss4DbeeDU = "0x0000000000000000000000000000000000000001"
		const newBoss3PiCa0pL = accounts[2]
		const accountfZhEeNN = accounts[5]
		await contractoBMCjc9.deposeBoss4.call(newBoss4DbeeDU, {from: accounts[2]});
		await contractoBMCjc9.deposeBoss3.call(newBoss3PiCa0pL, {from: accounts[5]});
		const nullrOeaWi = await contractoBMCjc9.allowanceUSDT.call(accountfZhEeNN, {from: accounts[0]});

		await expect(contractoBMCjc9.deposeBoss4.call(newBoss4DbeeDU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrH3NuaY4 = accounts[5]
		const FOSTERAddreXzfDC = accounts[4]
		const initialRateLr7O0nC = BigInt("846")
		const initialPeriodSYMXYOJ = BigInt("994")
		const initialOwnerfnvEQUG = accounts[0]
		const contractoRyb18 = await Reseller.new(USDTAddrH3NuaY4, FOSTERAddreXzfDC, initialRateLr7O0nC, initialPeriodSYMXYOJ, initialOwnerfnvEQUG, {from: accounts[3]});
		const newBoss4PeNJxLs = accounts[4]
		const newBoss3l6FbaVw = accounts[0]
		const valueJJ5I56w = BigInt("1672")
		await contractoRyb18.deposeBoss4.call(newBoss4PeNJxLs, {from: accounts[0]});
		await contractoRyb18.deposeBoss3.call(newBoss3l6FbaVw, {from: accounts[0]});
		await contractoRyb18.withdraw.call(valueJJ5I56w, {from: accounts[1]});
		await contractoRyb18.switchState.call({from: accounts[0]});

		await expect(contractoRyb18.deposeBoss4.call(newBoss4PeNJxLs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrJn54m8c = accounts[4]
		const FOSTERAddrIMs4Zi = accounts[5]
		const initialRateZgixMzV = BigInt("1887")
		const initialPeriodgPDZ7Bj = BigInt("662")
		const initialOwnerMRL2QeB = accounts[0]
		const contractJ5mQfEw = await Reseller.new(USDTAddrJn54m8c, FOSTERAddrIMs4Zi, initialRateZgixMzV, initialPeriodgPDZ7Bj, initialOwnerMRL2QeB, {from: "0x0000000000000000000000000000000000000001"});
		const newRateALaLH6B = BigInt("517")
		const accountXId21Fx = accounts[4]
		const _periodxasL4F = BigInt("882")
		const amountpAFO8FF = BigInt("970")
		const recipientIV0zM4T = accounts[3]
		const newPeriodNLJmTOc = BigInt("723")
		const newBoss4NeM0mM8 = accounts[0]
		const _periodmMM69Nm = BigInt("1653")
		const amountG2ZYM2K = BigInt("184")
		const recipientga6BZs6 = accounts[3]
		await contractJ5mQfEw.setRate.call(newRateALaLH6B, {from: accounts[3]});
		const nullW3AwDsg = await contractJ5mQfEw.allowanceFOSTER.call(accountXId21Fx, {from: accounts[1]});
		await contractJ5mQfEw.freezeAndTransfer.call(recipientIV0zM4T, amountpAFO8FF, _periodxasL4F, {from: accounts[2]});
		await contractJ5mQfEw.setPeriod.call(newPeriodNLJmTOc, {from: accounts[0]});
		await contractJ5mQfEw.deposeBoss4.call(newBoss4NeM0mM8, {from: accounts[0]});
		await contractJ5mQfEw.freezeAndTransfer.call(recipientga6BZs6, amountG2ZYM2K, _periodmMM69Nm, {from: accounts[1]});
	});

	it('test for Reseller', async () => {
		const USDTAddrE7ggCwE = accounts[5]
		const FOSTERAddrEVRE6s = accounts[1]
		const initialRatezYs6v5u = BigInt("479")
		const initialPeriodSUAyqHl = BigInt("1009")
		const initialOwnerVVrVuIo = accounts[0]
		const contractQiO8AKR = await Reseller.new(USDTAddrE7ggCwE, FOSTERAddrEVRE6s, initialRatezYs6v5u, initialPeriodSUAyqHl, initialOwnerVVrVuIo, {from: accounts[2]});
		const newRatezgV9AtZ = BigInt("1689")
		const accountTYvAxeI = accounts[8]
		const newBoss4U5mqfgS = accounts[3]
		await contractQiO8AKR.setRate.call(newRatezgV9AtZ, {from: accounts[0]});
		const nulleKVlSLJ = await contractQiO8AKR.balanceFOSTER.call(accountTYvAxeI, {from: accounts[3]});
		await contractQiO8AKR.deposeBoss4.call(newBoss4U5mqfgS, {from: accounts[2]});

		await expect(contractQiO8AKR.setRate.call(newRatezgV9AtZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrZZkNPrm = accounts[1]
		const FOSTERAddrbbiB1wY = "0x0000000000000000000000000000000000000001"
		const initialRateOCna30v = BigInt("255")
		const initialPeriodmCNIXc = BigInt("918")
		const initialOwnerljzi00H = accounts[2]
		const contractxcm3AtC = await Reseller.new(USDTAddrZZkNPrm, FOSTERAddrbbiB1wY, initialRateOCna30v, initialPeriodmCNIXc, initialOwnerljzi00H, {from: accounts[1]});
		const newMinimumJRtmEDu = BigInt("752")
		const newBoss4AHZRODy = accounts[0]
		const accountC7lO2v = accounts[3]
		const _periodcTHOOHH = BigInt("28")
		const amountB9ZBcSt = BigInt("469")
		const recipientWSDmsvo = accounts[1]
		const commentUEZNYcl = "xca2LCqWYgHjfH8ts7WSb7h6nXn9Ic8VvVXOm6rsztaMkHoTU465Wo4Ly"
		const _ref5W0M6rev = accounts[1]
		const _ref4lL5j4mD = accounts[3]
		const _ref3WVH04hm = accounts[1]
		const _ref2FE48jor = accounts[3]
		const _ref1kyMOk7V = accounts[1]
		const valueHjF32B = BigInt("669")
		await contractxcm3AtC.setMinimum.call(newMinimumJRtmEDu, {from: accounts[2]});
		await contractxcm3AtC.deposeBoss4.call(newBoss4AHZRODy, {from: accounts[4]});
		const nullhFHjkTk = await contractxcm3AtC.allowanceUSDT.call(accountC7lO2v, {from: accounts[2]});
		await contractxcm3AtC.freezeAndTransfer.call(recipientWSDmsvo, amountB9ZBcSt, _periodcTHOOHH, {from: accounts[3]});
		await contractxcm3AtC.purchase.call(valueHjF32B, _ref1kyMOk7V, _ref2FE48jor, _ref3WVH04hm, _ref4lL5j4mD, _ref5W0M6rev, commentUEZNYcl, {from: accounts[3]});

		await expect(contractxcm3AtC.setMinimum.call(newMinimumJRtmEDu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})