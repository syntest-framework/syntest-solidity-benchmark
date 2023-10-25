const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintkQCdtN7 = BigInt("1545")
		const stringkwdgslB = "sGFUdyJUGAbMQEMRu4LICkJqmAYtE3Dqe6CPOTAHCCQg"
		const stringMfFVkC2 = "cjnbND5WqkMW6u6b4MGMDDuu0UewocU2zo8FqeepRoNWO7urzKvxAJfb0k"
		const uintKxkmI74 = BigInt("640")
		const TetherTokensaH7FO7 = await TetherToken.new(uintkQCdtN7, stringkwdgslB, stringMfFVkC2, uintKxkmI74, {from: accounts[1]});
		const uintbxlLW5x = BigInt("614")
		const uintkiiBtAO = BigInt("1969")
		const addressxUGR5Se = accounts[3]
		const addressM5nVCKD = accounts[0]
		const uintxpYuZHV = await TetherTokensaH7FO7.redeem.call(uintbxlLW5x, {from: accounts[2]});
		const uintJtl0dQb = await TetherTokensaH7FO7.issue.call(uintkiiBtAO, {from: accounts[3]});
		const uintO2m1mmO = await TetherTokensaH7FO7.balanceOf.call(addressxUGR5Se, {from: accounts[3]});
		const addressa7lOiDY = await TetherTokensaH7FO7.deprecate.call(addressM5nVCKD, {from: accounts[1]});

		await expect(TetherTokensaH7FO7.redeem.call(uintbxlLW5x, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintICSwY35 = BigInt("937")
		const stringcGLFnMx = "aBPUoxZCQhN31rzZcchoEL2UlArim7HeY5NuSCecX"
		const stringb6BBxXO = "OatLsXHTyr4Kjp43QEpILpve4sVC9NnmSXFf89YBrxEwdd66rVWTtmgSkFIS1suP37sNik"
		const uintb8SQmuj = BigInt("1898")
		const TetherTokenr5zl2T = await TetherToken.new(uintICSwY35, stringcGLFnMx, stringb6BBxXO, uintb8SQmuj, {from: accounts[2]});
		const uintQ9h5dpp = BigInt("791")
		const addressDFdryTo = accounts[0]
		const addresstqIsVuT = accounts[0]
		const uintaFCaqzF = BigInt("1073")
		const addressVV2MdkN = accounts[3]
		const addressZRYUICt = accounts[0]
		const uintZptgubP = BigInt("97")
		const addressEvZstAa = await TetherTokenr5zl2T.transferFrom.call(addresstqIsVuT, addressDFdryTo, uintQ9h5dpp, {from: accounts[2]});
		const uintpDU03u1 = await TetherTokenr5zl2T.issue.call(uintaFCaqzF, {from: accounts[0]});
		const uintg6gz6JN = await TetherTokenr5zl2T.allowance.call(addressZRYUICt, addressVV2MdkN, {from: accounts[5]});
		const uintxGN4I0k = await TetherTokenr5zl2T.issue.call(uintZptgubP, {from: accounts[5]});

		await expect(TetherTokenr5zl2T.transferFrom.call(addresstqIsVuT, addressDFdryTo, uintQ9h5dpp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintJE5KEFD = BigInt("1995")
		const stringuILavQA = "FddGW6liokC"
		const stringq1G9wdE = "qSbthLeIU48nIjgy19MJ8OxrhifDBcnOBhUKKBiAXkpcWBQzmGWsJ"
		const uintegDEjL8 = BigInt("882")
		const TetherTokenLtsYhKZ = await TetherToken.new(uintJE5KEFD, stringuILavQA, stringq1G9wdE, uintegDEjL8, {from: accounts[2]});
		const uintjxVh9SI = BigInt("567")
		const uintGPeRqhW = BigInt("158")
		const uintom0GFzA = BigInt("1695")
		const addressjurMF4i = accounts[0]
		const uintrj78Cei = BigInt("134")
		const uintZtth7m6 = await TetherTokenLtsYhKZ.issue.call(uintjxVh9SI, {from: accounts[5]});
		const uintjFU7wQP = await TetherTokenLtsYhKZ.redeem.call(uintGPeRqhW, {from: "0x0000000000000000000000000000000000000001"});
		const address57zGhU = await TetherTokenLtsYhKZ.approve.call(addressjurMF4i, uintom0GFzA, {from: accounts[4]});
		const uintb9KSbCI = await TetherTokenLtsYhKZ.redeem.call(uintrj78Cei, {from: accounts[4]});

		await expect(TetherTokenLtsYhKZ.issue.call(uintjxVh9SI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintKKaJEzv = BigInt("189")
		const stringON9cv1A = "tpNBsA2F4NIhogliFCo1m7u9GjGIDudZ7IYiFWGGNTbYB9DE"
		const stringRzh4A3B = "YjQzqz7C2qzdI6D4MekNKcP7pkbfbkSTBOVdzVOSBRnsLjBmflxDCFqT1rtG86yentx4knRogyf4wJQykjWTwPtYEj"
		const uintSN8DWie = BigInt("158")
		const TetherTokenDWn35zn = await TetherToken.new(uintKKaJEzv, stringON9cv1A, stringRzh4A3B, uintSN8DWie, {from: accounts[5]});
		const uintXJZObcz = BigInt("404")
		const addressrEFqdCS = accounts[2]
		const addressIfnp68d = accounts[5]
		const addressK6Iha7y = accounts[0]
		const addresseHneogE = await TetherTokenDWn35zn.approve.call(addressrEFqdCS, uintXJZObcz, {from: accounts[2]});
		const uintdUCLbiu = await TetherTokenDWn35zn.allowance.call(addressK6Iha7y, addressIfnp68d, {from: accounts[0]});
		const uintnVnB8HG = await TetherTokenDWn35zn.totalSupply.call({from: accounts[2]});

		assert.equal(uintdUCLbiu, BigInt("0"))
		assert.equal(uintnVnB8HG, BigInt("189"))
	});

	it('test for TetherToken', async () => {
		const uintzNf6GsD = BigInt("937")
		const stringcGLFnMx = "aBPUoxZCQhN31rzZcchoEL2UlArim7HeY5NuSCecX"
		const stringb6BBxXO = "OatLsXHTyr4Kjp43QEpILpve4sVC9NnmSXFf89YBrxEwdd66rVWTtmgSkFIS1suP37sNik"
		const uintQSVXCox = BigInt("1898")
		const TetherTokenr5zl2T = await TetherToken.new(uintzNf6GsD, stringcGLFnMx, stringb6BBxXO, uintQSVXCox, {from: accounts[2]});
		const addressEJzL1Ft = accounts[1]
		const uintIYFPJ0Y = BigInt("620")
		const address8iWyO4 = accounts[3]
		const addresswiCmRxn = "0x0000000000000000000000000000000000000001"
		const addressETqiY67 = accounts[3]
		const uintEo3FF8U = BigInt("791")
		const addressZWig7qx = accounts[0]
		const addressyM2sRG = accounts[0]
		const uintn5P4s2X = BigInt("1082")
		const addresswiWBhBx = accounts[3]
		const addressZPI444w = accounts[0]
		const uintzwhXPuT = BigInt("97")
		const addressWJUQ2dX = await TetherTokenr5zl2T.deprecate.call(addressEJzL1Ft, {from: accounts[4]});
		const addressj1q4Xde = await TetherTokenr5zl2T.approve.call(address8iWyO4, uintIYFPJ0Y, {from: "0x0000000000000000000000000000000000000001"});
		const uintSNLagjI = await TetherTokenr5zl2T.allowance.call(addressETqiY67, addresswiCmRxn, {from: accounts[4]});
		const addressEvZstAa = await TetherTokenr5zl2T.transferFrom.call(addressyM2sRG, addressZWig7qx, uintEo3FF8U, {from: accounts[2]});
		const uintpDU03u1 = await TetherTokenr5zl2T.issue.call(uintn5P4s2X, {from: accounts[0]});
		const uintg6gz6JN = await TetherTokenr5zl2T.allowance.call(addressZPI444w, addresswiWBhBx, {from: accounts[5]});
		const uintxGN4I0k = await TetherTokenr5zl2T.issue.call(uintzwhXPuT, {from: accounts[5]});

		await expect(TetherTokenr5zl2T.deprecate.call(addressEJzL1Ft, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintPBQtjpP = BigInt("189")
		const stringON9cv1A = "tpNBsA2F4NIhogliFCo1m7u9GjGIDudZ7IYiFWGGNTbYB9DE"
		const stringRzh4A3B = "YjQzqz7C2qzdI6D4MekNKcP7pkbfbkSTBOVdzVOSBRnsLjBmflxDCFqT1rtG86yentx4knRogyf4wJQykjWTwPtYEj"
		const uintCV7tyC0 = BigInt("158")
		const TetherTokenDWn35zn = await TetherToken.new(uintPBQtjpP, stringON9cv1A, stringRzh4A3B, uintCV7tyC0, {from: accounts[5]});
		const uintekQZOFK = BigInt("404")
		const addressdJC9mye = accounts[2]
		const addressNPBIVL3 = accounts[5]
		const addresshEqtZOS = accounts[1]
		const addresscv99Ekh = accounts[2]
		const addresseHneogE = await TetherTokenDWn35zn.approve.call(addressdJC9mye, uintekQZOFK, {from: accounts[2]});
		const uintdUCLbiu = await TetherTokenDWn35zn.allowance.call(addresshEqtZOS, addressNPBIVL3, {from: accounts[0]});
		const uintxE2B5X = await TetherTokenDWn35zn.balanceOf.call(addresscv99Ekh, {from: accounts[5]});
		const uintnVnB8HG = await TetherTokenDWn35zn.totalSupply.call({from: accounts[2]});

		assert.equal(uintdUCLbiu, BigInt("0"))
		assert.equal(uintnVnB8HG, BigInt("189"))
		assert.equal(uintxE2B5X, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uintEmZUwKu = BigInt("1469")
		const stringKhV9Rkz = "czw2VU3ExgpQKtyXHfrPmi8BqYDysQvWawOVMgHJAsIvNnmryrQ"
		const stringkR8JSrA = "UY12eiIS5HiD8723HscnP917wQwV4Ul3rql6IzDgXtMtC1dw6xG3tjXCQPy51WhIXXFsRdD4hR5bvNuEy74M"
		const uintoDXYJLl = BigInt("110")
		const TetherTokenfK8AKZT = await TetherToken.new(uintEmZUwKu, stringKhV9Rkz, stringkR8JSrA, uintoDXYJLl, {from: accounts[1]});
		const addressTXgXrZt = accounts[2]
		const uinte8KeUGf = BigInt("737")
		const uintbmwV1OO = BigInt("274")
		const addressxFtApI6 = accounts[5]
		const addresslExGRE = accounts[3]
		const addressDJFKvUV = accounts[4]
		const uintb1OESZK = await TetherTokenfK8AKZT.balanceOf.call(addressTXgXrZt, {from: accounts[0]});
		const uinteYMEA2 = await TetherTokenfK8AKZT.totalSupply.call({from: accounts[1]});
		const uintzzC2YFI = await TetherTokenfK8AKZT.setParams.call(uintbmwV1OO, uinte8KeUGf, {from: accounts[4]});
		const uintFKxe5nN = await TetherTokenfK8AKZT.balanceOf.call(addressxFtApI6, {from: accounts[4]});
		const uintmOevC28 = await TetherTokenfK8AKZT.allowance.call(addressDJFKvUV, addresslExGRE, {from: accounts[0]});

		assert.equal(uintb1OESZK, BigInt("0"))
		assert.equal(uinteYMEA2, BigInt("1469"))
		await expect(TetherTokenfK8AKZT.setParams.call(uintbmwV1OO, uinte8KeUGf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintwgDU6Co = BigInt("641")
		const stringNHtG9q = "soaG5hSHZf8rBm5Fqe4WgKnwQlSPXMHfOjdbCENFXMbRwtVwvNIXzMMHrikI"
		const stringr8aJSZg = "zCYO262H8DBpQqg3f1CDTw1yyN43FdpUyv6GcszeQ6YSknHzhXsx60PnvMsOUsJcncrUVIJKlI"
		const uintvbuaaF = BigInt("865")
		const TetherTokenDsu17n = await TetherToken.new(uintwgDU6Co, stringNHtG9q, stringr8aJSZg, uintvbuaaF, {from: "0x0000000000000000000000000000000000000001"});
		const uintqYFOoS5 = BigInt("598")
		const uintxlTGv01 = BigInt("935")
		const uintTxxMSJ9 = BigInt("1047")
		const uintss9fDU = BigInt("1406")
		const addressK5mYUB4 = accounts[4]
		const addressWXFrMQF = accounts[0]
		const uintQmXDF9x = await TetherTokenDsu17n.issue.call(uintqYFOoS5, {from: accounts[1]});
		const uintn5BHeFS = await TetherTokenDsu17n.redeem.call(uintxlTGv01, {from: accounts[1]});
		const uintYMjhXT6 = await TetherTokenDsu17n.redeem.call(uintTxxMSJ9, {from: accounts[2]});
		const addressxYozP3P = await TetherTokenDsu17n.transferFrom.call(addressWXFrMQF, addressK5mYUB4, uintss9fDU, {from: accounts[3]});
	});

	it('test for TetherToken', async () => {
		const uintaJN7YZi = BigInt("189")
		const stringON9cv1A = "tpNBsA2F4NIhogliFCo1m7u9GjGIDudZ7IYiFWGGNTbYB9DE"
		const stringRzh4A3B = "YjQzqz7C2qzdI6D4MekNKcP7pkbfbkSTBOVdzVOSBRnsLjBmflxDCFqT1rtG86yentx4knRogyf4wJQykjWTwPtYEj"
		const uintKBv081l = BigInt("158")
		const TetherTokenDWn35zn = await TetherToken.new(uintaJN7YZi, stringON9cv1A, stringRzh4A3B, uintKBv081l, {from: accounts[5]});
		const uintjMh7136 = BigInt("251")
		const addressGLcw2Un = accounts[2]
		const uintl8LeE4E = BigInt("404")
		const addressFrYe8ra = accounts[2]
		const addressCtIdvG = await TetherTokenDWn35zn.transfer.call(addressGLcw2Un, uintjMh7136, {from: accounts[4]});
		const addresseHneogE = await TetherTokenDWn35zn.approve.call(addressFrYe8ra, uintl8LeE4E, {from: accounts[2]});

		await expect(TetherTokenDWn35zn.transfer.call(addressGLcw2Un, uintjMh7136, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})