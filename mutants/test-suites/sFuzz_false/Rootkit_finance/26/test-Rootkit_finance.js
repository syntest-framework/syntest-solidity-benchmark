const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeVL0t64y = await Rootkit_finance.new({from: accounts[4]});
		const address4t6Ih6 = accounts[5]
		const uintJ5zgCnh = BigInt("1932")
		const addresszzMh9V0 = accounts[3]
		const addressy5Z2zTq = accounts[0]
		const addressDC6veo8 = accounts[3]
		const addressdNrDzRg = accounts[3]
		const uint256OOSlRDT = await Rootkit_financeVL0t64y.balanceOf.call(address4t6Ih6, {from: accounts[5]});
		const boolzJg3bEk = await Rootkit_financeVL0t64y.approve.call(addresszzMh9V0, uintJ5zgCnh, {from: accounts[4]});
		const uintmVnhmEi = await Rootkit_financeVL0t64y.allowance.call(addressDC6veo8, addressy5Z2zTq, {from: accounts[2]});
		const uint256eABdfBe = await Rootkit_financeVL0t64y.balanceOf.call(addressdNrDzRg, {from: accounts[3]});

		assert.equal(boolzJg3bEk, true)
		assert.equal(uint256OOSlRDT, BigInt("0"))
		assert.equal(uint256eABdfBe, BigInt("0"))
		assert.equal(uintmVnhmEi, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeWIOFz9s = await Rootkit_finance.new({from: accounts[0]});
		const uintAKW3rF5 = BigInt("269")
		const addressUY28cc = "0x0000000000000000000000000000000000000001"
		const uintwAYkPFX = BigInt("1924")
		const addressXFeMF63 = accounts[2]
		const uintm1KdTqE = BigInt("2011")
		const addressxaAKO5 = accounts[1]
		const addressE9fOhj = "0x0000000000000000000000000000000000000001"
		const boolDPl7eg = await Rootkit_financeWIOFz9s.transfer.call(addressUY28cc, uintAKW3rF5, {from: accounts[3]});
		const boolu90Y7UI = await Rootkit_financeWIOFz9s.transfer.call(addressXFeMF63, uintwAYkPFX, {from: accounts[4]});
		const booly9bYiCW = await Rootkit_financeWIOFz9s.transfer.call(addressxaAKO5, uintm1KdTqE, {from: accounts[1]});
		const uint256qRb6ll = await Rootkit_financeWIOFz9s.balanceOf.call(addressE9fOhj, {from: accounts[0]});

		assert.equal(boolDPl7eg, false)
		assert.equal(boolu90Y7UI, false)
		assert.equal(booly9bYiCW, false)
		assert.equal(uint256qRb6ll, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financegnnqxqA = await Rootkit_finance.new({from: accounts[1]});
		const uinthtl9vN = BigInt("1679")
		const addressRPCAUw = accounts[2]
		const uintpAWU79q = BigInt("1384")
		const addresstUdmxNT = accounts[2]
		const addressALI4xRR = accounts[4]
		const booluRVEZGl = await Rootkit_financegnnqxqA.transfer.call(addressRPCAUw, uinthtl9vN, {from: accounts[2]});
		const boolYb8oNZ = await Rootkit_financegnnqxqA.transferFrom.call(addressALI4xRR, addresstUdmxNT, uintpAWU79q, {from: accounts[5]});

		assert.equal(boolYb8oNZ, false)
		assert.equal(booluRVEZGl, false)
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financey54SAhi = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintW5wZeLT = BigInt("727")
		const addressCIIpGOR = accounts[1]
		const addressZyoTVTi = "0x0000000000000000000000000000000000000001"
		const addressvY5CL5Y = accounts[2]
		const addressVnviIqN = accounts[0]
		const address8yb7es = accounts[1]
		const addressd943ceE = accounts[3]
		const boolpEnBZk = await Rootkit_financey54SAhi.approve.call(addressCIIpGOR, uintW5wZeLT, {from: accounts[2]});
		const uintb8z2Vme = await Rootkit_financey54SAhi.allowance.call(addressvY5CL5Y, addressZyoTVTi, {from: accounts[4]});
		const uint256KczX17s = await Rootkit_financey54SAhi.balanceOf.call(addressVnviIqN, {from: accounts[0]});
		const uintNaYTSrc = await Rootkit_financey54SAhi.allowance.call(addressd943ceE, address8yb7es, {from: accounts[4]});
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeHHFyAxX = await Rootkit_finance.new({from: accounts[1]});
		const addressXZVNKbc = accounts[4]
		const uintV6uU937 = BigInt("1076")
		const addresshNKZ2Ne = accounts[1]
		const uinty59d1de = BigInt("1601")
		const addressSFUphO = accounts[4]
		const addressgAPXsTJ = "0x0000000000000000000000000000000000000001"
		const uint256uI2vF6m = await Rootkit_financeHHFyAxX.balanceOf.call(addressXZVNKbc, {from: accounts[3]});
		const boolKGPD1Ai = await Rootkit_financeHHFyAxX.transfer.call(addresshNKZ2Ne, uintV6uU937, {from: accounts[4]});
		const uint256OVe7wR2 = await Rootkit_financeHHFyAxX.totalSupply.call({from: accounts[3]});
		const boolRNsjAJz = await Rootkit_financeHHFyAxX.transferFrom.call(addressgAPXsTJ, addressSFUphO, uinty59d1de, {from: accounts[0]});

		assert.equal(boolKGPD1Ai, false)
		assert.equal(boolRNsjAJz, false)
		assert.equal(uint256OVe7wR2, BigInt("10000000000000000000000"))
		assert.equal(uint256uI2vF6m, BigInt("0"))
	});
})