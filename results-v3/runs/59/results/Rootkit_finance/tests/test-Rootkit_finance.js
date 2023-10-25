const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financePErXN3Q = await Rootkit_finance.new({from: accounts[5]});
		const addresss6WUlRw = "0x0000000000000000000000000000000000000001"
		const addressGNYgpWr = accounts[1]
		const uintAAgGq15 = BigInt("1564")
		const addressypbtvjX = accounts[4]
		const uintJsS7GAz = BigInt("287")
		const addressRNibTt = accounts[4]
		const uint256KghyCN = await Rootkit_financePErXN3Q.totalSupply.call({from: accounts[3]});
		const uintqccRUfm = await Rootkit_financePErXN3Q.allowance.call(addressGNYgpWr, addresss6WUlRw, {from: accounts[2]});
		const uint256SBEswmZ = await Rootkit_financePErXN3Q.totalSupply.call({from: accounts[2]});
		const boollfjbePE = await Rootkit_financePErXN3Q.approve.call(addressypbtvjX, uintAAgGq15, {from: accounts[0]});
		const boolHDOPVQ5 = await Rootkit_financePErXN3Q.transfer.call(addressRNibTt, uintJsS7GAz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolHDOPVQ5, false)
		assert.equal(boollfjbePE, true)
		assert.equal(uint256KghyCN, BigInt("10000000000000000000000"))
		assert.equal(uint256SBEswmZ, BigInt("10000000000000000000000"))
		assert.equal(uintqccRUfm, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financegCc6omQ = await Rootkit_finance.new({from: accounts[3]});
		const uintqPSDV4v = BigInt("926")
		const address6urmTB = accounts[1]
		const addresstsFmpDx = "0x0000000000000000000000000000000000000001"
		const uintXy1vRdW = BigInt("1271")
		const addressFUzSU1U = accounts[2]
		const uintJmhYie7 = BigInt("1618")
		const addressQoDB2HO = "0x0000000000000000000000000000000000000001"
		const addressjIZdExi = accounts[2]
		const addressp0UxWV1 = accounts[1]
		const addressh7v3dk8 = accounts[2]
		const boolOowvE1U = await Rootkit_financegCc6omQ.approve.call(address6urmTB, uintqPSDV4v, {from: accounts[0]});
		const uint256mRc4xqh = await Rootkit_financegCc6omQ.balanceOf.call(addresstsFmpDx, {from: accounts[5]});
		const boolRc6iUHJ = await Rootkit_financegCc6omQ.transfer.call(addressFUzSU1U, uintXy1vRdW, {from: accounts[0]});
		const boolRcTV9Fy = await Rootkit_financegCc6omQ.transferFrom.call(addressjIZdExi, addressQoDB2HO, uintJmhYie7, {from: accounts[2]});
		const uint256guIpkEV = await Rootkit_financegCc6omQ.balanceOf.call(addressp0UxWV1, {from: accounts[1]});
		const uint256BTczISS = await Rootkit_financegCc6omQ.balanceOf.call(addressh7v3dk8, {from: accounts[2]});

		assert.equal(boolOowvE1U, true)
		assert.equal(boolRc6iUHJ, false)
		assert.equal(boolRcTV9Fy, false)
		assert.equal(uint256BTczISS, BigInt("0"))
		assert.equal(uint256guIpkEV, BigInt("0"))
		assert.equal(uint256mRc4xqh, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeu9HbuP9 = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressDlzgwOF = accounts[2]
		const addressutfDE83 = "0x0000000000000000000000000000000000000001"
		const addressPO4qKLV = accounts[5]
		const uintDZlJPkx = BigInt("1573")
		const addresspAbAeaM = accounts[4]
		const addresshTpbk4A = accounts[4]
		const uint256xT8tXjR = await Rootkit_financeu9HbuP9.balanceOf.call(addressDlzgwOF, {from: accounts[4]});
		const uintDg3axKD = await Rootkit_financeu9HbuP9.allowance.call(addressPO4qKLV, addressutfDE83, {from: accounts[3]});
		const boolhqfpeVG = await Rootkit_financeu9HbuP9.transferFrom.call(addresshTpbk4A, addresspAbAeaM, uintDZlJPkx, {from: accounts[0]});
	});
})