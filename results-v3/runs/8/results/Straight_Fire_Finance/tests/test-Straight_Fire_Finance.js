const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancerwESmIl = await Straight_Fire_Finance.new({from: accounts[1]});
		const uintypaLYJH = BigInt("490")
		const addresswRouG93 = accounts[4]
		const uintiHDGDxQ = BigInt("1268")
		const addressgQxSPhT = accounts[5]
		const uintQV7wUQb = BigInt("466")
		const addressvDnjUS3 = accounts[3]
		const uintrIFezyI = BigInt("1891")
		const addressCXIlNDi = accounts[1]
		const bool3fqiB9 = await Straight_Fire_FinancerwESmIl.approve.call(addresswRouG93, uintypaLYJH, {from: accounts[0]});
		const boolCdloq0w = await Straight_Fire_FinancerwESmIl.transfer.call(addressgQxSPhT, uintiHDGDxQ, {from: accounts[3]});
		const boolqZ2UJD7 = await Straight_Fire_FinancerwESmIl.approve.call(addressvDnjUS3, uintQV7wUQb, {from: accounts[4]});
		const boolSHkATiY = await Straight_Fire_FinancerwESmIl.transfer.call(addressCXIlNDi, uintrIFezyI, {from: accounts[2]});

		assert.equal(bool3fqiB9, true)
		assert.equal(boolCdloq0w, false)
		assert.equal(boolSHkATiY, false)
		assert.equal(boolqZ2UJD7, true)
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancezJartGE = await Straight_Fire_Finance.new({from: accounts[1]});
		const addressWUzAcJz = accounts[5]
		const uintwrhgdKu = BigInt("1788")
		const addresshhw35Yq = accounts[0]
		const addressIc8SlKI = accounts[2]
		const addressIMmFl6G = accounts[4]
		const uintvPMEx9t = BigInt("1032")
		const addresseSUtdfT = accounts[2]
		const uint256Mhd66C7 = await Straight_Fire_FinancezJartGE.balanceOf.call(addressWUzAcJz, {from: accounts[0]});
		const boolrPC5Clm = await Straight_Fire_FinancezJartGE.transfer.call(addresshhw35Yq, uintwrhgdKu, {from: accounts[5]});
		const uint256qbpc9m = await Straight_Fire_FinancezJartGE.balanceOf.call(addressIc8SlKI, {from: accounts[0]});
		const uint256Mcgi4RC = await Straight_Fire_FinancezJartGE.balanceOf.call(addressIMmFl6G, {from: accounts[4]});
		const booleJVx3Vw = await Straight_Fire_FinancezJartGE.approve.call(addresseSUtdfT, uintvPMEx9t, {from: accounts[4]});

		assert.equal(booleJVx3Vw, true)
		assert.equal(boolrPC5Clm, false)
		assert.equal(uint256Mcgi4RC, BigInt("0"))
		assert.equal(uint256Mhd66C7, BigInt("0"))
		assert.equal(uint256qbpc9m, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceYxd6BU = await Straight_Fire_Finance.new({from: accounts[4]});
		const addressXGSkgl8 = accounts[3]
		const addressOmhCIGq = accounts[4]
		const addressHa8hclj = accounts[3]
		const addresszHB9f7o = "0x0000000000000000000000000000000000000001"
		const uintfhbBZQ9 = BigInt("973")
		const addressYHWNr3L = accounts[1]
		const addressniqGoNe = accounts[0]
		const addressDZdJzo1 = accounts[1]
		const uintD8Yo5Y1 = await Straight_Fire_FinanceYxd6BU.allowance.call(addressOmhCIGq, addressXGSkgl8, {from: accounts[0]});
		const uintb2x86UL = await Straight_Fire_FinanceYxd6BU.allowance.call(addresszHB9f7o, addressHa8hclj, {from: accounts[0]});
		const boolWrWPJ2Z = await Straight_Fire_FinanceYxd6BU.transfer.call(addressYHWNr3L, uintfhbBZQ9, {from: accounts[1]});
		const uintGqdWfI = await Straight_Fire_FinanceYxd6BU.allowance.call(addressDZdJzo1, addressniqGoNe, {from: accounts[2]});

		assert.equal(boolWrWPJ2Z, false)
		assert.equal(uintD8Yo5Y1, BigInt("0"))
		assert.equal(uintGqdWfI, BigInt("0"))
		assert.equal(uintb2x86UL, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceN43zBlR = await Straight_Fire_Finance.new({from: accounts[5]});
		const uintnUBmMcz = BigInt("1092")
		const addressa3boRKI = accounts[5]
		const addressSkjfZeq = accounts[0]
		const uint8GUku4 = BigInt("1086")
		const addressAfFUezI = accounts[1]
		const addressBmaUzPh = accounts[2]
		const uintV58v5Ua = BigInt("2046")
		const addressXC2uhF3 = accounts[5]
		const addresslCNjzPl = accounts[4]
		const boolK0L0y7V = await Straight_Fire_FinanceN43zBlR.transferFrom.call(addressSkjfZeq, addressa3boRKI, uintnUBmMcz, {from: accounts[1]});
		const boolTPorr2v = await Straight_Fire_FinanceN43zBlR.transferFrom.call(addressBmaUzPh, addressAfFUezI, uint8GUku4, {from: accounts[2]});
		const boolyZCxa3d = await Straight_Fire_FinanceN43zBlR.transferFrom.call(addresslCNjzPl, addressXC2uhF3, uintV58v5Ua, {from: accounts[5]});

		assert.equal(boolK0L0y7V, false)
		assert.equal(boolTPorr2v, false)
		assert.equal(boolyZCxa3d, false)
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancemdaTsE = await Straight_Fire_Finance.new({from: accounts[4]});
		const addressiyR1iDl = accounts[4]
		const addressqGJ3jQk = accounts[0]
		const uintF8cd7rQ = BigInt("1267")
		const addressQwa3v6Y = accounts[3]
		const addressxWrZhj9 = accounts[5]
		const uint256P6Hd9Ss = await Straight_Fire_FinancemdaTsE.totalSupply.call({from: accounts[0]});
		const uint256oeEqZqF = await Straight_Fire_FinancemdaTsE.balanceOf.call(addressiyR1iDl, {from: accounts[4]});
		const uint256ViP5fnd = await Straight_Fire_FinancemdaTsE.balanceOf.call(addressqGJ3jQk, {from: accounts[3]});
		const uint256PQxb4F2 = await Straight_Fire_FinancemdaTsE.totalSupply.call({from: accounts[1]});
		const boolYyaN45 = await Straight_Fire_FinancemdaTsE.transferFrom.call(addressxWrZhj9, addressQwa3v6Y, uintF8cd7rQ, {from: accounts[3]});

		assert.equal(boolYyaN45, false)
		assert.equal(uint256P6Hd9Ss, BigInt("80000000000000000000000"))
		assert.equal(uint256PQxb4F2, BigInt("80000000000000000000000"))
		assert.equal(uint256ViP5fnd, BigInt("0"))
		assert.equal(uint256oeEqZqF, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancePLZ3YJA = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressQguEH9 = accounts[1]
		const addressdCtLiQH = accounts[2]
		const addressfDh1tnP = accounts[3]
		const uintkEAu7sQ = BigInt("704")
		const addresspIp6JWz = accounts[2]
		const uinteG7mFlp = await Straight_Fire_FinancePLZ3YJA.allowance.call(addressdCtLiQH, addressQguEH9, {from: accounts[2]});
		const uint256oREEwRg = await Straight_Fire_FinancePLZ3YJA.balanceOf.call(addressfDh1tnP, {from: accounts[3]});
		const uint256i0z7Sj6 = await Straight_Fire_FinancePLZ3YJA.totalSupply.call({from: accounts[3]});
		const boolxU4QWTZ = await Straight_Fire_FinancePLZ3YJA.approve.call(addresspIp6JWz, uintkEAu7sQ, {from: accounts[2]});
	});
})