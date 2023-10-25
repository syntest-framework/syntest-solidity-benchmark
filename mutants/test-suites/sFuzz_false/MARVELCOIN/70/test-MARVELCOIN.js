const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintA2Nm7Gv = BigInt("1653")
		const stringhJBMC3R = "NDh1ujdpBOJkHAreFgQgs1EEdxDN8XNRPTBvdbbbOwjAwFlOx"
		const stringJWu5iAt = "3jI4eI8GpJQYnIpqpyMirnj61oOExfPuwqXxBpiBv1RculfPuUHGuXEY"
		const MARVELCOINcQ9I5K = await MARVELCOIN.new(uintA2Nm7Gv, stringhJBMC3R, stringJWu5iAt, {from: accounts[1]});
		const uintJ4yyATd = BigInt("546")
		const addressQyon3aE = accounts[1]
		const uintsGvT9dj = BigInt("1807")
		const addressEqXcJmB = "0x0000000000000000000000000000000000000001"
		const addressOLthnVg = accounts[0]
		const uintlHoKuDk = BigInt("1836")
		const addressJPuMpmC = accounts[3]
		const uintu6L20jd = BigInt("473")
		const bytemhyhZ91 = "0x1803131506150b1e1e1b1d0219"
		const uintgkwD06c = BigInt("410")
		const addresshow2fy = accounts[5]
		const boolOzWbdqX = await MARVELCOINcQ9I5K.approve.call(addressQyon3aE, uintJ4yyATd, {from: accounts[0]});
