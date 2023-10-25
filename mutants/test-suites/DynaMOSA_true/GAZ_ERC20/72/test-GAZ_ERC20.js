const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20bAnqiu6 = await GAZ_ERC20.new({from: accounts[0]});
		const uintagvCWdS = BigInt("304")
		const addressLZHqKC = "0x0000000000000000000000000000000000000001"
		const uinta3tp0no = BigInt("967")
		const addressKFY6fpr = accounts[3]
		const uintxQWI0O8 = BigInt("1979")
		const addressC6GHtQS = "0x0000000000000000000000000000000000000001"
		const boolEoUp8a2 = await GAZ_ERC20bAnqiu6.approve.call(addressLZHqKC, uintagvCWdS, {from: accounts[5]});
//		const boolDQULZsm = await GAZ_ERC20bAnqiu6.transfer.call(addressKFY6fpr, uinta3tp0no, {from: accounts[1]});
//		const boolTZOmTsA = await GAZ_ERC20bAnqiu6.transfer.call(addressC6GHtQS, uintxQWI0O8, {from: accounts[2]});

		assert.equal(boolEoUp8a2, true)
		await expect(GAZ_ERC20bAnqiu6.transfer.call(addressKFY6fpr, uinta3tp0no, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20A1k3DDx = await GAZ_ERC20.new({from: accounts[1]});
		const addressLI2r9iE = accounts[2]
		const uintzMumt3 = BigInt("134")
		const addressy5CDMLD = accounts[0]
		const uintdpEQKui = BigInt("1250")
		const addressjuZALDd = accounts[5]
		const uintslxP2dw = BigInt("1144")
		const addressUOhYe8j = accounts[3]
//		const booljt7SLwq = await GAZ_ERC20A1k3DDx.approve.call(addressLI2r9iE, {from: accounts[4]});
//		const boolZO0RjZr = await GAZ_ERC20A1k3DDx.transfer.call(addressy5CDMLD, uintzMumt3, {from: accounts[2]});
//		const boolSKTSsFQ = await GAZ_ERC20A1k3DDx.approve.call(addressjuZALDd, uintdpEQKui, {from: accounts[0]});
//		const boolYBwqAO = await GAZ_ERC20A1k3DDx.approve.call(addressUOhYe8j, uintslxP2dw, {from: accounts[1]});

		await expect(GAZ_ERC20A1k3DDx.approve.call(addressLI2r9iE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20jNGESyI = await GAZ_ERC20.new({from: accounts[0]});
		const addressbppQvY5 = accounts[5]
		const uintGh0MbW6 = BigInt("1889")
		const addressRdKoJcU = accounts[2]
		const uintX9gNSRg = BigInt("498")
		const addressbCktLfw = accounts[1]
		const addressjLTrmhZ = accounts[4]
		const uint9fNKy5 = BigInt("542")
		const addressdUdh3il = accounts[1]
		const addressVjhC15S = accounts[1]
//		const boolqbgtOCP = await GAZ_ERC20jNGESyI.approve.call(addressbppQvY5, {from: accounts[0]});
//		const boolmUkhHBR = await GAZ_ERC20jNGESyI.transfer.call(addressRdKoJcU, uintGh0MbW6, {from: accounts[5]});
//		const boolLph7Ii = await GAZ_ERC20jNGESyI.transferFrom.call(addressjLTrmhZ, addressbCktLfw, uintX9gNSRg, {from: accounts[4]});
//		const boolQLO2SCf = await GAZ_ERC20jNGESyI.approve.call(addressdUdh3il, uint9fNKy5, {from: accounts[4]});
//		const boolLRmkSrz = await GAZ_ERC20jNGESyI.approve.call(addressVjhC15S, {from: accounts[1]});

		await expect(GAZ_ERC20jNGESyI.approve.call(addressbppQvY5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20qHQV8d = await GAZ_ERC20.new({from: accounts[2]});
		const addressO8uvydO = accounts[0]
		const addressdGCO7b = accounts[4]
		const uintjt7ttpm = BigInt("119")
		const addressNIHP8wc = accounts[4]
		const uintTkjvrpO = BigInt("993")
		const addressqJuu29 = accounts[2]
//		const boolyPpijLT = await GAZ_ERC20qHQV8d.approve.call(addressO8uvydO, {from: accounts[5]});
//		const boolciS8yi1 = await GAZ_ERC20qHQV8d.approve.call(addressdGCO7b, {from: accounts[2]});
//		const boolOpXzPTZ = await GAZ_ERC20qHQV8d.approve.call(addressNIHP8wc, uintjt7ttpm, {from: accounts[0]});
//		const boolImCuCkw = await GAZ_ERC20qHQV8d.approve.call(addressqJuu29, uintTkjvrpO, {from: accounts[3]});

		await expect(GAZ_ERC20qHQV8d.approve.call(addressO8uvydO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20YFHc4W7 = await GAZ_ERC20.new({from: accounts[0]});
		const addressqczDzqe = accounts[0]
		const uintV2EmVt = BigInt("1394")
		const addressr81fpyU = accounts[0]
		const addressh7AwQz = accounts[5]
		const uintTRbHTSN = BigInt("1708")
		const addressqwmpMH = accounts[5]
//		const boolmuU8hUE = await GAZ_ERC20YFHc4W7.approve.call(addressqczDzqe, {from: "0x0000000000000000000000000000000000000001"});
//		const booly1LPE78 = await GAZ_ERC20YFHc4W7.transferFrom.call(addressh7AwQz, addressr81fpyU, uintV2EmVt, {from: accounts[4]});
//		const boolIlrktQS = await GAZ_ERC20YFHc4W7.approve.call(addressqwmpMH, uintTRbHTSN, {from: accounts[1]});

		await expect(GAZ_ERC20YFHc4W7.approve.call(addressqczDzqe, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20oymyB6Z = await GAZ_ERC20.new({from: accounts[3]});
		const uinteJWKeWX = BigInt("1200")
		const addressr8nn2sP = "0x0000000000000000000000000000000000000001"
		const uintxj6Qqq = BigInt("1542")
		const addressA5hM4VT = accounts[2]
		const addresswk3FL2y = accounts[5]
		const uintQL7CKRQ = BigInt("958")
		const addressRjqZJ3E = accounts[2]
		const uintMFEame2 = BigInt("1602")
		const addressyV49ZjB = "0x0000000000000000000000000000000000000001"
		const uintgMoRvrd = BigInt("225")
		const addressExctjTY = accounts[4]
		const boolthBKoDk = await GAZ_ERC20oymyB6Z.approve.call(addressr8nn2sP, uinteJWKeWX, {from: accounts[5]});
//		const boolxpTWzIU = await GAZ_ERC20oymyB6Z.transferFrom.call(addresswk3FL2y, addressA5hM4VT, uintxj6Qqq, {from: accounts[4]});
//		const boolbnGew6t = await GAZ_ERC20oymyB6Z.transfer.call(addressRjqZJ3E, uintQL7CKRQ, {from: accounts[2]});
//		const boolEbj3aC = await GAZ_ERC20oymyB6Z.approve.call(addressyV49ZjB, uintMFEame2, {from: accounts[0]});
//		const boolZ465iir = await GAZ_ERC20oymyB6Z.transfer.call(addressExctjTY, uintgMoRvrd, {from: accounts[0]});

		assert.equal(boolthBKoDk, true)
		await expect(GAZ_ERC20oymyB6Z.transferFrom.call(addresswk3FL2y, addressA5hM4VT, uintxj6Qqq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20V1mI6xI = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqj4wSJ2 = BigInt("197")
		const addressVks7TW = accounts[1]
		const uintUyX6vLs = BigInt("682")
		const addresstKMfrUM = accounts[0]
		const uintrlr12dn = BigInt("1084")
		const addressFSo6S9f = accounts[0]
		const uintqjCif5 = BigInt("1168")
		const addressGObQD3 = accounts[0]
		const addressgphnZzV = accounts[2]
		const booljBxZra = await GAZ_ERC20V1mI6xI.approve.call(addressVks7TW, uintqj4wSJ2, {from: accounts[0]});
		const boolhcP9uuq = await GAZ_ERC20V1mI6xI.approve.call(addresstKMfrUM, uintUyX6vLs, {from: accounts[3]});
		const boolojxIeyb = await GAZ_ERC20V1mI6xI.approve.call(addressFSo6S9f, uintrlr12dn, {from: accounts[5]});
		const booloh0bIRz = await GAZ_ERC20V1mI6xI.transfer.call(addressGObQD3, uintqjCif5, {from: accounts[2]});
		const bool3vEj71 = await GAZ_ERC20V1mI6xI.approve.call(addressgphnZzV, {from: accounts[3]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20oymyB6Z = await GAZ_ERC20.new({from: accounts[3]});
		const uintXZPXFic = BigInt("738")
		const addresspK0AsNi = accounts[0]
		const uintO64JrQ = BigInt("2009")
		const addressyvspoRh = accounts[1]
		const uintkHmgm9z = BigInt("914")
		const addressSgBHFgo = accounts[2]
		const uintgFgqYu = BigInt("682")
		const addressAYdXqOJ = accounts[5]
		const boolWnZia9i = await GAZ_ERC20oymyB6Z.approve.call(addresspK0AsNi, uintXZPXFic, {from: accounts[0]});
		const boolzNF0ad = await GAZ_ERC20oymyB6Z.approve.call(addressyvspoRh, uintO64JrQ, {from: accounts[4]});
		const boolj1rKl5g = await GAZ_ERC20oymyB6Z.transfer.call(addressSgBHFgo, uintkHmgm9z, {from: accounts[3]});
		const boolcebMhQv = await GAZ_ERC20oymyB6Z.approve.call(addressAYdXqOJ, uintgFgqYu, {from: accounts[4]});

		assert.equal(boolWnZia9i, true)
		assert.equal(boolcebMhQv, true)
		assert.equal(boolj1rKl5g, true)
		assert.equal(boolzNF0ad, true)
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20JgXcQvB = await GAZ_ERC20.new({from: accounts[3]});
		const addressQMEU2j6 = accounts[3]
		const uintKW0gEDb = BigInt("1862")
		const addressSmo7En1 = "0x0000000000000000000000000000000000000000"
//		const boolzxf1C96 = await GAZ_ERC20JgXcQvB.approve.call(addressQMEU2j6, {from: accounts[3]});
//		const boolEZO7qSa = await GAZ_ERC20JgXcQvB.transfer.call(addressSmo7En1, uintKW0gEDb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20JgXcQvB.approve.call(addressQMEU2j6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20N8curMF = await GAZ_ERC20.new({from: accounts[1]});
		const addressgrcfv1h = accounts[2]
		const uintut6Z4vm = BigInt("752")
		const addressksDaCas = accounts[1]
		const uintzrPTJN5 = BigInt("51")
		const addressbg3I4EA = accounts[3]
		const uintTdJEt5 = BigInt("1491")
		const addressGGjSJza = accounts[1]
		const addressP3Xful9 = accounts[3]
//		const boollVt0f1b = await GAZ_ERC20N8curMF.approve.call(addressgrcfv1h, {from: accounts[1]});
//		const boolSRoVh7D = await GAZ_ERC20N8curMF.approve.call(addressksDaCas, uintut6Z4vm, {from: accounts[4]});
//		const boolSgbntyU = await GAZ_ERC20N8curMF.approve.call(addressbg3I4EA, uintzrPTJN5, {from: accounts[1]});
//		const boolPbjRDU2 = await GAZ_ERC20N8curMF.transferFrom.call(addressP3Xful9, addressGGjSJza, uintTdJEt5, {from: accounts[4]});

		await expect(GAZ_ERC20N8curMF.approve.call(addressgrcfv1h, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20JgXcQvB = await GAZ_ERC20.new({from: accounts[3]});
		const addresssvUeFob = accounts[4]
		const uintL1pfp7f = BigInt("403")
		const addresssPXt1NO = accounts[4]
		const uint2FSEnI = BigInt("1862")
		const addresswbfddA4 = "0x0000000000000000000000000000000000000001"
//		const boolJ9oxofz = await GAZ_ERC20JgXcQvB.approve.call(addresssvUeFob, {from: accounts[2]});
//		const boolJDKACxu = await GAZ_ERC20JgXcQvB.transfer.call(addresssPXt1NO, uintL1pfp7f, {from: accounts[3]});
//		const boolEZO7qSa = await GAZ_ERC20JgXcQvB.transfer.call(addresswbfddA4, uint2FSEnI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20JgXcQvB.approve.call(addresssvUeFob, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})