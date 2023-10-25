const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeefyaZXv = await Rootkit_finance.new({from: accounts[4]});
		const uintDzWClTD = BigInt("1088")
		const addressWHMVUOO = accounts[3]
		const addressJATun6F = "0x0000000000000000000000000000000000000001"
		const addresss2WDvT5 = accounts[5]
		const boolZLCKkR1 = await Rootkit_financeefyaZXv.transferFrom.call(addressJATun6F, addressWHMVUOO, uintDzWClTD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256eEd9441 = await Rootkit_financeefyaZXv.balanceOf.call(addresss2WDvT5, {from: accounts[1]});

		assert.equal(boolZLCKkR1, false)
		assert.equal(uint256eEd9441, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeIyLjOvF = await Rootkit_finance.new({from: accounts[3]});
		const uintKLby6y = BigInt("453")
		const addressNUmRRZB = accounts[1]
		const uintgkPh1AL = BigInt("478")
		const addresskeFsg2 = accounts[4]
		const boolRpWU1ou = await Rootkit_financeIyLjOvF.approve.call(addressNUmRRZB, uintKLby6y, {from: accounts[2]});
		const boolAtQyXcF = await Rootkit_financeIyLjOvF.transfer.call(addresskeFsg2, uintgkPh1AL, {from: accounts[0]});

		assert.equal(boolAtQyXcF, false)
		assert.equal(boolRpWU1ou, true)
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeSEAi90Z = await Rootkit_finance.new({from: accounts[3]});
		const uintfGwehSg = BigInt("998")
		const addressygQpCZ7 = accounts[4]
		const addressM2kP8P = accounts[3]
		const uintoJWlIH8 = BigInt("1091")
		const addressA4Lwa2O = accounts[2]
		const uintzFVNocq = BigInt("1861")
		const addressXRYiFKK = accounts[4]
		const addressdxfYC0Z = accounts[3]
		const addressqcjnFKa = accounts[0]
		const addressXn8qVV4 = accounts[4]
		const addressej6QESy = accounts[1]
		const addressupAo1k = accounts[1]
		const boolnEesC1y = await Rootkit_financeSEAi90Z.transferFrom.call(addressM2kP8P, addressygQpCZ7, uintfGwehSg, {from: accounts[3]});
		const boolc6nmhcd = await Rootkit_financeSEAi90Z.transfer.call(addressA4Lwa2O, uintoJWlIH8, {from: accounts[1]});
		const boolZezM18 = await Rootkit_financeSEAi90Z.transferFrom.call(addressdxfYC0Z, addressXRYiFKK, uintzFVNocq, {from: accounts[1]});
		const uintwxgbSt6 = await Rootkit_financeSEAi90Z.allowance.call(addressXn8qVV4, addressqcjnFKa, {from: accounts[2]});
		const uintp2kJUXq = await Rootkit_financeSEAi90Z.allowance.call(addressupAo1k, addressej6QESy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolZezM18, false)
		assert.equal(boolc6nmhcd, false)
		assert.equal(boolnEesC1y, false)
		assert.equal(uintp2kJUXq, BigInt("0"))
		assert.equal(uintwxgbSt6, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeLLYveyb = await Rootkit_finance.new({from: accounts[4]});
		const uintNkLwhRL = BigInt("660")
		const addresslSJWiaM = accounts[2]
		const uinthZKWlhB = BigInt("1811")
		const addressQHegtAJ = accounts[0]
		const addresshhkea9i = accounts[4]
		const addressHzA9zBy = accounts[3]
		const bool6x9tSj = await Rootkit_financeLLYveyb.transfer.call(addresslSJWiaM, uintNkLwhRL, {from: accounts[3]});
		const bool5rzCQR = await Rootkit_financeLLYveyb.transfer.call(addressQHegtAJ, uinthZKWlhB, {from: accounts[1]});
		const uint2563YZy5a = await Rootkit_financeLLYveyb.totalSupply.call({from: accounts[3]});
		const uintulPOQ7 = await Rootkit_financeLLYveyb.allowance.call(addressHzA9zBy, addresshhkea9i, {from: accounts[1]});

		assert.equal(bool5rzCQR, false)
		assert.equal(bool6x9tSj, false)
		assert.equal(uint2563YZy5a, BigInt("10000000000000000000000"))
		assert.equal(uintulPOQ7, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeLTecnhW = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFURHQCM = BigInt("90")
		const addressT5J3Yf6 = accounts[3]
		const addressDXcLQOs = accounts[3]
		const uintH87IhG9 = BigInt("1473")
		const addressEXPvYV = accounts[5]
		const addresswDTezir = accounts[3]
		const booliDXy4m = await Rootkit_financeLTecnhW.transfer.call(addressT5J3Yf6, uintFURHQCM, {from: accounts[2]});
		const uint256soFxZZ = await Rootkit_financeLTecnhW.balanceOf.call(addressDXcLQOs, {from: accounts[1]});
		const boolghhrMk8 = await Rootkit_financeLTecnhW.transferFrom.call(addresswDTezir, addressEXPvYV, uintH87IhG9, {from: accounts[2]});
	});
})