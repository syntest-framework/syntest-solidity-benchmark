const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinI58Mcil = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJJJlsSW = BigInt("2044")
		const addressEq2DTgv = accounts[5]
		const uintOQClD6V = BigInt("270")
		const addressClwdbaJ = accounts[0]
		const uintsl71JBU = BigInt("757")
		const addressuTlpk2 = accounts[3]
		const addresslr3CDoD = accounts[4]
		const uintbfIHoQK = BigInt("1394")
		const addressMTuFPbm = accounts[1]
		const boolv5KZUsl = await EdenCoinI58Mcil.increaseApproval.call(addressEq2DTgv, uintJJJlsSW, {from: accounts[4]});
		const boolmCQDsmi = await EdenCoinI58Mcil.transfer.call(addressClwdbaJ, uintOQClD6V, {from: accounts[5]});
		const booldH5KMH = await EdenCoinI58Mcil.transferFrom.call(addresslr3CDoD, addressuTlpk2, uintsl71JBU, {from: accounts[4]});
		const boolouhGDJ2 = await EdenCoinI58Mcil.decreaseApproval.call(addressMTuFPbm, uintbfIHoQK, {from: accounts[4]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinvN7hiWE = await EdenCoin.new({from: accounts[0]});
		const uintQ6umW6D = BigInt("1232")
		const addressSluKNEA = accounts[3]
		const addressjMzIee = "0x0000000000000000000000000000000000000001"
		const uintXMHqGh = BigInt("1063")
		const addressC7GeQFj = accounts[4]
		const address8jYjbf = accounts[2]
		const addressRlSIbwm = accounts[3]
		const boolFUsBfa = await EdenCoinvN7hiWE.transfer.call(addressSluKNEA, uintQ6umW6D, {from: accounts[0]});
		const uint256CUaLcE9 = await EdenCoinvN7hiWE.balanceOf.call(addressjMzIee, {from: accounts[4]});
		const boollo1LzA4 = await EdenCoinvN7hiWE.transfer.call(addressC7GeQFj, uintXMHqGh, {from: accounts[0]});
		const uint256s6HTnNh = await EdenCoinvN7hiWE.allowance.call(addressRlSIbwm, address8jYjbf, {from: accounts[1]});

		assert.equal(boolFUsBfa, true)
		assert.equal(boollo1LzA4, true)
		assert.equal(uint256CUaLcE9, BigInt("0"))
		assert.equal(uint256s6HTnNh, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoincd7YPZ8 = await EdenCoin.new({from: accounts[1]});
		const addressD2Vs5CU = accounts[0]
		const uintaS1ns1 = BigInt("881")
		const addressUQDHDr = accounts[1]
		const uintX3kDkvm = BigInt("1544")
		const addressLKaGMvf = accounts[1]
		const uinte0YbGns = BigInt("1015")
		const addressMS5lDD2 = accounts[1]
		const uintpVrgQa = BigInt("1794")
		const addressm2SWjJ1 = accounts[4]
		const uint256pTmsz4g = await EdenCoincd7YPZ8.balanceOf.call(addressD2Vs5CU, {from: accounts[2]});
//		const boolaylXaGq = await EdenCoincd7YPZ8.transfer.call(addressUQDHDr, uintaS1ns1, {from: accounts[4]});
//		const booluNQZNRK = await EdenCoincd7YPZ8.approve.call(addressLKaGMvf, uintX3kDkvm, {from: accounts[0]});
//		const boolxqgvqyP = await EdenCoincd7YPZ8.approve.call(addressMS5lDD2, uinte0YbGns, {from: accounts[0]});
//		const boolDoleUZ1 = await EdenCoincd7YPZ8.approve.call(addressm2SWjJ1, uintpVrgQa, {from: accounts[3]});

		assert.equal(uint256pTmsz4g, BigInt("0"))
		await expect(EdenCoincd7YPZ8.transfer.call(addressUQDHDr, uintaS1ns1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoincQ6Cpeg = await EdenCoin.new({from: accounts[0]});
		const addressCrAUqiG = accounts[1]
		const addressygutbUj = accounts[2]
		const addressTaRCdP = accounts[5]
		const addressNRbDoaq = accounts[4]
		const addresslZvBWuR = accounts[1]
		const addressYeqLbs4 = accounts[0]
		const uintGdfFeD = BigInt("2036")
		const addresshEzzDaS = accounts[2]
		const addressjflQWU = accounts[0]
		const uint256efLrpSx = await EdenCoincQ6Cpeg.allowance.call(addressygutbUj, addressCrAUqiG, {from: accounts[1]});
		const uint256g04CNTS = await EdenCoincQ6Cpeg.allowance.call(addressNRbDoaq, addressTaRCdP, {from: accounts[4]});
		const uint256yWWwT2b = await EdenCoincQ6Cpeg.allowance.call(addressYeqLbs4, addresslZvBWuR, {from: "0x0000000000000000000000000000000000000001"});
//		const boolgu6hGcD = await EdenCoincQ6Cpeg.transferFrom.call(addressjflQWU, addresshEzzDaS, uintGdfFeD, {from: accounts[1]});

		assert.equal(uint256efLrpSx, BigInt("0"))
		assert.equal(uint256g04CNTS, BigInt("0"))
		assert.equal(uint256yWWwT2b, BigInt("0"))
		await expect(EdenCoincQ6Cpeg.transferFrom.call(addressjflQWU, addresshEzzDaS, uintGdfFeD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinO6ioe2i = await EdenCoin.new({from: accounts[1]});
		const uintLf1C670 = BigInt("1445")
		const addressw0VrhLV = accounts[3]
		const addressqpNWc4H = accounts[1]
		const addressGjoKTj3 = accounts[4]
		const addressuuhvEu = accounts[5]
		const uintCxzqzdJ = BigInt("1656")
		const addresst9L3UHx = accounts[3]
		const boolhdBN3Yo = await EdenCoinO6ioe2i.approve.call(addressw0VrhLV, uintLf1C670, {from: accounts[2]});
		const uint256HpnzlwP = await EdenCoinO6ioe2i.allowance.call(addressGjoKTj3, addressqpNWc4H, {from: accounts[3]});
		const uint256fpMGFoc = await EdenCoinO6ioe2i.balanceOf.call(addressuuhvEu, {from: "0x0000000000000000000000000000000000000001"});
		const boolCydrNux = await EdenCoinO6ioe2i.decreaseApproval.call(addresst9L3UHx, uintCxzqzdJ, {from: accounts[5]});

		assert.equal(boolCydrNux, true)
		assert.equal(boolhdBN3Yo, true)
		assert.equal(uint256HpnzlwP, BigInt("0"))
		assert.equal(uint256fpMGFoc, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinBmVzUbf = await EdenCoin.new({from: accounts[4]});
		const addressK1Hd1SA = accounts[4]
		const addressUmEPP9D = "0x0000000000000000000000000000000000000001"
		const uintIVCwA0t = BigInt("1857")
		const addressWgTrZ3 = accounts[0]
		const uintW9ok3M = BigInt("356")
		const addressaorQsYM = accounts[2]
		const uintF614dqb = BigInt("3")
		const addressjlzNVOi = accounts[5]
		const uint256yddgdud = await EdenCoinBmVzUbf.allowance.call(addressUmEPP9D, addressK1Hd1SA, {from: accounts[2]});
		const boolRMOKXVW = await EdenCoinBmVzUbf.increaseApproval.call(addressWgTrZ3, uintIVCwA0t, {from: accounts[2]});
		const boolGtv5bSg = await EdenCoinBmVzUbf.approve.call(addressaorQsYM, uintW9ok3M, {from: accounts[0]});
		const boolseXQVFZ = await EdenCoinBmVzUbf.decreaseApproval.call(addressjlzNVOi, uintF614dqb, {from: accounts[0]});

		assert.equal(boolGtv5bSg, true)
		assert.equal(boolRMOKXVW, true)
		assert.equal(boolseXQVFZ, true)
		assert.equal(uint256yddgdud, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinBmVzUbf = await EdenCoin.new({from: accounts[4]});
		const uintIJw11w0 = BigInt("684")
		const addressBkBnkGC = accounts[1]
		const addressiDOHlUl = accounts[2]
		const addressSCUn8fR = accounts[1]
		const uintgNf8wXf = BigInt("0")
		const addressZD7IwG = accounts[5]
		const boolustTYez = await EdenCoinBmVzUbf.increaseApproval.call(addressBkBnkGC, uintIJw11w0, {from: accounts[1]});
		const uint256YNHYQTJ = await EdenCoinBmVzUbf.allowance.call(addressSCUn8fR, addressiDOHlUl, {from: accounts[3]});
		const boolseXQVFZ = await EdenCoinBmVzUbf.decreaseApproval.call(addressZD7IwG, uintgNf8wXf, {from: accounts[0]});

		assert.equal(boolseXQVFZ, true)
		assert.equal(boolustTYez, true)
		assert.equal(uint256YNHYQTJ, BigInt("0"))
	});
})