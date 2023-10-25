const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressUNbaRhC = accounts[5]
		const addressbQ0ZACF = accounts[4]
		const SpiritCoindxZMnKy = await SpiritCoin.new(addressUNbaRhC, addressbQ0ZACF, {from: accounts[0]});
		const addressqoM4UGe = accounts[0]
		const addresswsTrHVF = accounts[2]
		const uinthRRmSe = BigInt("224")
		const addressHG9Ljlf = accounts[2]
		const uintCEu9mAF = BigInt("1603")
		const addressNq3ZNgp = accounts[4]
		const addressDZY0syz = accounts[2]
		const addressnCHsqxj = accounts[2]
		const addressZWs2BFh = accounts[0]
		const uintOr1AMrS = await SpiritCoindxZMnKy.balanceOf.call(addressqoM4UGe, {from: accounts[1]});
		const uints0v7Scq = await SpiritCoindxZMnKy.balanceOf.call(addresswsTrHVF, {from: accounts[2]});
		const bool0wcKVZ = await SpiritCoindxZMnKy.transfer.call(addressHG9Ljlf, uinthRRmSe, {from: accounts[4]});
		const boolBZfmCQO = await SpiritCoindxZMnKy.transferFrom.call(addressDZY0syz, addressNq3ZNgp, uintCEu9mAF, {from: accounts[5]});
		const uintgr1Cjec = await SpiritCoindxZMnKy.allowance.call(addressZWs2BFh, addressnCHsqxj, {from: accounts[3]});

		assert.equal(uintOr1AMrS, BigInt("0"))
		assert.equal(uints0v7Scq, BigInt("0"))
		await expect(SpiritCoindxZMnKy.transfer.call(addressHG9Ljlf, uinthRRmSe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressYhCFMYl = "0x0000000000000000000000000000000000000001"
		const addressO1vqUw3 = accounts[1]
		const SpiritCoinZ9r9J1 = await SpiritCoin.new(addressYhCFMYl, addressO1vqUw3, {from: accounts[1]});
		const addressoINREuL = accounts[1]
		const uintFXOurig = BigInt("165")
		const addressP9TI7Ma = accounts[4]
		const uintVLxmi5u = BigInt("1250")
		const addresslebz9Ej = "0x0000000000000000000000000000000000000001"
		const addressJ1doIcE = accounts[3]
		const addressGx9Z3as = "0x0000000000000000000000000000000000000001"
		const uintfHPKDtb = BigInt("921")
		const addressCzBgW5 = accounts[5]
		const addressGSbwSb = "0x0000000000000000000000000000000000000001"
		const uintR7uvpvB = await SpiritCoinZ9r9J1.balanceOf.call(addressoINREuL, {from: accounts[1]});
		const boolMjw4HRx = await SpiritCoinZ9r9J1.approve.call(addressP9TI7Ma, uintFXOurig, {from: accounts[3]});
		const bool7DBVUi = await SpiritCoinZ9r9J1.transferFrom.call(addressJ1doIcE, addresslebz9Ej, uintVLxmi5u, {from: accounts[0]});
		const uintAr06QFG = await SpiritCoinZ9r9J1.balanceOf.call(addressGx9Z3as, {from: "0x0000000000000000000000000000000000000001"});
		const boolpcaJkrt = await SpiritCoinZ9r9J1.transferFrom.call(addressGSbwSb, addressCzBgW5, uintfHPKDtb, {from: accounts[3]});

		assert.equal(boolMjw4HRx, true)
		assert.equal(uintR7uvpvB, BigInt("0"))
		await expect(SpiritCoinZ9r9J1.transferFrom.call(addressJ1doIcE, addresslebz9Ej, uintVLxmi5u, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressFM6e2dS = accounts[4]
		const addressfojIAnX = accounts[4]
		const SpiritCoinuIGbbd8 = await SpiritCoin.new(addressFM6e2dS, addressfojIAnX, {from: accounts[4]});
		const addressL2Owh3N = accounts[2]
		const addresszJfEdnz = accounts[3]
		const uintvnHu38l = BigInt("127")
		const addressmC8EE6W = accounts[0]
		const uintxAjYU5 = BigInt("283")
		const addressdE9RfK = accounts[4]
		const uintajwkFW = await SpiritCoinuIGbbd8.allowance.call(addresszJfEdnz, addressL2Owh3N, {from: accounts[0]});
		const addressC5xkXN = await SpiritCoinuIGbbd8.mint.call(addressmC8EE6W, uintvnHu38l, {from: accounts[4]});
		const boolya4AJ5y = await SpiritCoinuIGbbd8.transfer.call(addressdE9RfK, uintxAjYU5, {from: accounts[0]});

		assert.equal(uintajwkFW, BigInt("0"))
		await expect(SpiritCoinuIGbbd8.transfer.call(addressdE9RfK, uintxAjYU5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressAN8EtNm = accounts[2]
		const addressdH4AWxb = accounts[0]
		const SpiritCoinzeCB7X = await SpiritCoin.new(addressAN8EtNm, addressdH4AWxb, {from: accounts[2]});
		const addressJTrrCqc = accounts[1]
		const uintgJiVTim = BigInt("454")
		const addressfroeXjB = accounts[2]
		const addressrDnw1S = await SpiritCoinzeCB7X.setMinter.call(addressJTrrCqc, {from: "0x0000000000000000000000000000000000000001"});
		const boolPOvhhI9 = await SpiritCoinzeCB7X.transfer.call(addressfroeXjB, uintgJiVTim, {from: accounts[0]});

		await expect(SpiritCoinzeCB7X.setMinter.call(addressJTrrCqc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressDVfrxq = accounts[2]
		const addressaiPPsFe = accounts[3]
		const SpiritCoinEtSGH4 = await SpiritCoin.new(addressDVfrxq, addressaiPPsFe, {from: "0x0000000000000000000000000000000000000001"});
		const uintZVvUwT9 = BigInt("1539")
		const addressuZRBdl = accounts[1]
		const uintmj7nqAH = BigInt("1614")
		const addressuBYGeO3 = accounts[3]
		const uintr6fBA7H = BigInt("473")
		const addressxHrY7iF = accounts[0]
		const addressCBIZ2RR = await SpiritCoinEtSGH4.mint.call(addressuZRBdl, uintZVvUwT9, {from: accounts[4]});
		const boolYsDSdKz = await SpiritCoinEtSGH4.approve.call(addressuBYGeO3, uintmj7nqAH, {from: accounts[3]});
		const addressT2dHfjK = await SpiritCoinEtSGH4.mint.call(addressxHrY7iF, uintr6fBA7H, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for SpiritCoin', async () => {
		const addressncmQaA = accounts[5]
		const addressjAMFnMo = "0x0000000000000000000000000000000000000001"
		const SpiritCoinSlyWMcZ = await SpiritCoin.new(addressncmQaA, addressjAMFnMo, {from: accounts[3]});
		const uintFSRJD2F = BigInt("177")
		const addressOJHmNUW = accounts[4]
		const uintoOawOO7 = BigInt("1070")
		const addressslZaQdy = accounts[4]
		const addressQVU5i9h = accounts[0]
		const uintvbj3RT = BigInt("1309")
		const addresswTkSAoe = accounts[0]
		const addressr5wZqQ = accounts[4]
		const addressQbNYjnI = await SpiritCoinSlyWMcZ.mint.call(addressOJHmNUW, uintFSRJD2F, {from: accounts[4]});
		const boolPPVM9sQ = await SpiritCoinSlyWMcZ.transferFrom.call(addressQVU5i9h, addressslZaQdy, uintoOawOO7, {from: accounts[0]});
		const boolWPRXj3E = await SpiritCoinSlyWMcZ.transferFrom.call(addressr5wZqQ, addresswTkSAoe, uintvbj3RT, {from: accounts[5]});

		await expect(SpiritCoinSlyWMcZ.mint.call(addressOJHmNUW, uintFSRJD2F, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressFwo1Huu = accounts[4]
		const addressZDoSJD6 = accounts[4]
		const SpiritCoinuIGbbd8 = await SpiritCoin.new(addressFwo1Huu, addressZDoSJD6, {from: accounts[4]});
		const addressKc7a7oZ = accounts[2]
		const addressSHd9g4E = accounts[3]
		const addressuuDcEwi = accounts[0]
		const uintLfTmVE3 = BigInt("283")
		const addressskn6AaU = accounts[4]
		const addressBlg4Ivb = accounts[1]
		const uintajwkFW = await SpiritCoinuIGbbd8.allowance.call(addressSHd9g4E, addressKc7a7oZ, {from: accounts[0]});
		const addressccAgUp = await SpiritCoinuIGbbd8.setMinter.call(addressuuDcEwi, {from: accounts[4]});
		const boolya4AJ5y = await SpiritCoinuIGbbd8.transfer.call(addressskn6AaU, uintLfTmVE3, {from: accounts[0]});
		const addressDJcZnWO = await SpiritCoinuIGbbd8.setMinter.call(addressBlg4Ivb, {from: accounts[2]});

		assert.equal(uintajwkFW, BigInt("0"))
		await expect(SpiritCoinuIGbbd8.transfer.call(addressskn6AaU, uintLfTmVE3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressR3Ypgvo = accounts[4]
		const addresswBtZOMv = accounts[4]
		const SpiritCoinuIGbbd8 = await SpiritCoin.new(addressR3Ypgvo, addresswBtZOMv, {from: accounts[4]});
		const addressnDuWJdf = accounts[3]
		const addressnxJrnbI = accounts[3]
		const uintupaMx1 = BigInt("1728")
		const addresszwNYxH = accounts[0]
		const uintTEL2jiw = BigInt("1583")
		const addressi92oXf7 = accounts[4]
		const addresshmupf8 = accounts[2]
		const addressG2gq7tI = accounts[0]
		const uintxp2yHHE = BigInt("1960")
		const addresswblITvy = accounts[1]
		const uintMs8Itb5 = BigInt("283")
		const addresstEAPqDP = accounts[5]
		const uintajwkFW = await SpiritCoinuIGbbd8.allowance.call(addressnxJrnbI, addressnDuWJdf, {from: accounts[0]});
		const boolKoqajDr = await SpiritCoinuIGbbd8.transfer.call(addresszwNYxH, uintupaMx1, {from: accounts[4]});
		const boolxvxbqAz = await SpiritCoinuIGbbd8.approve.call(addressi92oXf7, uintTEL2jiw, {from: accounts[3]});
		const uintoGOLYog = await SpiritCoinuIGbbd8.allowance.call(addressG2gq7tI, addresshmupf8, {from: accounts[0]});
		const addressC5xkXN = await SpiritCoinuIGbbd8.mint.call(addresswblITvy, uintxp2yHHE, {from: accounts[4]});
		const boolya4AJ5y = await SpiritCoinuIGbbd8.transfer.call(addresstEAPqDP, uintMs8Itb5, {from: accounts[0]});

		assert.equal(boolKoqajDr, true)
		assert.equal(boolxvxbqAz, true)
		assert.equal(uintajwkFW, BigInt("0"))
		assert.equal(uintoGOLYog, BigInt("0"))
		await expect(SpiritCoinuIGbbd8.transfer.call(addresstEAPqDP, uintMs8Itb5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressaC0IML3 = accounts[4]
		const addressC3sVxKX = accounts[4]
		const SpiritCoinuIGbbd8 = await SpiritCoin.new(addressaC0IML3, addressC3sVxKX, {from: accounts[4]});
		const uintSL0ert = BigInt("127")
		const addressYVCHGMG = "0x0000000000000000000000000000000000000000"
		const addressDYVs36 = accounts[0]
		const addressC5xkXN = await SpiritCoinuIGbbd8.mint.call(addressYVCHGMG, uintSL0ert, {from: accounts[4]});
		const uintz6T3zCz = await SpiritCoinuIGbbd8.balanceOf.call(addressDYVs36, {from: accounts[1]});

		await expect(SpiritCoinuIGbbd8.mint.call(addressYVCHGMG, uintSL0ert, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressx8ttm3d = "0x0000000000000000000000000000000000000001"
		const addressHosITNL = accounts[1]
		const SpiritCoinZ9r9J1 = await SpiritCoin.new(addressx8ttm3d, addressHosITNL, {from: accounts[1]});
		const addressl73Y1E = accounts[3]
		const addressiGgPFoG = "0x0000000000000000000000000000000000000001"
		const uintubgGXiC = BigInt("1174")
		const addressRy1AHjZ = "0x0000000000000000000000000000000000000000"
		const uintjZ4C7Vm = BigInt("0")
		const addressvrOkMi = accounts[1]
		const uintqhxKTnw = BigInt("1086")
		const addressCOMG6FZ = accounts[0]
		const uintXf7OmXo = BigInt("1639")
		const addressCOHrLf = accounts[2]
		const addressIDPuBfN = accounts[5]
		const uintiPQuMjn = BigInt("766")
		const addressXJ1fCpn = accounts[5]
		const addressFqqsTbA = accounts[2]
		const uintcnqBzj4 = BigInt("211")
		const addressWvusue = accounts[5]
		const addressnKoHspb = accounts[2]
		const uintp6MOoqk = BigInt("921")
		const addressk7I02gZ = "0x0000000000000000000000000000000000000001"
		const addresswTcqXpL = accounts[2]
		const uintbQjTab = await SpiritCoinZ9r9J1.balanceOf.call(addressl73Y1E, {from: accounts[1]});
		const uintAr06QFG = await SpiritCoinZ9r9J1.balanceOf.call(addressiGgPFoG, {from: "0x0000000000000000000000000000000000000001"});
		const boolgN2tIZa = await SpiritCoinZ9r9J1.transfer.call(addressRy1AHjZ, uintubgGXiC, {from: "0x0000000000000000000000000000000000000001"});
		const boolha8V5B7 = await SpiritCoinZ9r9J1.approve.call(addressvrOkMi, uintjZ4C7Vm, {from: accounts[2]});
		const addressXZFoItg = await SpiritCoinZ9r9J1.mint.call(addressCOMG6FZ, uintqhxKTnw, {from: accounts[1]});
		const boolL27L4O = await SpiritCoinZ9r9J1.transferFrom.call(addressIDPuBfN, addressCOHrLf, uintXf7OmXo, {from: accounts[2]});
		const boolNwmAyp2 = await SpiritCoinZ9r9J1.transfer.call(addressXJ1fCpn, uintiPQuMjn, {from: accounts[3]});
		const addressjit7V3C = await SpiritCoinZ9r9J1.setMinter.call(addressFqqsTbA, {from: accounts[3]});
		const addressVoIFL6L = await SpiritCoinZ9r9J1.mint.call(addressWvusue, uintcnqBzj4, {from: accounts[2]});
		const addressb0g1nXC = await SpiritCoinZ9r9J1.setMinter.call(addressnKoHspb, {from: accounts[4]});
		const boolpcaJkrt = await SpiritCoinZ9r9J1.transferFrom.call(addresswTcqXpL, addressk7I02gZ, uintp6MOoqk, {from: accounts[3]});

		assert.equal(uintAr06QFG, BigInt("10000000000000000000000000"))
		assert.equal(uintbQjTab, BigInt("0"))
		await expect(SpiritCoinZ9r9J1.transfer.call(addressRy1AHjZ, uintubgGXiC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})