const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintr1Zz2f4 = BigInt("1303")
		const stringSx8zjgn = "dGNr46MLePHWYrPJwEqkrwg5"
		const stringoVpep5 = "LCNRVtDjXDFz9aGxDcwOnzjBSQiTqJ1wqkBjAZzpnJs9PfPryJRjpb92g1ETKSTcRn"
		const MARVELCOINEPVdM4U = await MARVELCOIN.new(uintr1Zz2f4, stringSx8zjgn, stringoVpep5, {from: accounts[3]});
		const uinty0mvFrl = BigInt("651")
		const addressP0PieF = accounts[1]
		const uintucUv8x = BigInt("640")
		const addressBQ4hNNT = accounts[2]
//		const boolYChgMp = await MARVELCOINEPVdM4U.transfer.call(addressP0PieF, uinty0mvFrl, {from: accounts[0]});
//		const boolpjHynEn = await MARVELCOINEPVdM4U.burnFrom.call(addressBQ4hNNT, uintucUv8x, {from: accounts[0]});

		await expect(MARVELCOINEPVdM4U.transfer.call(addressP0PieF, uinty0mvFrl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintEy7e1s = BigInt("730")
		const stringKuUb9Zc = "raYwFPbwYrk3RzzCnUbchjIbQyAn6oZebLKXEpbwF9CYK5CYtvWZdWPCntqMoy3zIumUpxuUFgD8UR7Y7RvFt"
		const stringp91XCxd = "3EGY"
		const MARVELCOINWuIHHTh = await MARVELCOIN.new(uintEy7e1s, stringKuUb9Zc, stringp91XCxd, {from: accounts[5]});
		const uinti3CpJRV = BigInt("1047")
		const addressdYFQ5sh = accounts[1]
		const uintjDbMgg1 = BigInt("1511")
		const addressB605o7J = accounts[3]
		const bytenYQZlEZ = "0x111b081b1912051e130f1f0a030b172016190a041c09130c"
		const uintRGwAyIp = BigInt("911")
		const addressmw6Ymhy = accounts[2]
//		const boolvSDemh = await MARVELCOINWuIHHTh.burnFrom.call(addressdYFQ5sh, uinti3CpJRV, {from: accounts[2]});
//		const boolZRlYSHw = await MARVELCOINWuIHHTh.approve.call(addressB605o7J, uintjDbMgg1, {from: accounts[3]});
//		const boolmxVuXUJ = await MARVELCOINWuIHHTh.approveAndCall.call(addressmw6Ymhy, uintRGwAyIp, bytenYQZlEZ, {from: accounts[5]});

		await expect(MARVELCOINWuIHHTh.burnFrom.call(addressdYFQ5sh, uinti3CpJRV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintBpjpUIH = BigInt("1781")
		const stringOHtwvg = "HdHBFhvt4rGr9cfNW2Grrg7YXg5YjGRBgszoQSyyDGQvXUH5yycDnCnrjxeWOpoLDjfCLmH9FjnQ9rgKZAtNa"
		const stringtoXWzO7 = "at8tS0bDGzOsaSG5fv0edcl7yvVEFaS3vbzHqbVT5MNVKNFL9qqTfVovuFETAEumJ6QzF5"
		const MARVELCOINJJWqPJn = await MARVELCOIN.new(uintBpjpUIH, stringOHtwvg, stringtoXWzO7, {from: accounts[0]});
		const uintSpTut9 = BigInt("1030")
		const addressQpdzDZ = accounts[5]
		const uintmJw4EhW = BigInt("233")
		const addressEiqdxbU = accounts[2]
		const addressUkNGLs = "0x0000000000000000000000000000000000000001"
		const byteajHgF5Q = "0x0e090a001a12181113180f1215040f"
		const uintVkI4hwD = BigInt("651")
		const addressoXe06qr = accounts[5]
		const byteZVd1bsq = "0x050316030508010b011b0e191d011818171f1e0f060d041b060a191016041a"
		const uintvTAwukq = BigInt("245")
		const addressjzkCL0S = accounts[4]
		const uintbTlPYfU = BigInt("2030")
		const addressOvyKqp6 = accounts[2]
		const boolk41qfUJ = await MARVELCOINJJWqPJn.approve.call(addressQpdzDZ, uintSpTut9, {from: accounts[3]});
//		const boolBkMmS2 = await MARVELCOINJJWqPJn.transferFrom.call(addressUkNGLs, addressEiqdxbU, uintmJw4EhW, {from: accounts[3]});
//		const boolOqg0h8 = await MARVELCOINJJWqPJn.approveAndCall.call(addressoXe06qr, uintVkI4hwD, byteajHgF5Q, {from: accounts[0]});
//		const boolxZ9atn1 = await MARVELCOINJJWqPJn.approveAndCall.call(addressjzkCL0S, uintvTAwukq, byteZVd1bsq, {from: accounts[3]});
//		const boolGhTGsle = await MARVELCOINJJWqPJn.approve.call(addressOvyKqp6, uintbTlPYfU, {from: accounts[1]});

		assert.equal(boolk41qfUJ, true)
		await expect(MARVELCOINJJWqPJn.transferFrom.call(addressUkNGLs, addressEiqdxbU, uintmJw4EhW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintfjDaOq = BigInt("807")
		const stringaXkzVLm = "6OX3d7CLANktLKrQNvRalgyFdHICu1NSHLqPEaDUdlzzVPqxKS1OIQQd9Q"
		const stringsnyY4XP = "GyTqhXPzEhEhTeTGwThJr8gxsV8tsGufKHindBAV15vKDelwhNTOHIE1NQ0Eezg8e5TsVylmVulm4r22"
		const MARVELCOIND30L17n = await MARVELCOIN.new(uintfjDaOq, stringaXkzVLm, stringsnyY4XP, {from: accounts[4]});
		const uintOAXLTGn = BigInt("1021")
		const uintLyjX0Ci = BigInt("1359")
		const uintJfazDCO = BigInt("1649")
		const addressrxgygr8 = "0x0000000000000000000000000000000000000001"
		const uintvwwu5mc = BigInt("385")
		const addressZbMZ3JZ = accounts[1]
		const uintPDHCzhs = BigInt("1545")
//		const boolNo0wKv = await MARVELCOIND30L17n.burn.call(uintOAXLTGn, {from: accounts[0]});
//		const boolDhOw99G = await MARVELCOIND30L17n.burn.call(uintLyjX0Ci, {from: accounts[1]});
//		const boolsc7aAgr = await MARVELCOIND30L17n.transfer.call(addressrxgygr8, uintJfazDCO, {from: accounts[0]});
//		const boolKNx4DMo = await MARVELCOIND30L17n.approve.call(addressZbMZ3JZ, uintvwwu5mc, {from: accounts[2]});
//		const boolAcw6pn7 = await MARVELCOIND30L17n.burn.call(uintPDHCzhs, {from: accounts[0]});

		await expect(MARVELCOIND30L17n.burn.call(uintOAXLTGn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintnp4jpMV = BigInt("851")
		const stringA5IMPTA = "Po"
		const stringGHpSDTI = "eutZIMAFwNTrrpcE5zropkzYSPzDQe66L7r2U0Mvv9tNhufqJzx8PSllci6RKcN5BXTsaiyjoSwgGQq2AGOMFRXaxokE8r7J"
		const MARVELCOINF24vRzB = await MARVELCOIN.new(uintnp4jpMV, stringA5IMPTA, stringGHpSDTI, {from: accounts[2]});
		const bytegakNEI = "0x0d141b"
		const uintKcn9d3N = BigInt("1001")
		const addressRFyEZDP = accounts[3]
		const bytesghLT07 = "0x0c16121b"
		const uintah7Yo3Z = BigInt("800")
		const addresskNrZ4de = accounts[4]
		const uintzbTsH9v = BigInt("629")
		const addressZPU9jRw = accounts[1]
//		const boolQvhKhMF = await MARVELCOINF24vRzB.approveAndCall.call(addressRFyEZDP, uintKcn9d3N, bytegakNEI, {from: accounts[2]});
//		const boold5vbaSm = await MARVELCOINF24vRzB.approveAndCall.call(addresskNrZ4de, uintah7Yo3Z, bytesghLT07, {from: accounts[2]});
//		const boolOsBhySR = await MARVELCOINF24vRzB.transfer.call(addressZPU9jRw, uintzbTsH9v, {from: accounts[3]});

		await expect(MARVELCOINF24vRzB.approveAndCall.call(addressRFyEZDP, uintKcn9d3N, bytegakNEI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintkA08pDy = BigInt("468")
		const stringztuSl7S = "Pob"
		const stringZhKthou = "WyObdUPD"
		const MARVELCOINBbdYyGa = await MARVELCOIN.new(uintkA08pDy, stringztuSl7S, stringZhKthou, {from: "0x0000000000000000000000000000000000000001"});
		const uintA3fhM8g = BigInt("250")
		const uintbxNy3Kr = BigInt("1594")
		const addressZCYr8W = accounts[5]
		const uintXSEXEw = BigInt("1051")
		const addressSmDLap = accounts[1]
		const uinteHco3PS = BigInt("218")
		const addressNpGCNFZ = accounts[3]
		const uintruinNw = BigInt("1331")
		const addressBZiCEFz = accounts[3]
		const booljfuTYLA = await MARVELCOINBbdYyGa.burn.call(uintA3fhM8g, {from: accounts[3]});
		const boolpPaNWKU = await MARVELCOINBbdYyGa.burnFrom.call(addressZCYr8W, uintbxNy3Kr, {from: accounts[4]});
		const booltnhM2Co = await MARVELCOINBbdYyGa.approve.call(addressSmDLap, uintXSEXEw, {from: accounts[0]});
		const boolLhDW1vk = await MARVELCOINBbdYyGa.transfer.call(addressNpGCNFZ, uinteHco3PS, {from: accounts[1]});
		const boolHpzeHzn = await MARVELCOINBbdYyGa.burnFrom.call(addressBZiCEFz, uintruinNw, {from: accounts[2]});
	});
})