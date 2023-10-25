const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20TT5r9KP = await GAZ_ERC20.new({from: accounts[0]});
		const uintf5u0a7k = BigInt("999")
		const addressH0EFf8J = accounts[2]
		const uintykedKVK = BigInt("1834")
		const addressL0xABzQ = accounts[2]
		const uintIEvSeV = BigInt("1335")
		const addressGonNQTa = accounts[3]
		const uintNdr7JK = BigInt("38")
		const addressIjhga2x = accounts[3]
		const uintrrqEcHo = BigInt("2022")
		const addresswVlfDkG = "0x0000000000000000000000000000000000000001"
		const boolrIi2FI0 = await GAZ_ERC20TT5r9KP.approve.call(addressH0EFf8J, uintf5u0a7k, {from: accounts[1]});
		const boolabr4mA0 = await GAZ_ERC20TT5r9KP.approve.call(addressL0xABzQ, uintykedKVK, {from: accounts[1]});
		const boolXuyHwCB = await GAZ_ERC20TT5r9KP.transfer.call(addressGonNQTa, uintIEvSeV, {from: accounts[2]});
		const boolkqhskDj = await GAZ_ERC20TT5r9KP.approve.call(addressIjhga2x, uintNdr7JK, {from: accounts[3]});
		const boolMcNVGq = await GAZ_ERC20TT5r9KP.approve.call(addresswVlfDkG, uintrrqEcHo, {from: accounts[0]});

		assert.equal(boolabr4mA0, true)
		assert.equal(boolrIi2FI0, true)
		await expect(GAZ_ERC20TT5r9KP.transfer.call(addressGonNQTa, uintIEvSeV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20g73irJF = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintAfOCOD = BigInt("1126")
		const addressK4Gx5wK = "0x0000000000000000000000000000000000000001"
		const uintGGOQZHi = BigInt("1611")
		const addressbfU86np = accounts[2]
		const uintHQlq4Ob = BigInt("1404")
		const addressNcZqtOX = accounts[4]
		const uintaboOi6T = BigInt("1867")
		const addresszWEOMQg = accounts[1]
		const uintXyCRM2X = BigInt("1205")
		const addressUdOxMLu = accounts[3]
		const uintICKK4Y = BigInt("399")
		const addressqS2t30r = accounts[2]
		const boolkTpbxwi = await GAZ_ERC20g73irJF.approve.call(addressK4Gx5wK, uintAfOCOD, {from: accounts[1]});
		const boolnngygmb = await GAZ_ERC20g73irJF.approve.call(addressbfU86np, uintGGOQZHi, {from: accounts[2]});
		const boolrNcrCXX = await GAZ_ERC20g73irJF.transfer.call(addressNcZqtOX, uintHQlq4Ob, {from: accounts[4]});
		const boolwxR8DWx = await GAZ_ERC20g73irJF.approve.call(addresszWEOMQg, uintaboOi6T, {from: accounts[1]});
		const boolXsNfZIo = await GAZ_ERC20g73irJF.approve.call(addressUdOxMLu, uintXyCRM2X, {from: accounts[1]});
		const booldjvU3Ia = await GAZ_ERC20g73irJF.approve.call(addressqS2t30r, uintICKK4Y, {from: accounts[0]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20w9nvlBs = await GAZ_ERC20.new({from: accounts[3]});
		const uintVdraNW = BigInt("1184")
		const addressmb1RhSb = accounts[2]
		const uintpB5IZFH = BigInt("637")
		const addressDdrwR8a = "0x0000000000000000000000000000000000000001"
		const uinttUpsgCn = BigInt("11")
		const addressTpWXoc1 = accounts[5]
		const addressWnuffjZ = accounts[4]
		const boolel08mD4 = await GAZ_ERC20w9nvlBs.approve.call(addressmb1RhSb, uintVdraNW, {from: accounts[5]});
		const boolAubdih5 = await GAZ_ERC20w9nvlBs.transfer.call(addressDdrwR8a, uintpB5IZFH, {from: accounts[3]});
		const boolNRHOxzW = await GAZ_ERC20w9nvlBs.transferFrom.call(addressWnuffjZ, addressTpWXoc1, uinttUpsgCn, {from: accounts[2]});

		assert.equal(boolAubdih5, true)
		assert.equal(boolel08mD4, true)
		await expect(GAZ_ERC20w9nvlBs.transferFrom.call(addressWnuffjZ, addressTpWXoc1, uinttUpsgCn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20NlpKSBh = await GAZ_ERC20.new({from: accounts[4]});
		const uintRP17q2 = BigInt("680")
		const addressl7pxot5 = accounts[2]
		const addressT4U2mge = accounts[4]
		const addressJenNf2E = accounts[1]
		const uintyXvegxr = BigInt("2019")
		const addresso8mUgTw = "0x0000000000000000000000000000000000000001"
		const uintTfA0zQ = BigInt("1143")
		const addressrDASp8Y = accounts[0]
		const uintwbwuTMn = BigInt("1586")
		const addresswkIbQuO = accounts[4]
		const boolRlBWE5q = await GAZ_ERC20NlpKSBh.approve.call(addressl7pxot5, uintRP17q2, {from: accounts[5]});
		const boolLf99B7m = await GAZ_ERC20NlpKSBh.approve.call(addressT4U2mge, {from: accounts[3]});
		const boolqPfDCm8 = await GAZ_ERC20NlpKSBh.approve.call(addressJenNf2E, {from: accounts[1]});
		const boolSCtWVt8 = await GAZ_ERC20NlpKSBh.approve.call(addresso8mUgTw, uintyXvegxr, {from: "0x0000000000000000000000000000000000000001"});
		const boolOfHAHEn = await GAZ_ERC20NlpKSBh.transfer.call(addressrDASp8Y, uintTfA0zQ, {from: accounts[1]});
		const boolpNyj25X = await GAZ_ERC20NlpKSBh.approve.call(addresswkIbQuO, uintwbwuTMn, {from: accounts[1]});

		assert.equal(boolRlBWE5q, true)
		await expect(GAZ_ERC20NlpKSBh.approve.call(addressT4U2mge, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20zsDV3QP = await GAZ_ERC20.new({from: accounts[1]});
		const uintvsbfFMD = BigInt("1507")
		const address2IgiKB = accounts[0]
		const addressZgVjVSo = accounts[1]
		const uintPHTW8DQ = BigInt("1744")
		const addressC3zbG2w = accounts[1]
		const boolbLCFahY = await GAZ_ERC20zsDV3QP.approve.call(address2IgiKB, uintvsbfFMD, {from: accounts[3]});
		const booldNGQqNI = await GAZ_ERC20zsDV3QP.approve.call(addressZgVjVSo, {from: accounts[1]});
		const boolvxHJTOI = await GAZ_ERC20zsDV3QP.transfer.call(addressC3zbG2w, uintPHTW8DQ, {from: accounts[0]});

		assert.equal(boolbLCFahY, true)
		await expect(GAZ_ERC20zsDV3QP.approve.call(addressZgVjVSo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Pdvyjfa = await GAZ_ERC20.new({from: accounts[1]});
		const addressUsQ3Ldn = accounts[2]
		const uintixgVzok = BigInt("1908")
		const addresszUiTk6k = accounts[2]
		const uintAGOEgn = BigInt("1325")
		const addressnMKIeyo = accounts[3]
		const addressHMNrGV = accounts[1]
		const uintnzbHC6H = BigInt("508")
		const addressce2wQDX = accounts[1]
		const uintPpdxnBU = BigInt("522")
		const addresspBOr8FA = accounts[4]
		const bools9fBIqf = await GAZ_ERC20Pdvyjfa.approve.call(addressUsQ3Ldn, {from: accounts[2]});
		const boolCTNY6au = await GAZ_ERC20Pdvyjfa.approve.call(addresszUiTk6k, uintixgVzok, {from: accounts[0]});
		const bool62pzfR = await GAZ_ERC20Pdvyjfa.transferFrom.call(addressHMNrGV, addressnMKIeyo, uintAGOEgn, {from: accounts[4]});
		const boolDVgqaJs = await GAZ_ERC20Pdvyjfa.transfer.call(addressce2wQDX, uintnzbHC6H, {from: accounts[3]});
		const boolTYkKQuM = await GAZ_ERC20Pdvyjfa.transfer.call(addresspBOr8FA, uintPpdxnBU, {from: accounts[1]});

		await expect(GAZ_ERC20Pdvyjfa.approve.call(addressUsQ3Ldn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20C3vs7vF = await GAZ_ERC20.new({from: accounts[4]});
		const addressJPaDMIW = accounts[4]
		const uintqxi9cv4 = BigInt("1118")
		const addressz6UuQNg = accounts[4]
		const addressogFwuJz = accounts[4]
		const uintjgjAGGB = BigInt("589")
		const addressZHojMUM = accounts[0]
		const addressSTm4hLY = "0x0000000000000000000000000000000000000001"
		const uintyuLtLh0 = BigInt("1438")
		const addressq0sActf = accounts[1]
		const addresshOJWb0y = accounts[3]
		const uint9p2ewF = BigInt("545")
		const addressFFhCxh = accounts[3]
		const addresst1ZGlQl = accounts[4]
		const uintM5IuZfI = BigInt("1648")
		const addressTAIW5vr = accounts[3]
		const uintipGlpTh = BigInt("386")
		const addressaCWJ4Tb = accounts[0]
		const uintjM3MHfp = BigInt("1871")
		const addressAxcjMnC = accounts[3]
		const booluGeGUwY = await GAZ_ERC20C3vs7vF.approve.call(addressJPaDMIW, {from: accounts[0]});
		const boolahg59S = await GAZ_ERC20C3vs7vF.transferFrom.call(addressogFwuJz, addressz6UuQNg, uintqxi9cv4, {from: accounts[4]});
		const boolBssb6Cm = await GAZ_ERC20C3vs7vF.transferFrom.call(addressSTm4hLY, addressZHojMUM, uintjgjAGGB, {from: accounts[0]});
		const bool8EyaGR = await GAZ_ERC20C3vs7vF.transferFrom.call(addresshOJWb0y, addressq0sActf, uintyuLtLh0, {from: accounts[2]});
		const bool2Z9D3P = await GAZ_ERC20C3vs7vF.transferFrom.call(addresst1ZGlQl, addressFFhCxh, uint9p2ewF, {from: accounts[2]});
		const boolju3Lw2B = await GAZ_ERC20C3vs7vF.approve.call(addressTAIW5vr, uintM5IuZfI, {from: accounts[0]});
		const boolI1PKVMU = await GAZ_ERC20C3vs7vF.approve.call(addressaCWJ4Tb, uintipGlpTh, {from: accounts[3]});
		const boolwFH74qH = await GAZ_ERC20C3vs7vF.approve.call(addressAxcjMnC, uintjM3MHfp, {from: accounts[2]});

		await expect(GAZ_ERC20C3vs7vF.approve.call(addressJPaDMIW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20zsDV3QP = await GAZ_ERC20.new({from: accounts[1]});
		const uintMpiZDG = BigInt("1711")
		const addressGxpx1QF = accounts[5]
		const uintC7WRJFB = BigInt("1507")
		const addressBBcB4C = accounts[0]
		const addressHBWvBGC = accounts[1]
		const uintvGRJndG = BigInt("1156")
		const addressMXOQofk = accounts[1]
		const boolU6vWuQh = await GAZ_ERC20zsDV3QP.approve.call(addressGxpx1QF, uintMpiZDG, {from: accounts[1]});
		const boolbLCFahY = await GAZ_ERC20zsDV3QP.approve.call(addressBBcB4C, uintC7WRJFB, {from: accounts[3]});
		const boole62VNen = await GAZ_ERC20zsDV3QP.approve.call(addressHBWvBGC, {from: accounts[4]});
		const boolHJFyFX = await GAZ_ERC20zsDV3QP.transfer.call(addressMXOQofk, uintvGRJndG, {from: accounts[3]});

		assert.equal(boolU6vWuQh, true)
		assert.equal(boolbLCFahY, true)
		await expect(GAZ_ERC20zsDV3QP.approve.call(addressHBWvBGC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20zsDV3QP = await GAZ_ERC20.new({from: accounts[1]});
		const uintaW8LeHa = BigInt("1507")
		const addressOocFm1Z = accounts[0]
		const addressof2GJBu = accounts[1]
		const uintEZCCIVQ = BigInt("2028")
		const addressevVITtS = accounts[0]
		const addressxZIGCJo = accounts[1]
		const uintxu4dDJ1 = BigInt("1156")
		const addressEIkRjEr = accounts[1]
		const boolbLCFahY = await GAZ_ERC20zsDV3QP.approve.call(addressOocFm1Z, uintaW8LeHa, {from: accounts[3]});
		const booluttIf3Q = await GAZ_ERC20zsDV3QP.approve.call(addressof2GJBu, {from: "0x0000000000000000000000000000000000000001"});
		const boolPH3DP0C = await GAZ_ERC20zsDV3QP.transferFrom.call(addressxZIGCJo, addressevVITtS, uintEZCCIVQ, {from: accounts[4]});
		const boolHJFyFX = await GAZ_ERC20zsDV3QP.transfer.call(addressEIkRjEr, uintxu4dDJ1, {from: accounts[3]});

		assert.equal(boolbLCFahY, true)
		await expect(GAZ_ERC20zsDV3QP.approve.call(addressof2GJBu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20zsDV3QP = await GAZ_ERC20.new({from: accounts[1]});
		const addressMVkFTyu = accounts[2]
		const uintkiBgDr8 = BigInt("1562")
		const addressKiRky2Z = accounts[1]
		const addressjszeM8h = "0x0000000000000000000000000000000000000001"
		const boolpCHjDOi = await GAZ_ERC20zsDV3QP.approve.call(addressMVkFTyu, {from: accounts[5]});
		const boolHJFyFX = await GAZ_ERC20zsDV3QP.transfer.call(addressKiRky2Z, uintkiBgDr8, {from: accounts[3]});
		const boolJHdCWEd = await GAZ_ERC20zsDV3QP.approve.call(addressjszeM8h, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20zsDV3QP.approve.call(addressMVkFTyu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})