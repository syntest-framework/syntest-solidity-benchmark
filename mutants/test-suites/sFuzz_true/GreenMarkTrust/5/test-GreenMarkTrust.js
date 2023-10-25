const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintzc86yw = BigInt("2045")
		const stringVtcJGIE = "UlQ7"
		const stringwJox4re = "fA1TZy1HMFuaFyQ5kubdvXJMzuXiIEd1QNX"
		const GreenMarkTrustdpHhQg4 = await GreenMarkTrust.new(uintzc86yw, stringVtcJGIE, stringwJox4re, {from: "0x0000000000000000000000000000000000000001"});
		const byteo2D4IKk = "0x17121b190e20030b071a18191c1f020f151d"
		const uintDcPZdzv = BigInt("852")
		const addressubZxy1T = accounts[3]
		const uintj8LrzCx = BigInt("1735")
		const addressgX8hv7 = accounts[3]
		const addressI0uYtWb = accounts[2]
		const uintnVav66J = BigInt("691")
		const addressAUaPbSn = accounts[5]
		const boolEn59vyF = await GreenMarkTrustdpHhQg4.approveAndCall.call(addressubZxy1T, uintDcPZdzv, byteo2D4IKk, {from: accounts[4]});
		const boolezLQgIb = await GreenMarkTrustdpHhQg4.transferFrom.call(addressI0uYtWb, addressgX8hv7, uintj8LrzCx, {from: accounts[4]});
		const boolAndGObz = await GreenMarkTrustdpHhQg4.approve.call(addressAUaPbSn, uintnVav66J, {from: accounts[2]});
	});

	it('test for GreenMarkTrust', async () => {
		const uinttazITmL = BigInt("1291")
		const stringUdfe0li = "i5RSYkb5MOhse4L73c81vO"
		const stringXsv0Qc9 = "bgB"
		const GreenMarkTrustpilrqsS = await GreenMarkTrust.new(uinttazITmL, stringUdfe0li, stringXsv0Qc9, {from: accounts[4]});
		const byteUjMCXMX = "0x1c190d2003151d04071319020e191a171109161a0c20080b1919040d1e19"
		const uintimxE2aL = BigInt("777")
		const addressbor33Vy = accounts[1]
		const uintDMeRFTj = BigInt("1650")
		const addresst6CJ2dT = accounts[1]
		const bytegu12MQN = "0x04110913142004091b04140a0618001d121619"
		const uintu6xjoH = BigInt("2019")
		const addressewWjYO5 = "0x0000000000000000000000000000000000000001"
		const uintVJA0iis = BigInt("1178")
		const addressVvWOa5e = accounts[0]
		const addressRueKl7 = accounts[0]
		const uintOJasu9g = BigInt("1330")
		const uintiPQUiq = BigInt("40")
//		const boolDos73j = await GreenMarkTrustpilrqsS.approveAndCall.call(addressbor33Vy, uintimxE2aL, byteUjMCXMX, {from: accounts[4]});
//		const boolK0ThVmq = await GreenMarkTrustpilrqsS.burnFrom.call(addresst6CJ2dT, uintDMeRFTj, {from: accounts[4]});
//		const boolF22byVQ = await GreenMarkTrustpilrqsS.approveAndCall.call(addressewWjYO5, uintu6xjoH, bytegu12MQN, {from: accounts[4]});
//		const boolbw8tgfC = await GreenMarkTrustpilrqsS.transferFrom.call(addressRueKl7, addressVvWOa5e, uintVJA0iis, {from: "0x0000000000000000000000000000000000000001"});
//		const boolrUk5SNO = await GreenMarkTrustpilrqsS.burn.call(uintOJasu9g, {from: accounts[3]});
//		const bool0HITja = await GreenMarkTrustpilrqsS.burn.call(uintiPQUiq, {from: accounts[2]});

		await expect(GreenMarkTrustpilrqsS.approveAndCall.call(addressbor33Vy, uintimxE2aL, byteUjMCXMX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintLSzwiO4 = BigInt("362")
		const stringlNAF945 = "Ay7P"
		const stringxK7kOia = "9KrIYqkw5NMxvpdfrLaTEv37LCehMSENWeb7HictL4jeLybJOZkYufHHQDiNAwNKxua9yUvsXlOrb61tFDdZ541"
		const GreenMarkTrustd6eU2q1 = await GreenMarkTrust.new(uintLSzwiO4, stringlNAF945, stringxK7kOia, {from: accounts[5]});
		const uintH8RgggQ = BigInt("267")
		const addresslti3wWx = accounts[1]
		const addressg5oqA0 = accounts[2]
		const uintm2upX4N = BigInt("400")
		const addressE018ARx = "0x0000000000000000000000000000000000000001"
		const addressJz0aem7 = accounts[3]
		const uintUqONVk4 = BigInt("1917")
		const addressrlHU60u = accounts[1]
		const address0jqNIG = accounts[1]
//		const boolU3jN94m = await GreenMarkTrustd6eU2q1.transferFrom.call(addressg5oqA0, addresslti3wWx, uintH8RgggQ, {from: accounts[2]});
//		const boolQPSpSH = await GreenMarkTrustd6eU2q1.transferFrom.call(addressJz0aem7, addressE018ARx, uintm2upX4N, {from: accounts[5]});
//		const boolcmmvTG2 = await GreenMarkTrustd6eU2q1.transferFrom.call(address0jqNIG, addressrlHU60u, uintUqONVk4, {from: accounts[1]});

		await expect(GreenMarkTrustd6eU2q1.transferFrom.call(addressg5oqA0, addresslti3wWx, uintH8RgggQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintsVu0Ep = BigInt("386")
		const stringQ1ids5Z = "grfE"
		const stringU3NiXzZ = "2tvCyE7EoGXAW08sj92voinCPeVxSZ66XtPNPiXuwJoWxSULFHajWjleqPlJZDurpBvNKoHOK8o"
		const GreenMarkTrustr44VRcn = await GreenMarkTrust.new(uintsVu0Ep, stringQ1ids5Z, stringU3NiXzZ, {from: accounts[3]});
		const uintVk91ayw = BigInt("492")
		const addresslmmDB9V = accounts[5]
		const uinte82JNo9 = BigInt("151")
		const bytej8ozz5l = "0x0f08041c06121a"
		const uintgubzil1 = BigInt("695")
		const addressA1aHkb = accounts[4]
		const uinttkvrmp0 = BigInt("2")
		const uintGSZAFNK = BigInt("1663")
		const uintimkH6dt = BigInt("524")
//		const boolztgmP7g = await GreenMarkTrustr44VRcn.burnFrom.call(addresslmmDB9V, uintVk91ayw, {from: accounts[2]});
//		const boolE2S77I = await GreenMarkTrustr44VRcn.burn.call(uinte82JNo9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolWm6Wb88 = await GreenMarkTrustr44VRcn.approveAndCall.call(addressA1aHkb, uintgubzil1, bytej8ozz5l, {from: accounts[0]});
//		const boolx2c1SnF = await GreenMarkTrustr44VRcn.burn.call(uinttkvrmp0, {from: accounts[4]});
//		const boolf8CNSqq = await GreenMarkTrustr44VRcn.burn.call(uintGSZAFNK, {from: accounts[4]});
//		const boolirZOZ8 = await GreenMarkTrustr44VRcn.burn.call(uintimkH6dt, {from: accounts[4]});

		await expect(GreenMarkTrustr44VRcn.burnFrom.call(addresslmmDB9V, uintVk91ayw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintXkON9Ax = BigInt("1944")
		const stringZp49MrZ = "1GEqe3tkAII8mTT7fSIYaaOicl92jCKfwk5dKQeUD"
		const stringmxGbX9s = "MRXM5KRuWbhLZpr5ryf5qo34JwdkhaC4AwWSTiNagD2t"
		const GreenMarkTrustMJPyhJc = await GreenMarkTrust.new(uintXkON9Ax, stringZp49MrZ, stringmxGbX9s, {from: accounts[0]});
		const uintiEGPUuv = BigInt("1615")
		const addressPRhkTVN = accounts[1]
		const uintBmPnouH = BigInt("531")
		const addressrPq5KzJ = accounts[0]
		const uintKEtxVG7 = BigInt("1842")
		const addresscJjyNU6 = accounts[4]
		const bytebmQmzD = "0x181a"
		const uintV4x60oj = BigInt("1967")
		const addressLq2UkdS = "0x0000000000000000000000000000000000000001"
		const uintnoPj3Na = BigInt("1499")
		const addressa2zjfZR = accounts[4]
		const uintWQlF064 = BigInt("304")
		const addressRyOLgKQ = accounts[1]
		const boolRkCZeqD = await GreenMarkTrustMJPyhJc.approve.call(addressPRhkTVN, uintiEGPUuv, {from: accounts[0]});
		const boolwI8S5bV = await GreenMarkTrustMJPyhJc.transfer.call(addressrPq5KzJ, uintBmPnouH, {from: accounts[0]});
		const boolQ2HaLd = await GreenMarkTrustMJPyhJc.approve.call(addresscJjyNU6, uintKEtxVG7, {from: "0x0000000000000000000000000000000000000001"});
//		const boolN5wRPle = await GreenMarkTrustMJPyhJc.approveAndCall.call(addressLq2UkdS, uintV4x60oj, bytebmQmzD, {from: accounts[0]});
//		const boolaw4jyH8 = await GreenMarkTrustMJPyhJc.burnFrom.call(addressa2zjfZR, uintnoPj3Na, {from: accounts[2]});
//		const boolAKSMlNH = await GreenMarkTrustMJPyhJc.burnFrom.call(addressRyOLgKQ, uintWQlF064, {from: accounts[4]});

		assert.equal(boolQ2HaLd, true)
		assert.equal(boolRkCZeqD, true)
		assert.equal(boolwI8S5bV, true)
		await expect(GreenMarkTrustMJPyhJc.approveAndCall.call(addressLq2UkdS, uintV4x60oj, bytebmQmzD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintvq8Lau = BigInt("362")
		const stringlNAF945 = "Ay7P"
		const stringxK7kOia = "9KrIYqkw5NMxvpdfrLaTEv37LCehMSENWeb7HictL4jeLybJOZkYufHHQDiNAwNKxua9yUvsXlOrb61tFDdZ541"
		const GreenMarkTrustd6eU2q1 = await GreenMarkTrust.new(uintvq8Lau, stringlNAF945, stringxK7kOia, {from: accounts[5]});
		const uintegLDtu = BigInt("1909")
		const uintLKUJq5X = BigInt("267")
		const addressQmurLgx = accounts[1]
		const addressU7FcZn = accounts[2]
		const uintg0D69s8 = BigInt("1917")
		const addressmIyOnYx = accounts[1]
		const addressOpOr2qW = accounts[1]
//		const boolTEr8t0v = await GreenMarkTrustd6eU2q1.burn.call(uintegLDtu, {from: accounts[3]});
//		const boolU3jN94m = await GreenMarkTrustd6eU2q1.transferFrom.call(addressU7FcZn, addressQmurLgx, uintLKUJq5X, {from: accounts[2]});
//		const boolcmmvTG2 = await GreenMarkTrustd6eU2q1.transferFrom.call(addressOpOr2qW, addressmIyOnYx, uintg0D69s8, {from: accounts[1]});

		await expect(GreenMarkTrustd6eU2q1.burn.call(uintegLDtu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintV67BapQ = BigInt("1918")
		const stringuDRe0Q = "jCrIl6QiS4QwKjJzjrvFdzHC896T9D6N1faXgLy1PFP"
		const stringkgvwNG5 = "h1hWpjL1iC67O0rNp7CKpmX7S7pOwiLxPNVklRtW7PCKjeuiAGQleJ1S3wd"
		const GreenMarkTrustjRB1ExN = await GreenMarkTrust.new(uintV67BapQ, stringuDRe0Q, stringkgvwNG5, {from: accounts[3]});
		const uintnMb2ZSQ = BigInt("1312")
		const byterU8F7G = "0x1c"
		const uintE33WBI = BigInt("298")
		const addressuHsrYvE = accounts[1]
		const boolwLZkhkL = await GreenMarkTrustjRB1ExN.burn.call(uintnMb2ZSQ, {from: accounts[3]});
//		const boolemovymp = await GreenMarkTrustjRB1ExN.approveAndCall.call(addressuHsrYvE, uintE33WBI, byterU8F7G, {from: accounts[0]});

		assert.equal(boolwLZkhkL, true)
		await expect(GreenMarkTrustjRB1ExN.approveAndCall.call(addressuHsrYvE, uintE33WBI, byterU8F7G, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintFhm9XcP = BigInt("386")
		const stringQ1ids5Z = "grfE"
		const stringU3NiXzZ = "2tvCyE7EoGXAW08sj92voinCPeVxSZ66XtPNPiXuwJoWxSULFHajWjleqPlJZDurpBvNKoHOK8o"
		const GreenMarkTrustr44VRcn = await GreenMarkTrust.new(uintFhm9XcP, stringQ1ids5Z, stringU3NiXzZ, {from: accounts[3]});
		const uintcENfGM = BigInt("840")
		const addressUGKiuUe = accounts[3]
		const uintO3JWKt = BigInt("124")
//		const boolJrPMjAe = await GreenMarkTrustr44VRcn.burnFrom.call(addressUGKiuUe, uintcENfGM, {from: accounts[0]});
//		const boolirZOZ8 = await GreenMarkTrustr44VRcn.burn.call(uintO3JWKt, {from: accounts[4]});

		await expect(GreenMarkTrustr44VRcn.burnFrom.call(addressUGKiuUe, uintcENfGM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})