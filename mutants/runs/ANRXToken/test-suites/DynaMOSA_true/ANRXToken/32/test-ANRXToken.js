const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintkQCdtN7 = BigInt("1545")
		const stringkwdgslB = "sGFUdyJUGAbMQEMRu4LICkJqmAYtE3Dqe6CPOTAHCCQg"
		const stringMfFVkC2 = "cjnbND5WqkMW6u6b4MGMDDuu0UewocU2zo8FqeepRoNWO7urzKvxAJfb0k"
		const uintKxkmI74 = BigInt("640")
		const ANRXTokensaH7FO7 = await ANRXToken.new(uintkQCdtN7, stringkwdgslB, stringMfFVkC2, uintKxkmI74, {from: accounts[1]});
		const uintbxlLW5x = BigInt("614")
		const uintkiiBtAO = BigInt("1969")
		const addressxUGR5Se = accounts[3]
		const addressM5nVCKD = accounts[0]
		const uintxpYuZHV = await ANRXTokensaH7FO7.redeem.call(uintbxlLW5x, {from: accounts[2]});
		const uintJtl0dQb = await ANRXTokensaH7FO7.issue.call(uintkiiBtAO, {from: accounts[3]});
		const uintO2m1mmO = await ANRXTokensaH7FO7.balanceOf.call(addressxUGR5Se, {from: accounts[3]});
		const addressa7lOiDY = await ANRXTokensaH7FO7.deprecate.call(addressM5nVCKD, {from: accounts[1]});

		await expect(ANRXTokensaH7FO7.redeem.call(uintbxlLW5x, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintIyNCUal = BigInt("1070")
		const stringd0ExgKd = "LitpCWWqDk8UPyS4alxPntrSoKYVfktcuxwNQtsN6FXWSgs794KsN"
		const stringwGV3be = "poCO8oaFHF8428e9RlKJPQG4qEct4SYufGGDzrycX64YkN4pU5zluCcScicSA4VHVuipGhFV9IRe5podCxRfB5bBT"
		const uintyHS6RBy = BigInt("490")
		const ANRXTokent4T2DSr = await ANRXToken.new(uintIyNCUal, stringd0ExgKd, stringwGV3be, uintyHS6RBy, {from: accounts[2]});
		const uintQTPZDjC = BigInt("1570")
		const addressLkQ03Z = accounts[3]
		const uintI9TeiYW = BigInt("1702")
		const addresswJwMAk0 = accounts[1]
		const uintXvioeq = await ANRXTokent4T2DSr.redeem.call(uintQTPZDjC, {from: accounts[2]});
		const uintJhPySEz = await ANRXTokent4T2DSr.balanceOf.call(addressLkQ03Z, {from: accounts[4]});
		const uintnjYS2wW = await ANRXTokent4T2DSr.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uintC9oVtRh = await ANRXTokent4T2DSr.redeem.call(uintI9TeiYW, {from: accounts[3]});
		const uintpS2cKGF = await ANRXTokent4T2DSr.totalSupply.call({from: accounts[3]});
		const addressmPiMuTN = await ANRXTokent4T2DSr.deprecate.call(addresswJwMAk0, {from: accounts[5]});

		await expect(ANRXTokent4T2DSr.redeem.call(uintQTPZDjC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintICSwY35 = BigInt("937")
		const stringcGLFnMx = "aBPUoxZCQhN31rzZcchoEL2UlArim7HeY5NuSCecX"
		const stringb6BBxXO = "OatLsXHTyr4Kjp43QEpILpve4sVC9NnmSXFf89YBrxEwdd66rVWTtmgSkFIS1suP37sNik"
		const uintb8SQmuj = BigInt("1898")
		const ANRXTokenr5zl2T = await ANRXToken.new(uintICSwY35, stringcGLFnMx, stringb6BBxXO, uintb8SQmuj, {from: accounts[2]});
		const uintQ9h5dpp = BigInt("791")
		const addressDFdryTo = accounts[0]
		const addresstqIsVuT = accounts[0]
		const uintaFCaqzF = BigInt("1073")
		const addressVV2MdkN = accounts[3]
		const addressZRYUICt = accounts[0]
		const uintZptgubP = BigInt("97")
		const boolEvZstAa = await ANRXTokenr5zl2T.transferFrom.call(addresstqIsVuT, addressDFdryTo, uintQ9h5dpp, {from: accounts[2]});
		const uintpDU03u1 = await ANRXTokenr5zl2T.issue.call(uintaFCaqzF, {from: accounts[0]});
		const uintg6gz6JN = await ANRXTokenr5zl2T.allowance.call(addressZRYUICt, addressVV2MdkN, {from: accounts[5]});
		const uintxGN4I0k = await ANRXTokenr5zl2T.issue.call(uintZptgubP, {from: accounts[5]});

		await expect(ANRXTokenr5zl2T.transferFrom.call(addresstqIsVuT, addressDFdryTo, uintQ9h5dpp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintKKaJEzv = BigInt("189")
		const stringON9cv1A = "tpNBsA2F4NIhogliFCo1m7u9GjGIDudZ7IYiFWGGNTbYB9DE"
		const stringRzh4A3B = "YjQzqz7C2qzdI6D4MekNKcP7pkbfbkSTBOVdzVOSBRnsLjBmflxDCFqT1rtG86yentx4knRogyf4wJQykjWTwPtYEj"
		const uintSN8DWie = BigInt("158")
		const ANRXTokenDWn35zn = await ANRXToken.new(uintKKaJEzv, stringON9cv1A, stringRzh4A3B, uintSN8DWie, {from: accounts[5]});
		const uintXJZObcz = BigInt("404")
		const addressrEFqdCS = accounts[2]
		const addressIfnp68d = accounts[5]
		const addressK6Iha7y = accounts[0]
		const booleHneogE = await ANRXTokenDWn35zn.approve.call(addressrEFqdCS, uintXJZObcz, {from: accounts[2]});
		const uintdUCLbiu = await ANRXTokenDWn35zn.allowance.call(addressK6Iha7y, addressIfnp68d, {from: accounts[0]});
		const uintnVnB8HG = await ANRXTokenDWn35zn.totalSupply.call({from: accounts[2]});

		assert.equal(booleHneogE, true)
		assert.equal(uintdUCLbiu, BigInt("0"))
		assert.equal(uintnVnB8HG, BigInt("189"))
	});

	it('test for ANRXToken', async () => {
		const uintNMEDchK = BigInt("1769")
		const stringy7H53j = "ieETVYiIIUWunUdHTSj4JmJU8Sp8dx0VcS3GifbpniDCNDEtPRUxPV2JPGBeEdpvebV5E"
		const stringaa0s3eQ = "fCmNfWF0yGlroMx9CG4JBOm"
		const uint9FVYZT = BigInt("1995")
		const ANRXTokenpjI1n0y = await ANRXToken.new(uintNMEDchK, stringy7H53j, stringaa0s3eQ, uint9FVYZT, {from: accounts[0]});
		const addressBiL71Ye = accounts[2]
		const addressreiUkCF = accounts[2]
		const addressy2ER2eZ = accounts[2]
		const uintejQiAG6 = BigInt("741")
		const addressJCQxZe = "0x0000000000000000000000000000000000000001"
		const addressSeRkeBX = accounts[1]
		const addressMlFxbtR = accounts[1]
		const addressf5CHH9u = accounts[6]
		const uintf3RAgfo = BigInt("1922")
		const addressdEKs7n = accounts[3]
		const uintFCZiSN = await ANRXTokenpjI1n0y.totalSupply.call({from: accounts[1]});
		const uintrGFQO7q = await ANRXTokenpjI1n0y.allowance.call(addressreiUkCF, addressBiL71Ye, {from: accounts[4]});
		const uintwVtzIyB = await ANRXTokenpjI1n0y.balanceOf.call(addressy2ER2eZ, {from: "0x0000000000000000000000000000000000000001"});
		const boolisjn9ID = await ANRXTokenpjI1n0y.transferFrom.call(addressSeRkeBX, addressJCQxZe, uintejQiAG6, {from: "0x0000000000000000000000000000000000000001"});
		const uintHfhp7UD = await ANRXTokenpjI1n0y.allowance.call(addressf5CHH9u, addressMlFxbtR, {from: accounts[4]});
		const boolRQqDN7a = await ANRXTokenpjI1n0y.approve.call(addressdEKs7n, uintf3RAgfo, {from: accounts[1]});

		assert.equal(uintFCZiSN, BigInt("1769"))
		assert.equal(uintrGFQO7q, BigInt("0"))
		assert.equal(uintwVtzIyB, BigInt("0"))
		await expect(ANRXTokenpjI1n0y.transferFrom.call(addressSeRkeBX, addressJCQxZe, uintejQiAG6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uinttV8SjeG = BigInt("189")
		const stringON9cv1A = "tpNBsA2F4NIhogliFCo1m7u9GjGIDudZ7IYiFWGGNTbYB9DE"
		const stringRzh4A3B = "YjQzqz7C2qzdI6D4MekNKcP7pkbfbkSTBOVdzVOSBRnsLjBmflxDCFqT1rtG86yentx4knRogyf4wJQykjWTwPtYEj"
		const uintBTBljkt = BigInt("158")
		const ANRXTokenDWn35zn = await ANRXToken.new(uinttV8SjeG, stringON9cv1A, stringRzh4A3B, uintBTBljkt, {from: accounts[5]});
		const uintVTlMtzo = BigInt("404")
		const addressU7Uy8Sh = accounts[2]
		const addressiiaBRye = accounts[5]
		const addressy0cT3p7 = accounts[0]
		const uintc9dR5l5 = BigInt("823")
		const addressau6dVpo = accounts[4]
		const booleHneogE = await ANRXTokenDWn35zn.approve.call(addressU7Uy8Sh, uintVTlMtzo, {from: accounts[2]});
		const uintdUCLbiu = await ANRXTokenDWn35zn.allowance.call(addressy0cT3p7, addressiiaBRye, {from: accounts[0]});
		const uintnVnB8HG = await ANRXTokenDWn35zn.totalSupply.call({from: accounts[2]});
		const booly7JKqNI = await ANRXTokenDWn35zn.transfer.call(addressau6dVpo, uintc9dR5l5, {from: accounts[4]});

		assert.equal(booleHneogE, true)
		assert.equal(uintdUCLbiu, BigInt("0"))
		assert.equal(uintnVnB8HG, BigInt("189"))
		await expect(ANRXTokenDWn35zn.transfer.call(addressau6dVpo, uintc9dR5l5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintNG2N0Qo = BigInt("319")
		const stringyjGubzY = "HkJfyWgdYCRBieCqSChOEs3jHGvpswriCYk9TAc"
		const string8yCHoe = "J0I6TWDHcAyBx6zSJbe6kMR3OzWvvNCFjF7gKHfBAzDOh3D4ljXyWJvbpJpIlMikdo4INQ3SgLjVevTDvGAYoqNFrbC3bJjW"
		const uinth9GpLl = BigInt("134")
		const ANRXTokencEhT4pa = await ANRXToken.new(uintNG2N0Qo, stringyjGubzY, string8yCHoe, uinth9GpLl, {from: accounts[2]});
		const uintqJMGjNI = BigInt("1552")
		const addressfdym3s = accounts[0]
		const uintG1eDEy9 = BigInt("1492")
		const addressP2bVcAg = accounts[4]
		const uintiq58mLz = BigInt("69")
		const uintEt7UxA9 = BigInt("1818")
		const boolkwu1iAt = await ANRXTokencEhT4pa.approve.call(addressfdym3s, uintqJMGjNI, {from: accounts[4]});
		const uinthO2q4yM = await ANRXTokencEhT4pa.totalSupply.call({from: accounts[1]});
		const boolCwGCH7n = await ANRXTokencEhT4pa.approve.call(addressP2bVcAg, uintG1eDEy9, {from: accounts[1]});
		const uintHggUQlX = await ANRXTokencEhT4pa.setParams.call(uintEt7UxA9, uintiq58mLz, {from: accounts[2]});

		assert.equal(boolCwGCH7n, true)
		assert.equal(boolkwu1iAt, true)
		assert.equal(uinthO2q4yM, BigInt("319"))
		await expect(ANRXTokencEhT4pa.setParams.call(uintEt7UxA9, uintiq58mLz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintfFaQ0Si = BigInt("540")
		const stringNCojS8V = "lC2xh3pkCxbzRHkpEznUICYfkfkrfDuXEPT"
		const stringwdFz13l = "cG5nsb"
		const uintZUUBWfi = BigInt("196")
		const ANRXTokenqRxm0ZJ = await ANRXToken.new(uintfFaQ0Si, stringNCojS8V, stringwdFz13l, uintZUUBWfi, {from: "0x0000000000000000000000000000000000000001"});
		const uintzWYiEEH = BigInt("1830")
		const addressZobfUg4 = accounts[4]
		const uintnsFNwH = BigInt("76")
		const boolE0yE7u3 = await ANRXTokenqRxm0ZJ.approve.call(addressZobfUg4, uintzWYiEEH, {from: accounts[2]});
		const uinthCo8Dr = await ANRXTokenqRxm0ZJ.redeem.call(uintnsFNwH, {from: accounts[3]});
	});

	it('test for ANRXToken', async () => {
		const uintVQVXNT5 = BigInt("1644")
		const stringnOT0Hq = "fsuVuip78KAzLrga7vPWuCrrzy7mmv"
		const stringDs8ayod = "2tEIm4IBf8VBdFlWWCo4aQAgPjt6S6qVJ28OP595Iri2gRAl57pek7gDjciUT82I5"
		const uintsqExNwY = BigInt("433")
		const ANRXTokenPuqn9cP = await ANRXToken.new(uintVQVXNT5, stringnOT0Hq, stringDs8ayod, uintsqExNwY, {from: accounts[4]});
		const addressyInoBT7 = "0x0000000000000000000000000000000000000001"
		const addressBE7aX9 = accounts[1]
		const addressIGdSkdu = accounts[5]
		const addresslMWuXH = accounts[3]
		const addressXe3DeVo = "0x0000000000000000000000000000000000000001"
		const addressfxzmwvA = await ANRXTokenPuqn9cP.deprecate.call(addressyInoBT7, {from: accounts[4]});
		const uintELBmo6 = await ANRXTokenPuqn9cP.totalSupply.call({from: accounts[1]});
		const uintDj9va5C = await ANRXTokenPuqn9cP.allowance.call(addressIGdSkdu, addressBE7aX9, {from: accounts[3]});
		const addressIIWRF36 = await ANRXTokenPuqn9cP.deprecate.call(addresslMWuXH, {from: accounts[2]});
		const uintcy86Hf7 = await ANRXTokenPuqn9cP.balanceOf.call(addressXe3DeVo, {from: accounts[3]});

		assert.equal(uintDj9va5C, BigInt("0"))
		assert.equal(uintELBmo6, BigInt("1644"))
		await expect(ANRXTokenPuqn9cP.deprecate.call(addresslMWuXH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintjSCig4b = BigInt("1360")
		const stringDb9KHs = "T6CuG4n811p6lN8EXfR3yyXvKR5vqxGBg7YfAGO2hZGhds4NlhYKYuHW4orDFBNzsG6g2C8wj8UQPAVE60RR5wOqoIGOdk8I"
		const stringFlh7LUH = "C9PlMwWJ9iJCoWMjEkz129v363xX2dkxhhy6pYG6cPRFocxs"
		const uintWJOJtI6 = BigInt("596")
		const ANRXTokenofy7qsA = await ANRXToken.new(uintjSCig4b, stringDb9KHs, stringFlh7LUH, uintWJOJtI6, {from: accounts[3]});
		const uintPUVddNk = BigInt("943")
		const uinthdT3yrx = await ANRXTokenofy7qsA.redeem.call(uintPUVddNk, {from: accounts[3]});
	});

	it('test for ANRXToken', async () => {
		const uintsG0asnL = BigInt("319")
		const stringyjGubzY = "HkJfyWgdYCRBieCqSChOEs3jHGvpswriCYk9TAc"
		const string8yCHoe = "J0I6TWDHcAyBx6zSJbe6kMR3OzWvvNCFjF7gKHfBAzDOh3D4ljXyWJvbpJpIlMikdo4INQ3SgLjVevTDvGAYoqNFrbC3bJjW"
		const uintHCaJGfB = BigInt("134")
		const ANRXTokencEhT4pa = await ANRXToken.new(uintsG0asnL, stringyjGubzY, string8yCHoe, uintHCaJGfB, {from: accounts[2]});
		const uintREhXgCI = BigInt("815")
		const uintti71Vmi = BigInt("69")
		const uintSekXNK8 = BigInt("1824")
		const uintvWQLetX = await ANRXTokencEhT4pa.issue.call(uintREhXgCI, {from: accounts[2]});
		const uintHggUQlX = await ANRXTokencEhT4pa.setParams.call(uintSekXNK8, uintti71Vmi, {from: accounts[2]});

		await expect(ANRXTokencEhT4pa.setParams.call(uintSekXNK8, uintti71Vmi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintzvJPrCb = BigInt("319")
		const stringyjGubzY = "HkJfyWgdYCRBieCqSChOEs3jHGvpswriCYk9TAc"
		const string8yCHoe = "J0I6TWDHcAyBx6zSJbe6kMR3OzWvvNCFjF7gKHfBAzDOh3D4ljXyWJvbpJpIlMikdo4INQ3SgLjVevTDvGAYoqNFrbC3bJjW"
		const uintbA3bQ4Q = BigInt("134")
		const ANRXTokencEhT4pa = await ANRXToken.new(uintzvJPrCb, stringyjGubzY, string8yCHoe, uintbA3bQ4Q, {from: accounts[2]});
		const addressIWMOjCf = accounts[3]
		const addressY4tA3P = accounts[3]
		const addresszslSVBl = accounts[5]
		const uintJ4qihyE = BigInt("1816")
		const addressqwn9uTy = "0x00000000000000000000000000000000000000-1"
		const uinttNIYCYI = BigInt("69")
		const uintfxWiraD = BigInt("1842")
		const addressWr2Txli = accounts[5]
		const uintSf1zc7Z = BigInt("726")
		const uintDFTzMv0 = BigInt("595")
		const uintI4VJee1 = BigInt("2012")
		const addressxcElFX8 = accounts[2]
		const uintXCZbNqi = BigInt("1605")
		const addressagDuvgQ = accounts[4]
		const uintGdJD1LL = await ANRXTokencEhT4pa.balanceOf.call(addressIWMOjCf, {from: "0x0000000000000000000000000000000000000001"});
		const uintEVQEelB = await ANRXTokencEhT4pa.allowance.call(addresszslSVBl, addressY4tA3P, {from: accounts[0]});
		const boolX57g191 = await ANRXTokencEhT4pa.approve.call(addressqwn9uTy, uintJ4qihyE, {from: accounts[4]});
		const uintHggUQlX = await ANRXTokencEhT4pa.setParams.call(uintfxWiraD, uinttNIYCYI, {from: accounts[2]});
		const uintqQbWj9V = await ANRXTokencEhT4pa.balanceOf.call(addressWr2Txli, {from: "0x0000000000000000000000000000000000000001"});
		const uintjffC8cR = await ANRXTokencEhT4pa.redeem.call(uintSf1zc7Z, {from: accounts[5]});
		const uintrEgYK4l = await ANRXTokencEhT4pa.redeem.call(uintDFTzMv0, {from: accounts[2]});
		const boolwEyXtaU = await ANRXTokencEhT4pa.approve.call(addressxcElFX8, uintI4VJee1, {from: accounts[2]});
		const uintPVOZ09W = await ANRXTokencEhT4pa.redeem.call(uintXCZbNqi, {from: accounts[5]});
		const uintit4953F = await ANRXTokencEhT4pa.balanceOf.call(addressagDuvgQ, {from: accounts[2]});

		assert.equal(uintEVQEelB, BigInt("0"))
		assert.equal(uintGdJD1LL, BigInt("0"))
		await expect(ANRXTokencEhT4pa.approve.call(addressqwn9uTy, uintJ4qihyE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})