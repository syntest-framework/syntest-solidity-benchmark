const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringx5qUhQU = "bmLDYVk559McI5qO1eMnUjS9igRvku29xESbJUGnzcBcWAN8Ha4SmQ3UIUI5Fn1Baui0ZlM3FzYAXp0dwNl7sBZ1WD6OqZcL"
		const stringGAWsaoQ = "1YMBNI0RVN9IOy6LeCo6XUfIxgIg1sYScXQgUpB9tmgpmjRHiRIyCPSfno"
		const uinteZgwVE = BigInt("13")
		const XenoFelixLkWdTI4 = await XenoFelix.new(stringx5qUhQU, stringGAWsaoQ, uinteZgwVE, {from: accounts[1]});
		const addressmeziKb = accounts[5]
		const boolppD0Xt = await XenoFelixLkWdTI4.isOwner.call(addressmeziKb, {from: accounts[0]});
		const uint256jaNGtWz = await XenoFelixLkWdTI4.totalSupply.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringGNVTLZM = "LzAHpMeCUUbBWS0gKuFt7lGt9F5tmYxxzdOSymLgqYerlq31eiEMzEgIv7UgFcnJj9b4xaxyPan"
		const stringCfUAW9g = "vHhQ5WI5RslPhMkGKJaAVi1daa38vjlyRAUFLS7gA4J3dXWh4IX0I1SeEGgkrL2X3WG3IdonIeR76V"
		const uintuLstIwx = BigInt("599")
		const uintOS1cwPs = BigInt("78")
		const XenoFelixnxFiKkV = await XenoFelix.new(stringGNVTLZM, stringCfUAW9g, uintuLstIwx, uintOS1cwPs, {from: accounts[4]});
		const uintw1AO6DH = BigInt("1849")
		const addressJb494iS = accounts[3]
		const addresskROYB2P = accounts[0]
		const uintKNKwGe = BigInt("655")
		const addressjvCAVgE = accounts[2]
		const addresszwI4mIc = "0x0000000000000000000000000000000000000001"
		const uint8HuTez = BigInt("741")
		const addressRgls1xS = "0x0000000000000000000000000000000000000001"
