const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceK9bsHhR = await Straight_Fire_Finance.new({from: accounts[1]});
		const uintFa6wMgl = BigInt("1903")
		const addressRO24P7E = accounts[3]
		const addressCMqcGgi = accounts[3]
		const addressXXtyPkZ = "0x0000000000000000000000000000000000000001"
		const uintaKEHNuI = BigInt("1411")
		const addressldRih5e = accounts[4]
		const addresstLHYLe4 = accounts[2]
		const addresslqlwsJQ = accounts[4]
		const addressCswJ2wo = accounts[4]
		const uintjZ0OHD5 = BigInt("1531")
		const addressuGu76NC = accounts[4]
		const boolwxYDTwm = await Straight_Fire_FinanceK9bsHhR.transfer.call(addressRO24P7E, uintFa6wMgl, {from: accounts[3]});
		const uintATK36Nv = await Straight_Fire_FinanceK9bsHhR.allowance.call(addressXXtyPkZ, addressCMqcGgi, {from: accounts[4]});
		const boolAaUCZOv = await Straight_Fire_FinanceK9bsHhR.transferFrom.call(addresstLHYLe4, addressldRih5e, uintaKEHNuI, {from: accounts[0]});
		const uintZH4NpGi = await Straight_Fire_FinanceK9bsHhR.allowance.call(addressCswJ2wo, addresslqlwsJQ, {from: accounts[3]});
		const boolMBeY2uL = await Straight_Fire_FinanceK9bsHhR.approve.call(addressuGu76NC, uintjZ0OHD5, {from: accounts[1]});

		assert.equal(boolAaUCZOv, false)
		assert.equal(boolMBeY2uL, true)
		assert.equal(boolwxYDTwm, false)
		assert.equal(uintATK36Nv, BigInt("0"))
		assert.equal(uintZH4NpGi, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancelskIty0 = await Straight_Fire_Finance.new({from: accounts[3]});
		const addresshqlrhr7 = accounts[3]
		const addressZKyfrAm = "0x0000000000000000000000000000000000000001"
		const uintjnA5vFE = BigInt("1500")
		const addressF3Rttcc = accounts[1]
		const addressICPqahJ = accounts[0]
		const addresscLB46M = accounts[2]
		const addressVBxzmjL = "0x0000000000000000000000000000000000000001"
		const address0BDBMX = accounts[2]
		const addressWrfgUEp = accounts[4]
		const uint256QfRBAl = await Straight_Fire_FinancelskIty0.balanceOf.call(addresshqlrhr7, {from: accounts[3]});
		const uint256IV7bYvU = await Straight_Fire_FinancelskIty0.balanceOf.call(addressZKyfrAm, {from: accounts[0]});
		const boolitdL3qv = await Straight_Fire_FinancelskIty0.transferFrom.call(addressICPqahJ, addressF3Rttcc, uintjnA5vFE, {from: accounts[3]});
		const uint256Hco3Xf = await Straight_Fire_FinancelskIty0.totalSupply.call({from: accounts[0]});
		const uintb2va3sB = await Straight_Fire_FinancelskIty0.allowance.call(addressVBxzmjL, addresscLB46M, {from: accounts[5]});
		const uintw3sG1cl = await Straight_Fire_FinancelskIty0.allowance.call(addressWrfgUEp, address0BDBMX, {from: accounts[0]});

		assert.equal(boolitdL3qv, false)
		assert.equal(uint256Hco3Xf, BigInt("80000000000000000000000"))
		assert.equal(uint256IV7bYvU, BigInt("0"))
		assert.equal(uint256QfRBAl, BigInt("80000000000000000000000"))
		assert.equal(uintb2va3sB, BigInt("0"))
		assert.equal(uintw3sG1cl, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financeu6B8XhC = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSLBLH90 = BigInt("1418")
		const addresskbPGiJH = accounts[1]
		const addressscEnsOM = "0x0000000000000000000000000000000000000001"
		const uintCIJlIKP = BigInt("1223")
		const addressgPt3qDn = accounts[4]
		const uintjnZ0xN = BigInt("1135")
		const addressYcxJnrN = accounts[2]
		const addressBFhgINr = accounts[2]
		const uinthoclfHK = BigInt("1211")
		const addressl9ehblm = accounts[2]
		const addressCuUwMub = accounts[3]
		const bool18MJ0m = await Straight_Fire_Financeu6B8XhC.transferFrom.call(addressscEnsOM, addresskbPGiJH, uintSLBLH90, {from: accounts[4]});
		const boolcF7QAEq = await Straight_Fire_Financeu6B8XhC.transfer.call(addressgPt3qDn, uintCIJlIKP, {from: accounts[2]});
		const boolfbdYPcF = await Straight_Fire_Financeu6B8XhC.transferFrom.call(addressBFhgINr, addressYcxJnrN, uintjnZ0xN, {from: accounts[3]});
		const boolak2fla = await Straight_Fire_Financeu6B8XhC.transferFrom.call(addressCuUwMub, addressl9ehblm, uinthoclfHK, {from: accounts[3]});
	});
})