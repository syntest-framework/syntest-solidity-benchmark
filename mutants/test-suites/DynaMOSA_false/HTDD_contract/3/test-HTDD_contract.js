const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractRQ8KvNR = await HTDD_contract.new({from: accounts[3]});
		const uintXsRqKkE = BigInt("1763")
		const addressuOdYllD = accounts[5]
		const uintrjyGYpW = BigInt("156")
		const addressQmdR0Iu = accounts[3]
		const addressGa3vXKO = "0x0000000000000000000000000000000000000001"
		const addressXykOJP = accounts[0]
		const addressn858Ghw = accounts[3]
		const uintTrOh7mp = BigInt("401")
		const addresss1zwkUS = accounts[4]
		const addressVD1gYqF = accounts[1]
//		const boolpn2ls45 = await HTDD_contractRQ8KvNR.transfer.call(addressuOdYllD, uintXsRqKkE, {from: accounts[0]});
//		const boolNbWWBa = await HTDD_contractRQ8KvNR.transferFrom.call(addressGa3vXKO, addressQmdR0Iu, uintrjyGYpW, {from: accounts[1]});
//		const uint256Jd5iZox = await HTDD_contractRQ8KvNR.allowance.call(addressn858Ghw, addressXykOJP, {from: accounts[0]});
//		const boolnNm3EWB = await HTDD_contractRQ8KvNR.transferFrom.call(addressVD1gYqF, addresss1zwkUS, uintTrOh7mp, {from: accounts[0]});

		await expect(HTDD_contractRQ8KvNR.transfer.call(addressuOdYllD, uintXsRqKkE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contracts7yCb7E = await HTDD_contract.new({from: accounts[1]});
		const uintGMJMNP = BigInt("222")
		const addressccdJ0w4 = accounts[0]
		const addressI6tiYVr = accounts[4]
		const uintOsciuEw = BigInt("759")
		const addressP0z0wVu = accounts[3]
		const uintRKhrRNt = BigInt("1841")
		const addressOi7UUaP = accounts[4]
		const addressMQabF7g = accounts[1]
//		const boolyAVyws = await HTDD_contracts7yCb7E.transferFrom.call(addressI6tiYVr, addressccdJ0w4, uintGMJMNP, {from: accounts[4]});
//		const boolibRvjBz = await HTDD_contracts7yCb7E.approve.call(addressP0z0wVu, uintOsciuEw, {from: accounts[3]});
//		const boolS7fCFRE = await HTDD_contracts7yCb7E.transferFrom.call(addressMQabF7g, addressOi7UUaP, uintRKhrRNt, {from: accounts[4]});

		await expect(HTDD_contracts7yCb7E.transferFrom.call(addressI6tiYVr, addressccdJ0w4, uintGMJMNP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractRyhh5je = await HTDD_contract.new({from: accounts[4]});
		const uintKIDpvej = BigInt("1077")
		const addressfF2mkGC = accounts[1]
		const addresso5usT56 = accounts[5]
		const addresskQIVk6 = accounts[3]
		const uinttNIUjgz = BigInt("707")
		const addressRawChAV = accounts[5]
		const uintmV6OAyO = BigInt("1020")
		const addressfY8yrUH = accounts[1]
		const boolVcdNTot = await HTDD_contractRyhh5je.approve.call(addressfF2mkGC, uintKIDpvej, {from: accounts[2]});
		const uint256WlCSVep = await HTDD_contractRyhh5je.allowance.call(addresskQIVk6, addresso5usT56, {from: accounts[1]});
//		const boolhGXfSAR = await HTDD_contractRyhh5je.transfer.call(addressRawChAV, uinttNIUjgz, {from: "0x0000000000000000000000000000000000000001"});
//		const boolyaA24zr = await HTDD_contractRyhh5je.approve.call(addressfY8yrUH, uintmV6OAyO, {from: accounts[2]});

		assert.equal(boolVcdNTot, true)
		assert.equal(uint256WlCSVep, BigInt("0"))
		await expect(HTDD_contractRyhh5je.transfer.call(addressRawChAV, uinttNIUjgz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractBiZ4eMd = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const addressDD3EPIV = accounts[4]
		const addressvsQgq3m = accounts[2]
		const uintOO4Bhsn = BigInt("1664")
		const addresshVdkwg2 = accounts[0]
		const uintOwuvDZZ = BigInt("641")
		const addresspOuR1LR = accounts[4]
		const uintDy6rjdj = BigInt("1784")
		const addressTIqqkYi = accounts[4]
		const addressJTNmPX = "0x0000000000000000000000000000000000000001"
		const uint256qNYpt8V = await HTDD_contractBiZ4eMd.allowance.call(addressvsQgq3m, addressDD3EPIV, {from: accounts[4]});
		const boolTDIC43 = await HTDD_contractBiZ4eMd.transfer.call(addresshVdkwg2, uintOO4Bhsn, {from: accounts[5]});
		const boolJnXqJlZ = await HTDD_contractBiZ4eMd.approve.call(addresspOuR1LR, uintOwuvDZZ, {from: accounts[2]});
		const boolrhK4L3t = await HTDD_contractBiZ4eMd.transferFrom.call(addressJTNmPX, addressTIqqkYi, uintDy6rjdj, {from: accounts[3]});
	});
})