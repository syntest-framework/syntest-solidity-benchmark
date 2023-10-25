const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintVL0t64y = BigInt("1698")
		const stringUssSnNq = "xMd6PTqeADdH3PhwD02tv2"
		const stringb9zMh9V = "gsDd2VKuEXeXVpSPjGMlDxC5ywM2uUWMpV"
		const uintqT5zgCn = BigInt("1111")
		const ANRXTokenw9Jg3bE = await ANRXToken.new(uintVL0t64y, stringUssSnNq, stringb9zMh9V, uintqT5zgCn, {from: accounts[3]});
		const uintzfOhjIq = BigInt("569")
		const addressAReMAAE = accounts[3]
		const uintcPSk43F = BigInt("1599")
		const uintvc3hVaS = BigInt("1550")
		const address4t6Ih6 = accounts[5]
		const boolR6llGru = await ANRXTokenw9Jg3bE.approve.call(addressAReMAAE, uintzfOhjIq, {from: accounts[3]});
//		const uinttLOgIO = await ANRXTokenw9Jg3bE.setParams.call(uintvc3hVaS, uintcPSk43F, {from: accounts[0]});
//		const uintOOSlRDT = await ANRXTokenw9Jg3bE.balanceOf.call(address4t6Ih6, {from: accounts[5]});

		assert.equal(boolR6llGru, true)
		await expect(ANRXTokenw9Jg3bE.setParams.call(uintvc3hVaS, uintcPSk43F, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintQDyW50M = BigInt("842")
		const stringa0EqAPX = "dFExXPh76O0Mng7NLBo1k"
		const stringrAi2vHU = "jaQ6i6kFxeXUZtRtuMrdIz19PdmHoB1r24oluXLhRK1zD90xcDmHebpSduvVKkZSWwk6g4"
		const uintyKPlO3h = BigInt("856")
		const ANRXTokenLNKbc4I = await ANRXToken.new(uintQDyW50M, stringa0EqAPX, stringrAi2vHU, uintyKPlO3h, {from: accounts[4]});
		const uintw9bKtt9 = BigInt("1400")
		const addressffBhCwa = accounts[1]
		const addressMVzsCz4 = accounts[0]
		const uintOQQqQv1 = BigInt("658")
		const uintXmmvgZn = BigInt("1630")
		const uint3z8YYt = BigInt("20")
		const uintFCCA0Fi = BigInt("1591")
		const uinthiokNJ6 = BigInt("1302")
//		const boolIcE8bwb = await ANRXTokenLNKbc4I.transferFrom.call(addressMVzsCz4, addressffBhCwa, uintw9bKtt9, {from: accounts[5]});
//		const uintkI0a3ka = await ANRXTokenLNKbc4I.setParams.call(uintXmmvgZn, uintOQQqQv1, {from: accounts[5]});
//		const uintqvqFoK0 = await ANRXTokenLNKbc4I.redeem.call(uint3z8YYt, {from: accounts[2]});
//		const uintt8mmJEj = await ANRXTokenLNKbc4I.setParams.call(uinthiokNJ6, uintFCCA0Fi, {from: accounts[1]});

		await expect(ANRXTokenLNKbc4I.transferFrom.call(addressMVzsCz4, addressffBhCwa, uintw9bKtt9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintDJt9Yj = BigInt("258")
		const stringxDMkjV = "kTI4vLWSULY6cUDo0KTpv4AivwfEkzLhv8qn9wlBsszfmVJEpE"
		const stringrMNj6XD = "HYI0hpehmqcVH26lwYENbEAhXBGp8JgdaQnhP7WKPGUaFoTRMDk41KKjJrqhLbRudrVNb38mGim9D"
		const uintjyUOx27 = BigInt("993")
		const ANRXTokenn1AGEzC = await ANRXToken.new(uintDJt9Yj, stringxDMkjV, stringrMNj6XD, uintjyUOx27, {from: accounts[3]});
		const uintOvZm6Lc = BigInt("1706")
		const addresshuBqMiO = accounts[1]
		const uintgwUykd = BigInt("548")
		const uintDKlpgFt = BigInt("413")
		const addresszTgf9iE = accounts[4]
		const addressnJqTzWT = accounts[0]
		const addressdJe444b = accounts[1]
		const uintK9nGM2J = BigInt("181")
		const addressNZx6oRk = "0x0000000000000000000000000000000000000001"
		const addressX2cnIr5 = accounts[5]
		const uintXDRljm7 = await ANRXTokenn1AGEzC.totalSupply.call({from: accounts[1]});
		const booliry2FPq = await ANRXTokenn1AGEzC.approve.call(addresshuBqMiO, uintOvZm6Lc, {from: accounts[2]});
//		const uintcL8tDkJ = await ANRXTokenn1AGEzC.issue.call(uintgwUykd, {from: accounts[4]});
//		const boolbxpMtVJ = await ANRXTokenn1AGEzC.transfer.call(addresszTgf9iE, uintDKlpgFt, {from: accounts[5]});
//		const uintr9QNGqS = await ANRXTokenn1AGEzC.allowance.call(addressdJe444b, addressnJqTzWT, {from: accounts[4]});
//		const boolEsBMvvR = await ANRXTokenn1AGEzC.transferFrom.call(addressX2cnIr5, addressNZx6oRk, uintK9nGM2J, {from: accounts[1]});

		assert.equal(booliry2FPq, true)
		assert.equal(uintXDRljm7, BigInt("258"))
		await expect(ANRXTokenn1AGEzC.issue.call(uintgwUykd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintWS5P89D = BigInt("682")
		const stringd8nVbdM = "A4287YLWCh2cdBsDWO6PvePEMS23QIHuY7WrFOBmsSXxk12ZvxajjOg4IkEAQi9XvLJml8i"
		const stringaURR9q0 = "DqywfM26y3IJTHen9iBji8st79dAdATk3mneM2sJTjmgMzribjE"
		const uintqSyO67N = BigInt("666")
		const ANRXTokenNFigoWE = await ANRXToken.new(uintWS5P89D, stringd8nVbdM, stringaURR9q0, uintqSyO67N, {from: accounts[4]});
		const uintaqLmIC = BigInt("437")
		const addressgEw3MUJ = accounts[2]
		const uintOTn8M1c = BigInt("964")
		const addressZRdXTS0 = "0x0000000000000000000000000000000000000001"
		const addressD4Gfsxv = "0x0000000000000000000000000000000000000001"
		const addressU7ejEQU = accounts[1]
		const uintcFyWuX = BigInt("279")
//		const boolpr1Tskk = await ANRXTokenNFigoWE.transfer.call(addressgEw3MUJ, uintaqLmIC, {from: accounts[3]});
//		const boolzFlgeJ8 = await ANRXTokenNFigoWE.approve.call(addressZRdXTS0, uintOTn8M1c, {from: accounts[0]});
//		const uintSaHiAPM = await ANRXTokenNFigoWE.allowance.call(addressU7ejEQU, addressD4Gfsxv, {from: accounts[4]});
//		const uintPYKHwla = await ANRXTokenNFigoWE.issue.call(uintcFyWuX, {from: accounts[3]});

		await expect(ANRXTokenNFigoWE.transfer.call(addressgEw3MUJ, uintaqLmIC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintUB23dxr = BigInt("1126")
		const stringYRgIwkp = "vmQ6LYcxWDUrQmf82xdVu6784WKQc5b"
		const stringFlLay4s = "KoFE4OzgbYEoAniPaUa9kHrLyQ4Xi7Get2a7mJkduICcVJfzl1aWBIrgL6ZxXOJz"
		const uintSdXcktK = BigInt("1794")
		const ANRXTokenURuCTGa = await ANRXToken.new(uintUB23dxr, stringYRgIwkp, stringFlLay4s, uintSdXcktK, {from: accounts[4]});
		const addressxCsucj0 = accounts[3]
		const addressIZ88orh = accounts[1]
		const uintnnu7TV = BigInt("928")
		const addressSpjxDHs = accounts[0]
		const uintCFYZw6 = BigInt("605")
		const uintG9dv1hG = await ANRXTokenURuCTGa.allowance.call(addressIZ88orh, addressxCsucj0, {from: accounts[0]});
//		const bools836d3z = await ANRXTokenURuCTGa.transfer.call(addressSpjxDHs, uintnnu7TV, {from: accounts[0]});
//		const uintvgOXRcg = await ANRXTokenURuCTGa.issue.call(uintCFYZw6, {from: accounts[1]});

		assert.equal(uintG9dv1hG, BigInt("0"))
		await expect(ANRXTokenURuCTGa.transfer.call(addressSpjxDHs, uintnnu7TV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uinthF6TTsQ = BigInt("1698")
		const stringUssSnNq = "xMd6PTqeADdH3PhwD02tv2"
		const stringb9zMh9V = "gsDd2VKuEXeXVpSPjGMlDxC5ywM2uUWMpV"
		const uintNb4QQM = BigInt("1111")
		const ANRXTokenw9Jg3bE = await ANRXToken.new(uinthF6TTsQ, stringUssSnNq, stringb9zMh9V, uintNb4QQM, {from: accounts[3]});
		const addressAoF8q6 = accounts[2]
		const uintv5skSn4 = BigInt("573")
		const address691rrr = accounts[4]
		const uintMJC2SJM = BigInt("1599")
		const uintDHNuTUR = BigInt("1550")
		const uintPYiY06 = await ANRXTokenw9Jg3bE.balanceOf.call(addressAoF8q6, {from: accounts[2]});
		const boolR6llGru = await ANRXTokenw9Jg3bE.approve.call(address691rrr, uintv5skSn4, {from: accounts[3]});
//		const uinttLOgIO = await ANRXTokenw9Jg3bE.setParams.call(uintDHNuTUR, uintMJC2SJM, {from: accounts[0]});

		assert.equal(boolR6llGru, true)
		assert.equal(uintPYiY06, BigInt("0"))
		await expect(ANRXTokenw9Jg3bE.setParams.call(uintDHNuTUR, uintMJC2SJM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintdlAw5pR = BigInt("1126")
		const stringYRgIwkp = "vmQ6LYcxWDUrQmf82xdVu6784WKQc5b"
		const stringFlLay4s = "KoFE4OzgbYEoAniPaUa9kHrLyQ4Xi7Get2a7mJkduICcVJfzl1aWBIrgL6ZxXOJz"
		const uintCUUi8b5 = BigInt("1794")
		const ANRXTokenURuCTGa = await ANRXToken.new(uintdlAw5pR, stringYRgIwkp, stringFlLay4s, uintCUUi8b5, {from: accounts[4]});
		const addressWhai9Ej = "0x0000000000000000000000000000000000000001"
		const addresse9gaOt5 = accounts[3]
		const addressBcSkg8A = accounts[1]
		const uintxuON8Iu = BigInt("1767")
		const uint6SUzlx = BigInt("928")
		const addressWI6vlB = accounts[1]
		const uintQtOSZ9 = BigInt("81")
		const uintXlLhIUM = BigInt("605")
		const uintTc4zkye = await ANRXTokenURuCTGa.balanceOf.call(addressWhai9Ej, {from: "0x0000000000000000000000000000000000000001"});
		const uintG9dv1hG = await ANRXTokenURuCTGa.allowance.call(addressBcSkg8A, addresse9gaOt5, {from: accounts[0]});
//		const uintKLtuLhk = await ANRXTokenURuCTGa.redeem.call(uintxuON8Iu, {from: accounts[4]});
//		const bools836d3z = await ANRXTokenURuCTGa.transfer.call(addressWI6vlB, uint6SUzlx, {from: accounts[0]});
//		const uintzDHlx3X = await ANRXTokenURuCTGa.issue.call(uintQtOSZ9, {from: "0x0000000000000000000000000000000000000001"});
//		const uintvgOXRcg = await ANRXTokenURuCTGa.issue.call(uintXlLhIUM, {from: accounts[1]});

		assert.equal(uintG9dv1hG, BigInt("0"))
		assert.equal(uintTc4zkye, BigInt("0"))
		await expect(ANRXTokenURuCTGa.redeem.call(uintxuON8Iu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintakwD4H0 = BigInt("1698")
		const stringUssSnNq = "xMd6PTqeADdH3PhwD02tv2"
		const stringb9zMh9V = "gsDd2VKuEXeXVpSPjGMlDxC5ywM2uUWMpV"
		const uintPV0tysW = BigInt("1111")
		const ANRXTokenw9Jg3bE = await ANRXToken.new(uintakwD4H0, stringUssSnNq, stringb9zMh9V, uintPV0tysW, {from: accounts[3]});
		const uintCjmnc04 = BigInt("1746")
		const uintpGw0Sch = BigInt("563")
		const addressazx6Opg = accounts[3]
		const uintgwaLszO = BigInt("67")
		const addressepd6d4Z = "0x0000000000000000000000000000000000000001"
		const uintlD3N5TN = BigInt("1599")
		const uintBlTeNJN = BigInt("1550")
		const uintbfzRw1m = await ANRXTokenw9Jg3bE.issue.call(uintCjmnc04, {from: accounts[3]});
		const boolR6llGru = await ANRXTokenw9Jg3bE.approve.call(addressazx6Opg, uintpGw0Sch, {from: accounts[3]});
//		const boolemTlWee = await ANRXTokenw9Jg3bE.transfer.call(addressepd6d4Z, uintgwaLszO, {from: "0x0000000000000000000000000000000000000001"});
//		const uinttLOgIO = await ANRXTokenw9Jg3bE.setParams.call(uintBlTeNJN, uintlD3N5TN, {from: accounts[0]});

		assert.equal(boolR6llGru, true)
		await expect(ANRXTokenw9Jg3bE.transfer.call(addressepd6d4Z, uintgwaLszO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintndo5YtL = BigInt("1698")
		const stringUssSnNq = "xMd6PTqeADdH3PhwD02tv2"
		const stringb9zMh9V = "gsDd2VKuEXeXVpSPjGMlDxC5ywM2uUWMpV"
		const uintBuwjcYu = BigInt("1111")
		const ANRXTokenw9Jg3bE = await ANRXToken.new(uintndo5YtL, stringUssSnNq, stringb9zMh9V, uintBuwjcYu, {from: accounts[3]});
		const addresspj67ds4 = accounts[2]
		const uintq69uCX1 = BigInt("573")
		const address0f3vvt = accounts[4]
		const addressIbZBiKB = accounts[3]
		const uintXsHmNrl = BigInt("1599")
		const uintSyqLB19 = BigInt("1550")
		const uintPYiY06 = await ANRXTokenw9Jg3bE.balanceOf.call(addresspj67ds4, {from: accounts[2]});
		const boolR6llGru = await ANRXTokenw9Jg3bE.approve.call(address0f3vvt, uintq69uCX1, {from: accounts[3]});
		const addresswXa7ry3 = await ANRXTokenw9Jg3bE.deprecate.call(addressIbZBiKB, {from: accounts[3]});
//		const uinttLOgIO = await ANRXTokenw9Jg3bE.setParams.call(uintSyqLB19, uintXsHmNrl, {from: accounts[0]});

		assert.equal(boolR6llGru, true)
		assert.equal(uintPYiY06, BigInt("0"))
		await expect(ANRXTokenw9Jg3bE.setParams.call(uintSyqLB19, uintXsHmNrl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintDj42Ssn = BigInt("1698")
		const stringUssSnNq = "xMd6PTqeADdH3PhwD02tv2"
		const stringb9zMh9V = "gsDd2VKuEXeXVpSPjGMlDxC5ywM2uUWMpV"
		const uintAGLCUZl = BigInt("1111")
		const ANRXTokenw9Jg3bE = await ANRXToken.new(uintDj42Ssn, stringUssSnNq, stringb9zMh9V, uintAGLCUZl, {from: accounts[3]});
		const uintOyl4Hj3 = BigInt("1083")
		const uintiHgDgl6 = BigInt("1877")
		const uinttnLYz9w = BigInt("573")
		const addressQUyr1k = accounts[3]
		const uintmgOTBXd = BigInt("566")
		const addressnXHa70Z = accounts[1]
		const addresshC7xqCH = accounts[0]
		const uintmmUIL1Y = BigInt("1599")
		const uintzHBtTzY = BigInt("1586")
//		const uintxfaE7NQ = await ANRXTokenw9Jg3bE.setParams.call(uintiHgDgl6, uintOyl4Hj3, {from: accounts[3]});
//		const boolR6llGru = await ANRXTokenw9Jg3bE.approve.call(addressQUyr1k, uinttnLYz9w, {from: accounts[3]});
//		const boolPBZ2RqO = await ANRXTokenw9Jg3bE.transferFrom.call(addresshC7xqCH, addressnXHa70Z, uintmgOTBXd, {from: accounts[1]});
//		const uinttLOgIO = await ANRXTokenw9Jg3bE.setParams.call(uintzHBtTzY, uintmmUIL1Y, {from: accounts[0]});

		await expect(ANRXTokenw9Jg3bE.setParams.call(uintiHgDgl6, uintOyl4Hj3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintdvyJBOD = BigInt("1806")
		const stringTGPGsRQ = "ZUyp8xS41StooYBvSWCnHTA7pdMHqdQ9ByeSdHl1ESgikMTFgXrQxGxP63jvStK39MkFy80cdkwtQkcKXoVl2UvEZwp3LSq"
		const stringzYLuorQ = "OBDBcZ9inABmyJCvEJbOnV4UlcAcZcSU70bKL0715x3KWhDXRVpRnEw1yakuf1cCFprqWliI"
		const uintgdIQtMV = BigInt("1419")
		const ANRXTokend28ErHG = await ANRXToken.new(uintdvyJBOD, stringTGPGsRQ, stringzYLuorQ, uintgdIQtMV, {from: "0x0000000000000000000000000000000000000001"});
		const uintadQCpAx = BigInt("759")
		const uint4ncAXQ = BigInt("1591")
		const uintOjQofCf = await ANRXTokend28ErHG.redeem.call(uintadQCpAx, {from: accounts[4]});
		const uintSIf3U0U = await ANRXTokend28ErHG.totalSupply.call({from: accounts[3]});
		const uint6HCoN8 = await ANRXTokend28ErHG.issue.call(uint4ncAXQ, {from: accounts[1]});
	});
})