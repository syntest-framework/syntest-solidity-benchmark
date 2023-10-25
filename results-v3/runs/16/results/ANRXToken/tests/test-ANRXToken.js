const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintpvWIJfS = BigInt("2033")
		const stringc3rXXyS = "xVA"
		const stringM7hemBf = "jmKwAOznG7bgyfMur3"
		const uintONevu2F = BigInt("1844")
		const ANRXTokenVrszeWm = await ANRXToken.new(uintpvWIJfS, stringc3rXXyS, stringM7hemBf, uintONevu2F, {from: accounts[4]});
		const uinttrXOPv = BigInt("648")
		const addressbU8ltjK = accounts[1]
		const addressC4Wpgjg = accounts[4]
		const addresssvmapA5 = accounts[2]
		const uintJkgob5 = await ANRXTokenVrszeWm.issue.call(uinttrXOPv, {from: accounts[0]});
		const uinthFsRADp = await ANRXTokenVrszeWm.totalSupply.call({from: accounts[3]});
		const uintzb5NUSF = await ANRXTokenVrszeWm.balanceOf.call(addressbU8ltjK, {from: "0x0000000000000000000000000000000000000001"});
		const uintlrEYnb5 = await ANRXTokenVrszeWm.allowance.call(addresssvmapA5, addressC4Wpgjg, {from: accounts[3]});

		await expect(ANRXTokenVrszeWm.issue.call(uinttrXOPv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintjmdhQlb = BigInt("722")
		const stringNOFQvtK = "jHFj26vixXw7Ist1r7v2Hi9sIY2sf6q"
		const stringtb6JloI = "XhWUT4a1sbBFpNTMLS3ok3kK1QeQo9ggrkx6Xb8CkYkaiDYudHwFVAiYMogik"
		const uintxf8Vmer = BigInt("785")
		const ANRXTokenU6F5Nw6 = await ANRXToken.new(uintjmdhQlb, stringNOFQvtK, stringtb6JloI, uintxf8Vmer, {from: "0x0000000000000000000000000000000000000001"});
		const addressCGM4jzd = accounts[1]
		const uinte3BeOhv = BigInt("20")
		const addressHMrsEhz = accounts[0]
		const addressMeMK0m = accounts[3]
		const addressTThsz4 = accounts[0]
		const addressjOHZyIG = accounts[3]
		const addressiRM61z4 = accounts[0]
		const addressHEpLQRX = accounts[0]
		const addressZ5oEJSW = accounts[2]
		const uinthSVbNiP = await ANRXTokenU6F5Nw6.balanceOf.call(addressCGM4jzd, {from: accounts[3]});
		const boolGVwiaaD = await ANRXTokenU6F5Nw6.approve.call(addressHMrsEhz, uinte3BeOhv, {from: accounts[4]});
		const addressxKDwvEj = await ANRXTokenU6F5Nw6.deprecate.call(addressMeMK0m, {from: accounts[3]});
		const uintxGxIexg = await ANRXTokenU6F5Nw6.allowance.call(addressjOHZyIG, addressTThsz4, {from: accounts[3]});
		const uintfJBAuJR = await ANRXTokenU6F5Nw6.allowance.call(addressHEpLQRX, addressiRM61z4, {from: accounts[0]});
		const addressNjpQejy = await ANRXTokenU6F5Nw6.deprecate.call(addressZ5oEJSW, {from: accounts[5]});
	});

	it('test for ANRXToken', async () => {
		const uintWolzExk = BigInt("103")
		const stringYUJReJz = "LbrNwhiaVsCMLmGxj1yy3Ox42NszF8GDqaBNXmJSueyDc5XWNdA0dsMw3usw2y1Xh"
		const stringhFuOLji = "at"
		const uintVrWqvTR = BigInt("1407")
		const ANRXTokenycBN5dL = await ANRXToken.new(uintWolzExk, stringYUJReJz, stringhFuOLji, uintVrWqvTR, {from: accounts[5]});
		const addressjLKsR7O = accounts[0]
		const addressKNuex8l = accounts[4]
		const uintdVHgSb = BigInt("1296")
		const uintKubPdq7 = BigInt("2015")
		const addressc9xkQoJ = accounts[4]
		const uinteD4aNFU = await ANRXTokenycBN5dL.balanceOf.call(addressjLKsR7O, {from: accounts[5]});
		const addressnGl35zQ = await ANRXTokenycBN5dL.deprecate.call(addressKNuex8l, {from: accounts[4]});
		const uintVOx9hmU = await ANRXTokenycBN5dL.redeem.call(uintdVHgSb, {from: accounts[1]});
		const boolfqTHno0 = await ANRXTokenycBN5dL.approve.call(addressc9xkQoJ, uintKubPdq7, {from: accounts[2]});

		assert.equal(uinteD4aNFU, BigInt("0"))
		await expect(ANRXTokenycBN5dL.deprecate.call(addressKNuex8l, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintlKCjfmK = BigInt("103")
		const stringYUJReJz = "LbrNwhiaVsCMLmGxj1yy3Ox42NszF8GDqaBNXmJSueyDc5XWNdA0dsMw3usw2y1Xh"
		const stringhFuOLji = "at"
		const uintgxHSImk = BigInt("1407")
		const ANRXTokenycBN5dL = await ANRXToken.new(uintlKCjfmK, stringYUJReJz, stringhFuOLji, uintgxHSImk, {from: accounts[5]});
		const addressjzQmqUQ = accounts[2]
		const addressbR3ztzT = "0x0000000000000000000000000000000000000001"
		const address0h2Vql = accounts[1]
		const addressL1J7xOa = accounts[4]
		const uintXjmBKkB = BigInt("1296")
		const uintFFqLxf = BigInt("2015")
		const addresshkiW6K = accounts[4]
		const uintDEysOPV = await ANRXTokenycBN5dL.allowance.call(addressbR3ztzT, addressjzQmqUQ, {from: accounts[3]});
		const uinteD4aNFU = await ANRXTokenycBN5dL.balanceOf.call(address0h2Vql, {from: accounts[5]});
		const addressnGl35zQ = await ANRXTokenycBN5dL.deprecate.call(addressL1J7xOa, {from: accounts[4]});
		const uintVOx9hmU = await ANRXTokenycBN5dL.redeem.call(uintXjmBKkB, {from: accounts[1]});
		const boolfqTHno0 = await ANRXTokenycBN5dL.approve.call(addresshkiW6K, uintFFqLxf, {from: accounts[2]});

		assert.equal(uintDEysOPV, BigInt("0"))
		assert.equal(uinteD4aNFU, BigInt("0"))
		await expect(ANRXTokenycBN5dL.deprecate.call(addressL1J7xOa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintvR1JWVB = BigInt("403")
		const stringrniKnuS = "b9eik7U345RKsN43WwavquhWLJlDKg"
		const stringfUiWq0O = "rMbCz264aBrbdz9BigxikcumWAs5ijGlc2h37p4BrUSSmat8JuBdbFTUtVIkv7mQ6SqcRxXFW9QBeYD5pdPnGx9NKJL16o"
		const uintNdfWtMW = BigInt("397")
		const ANRXTokencXbNW34 = await ANRXToken.new(uintvR1JWVB, stringrniKnuS, stringfUiWq0O, uintNdfWtMW, {from: accounts[2]});
		const uintbTAX7fW = BigInt("1500")
		const addressjEhQEdP = accounts[0]
		const addresstNbzNPt = accounts[4]
		const uintjzRMuWc = BigInt("970")
		const boolym1qIf6 = await ANRXTokencXbNW34.transferFrom.call(addresstNbzNPt, addressjEhQEdP, uintbTAX7fW, {from: accounts[3]});
		const uintSdkidTt = await ANRXTokencXbNW34.issue.call(uintjzRMuWc, {from: accounts[4]});

		await expect(ANRXTokencXbNW34.transferFrom.call(addresstNbzNPt, addressjEhQEdP, uintbTAX7fW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintAGEdAEq = BigInt("103")
		const stringYUJReJz = "LbrNwhiaVsCMLmGxj1yy3Ox42NszF8GDqaBNXmJSueyDc5XWNdA0dsMw3usw2y1Xh"
		const stringhFuOLji = "at"
		const uintUVS0ZF = BigInt("1407")
		const ANRXTokenycBN5dL = await ANRXToken.new(uintAGEdAEq, stringYUJReJz, stringhFuOLji, uintUVS0ZF, {from: accounts[5]});
		const addressH9JpQCX = accounts[3]
		const addressG33X9xl = "0x0000000000000000000000000000000000000001"
		const uintLBGcmbh = BigInt("1450")
		const addressofL2m3X = accounts[1]
		const addressdEh4ETz = accounts[1]
		const addressDgyjeKX = accounts[5]
		const addresssCxM4a = accounts[4]
		const addressgrrs5Ox = accounts[4]
		const uintllCBPy = BigInt("1296")
		const uintPUEMkM = BigInt("2015")
		const addressMqEZmXn = accounts[4]
		const uintDEysOPV = await ANRXTokenycBN5dL.allowance.call(addressG33X9xl, addressH9JpQCX, {from: accounts[3]});
		const boolKvzJyfs = await ANRXTokenycBN5dL.approve.call(addressofL2m3X, uintLBGcmbh, {from: accounts[2]});
		const uinteD4aNFU = await ANRXTokenycBN5dL.balanceOf.call(addressdEh4ETz, {from: accounts[5]});
		const addressfcD8czP = await ANRXTokenycBN5dL.deprecate.call(addressDgyjeKX, {from: accounts[4]});
		const addressCgyNhBT = await ANRXTokenycBN5dL.deprecate.call(addresssCxM4a, {from: accounts[1]});
		const addressnGl35zQ = await ANRXTokenycBN5dL.deprecate.call(addressgrrs5Ox, {from: accounts[4]});
		const uintVOx9hmU = await ANRXTokenycBN5dL.redeem.call(uintllCBPy, {from: accounts[1]});
		const boolfqTHno0 = await ANRXTokenycBN5dL.approve.call(addressMqEZmXn, uintPUEMkM, {from: accounts[2]});

		assert.equal(boolKvzJyfs, true)
		assert.equal(uintDEysOPV, BigInt("0"))
		assert.equal(uinteD4aNFU, BigInt("0"))
		await expect(ANRXTokenycBN5dL.deprecate.call(addressDgyjeKX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uinth7a4bdO = BigInt("176")
		const stringjjxttHY = "f2YMufplxBqHJrarcVqQX4Yz9W5fjIBU6H3DGOjdnCeOJhsInNBTtu1UiEPliI"
		const stringBq81X1C = "30VCKDqy84SXYozz1vmHaqN8gAWEli58A2cNg8ud3uyl"
		const uintOH6wZzw = BigInt("1343")
		const ANRXTokenXhCf7d = await ANRXToken.new(uinth7a4bdO, stringjjxttHY, stringBq81X1C, uintOH6wZzw, {from: accounts[3]});
		const uintgKI53i = BigInt("329")
		const addressJCnQyxa = accounts[0]
		const addressyLXjejO = accounts[2]
		const addresst7hfHO4 = accounts[1]
		const uintGUglAh6 = BigInt("1386")
		const addressk9y87XS = accounts[2]
		const uintj8lyebZ = BigInt("1164")
		const uintrjYBAGf = BigInt("779")
		const uintnNsoeX3 = BigInt("217")
		const addressBBY7Rdt = accounts[0]
		const boolSMivvGF = await ANRXTokenXhCf7d.approve.call(addressJCnQyxa, uintgKI53i, {from: "0x0000000000000000000000000000000000000001"});
		const uintIvs7Cyv = await ANRXTokenXhCf7d.allowance.call(addresst7hfHO4, addressyLXjejO, {from: accounts[2]});
		const uintJErkW1 = await ANRXTokenXhCf7d.totalSupply.call({from: accounts[5]});
		const boolKdEaBR = await ANRXTokenXhCf7d.approve.call(addressk9y87XS, uintGUglAh6, {from: accounts[3]});
		const uintEVqZpAb = await ANRXTokenXhCf7d.redeem.call(uintj8lyebZ, {from: accounts[2]});
		const uintIu45kV9 = await ANRXTokenXhCf7d.redeem.call(uintrjYBAGf, {from: accounts[0]});
		const boolDFf8uTq = await ANRXTokenXhCf7d.approve.call(addressBBY7Rdt, uintnNsoeX3, {from: accounts[2]});
		const uintuaManYU = await ANRXTokenXhCf7d.totalSupply.call({from: accounts[2]});

		assert.equal(boolKdEaBR, true)
		assert.equal(boolSMivvGF, true)
		assert.equal(uintIvs7Cyv, BigInt("0"))
		assert.equal(uintJErkW1, BigInt("176"))
		await expect(ANRXTokenXhCf7d.redeem.call(uintj8lyebZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintlV5hce8 = BigInt("923")
		const stringBuvBDSB = "hEtMBuMxpssOSDSaTSwqSTNMHlSNR3RKX5nsg"
		const stringxbduLRi = "VFhbk0mExZW1nsfuvsVGgXtG7iDqVhaKvUPNTS5nHrPdpAjTtmBeqAnNQ4otdMjSbY"
		const uintFnb1Dk7 = BigInt("274")
		const ANRXTokenFrLfIVj = await ANRXToken.new(uintlV5hce8, stringBuvBDSB, stringxbduLRi, uintFnb1Dk7, {from: accounts[3]});
		const uintcZT2V9 = BigInt("1236")
		const uintPmQePTk = BigInt("21")
		const uintNyqaKJC = await ANRXTokenFrLfIVj.redeem.call(uintcZT2V9, {from: accounts[3]});
		const uintwkw8Dg1 = await ANRXTokenFrLfIVj.redeem.call(uintPmQePTk, {from: accounts[0]});

		await expect(ANRXTokenFrLfIVj.redeem.call(uintcZT2V9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintBYfTQcL = BigInt("55")
		const stringZC2V5FE = "kS5cMT4B01K9wJhW48HMuliNXkCXvi7KvVisvdlgwkcgNIJUkoBT4EyhE"
		const stringZOU7tDE = "U7LulmtWtaMMq4Wz2MwSboNvwOJ7fSo5GyQNjzpyFgWNAIVnYpAax9arduxCGsp1RikrAyxifbyaG"
		const uintUQE4y7B = BigInt("1558")
		const ANRXTokenJ0kx11I = await ANRXToken.new(uintBYfTQcL, stringZC2V5FE, stringZOU7tDE, uintUQE4y7B, {from: accounts[0]});
		const addressNkGhcuF = "0x0000000000000000000000000000000000000001"
		const uintpItIRwC = BigInt("288")
		const addressB4xQDem = "0x0000000000000000000000000000000000000001"
		const addressTOO1yc = accounts[2]
		const uintgIn4Ix = BigInt("1478")
		const addressyBKb9dT = accounts[4]
		const uintijyt2Zf = BigInt("494")
		const addressGtupFOp = accounts[2]
		const address2fo36S = accounts[4]
		const addresssF8x7dX = await ANRXTokenJ0kx11I.deprecate.call(addressNkGhcuF, {from: accounts[0]});
		const boolaMRdIpe = await ANRXTokenJ0kx11I.transferFrom.call(addressTOO1yc, addressB4xQDem, uintpItIRwC, {from: accounts[2]});
		const boolh5TJBYy = await ANRXTokenJ0kx11I.transfer.call(addressyBKb9dT, uintgIn4Ix, {from: accounts[3]});
		const uintlAQ1P2 = await ANRXTokenJ0kx11I.redeem.call(uintijyt2Zf, {from: accounts[0]});
		const addressFMKtSXY = await ANRXTokenJ0kx11I.deprecate.call(addressGtupFOp, {from: accounts[5]});
		const uintEElsfEn = await ANRXTokenJ0kx11I.balanceOf.call(address2fo36S, {from: accounts[0]});

		await expect(ANRXTokenJ0kx11I.transferFrom.call(addressTOO1yc, addressB4xQDem, uintpItIRwC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintqRASTRM = BigInt("403")
		const stringrniKnuS = "b9eik7U345RKsN43WwavquhWLJlDKg"
		const stringfUiWq0O = "rMbCz264aBrbdz9BigxikcumWAs5ijGlc2h37p4BrUSSmat8JuBdbFTUtVIkv7mQ6SqcRxXFW9QBeYD5pdPnGx9NKJL16o"
		const uintuhvKsh = BigInt("397")
		const ANRXTokencXbNW34 = await ANRXToken.new(uintqRASTRM, stringrniKnuS, stringfUiWq0O, uintuhvKsh, {from: accounts[2]});
		const uintwyuzCg = BigInt("854")
		const addressOfti9sO = accounts[3]
		const uintT1zQxJ = BigInt("1500")
		const addressWfau3P1 = accounts[0]
		const addressdAfwtI1 = accounts[4]
		const uintlMXR7x7 = BigInt("984")
		const boolwW5io8C = await ANRXTokencXbNW34.transfer.call(addressOfti9sO, uintwyuzCg, {from: accounts[1]});
		const boolym1qIf6 = await ANRXTokencXbNW34.transferFrom.call(addressdAfwtI1, addressWfau3P1, uintT1zQxJ, {from: accounts[3]});
		const uintSdkidTt = await ANRXTokencXbNW34.issue.call(uintlMXR7x7, {from: accounts[4]});

		await expect(ANRXTokencXbNW34.transfer.call(addressOfti9sO, uintwyuzCg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintl7HuV0K = BigInt("1705")
		const stringIT5toxz = "UUzzlfQn8MOsGIKWf7kU7EsETmQRwl6jWFIeoI0OmFVx8UJVUwBQlm"
		const stringVMZT0pe = "6dXAYpQ3vT3daFh1dSugEkvY4Ssdvtc2P7TULrZ8dy2v5SR5jZpJnygKrGV4DV3d23Qk5k8mBfguAA"
		const uintIGSiiCL = BigInt("1384")
		const ANRXTokenNkz9XDL = await ANRXToken.new(uintl7HuV0K, stringIT5toxz, stringVMZT0pe, uintIGSiiCL, {from: accounts[2]});
		const uinty1zMXoa = BigInt("1686")
		const uintWGYskGc = BigInt("1645")
		const uintuHOGRlw = BigInt("787")
		const addressFfI01f = accounts[3]
		const uintWhZQE3H = BigInt("1379")
		const addressEtXBUS7 = accounts[1]
		const uintRStvvg2 = await ANRXTokenNkz9XDL.issue.call(uinty1zMXoa, {from: accounts[2]});
		const uintjiPyyxA = await ANRXTokenNkz9XDL.issue.call(uintWGYskGc, {from: accounts[1]});
		const boolFH6qAUj = await ANRXTokenNkz9XDL.approve.call(addressFfI01f, uintuHOGRlw, {from: accounts[3]});
		const boolBXkGht = await ANRXTokenNkz9XDL.approve.call(addressEtXBUS7, uintWhZQE3H, {from: accounts[0]});

		await expect(ANRXTokenNkz9XDL.issue.call(uintWGYskGc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintMGAX0Ey = BigInt("403")
		const stringrniKnuS = "b9eik7U345RKsN43WwavquhWLJlDKg"
		const stringfUiWq0O = "rMbCz264aBrbdz9BigxikcumWAs5ijGlc2h37p4BrUSSmat8JuBdbFTUtVIkv7mQ6SqcRxXFW9QBeYD5pdPnGx9NKJL16o"
		const uintXipqkSX = BigInt("397")
		const ANRXTokencXbNW34 = await ANRXToken.new(uintMGAX0Ey, stringrniKnuS, stringfUiWq0O, uintXipqkSX, {from: accounts[2]});
		const uintTbmwbhZ = BigInt("759")
		const addresswhFSaUx = accounts[5]
		const addresse6Z5q8R = accounts[0]
		const addressXlSHhGx = accounts[2]
		const uintEE2tUsV = BigInt("143")
		const uintd0YoZ4F = BigInt("455")
		const uintb27TVlL = BigInt("1710")
		const addressqBOR9gy = accounts[1]
		const addresse23XaqT = "0x0000000000000000000000000000000000000001"
		const boolOryyHLF = await ANRXTokencXbNW34.approve.call(addresswhFSaUx, uintTbmwbhZ, {from: accounts[4]});
		const uintX6ElXl = await ANRXTokencXbNW34.allowance.call(addressXlSHhGx, addresse6Z5q8R, {from: accounts[0]});
		const uintfW318BX = await ANRXTokencXbNW34.setParams.call(uintd0YoZ4F, uintEE2tUsV, {from: accounts[2]});
		const boolA02uT5 = await ANRXTokencXbNW34.transferFrom.call(addresse23XaqT, addressqBOR9gy, uintb27TVlL, {from: accounts[0]});

		assert.equal(boolOryyHLF, true)
		assert.equal(uintX6ElXl, BigInt("0"))
		await expect(ANRXTokencXbNW34.setParams.call(uintd0YoZ4F, uintEE2tUsV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintBm5NnPu = BigInt("923")
		const stringBuvBDSB = "hEtMBuMxpssOSDSaTSwqSTNMHlSNR3RKX5nsg"
		const stringxbduLRi = "VFhbk0mExZW1nsfuvsVGgXtG7iDqVhaKvUPNTS5nHrPdpAjTtmBeqAnNQ4otdMjSbY"
		const uintfloJbiu = BigInt("274")
		const ANRXTokenFrLfIVj = await ANRXToken.new(uintBm5NnPu, stringBuvBDSB, stringxbduLRi, uintfloJbiu, {from: accounts[3]});
		const uintQW0JZ0X = BigInt("572")
		const uintNyqaKJC = await ANRXTokenFrLfIVj.redeem.call(uintQW0JZ0X, {from: accounts[3]});
		const uinthI1rTOC = await ANRXTokenFrLfIVj.totalSupply.call({from: accounts[0]});

		assert.equal(uinthI1rTOC, BigInt("923"))
	});
})