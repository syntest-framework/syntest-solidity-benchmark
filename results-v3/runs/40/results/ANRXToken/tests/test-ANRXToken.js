const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintV4cshQ5 = BigInt("1003")
		const stringOhIpwG = "lwfEF5NpQgkfPz1AJyq15cp2DkxhcR5xFuwK4Cd92lrHwTvydg3JDOxarJPAdqMbboAtUiin"
		const stringoKaGFJB = "4RSCtPQQNfaEnGbM1apBEPXd9OqqnKb"
		const uintW603vds = BigInt("702")
		const ANRXTokenKkbZlEr = await ANRXToken.new(uintV4cshQ5, stringOhIpwG, stringoKaGFJB, uintW603vds, {from: accounts[3]});
		const addresshC1gPM = accounts[1]
		const uintcqECsLp = BigInt("1391")
		const uintMP4RRCO = BigInt("248")
		const uintaOwjUju = BigInt("792")
		const uint901nVi = await ANRXTokenKkbZlEr.totalSupply.call({from: accounts[3]});
		const uintcuMZ00O = await ANRXTokenKkbZlEr.totalSupply.call({from: accounts[4]});
		const uintp9PibqA = await ANRXTokenKkbZlEr.balanceOf.call(addresshC1gPM, {from: accounts[4]});
		const uintJAdY9M = await ANRXTokenKkbZlEr.setParams.call(uintMP4RRCO, uintcqECsLp, {from: accounts[4]});
		const uintbqnXhZH = await ANRXTokenKkbZlEr.redeem.call(uintaOwjUju, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint901nVi, BigInt("1003"))
		assert.equal(uintcuMZ00O, BigInt("1003"))
		assert.equal(uintp9PibqA, BigInt("0"))
		await expect(ANRXTokenKkbZlEr.setParams.call(uintMP4RRCO, uintcqECsLp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintGUCEDex = BigInt("204")
		const stringx6y3LPv = "acaMUYBnHCmgijm2DcBuRuMn3JhqhTEAlzsANVj7fHxq4pf8mmqf1TwLxdm6ga7A3DIUEDkRcD4n98O1RPcSw44LUz9JM"
		const stringVPrMG68 = "tmd1czyVG5A8MENvALBcg8EBiufooMrBQgtPC42GhYUdb6lt6enPTW09XdfQG3episBPcnycqpgcChsNY1SCaTc0B5rZhA"
		const uintaodzUM8 = BigInt("228")
		const ANRXTokenQje37h = await ANRXToken.new(uintGUCEDex, stringx6y3LPv, stringVPrMG68, uintaodzUM8, {from: "0x0000000000000000000000000000000000000001"});
		const uintK5JjzSn = BigInt("486")
		const uintqx0FyER = await ANRXTokenQje37h.issue.call(uintK5JjzSn, {from: accounts[2]});
		const uintQXus41B = await ANRXTokenQje37h.totalSupply.call({from: accounts[0]});
	});

	it('test for ANRXToken', async () => {
		const uintpfqja9W = BigInt("317")
		const stringw468mxN = "wQGrPjs2koztpRxSwhzs7Dlp1mhsp8YXWuRIAfRQH8yEfqEBMXNfwnE986R9z7PPhtfQGRUieMWeuphcT1JBhcKinCQuxmvw"
		const stringXgDgT0 = "suCwvDD5xuLb2cTaXp1VXisLTDmhsFmGQAq7R4LsBs8pRjRT8HsVXM4jhEOi"
		const uintS7xRvcp = BigInt("78")
		const ANRXTokenQV6p7RL = await ANRXToken.new(uintpfqja9W, stringw468mxN, stringXgDgT0, uintS7xRvcp, {from: accounts[4]});
		const uintdUkJEPq = BigInt("2023")
		const addressNCjf6fX = accounts[2]
		const uintWdRlhP6 = BigInt("913")
		const uintQj7F1uL = BigInt("25")
		const uintxk6cb97 = BigInt("400")
		const uintZU9BNBA = BigInt("443")
		const boolZroi4nG = await ANRXTokenQV6p7RL.approve.call(addressNCjf6fX, uintdUkJEPq, {from: accounts[4]});
		const uintkd4FneB = await ANRXTokenQV6p7RL.setParams.call(uintQj7F1uL, uintWdRlhP6, {from: accounts[0]});
		const uintD5ve6TX = await ANRXTokenQV6p7RL.setParams.call(uintZU9BNBA, uintxk6cb97, {from: accounts[0]});

		assert.equal(boolZroi4nG, true)
		await expect(ANRXTokenQV6p7RL.setParams.call(uintQj7F1uL, uintWdRlhP6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintp23OyW = BigInt("40")
		const stringZjgyecz = "aYEfYvrxkIwMQ0wTGcBTzKQ4NO3ufTympvu1L5PLfNKB9pX8OtHhlMGlysft3OdXwCyOyJrDH24cM2pUiPe9Gvm"
		const stringWgs5lFN = "V2E5uK1DKPP6JoGCEnagaosWeSklvXa39jmKReplwGYyH8ke6Ov47zFhCjM4qBtdnk23rfK1PnH"
		const uintarEFph2 = BigInt("40")
		const ANRXTokenj1FUzje = await ANRXToken.new(uintp23OyW, stringZjgyecz, stringWgs5lFN, uintarEFph2, {from: accounts[2]});
		const uintl8sSo5r = BigInt("352")
		const addressht2wKvE = accounts[0]
		const addressKUedmJC = accounts[1]
		const addressPBhrl7V = accounts[3]
		const addressUxeasuL = accounts[4]
		const uintpQNbuH6 = await ANRXTokenj1FUzje.totalSupply.call({from: accounts[0]});
		const boolfgVkJ4 = await ANRXTokenj1FUzje.transferFrom.call(addressKUedmJC, addressht2wKvE, uintl8sSo5r, {from: accounts[4]});
		const uintawMjJUa = await ANRXTokenj1FUzje.balanceOf.call(addressPBhrl7V, {from: accounts[0]});
		const uintOVUF3UD = await ANRXTokenj1FUzje.balanceOf.call(addressUxeasuL, {from: accounts[3]});

		assert.equal(uintpQNbuH6, BigInt("40"))
		await expect(ANRXTokenj1FUzje.transferFrom.call(addressKUedmJC, addressht2wKvE, uintl8sSo5r, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintBrUFMjN = BigInt("2014")
		const stringgX0Vroj = "8MLUBsiNSvMwHNzRx"
		const stringvldwGGj = "URrjDqtP2OFJHbqLdbBV6E8Pg141NA83pDHy3rYyANUvtGgW"
		const uintyQjjiEh = BigInt("1660")
		const ANRXTokenmZJp4Zo = await ANRXToken.new(uintBrUFMjN, stringgX0Vroj, stringvldwGGj, uintyQjjiEh, {from: accounts[3]});
		const uintvT3gfCs = BigInt("1266")
		const addressj7nHP8K = accounts[5]
		const addressoVgilL = accounts[4]
		const uintQEi4gRF = BigInt("185")
		const addressD6tF5N3 = accounts[1]
		const addressFdUxyZK = accounts[1]
		const addressHb0F3ay = accounts[3]
		const boollnaEhb = await ANRXTokenmZJp4Zo.approve.call(addressj7nHP8K, uintvT3gfCs, {from: "0x0000000000000000000000000000000000000001"});
		const uintrsOAEd = await ANRXTokenmZJp4Zo.balanceOf.call(addressoVgilL, {from: accounts[0]});
		const boolffH0Ka = await ANRXTokenmZJp4Zo.approve.call(addressD6tF5N3, uintQEi4gRF, {from: accounts[4]});
		const uintmwo9jU2 = await ANRXTokenmZJp4Zo.allowance.call(addressHb0F3ay, addressFdUxyZK, {from: accounts[3]});

		assert.equal(boolffH0Ka, true)
		assert.equal(boollnaEhb, true)
		assert.equal(uintmwo9jU2, BigInt("0"))
		assert.equal(uintrsOAEd, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintDBpH9Fp = BigInt("1121")
		const stringIsjAWMn = "EuUzoxHVXfCiaRYUtA9AePDZWVssDM1vtAnAezLnVGa5F7jNBzv40PExbAEXOE2ZS9sV3fIQPdnHSlIh9wK7L1g5CDOpm7jV"
		const stringenK6s2G = "A2gHGtgYJrFvnz9qkRj3weL5cm2NppAcy7"
		const uintFwRifB = BigInt("1018")
		const ANRXTokenPjfcKq5 = await ANRXToken.new(uintDBpH9Fp, stringIsjAWMn, stringenK6s2G, uintFwRifB, {from: accounts[0]});
		const uintgc4hdR8 = BigInt("892")
		const uintMyfLEIl = BigInt("244")
		const uintU0AOm5T = BigInt("1777")
		const addresstPoeY5x = accounts[2]
		const addresseZyL0Op = accounts[2]
		const uintCeoKVjQ = BigInt("126")
		const uintT3Kz2E = BigInt("1189")
		const uintkzDwHMs = BigInt("980")
		const uintU8iLIu6 = await ANRXTokenPjfcKq5.setParams.call(uintMyfLEIl, uintgc4hdR8, {from: accounts[0]});
		const boolaiTH1D = await ANRXTokenPjfcKq5.transferFrom.call(addresseZyL0Op, addresstPoeY5x, uintU0AOm5T, {from: "0x0000000000000000000000000000000000000001"});
		const uintjYgWASk = await ANRXTokenPjfcKq5.issue.call(uintCeoKVjQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintGREirLt = await ANRXTokenPjfcKq5.issue.call(uintT3Kz2E, {from: accounts[4]});
		const uintDm8J7EJ = await ANRXTokenPjfcKq5.issue.call(uintkzDwHMs, {from: accounts[3]});

		await expect(ANRXTokenPjfcKq5.setParams.call(uintMyfLEIl, uintgc4hdR8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintAKYH9sw = BigInt("2014")
		const stringgX0Vroj = "8MLUBsiNSvMwHNzRx"
		const stringvldwGGj = "URrjDqtP2OFJHbqLdbBV6E8Pg141NA83pDHy3rYyANUvtGgW"
		const uintRoKANt0 = BigInt("1660")
		const ANRXTokenmZJp4Zo = await ANRXToken.new(uintAKYH9sw, stringgX0Vroj, stringvldwGGj, uintRoKANt0, {from: accounts[3]});
		const uintAMp6VKR = BigInt("1266")
		const addressWSuGGlj = accounts[5]
		const address44zUQN = accounts[5]
		const uint7CSpgu = BigInt("1926")
		const uintoNcyMlx = BigInt("185")
		const addressuNvIIkP = accounts[1]
		const uintY2mZZI = BigInt("835")
		const addressCwORoIw = accounts[4]
		const addresscVwJV9P = accounts[3]
		const uintCm17PeK = BigInt("883")
		const addresstP0mpPO = accounts[1]
		const addressnMGmK7C = accounts[3]
		const boollnaEhb = await ANRXTokenmZJp4Zo.approve.call(addressWSuGGlj, uintAMp6VKR, {from: "0x0000000000000000000000000000000000000001"});
		const uintrsOAEd = await ANRXTokenmZJp4Zo.balanceOf.call(address44zUQN, {from: accounts[0]});
		const uintLZZaFwc = await ANRXTokenmZJp4Zo.redeem.call(uint7CSpgu, {from: accounts[3]});
		const boolffH0Ka = await ANRXTokenmZJp4Zo.approve.call(addressuNvIIkP, uintoNcyMlx, {from: accounts[4]});
		const boolP6wUcDp = await ANRXTokenmZJp4Zo.transferFrom.call(addresscVwJV9P, addressCwORoIw, uintY2mZZI, {from: "0x0000000000000000000000000000000000000001"});
		const uintSvjthDC = await ANRXTokenmZJp4Zo.redeem.call(uintCm17PeK, {from: accounts[4]});
		const uintmwo9jU2 = await ANRXTokenmZJp4Zo.allowance.call(addressnMGmK7C, addresstP0mpPO, {from: accounts[3]});

		assert.equal(boolffH0Ka, true)
		assert.equal(boollnaEhb, true)
		assert.equal(uintrsOAEd, BigInt("0"))
		await expect(ANRXTokenmZJp4Zo.transferFrom.call(addresscVwJV9P, addressCwORoIw, uintY2mZZI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintdoWNer = BigInt("40")
		const stringZjgyecz = "aYEfYvrxkIwMQ0wTGcBTzKQ4NO3ufTympvu1L5PLfNKB9pX8OtHhlMGlysft3OdXwCyOyJrDH24cM2pUiPe9Gvm"
		const stringWgs5lFN = "V2E5uK1DKPP6JoGCEnagaosWeSklvXa39jmKReplwGYyH8ke6Ov47zFhCjM4qBtdnk23rfK1PnH"
		const uintF27hfWE = BigInt("40")
		const ANRXTokenj1FUzje = await ANRXToken.new(uintdoWNer, stringZjgyecz, stringWgs5lFN, uintF27hfWE, {from: accounts[2]});
		const uintcMlLfys = BigInt("1636")
		const addressn3ePoKQ = "0x0000000000000000000000000000000000000001"
		const uintaCqnSl1 = BigInt("352")
		const addressL5ZhKdK = accounts[1]
		const address8zn74W = accounts[1]
		const addressjqBXQ1Q = accounts[3]
		const addressKN8ILJ8 = accounts[5]
		const uintgeMDh2 = BigInt("742")
		const addressiWUt9er = accounts[2]
		const uintpQNbuH6 = await ANRXTokenj1FUzje.totalSupply.call({from: accounts[0]});
		const boolLHicwtu = await ANRXTokenj1FUzje.transfer.call(addressn3ePoKQ, uintcMlLfys, {from: accounts[3]});
		const boolfgVkJ4 = await ANRXTokenj1FUzje.transferFrom.call(address8zn74W, addressL5ZhKdK, uintaCqnSl1, {from: accounts[4]});
		const uintawMjJUa = await ANRXTokenj1FUzje.balanceOf.call(addressjqBXQ1Q, {from: accounts[0]});
		const uintOVUF3UD = await ANRXTokenj1FUzje.balanceOf.call(addressKN8ILJ8, {from: accounts[3]});
		const boolkhE51iu = await ANRXTokenj1FUzje.transfer.call(addressiWUt9er, uintgeMDh2, {from: accounts[1]});

		assert.equal(uintpQNbuH6, BigInt("40"))
		await expect(ANRXTokenj1FUzje.transfer.call(addressn3ePoKQ, uintcMlLfys, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintI7g2CvQ = BigInt("2014")
		const stringgX0Vroj = "8MLUBsiNSvMwHNzRx"
		const stringvldwGGj = "URrjDqtP2OFJHbqLdbBV6E8Pg141NA83pDHy3rYyANUvtGgW"
		const uintNNXbJ1B = BigInt("1660")
		const ANRXTokenmZJp4Zo = await ANRXToken.new(uintI7g2CvQ, stringgX0Vroj, stringvldwGGj, uintNNXbJ1B, {from: accounts[3]});
		const uintiJyElHY = BigInt("1266")
		const addressFzGiQbz = accounts[5]
		const address8BBdsX = accounts[2]
		const addresscyNRW9p = accounts[5]
		const uintL550dZD = BigInt("1682")
		const addressnygtsBz = accounts[2]
		const uintL3uKF6o = BigInt("185")
		const addressQMhD7pi = accounts[1]
		const uinteM9Ddi = BigInt("835")
		const addressFZYkvrn = accounts[4]
		const addressEvIR43r = accounts[3]
		const uintjWYkVR = BigInt("883")
		const addressfZJO2fH = accounts[1]
		const addressvaJ7hj = accounts[3]
		const boollnaEhb = await ANRXTokenmZJp4Zo.approve.call(addressFzGiQbz, uintiJyElHY, {from: "0x0000000000000000000000000000000000000001"});
		const addressHroYrUE = await ANRXTokenmZJp4Zo.deprecate.call(address8BBdsX, {from: accounts[3]});
		const uintrsOAEd = await ANRXTokenmZJp4Zo.balanceOf.call(addresscyNRW9p, {from: accounts[0]});
		const uintLZZaFwc = await ANRXTokenmZJp4Zo.redeem.call(uintL550dZD, {from: accounts[3]});
		const addressWtQRRox = await ANRXTokenmZJp4Zo.deprecate.call(addressnygtsBz, {from: accounts[4]});
		const boolffH0Ka = await ANRXTokenmZJp4Zo.approve.call(addressQMhD7pi, uintL3uKF6o, {from: accounts[4]});
		const boolP6wUcDp = await ANRXTokenmZJp4Zo.transferFrom.call(addressEvIR43r, addressFZYkvrn, uinteM9Ddi, {from: "0x0000000000000000000000000000000000000001"});
		const uintSvjthDC = await ANRXTokenmZJp4Zo.redeem.call(uintjWYkVR, {from: accounts[4]});
		const uintmwo9jU2 = await ANRXTokenmZJp4Zo.allowance.call(addressvaJ7hj, addressfZJO2fH, {from: accounts[3]});

		assert.equal(boollnaEhb, true)
		assert.equal(uintrsOAEd, BigInt("0"))
		await expect(ANRXTokenmZJp4Zo.deprecate.call(addressnygtsBz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintqIwi9br = BigInt("1926")
		const stringBXLsG7h = "qLD9Lk3qRZNVlk5DvYCMoo5MxZbVm"
		const stringHEhlUc5 = "mXdIJSDF12QbFnDEROuitvzifJ"
		const uint3LEInY = BigInt("1279")
		const ANRXTokenfZvkTl = await ANRXToken.new(uintqIwi9br, stringBXLsG7h, stringHEhlUc5, uint3LEInY, {from: accounts[1]});
		const addressJ9A3Ur6 = accounts[2]
		const uintgOL7Txt = BigInt("1545")
		const addressRKRAdGL = accounts[0]
		const addresskGPGg4l = accounts[2]
		const uintzxmUDL = await ANRXTokenfZvkTl.balanceOf.call(addressJ9A3Ur6, {from: accounts[4]});
		const uintOr0VQS7 = await ANRXTokenfZvkTl.issue.call(uintgOL7Txt, {from: accounts[1]});
		const uintu8I1NdU = await ANRXTokenfZvkTl.allowance.call(addresskGPGg4l, addressRKRAdGL, {from: accounts[2]});

		assert.equal(uintu8I1NdU, BigInt("0"))
		assert.equal(uintzxmUDL, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintWgU3ak = BigInt("1121")
		const stringIsjAWMn = "EuUzoxHVXfCiaRYUtA9AePDZWVssDM1vtAnAezLnVGa5F7jNBzv40PExbAEXOE2ZS9sV3fIQPdnHSlIh9wK7L1g5CDOpm7jV"
		const stringenK6s2G = "A2gHGtgYJrFvnz9qkRj3weL5cm2NppAcy7"
		const uintaHVgmhW = BigInt("1018")
		const ANRXTokenPjfcKq5 = await ANRXToken.new(uintWgU3ak, stringIsjAWMn, stringenK6s2G, uintaHVgmhW, {from: accounts[0]});
		const uintvCZhrKB = BigInt("1603")
		const addresswJrzsd5 = "0x00000000000000000000000000000000000000-1"
		const addressdo3WGOl = accounts[0]
		const addressJUBXvbE = accounts[4]
		const addressKjh8Ai = accounts[4]
		const addressLvlmooo = accounts[4]
		const uintn1zUJpZ = BigInt("1975")
		const addresseOgdJTA = accounts[4]
		const addresspWFZaJh = accounts[6]
		const uint1f9ndf = BigInt("2037")
		const boolEPfpMs6 = await ANRXTokenPjfcKq5.approve.call(addresswJrzsd5, uintvCZhrKB, {from: accounts[4]});
		const uintgdyIw4 = await ANRXTokenPjfcKq5.allowance.call(addressJUBXvbE, addressdo3WGOl, {from: accounts[1]});
		const addresskMZSiq = await ANRXTokenPjfcKq5.deprecate.call(addressKjh8Ai, {from: accounts[0]});
		const uintHrt9kp6 = await ANRXTokenPjfcKq5.balanceOf.call(addressLvlmooo, {from: accounts[3]});
		const boolNs55ydb = await ANRXTokenPjfcKq5.transferFrom.call(addresspWFZaJh, addresseOgdJTA, uintn1zUJpZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintfJuawfb = await ANRXTokenPjfcKq5.issue.call(uint1f9ndf, {from: accounts[4]});

		await expect(ANRXTokenPjfcKq5.approve.call(addresswJrzsd5, uintvCZhrKB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})