const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractS0wxOtg = await HTDD_contract.new({from: accounts[3]});
		const uintJ8hrebv = BigInt("510")
		const addressXcoo6A = accounts[2]
		const uintJvhtuQ = BigInt("494")
		const addressDmnMK2L = accounts[1]
		const uintiVFqmhp = BigInt("1451")
		const addressXESijY9 = accounts[1]
		const addressBnhCxqD = accounts[2]
		const boolFno61zA = await HTDD_contractS0wxOtg.approve.call(addressXcoo6A, uintJ8hrebv, {from: accounts[0]});
//		const boolFLMWgIM = await HTDD_contractS0wxOtg.transfer.call(addressDmnMK2L, uintJvhtuQ, {from: accounts[2]});
//		const boolLUx2pBK = await HTDD_contractS0wxOtg.transferFrom.call(addressBnhCxqD, addressXESijY9, uintiVFqmhp, {from: accounts[3]});

		assert.equal(boolFno61zA, true)
		await expect(HTDD_contractS0wxOtg.transfer.call(addressDmnMK2L, uintJvhtuQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractQxc3eTk = await HTDD_contract.new({from: accounts[1]});
		const uintFjQ53m7 = BigInt("818")
		const address4Mdjsb = accounts[1]
		const addressMOKoO0X = accounts[3]
		const uintijEwVWx = BigInt("625")
		const addressacCgCN = "0x0000000000000000000000000000000000000001"
		const addresslliRVJO = accounts[2]
//		const booltMPzVF = await HTDD_contractQxc3eTk.transferFrom.call(addressMOKoO0X, address4Mdjsb, uintFjQ53m7, {from: accounts[1]});
//		const boolU4Z8SC9 = await HTDD_contractQxc3eTk.transferFrom.call(addresslliRVJO, addressacCgCN, uintijEwVWx, {from: accounts[4]});

		await expect(HTDD_contractQxc3eTk.transferFrom.call(addressMOKoO0X, address4Mdjsb, uintFjQ53m7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractb2auxZS = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintlSSGi10 = BigInt("499")
		const addresskMA5iCa = accounts[4]
		const addresswvle3s4 = accounts[0]
		const addressy7cFpDk = accounts[2]
		const boolywmydgK = await HTDD_contractb2auxZS.transfer.call(addresskMA5iCa, uintlSSGi10, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jHAMvYw = await HTDD_contractb2auxZS.allowance.call(addressy7cFpDk, addresswvle3s4, {from: accounts[1]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractvFiLzO = await HTDD_contract.new({from: accounts[4]});
		const addressefe2oVo = accounts[5]
		const addressASrcK9r = "0x0000000000000000000000000000000000000001"
		const uintSu6GIoY = BigInt("789")
		const addressZUutYK9 = accounts[5]
		const addressCFpxVE = accounts[1]
		const addressslIB1Gy = "0x0000000000000000000000000000000000000001"
		const addressEjBEcIN = accounts[2]
		const uint9JMbxJ = BigInt("1514")
		const addresskcLlepD = accounts[4]
		const uintbN4I2u8 = BigInt("915")
		const addressD1hu0KQ = accounts[1]
		const uintmPyRXWb = BigInt("1822")
		const addressIERcAi = accounts[0]
		const uint256HamDq7j = await HTDD_contractvFiLzO.allowance.call(addressASrcK9r, addressefe2oVo, {from: accounts[4]});
//		const bool0xOmpc = await HTDD_contractvFiLzO.transferFrom.call(addressCFpxVE, addressZUutYK9, uintSu6GIoY, {from: accounts[4]});
//		const uint256bfFZCd9 = await HTDD_contractvFiLzO.allowance.call(addressEjBEcIN, addressslIB1Gy, {from: accounts[0]});
//		const booldjsXhee = await HTDD_contractvFiLzO.approve.call(addresskcLlepD, uint9JMbxJ, {from: accounts[0]});
//		const boolZvBzpV = await HTDD_contractvFiLzO.approve.call(addressD1hu0KQ, uintbN4I2u8, {from: accounts[2]});
//		const boolgFpWsNJ = await HTDD_contractvFiLzO.approve.call(addressIERcAi, uintmPyRXWb, {from: accounts[1]});

		assert.equal(uint256HamDq7j, BigInt("0"))
		await expect(HTDD_contractvFiLzO.transferFrom.call(addressCFpxVE, addressZUutYK9, uintSu6GIoY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})