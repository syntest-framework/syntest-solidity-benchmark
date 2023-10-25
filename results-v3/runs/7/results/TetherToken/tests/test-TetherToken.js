const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintz6KkGwa = BigInt("975")
		const stringEmBdNEQ = "j7pHRfvoVDl5IyCdtt85rxzyBzF1RxyzxUivYJPQlNFDsX172wse477dGCvy"
		const stringxTTTLB = "DcdwamOjPB1jJxHj92PGLBsyZb"
		const uintFfpj0sP = BigInt("56")
		const TetherTokenHmPmYr9 = await TetherToken.new(uintz6KkGwa, stringEmBdNEQ, stringxTTTLB, uintFfpj0sP, {from: accounts[5]});
		const uintJ1whq8m = BigInt("598")
		const addressvM8PQrZ = accounts[4]
		const uintLD8qJ4J = BigInt("1105")
		const addresslL4aikW = accounts[4]
		const uintRRAgEh = BigInt("1365")
		const uintxgPVIb = BigInt("190")
		const addressT0ovyW8 = accounts[3]
		const addressVgeAHwJ = accounts[3]
		const addressvzr9p1I = accounts[2]
		const uintm7Rt1VM = BigInt("517")
		const addressvLOM9oL = await TetherTokenHmPmYr9.approve.call(addressvM8PQrZ, uintJ1whq8m, {from: accounts[1]});
		const addressEVoItRt = await TetherTokenHmPmYr9.approve.call(addresslL4aikW, uintLD8qJ4J, {from: "0x0000000000000000000000000000000000000001"});
		const uintBEsADpb = await TetherTokenHmPmYr9.issue.call(uintRRAgEh, {from: accounts[0]});
		const addresseXFiytq = await TetherTokenHmPmYr9.transferFrom.call(addressVgeAHwJ, addressT0ovyW8, uintxgPVIb, {from: "0x0000000000000000000000000000000000000001"});
		const addressTtFbgqI = await TetherTokenHmPmYr9.deprecate.call(addressvzr9p1I, {from: "0x0000000000000000000000000000000000000001"});
		const uintx7gkTfT = await TetherTokenHmPmYr9.redeem.call(uintm7Rt1VM, {from: accounts[0]});

		await expect(TetherTokenHmPmYr9.issue.call(uintRRAgEh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintHvfGERf = BigInt("1227")
		const stringzfF8ESs = "tRbopf5iGqXKIcxiMXGgorIGfIW665IwVzKlxnGykaVQAGCGISrLmDQlNhfsAwiArTzWisjfdxd"
		const stringWfO76x4 = "ryAGGyuAqFLejla9UvLfSKIJw23AdeOLvbwWLPsWbd5MPlDBaUXY9m"
		const uintmETx2u0 = BigInt("325")
		const TetherTokenMu6qzsh = await TetherToken.new(uintHvfGERf, stringzfF8ESs, stringWfO76x4, uintmETx2u0, {from: accounts[4]});
		const uintj483Jz = BigInt("436")
		const addressFvfS9qT = accounts[3]
		const uintUfc5S2N = BigInt("957")
		const uintJVYLn6l = BigInt("678")
		const addressmgOYNui = accounts[1]
		const uintyaoPsCh = await TetherTokenMu6qzsh.redeem.call(uintj483Jz, {from: accounts[1]});
		const uintlOC0oAr = await TetherTokenMu6qzsh.balanceOf.call(addressFvfS9qT, {from: accounts[3]});
		const uintjhTl92d = await TetherTokenMu6qzsh.totalSupply.call({from: accounts[1]});
		const uintKvn2tEd = await TetherTokenMu6qzsh.setParams.call(uintJVYLn6l, uintUfc5S2N, {from: accounts[0]});
		const addressJBhFDbh = await TetherTokenMu6qzsh.deprecate.call(addressmgOYNui, {from: accounts[1]});
		const uintBk7p8Hh = await TetherTokenMu6qzsh.totalSupply.call({from: accounts[3]});

		await expect(TetherTokenMu6qzsh.redeem.call(uintj483Jz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintgqznkA7 = BigInt("244")
		const stringiVAGTaL = "emQlaxmefaw9uSj6mqA0U9ZnOYdfH"
		const stringXtiiwtv = "PQcKb2GBB4kOc5sDYXtGvZv4msCUr5"
		const uintkKAAcfv = BigInt("1349")
		const TetherTokenU9gaHdn = await TetherToken.new(uintgqznkA7, stringiVAGTaL, stringXtiiwtv, uintkKAAcfv, {from: accounts[2]});
		const uinthDpbsAV = BigInt("125")
		const addressuL3OZm3 = accounts[2]
		const addressHTv8dRc = accounts[2]
		const addressMmt3te7 = accounts[3]
		const uintBZDgGmu = await TetherTokenU9gaHdn.totalSupply.call({from: accounts[4]});
		const addressD1cL14p = await TetherTokenU9gaHdn.approve.call(addressuL3OZm3, uinthDpbsAV, {from: accounts[3]});
		const uintgTg4ob6 = await TetherTokenU9gaHdn.allowance.call(addressMmt3te7, addressHTv8dRc, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintBZDgGmu, BigInt("244"))
		assert.equal(uintgTg4ob6, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uint9LmaSt = BigInt("1931")
		const stringIljbNvE = "d5oYCJDuWutCFVRO47SUszGdwhSx1pHHQYwmJTFsgqWOQMFH"
		const stringyeqSFXh = "mlLcVfIRRkP9gudczVYNyfWV8X3sflTJAiy7y4CGcjiXXnGjq9"
		const uintekjOqOi = BigInt("1988")
		const TetherTokenKCPI6a = await TetherToken.new(uint9LmaSt, stringIljbNvE, stringyeqSFXh, uintekjOqOi, {from: accounts[4]});
		const addressSbsvxhk = accounts[5]
		const address1QrxHN = accounts[4]
		const uintO9ua1Xi = BigInt("1902")
		const uintBZVXPiu = BigInt("1787")
		const addressnVKrRaZ = accounts[4]
		const uintPC5AFPJ = BigInt("284")
		const uintpPf3txn = BigInt("1791")
		const uintnh2r48w = BigInt("1677")
		const uintytvLGnB = await TetherTokenKCPI6a.allowance.call(address1QrxHN, addressSbsvxhk, {from: accounts[0]});
		const uintyTgLS8o = await TetherTokenKCPI6a.setParams.call(uintBZVXPiu, uintO9ua1Xi, {from: accounts[0]});
		const addresshaiEn6e = await TetherTokenKCPI6a.deprecate.call(addressnVKrRaZ, {from: accounts[4]});
		const uintVel9S3v = await TetherTokenKCPI6a.issue.call(uintPC5AFPJ, {from: accounts[2]});
		const uintfdIjPn = await TetherTokenKCPI6a.setParams.call(uintnh2r48w, uintpPf3txn, {from: accounts[4]});

		assert.equal(uintytvLGnB, BigInt("0"))
		await expect(TetherTokenKCPI6a.setParams.call(uintBZVXPiu, uintO9ua1Xi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintus9t2Np = BigInt("1582")
		const stringYZSxOF5 = "cfHv9bUjDts"
		const stringgLmiL5W = "G3yxoUF"
		const uinth2t6d0b = BigInt("1060")
		const TetherTokenDplDu6 = await TetherToken.new(uintus9t2Np, stringYZSxOF5, stringgLmiL5W, uinth2t6d0b, {from: accounts[2]});
		const addresskUDDJK2 = accounts[1]
		const addressuDumuqb = accounts[2]
		const addressSPHEB34 = accounts[0]
		const uintLgb4xiI = BigInt("237")
		const uintKvWjBK = BigInt("235")
		const uintKcg5X1X = BigInt("1941")
		const addressda0CpaS = accounts[4]
		const uintUrWKvzk = await TetherTokenDplDu6.allowance.call(addressuDumuqb, addresskUDDJK2, {from: accounts[4]});
		const addressGgGtlss = await TetherTokenDplDu6.deprecate.call(addressSPHEB34, {from: accounts[0]});
		const uintF3tZth = await TetherTokenDplDu6.redeem.call(uintLgb4xiI, {from: accounts[0]});
		const uintNEO9E9U = await TetherTokenDplDu6.issue.call(uintKvWjBK, {from: accounts[5]});
		const addressvRZxZRj = await TetherTokenDplDu6.approve.call(addressda0CpaS, uintKcg5X1X, {from: accounts[3]});

		assert.equal(uintUrWKvzk, BigInt("0"))
		await expect(TetherTokenDplDu6.deprecate.call(addressSPHEB34, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintn2ZMxxf = BigInt("483")
		const stringLDnqcNk = "j2MFebivgXaCnc6oYw2AbFydGrVN3ZZMiTVACKt"
		const stringjtQb3vg = "RxzAeTGWacwtBI8yvc8128DhHubvWGfX7cB1eYWZfdFtM4JC9DINwjHpMBVYQhS3dIoVROGVf7lusDTaI85rKioFCWI2z"
		const uintqCAmdTf = BigInt("561")
		const TetherToken3v1p8t = await TetherToken.new(uintn2ZMxxf, stringLDnqcNk, stringjtQb3vg, uintqCAmdTf, {from: accounts[1]});
		const uintPKBkGOw = BigInt("875")
		const addressqx4xLB7 = accounts[1]
		const uintDvraUn9 = BigInt("239")
		const addressioiEwfv = accounts[1]
		const uintegJz7pD = BigInt("909")
		const uintf4IglVB = BigInt("1242")
		const addressNbcXOfP = accounts[3]
		const addressK1bfWxr = await TetherToken3v1p8t.transfer.call(addressqx4xLB7, uintPKBkGOw, {from: accounts[2]});
		const uintHV3pTWK = await TetherToken3v1p8t.issue.call(uintDvraUn9, {from: accounts[3]});
		const addresstSckN21 = await TetherToken3v1p8t.deprecate.call(addressioiEwfv, {from: "0x0000000000000000000000000000000000000001"});
		const uintvL8m0CL = await TetherToken3v1p8t.issue.call(uintegJz7pD, {from: "0x0000000000000000000000000000000000000001"});
		const addressXTey5Rq = await TetherToken3v1p8t.approve.call(addressNbcXOfP, uintf4IglVB, {from: accounts[3]});

		await expect(TetherToken3v1p8t.transfer.call(addressqx4xLB7, uintPKBkGOw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintxJJH2cb = BigInt("1688")
		const stringESHRQFS = "KoDiNaMwP7ZQ2FpLcIHkvYk4j5f9xIlPMR40ea1w60ANMxTktPnGzdj0lbnisR6Y7MeqTv4gVA6LzZQmRGMeW7uU"
		const stringD9cH4re = "EXygFZ44FadlUu4fP8iYiDmo9u3j6IAr"
		const uintM1KohR = BigInt("1228")
		const TetherTokeneGbltCv = await TetherToken.new(uintxJJH2cb, stringESHRQFS, stringD9cH4re, uintM1KohR, {from: accounts[2]});
		const addressdlqMMJi = accounts[3]
		const addresswqedoQs = accounts[4]
		const addressf1434V = accounts[1]
		const uintSACQAwB = BigInt("1722")
		const uintmORll4 = BigInt("588")
		const addressveRRx3i = accounts[1]
		const addressan3uFi = accounts[4]
		const uintiYrIvnB = await TetherTokeneGbltCv.totalSupply.call({from: accounts[3]});
		const uintfuRx5xh = await TetherTokeneGbltCv.allowance.call(addresswqedoQs, addressdlqMMJi, {from: accounts[2]});
		const uintXNMrSWg = await TetherTokeneGbltCv.balanceOf.call(addressf1434V, {from: accounts[3]});
		const uintH7Tk4pZ = await TetherTokeneGbltCv.issue.call(uintSACQAwB, {from: accounts[1]});
		const addressKyus3BM = await TetherTokeneGbltCv.approve.call(addressveRRx3i, uintmORll4, {from: accounts[3]});
		const addressk4KDZs = await TetherTokeneGbltCv.deprecate.call(addressan3uFi, {from: accounts[0]});

		assert.equal(uintXNMrSWg, BigInt("0"))
		assert.equal(uintfuRx5xh, BigInt("0"))
		assert.equal(uintiYrIvnB, BigInt("1688"))
		await expect(TetherTokeneGbltCv.issue.call(uintSACQAwB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintpcdU9eJ = BigInt("239")
		const stringMUJCyp = "S5tR2PaDcwgh44WaQVQBr7qgZvJEKzV8rLXDGEBPzRq0H9wZ4HVuSxKG5oS"
		const stringAEcLkpo = "bTdUddKeWaPX"
		const uintjN7T48h = BigInt("569")
		const TetherTokenrZNVJNX = await TetherToken.new(uintpcdU9eJ, stringMUJCyp, stringAEcLkpo, uintjN7T48h, {from: accounts[1]});
		const uintWgFQEWk = BigInt("1269")
		const addressIP04lAy = accounts[1]
		const addresssowIasp = accounts[1]
		const addressdxgRBr1 = accounts[4]
		const uintBO0zAJu = BigInt("1485")
		const addressED5FcY = accounts[0]
		const addresspRnlZk1 = accounts[5]
		const addressngJcYPj = accounts[3]
		const uintbSLBWdj = BigInt("1428")
		const addressFgNrjp = accounts[0]
		const addressDl3375r = accounts[4]
		const addressYkCCEGZ = await TetherTokenrZNVJNX.approve.call(addressIP04lAy, uintWgFQEWk, {from: accounts[3]});
		const uintXU4c1o = await TetherTokenrZNVJNX.allowance.call(addressdxgRBr1, addresssowIasp, {from: accounts[1]});
		const addresssgl0fHX = await TetherTokenrZNVJNX.approve.call(addressED5FcY, uintBO0zAJu, {from: accounts[1]});
		const uintKvJYXi2 = await TetherTokenrZNVJNX.allowance.call(addressngJcYPj, addresspRnlZk1, {from: accounts[4]});
		const uintJvqWic = await TetherTokenrZNVJNX.totalSupply.call({from: accounts[4]});
		const addressiWhvt0 = await TetherTokenrZNVJNX.transferFrom.call(addressDl3375r, addressFgNrjp, uintbSLBWdj, {from: accounts[1]});
		const uintm7FFwek = await TetherTokenrZNVJNX.totalSupply.call({from: accounts[1]});

		assert.equal(uintJvqWic, BigInt("239"))
		assert.equal(uintKvJYXi2, BigInt("0"))
		assert.equal(uintXU4c1o, BigInt("0"))
		await expect(TetherTokenrZNVJNX.transferFrom.call(addressDl3375r, addressFgNrjp, uintbSLBWdj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintgFLvtD7 = BigInt("60")
		const stringhM8ffBC = "DmPfljxpYzvCoMzDOqyhlnKMM2r9ZtCKQcdC4CfBDeilYNoqEJ66Y7ttHGulWKWvvjQedAYBjeNiIhjnlj37BySb4"
		const stringMWj0jok = "DDkxAetx5Wrt2QiML9ZX5YV1P5z8ma1X"
		const uintPFgJzD = BigInt("1400")
		const TetherTokenzJws8jY = await TetherToken.new(uintgFLvtD7, stringhM8ffBC, stringMWj0jok, uintPFgJzD, {from: "0x0000000000000000000000000000000000000001"});
		const uintKmOijLh = BigInt("677")
		const addressuPIrgKT = accounts[0]
		const uintrpvbaFr = BigInt("631")
		const addressIXrAUOb = accounts[4]
		const addresscjJJixW = accounts[0]
		const addressQbjpD1R = await TetherTokenzJws8jY.approve.call(addressuPIrgKT, uintKmOijLh, {from: accounts[4]});
		const addressVXbe30I = await TetherTokenzJws8jY.transferFrom.call(addresscjJJixW, addressIXrAUOb, uintrpvbaFr, {from: accounts[3]});
		const uinte5zYNy7 = await TetherTokenzJws8jY.totalSupply.call({from: accounts[2]});
	});

	it('test for TetherToken', async () => {
		const uintO8RpVYb = BigInt("239")
		const stringMUJCyp = "S5tR2PaDcwgh44WaQVQBr7qgZvJEKzV8rLXDGEBPzRq0H9wZ4HVuSxKG5oS"
		const stringAEcLkpo = "bTdUddKeWaPX"
		const uintYPMYVjW = BigInt("569")
		const TetherTokenrZNVJNX = await TetherToken.new(uintO8RpVYb, stringMUJCyp, stringAEcLkpo, uintYPMYVjW, {from: accounts[1]});
		const uintV0krxFc = BigInt("1269")
		const addresstgfR377 = accounts[1]
		const addressQLFaFHU = accounts[1]
		const addresspvk4EIq = accounts[4]
		const addressqJsmGy = accounts[5]
		const addressJqnSkB = "0x0000000000000000000000000000000000000001"
		const addressvRMvP7 = accounts[5]
		const addresse88KyPg = accounts[3]
		const addressosdBfCo = "0x00000000000000000000000000000000000000-1"
		const uintsG7gllF = BigInt("1428")
		const addressW3RiBi1 = accounts[1]
		const addresstn7ypLm = accounts[4]
		const addressBOsGHzX = accounts[5]
		const addresszDuMOC8 = "0x0000000000000000000000000000000000000001"
		const uintgRQLHDe = await TetherTokenrZNVJNX.totalSupply.call({from: accounts[1]});
		const addressYkCCEGZ = await TetherTokenrZNVJNX.approve.call(addresstgfR377, uintV0krxFc, {from: accounts[3]});
		const uintXU4c1o = await TetherTokenrZNVJNX.allowance.call(addresspvk4EIq, addressQLFaFHU, {from: accounts[1]});
		const uintpNpSQqT = await TetherTokenrZNVJNX.allowance.call(addressJqnSkB, addressqJsmGy, {from: accounts[2]});
		const uintKvJYXi2 = await TetherTokenrZNVJNX.allowance.call(addresse88KyPg, addressvRMvP7, {from: accounts[4]});
		const uintJvqWic = await TetherTokenrZNVJNX.totalSupply.call({from: accounts[4]});
		const uintC2Wg32D = await TetherTokenrZNVJNX.balanceOf.call(addressosdBfCo, {from: accounts[1]});
		const addressiWhvt0 = await TetherTokenrZNVJNX.transferFrom.call(addresstn7ypLm, addressW3RiBi1, uintsG7gllF, {from: accounts[1]});
		const uintm7FFwek = await TetherTokenrZNVJNX.totalSupply.call({from: accounts[1]});
		const uinthHvyMUS = await TetherTokenrZNVJNX.allowance.call(addresszDuMOC8, addressBOsGHzX, {from: accounts[0]});

		assert.equal(uintJvqWic, BigInt("239"))
		assert.equal(uintKvJYXi2, BigInt("0"))
		assert.equal(uintXU4c1o, BigInt("0"))
		assert.equal(uintgRQLHDe, BigInt("239"))
		assert.equal(uintpNpSQqT, BigInt("0"))
		await expect(TetherTokenrZNVJNX.balanceOf.call(addressosdBfCo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})