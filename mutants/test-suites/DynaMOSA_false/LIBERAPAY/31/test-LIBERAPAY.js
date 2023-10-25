const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYJgO4qNX = await LIBERAPAY.new({from: accounts[2]});
		const uintmtua6xI = BigInt("1451")
		const uintgOM1JCJ = BigInt("59")
		const addresspz99GSD = accounts[1]
		const uintZL1Irt9 = BigInt("698")
		const addressNWmBiZI = accounts[1]
		const addressULMhlZq = accounts[2]
		const addressChIzW7f = accounts[4]
		const booliMhGls = await LIBERAPAYJgO4qNX.lock.call(addresspz99GSD, uintgOM1JCJ, uintmtua6xI, {from: accounts[0]});
		const boolLwQ2P9B = await LIBERAPAYJgO4qNX.unlock.call(addressNWmBiZI, uintZL1Irt9, {from: accounts[2]});
		const addressaq1Qzs = await LIBERAPAYJgO4qNX.upgradeTo.call(addressULMhlZq, {from: accounts[4]});
		await LIBERAPAYJgO4qNX.f.call({from: accounts[5]});
		const booluJ1OHw4 = await LIBERAPAYJgO4qNX.acceptOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256gjIu9AN = await LIBERAPAYJgO4qNX.currentBalanceOf.call(addressChIzW7f, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYWDqytK3 = await LIBERAPAY.new({from: accounts[1]});
		const uintpkP7rpM = BigInt("524")
		const addressdTt5krD = accounts[2]
		const addressRIzdc23 = accounts[0]
		const uintaPuiUM6 = BigInt("1068")
		const addressdxhPcmB = accounts[2]
		const addressm2CHiT8 = accounts[2]
		const boolB8mQWUE = await LIBERAPAYWDqytK3.transferFrom.call(addressRIzdc23, addressdTt5krD, uintpkP7rpM, {from: accounts[0]});
		const boolwjYyTip = await LIBERAPAYWDqytK3.transfer.call(addressdxhPcmB, uintaPuiUM6, {from: "0x0000000000000000000000000000000000000001"});
		const addresseNsAT0q = await LIBERAPAYWDqytK3.notFrozen.call(addressm2CHiT8, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYepuwdq = await LIBERAPAY.new({from: accounts[4]});
		const uintgnjNjGs = BigInt("197")
		const addressMXyV9Ew = accounts[5]
		const uintDeGJuWj = BigInt("1101")
		const uintzSTDDdO = BigInt("1294")
		const addresseMyl8uR = accounts[2]
		const addressEnXRWRu = accounts[2]
		const uintEx1Hpcy = BigInt("950")
		const addressDoLtInX = accounts[2]
		const boolDUQcF7L = await LIBERAPAYepuwdq.transfer.call(addressMXyV9Ew, uintgnjNjGs, {from: "0x0000000000000000000000000000000000000001"});
		const boolN7rg2Y2 = await LIBERAPAYepuwdq.lock.call(addresseMyl8uR, uintzSTDDdO, uintDeGJuWj, {from: accounts[2]});
		const uint256xXtNjpU = await LIBERAPAYepuwdq.balanceOf.call(addressEnXRWRu, {from: accounts[1]});
		const boolbqzEqxN = await LIBERAPAYepuwdq.decreaseAllowance.call(addressDoLtInX, uintEx1Hpcy, {from: accounts[3]});
		const uint256ShZevoa = await LIBERAPAYepuwdq.totalSupply.call({from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKKxOwNY = await LIBERAPAY.new({from: accounts[3]});
		const uintwvYbNPi = BigInt("694")
		const addresslifL24f = accounts[4]
		const uintyjtbttI = BigInt("581")
		const addressWnDHpUq = accounts[3]
		const addressjQX6Hth = accounts[1]
		await LIBERAPAYKKxOwNY.f.call({from: accounts[0]});
		const boolsvweH8n = await LIBERAPAYKKxOwNY.mint.call(addresslifL24f, uintwvYbNPi, {from: accounts[1]});
		const boolk1iLGb7 = await LIBERAPAYKKxOwNY.transferFrom.call(addressjQX6Hth, addressWnDHpUq, uintyjtbttI, {from: accounts[3]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYWDqytK3 = await LIBERAPAY.new({from: accounts[1]});
		const addresspVgLjg = accounts[2]
		const uintunqi45D = BigInt("524")
		const addresswndO71 = accounts[2]
		const addressFIIf9OV = accounts[0]
		const uintI8t6VeE = BigInt("509")
		const addressV4MdyJ5 = accounts[3]
		const uinte3q8dUi = BigInt("1068")
		const addressawG3Kh2 = accounts[2]
		const addressbWwSl0c = accounts[2]
		const addresssd4Ho7P = await LIBERAPAYWDqytK3.notFrozen.call(addresspVgLjg, {from: accounts[1]});
		const boolB8mQWUE = await LIBERAPAYWDqytK3.transferFrom.call(addressFIIf9OV, addresswndO71, uintunqi45D, {from: accounts[0]});
		await LIBERAPAYWDqytK3.showLockState.call(addressV4MdyJ5, uintI8t6VeE, {from: accounts[2]});
		const boolwjYyTip = await LIBERAPAYWDqytK3.transfer.call(addressawG3Kh2, uinte3q8dUi, {from: "0x0000000000000000000000000000000000000001"});
		const addresseNsAT0q = await LIBERAPAYWDqytK3.notFrozen.call(addressbWwSl0c, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYWDqytK3 = await LIBERAPAY.new({from: accounts[1]});
		const uintZriBpHG = BigInt("389")
		const addressdb0crAN = accounts[3]
		const uintEDBHTEV = BigInt("524")
		const addressUweh1Aq = accounts[2]
		const addressof0SoEi = accounts[1]
		const uintpHl2oi7 = BigInt("146")
		const addressaX07j3 = accounts[5]
		const addressLIm3oVP = accounts[2]
		await LIBERAPAYWDqytK3.showLockState.call(addressdb0crAN, uintZriBpHG, {from: accounts[2]});
		const boolB8mQWUE = await LIBERAPAYWDqytK3.transferFrom.call(addressof0SoEi, addressUweh1Aq, uintEDBHTEV, {from: accounts[0]});
		const boolxkIzEyA = await LIBERAPAYWDqytK3.transfer.call(addressaX07j3, uintpHl2oi7, {from: accounts[2]});
		const addresseNsAT0q = await LIBERAPAYWDqytK3.notFrozen.call(addressLIm3oVP, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYWDqytK3 = await LIBERAPAY.new({from: accounts[1]});
		const addressUUwPPmF = accounts[4]
		const uintAvIQfo = BigInt("524")
		const addressi6SvGXV = accounts[2]
		const addressOiPpZGI = accounts[0]
		const uintmIOiERj = BigInt("1075")
		const addressCRplaK = accounts[2]
		const uintbYCqSbY = BigInt("63")
		const uintROMewjB = BigInt("1936")
		const addressW0gIS5O = accounts[5]
		const addressMqQH0bB = accounts[2]
		const uint256TIMavY7 = await LIBERAPAYWDqytK3.balanceOf.call(addressUUwPPmF, {from: accounts[3]});
		const boolB8mQWUE = await LIBERAPAYWDqytK3.transferFrom.call(addressOiPpZGI, addressi6SvGXV, uintAvIQfo, {from: accounts[0]});
		const boolwjYyTip = await LIBERAPAYWDqytK3.transfer.call(addressCRplaK, uintmIOiERj, {from: "0x0000000000000000000000000000000000000001"});
		const boolm2EeMFf = await LIBERAPAYWDqytK3.lock.call(addressW0gIS5O, uintROMewjB, uintbYCqSbY, {from: accounts[0]});
		const addresseNsAT0q = await LIBERAPAYWDqytK3.notFrozen.call(addressMqQH0bB, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYWDqytK3 = await LIBERAPAY.new({from: accounts[1]});
		const uintTuHCOh = BigInt("50")
		const addressJoQZIhy = accounts[0]
		const uintv4vQKNr = BigInt("1479")
		const addressHZ0H37R = "0x0000000000000000000000000000000000000001"
		const addressMXlTb7K = accounts[3]
		const boolY5tYM90 = await LIBERAPAYWDqytK3.approve.call(addressJoQZIhy, uintTuHCOh, {from: accounts[1]});
		const booltiMeHWb = await LIBERAPAYWDqytK3.increaseAllowance.call(addressHZ0H37R, uintv4vQKNr, {from: accounts[1]});
		const addresseNsAT0q = await LIBERAPAYWDqytK3.notFrozen.call(addressMXlTb7K, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYm0u3XNY = await LIBERAPAY.new({from: accounts[4]});
		const uintxko4z6G = BigInt("325")
		const addressirAUlH6 = accounts[5]
		const uint4FyRVC = BigInt("472")
		const addressUwX6PZd = accounts[5]
		const uint256DAQi3hH = await LIBERAPAYm0u3XNY.totalSupply.call({from: accounts[2]});
		await LIBERAPAYm0u3XNY.unpause.call({from: accounts[5]});
		const boolPEGPub4 = await LIBERAPAYm0u3XNY.burnFrom.call(addressirAUlH6, uintxko4z6G, {from: accounts[2]});
		const bool80WIkt = await LIBERAPAYm0u3XNY.burn.call(uint4FyRVC, {from: accounts[2]});
		const addressQ20bd6d = await LIBERAPAYm0u3XNY.notFrozen.call(addressUwX6PZd, {from: accounts[3]});
		await LIBERAPAYm0u3XNY.unpause.call({from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYWDqytK3 = await LIBERAPAY.new({from: accounts[1]});
		const addressHD4zWj3 = accounts[4]
		const addressDoIgZ1B = accounts[3]
		const uint256scJVqVw = await LIBERAPAYWDqytK3.currentBalanceOf.call(addressHD4zWj3, {from: accounts[1]});
		const addresseNsAT0q = await LIBERAPAYWDqytK3.notFrozen.call(addressDoIgZ1B, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYWDqytK3 = await LIBERAPAY.new({from: accounts[1]});
		const uintLetEVe3 = BigInt("1082")
		const uintJbZ2MAu = BigInt("205")
		const addressL5HLuSr = accounts[1]
		const addressCGr6JJN = accounts[3]
		const uint256bIXLWDw = await LIBERAPAYWDqytK3.getNowTime.call({from: accounts[2]});
		const boolrV6UvLV = await LIBERAPAYWDqytK3.lock.call(addressL5HLuSr, uintJbZ2MAu, uintLetEVe3, {from: accounts[4]});
		const addresseNsAT0q = await LIBERAPAYWDqytK3.notFrozen.call(addressCGr6JJN, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYWDqytK3 = await LIBERAPAY.new({from: accounts[1]});
		const uintACbkxIU = BigInt("415")
		const addressxs3fE4h = accounts[1]
		const addressmpO2MpD = accounts[3]
		const addressBjX5x4t = accounts[4]
		const addressVUdfJVv = accounts[4]
		const boolzUJNxNd = await LIBERAPAYWDqytK3.decreaseAllowance.call(addressxs3fE4h, uintACbkxIU, {from: "0x0000000000000000000000000000000000000001"});
		const addressH4q7jqI = await LIBERAPAYWDqytK3.transferOwnership.call(addressmpO2MpD, {from: accounts[1]});
		const uint256scJVqVw = await LIBERAPAYWDqytK3.currentBalanceOf.call(addressBjX5x4t, {from: accounts[1]});
		const addresseNsAT0q = await LIBERAPAYWDqytK3.notFrozen.call(addressVUdfJVv, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYWDqytK3 = await LIBERAPAY.new({from: accounts[1]});
		const addresssybAvW = accounts[3]
		const addressRRGKuWn = accounts[4]
		const addressbUgkSq2 = accounts[2]
		const uintnMsnb9 = BigInt("226")
		const addressYqfEGAf = accounts[0]
		const uint256YxqT9lF = await LIBERAPAYWDqytK3.allowance.call(addressRRGKuWn, addresssybAvW, {from: "0x0000000000000000000000000000000000000001"});
		const addresseNsAT0q = await LIBERAPAYWDqytK3.notFrozen.call(addressbUgkSq2, {from: accounts[1]});
		await LIBERAPAYWDqytK3.showLockState.call(addressYqfEGAf, uintnMsnb9, {from: accounts[5]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYD4uUZ93 = await LIBERAPAY.new({from: accounts[4]});
		const addressY15nw8l = accounts[4]
		const addressgjgv4bA = accounts[2]
		const uintQMY0bPT = BigInt("1844")
		const addresstS7LozR = accounts[1]
		const uintz47hInr = BigInt("62")
		const addressak1D5nP = accounts[0]
		const addressajwlkD4 = accounts[1]
		const uint256ojSnrtN = await LIBERAPAYD4uUZ93.allowance.call(addressgjgv4bA, addressY15nw8l, {from: accounts[3]});
		await LIBERAPAYD4uUZ93.showLockState.call(addresstS7LozR, uintQMY0bPT, {from: accounts[1]});
		const boolQ2ybf9l = await LIBERAPAYD4uUZ93.burnFrom.call(addressak1D5nP, uintz47hInr, {from: accounts[5]});
		const uint256voPKyH = await LIBERAPAYD4uUZ93.balanceOf.call(addressajwlkD4, {from: accounts[4]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYJoMRm4X = await LIBERAPAY.new({from: accounts[5]});
		const uintkWpwmrM = BigInt("995")
		const addressqaA1kgu = accounts[2]
		const uintoMtHso = BigInt("623")
		const addressw2RrBAG = accounts[4]
		const boolmVMCbOi = await LIBERAPAYJoMRm4X.distribute.call(addressqaA1kgu, uintkWpwmrM, {from: accounts[5]});
		await LIBERAPAYJoMRm4X.f.call({from: accounts[2]});
		const boolv5FvvvJ = await LIBERAPAYJoMRm4X.burn.call(uintoMtHso, {from: accounts[2]});
		const addressWCfONph = await LIBERAPAYJoMRm4X.upgradeTo.call(addressw2RrBAG, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYWDqytK3 = await LIBERAPAY.new({from: accounts[1]});
		const addressgPVXNPO = "0x0000000000000000000000000000000000000001"
		const uintYnaxHev = BigInt("524")
		const addressioAczU = accounts[2]
		const addressO0TBwcX = accounts[0]
		const boolUAeFYnq = await LIBERAPAYWDqytK3.freezeAccount.call(addressgPVXNPO, {from: accounts[1]});
		const boolB8mQWUE = await LIBERAPAYWDqytK3.transferFrom.call(addressO0TBwcX, addressioAczU, uintYnaxHev, {from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYE0OToey = await LIBERAPAY.new({from: accounts[0]});
		const uintnmlBs0J = BigInt("1808")
		const addressHMIMNf4 = accounts[4]
		const uinthVtdo44 = BigInt("1681")
		const addresslYBFmtl = accounts[4]
		const boolmeJkPHE = await LIBERAPAYE0OToey.unlock.call(addressHMIMNf4, uintnmlBs0J, {from: accounts[0]});
		const uint256pEQPt2j = await LIBERAPAYE0OToey.totalSupply.call({from: accounts[3]});
		await LIBERAPAYE0OToey.showLockState.call(addresslYBFmtl, uinthVtdo44, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYElxbsA = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressSR1O2YI = accounts[2]
		await LIBERAPAYElxbsA.pause.call({from: accounts[4]});
		const uint256k2sKaXw = await LIBERAPAYElxbsA.getNowTime.call({from: accounts[3]});
		const uint256iOW9xk2 = await LIBERAPAYElxbsA.balanceOf.call(addressSR1O2YI, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYE0OToey = await LIBERAPAY.new({from: accounts[0]});
		const addressvziUqK1 = accounts[0]
		const uintHqs2wRU = BigInt("1666")
		const addressUs7ttQT = accounts[3]
		const addressIeJFJgW = await LIBERAPAYE0OToey.transferOwnership.call(addressvziUqK1, {from: accounts[0]});
		await LIBERAPAYE0OToey.showLockState.call(addressUs7ttQT, uintHqs2wRU, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYWDqytK3 = await LIBERAPAY.new({from: accounts[1]});
		const addressMqWqLPl = accounts[1]
		const addressNCgU7Wn = accounts[5]
		const uintZNfKI24 = BigInt("1099")
		const addressToPyQrF = accounts[2]
		const uintHPCAzF = BigInt("63")
		const uintxLPPEw = BigInt("1936")
		const addressvqXEfvs = accounts[5]
		const uint256RbnJMy = await LIBERAPAYWDqytK3.currentBalanceOf.call(addressMqWqLPl, {from: accounts[1]});
		await LIBERAPAYWDqytK3.pause.call({from: accounts[1]});
		const uint256TIMavY7 = await LIBERAPAYWDqytK3.balanceOf.call(addressNCgU7Wn, {from: accounts[3]});
		const boolwjYyTip = await LIBERAPAYWDqytK3.transfer.call(addressToPyQrF, uintZNfKI24, {from: "0x0000000000000000000000000000000000000001"});
		const boolm2EeMFf = await LIBERAPAYWDqytK3.lock.call(addressvqXEfvs, uintxLPPEw, uintHPCAzF, {from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYWDqytK3 = await LIBERAPAY.new({from: accounts[1]});
		const addresswap5lNQ = accounts[5]
		const address81IIC6 = accounts[1]
		const uintsl5kIQC = BigInt("709")
		const uintRo7PYzM = BigInt("863")
		const addressGpyu5O3 = accounts[5]
		const uint256scJVqVw = await LIBERAPAYWDqytK3.currentBalanceOf.call(addresswap5lNQ, {from: accounts[1]});
		const uint256LPzO5cE = await LIBERAPAYWDqytK3.balanceOf.call(address81IIC6, {from: accounts[4]});
		const boolxbeBeOC = await LIBERAPAYWDqytK3.lock.call(addressGpyu5O3, uintRo7PYzM, uintsl5kIQC, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYWDqytK3 = await LIBERAPAY.new({from: accounts[1]});
		const addressBknfJAc = accounts[0]
		const uintacrQ4sT = BigInt("1486")
		const addressFORqR9W = accounts[4]
		const addressEQWsoaB = accounts[3]
		const uintC5DeIlJ = BigInt("72")
		const addressWboZIWT = accounts[1]
		const addressbX3MBaz = await LIBERAPAYWDqytK3.upgradeTo.call(addressBknfJAc, {from: accounts[1]});
		const booljzbXU5 = await LIBERAPAYWDqytK3.unlock.call(addressFORqR9W, uintacrQ4sT, {from: accounts[1]});
		const uint256wiDry0J = await LIBERAPAYWDqytK3.currentBalanceOf.call(addressEQWsoaB, {from: accounts[3]});
		await LIBERAPAYWDqytK3.onlyNewOwner.call({from: accounts[2]});
		const boolb4TEkZE = await LIBERAPAYWDqytK3.burnFrom.call(addressWboZIWT, uintC5DeIlJ, {from: accounts[1]});
		const boolfKG1Vs = await LIBERAPAYWDqytK3.acceptOwnership.call({from: accounts[3]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYE0OToey = await LIBERAPAY.new({from: accounts[0]});
		const uintJEXhmKb = BigInt("1461")
		const addressjwJrmXc = accounts[2]
		const uintmx6EMO = BigInt("1338")
		const addresskq0aHGb = accounts[0]
		const addressvo3pOY6 = accounts[3]
		await LIBERAPAYE0OToey.showLockState.call(addressjwJrmXc, uintJEXhmKb, {from: accounts[5]});
		const boolnyCjAF = await LIBERAPAYE0OToey.mint.call(addresskq0aHGb, uintmx6EMO, {from: accounts[0]});
		const uint256jj4bROY = await LIBERAPAYE0OToey.getNowTime.call({from: accounts[3]});
		const uint256TqbbFy2 = await LIBERAPAYE0OToey.balanceOf.call(addressvo3pOY6, {from: accounts[5]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYE0OToey = await LIBERAPAY.new({from: accounts[0]});
		const uintq0tpDYt = BigInt("1576")
		const uintLLnulnI = BigInt("1461")
		const addressppalFhE = accounts[2]
		const addressjRof3e = accounts[3]
		const boolH5WY6q = await LIBERAPAYE0OToey.burn.call(uintq0tpDYt, {from: accounts[0]});
		await LIBERAPAYE0OToey.showLockState.call(addressppalFhE, uintLLnulnI, {from: accounts[5]});
		await LIBERAPAYE0OToey.whenPaused.call({from: accounts[0]});
		const uint256jj4bROY = await LIBERAPAYE0OToey.getNowTime.call({from: accounts[3]});
		const uint256TqbbFy2 = await LIBERAPAYE0OToey.balanceOf.call(addressjRof3e, {from: accounts[5]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYWDqytK3 = await LIBERAPAY.new({from: accounts[1]});
		const addressgYVnxpY = accounts[2]
		const addressdtPgx3v = accounts[2]
		const uintzMXoAgZ = BigInt("1486")
		const addresslhGrhWE = accounts[5]
		const boolrKL9a11 = await LIBERAPAYWDqytK3.unfreezeAccount.call(addressgYVnxpY, {from: accounts[1]});
		const uint256wKxj0h = await LIBERAPAYWDqytK3.getNowTime.call({from: accounts[2]});
		const boolOHO9X6 = await LIBERAPAYWDqytK3.freezeAccount.call(addressdtPgx3v, {from: accounts[4]});
		const booljzbXU5 = await LIBERAPAYWDqytK3.unlock.call(addresslhGrhWE, uintzMXoAgZ, {from: accounts[1]});
	});
})