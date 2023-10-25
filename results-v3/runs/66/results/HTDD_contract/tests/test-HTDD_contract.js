const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractm8G8Ai0 = await HTDD_contract.new({from: accounts[1]});
		const uintRpXg66i = BigInt("1656")
		const addressdDszHtp = accounts[2]
		const addressz9kqNBC = accounts[2]
		const addressybvlsUl = accounts[1]
		const uintfgLAdWj = BigInt("186")
		const addressBfmoRTJ = accounts[4]
		const addressLP8dFpm = accounts[4]
		const addressrCoCFOi = accounts[4]
		const boolNcDZh9s = await HTDD_contractm8G8Ai0.transfer.call(addressdDszHtp, uintRpXg66i, {from: accounts[1]});
		const uint256vdMXrYF = await HTDD_contractm8G8Ai0.allowance.call(addressybvlsUl, addressz9kqNBC, {from: accounts[1]});
		const booli8kxqeU = await HTDD_contractm8G8Ai0.approve.call(addressBfmoRTJ, uintfgLAdWj, {from: accounts[2]});
		const uint256bijz1a = await HTDD_contractm8G8Ai0.allowance.call(addressrCoCFOi, addressLP8dFpm, {from: accounts[3]});

		assert.equal(boolNcDZh9s, true)
		assert.equal(booli8kxqeU, true)
		assert.equal(uint256bijz1a, BigInt("0"))
		assert.equal(uint256vdMXrYF, BigInt("0"))
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractE2diDe = await HTDD_contract.new({from: accounts[4]});
		const uintfdXfiRk = BigInt("1769")
		const addressJ0ufiVi = accounts[5]
		const addressQ7v6JLq = "0x0000000000000000000000000000000000000001"
		const uintD6JdC0F = BigInt("173")
		const addressCLSzEwh = "0x0000000000000000000000000000000000000001"
		const addressG2mGp0 = accounts[2]
		const uintryVLzAZ = BigInt("1836")
		const addresslwCNqM4 = accounts[2]
		const bool3KnUdy = await HTDD_contractE2diDe.transferFrom.call(addressQ7v6JLq, addressJ0ufiVi, uintfdXfiRk, {from: accounts[5]});
		const boolbf35gt = await HTDD_contractE2diDe.transferFrom.call(addressG2mGp0, addressCLSzEwh, uintD6JdC0F, {from: accounts[4]});
		const boolCX9LurJ = await HTDD_contractE2diDe.transfer.call(addresslwCNqM4, uintryVLzAZ, {from: accounts[4]});

		await expect(HTDD_contractE2diDe.transferFrom.call(addressQ7v6JLq, addressJ0ufiVi, uintfdXfiRk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractckZQIk = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintAHUGV2W = BigInt("1339")
		const addressKe5xhTL = accounts[3]
		const uintp8baSw = BigInt("1557")
		const addressdZTGoc = accounts[4]
		const uintPZBln6 = BigInt("930")
		const addressbNyVGi1 = accounts[0]
		const addressTNkSrwn = accounts[2]
		const addressYTnMqA3 = accounts[4]
		const addressusVg8iE = "0x0000000000000000000000000000000000000001"
		const addressg3HWSlS = accounts[5]
		const boolHCTPMTp = await HTDD_contractckZQIk.transfer.call(addressKe5xhTL, uintAHUGV2W, {from: accounts[3]});
		const boolibtjZKx = await HTDD_contractckZQIk.approve.call(addressdZTGoc, uintp8baSw, {from: accounts[5]});
		const boolO5BfJag = await HTDD_contractckZQIk.approve.call(addressbNyVGi1, uintPZBln6, {from: accounts[3]});
		const uint256q8G3rjZ = await HTDD_contractckZQIk.allowance.call(addressYTnMqA3, addressTNkSrwn, {from: accounts[2]});
		const uint256BGa0gCx = await HTDD_contractckZQIk.allowance.call(addressg3HWSlS, addressusVg8iE, {from: accounts[5]});
	});
})