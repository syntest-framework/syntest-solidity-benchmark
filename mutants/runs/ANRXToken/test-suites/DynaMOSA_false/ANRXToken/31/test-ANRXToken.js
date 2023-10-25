const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintjsKD3bk = BigInt("841")
		const string3g42t1 = "5o4Gm0wGHVT5I4EWtFLt6AdiKHgsyHxm"
		const stringO26ZV0a = "5cvBKY"
		const uintgHQhNLy = BigInt("734")
		const ANRXTokenqpaCBA6 = await ANRXToken.new(uintjsKD3bk, string3g42t1, stringO26ZV0a, uintgHQhNLy, {from: accounts[0]});
		const addressef2dVfy = accounts[1]
		const addressSPFOQ98 = accounts[4]
		const uintwDzQehy = BigInt("884")
		const uintDyghMU0 = BigInt("866")
		const addressRflGLVp = accounts[3]
		const addressFMcwAUG = accounts[0]
		const uintJO4BEwp = BigInt("844")
		const addressMX7AzfE = accounts[4]
		const addressc0q42QJ = accounts[2]
		const uintF9sBkVs = await ANRXTokenqpaCBA6.allowance.call(addressSPFOQ98, addressef2dVfy, {from: accounts[1]});
		const uinteZ8iQhm = await ANRXTokenqpaCBA6.redeem.call(uintwDzQehy, {from: "0x0000000000000000000000000000000000000001"});
		const boolZ052NC = await ANRXTokenqpaCBA6.transfer.call(addressRflGLVp, uintDyghMU0, {from: accounts[3]});
		const addressshB8KvE = await ANRXTokenqpaCBA6.deprecate.call(addressFMcwAUG, {from: accounts[2]});
		const boolQ1tOLeB = await ANRXTokenqpaCBA6.transferFrom.call(addressc0q42QJ, addressMX7AzfE, uintJO4BEwp, {from: "0x0000000000000000000000000000000000000001"});
		const uintMy9M9Uk = await ANRXTokenqpaCBA6.totalSupply.call({from: accounts[2]});

		assert.equal(uintF9sBkVs, BigInt("0"))
		await expect(ANRXTokenqpaCBA6.redeem.call(uintwDzQehy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uinta0bwgR = BigInt("1813")
		const stringlDsQnEp = "7RwEAUgTn9EZIa6gmjPO"
		const stringhDCM2r3 = "ApBcYLXofmJptd6ydWu6aPJpw2zrKpTgJKbIX"
		const uinttCghUO8 = BigInt("638")
		const ANRXTokensiVX2IP = await ANRXToken.new(uinta0bwgR, stringlDsQnEp, stringhDCM2r3, uinttCghUO8, {from: accounts[4]});
		const uintdJCG2t = BigInt("1961")
		const addressCB2TsLj = accounts[3]
		const addressWDwrYVz = accounts[0]
		const uintOp9QCwt = BigInt("1303")
		const addressrQncKmj = accounts[5]
		const addressIp5iKZc = accounts[2]
		const addressTL1pFLX = accounts[3]
		const boolHHUAT6n = await ANRXTokensiVX2IP.approve.call(addressCB2TsLj, uintdJCG2t, {from: accounts[1]});
		const addressl2NnpP7 = await ANRXTokensiVX2IP.deprecate.call(addressWDwrYVz, {from: accounts[4]});
		const boolRCEeox5 = await ANRXTokensiVX2IP.transfer.call(addressrQncKmj, uintOp9QCwt, {from: accounts[4]});
		const uintmUFi3f = await ANRXTokensiVX2IP.allowance.call(addressTL1pFLX, addressIp5iKZc, {from: accounts[4]});

		assert.equal(boolHHUAT6n, true)
		assert.equal(boolRCEeox5, true)
		assert.equal(uintmUFi3f, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintc845wlD = BigInt("185")
		const stringLE6CKC = "itV3g1EG7jNzSjgFcOCu4g17weDdacxRa1kgalcqJejP5TFa"
		const stringSU9he0U = "7C2IfFu9yaJ9k5XBSfLPynVRHPO5hhe2xeqxnk"
		const uintnuDveDr = BigInt("216")
		const ANRXTokenUr6VThG = await ANRXToken.new(uintc845wlD, stringLE6CKC, stringSU9he0U, uintnuDveDr, {from: accounts[3]});
		const uintqEFeKSy = BigInt("584")
		const addressaFl88U = accounts[4]
		const addressvLFNfn = accounts[2]
		const addressjDFZgnY = accounts[0]
		const addressJS04KqN = accounts[0]
		const uintaexxOom = BigInt("473")
		const addressKaJ4YAm = "0x0000000000000000000000000000000000000001"
		const address2yWJkP = accounts[4]
		const addresskOeRcdQ = accounts[3]
		const addressNk1SPKe = accounts[4]
		const boollX2foGP = await ANRXTokenUr6VThG.transferFrom.call(addressvLFNfn, addressaFl88U, uintqEFeKSy, {from: accounts[3]});
		const addressVaADcNd = await ANRXTokenUr6VThG.deprecate.call(addressjDFZgnY, {from: accounts[0]});
		const uintMEAgFNF = await ANRXTokenUr6VThG.balanceOf.call(addressJS04KqN, {from: accounts[1]});
		const boolxhJ0zjd = await ANRXTokenUr6VThG.transfer.call(addressKaJ4YAm, uintaexxOom, {from: accounts[2]});
		const addressN2FeGKT = await ANRXTokenUr6VThG.deprecate.call(address2yWJkP, {from: accounts[3]});
		const uintW1cyCfG = await ANRXTokenUr6VThG.allowance.call(addressNk1SPKe, addresskOeRcdQ, {from: accounts[4]});

		await expect(ANRXTokenUr6VThG.transferFrom.call(addressvLFNfn, addressaFl88U, uintqEFeKSy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintOVaqvrK = BigInt("961")
		const stringq3k84kI = "cODgMdyv2MKeH8txFPbtRpiWuVxhp37tddh0syPPzGYJWLB2ZOAnWy"
		const stringioSCuYL = "yPxoxxMQmEiKsUZSD3SzyiPoQ4V4N5qa3cohGCPMSsstBlF3jxS9GFAgn8fgdYITcjFFgTtMoQg73ItKAQR5vCAHxEUDY7So"
		const uintMTcn7jo = BigInt("1956")
		const ANRXTokenvbwQLMO = await ANRXToken.new(uintOVaqvrK, stringq3k84kI, stringioSCuYL, uintMTcn7jo, {from: accounts[1]});
		const addressGNkmWrp = accounts[3]
		const uintUXedyu8 = await ANRXTokenvbwQLMO.totalSupply.call({from: accounts[0]});
		const uint4kD6DH = await ANRXTokenvbwQLMO.balanceOf.call(addressGNkmWrp, {from: accounts[1]});
		const uintVJXia6Q = await ANRXTokenvbwQLMO.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint4kD6DH, BigInt("0"))
		assert.equal(uintUXedyu8, BigInt("961"))
		assert.equal(uintVJXia6Q, BigInt("961"))
	});

	it('test for ANRXToken', async () => {
		const uintWhyAIzm = BigInt("375")
		const stringDHXcqdN = "bu4z5MJTqpygrdfhvDI4lss6i1h1mRmTkkkFLCGOTvKcneqiHPWpg5aFveK4ukMMN9zmIGO4ojf4gOrZ1WpmoFpCfEgZPYgO"
		const stringptURU14 = "ko7if4dWFukXWe9jUHimaQALVfN6ieahwfskUoWAxoSU3amkTt28M1qzTCkJt0"
		const uintzjwu7si = BigInt("1590")
		const ANRXTokensRveOy4 = await ANRXToken.new(uintWhyAIzm, stringDHXcqdN, stringptURU14, uintzjwu7si, {from: "0x0000000000000000000000000000000000000001"});
		const uintTWHATxr = BigInt("1403")
		const addressTLdzBz7 = accounts[3]
		const addresses7yfc = accounts[0]
		const addresssKNh8S9 = accounts[2]
		const uintzv9QCxK = await ANRXTokensRveOy4.issue.call(uintTWHATxr, {from: accounts[1]});
		const addressRVj0Dht = await ANRXTokensRveOy4.deprecate.call(addressTLdzBz7, {from: accounts[4]});
		const uintEqSwHqJ = await ANRXTokensRveOy4.balanceOf.call(addresses7yfc, {from: accounts[0]});
		const uinttE3DBzA = await ANRXTokensRveOy4.balanceOf.call(addresssKNh8S9, {from: accounts[0]});
	});

	it('test for ANRXToken', async () => {
		const uintIF6bufq = BigInt("961")
		const stringq3k84kI = "cODgMdyv2MKeH8txFPbtRpiWuVxhp37tddh0syPPzGYJWLB2ZOAnWy"
		const stringioSCuYL = "yPxoxxMQmEiKsUZSD3SzyiPoQ4V4N5qa3cohGCPMSsstBlF3jxS9GFAgn8fgdYITcjFFgTtMoQg73ItKAQR5vCAHxEUDY7So"
		const uintaxVjnGZ = BigInt("1956")
		const ANRXTokenvbwQLMO = await ANRXToken.new(uintIF6bufq, stringq3k84kI, stringioSCuYL, uintaxVjnGZ, {from: accounts[1]});
		const uintibAXC7q = BigInt("429")
		const addressUIazb4U = accounts[1]
		const uintuOZkSG = BigInt("1373")
		const addressaGyBy3U = accounts[3]
		const uintSDzPS6B = BigInt("371")
		const addressfdsp1qf = accounts[0]
		const boolKZJvoA3 = await ANRXTokenvbwQLMO.approve.call(addressUIazb4U, uintibAXC7q, {from: accounts[2]});
		const uintUXedyu8 = await ANRXTokenvbwQLMO.totalSupply.call({from: accounts[0]});
		const uintSW9jzA8 = await ANRXTokenvbwQLMO.redeem.call(uintuOZkSG, {from: accounts[1]});
		const uint4kD6DH = await ANRXTokenvbwQLMO.balanceOf.call(addressaGyBy3U, {from: accounts[1]});
		const boollI4TfVh = await ANRXTokenvbwQLMO.approve.call(addressfdsp1qf, uintSDzPS6B, {from: accounts[4]});
		const uintVJXia6Q = await ANRXTokenvbwQLMO.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolKZJvoA3, true)
		assert.equal(uintUXedyu8, BigInt("961"))
		await expect(ANRXTokenvbwQLMO.redeem.call(uintuOZkSG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintqyRdkZJ = BigInt("1810")
		const stringOpJcChS = "dbyB12gsO1tgEWTPZYN5B7SfEHLso7R6swvwYGYKnvjlssIIYLYTzgMBjb2E8wM9LzJPfREnIaxX6lbDs3R53cH"
		const stringKoFf56W = "fFISLQFkTKGUjl3AFHNm25ouoNr9xOT"
		const uintESyzo6 = BigInt("1228")
		const ANRXTokenu9epo5s = await ANRXToken.new(uintqyRdkZJ, stringOpJcChS, stringKoFf56W, uintESyzo6, {from: accounts[0]});
		const addressiH63EZh = accounts[4]
		const addresshF5uhlN = accounts[0]
		const addressZGH8Kws = accounts[3]
		const uintHi8u1zD = BigInt("1251")
		const addressenduHud = accounts[0]
		const addressDgU60F2 = accounts[3]
		const uintRxwil51 = await ANRXTokenu9epo5s.allowance.call(addresshF5uhlN, addressiH63EZh, {from: accounts[4]});
		const uintLkFPWxC = await ANRXTokenu9epo5s.balanceOf.call(addressZGH8Kws, {from: accounts[4]});
		const uintM5KNKNv = await ANRXTokenu9epo5s.issue.call(uintHi8u1zD, {from: accounts[0]});
		const uintBERiuWP = await ANRXTokenu9epo5s.allowance.call(addressDgU60F2, addressenduHud, {from: accounts[1]});

		assert.equal(uintBERiuWP, BigInt("0"))
		assert.equal(uintLkFPWxC, BigInt("0"))
		assert.equal(uintRxwil51, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintPyFclM6 = BigInt("1813")
		const stringlDsQnEp = "7RwEAUgTn9EZIa6gmjPO"
		const stringhDCM2r3 = "ApBcYLXofmJptd6ydWu6aPJpw2zrKpTgJKbIX"
		const uintXA2AVX4 = BigInt("638")
		const ANRXTokensiVX2IP = await ANRXToken.new(uintPyFclM6, stringlDsQnEp, stringhDCM2r3, uintXA2AVX4, {from: accounts[4]});
		const uintUrieFKa = BigInt("1727")
		const uintfJNv7aP = BigInt("1841")
		const uintExr2K9x = BigInt("1962")
		const addressRdJSaj = accounts[4]
		const uintROGINNq = BigInt("770")
		const addressY99yyGk = accounts[3]
		const uinteHNJIjU = await ANRXTokensiVX2IP.setParams.call(uintfJNv7aP, uintUrieFKa, {from: accounts[4]});
		const boolHHUAT6n = await ANRXTokensiVX2IP.approve.call(addressRdJSaj, uintExr2K9x, {from: accounts[1]});
		const boolBPHtcsV = await ANRXTokensiVX2IP.approve.call(addressY99yyGk, uintROGINNq, {from: accounts[4]});

		await expect(ANRXTokensiVX2IP.setParams.call(uintfJNv7aP, uintUrieFKa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})