const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20qkzyhZ3 = await GAZ_ERC20.new({from: accounts[0]});
		const uintVTjXX1H = BigInt("1864")
		const addressGrolv3s = accounts[1]
		const uintK4dHFL2 = BigInt("1921")
		const addresswq7iKGe = accounts[4]
		const addressDUh3Ukz = accounts[5]
		const uintcxFil8T = BigInt("752")
		const addressC2gWOEk = accounts[0]
		const addressdlGwvJq = accounts[0]
		const uintXjG3UkO = BigInt("436")
		const addressTOf3xXv = accounts[5]
		const boolHgU2hLN = await GAZ_ERC20qkzyhZ3.approve.call(addressGrolv3s, uintVTjXX1H, {from: accounts[4]});
		const boolJ2v9FSg = await GAZ_ERC20qkzyhZ3.transferFrom.call(addressDUh3Ukz, addresswq7iKGe, uintK4dHFL2, {from: accounts[0]});
		const boolP6DrTwk = await GAZ_ERC20qkzyhZ3.approve.call(addressC2gWOEk, uintcxFil8T, {from: accounts[3]});
		const booljXGChqb = await GAZ_ERC20qkzyhZ3.approve.call(addressdlGwvJq, {from: accounts[0]});
		const boolVXWaC8H = await GAZ_ERC20qkzyhZ3.transfer.call(addressTOf3xXv, uintXjG3UkO, {from: accounts[2]});

		assert.equal(boolHgU2hLN, true)
		await expect(GAZ_ERC20qkzyhZ3.transferFrom.call(addressDUh3Ukz, addresswq7iKGe, uintK4dHFL2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20fE86SVf = await GAZ_ERC20.new({from: accounts[3]});
		const addressSxqcctE = accounts[3]
		const uintnNvuYc = BigInt("69")
		const addresssufSp7F = accounts[5]
		const addresshb7k4nq = accounts[1]
		const uintDSIvdcA = BigInt("947")
		const addressQvNaCqH = accounts[0]
		const uintp3d54h9 = BigInt("657")
		const addressr6jhdDo = accounts[0]
		const addressXRxmDh7 = accounts[2]
		const boolsnlWO3o = await GAZ_ERC20fE86SVf.approve.call(addressSxqcctE, {from: accounts[0]});
		const boolrT6fOOB = await GAZ_ERC20fE86SVf.transferFrom.call(addresshb7k4nq, addresssufSp7F, uintnNvuYc, {from: accounts[1]});
		const boolmohNvYe = await GAZ_ERC20fE86SVf.transfer.call(addressQvNaCqH, uintDSIvdcA, {from: accounts[1]});
		const boolh9k0IxT = await GAZ_ERC20fE86SVf.transferFrom.call(addressXRxmDh7, addressr6jhdDo, uintp3d54h9, {from: accounts[1]});

		await expect(GAZ_ERC20fE86SVf.approve.call(addressSxqcctE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ACoLOwZ = await GAZ_ERC20.new({from: accounts[0]});
		const uinttuGkE9B = BigInt("839")
		const addresskL3Uzu7 = accounts[5]
		const uintJt39B6w = BigInt("1789")
		const addressOTtrNIE = accounts[0]
		const uintf8WE549 = BigInt("1266")
		const addresszrwWTw = accounts[1]
		const addresszdj0Kak = accounts[0]
		const uintFOfApzQ = BigInt("1193")
		const addressuTOnRzd = accounts[4]
		const uintrDOw84B = BigInt("430")
		const addresshASWCMH = accounts[2]
		const boolmitCnXJ = await GAZ_ERC20ACoLOwZ.transfer.call(addresskL3Uzu7, uinttuGkE9B, {from: "0x0000000000000000000000000000000000000001"});
		const boolqJVYlU = await GAZ_ERC20ACoLOwZ.transfer.call(addressOTtrNIE, uintJt39B6w, {from: accounts[4]});
		const bool9gj7kC = await GAZ_ERC20ACoLOwZ.transfer.call(addresszrwWTw, uintf8WE549, {from: accounts[4]});
		const booleqsJvKd = await GAZ_ERC20ACoLOwZ.approve.call(addresszdj0Kak, {from: accounts[5]});
		const boolUQSqhj = await GAZ_ERC20ACoLOwZ.transfer.call(addressuTOnRzd, uintFOfApzQ, {from: accounts[4]});
		const boolQCMAd8 = await GAZ_ERC20ACoLOwZ.approve.call(addresshASWCMH, uintrDOw84B, {from: accounts[0]});

		await expect(GAZ_ERC20ACoLOwZ.transfer.call(addresskL3Uzu7, uinttuGkE9B, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20TgXGkN = await GAZ_ERC20.new({from: accounts[4]});
		const addressvIIFsT = accounts[5]
		const uintmNPnwKc = BigInt("1899")
		const addressiKi7rfO = "0x0000000000000000000000000000000000000001"
		const addressPsTocjw = accounts[3]
		const uintylkZQvb = BigInt("528")
		const addresstyTr5sD = accounts[0]
		const addressAHoTXk8 = accounts[2]
		const uintWkItx4C = BigInt("5")
		const addressuNX7rJ = accounts[2]
		const uintddZ0tq2 = BigInt("350")
		const addressC10gIqD = "0x0000000000000000000000000000000000000001"
		const booldklCnp8 = await GAZ_ERC20TgXGkN.approve.call(addressvIIFsT, {from: accounts[3]});
		const boolP18WOo = await GAZ_ERC20TgXGkN.transferFrom.call(addressPsTocjw, addressiKi7rfO, uintmNPnwKc, {from: accounts[1]});
		const boolOgaCusn = await GAZ_ERC20TgXGkN.transfer.call(addresstyTr5sD, uintylkZQvb, {from: accounts[0]});
		const boolFVq48G8 = await GAZ_ERC20TgXGkN.approve.call(addressAHoTXk8, {from: accounts[2]});
		const boolSUoj9CC = await GAZ_ERC20TgXGkN.transfer.call(addressuNX7rJ, uintWkItx4C, {from: accounts[2]});
		const boolf5tt4NP = await GAZ_ERC20TgXGkN.approve.call(addressC10gIqD, uintddZ0tq2, {from: accounts[5]});

		await expect(GAZ_ERC20TgXGkN.approve.call(addressvIIFsT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20BZmUVvl = await GAZ_ERC20.new({from: accounts[2]});
		const uintjPYEXWa = BigInt("304")
		const addressRKewNt = accounts[4]
		const address4MRZwX = accounts[0]
		const uintBZ39lzz = BigInt("1658")
		const addressDvG2Iyi = accounts[0]
		const uinthFEoFix = BigInt("1441")
		const addressb8IXTRg = accounts[0]
		const addressg9BpzyK = accounts[1]
		const booln8H9vY6 = await GAZ_ERC20BZmUVvl.approve.call(addressRKewNt, uintjPYEXWa, {from: accounts[3]});
		const boolOjtvNPw = await GAZ_ERC20BZmUVvl.approve.call(address4MRZwX, {from: "0x0000000000000000000000000000000000000001"});
		const boolHcywdCg = await GAZ_ERC20BZmUVvl.approve.call(addressDvG2Iyi, uintBZ39lzz, {from: accounts[4]});
		const bool0AUfGi = await GAZ_ERC20BZmUVvl.approve.call(addressb8IXTRg, uinthFEoFix, {from: accounts[5]});
		const boolvaMPkSl = await GAZ_ERC20BZmUVvl.approve.call(addressg9BpzyK, {from: accounts[2]});

		assert.equal(booln8H9vY6, true)
		await expect(GAZ_ERC20BZmUVvl.approve.call(address4MRZwX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20fE86SVf = await GAZ_ERC20.new({from: accounts[3]});
		const addresslC7zIMJ = accounts[0]
		const addresshkfRhgL = accounts[3]
		const uintw5TFM8o = BigInt("69")
		const addressUOmbXRG = accounts[5]
		const addressxKeCGjs = accounts[2]
		const uintrWJFDat = BigInt("947")
		const addressuiAY8dI = accounts[0]
		const uintg1zx016 = BigInt("657")
		const addressHEe4dEv = accounts[0]
		const addressK8Conou = accounts[2]
		const boolBXwkWgD = await GAZ_ERC20fE86SVf.approve.call(addresslC7zIMJ, {from: accounts[1]});
		const boolsnlWO3o = await GAZ_ERC20fE86SVf.approve.call(addresshkfRhgL, {from: accounts[0]});
		const boolrT6fOOB = await GAZ_ERC20fE86SVf.transferFrom.call(addressxKeCGjs, addressUOmbXRG, uintw5TFM8o, {from: accounts[1]});
		const boolmohNvYe = await GAZ_ERC20fE86SVf.transfer.call(addressuiAY8dI, uintrWJFDat, {from: accounts[1]});
		const boolh9k0IxT = await GAZ_ERC20fE86SVf.transferFrom.call(addressK8Conou, addressHEe4dEv, uintg1zx016, {from: accounts[1]});

		await expect(GAZ_ERC20fE86SVf.approve.call(addresslC7zIMJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20qkzyhZ3 = await GAZ_ERC20.new({from: accounts[0]});
		const uintoRvgqee = BigInt("1864")
		const addressCnTS1Y = accounts[1]
		const addressYAfbIEe = accounts[1]
		const uintobuSZsx = BigInt("1791")
		const addresse00Up7r = accounts[2]
		const uintjAYXKVY = BigInt("1921")
		const addressxzkWKuM = accounts[4]
		const addressZrniNj3 = accounts[5]
		const uintpF5RVCx = BigInt("752")
		const addressW3yJ2e4 = accounts[1]
		const addressFW6p5IH = accounts[0]
		const uintFFHlwoI = BigInt("436")
		const addresshQH5kpa = accounts[5]
		const boolHgU2hLN = await GAZ_ERC20qkzyhZ3.approve.call(addressCnTS1Y, uintoRvgqee, {from: accounts[4]});
		const boolTHJyzZY = await GAZ_ERC20qkzyhZ3.approve.call(addressYAfbIEe, {from: accounts[2]});
		const boolinVgBeX = await GAZ_ERC20qkzyhZ3.transfer.call(addresse00Up7r, uintobuSZsx, {from: accounts[1]});
		const boolJ2v9FSg = await GAZ_ERC20qkzyhZ3.transferFrom.call(addressZrniNj3, addressxzkWKuM, uintjAYXKVY, {from: accounts[0]});
		const boolP6DrTwk = await GAZ_ERC20qkzyhZ3.approve.call(addressW3yJ2e4, uintpF5RVCx, {from: accounts[3]});
		const booljXGChqb = await GAZ_ERC20qkzyhZ3.approve.call(addressFW6p5IH, {from: accounts[0]});
		const boolVXWaC8H = await GAZ_ERC20qkzyhZ3.transfer.call(addresshQH5kpa, uintFFHlwoI, {from: accounts[2]});

		assert.equal(boolHgU2hLN, true)
		await expect(GAZ_ERC20qkzyhZ3.approve.call(addressYAfbIEe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20qkzyhZ3 = await GAZ_ERC20.new({from: accounts[0]});
		const uintnOkIpUk = BigInt("1787")
		const addressppzo1MG = accounts[3]
		const uintJI1EYrn = BigInt("1264")
		const addressTIbiQIB = accounts[1]
		const addressLaF2RiN = accounts[1]
		const uintBcD3Uri = BigInt("1864")
		const addressNPSzSmj = accounts[1]
		const uintnFiplEK = BigInt("1921")
		const addressG874Uo = accounts[4]
		const addressTJdC5N6 = accounts[5]
		const uintntR89sa = BigInt("770")
		const addresstaorXzh = accounts[0]
		const addressyCKM3Wh = accounts[0]
		const uinthvM4KN2 = BigInt("436")
		const addressguErzdH = accounts[5]
		const boolLeJ134r = await GAZ_ERC20qkzyhZ3.transfer.call(addressppzo1MG, uintnOkIpUk, {from: accounts[0]});
		const boolZZr3PER = await GAZ_ERC20qkzyhZ3.transferFrom.call(addressLaF2RiN, addressTIbiQIB, uintJI1EYrn, {from: accounts[0]});
		const boolHgU2hLN = await GAZ_ERC20qkzyhZ3.approve.call(addressNPSzSmj, uintBcD3Uri, {from: accounts[4]});
		const boolJ2v9FSg = await GAZ_ERC20qkzyhZ3.transferFrom.call(addressTJdC5N6, addressG874Uo, uintnFiplEK, {from: accounts[0]});
		const boolP6DrTwk = await GAZ_ERC20qkzyhZ3.approve.call(addresstaorXzh, uintntR89sa, {from: accounts[3]});
		const booljXGChqb = await GAZ_ERC20qkzyhZ3.approve.call(addressyCKM3Wh, {from: accounts[0]});
		const boolVXWaC8H = await GAZ_ERC20qkzyhZ3.transfer.call(addressguErzdH, uinthvM4KN2, {from: accounts[2]});

		assert.equal(boolLeJ134r, true)
		await expect(GAZ_ERC20qkzyhZ3.transferFrom.call(addressLaF2RiN, addressTIbiQIB, uintJI1EYrn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20oJCBctp = await GAZ_ERC20.new({from: accounts[2]});
		const addresspNhX9Zn = accounts[5]
		const uinth8gkyB = BigInt("246")
		const addresstNzzJ9N = "0x0000000000000000000000000000000000000001"
		const boolKs7yq7r = await GAZ_ERC20oJCBctp.approve.call(addresspNhX9Zn, {from: accounts[5]});
		const boolypME2Ip = await GAZ_ERC20oJCBctp.transfer.call(addresstNzzJ9N, uinth8gkyB, {from: accounts[3]});

		await expect(GAZ_ERC20oJCBctp.approve.call(addresspNhX9Zn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20VV3lRiX = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintoaNGg65 = BigInt("666")
		const addressRjwNEen = accounts[0]
		const uintSr36pml = BigInt("390")
		const addresshsWccO0 = "0x0000000000000000000000000000000000000001"
		const uintMh5M0bI = BigInt("931")
		const addressfUdp7t = accounts[3]
		const boolcKyEcLl = await GAZ_ERC20VV3lRiX.approve.call(addressRjwNEen, uintoaNGg65, {from: accounts[4]});
		const boolc8mbYrI = await GAZ_ERC20VV3lRiX.approve.call(addresshsWccO0, uintSr36pml, {from: accounts[3]});
		const boolFbc4xmw = await GAZ_ERC20VV3lRiX.approve.call(addressfUdp7t, uintMh5M0bI, {from: accounts[0]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20aF6cdNQ = await GAZ_ERC20.new({from: accounts[5]});
		const addressss4tRSi = accounts[2]
		const uintwuKjX1q = BigInt("524")
		const addressEsm4wCk = accounts[2]
		const uintwYY5I9E = BigInt("104")
		const addressSmfqKjS = accounts[3]
		const addressU4uPToV = accounts[0]
		const uinthRidY19 = BigInt("142")
		const addressG1sBDR = accounts[3]
		const uintxRsYuW = BigInt("636")
		const addressSn664aN = accounts[1]
		const boolqhShbRv = await GAZ_ERC20aF6cdNQ.approve.call(addressss4tRSi, {from: accounts[4]});
		const boolHRxKiGa = await GAZ_ERC20aF6cdNQ.transfer.call(addressEsm4wCk, uintwuKjX1q, {from: accounts[2]});
		const boolOkYlMHy = await GAZ_ERC20aF6cdNQ.transferFrom.call(addressU4uPToV, addressSmfqKjS, uintwYY5I9E, {from: accounts[2]});
		const boolUcjbGnv = await GAZ_ERC20aF6cdNQ.transfer.call(addressG1sBDR, uinthRidY19, {from: accounts[0]});
		const booleC4Z57c = await GAZ_ERC20aF6cdNQ.transfer.call(addressSn664aN, uintxRsYuW, {from: accounts[1]});

		await expect(GAZ_ERC20aF6cdNQ.approve.call(addressss4tRSi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})