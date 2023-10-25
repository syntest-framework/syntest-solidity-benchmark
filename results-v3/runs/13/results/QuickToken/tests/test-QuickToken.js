const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addresszDpDmBI = accounts[0]
		const addressNKVLdCI = "0x0000000000000000000000000000000000000001"
		const QuickTokenidRx07 = await QuickToken.new(addresszDpDmBI, addressNKVLdCI, {from: accounts[0]});
		const uintGLFp11 = BigInt("1308")
		const addressZHgvjD5 = accounts[5]
		const uinttq12Oo = BigInt("647")
		const addressmUUyDrT = accounts[2]
		const uintjV4aV5S = BigInt("645")
		const addressRW06v7b = accounts[2]
		const boolhloFgPJ = await QuickTokenidRx07.transfer.call(addressZHgvjD5, uintGLFp11, {from: accounts[0]});
		const boolgRmTD3z = await QuickTokenidRx07.approve.call(addressmUUyDrT, uinttq12Oo, {from: accounts[3]});
		const addressqtcpB1O = await QuickTokenidRx07.mint.call(addressRW06v7b, uintjV4aV5S, {from: accounts[2]});

		assert.equal(boolgRmTD3z, true)
		assert.equal(boolhloFgPJ, true)
		await expect(QuickTokenidRx07.mint.call(addressRW06v7b, uintjV4aV5S, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressj2vvPq5 = accounts[2]
		const addressNoBBJiJ = accounts[2]
		const QuickTokenS7bwqkG = await QuickToken.new(addressj2vvPq5, addressNoBBJiJ, {from: accounts[1]});
		const addressEbd41yk = accounts[1]
		const addressYoYIrdL = accounts[2]
		const uintkuEzYCg = BigInt("2031")
		const addressfq60sG = accounts[0]
		const uintXhW6Cer = BigInt("567")
		const addresshJ5tV9B = accounts[2]
		const addressYd60z4g = accounts[1]
		const addresshSwjFYz = accounts[1]
		const uintCaT2vBt = await QuickTokenS7bwqkG.balanceOf.call(addressEbd41yk, {from: accounts[2]});
		const addressWeT1KVR = await QuickTokenS7bwqkG.setMinter.call(addressYoYIrdL, {from: accounts[0]});
		const boolFVgOGDF = await QuickTokenS7bwqkG.transfer.call(addressfq60sG, uintkuEzYCg, {from: accounts[5]});
		const addressfbIw947 = await QuickTokenS7bwqkG.mint.call(addresshJ5tV9B, uintXhW6Cer, {from: "0x0000000000000000000000000000000000000001"});
		const uintYBh5T8o = await QuickTokenS7bwqkG.allowance.call(addresshSwjFYz, addressYd60z4g, {from: accounts[3]});

		assert.equal(uintCaT2vBt, BigInt("0"))
		await expect(QuickTokenS7bwqkG.setMinter.call(addressYoYIrdL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressoWHN16U = accounts[0]
		const addressJvrLOXa = accounts[4]
		const QuickTokenfKyMdL5 = await QuickToken.new(addressoWHN16U, addressJvrLOXa, {from: accounts[4]});
		const uintp9S5BXF = BigInt("1033")
		const addressHaUDCEd = accounts[0]
		const uint0zvToA = BigInt("177")
		const addresszlR6Z3E = accounts[1]
		const uintz3HHbSP = BigInt("1431")
		const addressxHtcNT = accounts[2]
		const boolhVQLOqt = await QuickTokenfKyMdL5.transfer.call(addressHaUDCEd, uintp9S5BXF, {from: accounts[5]});
		const boolp8CbgLQ = await QuickTokenfKyMdL5.transfer.call(addresszlR6Z3E, uint0zvToA, {from: "0x0000000000000000000000000000000000000001"});
		const boolnxNEGlK = await QuickTokenfKyMdL5.transfer.call(addressxHtcNT, uintz3HHbSP, {from: accounts[2]});

		await expect(QuickTokenfKyMdL5.transfer.call(addressHaUDCEd, uintp9S5BXF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressKYYi0Bi = accounts[4]
		const addresspU1hLIn = accounts[4]
		const QuickTokenCuCGym = await QuickToken.new(addressKYYi0Bi, addresspU1hLIn, {from: accounts[4]});
		const uintpIpAs2w = BigInt("1198")
		const addresszheoV7I = accounts[1]
		const addressVDYKubP = accounts[3]
		const uintd436Jqb = BigInt("896")
		const addressnXmm9mu = accounts[0]
		const uintDLkIv4u = BigInt("1394")
		const addressjmju8TY = accounts[4]
		const addressPhNlGtV = accounts[0]
		const uintcRmMIyl = BigInt("1330")
		const addressAC7mWNN = accounts[3]
		const uintwuymaFc = BigInt("846")
		const addressxUzbPvf = accounts[1]
		const boolSx7VKIi = await QuickTokenCuCGym.transferFrom.call(addressVDYKubP, addresszheoV7I, uintpIpAs2w, {from: accounts[3]});
		const addressTedDkC9 = await QuickTokenCuCGym.mint.call(addressnXmm9mu, uintd436Jqb, {from: accounts[4]});
		const boold5Nfx4R = await QuickTokenCuCGym.transfer.call(addressjmju8TY, uintDLkIv4u, {from: accounts[2]});
		const uintSu5H2fC = await QuickTokenCuCGym.balanceOf.call(addressPhNlGtV, {from: accounts[1]});
		const boolaEq2kYY = await QuickTokenCuCGym.approve.call(addressAC7mWNN, uintcRmMIyl, {from: accounts[4]});
		const boollHfWWFV = await QuickTokenCuCGym.approve.call(addressxUzbPvf, uintwuymaFc, {from: accounts[5]});

		await expect(QuickTokenCuCGym.transferFrom.call(addressVDYKubP, addresszheoV7I, uintpIpAs2w, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresstL9NYi = "0x0000000000000000000000000000000000000001"
		const addresswzGhBdy = accounts[2]
		const QuickTokenFnzQbz3 = await QuickToken.new(addresstL9NYi, addresswzGhBdy, {from: "0x0000000000000000000000000000000000000001"});
		const uintcPP4Ug4 = BigInt("366")
		const addressP1IFIqA = accounts[3]
		const addressL2lZtuy = accounts[3]
		const uinttdjrLgH = BigInt("166")
		const addressjvyZx2a = "0x0000000000000000000000000000000000000001"
		const uinti7JNve9 = BigInt("152")
		const addressVy7Os4p = accounts[0]
		const boolxL0z9l = await QuickTokenFnzQbz3.transferFrom.call(addressL2lZtuy, addressP1IFIqA, uintcPP4Ug4, {from: accounts[0]});
		const addressJyXzUG = await QuickTokenFnzQbz3.mint.call(addressjvyZx2a, uinttdjrLgH, {from: accounts[3]});
		const boolBDH2V4w = await QuickTokenFnzQbz3.transfer.call(addressVy7Os4p, uinti7JNve9, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for QuickToken', async () => {
		const addresscE8iVBy = accounts[0]
		const addressizJa3tk = "0x0000000000000000000000000000000000000001"
		const QuickTokenidRx07 = await QuickToken.new(addresscE8iVBy, addressizJa3tk, {from: accounts[0]});
		const uintibkjFVw = BigInt("1308")
		const addressFEhjcZ6 = accounts[5]
		const addressfxFsYD9 = accounts[4]
		const addresskAlVLqE = accounts[4]
		const uintla7hgpP = BigInt("627")
		const addressT9TSABI = accounts[2]
		const uintO4T2xU9 = BigInt("645")
		const addressG9GmHuf = accounts[2]
		const boolhloFgPJ = await QuickTokenidRx07.transfer.call(addressFEhjcZ6, uintibkjFVw, {from: accounts[0]});
		const uintu7Ulfw = await QuickTokenidRx07.allowance.call(addresskAlVLqE, addressfxFsYD9, {from: accounts[2]});
		const boolgRmTD3z = await QuickTokenidRx07.approve.call(addressT9TSABI, uintla7hgpP, {from: accounts[3]});
		const addressqtcpB1O = await QuickTokenidRx07.mint.call(addressG9GmHuf, uintO4T2xU9, {from: accounts[2]});

		assert.equal(boolgRmTD3z, true)
		assert.equal(boolhloFgPJ, true)
		assert.equal(uintu7Ulfw, BigInt("0"))
		await expect(QuickTokenidRx07.mint.call(addressG9GmHuf, uintO4T2xU9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressUpJ3FaK = accounts[0]
		const addresslyRvHtp = "0x0000000000000000000000000000000000000001"
		const QuickTokenI3UGWTA = await QuickToken.new(addressUpJ3FaK, addresslyRvHtp, {from: accounts[2]});
		const uintLclypHU = BigInt("891")
		const addressOKPCgby = accounts[3]
		const uintpZ1UxyZ = BigInt("1848")
		const addressxVtJaK3 = accounts[0]
		const addresserFYizG = accounts[5]
		const boolHjAKmHe = await QuickTokenI3UGWTA.approve.call(addressOKPCgby, uintLclypHU, {from: "0x0000000000000000000000000000000000000001"});
		const boolP4iSGmZ = await QuickTokenI3UGWTA.transferFrom.call(addresserFYizG, addressxVtJaK3, uintpZ1UxyZ, {from: accounts[2]});

		assert.equal(boolHjAKmHe, true)
		await expect(QuickTokenI3UGWTA.transferFrom.call(addresserFYizG, addressxVtJaK3, uintpZ1UxyZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresskqMqZ2L = "0x0000000000000000000000000000000000000001"
		const addressEiPRd2G = "0x0000000000000000000000000000000000000001"
		const QuickTokenhIaGrVT = await QuickToken.new(addresskqMqZ2L, addressEiPRd2G, {from: accounts[0]});
		const uintDbDmUk = BigInt("661")
		const addressBVC8HJh = "0x0000000000000000000000000000000000000000"
		const uintkncY6b9 = BigInt("774")
		const addressZDKXUe = accounts[4]
		const boolJTrr9Bc = await QuickTokenhIaGrVT.transfer.call(addressBVC8HJh, uintDbDmUk, {from: accounts[4]});
		const addressQOQPCYK = await QuickTokenhIaGrVT.mint.call(addressZDKXUe, uintkncY6b9, {from: accounts[2]});

		await expect(QuickTokenhIaGrVT.transfer.call(addressBVC8HJh, uintDbDmUk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressQBOVEuU = accounts[1]
		const addresszsG8zMd = accounts[1]
		const QuickTokenNGImHfv = await QuickToken.new(addressQBOVEuU, addresszsG8zMd, {from: accounts[0]});
		const addresstMLUH6d = accounts[0]
		const addressa2Zhvqe = accounts[5]
		const addresshV8hyMl = accounts[0]
		const uintuIouzlV = BigInt("961")
		const addressHjp9XJ = "0x0000000000000000000000000000000000000001"
		const uintrevc5yb = BigInt("202")
		const address5Iy7wk = accounts[5]
		const uintv2A3uV = await QuickTokenNGImHfv.balanceOf.call(addresstMLUH6d, {from: accounts[0]});
		const uintWimLrD = await QuickTokenNGImHfv.allowance.call(addresshV8hyMl, addressa2Zhvqe, {from: accounts[4]});
		const addressZasXSki = await QuickTokenNGImHfv.mint.call(addressHjp9XJ, uintuIouzlV, {from: accounts[1]});
		const addressGEVUScs = await QuickTokenNGImHfv.mint.call(address5Iy7wk, uintrevc5yb, {from: accounts[3]});

		assert.equal(uintWimLrD, BigInt("0"))
		assert.equal(uintv2A3uV, BigInt("0"))
		await expect(QuickTokenNGImHfv.mint.call(address5Iy7wk, uintrevc5yb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresse2BjiHN = accounts[1]
		const addressJhlOadJ = accounts[1]
		const QuickTokenNGImHfv = await QuickToken.new(addresse2BjiHN, addressJhlOadJ, {from: accounts[0]});
		const addressB2eo7iw = accounts[0]
		const uintoYcRP8P = BigInt("944")
		const addressKNVZOIU = "0x0000000000000000000000000000000000000000"
		const uintL0OkEWi = BigInt("1023")
		const addressS9TsjIQ = "0x0000000000000000000000000000000000000001"
		const addressJ8kag8V = accounts[2]
		const uintG7R6yDB = BigInt("1694")
		const addressvXgxsOO = accounts[0]
		const addressKotzrEQ = accounts[4]
		const uintv2A3uV = await QuickTokenNGImHfv.balanceOf.call(addressB2eo7iw, {from: accounts[0]});
		const addressZasXSki = await QuickTokenNGImHfv.mint.call(addressKNVZOIU, uintoYcRP8P, {from: accounts[1]});
		const boolwRTxSwN = await QuickTokenNGImHfv.transferFrom.call(addressJ8kag8V, addressS9TsjIQ, uintL0OkEWi, {from: accounts[4]});
		const boolcpp5upL = await QuickTokenNGImHfv.transferFrom.call(addressKotzrEQ, addressvXgxsOO, uintG7R6yDB, {from: accounts[1]});

		assert.equal(uintv2A3uV, BigInt("0"))
		await expect(QuickTokenNGImHfv.mint.call(addressKNVZOIU, uintoYcRP8P, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})