const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintHB8BrEx = BigInt("164")
		const stringijSXT0g = "SoEWHJ5N9eelf0Y1SxLNna3L1BnHmMQRyjNac4Qg9Ky1q9dBkq7pO8gmgeMgyWuCOLzqQvdsavPsSfLSUB8zS"
		const stringUwmQExI = "4i2WgsOrhYJHu3MxtQ8w4JMmQUAz"
		const GFCEyglaoM = await GFC.new(uintHB8BrEx, stringijSXT0g, stringUwmQExI, {from: accounts[3]});
		const uintV09hWKE = BigInt("1521")
		const byteEGvNlOM = "0x0a1c13050c1b0d0d041a0715130f02"
		const uintySefYe9 = BigInt("694")
		const addressghsd3Ke = accounts[2]
		const uintZmEVjCo = BigInt("1994")
		const addressJcHmLKQ = accounts[2]
//		const boolYY59TNf = await GFCEyglaoM.burn.call(uintV09hWKE, {from: accounts[4]});
//		const boolTWSaP3f = await GFCEyglaoM.approveAndCall.call(addressghsd3Ke, uintySefYe9, byteEGvNlOM, {from: accounts[5]});
//		const boolIShxNA8 = await GFCEyglaoM.transfer.call(addressJcHmLKQ, uintZmEVjCo, {from: accounts[2]});

		await expect(GFCEyglaoM.burn.call(uintV09hWKE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintntqEuC = BigInt("779")
		const stringBLJjSnv = "OoJazw"
		const stringAAtm8wY = "srtGk7W9MAOeiY2gMFm2Ylts5S3rckpC6yJP7J1YabOhxhjs7d"
		const GFCqFHwZmW = await GFC.new(uintntqEuC, stringBLJjSnv, stringAAtm8wY, {from: accounts[4]});
		const uintgyQlafb = BigInt("280")
		const addressM8DOiiP = accounts[3]
		const uintDaKuJOJ = BigInt("85")
		const addresstkwGfO3 = accounts[3]
		const uintmvyl0b3 = BigInt("4")
		const addressRwmnQg = accounts[4]
		const uintCMKdoaF = BigInt("527")
		const addressqYonpPB = "0x0000000000000000000000000000000000000001"
		const addresswUkuedK = accounts[5]
		const uintboAmx45 = BigInt("1000")
		const addresssYkyki = accounts[1]
		const uintjqRW1NP = BigInt("486")
		const addressdcfLEv = accounts[4]
		const booluVNDLN = await GFCqFHwZmW.approve.call(addressM8DOiiP, uintgyQlafb, {from: accounts[2]});
		const boolhiWVvSB = await GFCqFHwZmW.transfer.call(addresstkwGfO3, uintDaKuJOJ, {from: accounts[4]});
//		const bool2aC1bu = await GFCqFHwZmW.burnFrom.call(addressRwmnQg, uintmvyl0b3, {from: accounts[5]});
//		const boolNKqoB2X = await GFCqFHwZmW.transferFrom.call(addresswUkuedK, addressqYonpPB, uintCMKdoaF, {from: "0x0000000000000000000000000000000000000001"});
//		const boolQSZxLmA = await GFCqFHwZmW.approve.call(addresssYkyki, uintboAmx45, {from: accounts[1]});
//		const boolww8QEQ6 = await GFCqFHwZmW.transfer.call(addressdcfLEv, uintjqRW1NP, {from: accounts[0]});

		assert.equal(boolhiWVvSB, true)
		assert.equal(booluVNDLN, true)
		await expect(GFCqFHwZmW.burnFrom.call(addressRwmnQg, uintmvyl0b3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintqbW6JD2 = BigInt("1165")
		const stringi3SyWkV = "SsKM3mtpNxiFlrs93"
		const stringoKa6LWo = "BKdDzo6hJDxdIDLWBFsKB"
		const GFCaZ9sWkp = await GFC.new(uintqbW6JD2, stringi3SyWkV, stringoKa6LWo, {from: accounts[1]});
		const byteb3mx6Z0 = "0x171b0c1b16041c07110a1108121c130d051f09050b"
		const uintfqzJIt = BigInt("1035")
		const addressTEAUw6W = accounts[0]
		const uintHC7nnWk = BigInt("1701")
		const address3dEVmf = accounts[2]
		const uinttq9HmiB = BigInt("1790")
		const uintYSFUoNZ = BigInt("340")
		const addressbNPwRJh = accounts[2]
		const uintNfOtx25 = BigInt("1770")
		const addressSllXht5 = accounts[0]
		const uintZgygLPk = BigInt("1544")
//		const boolQ6rBQW = await GFCaZ9sWkp.approveAndCall.call(addressTEAUw6W, uintfqzJIt, byteb3mx6Z0, {from: accounts[2]});
//		const boolI320mSS = await GFCaZ9sWkp.burnFrom.call(address3dEVmf, uintHC7nnWk, {from: accounts[0]});
//		const boolyblN8i7 = await GFCaZ9sWkp.burn.call(uinttq9HmiB, {from: accounts[0]});
//		const boolIhak11 = await GFCaZ9sWkp.transfer.call(addressbNPwRJh, uintYSFUoNZ, {from: accounts[0]});
//		const boolQ6Ikv3G = await GFCaZ9sWkp.approve.call(addressSllXht5, uintNfOtx25, {from: accounts[4]});
//		const boolXuQ9p2P = await GFCaZ9sWkp.burn.call(uintZgygLPk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GFCaZ9sWkp.approveAndCall.call(addressTEAUw6W, uintfqzJIt, byteb3mx6Z0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintmxCB0Xw = BigInt("1396")
		const stringD8LfXy = "rZQKebWkYzYpvYfraq1oCoo6elDV15hHtNA8PKqszmxXiER234T2Fig"
		const stringd5W68Yk = "kerEHYs0VMrkNyQ1WvijFsDyKPTCuYbqHVWIdE7brmITSb5It"
		const GFCI8mvVl0 = await GFC.new(uintmxCB0Xw, stringD8LfXy, stringd5W68Yk, {from: accounts[2]});
		const uintebwF44F = BigInt("337")
		const addressJk1pQir = accounts[3]
		const addresstx6hEdH = accounts[4]
		const uintahryyXQ = BigInt("398")
		const uintqXsZSH5 = BigInt("1366")
		const addressTUnXe7Y = accounts[1]
		const addressLHmtlGl = accounts[5]
		const byteTchoiO4 = "0x131e190201151e1e1109181f011a0d0504110b16"
		const uintXsVVwgA = BigInt("1496")
		const addresshcrwXxT = accounts[4]
		const uintsg5Jsfh = BigInt("64")
		const addresse6FQvWH = accounts[4]
		const addressZ1AfyAM = accounts[0]
//		const booloGPER2z = await GFCI8mvVl0.transferFrom.call(addresstx6hEdH, addressJk1pQir, uintebwF44F, {from: accounts[1]});
//		const boolnJ3IMQd = await GFCI8mvVl0.burn.call(uintahryyXQ, {from: accounts[0]});
//		const boolPB5NBlN = await GFCI8mvVl0.transferFrom.call(addressLHmtlGl, addressTUnXe7Y, uintqXsZSH5, {from: accounts[2]});
//		const boolkBz4U5e = await GFCI8mvVl0.approveAndCall.call(addresshcrwXxT, uintXsVVwgA, byteTchoiO4, {from: "0x0000000000000000000000000000000000000001"});
//		const boolcq4BFF = await GFCI8mvVl0.transferFrom.call(addressZ1AfyAM, addresse6FQvWH, uintsg5Jsfh, {from: accounts[5]});

		await expect(GFCI8mvVl0.transferFrom.call(addresstx6hEdH, addressJk1pQir, uintebwF44F, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintbn4ku9M = BigInt("688")
		const stringWuUZipo = "z67ccrKB4PnjA9jy0NjWfbYqjpCQpWHAutWbMNxxonHASHUtRfigAxKCdRmRCLCfoBIuqx1Ldh5aXmtdp"
		const stringNc0TANO = "q4I85PhKpEoQizq31JHOdilvD999bB8ZZVukMOyX4tCxxtfjEcoE9YNonDrBNzCU"
		const GFChj1pjYR = await GFC.new(uintbn4ku9M, stringWuUZipo, stringNc0TANO, {from: "0x0000000000000000000000000000000000000001"});
		const uintf2yFj5 = BigInt("838")
		const addressQg53We1 = accounts[4]
		const byteyb1qcHx = "0x011f09171404"
		const uintxFrNhIy = BigInt("1420")
		const addresssY9jYd = accounts[3]
		const uints41MT0 = BigInt("67")
		const addressJ526U3 = accounts[3]
		const bytegGRs3O = "0x1b120417110210151c04171b1600110e0d1a050e14030b030815161005"
		const uintw2yxq7b = BigInt("493")
		const addressMsh3Win = accounts[3]
		const uinttAO66Nu = BigInt("1636")
		const addressW9YR8KC = accounts[1]
		const addressuPQe0kR = accounts[1]
		const boolaAALxij = await GFChj1pjYR.approve.call(addressQg53We1, uintf2yFj5, {from: "0x0000000000000000000000000000000000000001"});
		const boollLrH6Rr = await GFChj1pjYR.approveAndCall.call(addresssY9jYd, uintxFrNhIy, byteyb1qcHx, {from: accounts[2]});
		const boolYmIDKgA = await GFChj1pjYR.approve.call(addressJ526U3, uints41MT0, {from: accounts[3]});
		const boolcfAMYj = await GFChj1pjYR.approveAndCall.call(addressMsh3Win, uintw2yxq7b, bytegGRs3O, {from: accounts[4]});
		const bool0uvtMT = await GFChj1pjYR.transferFrom.call(addressuPQe0kR, addressW9YR8KC, uinttAO66Nu, {from: accounts[1]});
	});
})