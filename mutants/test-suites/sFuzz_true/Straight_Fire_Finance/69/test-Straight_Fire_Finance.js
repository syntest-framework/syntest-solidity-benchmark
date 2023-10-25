const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancejxQTRd = await Straight_Fire_Finance.new({from: accounts[3]});
		const addressWKWqLoJ = accounts[4]
		const addressPsjW7WW = accounts[1]
		const uintLSespv8 = BigInt("1686")
		const addressJcypYa = accounts[0]
		const uint256KNwUuJS = await Straight_Fire_FinancejxQTRd.balanceOf.call(addressWKWqLoJ, {from: accounts[1]});
		const uint256ycODYvu = await Straight_Fire_FinancejxQTRd.balanceOf.call(addressPsjW7WW, {from: accounts[3]});
		const booljF4jmsT = await Straight_Fire_FinancejxQTRd.transfer.call(addressJcypYa, uintLSespv8, {from: accounts[5]});

		assert.equal(booljF4jmsT, false)
		assert.equal(uint256KNwUuJS, BigInt("0"))
		assert.equal(uint256ycODYvu, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financea1XFual = await Straight_Fire_Finance.new({from: accounts[2]});
		const addressyLylOjf = accounts[3]
		const addressGX3Hc9K = accounts[5]
		const uintkuPnKC2 = BigInt("988")
		const addresskf3Vxz9 = accounts[2]
		const uintEmUp6iB = BigInt("22")
		const addressBagh6i8 = accounts[1]
		const addressr8e6ihV = accounts[1]
		const uintRY3Llj6 = await Straight_Fire_Financea1XFual.allowance.call(addressGX3Hc9K, addressyLylOjf, {from: accounts[0]});
		const bool2rE6Lq = await Straight_Fire_Financea1XFual.transfer.call(addresskf3Vxz9, uintkuPnKC2, {from: accounts[3]});
		const boolyqutlR1 = await Straight_Fire_Financea1XFual.transferFrom.call(addressr8e6ihV, addressBagh6i8, uintEmUp6iB, {from: accounts[3]});

		assert.equal(bool2rE6Lq, false)
		assert.equal(boolyqutlR1, false)
		assert.equal(uintRY3Llj6, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceiQtPYO8 = await Straight_Fire_Finance.new({from: accounts[4]});
		const uinto5MwG7 = BigInt("67")
		const addressbOS2RMP = accounts[0]
		const uintE60HGe1 = BigInt("2040")
		const addressbZ2ilDj = accounts[0]
		const addressIGmPF0d = accounts[2]
		const addressIfchUb = accounts[2]
		const uint256CrR72iu = await Straight_Fire_FinanceiQtPYO8.totalSupply.call({from: accounts[4]});
		const boolNCkyz16 = await Straight_Fire_FinanceiQtPYO8.transfer.call(addressbOS2RMP, uinto5MwG7, {from: accounts[4]});
		const boolayedBxD = await Straight_Fire_FinanceiQtPYO8.approve.call(addressbZ2ilDj, uintE60HGe1, {from: accounts[2]});
		const uintIZ8pglN = await Straight_Fire_FinanceiQtPYO8.allowance.call(addressIfchUb, addressIGmPF0d, {from: accounts[2]});

		assert.equal(boolNCkyz16, true)
		assert.equal(boolayedBxD, true)
		assert.equal(uint256CrR72iu, BigInt("80000000000000000000000"))
		assert.equal(uintIZ8pglN, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financeo4FaP0S = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZwMyzgH = BigInt("886")
		const addressbAI0I7C = accounts[2]
		const addressz2kuJFG = "0x0000000000000000000000000000000000000001"
		const addressWu05Tb2 = accounts[5]
		const boolIDaCuQ2 = await Straight_Fire_Financeo4FaP0S.transfer.call(addressbAI0I7C, uintZwMyzgH, {from: accounts[3]});
		const uintKnKRIu = await Straight_Fire_Financeo4FaP0S.allowance.call(addressWu05Tb2, addressz2kuJFG, {from: accounts[0]});
	});
})