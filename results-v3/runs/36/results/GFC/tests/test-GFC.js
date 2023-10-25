const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintUPWoxB = BigInt("554")
		const stringZEc3Sl8 = "7LzbnV82q"
		const stringki9PY6G = "MDBQ6w3rKC4shD2NxbjMzwXNwh19X8jl7Wk4HovGnX1rs9TAnOLscLx5u"
		const GFCA3BdBI3 = await GFC.new(uintUPWoxB, stringZEc3Sl8, stringki9PY6G, {from: accounts[3]});
		const uintzL8OrFg = BigInt("1352")
		const addressCxDF4zo = accounts[2]
		const uintFzeQKqb = BigInt("32")
		const addressa2Wztdk = accounts[3]
		const addresseAThnVq = accounts[1]
		const byteCv51HJI = "0x160f1a041e1d0a150c071d1c0113090e1a1c1502"
		const uintZGQQaR1 = BigInt("1794")
		const addressGLh4aa = accounts[2]
		const bytemadvBUg = "0x1b1d121d1913170620070a0a1e181d140a191c15070109"
		const uintCKNrStw = BigInt("1001")
		const addresswbK04PL = accounts[3]
		const boolJBwaIoK = await GFCA3BdBI3.transfer.call(addressCxDF4zo, uintzL8OrFg, {from: accounts[3]});
		const boolJ0aFCZE = await GFCA3BdBI3.transferFrom.call(addresseAThnVq, addressa2Wztdk, uintFzeQKqb, {from: accounts[0]});
		const boolHQuEjQe = await GFCA3BdBI3.approveAndCall.call(addressGLh4aa, uintZGQQaR1, byteCv51HJI, {from: "0x0000000000000000000000000000000000000001"});
		const boolINYAPC4 = await GFCA3BdBI3.approveAndCall.call(addresswbK04PL, uintCKNrStw, bytemadvBUg, {from: accounts[1]});

		assert.equal(boolJBwaIoK, true)
		await expect(GFCA3BdBI3.transferFrom.call(addresseAThnVq, addressa2Wztdk, uintFzeQKqb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintQuw81lO = BigInt("2003")
		const stringwB8rri = "V0NWpcEwVQrcnAO9hN8K3DO2xhrrlOp1YP8jQqbR72SjimNHLVVcUJSyuZh7lshmM5BMs"
		const stringRByFkqQ = "2hcRG7xcPdzH0kLKsSshrA3BAplmPVZ4JUE"
		const GFCKmcoXM0 = await GFC.new(uintQuw81lO, stringwB8rri, stringRByFkqQ, {from: accounts[1]});
		const uintO7jCov9 = BigInt("1255")
		const addressE5l3lNs = accounts[2]
		const bytew6VuGm7 = "0x030f1712061b0d0f12120412011304"
		const uintmDQrNq2 = BigInt("643")
		const addressaEtlzyz = accounts[1]
		const boolgBTwEyh = await GFCKmcoXM0.burnFrom.call(addressE5l3lNs, uintO7jCov9, {from: accounts[0]});
		const booliy4PAGg = await GFCKmcoXM0.approveAndCall.call(addressaEtlzyz, uintmDQrNq2, bytew6VuGm7, {from: accounts[0]});

		await expect(GFCKmcoXM0.burnFrom.call(addressE5l3lNs, uintO7jCov9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintQS3JE5J = BigInt("523")
		const stringpZsRNdg = "Ki4ujSbLCKBGdJx6k0yweqXKdKo6RfjswAMz4"
		const stringPW85EuX = "apGMHbjk2lPmP6t8Nt0gLbYPatnNMKx1I3qxKjRdo2Rj12lCP17WFVUJU5qptOfFISIx"
		const GFCAwpQd9 = await GFC.new(uintQS3JE5J, stringpZsRNdg, stringPW85EuX, {from: accounts[1]});
		const uinty2nJUBf = BigInt("1773")
		const byteUCReZXU = "0x1b0b171f200c"
		const uintvMvYAAo = BigInt("1258")
		const addressWcVjMNm = accounts[3]
		const uintGBlBEs1 = BigInt("1804")
		const addressKwnpceg = "0x0000000000000000000000000000000000000001"
		const booldR6CwyC = await GFCAwpQd9.burn.call(uinty2nJUBf, {from: accounts[2]});
		const boolJGELmTS = await GFCAwpQd9.approveAndCall.call(addressWcVjMNm, uintvMvYAAo, byteUCReZXU, {from: accounts[5]});
		const boolXKEsih6 = await GFCAwpQd9.burnFrom.call(addressKwnpceg, uintGBlBEs1, {from: accounts[5]});

		await expect(GFCAwpQd9.burn.call(uinty2nJUBf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintluNrhh = BigInt("677")
		const stringRvYb2rY = "mNv4LEpVCtQdzcsTo4FVaJFSWukA"
		const stringrFvIKWF = "ky"
		const GFCNzGbBP5 = await GFC.new(uintluNrhh, stringRvYb2rY, stringrFvIKWF, {from: accounts[3]});
		const uintKxsqW7y = BigInt("1238")
		const addressyevfDZt = accounts[1]
		const uint7a2dLj = BigInt("1407")
		const addressznEH9No = accounts[2]
		const addressl0b685 = accounts[3]
		const byteGVGogc = "0x171a0516180f1e1818020f141512191306170a12040a121504"
		const uintrQ2FbLJ = BigInt("995")
		const addressZxPzGkj = accounts[4]
		const booll9Vj5UU = await GFCNzGbBP5.approve.call(addressyevfDZt, uintKxsqW7y, {from: "0x0000000000000000000000000000000000000001"});
		const boolybc6tlP = await GFCNzGbBP5.transferFrom.call(addressl0b685, addressznEH9No, uint7a2dLj, {from: accounts[3]});
		const boolPTqSsof = await GFCNzGbBP5.approveAndCall.call(addressZxPzGkj, uintrQ2FbLJ, byteGVGogc, {from: accounts[4]});

		assert.equal(booll9Vj5UU, true)
		await expect(GFCNzGbBP5.transferFrom.call(addressl0b685, addressznEH9No, uint7a2dLj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintcFxenlB = BigInt("2003")
		const stringwB8rri = "V0NWpcEwVQrcnAO9hN8K3DO2xhrrlOp1YP8jQqbR72SjimNHLVVcUJSyuZh7lshmM5BMs"
		const stringRByFkqQ = "2hcRG7xcPdzH0kLKsSshrA3BAplmPVZ4JUE"
		const GFCKmcoXM0 = await GFC.new(uintcFxenlB, stringwB8rri, stringRByFkqQ, {from: accounts[1]});
		const uintl4MPQWS = BigInt("546")
		const addressry1U7BR = "0x0000000000000000000000000000000000000001"
		const byteobXqfaH = "0x05060118161a06021807011c0a04201717111c1e"
		const uintZMZP1IE = BigInt("1733")
		const addressXd77nIf = accounts[4]
		const uintorthPzw = BigInt("1255")
		const addressaJWEj9n = accounts[3]
		const boolZxthrjw = await GFCKmcoXM0.approve.call(addressry1U7BR, uintl4MPQWS, {from: accounts[0]});
		const boolBbc7BFe = await GFCKmcoXM0.approveAndCall.call(addressXd77nIf, uintZMZP1IE, byteobXqfaH, {from: accounts[1]});
		const boolgBTwEyh = await GFCKmcoXM0.burnFrom.call(addressaJWEj9n, uintorthPzw, {from: accounts[0]});

		assert.equal(boolZxthrjw, true)
		await expect(GFCKmcoXM0.approveAndCall.call(addressXd77nIf, uintZMZP1IE, byteobXqfaH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uinthP7Vb9 = BigInt("2003")
		const stringwB8rri = "V0NWpcEwVQrcnAO9hN8K3DO2xhrrlOp1YP8jQqbR72SjimNHLVVcUJSyuZh7lshmM5BMs"
		const stringRByFkqQ = "2hcRG7xcPdzH0kLKsSshrA3BAplmPVZ4JUE"
		const GFCKmcoXM0 = await GFC.new(uinthP7Vb9, stringwB8rri, stringRByFkqQ, {from: accounts[1]});
		const uint8OvGCa = BigInt("1175")
		const addressPnkXEUB = accounts[1]
		const uinthp4xqKr = BigInt("1848")
		const addressGp20qVq = accounts[3]
		const uintEljERGL = BigInt("869")
		const addressBQaRHX9 = accounts[4]
		const addressHZoj1HS = accounts[3]
		const boolQ2KV3qH = await GFCKmcoXM0.burnFrom.call(addressPnkXEUB, uint8OvGCa, {from: accounts[2]});
		const boolrK8Af6w = await GFCKmcoXM0.burnFrom.call(addressGp20qVq, uinthp4xqKr, {from: accounts[2]});
		const booldx7KkB = await GFCKmcoXM0.transferFrom.call(addressHZoj1HS, addressBQaRHX9, uintEljERGL, {from: accounts[2]});

		await expect(GFCKmcoXM0.burnFrom.call(addressPnkXEUB, uint8OvGCa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintX1WNxev = BigInt("2003")
		const stringwB8rri = "V0NWpcEwVQrcnAO9hN8K3DO2xhrrlOp1YP8jQqbR72SjimNHLVVcUJSyuZh7lshmM5BMs"
		const stringRByFkqQ = "2hcRG7xcPdzH0kLKsSshrA3BAplmPVZ4JUE"
		const GFCKmcoXM0 = await GFC.new(uintX1WNxev, stringwB8rri, stringRByFkqQ, {from: accounts[1]});
		const uintjCShiGs = BigInt("1491")
		const uintFU9kSeP = BigInt("1920")
		const addressxIDrWNW = accounts[4]
		const addressMuoqcLE = accounts[3]
		const uintrWlQXUE = BigInt("869")
		const addresswMv85Vs = accounts[4]
		const addressZ5364yd = accounts[3]
		const boolk16Bh0y = await GFCKmcoXM0.burn.call(uintjCShiGs, {from: accounts[1]});
		const boolmGP8bKy = await GFCKmcoXM0.transferFrom.call(addressMuoqcLE, addressxIDrWNW, uintFU9kSeP, {from: accounts[3]});
		const booldx7KkB = await GFCKmcoXM0.transferFrom.call(addressZ5364yd, addresswMv85Vs, uintrWlQXUE, {from: accounts[2]});

		assert.equal(boolk16Bh0y, true)
		await expect(GFCKmcoXM0.transferFrom.call(addressMuoqcLE, addressxIDrWNW, uintFU9kSeP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintunWF75 = BigInt("1635")
		const stringSlqqMMu = "PTkdYB6By23t6qkX2Ywwe4M5dge3BvxzMsUkDKzj3x2Id3NY6b2cA47KnqCJdNsRDFT1XfHsvXPonb"
		const stringUYuitZZ = "Bd5m7K9hh4sh5dLrbs0lhfwsBLcE6GHTM5FHQrgdJ2SuQffG8"
		const GFCeRtGYma = await GFC.new(uintunWF75, stringSlqqMMu, stringUYuitZZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintpaiZyKk = BigInt("1746")
		const byteLzmKoj = "0x13040c1901090b091e051b05"
		const uintzM8Flqn = BigInt("919")
		const addressxqGsGQe = accounts[5]
		const uintTqVK6yg = BigInt("642")
		const addressw5k8hdm = accounts[0]
		const boolRhCNEpE = await GFCeRtGYma.burn.call(uintpaiZyKk, {from: accounts[0]});
		const boolJzokJ0Z = await GFCeRtGYma.approveAndCall.call(addressxqGsGQe, uintzM8Flqn, byteLzmKoj, {from: accounts[4]});
		const booltOhdXF1 = await GFCeRtGYma.approve.call(addressw5k8hdm, uintTqVK6yg, {from: accounts[2]});
	});
})