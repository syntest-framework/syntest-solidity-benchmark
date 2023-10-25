const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringu0B6g2g = "N9m77DrBSadBqrJwDQ8JfXYogOG2sEYQR9X1LNqKyEmiOf"
		const stringiVh3RA2 = "dHo2xUBUI9O"
		const uinttlUNtWe = BigInt("1418")
		const uint6eHtUx = BigInt("178")
		const XenoFelixzcOcgUk = await XenoFelix.new(stringu0B6g2g, stringiVh3RA2, uinttlUNtWe, uint6eHtUx, {from: accounts[1]});
		const addressBSBV6eD = accounts[2]
		const boolvBzs5pT = await XenoFelixzcOcgUk.paused.call({from: accounts[3]});
//		const addressZXTpdAs = await XenoFelixzcOcgUk.removePauser.call(addressBSBV6eD, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolvBzs5pT, false)
		await expect(XenoFelixzcOcgUk.removePauser.call(addressBSBV6eD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYGNKOXo = "c6Y01iHKvgyIwPm6Xh2qK483gN6wmHhEWV1B4q6pvt"
		const stringhJf3by = "bI77pKPgtwbTAqCZOaOOLdV43H"
		const uintaA1WzFa = BigInt("218")
		const XenoFelixbc1Y369 = await XenoFelix.new(stringYGNKOXo, stringhJf3by, uintaA1WzFa, {from: accounts[3]});
		const addressB7GdFp9 = accounts[4]
		const addressVhPlHNI = accounts[0]
		const addressskHVCZY = accounts[1]
		const uint256tP77wir = await XenoFelixbc1Y369.totalSupply.call({from: accounts[2]});
		const stringBnAXFrb = await XenoFelixbc1Y369.name.call({from: accounts[1]});
		await XenoFelixbc1Y369.renouncePauser.call({from: accounts[3]});
		await XenoFelixbc1Y369.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const addressKvjhaH = await XenoFelixbc1Y369.notFrozenAndTransaction.call(addressVhPlHNI, addressB7GdFp9, {from: accounts[4]});
		const addressz2hfEgX = await XenoFelixbc1Y369.notFrozen.call(addressskHVCZY, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringcgU9Stq = "4td2bdr7DD0yGGbSxR27NO1OYBYiTJcB2YXZUxbyUOhD8rV3PbIdMyHqiLwukCC46VOFYt0Bx7es9KrHEiz5LSuWHEz6"
		const stringm8uaSmj = "5e9eQMXj5Bvwnq5G"
		const uintC6pVHpm = BigInt("827")
		const uintUkGHKSk = BigInt("103")
		const XenoFelixn3xKNg = await XenoFelix.new(stringcgU9Stq, stringm8uaSmj, uintC6pVHpm, uintUkGHKSk, {from: accounts[5]});
		const uintMKUEAoo = BigInt("1991")
		const address0ZcLoo = accounts[4]
		const addresswWZAPKv = accounts[2]
//		const uint256buydQ1B = await XenoFelixn3xKNg.burn.call(uintMKUEAoo, {from: "0x0000000000000000000000000000000000000001"});
//		const addressgpiz4p = await XenoFelixn3xKNg.notFrozenAndTransaction.call(addresswWZAPKv, address0ZcLoo, {from: accounts[4]});
//		const uint256k5IGJnu = await XenoFelixn3xKNg.totalSupply.call({from: accounts[4]});

		await expect(XenoFelixn3xKNg.burn.call(uintMKUEAoo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const XenoFelixmoSXJYH = await XenoFelix.new({from: accounts[3]});
		const uintoDxzave = BigInt("633")
		const addressOCwrko4 = accounts[4]
		await XenoFelixmoSXJYH.onlyNewOwner.call({from: accounts[4]});
		const boolmptrgGc = await XenoFelixmoSXJYH.transfer.call(addressOCwrko4, uintoDxzave, {from: accounts[1]});
		const booltWQDrjG = await XenoFelixmoSXJYH.acceptOwnership.call({from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringO87y9yb = "yQTWmXbv609L6bX9TDloIRu32fSKIBCArJS9y7neyWu5jdVXE8zQeAaD2COrkKiBcGps"
		const stringlFPsef2 = "2Ta43O9AvZV"
		const uintBJlDlNT = BigInt("38")
		const XenoFelixERYdDzq = await XenoFelix.new(stringO87y9yb, stringlFPsef2, uintBJlDlNT, {from: accounts[0]});
		const uintHv8vyPI = BigInt("467")
		const addresstXQGldY = accounts[2]
		const addresskJTvgWl = accounts[4]
		const addresss6PgWAB = accounts[4]
		const uintlkTju4J = BigInt("1905")
		const addressJXeLyNx = accounts[1]
		const addressGfIO8bb = accounts[2]
		const addresssB1LBX = accounts[5]
		const boolyetIwXT = await XenoFelixERYdDzq.transferFrom.call(addresskJTvgWl, addresstXQGldY, uintHv8vyPI, {from: "0x0000000000000000000000000000000000000001"});
		const addressNsBotrF = await XenoFelixERYdDzq.transferOwnership.call(addresss6PgWAB, {from: accounts[1]});
		const boolHpJGRr2 = await XenoFelixERYdDzq.transferFrom.call(addressGfIO8bb, addressJXeLyNx, uintlkTju4J, {from: accounts[3]});
		const stringOkeRK3V = await XenoFelixERYdDzq.symbol.call({from: accounts[1]});
		const boolZtr3oSx = await XenoFelixERYdDzq.unfreezeAccount.call(addresssB1LBX, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringYsxB3O3 = "3vI8QVtW7QtjrraAMEbOEUXAnWmafE0uA4VTfToxaTvm4qeMvxeP0uQmOFlSZ6bmIK2P"
		const stringSBdOSJF = "DdQTkAwQEdVNUEwwsbjA3UIN3i7fTUmlXL9XYNRAiLkIWz7Fafs9YyLKAEqtIxwTQgdv3FkO"
		const uintXbOYQpA = BigInt("1973")
		const uinte5OaYpo = BigInt("35")
		const XenoFelixr193qU = await XenoFelix.new(stringYsxB3O3, stringSBdOSJF, uintXbOYQpA, uinte5OaYpo, {from: accounts[1]});
		const addresseGUz1Z9 = accounts[2]
		const addressiLlsq3d = accounts[0]
		const addressaQegWzN = accounts[4]
		const uintf9Fdois = BigInt("1943")
		const addresshbzKUKl = accounts[3]
		const uint256YppEy20 = await XenoFelixr193qU.balanceOf.call(addresseGUz1Z9, {from: accounts[5]});
		const booljvhTeyp = await XenoFelixr193qU.isOwner.call(addressiLlsq3d, {from: accounts[0]});
		const boolrnq9WGp = await XenoFelixr193qU.isOwner.call(addressaQegWzN, {from: accounts[4]});
		const boolvurhUJS = await XenoFelixr193qU.approve.call(addresshbzKUKl, uintf9Fdois, {from: accounts[1]});

		assert.equal(booljvhTeyp, false)
		assert.equal(boolrnq9WGp, false)
		assert.equal(boolvurhUJS, true)
		assert.equal(uint256YppEy20, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringWKzCnmS = "6ddXmUKEyd9UHVcFdoH2YRHhXmIrRBNUkv9awd8rxccxktspfEqszRYRO7Sf76pKGwqByeXx1FyfP9rqEoYEOiOxiXxa1NV"
		const stringhsi7HjA = "d5zg7yxSFotpMbOUqw6Muzyy6ezKspzKD0mxpMcyfYpwX6ZxnM2uVlCRo25CbkhG5REzr1vQzd"
		const uintJFQjDzC = BigInt("54")
		const XenoFelixq9bg6zS = await XenoFelix.new(stringWKzCnmS, stringhsi7HjA, uintJFQjDzC, {from: accounts[4]});
		const addressUNdhqbX = accounts[1]
		const uintDhIIyXY = BigInt("1324")
		const uintQkDXGu = BigInt("426")
		const addressfLOXBke = accounts[2]
		const uintp7pFwwz = BigInt("402")
		const addressUVuPrsl = "0x0000000000000000000000000000000000000001"
		const boolHWRHA16 = await XenoFelixq9bg6zS.isPauser.call(addressUNdhqbX, {from: accounts[4]});
		await XenoFelixq9bg6zS.unpause.call({from: accounts[4]});
		const boolNO1nFFT = await XenoFelixq9bg6zS.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolNO8AT3 = await XenoFelixq9bg6zS.transferWithLock.call(addressfLOXBke, uintQkDXGu, uintDhIIyXY, {from: accounts[0]});
		const boollthjHhe = await XenoFelixq9bg6zS.transfer.call(addressUVuPrsl, uintp7pFwwz, {from: accounts[1]});
		await XenoFelixq9bg6zS.pause.call({from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringYsX6oG3 = "uD21AOC4YrsLIIX4kQ6BkzE79vLP6t8A40DbqFr98hIFQ4FMUlEqsM64Q87yclkkof7wP1lzs"
		const stringx5H85P0 = "AWotLjPFVOvBiWNs8voHq3H5MTCWWezfiNr2kVE9NeQpsdVKTAvsFJpiwVMG0475zyWrafQ2VellMepRn"
		const uintJhrFBfg = BigInt("253")
		const XenoFelixKQlcgy = await XenoFelix.new(stringYsX6oG3, stringx5H85P0, uintJhrFBfg, {from: accounts[1]});
		const uintRS0tdye = BigInt("1273")
		const addressUObUVy = "0x0000000000000000000000000000000000000001"
		const addressh9l98fT = accounts[4]
		const booluWdDAS = await XenoFelixKQlcgy.approve.call(addressUObUVy, uintRS0tdye, {from: accounts[3]});
		const stringYm223Xu = await XenoFelixKQlcgy.name.call({from: accounts[3]});
		const addressxOrWui = await XenoFelixKQlcgy.notFrozen.call(addressh9l98fT, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringYsxB3O3 = "3vI8QVtW7QtjrraAMEbOEUXAnWmafE0uA4VTfToxaTvm4qeMvxeP0uQmOFlSZ6bmIK2P"
		const stringSBdOSJF = "DdQTkAwQEdVNUEwwsbjA3UIN3i7fTUmlXL9XYNRAiLkIWz7Fafs9YyLKAEqtIxwTQgdv3FkO"
		const uintrIFzmAA = BigInt("1973")
		const uintC2H0dXS = BigInt("35")
		const XenoFelixr193qU = await XenoFelix.new(stringYsxB3O3, stringSBdOSJF, uintrIFzmAA, uintC2H0dXS, {from: accounts[1]});
		const uintx8bRCWv = BigInt("944")
		const addressSgfqY24 = accounts[1]
		const addressm00Uijx = accounts[3]
		const addressRuT01m = accounts[0]
		const addressVmIi2WQ = accounts[4]
		const uintGugWiFa = BigInt("1943")
		const addressIiRxqa = accounts[3]
//		const boolSh6GQ7W = await XenoFelixr193qU.transfer.call(addressSgfqY24, uintx8bRCWv, {from: accounts[0]});
//		const uint256YppEy20 = await XenoFelixr193qU.balanceOf.call(addressm00Uijx, {from: accounts[5]});
//		const booljvhTeyp = await XenoFelixr193qU.isOwner.call(addressRuT01m, {from: accounts[0]});
//		const boolrnq9WGp = await XenoFelixr193qU.isOwner.call(addressVmIi2WQ, {from: accounts[4]});
//		const boolvurhUJS = await XenoFelixr193qU.approve.call(addressIiRxqa, uintGugWiFa, {from: accounts[1]});

		await expect(XenoFelixr193qU.transfer.call(addressSgfqY24, uintx8bRCWv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsg09MyT = "VwyXJ4Z46vZ3EUbEh9YRqk9PSQrNR3ifLTDqGovfJWwNxQx2pwNp5Cblr7VfDNQ1ZfpW9oFWAaDMveX2rCy8a"
		const stringbzozXKd = "2v"
		const uintmehHjtI = BigInt("1790")
		const uintReFnh30 = BigInt("238")
		const XenoFelixqp6ZJpB = await XenoFelix.new(stringsg09MyT, stringbzozXKd, uintmehHjtI, uintReFnh30, {from: accounts[4]});
		const addresszz4AgIO = accounts[2]
		const uintqGUMKQl = BigInt("954")
		const addressghRUvya = accounts[3]
		const addressTD1yXDJ = accounts[3]
		const uintE1oywLx = BigInt("1462")
		const uintJ8jyMqj = BigInt("1337")
		const addressdNIJ8DS = accounts[0]
//		const addressNqwby8S = await XenoFelixqp6ZJpB.notFrozen.call(addresszz4AgIO, {from: accounts[0]});
//		await XenoFelixqp6ZJpB.onlyOwner.call({from: accounts[2]});
//		await XenoFelixqp6ZJpB.pause.call({from: accounts[0]});
//		const boolIBgoLoc = await XenoFelixqp6ZJpB.transferFrom.call(addressTD1yXDJ, addressghRUvya, uintqGUMKQl, {from: accounts[1]});
//		const boolaeO5gRC = await XenoFelixqp6ZJpB.lock.call(addressdNIJ8DS, uintJ8jyMqj, uintE1oywLx, {from: accounts[0]});

		await expect(XenoFelixqp6ZJpB.notFrozen.call(addresszz4AgIO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYsxB3O3 = "3vI8QVtW7QtjrraAMEbOEUXAnWmafE0uA4VTfToxaTvm4qeMvxeP0uQmOFlSZ6bmIK2P"
		const stringSBdOSJF = "DdQTkAwQEdVNUEwwsbjA3UIN3i7fTUmlXL9XYNRAiLkIWz7Fafs9YyLKAEqtIxwTQgdv3FkO"
		const uintX3UEK5V = BigInt("1973")
		const uintTfJziPF = BigInt("35")
		const XenoFelixr193qU = await XenoFelix.new(stringYsxB3O3, stringSBdOSJF, uintX3UEK5V, uintTfJziPF, {from: accounts[1]});
		const addresskipOng7 = accounts[2]
		const addressDsVpUcz = accounts[1]
		const uint256YppEy20 = await XenoFelixr193qU.balanceOf.call(addresskipOng7, {from: accounts[5]});
		const booljvhTeyp = await XenoFelixr193qU.isOwner.call(addressDsVpUcz, {from: accounts[0]});

		assert.equal(booljvhTeyp, true)
		assert.equal(uint256YppEy20, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringYsxB3O3 = "3vI8QVtW7QtjrraAMEbOEUXAnWmafE0uA4VTfToxaTvm4qeMvxeP0uQmOFlSZ6bmIK2P"
		const stringSBdOSJF = "DdQTkAwQEdVNUEwwsbjA3UIN3i7fTUmlXL9XYNRAiLkIWz7Fafs9YyLKAEqtIxwTQgdv3FkO"
		const uintYueBR2h = BigInt("1973")
		const uintUInd7CN = BigInt("35")
		const XenoFelixr193qU = await XenoFelix.new(stringYsxB3O3, stringSBdOSJF, uintYueBR2h, uintUInd7CN, {from: accounts[1]});
		const addressLZJMvc = accounts[1]
		const addressTsTTNYW = accounts[3]
		const address0TKaKt = accounts[0]
		const addressQAGpwLo = await XenoFelixr193qU.removePauser.call(addressLZJMvc, {from: accounts[1]});
		const uint256YppEy20 = await XenoFelixr193qU.balanceOf.call(addressTsTTNYW, {from: accounts[5]});
		const booljvhTeyp = await XenoFelixr193qU.isOwner.call(address0TKaKt, {from: accounts[0]});
		const uint256x9Mr5UA = await XenoFelixr193qU.totalSupply.call({from: accounts[3]});

		assert.equal(booljvhTeyp, false)
		assert.equal(uint256YppEy20, BigInt("0"))
		assert.equal(uint256x9Mr5UA, BigInt("197300000000000000000000000000000000000"))
	});

	it('test for XenoFelix', async () => {
		const stringYsxB3O3 = "3vI8QVtW7QtjrraAMEbOEUXAnWmafE0uA4VTfToxaTvm4qeMvxeP0uQmOFlSZ6bmIK2P"
		const stringSBdOSJF = "DdQTkAwQEdVNUEwwsbjA3UIN3i7fTUmlXL9XYNRAiLkIWz7Fafs9YyLKAEqtIxwTQgdv3FkO"
		const uintwQvqowy = BigInt("1973")
		const uintUjuIdBO = BigInt("35")
		const XenoFelixr193qU = await XenoFelix.new(stringYsxB3O3, stringSBdOSJF, uintwQvqowy, uintUjuIdBO, {from: accounts[1]});
		const addressEHiX16t = accounts[2]
		const uintUMvj9l = BigInt("1209")
		const addressO186ai7 = accounts[2]
		const address6eu1Eh = accounts[0]
		const addressG7sHX2n = accounts[4]
		const uint256te6Awj = await XenoFelixr193qU.balanceOf.call(addressEHiX16t, {from: accounts[4]});
//		const boolVbImMAb = await XenoFelixr193qU.transferFrom.call(address6eu1Eh, addressO186ai7, uintUMvj9l, {from: accounts[3]});
//		const stringgChH0aP = await XenoFelixr193qU.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256YppEy20 = await XenoFelixr193qU.balanceOf.call(addressG7sHX2n, {from: accounts[5]});

		assert.equal(uint256te6Awj, BigInt("0"))
		await expect(XenoFelixr193qU.transferFrom.call(address6eu1Eh, addressO186ai7, uintUMvj9l, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYsxB3O3 = "3vI8QVtW7QtjrraAMEbOEUXAnWmafE0uA4VTfToxaTvm4qeMvxeP0uQmOFlSZ6bmIK2P"
		const stringSBdOSJF = "DdQTkAwQEdVNUEwwsbjA3UIN3i7fTUmlXL9XYNRAiLkIWz7Fafs9YyLKAEqtIxwTQgdv3FkO"
		const uintQuDuAyn = BigInt("1973")
		const uintfNn861k = BigInt("35")
		const XenoFelixr193qU = await XenoFelix.new(stringYsxB3O3, stringSBdOSJF, uintQuDuAyn, uintfNn861k, {from: accounts[1]});
		const addresskjj70Nh = accounts[4]
		const uintOQjuP75 = BigInt("263")
		const addressXM6PiKA = "0x0000000000000000000000000000000000000001"
		const uint256YppEy20 = await XenoFelixr193qU.balanceOf.call(addresskjj70Nh, {from: accounts[5]});
//		const boolbwLeSPu = await XenoFelixr193qU.unlock.call(addressXM6PiKA, uintOQjuP75, {from: accounts[0]});

		assert.equal(uint256YppEy20, BigInt("0"))
		await expect(XenoFelixr193qU.unlock.call(addressXM6PiKA, uintOQjuP75, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringu0B6g2g = "N9m77DrBSadBqrJwDQ8JfXYogOG2sEYQR9X1LNqKyEmiOf"
		const stringiVh3RA2 = "dHo2xUBUI9O"
		const uintqv93OUZ = BigInt("1418")
		const uintVGvziC3 = BigInt("178")
		const XenoFelixzcOcgUk = await XenoFelix.new(stringu0B6g2g, stringiVh3RA2, uintqv93OUZ, uintVGvziC3, {from: accounts[1]});
		const addressnz7Odwj = accounts[3]
		const stringW99a278 = await XenoFelixzcOcgUk.symbol.call({from: accounts[4]});
//		const addressZXTpdAs = await XenoFelixzcOcgUk.removePauser.call(addressnz7Odwj, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringW99a278, "dHo2xUBUI9O")
		await expect(XenoFelixzcOcgUk.removePauser.call(addressnz7Odwj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringu0B6g2g = "N9m77DrBSadBqrJwDQ8JfXYogOG2sEYQR9X1LNqKyEmiOf"
		const stringiVh3RA2 = "dHo2xUBUI9O"
		const uintAAs41IS = BigInt("1418")
		const uintEi00aKp = BigInt("178")
		const XenoFelixzcOcgUk = await XenoFelix.new(stringu0B6g2g, stringiVh3RA2, uintAAs41IS, uintEi00aKp, {from: accounts[1]});
		const addresscIDrAjl = accounts[1]
		const uintHjljF93 = BigInt("393")
		const addressG3QzqpJ = accounts[2]
		const addressJGKS5d = accounts[2]
		const addressO4snhyG = accounts[2]
		const boolbdMaOPc = await XenoFelixzcOcgUk.freezeAccount.call(addresscIDrAjl, {from: accounts[1]});
//		const bool71jKtz = await XenoFelixzcOcgUk.transferFrom.call(addressJGKS5d, addressG3QzqpJ, uintHjljF93, {from: accounts[0]});
//		const addressZXTpdAs = await XenoFelixzcOcgUk.removePauser.call(addressO4snhyG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolbdMaOPc, true)
		await expect(XenoFelixzcOcgUk.transferFrom.call(addressJGKS5d, addressG3QzqpJ, uintHjljF93, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRi94oap = "RruOMLsNjU2zX7t4F01Z9ZiZTkHbvoKeNxnWPXckqtwksu1cy9enV"
		const stringuYL7W37 = "3RlS1p6yN2UekqP"
		const uintDHqTsG6 = BigInt("1456")
		const uintGUwMJ7a = BigInt("77")
		const XenoFelixSlXr3XG = await XenoFelix.new(stringRi94oap, stringuYL7W37, uintDHqTsG6, uintGUwMJ7a, {from: accounts[0]});
		const uintZ5MRJG3 = BigInt("1398")
		const addressr9lONsT = accounts[1]
		const addressZvbtMHM = accounts[4]
		const addresskHU6yL6 = accounts[1]
		const boolIBujzJt = await XenoFelixSlXr3XG.increaseAllowance.call(addressr9lONsT, uintZ5MRJG3, {from: accounts[1]});
//		const addressBQrPwlH = await XenoFelixSlXr3XG.addPauser.call(addressZvbtMHM, {from: accounts[3]});
//		const addressnAtELN = await XenoFelixSlXr3XG.notFrozen.call(addresskHU6yL6, {from: accounts[1]});

		assert.equal(boolIBujzJt, true)
		await expect(XenoFelixSlXr3XG.addPauser.call(addressZvbtMHM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYsxB3O3 = "3vI8QVtW7QtjrraAMEbOEUXAnWmafE0uA4VTfToxaTvm4qeMvxeP0uQmOFlSZ6bmIK2P"
		const stringSBdOSJF = "DdQTkAwQEdVNUEwwsbjA3UIN3i7fTUmlXL9XYNRAiLkIWz7Fafs9YyLKAEqtIxwTQgdv3FkO"
		const uintCa66z9U = BigInt("1973")
		const uintLl8AzDO = BigInt("35")
		const XenoFelixr193qU = await XenoFelix.new(stringYsxB3O3, stringSBdOSJF, uintCa66z9U, uintLl8AzDO, {from: accounts[1]});
		const addressDm4JAYn = accounts[4]
		const uint8fKAyU5O = await XenoFelixr193qU.decimals.call({from: accounts[3]});
		const uint256YppEy20 = await XenoFelixr193qU.balanceOf.call(addressDm4JAYn, {from: accounts[5]});
		const uint8vjxZv14 = await XenoFelixr193qU.decimals.call({from: accounts[1]});

		assert.equal(uint256YppEy20, BigInt("0"))
		assert.equal(uint8fKAyU5O, BigInt("35"))
		assert.equal(uint8vjxZv14, BigInt("35"))
	});

	it('test for XenoFelix', async () => {
		const stringu0B6g2g = "N9m77DrBSadBqrJwDQ8JfXYogOG2sEYQR9X1LNqKyEmiOf"
		const stringiVh3RA2 = "dHo2xUBUI9O"
		const uintBM6I3ao = BigInt("1418")
		const uintttrgAz3 = BigInt("178")
		const XenoFelixzcOcgUk = await XenoFelix.new(stringu0B6g2g, stringiVh3RA2, uintBM6I3ao, uintttrgAz3, {from: accounts[1]});
		const uintPurD5kG = BigInt("667")
		const addressKtBYMBG = accounts[5]
		const addressGci6AbN = accounts[3]
		const uintZDkxzqs = BigInt("971")
		const addressMnZsFbC = accounts[1]
		const addressuEVffU2 = accounts[0]
//		const addressqP0Cpal = await XenoFelixzcOcgUk.burnFrom.call(addressKtBYMBG, uintPurD5kG, {from: accounts[2]});
//		const addressZXTpdAs = await XenoFelixzcOcgUk.removePauser.call(addressGci6AbN, {from: "0x0000000000000000000000000000000000000001"});
//		const boolmWq0YB1 = await XenoFelixzcOcgUk.transferFrom.call(addressuEVffU2, addressMnZsFbC, uintZDkxzqs, {from: accounts[3]});

		await expect(XenoFelixzcOcgUk.burnFrom.call(addressKtBYMBG, uintPurD5kG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYsxB3O3 = "3vI8QVtW7QtjrraAMEbOEUXAnWmafE0uA4VTfToxaTvm4qeMvxeP0uQmOFlSZ6bmIK2P"
		const stringSBdOSJF = "DdQTkAwQEdVNUEwwsbjA3UIN3i7fTUmlXL9XYNRAiLkIWz7Fafs9YyLKAEqtIxwTQgdv3FkO"
		const uint9KL76q = BigInt("1973")
		const uintri6nePi = BigInt("35")
		const XenoFelixr193qU = await XenoFelix.new(stringYsxB3O3, stringSBdOSJF, uint9KL76q, uintri6nePi, {from: accounts[1]});
		const uintbA2kt1 = BigInt("298")
		const addressqQtyn5L = accounts[4]
		const uintlZPni5 = BigInt("657")
		const addressMZ7LRx = accounts[4]
		const addressVjRvVe = accounts[0]
		const addressiEUtpCW = accounts[4]
		const addressIjEmNhE = "0x0000000000000000000000000000000000000001"
//		const boolnC2keSu = await XenoFelixr193qU.decreaseAllowance.call(addressqQtyn5L, uintbA2kt1, {from: accounts[0]});
//		const bool19DmHH = await XenoFelixr193qU.transferFrom.call(addressVjRvVe, addressMZ7LRx, uintlZPni5, {from: accounts[2]});
//		const uint256YppEy20 = await XenoFelixr193qU.balanceOf.call(addressiEUtpCW, {from: accounts[5]});
//		const boolzGYTOzr = await XenoFelixr193qU.unfreezeAccount.call(addressIjEmNhE, {from: accounts[5]});

		await expect(XenoFelixr193qU.decreaseAllowance.call(addressqQtyn5L, uintbA2kt1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringu0B6g2g = "N9m77DrBSadBqrJwDQ8JfXYogOG2sEYQR9X1LNqKyEmiOf"
		const stringiVh3RA2 = "dHo2xUBUI9O"
		const uintj25Mn9e = BigInt("1418")
		const uintEi2hIzD = BigInt("178")
		const XenoFelixzcOcgUk = await XenoFelix.new(stringu0B6g2g, stringiVh3RA2, uintj25Mn9e, uintEi2hIzD, {from: accounts[1]});
		const uintMYGIxJE = BigInt("403")
		const addressnHcw5gL = accounts[2]
		const address1wuTOG = accounts[2]
		const uintPIiFw4H = BigInt("1102")
		const addressDnHREM8 = accounts[3]
		const addressDwvG2i8 = accounts[2]
		const stringpWTYebr = await XenoFelixzcOcgUk.name.call({from: accounts[4]});
//		const bool71jKtz = await XenoFelixzcOcgUk.transferFrom.call(address1wuTOG, addressnHcw5gL, uintMYGIxJE, {from: accounts[0]});
//		const addresshol7EJC = await XenoFelixzcOcgUk.burnFrom.call(addressDnHREM8, uintPIiFw4H, {from: accounts[0]});
//		const addressZXTpdAs = await XenoFelixzcOcgUk.removePauser.call(addressDwvG2i8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringpWTYebr, "N9m77DrBSadBqrJwDQ8JfXYogOG2sEYQR9X1LNqKyEmiOf")
		await expect(XenoFelixzcOcgUk.transferFrom.call(address1wuTOG, addressnHcw5gL, uintMYGIxJE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringu0B6g2g = "N9m77DrBSadBqrJwDQ8JfXYogOG2sEYQR9X1LNqKyEmiOf"
		const stringiVh3RA2 = "dHo2xUBUI9O"
		const uintyX8ttpn = BigInt("1418")
		const uintWu1vqOg = BigInt("178")
		const XenoFelixzcOcgUk = await XenoFelix.new(stringu0B6g2g, stringiVh3RA2, uintyX8ttpn, uintWu1vqOg, {from: accounts[1]});
		const addressByqd3cL = accounts[1]
		const addressLEkyRtQ = accounts[0]
		const uintNPKU7AE = BigInt("1141")
		const addressuWQEyLJ = accounts[1]
		const uint256lxDy6HX = await XenoFelixzcOcgUk.allowance.call(addressLEkyRtQ, addressByqd3cL, {from: accounts[2]});
//		const booleU9UROB = await XenoFelixzcOcgUk.transfer.call(addressuWQEyLJ, uintNPKU7AE, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256lxDy6HX, BigInt("0"))
		await expect(XenoFelixzcOcgUk.transfer.call(addressuWQEyLJ, uintNPKU7AE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringEHx5aFB = "IqRZkeGrD9kjtXjRRKmuT25hbaoAvVA"
		const stringEL0JSBs = "JoOxzAxxhiwshCJt1stMRgByhTKAs4qUOmMHLssPKaGuVh7cEOJmBdDe"
		const uintqXFQgt = BigInt("146")
		const XenoFelixXdBmrRV = await XenoFelix.new(stringEHx5aFB, stringEL0JSBs, uintqXFQgt, {from: accounts[2]});
		const addresslXxolev = "0x0000000000000000000000000000000000000001"
		const addressqplptq = accounts[2]
		const stringnUQniHr = await XenoFelixXdBmrRV.symbol.call({from: accounts[4]});
		const boolIDwJ5Ev = await XenoFelixXdBmrRV.freezeAccount.call(addresslXxolev, {from: accounts[2]});
		const addresszoLk9gP = await XenoFelixXdBmrRV.notFrozen.call(addressqplptq, {from: accounts[2]});
		await XenoFelixXdBmrRV.renouncePauser.call({from: accounts[0]});
		const boolvMSMK77 = await XenoFelixXdBmrRV.acceptOwnership.call({from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringflXi5V = "M4Sv1hHcf1V9awIymHAQe9AcXsXAfU9sBwJFXCdrxSW7Yeh"
		const stringEVkoxXW = "xcy8XtEj2T5feOETAs5ZWudp6yGxmmiIywYzncMpFTV"
		const uintyHvT2Ug = BigInt("47")
		const XenoFelix9X292Y = await XenoFelix.new(stringflXi5V, stringEVkoxXW, uintyHvT2Ug, {from: "0x0000000000000000000000000000000000000001"});
		const uintZuSoU6M = BigInt("292")
		const uintquixDHS = BigInt("81")
		const addressYuYKhpR = accounts[3]
		const addressrzq0Kva = accounts[3]
		const uint256qAIKUv2 = await XenoFelix9X292Y.burn.call(uintZuSoU6M, {from: accounts[0]});
		const boolVAE5tcy = await XenoFelix9X292Y.acceptOwnership.call({from: accounts[3]});
		await XenoFelix9X292Y.pause.call({from: accounts[2]});
		const boolYdP16wO = await XenoFelix9X292Y.transfer.call(addressYuYKhpR, uintquixDHS, {from: "0x0000000000000000000000000000000000000001"});
		const boolwlyjfAs = await XenoFelix9X292Y.unfreezeAccount.call(addressrzq0Kva, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringlBewYIJ = "9ihDqv7UPiOMHdy83xfcpDPATmEdhOd8cxeUx9sJIpT9s3yaVt8B9QcCgBI7JV7nQLYxVAh"
		const stringIKavwe = "d2kpKmZaEljPIMFCs16Q83VTE9fYaVfJv17Xjpvds2E4L9lNdq9bBGPIppiTDC6DJWlKBqLU9mgFnh52rL6flq5lRlU7"
		const uintUEOrMBd = BigInt("87")
		const XenoFelixBrWEb7i = await XenoFelix.new(stringlBewYIJ, stringIKavwe, uintUEOrMBd, {from: accounts[5]});
		const uint8RuoLiGl = await XenoFelixBrWEb7i.decimals.call({from: accounts[2]});
		const boolQaD8ZZS = await XenoFelixBrWEb7i.paused.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringu0B6g2g = "N9m77DrBSadBqrJwDQ8JfXYogOG2sEYQR9X1LNqKyEmiOf"
		const stringiVh3RA2 = "dHo2xUBUI9O"
		const uintYNDaZ6W = BigInt("1418")
		const uintosGos3h = BigInt("178")
		const XenoFelixzcOcgUk = await XenoFelix.new(stringu0B6g2g, stringiVh3RA2, uintYNDaZ6W, uintosGos3h, {from: accounts[1]});
		const uintwtpN3v0 = BigInt("1160")
		const uintnwusUf = BigInt("1945")
		const addressRr10nY5 = accounts[0]
		const uintQQ16mVX = BigInt("1655")
		const addresszB9Ly5O = accounts[0]
		const booleziuW9M = await XenoFelixzcOcgUk.transferWithLock.call(addressRr10nY5, uintnwusUf, uintwtpN3v0, {from: accounts[1]});
//		const booleU9UROB = await XenoFelixzcOcgUk.transfer.call(addresszB9Ly5O, uintQQ16mVX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booleziuW9M, true)
		await expect(XenoFelixzcOcgUk.transfer.call(addresszB9Ly5O, uintQQ16mVX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringu0B6g2g = "N9m77DrBSadBqrJwDQ8JfXYogOG2sEYQR9X1LNqKyEmiOf"
		const stringiVh3RA2 = "dHo2xUBUI9O"
		const uintzvVBxdR = BigInt("1418")
		const uintxR36Heq = BigInt("178")
		const XenoFelixzcOcgUk = await XenoFelix.new(stringu0B6g2g, stringiVh3RA2, uintzvVBxdR, uintxR36Heq, {from: accounts[1]});
		const uintXjUdImn = BigInt("418")
		const addressCbDoq8I = accounts[5]
		const uintQaOWHhI = BigInt("1141")
		const addressAxCVeZ3 = accounts[1]
//		await XenoFelixzcOcgUk.renouncePauser.call({from: accounts[3]});
//		const boolxt41NxM = await XenoFelixzcOcgUk.transfer.call(addressCbDoq8I, uintXjUdImn, {from: accounts[4]});
//		const booleU9UROB = await XenoFelixzcOcgUk.transfer.call(addressAxCVeZ3, uintQaOWHhI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixzcOcgUk.renouncePauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYsxB3O3 = "3vI8QVtW7QtjrraAMEbOEUXAnWmafE0uA4VTfToxaTvm4qeMvxeP0uQmOFlSZ6bmIK2P"
		const stringSBdOSJF = "DdQTkAwQEdVNUEwwsbjA3UIN3i7fTUmlXL9XYNRAiLkIWz7Fafs9YyLKAEqtIxwTQgdv3FkO"
		const uintokEAU5I = BigInt("1973")
		const uintbeFuazf = BigInt("35")
		const XenoFelixr193qU = await XenoFelix.new(stringYsxB3O3, stringSBdOSJF, uintokEAU5I, uintbeFuazf, {from: accounts[1]});
		const uinty3xbsVJ = BigInt("747")
		const addressWBDG7i = accounts[3]
		const uintRPxftSU = BigInt("1492")
		const address2TXD7W = accounts[3]
		const uintLrsgcq = BigInt("1665")
		const addresso1axcPD = accounts[1]
		const addresssMaqLb = accounts[4]
//		const boolgprFhRF = await XenoFelixr193qU.burnOwner.call(addressWBDG7i, uinty3xbsVJ, {from: accounts[1]});
//		const boolLgcSGrp = await XenoFelixr193qU.decreaseAllowance.call(address2TXD7W, uintRPxftSU, {from: accounts[4]});
//		await XenoFelixr193qU.renouncePauser.call({from: accounts[4]});
//		const boolRLAbn8M = await XenoFelixr193qU.transferFrom.call(addresssMaqLb, addresso1axcPD, uintLrsgcq, {from: accounts[4]});

		await expect(XenoFelixr193qU.burnOwner.call(addressWBDG7i, uinty3xbsVJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYsxB3O3 = "3vI8QVtW7QtjrraAMEbOEUXAnWmafE0uA4VTfToxaTvm4qeMvxeP0uQmOFlSZ6bmIK2P"
		const stringSBdOSJF = "DdQTkAwQEdVNUEwwsbjA3UIN3i7fTUmlXL9XYNRAiLkIWz7Fafs9YyLKAEqtIxwTQgdv3FkO"
		const uintUwlmE3J = BigInt("1973")
		const uintbulSIHg = BigInt("35")
		const XenoFelixr193qU = await XenoFelix.new(stringYsxB3O3, stringSBdOSJF, uintUwlmE3J, uintbulSIHg, {from: accounts[1]});
		const addressL7tGNf = accounts[4]
		const addresslDM1LdE = accounts[4]
		const addressURvSWC = accounts[1]
		const addressDnkxP3H = accounts[0]
//		await XenoFelixr193qU.pause.call({from: accounts[1]});
//		const uint256YppEy20 = await XenoFelixr193qU.balanceOf.call(addressL7tGNf, {from: accounts[5]});
//		const booliGgLRtD = await XenoFelixr193qU.isPauser.call(addresslDM1LdE, {from: accounts[3]});
//		const uint256FfvDRni = await XenoFelixr193qU.allowance.call(addressDnkxP3H, addressURvSWC, {from: accounts[3]});

		await expect(XenoFelixr193qU.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringu0B6g2g = "N9m77DrBSadBqrJwDQ8JfXYogOG2sEYQR9X1LNqKyEmiOf"
		const stringiVh3RA2 = "dHo2xUBUI9O"
		const uintDgNWln = BigInt("1418")
		const uintXrdRx8e = BigInt("178")
		const XenoFelixzcOcgUk = await XenoFelix.new(stringu0B6g2g, stringiVh3RA2, uintDgNWln, uintXrdRx8e, {from: accounts[1]});
		const uintyydsBCN = BigInt("1919")
		const addressUSVIItM = accounts[3]
		const uintdaoWT9Q = BigInt("1133")
		const addressv4ebE0O = accounts[0]
		const addressMjm73St = accounts[0]
		const uint256YsmjxKj = await XenoFelixzcOcgUk.totalSupply.call({from: accounts[1]});
//		const boolppryMJC = await XenoFelixzcOcgUk.unlock.call(addressUSVIItM, uintyydsBCN, {from: accounts[1]});
//		const booleU9UROB = await XenoFelixzcOcgUk.transfer.call(addressv4ebE0O, uintdaoWT9Q, {from: "0x0000000000000000000000000000000000000001"});
//		const addressKVyOel = await XenoFelixzcOcgUk.notFrozen.call(addressMjm73St, {from: accounts[0]});

		assert.equal(uint256YsmjxKj, BigInt("64916305515079054548937698143723238858804354021343229485421319325904317448192"))
		await expect(XenoFelixzcOcgUk.unlock.call(addressUSVIItM, uintyydsBCN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringu0B6g2g = "N9m77DrBSadBqrJwDQ8JfXYogOG2sEYQR9X1LNqKyEmiOf"
		const stringiVh3RA2 = "dHo2xUBUI9O"
		const uintCc98GT6 = BigInt("1418")
		const uintUN4aGz2 = BigInt("178")
		const XenoFelixzcOcgUk = await XenoFelix.new(stringu0B6g2g, stringiVh3RA2, uintCc98GT6, uintUN4aGz2, {from: accounts[1]});
		const addressrVSqZ8z = accounts[0]
		const uintflsYWI = BigInt("1141")
		const addressSyLlWEY = accounts[0]
		const addressV5kXuyq = await XenoFelixzcOcgUk.transferOwnership.call(addressrVSqZ8z, {from: accounts[1]});
//		const booleU9UROB = await XenoFelixzcOcgUk.transfer.call(addressSyLlWEY, uintflsYWI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixzcOcgUk.transfer.call(addressSyLlWEY, uintflsYWI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})