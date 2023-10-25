const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintVIr45Kc = BigInt("1318")
		const stringJAYqb12 = "OALsh8SOsp98B0XWULuQyd6L7SHy4Uub64oraFnOASaH38jDeuAfH0u"
		const stringxk35BMa = "VCEZGXqQcwc3IIGvCFD4xcuG636n5IJG9NFRpws8RxHcK9tf5cvsCEWzb6d"
		const uinteopZZa1 = BigInt("1681")
		const TetherTokenDGQkGtf = await TetherToken.new(uintVIr45Kc, stringJAYqb12, stringxk35BMa, uinteopZZa1, {from: accounts[1]});
		const addressVghFopL = accounts[3]
		const addressjU9wvid = accounts[2]
		const addressl22bTha = accounts[4]
		const addressrYr6wk7 = accounts[3]
		const uintikvj3ae = BigInt("1208")
		const uintmRnK2ay = BigInt("987")
		const uintR9o1UVe = await TetherTokenDGQkGtf.allowance.call(addressjU9wvid, addressVghFopL, {from: accounts[4]});
		const uintnwPvHeH = await TetherTokenDGQkGtf.allowance.call(addressrYr6wk7, addressl22bTha, {from: accounts[2]});
		const uinte1vae1V = await TetherTokenDGQkGtf.issue.call(uintikvj3ae, {from: accounts[0]});
		const uintL2Oocj1 = await TetherTokenDGQkGtf.issue.call(uintmRnK2ay, {from: accounts[0]});

		assert.equal(uintR9o1UVe, BigInt("0"))
		assert.equal(uintnwPvHeH, BigInt("0"))
		await expect(TetherTokenDGQkGtf.issue.call(uintikvj3ae, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uint6HZGJa = BigInt("1194")
		const stringpkc7PLH = "WAiq9CWAoizZlhfSle1CrlGMdx5w2YEVSoBV3ucHKxj4I7wDYRUk"
		const stringfbdauel = "FANS8Uu2JUNiGESMwsKgHg6SZRwCjD3Sb8nZLf1zJxPqjzQvPPq8MjNc5a3SXxYPmQ"
		const uintrzfgHPi = BigInt("701")
		const TetherTokens5xUlhj = await TetherToken.new(uint6HZGJa, stringpkc7PLH, stringfbdauel, uintrzfgHPi, {from: accounts[0]});
		const addressCZkORDV = accounts[3]
		const uintvNbSXzv = BigInt("1310")
		const uintjzcdM4Y = BigInt("1255")
		const addressq37XEEy = accounts[4]
		const addressnSZyIyX = "0x0000000000000000000000000000000000000001"
		const addressUfzmlfn = "0x0000000000000000000000000000000000000001"
		const uinth8dDaXy = BigInt("824")
		const addressY2RBvuJ = accounts[1]
		const uintDfBRUb = await TetherTokens5xUlhj.balanceOf.call(addressCZkORDV, {from: accounts[4]});
		const uintPwWODux = await TetherTokens5xUlhj.redeem.call(uintvNbSXzv, {from: accounts[5]});
		const addresshJoDKsG = await TetherTokens5xUlhj.approve.call(addressq37XEEy, uintjzcdM4Y, {from: accounts[3]});
		const uintG1IIF1h = await TetherTokens5xUlhj.allowance.call(addressUfzmlfn, addressnSZyIyX, {from: accounts[5]});
		const addressutD0Up6 = await TetherTokens5xUlhj.transfer.call(addressY2RBvuJ, uinth8dDaXy, {from: accounts[0]});

		assert.equal(uintDfBRUb, BigInt("0"))
		await expect(TetherTokens5xUlhj.redeem.call(uintvNbSXzv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintyqmQIdi = BigInt("1160")
		const stringRHEaoV = "aiiMdioIeJWiKw7OIgmkvt87Fxih0s6D5w8hDkHb96oKLTtaS2KyQsrZkQtpO6owu8lUTYdx4x5H2SsvIOZl"
		const stringyjj5eY = "FqX1zVlDFujRIszt8wa5LNVSWocT8T2IlRIT"
		const uints6r2Apc = BigInt("1030")
		const TetherTokenwSo7Yy5 = await TetherToken.new(uintyqmQIdi, stringRHEaoV, stringyjj5eY, uints6r2Apc, {from: "0x0000000000000000000000000000000000000001"});
		const uintsCHWYW = BigInt("1193")
		const addressLlH24Zw = accounts[3]
		const uintwxktbLg = BigInt("533")
		const uintwO7s6A0 = BigInt("1858")
		const addressxJWooVs = accounts[5]
		const address2GHnqD = accounts[0]
		const addresskWwiVrZ = await TetherTokenwSo7Yy5.approve.call(addressLlH24Zw, uintsCHWYW, {from: accounts[2]});
		const uintsLcO9Fy = await TetherTokenwSo7Yy5.totalSupply.call({from: accounts[2]});
		const uintjy4je3F = await TetherTokenwSo7Yy5.issue.call(uintwxktbLg, {from: accounts[3]});
		const addresslW1ivd = await TetherTokenwSo7Yy5.transferFrom.call(address2GHnqD, addressxJWooVs, uintwO7s6A0, {from: accounts[3]});
	});

	it('test for TetherToken', async () => {
		const uintfeGlUId = BigInt("1643")
		const stringLK0QzdV = "lOZNkZse6PfDb7vS1y9"
		const stringrPwa7O8 = "Y9DPJ8jVFE7S1wYYs5po9eSSU78SQyoOR6rUlAfcXiGyfDRPa9fxo"
		const uintEsLDXPQ = BigInt("1764")
		const TetherTokenUBfH2GI = await TetherToken.new(uintfeGlUId, stringLK0QzdV, stringrPwa7O8, uintEsLDXPQ, {from: accounts[0]});
		const uintFnw1tYp = BigInt("1997")
		const address1xTJJp = accounts[2]
		const addressw00LMDW = accounts[1]
		const uinty1OJVTj = BigInt("1715")
		const addressS0OOyqV = "0x0000000000000000000000000000000000000001"
		const addressBIOg1gj = accounts[1]
		const addressItKDrV4 = accounts[3]
		const uintbOJgEF = BigInt("1755")
		const addressY7DwOu = accounts[3]
		const addresssP8Hfr7 = accounts[2]
		const addressZS612Qq = await TetherTokenUBfH2GI.transferFrom.call(addressw00LMDW, address1xTJJp, uintFnw1tYp, {from: accounts[5]});
		const addressfRrunLb = await TetherTokenUBfH2GI.transferFrom.call(addressBIOg1gj, addressS0OOyqV, uinty1OJVTj, {from: accounts[3]});
		const addressYWlX0S = await TetherTokenUBfH2GI.deprecate.call(addressItKDrV4, {from: accounts[0]});
		const uintQe3vQCP = await TetherTokenUBfH2GI.redeem.call(uintbOJgEF, {from: "0x0000000000000000000000000000000000000001"});
		const uintqgHvB20 = await TetherTokenUBfH2GI.balanceOf.call(addressY7DwOu, {from: accounts[3]});
		const uinto670Jfg = await TetherTokenUBfH2GI.balanceOf.call(addresssP8Hfr7, {from: accounts[2]});

		await expect(TetherTokenUBfH2GI.transferFrom.call(addressw00LMDW, address1xTJJp, uintFnw1tYp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintlsOCI4z = BigInt("421")
		const stringxo9R5ai = "6dUqL1Kou26aX3K4bqEVAHWrpwhAdbzjmH7FBuadhymePytEJba6pVRza4BTVbIWQrgkWB8"
		const stringuoMqme3 = "NEACNNRXNdran3Ab8LlwSpbg4X8Daf8F"
		const uintT7WC9sF = BigInt("1060")
		const TetherTokenKa43kSE = await TetherToken.new(uintlsOCI4z, stringxo9R5ai, stringuoMqme3, uintT7WC9sF, {from: accounts[0]});
		const addressO27bpdk = accounts[4]
		const uintY2DVTI5 = BigInt("91")
		const addressLu8az7e = accounts[1]
		const uinttPMOuWR = BigInt("800")
		const uintZ8f2SAt = await TetherTokenKa43kSE.balanceOf.call(addressO27bpdk, {from: accounts[3]});
		const addressBxkgCwv = await TetherTokenKa43kSE.transfer.call(addressLu8az7e, uintY2DVTI5, {from: accounts[5]});
		const uintwSiCeYn = await TetherTokenKa43kSE.issue.call(uinttPMOuWR, {from: accounts[0]});
		const uintFs8dFLd = await TetherTokenKa43kSE.totalSupply.call({from: accounts[0]});

		assert.equal(uintZ8f2SAt, BigInt("0"))
		await expect(TetherTokenKa43kSE.transfer.call(addressLu8az7e, uintY2DVTI5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintgLIg8dE = BigInt("1716")
		const stringkW5DHs = "xvoPJCKNq1MCPrGWNHDQy5"
		const stringd6dzJcV = "ELwLVlqGo4d7p8EvQ1tzhu7VG2vkQ7Ow"
		const uinte0CN2TU = BigInt("397")
		const TetherTokenA6emfLw = await TetherToken.new(uintgLIg8dE, stringkW5DHs, stringd6dzJcV, uinte0CN2TU, {from: accounts[0]});
		const uintR0IwU8d = BigInt("1457")
		const addressCZOLYS = accounts[2]
		const uintybVwko1 = BigInt("609")
		const uinttrJ5d1h = BigInt("836")
		const uintu59iZtg = BigInt("841")
		const addressf2hBiD8 = accounts[3]
		const addressAPZd2iF = await TetherTokenA6emfLw.approve.call(addressCZOLYS, uintR0IwU8d, {from: accounts[0]});
		const uintGULMqaB = await TetherTokenA6emfLw.issue.call(uintybVwko1, {from: accounts[3]});
		const uintNqe3YjO = await TetherTokenA6emfLw.redeem.call(uinttrJ5d1h, {from: accounts[1]});
		const addressdWtHFVp = await TetherTokenA6emfLw.approve.call(addressf2hBiD8, uintu59iZtg, {from: accounts[1]});

		await expect(TetherTokenA6emfLw.issue.call(uintybVwko1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintSSCXWYL = BigInt("133")
		const stringWchDjMt = "QNX31JxD5ZxLHub1FtM9Gn4AszeUHNb9LNAVTVaqSviXyl6joZWICVcjqDqlDyU71FCkUm"
		const stringTXO1N4S = "DIdcCaMsipEljN8gzw"
		const uintakdktBz = BigInt("1496")
		const TetherTokenvN0N2DM = await TetherToken.new(uintSSCXWYL, stringWchDjMt, stringTXO1N4S, uintakdktBz, {from: accounts[5]});
		const addresseFNgCJ7 = accounts[4]
		const uintQ43OuP = await TetherTokenvN0N2DM.balanceOf.call(addresseFNgCJ7, {from: accounts[1]});
		const uintCM56ysO = await TetherTokenvN0N2DM.totalSupply.call({from: accounts[4]});

		assert.equal(uintCM56ysO, BigInt("133"))
		assert.equal(uintQ43OuP, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uintci1tNS3 = BigInt("1909")
		const stringnrsVq0B = "0kgr50lCaUnXCvKsGp5CmRsQCfeFSbIDu4Wa7wew4sANjC1QweIcs3NnxKv3zYWuAWbyu0ftr7V4hzRUy8RX9a7Uqq73jIxMV"
		const stringLKX5fa = "zZgF8A8McNJj4yqrY3zMJ2sJ6LB4t8VJnLpR6Ppl4NUU0lItHCbab0iH2lVDnwMBXMSHgxjlxyrnmbxgtSqy"
		const uintdQrRggd = BigInt("1009")
		const TetherTokenSVUpXJP = await TetherToken.new(uintci1tNS3, stringnrsVq0B, stringLKX5fa, uintdQrRggd, {from: accounts[0]});
		const addressmlRnMKq = "0x0000000000000000000000000000000000000001"
		const uintQioazNH = BigInt("11")
		const uintPaTVho = BigInt("540")
		const addressOmkKcXP = accounts[3]
		const uintfrnW6PI = await TetherTokenSVUpXJP.balanceOf.call(addressmlRnMKq, {from: accounts[5]});
		const uintPoPnFAk = await TetherTokenSVUpXJP.redeem.call(uintQioazNH, {from: accounts[0]});
		const uintxRRgnH = await TetherTokenSVUpXJP.totalSupply.call({from: accounts[2]});
		const addresslsCDZFC = await TetherTokenSVUpXJP.approve.call(addressOmkKcXP, uintPaTVho, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintfrnW6PI, BigInt("0"))
		assert.equal(uintxRRgnH, BigInt("1909"))
	});

	it('test for TetherToken', async () => {
		const uintqYJCkF9 = BigInt("1090")
		const stringMRgCouR = "u5cWpoba19k5wbJVEtdDZWBCWeANJ1yWyKDcWD2hWqsUGmz3WNT9WkMIe7abEhDkNufjjE4OfVKT"
		const stringsW6nWDG = "X9KM9nBV9NzPlXQYiGdS9UqCmxeDZ28QnbctwO1iiUmgBLTqQvurz38VvMRXwwfqZ"
		const uint4FaEUJ = BigInt("1714")
		const TetherTokenwBbzKHm = await TetherToken.new(uintqYJCkF9, stringMRgCouR, stringsW6nWDG, uint4FaEUJ, {from: accounts[3]});
		const addressGRcZbM9 = accounts[3]
		const addressF5IjL0v = accounts[1]
		const addressDuf5VpO = accounts[2]
		const addressZJWoYqa = await TetherTokenwBbzKHm.deprecate.call(addressGRcZbM9, {from: accounts[4]});
		const uintxdm4RTT = await TetherTokenwBbzKHm.balanceOf.call(addressF5IjL0v, {from: "0x0000000000000000000000000000000000000001"});
		const uintlDOLuBc = await TetherTokenwBbzKHm.balanceOf.call(addressDuf5VpO, {from: accounts[0]});

		await expect(TetherTokenwBbzKHm.deprecate.call(addressGRcZbM9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintFsetyPY = BigInt("1090")
		const stringMRgCouR = "u5cWpoba19k5wbJVEtdDZWBCWeANJ1yWyKDcWD2hWqsUGmz3WNT9WkMIe7abEhDkNufjjE4OfVKT"
		const stringsW6nWDG = "X9KM9nBV9NzPlXQYiGdS9UqCmxeDZ28QnbctwO1iiUmgBLTqQvurz38VvMRXwwfqZ"
		const uintSOSapK = BigInt("1714")
		const TetherTokenwBbzKHm = await TetherToken.new(uintFsetyPY, stringMRgCouR, stringsW6nWDG, uintSOSapK, {from: accounts[3]});
		const uintR6lm96Z = BigInt("776")
		const uintMWunhFY = BigInt("638")
		const uintgCQg2Wv = BigInt("1172")
		const addressNuLexFq = accounts[5]
		const addresseav7NTu = "0x0000000000000000000000000000000000000001"
		const addresszEFoq9k = accounts[3]
		const uintWNSPNRQ = await TetherTokenwBbzKHm.setParams.call(uintMWunhFY, uintR6lm96Z, {from: accounts[1]});
		const addressqIvPgw1 = await TetherTokenwBbzKHm.transferFrom.call(addresseav7NTu, addressNuLexFq, uintgCQg2Wv, {from: accounts[0]});
		const uintxdm4RTT = await TetherTokenwBbzKHm.balanceOf.call(addresszEFoq9k, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherTokenwBbzKHm.setParams.call(uintMWunhFY, uintR6lm96Z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintrxQd0vk = BigInt("1090")
		const stringMRgCouR = "u5cWpoba19k5wbJVEtdDZWBCWeANJ1yWyKDcWD2hWqsUGmz3WNT9WkMIe7abEhDkNufjjE4OfVKT"
		const stringsW6nWDG = "X9KM9nBV9NzPlXQYiGdS9UqCmxeDZ28QnbctwO1iiUmgBLTqQvurz38VvMRXwwfqZ"
		const uintIkScTOo = BigInt("1714")
		const TetherTokenwBbzKHm = await TetherToken.new(uintrxQd0vk, stringMRgCouR, stringsW6nWDG, uintIkScTOo, {from: accounts[3]});
		const addressFrewEvq = accounts[2]
		const uinti1jZH1L = BigInt("1709")
		const uintv68knrU = BigInt("1470")
		const uintxdm4RTT = await TetherTokenwBbzKHm.balanceOf.call(addressFrewEvq, {from: "0x0000000000000000000000000000000000000001"});
		const uint8YwMIo = await TetherTokenwBbzKHm.issue.call(uinti1jZH1L, {from: accounts[3]});
		const uintg1m6z9c = await TetherTokenwBbzKHm.issue.call(uintv68knrU, {from: accounts[1]});
		const uintdp8yG50 = await TetherTokenwBbzKHm.totalSupply.call({from: accounts[5]});

		assert.equal(uintxdm4RTT, BigInt("0"))
		await expect(TetherTokenwBbzKHm.issue.call(uintv68knrU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintN5ZPJMA = BigInt("1716")
		const stringkW5DHs = "xvoPJCKNq1MCPrGWNHDQy5"
		const stringd6dzJcV = "ELwLVlqGo4d7p8EvQ1tzhu7VG2vkQ7Ow"
		const uintRkXarS6 = BigInt("397")
		const TetherTokenA6emfLw = await TetherToken.new(uintN5ZPJMA, stringkW5DHs, stringd6dzJcV, uintRkXarS6, {from: accounts[0]});
		const uintzt2SUyU = BigInt("1474")
		const addressbGZq4iC = accounts[2]
		const addressstIeRk9 = accounts[2]
		const addressFL82yhp = accounts[5]
		const uintK4BFHTc = BigInt("860")
		const addressAPZd2iF = await TetherTokenA6emfLw.approve.call(addressbGZq4iC, uintzt2SUyU, {from: accounts[0]});
		const uintii4queo = await TetherTokenA6emfLw.balanceOf.call(addressstIeRk9, {from: accounts[0]});
		const addressDKHxRsj = await TetherTokenA6emfLw.deprecate.call(addressFL82yhp, {from: accounts[0]});
		const uintNqe3YjO = await TetherTokenA6emfLw.redeem.call(uintK4BFHTc, {from: accounts[1]});

		assert.equal(uintii4queo, BigInt("0"))
		await expect(TetherTokenA6emfLw.redeem.call(uintK4BFHTc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintXvG3Qp = BigInt("1090")
		const stringMRgCouR = "u5cWpoba19k5wbJVEtdDZWBCWeANJ1yWyKDcWD2hWqsUGmz3WNT9WkMIe7abEhDkNufjjE4OfVKT"
		const stringsW6nWDG = "X9KM9nBV9NzPlXQYiGdS9UqCmxeDZ28QnbctwO1iiUmgBLTqQvurz38VvMRXwwfqZ"
		const uintisYCkcS = BigInt("1714")
		const TetherTokenwBbzKHm = await TetherToken.new(uintXvG3Qp, stringMRgCouR, stringsW6nWDG, uintisYCkcS, {from: accounts[3]});
		const uintq64dvu = BigInt("810")
		const uintQlbL6kH = BigInt("981")
		const addressVm0sLlr = accounts[3]
		const uintRPi9Rrg = await TetherTokenwBbzKHm.setParams.call(uintQlbL6kH, uintq64dvu, {from: accounts[3]});
		const uintxdm4RTT = await TetherTokenwBbzKHm.balanceOf.call(addressVm0sLlr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherTokenwBbzKHm.setParams.call(uintQlbL6kH, uintq64dvu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})