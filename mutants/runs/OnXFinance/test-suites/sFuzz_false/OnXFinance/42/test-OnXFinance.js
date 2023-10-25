const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringQ3sjVkB = "DwSMgowwYjVDJOiS"
		const stringXRHVzXj = "1cVFx48MqJiX5T6B3hEzDeq7TjtGwEalBiYrqbPPfW9"
		const uintHu0XdXn = BigInt("247")
		const OnXFinancenknp0XJ = await OnXFinance.new(stringQ3sjVkB, stringXRHVzXj, uintHu0XdXn, {from: accounts[4]});
		const uintMwAoXwb = BigInt("1808")
		const addressbfB3Pye = accounts[3]
		const uintEIWoREq = BigInt("1216")
		const addresssxRFu5 = accounts[3]
		const uint8eesd9 = BigInt("1049")
		const addressgwC0QYS = accounts[4]
		const uintagQPoXz = BigInt("1915")
		const addressMVvdaqj = accounts[0]
		const stringysKTpNM = await OnXFinancenknp0XJ.symbol.call({from: accounts[5]});
		const boolmnX3vSG = await OnXFinancenknp0XJ.transfer.call(addressbfB3Pye, uintMwAoXwb, {from: accounts[2]});
		const boolB0qGHhj = await OnXFinancenknp0XJ.decreaseAllowance.call(addresssxRFu5, uintEIWoREq, {from: accounts[4]});
		const boolVugwzUm = await OnXFinancenknp0XJ.approve.call(addressgwC0QYS, uint8eesd9, {from: accounts[2]});
		const boolQrEOs94 = await OnXFinancenknp0XJ.approve.call(addressMVvdaqj, uintagQPoXz, {from: accounts[2]});

		assert.equal(stringysKTpNM, "1cVFx48MqJiX5T6B3hEzDeq7TjtGwEalBiYrqbPPfW9")
		await expect(OnXFinancenknp0XJ.transfer.call(addressbfB3Pye, uintMwAoXwb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringR55pjx1 = "khDeAXPIO4AeZdtiCsezjyjrCnhKRkJzLcWvHdrP1g2SiJDXf9fiK6YVoIVh"
		const stringTlgaESW = "8yG1ZaMlTBaOazYnK7rZTLl9ofriE2tvLiHgkINUuqRtePKVjczxRRapdj11AxRlr3qHO7wbVl9UYNUjaSxR2hwnbi7"
		const uintpiHEKo = BigInt("222")
		const OnXFinanceeSfdDZs = await OnXFinance.new(stringR55pjx1, stringTlgaESW, uintpiHEKo, {from: accounts[2]});
		const uintaHCry2N = BigInt("1347")
		const addressDMtkTlv = accounts[2]
		const addressKFVkOPx = accounts[5]
		const addressxSVe9mA = accounts[2]
		const addressWbjt1gt = accounts[4]
		const boolSgzmUF1 = await OnXFinanceeSfdDZs.increaseAllowance.call(addressDMtkTlv, uintaHCry2N, {from: accounts[3]});
		const uintb2cPwli = await OnXFinanceeSfdDZs.balanceOf.call(addressKFVkOPx, {from: accounts[2]});
		const stringgRTCY0 = await OnXFinanceeSfdDZs.name.call({from: accounts[3]});
		const stringsFqNLd = await OnXFinanceeSfdDZs.symbol.call({from: accounts[4]});
		const uintwPwLSFx = await OnXFinanceeSfdDZs.allowance.call(addressWbjt1gt, addressxSVe9mA, {from: accounts[2]});

		await expect(OnXFinanceeSfdDZs.increaseAllowance.call(addressDMtkTlv, uintaHCry2N, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringPUwfNe0 = "MICHi8UvtERlxpu06pTsfkeFgUmM7tFxCzhOcvNAV8Mp"
		const stringC2r6IZ = "Tqna7Bwzfd92SmB2ytWfJ9yTzQCMEycbOkXccK6xHazXK9zJk81y5HPz354d"
		const uintRODMuUH = BigInt("822")
		const OnXFinancelzCZxJY = await OnXFinance.new(stringPUwfNe0, stringC2r6IZ, uintRODMuUH, {from: accounts[3]});
		const addressp9fyQI = "0x0000000000000000000000000000000000000001"
		const addressssTq4VT = accounts[4]
		const uintl3YjFNe = BigInt("698")
		const addresssSiYdr9 = accounts[3]
		const uintJiUy6TZ = BigInt("1608")
		const addressgBG4ptL = accounts[2]
		const uintyw0UF1j = BigInt("1637")
		const addressHXuFQ7H = accounts[3]
		const uintySYvQN = BigInt("225")
		const addressfhWOFQs = accounts[2]
		const uintl4Y8eb1 = await OnXFinancelzCZxJY.allowance.call(addressssTq4VT, addressp9fyQI, {from: accounts[1]});
		const booldCZ634g = await OnXFinancelzCZxJY.transfer.call(addresssSiYdr9, uintl3YjFNe, {from: "0x0000000000000000000000000000000000000001"});
		const boolIEBhwY5 = await OnXFinancelzCZxJY.decreaseAllowance.call(addressgBG4ptL, uintJiUy6TZ, {from: accounts[2]});
		const booldWZjNAv = await OnXFinancelzCZxJY.approve.call(addressHXuFQ7H, uintyw0UF1j, {from: accounts[4]});
		const boolyAeHc01 = await OnXFinancelzCZxJY.increaseAllowance.call(addressfhWOFQs, uintySYvQN, {from: accounts[1]});

		assert.equal(uintl4Y8eb1, BigInt("0"))
		await expect(OnXFinancelzCZxJY.transfer.call(addresssSiYdr9, uintl3YjFNe, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringCLmem33 = "Wkha931mZJvZ5yfYUowmEhIu3gCjp4yVlAdYm1XWQ"
		const stringWOJ82Qp = "lmoTmw5sgsUnCxK1GJoSs8eJWhRukcK6ie9YYlmhUgNpowqtyG7UWlitV"
		const uintvsZNfyX = BigInt("103")
		const OnXFinanceNOmMAdm = await OnXFinance.new(stringCLmem33, stringWOJ82Qp, uintvsZNfyX, {from: accounts[4]});
		const addressXs6gvqc = accounts[3]
		const uintB7oVb8w = BigInt("1188")
		const addressqTzB1UL = accounts[1]
		const uintQxHDRO = BigInt("1990")
		const addressTAgwYoY = accounts[4]
		const addressvyVMLj8 = accounts[1]
		const uintmrNHLEY = BigInt("1831")
		const addressWwbP5pe = "0x0000000000000000000000000000000000000001"
		const uintZOjwGjT = BigInt("1007")
		const addressdXkOPm = accounts[2]
		const uintAkFeTA8 = await OnXFinanceNOmMAdm.balanceOf.call(addressXs6gvqc, {from: accounts[0]});
		const boolF3I9sLZ = await OnXFinanceNOmMAdm.approveAndCall.call(addressqTzB1UL, uintB7oVb8w, {from: accounts[2]});
		const booltWYxAe6 = await OnXFinanceNOmMAdm.decreaseAllowance.call(addressTAgwYoY, uintQxHDRO, {from: "0x0000000000000000000000000000000000000001"});
		const uintytRyJ4 = await OnXFinanceNOmMAdm.balanceOf.call(addressvyVMLj8, {from: accounts[2]});
		const boolHZ2fGyJ = await OnXFinanceNOmMAdm.increaseAllowance.call(addressWwbP5pe, uintmrNHLEY, {from: accounts[5]});
		const booltzQxYh1 = await OnXFinanceNOmMAdm.transfer.call(addressdXkOPm, uintZOjwGjT, {from: accounts[3]});

		assert.equal(uintAkFeTA8, BigInt("0"))
		await expect(OnXFinanceNOmMAdm.approveAndCall.call(addressqTzB1UL, uintB7oVb8w, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringTL5yskJ = "1B2JThyPoUsJb6dsqcF6NFsvOigEUB0t5oB96m9DcX2w0AC00"
		const stringtjwcZp9 = "ImUNmHhvzpbB"
		const uint5yQuQ3 = BigInt("1855")
		const OnXFinancekw51jgL = await OnXFinance.new(stringTL5yskJ, stringtjwcZp9, uint5yQuQ3, {from: accounts[1]});
		const uintLfFjEEI = BigInt("2008")
		const addressIgcOlFo = accounts[2]
		const addressCzh7c6X = accounts[2]
		const uintTIhAwT = BigInt("1910")
		const addressz7qAsz4 = accounts[3]
		const uintHJARxFr = BigInt("1420")
		const addressIy3Egcd = accounts[0]
		const stringh1tVHU7 = await OnXFinancekw51jgL.symbol.call({from: accounts[4]});
		const boolc1mMpXh = await OnXFinancekw51jgL.approve.call(addressIgcOlFo, uintLfFjEEI, {from: accounts[3]});
		const boolsjLNlCL = await OnXFinancekw51jgL.transferownership.call(addressCzh7c6X, {from: accounts[1]});
		const boolnDoEcYE = await OnXFinancekw51jgL.transfer.call(addressz7qAsz4, uintTIhAwT, {from: accounts[0]});
		const boolt00xox = await OnXFinancekw51jgL.decreaseAllowance.call(addressIy3Egcd, uintHJARxFr, {from: accounts[0]});

		assert.equal(boolc1mMpXh, true)
		assert.equal(boolsjLNlCL, true)
		assert.equal(stringh1tVHU7, "ImUNmHhvzpbB")
		await expect(OnXFinancekw51jgL.transfer.call(addressz7qAsz4, uintTIhAwT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringTL5yskJ = "1B2JThyPoUsJb6dsqcF6NFsvOigEUB0t5oB96m9DcX2w0AC00"
		const stringtjwcZp9 = "ImUNmHhvzpbB"
		const uintW2jRuOO = BigInt("1855")
		const OnXFinancekw51jgL = await OnXFinance.new(stringTL5yskJ, stringtjwcZp9, uintW2jRuOO, {from: accounts[1]});
		const uint1f64Hr = BigInt("474")
		const addressfi9gDbd = accounts[2]
		const stringh1tVHU7 = await OnXFinancekw51jgL.symbol.call({from: accounts[4]});
		const boolLvUq4Y3 = await OnXFinancekw51jgL.approveAndCall.call(addressfi9gDbd, uint1f64Hr, {from: accounts[1]});

		assert.equal(boolLvUq4Y3, true)
		assert.equal(stringh1tVHU7, "ImUNmHhvzpbB")
	});

	it('test for OnXFinance', async () => {
		const stringq0KwyeE = "U21qr00URkKF4VgitAVzq2rPMRN3hsV5hUrvHDCA1WYfb3K5mNJSlNFkcS6fkQeM"
		const stringMpqpiz = "6aI6gDzXHLlQ266rgQSsaz9tA8jZcLH4vYINwwCEVct1HvjmKygENcogh6M2rKVFmeefq1WlDQgyQjWIMxh8BFCbdmn"
		const uint1ULRvo = BigInt("43")
		const OnXFinancesowaXzA = await OnXFinance.new(stringq0KwyeE, stringMpqpiz, uint1ULRvo, {from: "0x0000000000000000000000000000000000000001"});
		const addressItzop9Q = accounts[1]
		const uint8bnNu0I9 = await OnXFinancesowaXzA.decimals.call({from: accounts[4]});
		const boolPjnQ1z5 = await OnXFinancesowaXzA.transferownership.call(addressItzop9Q, {from: accounts[2]});
	});

	it('test for OnXFinance', async () => {
		const stringTL5yskJ = "1B2JThyPoUsJb6dsqcF6NFsvOigEUB0t5oB96m9DcX2w0AC00"
		const stringtjwcZp9 = "ImUNmHhvzpbB"
		const uintokCjKZS = BigInt("1855")
		const OnXFinancekw51jgL = await OnXFinance.new(stringTL5yskJ, stringtjwcZp9, uintokCjKZS, {from: accounts[1]});
		const uintT8MDXI = BigInt("0")
		const addressSZgMOTG = accounts[4]
		const stringkXTO0z1 = await OnXFinancekw51jgL.name.call({from: accounts[0]});
		const stringRTh2Emt = await OnXFinancekw51jgL.name.call({from: accounts[2]});
		const boolHVvHy0o = await OnXFinancekw51jgL.transfer.call(addressSZgMOTG, uintT8MDXI, {from: accounts[3]});

		assert.equal(boolHVvHy0o, true)
		assert.equal(stringRTh2Emt, "1B2JThyPoUsJb6dsqcF6NFsvOigEUB0t5oB96m9DcX2w0AC00")
		assert.equal(stringkXTO0z1, "1B2JThyPoUsJb6dsqcF6NFsvOigEUB0t5oB96m9DcX2w0AC00")
	});

	it('test for OnXFinance', async () => {
		const stringTL5yskJ = "1B2JThyPoUsJb6dsqcF6NFsvOigEUB0t5oB96m9DcX2w0AC00"
		const stringtjwcZp9 = "ImUNmHhvzpbB"
		const uintryplUT = BigInt("1855")
		const OnXFinancekw51jgL = await OnXFinance.new(stringTL5yskJ, stringtjwcZp9, uintryplUT, {from: accounts[1]});
		const uintJaX1ffu = BigInt("0")
		const addressQCxidF6 = accounts[4]
		const addresseqPybJN = accounts[1]
		const addressx50TzXC = "0x0000000000000000000000000000000000000001"
		const boold2hIxd9 = await OnXFinancekw51jgL.approveAndCall.call(addressQCxidF6, uintJaX1ffu, {from: accounts[1]});
		const uintPZror7 = await OnXFinancekw51jgL.allowance.call(addressx50TzXC, addresseqPybJN, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boold2hIxd9, true)
		assert.equal(uintPZror7, BigInt("0"))
	});
})