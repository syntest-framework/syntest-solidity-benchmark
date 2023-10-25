const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeWb2MFjI = await Rootkit_finance.new({from: accounts[5]});
		const addressws0kfNV = accounts[4]
		const addresskMfae8e = accounts[3]
		const uintZUY1SnV = BigInt("690")
		const addressgLIKgmG = accounts[4]
		const uintwn9xdDS = await Rootkit_financeWb2MFjI.allowance.call(addresskMfae8e, addressws0kfNV, {from: accounts[0]});
		const uint256Fh6yNf = await Rootkit_financeWb2MFjI.totalSupply.call({from: accounts[3]});
		const boolbC70sLm = await Rootkit_financeWb2MFjI.approve.call(addressgLIKgmG, uintZUY1SnV, {from: accounts[5]});

		assert.equal(boolbC70sLm, true)
		assert.equal(uint256Fh6yNf, BigInt("10000000000000000000000"))
		assert.equal(uintwn9xdDS, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeE5phMna = await Rootkit_finance.new({from: accounts[3]});
		const uintfHMWvQc = BigInt("1610")
		const addressN3GsPo2 = accounts[2]
		const addressC5qHMo9 = accounts[3]
		const addressS47mBqg = accounts[0]
		const boolFjdXXR1 = await Rootkit_financeE5phMna.transferFrom.call(addressC5qHMo9, addressN3GsPo2, uintfHMWvQc, {from: accounts[3]});
		const uint256FJzsONk = await Rootkit_financeE5phMna.totalSupply.call({from: accounts[3]});
		const uint256qguujkY = await Rootkit_financeE5phMna.totalSupply.call({from: accounts[0]});
		const uint256zGbryUa = await Rootkit_financeE5phMna.balanceOf.call(addressS47mBqg, {from: accounts[5]});

		assert.equal(boolFjdXXR1, false)
		assert.equal(uint256FJzsONk, BigInt("10000000000000000000000"))
		assert.equal(uint256qguujkY, BigInt("10000000000000000000000"))
		assert.equal(uint256zGbryUa, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeHhYmMTk = await Rootkit_finance.new({from: accounts[2]});
		const addressuFpHCX = accounts[3]
		const addressQJ1mqI = accounts[3]
		const addressrHOxIKY = accounts[1]
		const addressSyowXQY = accounts[3]
		const uintYp8Dzu2 = BigInt("382")
		const addressfBt10Z7 = accounts[0]
		const uintqGwCASz = await Rootkit_financeHhYmMTk.allowance.call(addressQJ1mqI, addressuFpHCX, {from: accounts[3]});
		const uintus9R8Pb = await Rootkit_financeHhYmMTk.allowance.call(addressSyowXQY, addressrHOxIKY, {from: accounts[4]});
		const boolmL0ZGxv = await Rootkit_financeHhYmMTk.transfer.call(addressfBt10Z7, uintYp8Dzu2, {from: accounts[4]});

		assert.equal(boolmL0ZGxv, false)
		assert.equal(uintqGwCASz, BigInt("0"))
		assert.equal(uintus9R8Pb, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeyCpOP1F = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxp7iuMZ = BigInt("150")
		const addressReLk6CV = accounts[2]
		const uintpRoCfb6 = BigInt("255")
		const addressn9rpMnE = accounts[2]
		const addresssbRhBmT = accounts[4]
		const addressn5hPAm = accounts[2]
		const addressKfIzOBL = accounts[0]
		const addressGPxhauB = accounts[1]
		const boolUQ1nIVC = await Rootkit_financeyCpOP1F.transfer.call(addressReLk6CV, uintxp7iuMZ, {from: accounts[0]});
		const boolTkXLUVq = await Rootkit_financeyCpOP1F.transferFrom.call(addresssbRhBmT, addressn9rpMnE, uintpRoCfb6, {from: accounts[2]});
		const uint256AIo0SR = await Rootkit_financeyCpOP1F.balanceOf.call(addressn5hPAm, {from: accounts[0]});
		const uint256sTq5rSk = await Rootkit_financeyCpOP1F.balanceOf.call(addressKfIzOBL, {from: accounts[3]});
		const uint256T2UvUvU = await Rootkit_financeyCpOP1F.balanceOf.call(addressGPxhauB, {from: accounts[4]});
	});
})