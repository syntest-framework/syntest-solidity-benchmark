const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addressexHXAh3 = accounts[1]
		const addresszbZiZOg = accounts[1]
		const uintsdAQ0v = BigInt("1843")
		const uintFKBZMpd = BigInt("113")
		const NasiLiquidityPoolFactorykdwvHKq = await NasiLiquidityPoolFactory.new(addressexHXAh3, addresszbZiZOg, uintsdAQ0v, uintFKBZMpd, {from: accounts[1]});
		const uintdD2o2to = BigInt("353")
		const addressgdkySQ3 = accounts[5]
		const addressbPxf5yS = accounts[0]
		const addressev1emHp = accounts[3]
		const addressKyLnEaj = accounts[0]
		const boolQl3I71f = await NasiLiquidityPoolFactorykdwvHKq.increaseAllowance.call(addressgdkySQ3, uintdD2o2to, {from: accounts[0]});
		const boolRyL7yo3 = await NasiLiquidityPoolFactorykdwvHKq.isPauser.call(addressbPxf5yS, {from: accounts[2]});
		const uint256Q66tCIC = await NasiLiquidityPoolFactorykdwvHKq.allowance.call(addressKyLnEaj, addressev1emHp, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringBFvCEbP = "V4gxWn7GzaW8X"
		const stringSjDKavq = "gSr6UmFLf8GdGAwLPgFm1Juq8jQedHs24V672zQOVNziwp8QQ5LoWMTyszy"
		const uintMNsoJCU = BigInt("152")
		const NasiLiquidityPoolFactoryAiqQdUw = await NasiLiquidityPoolFactory.new(stringBFvCEbP, stringSjDKavq, uintMNsoJCU, {from: accounts[1]});
		const uintY0Pg25D = BigInt("874")
		const uints7bXDm7 = BigInt("1103")
		await NasiLiquidityPoolFactoryAiqQdUw.whenNotPaused.call({from: accounts[2]});
		const uint256bpr6ZWz = await NasiLiquidityPoolFactoryAiqQdUw.withdraw.call(uints7bXDm7, uintY0Pg25D, {from: accounts[2]});
		await NasiLiquidityPoolFactoryAiqQdUw.massUpdatePools.call({from: accounts[1]});
		await NasiLiquidityPoolFactoryAiqQdUw.whenNotPaused.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringRRELlw8 = "IhsaFziQdGIezSgHwMBP3ktfQrVwMduYpofuV8bMMQrApCTv8VuOtjrDsEy8YtqHgnxdd6emtWVXXyCl8P6WV8WNQx1WtEX"
		const stringL2Jq4z = "w34n5eS8CVkIKDuCJBpfUOm8cex13aLiPYaGDqE"
		const uint5CeKti = BigInt("134")
		const NasiLiquidityPoolFactorybiBSn28 = await NasiLiquidityPoolFactory.new(stringRRELlw8, stringL2Jq4z, uint5CeKti, {from: accounts[3]});
		const uintQydocaf = BigInt("1351")
		const addressTb2Ut9M = accounts[0]
		const uintt6xj7QT = BigInt("412")
		const uintSjM2FrV = BigInt("1078")
		const uintku7vsth = BigInt("479")
		const uintwgrvhHg = BigInt("1795")
		const addressp3xLvGN = accounts[4]
		const uint256xnLpCGe = await NasiLiquidityPoolFactorybiBSn28.getPriorVotes.call(addressTb2Ut9M, uintQydocaf, {from: accounts[4]});
		const uint256insVVhc = await NasiLiquidityPoolFactorybiBSn28.enterStaking.call(uintt6xj7QT, {from: accounts[3]});
		const uint256Xv3E5Jn = await NasiLiquidityPoolFactorybiBSn28.withdraw.call(uintku7vsth, uintSjM2FrV, {from: accounts[0]});
		const uint256xc4NdIc = await NasiLiquidityPoolFactorybiBSn28.updatePool.call(uintwgrvhHg, {from: accounts[5]});
		const addresslwF5oob = await NasiLiquidityPoolFactorybiBSn28.addPauser.call(addressp3xLvGN, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringSLlgMMo = "cfkb6KRAh2HoeOFbDPLgUnxDTrxowRkCpYYpqOt5tcVXspwfhyHgusBxD3ZoEfoo0oKQ3x2NM6jW2gcAK7enw"
		const stringU3xXvAC = "fVTw7aMFSkKULPoOrHwpKkCbLoNcYYrXAcrAIC3PBg9TykckYLyGY8CuMFuNeaB0EvQdSEcbj4wEOhMtOuhEWuEKreoy"
		const uinticdKcHr = BigInt("128")
		const NasiLiquidityPoolFactoryO0Q4Nad = await NasiLiquidityPoolFactory.new(stringSLlgMMo, stringU3xXvAC, uinticdKcHr, {from: accounts[1]});
		const uintFCWRmwV = BigInt("69")
		const addressb3e5wu7 = accounts[0]
		await NasiLiquidityPoolFactoryO0Q4Nad.onlyPauser.call({from: accounts[5]});
		const uint256Dq6KjYb = await NasiLiquidityPoolFactoryO0Q4Nad.getPriorVotes.call(addressb3e5wu7, uintFCWRmwV, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringEFrJkVC = "OryUOrdYEBmICNs2dLrP8W1p4geTeIMP7Hho2vGpLcFpjzRgn444AKFwWE9xiXYUBDdXEmxaTbUFDMbXih"
		const stringieoo8LW = "WJWNcARaSqvTLPsiCluZtQVErdKt5P1O45Y13NKyE5FfOR"
		const uintUxrYNIX = BigInt("10")
		const NasiLiquidityPoolFactoryr2aQngJ = await NasiLiquidityPoolFactory.new(stringEFrJkVC, stringieoo8LW, uintUxrYNIX, {from: accounts[3]});
		const byteGFtbaVd = "0x122013101705051c060905190c0d1819160c15041d031d1a0a1e09171d1c0f15"
		const bytevGOHi7 = "0x1b17050a09151411160c001700190a0604010a17100f0903100b041f0c1b0519"
		const uintcNPkDl = BigInt("237")
		const uintK0vZRYx = BigInt("1858")
		const uintNKh2gri = BigInt("1019")
		const addressuJ5zYhW = accounts[1]
		const uintgKLYYpP = BigInt("449")
		const 
yRcP4E = await NasiLiquidityPoolFactoryr2aQngJ.delegateBySig.call(addressuJ5zYhW, uintNKh2gri, uintK0vZRYx, uintcNPkDl, bytevGOHi7, byteGFtbaVd, {from: accounts[0]});
		const uint256sruXZhu = await NasiLiquidityPoolFactoryr2aQngJ.migrate.call(uintgKLYYpP, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringsEK1lrt = "iGeCIBff9kwsTVQJ31b3YMBfFlcmzBEHDVUcCcq7TY77rv1blXqA2LOx2eui9Wys"
		const stringUqwfWtx = "X5VxTDcOuzJ9AYnH7bYq4b0TpCwanTu2nxdY79XXijRWxI4KPBZnw"
		const uintOWbqn1X = BigInt("110")
		const NasiLiquidityPoolFactoryzedyQrS = await NasiLiquidityPoolFactory.new(stringsEK1lrt, stringUqwfWtx, uintOWbqn1X, {from: accounts[3]});
		const uintSMlcSFz = BigInt("570")
		const addresskiGnWcv = accounts[1]
		const addressf1Ud7xj = accounts[0]
		const stringvKMdoY8 = await NasiLiquidityPoolFactoryzedyQrS.name.call({from: accounts[2]});
		const boolvxeBLf = await NasiLiquidityPoolFactoryzedyQrS.decreaseAllowance.call(addresskiGnWcv, uintSMlcSFz, {from: accounts[3]});
		const addressfrClkCV = await NasiLiquidityPoolFactoryzedyQrS.addMinter.call(addressf1Ud7xj, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresslqjbZSp = accounts[0]
		const addressw1ukFX = accounts[4]
		const uintYz5vBct = BigInt("1870")
		const uintOuFC9YA = BigInt("1581")
		const NasiLiquidityPoolFactoryUwvHKOW = await NasiLiquidityPoolFactory.new(addresslqjbZSp, addressw1ukFX, uintYz5vBct, uintOuFC9YA, {from: "0x0000000000000000000000000000000000000001"});
		const addressmW0ROh3 = accounts[3]
		const uintjMAazLk = BigInt("1847")
		const addresslHTJ8K9 = accounts[5]
		const addressr0X7yS = "0x0000000000000000000000000000000000000001"
		const uintUBp8ZQF = BigInt("1299")
		const addressyrizafv = "0x0000000000000000000000000000000000000001"
		const addressTFaspzJ = accounts[4]
		const addressaKvWDzB = accounts[3]
		const addressOhygDfu = await NasiLiquidityPoolFactoryUwvHKOW.addMinter.call(addressmW0ROh3, {from: accounts[1]});
		const boolGdVTUY6 = await NasiLiquidityPoolFactoryUwvHKOW.transferFrom.call(addressr0X7yS, addresslHTJ8K9, uintjMAazLk, {from: accounts[2]});
		const boolJSrbHNZ = await NasiLiquidityPoolFactoryUwvHKOW.transfer.call(addressyrizafv, uintUBp8ZQF, {from: accounts[4]});
		const uint256sKJVf9X = await NasiLiquidityPoolFactoryUwvHKOW.allowance.call(addressaKvWDzB, addressTFaspzJ, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringO6OYenE = "9GN7GR3IM9ShQvG5yi6wzBzEas8bP"
		const stringRlxLT8x = "iWFQKfEY7BOIuoHSpBJLeRGSmrEt"
		const uintcx7kg5e = BigInt("66")
		const NasiLiquidityPoolFactoryCI4qZW = await NasiLiquidityPoolFactory.new(stringO6OYenE, stringRlxLT8x, uintcx7kg5e, {from: accounts[1]});
		const uintFRnMNTw = BigInt("1443")
		const addressOueZFES = accounts[2]
		const addresszDWkCEZ = accounts[0]
		await NasiLiquidityPoolFactoryCI4qZW.onlyMinter.call({from: accounts[3]});
		const boolOeb0LdS = await NasiLiquidityPoolFactoryCI4qZW.transferFrom.call(addresszDWkCEZ, addressOueZFES, uintFRnMNTw, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringecATBgy = "1jywPWn5P8wU61ei9CssHvzKg4zClbL6RJ0tIoUhOR22s5c56uczVkEb9sJUbbE3Fi4sOiai42AAUHA"
		const string64ZfLL = "epbhqoxFCohB4aiXv4q2GRY9sELjfxaDEjNKqSUeLuPVm2bJqWGAki78uRQaEI2"
		const uinttwCYrux = BigInt("187")
		const NasiLiquidityPoolFactoryb3UhxlB = await NasiLiquidityPoolFactory.new(stringecATBgy, string64ZfLL, uinttwCYrux, {from: accounts[1]});
		const uintsCG8Wny = BigInt("946")
		const uintWwwf5yY = BigInt("1067")
		const uintX12Z41O = BigInt("1203")
		const addressULI4mcZ = accounts[2]
		const 
p1YtGRC = await NasiLiquidityPoolFactoryb3UhxlB._writeCheckpoint.call(addressULI4mcZ, uintX12Z41O, uintWwwf5yY, uintsCG8Wny, {from: accounts[2]});
		await NasiLiquidityPoolFactoryb3UhxlB.renounceOwnership.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringMObZaRm = "RxUu3E"
		const stringFGeeNMg = "kHPDtHgCnhRcEmrGLhLraam"
		const uintSczQfJG = BigInt("77")
		const NasiLiquidityPoolFactoryCEUAcmQ = await NasiLiquidityPoolFactory.new(stringMObZaRm, stringFGeeNMg, uintSczQfJG, {from: accounts[3]});
		const uintWXioxEt = BigInt("683")
		const uint7ZwikG = BigInt("299")
		const addressa7JVYft = accounts[3]
		const uint7JJ83h = BigInt("182")
		const uint256OBB0I3 = await NasiLiquidityPoolFactoryCEUAcmQ.deposit.call(uint7ZwikG, uintWXioxEt, {from: accounts[1]});
		await NasiLiquidityPoolFactoryCEUAcmQ.massUpdatePools.call({from: accounts[0]});
		const uint256c4dTnKB = await NasiLiquidityPoolFactoryCEUAcmQ.pendingNasi.call(uint7JJ83h, addressa7JVYft, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringo3OT0Jm = "1j5yBQaIgwmd134hY16bjLW"
		const stringVzeHnsM = "TdTniGhtcc593elWc9KCx0aLrPyWFuP"
		const uintIoTGxTX = BigInt("22")
		const NasiLiquidityPoolFactoryb1mkAFh = await NasiLiquidityPoolFactory.new(stringo3OT0Jm, stringVzeHnsM, uintIoTGxTX, {from: accounts[1]});
		const uintg3Gmc5P = BigInt("1078")
		const uintA7L8td9 = BigInt("764")
		const boologgLNfN = true
		const uintUYvobIE = BigInt("1118")
		const uintvcPRmfm = BigInt("1970")
		const uint256JkSBBbn = await NasiLiquidityPoolFactoryb1mkAFh.getBonusMultiplier.call(uintA7L8td9, uintg3Gmc5P, {from: accounts[3]});
		const stringbIC3crE = await NasiLiquidityPoolFactoryb1mkAFh.symbol.call({from: accounts[1]});
		const uint256I3aqU3Z = await NasiLiquidityPoolFactoryb1mkAFh.setAllocationPoint.call(uintvcPRmfm, uintUYvobIE, boologgLNfN, {from: accounts[4]});
		await NasiLiquidityPoolFactoryb1mkAFh.whenNotPaused.call({from: accounts[2]});
		await NasiLiquidityPoolFactoryb1mkAFh.unpause.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringXVLSxiI = "Kk7HzEvwshQ8HgsSJinUQsRGh2mlp6bbcXjHtSpQaRdSMAIR6VoxAbnjgWgFPv9MTuEKFRWaHpWpaiNDQM"
		const stringFpp3eoZ = "sDBEv5GBTmfki"
		const uintB3Jqr0U = BigInt("204")
		const NasiLiquidityPoolFactoryuyQtmse = await NasiLiquidityPoolFactory.new(stringXVLSxiI, stringFpp3eoZ, uintB3Jqr0U, {from: accounts[1]});
		const uinteKhuYs = BigInt("1637")
		const uintFxxBjj = BigInt("1193")
		const addressY2BhhnA = accounts[0]
		const uint8qobEgCZ = await NasiLiquidityPoolFactoryuyQtmse.decimals.call({from: accounts[0]});
		const uint256Blw9kk = await NasiLiquidityPoolFactoryuyQtmse.deposit.call(uintFxxBjj, uinteKhuYs, {from: accounts[4]});
		const addresscGuAKIU = await NasiLiquidityPoolFactoryuyQtmse.delegate.call(addressY2BhhnA, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressciSxx83 = accounts[0]
		const addresstN9z6w8 = accounts[0]
		const uintD563IjB = BigInt("936")
		const uintjRmp5VR = BigInt("1513")
		const NasiLiquidityPoolFactoryhB9UNXI = await NasiLiquidityPoolFactory.new(addressciSxx83, addresstN9z6w8, uintD563IjB, uintjRmp5VR, {from: accounts[1]});
		const uintpmh4Jvr = BigInt("223")
		const uinteey1xLb = BigInt("1481")
		const uintjX1tcQv = BigInt("1851")
		const uintojkAvDY = BigInt("192")
		const addressAdwU05S = accounts[3]
		const uint256zjyi6TI = await NasiLiquidityPoolFactoryhB9UNXI.enterStaking.call(uintpmh4Jvr, {from: accounts[0]});
		const stringXnRvgb6 = await NasiLiquidityPoolFactoryhB9UNXI.name.call({from: accounts[3]});
		const uint256bUtd0Tt = await NasiLiquidityPoolFactoryhB9UNXI.withdraw.call(uintjX1tcQv, uinteey1xLb, {from: accounts[2]});
		const stringZnJyGs = await NasiLiquidityPoolFactoryhB9UNXI.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolccjwiIk = await NasiLiquidityPoolFactoryhB9UNXI.transfer.call(addressAdwU05S, uintojkAvDY, {from: accounts[3]});
		await NasiLiquidityPoolFactoryhB9UNXI.renouncePauser.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringnrlbT2 = "kGwTC33qy38bICy1ht4IoOMGp"
		const stringOFohwO9 = "F43xQqx5vfim0l2v0EWqRywjcbIRqFpvvk8bSvgyKm8Upoapgy52ibQ5BxYYyr1uHF"
		const uintyO8Gjyp = BigInt("41")
		const NasiLiquidityPoolFactoryxMr68g3 = await NasiLiquidityPoolFactory.new(stringnrlbT2, stringOFohwO9, uintyO8Gjyp, {from: accounts[4]});
		const uintoQO7LuV = BigInt("1261")
		const addressnmIKo5 = accounts[0]
		const addressTFsQAEl = accounts[4]
		const uintqcNDj5 = BigInt("836")
		const addressj1whDWJ = accounts[3]
		const uintMCbSA94 = BigInt("1589")
		const uintFzJuc1 = BigInt("479")
		const addressvecHHRf = accounts[0]
		const uintqaedcDN = BigInt("1134")
		const uintt5CytDB = BigInt("610")
		const uint256DZlSuSN = await NasiLiquidityPoolFactoryxMr68g3.getPriorVotes.call(addressnmIKo5, uintoQO7LuV, {from: accounts[3]});
		const address7vywvN = await NasiLiquidityPoolFactoryxMr68g3.transferOwnership.call(addressTFsQAEl, {from: accounts[1]});
		const boolnVZOg2V = await NasiLiquidityPoolFactoryxMr68g3.decreaseAllowance.call(addressj1whDWJ, uintqcNDj5, {from: accounts[3]});
		const uint256YxwGvzA = await NasiLiquidityPoolFactoryxMr68g3.withdraw.call(uintFzJuc1, uintMCbSA94, {from: accounts[0]});
		const addresshjIjIfL = await NasiLiquidityPoolFactoryxMr68g3.delegate.call(addressvecHHRf, {from: accounts[5]});
		const uint256bsqrxYl = await NasiLiquidityPoolFactoryxMr68g3.withdraw.call(uintt5CytDB, uintqaedcDN, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringvkFE9oV = "z5zcQsYEagB3tsO0By3WCBXsvdQmIkkoH19YMU4J7mHoqHJHH6TCgOChEs4t4ngeOt5MzVcP3AX"
		const stringzSEhIUb = "bUlC3oz2FWlFtus2nR6jYNmopf1N8zrNshlSzCjUgr9FhDLqzmHECISM4gx8RqFQT5y5P0MNzyHyBtv5"
		const uintmx90TNn = BigInt("35")
		const NasiLiquidityPoolFactoryCtrXs44 = await NasiLiquidityPoolFactory.new(stringvkFE9oV, stringzSEhIUb, uintmx90TNn, {from: accounts[3]});
		const uintQ3eAqCc = BigInt("540")
		const addresssOrFioz = accounts[4]
		await NasiLiquidityPoolFactoryCtrXs44.onlyMinter.call({from: accounts[5]});
		const uint256wxVhVoE = await NasiLiquidityPoolFactoryCtrXs44.getPriorVotes.call(addresssOrFioz, uintQ3eAqCc, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringgnBhAdF = "mFjDFU5GEaL4z2L4wSK5AUUBD6Bm1HM81Ba75fuj9uWJO5IM4eR3ytcDGvWz9WuqF6iHSIRzzvnuVB2JRPFRXKRcTMKRx"
		const stringEXlzf2H = "5sRbO6jjJnwHB390r59OiWbW8DqDOjmzLiI7hrtVyRWCwC4e4BHGWhrCMOXAzQdObueT7EIwby7X42w9Vnw8Ekbf"
		const uintx8Dpu0d = BigInt("48")
		const NasiLiquidityPoolFactorybZKAHrU = await NasiLiquidityPoolFactory.new(stringgnBhAdF, stringEXlzf2H, uintx8Dpu0d, {from: accounts[3]});
		const uintbB66sUZ = BigInt("773")
		const addresslMp0C1i = accounts[2]
		const uintTMUEnl = BigInt("1823")
		const addressgRzYC3 = accounts[1]
		await NasiLiquidityPoolFactorybZKAHrU.onlyOwner.call({from: accounts[0]});
		const bool7wt6xb = await NasiLiquidityPoolFactorybZKAHrU.decreaseAllowance.call(addresslMp0C1i, uintbB66sUZ, {from: accounts[4]});
		const addressI71PCEO = await NasiLiquidityPoolFactorybZKAHrU.burnFrom.call(addressgRzYC3, uintTMUEnl, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringLydpqoe = "RyNZeloAJz8H7Rap73NQLkahOcoCl8KHkDlRhkLLzpYQQAncWfWq5wh844300MCOrF4keS4XGU"
		const stringWv2mRMB = "PQhDjszwDsBR0Pm1ETpjsMjcwK7iECJJp7A5tAYwhrQLiWvPwBBYrxko9qcWGQP7o96qBonkBY3GDX62"
		const uintMyU8aZ5 = BigInt("101")
		const NasiLiquidityPoolFactoryUSy5tKC = await NasiLiquidityPoolFactory.new(stringLydpqoe, stringWv2mRMB, uintMyU8aZ5, {from: "0x0000000000000000000000000000000000000001"});
		const addressjxNRJV = accounts[0]
		const uintV952AJT = BigInt("420")
		const addressElz8Vvf = accounts[2]
		const addressUgcJdOb = accounts[3]
		const uintrhGMsJ3 = BigInt("1913")
		const uintQ3WzXPr = BigInt("1201")
		const addressdrDJPCn = accounts[0]
		const addresscoRqYW3 = accounts[4]
		const addressjamTLq = accounts[4]
		const addressALQbcdB = await NasiLiquidityPoolFactoryUSy5tKC.delegates.call(addressjxNRJV, {from: accounts[3]});
		const boolyP3UGdx = await NasiLiquidityPoolFactoryUSy5tKC.transferFrom.call(addressUgcJdOb, addressElz8Vvf, uintV952AJT, {from: accounts[5]});
		const uint256WKIGmG6 = await NasiLiquidityPoolFactoryUSy5tKC.enterStaking.call(uintrhGMsJ3, {from: accounts[1]});
		const uint256I3VhCab = await NasiLiquidityPoolFactoryUSy5tKC.getPriorVotes.call(addressdrDJPCn, uintQ3WzXPr, {from: accounts[3]});
		const addressjVXC2L8 = await NasiLiquidityPoolFactoryUSy5tKC.delegate.call(addresscoRqYW3, {from: accounts[1]});
		const uint256NqB5Xfa = await NasiLiquidityPoolFactoryUSy5tKC.getCurrentVotes.call(addressjamTLq, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringtr3HxPl = "IGX1l51kkJ0AJ8ObXxu1zFpAVX6n0MkvoVn"
		const stringPzQROKP = "BhdV9Ypc4CbiRXuM3ihn1"
		const uintFGQjL4l = BigInt("205")
		const NasiLiquidityPoolFactorySCUv02g = await NasiLiquidityPoolFactory.new(stringtr3HxPl, stringPzQROKP, uintFGQjL4l, {from: accounts[4]});
		const addressqDw8qcA = "0x0000000000000000000000000000000000000001"
		const uintaBvsVn0 = BigInt("745")
		const addressyKGlIlA = accounts[4]
		const uint256kBu5sLJ = await NasiLiquidityPoolFactorySCUv02g.pendingNasi.call(uintaBvsVn0, addressqDw8qcA, {from: "0x0000000000000000000000000000000000000001"});
		const addressgeP3XIO = await NasiLiquidityPoolFactorySCUv02g.dev.call(addressyKGlIlA, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressuWDup6c = accounts[2]
		const addressLAs6r5t = accounts[2]
		const uintdKbKXA = BigInt("787")
		const uintwyqemSK = BigInt("1148")
		const NasiLiquidityPoolFactoryPk3Xqb = await NasiLiquidityPoolFactory.new(addressuWDup6c, addressLAs6r5t, uintdKbKXA, uintwyqemSK, {from: accounts[2]});
		const uintwlBhrb = BigInt("883")
		const uintDZ9dYwK = BigInt("268")
		const addressGRU7uMt = accounts[1]
		const addressenSmb3p = accounts[4]
		const uintq2ZESGI = BigInt("1122")
		const uintIGGdXlW = BigInt("245")
		const uintc2nPT4a = BigInt("591")
		const uint256qUn9tD4 = await NasiLiquidityPoolFactoryPk3Xqb.emergencyWithdraw.call(uintwlBhrb, {from: accounts[3]});
		const boolzZDno2 = await NasiLiquidityPoolFactoryPk3Xqb.increaseAllowance.call(addressGRU7uMt, uintDZ9dYwK, {from: accounts[0]});
		const uint256KyYPseR = await NasiLiquidityPoolFactoryPk3Xqb.balanceOf.call(addressenSmb3p, {from: accounts[3]});
		const uint256yVQ0T7O = await NasiLiquidityPoolFactoryPk3Xqb.withdraw.call(uintIGGdXlW, uintq2ZESGI, {from: accounts[3]});
		const uint256ejvnbKP = await NasiLiquidityPoolFactoryPk3Xqb.leaveStaking.call(uintc2nPT4a, {from: accounts[1]});
	});
})