//		const boolHcIEGtK = await XenoFelixnxFiKkV.transferFrom.call(addresskROYB2P, addressJb494iS, uintw1AO6DH, {from: accounts[1]});
//		const boolwlSyKZ2 = await XenoFelixnxFiKkV.decreaseAllowance.call(addressjvCAVgE, uintKNKwGe, {from: accounts[1]});
//		const uint256eKnGQDg = await XenoFelixnxFiKkV.balanceOf.call(addresszwI4mIc, {from: accounts[2]});
//		const boolaburUrp = await XenoFelixnxFiKkV.acceptOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolm38uFsd = await XenoFelixnxFiKkV.transfer.call(addressRgls1xS, uint8HuTez, {from: accounts[0]});
//		await XenoFelixnxFiKkV.onlyNewOwner.call({from: accounts[4]});

		await expect(XenoFelixnxFiKkV.transferFrom.call(addresskROYB2P, addressJb494iS, uintw1AO6DH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const XenoFelixfDI39fP = await XenoFelix.new({from: accounts[0]});
		const addressO3K05LA = accounts[2]
		const addressJgyncX = accounts[3]
		await XenoFelixfDI39fP.renouncePauser.call({from: accounts[5]});
		const stringtWD018z = await XenoFelixfDI39fP.name.call({from: accounts[4]});
		const uint256zdk923e = await XenoFelixfDI39fP.balanceOf.call(addressO3K05LA, {from: "0x0000000000000000000000000000000000000001"});
		const addressRsZr8UK = await XenoFelixfDI39fP.removePauser.call(addressJgyncX, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringJQf8wk7 = "IlZrwsZWLLpk1wrVzxDMTdHF2tjIpqAvXeP2IUt1DHVCkb7iyvnFakCkB6CR6s7Vvvyw98nimN"
		const stringj4NKqhL = "Gc33CeMilhoLnTzjhI6SpesEaVPufGUeFEeaojTfLOgqqo5h21CxffpRWF8hGfzVU5sQdUO5JndwZDreEoLHVJI1"
		const uinthNh8jva = BigInt("236")
		const XenoFelixfG5m0Pu = await XenoFelix.new(stringJQf8wk7, stringj4NKqhL, uinthNh8jva, {from: accounts[3]});
		const addressRv3cw4L = accounts[2]
		const addressMQZrc81 = accounts[4]
		const uintQzRA9i2 = BigInt("1447")
		const addressndwAi0l = accounts[1]
		const addressqfPWfLB = accounts[3]
		const uintWMr23va = BigInt("572")
		const addressTmlU9m = accounts[4]
		const uint256zwNyRR5 = await XenoFelixfG5m0Pu.allowance.call(addressMQZrc81, addressRv3cw4L, {from: accounts[2]});
		const boolsr79Q3r = await XenoFelixfG5m0Pu.transferFrom.call(addressqfPWfLB, addressndwAi0l, uintQzRA9i2, {from: accounts[5]});
		const boolyzRZELG = await XenoFelixfG5m0Pu.decreaseAllowance.call(addressTmlU9m, uintWMr23va, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringFHht0Hc = "URIedTx3zz4FAsRkD6cd9y4OG3uWsx"
		const stringXvnsqcI = "GaDB1h4BBWVUbYMVKDKzfyisHgo6FvtePGE4M1uWULJApuUydGAFNNBawvBuq4GQMxNf1"
		const uintnJKqPIV = BigInt("74")
		const uintDXz5bh5 = BigInt("144")
		const XenoFelixsjINOr4 = await XenoFelix.new(stringFHht0Hc, stringXvnsqcI, uintnJKqPIV, uintDXz5bh5, {from: accounts[5]});
		const uintEPiaCOb = BigInt("904")
		const uintlNyzFKN = BigInt("528")
		const addressBT6gfy = accounts[0]
		const uintkce1AIh = BigInt("1786")
		const addresswu6brQ = accounts[0]
		const addressnAhBoj4 = "0x0000000000000000000000000000000000000001"
		const uintXKBTZ7M = BigInt("1990")
		const addressGKdHp2P = accounts[2]
		const addressOiQJCtf = accounts[3]
		const addressfMkXGDJ = accounts[0]
//		const boold5yGVIK = await XenoFelixsjINOr4.lock.call(addressBT6gfy, uintlNyzFKN, uintEPiaCOb, {from: accounts[3]});
//		const boolGtO2WnA = await XenoFelixsjINOr4.transferFrom.call(addressnAhBoj4, addresswu6brQ, uintkce1AIh, {from: accounts[1]});
//		const boolPe1IXUU = await XenoFelixsjINOr4.transferFrom.call(addressOiQJCtf, addressGKdHp2P, uintXKBTZ7M, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbs6h7HX = await XenoFelixsjINOr4.isOwner.call(addressfMkXGDJ, {from: accounts[1]});

		await expect(XenoFelixsjINOr4.lock.call(addressBT6gfy, uintlNyzFKN, uintEPiaCOb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringW8lNuCJ = "qhcqxaszHjnO2R4jj2df7pyLQTzYX3tMiKrlKcAa5l3PSqgAPiB8tmCyQbGKrfDagoNjRCQAVJ"
		const stringVOos30R = "pzmuNLHeKqPsTh1ZHSoyZ6emdT8Ozow2LK"
		const uintHbvnac8 = BigInt("197")
		const XenoFelixYee8475 = await XenoFelix.new(stringW8lNuCJ, stringVOos30R, uintHbvnac8, {from: "0x0000000000000000000000000000000000000001"});
		const uint4QgYyG = BigInt("1136")
		const addressa6DJbm0 = accounts[1]
		const addressNX7GJi6 = accounts[5]
		const addresswATF0y0 = accounts[1]
		const addressPQ1VHnP = accounts[2]
		const addressmMH0CY = accounts[0]
		const addressjMrfmrz = accounts[4]
		const uintDkvshJn = BigInt("1030")
		const addressnT1xo9s = accounts[2]
		const addresswtt5l7R = accounts[0]
		const bool2cDCUi = await XenoFelixYee8475.transferFrom.call(addressNX7GJi6, addressa6DJbm0, uint4QgYyG, {from: accounts[2]});
		const boolgWynsQq = await XenoFelixYee8475.acceptOwnership.call({from: accounts[1]});
		const uint256p7m2emm = await XenoFelixYee8475.allowance.call(addressPQ1VHnP, addresswATF0y0, {from: accounts[0]});
		const addressFQLQJWv = await XenoFelixYee8475.notFrozenAndTransaction.call(addressjMrfmrz, addressmMH0CY, {from: accounts[4]});
		await XenoFelixYee8475.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolTFs4Fmj = await XenoFelixYee8475.transferFrom.call(addresswtt5l7R, addressnT1xo9s, uintDkvshJn, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringGG2eaJ1 = "oGt"
		const stringhQhBH3 = "wrk5WqoWdhz4HL64MmDmW3Wf5vuUnFXIq6H0J6RaX"
		const uintHXdzDJB = BigInt("600")
		const uintPBrauB = BigInt("43")
		const XenoFelix9Hq62u = await XenoFelix.new(stringGG2eaJ1, stringhQhBH3, uintHXdzDJB, uintPBrauB, {from: accounts[0]});
		const uintbgULrtk = BigInt("797")
		const addressje4KZMn = accounts[0]
		const uintuGlBXb = BigInt("1355")
		const uintHyri5ng = BigInt("1743")
		const address5OLleT = accounts[4]
		const uintwlCCeO6 = BigInt("929")
		const addressRIOted9 = accounts[1]
		const stringzECnMEq = await XenoFelix9Hq62u.name.call({from: accounts[4]});
//		const boolnAPWhQu = await XenoFelix9Hq62u.transfer.call(addressje4KZMn, uintbgULrtk, {from: accounts[5]});
//		const boolTkQtRHD = await XenoFelix9Hq62u.lock.call(address5OLleT, uintHyri5ng, uintuGlBXb, {from: accounts[4]});
//		const booloKoqLig = await XenoFelix9Hq62u.transfer.call(addressRIOted9, uintwlCCeO6, {from: accounts[3]});

		assert.equal(stringzECnMEq, "oGt")
		await expect(XenoFelix9Hq62u.transfer.call(addressje4KZMn, uintbgULrtk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringFHht0Hc = "URIedTx3zz4FAsRkD6cd9y4OG3uWsx"
		const stringXvnsqcI = "GaDB1h4BBWVUbYMVKDKzfyisHgo6FvtePGE4M1uWULJApuUydGAFNNBawvBuq4GQMxNf1"
		const uintSvGd7P7 = BigInt("74")
		const uintVMebdJV = BigInt("144")
		const XenoFelixsjINOr4 = await XenoFelix.new(stringFHht0Hc, stringXvnsqcI, uintSvGd7P7, uintVMebdJV, {from: accounts[5]});
		const uinthg06IRg = BigInt("904")
		const uintuq68cW = BigInt("528")
		const addressM9ZGMzb = accounts[0]
		const uintpBosJOo = BigInt("1786")
		const addresstia8vMm = accounts[0]
		const addresscwbNn4 = "0x0000000000000000000000000000000000000001"
		const uintTKVOht2 = BigInt("1990")
		const addressho4BctU = accounts[3]
		const addressRUV9WQW = accounts[3]
		const addressQfNxWrP = accounts[0]
//		await XenoFelixsjINOr4.whenNotPaused.call({from: accounts[3]});
//		const boold5yGVIK = await XenoFelixsjINOr4.lock.call(addressM9ZGMzb, uintuq68cW, uinthg06IRg, {from: accounts[3]});
//		const boolGtO2WnA = await XenoFelixsjINOr4.transferFrom.call(addresscwbNn4, addresstia8vMm, uintpBosJOo, {from: accounts[1]});
//		const boolPe1IXUU = await XenoFelixsjINOr4.transferFrom.call(addressRUV9WQW, addressho4BctU, uintTKVOht2, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbs6h7HX = await XenoFelixsjINOr4.isOwner.call(addressQfNxWrP, {from: accounts[1]});

		await expect(XenoFelixsjINOr4.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const strings2Nb7GC = "2kpSERl6zlKJB12X9DkbILUQf"
		const stringmxBtFYa = "EZV651zcSWbsR9HBLILmnektY1d90RS"
		const uintOHY3LEc = BigInt("313")
		const uintf67RrC = BigInt("253")
		const XenoFelixFKqXfGM = await XenoFelix.new(strings2Nb7GC, stringmxBtFYa, uintOHY3LEc, uintf67RrC, {from: accounts[0]});
		const uintbFg1XS0 = BigInt("1390")
		const uintwxa2SoQ = BigInt("569")
		const addresslrQXdPY = accounts[0]
		const addressdlpOZuF = accounts[0]
		const uintwqBjU6 = BigInt("911")
		const uintfRziWnb = BigInt("1995")
		const addressAS3z6Lr = accounts[3]
//		const uint256AoNjyXg = await XenoFelixFKqXfGM.burn.call(uintbFg1XS0, {from: accounts[2]});
//		await XenoFelixFKqXfGM.unpause.call({from: accounts[4]});
//		await XenoFelixFKqXfGM.whenNotPaused.call({from: accounts[0]});
//		const boolO2TItlK = await XenoFelixFKqXfGM.transferFrom.call(addressdlpOZuF, addresslrQXdPY, uintwxa2SoQ, {from: "0x0000000000000000000000000000000000000001"});
//		const stringGaLbBKU = await XenoFelixFKqXfGM.name.call({from: accounts[1]});
//		const booloosDqd = await XenoFelixFKqXfGM.lock.call(addressAS3z6Lr, uintfRziWnb, uintwqBjU6, {from: accounts[0]});

		await expect(XenoFelixFKqXfGM.burn.call(uintbFg1XS0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringGNVTLZM = "LzAHpMeCUUbBWS0gKuFt7lGt9F5tmYxxzdOSymLgqYerlq31eiEMzEgIv7UgFcnJj9b4xaxyPan"
		const stringCfUAW9g = "vHhQ5WI5RslPhMkGKJaAVi1daa38vjlyRAUFLS7gA4J3dXWh4IX0I1SeEGgkrL2X3WG3IdonIeR76V"
		const uintfwVsVYK = BigInt("599")
		const uintHXNZiWH = BigInt("78")
		const XenoFelixnxFiKkV = await XenoFelix.new(stringGNVTLZM, stringCfUAW9g, uintfwVsVYK, uintHXNZiWH, {from: accounts[4]});
		const uintvh8sVdd = BigInt("655")
		const addressNlAKwRd = accounts[2]
		const addressaAero8 = "0x0000000000000000000000000000000000000001"
		const uintNyTRNc5 = BigInt("741")
		const addressHZJ6va9 = "0x0000000000000000000000000000000000000001"
//		const boolwlSyKZ2 = await XenoFelixnxFiKkV.decreaseAllowance.call(addressNlAKwRd, uintvh8sVdd, {from: accounts[1]});
//		const uint256eKnGQDg = await XenoFelixnxFiKkV.balanceOf.call(addressaAero8, {from: accounts[2]});
//		const boolaburUrp = await XenoFelixnxFiKkV.acceptOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolm38uFsd = await XenoFelixnxFiKkV.transfer.call(addressHZJ6va9, uintNyTRNc5, {from: accounts[0]});
//		await XenoFelixnxFiKkV.onlyNewOwner.call({from: accounts[4]});

		await expect(XenoFelixnxFiKkV.decreaseAllowance.call(addressNlAKwRd, uintvh8sVdd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const strings2Nb7GC = "2kpSERl6zlKJB12X9DkbILUQf"
		const stringmxBtFYa = "EZV651zcSWbsR9HBLILmnektY1d90RS"
		const uintiL3RB9 = BigInt("313")
		const uintGH2XYVz = BigInt("253")
		const XenoFelixFKqXfGM = await XenoFelix.new(strings2Nb7GC, stringmxBtFYa, uintiL3RB9, uintGH2XYVz, {from: accounts[0]});
		const uintFQWWJ4v = BigInt("676")
		const addressvkyJ8N2 = accounts[2]
		const uintOPucf9 = BigInt("838")
		const addresswgQ7F4h = accounts[2]
		const uintmDcEpbE = BigInt("1312")
		const addressIcDXAg4 = accounts[5]
		const uintb6x0Hk = BigInt("569")
		const addressCnkxQ7 = accounts[0]
		const addressraVWeb = accounts[0]
		const boolwk3GPWR = await XenoFelixFKqXfGM.increaseAllowance.call(addressvkyJ8N2, uintFQWWJ4v, {from: accounts[1]});
		const boolZN3SzCH = await XenoFelixFKqXfGM.transfer.call(addresswgQ7F4h, uintOPucf9, {from: accounts[0]});
//		const booliPFhXYL = await XenoFelixFKqXfGM.decreaseAllowance.call(addressIcDXAg4, uintmDcEpbE, {from: accounts[0]});
//		await XenoFelixFKqXfGM.unpause.call({from: accounts[4]});
//		await XenoFelixFKqXfGM.whenNotPaused.call({from: accounts[0]});
//		const boolO2TItlK = await XenoFelixFKqXfGM.transferFrom.call(addressraVWeb, addressCnkxQ7, uintb6x0Hk, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolZN3SzCH, true)
		assert.equal(boolwk3GPWR, true)
		await expect(XenoFelixFKqXfGM.decreaseAllowance.call(addressIcDXAg4, uintmDcEpbE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringNDLcc4n = "3iar4eeIgQMAKRSwa0ON5eTKKM43dA4quUcRpDsmL7J87Xfi1MOR"
		const stringTXVjoa0 = "wpDwGmUNPKXKJzoYMJOrnMmP2pAQ7BCD5UaiSPl5"
		const uintjJ6HbVZ = BigInt("117")
		const uintoKxlL6M = BigInt("81")
		const XenoFelixJZZxd7 = await XenoFelix.new(stringNDLcc4n, stringTXVjoa0, uintjJ6HbVZ, uintoKxlL6M, {from: accounts[2]});
		const uintAyUUszb = BigInt("1227")
		const addresshNxUcaq = "0x0000000000000000000000000000000000000001"
		const addressSZKIfm1 = accounts[4]
		const uintP0u1myp = BigInt("381")
		const addressTtIDvT = accounts[4]
		const addressZZK1czE = accounts[2]
		const addressvhCvOla = accounts[1]
		const stringgMnJkSf = await XenoFelixJZZxd7.name.call({from: "0x0000000000000000000000000000000000000001"});
//		await XenoFelixJZZxd7.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolY12K1o = await XenoFelixJZZxd7.transferFrom.call(addressSZKIfm1, addresshNxUcaq, uintAyUUszb, {from: accounts[1]});
//		const boolRxpkAmJ = await XenoFelixJZZxd7.transfer.call(addressTtIDvT, uintP0u1myp, {from: accounts[2]});
//		const boolrIqACJr = await XenoFelixJZZxd7.acceptOwnership.call({from: accounts[2]});
//		const uint256vb6YL7B = await XenoFelixJZZxd7.allowance.call(addressvhCvOla, addressZZK1czE, {from: accounts[0]});

		assert.equal(stringgMnJkSf, "3iar4eeIgQMAKRSwa0ON5eTKKM43dA4quUcRpDsmL7J87Xfi1MOR")
		await expect(XenoFelixJZZxd7.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringGG2eaJ1 = "oGt"
		const stringhQhBH3 = "wrk5WqoWdhz4HL64MmDmW3Wf5vuUnFXIq6H0J6RaX"
		const uinterrJVJl = BigInt("600")
		const uintp62X5PS = BigInt("43")
		const XenoFelix9Hq62u = await XenoFelix.new(stringGG2eaJ1, stringhQhBH3, uinterrJVJl, uintp62X5PS, {from: accounts[0]});
		const uintkKplCa8 = BigInt("797")
		const addressZYnT1lv = accounts[0]
		const uintgi9zucc = BigInt("1355")
		const uintWZdLDoQ = BigInt("1743")
		const address4SSpuQ = accounts[4]
		const uintxopZSIh = BigInt("929")
		const addressUTBXk4h = accounts[1]
		const stringzECnMEq = await XenoFelix9Hq62u.name.call({from: accounts[4]});
		const uint256VLAXfKv = await XenoFelix9Hq62u.totalSupply.call({from: accounts[3]});
//		const boolnAPWhQu = await XenoFelix9Hq62u.transfer.call(addressZYnT1lv, uintkKplCa8, {from: accounts[5]});
//		const boolTkQtRHD = await XenoFelix9Hq62u.lock.call(address4SSpuQ, uintWZdLDoQ, uintgi9zucc, {from: accounts[4]});
//		const booloKoqLig = await XenoFelix9Hq62u.transfer.call(addressUTBXk4h, uintxopZSIh, {from: accounts[3]});

		assert.equal(stringzECnMEq, "oGt")
		assert.equal(uint256VLAXfKv, BigInt("6000000000000000000000000000000000000000000000"))
		await expect(XenoFelix9Hq62u.transfer.call(addressZYnT1lv, uintkKplCa8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringGG2eaJ1 = "oGt"
		const stringhQhBH3 = "wrk5WqoWdhz4HL64MmDmW3Wf5vuUnFXIq6H0J6RaX"
		const uintdeqjE4X = BigInt("600")
		const uintXLRQwU1 = BigInt("43")
		const XenoFelix9Hq62u = await XenoFelix.new(stringGG2eaJ1, stringhQhBH3, uintdeqjE4X, uintXLRQwU1, {from: accounts[0]});
		const addresscuJ0osG = accounts[2]
		const uint18Nf9V = BigInt("797")
		const addresskJgx0ej = accounts[0]
		const uintTe2RCCc = BigInt("1355")
		const uintQJAVq8i = BigInt("1743")
		const addressScynvZZ = accounts[4]
		const uintsSGcGuc = BigInt("265")
		const addressGY9bpiJ = accounts[1]
		const addressFxtjO9 = await XenoFelix9Hq62u.transferOwnership.call(addresscuJ0osG, {from: accounts[0]});
		const stringzECnMEq = await XenoFelix9Hq62u.name.call({from: accounts[4]});
//		const boolnAPWhQu = await XenoFelix9Hq62u.transfer.call(addresskJgx0ej, uint18Nf9V, {from: accounts[5]});
//		const boolTkQtRHD = await XenoFelix9Hq62u.lock.call(addressScynvZZ, uintQJAVq8i, uintTe2RCCc, {from: accounts[4]});
//		const booloKoqLig = await XenoFelix9Hq62u.transfer.call(addressGY9bpiJ, uintsSGcGuc, {from: accounts[3]});

		assert.equal(stringzECnMEq, "oGt")
		await expect(XenoFelix9Hq62u.transfer.call(addresskJgx0ej, uint18Nf9V, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringPT2NUPm = "N6gHZaNKSoM6GIjncYMT6c8pMoLAh5dcQVIINBVdbHiXK0QorvwpyP59wNilFw"
		const stringfwrs2J = "1aUIF7RLmn5bdLXNy51ypTtmeqJ8Oyl3EcFkdWK0TDxGw1GalETXhO812omGlYu"
		const uintopuSRmr = BigInt("160")
		const XenoFelixPWFDXhE = await XenoFelix.new(stringPT2NUPm, stringfwrs2J, uintopuSRmr, {from: accounts[2]});
		const addressOQFZ9A8 = accounts[1]
		await XenoFelixPWFDXhE.whenNotPaused.call({from: accounts[1]});
		const stringEwRWEb4 = await XenoFelixPWFDXhE.symbol.call({from: accounts[5]});
		const boolDmLavDu = await XenoFelixPWFDXhE.unfreezeAccount.call(addressOQFZ9A8, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const strings2Nb7GC = "2kpSERl6zlKJB12X9DkbILUQf"
		const stringmxBtFYa = "EZV651zcSWbsR9HBLILmnektY1d90RS"
		const uintvh6Rcl = BigInt("313")
		const uintWTFitw8 = BigInt("253")
		const XenoFelixFKqXfGM = await XenoFelix.new(strings2Nb7GC, stringmxBtFYa, uintvh6Rcl, uintWTFitw8, {from: accounts[0]});
		const addressvdF8jEj = accounts[3]
		const addressnEDhfMy = accounts[2]
		const uintI8ncrvs = BigInt("569")
		const addressBgp8549 = accounts[0]
		const addressFLByhPE = accounts[0]
		const uint256M9bDO1W = await XenoFelixFKqXfGM.allowance.call(addressnEDhfMy, addressvdF8jEj, {from: accounts[1]});
//		await XenoFelixFKqXfGM.unpause.call({from: accounts[4]});
//		const boolO2TItlK = await XenoFelixFKqXfGM.transferFrom.call(addressFLByhPE, addressBgp8549, uintI8ncrvs, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256M9bDO1W, BigInt("0"))
		await expect(XenoFelixFKqXfGM.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpXK7T5q = "L7eVYd6l3INQlKQGXqnHc5YL14ao4ve"
		const stringKnVFc4 = "I7s7KEDg2DkOfOjrhlbvV4ZlplbomobVJQCdxJ5fjAzVUCr6fpzoKv1qSua9xEaXsLJvXjQ0Xnfkjx4e"
		const uintXQGXyv9 = BigInt("159")
		const XenoFelixPzCdVEG = await XenoFelix.new(stringpXK7T5q, stringKnVFc4, uintXQGXyv9, {from: accounts[4]});
		const addressoLHJ5I7 = accounts[2]
		const addresscCMRTMI = accounts[3]
		const addressqkVbfLd = accounts[1]
		await XenoFelixPzCdVEG.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		const addressrkiAgES = await XenoFelixPzCdVEG.notFrozenAndTransaction.call(addresscCMRTMI, addressoLHJ5I7, {from: accounts[0]});
		const boolK2NJ1B = await XenoFelixPzCdVEG.isPauser.call(addressqkVbfLd, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringNDLcc4n = "3iar4eeIgQMAKRSwa0ON5eTKKM43dA4quUcRpDsmL7J87Xfi1MOR"
		const stringTXVjoa0 = "wpDwGmUNPKXKJzoYMJOrnMmP2pAQ7BCD5UaiSPl5"
		const uintbH5LlS4 = BigInt("117")
		const uintKD0Rt6T = BigInt("81")
		const XenoFelixJZZxd7 = await XenoFelix.new(stringNDLcc4n, stringTXVjoa0, uintbH5LlS4, uintKD0Rt6T, {from: accounts[2]});
		const uintfjI3UF7 = BigInt("2021")
		const addressRjcC3Oo = accounts[5]
		const uintT6Y7eXc = BigInt("1227")
		const addressm7lBgPk = "0x0000000000000000000000000000000000000002"
		const addressRieTKkz = accounts[4]
		const uintFao0giy = BigInt("381")
		const addresspdPbGed = accounts[4]
		const addresswzlpGAF = accounts[2]
		const addresse9opWu = accounts[2]
		const stringgMnJkSf = await XenoFelixJZZxd7.name.call({from: "0x0000000000000000000000000000000000000001"});
		const booljybLmnV = await XenoFelixJZZxd7.approve.call(addressRjcC3Oo, uintfjI3UF7, {from: accounts[4]});
//		const boolY12K1o = await XenoFelixJZZxd7.transferFrom.call(addressRieTKkz, addressm7lBgPk, uintT6Y7eXc, {from: accounts[1]});
//		const boolRxpkAmJ = await XenoFelixJZZxd7.transfer.call(addresspdPbGed, uintFao0giy, {from: accounts[2]});
//		const boolrIqACJr = await XenoFelixJZZxd7.acceptOwnership.call({from: accounts[2]});
//		const uint256vb6YL7B = await XenoFelixJZZxd7.allowance.call(addresse9opWu, addresswzlpGAF, {from: accounts[0]});

		assert.equal(booljybLmnV, true)
		assert.equal(stringgMnJkSf, "3iar4eeIgQMAKRSwa0ON5eTKKM43dA4quUcRpDsmL7J87Xfi1MOR")
		await expect(XenoFelixJZZxd7.transferFrom.call(addressRieTKkz, addressm7lBgPk, uintT6Y7eXc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringonNhCHF = "P2dh5"
		const stringRDOckp = "R9WVPm2StVX7i5lw5a8u3qmcozP3WhcGbPmsbSCjM2vwGgjdaLMBvObOZKAkPkFG5uPOSvJXkJT4i1feUjn"
		const uintXA11tnf = BigInt("829")
		const uintii0s5Xf = BigInt("199")
		const XenoFelixidpCoNj = await XenoFelix.new(stringonNhCHF, stringRDOckp, uintXA11tnf, uintii0s5Xf, {from: accounts[0]});
		const addressd0WTfcW = accounts[3]
		const uintTawwAto = BigInt("1721")
		const addressyDtAiq2 = accounts[0]
		const addressb48WMSy = accounts[4]
		const uint256mwvhf3 = await XenoFelixidpCoNj.balanceOf.call(addressd0WTfcW, {from: accounts[1]});
//		const boolVKk9Cwa = await XenoFelixidpCoNj.transferFrom.call(addressb48WMSy, addressyDtAiq2, uintTawwAto, {from: accounts[1]});
//		await XenoFelixidpCoNj.whenNotPaused.call({from: accounts[3]});

		assert.equal(uint256mwvhf3, BigInt("0"))
		await expect(XenoFelixidpCoNj.transferFrom.call(addressb48WMSy, addressyDtAiq2, uintTawwAto, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const strings2Nb7GC = "2kpSERl6zlKJB12X9DkbILUQf"
		const stringmxBtFYa = "EZV651zcSWbsR9HBLILmnektY1d90RS"
		const uintwklvExp = BigInt("313")
		const uinto4JLjtu = BigInt("253")
		const XenoFelixFKqXfGM = await XenoFelix.new(strings2Nb7GC, stringmxBtFYa, uintwklvExp, uinto4JLjtu, {from: accounts[0]});
		const uintM8xUi8i = BigInt("428")
		const addressxJstvPF = accounts[0]
		const addressxyIU172 = accounts[1]
		const boolHfni1y = await XenoFelixFKqXfGM.paused.call({from: accounts[5]});
//		const boolpfEvUgh = await XenoFelixFKqXfGM.transferFrom.call(addressxyIU172, addressxJstvPF, uintM8xUi8i, {from: accounts[0]});
//		await XenoFelixFKqXfGM.unpause.call({from: accounts[4]});
//		await XenoFelixFKqXfGM.unpause.call({from: accounts[1]});

		assert.equal(boolHfni1y, false)
		await expect(XenoFelixFKqXfGM.transferFrom.call(addressxyIU172, addressxJstvPF, uintM8xUi8i, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringNDLcc4n = "3iar4eeIgQMAKRSwa0ON5eTKKM43dA4quUcRpDsmL7J87Xfi1MOR"
		const stringTXVjoa0 = "wpDwGmUNPKXKJzoYMJOrnMmP2pAQ7BCD5UaiSPl5"
		const uintLZt2GGr = BigInt("117")
		const uintEZQhb3k = BigInt("81")
		const XenoFelixJZZxd7 = await XenoFelix.new(stringNDLcc4n, stringTXVjoa0, uintLZt2GGr, uintEZQhb3k, {from: accounts[2]});
		const uintCgO7kUe = BigInt("643")
		const uintZZu4vIh = BigInt("787")
		const addressBdf6ctd = accounts[4]
		const uintQzssLyV = BigInt("1227")
		const addressUleLYXb = "0x0000000000000000000000000000000000000001"
		const addressFd8Bxbx = accounts[4]
		const stringgMnJkSf = await XenoFelixJZZxd7.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolCOXQQH = await XenoFelixJZZxd7.transferWithLock.call(addressBdf6ctd, uintZZu4vIh, uintCgO7kUe, {from: accounts[2]});
//		await XenoFelixJZZxd7.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolY12K1o = await XenoFelixJZZxd7.transferFrom.call(addressFd8Bxbx, addressUleLYXb, uintQzssLyV, {from: accounts[1]});
//		const boolrIqACJr = await XenoFelixJZZxd7.acceptOwnership.call({from: accounts[2]});

		assert.equal(boolCOXQQH, true)
		assert.equal(stringgMnJkSf, "3iar4eeIgQMAKRSwa0ON5eTKKM43dA4quUcRpDsmL7J87Xfi1MOR")
		await expect(XenoFelixJZZxd7.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string9x4uLL = "IbUqKY5aER0xqNqMpIcV1zpmBoJArWzKJDuuMP6VwGS24LtfMWuvODukNlVNZYQzL6m"
		const stringQOpIJUq = "Sx4SDLNxUB71OcWpQx44Vt8R9tRvTn5Pb8tczwoDPgmheYO0yulLsEfEMGSwSYp79Sp"
		const uintILdQqA = BigInt("218")
		const XenoFelixvAyPU7j = await XenoFelix.new(string9x4uLL, stringQOpIJUq, uintILdQqA, {from: accounts[0]});
		const uintWqMzoNw = BigInt("325")
		const addressPoJKm9 = accounts[2]
		const addressEZAp3sy = accounts[4]
		const addressOtlLZcK = accounts[1]
		const addressnqxn5Ma = accounts[0]
		const addressGeFkHdU = accounts[1]
		const boolvRDBjlv = await XenoFelixvAyPU7j.burnOwner.call(addressPoJKm9, uintWqMzoNw, {from: accounts[0]});
		await XenoFelixvAyPU7j.onlyPauser.call({from: accounts[0]});
		await XenoFelixvAyPU7j.unpause.call({from: accounts[2]});
		const uint256Q62v3FR = await XenoFelixvAyPU7j.allowance.call(addressOtlLZcK, addressEZAp3sy, {from: accounts[2]});
		const uint256PAJn1VW = await XenoFelixvAyPU7j.allowance.call(addressGeFkHdU, addressnqxn5Ma, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringonNhCHF = "P2dh5"
		const stringRDOckp = "R9WVPm2StVX7i5lw5a8u3qmcozP3WhcGbPmsbSCjM2vwGgjdaLMBvObOZKAkPkFG5uPOSvJXkJT4i1feUjn"
		const uint879Vv0 = BigInt("829")
		const uintM4e6IpN = BigInt("199")
		const XenoFelixidpCoNj = await XenoFelix.new(stringonNhCHF, stringRDOckp, uint879Vv0, uintM4e6IpN, {from: accounts[0]});
		const addresspt6lkpV = accounts[3]
		const uintYncPTzO = BigInt("259")
		const uintyTq2mge = BigInt("1285")
		const addressICeneR6 = accounts[2]
		const uintKeVdgEm = BigInt("1903")
		const addressmz5pIa = accounts[4]
		const addressaAyvhNg = accounts[2]
		const uintMtLBoLv = BigInt("1857")
		const addresseVZXQy0 = accounts[2]
		const uintJp541Uk = BigInt("1721")
		const addressMKhRcXj = accounts[1]
		const addressGGubJei = accounts[4]
		const uint256mwvhf3 = await XenoFelixidpCoNj.balanceOf.call(addresspt6lkpV, {from: accounts[1]});
//		const boolxuLAyFU = await XenoFelixidpCoNj.lock.call(addressICeneR6, uintyTq2mge, uintYncPTzO, {from: accounts[0]});
//		const boolhMpLQ5W = await XenoFelixidpCoNj.transferFrom.call(addressaAyvhNg, addressmz5pIa, uintKeVdgEm, {from: accounts[0]});
//		const boolqlo4jaQ = await XenoFelixidpCoNj.approve.call(addresseVZXQy0, uintMtLBoLv, {from: accounts[4]});
//		const boolVKk9Cwa = await XenoFelixidpCoNj.transferFrom.call(addressGGubJei, addressMKhRcXj, uintJp541Uk, {from: accounts[1]});
//		await XenoFelixidpCoNj.whenNotPaused.call({from: accounts[3]});

		assert.equal(uint256mwvhf3, BigInt("0"))
		await expect(XenoFelixidpCoNj.lock.call(addressICeneR6, uintyTq2mge, uintYncPTzO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringr12yY1S = "gKIHjuWV3XZEf596NqlqAzkC47yrDtGTavAkoEXey6hhBNgtpiODw"
		const stringiabO6ri = "oEjbsOxYGbYqH8VBslaAa7zVbVZB1vNLjimVv8SHyU7vHiTnFTbqMKyoR5cS55Gp3uiYUotNlEx6yevoh4QQpRP"
		const uintnRzX8Oq = BigInt("1718")
		const uintsQSRPuB = BigInt("201")
		const XenoFelixpdSCV6 = await XenoFelix.new(stringr12yY1S, stringiabO6ri, uintnRzX8Oq, uintsQSRPuB, {from: "0x0000000000000000000000000000000000000001"});
		const addresslEPV8NB = accounts[3]
		const address7PiZh1 = accounts[1]
		const addressR6wthtp = accounts[1]
		const addressPa7Ak5j = "0x0000000000000000000000000000000000000001"
		const uint256Y7AlBDZ = await XenoFelixpdSCV6.totalSupply.call({from: accounts[0]});
		const addressf0NbzdE = await XenoFelixpdSCV6.notFrozenAndTransaction.call(address7PiZh1, addresslEPV8NB, {from: accounts[0]});
		await XenoFelixpdSCV6.onlyNewOwner.call({from: accounts[2]});
		const uint256ylCqpB6 = await XenoFelixpdSCV6.balanceOf.call(addressR6wthtp, {from: accounts[0]});
		const addressUIjRUn4 = await XenoFelixpdSCV6.addPauser.call(addressPa7Ak5j, {from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const strings2Nb7GC = "2kpSERl6zlKJB12X9DkbILUQf"
		const stringmxBtFYa = "EZV651zcSWbsR9HBLILmnektY1d90RS"
		const uintLCkRYy2 = BigInt("313")
		const uintvFtf3U = BigInt("253")
		const XenoFelixFKqXfGM = await XenoFelix.new(strings2Nb7GC, stringmxBtFYa, uintLCkRYy2, uintvFtf3U, {from: accounts[0]});
		const stringgaWgHkD = await XenoFelixFKqXfGM.symbol.call({from: accounts[2]});

		assert.equal(stringgaWgHkD, "EZV651zcSWbsR9HBLILmnektY1d90RS")
	});

	it('test for XenoFelix', async () => {
		const stringonNhCHF = "P2dh5"
		const stringRDOckp = "R9WVPm2StVX7i5lw5a8u3qmcozP3WhcGbPmsbSCjM2vwGgjdaLMBvObOZKAkPkFG5uPOSvJXkJT4i1feUjn"
		const uintuUvOdsq = BigInt("829")
		const uint5DTXv0 = BigInt("199")
		const XenoFelixidpCoNj = await XenoFelix.new(stringonNhCHF, stringRDOckp, uintuUvOdsq, uint5DTXv0, {from: accounts[0]});
		const addressjkJrpj8 = accounts[3]
		const uintsOaxIQJ = BigInt("1721")
		const addressxXTJH4Y = accounts[0]
		const addressFiAF7qr = accounts[5]
		const uint256mwvhf3 = await XenoFelixidpCoNj.balanceOf.call(addressjkJrpj8, {from: accounts[1]});
//		await XenoFelixidpCoNj.renouncePauser.call({from: accounts[0]});
//		const boolVKk9Cwa = await XenoFelixidpCoNj.transferFrom.call(addressFiAF7qr, addressxXTJH4Y, uintsOaxIQJ, {from: accounts[1]});

		assert.equal(uint256mwvhf3, BigInt("0"))
		await expect(XenoFelixidpCoNj.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringonNhCHF = "P2dh5"
		const stringRDOckp = "R9WVPm2StVX7i5lw5a8u3qmcozP3WhcGbPmsbSCjM2vwGgjdaLMBvObOZKAkPkFG5uPOSvJXkJT4i1feUjn"
		const uintaZtU9CM = BigInt("829")
		const uintAgstNq6 = BigInt("199")
		const XenoFelixidpCoNj = await XenoFelix.new(stringonNhCHF, stringRDOckp, uintaZtU9CM, uintAgstNq6, {from: accounts[0]});
		const uintA5rH6Xl = BigInt("1012")
		const addressQbzjxP7 = accounts[2]
		const addressNy73DCq = accounts[4]
//		const addressuQBFMUH = await XenoFelixidpCoNj.burnFrom.call(addressQbzjxP7, uintA5rH6Xl, {from: accounts[5]});
//		const uint256mwvhf3 = await XenoFelixidpCoNj.balanceOf.call(addressNy73DCq, {from: accounts[1]});

		await expect(XenoFelixidpCoNj.burnFrom.call(addressQbzjxP7, uintA5rH6Xl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const strings2Nb7GC = "2kpSERl6zlKJB12X9DkbILUQf"
		const stringmxBtFYa = "EZV651zcSWbsR9HBLILmnektY1d90RS"
		const uintDJG2swb = BigInt("313")
		const uint5TgrSc = BigInt("253")
		const XenoFelixFKqXfGM = await XenoFelix.new(strings2Nb7GC, stringmxBtFYa, uintDJG2swb, uint5TgrSc, {from: accounts[0]});
		const uintwvmuuJ = BigInt("1460")
		const addressd5P2Kjl = accounts[2]
		const addressrakLHiP = accounts[2]
//		await XenoFelixFKqXfGM.pause.call({from: accounts[0]});
//		const boolK7DQeLO = await XenoFelixFKqXfGM.transferFrom.call(addressrakLHiP, addressd5P2Kjl, uintwvmuuJ, {from: accounts[3]});

		await expect(XenoFelixFKqXfGM.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringonNhCHF = "P2dh5"
		const stringRDOckp = "R9WVPm2StVX7i5lw5a8u3qmcozP3WhcGbPmsbSCjM2vwGgjdaLMBvObOZKAkPkFG5uPOSvJXkJT4i1feUjn"
		const uintLOgUWti = BigInt("829")
		const uintxamyb02 = BigInt("199")
		const XenoFelixidpCoNj = await XenoFelix.new(stringonNhCHF, stringRDOckp, uintLOgUWti, uintxamyb02, {from: accounts[0]});
		const addresshog28F = accounts[3]
		const addressjDa5pj0 = accounts[3]
		const uintwDUETS4 = BigInt("980")
		const address9q3oAE = accounts[5]
		const uintgfFTiKJ = BigInt("1750")
		const addressQREKuP = accounts[0]
		const addressOwqcnbz = accounts[5]
		const uintVpGSPD = BigInt("298")
		const addressnVyPGLX = accounts[2]
		const boolX7P9V5B = await XenoFelixidpCoNj.isOwner.call(addresshog28F, {from: accounts[0]});
		const uint256mwvhf3 = await XenoFelixidpCoNj.balanceOf.call(addressjDa5pj0, {from: accounts[1]});
//		await XenoFelixidpCoNj.renouncePauser.call({from: accounts[0]});
//		const uint86YqN2a = await XenoFelixidpCoNj.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolUMYoqeF = await XenoFelixidpCoNj.transfer.call(address9q3oAE, uintwDUETS4, {from: "0x0000000000000000000000000000000000000001"});
//		await XenoFelixidpCoNj.renouncePauser.call({from: accounts[3]});
//		const boolVKk9Cwa = await XenoFelixidpCoNj.transferFrom.call(addressOwqcnbz, addressQREKuP, uintgfFTiKJ, {from: accounts[1]});
//		const boolMvW8pcs = await XenoFelixidpCoNj.burnOwner.call(addressnVyPGLX, uintVpGSPD, {from: accounts[0]});

		assert.equal(boolX7P9V5B, false)
		assert.equal(uint256mwvhf3, BigInt("0"))
		await expect(XenoFelixidpCoNj.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringgri5UW1 = "UuRXVoUL"
		const stringan8ctiX = "NOsKmolg8IlEJThIGmhxKEcJb4ap4bDLwibp5hBPD8BwbpdvSss7Hd8boGQipmOoRPQfUiLQt9RNgtdr3UDxDS5bbUeAMi"
		const uintifL66Kn = BigInt("45")
		const XenoFelixthyYHAc = await XenoFelix.new(stringgri5UW1, stringan8ctiX, uintifL66Kn, {from: accounts[5]});
		const uintGAarbOC = BigInt("1558")
		const addressCiMRYUZ = accounts[2]
		const addressI720vQc = "0x0000000000000000000000000000000000000001"
		const addresshi4th7K = accounts[0]
		const uint256wreBcyp = await XenoFelixthyYHAc.burn.call(uintGAarbOC, {from: accounts[5]});
		const addressVDsMQ6i = await XenoFelixthyYHAc.transferOwnership.call(addressCiMRYUZ, {from: accounts[0]});
		const addressdjcrhWs = await XenoFelixthyYHAc.notFrozenAndTransaction.call(addresshi4th7K, addressI720vQc, {from: accounts[0]});
		await XenoFelixthyYHAc.onlyNewOwner.call({from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringonNhCHF = "P2dh5"
		const stringRDOckp = "R9WVPm2StVX7i5lw5a8u3qmcozP3WhcGbPmsbSCjM2vwGgjdaLMBvObOZKAkPkFG5uPOSvJXkJT4i1feUjn"
		const uintckFa17i = BigInt("829")
		const uintc65tUv = BigInt("199")
		const XenoFelixidpCoNj = await XenoFelix.new(stringonNhCHF, stringRDOckp, uintckFa17i, uintc65tUv, {from: accounts[0]});
		const addresseZWRqQ = accounts[3]
		const uintK6wZHx1 = BigInt("596")
		const addresskQAlBi = "0x0000000000000000000000000000000000000001"
		const uintz91sOGi = BigInt("1721")
		const addressoMEc8Sz = accounts[1]
		const addressOupZYB3 = accounts[4]
		const uint256mwvhf3 = await XenoFelixidpCoNj.balanceOf.call(addresseZWRqQ, {from: accounts[1]});
//		const boolgR7gSwh = await XenoFelixidpCoNj.burnOwner.call(addresskQAlBi, uintK6wZHx1, {from: accounts[0]});
//		const boolVKk9Cwa = await XenoFelixidpCoNj.transferFrom.call(addressOupZYB3, addressoMEc8Sz, uintz91sOGi, {from: accounts[1]});

		assert.equal(uint256mwvhf3, BigInt("0"))
		await expect(XenoFelixidpCoNj.burnOwner.call(addresskQAlBi, uintK6wZHx1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const strings2Nb7GC = "2kpSERl6zlKJB12X9DkbILUQf"
		const stringmxBtFYa = "EZV651zcSWbsR9HBLILmnektY1d90RS"
		const uintRyAENq = BigInt("313")
		const uinthIXusLt = BigInt("253")
		const XenoFelixFKqXfGM = await XenoFelix.new(strings2Nb7GC, stringmxBtFYa, uintRyAENq, uinthIXusLt, {from: accounts[0]});
		const addressSBUTfAo = accounts[2]
		const uintgAcWSJ7 = BigInt("800")
		const addressDDrP15X = accounts[0]
		const addressA9U6z1k = accounts[2]
		const addressGsE9KKV = accounts[1]
		const uintWGVN4B = BigInt("866")
		const uintcW7S6ga = BigInt("1180")
		const addressHDwjbM4 = accounts[3]
		const booltS6z4xC = await XenoFelixFKqXfGM.freezeAccount.call(addressSBUTfAo, {from: accounts[0]});
		const boolA8NQsxZ = await XenoFelixFKqXfGM.burnOwner.call(addressDDrP15X, uintgAcWSJ7, {from: accounts[0]});
//		const addressZQgb7BD = await XenoFelixFKqXfGM.notFrozenAndTransaction.call(addressGsE9KKV, addressA9U6z1k, {from: accounts[0]});
//		const boolUuET6Xe = await XenoFelixFKqXfGM.lock.call(addressHDwjbM4, uintcW7S6ga, uintWGVN4B, {from: accounts[0]});

		assert.equal(boolA8NQsxZ, true)
		assert.equal(booltS6z4xC, true)
		await expect(XenoFelixFKqXfGM.notFrozenAndTransaction.call(addressGsE9KKV, addressA9U6z1k, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringGG2eaJ1 = "oGt"
		const stringhQhBH3 = "wrk5WqoWdhz4HL64MmDmW3Wf5vuUnFXIq6H0J6RaX"
		const uintFBe1Tf = BigInt("600")
		const uintN4nEYGM = BigInt("43")
		const XenoFelix9Hq62u = await XenoFelix.new(stringGG2eaJ1, stringhQhBH3, uintFBe1Tf, uintN4nEYGM, {from: accounts[0]});
		const uinta3SoEFP = BigInt("1501")
		const uintx6b51ML = BigInt("200")
		const addressOWIaGL = accounts[0]
		const uintEmC9rXA = BigInt("929")
		const addressxwQn0k1 = accounts[2]
		const boolj0qjfYZ = await XenoFelix9Hq62u.lock.call(addressOWIaGL, uintx6b51ML, uinta3SoEFP, {from: accounts[0]});
//		const booloKoqLig = await XenoFelix9Hq62u.transfer.call(addressxwQn0k1, uintEmC9rXA, {from: accounts[3]});

		assert.equal(boolj0qjfYZ, true)
		await expect(XenoFelix9Hq62u.transfer.call(addressxwQn0k1, uintEmC9rXA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringonNhCHF = "P2dh5"
		const stringRDOckp = "R9WVPm2StVX7i5lw5a8u3qmcozP3WhcGbPmsbSCjM2vwGgjdaLMBvObOZKAkPkFG5uPOSvJXkJT4i1feUjn"
		const uinto9jgQNA = BigInt("829")
		const uintigSLOkf = BigInt("199")
		const XenoFelixidpCoNj = await XenoFelix.new(stringonNhCHF, stringRDOckp, uinto9jgQNA, uintigSLOkf, {from: accounts[0]});
		const addresspeBPaka = accounts[0]
		const addressq1XYT8 = accounts[5]
		const uintGRmu8Mc = BigInt("1307")
		const addressvYUQuP = "0x0000000000000000000000000000000000000001"
		const addressH7NvJBr = accounts[1]
		const boolkNjgEGO = await XenoFelixidpCoNj.isOwner.call(addresspeBPaka, {from: accounts[2]});
		const uint256mwvhf3 = await XenoFelixidpCoNj.balanceOf.call(addressq1XYT8, {from: accounts[1]});
//		const boolRULZzK4 = await XenoFelixidpCoNj.transferFrom.call(addressH7NvJBr, addressvYUQuP, uintGRmu8Mc, {from: accounts[4]});

		assert.equal(boolkNjgEGO, true)
		assert.equal(uint256mwvhf3, BigInt("0"))
		await expect(XenoFelixidpCoNj.transferFrom.call(addressH7NvJBr, addressvYUQuP, uintGRmu8Mc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringonNhCHF = "P2dh5"
		const stringRDOckp = "R9WVPm2StVX7i5lw5a8u3qmcozP3WhcGbPmsbSCjM2vwGgjdaLMBvObOZKAkPkFG5uPOSvJXkJT4i1feUjn"
		const uintWIzwLGu = BigInt("829")
		const uintQRJaHKE = BigInt("199")
		const XenoFelixidpCoNj = await XenoFelix.new(stringonNhCHF, stringRDOckp, uintWIzwLGu, uintQRJaHKE, {from: accounts[0]});
		const addressKpyhWem = accounts[3]
		const addressZlxzigC = accounts[4]
		const uintYyONL6v = BigInt("28")
		const addressdHQ941Y = accounts[3]
		const uintx4chFe6 = BigInt("980")
		const addressTeLvO3Z = accounts[5]
		const uintdcDEsIu = BigInt("1750")
		const addressgSyhYDC = accounts[0]
		const addressxcezq7n = accounts[5]
		const uintIs91qwX = BigInt("298")
		const addressbtzGxSB = accounts[2]
		const boolX7P9V5B = await XenoFelixidpCoNj.isOwner.call(addressKpyhWem, {from: accounts[0]});
		const uint256mwvhf3 = await XenoFelixidpCoNj.balanceOf.call(addressZlxzigC, {from: accounts[1]});
//		await XenoFelixidpCoNj.renouncePauser.call({from: accounts[0]});
//		const boolYGTZwM = await XenoFelixidpCoNj.unlock.call(addressdHQ941Y, uintYyONL6v, {from: accounts[0]});
//		const uint86YqN2a = await XenoFelixidpCoNj.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolUMYoqeF = await XenoFelixidpCoNj.transfer.call(addressTeLvO3Z, uintx4chFe6, {from: "0x0000000000000000000000000000000000000001"});
//		await XenoFelixidpCoNj.renouncePauser.call({from: accounts[3]});
//		const boolVKk9Cwa = await XenoFelixidpCoNj.transferFrom.call(addressxcezq7n, addressgSyhYDC, uintdcDEsIu, {from: accounts[1]});
//		const boolMvW8pcs = await XenoFelixidpCoNj.burnOwner.call(addressbtzGxSB, uintIs91qwX, {from: accounts[0]});

		assert.equal(boolX7P9V5B, false)
		assert.equal(uint256mwvhf3, BigInt("0"))
		await expect(XenoFelixidpCoNj.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})