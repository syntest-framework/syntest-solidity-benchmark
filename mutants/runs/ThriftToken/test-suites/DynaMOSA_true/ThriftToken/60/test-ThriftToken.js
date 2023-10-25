const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokens0yqqqi = await ThriftToken.new({from: accounts[4]});
		const uintniHS5SG = BigInt("37")
		const addressKSZnaJW = accounts[4]
		const addressimtFTjv = accounts[2]
		const addressLujjQhV = accounts[0]
		const uintwDk9bqe = BigInt("1778")
		const addressFoZk1iD = "0x0000000000000000000000000000000000000001"
		const uintGRAGva = BigInt("943")
		const addressR1GW1eZ = accounts[4]
		const boolH1FPkwg = await ThriftTokens0yqqqi.approve.call(addressKSZnaJW, uintniHS5SG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vwY0FOK = await ThriftTokens0yqqqi.allowance.call(addressLujjQhV, addressimtFTjv, {from: accounts[1]});
		const boolR0Uh2tI = await ThriftTokens0yqqqi.transfer.call(addressFoZk1iD, uintwDk9bqe, {from: accounts[0]});
		const boolFzqiSo9 = await ThriftTokens0yqqqi.transfer.call(addressR1GW1eZ, uintGRAGva, {from: accounts[0]});

		assert.equal(boolH1FPkwg, true)
		assert.equal(uint256vwY0FOK, BigInt("0"))
		await expect(ThriftTokens0yqqqi.transfer.call(addressFoZk1iD, uintwDk9bqe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenXV9GnKD = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHDEsFrI = BigInt("46")
		const addressZ9oosbK = accounts[0]
		const addressZBMgZeV = accounts[2]
		const addressOyT7FPk = accounts[0]
		const uintmBQlB6K = BigInt("176")
		const addressHaHw86W = accounts[4]
		const uintVuFOPDr = BigInt("677")
		const addressRc3103H = accounts[3]
		const uintKP5qvbc = BigInt("1865")
		const addresscm3Zou0 = accounts[0]
		const boolpT5YNbv = await ThriftTokenXV9GnKD.transferFrom.call(addressZBMgZeV, addressZ9oosbK, uintHDEsFrI, {from: accounts[0]});
		const uint256SGfNnk = await ThriftTokenXV9GnKD.balanceOf.call(addressOyT7FPk, {from: accounts[5]});
		const boolDRn7VXg = await ThriftTokenXV9GnKD.decreaseApproval.call(addressHaHw86W, uintmBQlB6K, {from: accounts[2]});
		const boolXtZoR4q = await ThriftTokenXV9GnKD.decreaseApproval.call(addressRc3103H, uintVuFOPDr, {from: accounts[3]});
		const boolVxUi5n = await ThriftTokenXV9GnKD.increaseApproval.call(addresscm3Zou0, uintKP5qvbc, {from: accounts[1]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenNWjqxP6 = await ThriftToken.new({from: accounts[0]});
		const uintMSTUE7q = BigInt("33")
		const addressOtSUKW = "0x0000000000000000000000000000000000000001"
		const addresslPayMO = accounts[3]
		const uintD2UGCKb = BigInt("304")
		const addressp7cfF6X = accounts[2]
		const addresse6gcEyj = accounts[2]
		const addresscFag91f = accounts[0]
		const boolunVd3Ga = await ThriftTokenNWjqxP6.transferFrom.call(addresslPayMO, addressOtSUKW, uintMSTUE7q, {from: accounts[2]});
		const boolTYNBlYw = await ThriftTokenNWjqxP6.transferFrom.call(addresse6gcEyj, addressp7cfF6X, uintD2UGCKb, {from: accounts[0]});
		const addressIx84s1a = await ThriftTokenNWjqxP6.transferOwnership.call(addresscFag91f, {from: accounts[3]});

		await expect(ThriftTokenNWjqxP6.transferFrom.call(addresslPayMO, addressOtSUKW, uintMSTUE7q, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenJ0Ds5lZ = await ThriftToken.new({from: accounts[4]});
		const uintmWZepGq = BigInt("1263")
		const addressbJATcAc = accounts[3]
		const uintFVqSWt8 = BigInt("616")
		const addressKEy6MnL = accounts[2]
		const uinthyh912r = BigInt("628")
		const addressBngtwba = accounts[4]
		const uintFT5h11J = BigInt("1930")
		const addressbYzn1o9 = accounts[0]
		const addressgbOVjjs = "0x0000000000000000000000000000000000000001"
		const addressB2bsE4b = accounts[1]
		const uintFeuIp7n = BigInt("1755")
		const addressvPL35a2 = accounts[4]
		const boolg3NIlV3 = await ThriftTokenJ0Ds5lZ.increaseApproval.call(addressbJATcAc, uintmWZepGq, {from: accounts[2]});
		const boolD6a31iS = await ThriftTokenJ0Ds5lZ.decreaseApproval.call(addressKEy6MnL, uintFVqSWt8, {from: accounts[3]});
		const boolflxHrUZ = await ThriftTokenJ0Ds5lZ.increaseApproval.call(addressBngtwba, uinthyh912r, {from: accounts[3]});
		const boolSBaMDmg = await ThriftTokenJ0Ds5lZ.increaseApproval.call(addressbYzn1o9, uintFT5h11J, {from: accounts[4]});
		const uint256aADvDk = await ThriftTokenJ0Ds5lZ.allowance.call(addressB2bsE4b, addressgbOVjjs, {from: accounts[0]});
		const boolkRzsdgr = await ThriftTokenJ0Ds5lZ.increaseApproval.call(addressvPL35a2, uintFeuIp7n, {from: accounts[0]});

		assert.equal(boolD6a31iS, true)
		assert.equal(boolSBaMDmg, true)
		assert.equal(boolflxHrUZ, true)
		assert.equal(boolg3NIlV3, true)
		assert.equal(boolkRzsdgr, true)
		assert.equal(uint256aADvDk, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenaSH5UV2 = await ThriftToken.new({from: accounts[3]});
		const uintiuw8YcX = BigInt("999")
		const addressm7D3kt4 = "0x0000000000000000000000000000000000000001"
		const addressQU9fyFt = accounts[1]
		const addresslerfn6b = accounts[2]
		const addressHCST95 = accounts[2]
		const uinth9wvOz2 = BigInt("1473")
		const address0GzJQc = accounts[2]
		const uintxTurlCy = BigInt("1097")
		const addressaUAghMm = accounts[5]
		const addresshOBVEBK = accounts[1]
		const addressXvZQ3vB = accounts[1]
		const addressvlUPTho = accounts[3]
		const boolXt3TTD7 = await ThriftTokenaSH5UV2.increaseApproval.call(addressm7D3kt4, uintiuw8YcX, {from: accounts[2]});
		const uint256fogOgVe = await ThriftTokenaSH5UV2.allowance.call(addresslerfn6b, addressQU9fyFt, {from: accounts[4]});
		const addressP03SjoE = await ThriftTokenaSH5UV2.transferOwnership.call(addressHCST95, {from: accounts[4]});
		const boolbxcDoi = await ThriftTokenaSH5UV2.increaseApproval.call(address0GzJQc, uinth9wvOz2, {from: accounts[5]});
		const boolgXmuvN5 = await ThriftTokenaSH5UV2.transferFrom.call(addresshOBVEBK, addressaUAghMm, uintxTurlCy, {from: accounts[0]});
		const uint256vLR6knw = await ThriftTokenaSH5UV2.allowance.call(addressvlUPTho, addressXvZQ3vB, {from: accounts[2]});

		assert.equal(boolXt3TTD7, true)
		assert.equal(uint256fogOgVe, BigInt("0"))
		await expect(ThriftTokenaSH5UV2.transferOwnership.call(addressHCST95, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokeng9EE0hD = await ThriftToken.new({from: accounts[0]});
		const addressaf6xA1m = accounts[0]
		const addressNA7EYau = accounts[2]
		const uintnuuFJv7 = BigInt("1591")
		const addressHLqvsyq = accounts[3]
		const addresseYc2XM9 = await ThriftTokeng9EE0hD.transferOwnership.call(addressaf6xA1m, {from: accounts[0]});
		const addressQ9FfMM6 = await ThriftTokeng9EE0hD.transferOwnership.call(addressNA7EYau, {from: accounts[0]});
		const boolFQznakx = await ThriftTokeng9EE0hD.approve.call(addressHLqvsyq, uintnuuFJv7, {from: accounts[2]});

		await expect(ThriftTokeng9EE0hD.transferOwnership.call(addressaf6xA1m, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokeng9EE0hD = await ThriftToken.new({from: accounts[0]});
		const addressg0XTjtw = accounts[3]
		const uintYaCWARQ = BigInt("912")
		const addressZzOOsNL = accounts[2]
		const addressXwcBD7l = accounts[1]
		const uintUQXet5W = BigInt("1591")
		const addresssBYCdu = accounts[3]
		const addressMIRVGoF = await ThriftTokeng9EE0hD.transferOwnership.call(addressg0XTjtw, {from: accounts[0]});
		const bool37NA0z = await ThriftTokeng9EE0hD.decreaseApproval.call(addressZzOOsNL, uintYaCWARQ, {from: accounts[3]});
		const addresseYc2XM9 = await ThriftTokeng9EE0hD.transferOwnership.call(addressXwcBD7l, {from: accounts[0]});
		const boolFQznakx = await ThriftTokeng9EE0hD.approve.call(addresssBYCdu, uintUQXet5W, {from: accounts[2]});

		assert.equal(bool37NA0z, true)
		assert.equal(boolFQznakx, true)
	});
})