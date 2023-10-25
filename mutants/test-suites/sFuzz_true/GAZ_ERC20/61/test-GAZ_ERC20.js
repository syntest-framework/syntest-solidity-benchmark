const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20b2TBMz3 = await GAZ_ERC20.new({from: accounts[3]});
		const uintgWoOngq = BigInt("1066")
		const addressGSpRmTZ = accounts[1]
		const uinthTG6ysU = BigInt("645")
		const addressqcKtjBF = accounts[2]
		const addressVppxVWa = accounts[3]
		const boolELRc1qA = await GAZ_ERC20b2TBMz3.transfer.call(addressGSpRmTZ, uintgWoOngq, {from: accounts[3]});
		const boolQerMo2D = await GAZ_ERC20b2TBMz3.approve.call(addressqcKtjBF, uinthTG6ysU, {from: "0x0000000000000000000000000000000000000001"});
//		const boolw88bkE0 = await GAZ_ERC20b2TBMz3.approve.call(addressVppxVWa, {from: accounts[4]});

		assert.equal(boolELRc1qA, true)
		assert.equal(boolQerMo2D, true)
		await expect(GAZ_ERC20b2TBMz3.approve.call(addressVppxVWa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20kpigM3V = await GAZ_ERC20.new({from: accounts[2]});
		const uintqQIGzMA = BigInt("1871")
		const addressUDiHMdK = accounts[2]
		const uintyB13t6t = BigInt("1386")
		const addresspVxefDE = accounts[1]
		const addressghMQ8J5 = accounts[4]
		const uintXln1hZK = BigInt("1049")
		const addressgzMdy1r = accounts[1]
		const uinthtYYxAi = BigInt("508")
		const addressoEskWG8 = accounts[4]
		const addressIIbMcod = accounts[2]
		const boolNpYDs2e = await GAZ_ERC20kpigM3V.approve.call(addressUDiHMdK, uintqQIGzMA, {from: accounts[2]});
//		const booloHW5jk = await GAZ_ERC20kpigM3V.transferFrom.call(addressghMQ8J5, addresspVxefDE, uintyB13t6t, {from: accounts[4]});
//		const boolwBRs2aY = await GAZ_ERC20kpigM3V.approve.call(addressgzMdy1r, uintXln1hZK, {from: accounts[3]});
//		const boolIFKOjmq = await GAZ_ERC20kpigM3V.transfer.call(addressoEskWG8, uinthtYYxAi, {from: accounts[1]});
//		const boolA52DyHq = await GAZ_ERC20kpigM3V.approve.call(addressIIbMcod, {from: accounts[0]});

		assert.equal(boolNpYDs2e, true)
		await expect(GAZ_ERC20kpigM3V.transferFrom.call(addressghMQ8J5, addresspVxefDE, uintyB13t6t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Desjzj0 = await GAZ_ERC20.new({from: accounts[0]});
		const uintpejfzj5 = BigInt("177")
		const addressSAJ3HZi = accounts[3]
		const uintp3ZqN6l = BigInt("588")
		const addresss0BjAoT = "0x0000000000000000000000000000000000000001"
		const addresstdExJR2 = "0x0000000000000000000000000000000000000001"
		const uintM3KOrWE = BigInt("467")
		const addressFDLQL9v = accounts[0]
		const uintR91GZbR = BigInt("2041")
		const addressmgyC18E = accounts[3]
		const uintuAxtzMj = BigInt("174")
		const addressuSvgR91 = accounts[3]
		const addresswCa06yV = accounts[4]
		const boolqULDJOQ = await GAZ_ERC20Desjzj0.approve.call(addressSAJ3HZi, uintpejfzj5, {from: accounts[4]});
//		const booltKu2C4J = await GAZ_ERC20Desjzj0.transferFrom.call(addresstdExJR2, addresss0BjAoT, uintp3ZqN6l, {from: accounts[3]});
//		const boolstJs2tk = await GAZ_ERC20Desjzj0.approve.call(addressFDLQL9v, uintM3KOrWE, {from: accounts[1]});
//		const boolRfwY13M = await GAZ_ERC20Desjzj0.transfer.call(addressmgyC18E, uintR91GZbR, {from: accounts[4]});
//		const boolj2FHUAl = await GAZ_ERC20Desjzj0.approve.call(addressuSvgR91, uintuAxtzMj, {from: accounts[0]});
//		const boolS3Hkq9 = await GAZ_ERC20Desjzj0.approve.call(addresswCa06yV, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolqULDJOQ, true)
		await expect(GAZ_ERC20Desjzj0.transferFrom.call(addresstdExJR2, addresss0BjAoT, uintp3ZqN6l, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Pfl4toW = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxADi97 = BigInt("942")
		const addressHI98VCV = accounts[0]
		const addressUSsaEWI = accounts[2]
		const bool0lLymW = await GAZ_ERC20Pfl4toW.approve.call(addressHI98VCV, uintxADi97, {from: accounts[0]});
		const booldcZW39t = await GAZ_ERC20Pfl4toW.approve.call(addressUSsaEWI, {from: accounts[0]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20xWwe2XS = await GAZ_ERC20.new({from: accounts[2]});
		const addresscz8gIrn = accounts[2]
		const uintftFvVbQ = BigInt("13")
		const addressYYo210i = accounts[4]
//		const boolb9f0xib = await GAZ_ERC20xWwe2XS.approve.call(addresscz8gIrn, {from: accounts[2]});
//		const boolEC2KXCW = await GAZ_ERC20xWwe2XS.transfer.call(addressYYo210i, uintftFvVbQ, {from: accounts[0]});

		await expect(GAZ_ERC20xWwe2XS.approve.call(addresscz8gIrn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20xWwe2XS = await GAZ_ERC20.new({from: accounts[2]});
		const uintVjf1JAt = BigInt("161")
		const addresssoRCjW = accounts[3]
		const addresszQEQk7s = accounts[5]
		const uintJ9XxarI = BigInt("1113")
		const addresskYtu0gy = accounts[1]
		const addressLdFeMrk = accounts[0]
		const booluUOpOc4 = await GAZ_ERC20xWwe2XS.approve.call(addresssoRCjW, uintVjf1JAt, {from: "0x0000000000000000000000000000000000000001"});
//		const boolOAj8xpf = await GAZ_ERC20xWwe2XS.approve.call(addresszQEQk7s, {from: accounts[3]});
//		const boolI2YPfaU = await GAZ_ERC20xWwe2XS.transferFrom.call(addressLdFeMrk, addresskYtu0gy, uintJ9XxarI, {from: accounts[3]});

		assert.equal(booluUOpOc4, true)
		await expect(GAZ_ERC20xWwe2XS.approve.call(addresszQEQk7s, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20xWwe2XS = await GAZ_ERC20.new({from: accounts[2]});
		const address8UutIf = accounts[4]
		const uintovAIxlD = BigInt("749")
		const addressFCCwqzI = accounts[5]
		const uintQbGA6RO = BigInt("1098")
		const addressWjCZBYQ = accounts[2]
		const addressr9zWui = accounts[0]
//		const boolKg3hffR = await GAZ_ERC20xWwe2XS.approve.call(address8UutIf, {from: "0x0000000000000000000000000000000000000001"});
//		const boolmH8YIId = await GAZ_ERC20xWwe2XS.transfer.call(addressFCCwqzI, uintovAIxlD, {from: accounts[1]});
//		const boolI2YPfaU = await GAZ_ERC20xWwe2XS.transferFrom.call(addressr9zWui, addressWjCZBYQ, uintQbGA6RO, {from: accounts[3]});

		await expect(GAZ_ERC20xWwe2XS.approve.call(address8UutIf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20xWwe2XS = await GAZ_ERC20.new({from: accounts[2]});
		const addressXL1TLm0 = accounts[5]
		const uintAOktL43 = BigInt("1098")
		const addresskiKyyGK = accounts[1]
		const addressSxVqDM = accounts[0]
//		const boolqO7IfKL = await GAZ_ERC20xWwe2XS.approve.call(addressXL1TLm0, {from: accounts[1]});
//		const boolI2YPfaU = await GAZ_ERC20xWwe2XS.transferFrom.call(addressSxVqDM, addresskiKyyGK, uintAOktL43, {from: accounts[3]});

		await expect(GAZ_ERC20xWwe2XS.approve.call(addressXL1TLm0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20xWwe2XS = await GAZ_ERC20.new({from: accounts[2]});
		const addressrKsho23 = accounts[1]
		const uinthcc4nb7 = BigInt("375")
		const addresswwiEzj7 = accounts[2]
		const uintMzIiZB = BigInt("1098")
		const addresstKSeSw = accounts[2]
		const addressJCl7T5 = accounts[0]
//		const boollQXUK7U = await GAZ_ERC20xWwe2XS.approve.call(addressrKsho23, {from: accounts[0]});
//		const boolMbLfnSv = await GAZ_ERC20xWwe2XS.approve.call(addresswwiEzj7, uinthcc4nb7, {from: accounts[2]});
//		const boolI2YPfaU = await GAZ_ERC20xWwe2XS.transferFrom.call(addressJCl7T5, addresstKSeSw, uintMzIiZB, {from: accounts[3]});

		await expect(GAZ_ERC20xWwe2XS.approve.call(addressrKsho23, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20xWwe2XS = await GAZ_ERC20.new({from: accounts[2]});
		const addressSBJIDps = accounts[0]
		const uintsvhOTOO = BigInt("1098")
		const addressL101MZc = accounts[1]
		const addressPDJCaMr = accounts[0]
//		const boolbrN4XAO = await GAZ_ERC20xWwe2XS.approve.call(addressSBJIDps, {from: accounts[5]});
//		const boolI2YPfaU = await GAZ_ERC20xWwe2XS.transferFrom.call(addressPDJCaMr, addressL101MZc, uintsvhOTOO, {from: accounts[3]});

		await expect(GAZ_ERC20xWwe2XS.approve.call(addressSBJIDps, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})