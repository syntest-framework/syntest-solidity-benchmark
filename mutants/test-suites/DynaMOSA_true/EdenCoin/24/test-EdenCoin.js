const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinQFJu2DI = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBJBjNSh = BigInt("1625")
		const addressfZTFsU = accounts[4]
		const addressAnZM57 = accounts[0]
		const addressOF0x96 = accounts[5]
		const uintaSQol9 = BigInt("651")
		const addressxumSCLX = accounts[4]
		const uintJdKuxhV = BigInt("552")
		const addressNiJnAvU = accounts[2]
		const boolTz09UUA = await EdenCoinQFJu2DI.decreaseApproval.call(addressfZTFsU, uintBJBjNSh, {from: accounts[3]});
		const uint256CylK7Mq = await EdenCoinQFJu2DI.allowance.call(addressOF0x96, addressAnZM57, {from: accounts[1]});
		const boolguUdEuk = await EdenCoinQFJu2DI.increaseApproval.call(addressxumSCLX, uintaSQol9, {from: accounts[3]});
		const boolLpX8gzy = await EdenCoinQFJu2DI.approve.call(addressNiJnAvU, uintJdKuxhV, {from: accounts[3]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinTrRVXG = await EdenCoin.new({from: accounts[1]});
		const uintfpGhE7r = BigInt("352")
		const addressViDoBxI = accounts[0]
		const addressJzIQaOi = accounts[2]
		const uintPasBHsy = BigInt("1925")
		const addressgYN1mGp = accounts[1]
		const uintuBPeuEu = BigInt("192")
		const addresscEYwMwv = accounts[2]
//		const boolya5ovp6 = await EdenCoinTrRVXG.transferFrom.call(addressJzIQaOi, addressViDoBxI, uintfpGhE7r, {from: accounts[3]});
//		const boolsfDMiuO = await EdenCoinTrRVXG.decreaseApproval.call(addressgYN1mGp, uintPasBHsy, {from: accounts[0]});
//		const boolzwvUZTd = await EdenCoinTrRVXG.increaseApproval.call(addresscEYwMwv, uintuBPeuEu, {from: accounts[3]});

		await expect(EdenCoinTrRVXG.transferFrom.call(addressJzIQaOi, addressViDoBxI, uintfpGhE7r, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoindYOMB5k = await EdenCoin.new({from: accounts[1]});
		const uintXDn21Sr = BigInt("531")
		const addressiSnXMF7 = accounts[1]
		const uintadVvLHP = BigInt("1515")
		const address7Yv36r = accounts[5]
		const addresszp6FOkz = accounts[1]
		const addressCmI4NXe = accounts[3]
		const addressCb4Dufd = accounts[0]
		const uintfv3xim = BigInt("1186")
		const addressyNreYGM = accounts[5]
		const uintnOVNmRG = BigInt("206")
		const addressUYxvpU3 = accounts[4]
		const booljHRjgn = await EdenCoindYOMB5k.increaseApproval.call(addressiSnXMF7, uintXDn21Sr, {from: accounts[2]});
//		const boolnJ864jz = await EdenCoindYOMB5k.transferFrom.call(addresszp6FOkz, address7Yv36r, uintadVvLHP, {from: accounts[0]});
//		const uint256rKfv4HQ = await EdenCoindYOMB5k.allowance.call(addressCb4Dufd, addressCmI4NXe, {from: accounts[2]});
//		const boolqMgWnV = await EdenCoindYOMB5k.approve.call(addressyNreYGM, uintfv3xim, {from: "0x0000000000000000000000000000000000000001"});
//		const boolB7wv6FN = await EdenCoindYOMB5k.approve.call(addressUYxvpU3, uintnOVNmRG, {from: accounts[5]});

		assert.equal(booljHRjgn, true)
		await expect(EdenCoindYOMB5k.transferFrom.call(addresszp6FOkz, address7Yv36r, uintadVvLHP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinOj1iJR9 = await EdenCoin.new({from: accounts[2]});
		const uintc3vZDsd = BigInt("778")
		const addressd8QMRRT = accounts[4]
		const uintQVpcvi3 = BigInt("1813")
		const addresspUQzsQF = accounts[3]
		const boolIwvFDmK = await EdenCoinOj1iJR9.increaseApproval.call(addressd8QMRRT, uintc3vZDsd, {from: accounts[4]});
//		const booldohpN5w = await EdenCoinOj1iJR9.transfer.call(addresspUQzsQF, uintQVpcvi3, {from: accounts[5]});

		assert.equal(boolIwvFDmK, true)
		await expect(EdenCoinOj1iJR9.transfer.call(addresspUQzsQF, uintQVpcvi3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinkzjXwq = await EdenCoin.new({from: accounts[1]});
		const addressEJSlwsc = accounts[0]
		const addresst1JWP08 = accounts[0]
		const uintEfHmisy = BigInt("2023")
		const addressbPo0Q6I = accounts[3]
		const addressjtWE3HX = accounts[3]
		const addressY0ZuTc6 = accounts[3]
		const uintphDuE6J = BigInt("1358")
		const addressENFrZjs = accounts[4]
		const uint256miOox0T = await EdenCoinkzjXwq.allowance.call(addresst1JWP08, addressEJSlwsc, {from: accounts[3]});
		const boolc5jJqeP = await EdenCoinkzjXwq.increaseApproval.call(addressbPo0Q6I, uintEfHmisy, {from: accounts[4]});
		const uint256d8JbQGs = await EdenCoinkzjXwq.allowance.call(addressY0ZuTc6, addressjtWE3HX, {from: accounts[0]});
		const boolCBF0YMe = await EdenCoinkzjXwq.approve.call(addressENFrZjs, uintphDuE6J, {from: accounts[1]});

		assert.equal(boolCBF0YMe, true)
		assert.equal(boolc5jJqeP, true)
		assert.equal(uint256d8JbQGs, BigInt("0"))
		assert.equal(uint256miOox0T, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinheSEmmI = await EdenCoin.new({from: accounts[0]});
		const addressxTGL6ZU = accounts[3]
		const addressuoUZtG7 = accounts[3]
		const uintINvGEdU = BigInt("1398")
		const addressWGYqHzg = accounts[6]
		const uintZ03pCSQ = BigInt("725")
		const addresszyfiHQd = accounts[0]
		const uintaNskuRS = BigInt("1092")
		const addressILGGpQ0 = accounts[2]
		const uint256siqzJMf = await EdenCoinheSEmmI.allowance.call(addressuoUZtG7, addressxTGL6ZU, {from: accounts[4]});
		const boolBEVZ0YS = await EdenCoinheSEmmI.increaseApproval.call(addressWGYqHzg, uintINvGEdU, {from: accounts[2]});
		const boolkrROoVt = await EdenCoinheSEmmI.decreaseApproval.call(addresszyfiHQd, uintZ03pCSQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolGwgtdZR = await EdenCoinheSEmmI.increaseApproval.call(addressILGGpQ0, uintaNskuRS, {from: accounts[1]});

		assert.equal(boolBEVZ0YS, true)
		assert.equal(boolGwgtdZR, true)
		assert.equal(boolkrROoVt, true)
		assert.equal(uint256siqzJMf, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoindYOMB5k = await EdenCoin.new({from: accounts[1]});
		const addressnqXv8pt = accounts[5]
		const uintoGta3NT = BigInt("531")
		const address9EiGH2 = accounts[1]
		const uintoD3lok4 = BigInt("1646")
		const addressdoMqx41 = accounts[2]
		const addressPJat7XS = "0x0000000000000000000000000000000000000001"
		const uintWOuj40c = BigInt("1515")
		const addressq7ynZs8 = accounts[5]
		const addressSlQuPlp = accounts[1]
		const addresseAlSlkw = accounts[3]
		const addressRVppMTf = accounts[1]
		const uintHEv2YWP = BigInt("1199")
		const addressiIxhesH = accounts[5]
		const uintXcpKsBd = BigInt("1064")
		const addressFHi7tci = accounts[3]
		const uintWAMk7Hw = BigInt("1479")
		const addresszRmwz8k = accounts[1]
		const addressEQgiRNE = accounts[0]
		const uintwA9gti = BigInt("206")
		const addressqQsqNrX = accounts[4]
		const uint256s1cNGiI = await EdenCoindYOMB5k.balanceOf.call(addressnqXv8pt, {from: accounts[4]});
		const booljHRjgn = await EdenCoindYOMB5k.increaseApproval.call(address9EiGH2, uintoGta3NT, {from: accounts[2]});
//		const boolhQBfKVf = await EdenCoindYOMB5k.transferFrom.call(addressPJat7XS, addressdoMqx41, uintoD3lok4, {from: accounts[1]});
//		const boolnJ864jz = await EdenCoindYOMB5k.transferFrom.call(addressSlQuPlp, addressq7ynZs8, uintWOuj40c, {from: accounts[0]});
//		const uint256rKfv4HQ = await EdenCoindYOMB5k.allowance.call(addressRVppMTf, addresseAlSlkw, {from: accounts[2]});
//		const boolqMgWnV = await EdenCoindYOMB5k.approve.call(addressiIxhesH, uintHEv2YWP, {from: "0x0000000000000000000000000000000000000001"});
//		const boolFJsKHwP = await EdenCoindYOMB5k.approve.call(addressFHi7tci, uintXcpKsBd, {from: accounts[1]});
//		const boolwmRJ3mj = await EdenCoindYOMB5k.transferFrom.call(addressEQgiRNE, addresszRmwz8k, uintWAMk7Hw, {from: accounts[4]});
//		const boolB7wv6FN = await EdenCoindYOMB5k.approve.call(addressqQsqNrX, uintwA9gti, {from: accounts[5]});

		assert.equal(booljHRjgn, true)
		assert.equal(uint256s1cNGiI, BigInt("0"))
		await expect(EdenCoindYOMB5k.transferFrom.call(addressPJat7XS, addressdoMqx41, uintoD3lok4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinOj1iJR9 = await EdenCoin.new({from: accounts[2]});
		const uintu7Dvt8E = BigInt("742")
		const addressy684wlo = accounts[4]
		const uintgmOcHD7 = BigInt("395")
		const addressqZEtbdJ = accounts[2]
		const uintVGKtSSm = BigInt("1813")
		const addressHOcOrX = accounts[3]
		const boolIwvFDmK = await EdenCoinOj1iJR9.increaseApproval.call(addressy684wlo, uintu7Dvt8E, {from: accounts[4]});
		const boolam8KmJl = await EdenCoinOj1iJR9.transfer.call(addressqZEtbdJ, uintgmOcHD7, {from: accounts[2]});
//		const booldohpN5w = await EdenCoinOj1iJR9.transfer.call(addressHOcOrX, uintVGKtSSm, {from: accounts[5]});

		assert.equal(boolIwvFDmK, true)
		assert.equal(boolam8KmJl, true)
		await expect(EdenCoinOj1iJR9.transfer.call(addressHOcOrX, uintVGKtSSm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinqv7q1au = await EdenCoin.new({from: accounts[0]});
		const uintKBX9ix4 = BigInt("0")
		const addressdaPhCxp = accounts[6]
		const uintLzXG76J = BigInt("574")
		const address4f2PiA = accounts[3]
		const uintlMorYap = BigInt("296")
		const addressdIt2D6M = "0x0000000000000000000000000000000000000001"
		const addressioHCHCs = accounts[0]
		const uintR7hLCvW = BigInt("1111")
		const addresspsup6yQ = accounts[1]
		const uintDnjbEAb = BigInt("1244")
		const addressQGHDY4K = accounts[1]
		const uintoS30rpP = BigInt("1249")
		const addressoSXtF0y = accounts[4]
		const addressQ6eotnT = accounts[4]
		const uinttB7IkmV = BigInt("176")
		const addressdtJp0Dd = "0x0000000000000000000000000000000000000001"
		const uintIyQ5fna = BigInt("85")
		const addressH1QzVOw = accounts[2]
		const uintfo9QKVI = BigInt("1253")
		const addressR0wis8i = "0x0000000000000000000000000000000000000001"
		const addressSWjkEo = accounts[4]
		const uintn7C8PKp = BigInt("393")
		const addressC3n6wh4 = accounts[1]
		const uintAa0txKI = BigInt("862")
		const addressNV0khEA = "0x0000000000000000000000000000000000000001"
		const addressi5aC3nR = accounts[4]
		const addressZmATMbr = accounts[3]
		const boolLGmcVXP = await EdenCoinqv7q1au.decreaseApproval.call(addressdaPhCxp, uintKBX9ix4, {from: accounts[3]});
		const booloS5jKYL = await EdenCoinqv7q1au.approve.call(address4f2PiA, uintLzXG76J, {from: accounts[4]});
//		const boolVj1FPnY = await EdenCoinqv7q1au.transferFrom.call(addressioHCHCs, addressdIt2D6M, uintlMorYap, {from: accounts[2]});
//		const boolgKl73f2 = await EdenCoinqv7q1au.approve.call(addresspsup6yQ, uintR7hLCvW, {from: accounts[2]});
//		const boolp1iUNfE = await EdenCoinqv7q1au.transfer.call(addressQGHDY4K, uintDnjbEAb, {from: accounts[0]});
//		const boolquIaabc = await EdenCoinqv7q1au.transferFrom.call(addressQ6eotnT, addressoSXtF0y, uintoS30rpP, {from: accounts[0]});
//		const boolT4VsrOB = await EdenCoinqv7q1au.decreaseApproval.call(addressdtJp0Dd, uinttB7IkmV, {from: accounts[4]});
//		const boolbeqMsu0 = await EdenCoinqv7q1au.transfer.call(addressH1QzVOw, uintIyQ5fna, {from: accounts[0]});
//		const boolnBwBck = await EdenCoinqv7q1au.transferFrom.call(addressSWjkEo, addressR0wis8i, uintfo9QKVI, {from: accounts[4]});
//		const boolHWNUvnS = await EdenCoinqv7q1au.increaseApproval.call(addressC3n6wh4, uintn7C8PKp, {from: accounts[1]});
//		const boolNIYWZ7K = await EdenCoinqv7q1au.approve.call(addressNV0khEA, uintAa0txKI, {from: accounts[4]});
//		const uint256tgosqdc = await EdenCoinqv7q1au.allowance.call(addressZmATMbr, addressi5aC3nR, {from: accounts[4]});

		assert.equal(boolLGmcVXP, true)
		assert.equal(booloS5jKYL, true)
		await expect(EdenCoinqv7q1au.transferFrom.call(addressioHCHCs, addressdIt2D6M, uintlMorYap, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})