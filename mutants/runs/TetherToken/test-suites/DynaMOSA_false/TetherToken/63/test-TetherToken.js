const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintmGcZ3R4 = BigInt("1050")
		const stringMnyfttY = "9hroRZ411tRGQvxB0H5r9MOV8pefW"
		const string7zIpRG = "uYzPYq8wDkaE8hKrrks1Fsv1BIYSqMtd9of"
		const uintseyoNhP = BigInt("1782")
		const TetherTokenZaSnuwP = await TetherToken.new(uintmGcZ3R4, stringMnyfttY, string7zIpRG, uintseyoNhP, {from: accounts[4]});
		const uintPy7zxAS = BigInt("578")
		const uintko2i4v = BigInt("1797")
		const addressAMi93N = accounts[4]
		const addressuSjB66V = accounts[3]
		const addressz7MRsUP = accounts[2]
		const uintdJHXJKQ = BigInt("1566")
		const uints8Kwxrj = await TetherTokenZaSnuwP.issue.call(uintPy7zxAS, {from: accounts[2]});
		const addressfo4hUy3 = await TetherTokenZaSnuwP.transferFrom.call(addressuSjB66V, addressAMi93N, uintko2i4v, {from: accounts[1]});
		const addressbpeT6Ke = await TetherTokenZaSnuwP.deprecate.call(addressz7MRsUP, {from: accounts[2]});
		const uintX6e2KNg = await TetherTokenZaSnuwP.issue.call(uintdJHXJKQ, {from: accounts[5]});

		await expect(TetherTokenZaSnuwP.issue.call(uintPy7zxAS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintsBWWYBC = BigInt("1362")
		const stringTi3V37X = "ajq6hFzf"
		const stringeePH7jg = "imqPocko27814TlfHPAmHbXdYHcW0BN2YcST1Li2neQyseqQNQwPE3oc0WfDkyAwpx43wbRWk7C9i"
		const uintDukoxE = BigInt("1004")
		const TetherTokenl8rEXTu = await TetherToken.new(uintsBWWYBC, stringTi3V37X, stringeePH7jg, uintDukoxE, {from: accounts[0]});
		const addressDQr0pcy = accounts[3]
		const uintqZ8eqQo = BigInt("1286")
		const addressfODk2Od = accounts[2]
		const uintoUtKpsu = BigInt("2023")
		const addresshdBaQ9E = accounts[2]
		const addressgTnPp0J = await TetherTokenl8rEXTu.deprecate.call(addressDQr0pcy, {from: accounts[4]});
		const uintNNbS6h7 = await TetherTokenl8rEXTu.totalSupply.call({from: accounts[4]});
		const address7dsAYh = await TetherTokenl8rEXTu.transfer.call(addressfODk2Od, uintqZ8eqQo, {from: accounts[0]});
		const addressX0lODDK = await TetherTokenl8rEXTu.approve.call(addresshdBaQ9E, uintoUtKpsu, {from: accounts[5]});

		await expect(TetherTokenl8rEXTu.deprecate.call(addressDQr0pcy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintpFOVTly = BigInt("1080")
		const stringb9Ffrg = "1xyvf6mebaKiNiN2mLfNcnepBn1b3ICB6payWlmrP7uDN7HhaLTR8V4SI5ITbnsuA8FJqoW7StaVQqsQDiU5HO1GJwBzuG"
		const stringoo0bO5 = "Am6kJmhocb5VmDkagJwgY1YKyC1bmVYrH88O69tnWkLNs2GGAe55rJfhE"
		const uintWeR55Bd = BigInt("1432")
		const TetherTokenZbbysi8 = await TetherToken.new(uintpFOVTly, stringb9Ffrg, stringoo0bO5, uintWeR55Bd, {from: accounts[3]});
		const uintZtoOxWj = BigInt("1610")
		const addressRA4hMTx = accounts[2]
		const addressJoIwEqL = "0x0000000000000000000000000000000000000001"
		const uintLJ8X1gk = BigInt("202")
		const uintkAaeYeC = BigInt("1273")
		const uintS7nTxE4 = BigInt("1314")
		const uintynW44eF = BigInt("1947")
		const addresssXt6xps = accounts[1]
		const addressTuuyAek = accounts[2]
		const uinthWidOPQ = BigInt("408")
		const addressGipAOEn = accounts[3]
		const addressdZ0ij1 = await TetherTokenZbbysi8.transferFrom.call(addressJoIwEqL, addressRA4hMTx, uintZtoOxWj, {from: accounts[0]});
		const uintgRhcdpr = await TetherTokenZbbysi8.issue.call(uintLJ8X1gk, {from: accounts[0]});
		const uintzA4Lv8w = await TetherTokenZbbysi8.setParams.call(uintS7nTxE4, uintkAaeYeC, {from: accounts[0]});
		const addressXeygJLE = await TetherTokenZbbysi8.transferFrom.call(addressTuuyAek, addresssXt6xps, uintynW44eF, {from: accounts[0]});
		const addressJU201nw = await TetherTokenZbbysi8.transfer.call(addressGipAOEn, uinthWidOPQ, {from: accounts[2]});

		await expect(TetherTokenZbbysi8.transferFrom.call(addressJoIwEqL, addressRA4hMTx, uintZtoOxWj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintcrTqgV2 = BigInt("257")
		const stringgQK4fn = "5fii5Y7li6RHT7GGz7SLBREh0"
		const stringqu6fOu0 = "3yQJhRHsrPvAwzoagUU5XmvbVnyTsbG"
		const uintyNI7TGR = BigInt("468")
		const TetherTokenoHpndeG = await TetherToken.new(uintcrTqgV2, stringgQK4fn, stringqu6fOu0, uintyNI7TGR, {from: accounts[2]});
		const uintA8ucEfq = BigInt("265")
		const addressOapMsY9 = accounts[2]
		const uintoa10dEF = BigInt("1270")
		const uintkO8xSl = BigInt("1996")
		const addressyezhdw0 = "0x0000000000000000000000000000000000000001"
		const addressQAgYHAI = accounts[4]
		const uintt3ZYZ0J = BigInt("1204")
		const addressJVBzEgU = accounts[1]
		const addresssyM8yDd = await TetherTokenoHpndeG.transfer.call(addressOapMsY9, uintA8ucEfq, {from: accounts[3]});
		const uintckBLJaX = await TetherTokenoHpndeG.redeem.call(uintoa10dEF, {from: "0x0000000000000000000000000000000000000001"});
		const addressXPwhwas = await TetherTokenoHpndeG.transferFrom.call(addressQAgYHAI, addressyezhdw0, uintkO8xSl, {from: accounts[5]});
		const addressCJrHKKR = await TetherTokenoHpndeG.transfer.call(addressJVBzEgU, uintt3ZYZ0J, {from: accounts[1]});

		await expect(TetherTokenoHpndeG.transfer.call(addressOapMsY9, uintA8ucEfq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintwVBwyv3 = BigInt("1299")
		const stringJf38lad = "11aJQg3xhdwQ5OA5rVvphKqSxcloEL57pRvox7fX0n53pnnk7hRhox7DtvI0UICznRGJXEEjQR64R5yniaO2F1wgT"
		const stringSnhirhV = "rdbtt6dUeBwu5tejnTWM6xQg7R6NdvLMFk9l6LWxev0SNJ6VY1pFwe7mtaB5loVeC"
		const uintGyl5Xij = BigInt("1781")
		const TetherTokenjX00tnk = await TetherToken.new(uintwVBwyv3, stringJf38lad, stringSnhirhV, uintGyl5Xij, {from: accounts[2]});
		const addressY1c7PJw = accounts[3]
		const addressjMqmXkj = "0x0000000000000000000000000000000000000001"
		const uintdZLG5Vl = BigInt("208")
		const uintAhuzkwY = BigInt("1898")
		const uintN3nTY5b = await TetherTokenjX00tnk.allowance.call(addressjMqmXkj, addressY1c7PJw, {from: accounts[2]});
		const uintLWsOFfh = await TetherTokenjX00tnk.issue.call(uintdZLG5Vl, {from: accounts[3]});
		const uintaUcT8V = await TetherTokenjX00tnk.issue.call(uintAhuzkwY, {from: accounts[3]});

		assert.equal(uintN3nTY5b, BigInt("0"))
		await expect(TetherTokenjX00tnk.issue.call(uintdZLG5Vl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintrcpq8R = BigInt("1258")
		const stringM7NnMfX = "A6MFkQD4fy7hegt9hpEAhnQD"
		const stringQNzWD1r = "X85vql5ZbadTjr53Cot5vggpNT72Xoverm7gr2vA4IC2BhUf4kwe87LqmPbYMR3qnVKNvXMGpIumyjlHFav"
		const uintYvuT5Qf = BigInt("559")
		const TetherTokenQloaAFw = await TetherToken.new(uintrcpq8R, stringM7NnMfX, stringQNzWD1r, uintYvuT5Qf, {from: accounts[5]});
		const uintTx9CNAT = BigInt("403")
		const uintjV1eilN = BigInt("1583")
		const addressQHO4jy9 = accounts[1]
		const uintRfnyLcg = BigInt("828")
		const addressn8YMJZ = accounts[3]
		const addressc2UAA7c = accounts[1]
		const addresstdRNVm = accounts[0]
		const addressOd9PSPu = "0x0000000000000000000000000000000000000001"
		const uintYsCZgPh = await TetherTokenQloaAFw.redeem.call(uintTx9CNAT, {from: accounts[4]});
		const uintvfsAjal = await TetherTokenQloaAFw.issue.call(uintjV1eilN, {from: "0x0000000000000000000000000000000000000001"});
		const addressEJufNaZ = await TetherTokenQloaAFw.deprecate.call(addressQHO4jy9, {from: accounts[5]});
		const addressh2zIXRY = await TetherTokenQloaAFw.transferFrom.call(addressc2UAA7c, addressn8YMJZ, uintRfnyLcg, {from: accounts[0]});
		const uintxItO28 = await TetherTokenQloaAFw.allowance.call(addressOd9PSPu, addresstdRNVm, {from: accounts[1]});

		await expect(TetherTokenQloaAFw.redeem.call(uintTx9CNAT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintum729oU = BigInt("1524")
		const stringWdjTaXt = "2DPhAI"
		const stringJ4PgeAa = "CAktCKjS9dMV5PKGFE5ErBn4WJAJdCYpGUIU3YbBfI4WKjuhXOKb"
		const uintDXu8KsP = BigInt("959")
		const TetherTokenqVTkB8N = await TetherToken.new(uintum729oU, stringWdjTaXt, stringJ4PgeAa, uintDXu8KsP, {from: accounts[0]});
		const uintlDV6VeV = BigInt("1295")
		const addressrEKo3Ye = accounts[5]
		const addressmIt3Ibr = accounts[4]
		const addressUVlHo5D = await TetherTokenqVTkB8N.approve.call(addressrEKo3Ye, uintlDV6VeV, {from: accounts[4]});
		const addresscfJYc2v = await TetherTokenqVTkB8N.deprecate.call(addressmIt3Ibr, {from: accounts[1]});

		await expect(TetherTokenqVTkB8N.deprecate.call(addressmIt3Ibr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintMcqewE3 = BigInt("700")
		const stringivNNZsu = "R9BgOCWil4tf1RW9vmQTxPENX2NKetKvr"
		const stringdmzXAf7 = "JuLCqMVP7"
		const uintXes5N30 = BigInt("1181")
		const TetherTokenAVeROS8 = await TetherToken.new(uintMcqewE3, stringivNNZsu, stringdmzXAf7, uintXes5N30, {from: accounts[5]});
		const uintFctwnVd = BigInt("1207")
		const uintnv2IxKN = BigInt("999")
		const addressnhPUrDt = "0x0000000000000000000000000000000000000001"
		const uintG28mRmZ = await TetherTokenAVeROS8.totalSupply.call({from: accounts[1]});
		const uintgsGprF2 = await TetherTokenAVeROS8.totalSupply.call({from: accounts[2]});
		const uintOro7H7 = await TetherTokenAVeROS8.issue.call(uintFctwnVd, {from: accounts[1]});
		const uintEvs7o1Y = await TetherTokenAVeROS8.issue.call(uintnv2IxKN, {from: "0x0000000000000000000000000000000000000001"});
		const uinto8KtQ78 = await TetherTokenAVeROS8.balanceOf.call(addressnhPUrDt, {from: accounts[3]});

		assert.equal(uintG28mRmZ, BigInt("700"))
		assert.equal(uintgsGprF2, BigInt("700"))
		await expect(TetherTokenAVeROS8.issue.call(uintFctwnVd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintbwIgdWK = BigInt("1299")
		const stringJf38lad = "11aJQg3xhdwQ5OA5rVvphKqSxcloEL57pRvox7fX0n53pnnk7hRhox7DtvI0UICznRGJXEEjQR64R5yniaO2F1wgT"
		const stringSnhirhV = "rdbtt6dUeBwu5tejnTWM6xQg7R6NdvLMFk9l6LWxev0SNJ6VY1pFwe7mtaB5loVeC"
		const uintyYGg1P8 = BigInt("1781")
		const TetherTokenjX00tnk = await TetherToken.new(uintbwIgdWK, stringJf38lad, stringSnhirhV, uintyYGg1P8, {from: accounts[2]});
		const addressUxlojlF = accounts[4]
		const addressfAwD5Nb = "0x0000000000000000000000000000000000000002"
		const addressq4DHdUO = accounts[2]
		const uinta5t88gc = BigInt("208")
		const uintrLbhsKr = BigInt("1898")
		const uintN3nTY5b = await TetherTokenjX00tnk.allowance.call(addressfAwD5Nb, addressUxlojlF, {from: accounts[2]});
		const uintNSZ2tlE = await TetherTokenjX00tnk.balanceOf.call(addressq4DHdUO, {from: accounts[5]});
		const uintTbRVek = await TetherTokenjX00tnk.totalSupply.call({from: accounts[0]});
		const uintLWsOFfh = await TetherTokenjX00tnk.issue.call(uinta5t88gc, {from: accounts[3]});
		const uintaUcT8V = await TetherTokenjX00tnk.issue.call(uintrLbhsKr, {from: accounts[3]});

		assert.equal(uintN3nTY5b, BigInt("0"))
		assert.equal(uintNSZ2tlE, BigInt("1299"))
		assert.equal(uintTbRVek, BigInt("1299"))
		await expect(TetherTokenjX00tnk.issue.call(uinta5t88gc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintFjSkryt = BigInt("1056")
		const stringre4v31D = "dG9W9x5DV563TjgLVU1Rqm70Vhu4G2GLGLrEMLMZ9OXkWCmPLC1vNP7eXbISYDLUaHQYckpTvkz8OCQWwzDyxs"
		const stringj4qASHL = "euJXmrAo0UgAAi9TrLRIaoLviHQMyfaAZFq1b5v7Im"
		const uintjyZ8BdP = BigInt("1278")
		const TetherTokenERPKrAD = await TetherToken.new(uintFjSkryt, stringre4v31D, stringj4qASHL, uintjyZ8BdP, {from: "0x0000000000000000000000000000000000000001"});
		const uintPmuuw3i = BigInt("2006")
		const uinthF1i6Gf = BigInt("1179")
		const uintyDvM27y = BigInt("470")
		const addresseSwnlvM = accounts[2]
		const addressMY6oChz = accounts[1]
		const uintgZtHhF7 = BigInt("1368")
		const addressCJPP6nh = accounts[1]
		const uintrXaUiFl = await TetherTokenERPKrAD.setParams.call(uinthF1i6Gf, uintPmuuw3i, {from: accounts[1]});
		const uintMdHxh4u = await TetherTokenERPKrAD.redeem.call(uintyDvM27y, {from: accounts[4]});
		const addressmKJBZ4j = await TetherTokenERPKrAD.deprecate.call(addresseSwnlvM, {from: accounts[3]});
		const addressNBeX1uD = await TetherTokenERPKrAD.deprecate.call(addressMY6oChz, {from: accounts[4]});
		const addresssBGP2Dv = await TetherTokenERPKrAD.approve.call(addressCJPP6nh, uintgZtHhF7, {from: accounts[3]});
	});

	it('test for TetherToken', async () => {
		const uintEUAvoQZ = BigInt("344")
		const stringC2MCLTT = "r7XfdwwcgwwcdnKcr2zk"
		const stringMChHzoU = "uKYICtok5Lzhvzg6gMLfz8boNZloymU41pOex9VaoQQr1vKIRg"
		const uintiLt9GO = BigInt("1819")
		const TetherTokenrVWNvUr = await TetherToken.new(uintEUAvoQZ, stringC2MCLTT, stringMChHzoU, uintiLt9GO, {from: accounts[4]});
		const uintYcG833c = BigInt("934")
		const uintvZITPpO = BigInt("1930")
		const uinttN7JGL3 = BigInt("1956")
		const uintvxIOiAg = BigInt("1562")
		const addressTjitZpa = accounts[4]
		const addressJ4RfRkv = accounts[3]
		const uintiy5mR9q = await TetherTokenrVWNvUr.setParams.call(uintvZITPpO, uintYcG833c, {from: accounts[1]});
		const uintPk7ZS5r = await TetherTokenrVWNvUr.setParams.call(uintvxIOiAg, uinttN7JGL3, {from: accounts[3]});
		const uintFpWoIkR = await TetherTokenrVWNvUr.allowance.call(addressJ4RfRkv, addressTjitZpa, {from: accounts[2]});
		const uintl5pKFD2 = await TetherTokenrVWNvUr.totalSupply.call({from: accounts[0]});

		await expect(TetherTokenrVWNvUr.setParams.call(uintvZITPpO, uintYcG833c, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})