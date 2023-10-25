const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractKrGmfaM = await HTDD_contract.new({from: accounts[4]});
		const uintUBpEhhP = BigInt("15")
		const addressPqPUI5p = accounts[1]
		const addressGjamxKs = accounts[4]
		const uintF3N1dF = BigInt("242")
		const addressDt2bym = accounts[3]
		const addressPgH3DfA = accounts[4]
		const uintPy1zqvO = BigInt("311")
		const addresssfwcjnT = accounts[3]
		const addressIrD0ffi = accounts[3]
		const uintKSMTF2y = BigInt("1040")
		const addressF7kIQAA = accounts[3]
		const addressQXyFQn = accounts[0]
		const bool5wL1FO = await HTDD_contractKrGmfaM.transferFrom.call(addressGjamxKs, addressPqPUI5p, uintUBpEhhP, {from: accounts[4]});
		const boolNYwvEJj = await HTDD_contractKrGmfaM.transferFrom.call(addressPgH3DfA, addressDt2bym, uintF3N1dF, {from: "0x0000000000000000000000000000000000000001"});
		const boolVHFEWyz = await HTDD_contractKrGmfaM.transferFrom.call(addressIrD0ffi, addresssfwcjnT, uintPy1zqvO, {from: accounts[4]});
		const boolo7gFCq = await HTDD_contractKrGmfaM.transferFrom.call(addressQXyFQn, addressF7kIQAA, uintKSMTF2y, {from: "0x0000000000000000000000000000000000000001"});

		await expect(HTDD_contractKrGmfaM.transferFrom.call(addressGjamxKs, addressPqPUI5p, uintUBpEhhP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractANXac0s = await HTDD_contract.new({from: accounts[4]});
		const uinth7E6EoG = BigInt("1980")
		const addressf50xI6x = accounts[3]
		const uintNJYL6rc = BigInt("1578")
		const addressbgxwDSz = accounts[0]
		const addressfxrddp4 = accounts[4]
		const uintV8fwQA = BigInt("62")
		const addressjrM8Eah = accounts[1]
		const addressDY2BTJm = accounts[3]
		const booleRarcjQ = await HTDD_contractANXac0s.approve.call(addressf50xI6x, uinth7E6EoG, {from: accounts[2]});
		const boolrC3paLN = await HTDD_contractANXac0s.transferFrom.call(addressfxrddp4, addressbgxwDSz, uintNJYL6rc, {from: accounts[4]});
		const boolwdP4wjr = await HTDD_contractANXac0s.transferFrom.call(addressDY2BTJm, addressjrM8Eah, uintV8fwQA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booleRarcjQ, true)
		await expect(HTDD_contractANXac0s.transferFrom.call(addressfxrddp4, addressbgxwDSz, uintNJYL6rc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractpVp8xHC = await HTDD_contract.new({from: accounts[1]});
		const addressZ3B4aim = accounts[4]
		const addresszUYyjAv = accounts[1]
		const uintyFSZsuk = BigInt("740")
		const addressN15BxK6 = accounts[0]
		const uintofZBT7 = BigInt("1530")
		const addressPDtLDWR = accounts[0]
		const uint256CHq0oH9 = await HTDD_contractpVp8xHC.allowance.call(addresszUYyjAv, addressZ3B4aim, {from: accounts[2]});
		const boolciSs4dG = await HTDD_contractpVp8xHC.transfer.call(addressN15BxK6, uintyFSZsuk, {from: accounts[5]});
		const boolOETT3qm = await HTDD_contractpVp8xHC.approve.call(addressPDtLDWR, uintofZBT7, {from: accounts[3]});

		assert.equal(uint256CHq0oH9, BigInt("0"))
		await expect(HTDD_contractpVp8xHC.transfer.call(addressN15BxK6, uintyFSZsuk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractrGuQaJl = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintStXZ8vA = BigInt("1699")
		const addressRrCWHwb = accounts[0]
		const uintYpRUkNO = BigInt("689")
		const addressy0hYmq = accounts[4]
		const boolwyM5DsC = await HTDD_contractrGuQaJl.approve.call(addressRrCWHwb, uintStXZ8vA, {from: accounts[2]});
		const boolABtWE60 = await HTDD_contractrGuQaJl.approve.call(addressy0hYmq, uintYpRUkNO, {from: accounts[4]});
	});
})