//		const booloS8ff1V = await MARVELCOINcQ9I5K.transferFrom.call(addressOLthnVg, addressEqXcJmB, uintsGvT9dj, {from: accounts[1]});
//		const boolfG3yZI3 = await MARVELCOINcQ9I5K.approve.call(addressJPuMpmC, uintlHoKuDk, {from: accounts[3]});
//		const booldtutyLM = await MARVELCOINcQ9I5K.burn.call(uintu6L20jd, {from: accounts[4]});
//		const boolqOEZMXC = await MARVELCOINcQ9I5K.approveAndCall.call(addresshow2fy, uintgkwD06c, bytemhyhZ91, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolOzWbdqX, true)
		await expect(MARVELCOINcQ9I5K.transferFrom.call(addressOLthnVg, addressEqXcJmB, uintsGvT9dj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintCDGPzJ3 = BigInt("194")
		const stringYPE0dBj = "fXFNrbiHX5BW3q1EPAviRn9uG19tycDOPRkAfdeR971G"
		const stringeIosP4O = "J3ir5zpUmF"
		const MARVELCOINclxrht2 = await MARVELCOIN.new(uintCDGPzJ3, stringYPE0dBj, stringeIosP4O, {from: "0x0000000000000000000000000000000000000001"});
		const byteUv751QY = "0x13150d150e111b0b0e0b11040c14031e201304041a1c151a1a"
		const uintXT5ZEBc = BigInt("151")
		const addressi4zUo4 = accounts[1]
		const bytebujlLPe = "0x1e14020d07151f190f"
		const uintVmTFk7 = BigInt("1416")
		const addressD0Q6ybk = accounts[0]
		const boolkdjlDBv = await MARVELCOINclxrht2.approveAndCall.call(addressi4zUo4, uintXT5ZEBc, byteUv751QY, {from: accounts[4]});
		const boolSTbhJCQ = await MARVELCOINclxrht2.approveAndCall.call(addressD0Q6ybk, uintVmTFk7, bytebujlLPe, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MARVELCOIN', async () => {
		const uint2WR6wr = BigInt("1726")
		const stringqTUnXQm = "nmm611Dv3arltup992"
		const stringkfT20D = "y8y7LrMk4ysX3roEj3iOe"
		const MARVELCOINMx0XnUb = await MARVELCOIN.new(uint2WR6wr, stringqTUnXQm, stringkfT20D, {from: accounts[1]});
		const uintB0EJgc3 = BigInt("1825")
		const addresswIThzI1 = accounts[1]
		const byteq8IIhMV = "0x0d0f0b050f11181b1f19"
		const uintB3reeZr = BigInt("472")
		const addressq5Gc9NR = accounts[3]
		const uintLrCy9UD = BigInt("1365")
		const address4Gaaii = accounts[5]
		const addresscrgGVWy = accounts[3]
		const uintpam1XK2 = BigInt("971")
		const addresseJmPG7U = accounts[1]
//		const boolFQ09xiv = await MARVELCOINMx0XnUb.transfer.call(addresswIThzI1, uintB0EJgc3, {from: accounts[0]});
//		const boolluc5Jev = await MARVELCOINMx0XnUb.approveAndCall.call(addressq5Gc9NR, uintB3reeZr, byteq8IIhMV, {from: accounts[0]});
//		const boolqkjPmHn = await MARVELCOINMx0XnUb.transferFrom.call(addresscrgGVWy, address4Gaaii, uintLrCy9UD, {from: accounts[2]});
//		const boolnZB7cDU = await MARVELCOINMx0XnUb.burnFrom.call(addresseJmPG7U, uintpam1XK2, {from: accounts[1]});

		await expect(MARVELCOINMx0XnUb.transfer.call(addresswIThzI1, uintB0EJgc3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintYKSJcYt = BigInt("1957")
		const stringGuY0Wzw = "SPfpMG1AinNpw"
		const stringo58rEJd = "hyF4BJ1oMhEpDa4qRWr7zVvLOIY5RDOhEsb"
		const MARVELCOINiFPB5uv = await MARVELCOIN.new(uintYKSJcYt, stringGuY0Wzw, stringo58rEJd, {from: accounts[0]});
		const uinty4MfXBC = BigInt("637")
		const uintywDFaP = BigInt("945")
		const addressjtX0AiP = accounts[3]
		const uintMnVc1Sp = BigInt("712")
		const addressEiOzor = accounts[4]
		const addresswahFXST = accounts[2]
		const uintU9JhU7G = BigInt("418")
		const addressiUW0DmG = accounts[3]
		const boolLBhjAQ = await MARVELCOINiFPB5uv.burn.call(uinty4MfXBC, {from: accounts[0]});
		const boolo5bD9Ey = await MARVELCOINiFPB5uv.approve.call(addressjtX0AiP, uintywDFaP, {from: accounts[2]});
//		const boolj3TlCc = await MARVELCOINiFPB5uv.transferFrom.call(addresswahFXST, addressEiOzor, uintMnVc1Sp, {from: accounts[2]});
//		const boolManRA83 = await MARVELCOINiFPB5uv.approve.call(addressiUW0DmG, uintU9JhU7G, {from: accounts[1]});

		assert.equal(boolLBhjAQ, true)
		assert.equal(boolo5bD9Ey, true)
		await expect(MARVELCOINiFPB5uv.transferFrom.call(addresswahFXST, addressEiOzor, uintMnVc1Sp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintX7EJDw = BigInt("1963")
		const stringKSiXCT = "BjFT5omp8"
		const stringT53NT1W = "zoR5mdO3cBtsFzjb6mez4"
		const MARVELCOINql5140u = await MARVELCOIN.new(uintX7EJDw, stringKSiXCT, stringT53NT1W, {from: accounts[3]});
		const byteExWXrRp = "0x091a0d1e01091117181b1f010a0c11"
		const uintyO6Ni04 = BigInt("1261")
		const addressakgiBcT = accounts[1]
		const uintSjvKeFv = BigInt("968")
		const addressCQk4wsh = accounts[3]
		const uintCjzLodC = BigInt("559")
//		const booltWeOTGl = await MARVELCOINql5140u.approveAndCall.call(addressakgiBcT, uintyO6Ni04, byteExWXrRp, {from: "0x0000000000000000000000000000000000000001"});
//		const booljMU5Ybl = await MARVELCOINql5140u.burnFrom.call(addressCQk4wsh, uintSjvKeFv, {from: accounts[3]});
//		const boolfQfP7Pq = await MARVELCOINql5140u.burn.call(uintCjzLodC, {from: accounts[1]});

		await expect(MARVELCOINql5140u.approveAndCall.call(addressakgiBcT, uintyO6Ni04, byteExWXrRp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintGhZgsmR = BigInt("1583")
		const stringudJ4PXN = "3uy6XmOoef6oYPzcqHZlzgifnpYIah6fZmv9TLXUccgyPbfmbJ4PQa7OjFzI6c5"
		const stringiVnZl0g = "46PuqoekqAn4QoEt1tzOdbehaXSAYphWLwlhygUa3YHTs3oRunpZsueh8N4q"
		const MARVELCOINhjNoM7 = await MARVELCOIN.new(uintGhZgsmR, stringudJ4PXN, stringiVnZl0g, {from: accounts[5]});
		const uintzrWr2nN = BigInt("791")
		const addressxZkL7UI = accounts[1]
		const uintnE6ugm8 = BigInt("234")
		const addresso3G3nzV = accounts[2]
		const uintSQdVyAH = BigInt("1432")
		const uintq4iv88M = BigInt("1404")
		const uintBPUkXd2 = BigInt("162")
		const addresswyqeVTL = accounts[1]
		const bool622RQd = await MARVELCOINhjNoM7.approve.call(addressxZkL7UI, uintzrWr2nN, {from: accounts[5]});
//		const boolfybACIj = await MARVELCOINhjNoM7.burnFrom.call(addresso3G3nzV, uintnE6ugm8, {from: accounts[3]});
//		const booljfcvYuF = await MARVELCOINhjNoM7.burn.call(uintSQdVyAH, {from: accounts[3]});
//		const boolbGRNhJa = await MARVELCOINhjNoM7.burn.call(uintq4iv88M, {from: accounts[3]});
//		const boolQi16MWI = await MARVELCOINhjNoM7.approve.call(addresswyqeVTL, uintBPUkXd2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool622RQd, true)
		await expect(MARVELCOINhjNoM7.burnFrom.call(addresso3G3nzV, uintnE6ugm8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})