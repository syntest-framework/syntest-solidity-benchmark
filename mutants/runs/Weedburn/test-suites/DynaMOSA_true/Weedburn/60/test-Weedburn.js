const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const WeedburnHy8hfm3 = await Weedburn.new({from: accounts[0]});
		const uintW6J6QMq = BigInt("1913")
		const uintD1h3a7x = BigInt("1524")
		const addressxlDrnE = accounts[4]
		const addressDTFB0wu = "0x0000000000000000000000000000000000000001"
		const uint256NKqFB3y = await WeedburnHy8hfm3.totalSupply.call({from: accounts[5]});
		const uint256vcyL5XE = await WeedburnHy8hfm3.burn.call(uintW6J6QMq, {from: accounts[3]});
		const stringIAjG5UY = await WeedburnHy8hfm3.name.call({from: accounts[4]});
		const boolfWBoAya = await WeedburnHy8hfm3.transferFrom.call(addressDTFB0wu, addressxlDrnE, uintD1h3a7x, {from: accounts[0]});

		assert.equal(uint256NKqFB3y, BigInt("100000000000000000000000"))
		await expect(WeedburnHy8hfm3.burn.call(uintW6J6QMq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburny8JkWp = await Weedburn.new({from: accounts[0]});
		const uint8pDTydoi = await Weedburny8JkWp.decimals.call({from: accounts[3]});
		const uint8qN5NDEe = await Weedburny8JkWp.decimals.call({from: accounts[1]});
		const stringcRoiLwi = await Weedburny8JkWp.name.call({from: accounts[4]});

		assert.equal(stringcRoiLwi, "t.me/burnweed1")
		assert.equal(uint8pDTydoi, BigInt("18"))
		assert.equal(uint8qN5NDEe, BigInt("18"))
	});

	it('test for Weedburn', async () => {
		const WeedburnfSDvHKT = await Weedburn.new({from: accounts[4]});
		const uintKi6rE6s = BigInt("2004")
		const addressVsQSdP6 = accounts[2]
		const addressXKMVOCY = accounts[1]
		const uintgF0dJ9z = BigInt("364")
		const addresslKXnI7w = accounts[4]
		await WeedburnfSDvHKT.disableLimitMode.call({from: accounts[4]});
		const boolPFrwr1r = await WeedburnfSDvHKT.transferFrom.call(addressXKMVOCY, addressVsQSdP6, uintKi6rE6s, {from: accounts[2]});
		await WeedburnfSDvHKT.disableLimitMode.call({from: accounts[3]});
		const boolFu93vIh = await WeedburnfSDvHKT.increaseAllowance.call(addresslKXnI7w, uintgF0dJ9z, {from: accounts[2]});

		await expect(WeedburnfSDvHKT.disableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const stringZO8oWPU = "BZO6rNrMwsT7CFhWQmnFrQFB5OEgj3ItXoBRfL2JbCSaodqqzYumHXSmwV69oTVajWg"
		const stringIBKrA8I = "KMc6v0ASFlt8Wc03A7yy8wyUmpaUz31AbvsNbiOxTVQ91F9tigMHF3RyC"
		const uintexSgnW0 = BigInt("124")
		const Weedburnt6nI0ti = await Weedburn.new(stringZO8oWPU, stringIBKrA8I, uintexSgnW0, {from: accounts[2]});
		const uintoU2tMf = BigInt("10")
		const addressM8dGMWu = accounts[0]
		const uint256O4nOojG = await Weedburnt6nI0ti.totalSupply.call({from: accounts[0]});
		await Weedburnt6nI0ti.disableDevMode.call({from: accounts[2]});
		const addressB5ol4Bm = await Weedburnt6nI0ti.burnFrom.call(addressM8dGMWu, uintoU2tMf, {from: accounts[4]});
	});

	it('test for Weedburn', async () => {
		const WeedburnC0mMa9p = await Weedburn.new({from: accounts[3]});
		const addressfkl7zeM = accounts[1]
		const addressxG65ZD = accounts[2]
		const addressOq2I99u = accounts[1]
		const addressfwe3Hmd = accounts[1]
		const uint256PWQJDaq = await WeedburnC0mMa9p.allowance.call(addressxG65ZD, addressfkl7zeM, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pgqSukA = await WeedburnC0mMa9p.allowance.call(addressfwe3Hmd, addressOq2I99u, {from: accounts[0]});

		assert.equal(uint256PWQJDaq, BigInt("0"))
		assert.equal(uint256pgqSukA, BigInt("0"))
	});

	it('test for Weedburn', async () => {
		const WeedburnQ5gjFGv = await Weedburn.new({from: accounts[5]});
		const uintRH31Gsa = BigInt("362")
		const addressT6MMAQu = accounts[4]
		await WeedburnQ5gjFGv.enableDevMode.call({from: "0x0000000000000000000000000000000000000001"});
		const booltEs5Ply = await WeedburnQ5gjFGv.transfer.call(addressT6MMAQu, uintRH31Gsa, {from: accounts[0]});

		await expect(WeedburnQ5gjFGv.enableDevMode.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnc0aLeat = await Weedburn.new({from: accounts[3]});
		const uintiEvsLkO = BigInt("1280")
		const addresseAIYlrc = accounts[1]
		const uintg2banAV = BigInt("515")
		const addressPQsEVuo = accounts[0]
		const addresst1nHJ4 = accounts[5]
		const boolB3pRXVx = await Weedburnc0aLeat.transfer.call(addresseAIYlrc, uintiEvsLkO, {from: accounts[1]});
		await Weedburnc0aLeat.enableLimitMode.call({from: accounts[0]});
		const boolZDhndPj = await Weedburnc0aLeat.transferFrom.call(addresst1nHJ4, addressPQsEVuo, uintg2banAV, {from: accounts[1]});
		const uint84oTIgx = await Weedburnc0aLeat.decimals.call({from: accounts[4]});

		await expect(Weedburnc0aLeat.transfer.call(addresseAIYlrc, uintiEvsLkO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnfSDvHKT = await Weedburn.new({from: accounts[4]});
		const uintT0vZqIV = BigInt("2004")
		const addressvdEfOOg = accounts[2]
		const addressbewOBlM = accounts[1]
		const uintAhL3XH5 = BigInt("364")
		const addressVSSLnUR = accounts[4]
		await WeedburnfSDvHKT.disableLimitMode.call({from: accounts[4]});
		await WeedburnfSDvHKT.disableDevMode.call({from: accounts[5]});
		const boolPFrwr1r = await WeedburnfSDvHKT.transferFrom.call(addressbewOBlM, addressvdEfOOg, uintT0vZqIV, {from: accounts[2]});
		await WeedburnfSDvHKT.disableLimitMode.call({from: accounts[3]});
		const boolFu93vIh = await WeedburnfSDvHKT.increaseAllowance.call(addressVSSLnUR, uintAhL3XH5, {from: accounts[2]});

		await expect(WeedburnfSDvHKT.disableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnfSDvHKT = await Weedburn.new({from: accounts[4]});
		const uintvmS2QBz = BigInt("337")
		const addressJ6TTSNg = accounts[4]
		const uintrIfBJz2 = BigInt("2004")
		const addressro83Pxv = accounts[2]
		const addressm8Kf4y4 = accounts[1]
		await WeedburnfSDvHKT.disableLimitMode.call({from: accounts[4]});
		const boolWEPqdD = await WeedburnfSDvHKT.increaseAllowance.call(addressJ6TTSNg, uintvmS2QBz, {from: accounts[5]});
		const boolPFrwr1r = await WeedburnfSDvHKT.transferFrom.call(addressm8Kf4y4, addressro83Pxv, uintrIfBJz2, {from: accounts[2]});
		await WeedburnfSDvHKT.disableLimitMode.call({from: accounts[3]});

		await expect(WeedburnfSDvHKT.disableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnj0SSWGc = await Weedburn.new({from: accounts[4]});
		const uintRJJNzAu = BigInt("611")
		const addressfGbfvg3 = accounts[5]
		const addressCzcXJXs = accounts[0]
		const uintz8G1m2 = BigInt("174")
		const addressl6dBmDZ = accounts[0]
		const uint8ZmAWm9u = await Weedburnj0SSWGc.decimals.call({from: accounts[3]});
		const boolrifB3Sx = await Weedburnj0SSWGc.transfer.call(addressfGbfvg3, uintRJJNzAu, {from: accounts[4]});
		const uint256kveLWbO = await Weedburnj0SSWGc.balanceOf.call(addressCzcXJXs, {from: accounts[0]});
		const boolV0ThyL6 = await Weedburnj0SSWGc.approve.call(addressl6dBmDZ, uintz8G1m2, {from: accounts[4]});

		assert.equal(boolV0ThyL6, true)
		assert.equal(boolrifB3Sx, true)
		assert.equal(uint256kveLWbO, BigInt("0"))
		assert.equal(uint8ZmAWm9u, BigInt("18"))
	});

	it('test for Weedburn', async () => {
		const WeedburnC0mMa9p = await Weedburn.new({from: accounts[3]});
		const addressJw3cq4n = accounts[3]
		const addressydVpTj3 = accounts[2]
		const uintlHed5tl = BigInt("460")
		const addresskXR6kl8 = "0x0000000000000000000000000000000000000001"
		const uint256MovWslM = await WeedburnC0mMa9p.totalSupply.call({from: accounts[5]});
		const uint256PWQJDaq = await WeedburnC0mMa9p.allowance.call(addressydVpTj3, addressJw3cq4n, {from: "0x0000000000000000000000000000000000000001"});
		const boolp3ZzKyG = await WeedburnC0mMa9p.decreaseAllowance.call(addresskXR6kl8, uintlHed5tl, {from: accounts[0]});

		assert.equal(uint256MovWslM, BigInt("100000000000000000000000"))
		assert.equal(uint256PWQJDaq, BigInt("0"))
		await expect(WeedburnC0mMa9p.decreaseAllowance.call(addresskXR6kl8, uintlHed5tl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnC0mMa9p = await Weedburn.new({from: accounts[3]});
		const addressv4iO50l = accounts[3]
		const addressO2Rs41T = accounts[2]
		const uint256PWQJDaq = await WeedburnC0mMa9p.allowance.call(addressO2Rs41T, addressv4iO50l, {from: "0x0000000000000000000000000000000000000001"});
		const stringLQsonYF = await WeedburnC0mMa9p.symbol.call({from: accounts[2]});
		await WeedburnC0mMa9p.enableLimitMode.call({from: accounts[0]});

		assert.equal(stringLQsonYF, "Weedburn")
		assert.equal(uint256PWQJDaq, BigInt("0"))
		await expect(WeedburnC0mMa9p.enableLimitMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnj0SSWGc = await Weedburn.new({from: accounts[4]});
		const uintUuWowf = BigInt("364")
		const addressybHPqk = accounts[5]
		const uintTzPMoB9 = BigInt("611")
		const addressgunR1B = accounts[5]
		const addressv6sS5B8 = accounts[1]
		const uintAIzCD4C = BigInt("174")
		const addressacZ4wu = accounts[0]
		const addressOPzke1h = await Weedburnj0SSWGc.burnFrom.call(addressybHPqk, uintUuWowf, {from: accounts[4]});
		const uint8ZmAWm9u = await Weedburnj0SSWGc.decimals.call({from: accounts[3]});
		const boolrifB3Sx = await Weedburnj0SSWGc.transfer.call(addressgunR1B, uintTzPMoB9, {from: accounts[4]});
		const uint256kveLWbO = await Weedburnj0SSWGc.balanceOf.call(addressv6sS5B8, {from: accounts[0]});
		const boolV0ThyL6 = await Weedburnj0SSWGc.approve.call(addressacZ4wu, uintAIzCD4C, {from: accounts[4]});

		await expect(Weedburnj0SSWGc.burnFrom.call(addressybHPqk, uintUuWowf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnukVnXn = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256VlNBiNq = await WeedburnukVnXn.totalSupply.call({from: accounts[5]});
		await WeedburnukVnXn.enableLimitMode.call({from: accounts[1]});
		const uint256OPlkLCP = await WeedburnukVnXn.totalSupply.call({from: accounts[5]});
	});

	it('test for Weedburn', async () => {
		const WeedburnfSDvHKT = await Weedburn.new({from: accounts[4]});
		const uintibG1Imq = BigInt("880")
		const uintZIIwkGg = BigInt("2004")
		const addressUfASmf = accounts[3]
		const addresscOpQD3C = accounts[2]
		const uint256O8LGFe1 = await WeedburnfSDvHKT.burn.call(uintibG1Imq, {from: accounts[4]});
		await WeedburnfSDvHKT.enableLimitMode.call({from: accounts[3]});
		const boolPFrwr1r = await WeedburnfSDvHKT.transferFrom.call(addresscOpQD3C, addressUfASmf, uintZIIwkGg, {from: accounts[2]});

		await expect(WeedburnfSDvHKT.enableLimitMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnj0SSWGc = await Weedburn.new({from: accounts[4]});
		const uintyjaJsNh = BigInt("243")
		const addressUUzFa2c = accounts[3]
		const uintbiYEP1 = BigInt("1801")
		const addressOYd0bTP = accounts[2]
		const addressb84gO5m = accounts[4]
		const uintLUSMPah = BigInt("611")
		const addresspW8Q8G = accounts[6]
		const uintkgtm5h7 = BigInt("1440")
		const addressTyEMRvQ = accounts[0]
		const address68Jjb3 = accounts[0]
		const addressSykXMRY = accounts[1]
		const uintKS3F1rn = BigInt("174")
		const addressceOZNSz = accounts[0]
		const uintGrUMie = BigInt("1738")
		const addresskQ0MM18 = accounts[5]
		const uintQ83JaIw = BigInt("136")
		const addressuKXjCuW = accounts[2]
		const boolxkRzrJ8 = await Weedburnj0SSWGc.approve.call(addressUUzFa2c, uintyjaJsNh, {from: accounts[1]});
		const boolQ7awqMC = await Weedburnj0SSWGc.transferFrom.call(addressb84gO5m, addressOYd0bTP, uintbiYEP1, {from: accounts[0]});
		const boolrifB3Sx = await Weedburnj0SSWGc.transfer.call(addresspW8Q8G, uintLUSMPah, {from: accounts[4]});
		const boolJn4wuED = await Weedburnj0SSWGc.transferFrom.call(address68Jjb3, addressTyEMRvQ, uintkgtm5h7, {from: accounts[2]});
		const uint256kveLWbO = await Weedburnj0SSWGc.balanceOf.call(addressSykXMRY, {from: accounts[0]});
		const boolV0ThyL6 = await Weedburnj0SSWGc.approve.call(addressceOZNSz, uintKS3F1rn, {from: accounts[4]});
		const addressVJJTyR2 = await Weedburnj0SSWGc.burnFrom.call(addresskQ0MM18, uintGrUMie, {from: accounts[2]});
		const addressgcQcPn = await Weedburnj0SSWGc.burnFrom.call(addressuKXjCuW, uintQ83JaIw, {from: accounts[1]});
		const uint256h1tSGHp = await Weedburnj0SSWGc.totalSupply.call({from: accounts[0]});

		assert.equal(boolxkRzrJ8, true)
		await expect(Weedburnj0SSWGc.transferFrom.call(addressb84gO5m, addressOYd0bTP, uintbiYEP1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})