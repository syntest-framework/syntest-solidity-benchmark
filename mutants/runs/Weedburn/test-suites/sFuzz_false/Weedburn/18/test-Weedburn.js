const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringSGZAF73 = "YOVT7Ol7LupYt77R3iPMA5reGrjqEcaliJznXHo7yz1q"
		const stringqM1dFk5 = "an4Vg7phCgbR9WAqE7OR1sRT8bq5g7dn1VVpLljSNZQ3pORevv2V2Hla"
		const uintPW93JgF = BigInt("34")
		const WeedburnE1R2Og3 = await Weedburn.new(stringSGZAF73, stringqM1dFk5, uintPW93JgF, {from: "0x0000000000000000000000000000000000000001"});
		const uintERZX3CB = BigInt("1948")
		const addressCEmPLc8 = accounts[0]
		await WeedburnE1R2Og3.disableLimitMode.call({from: accounts[4]});
		await WeedburnE1R2Og3.enableLimitMode.call({from: accounts[1]});
		const boolBbbhokL = await WeedburnE1R2Og3.decreaseAllowance.call(addressCEmPLc8, uintERZX3CB, {from: accounts[4]});
		await WeedburnE1R2Og3.enableDevMode.call({from: accounts[3]});
		const uint256AnRitTW = await WeedburnE1R2Og3.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Weedburn', async () => {
		const WeedburnyBGkbEH = await Weedburn.new({from: accounts[1]});
		const uintl7LGKaj = BigInt("99")
		const address8mh1Ho = accounts[1]
		const addressvtCefKZ = accounts[2]
		const uinthJg6Fq7 = BigInt("368")
		const addressWE90Bzt = accounts[4]
		const addressduT5qB3 = accounts[0]
		const boolz1gmg5J = await WeedburnyBGkbEH.transferFrom.call(addressvtCefKZ, address8mh1Ho, uintl7LGKaj, {from: accounts[1]});
		const boolxU3Csu = await WeedburnyBGkbEH.increaseAllowance.call(addressWE90Bzt, uinthJg6Fq7, {from: accounts[0]});
		const uint256BfUsRsB = await WeedburnyBGkbEH.balanceOf.call(addressduT5qB3, {from: accounts[3]});

		await expect(WeedburnyBGkbEH.transferFrom.call(addressvtCefKZ, address8mh1Ho, uintl7LGKaj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnGkxoNd = await Weedburn.new({from: accounts[3]});
		const uintFqPz37 = BigInt("128")
		const addressWBqbVT = accounts[5]
		const uintUF3USfO = BigInt("719")
		const uintsBvoaB1 = BigInt("1130")
		const addressPwwZdAc = accounts[3]
		const boolxtXmGGr = await WeedburnGkxoNd.transfer.call(addressWBqbVT, uintFqPz37, {from: accounts[2]});
		const uint256XapPqLj = await WeedburnGkxoNd.burn.call(uintUF3USfO, {from: accounts[1]});
		const uint8YpsH3zk = await WeedburnGkxoNd.decimals.call({from: accounts[5]});
		const addressE0SsT4F = await WeedburnGkxoNd.burnFrom.call(addressPwwZdAc, uintsBvoaB1, {from: accounts[5]});

		await expect(WeedburnGkxoNd.transfer.call(addressWBqbVT, uintFqPz37, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG0FMyi3 = await Weedburn.new({from: accounts[0]});
		const uintfzPs2e = BigInt("1908")
		const addressdQtqj5L = accounts[3]
		const uintqdqzAXU = BigInt("468")
		const addressm8gqS5A = accounts[2]
		const booljKheViR = await WeedburnG0FMyi3.approve.call(addressdQtqj5L, uintfzPs2e, {from: accounts[3]});
		const addressNtfhln7 = await WeedburnG0FMyi3.burnFrom.call(addressm8gqS5A, uintqdqzAXU, {from: accounts[3]});

		assert.equal(booljKheViR, true)
		await expect(WeedburnG0FMyi3.burnFrom.call(addressm8gqS5A, uintqdqzAXU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG0FMyi3 = await Weedburn.new({from: accounts[0]});
		const addressuu5BXif = accounts[1]
		const addressJieO9k4 = "0x0000000000000000000000000000000000000001"
		const uintLJbnaCi = BigInt("1911")
		const addresscJDy6G4 = accounts[3]
		const uintFL0tkF = BigInt("468")
		const addressyt80tV3 = accounts[2]
		const uint8y4hrHj4 = await WeedburnG0FMyi3.decimals.call({from: accounts[2]});
		const uint256JblElVy = await WeedburnG0FMyi3.allowance.call(addressJieO9k4, addressuu5BXif, {from: accounts[4]});
		const booljKheViR = await WeedburnG0FMyi3.approve.call(addresscJDy6G4, uintLJbnaCi, {from: accounts[3]});
		const addressNtfhln7 = await WeedburnG0FMyi3.burnFrom.call(addressyt80tV3, uintFL0tkF, {from: accounts[3]});

		assert.equal(booljKheViR, true)
		assert.equal(uint256JblElVy, BigInt("0"))
		assert.equal(uint8y4hrHj4, BigInt("18"))
		await expect(WeedburnG0FMyi3.burnFrom.call(addressyt80tV3, uintFL0tkF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG0FMyi3 = await Weedburn.new({from: accounts[0]});
		const uintWOTfCI4 = BigInt("1908")
		const addressL0rx0eN = accounts[3]
		const uintsBOBreM = BigInt("631")
		const booljKheViR = await WeedburnG0FMyi3.approve.call(addressL0rx0eN, uintWOTfCI4, {from: accounts[3]});
		const uint256S7jff3k = await WeedburnG0FMyi3.burn.call(uintsBOBreM, {from: accounts[4]});

		assert.equal(booljKheViR, true)
		await expect(WeedburnG0FMyi3.burn.call(uintsBOBreM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG0FMyi3 = await Weedburn.new({from: accounts[0]});
		const uintgfYRNVV = BigInt("1908")
		const addressql3qqF3 = accounts[4]
		const addressgIBKjQn = accounts[4]
		const addressZbGHbFb = accounts[2]
		const uintkGBLi2 = BigInt("468")
		const addressNE5idxz = accounts[2]
		const uintgmcBMwg = BigInt("1812")
		const addressOTSPnJx = accounts[5]
		const booljKheViR = await WeedburnG0FMyi3.approve.call(addressql3qqF3, uintgfYRNVV, {from: accounts[3]});
		const uint256AZ9pG2Q = await WeedburnG0FMyi3.allowance.call(addressZbGHbFb, addressgIBKjQn, {from: accounts[3]});
		const stringzC2lvu6 = await WeedburnG0FMyi3.name.call({from: accounts[1]});
		const addressNtfhln7 = await WeedburnG0FMyi3.burnFrom.call(addressNE5idxz, uintkGBLi2, {from: accounts[3]});
		const boolajf7gz = await WeedburnG0FMyi3.transfer.call(addressOTSPnJx, uintgmcBMwg, {from: accounts[4]});

		assert.equal(booljKheViR, true)
		assert.equal(stringzC2lvu6, "t.me/burnweed1")
		assert.equal(uint256AZ9pG2Q, BigInt("0"))
		await expect(WeedburnG0FMyi3.burnFrom.call(addressNE5idxz, uintkGBLi2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG0FMyi3 = await Weedburn.new({from: accounts[0]});
		const uintbhCvaFc = BigInt("694")
		const addressBAZ8Js = accounts[3]
		await WeedburnG0FMyi3.enableDevMode.call({from: accounts[3]});
		const booljKheViR = await WeedburnG0FMyi3.approve.call(addressBAZ8Js, uintbhCvaFc, {from: accounts[3]});

		await expect(WeedburnG0FMyi3.enableDevMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG0FMyi3 = await Weedburn.new({from: accounts[0]});
		const uintJCKVhQO = BigInt("1105")
		const addressxzWKyNk = accounts[5]
		const uintTpRHA6 = BigInt("695")
		const addressYcUIPat = accounts[3]
		const boolFpVDGLm = await WeedburnG0FMyi3.increaseAllowance.call(addressxzWKyNk, uintJCKVhQO, {from: accounts[3]});
		const booljKheViR = await WeedburnG0FMyi3.approve.call(addressYcUIPat, uintTpRHA6, {from: accounts[3]});

		assert.equal(boolFpVDGLm, true)
		assert.equal(booljKheViR, true)
	});

	it('test for Weedburn', async () => {
		const WeedburnG0FMyi3 = await Weedburn.new({from: accounts[0]});
		const addressMyYOtz6 = accounts[3]
		const uinthktc7AW = BigInt("694")
		const addressZEC9pYI = accounts[4]
		const uint256ryvQk6t = await WeedburnG0FMyi3.balanceOf.call(addressMyYOtz6, {from: accounts[3]});
		const booljKheViR = await WeedburnG0FMyi3.approve.call(addressZEC9pYI, uinthktc7AW, {from: accounts[3]});
		const stringTJL5I1g = await WeedburnG0FMyi3.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booljKheViR, true)
		assert.equal(stringTJL5I1g, "Weedburn")
		assert.equal(uint256ryvQk6t, BigInt("0"))
	});

	it('test for Weedburn', async () => {
		const WeedburnG0FMyi3 = await Weedburn.new({from: accounts[0]});
		const uintunnnp13 = BigInt("656")
		const addressvE7CDLf = accounts[3]
		await WeedburnG0FMyi3.enableDevMode.call({from: accounts[0]});
		const uint256aeYiN2h = await WeedburnG0FMyi3.totalSupply.call({from: accounts[5]});
		const uint256fZuzMwk = await WeedburnG0FMyi3.totalSupply.call({from: accounts[5]});
		const booljKheViR = await WeedburnG0FMyi3.approve.call(addressvE7CDLf, uintunnnp13, {from: accounts[3]});

		await expect(WeedburnG0FMyi3.enableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG0FMyi3 = await Weedburn.new({from: accounts[0]});
		const uintihKRn1p = BigInt("694")
		const addressMgvFMyF = accounts[3]
		await WeedburnG0FMyi3.disableLimitMode.call({from: accounts[2]});
		const booljKheViR = await WeedburnG0FMyi3.approve.call(addressMgvFMyF, uintihKRn1p, {from: accounts[3]});

		await expect(WeedburnG0FMyi3.disableLimitMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburndZT3Bco = await Weedburn.new({from: accounts[4]});
		const uintj5eCctf = BigInt("1111")
		const addressdpDALef = accounts[5]
		const uintvoe3iEJ = BigInt("304")
		const addresssJOwVeI = accounts[3]
		const uintlhdzDUq = BigInt("1366")
		const addressHVcvuKe = accounts[3]
		const uinthv199Uo = BigInt("25")
		const addressMOGRRmL = accounts[0]
		const addressdl6Exo = "0x0000000000000000000000000000000000000001"
		const uint7ysOIC = BigInt("1797")
		await WeedburndZT3Bco.enableLimitMode.call({from: accounts[4]});
		const bool43PdxT = await WeedburndZT3Bco.approve.call(addressdpDALef, uintj5eCctf, {from: accounts[4]});
		const boolNJaW1e = await WeedburndZT3Bco.decreaseAllowance.call(addresssJOwVeI, uintvoe3iEJ, {from: accounts[2]});
		const boolvVQ8JST = await WeedburndZT3Bco.increaseAllowance.call(addressHVcvuKe, uintlhdzDUq, {from: accounts[2]});
		const boolNqhDmgN = await WeedburndZT3Bco.transferFrom.call(addressdl6Exo, addressMOGRRmL, uinthv199Uo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256lwTGin2 = await WeedburndZT3Bco.burn.call(uint7ysOIC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburndZT3Bco.enableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG0FMyi3 = await Weedburn.new({from: accounts[0]});
		const uintgum5pV3 = BigInt("694")
		const addressXq2WaSo = accounts[4]
		await WeedburnG0FMyi3.disableDevMode.call({from: accounts[1]});
		const booljKheViR = await WeedburnG0FMyi3.approve.call(addressXq2WaSo, uintgum5pV3, {from: accounts[3]});

		await expect(WeedburnG0FMyi3.disableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG0FMyi3 = await Weedburn.new({from: accounts[0]});
		const uintM5RKT10 = BigInt("694")
		const addresssHVNbw8 = accounts[4]
		const uintpefJNl = BigInt("93")
		const addressJVTuSy = accounts[2]
		const booljKheViR = await WeedburnG0FMyi3.approve.call(addresssHVNbw8, uintM5RKT10, {from: accounts[3]});
		const boolt2ECR3p = await WeedburnG0FMyi3.transfer.call(addressJVTuSy, uintpefJNl, {from: accounts[0]});

		assert.equal(booljKheViR, true)
		assert.equal(boolt2ECR3p, true)
	});

	it('test for Weedburn', async () => {
		const WeedburnfC7Hcm9 = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjejPPZ = BigInt("206")
		const addressvttpt6g = accounts[3]
		const uintMiBTJKN = BigInt("541")
		const addressd9b7zqO = accounts[4]
		const uinth6lI7z = BigInt("929")
		const addressxKTs94V = accounts[5]
		const uintuwA4nVj = BigInt("782")
		const addressYSQkHw4 = accounts[3]
		const uint8qIyRLRS = await WeedburnfC7Hcm9.decimals.call({from: accounts[2]});
		const boolqLSLhs7 = await WeedburnfC7Hcm9.decreaseAllowance.call(addressvttpt6g, uintjejPPZ, {from: accounts[3]});
		const addressKthOWc = await WeedburnfC7Hcm9.burnFrom.call(addressd9b7zqO, uintMiBTJKN, {from: accounts[5]});
		const boolITjRoik = await WeedburnfC7Hcm9.transfer.call(addressxKTs94V, uinth6lI7z, {from: accounts[2]});
		await WeedburnfC7Hcm9.enableDevMode.call({from: accounts[0]});
		const boolKQ6Dzt = await WeedburnfC7Hcm9.transfer.call(addressYSQkHw4, uintuwA4nVj, {from: accounts[3]});
	});
})