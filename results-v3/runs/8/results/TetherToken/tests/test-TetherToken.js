const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintpylvTrU = BigInt("1743")
		const stringJU6XzC = "fFBdhWX8vPRoxXdrmqqhFAq3fxWLfrSnu6hMVswqs1BVqO"
		const string0TlBxN = "65qfGEj1C9KsAAM7NjvH2UBmVMLBiLcfH4AazXnB8b5KCcU22EdGpEMCswFeuSxwwEJ7jI6D2HwloKAfVHpXRca"
		const uintUB6jzhZ = BigInt("1529")
		const TetherTokena2Q9TJs = await TetherToken.new(uintpylvTrU, stringJU6XzC, string0TlBxN, uintUB6jzhZ, {from: accounts[0]});
		const uintUNtQmfX = BigInt("561")
		const uint9YaSeF = BigInt("1869")
		const uintJUNqvtS = BigInt("1310")
		const uintZTp4Qrf = await TetherTokena2Q9TJs.issue.call(uintUNtQmfX, {from: accounts[4]});
		const uintAOI7hvQ = await TetherTokena2Q9TJs.setParams.call(uintJUNqvtS, uint9YaSeF, {from: accounts[4]});

		await expect(TetherTokena2Q9TJs.issue.call(uintUNtQmfX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintXKqh53C = BigInt("342")
		const stringqJj9kJe = "2G4IAQyeRITRZx7sD8RwT3KQ3WtxlL3f24424VPhwDpGTLoiGskClfdGp2caiGF8tlLw8vpTvsch2Ay9fAqvXwLl"
		const stringscOyvzu = "4KQCB2gkeONyuD8A6EMMQM3qmNM7GZ7dJ8CGyCaUesYSG"
		const uintPWnaoFr = BigInt("589")
		const TetherTokenVBnUNPq = await TetherToken.new(uintXKqh53C, stringqJj9kJe, stringscOyvzu, uintPWnaoFr, {from: accounts[2]});
		const uintT25V77F = BigInt("39")
		const addresswiRVROE = accounts[3]
		const addressO1LjXc = accounts[4]
		const addressnDmZOZc = accounts[1]
		const uintF0xLQZ = await TetherTokenVBnUNPq.issue.call(uintT25V77F, {from: accounts[2]});
		const uintuKKDW0J = await TetherTokenVBnUNPq.allowance.call(addressO1LjXc, addresswiRVROE, {from: "0x0000000000000000000000000000000000000001"});
		const uintxpSXEOn = await TetherTokenVBnUNPq.balanceOf.call(addressnDmZOZc, {from: accounts[3]});

		assert.equal(uintuKKDW0J, BigInt("0"))
		assert.equal(uintxpSXEOn, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uintIU4sWq4 = BigInt("1895")
		const stringUtTSs6f = "CaINKamG0tO"
		const stringSpTmSS = "N5iD3ncuB3yEtw3OaB2O7penJD73ZtM5jdQpXXKq7qSlncpWeGSVGvotsEyOXGQFVQSaOTu7pch5XyKB1bfD8I"
		const uintpvSh2Ts = BigInt("1880")
		const TetherTokenwwXNVyg = await TetherToken.new(uintIU4sWq4, stringUtTSs6f, stringSpTmSS, uintpvSh2Ts, {from: accounts[5]});
		const uintPQrczb7 = BigInt("2016")
		const addressD9xWIq5 = accounts[0]
		const addressJaJcnnb = accounts[0]
		const addresslV0HI1X = accounts[4]
		const addressldl4djK = accounts[0]
		const uintCE8zSGO = BigInt("373")
		const uintl4fVqb = BigInt("333")
		const addressgQLAJrv = await TetherTokenwwXNVyg.transferFrom.call(addressJaJcnnb, addressD9xWIq5, uintPQrczb7, {from: accounts[4]});
		const uintIM0XuUg = await TetherTokenwwXNVyg.allowance.call(addressldl4djK, addresslV0HI1X, {from: accounts[0]});
		const uint8DCUSy = await TetherTokenwwXNVyg.setParams.call(uintl4fVqb, uintCE8zSGO, {from: accounts[3]});

		await expect(TetherTokenwwXNVyg.transferFrom.call(addressJaJcnnb, addressD9xWIq5, uintPQrczb7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintC2Yriz9 = BigInt("2044")
		const stringCHPuA4 = "lZ2LF7n81YDfGMUjBhQS4gjhpTLiwDeY7sPq6BvRoODLXfALRMC"
		const stringa3Uu5Wn = "Q1SwW233Of"
		const uintWKtBwUc = BigInt("1032")
		const TetherTokenpRSjZCP = await TetherToken.new(uintC2Yriz9, stringCHPuA4, stringa3Uu5Wn, uintWKtBwUc, {from: accounts[1]});
		const uintBWAYmj4 = BigInt("222")
		const uintKzEFSSS = BigInt("1914")
		const uintNKymqOV = await TetherTokenpRSjZCP.totalSupply.call({from: accounts[2]});
		const uintbuqh0dm = await TetherTokenpRSjZCP.issue.call(uintBWAYmj4, {from: accounts[1]});
		const uintCDBlQm6 = await TetherTokenpRSjZCP.issue.call(uintKzEFSSS, {from: accounts[3]});

		assert.equal(uintNKymqOV, BigInt("2044"))
		await expect(TetherTokenpRSjZCP.issue.call(uintKzEFSSS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintDbeC2ZS = BigInt("1604")
		const stringKCNBMxu = "xtaQMIJ6OhaoAmBly1Y2IVlHzVQLonERuW7ahP5mkQUi2jL2kXCio6uliQmvUZhgGz9LKa5LtlT1DhX"
		const stringn5BFa7k = "E2s8Au7BA9KoS"
		const uintDX98fvm = BigInt("462")
		const TetherTokenaMkst7F = await TetherToken.new(uintDbeC2ZS, stringKCNBMxu, stringn5BFa7k, uintDX98fvm, {from: accounts[1]});
		const addresseML5CX = accounts[3]
		const addresslBWu2ob = accounts[0]
		const addressX4Q4deP = accounts[4]
		const addressxfpqW4E = accounts[3]
		const uintg5DxD6 = BigInt("937")
		const addressNVYRHnW = accounts[4]
		const uintvNuPVI = await TetherTokenaMkst7F.totalSupply.call({from: accounts[4]});
		const uintFK8ii2C = await TetherTokenaMkst7F.allowance.call(addresslBWu2ob, addresseML5CX, {from: accounts[1]});
		const addressBZhgxkS = await TetherTokenaMkst7F.deprecate.call(addressX4Q4deP, {from: accounts[1]});
		const addresssxhTkPE = await TetherTokenaMkst7F.deprecate.call(addressxfpqW4E, {from: accounts[5]});
		const addresshoo6vrE = await TetherTokenaMkst7F.approve.call(addressNVYRHnW, uintg5DxD6, {from: accounts[4]});
		const uintMKCEQ0X = await TetherTokenaMkst7F.totalSupply.call({from: accounts[0]});

		assert.equal(uintFK8ii2C, BigInt("0"))
		assert.equal(uintvNuPVI, BigInt("1604"))
		await expect(TetherTokenaMkst7F.deprecate.call(addressxfpqW4E, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintejuPEUd = BigInt("259")
		const stringeCy0cXh = "2GfpVB9UV"
		const stringVD4qxwB = "TMnKBURwgDxMd1XYbstpWUj3Fd"
		const uintWWLktn3 = BigInt("555")
		const TetherTokenJdhoKyy = await TetherToken.new(uintejuPEUd, stringeCy0cXh, stringVD4qxwB, uintWWLktn3, {from: accounts[3]});
		const uintH6YjbUB = BigInt("1272")
		const addressb0OIFxl = accounts[4]
		const addressjoWa9Rt = accounts[3]
		const addressC6lwU5N = accounts[0]
		const uintr0TPpQ = BigInt("461")
		const addressIg6yOms = accounts[0]
		const addressLM6WvPU = accounts[3]
		const addressm2fgmqu = await TetherTokenJdhoKyy.approve.call(addressb0OIFxl, uintH6YjbUB, {from: accounts[2]});
		const addressMZSxH6r = await TetherTokenJdhoKyy.deprecate.call(addressjoWa9Rt, {from: accounts[2]});
		const addressGgHfoTw = await TetherTokenJdhoKyy.deprecate.call(addressC6lwU5N, {from: accounts[5]});
		const addresseMbdkDm = await TetherTokenJdhoKyy.transferFrom.call(addressLM6WvPU, addressIg6yOms, uintr0TPpQ, {from: accounts[0]});

		await expect(TetherTokenJdhoKyy.deprecate.call(addressjoWa9Rt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintLwtVuId = BigInt("1743")
		const stringJU6XzC = "fFBdhWX8vPRoxXdrmqqhFAq3fxWLfrSnu6hMVswqs1BVqO"
		const string0TlBxN = "65qfGEj1C9KsAAM7NjvH2UBmVMLBiLcfH4AazXnB8b5KCcU22EdGpEMCswFeuSxwwEJ7jI6D2HwloKAfVHpXRca"
		const uintTMyGHcM = BigInt("1529")
		const TetherTokena2Q9TJs = await TetherToken.new(uintLwtVuId, stringJU6XzC, string0TlBxN, uintTMyGHcM, {from: accounts[0]});
		const addressuZqamkr = accounts[2]
		const addressIeaaP9 = accounts[0]
		const uintsZmvboD = BigInt("1818")
		const uintWJlHTvF = BigInt("1723")
		const uintffuM2F2 = BigInt("1869")
		const uintOrKJe57 = BigInt("1310")
		const uintlzzGKfL = await TetherTokena2Q9TJs.allowance.call(addressIeaaP9, addressuZqamkr, {from: accounts[4]});
		const uintq4bodw7 = await TetherTokena2Q9TJs.setParams.call(uintWJlHTvF, uintsZmvboD, {from: accounts[2]});
		const uintAOI7hvQ = await TetherTokena2Q9TJs.setParams.call(uintOrKJe57, uintffuM2F2, {from: accounts[4]});

		assert.equal(uintlzzGKfL, BigInt("0"))
		await expect(TetherTokena2Q9TJs.setParams.call(uintWJlHTvF, uintsZmvboD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintqDQV7h7 = BigInt("1922")
		const stringtVcyL2o = "SwEc8Fplx5g1irkIQOIkaYwJCguBCg6"
		const stringXQfeSz7 = "1BdSZMlBeFnCqudKF8F2kIHD3llR"
		const uintxxWdeV9 = BigInt("1127")
		const TetherTokenZEpct93 = await TetherToken.new(uintqDQV7h7, stringtVcyL2o, stringXQfeSz7, uintxxWdeV9, {from: accounts[4]});
		const uintx1LHObo = BigInt("472")
		const addressfFQAoP4 = accounts[2]
		const addresswC3PZup = await TetherTokenZEpct93.transfer.call(addressfFQAoP4, uintx1LHObo, {from: accounts[2]});
		const uint45guFE = await TetherTokenZEpct93.totalSupply.call({from: accounts[1]});

		await expect(TetherTokenZEpct93.transfer.call(addressfFQAoP4, uintx1LHObo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintBz9sQ9v = BigInt("259")
		const stringeCy0cXh = "2GfpVB9UV"
		const stringVD4qxwB = "TMnKBURwgDxMd1XYbstpWUj3Fd"
		const uint40y84c = BigInt("555")
		const TetherTokenJdhoKyy = await TetherToken.new(uintBz9sQ9v, stringeCy0cXh, stringVD4qxwB, uint40y84c, {from: accounts[3]});
		const uintwykqk5 = BigInt("1272")
		const addressMpj3rBB = accounts[4]
		const uintPdmhYLf = BigInt("1438")
		const uintd0nY9bg = BigInt("414")
		const addressUvb5s5 = accounts[4]
		const addressDZDyovv = accounts[0]
		const uintqNXMxx5 = BigInt("461")
		const addressdOTuml = accounts[0]
		const addressmVwCPB = accounts[3]
		const addressm2fgmqu = await TetherTokenJdhoKyy.approve.call(addressMpj3rBB, uintwykqk5, {from: accounts[2]});
		const uintZWp8gR3 = await TetherTokenJdhoKyy.redeem.call(uintPdmhYLf, {from: accounts[0]});
		const uintkNvvNga = await TetherTokenJdhoKyy.redeem.call(uintd0nY9bg, {from: accounts[1]});
		const addressMZSxH6r = await TetherTokenJdhoKyy.deprecate.call(addressUvb5s5, {from: accounts[2]});
		const addressGgHfoTw = await TetherTokenJdhoKyy.deprecate.call(addressDZDyovv, {from: accounts[5]});
		const addresseMbdkDm = await TetherTokenJdhoKyy.transferFrom.call(addressmVwCPB, addressdOTuml, uintqNXMxx5, {from: accounts[0]});

		await expect(TetherTokenJdhoKyy.redeem.call(uintPdmhYLf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintNg9hTX5 = BigInt("1922")
		const stringtVcyL2o = "SwEc8Fplx5g1irkIQOIkaYwJCguBCg6"
		const stringXQfeSz7 = "1BdSZMlBeFnCqudKF8F2kIHD3llR"
		const uintZ6kmFDz = BigInt("1127")
		const TetherTokenZEpct93 = await TetherToken.new(uintNg9hTX5, stringtVcyL2o, stringXQfeSz7, uintZ6kmFDz, {from: accounts[4]});
		const uintgqKKGp1 = BigInt("947")
		const uintWNcNXXk = BigInt("479")
		const addressPAPKuG6 = accounts[2]
		const uintvYdm3P = await TetherTokenZEpct93.redeem.call(uintgqKKGp1, {from: accounts[4]});
		const addresswC3PZup = await TetherTokenZEpct93.transfer.call(addressPAPKuG6, uintWNcNXXk, {from: accounts[2]});
		const uint45guFE = await TetherTokenZEpct93.totalSupply.call({from: accounts[1]});

		await expect(TetherTokenZEpct93.transfer.call(addressPAPKuG6, uintWNcNXXk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintIM6X2Kq = BigInt("1173")
		const stringHbhwOQb = "eRvvUNfbIz3WQVkweWPPkf5xc5X8n41riIu8g5Hx"
		const stringXX7xbAC = ""
		const uintB34i0a7 = BigInt("1008")
		const TetherTokenLyckdNQ = await TetherToken.new(uintIM6X2Kq, stringHbhwOQb, stringXX7xbAC, uintB34i0a7, {from: "0x0000000000000000000000000000000000000001"});
		const uintweOHs2 = BigInt("1735")
		const uintWgLpbK7 = BigInt("185")
		const uintHZzd7c8 = BigInt("1328")
		const uintdqjSId = BigInt("20")
		const addressAcWgUR6 = "0x0000000000000000000000000000000000000001"
		const addresssktRcg = accounts[5]
		const addressOirhicW = accounts[0]
		const uintozusGLx = await TetherTokenLyckdNQ.setParams.call(uintWgLpbK7, uintweOHs2, {from: accounts[1]});
		const uintNJNgCRI = await TetherTokenLyckdNQ.issue.call(uintHZzd7c8, {from: accounts[2]});
		const addressFbQt49Q = await TetherTokenLyckdNQ.transfer.call(addressAcWgUR6, uintdqjSId, {from: accounts[0]});
		const uintl29lcTN = await TetherTokenLyckdNQ.allowance.call(addressOirhicW, addresssktRcg, {from: accounts[0]});
	});

	it('test for TetherToken', async () => {
		const uintA9ZoI5U = BigInt("1743")
		const stringJU6XzC = "fFBdhWX8vPRoxXdrmqqhFAq3fxWLfrSnu6hMVswqs1BVqO"
		const string0TlBxN = "65qfGEj1C9KsAAM7NjvH2UBmVMLBiLcfH4AazXnB8b5KCcU22EdGpEMCswFeuSxwwEJ7jI6D2HwloKAfVHpXRca"
		const uint0GijSd = BigInt("1529")
		const TetherTokena2Q9TJs = await TetherToken.new(uintA9ZoI5U, stringJU6XzC, string0TlBxN, uint0GijSd, {from: accounts[0]});
		const uintbMLTLft = BigInt("124")
		const uint7MPWEg = BigInt("613")
		const addressj5dc31l = accounts[0]
		const addressHO5MxHB = accounts[4]
		const addresspMewqOg = accounts[2]
		const uintTbfjQyi = BigInt("1950")
		const addressbbAg2lW = accounts[0]
		const addresskvtA4tg = "0x0000000000000000000000000000000000000001"
		const uintzmr71Zc = BigInt("766")
		const addressmLRKGI3 = accounts[2]
		const uintQNwog7o = BigInt("280")
		const addressLXrlHx0 = accounts[2]
		const addressK4k0imF = accounts[2]
		const addressMC7XZDB = accounts[3]
		const addressedGZgvk = accounts[1]
		const uintDoVjQBP = BigInt("530")
		const uintTK031Tl = await TetherTokena2Q9TJs.setParams.call(uint7MPWEg, uintbMLTLft, {from: accounts[0]});
		const uintbKwsoSp = await TetherTokena2Q9TJs.allowance.call(addressHO5MxHB, addressj5dc31l, {from: accounts[3]});
		const uintgTrMQv5 = await TetherTokena2Q9TJs.balanceOf.call(addresspMewqOg, {from: accounts[4]});
		const addressouCqVrQ = await TetherTokena2Q9TJs.transferFrom.call(addresskvtA4tg, addressbbAg2lW, uintTbfjQyi, {from: accounts[4]});
		const addresssOtiwYT = await TetherTokena2Q9TJs.approve.call(addressmLRKGI3, uintzmr71Zc, {from: accounts[0]});
		const addresseuT0MQa = await TetherTokena2Q9TJs.transferFrom.call(addressK4k0imF, addressLXrlHx0, uintQNwog7o, {from: accounts[5]});
		const uintGswmWUy = await TetherTokena2Q9TJs.allowance.call(addressedGZgvk, addressMC7XZDB, {from: accounts[4]});
		const uintZTp4Qrf = await TetherTokena2Q9TJs.issue.call(uintDoVjQBP, {from: accounts[4]});

		await expect(TetherTokena2Q9TJs.setParams.call(uint7MPWEg, uintbMLTLft, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintO4fdV3 = BigInt("1142")
		const stringSKz5EpA = "Oo0FOI8aBOGPx5zozTK1aXGOwTXCvBW0JtwUlo3cwOyFNiJrWh01XgNOEMwtn"
		const stringAaTME8v = "xAw32aw"
		const uintovudHzp = BigInt("543")
		const TetherTokenhBSIsQo = await TetherToken.new(uintO4fdV3, stringSKz5EpA, stringAaTME8v, uintovudHzp, {from: accounts[4]});
		const uintYqqNeJL = BigInt("1329")
		const uintVKBxduF = BigInt("7")
		const addressw2VjnYB = accounts[4]
		const addressZ7fqWIo = accounts[3]
		const uinteDt5W76 = await TetherTokenhBSIsQo.setParams.call(uintVKBxduF, uintYqqNeJL, {from: accounts[4]});
		const addresshSpHm3d = await TetherTokenhBSIsQo.deprecate.call(addressw2VjnYB, {from: accounts[3]});
		const addresse1LNKj = await TetherTokenhBSIsQo.deprecate.call(addressZ7fqWIo, {from: accounts[1]});

		await expect(TetherTokenhBSIsQo.setParams.call(uintVKBxduF, uintYqqNeJL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})