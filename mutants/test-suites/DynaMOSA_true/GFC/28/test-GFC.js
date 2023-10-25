const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintrvSWd5 = BigInt("386")
		const stringXykUzYT = "V7G4ygHlhiWlLDZagp3E8FdBTvWMtbu6Ae"
		const stringDzjBI7N = "3RASoozPhoBbdrkXRemVACOpDaGBcubUBjhi4fv9ultlYK1LixSW2HGXcwU9bEowQP9CLTed4buTEEZF68Kaf5"
		const GFCXYi4x40 = await GFC.new(uintrvSWd5, stringXykUzYT, stringDzjBI7N, {from: accounts[2]});
		const uintPtB1oYc = BigInt("1469")
		const addressIO8uVtJ = "0x0000000000000000000000000000000000000001"
		const addressBUfCTzM = accounts[0]
		const uintM5SErDD = BigInt("594")
		const uintqkWzjGr = BigInt("1873")
//		const boolasMMM7y = await GFCXYi4x40.transferFrom.call(addressBUfCTzM, addressIO8uVtJ, uintPtB1oYc, {from: accounts[3]});
//		const boolvb3cBc2 = await GFCXYi4x40.burn.call(uintM5SErDD, {from: accounts[5]});
//		const boolmR8lvN1 = await GFCXYi4x40.burn.call(uintqkWzjGr, {from: accounts[1]});

		await expect(GFCXYi4x40.transferFrom.call(addressBUfCTzM, addressIO8uVtJ, uintPtB1oYc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintK5xbtx2 = BigInt("1786")
		const stringGGqMR1Z = "tdrjedhWLXT6JFobw9tGWeNEqhzq1tOrrXIslG6lK0wyuZSugP1AVfxKjQHVEeOYNS40xfYQNh1RKGD46vyt63oBt"
		const stringBBIcJM5 = "17Xrxx"
		const GFCDMoX3d3 = await GFC.new(uintK5xbtx2, stringGGqMR1Z, stringBBIcJM5, {from: accounts[3]});
		const uintVKTf2g = BigInt("1400")
		const addressdS3iyyj = accounts[4]
		const uintep4UQ8P = BigInt("111")
		const addresscZygOLz = accounts[0]
		const addressw1xgVK2 = accounts[0]
		const uintUSgzFX4 = BigInt("351")
		const addressQKSFOP = accounts[2]
		const addresslsJdm0F = accounts[2]
		const uintJ4KVvpN = BigInt("178")
		const addresstlwViFn = accounts[2]
		const addressBhPgeW = accounts[3]
//		const boolravzpor = await GFCDMoX3d3.transfer.call(addressdS3iyyj, uintVKTf2g, {from: accounts[0]});
//		const boolEU6vwUS = await GFCDMoX3d3.transferFrom.call(addressw1xgVK2, addresscZygOLz, uintep4UQ8P, {from: accounts[3]});
//		const boolXjUi7hV = await GFCDMoX3d3.transferFrom.call(addresslsJdm0F, addressQKSFOP, uintUSgzFX4, {from: accounts[2]});
//		const boolyoCS7RA = await GFCDMoX3d3.transferFrom.call(addressBhPgeW, addresstlwViFn, uintJ4KVvpN, {from: accounts[5]});

		await expect(GFCDMoX3d3.transfer.call(addressdS3iyyj, uintVKTf2g, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintIxmuAfY = BigInt("1041")
		const stringIAHcf6C = "m11qq73L1ENtVfjgX7TmWbOn7PtSpByxGQi2VQP7mun7oDm3mapH94IAVjfWZIgPA1U88Aon53UyilrrWgd5"
		const stringShGiKt = "U8ioiZ55FtvKXj2aJY1m1kqMsdlilFNBYSJWUQi3eXu1Edj0iAe8XdNHcHVDe6orqS5QSlRUqgRrQpXNqTPDPx"
		const GFCYfOqCaZ = await GFC.new(uintIxmuAfY, stringIAHcf6C, stringShGiKt, {from: accounts[5]});
		const uintPDkppnK = BigInt("1298")
		const addressAcctdTg = accounts[2]
		const uintYS0Bz7 = BigInt("1123")
		const addressp0Pzd8i = accounts[0]
		const uintzfUy8hJ = BigInt("402")
		const boolvhHcBbx = await GFCYfOqCaZ.approve.call(addressAcctdTg, uintPDkppnK, {from: accounts[5]});
		const boolsgwSeb = await GFCYfOqCaZ.approve.call(addressp0Pzd8i, uintYS0Bz7, {from: accounts[4]});
//		const boolaSgAzcm = await GFCYfOqCaZ.burn.call(uintzfUy8hJ, {from: accounts[3]});

		assert.equal(boolsgwSeb, true)
		assert.equal(boolvhHcBbx, true)
		await expect(GFCYfOqCaZ.burn.call(uintzfUy8hJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintreab55f = BigInt("1588")
		const stringJ96TZr = "Of53YvypHSi06KiqzKi8CHj6LTtVOjJTjRygT3wYHhk"
		const stringF9NBezC = "pM92Q1Tj5sVRDCpeejopbg6cqau0ONuupJoJAT3asvg7m7kozN2VnCi6HQ"
		const GFCQuclSrw = await GFC.new(uintreab55f, stringJ96TZr, stringF9NBezC, {from: accounts[0]});
		const uintI6b0jat = BigInt("1400")
		const addressJJgqO6z = accounts[4]
		const uintoFyLsAk = BigInt("974")
		const addressF2rf10 = accounts[3]
		const bytead8PkNL = "0x1e0308160818061b10191d171d020418"
		const uintRcOugQQ = BigInt("21")
		const addressObvsaL = accounts[4]
		const byteeTWIPLG = "0x12070f1b081302"
		const uintS7gIkf = BigInt("152")
		const addressmx8iCeX = accounts[0]
		const boolwQYyyi7 = await GFCQuclSrw.approve.call(addressJJgqO6z, uintI6b0jat, {from: accounts[2]});
		const booluR51TNF = await GFCQuclSrw.approve.call(addressF2rf10, uintoFyLsAk, {from: accounts[4]});
//		const boolNkFyzN = await GFCQuclSrw.approveAndCall.call(addressObvsaL, uintRcOugQQ, bytead8PkNL, {from: accounts[4]});
//		const boolJR1DwQ = await GFCQuclSrw.approveAndCall.call(addressmx8iCeX, uintS7gIkf, byteeTWIPLG, {from: accounts[4]});

		assert.equal(booluR51TNF, true)
		assert.equal(boolwQYyyi7, true)
		await expect(GFCQuclSrw.approveAndCall.call(addressObvsaL, uintRcOugQQ, bytead8PkNL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintfJeQWPO = BigInt("1912")
		const stringjcYvnN = "sJLQnYMWB6IgcG6xTp2kcoFLtHuqA7DAktguG1Gue4Eauy2fmn0J0ih6DQf7tVC51k8VDhGvr6eoLdxN8Er"
		const stringUrgEWsg = "PqtaPgwuKBYYzH"
		const GFCGPyacxd = await GFC.new(uintfJeQWPO, stringjcYvnN, stringUrgEWsg, {from: "0x0000000000000000000000000000000000000001"});
		const uintQvWs0w = BigInt("917")
		const uintslF8NpG = BigInt("127")
		const addressJbkQLE3 = accounts[4]
		const addressW6lyRxC = accounts[3]
		const uint2RmUZt = BigInt("1292")
		const addresssJSXEGV = accounts[4]
		const boolrpwEh8W = await GFCGPyacxd.burn.call(uintQvWs0w, {from: accounts[2]});
		const boolC8wfHz = await GFCGPyacxd.transferFrom.call(addressW6lyRxC, addressJbkQLE3, uintslF8NpG, {from: "0x0000000000000000000000000000000000000001"});
		const boolGAKQ9P = await GFCGPyacxd.transfer.call(addresssJSXEGV, uint2RmUZt, {from: accounts[5]});
	});

	it('test for GFC', async () => {
		const uintvfi9vA9 = BigInt("1041")
		const stringIAHcf6C = "m11qq73L1ENtVfjgX7TmWbOn7PtSpByxGQi2VQP7mun7oDm3mapH94IAVjfWZIgPA1U88Aon53UyilrrWgd5"
		const stringShGiKt = "U8ioiZ55FtvKXj2aJY1m1kqMsdlilFNBYSJWUQi3eXu1Edj0iAe8XdNHcHVDe6orqS5QSlRUqgRrQpXNqTPDPx"
		const GFCYfOqCaZ = await GFC.new(uintvfi9vA9, stringIAHcf6C, stringShGiKt, {from: accounts[5]});
		const uintdGmHjsT = BigInt("1298")
		const addressA0ulmEv = accounts[2]
		const uintjDN0RM = BigInt("1123")
		const addressLuEBAs3 = accounts[1]
		const uintDCIqSLj = BigInt("748")
		const addressr1CWuJE = accounts[2]
		const uintDbUCGJM = BigInt("65")
		const uintV1TFcxI = BigInt("1608")
		const addressq9Fe1ah = accounts[3]
		const addressAFfTLJn = accounts[4]
		const uintqlj8xem = BigInt("402")
		const boolvhHcBbx = await GFCYfOqCaZ.approve.call(addressA0ulmEv, uintdGmHjsT, {from: accounts[5]});
		const boolsgwSeb = await GFCYfOqCaZ.approve.call(addressLuEBAs3, uintjDN0RM, {from: accounts[4]});
		const boolsOEiNPC = await GFCYfOqCaZ.transfer.call(addressr1CWuJE, uintDCIqSLj, {from: accounts[5]});
//		const booleXdIPrd = await GFCYfOqCaZ.burn.call(uintDbUCGJM, {from: accounts[4]});
//		const boolnahMcF6 = await GFCYfOqCaZ.transferFrom.call(addressAFfTLJn, addressq9Fe1ah, uintV1TFcxI, {from: accounts[1]});
//		const boolaSgAzcm = await GFCYfOqCaZ.burn.call(uintqlj8xem, {from: accounts[3]});

		assert.equal(boolsOEiNPC, true)
		assert.equal(boolsgwSeb, true)
		assert.equal(boolvhHcBbx, true)
		await expect(GFCYfOqCaZ.burn.call(uintDbUCGJM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintNGseHXG = BigInt("1041")
		const stringIAHcf6C = "m11qq73L1ENtVfjgX7TmWbOn7PtSpByxGQi2VQP7mun7oDm3mapH94IAVjfWZIgPA1U88Aon53UyilrrWgd5"
		const stringShGiKt = "U8ioiZ55FtvKXj2aJY1m1kqMsdlilFNBYSJWUQi3eXu1Edj0iAe8XdNHcHVDe6orqS5QSlRUqgRrQpXNqTPDPx"
		const GFCYfOqCaZ = await GFC.new(uintNGseHXG, stringIAHcf6C, stringShGiKt, {from: accounts[5]});
		const uintagkz20z = BigInt("1298")
		const addressLCzpWRv = accounts[2]
		const uintjq1KhpI = BigInt("1004")
		const addressbxIBQCA = accounts[1]
		const uintTfW9pK3 = BigInt("1123")
		const address0bdChy = accounts[1]
		const uintIPt7PXT = BigInt("1011")
		const addressKKmaqk9 = accounts[1]
		const addressEc7DVj = accounts[3]
		const uintxmIiDVy = BigInt("402")
		const boolvhHcBbx = await GFCYfOqCaZ.approve.call(addressLCzpWRv, uintagkz20z, {from: accounts[5]});
//		const boolIpJpsou = await GFCYfOqCaZ.burnFrom.call(addressbxIBQCA, uintjq1KhpI, {from: accounts[0]});
//		const boolsgwSeb = await GFCYfOqCaZ.approve.call(address0bdChy, uintTfW9pK3, {from: accounts[4]});
//		const boolf5SXuIj = await GFCYfOqCaZ.transferFrom.call(addressEc7DVj, addressKKmaqk9, uintIPt7PXT, {from: "0x0000000000000000000000000000000000000001"});
//		const boolaSgAzcm = await GFCYfOqCaZ.burn.call(uintxmIiDVy, {from: accounts[3]});

		assert.equal(boolvhHcBbx, true)
		await expect(GFCYfOqCaZ.burnFrom.call(addressbxIBQCA, uintjq1KhpI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintwbdmAQR = BigInt("1522")
		const stringW3QIRJH = "Ch51bPpgJFG2Z1XIzVmQLdDqICge5tY"
		const stringmh2xQlk = "4mxQbOJQYXqsheCbxeQy4VY2n5FBWaEjbjkMKGfBr8YKIAIqfUhk50G6MKR0u7przDyXX"
		const GFCxPHzqpV = await GFC.new(uintwbdmAQR, stringW3QIRJH, stringmh2xQlk, {from: accounts[3]});
		const uintDGd0d0L = BigInt("1509")
		const byteMKsr6VX = "0x191702"
		const uintPyy08wd = BigInt("485")
		const addressE3CgtSf = accounts[0]
		const booluu2h3OO = await GFCxPHzqpV.burn.call(uintDGd0d0L, {from: accounts[3]});
//		const boolKi38aln = await GFCxPHzqpV.approveAndCall.call(addressE3CgtSf, uintPyy08wd, byteMKsr6VX, {from: accounts[1]});

		assert.equal(booluu2h3OO, true)
		await expect(GFCxPHzqpV.approveAndCall.call(addressE3CgtSf, uintPyy08wd, byteMKsr6VX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintf85r7eD = BigInt("1041")
		const stringIAHcf6C = "m11qq73L1ENtVfjgX7TmWbOn7PtSpByxGQi2VQP7mun7oDm3mapH94IAVjfWZIgPA1U88Aon53UyilrrWgd5"
		const stringShGiKt = "U8ioiZ55FtvKXj2aJY1m1kqMsdlilFNBYSJWUQi3eXu1Edj0iAe8XdNHcHVDe6orqS5QSlRUqgRrQpXNqTPDPx"
		const GFCYfOqCaZ = await GFC.new(uintf85r7eD, stringIAHcf6C, stringShGiKt, {from: accounts[5]});
		const uintIzmW0hR = BigInt("1653")
		const addressECFH36Y = accounts[5]
		const uintl3biTPH = BigInt("320")
		const uintLn8Dm9d = BigInt("1973")
		const addressaPrESZK = accounts[2]
		const uintWvHRai = BigInt("1004")
		const addressnVV0wCk = accounts[2]
		const uintWdhKSrk = BigInt("402")
//		const boolZATP9MV = await GFCYfOqCaZ.burnFrom.call(addressECFH36Y, uintIzmW0hR, {from: accounts[0]});
//		const boolUsTAHcw = await GFCYfOqCaZ.burn.call(uintl3biTPH, {from: accounts[0]});
//		const boolanhskxB = await GFCYfOqCaZ.burnFrom.call(addressaPrESZK, uintLn8Dm9d, {from: accounts[1]});
//		const boolIpJpsou = await GFCYfOqCaZ.burnFrom.call(addressnVV0wCk, uintWvHRai, {from: accounts[0]});
//		const boolaSgAzcm = await GFCYfOqCaZ.burn.call(uintWdhKSrk, {from: accounts[3]});

		await expect(GFCYfOqCaZ.burnFrom.call(addressECFH36Y, uintIzmW0hR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})