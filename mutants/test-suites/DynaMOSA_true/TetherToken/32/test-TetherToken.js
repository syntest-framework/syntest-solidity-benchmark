const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uint86ZEy6 = BigInt("1138")
		const stringM0sRpmk = "uUXjMAP6wfTE2lt0NUDOjsXRwI6odMbg7neAUikvfRMuFAMqXIRnQVWv"
		const string3pkhRB = "cDPJiT3Oqj1DFNEIWw69YKiXa9d7jxzqwcn"
		const uintVvThCXd = BigInt("911")
		const TetherTokenC6YHbPr = await TetherToken.new(uint86ZEy6, stringM0sRpmk, string3pkhRB, uintVvThCXd, {from: accounts[3]});
		const uintQDzpgPz = BigInt("997")
		const addressBnqCyFu = accounts[1]
		const addressiUREMGZ = accounts[3]
		const uintyT2ZHat = BigInt("982")
		const addressvhYsBTF = accounts[2]
		const addressQTzClP1 = accounts[4]
		const uintnQpTcD3 = BigInt("1043")
		const addressMzBAyqe = accounts[0]
		const uintmJcbQ6 = BigInt("1270")
		const uintcNRvsIi = BigInt("163")
//		const addressmRv24Is = await TetherTokenC6YHbPr.transferFrom.call(addressiUREMGZ, addressBnqCyFu, uintQDzpgPz, {from: accounts[0]});
//		const addresskspz4x5 = await TetherTokenC6YHbPr.transferFrom.call(addressQTzClP1, addressvhYsBTF, uintyT2ZHat, {from: accounts[3]});
//		const addressnTK8ye = await TetherTokenC6YHbPr.approve.call(addressMzBAyqe, uintnQpTcD3, {from: accounts[1]});
//		const uintwTKAUme = await TetherTokenC6YHbPr.setParams.call(uintcNRvsIi, uintmJcbQ6, {from: accounts[5]});

		await expect(TetherTokenC6YHbPr.transferFrom.call(addressiUREMGZ, addressBnqCyFu, uintQDzpgPz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintDA12peU = BigInt("729")
		const stringYCw58ex = "Z5FJuSwH4lFTtYHb0g5h"
		const stringBkUb5PL = "2TIwyoSl51GF"
		const uint5iVEhS = BigInt("899")
		const TetherTokenY4lJWsJ = await TetherToken.new(uintDA12peU, stringYCw58ex, stringBkUb5PL, uint5iVEhS, {from: accounts[2]});
		const addressIR76vzG = accounts[3]
		const addressXwVFa78 = accounts[2]
		const uintBeGG1xs = BigInt("1522")
		const uintA6yAn10 = BigInt("1033")
		const uintLNgQjnf = BigInt("1471")
		const addressXiUQil = accounts[1]
//		const addresswdfu81V = await TetherTokenY4lJWsJ.deprecate.call(addressIR76vzG, {from: accounts[1]});
//		const addressbE4qA4E = await TetherTokenY4lJWsJ.deprecate.call(addressXwVFa78, {from: accounts[0]});
//		const uintjs71aqi = await TetherTokenY4lJWsJ.setParams.call(uintA6yAn10, uintBeGG1xs, {from: accounts[1]});
//		const addressfN7F9Td = await TetherTokenY4lJWsJ.approve.call(addressXiUQil, uintLNgQjnf, {from: accounts[2]});

		await expect(TetherTokenY4lJWsJ.deprecate.call(addressIR76vzG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintAKvqggl = BigInt("1198")
		const stringFTBRUqf = "s3VgA99HYqgvk2sVYWxfOxTlp1C3pYYrSs8sE3RkKsPoUkbr85HnD97Y94GQ92JE8VS20utLx"
		const stringUz6WZ6 = "1bzDY6QAoGj"
		const uintDFZJadt = BigInt("984")
		const TetherTokenc0peDf3 = await TetherToken.new(uintAKvqggl, stringFTBRUqf, stringUz6WZ6, uintDFZJadt, {from: accounts[0]});
		const addressKqQzx3O = "0x0000000000000000000000000000000000000001"
		const addressX0vgevv = accounts[4]
		const uintPbLrfh9 = await TetherTokenc0peDf3.totalSupply.call({from: accounts[4]});
		const uintBeW8RyQ = await TetherTokenc0peDf3.balanceOf.call(addressKqQzx3O, {from: accounts[3]});
//		const addresspIawxfa = await TetherTokenc0peDf3.deprecate.call(addressX0vgevv, {from: accounts[1]});

		assert.equal(uintBeW8RyQ, BigInt("0"))
		assert.equal(uintPbLrfh9, BigInt("1198"))
		await expect(TetherTokenc0peDf3.deprecate.call(addressX0vgevv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintNGtexN = BigInt("157")
		const stringgVzng8l = "lJSFuWJ3G0TAFfIT3uQOxQSml3Wwxd9quK5"
		const stringvyr4JMi = "2ostSnHbQomMhdoMdCmJQ86rFz9gk6Ko9Y6lPPVnf4cIBRUDNwhojct8ckKLSlno45uin20k"
		const uintLxW4RBk = BigInt("375")
		const TetherTokenUypBTgJ = await TetherToken.new(uintNGtexN, stringgVzng8l, stringvyr4JMi, uintLxW4RBk, {from: accounts[2]});
		const uintskXJ35t = BigInt("1672")
		const addressqGiPzas = accounts[3]
		const uintV4k1Vc = BigInt("1191")
		const addressbRRbtCM = accounts[4]
		const addressNmltdUi = accounts[5]
		const addressImCbW82 = accounts[0]
		const addresseSB8U55 = accounts[3]
		const addressFKDIyVz = accounts[5]
		const uintObHQSdx = BigInt("10")
		const addressxeWNsun = await TetherTokenUypBTgJ.approve.call(addressqGiPzas, uintskXJ35t, {from: accounts[5]});
//		const addressc1YOVdN = await TetherTokenUypBTgJ.transferFrom.call(addressNmltdUi, addressbRRbtCM, uintV4k1Vc, {from: accounts[3]});
//		const address1mTNGJ = await TetherTokenUypBTgJ.deprecate.call(addressImCbW82, {from: accounts[5]});
//		const uintV4sa5uE = await TetherTokenUypBTgJ.allowance.call(addressFKDIyVz, addresseSB8U55, {from: accounts[3]});
//		const uintbvWlWf = await TetherTokenUypBTgJ.redeem.call(uintObHQSdx, {from: accounts[0]});

		await expect(TetherTokenUypBTgJ.transferFrom.call(addressNmltdUi, addressbRRbtCM, uintV4k1Vc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintqhRUHDQ = BigInt("1361")
		const stringVBlTbqN = "hlHgNwJT4oG"
		const stringcmNM0Qe = "M2GaQ"
		const uintkECkyjj = BigInt("266")
		const TetherTokenbK7wos6 = await TetherToken.new(uintqhRUHDQ, stringVBlTbqN, stringcmNM0Qe, uintkECkyjj, {from: accounts[4]});
		const addresscHkQJI = accounts[3]
		const addressuNKNXZU = accounts[3]
		const addressh32oXFE = accounts[4]
		const uintW1B6xp = BigInt("46")
		const uintBDDRe4s = BigInt("2022")
		const uintAVebR0q = BigInt("1574")
		const addressg4WOjRB = accounts[3]
		const uintG0Ys7vM = await TetherTokenbK7wos6.balanceOf.call(addresscHkQJI, {from: accounts[1]});
		const uintpFhgDMU = await TetherTokenbK7wos6.allowance.call(addressh32oXFE, addressuNKNXZU, {from: accounts[4]});
		const uintEKD3O1u = await TetherTokenbK7wos6.redeem.call(uintW1B6xp, {from: accounts[4]});
//		const uintlNDLOJj = await TetherTokenbK7wos6.issue.call(uintBDDRe4s, {from: accounts[1]});
//		const addresshdfDHOX = await TetherTokenbK7wos6.approve.call(addressg4WOjRB, uintAVebR0q, {from: accounts[2]});

		assert.equal(uintG0Ys7vM, BigInt("0"))
		assert.equal(uintpFhgDMU, BigInt("0"))
		await expect(TetherTokenbK7wos6.issue.call(uintBDDRe4s, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintGWnwasj = BigInt("65")
		const stringDgMlRt = "CLrvQfEla3J8AB31EtLKMGWxLN0JHRFNiezCTqokO"
		const stringIMG6Sm1 = "AVWJus"
		const uintqvEK416 = BigInt("1664")
		const TetherTokenRCFmugh = await TetherToken.new(uintGWnwasj, stringDgMlRt, stringIMG6Sm1, uintqvEK416, {from: "0x0000000000000000000000000000000000000001"});
		const addresscs98pGA = accounts[4]
		const addressOiNd9PO = accounts[5]
		const uintkKZBSu3 = BigInt("1860")
		const addressfzfvY34 = await TetherTokenRCFmugh.deprecate.call(addresscs98pGA, {from: accounts[4]});
		const uinte6vBLnw = await TetherTokenRCFmugh.balanceOf.call(addressOiNd9PO, {from: accounts[0]});
		const uintJlA0P2k = await TetherTokenRCFmugh.redeem.call(uintkKZBSu3, {from: accounts[5]});
	});

	it('test for TetherToken', async () => {
		const uintz3SBja = BigInt("1361")
		const stringVBlTbqN = "hlHgNwJT4oG"
		const stringcmNM0Qe = "M2GaQ"
		const uintetenFtp = BigInt("266")
		const TetherTokenbK7wos6 = await TetherToken.new(uintz3SBja, stringVBlTbqN, stringcmNM0Qe, uintetenFtp, {from: accounts[4]});
		const addressAq0iBT = accounts[3]
		const addressrIl9IF6 = accounts[3]
		const addressfSQG2NP = accounts[4]
		const uintqPbjJvw = BigInt("39")
		const uintzkgf5Jl = BigInt("1226")
		const uintMxsXj64 = BigInt("46")
		const uintMClvMwA = BigInt("2022")
		const uintOsoL2NL = BigInt("1574")
		const address39ucPM = accounts[3]
		const uintG0Ys7vM = await TetherTokenbK7wos6.balanceOf.call(addressAq0iBT, {from: accounts[1]});
		const uintpFhgDMU = await TetherTokenbK7wos6.allowance.call(addressfSQG2NP, addressrIl9IF6, {from: accounts[4]});
		const uintEKD3O1u = await TetherTokenbK7wos6.redeem.call(uintqPbjJvw, {from: accounts[4]});
//		const uintqmoy3p = await TetherTokenbK7wos6.setParams.call(uintMxsXj64, uintzkgf5Jl, {from: accounts[1]});
//		const uintkh4Rjid = await TetherTokenbK7wos6.totalSupply.call({from: accounts[5]});
//		const uintlNDLOJj = await TetherTokenbK7wos6.issue.call(uintMClvMwA, {from: accounts[1]});
//		const addresshdfDHOX = await TetherTokenbK7wos6.approve.call(address39ucPM, uintOsoL2NL, {from: accounts[2]});

		assert.equal(uintG0Ys7vM, BigInt("0"))
		assert.equal(uintpFhgDMU, BigInt("0"))
		await expect(TetherTokenbK7wos6.setParams.call(uintMxsXj64, uintzkgf5Jl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintd6juYu4 = BigInt("1361")
		const stringVBlTbqN = "hlHgNwJT4oG"
		const stringcmNM0Qe = "M2GaQ"
		const uintVwQojlD = BigInt("266")
		const TetherTokenbK7wos6 = await TetherToken.new(uintd6juYu4, stringVBlTbqN, stringcmNM0Qe, uintVwQojlD, {from: accounts[4]});
		const addressM22J2K6 = accounts[3]
		const addresson72sCO = accounts[3]
		const addressdhIZwpc = accounts[4]
		const uintnwm5k2e = BigInt("39")
		const addresszgPrx3V = accounts[5]
		const uintca4brGi = BigInt("1226")
		const uintrFyFJby = BigInt("46")
		const uintbHYVUTc = BigInt("1574")
		const addressAU62m52 = accounts[3]
		const uintG0Ys7vM = await TetherTokenbK7wos6.balanceOf.call(addressM22J2K6, {from: accounts[1]});
		const uintpFhgDMU = await TetherTokenbK7wos6.allowance.call(addressdhIZwpc, addresson72sCO, {from: accounts[4]});
		const uintEKD3O1u = await TetherTokenbK7wos6.redeem.call(uintnwm5k2e, {from: accounts[4]});
		const addressLsYXygb = await TetherTokenbK7wos6.deprecate.call(addresszgPrx3V, {from: accounts[4]});
//		const uintqmoy3p = await TetherTokenbK7wos6.setParams.call(uintrFyFJby, uintca4brGi, {from: accounts[1]});
//		const uintkh4Rjid = await TetherTokenbK7wos6.totalSupply.call({from: accounts[5]});
//		const addresshdfDHOX = await TetherTokenbK7wos6.approve.call(addressAU62m52, uintbHYVUTc, {from: accounts[2]});

		assert.equal(uintG0Ys7vM, BigInt("0"))
		assert.equal(uintpFhgDMU, BigInt("0"))
		await expect(TetherTokenbK7wos6.setParams.call(uintrFyFJby, uintca4brGi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintp4HX4qw = BigInt("1581")
		const stringmY1m0XQ = "M5"
		const stringjCZXcHe = "Tqmzos33PBMaRw7VA5yHp6"
		const uintYvE0KxW = BigInt("629")
		const TetherTokenEvMz8Dg = await TetherToken.new(uintp4HX4qw, stringmY1m0XQ, stringjCZXcHe, uintYvE0KxW, {from: accounts[3]});
		const uintFNYHu2v = BigInt("1721")
		const addressyoIFADG = accounts[4]
		const uintMhGyn8 = BigInt("803")
		const addressQ5EvrkR = accounts[5]
		const addressj4oYIFu = accounts[4]
		const uintgPksglE = BigInt("873")
		const uintiXANzMh = BigInt("272")
		const addressgYMvPoW = accounts[1]
		const addressDnPyhfT = await TetherTokenEvMz8Dg.approve.call(addressyoIFADG, uintFNYHu2v, {from: accounts[1]});
//		const addressQaB3kKI = await TetherTokenEvMz8Dg.transfer.call(addressQ5EvrkR, uintMhGyn8, {from: accounts[2]});
//		const addresslwHGKag = await TetherTokenEvMz8Dg.deprecate.call(addressj4oYIFu, {from: accounts[4]});
//		const uintIp3vNJa = await TetherTokenEvMz8Dg.issue.call(uintgPksglE, {from: accounts[4]});
//		const addressPBD80mt = await TetherTokenEvMz8Dg.approve.call(addressgYMvPoW, uintiXANzMh, {from: accounts[2]});

		await expect(TetherTokenEvMz8Dg.transfer.call(addressQ5EvrkR, uintMhGyn8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintMLFRReQ = BigInt("650")
		const stringF5AtZJA = "Olyl71C07vxZy"
		const stringlKgvDTi = "WYwRLi9yJozKe4g94YKAGOBo55KnutRiKuBxIUtNbxObaCjViCC"
		const uintI0sl0Z6 = BigInt("363")
		const TetherTokenpEg75mH = await TetherToken.new(uintMLFRReQ, stringF5AtZJA, stringlKgvDTi, uintI0sl0Z6, {from: accounts[1]});
		const uintZHD07Nu = BigInt("1581")
		const uintVWxDGgv = BigInt("1645")
		const uintk86J35w = BigInt("15")
		const addressAQDr1Ey = accounts[2]
		const addressTpgKbDE = accounts[4]
		const addressCuCZqB = accounts[5]
		const addressK5uT9eZ = accounts[0]
		const uintijBsc1b = await TetherTokenpEg75mH.issue.call(uintZHD07Nu, {from: accounts[1]});
//		const uintGob448d = await TetherTokenpEg75mH.setParams.call(uintk86J35w, uintVWxDGgv, {from: accounts[0]});
//		const uintsEOEGpz = await TetherTokenpEg75mH.allowance.call(addressTpgKbDE, addressAQDr1Ey, {from: accounts[5]});
//		const uintQchjbm = await TetherTokenpEg75mH.allowance.call(addressK5uT9eZ, addressCuCZqB, {from: accounts[5]});

		await expect(TetherTokenpEg75mH.setParams.call(uintk86J35w, uintVWxDGgv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uinttLYSdK1 = BigInt("1198")
		const stringFTBRUqf = "s3VgA99HYqgvk2sVYWxfOxTlp1C3pYYrSs8sE3RkKsPoUkbr85HnD97Y94GQ92JE8VS20utLx"
		const stringUz6WZ6 = "1bzDY6QAoGj"
		const uintUIURHME = BigInt("984")
		const TetherTokenc0peDf3 = await TetherToken.new(uinttLYSdK1, stringFTBRUqf, stringUz6WZ6, uintUIURHME, {from: accounts[0]});
		const addressP5coXew = "0x00000000000000000000000000000000000000-1"
		const uintUb7z1gc = BigInt("625")
		const addresszGASgNO = accounts[4]
		const addressPEsXWY1 = accounts[0]
//		const uintBeW8RyQ = await TetherTokenc0peDf3.balanceOf.call(addressP5coXew, {from: accounts[3]});
//		const addressfezjaTa = await TetherTokenc0peDf3.approve.call(addresszGASgNO, uintUb7z1gc, {from: accounts[2]});
//		const addressE7KtZmD = await TetherTokenc0peDf3.deprecate.call(addressPEsXWY1, {from: accounts[0]});
//		const uintvuGt5ac = await TetherTokenc0peDf3.totalSupply.call({from: accounts[1]});

		await expect(TetherTokenc0peDf3.balanceOf.call(addressP5coXew, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintL5wliOy = BigInt("1086")
		const stringj0BB6Q = "l6RtkmY1gcGyZgAKD1jIqfYlXgcEf8iw14peHfDwckQzXb8Q1TAZc2"
		const stringKLJKwdv = "MkNt26098JsDHPo8TpgGfWgF9P7kC6JvaPaJjQXWYOma7q"
		const uintGUmqAvL = BigInt("1663")
		const TetherTokenfO5NSzH = await TetherToken.new(uintL5wliOy, stringj0BB6Q, stringKLJKwdv, uintGUmqAvL, {from: accounts[5]});
		const uintIZz3kd = BigInt("1921")
		const uintAzR8g67 = BigInt("1890")
		const uintArUn0Ot = BigInt("981")
		const uintRQuxGD8 = BigInt("689")
		const addressbZwlOyW = accounts[5]
		const addressDqoIqIx = "0x0000000000000000000000000000000000000001"
		const addressoeHhw7J = accounts[3]
		const uintJOKmcbv = BigInt("1705")
//		const uintCzDSrK2 = await TetherTokenfO5NSzH.setParams.call(uintAzR8g67, uintIZz3kd, {from: accounts[5]});
//		const uintCpNpdQX = await TetherTokenfO5NSzH.redeem.call(uintArUn0Ot, {from: accounts[4]});
//		const addressVagMETA = await TetherTokenfO5NSzH.approve.call(addressbZwlOyW, uintRQuxGD8, {from: "0x0000000000000000000000000000000000000001"});
//		const uintWp2S8dH = await TetherTokenfO5NSzH.allowance.call(addressoeHhw7J, addressDqoIqIx, {from: accounts[1]});
//		const uintDuvehdW = await TetherTokenfO5NSzH.redeem.call(uintJOKmcbv, {from: accounts[2]});

		await expect(TetherTokenfO5NSzH.setParams.call(uintAzR8g67, uintIZz3kd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})