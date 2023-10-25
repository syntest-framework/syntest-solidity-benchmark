const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancekfmOFn = await Straight_Fire_Finance.new({from: accounts[4]});
		const uintUsSxPgx = BigInt("429")
		const addressLoQoV3h = accounts[2]
		const addressV8OIs5j = "0x0000000000000000000000000000000000000001"
		const addressyjeS8ou = accounts[5]
		const uintc386Dbj = BigInt("614")
		const addressqNmiZfd = accounts[2]
		const boolrwJ48mg = await Straight_Fire_FinancekfmOFn.transfer.call(addressLoQoV3h, uintUsSxPgx, {from: accounts[1]});
		const uintaijUvvk = await Straight_Fire_FinancekfmOFn.allowance.call(addressyjeS8ou, addressV8OIs5j, {from: accounts[1]});
		const boolA7O15O = await Straight_Fire_FinancekfmOFn.transfer.call(addressqNmiZfd, uintc386Dbj, {from: accounts[1]});

		assert.equal(boolA7O15O, false)
		assert.equal(boolrwJ48mg, false)
		assert.equal(uintaijUvvk, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceppAo8Zl = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressJPKkC4H = accounts[1]
		const addressxfwvkk = accounts[1]
		const uintE3V4sWt = BigInt("7")
		const addressaESmMl = accounts[5]
		const uintU8LSgNQ = BigInt("123")
		const addressUx2MRec = accounts[3]
		const addressOEL8wno = accounts[1]
		const uintq94Lwt4 = BigInt("140")
		const addressL7iu79a = accounts[1]
		const addressxKUAxOn = "0x0000000000000000000000000000000000000001"
		const uintyLXIalU = await Straight_Fire_FinanceppAo8Zl.allowance.call(addressxfwvkk, addressJPKkC4H, {from: accounts[4]});
		const boolrb6FL1K = await Straight_Fire_FinanceppAo8Zl.approve.call(addressaESmMl, uintE3V4sWt, {from: accounts[0]});
		const boolrW8nsKz = await Straight_Fire_FinanceppAo8Zl.transferFrom.call(addressOEL8wno, addressUx2MRec, uintU8LSgNQ, {from: accounts[5]});
		const boolf3TainS = await Straight_Fire_FinanceppAo8Zl.transferFrom.call(addressxKUAxOn, addressL7iu79a, uintq94Lwt4, {from: accounts[1]});
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceJ48lklQ = await Straight_Fire_Finance.new({from: accounts[3]});
		const uintz5Q5mqv = BigInt("710")
		const address68xn54 = accounts[4]
		const addressgNGIgI = accounts[2]
		const addresscPsS3G = accounts[2]
		const uintUOiSav0 = BigInt("1931")
		const addressMfEtDBV = accounts[0]
		const uintrxqTtHl = BigInt("1259")
		const addressHJOPbXX = accounts[2]
		const addresssQPOuY4 = accounts[2]
		const uinttJ2Iu3s = BigInt("592")
		const addressz48Bvu2 = accounts[4]
		const boolyc63Y43 = await Straight_Fire_FinanceJ48lklQ.transfer.call(address68xn54, uintz5Q5mqv, {from: accounts[0]});
		const uintLUefdBy = await Straight_Fire_FinanceJ48lklQ.allowance.call(addresscPsS3G, addressgNGIgI, {from: accounts[3]});
		const booluJAFcDR = await Straight_Fire_FinanceJ48lklQ.transfer.call(addressMfEtDBV, uintUOiSav0, {from: accounts[2]});
		const boolkXDGcW = await Straight_Fire_FinanceJ48lklQ.approve.call(addressHJOPbXX, uintrxqTtHl, {from: accounts[5]});
		const uint256rkaLPPe = await Straight_Fire_FinanceJ48lklQ.balanceOf.call(addresssQPOuY4, {from: accounts[2]});
		const boolQGGTMnv = await Straight_Fire_FinanceJ48lklQ.transfer.call(addressz48Bvu2, uinttJ2Iu3s, {from: accounts[0]});

		assert.equal(boolQGGTMnv, false)
		assert.equal(boolkXDGcW, true)
		assert.equal(booluJAFcDR, false)
		assert.equal(boolyc63Y43, false)
		assert.equal(uint256rkaLPPe, BigInt("0"))
		assert.equal(uintLUefdBy, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financeb2zB9yG = await Straight_Fire_Finance.new({from: accounts[5]});
		const uinttopmdG4 = BigInt("631")
		const addressaaZmasG = accounts[2]
		const addressEzr4QE7 = accounts[1]
		const uintmkfUdWa = BigInt("545")
		const addressnBdpjwm = accounts[0]
		const addressLAY9lyO = accounts[3]
		const addressPZZC3W = accounts[5]
		const addressEW5HfzM = accounts[3]
		const boolEtKNVoA = await Straight_Fire_Financeb2zB9yG.transferFrom.call(addressEzr4QE7, addressaaZmasG, uinttopmdG4, {from: accounts[1]});
		const uint256XuPdFu2 = await Straight_Fire_Financeb2zB9yG.totalSupply.call({from: accounts[0]});
		const uint256BQlAV5F = await Straight_Fire_Financeb2zB9yG.totalSupply.call({from: accounts[1]});
		const boolegyCWch = await Straight_Fire_Financeb2zB9yG.transferFrom.call(addressLAY9lyO, addressnBdpjwm, uintmkfUdWa, {from: accounts[3]});
		const uintSnUOvTs = await Straight_Fire_Financeb2zB9yG.allowance.call(addressEW5HfzM, addressPZZC3W, {from: accounts[2]});

		assert.equal(boolEtKNVoA, false)
		assert.equal(boolegyCWch, false)
		assert.equal(uint256BQlAV5F, BigInt("80000000000000000000000"))
		assert.equal(uint256XuPdFu2, BigInt("80000000000000000000000"))
		assert.equal(uintSnUOvTs, BigInt("0"))
	});
})