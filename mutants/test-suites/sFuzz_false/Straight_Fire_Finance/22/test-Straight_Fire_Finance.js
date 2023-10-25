const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancejsKD3bk = await Straight_Fire_Finance.new({from: accounts[1]});
		const uintqq42QJ4 = BigInt("758")
		const addresswfnZJim = accounts[3]
		const addressC9Ukb7u = accounts[5]
		const addressDLyW0pa = accounts[2]
		const uintTpvdGkN = BigInt("605")
		const addressw4FtEo7 = accounts[3]
		const boolN7AzfET = await Straight_Fire_FinancejsKD3bk.transferFrom.call(addressC9Ukb7u, addresswfnZJim, uintqq42QJ4, {from: accounts[0]});
		const uint256BA6K5o = await Straight_Fire_FinancejsKD3bk.balanceOf.call(addressDLyW0pa, {from: accounts[4]});
		const uint256Mflu8Y = await Straight_Fire_FinancejsKD3bk.totalSupply.call({from: accounts[4]});
		const boolkrQcirh = await Straight_Fire_FinancejsKD3bk.transfer.call(addressw4FtEo7, uintTpvdGkN, {from: accounts[1]});

		assert.equal(boolN7AzfET, false)
		assert.equal(boolkrQcirh, true)
		assert.equal(uint256BA6K5o, BigInt("0"))
		assert.equal(uint256Mflu8Y, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceiQnEpXk = await Straight_Fire_Finance.new({from: accounts[1]});
		const addressSCmUFi3 = accounts[1]
		const uinttMdvEqv = BigInt("1359")
		const addresssiVX2IP = accounts[1]
		const uintRuZ4Qtu = BigInt("357")
		const addressA0tZgBj = accounts[0]
		const addressTMGiN6e = accounts[1]
		const uint256V2PRZqD = await Straight_Fire_FinanceiQnEpXk.balanceOf.call(addressSCmUFi3, {from: accounts[0]});
		const boolZbpdL1p = await Straight_Fire_FinanceiQnEpXk.approve.call(addresssiVX2IP, uinttMdvEqv, {from: accounts[0]});
		const boolj7rDCM2 = await Straight_Fire_FinanceiQnEpXk.transferFrom.call(addressTMGiN6e, addressA0tZgBj, uintRuZ4Qtu, {from: accounts[3]});

		assert.equal(boolZbpdL1p, true)
		assert.equal(boolj7rDCM2, false)
		assert.equal(uint256V2PRZqD, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceAVHr4kN = await Straight_Fire_Finance.new({from: accounts[2]});
		const addresshOahXU = accounts[0]
		const uintUJiJtIU = BigInt("182")
		const addressNGmBsPp = "0x0000000000000000000000000000000000000001"
		const addressHLE6CK = accounts[3]
		const addressgOnNKM = "0x0000000000000000000000000000000000000001"
		const addressfMzmdDQ = accounts[1]
		const uintOm845wl = BigInt("120")
		const addressK7lean3 = accounts[4]
		const addressChGjcBQ = "0x0000000000000000000000000000000000000001"
		const address2t7RHU = "0x0000000000000000000000000000000000000001"
		const addressfP70azv = accounts[3]
		const uint256SU9he0U = await Straight_Fire_FinanceAVHr4kN.balanceOf.call(addresshOahXU, {from: accounts[4]});
		const boolyl2Pvzi = await Straight_Fire_FinanceAVHr4kN.transferFrom.call(addressHLE6CK, addressNGmBsPp, uintUJiJtIU, {from: accounts[1]});
		const uintX2JAUQJ = await Straight_Fire_FinanceAVHr4kN.allowance.call(addressfMzmdDQ, addressgOnNKM, {from: accounts[1]});
		const booldSd5DQ = await Straight_Fire_FinanceAVHr4kN.transferFrom.call(addressChGjcBQ, addressK7lean3, uintOm845wl, {from: "0x0000000000000000000000000000000000000001"});
		const uint256T6nQjs = await Straight_Fire_FinanceAVHr4kN.balanceOf.call(address2t7RHU, {from: accounts[2]});
		const uint256tS8RWsM = await Straight_Fire_FinanceAVHr4kN.balanceOf.call(addressfP70azv, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booldSd5DQ, false)
		assert.equal(boolyl2Pvzi, false)
		assert.equal(uint256SU9he0U, BigInt("0"))
		assert.equal(uint256T6nQjs, BigInt("0"))
		assert.equal(uint256tS8RWsM, BigInt("0"))
		assert.equal(uintX2JAUQJ, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceNhhw0Wo = await Straight_Fire_Finance.new({from: accounts[1]});
		const addressMWLlQNk = accounts[0]
		const addressEYoSifF = accounts[0]
		const addressiduk11F = "0x0000000000000000000000000000000000000001"
		const addressfkQXIPQ = accounts[3]
		const uintnEaKDMY = BigInt("563")
		const addressIzY0E5E = accounts[2]
		const uint256cWrpD4k = await Straight_Fire_FinanceNhhw0Wo.balanceOf.call(addressMWLlQNk, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CGSnfJX = await Straight_Fire_FinanceNhhw0Wo.balanceOf.call(addressEYoSifF, {from: accounts[2]});
		const uint256kYLWTcn = await Straight_Fire_FinanceNhhw0Wo.totalSupply.call({from: accounts[5]});
		const uint256Vmkrho5 = await Straight_Fire_FinanceNhhw0Wo.balanceOf.call(addressiduk11F, {from: accounts[3]});
		const uint256D9s4MTp = await Straight_Fire_FinanceNhhw0Wo.balanceOf.call(addressfkQXIPQ, {from: accounts[3]});
		const boolhm0w2cc = await Straight_Fire_FinanceNhhw0Wo.transfer.call(addressIzY0E5E, uintnEaKDMY, {from: accounts[2]});

		assert.equal(boolhm0w2cc, false)
		assert.equal(uint256CGSnfJX, BigInt("0"))
		assert.equal(uint256D9s4MTp, BigInt("0"))
		assert.equal(uint256Vmkrho5, BigInt("0"))
		assert.equal(uint256cWrpD4k, BigInt("0"))
		assert.equal(uint256kYLWTcn, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceUDopPxU = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmN0C6th = BigInt("1206")
		const addressL7PzSiX = accounts[2]
		const addressNSycWuG = accounts[3]
		const addresscEIdD2 = "0x0000000000000000000000000000000000000001"
		const uintaBh1HFx = BigInt("2027")
		const addressMWdQEsL = accounts[0]
		const uintJvGgW3E = BigInt("1648")
		const addressCnhMZ9S = accounts[3]
		const addressWUv2AaM = accounts[1]
		const uintnihembh = BigInt("1835")
		const addressYoWNmdB = accounts[1]
		const boolIyvE6zL = await Straight_Fire_FinanceUDopPxU.transfer.call(addressL7PzSiX, uintmN0C6th, {from: accounts[5]});
		const uintbH72oMt = await Straight_Fire_FinanceUDopPxU.allowance.call(addresscEIdD2, addressNSycWuG, {from: "0x0000000000000000000000000000000000000001"});
		const boolGKFQhs = await Straight_Fire_FinanceUDopPxU.transfer.call(addressMWdQEsL, uintaBh1HFx, {from: accounts[0]});
		const boolUpLOx2l = await Straight_Fire_FinanceUDopPxU.transferFrom.call(addressWUv2AaM, addressCnhMZ9S, uintJvGgW3E, {from: accounts[1]});
		const boolXfGkMfd = await Straight_Fire_FinanceUDopPxU.transfer.call(addressYoWNmdB, uintnihembh, {from: accounts[5]});
	});
})