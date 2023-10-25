const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinibM1x8y = await EdenCoin.new({from: accounts[2]});
		const uintj9y2n7Q = BigInt("1306")
		const addressxNgVMMK = accounts[1]
		const addressq6Qk999 = accounts[2]
		const addressrBXAxdP = accounts[1]
		const addressvGzSO3 = accounts[2]
		const uintucPd97H = BigInt("555")
		const addressj8XJhw = accounts[3]
		const addressMC04e8 = accounts[2]
		const boolpatWDuB = await EdenCoinibM1x8y.transferFrom.call(addressq6Qk999, addressxNgVMMK, uintj9y2n7Q, {from: accounts[4]});
		const uint256Z0yQZpy = await EdenCoinibM1x8y.allowance.call(addressvGzSO3, addressrBXAxdP, {from: accounts[2]});
		const boolKikLwbl = await EdenCoinibM1x8y.transferFrom.call(addressMC04e8, addressj8XJhw, uintucPd97H, {from: accounts[3]});

		await expect(EdenCoinibM1x8y.transferFrom.call(addressq6Qk999, addressxNgVMMK, uintj9y2n7Q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinZS0wwGE = await EdenCoin.new({from: accounts[1]});
		const uintkFGccSP = BigInt("662")
		const addressYXmZ5mj = accounts[2]
		const addressc4NxEnC = accounts[4]
		const addresslqmRwY1 = accounts[2]
		const uintg90z1AQ = BigInt("829")
		const addressj2a4Z8M = accounts[4]
		const uintNm6QeB = BigInt("2008")
		const addressTz2QNPG = accounts[4]
		const uintz83jUUa = BigInt("1567")
		const addressAxgA31x = accounts[5]
		const addressdbNqZI4 = "0x0000000000000000000000000000000000000001"
		const boolsC9L4M = await EdenCoinZS0wwGE.decreaseApproval.call(addressYXmZ5mj, uintkFGccSP, {from: accounts[2]});
		const uint256g1PaHXW = await EdenCoinZS0wwGE.allowance.call(addresslqmRwY1, addressc4NxEnC, {from: accounts[0]});
		const boolk5GVvvb = await EdenCoinZS0wwGE.approve.call(addressj2a4Z8M, uintg90z1AQ, {from: accounts[5]});
		const booltrqHRag = await EdenCoinZS0wwGE.increaseApproval.call(addressTz2QNPG, uintNm6QeB, {from: accounts[2]});
		const boolCj7L0Cm = await EdenCoinZS0wwGE.transferFrom.call(addressdbNqZI4, addressAxgA31x, uintz83jUUa, {from: accounts[4]});

		assert.equal(boolk5GVvvb, true)
		assert.equal(boolsC9L4M, true)
		assert.equal(booltrqHRag, true)
		assert.equal(uint256g1PaHXW, BigInt("0"))
		await expect(EdenCoinZS0wwGE.transferFrom.call(addressdbNqZI4, addressAxgA31x, uintz83jUUa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinhenRS6D = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintsAQPTj3 = BigInt("730")
		const addressQYKo3gN = accounts[3]
		const addressFo3VKCC = accounts[2]
		const addressCeRuiD = accounts[0]
		const addressEfSIyh1 = accounts[1]
		const addressNl5Vgvo = accounts[3]
		const boolX6rt37 = await EdenCoinhenRS6D.increaseApproval.call(addressQYKo3gN, uintsAQPTj3, {from: accounts[0]});
		const uint256opN9SCI = await EdenCoinhenRS6D.allowance.call(addressCeRuiD, addressFo3VKCC, {from: accounts[4]});
		const uint256nbg9fY8 = await EdenCoinhenRS6D.allowance.call(addressNl5Vgvo, addressEfSIyh1, {from: accounts[4]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinWwa6hpZ = await EdenCoin.new({from: accounts[1]});
		const uintZSwNeOo = BigInt("361")
		const address4ly6fo = accounts[0]
		const uintsIDdCgM = BigInt("1418")
		const addressRX9R4I = "0x0000000000000000000000000000000000000001"
		const boolSXdOpp3 = await EdenCoinWwa6hpZ.transfer.call(address4ly6fo, uintZSwNeOo, {from: accounts[3]});
		const bool612UqY = await EdenCoinWwa6hpZ.approve.call(addressRX9R4I, uintsIDdCgM, {from: accounts[2]});

		await expect(EdenCoinWwa6hpZ.transfer.call(address4ly6fo, uintZSwNeOo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinBcFdF0 = await EdenCoin.new({from: accounts[0]});
		const addressQZykUu = accounts[3]
		const uintlEUiNdP = BigInt("1977")
		const addressF0vd36z = accounts[4]
		const uintcamUpLJ = BigInt("474")
		const addressMHNnvoQ = accounts[3]
		const addressfDyhULf = accounts[2]
		const uintnTXNvaw = BigInt("244")
		const addresst9q8f4h = accounts[1]
		const uintcCTcf0v = BigInt("1406")
		const addressoNqAaa = accounts[1]
		const uintnHo7Ugs = BigInt("548")
		const addressHaA0Mj = accounts[3]
		const uint256thGmeMe = await EdenCoinBcFdF0.balanceOf.call(addressQZykUu, {from: accounts[4]});
		const boolS8J9fzr = await EdenCoinBcFdF0.transfer.call(addressF0vd36z, uintlEUiNdP, {from: accounts[0]});
		const boolnH4BJTl = await EdenCoinBcFdF0.transferFrom.call(addressfDyhULf, addressMHNnvoQ, uintcamUpLJ, {from: accounts[1]});
		const boolwFtZph6 = await EdenCoinBcFdF0.transfer.call(addresst9q8f4h, uintnTXNvaw, {from: accounts[3]});
		const boolyVGk3nv = await EdenCoinBcFdF0.transfer.call(addressoNqAaa, uintcCTcf0v, {from: accounts[1]});
		const boolobLujeO = await EdenCoinBcFdF0.transfer.call(addressHaA0Mj, uintnHo7Ugs, {from: accounts[3]});

		assert.equal(boolS8J9fzr, true)
		assert.equal(uint256thGmeMe, BigInt("0"))
		await expect(EdenCoinBcFdF0.transferFrom.call(addressfDyhULf, addressMHNnvoQ, uintcamUpLJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinZS0wwGE = await EdenCoin.new({from: accounts[1]});
		const uintGRUd6dg = BigInt("899")
		const addressgH5Bo1H = accounts[4]
		const uintAFKCIYW = BigInt("652")
		const addressHHudhZK = accounts[3]
		const uintiPJDv9N = BigInt("317")
		const addressx2mJBJV = accounts[3]
		const uintHXS33fU = BigInt("1001")
		const addressb5NZ5PA = "0x0000000000000000000000000000000000000001"
		const uintRWRYL1c = BigInt("508")
		const addressRqdbnm = accounts[5]
		const uint6cP1Re = BigInt("619")
		const addresslySiSnS = accounts[2]
		const uintKDjFp2O = BigInt("33")
		const addressPlQbdIW = "0x00000000000000000000000000000000000000-1"
		const uintU6YedFv = BigInt("1316")
		const addressAt8kRJH = accounts[3]
		const uintTNfJras = BigInt("847")
		const addressOpRsRD4 = accounts[5]
		const uinttdZMKIG = BigInt("1432")
		const addressZMworX = "0x0000000000000000000000000000000000000001"
		const address8KYekE = accounts[1]
		const addresseMVIgk1 = accounts[4]
		const addressOkLdkbE = accounts[3]
		const boolmLZSUgm = await EdenCoinZS0wwGE.decreaseApproval.call(addressgH5Bo1H, uintGRUd6dg, {from: accounts[0]});
		const boolsC9L4M = await EdenCoinZS0wwGE.decreaseApproval.call(addressHHudhZK, uintAFKCIYW, {from: accounts[2]});
		const boolKQ0aayN = await EdenCoinZS0wwGE.approve.call(addressx2mJBJV, uintiPJDv9N, {from: accounts[2]});
		const boolZMpcpQ6 = await EdenCoinZS0wwGE.increaseApproval.call(addressb5NZ5PA, uintHXS33fU, {from: accounts[5]});
		const boolJSbeaiF = await EdenCoinZS0wwGE.decreaseApproval.call(addressRqdbnm, uintRWRYL1c, {from: accounts[4]});
		const boolS9X5cs2 = await EdenCoinZS0wwGE.approve.call(addresslySiSnS, uint6cP1Re, {from: accounts[2]});
		const booliFWzkRf = await EdenCoinZS0wwGE.approve.call(addressPlQbdIW, uintKDjFp2O, {from: accounts[1]});
		const boolfDWBAFK = await EdenCoinZS0wwGE.decreaseApproval.call(addressAt8kRJH, uintU6YedFv, {from: accounts[1]});
		const boolUmfLih4 = await EdenCoinZS0wwGE.transfer.call(addressOpRsRD4, uintTNfJras, {from: accounts[1]});
		const boolKyvWWLK = await EdenCoinZS0wwGE.transferFrom.call(address8KYekE, addressZMworX, uinttdZMKIG, {from: accounts[0]});
		const uint256g1PaHXW = await EdenCoinZS0wwGE.allowance.call(addressOkLdkbE, addresseMVIgk1, {from: accounts[0]});

		assert.equal(boolJSbeaiF, true)
		assert.equal(boolKQ0aayN, true)
		assert.equal(boolS9X5cs2, true)
		assert.equal(boolZMpcpQ6, true)
		assert.equal(boolmLZSUgm, true)
		assert.equal(boolsC9L4M, true)
		await expect(EdenCoinZS0wwGE.approve.call(addressPlQbdIW, uintKDjFp2O, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinibM1x8y = await EdenCoin.new({from: accounts[2]});
		const uintb07aMJ = BigInt("0")
		const addresspVW7xTM = accounts[3]
		const uintIPvTq8 = BigInt("526")
		const addressHHEzXxq = accounts[4]
		const addressN8oxvaH = accounts[0]
		const boolYZbL8Xo = await EdenCoinibM1x8y.decreaseApproval.call(addresspVW7xTM, uintb07aMJ, {from: accounts[3]});
		const boolSZtg4my = await EdenCoinibM1x8y.approve.call(addressHHEzXxq, uintIPvTq8, {from: accounts[1]});
		const uint25646n1S6 = await EdenCoinibM1x8y.balanceOf.call(addressN8oxvaH, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolSZtg4my, true)
		assert.equal(boolYZbL8Xo, true)
		assert.equal(uint25646n1S6, BigInt("0"))
	});
})